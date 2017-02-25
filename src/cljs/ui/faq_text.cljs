(ns ui.faq-text
  (:require-macros [shared.debug :refer [mdbg mdbg-sample]])
  (:require [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom]))


(def faq-text
  [(dom/h1 "What is EthereanMind?")
   (dom/p "EthereanMind is a dapp (a \"Decentralized Autonomous Application\") and runs on the ethereum blockchain. This means that no \"web server\" is involved in running this application (In this beta version, there are still static files being hosted from a traditional web server.)")
   (dom/p "EthereanMind is a tool to get the \"Temperature\" of the ethereum community by allowing users to propose issues that are on their mind, which are condensed into a prioritized list of the top ten items. To participate in the voting, holders of ether currency temporarily deposit they stake into the EthereanMind contracts.")
   (dom/h1 "Why did you create EthereanMind?")
   (dom/p "Ethereum is a great tool for experimenting with concepts of autonomous voting, decentralized organizations, decentralized decision making, as well as new types of governance models. EthereanMind is an attempt to create a minimally-viable smart contract system that illustrates these possibilities.")
   (dom/h1 "Does someone who stakes more money get a bigger vote? Why?")
   (dom/p "Yes, EthereanMind is a pure plutocracy: Rich people get a larger vote. The dapp works that way because it is by far the easiest system to implement. In fact, developing an egalitarian voting system on blockchains is still largely an unsolved research problem. The reason for this is that it is very easy on blockchain systems for wealthy users to simply split their funds into multiple accounts and impersonate multiple people.")
   (dom/h1 "Do you plan on making any money with EthereanMind?")
   (dom/p "No, this app, once it's deployed in the public network, will have absolutely no fees and all stakers will be able to recover 100% funds (minus ethereum network fees.) At that point, we will make the official smart contracts public and provide cryptographic proof that the published code matches the deployed system. Any ethereum programmers will then be able to verify that all staked funds are safe.")
   (dom/h1 "How does EthereumMind staking work, exactly?")
   (dom/p "There is a separate, very simplle staking contract that has a \"Deposit\" functon ethereum users can send their stake to. The stake can immediately be used for voting. At the point of deposit, a timer is set for 30 days that has to run out before deposted funds can be withdrawn. On request, deposited funds are returned to the sending address. (Note that a second deposit from the same account will reset the clock and require the full 30 day wait again.)")
   (dom/p "The staking contract is extremely generic and has public functions that can be accessed from other contracts, for free. Ethereum developers: you are more than welcome to write other dapps that piggyback on the EtherenMind staking deposits- Let's build a smart contact ecosystem!")
   (dom/h1 "How do EthereanMind Proposals work?")
   (dom/p "Anyone who has deposited stake into EthereanMind is welcome to submit new proposals for items in the \"Current Items\" and which will be mapped onto the brain animation in proportion to their votes. All stake from the user will automatically be used to vote up this proposed item. Other users can vote proposed items up or down as well. However, only one proposal action can be done by a staker each day (though you're welcome to stake from multiple accounts if you want to perform multple proposal actions.)")
   (dom/p "Roughly once a day, the highest voted proposal will replace the worst of the 10 items in the main items list.")
   (dom/h1 "How do EtherenMind Items work?")
   (dom/p "Once an item has graduated from the daily list of proposed items to the \"top ten list\", it can be voted on again. This vote determines how large a brain region it maps to, as well as to make sure it doesn't fall off the bottom of the list. A single staker can only vote up one item, as well as down one item, at a time. After an item is voted on, a user's stake will continue to affect that item indefinitely, as long as the given item remains on the list. The \"current item list\" additionally discounts older votes over time (in the same manner as you're used to on sites like reddit/ycominator/etc)")])
