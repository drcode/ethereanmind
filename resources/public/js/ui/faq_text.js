// Compiled by ClojureScript 1.9.229 {}
goog.provide('ui.faq_text');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om_tools.dom');
ui.faq_text.faq_text = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.div,({"key": "zup", "style": ({"display": "flex", "alignItems": "center", "flexDirection": "column", "margin": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.img(({"src": "lisperati.png", "style": ({"marginBottom": "0.7rem"})})),cljs.core.apply.call(null,React.DOM.table,({"style": ({"fontSize": "0.7rem", "padding": "0.3rem", "margin": "0.3rem", "backgroundColor": "black"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.tbody,om_tools.dom.element.call(null,React.DOM.tr,React.DOM.td(({"style": ({"textAlign": "right"})}),"Twitter:"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,React.DOM.a(({"target": "_blank", "href": "http://twitter.com/lisperati"}),"@lisperati"),cljs.core.PersistentVector.EMPTY)],null))),(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.tr,React.DOM.td(({"style": ({"textAlign": "right"})}),"Blog:"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,React.DOM.a(({"target": "_blank", "href": "http://cointagion.com"}),"cointagion.com"),cljs.core.PersistentVector.EMPTY)],null))),om_tools.dom.element.call(null,React.DOM.tr,React.DOM.td(({"style": ({"textAlign": "right"})}),"Github:"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,React.DOM.a(({"target": "_blank", "href": "http://github.com/drcode"}),"drcode"),cljs.core.PersistentVector.EMPTY)],null))),om_tools.dom.element.call(null,React.DOM.tr,React.DOM.td(({"style": ({"textAlign": "right"})}),"Reddit:"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,React.DOM.a(({"target": "_blank", "href": "https://www.reddit.com/user/drcode"}),"u/drcode"),cljs.core.PersistentVector.EMPTY)],null)))],null)))],null))))],null)))),React.DOM.h2(({"key": (0)}),"What is EthereanMind?"),React.DOM.p(({"key": (1)}),"EthereanMind is a dapp (a \"Decentralized Autonomous Application\") and runs on the ethereum blockchain. This means that no \"web server\" is involved in running this application (In this beta version, there are still static files being hosted from a traditional web server.)"),React.DOM.p(({"key": (2)}),"EthereanMind is a tool to get the \"Temperature\" of the ethereum community by allowing users to propose issues that are on their mind, which are condensed into a prioritized list of the top ten items. To participate in the voting, holders of ether currency temporarily deposit they stake into the EthereanMind contracts."),React.DOM.p(({"key": (22)}),"(Note: Until April 28th stakes are limited to a single ether finney, i.e. one penny USD, so that additional auditing of the staking system can first be performed.)"),React.DOM.h2(({"key": (3)}),"Why did you create EthereanMind?"),React.DOM.p(({"key": (4)}),"Ethereum is a great tool for experimenting with concepts of autonomous voting, decentralized organizations, decentralized decision making, as well as new types of governance models. EthereanMind is an attempt to create a minimally-viable smart contract system that illustrates these possibilities."),React.DOM.h2(({"key": (5)}),"Does someone who stakes more money get a bigger vote? Why?"),React.DOM.p(({"key": (6)}),"Yes, EthereanMind is a pure plutocracy: Rich people get a larger vote. The dapp works that way because it is by far the easiest system to implement. In fact, developing an egalitarian voting system on blockchains is still largely an unsolved research problem. The reason for this is that it is very easy on blockchain systems for wealthy users to simply split their funds into multiple accounts and impersonate multiple people."),React.DOM.h2(({"key": (7)}),"Do you plan on making any money with EthereanMind?"),React.DOM.p(({"key": (8)}),"No, this app has absolutely no fees and all stakers will be able to recover 100% funds (minus ethereum network fees.) At that point, I will make the official smart contracts public and provide cryptographic proof that the published code matches the deployed system. Any ethereum programmers will then be able to verify that all staked funds are safe."),React.DOM.h2(({"key": (9)}),"How does EthereanMind staking work, exactly?"),React.DOM.p(({"key": (10)}),"There is a separate, very simple staking contract that has a \"Deposit\" function ethereum users can send their stake to. The stake can immediately be used for voting. At the point of deposit, a timer is set for 30 days that has to run out before deposted funds can be withdrawn. On request, deposited funds are returned to the sending address. (Note that a second deposit from the same account will reset the clock and require the full 30 day wait again.)"),React.DOM.p(({"key": (11)}),"The staking contract is extremely generic and has public functions that can be accessed from other contracts, for free. Ethereum developers: you are more than welcome to write other dapps that piggyback on the EtherenMind staking deposits- Let's build a smart contact ecosystem!"),React.DOM.h2(({"key": (12)}),"How do EthereanMind Proposals work?"),React.DOM.p(({"key": (13)}),"Anyone who has deposited stake into EthereanMind is welcome to submit new proposals for items in the \"Current Items\" and which will be mapped onto the brain animation in proportion to their votes. All stake from the user will automatically be used to vote up this proposed item. Other users can vote proposed items up or down as well. However, only one proposal action can be done by a staker each day (though you're welcome to stake from multiple accounts if you want to perform multple proposal actions.)"),React.DOM.p(({"key": (14)}),"Roughly once a day, the highest voted proposal will replace the worst of the 10 items in the main items list."),React.DOM.h2(({"key": (15)}),"How do EtherenMind Items work?"),React.DOM.p(({"key": (16)}),"Once an item has graduated from the daily list of proposed items to the \"top ten list\", it can be voted on again. This vote determines how large a brain region it maps to, as well as to make sure it doesn't fall off the bottom of the list. A single staker can only vote up one item, as well as down one item, at a time. After an item is voted on, a user's stake will continue to affect that item indefinitely, as long as the given item remains on the list. The \"current item list\" additionally discounts older votes over time (in the same manner as you're used to on sites like reddit/ycominator/etc)"),React.DOM.h2(({"key": (17)}),"Where can I get updates on this project, and learn more about future plans?"),cljs.core.apply.call(null,React.DOM.p,({"key": (18)}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["Check out my ",React.DOM.a(({"target": "_blank", "href": "http://cointagion.com"}),"blog")," for deeper technical information or browse the ",React.DOM.a(({"target": "_blank", "href": "https://github.com/drcode/ethereanmind"}),"source code"),"."],null))))], null);

//# sourceMappingURL=faq_text.js.map?rel=1488162785233