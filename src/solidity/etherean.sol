pragma solidity ^0.4.8;
contract StakingContract {
  struct Deposit {
    uint value;
    uint depositTime;
  }
  address[] public depositList;
  mapping (address => Deposit) public deposits;
  function deposit() payable {
    var d=deposits[msg.sender];
    if (d.depositTime==0)
      depositList.push(msg.sender);
    d.value+=msg.value;
    d.depositTime=block.timestamp;
  }
  function withdraw() {
    var d=deposits[msg.sender];
    if (block.timestamp-d.depositTime<30 days)
      throw;
    var value=d.value;
    d.value=0;
    if(!msg.sender.send(value))
      throw;
  }
  function depositLength() returns (uint) {
      return depositList.length;
  }
}
contract Etherean {
  struct DepositVoteInfo {
    uint proposalIndex;
    uint itemIndex;
    bool preexisting;
  }
  struct Deposit {
    uint proposalVoteTime;
    DepositVoteInfo[2] voteInfo;
  }
  struct ItemVoteInfo {
    uint votes;
    uint votesToday;
  }
  struct Item {
    uint proposalIndex;
    uint updateTime;
    ItemVoteInfo[2] voteInfo;
  }
  struct Proposal {
    uint upvotes;
    uint downvotes;
    uint submitTime;
    uint submitBlock;
  }
  event ProposalMessage(uint indexed proposalIndex,bytes32[4] message);
  event NewItem(uint indexed itemIndex);
  Item[10] public items;
  Proposal[] public proposals;
  uint[] public logItems;
  uint public bestProposalIndex;
  uint public worstItemIndex;
  mapping (address => Deposit) public deposits;
  StakingContract public stakingContract;
  uint public debugTime;
  bool constant debug=true;
  function Etherean() {
    bestProposalIndex=uint(-1);
    stakingContract=new StakingContract();
    debugTime=block.timestamp;
    proposals.push(Proposal(0,0,0,0));    
  }
  function startOfDay() constant returns (uint time) {
    if (debug)
      return debugTime/(1 days)*(1 days);
    else
      return block.timestamp/(1 days)*(1 days);
  }
  function isDayOld(uint time) returns (bool) {
    if (debug) 
      return debugTime-time>=(1 days);
    else
      return block.timestamp-time>=(1 days);
  }
  function setDebugTime(uint time) {
    debugTime=time;
  }
  function addProposal(bytes32[4] message){
    var proposalIndex=proposals.length;
    ProposalMessage(proposalIndex, message);
    proposals.push(Proposal(0,0,startOfDay(),block.number));
    voteOnProposal(proposalIndex,true);
  }
  function proposalRating(uint proposalIndex) returns (uint rating){
    if (proposalIndex==uint(-1))
      return 1;
    Proposal p=proposals[proposalIndex];
    uint votes=p.upvotes+p.downvotes;
    if (votes==0)
      return 2;
    if (p.upvotes*100<votes*60)
      return 0;
    return 3+p.upvotes-p.downvotes;
  }
  function proposalIsActive(uint proposalIndex) returns (bool isActive) {
    Proposal p=proposals[proposalIndex];
    return !isDayOld(p.submitTime);
  }
  function transitionDay() {
    //Called every time the vote on a proposal changes. Checks if the best proposal is due, and if so moves it to the items list
    if(bestProposalIndex==uint(-1))
        return;
    if (!proposalIsActive(bestProposalIndex)) {
        delete items[worstItemIndex];
        var i=items[worstItemIndex];
        i.proposalIndex=bestProposalIndex;
        i.updateTime=startOfDay();
        
        bestProposalIndex=uint(-1);
    }
  }
  function transitionBestProposal(uint candidateProposalIndex){
    //Called every time the vote on a proposal changes. Checks if the voted proposal replaces the "best" proposal.
    transitionDay();
    if (bestProposalIndex==uint(-1)) {
      bestProposalIndex=candidateProposalIndex;
    }
    else {
      uint candidateRating=proposalRating(candidateProposalIndex);
      uint bestRating=proposalRating(bestProposalIndex);
      if (candidateRating>bestRating) {
        bestProposalIndex=candidateProposalIndex;
      }
    }
  }

  function log(uint item) {
    logItems.push(item);
  }

  function logLength() returns (uint) {
      return logItems.length;
  }

  function useUpProposalVote() returns (bool) {
    var d=deposits[msg.sender];
    var sod=startOfDay();
    if (!debug && d.proposalVoteTime==sod)
      return false;
    d.proposalVoteTime=sod;
    return true;
  }
    
  function voteOnProposal(uint proposalIndex,bool up) {
    if (!proposalIsActive(proposalIndex))
      throw;
    if (!useUpProposalVote())
      throw;
      
    var (value,_)=stakingContract.deposits(msg.sender);
    if (up) {
      proposals[proposalIndex].upvotes+=value;
    } 
    else {
      proposals[proposalIndex].downvotes+=value;
    }
    transitionBestProposal(proposalIndex);
  }
  function itemRating(uint itemIndex) returns (int rating) {
    var item=items[itemIndex];
    return int(item.voteInfo[1].votes)-int(item.voteInfo[0].votes);        
  }
  function EstimatedItemRating(uint itemIndex) returns (int rating) {
    rating=itemRating(itemIndex);
    var item=items[itemIndex];
    return rating*7/10+int(item.voteInfo[1].votesToday)-int(item.voteInfo[0].votesToday);        
  }
  function incrementItem(uint itemIndex) {
    //Gets an item to be "current" by (1) updating its vote tally and (2) possibly making it the "worst" item
    var item=items[itemIndex];
    var time=startOfDay();
    if(item.updateTime!=time) {
      for(var i=0;i<2;i++) {
        var vi=item.voteInfo[i];
        vi.votes=vi.votes*7/10+vi.votesToday;
      }
      item.updateTime=time;
      if (itemIndex!=worstItemIndex) {
        incrementItem(worstItemIndex);
        if(itemRating(itemIndex)<itemRating(worstItemIndex))
          worstItemIndex=itemIndex;
      }
    }
  }
  function voteOnItem(uint itemIndex,uint up) {
    var d=deposits[msg.sender];
    var (value,_)=stakingContract.deposits(msg.sender);
    var vi=d.voteInfo[up];
    if (vi.preexisting) {
      incrementItem(vi.itemIndex);
      var oldItem=items[vi.itemIndex];
      if (vi.proposalIndex==oldItem.proposalIndex)
        oldItem.voteInfo[up].votesToday-=value;
    }
    else {
        vi.preexisting=true;
    }
    incrementItem(itemIndex);
    var curItem=items[itemIndex];
    vi.proposalIndex=curItem.proposalIndex;
    vi.itemIndex=itemIndex;
    curItem.voteInfo[up].votesToday+=value;
    transitionDay();
  }

  function proposalsLength() returns (uint length) {
    return proposals.length;
  }
  function itemVoteInfo(uint item, uint index) constant returns (uint votes, uint votesToday) {
    var i = items[item].voteInfo[index];
    return (i.votes, i.votesToday);
  }
  function depositVoteInfo(address depositor,uint index) constant returns (uint proposalIndex,uint itemIndex,bool preexisting){
    var i= deposits[depositor].voteInfo[index];
    return (i.proposalIndex,i.itemIndex,i.preexisting);
  }
}
contract User2 {
    function voteProposal(Etherean etherean) {
        
    }
}
contract ATest {
    bool _fail;
    Etherean etherean;
    StakingContract staking;
    function passed() public payable returns (bool) {
        return !_fail;
    }
    function assert(bool b){
        _fail=_fail || (!b);
    }
    function log() payable returns (uint[10] arr) {
        for (var n=0;n<etherean.logLength();n++) 
            arr[n]=etherean.logItems(n);
    }
    function ATest() payable {
        etherean=new Etherean();
        staking=etherean.stakingContract();
        staking.deposit.value(0.1 ether)();
        bytes32[4] memory arr;
        arr[0]="foo";
        etherean.addProposal(arr);
        assert(etherean.proposalsLength()==1);
        var (a,b,c,d)=etherean.proposals(0);
        assert(a>0);
        etherean.setDebugTime(block.timestamp+(1 days));
        arr[0]="bar";
        var (e,f)=etherean.items(0);
        assert(f==0);
        etherean.addProposal(arr);
        assert(etherean.bestProposalIndex()==1);
        assert(!etherean.proposalIsActive(0));
        assert(etherean.proposalIsActive(1));
        (e,f)=etherean.items(0);
        assert(f!=0);
        etherean.voteOnItem(0,1);
        var (p,ii,pe)=etherean.depositVoteInfo(this,1);
        assert(pe);
        var (v,vt)=etherean.itemVoteInfo(0,1);
        assert(vt!=0);
        etherean.setDebugTime(block.timestamp+(2 days));
        arr[0]="baz";
    }
    function foo() payable {
        etherean.voteOnItem(1,1);
        var (p,ii,pe)=etherean.depositVoteInfo(this,1);
        assert(pe);
        assert(etherean.worstItemIndex()==1);
        var (v,vt)=etherean.itemVoteInfo(1,1);
        assert(vt!=0);
        bytes32[4] memory arr;
        arr[0]="baz";
        etherean.addProposal(arr);
        assert(etherean.bestProposalIndex()==2);
        assert(!etherean.proposalIsActive(1));
        assert(etherean.proposalIsActive(2));
        var (e,f)=etherean.items(1);
        assert(e!=0);
    }
}
