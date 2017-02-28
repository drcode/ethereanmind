// Compiled by ClojureScript 1.9.229 {}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('ui.motion');
goog.require('ui.util');
goog.require('ui.contract');
goog.require('ui.brain');
goog.require('om.next');
goog.require('shared.debug');
goog.require('ui.faq_text');
goog.require('ui.parser_async');
goog.require('clojure.string');
goog.require('blueprint_cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
ui.core.brain_vertices = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__343174){
var vec__343175 = p__343174;
var x = cljs.core.nth.call(null,vec__343175,(0),null);
var y = cljs.core.nth.call(null,vec__343175,(1),null);
var z = cljs.core.nth.call(null,vec__343175,(2),null);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,(y - 0.01),z],null));
}),cljs.core.concat.call(null,cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))),cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))))));
ui.core.brain_faces = cljs.core.map.call(null,(function (p__343178){
var vec__343179 = p__343178;
var a = cljs.core.nth.call(null,vec__343179,(0),null);
var b = cljs.core.nth.call(null,vec__343179,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,(function (a,b){
var baddies = cljs.core.PersistentHashSet.fromArray([(0),(284),(34),(35),((284) + (35)),((284) + (34))], true);
if((cljs.core.not.call(null,baddies.call(null,a))) && (cljs.core.not.call(null,baddies.call(null,b)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return null;
}
}),cljs.core.concat.call(null,cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"faces","faces",-73909544)], null)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(284)),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"faces","faces",-73909544)], null)))),cljs.core.rest.call(null,cljs.core.concat.call(null,cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"faces","faces",-73909544)], null)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(284)),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"faces","faces",-73909544)], null))))))));
if(typeof web3 !== 'undefined'){
ui.core.web3 = (new Web3(web3.currentProvider));

ui.core.contract = (function ui$core$contract(abi,address){
return ui.core.web3.eth.contract(JSON.parse(abi)).at(address);
});

ui.core.etherean = ui.core.contract.call(null,ui.contract.etherean_abi,ui.contract.etherean_address);
} else {
}
ui.core.offline = false;
ui.core.max_items = (10);
ui.core.starting_items = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Proof of Stake transition","Mainstream DAPP use","Smart contract security","Government regulation","Prediction Markets","Scalability","Progress on Mobile Clients","Vitalik's latest t-shirt","Bitcoin Maximalists","Moon"], null);
if(typeof ui.core.app_state !== 'undefined'){
} else {
ui.core.app_state = cljs.core.atom.call(null,(function (){var id = om.next.tempid.call(null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),cljs.core.PersistentArrayMap.fromArray([id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),true], null)], true, false),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),id], null)], null),new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),cljs.core.PersistentVector.EMPTY], null);
})());
}
ui.core.css_percent = (function ui$core$css_percent(part,whole){
return [cljs.core.str(((part * (100)) / whole)),cljs.core.str("%")].join('');
});
ui.core.mining_spinner = (function ui$core$mining_spinner(){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"height": "50px", "width": "50px"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.spinner.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary"], null))],null)))),React.DOM.span(({"className": "pt-icon-build pt-icon-large", "style": ({"padding": "14px"})}))],null))));
});
ui.core.max_digits = (5);
ui.core.format_vote_number = (function ui$core$format_vote_number(num){
var whole_digits = cljs.core.count.call(null,[cljs.core.str((num | (0)))].join(''));
var total_digits = cljs.core.count.call(null,[cljs.core.str(num)].join(''));
if((num === (0))){
return "0";
} else {
if((whole_digits > (ui.core.max_digits - (2)))){
return [cljs.core.str((num | (0)))].join('');
} else {
var s = cljs.core.subs.call(null,[cljs.core.str(num)].join(''),(0),ui.core.max_digits);
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,s),"0")){
var G__343182 = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
s = G__343182;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,s),".")){
return cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
} else {
return s;
}
}
} else {
return null;
}
break;
}

}
}
});
/**
 * @constructor
 */
ui.core.Item = (function ui$core$Item(){
var this__40608__auto__ = this;
React.Component.apply(this__40608__auto__,arguments);

if(!((this__40608__auto__.initLocalState == null))){
this__40608__auto__.state = this__40608__auto__.initLocalState();
} else {
this__40608__auto__.state = {};
}

return this__40608__auto__;
});

ui.core.Item.prototype = goog.object.clone(React.Component.prototype);

var x343187_343207 = ui.core.Item.prototype;
x343187_343207.componentWillUpdate = ((function (x343187_343207){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___343208 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___343209 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___343208,next_ident__40467__auto___343209)){
var idxr__40468__auto___343210 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___343210 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___343210),((function (idxr__40468__auto___343210,ident__40466__auto___343208,next_ident__40467__auto___343209,this__40462__auto__,x343187_343207){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___343208], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___343209], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___343210,ident__40466__auto___343208,next_ident__40467__auto___343209,this__40462__auto__,x343187_343207))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x343187_343207))
;

x343187_343207.shouldComponentUpdate = ((function (x343187_343207){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__343189 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__343189);
} else {
return G__343189;
}
})();
var or__34390__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__40462__auto__),next_props__40463__auto____$2);
if(or__34390__auto__){
return or__34390__auto__;
} else {
var or__34390__auto____$1 = (function (){var and__34378__auto__ = this__40462__auto__.state;
if(cljs.core.truth_(and__34378__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__40462__auto__.state,"omcljs$state"),goog.object.get(next_state__40464__auto__,"omcljs$state"));
} else {
return and__34378__auto__;
}
})();
if(cljs.core.truth_(or__34390__auto____$1)){
return or__34390__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__40462__auto__.props.children,next_children__40465__auto__);
}
}
});})(x343187_343207))
;

x343187_343207.componentWillUnmount = ((function (x343187_343207){
return (function (){
var this__40462__auto__ = this;
var r__40473__auto__ = om.next.get_reconciler.call(null,this__40462__auto__);
var cfg__40474__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__40473__auto__);
var st__40475__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
var indexer__40472__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
if(cljs.core.truth_((function (){var and__34378__auto__ = !((st__40475__auto__ == null));
if(and__34378__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__40475__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__40462__auto__], null));
} else {
return and__34378__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__40475__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__40462__auto__);
} else {
}

if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343187_343207))
;

x343187_343207.componentDidUpdate = ((function (x343187_343207){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x343187_343207))
;

x343187_343207.isMounted = ((function (x343187_343207){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x343187_343207))
;

x343187_343207.componentWillMount = ((function (x343187_343207){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343187_343207))
;

x343187_343207.initLocalState = ((function (x343187_343207){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj343191 = {"omcljs$state":ret__40440__auto__};
return obj343191;
});})(x343187_343207))
;

x343187_343207.render = ((function (x343187_343207){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_343192 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_343193 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_343194 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_343195 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_343196 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__343197 = om.next.props.call(null,this$);
var map__343197__$1 = ((((!((map__343197 == null)))?((((map__343197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343197):map__343197);
var id = cljs.core.get.call(null,map__343197__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var description = cljs.core.get.call(null,map__343197__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
var votes = cljs.core.get.call(null,map__343197__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var user = cljs.core.get.call(null,map__343197__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__343198 = user;
var map__343198__$1 = ((((!((map__343198 == null)))?((((map__343198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343198):map__343198);
var stake = cljs.core.get.call(null,map__343198__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var has_stake = (stake > (0));
var map__343199 = om.next.get_state.call(null,this$);
var map__343199__$1 = ((((!((map__343199 == null)))?((((map__343199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343199):map__343199);
var dialog = cljs.core.get.call(null,map__343199__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__343200 = dialog;
var map__343200__$1 = ((((!((map__343200 == null)))?((((map__343200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343200):map__343200);
var direction = cljs.core.get.call(null,map__343200__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": "5px", "paddingBottom": "5px", "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),(((direction === (0)))?"Vote down":"Vote Up"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,hide_dialog,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207){
return (function (e){
return hide_dialog.call(null);
});})(map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,hide_dialog,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,hide_dialog,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("item","vote","item/vote",-842849665,null)),(function (){var x__35316__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","items","etherean/items",165918606)))))));
});})(map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,hide_dialog,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207))
], null),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can vote up ",React.DOM.i(null,"one item")," in this list per day, as well as vote down ",React.DOM.i(null,"one item")," in this list per day. These votes will be remembered and automatically applied on subsequent days, until you change your choices (or until your up/down choices fall from the front page) "],null)))),React.DOM.p(null,"So... is this an item currently on the mind of ethereans?")),(function (){var vote_button = ((function (map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,hide_dialog,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207){
return (function (direction__$1,activated){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,hide_dialog,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207){
return (function (e){
if(has_stake){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),(0),new cljs.core.Keyword(null,"up","up",-269712113),(1)], null).call(null,direction__$1)], null));
} else {
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You need to deposit some stake first before voting on items. Please go to the \"Voting Stake\" tab first."}));
}
});})(map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,hide_dialog,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207))
], null));
});})(map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,hide_dialog,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(votes)?ui.core.format_vote_number.call(null,(((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))))):"---")],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false)],null))));
})(),(function (){var item_body = ((function (map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,hide_dialog,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207){
return (function (desc,detail){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__343197,map__343197__$1,id,description,votes,user,map__343198,map__343198__$1,stake,has_stake,map__343199,map__343199__$1,dialog,map__343200,map__343200__$1,direction,hide_dialog,_STAR_reconciler_STAR_343192,_STAR_depth_STAR_343193,_STAR_shared_STAR_343194,_STAR_instrument_STAR_343195,_STAR_parent_STAR_343196,this$,this__40461__auto__,x343187_343207))
;
return item_body.call(null,description,(cljs.core.truth_(votes)?null:ui.core.mining_spinner.call(null)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_343196;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_343195;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_343194;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_343193;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_343192;
}});})(x343187_343207))
;


ui.core.Item.prototype.constructor = ui.core.Item;

ui.core.Item.prototype.constructor.displayName = "ui.core/Item";

ui.core.Item.prototype.om$isComponent = true;

var x343205_343211 = ui.core.Item;
/** @nocollapse */
x343205_343211.om$next$IQuery$ = true;

/** @nocollapse */
x343205_343211.om$next$IQuery$query$arity$1 = ((function (x343205_343211){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x343205_343211))
;


var x343206_343212 = ui.core.Item.prototype;

x343206_343212.om$next$IQuery$ = true;


x343206_343212.om$next$IQuery$query$arity$1 = ((function (x343206_343212){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x343206_343212))
;


ui.core.Item.cljs$lang$type = true;

ui.core.Item.cljs$lang$ctorStr = "ui.core/Item";

ui.core.Item.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Item");
});
ui.core.item_component = om.next.factory.call(null,ui.core.Item);
/**
 * @constructor
 */
ui.core.Items = (function ui$core$Items(){
var this__40608__auto__ = this;
React.Component.apply(this__40608__auto__,arguments);

if(!((this__40608__auto__.initLocalState == null))){
this__40608__auto__.state = this__40608__auto__.initLocalState();
} else {
this__40608__auto__.state = {};
}

return this__40608__auto__;
});

ui.core.Items.prototype = goog.object.clone(React.Component.prototype);

var x343217_343231 = ui.core.Items.prototype;
x343217_343231.componentWillUpdate = ((function (x343217_343231){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___343232 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___343233 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___343232,next_ident__40467__auto___343233)){
var idxr__40468__auto___343234 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___343234 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___343234),((function (idxr__40468__auto___343234,ident__40466__auto___343232,next_ident__40467__auto___343233,this__40462__auto__,x343217_343231){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___343232], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___343233], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___343234,ident__40466__auto___343232,next_ident__40467__auto___343233,this__40462__auto__,x343217_343231))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x343217_343231))
;

x343217_343231.shouldComponentUpdate = ((function (x343217_343231){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__343219 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__343219);
} else {
return G__343219;
}
})();
var or__34390__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__40462__auto__),next_props__40463__auto____$2);
if(or__34390__auto__){
return or__34390__auto__;
} else {
var or__34390__auto____$1 = (function (){var and__34378__auto__ = this__40462__auto__.state;
if(cljs.core.truth_(and__34378__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__40462__auto__.state,"omcljs$state"),goog.object.get(next_state__40464__auto__,"omcljs$state"));
} else {
return and__34378__auto__;
}
})();
if(cljs.core.truth_(or__34390__auto____$1)){
return or__34390__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__40462__auto__.props.children,next_children__40465__auto__);
}
}
});})(x343217_343231))
;

x343217_343231.componentWillUnmount = ((function (x343217_343231){
return (function (){
var this__40462__auto__ = this;
var r__40473__auto__ = om.next.get_reconciler.call(null,this__40462__auto__);
var cfg__40474__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__40473__auto__);
var st__40475__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
var indexer__40472__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
if(cljs.core.truth_((function (){var and__34378__auto__ = !((st__40475__auto__ == null));
if(and__34378__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__40475__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__40462__auto__], null));
} else {
return and__34378__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__40475__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__40462__auto__);
} else {
}

if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343217_343231))
;

x343217_343231.componentDidUpdate = ((function (x343217_343231){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x343217_343231))
;

x343217_343231.isMounted = ((function (x343217_343231){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x343217_343231))
;

x343217_343231.componentWillMount = ((function (x343217_343231){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343217_343231))
;

x343217_343231.render = ((function (x343217_343231){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_343220 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_343221 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_343222 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_343223 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_343224 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.9})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__35244__auto__ = ((function (_STAR_reconciler_STAR_343220,_STAR_depth_STAR_343221,_STAR_shared_STAR_343222,_STAR_instrument_STAR_343223,_STAR_parent_STAR_343224,this$,this__40461__auto__,x343217_343231){
return (function ui$core$iter__343225(s__343226){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_343220,_STAR_depth_STAR_343221,_STAR_shared_STAR_343222,_STAR_instrument_STAR_343223,_STAR_parent_STAR_343224,this$,this__40461__auto__,x343217_343231){
return (function (){
var s__343226__$1 = s__343226;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__343226__$1);
if(temp__6728__auto__){
var s__343226__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343226__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__343226__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__343228 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__343227 = (0);
while(true){
if((i__343227 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__343227);
cljs.core.chunk_append.call(null,b__343228,ui.core.item_component.call(null,item));

var G__343235 = (i__343227 + (1));
i__343227 = G__343235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343228),ui$core$iter__343225.call(null,cljs.core.chunk_rest.call(null,s__343226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343228),null);
}
} else {
var item = cljs.core.first.call(null,s__343226__$2);
return cljs.core.cons.call(null,ui.core.item_component.call(null,item),ui$core$iter__343225.call(null,cljs.core.rest.call(null,s__343226__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_343220,_STAR_depth_STAR_343221,_STAR_shared_STAR_343222,_STAR_instrument_STAR_343223,_STAR_parent_STAR_343224,this$,this__40461__auto__,x343217_343231))
,null,null));
});})(_STAR_reconciler_STAR_343220,_STAR_depth_STAR_343221,_STAR_shared_STAR_343222,_STAR_instrument_STAR_343223,_STAR_parent_STAR_343224,this$,this__40461__auto__,x343217_343231))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("etherean","items","etherean/items",165918606).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_343224;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_343223;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_343222;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_343221;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_343220;
}});})(x343217_343231))
;


ui.core.Items.prototype.constructor = ui.core.Items;

ui.core.Items.prototype.constructor.displayName = "ui.core/Items";

ui.core.Items.prototype.om$isComponent = true;

var x343229_343236 = ui.core.Items;
/** @nocollapse */
x343229_343236.om$next$IQuery$ = true;

/** @nocollapse */
x343229_343236.om$next$IQuery$query$arity$1 = ((function (x343229_343236){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x343229_343236))
;


var x343230_343237 = ui.core.Items.prototype;

x343230_343237.om$next$IQuery$ = true;


x343230_343237.om$next$IQuery$query$arity$1 = ((function (x343230_343237){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x343230_343237))
;


ui.core.Items.cljs$lang$type = true;

ui.core.Items.cljs$lang$ctorStr = "ui.core/Items";

ui.core.Items.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Items");
});
ui.core.items_component = om.next.factory.call(null,ui.core.Items);
/**
 * @constructor
 */
ui.core.Proposal = (function ui$core$Proposal(){
var this__40608__auto__ = this;
React.Component.apply(this__40608__auto__,arguments);

if(!((this__40608__auto__.initLocalState == null))){
this__40608__auto__.state = this__40608__auto__.initLocalState();
} else {
this__40608__auto__.state = {};
}

return this__40608__auto__;
});

ui.core.Proposal.prototype = goog.object.clone(React.Component.prototype);

var x343242_343262 = ui.core.Proposal.prototype;
x343242_343262.componentWillUpdate = ((function (x343242_343262){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___343263 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___343264 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___343263,next_ident__40467__auto___343264)){
var idxr__40468__auto___343265 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___343265 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___343265),((function (idxr__40468__auto___343265,ident__40466__auto___343263,next_ident__40467__auto___343264,this__40462__auto__,x343242_343262){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___343263], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___343264], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___343265,ident__40466__auto___343263,next_ident__40467__auto___343264,this__40462__auto__,x343242_343262))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x343242_343262))
;

x343242_343262.shouldComponentUpdate = ((function (x343242_343262){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__343244 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__343244);
} else {
return G__343244;
}
})();
var or__34390__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__40462__auto__),next_props__40463__auto____$2);
if(or__34390__auto__){
return or__34390__auto__;
} else {
var or__34390__auto____$1 = (function (){var and__34378__auto__ = this__40462__auto__.state;
if(cljs.core.truth_(and__34378__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__40462__auto__.state,"omcljs$state"),goog.object.get(next_state__40464__auto__,"omcljs$state"));
} else {
return and__34378__auto__;
}
})();
if(cljs.core.truth_(or__34390__auto____$1)){
return or__34390__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__40462__auto__.props.children,next_children__40465__auto__);
}
}
});})(x343242_343262))
;

x343242_343262.componentWillUnmount = ((function (x343242_343262){
return (function (){
var this__40462__auto__ = this;
var r__40473__auto__ = om.next.get_reconciler.call(null,this__40462__auto__);
var cfg__40474__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__40473__auto__);
var st__40475__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
var indexer__40472__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
if(cljs.core.truth_((function (){var and__34378__auto__ = !((st__40475__auto__ == null));
if(and__34378__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__40475__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__40462__auto__], null));
} else {
return and__34378__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__40475__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__40462__auto__);
} else {
}

if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343242_343262))
;

x343242_343262.componentDidUpdate = ((function (x343242_343262){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x343242_343262))
;

x343242_343262.isMounted = ((function (x343242_343262){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x343242_343262))
;

x343242_343262.componentWillMount = ((function (x343242_343262){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343242_343262))
;

x343242_343262.initLocalState = ((function (x343242_343262){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),"",new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj343246 = {"omcljs$state":ret__40440__auto__};
return obj343246;
});})(x343242_343262))
;

x343242_343262.render = ((function (x343242_343262){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_343247 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_343248 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_343249 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_343250 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_343251 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__343252 = om.next.props.call(null,this$);
var map__343252__$1 = ((((!((map__343252 == null)))?((((map__343252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343252):map__343252);
var description = cljs.core.get.call(null,map__343252__$1,new cljs.core.Keyword("proposal","description","proposal/description",1644720226));
var id = cljs.core.get.call(null,map__343252__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var unsaved = cljs.core.get.call(null,map__343252__$1,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935));
var upvotes = cljs.core.get.call(null,map__343252__$1,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560));
var downvotes = cljs.core.get.call(null,map__343252__$1,new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132));
var user = cljs.core.get.call(null,map__343252__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__343253 = user;
var map__343253__$1 = ((((!((map__343253 == null)))?((((map__343253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343253):map__343253);
var can_vote_proposal = cljs.core.get.call(null,map__343253__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__343253__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var temporary = om.next.tempid_QMARK_.call(null,id);
var has_stake = (stake > (0));
var map__343254 = om.next.get_state.call(null,this$);
var map__343254__$1 = ((((!((map__343254 == null)))?((((map__343254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343254):map__343254);
var height = cljs.core.get.call(null,map__343254__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var dialog = cljs.core.get.call(null,map__343254__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__343255 = dialog;
var map__343255__$1 = ((((!((map__343255 == null)))?((((map__343255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343255):map__343255);
var direction = cljs.core.get.call(null,map__343255__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262))
;
return om_tools.dom.element.call(null,React.DOM.div,blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113)))?"Vote Up":"Vote Down"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262){
return (function (e){
return hide_dialog.call(null);
});})(map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null)),(function (){var x__35316__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
});})(map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262))
], null),"You can vote on one proposal per day. Is this an item currently on the mind of ethereans, that deserves to be listed on the front page?"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(unsaved)?(0):(1))], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),ui.motion.spring.call(null,height)], null)], null),((function (map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262){
return (function (value){
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingBottom": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var vote_button = ((function (map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262){
return (function (direction__$1,activated,disabled){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262){
return (function (e){
if(cljs.core.truth_((function (){var and__34378__auto__ = has_stake;
if(and__34378__auto__){
return can_vote_proposal;
} else {
return and__34378__auto__;
}
})())){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),direction__$1], null));
} else {
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": ((has_stake)?"You already voted on a proposal today. You will need to wait until tomorrow to vote again.":"Please deposit stake first in the stake tab to vote on proposals.")}));
}
});})(map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262))
], null));
});})(map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false,unsaved),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(unsaved)?null:(cljs.core.truth_(upvotes)?ui.core.format_vote_number.call(null,(upvotes - downvotes)):"---"
))],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false,unsaved)],null))));
})(),(function (){var proposal_body = ((function (map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262){
return (function (desc,detail,disabled){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)}), "onClick": om_tools.dom.format_opts.call(null,((function (map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262){
return (function (){
if(cljs.core.truth_(disabled)){
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You have not staked any funds yet. Please got to the \"Voting Stakes\" tab first."}));
} else {
return null;
}
});})(map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262))
)}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262))
;
if(cljs.core.truth_(unsaved)){
var temp_description = new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
var has_description = cljs.core.seq.call(null,temp_description);
var save_fn = ((function (temp_description,has_description,proposal_body,map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262){
return (function (){
if(has_description){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","save","proposal/save",356239610,null)),(function (){var x__35316__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),(function (){var x__35316__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__35316__auto__ = temp_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
} else {
return null;
}
});})(temp_description,has_description,proposal_body,map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262))
;
return proposal_body.call(null,blueprint_cljs.core.editable_text.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),((!(has_stake))?"... (Please deposit stake first to propose an item)":((cljs.core.not.call(null,can_vote_proposal))?"... (Today's proposal action already used up)":"... propose a new item!"
)),new cljs.core.Keyword(null,"value","value",305978217),temp_description,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(has_stake)) || (cljs.core.not.call(null,can_vote_proposal)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp_description,has_description,save_fn,proposal_body,map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262){
return (function (s){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),s);
});})(temp_description,has_description,save_fn,proposal_body,map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262))
], null)),((has_description)?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary pt-icon-plus pt-minimal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_fn], null),"Save"):null),!(has_stake));
} else {
return proposal_body.call(null,description,(((temporary) || (cljs.core.not.call(null,upvotes)))?ui.core.mining_spinner.call(null):null),false);
}
})()],null))));
});})(map__343252,map__343252__$1,description,id,unsaved,upvotes,downvotes,user,map__343253,map__343253__$1,can_vote_proposal,stake,temporary,has_stake,map__343254,map__343254__$1,height,dialog,map__343255,map__343255__$1,direction,hide_dialog,_STAR_reconciler_STAR_343247,_STAR_depth_STAR_343248,_STAR_shared_STAR_343249,_STAR_instrument_STAR_343250,_STAR_parent_STAR_343251,this$,this__40461__auto__,x343242_343262))
)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_343251;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_343250;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_343249;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_343248;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_343247;
}});})(x343242_343262))
;


ui.core.Proposal.prototype.constructor = ui.core.Proposal;

ui.core.Proposal.prototype.constructor.displayName = "ui.core/Proposal";

ui.core.Proposal.prototype.om$isComponent = true;

var x343260_343266 = ui.core.Proposal;
/** @nocollapse */
x343260_343266.om$next$IQuery$ = true;

/** @nocollapse */
x343260_343266.om$next$IQuery$query$arity$1 = ((function (x343260_343266){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x343260_343266))
;


var x343261_343267 = ui.core.Proposal.prototype;

x343261_343267.om$next$IQuery$ = true;


x343261_343267.om$next$IQuery$query$arity$1 = ((function (x343261_343267){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x343261_343267))
;


ui.core.Proposal.cljs$lang$type = true;

ui.core.Proposal.cljs$lang$ctorStr = "ui.core/Proposal";

ui.core.Proposal.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Proposal");
});
ui.core.proposal_component = om.next.factory.call(null,ui.core.Proposal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
/**
 * @constructor
 */
ui.core.Proposals = (function ui$core$Proposals(){
var this__40608__auto__ = this;
React.Component.apply(this__40608__auto__,arguments);

if(!((this__40608__auto__.initLocalState == null))){
this__40608__auto__.state = this__40608__auto__.initLocalState();
} else {
this__40608__auto__.state = {};
}

return this__40608__auto__;
});

ui.core.Proposals.prototype = goog.object.clone(React.Component.prototype);

var x343272_343286 = ui.core.Proposals.prototype;
x343272_343286.componentWillUpdate = ((function (x343272_343286){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___343287 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___343288 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___343287,next_ident__40467__auto___343288)){
var idxr__40468__auto___343289 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___343289 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___343289),((function (idxr__40468__auto___343289,ident__40466__auto___343287,next_ident__40467__auto___343288,this__40462__auto__,x343272_343286){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___343287], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___343288], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___343289,ident__40466__auto___343287,next_ident__40467__auto___343288,this__40462__auto__,x343272_343286))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x343272_343286))
;

x343272_343286.shouldComponentUpdate = ((function (x343272_343286){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__343274 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__343274);
} else {
return G__343274;
}
})();
var or__34390__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__40462__auto__),next_props__40463__auto____$2);
if(or__34390__auto__){
return or__34390__auto__;
} else {
var or__34390__auto____$1 = (function (){var and__34378__auto__ = this__40462__auto__.state;
if(cljs.core.truth_(and__34378__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__40462__auto__.state,"omcljs$state"),goog.object.get(next_state__40464__auto__,"omcljs$state"));
} else {
return and__34378__auto__;
}
})();
if(cljs.core.truth_(or__34390__auto____$1)){
return or__34390__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__40462__auto__.props.children,next_children__40465__auto__);
}
}
});})(x343272_343286))
;

x343272_343286.componentWillUnmount = ((function (x343272_343286){
return (function (){
var this__40462__auto__ = this;
var r__40473__auto__ = om.next.get_reconciler.call(null,this__40462__auto__);
var cfg__40474__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__40473__auto__);
var st__40475__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
var indexer__40472__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
if(cljs.core.truth_((function (){var and__34378__auto__ = !((st__40475__auto__ == null));
if(and__34378__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__40475__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__40462__auto__], null));
} else {
return and__34378__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__40475__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__40462__auto__);
} else {
}

if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343272_343286))
;

x343272_343286.componentDidUpdate = ((function (x343272_343286){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x343272_343286))
;

x343272_343286.isMounted = ((function (x343272_343286){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x343272_343286))
;

x343272_343286.componentWillMount = ((function (x343272_343286){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343272_343286))
;

x343272_343286.render = ((function (x343272_343286){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_343275 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_343276 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_343277 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_343278 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_343279 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{return om_tools.dom.element.call(null,React.DOM.div,(function (){var iter__35244__auto__ = ((function (_STAR_reconciler_STAR_343275,_STAR_depth_STAR_343276,_STAR_shared_STAR_343277,_STAR_instrument_STAR_343278,_STAR_parent_STAR_343279,this$,this__40461__auto__,x343272_343286){
return (function ui$core$iter__343280(s__343281){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_343275,_STAR_depth_STAR_343276,_STAR_shared_STAR_343277,_STAR_instrument_STAR_343278,_STAR_parent_STAR_343279,this$,this__40461__auto__,x343272_343286){
return (function (){
var s__343281__$1 = s__343281;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__343281__$1);
if(temp__6728__auto__){
var s__343281__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343281__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__343281__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__343283 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__343282 = (0);
while(true){
if((i__343282 < size__35243__auto__)){
var proposal = cljs.core._nth.call(null,c__35242__auto__,i__343282);
cljs.core.chunk_append.call(null,b__343283,ui.core.proposal_component.call(null,proposal));

var G__343290 = (i__343282 + (1));
i__343282 = G__343290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343283),ui$core$iter__343280.call(null,cljs.core.chunk_rest.call(null,s__343281__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343283),null);
}
} else {
var proposal = cljs.core.first.call(null,s__343281__$2);
return cljs.core.cons.call(null,ui.core.proposal_component.call(null,proposal),ui$core$iter__343280.call(null,cljs.core.rest.call(null,s__343281__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_343275,_STAR_depth_STAR_343276,_STAR_shared_STAR_343277,_STAR_instrument_STAR_343278,_STAR_parent_STAR_343279,this$,this__40461__auto__,x343272_343286))
,null,null));
});})(_STAR_reconciler_STAR_343275,_STAR_depth_STAR_343276,_STAR_shared_STAR_343277,_STAR_instrument_STAR_343278,_STAR_parent_STAR_343279,this$,this__40461__auto__,x343272_343286))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})(),cljs.core.PersistentVector.EMPTY);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_343279;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_343278;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_343277;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_343276;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_343275;
}});})(x343272_343286))
;


ui.core.Proposals.prototype.constructor = ui.core.Proposals;

ui.core.Proposals.prototype.constructor.displayName = "ui.core/Proposals";

ui.core.Proposals.prototype.om$isComponent = true;

var x343284_343291 = ui.core.Proposals;
/** @nocollapse */
x343284_343291.om$next$IQuery$ = true;

/** @nocollapse */
x343284_343291.om$next$IQuery$query$arity$1 = ((function (x343284_343291){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x343284_343291))
;


var x343285_343292 = ui.core.Proposals.prototype;

x343285_343292.om$next$IQuery$ = true;


x343285_343292.om$next$IQuery$query$arity$1 = ((function (x343285_343292){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x343285_343292))
;


ui.core.Proposals.cljs$lang$type = true;

ui.core.Proposals.cljs$lang$ctorStr = "ui.core/Proposals";

ui.core.Proposals.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Proposals");
});
ui.core.proposals_component = om.next.factory.call(null,ui.core.Proposals);
/**
 * @constructor
 */
ui.core.Stake = (function ui$core$Stake(){
var this__40608__auto__ = this;
React.Component.apply(this__40608__auto__,arguments);

if(!((this__40608__auto__.initLocalState == null))){
this__40608__auto__.state = this__40608__auto__.initLocalState();
} else {
this__40608__auto__.state = {};
}

return this__40608__auto__;
});

ui.core.Stake.prototype = goog.object.clone(React.Component.prototype);

var x343297_343309 = ui.core.Stake.prototype;
x343297_343309.componentWillUpdate = ((function (x343297_343309){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___343310 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___343311 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___343310,next_ident__40467__auto___343311)){
var idxr__40468__auto___343312 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___343312 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___343312),((function (idxr__40468__auto___343312,ident__40466__auto___343310,next_ident__40467__auto___343311,this__40462__auto__,x343297_343309){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___343310], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___343311], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___343312,ident__40466__auto___343310,next_ident__40467__auto___343311,this__40462__auto__,x343297_343309))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x343297_343309))
;

x343297_343309.shouldComponentUpdate = ((function (x343297_343309){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__343299 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__343299);
} else {
return G__343299;
}
})();
var or__34390__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__40462__auto__),next_props__40463__auto____$2);
if(or__34390__auto__){
return or__34390__auto__;
} else {
var or__34390__auto____$1 = (function (){var and__34378__auto__ = this__40462__auto__.state;
if(cljs.core.truth_(and__34378__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__40462__auto__.state,"omcljs$state"),goog.object.get(next_state__40464__auto__,"omcljs$state"));
} else {
return and__34378__auto__;
}
})();
if(cljs.core.truth_(or__34390__auto____$1)){
return or__34390__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__40462__auto__.props.children,next_children__40465__auto__);
}
}
});})(x343297_343309))
;

x343297_343309.componentWillUnmount = ((function (x343297_343309){
return (function (){
var this__40462__auto__ = this;
var r__40473__auto__ = om.next.get_reconciler.call(null,this__40462__auto__);
var cfg__40474__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__40473__auto__);
var st__40475__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
var indexer__40472__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
if(cljs.core.truth_((function (){var and__34378__auto__ = !((st__40475__auto__ == null));
if(and__34378__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__40475__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__40462__auto__], null));
} else {
return and__34378__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__40475__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__40462__auto__);
} else {
}

if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343297_343309))
;

x343297_343309.componentDidUpdate = ((function (x343297_343309){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x343297_343309))
;

x343297_343309.isMounted = ((function (x343297_343309){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x343297_343309))
;

x343297_343309.componentWillMount = ((function (x343297_343309){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343297_343309))
;

x343297_343309.render = ((function (x343297_343309){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_343300 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_343301 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_343302 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_343303 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_343304 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__343305 = om.next.props.call(null,this$);
var map__343305__$1 = ((((!((map__343305 == null)))?((((map__343305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343305):map__343305);
var id = cljs.core.get.call(null,map__343305__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var value = cljs.core.get.call(null,map__343305__$1,new cljs.core.Keyword("stake","value","stake/value",466231031));
return om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,id,cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,value,cljs.core.PersistentVector.EMPTY)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_343304;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_343303;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_343302;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_343301;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_343300;
}});})(x343297_343309))
;


ui.core.Stake.prototype.constructor = ui.core.Stake;

ui.core.Stake.prototype.constructor.displayName = "ui.core/Stake";

ui.core.Stake.prototype.om$isComponent = true;

var x343307_343313 = ui.core.Stake;
/** @nocollapse */
x343307_343313.om$next$IQuery$ = true;

/** @nocollapse */
x343307_343313.om$next$IQuery$query$arity$1 = ((function (x343307_343313){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x343307_343313))
;


var x343308_343314 = ui.core.Stake.prototype;

x343308_343314.om$next$IQuery$ = true;


x343308_343314.om$next$IQuery$query$arity$1 = ((function (x343308_343314){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x343308_343314))
;


ui.core.Stake.cljs$lang$type = true;

ui.core.Stake.cljs$lang$ctorStr = "ui.core/Stake";

ui.core.Stake.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Stake");
});
ui.core.stake_component = om.next.factory.call(null,ui.core.Stake,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
ui.core.format_address = (function ui$core$format_address(address){
if(cljs.core.truth_(address)){
return cljs.core.apply.call(null,React.DOM.i,({"style": ({"fontWeight": (200)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.subs.call(null,address,(0),(8)),"..."],null))));
} else {
return null;
}
});
/**
 * @constructor
 */
ui.core.Stakes = (function ui$core$Stakes(){
var this__40608__auto__ = this;
React.Component.apply(this__40608__auto__,arguments);

if(!((this__40608__auto__.initLocalState == null))){
this__40608__auto__.state = this__40608__auto__.initLocalState();
} else {
this__40608__auto__.state = {};
}

return this__40608__auto__;
});

ui.core.Stakes.prototype = goog.object.clone(React.Component.prototype);

var x343319_343339 = ui.core.Stakes.prototype;
x343319_343339.componentWillUpdate = ((function (x343319_343339){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___343340 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___343341 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___343340,next_ident__40467__auto___343341)){
var idxr__40468__auto___343342 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___343342 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___343342),((function (idxr__40468__auto___343342,ident__40466__auto___343340,next_ident__40467__auto___343341,this__40462__auto__,x343319_343339){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___343340], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___343341], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___343342,ident__40466__auto___343340,next_ident__40467__auto___343341,this__40462__auto__,x343319_343339))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x343319_343339))
;

x343319_343339.shouldComponentUpdate = ((function (x343319_343339){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__343321 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__343321);
} else {
return G__343321;
}
})();
var or__34390__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__40462__auto__),next_props__40463__auto____$2);
if(or__34390__auto__){
return or__34390__auto__;
} else {
var or__34390__auto____$1 = (function (){var and__34378__auto__ = this__40462__auto__.state;
if(cljs.core.truth_(and__34378__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__40462__auto__.state,"omcljs$state"),goog.object.get(next_state__40464__auto__,"omcljs$state"));
} else {
return and__34378__auto__;
}
})();
if(cljs.core.truth_(or__34390__auto____$1)){
return or__34390__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__40462__auto__.props.children,next_children__40465__auto__);
}
}
});})(x343319_343339))
;

x343319_343339.componentWillUnmount = ((function (x343319_343339){
return (function (){
var this__40462__auto__ = this;
var r__40473__auto__ = om.next.get_reconciler.call(null,this__40462__auto__);
var cfg__40474__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__40473__auto__);
var st__40475__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
var indexer__40472__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__40474__auto__);
if(cljs.core.truth_((function (){var and__34378__auto__ = !((st__40475__auto__ == null));
if(and__34378__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__40475__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__40462__auto__], null));
} else {
return and__34378__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__40475__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__40462__auto__);
} else {
}

if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343319_343339))
;

x343319_343339.componentDidUpdate = ((function (x343319_343339){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x343319_343339))
;

x343319_343339.isMounted = ((function (x343319_343339){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x343319_343339))
;

x343319_343339.componentWillMount = ((function (x343319_343339){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343319_343339))
;

x343319_343339.initLocalState = ((function (x343319_343339){
return (function (){
var this$ = this;
var ret__40440__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var obj343323 = {"omcljs$state":ret__40440__auto__};
return obj343323;
});})(x343319_343339))
;

x343319_343339.render = ((function (x343319_343339){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_343324 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_343325 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_343326 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_343327 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_343328 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__343329 = om.next.props.call(null,this$);
var map__343329__$1 = ((((!((map__343329 == null)))?((((map__343329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343329):map__343329);
var stakes = cljs.core.get.call(null,map__343329__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__343329__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__343330 = user;
var map__343330__$1 = ((((!((map__343330 == null)))?((((map__343330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343330):map__343330);
var stake = cljs.core.get.call(null,map__343330__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var address = cljs.core.get.call(null,map__343330__$1,new cljs.core.Keyword("user","address","user/address",573600859));
var balance = cljs.core.get.call(null,map__343330__$1,new cljs.core.Keyword("user","balance","user/balance",422509480));
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.8})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Current Stake"),((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?ui.core.mining_spinner.call(null):cljs.core.apply.call(null,React.DOM.h3,({"style": ({"color": "#2b95d6"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[stake," ETH"],null))))),cljs.core.apply.call(null,React.DOM.span,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["(associated with account ",ui.core.format_address.call(null,address),")"],null)))),(((stake === (0)))?React.DOM.div(({"className": "pt-callout pt-icon-info-sign", "style": ({"marginTop": "0.5rem"})}),"You do not currently have any voting stake for EthereanMind. To be able to vote on proposals and top 10 items, you need to deposit some fully-refundable coins into the EthereanMind staking contract."):null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group", "style": ({"marginTop": "0.5rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__343329,map__343329__$1,stakes,user,map__343330,map__343330__$1,stake,address,balance,_STAR_reconciler_STAR_343324,_STAR_depth_STAR_343325,_STAR_shared_STAR_343326,_STAR_instrument_STAR_343327,_STAR_parent_STAR_343328,this$,this__40461__auto__,x343319_343339){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"value","value",305978217),""], null));
});})(map__343329,map__343329__$1,stakes,user,map__343330,map__343330__$1,stake,address,balance,_STAR_reconciler_STAR_343324,_STAR_depth_STAR_343325,_STAR_shared_STAR_343326,_STAR_instrument_STAR_343327,_STAR_parent_STAR_343328,this$,this__40461__auto__,x343319_343339))
], null),"Deposit Stake"),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__343329,map__343329__$1,stakes,user,map__343330,map__343330__$1,stake,address,balance,_STAR_reconciler_STAR_343324,_STAR_depth_STAR_343325,_STAR_shared_STAR_343326,_STAR_instrument_STAR_343327,_STAR_parent_STAR_343328,this$,this__40461__auto__,x343319_343339){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"withdraw","withdraw",1469652053)], null));
});})(map__343329,map__343329__$1,stakes,user,map__343330,map__343330__$1,stake,address,balance,_STAR_reconciler_STAR_343324,_STAR_depth_STAR_343325,_STAR_shared_STAR_343326,_STAR_instrument_STAR_343327,_STAR_parent_STAR_343328,this$,this__40461__auto__,x343319_343339))
], null),"Withdraw Stake")],null))))],null)))),(function (){var map__343333 = om.next.get_state.call(null,this$);
var map__343333__$1 = ((((!((map__343333 == null)))?((((map__343333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343333):map__343333);
var dialog = cljs.core.get.call(null,map__343333__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__343334 = dialog;
var map__343334__$1 = ((((!((map__343334 == null)))?((((map__343334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343334):map__343334);
var type = cljs.core.get.call(null,map__343334__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__343334__$1,new cljs.core.Keyword(null,"value","value",305978217));
var value_status = ((cljs.core._EQ_.call(null,value,""))?new cljs.core.Keyword(null,"missing","missing",362507769):(((value <= balance))?new cljs.core.Keyword(null,"good","good",511701169):new cljs.core.Keyword(null,"bad","bad",1127186645)
));
var close_dialog = ((function (value_status,map__343333,map__343333__$1,dialog,map__343334,map__343334__$1,type,value,map__343329,map__343329__$1,stakes,user,map__343330,map__343330__$1,stake,address,balance,_STAR_reconciler_STAR_343324,_STAR_depth_STAR_343325,_STAR_shared_STAR_343326,_STAR_instrument_STAR_343327,_STAR_parent_STAR_343328,this$,this__40461__auto__,x343319_343339){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,map__343333,map__343333__$1,dialog,map__343334,map__343334__$1,type,value,map__343329,map__343329__$1,stakes,user,map__343330,map__343330__$1,stake,address,balance,_STAR_reconciler_STAR_343324,_STAR_depth_STAR_343325,_STAR_shared_STAR_343326,_STAR_instrument_STAR_343327,_STAR_parent_STAR_343328,this$,this__40461__auto__,x343319_343339))
;
return blueprint_cljs.core.dialog.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-close","on-close",-761178394),close_dialog,new cljs.core.Keyword(null,"title","title",636505583),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit Stake":"Withdraw Stake")], null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-body"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,"In order to vote on ethereanmind you need to place a refundable deposit of ether. You will be able to start voting immediately after depositing ether, but you need to wait a month before you can withdraw your deposit again."),om_tools.dom.element.call(null,React.DOM.p,React.DOM.b(null,"The rules of the smart contract assure that no one else can withdraw your money and that you will receive back 100% of your deposit."),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Balance available: ",balance," Ether"],null)))),blueprint_cljs.core.input_group.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Deposit Amount (Ether)",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"right-element","right-element",-375920256),((cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"missing","missing",362507769)))?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)))?"pt-icon-tick pt-intent-success":"pt-icon-cross pt-intent-danger")], null)):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value_status,close_dialog,map__343333,map__343333__$1,dialog,map__343334,map__343334__$1,type,value,map__343329,map__343329__$1,stakes,user,map__343330,map__343330__$1,stake,address,balance,_STAR_reconciler_STAR_343324,_STAR_depth_STAR_343325,_STAR_shared_STAR_343326,_STAR_instrument_STAR_343327,_STAR_parent_STAR_343328,this$,this__40461__auto__,x343319_343339){
return (function (e){
var value_new = e.target.value;
if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]*\.?[0-9]*/,value_new))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value_new);
} else {
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value);
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noise","noise",-994696820)], null),cljs.core.rand_int.call(null,(1000000)));
});})(value_status,close_dialog,map__343333,map__343333__$1,dialog,map__343334,map__343334__$1,type,value,map__343329,map__343329__$1,stakes,user,map__343330,map__343330__$1,stake,address,balance,_STAR_reconciler_STAR_343324,_STAR_depth_STAR_343325,_STAR_shared_STAR_343326,_STAR_instrument_STAR_343327,_STAR_parent_STAR_343328,this$,this__40461__auto__,x343319_343339))
], null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can now withdraw all of your stake (Currently ",stake," Ether) back into your regular ethereum account at [",ui.core.format_address.call(null,address),"]. At that point, you will no longer be able to participate in voting- You'll need to deposit new funds to vote again."],null))))], null))],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer-actions"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)),new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_status,close_dialog,map__343333,map__343333__$1,dialog,map__343334,map__343334__$1,type,value,map__343329,map__343329__$1,stakes,user,map__343330,map__343330__$1,stake,address,balance,_STAR_reconciler_STAR_343324,_STAR_depth_STAR_343325,_STAR_shared_STAR_343326,_STAR_instrument_STAR_343327,_STAR_parent_STAR_343328,this$,this__40461__auto__,x343319_343339){
return (function (e){
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851))){
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null)),(function (){var x__35316__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__35316__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339)))))));
} else {
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","withdraw","user/withdraw",-1187344809,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339)))))));
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,close_dialog,map__343333,map__343333__$1,dialog,map__343334,map__343334__$1,type,value,map__343329,map__343329__$1,stakes,user,map__343330,map__343330__$1,stake,address,balance,_STAR_reconciler_STAR_343324,_STAR_depth_STAR_343325,_STAR_shared_STAR_343326,_STAR_instrument_STAR_343327,_STAR_parent_STAR_343328,this$,this__40461__auto__,x343319_343339))
], null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit":"Withdraw")),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_dialog], null),"Cancel")],null))))],null)))));
})(),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"marginTop": "1rem", "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Staking Statistics"),React.DOM.div(null,"If you're curious about who else is using this dapp, and are using an ethereum data source that can handle large queres, click this button:"),cljs.core.apply.call(null,React.DOM.p,({"style": ({"margin": "1em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.i(null,"(Coming Soon...)")],null))))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_343328;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_343327;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_343326;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_343325;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_343324;
}});})(x343319_343339))
;


ui.core.Stakes.prototype.constructor = ui.core.Stakes;

ui.core.Stakes.prototype.constructor.displayName = "ui.core/Stakes";

ui.core.Stakes.prototype.om$isComponent = true;

var x343337_343343 = ui.core.Stakes;
/** @nocollapse */
x343337_343343.om$next$IQuery$ = true;

/** @nocollapse */
x343337_343343.om$next$IQuery$query$arity$1 = ((function (x343337_343343){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x343337_343343))
;


var x343338_343344 = ui.core.Stakes.prototype;

x343338_343344.om$next$IQuery$ = true;


x343338_343344.om$next$IQuery$query$arity$1 = ((function (x343338_343344){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x343338_343344))
;


ui.core.Stakes.cljs$lang$type = true;

ui.core.Stakes.cljs$lang$ctorStr = "ui.core/Stakes";

ui.core.Stakes.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Stakes");
});
ui.core.stakes_component = om.next.factory.call(null,ui.core.Stakes);
ui.core.canvas_resolution = (800);
ui.core.brain_prerender = (function ui$core$brain_prerender(sections){
return new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__343359,item){
var map__343360 = p__343359;
var map__343360__$1 = ((((!((map__343360 == null)))?((((map__343360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343360):map__343360);
var acc = map__343360__$1;
var vertices = cljs.core.get.call(null,map__343360__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var vertex_colors = cljs.core.get.call(null,map__343360__$1,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377));
var index = cljs.core.get.call(null,map__343360__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.call(null,map__343360__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var map__343362 = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"length","length",588987862),(function (){var iter__35244__auto__ = ((function (map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__343363(s__343364){
return (new cljs.core.LazySeq(null,((function (map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__343364__$1 = s__343364;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__343364__$1);
if(temp__6728__auto__){
var s__343364__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343364__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__343364__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__343366 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__343365 = (0);
while(true){
if((i__343365 < size__35243__auto__)){
var coord = cljs.core._nth.call(null,c__35242__auto__,i__343365);
cljs.core.chunk_append.call(null,b__343366,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (i__343365,region_size,coord,c__35242__auto__,size__35243__auto__,b__343366,s__343364__$2,temp__6728__auto__,map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__343345_SHARP_){
return cljs.core.nth.call(null,p1__343345_SHARP_,coord);
});})(i__343365,region_size,coord,c__35242__auto__,size__35243__auto__,b__343366,s__343364__$2,temp__6728__auto__,map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})());

var G__343372 = (i__343365 + (1));
i__343365 = G__343372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343366),ui$core$brain_prerender_$_iter__343363.call(null,cljs.core.chunk_rest.call(null,s__343364__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343366),null);
}
} else {
var coord = cljs.core.first.call(null,s__343364__$2);
return cljs.core.cons.call(null,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (region_size,coord,s__343364__$2,temp__6728__auto__,map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__343345_SHARP_){
return cljs.core.nth.call(null,p1__343345_SHARP_,coord);
});})(region_size,coord,s__343364__$2,temp__6728__auto__,map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})(),ui$core$brain_prerender_$_iter__343363.call(null,cljs.core.rest.call(null,s__343364__$2)));
}
} else {
return null;
}
break;
}
});})(map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})()));
var map__343362__$1 = ((((!((map__343362 == null)))?((((map__343362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343362):map__343362);
var cur_vertices = cljs.core.get.call(null,map__343362__$1,new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716));
var rest_vertices = cljs.core.get.call(null,map__343362__$1,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),rest_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.into.call(null,vertex_colors,(function (){var iter__35244__auto__ = ((function (map__343362,map__343362__$1,cur_vertices,rest_vertices,map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__343368(s__343369){
return (new cljs.core.LazySeq(null,((function (map__343362,map__343362__$1,cur_vertices,rest_vertices,map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__343369__$1 = s__343369;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__343369__$1);
if(temp__6728__auto__){
var s__343369__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343369__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__343369__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__343371 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__343370 = (0);
while(true){
if((i__343370 < size__35243__auto__)){
var vertex = cljs.core._nth.call(null,c__35242__auto__,i__343370);
cljs.core.chunk_append.call(null,b__343371,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null));

var G__343373 = (i__343370 + (1));
i__343370 = G__343373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343371),ui$core$brain_prerender_$_iter__343368.call(null,cljs.core.chunk_rest.call(null,s__343369__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343371),null);
}
} else {
var vertex = cljs.core.first.call(null,s__343369__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null),ui$core$brain_prerender_$_iter__343368.call(null,cljs.core.rest.call(null,s__343369__$2)));
}
} else {
return null;
}
break;
}
});})(map__343362,map__343362__$1,cur_vertices,rest_vertices,map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__343362,map__343362__$1,cur_vertices,rest_vertices,map__343360,map__343360__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35244__auto__.call(null,cur_vertices);
})()),new cljs.core.Keyword(null,"index","index",-1531685915),(index + (1)),new cljs.core.Keyword(null,"total","total",1916810418),(total - new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))], null);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),ui.core.brain_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"size","size",1098693007),sections))], null),sections));
});
ui.core.render_graph = (function ui$core$render_graph(brain_faces,vertexes,vertex_colors){
var iter__35244__auto__ = (function ui$core$render_graph_$_iter__343406(s__343407){
return (new cljs.core.LazySeq(null,(function (){
var s__343407__$1 = s__343407;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__343407__$1);
if(temp__6728__auto__){
var s__343407__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343407__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__343407__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__343409 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__343408 = (0);
while(true){
if((i__343408 < size__35243__auto__)){
var vec__343424 = cljs.core._nth.call(null,c__35242__auto__,i__343408);
var region = cljs.core.nth.call(null,vec__343424,(0),null);
var faces = cljs.core.nth.call(null,vec__343424,(1),null);
cljs.core.chunk_append.call(null,b__343409,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (i__343408,vec__343424,region,faces,c__35242__auto__,size__35243__auto__,b__343409,s__343407__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__343406_$_iter__343427(s__343428){
return (new cljs.core.LazySeq(null,((function (i__343408,vec__343424,region,faces,c__35242__auto__,size__35243__auto__,b__343409,s__343407__$2,temp__6728__auto__){
return (function (){
var s__343428__$1 = s__343428;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__343428__$1);
if(temp__6728__auto____$1){
var s__343428__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343428__$2)){
var c__35242__auto____$1 = cljs.core.chunk_first.call(null,s__343428__$2);
var size__35243__auto____$1 = cljs.core.count.call(null,c__35242__auto____$1);
var b__343430 = cljs.core.chunk_buffer.call(null,size__35243__auto____$1);
if((function (){var i__343429 = (0);
while(true){
if((i__343429 < size__35243__auto____$1)){
var n = cljs.core._nth.call(null,c__35242__auto____$1,i__343429);
cljs.core.chunk_append.call(null,b__343430,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__343429,i__343408,n,c__35242__auto____$1,size__35243__auto____$1,b__343430,s__343428__$2,temp__6728__auto____$1,vec__343424,region,faces,c__35242__auto__,size__35243__auto__,b__343409,s__343407__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__343429,i__343408,n,c__35242__auto____$1,size__35243__auto____$1,b__343430,s__343428__$2,temp__6728__auto____$1,vec__343424,region,faces,c__35242__auto__,size__35243__auto__,b__343409,s__343407__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__343438 = (i__343429 + (1));
i__343429 = G__343438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343430),ui$core$render_graph_$_iter__343406_$_iter__343427.call(null,cljs.core.chunk_rest.call(null,s__343428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343430),null);
}
} else {
var n = cljs.core.first.call(null,s__343428__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__343408,n,s__343428__$2,temp__6728__auto____$1,vec__343424,region,faces,c__35242__auto__,size__35243__auto__,b__343409,s__343407__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__343408,n,s__343428__$2,temp__6728__auto____$1,vec__343424,region,faces,c__35242__auto__,size__35243__auto__,b__343409,s__343407__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__343406_$_iter__343427.call(null,cljs.core.rest.call(null,s__343428__$2)));
}
} else {
return null;
}
break;
}
});})(i__343408,vec__343424,region,faces,c__35242__auto__,size__35243__auto__,b__343409,s__343407__$2,temp__6728__auto__))
,null,null));
});})(i__343408,vec__343424,region,faces,c__35242__auto__,size__35243__auto__,b__343409,s__343407__$2,temp__6728__auto__))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (i__343408,dist,max_dist,mult,centroid,vec__343424,region,faces,c__35242__auto__,size__35243__auto__,b__343409,s__343407__$2,temp__6728__auto__){
return (function (y){
var x__34723__auto__ = (function (){var x__34730__auto__ = 0.11;
var y__34731__auto__ = (y * 0.9);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})();
var y__34724__auto__ = -0.05;
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
});})(i__343408,dist,max_dist,mult,centroid,vec__343424,region,faces,c__35242__auto__,size__35243__auto__,b__343409,s__343407__$2,temp__6728__auto__))
);
})()], null);
})());

var G__343439 = (i__343408 + (1));
i__343408 = G__343439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343409),ui$core$render_graph_$_iter__343406.call(null,cljs.core.chunk_rest.call(null,s__343407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343409),null);
}
} else {
var vec__343431 = cljs.core.first.call(null,s__343407__$2);
var region = cljs.core.nth.call(null,vec__343431,(0),null);
var faces = cljs.core.nth.call(null,vec__343431,(1),null);
return cljs.core.cons.call(null,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (vec__343431,region,faces,s__343407__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__343406_$_iter__343434(s__343435){
return (new cljs.core.LazySeq(null,((function (vec__343431,region,faces,s__343407__$2,temp__6728__auto__){
return (function (){
var s__343435__$1 = s__343435;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__343435__$1);
if(temp__6728__auto____$1){
var s__343435__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343435__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__343435__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__343437 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__343436 = (0);
while(true){
if((i__343436 < size__35243__auto__)){
var n = cljs.core._nth.call(null,c__35242__auto__,i__343436);
cljs.core.chunk_append.call(null,b__343437,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__343436,n,c__35242__auto__,size__35243__auto__,b__343437,s__343435__$2,temp__6728__auto____$1,vec__343431,region,faces,s__343407__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__343436,n,c__35242__auto__,size__35243__auto__,b__343437,s__343435__$2,temp__6728__auto____$1,vec__343431,region,faces,s__343407__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__343440 = (i__343436 + (1));
i__343436 = G__343440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343437),ui$core$render_graph_$_iter__343406_$_iter__343434.call(null,cljs.core.chunk_rest.call(null,s__343435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343437),null);
}
} else {
var n = cljs.core.first.call(null,s__343435__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (n,s__343435__$2,temp__6728__auto____$1,vec__343431,region,faces,s__343407__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(n,s__343435__$2,temp__6728__auto____$1,vec__343431,region,faces,s__343407__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__343406_$_iter__343434.call(null,cljs.core.rest.call(null,s__343435__$2)));
}
} else {
return null;
}
break;
}
});})(vec__343431,region,faces,s__343407__$2,temp__6728__auto__))
,null,null));
});})(vec__343431,region,faces,s__343407__$2,temp__6728__auto__))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (dist,max_dist,mult,centroid,vec__343431,region,faces,s__343407__$2,temp__6728__auto__){
return (function (y){
var x__34723__auto__ = (function (){var x__34730__auto__ = 0.11;
var y__34731__auto__ = (y * 0.9);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})();
var y__34724__auto__ = -0.05;
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
});})(dist,max_dist,mult,centroid,vec__343431,region,faces,s__343407__$2,temp__6728__auto__))
);
})()], null);
})(),ui$core$render_graph_$_iter__343406.call(null,cljs.core.rest.call(null,s__343407__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35244__auto__.call(null,cljs.core.group_by.call(null,((function (iter__35244__auto__){
return (function (k){
return vertex_colors.call(null,vertexes.call(null,cljs.core.first.call(null,k)));
});})(iter__35244__auto__))
,brain_faces));
});
ui.core.region_color = (function ui$core$region_color(index){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.2,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),0.2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),0.2], null)], null).call(null,index);
});
ui.core.point__GT_screen = (function ui$core$point__GT_screen(canvas_resolution,rotation,p__343441){
var vec__343445 = p__343441;
var xx = cljs.core.nth.call(null,vec__343445,(0),null);
var yy = cljs.core.nth.call(null,vec__343445,(1),null);
var zz = cljs.core.nth.call(null,vec__343445,(2),null);
var vertex = vec__343445;
var sin = Math.sin(rotation);
var cos = Math.cos(rotation);
var x = ((sin * xx) - (cos * yy));
var y = (- zz);
var z = ((8) * ((cos * xx) + (sin * yy)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((canvas_resolution / (2)) + (((4) * x) * canvas_resolution)),((canvas_resolution / 2.2) + (((4) * y) * canvas_resolution)),z], null);
});
ui.core.brain_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0),new cljs.core.Keyword(null,"sections","sections",-886710106),null,new cljs.core.Keyword(null,"colored","colored",-1421800355),(1)], null));
ui.core.get_tick_count = (function ui$core$get_tick_count(){
return (new Date()).getTime();
});
ui.core.render_brain = (function ui$core$render_brain(ctx,rotation,render_graph){
var starting_time = ui.core.get_tick_count.call(null);
var vertices = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,ui.core.point__GT_screen,ui.core.canvas_resolution,rotation),ui.core.brain_vertices));
var line = ((function (starting_time,vertices){
return (function (a,b){
var G__343539 = ctx;
G__343539.beginPath();

G__343539.moveTo(vertices.call(null,a).call(null,(0)),vertices.call(null,a).call(null,(1)));

G__343539.lineTo(vertices.call(null,b).call(null,(0)),vertices.call(null,b).call(null,(1)));

G__343539.stroke();

return G__343539;
});})(starting_time,vertices))
;
var rgb = ((function (starting_time,vertices,line){
return (function (color,brightness,opaque){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (starting_time,vertices,line){
return (function ui$core$render_brain_$_iter__343540(s__343541){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line){
return (function (){
var s__343541__$1 = s__343541;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__343541__$1);
if(temp__6728__auto__){
var s__343541__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343541__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__343541__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__343543 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__343542 = (0);
while(true){
if((i__343542 < size__35243__auto__)){
var c = cljs.core._nth.call(null,c__35242__auto__,i__343542);
cljs.core.chunk_append.call(null,b__343543,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34730__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34731__auto__ = (255);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})()) + (((1) - colored) * (255))) | (0));
})());

var G__343630 = (i__343542 + (1));
i__343542 = G__343630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343543),ui$core$render_brain_$_iter__343540.call(null,cljs.core.chunk_rest.call(null,s__343541__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343543),null);
}
} else {
var c = cljs.core.first.call(null,s__343541__$2);
return cljs.core.cons.call(null,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34730__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34731__auto__ = (255);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})()) + (((1) - colored) * (255))) | (0));
})(),ui$core$render_brain_$_iter__343540.call(null,cljs.core.rest.call(null,s__343541__$2)));
}
} else {
return null;
}
break;
}
});})(starting_time,vertices,line))
,null,null));
});})(starting_time,vertices,line))
;
return iter__35244__auto__.call(null,color);
})()),(cljs.core.truth_(opaque)?((0) + ((1) * new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)))):(0.05 + (0.45 * new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)))))))))].join('');
});})(starting_time,vertices,line))
;
var set_color = ((function (starting_time,vertices,line,rgb){
return (function (color,brightness){
return ctx.strokeStyle = rgb.call(null,color,brightness,false);
});})(starting_time,vertices,line,rgb))
;
var render_text = ((function (starting_time,vertices,line,rgb,set_color){
return (function (label,text,color,z_begin,z_end){
if((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)) > (0))){
ctx.lineWidth = (4);

var vec__343544_343631 = ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label);
var x_343632 = cljs.core.nth.call(null,vec__343544_343631,(0),null);
var y_343633 = cljs.core.nth.call(null,vec__343544_343631,(1),null);
var z_343634 = cljs.core.nth.call(null,vec__343544_343631,(2),null);
if(((z_begin < z_343634)) && ((z_343634 < z_end))){
ctx.strokeStyle = "#111A22";

ctx.fillStyle = rgb.call(null,color,((z_343634 * (2)) + (1)),true);

cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (vec__343544_343631,x_343632,y_343633,z_343634,starting_time,vertices,line,rgb,set_color){
return (function (index,s){
var G__343547 = ctx;
G__343547.strokeText(s,x_343632,(y_343633 + (index * (15))));

G__343547.fillText(s,x_343632,(y_343633 + (index * (15))));

return G__343547;
});})(vec__343544_343631,x_343632,y_343633,z_343634,starting_time,vertices,line,rgb,set_color))
,clojure.string.split.call(null,text,/ /)));
} else {
}

return ctx.lineWidth = (1);
} else {
return null;
}
});})(starting_time,vertices,line,rgb,set_color))
;
var sections = new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
ctx.clearRect((0),(0),ui.core.canvas_resolution,ui.core.canvas_resolution);

ctx.font = "15px sans-serif";

ctx.textAlign = "center";

if(cljs.core.seq.call(null,sections)){
var seq__343548_343635 = cljs.core.seq.call(null,render_graph);
var chunk__343549_343636 = null;
var count__343550_343637 = (0);
var i__343551_343638 = (0);
while(true){
if((i__343551_343638 < count__343550_343637)){
var map__343552_343639 = cljs.core._nth.call(null,chunk__343549_343636,i__343551_343638);
var map__343552_343640__$1 = ((((!((map__343552_343639 == null)))?((((map__343552_343639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343552_343639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343552_343639):map__343552_343639);
var region_343641 = cljs.core.get.call(null,map__343552_343640__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_343642 = cljs.core.get.call(null,map__343552_343640__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_343643 = cljs.core.get.call(null,map__343552_343640__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_343644 = cljs.core.get.call(null,map__343552_343640__$1,new cljs.core.Keyword(null,"label","label",1718410804));
render_text.call(null,label_343644,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_343641)),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_343641))),(-1000),(0));

var G__343645 = seq__343548_343635;
var G__343646 = chunk__343549_343636;
var G__343647 = count__343550_343637;
var G__343648 = (i__343551_343638 + (1));
seq__343548_343635 = G__343645;
chunk__343549_343636 = G__343646;
count__343550_343637 = G__343647;
i__343551_343638 = G__343648;
continue;
} else {
var temp__6728__auto___343649 = cljs.core.seq.call(null,seq__343548_343635);
if(temp__6728__auto___343649){
var seq__343548_343650__$1 = temp__6728__auto___343649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343548_343650__$1)){
var c__35293__auto___343651 = cljs.core.chunk_first.call(null,seq__343548_343650__$1);
var G__343652 = cljs.core.chunk_rest.call(null,seq__343548_343650__$1);
var G__343653 = c__35293__auto___343651;
var G__343654 = cljs.core.count.call(null,c__35293__auto___343651);
var G__343655 = (0);
seq__343548_343635 = G__343652;
chunk__343549_343636 = G__343653;
count__343550_343637 = G__343654;
i__343551_343638 = G__343655;
continue;
} else {
var map__343554_343656 = cljs.core.first.call(null,seq__343548_343650__$1);
var map__343554_343657__$1 = ((((!((map__343554_343656 == null)))?((((map__343554_343656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343554_343656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343554_343656):map__343554_343656);
var region_343658 = cljs.core.get.call(null,map__343554_343657__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_343659 = cljs.core.get.call(null,map__343554_343657__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_343660 = cljs.core.get.call(null,map__343554_343657__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_343661 = cljs.core.get.call(null,map__343554_343657__$1,new cljs.core.Keyword(null,"label","label",1718410804));
render_text.call(null,label_343661,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_343658)),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_343658))),(-1000),(0));

var G__343662 = cljs.core.next.call(null,seq__343548_343650__$1);
var G__343663 = null;
var G__343664 = (0);
var G__343665 = (0);
seq__343548_343635 = G__343662;
chunk__343549_343636 = G__343663;
count__343550_343637 = G__343664;
i__343551_343638 = G__343665;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__343556_343666 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),-0.3,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3,0.3,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,(1000),(2)], null)], null));
var chunk__343557_343667 = null;
var count__343558_343668 = (0);
var i__343559_343669 = (0);
while(true){
if((i__343559_343669 < count__343558_343668)){
var vec__343560_343670 = cljs.core._nth.call(null,chunk__343557_343667,i__343559_343669);
var begin_343671 = cljs.core.nth.call(null,vec__343560_343670,(0),null);
var end_343672 = cljs.core.nth.call(null,vec__343560_343670,(1),null);
var brightness_343673 = cljs.core.nth.call(null,vec__343560_343670,(2),null);
var seq__343563_343674 = cljs.core.seq.call(null,render_graph);
var chunk__343564_343675 = null;
var count__343565_343676 = (0);
var i__343566_343677 = (0);
while(true){
if((i__343566_343677 < count__343565_343676)){
var map__343567_343678 = cljs.core._nth.call(null,chunk__343564_343675,i__343566_343677);
var map__343567_343679__$1 = ((((!((map__343567_343678 == null)))?((((map__343567_343678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343567_343678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343567_343678):map__343567_343678);
var region_343680 = cljs.core.get.call(null,map__343567_343679__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_343681 = cljs.core.get.call(null,map__343567_343679__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_343682 = cljs.core.get.call(null,map__343567_343679__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_343683 = cljs.core.get.call(null,map__343567_343679__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_343684 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_343680))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_343684,brightness_343673);

var seq__343569_343685 = cljs.core.seq.call(null,faces_343681);
var chunk__343570_343686 = null;
var count__343571_343687 = (0);
var i__343572_343688 = (0);
while(true){
if((i__343572_343688 < count__343571_343687)){
var vec__343573_343689 = cljs.core._nth.call(null,chunk__343570_343686,i__343572_343688);
var a_343690 = cljs.core.nth.call(null,vec__343573_343689,(0),null);
var b_343691 = cljs.core.nth.call(null,vec__343573_343689,(1),null);
var c_343692 = cljs.core.nth.call(null,vec__343573_343689,(2),null);
var face_343693 = vec__343573_343689;
if(((begin_343671 < vertices.call(null,a_343690).call(null,(2)))) && ((vertices.call(null,a_343690).call(null,(2)) < end_343672))){
line.call(null,a_343690,b_343691);
} else {
}

var G__343694 = seq__343569_343685;
var G__343695 = chunk__343570_343686;
var G__343696 = count__343571_343687;
var G__343697 = (i__343572_343688 + (1));
seq__343569_343685 = G__343694;
chunk__343570_343686 = G__343695;
count__343571_343687 = G__343696;
i__343572_343688 = G__343697;
continue;
} else {
var temp__6728__auto___343698 = cljs.core.seq.call(null,seq__343569_343685);
if(temp__6728__auto___343698){
var seq__343569_343699__$1 = temp__6728__auto___343698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343569_343699__$1)){
var c__35293__auto___343700 = cljs.core.chunk_first.call(null,seq__343569_343699__$1);
var G__343701 = cljs.core.chunk_rest.call(null,seq__343569_343699__$1);
var G__343702 = c__35293__auto___343700;
var G__343703 = cljs.core.count.call(null,c__35293__auto___343700);
var G__343704 = (0);
seq__343569_343685 = G__343701;
chunk__343570_343686 = G__343702;
count__343571_343687 = G__343703;
i__343572_343688 = G__343704;
continue;
} else {
var vec__343576_343705 = cljs.core.first.call(null,seq__343569_343699__$1);
var a_343706 = cljs.core.nth.call(null,vec__343576_343705,(0),null);
var b_343707 = cljs.core.nth.call(null,vec__343576_343705,(1),null);
var c_343708 = cljs.core.nth.call(null,vec__343576_343705,(2),null);
var face_343709 = vec__343576_343705;
if(((begin_343671 < vertices.call(null,a_343706).call(null,(2)))) && ((vertices.call(null,a_343706).call(null,(2)) < end_343672))){
line.call(null,a_343706,b_343707);
} else {
}

var G__343710 = cljs.core.next.call(null,seq__343569_343699__$1);
var G__343711 = null;
var G__343712 = (0);
var G__343713 = (0);
seq__343569_343685 = G__343710;
chunk__343570_343686 = G__343711;
count__343571_343687 = G__343712;
i__343572_343688 = G__343713;
continue;
}
} else {
}
}
break;
}

var G__343714 = seq__343563_343674;
var G__343715 = chunk__343564_343675;
var G__343716 = count__343565_343676;
var G__343717 = (i__343566_343677 + (1));
seq__343563_343674 = G__343714;
chunk__343564_343675 = G__343715;
count__343565_343676 = G__343716;
i__343566_343677 = G__343717;
continue;
} else {
var temp__6728__auto___343718 = cljs.core.seq.call(null,seq__343563_343674);
if(temp__6728__auto___343718){
var seq__343563_343719__$1 = temp__6728__auto___343718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343563_343719__$1)){
var c__35293__auto___343720 = cljs.core.chunk_first.call(null,seq__343563_343719__$1);
var G__343721 = cljs.core.chunk_rest.call(null,seq__343563_343719__$1);
var G__343722 = c__35293__auto___343720;
var G__343723 = cljs.core.count.call(null,c__35293__auto___343720);
var G__343724 = (0);
seq__343563_343674 = G__343721;
chunk__343564_343675 = G__343722;
count__343565_343676 = G__343723;
i__343566_343677 = G__343724;
continue;
} else {
var map__343579_343725 = cljs.core.first.call(null,seq__343563_343719__$1);
var map__343579_343726__$1 = ((((!((map__343579_343725 == null)))?((((map__343579_343725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343579_343725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343579_343725):map__343579_343725);
var region_343727 = cljs.core.get.call(null,map__343579_343726__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_343728 = cljs.core.get.call(null,map__343579_343726__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_343729 = cljs.core.get.call(null,map__343579_343726__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_343730 = cljs.core.get.call(null,map__343579_343726__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_343731 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_343727))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_343731,brightness_343673);

var seq__343581_343732 = cljs.core.seq.call(null,faces_343728);
var chunk__343582_343733 = null;
var count__343583_343734 = (0);
var i__343584_343735 = (0);
while(true){
if((i__343584_343735 < count__343583_343734)){
var vec__343585_343736 = cljs.core._nth.call(null,chunk__343582_343733,i__343584_343735);
var a_343737 = cljs.core.nth.call(null,vec__343585_343736,(0),null);
var b_343738 = cljs.core.nth.call(null,vec__343585_343736,(1),null);
var c_343739 = cljs.core.nth.call(null,vec__343585_343736,(2),null);
var face_343740 = vec__343585_343736;
if(((begin_343671 < vertices.call(null,a_343737).call(null,(2)))) && ((vertices.call(null,a_343737).call(null,(2)) < end_343672))){
line.call(null,a_343737,b_343738);
} else {
}

var G__343741 = seq__343581_343732;
var G__343742 = chunk__343582_343733;
var G__343743 = count__343583_343734;
var G__343744 = (i__343584_343735 + (1));
seq__343581_343732 = G__343741;
chunk__343582_343733 = G__343742;
count__343583_343734 = G__343743;
i__343584_343735 = G__343744;
continue;
} else {
var temp__6728__auto___343745__$1 = cljs.core.seq.call(null,seq__343581_343732);
if(temp__6728__auto___343745__$1){
var seq__343581_343746__$1 = temp__6728__auto___343745__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343581_343746__$1)){
var c__35293__auto___343747 = cljs.core.chunk_first.call(null,seq__343581_343746__$1);
var G__343748 = cljs.core.chunk_rest.call(null,seq__343581_343746__$1);
var G__343749 = c__35293__auto___343747;
var G__343750 = cljs.core.count.call(null,c__35293__auto___343747);
var G__343751 = (0);
seq__343581_343732 = G__343748;
chunk__343582_343733 = G__343749;
count__343583_343734 = G__343750;
i__343584_343735 = G__343751;
continue;
} else {
var vec__343588_343752 = cljs.core.first.call(null,seq__343581_343746__$1);
var a_343753 = cljs.core.nth.call(null,vec__343588_343752,(0),null);
var b_343754 = cljs.core.nth.call(null,vec__343588_343752,(1),null);
var c_343755 = cljs.core.nth.call(null,vec__343588_343752,(2),null);
var face_343756 = vec__343588_343752;
if(((begin_343671 < vertices.call(null,a_343753).call(null,(2)))) && ((vertices.call(null,a_343753).call(null,(2)) < end_343672))){
line.call(null,a_343753,b_343754);
} else {
}

var G__343757 = cljs.core.next.call(null,seq__343581_343746__$1);
var G__343758 = null;
var G__343759 = (0);
var G__343760 = (0);
seq__343581_343732 = G__343757;
chunk__343582_343733 = G__343758;
count__343583_343734 = G__343759;
i__343584_343735 = G__343760;
continue;
}
} else {
}
}
break;
}

var G__343761 = cljs.core.next.call(null,seq__343563_343719__$1);
var G__343762 = null;
var G__343763 = (0);
var G__343764 = (0);
seq__343563_343674 = G__343761;
chunk__343564_343675 = G__343762;
count__343565_343676 = G__343763;
i__343566_343677 = G__343764;
continue;
}
} else {
}
}
break;
}

var G__343765 = seq__343556_343666;
var G__343766 = chunk__343557_343667;
var G__343767 = count__343558_343668;
var G__343768 = (i__343559_343669 + (1));
seq__343556_343666 = G__343765;
chunk__343557_343667 = G__343766;
count__343558_343668 = G__343767;
i__343559_343669 = G__343768;
continue;
} else {
var temp__6728__auto___343769 = cljs.core.seq.call(null,seq__343556_343666);
if(temp__6728__auto___343769){
var seq__343556_343770__$1 = temp__6728__auto___343769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343556_343770__$1)){
var c__35293__auto___343771 = cljs.core.chunk_first.call(null,seq__343556_343770__$1);
var G__343772 = cljs.core.chunk_rest.call(null,seq__343556_343770__$1);
var G__343773 = c__35293__auto___343771;
var G__343774 = cljs.core.count.call(null,c__35293__auto___343771);
var G__343775 = (0);
seq__343556_343666 = G__343772;
chunk__343557_343667 = G__343773;
count__343558_343668 = G__343774;
i__343559_343669 = G__343775;
continue;
} else {
var vec__343591_343776 = cljs.core.first.call(null,seq__343556_343770__$1);
var begin_343777 = cljs.core.nth.call(null,vec__343591_343776,(0),null);
var end_343778 = cljs.core.nth.call(null,vec__343591_343776,(1),null);
var brightness_343779 = cljs.core.nth.call(null,vec__343591_343776,(2),null);
var seq__343594_343780 = cljs.core.seq.call(null,render_graph);
var chunk__343595_343781 = null;
var count__343596_343782 = (0);
var i__343597_343783 = (0);
while(true){
if((i__343597_343783 < count__343596_343782)){
var map__343598_343784 = cljs.core._nth.call(null,chunk__343595_343781,i__343597_343783);
var map__343598_343785__$1 = ((((!((map__343598_343784 == null)))?((((map__343598_343784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343598_343784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343598_343784):map__343598_343784);
var region_343786 = cljs.core.get.call(null,map__343598_343785__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_343787 = cljs.core.get.call(null,map__343598_343785__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_343788 = cljs.core.get.call(null,map__343598_343785__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_343789 = cljs.core.get.call(null,map__343598_343785__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_343790 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_343786))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_343790,brightness_343779);

var seq__343600_343791 = cljs.core.seq.call(null,faces_343787);
var chunk__343601_343792 = null;
var count__343602_343793 = (0);
var i__343603_343794 = (0);
while(true){
if((i__343603_343794 < count__343602_343793)){
var vec__343604_343795 = cljs.core._nth.call(null,chunk__343601_343792,i__343603_343794);
var a_343796 = cljs.core.nth.call(null,vec__343604_343795,(0),null);
var b_343797 = cljs.core.nth.call(null,vec__343604_343795,(1),null);
var c_343798 = cljs.core.nth.call(null,vec__343604_343795,(2),null);
var face_343799 = vec__343604_343795;
if(((begin_343777 < vertices.call(null,a_343796).call(null,(2)))) && ((vertices.call(null,a_343796).call(null,(2)) < end_343778))){
line.call(null,a_343796,b_343797);
} else {
}

var G__343800 = seq__343600_343791;
var G__343801 = chunk__343601_343792;
var G__343802 = count__343602_343793;
var G__343803 = (i__343603_343794 + (1));
seq__343600_343791 = G__343800;
chunk__343601_343792 = G__343801;
count__343602_343793 = G__343802;
i__343603_343794 = G__343803;
continue;
} else {
var temp__6728__auto___343804__$1 = cljs.core.seq.call(null,seq__343600_343791);
if(temp__6728__auto___343804__$1){
var seq__343600_343805__$1 = temp__6728__auto___343804__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343600_343805__$1)){
var c__35293__auto___343806 = cljs.core.chunk_first.call(null,seq__343600_343805__$1);
var G__343807 = cljs.core.chunk_rest.call(null,seq__343600_343805__$1);
var G__343808 = c__35293__auto___343806;
var G__343809 = cljs.core.count.call(null,c__35293__auto___343806);
var G__343810 = (0);
seq__343600_343791 = G__343807;
chunk__343601_343792 = G__343808;
count__343602_343793 = G__343809;
i__343603_343794 = G__343810;
continue;
} else {
var vec__343607_343811 = cljs.core.first.call(null,seq__343600_343805__$1);
var a_343812 = cljs.core.nth.call(null,vec__343607_343811,(0),null);
var b_343813 = cljs.core.nth.call(null,vec__343607_343811,(1),null);
var c_343814 = cljs.core.nth.call(null,vec__343607_343811,(2),null);
var face_343815 = vec__343607_343811;
if(((begin_343777 < vertices.call(null,a_343812).call(null,(2)))) && ((vertices.call(null,a_343812).call(null,(2)) < end_343778))){
line.call(null,a_343812,b_343813);
} else {
}

var G__343816 = cljs.core.next.call(null,seq__343600_343805__$1);
var G__343817 = null;
var G__343818 = (0);
var G__343819 = (0);
seq__343600_343791 = G__343816;
chunk__343601_343792 = G__343817;
count__343602_343793 = G__343818;
i__343603_343794 = G__343819;
continue;
}
} else {
}
}
break;
}

var G__343820 = seq__343594_343780;
var G__343821 = chunk__343595_343781;
var G__343822 = count__343596_343782;
var G__343823 = (i__343597_343783 + (1));
seq__343594_343780 = G__343820;
chunk__343595_343781 = G__343821;
count__343596_343782 = G__343822;
i__343597_343783 = G__343823;
continue;
} else {
var temp__6728__auto___343824__$1 = cljs.core.seq.call(null,seq__343594_343780);
if(temp__6728__auto___343824__$1){
var seq__343594_343825__$1 = temp__6728__auto___343824__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343594_343825__$1)){
var c__35293__auto___343826 = cljs.core.chunk_first.call(null,seq__343594_343825__$1);
var G__343827 = cljs.core.chunk_rest.call(null,seq__343594_343825__$1);
var G__343828 = c__35293__auto___343826;
var G__343829 = cljs.core.count.call(null,c__35293__auto___343826);
var G__343830 = (0);
seq__343594_343780 = G__343827;
chunk__343595_343781 = G__343828;
count__343596_343782 = G__343829;
i__343597_343783 = G__343830;
continue;
} else {
var map__343610_343831 = cljs.core.first.call(null,seq__343594_343825__$1);
var map__343610_343832__$1 = ((((!((map__343610_343831 == null)))?((((map__343610_343831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343610_343831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343610_343831):map__343610_343831);
var region_343833 = cljs.core.get.call(null,map__343610_343832__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_343834 = cljs.core.get.call(null,map__343610_343832__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_343835 = cljs.core.get.call(null,map__343610_343832__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_343836 = cljs.core.get.call(null,map__343610_343832__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_343837 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_343833))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_343837,brightness_343779);

var seq__343612_343838 = cljs.core.seq.call(null,faces_343834);
var chunk__343613_343839 = null;
var count__343614_343840 = (0);
var i__343615_343841 = (0);
while(true){
if((i__343615_343841 < count__343614_343840)){
var vec__343616_343842 = cljs.core._nth.call(null,chunk__343613_343839,i__343615_343841);
var a_343843 = cljs.core.nth.call(null,vec__343616_343842,(0),null);
var b_343844 = cljs.core.nth.call(null,vec__343616_343842,(1),null);
var c_343845 = cljs.core.nth.call(null,vec__343616_343842,(2),null);
var face_343846 = vec__343616_343842;
if(((begin_343777 < vertices.call(null,a_343843).call(null,(2)))) && ((vertices.call(null,a_343843).call(null,(2)) < end_343778))){
line.call(null,a_343843,b_343844);
} else {
}

var G__343847 = seq__343612_343838;
var G__343848 = chunk__343613_343839;
var G__343849 = count__343614_343840;
var G__343850 = (i__343615_343841 + (1));
seq__343612_343838 = G__343847;
chunk__343613_343839 = G__343848;
count__343614_343840 = G__343849;
i__343615_343841 = G__343850;
continue;
} else {
var temp__6728__auto___343851__$2 = cljs.core.seq.call(null,seq__343612_343838);
if(temp__6728__auto___343851__$2){
var seq__343612_343852__$1 = temp__6728__auto___343851__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343612_343852__$1)){
var c__35293__auto___343853 = cljs.core.chunk_first.call(null,seq__343612_343852__$1);
var G__343854 = cljs.core.chunk_rest.call(null,seq__343612_343852__$1);
var G__343855 = c__35293__auto___343853;
var G__343856 = cljs.core.count.call(null,c__35293__auto___343853);
var G__343857 = (0);
seq__343612_343838 = G__343854;
chunk__343613_343839 = G__343855;
count__343614_343840 = G__343856;
i__343615_343841 = G__343857;
continue;
} else {
var vec__343619_343858 = cljs.core.first.call(null,seq__343612_343852__$1);
var a_343859 = cljs.core.nth.call(null,vec__343619_343858,(0),null);
var b_343860 = cljs.core.nth.call(null,vec__343619_343858,(1),null);
var c_343861 = cljs.core.nth.call(null,vec__343619_343858,(2),null);
var face_343862 = vec__343619_343858;
if(((begin_343777 < vertices.call(null,a_343859).call(null,(2)))) && ((vertices.call(null,a_343859).call(null,(2)) < end_343778))){
line.call(null,a_343859,b_343860);
} else {
}

var G__343863 = cljs.core.next.call(null,seq__343612_343852__$1);
var G__343864 = null;
var G__343865 = (0);
var G__343866 = (0);
seq__343612_343838 = G__343863;
chunk__343613_343839 = G__343864;
count__343614_343840 = G__343865;
i__343615_343841 = G__343866;
continue;
}
} else {
}
}
break;
}

var G__343867 = cljs.core.next.call(null,seq__343594_343825__$1);
var G__343868 = null;
var G__343869 = (0);
var G__343870 = (0);
seq__343594_343780 = G__343867;
chunk__343595_343781 = G__343868;
count__343596_343782 = G__343869;
i__343597_343783 = G__343870;
continue;
}
} else {
}
}
break;
}

var G__343871 = cljs.core.next.call(null,seq__343556_343770__$1);
var G__343872 = null;
var G__343873 = (0);
var G__343874 = (0);
seq__343556_343666 = G__343871;
chunk__343557_343667 = G__343872;
count__343558_343668 = G__343873;
i__343559_343669 = G__343874;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq.call(null,sections)){
var seq__343622 = cljs.core.seq.call(null,render_graph);
var chunk__343623 = null;
var count__343624 = (0);
var i__343625 = (0);
while(true){
if((i__343625 < count__343624)){
var map__343626 = cljs.core._nth.call(null,chunk__343623,i__343625);
var map__343626__$1 = ((((!((map__343626 == null)))?((((map__343626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343626):map__343626);
var region = cljs.core.get.call(null,map__343626__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces = cljs.core.get.call(null,map__343626__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid = cljs.core.get.call(null,map__343626__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__343626__$1,new cljs.core.Keyword(null,"label","label",1718410804));
render_text.call(null,label,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),(0),(1000));

var G__343875 = seq__343622;
var G__343876 = chunk__343623;
var G__343877 = count__343624;
var G__343878 = (i__343625 + (1));
seq__343622 = G__343875;
chunk__343623 = G__343876;
count__343624 = G__343877;
i__343625 = G__343878;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__343622);
if(temp__6728__auto__){
var seq__343622__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343622__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__343622__$1);
var G__343879 = cljs.core.chunk_rest.call(null,seq__343622__$1);
var G__343880 = c__35293__auto__;
var G__343881 = cljs.core.count.call(null,c__35293__auto__);
var G__343882 = (0);
seq__343622 = G__343879;
chunk__343623 = G__343880;
count__343624 = G__343881;
i__343625 = G__343882;
continue;
} else {
var map__343628 = cljs.core.first.call(null,seq__343622__$1);
var map__343628__$1 = ((((!((map__343628 == null)))?((((map__343628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343628):map__343628);
var region = cljs.core.get.call(null,map__343628__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces = cljs.core.get.call(null,map__343628__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid = cljs.core.get.call(null,map__343628__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__343628__$1,new cljs.core.Keyword(null,"label","label",1718410804));
render_text.call(null,label,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),(0),(1000));

var G__343883 = cljs.core.next.call(null,seq__343622__$1);
var G__343884 = null;
var G__343885 = (0);
var G__343886 = (0);
seq__343622 = G__343883;
chunk__343623 = G__343884;
count__343624 = G__343885;
i__343625 = G__343886;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * @constructor
 */
ui.core.Brain = (function ui$core$Brain(){
var this__40608__auto__ = this;
React.Component.apply(this__40608__auto__,arguments);

if(!((this__40608__auto__.initLocalState == null))){
this__40608__auto__.state = this__40608__auto__.initLocalState();
} else {
this__40608__auto__.state = {};
}

return this__40608__auto__;
});

ui.core.Brain.prototype = goog.object.clone(React.Component.prototype);

var x343891_343921 = ui.core.Brain.prototype;
x343891_343921.componentWillUpdate = ((function (x343891_343921){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___343922 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___343923 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___343922,next_ident__40467__auto___343923)){
var idxr__40468__auto___343924 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___343924 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___343924),((function (idxr__40468__auto___343924,ident__40466__auto___343922,next_ident__40467__auto___343923,this__40462__auto__,x343891_343921){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___343922], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___343923], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___343924,ident__40466__auto___343922,next_ident__40467__auto___343923,this__40462__auto__,x343891_343921))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x343891_343921))
;

x343891_343921.shouldComponentUpdate = ((function (x343891_343921){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__343893 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__343893);
} else {
return G__343893;
}
})();
var or__34390__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__40462__auto__),next_props__40463__auto____$2);
if(or__34390__auto__){
return or__34390__auto__;
} else {
var or__34390__auto____$1 = (function (){var and__34378__auto__ = this__40462__auto__.state;
if(cljs.core.truth_(and__34378__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__40462__auto__.state,"omcljs$state"),goog.object.get(next_state__40464__auto__,"omcljs$state"));
} else {
return and__34378__auto__;
}
})();
if(cljs.core.truth_(or__34390__auto____$1)){
return or__34390__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__40462__auto__.props.children,next_children__40465__auto__);
}
}
});})(x343891_343921))
;

x343891_343921.componentDidUpdate = ((function (x343891_343921){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x343891_343921))
;

x343891_343921.isMounted = ((function (x343891_343921){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x343891_343921))
;

x343891_343921.componentWillMount = ((function (x343891_343921){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343891_343921))
;

x343891_343921.initLocalState = ((function (x343891_343921){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1708495417),null], null);
var obj343895 = {"omcljs$state":ret__40440__auto__};
return obj343895;
});})(x343891_343921))
;

x343891_343921.componentDidMount = ((function (x343891_343921){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"interval","interval",1708495417),setInterval(((function (this$,x343891_343921){
return (function (){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.update,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),((function (this$,x343891_343921){
return (function (rotation){
ui.core.render_brain.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)).getContext("2d"),rotation,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));

return (rotation + 0.01);
});})(this$,x343891_343921))
);
});})(this$,x343891_343921))
,(50)));
});})(x343891_343921))
;

x343891_343921.componentWillUnmount = ((function (x343891_343921){
return (function (){
var this__40456__auto__ = this;
var this$ = this__40456__auto__;
var r__40457__auto__ = om.next.get_reconciler.call(null,this__40456__auto__);
var cfg__40458__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__40457__auto__);
var st__40459__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__40458__auto__);
var indexer__40460__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__40458__auto__);
if(cljs.core.truth_((function (){var and__34378__auto__ = !((st__40459__auto__ == null));
if(and__34378__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__40459__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__40456__auto__], null));
} else {
return and__34378__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__40459__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__40456__auto__);
} else {
}

if((indexer__40460__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_.call(null,indexer__40460__auto__,this__40456__auto__);
}

return clearInterval(new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)));
});})(x343891_343921))
;

x343891_343921.render = ((function (x343891_343921){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_343896 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_343897 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_343898 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_343899 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_343900 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__343901 = om.next.props.call(null,this$);
var map__343901__$1 = ((((!((map__343901 == null)))?((((map__343901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343901):map__343901);
var props = map__343901__$1;
var items = cljs.core.get.call(null,map__343901__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
var loading = cljs.core.not.call(null,cljs.core.seq.call(null,items));
var scores = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (map__343901,map__343901__$1,props,items,loading,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921){
return (function ui$core$iter__343904(s__343905){
return (new cljs.core.LazySeq(null,((function (map__343901,map__343901__$1,props,items,loading,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921){
return (function (){
var s__343905__$1 = s__343905;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__343905__$1);
if(temp__6728__auto__){
var s__343905__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343905__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__343905__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__343907 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__343906 = (0);
while(true){
if((i__343906 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__343906);
cljs.core.chunk_append.call(null,b__343907,(function (){var map__343912 = item;
var map__343912__$1 = ((((!((map__343912 == null)))?((((map__343912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343912):map__343912);
var votes = cljs.core.get.call(null,map__343912__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34723__auto__ = (0);
var y__34724__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})());

var G__343925 = (i__343906 + (1));
i__343906 = G__343925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343907),ui$core$iter__343904.call(null,cljs.core.chunk_rest.call(null,s__343905__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343907),null);
}
} else {
var item = cljs.core.first.call(null,s__343905__$2);
return cljs.core.cons.call(null,(function (){var map__343914 = item;
var map__343914__$1 = ((((!((map__343914 == null)))?((((map__343914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343914):map__343914);
var votes = cljs.core.get.call(null,map__343914__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34723__auto__ = (0);
var y__34724__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})(),ui$core$iter__343904.call(null,cljs.core.rest.call(null,s__343905__$2)));
}
} else {
return null;
}
break;
}
});})(map__343901,map__343901__$1,props,items,loading,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921))
,null,null));
});})(map__343901,map__343901__$1,props,items,loading,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921))
;
return iter__35244__auto__.call(null,items);
})());
var sections = cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__343901,map__343901__$1,props,items,loading,scores,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921){
return (function (index,item,score){
var map__343916 = item;
var map__343916__$1 = ((((!((map__343916 == null)))?((((map__343916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343916):map__343916);
var description = cljs.core.get.call(null,map__343916__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("item","description","item/description",-1431609213).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var x__34723__auto__ = score;
var y__34724__auto__ = (cljs.core.apply.call(null,cljs.core._PLUS_,scores) / (50));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})(),new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});})(map__343901,map__343901__$1,props,items,loading,scores,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921))
,cljs.core.range.call(null),items,scores));
var sections__$1 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core._,new cljs.core.Keyword(null,"size","size",1098693007)),sections));
var map__343902 = om.next.get_computed.call(null,props);
var map__343902__$1 = ((((!((map__343902 == null)))?((((map__343902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343902):map__343902);
var mode = cljs.core.get.call(null,map__343902__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
cljs.core.swap_BANG_.call(null,ui.core.brain_state,((function (map__343901,map__343901__$1,props,items,loading,scores,sections,sections__$1,map__343902,map__343902__$1,mode,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921){
return (function (brain_state){
if(cljs.core.not_EQ_.call(null,sections__$1,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(brain_state))){
var br = ui.core.brain_prerender.call(null,sections__$1);
return cljs.core.assoc.call(null,brain_state,new cljs.core.Keyword(null,"sections","sections",-886710106),sections__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958),br,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629),ui.core.render_graph.call(null,ui.core.brain_faces,ui.core.brain_vertices,br));
} else {
return brain_state;
}
});})(map__343901,map__343901__$1,props,items,loading,scores,sections,sections__$1,map__343902,map__343902__$1,mode,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921))
);

return ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"colored","colored",-1421800355),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colored","colored",-1421800355),ui.motion.spring.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"brain","brain",428499577))) && (!(loading)))?(1):(0)),ui.motion.gentle),new cljs.core.Keyword(null,"top","top",-1856271961),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(50):(0))),new cljs.core.Keyword(null,"width","width",-384071477),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(150):(80)),ui.motion.wobbly)], null)], null),((function (map__343901,map__343901__$1,props,items,loading,scores,sections,sections__$1,map__343902,map__343902__$1,mode,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921){
return (function (value){
cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value));

return cljs.core.apply.call(null,React.DOM.div,({"style": ({"width": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "position": "absolute", "zIndex": om_tools.dom.format_opts.call(null,(((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value) > 0.5))?(1):(-1))), "top": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("%")].join(''))})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.canvas(({"ref": om_tools.dom.format_opts.call(null,((function (map__343901,map__343901__$1,props,items,loading,scores,sections,sections__$1,map__343902,map__343902__$1,mode,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921){
return (function (canvas){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas);
});})(map__343901,map__343901__$1,props,items,loading,scores,sections,sections__$1,map__343902,map__343902__$1,mode,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921))
), "width": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "height": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "style": ({"height": "100%", "width": "100%"})})),((loading)?cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "top": "40%", "left": "25%", "right": "25%", "height": "20%"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.p(({"style": ({"textAlign": "center"})}),"Brain Initializing from Ethereum Blockchain"),blueprint_cljs.core.progress_bar.call(null)],null)))):null)],null))));
});})(map__343901,map__343901__$1,props,items,loading,scores,sections,sections__$1,map__343902,map__343902__$1,mode,_STAR_reconciler_STAR_343896,_STAR_depth_STAR_343897,_STAR_shared_STAR_343898,_STAR_instrument_STAR_343899,_STAR_parent_STAR_343900,this$,this__40461__auto__,x343891_343921))
);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_343900;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_343899;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_343898;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_343897;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_343896;
}});})(x343891_343921))
;


ui.core.Brain.prototype.constructor = ui.core.Brain;

ui.core.Brain.prototype.constructor.displayName = "ui.core/Brain";

ui.core.Brain.prototype.om$isComponent = true;

var x343919_343926 = ui.core.Brain;
/** @nocollapse */
x343919_343926.om$next$IQuery$ = true;

/** @nocollapse */
x343919_343926.om$next$IQuery$query$arity$1 = ((function (x343919_343926){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x343919_343926))
;


var x343920_343927 = ui.core.Brain.prototype;

x343920_343927.om$next$IQuery$ = true;


x343920_343927.om$next$IQuery$query$arity$1 = ((function (x343920_343927){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x343920_343927))
;


ui.core.Brain.cljs$lang$type = true;

ui.core.Brain.cljs$lang$ctorStr = "ui.core/Brain";

ui.core.Brain.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Brain");
});
ui.core.brain_component = om.next.factory.call(null,ui.core.Brain);
/**
 * @constructor
 */
ui.core.Root = (function ui$core$Root(){
var this__40608__auto__ = this;
React.Component.apply(this__40608__auto__,arguments);

if(!((this__40608__auto__.initLocalState == null))){
this__40608__auto__.state = this__40608__auto__.initLocalState();
} else {
this__40608__auto__.state = {};
}

return this__40608__auto__;
});

ui.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x343932_343946 = ui.core.Root.prototype;
x343932_343946.componentWillUpdate = ((function (x343932_343946){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___343947 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___343948 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___343947,next_ident__40467__auto___343948)){
var idxr__40468__auto___343949 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___343949 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___343949),((function (idxr__40468__auto___343949,ident__40466__auto___343947,next_ident__40467__auto___343948,this__40462__auto__,x343932_343946){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___343947], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___343948], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___343949,ident__40466__auto___343947,next_ident__40467__auto___343948,this__40462__auto__,x343932_343946))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x343932_343946))
;

x343932_343946.shouldComponentUpdate = ((function (x343932_343946){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__343934 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__343934);
} else {
return G__343934;
}
})();
var or__34390__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__40462__auto__),next_props__40463__auto____$2);
if(or__34390__auto__){
return or__34390__auto__;
} else {
var or__34390__auto____$1 = (function (){var and__34378__auto__ = this__40462__auto__.state;
if(cljs.core.truth_(and__34378__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__40462__auto__.state,"omcljs$state"),goog.object.get(next_state__40464__auto__,"omcljs$state"));
} else {
return and__34378__auto__;
}
})();
if(cljs.core.truth_(or__34390__auto____$1)){
return or__34390__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__40462__auto__.props.children,next_children__40465__auto__);
}
}
});})(x343932_343946))
;

x343932_343946.componentDidUpdate = ((function (x343932_343946){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x343932_343946))
;

x343932_343946.isMounted = ((function (x343932_343946){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x343932_343946))
;

x343932_343946.componentWillMount = ((function (x343932_343946){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x343932_343946))
;

x343932_343946.initLocalState = ((function (x343932_343946){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),null], null),new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.Keyword(null,"brain","brain",428499577)], null);
var obj343936 = {"omcljs$state":ret__40440__auto__};
return obj343936;
});})(x343932_343946))
;

x343932_343946.componentDidMount = ((function (x343932_343946){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),(function (){var update_address = ((function (this$,x343932_343946){
return (function (){
var address = (web3.eth.accounts[(0)]);
if(cljs.core.not_EQ_.call(null,address,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"address","address",559499426),address);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","change-address","user/change-address",-1674946809,null)),(function (){var x__35316__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"address","address",559499426)),(function (){var x__35316__auto__ = address;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())))));
} else {
return null;
}
});})(this$,x343932_343946))
;
update_address.call(null);

return setInterval(update_address,(1000));
})()], null));
});})(x343932_343946))
;

x343932_343946.componentWillUnmount = ((function (x343932_343946){
return (function (){
var this__40456__auto__ = this;
var this$ = this__40456__auto__;
var r__40457__auto__ = om.next.get_reconciler.call(null,this__40456__auto__);
var cfg__40458__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__40457__auto__);
var st__40459__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__40458__auto__);
var indexer__40460__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__40458__auto__);
if(cljs.core.truth_((function (){var and__34378__auto__ = !((st__40459__auto__ == null));
if(and__34378__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__40459__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__40456__auto__], null));
} else {
return and__34378__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__40459__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__40456__auto__);
} else {
}

if((indexer__40460__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_.call(null,indexer__40460__auto__,this__40456__auto__);
}

return clearInterval(cljs.core.get_in.call(null,om.next.get_state.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.Keyword(null,"address","address",559499426)], null)));
});})(x343932_343946))
;

x343932_343946.render = ((function (x343932_343946){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_343937 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_343938 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_343939 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_343940 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_343941 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__343942 = om.next.props.call(null,this$);
var map__343942__$1 = ((((!((map__343942 == null)))?((((map__343942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343942):map__343942);
var proposals_props = cljs.core.get.call(null,map__343942__$1,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231));
var stakes_props = cljs.core.get.call(null,map__343942__$1,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339));
var items_props = cljs.core.get.call(null,map__343942__$1,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104));
var brain_props = cljs.core.get.call(null,map__343942__$1,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934));
var network_id = cljs.core.get.call(null,map__343942__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var can_vote_proposal = cljs.core.get.call(null,map__343942__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__343942__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dark", "style": ({"display": "flex", "justifyContent": "center", "zoom": 1.3})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"flexGrow": "1", "maxWidth": "600px"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.tabs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__343942,map__343942__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_343937,_STAR_depth_STAR_343938,_STAR_shared_STAR_343939,_STAR_instrument_STAR_343940,_STAR_parent_STAR_343941,this$,this__40461__auto__,x343932_343946){
return (function (index){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"white","white",-483998618)], null).call(null,index));
});})(map__343942,map__343942__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_343937,_STAR_depth_STAR_343938,_STAR_shared_STAR_343939,_STAR_instrument_STAR_343940,_STAR_parent_STAR_343941,this$,this__40461__auto__,x343932_343946))
], null),blueprint_cljs.core.tab_list.call(null,blueprint_cljs.core.tab.call(null,"Brain"),blueprint_cljs.core.tab.call(null,"Top 10 Items"),blueprint_cljs.core.tab.call(null,"Today's Proposed Items"),blueprint_cljs.core.tab.call(null,"Voting Stakes"),blueprint_cljs.core.tab.call(null,"FAQ")),blueprint_cljs.core.tab_panel.call(null,cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "bottom": (0), "left": (0), "right": (0), "display": "flex", "flexDirection": "column-reverse", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-elevation-4", "style": ({"opacity": om_tools.dom.format_opts.call(null,(cljs.core.truth_(ui.core.web3)?0.5:(1))), "maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(ui.core.web3)?React.DOM.span(({"style": ({"fontSize": "1.5rem"})}),"Ethereans, what's on your mind?"):cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "alignItems": "center", "fontSize": "1.1rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"margin": "0.5em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["EthereanMind requires access to the ",React.DOM.a(({"target": "_blank", "href": "http://ethereum.org"}),"ethereum network "),"to initialize. Please install the ",React.DOM.a(({"target": "_blank", "href": "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"}),"metamask chrome extension"),", or a similar ethereum data source."],null)))),React.DOM.img(({"src": "metamask.png"}))],null)))))],null)))),(cljs.core.truth_((function (){var and__34378__auto__ = ui.core.web3;
if(cljs.core.truth_(and__34378__auto__)){
var and__34378__auto____$1 = network_id;
if(cljs.core.truth_(and__34378__auto____$1)){
return cljs.core.not_EQ_.call(null,network_id,(3));
} else {
return and__34378__auto____$1;
}
} else {
return and__34378__auto__;
}
})())?cljs.core.apply.call(null,React.DOM.div,({"className": "pt-callout pt-intent-danger pt-icon-warning-sign", "style": ({"maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h5(null,"Wrong Network!"),((cljs.core._EQ_.call(null,network_id,(1)))?"You are currently connected to the Ethereum main network which uses real currency. This beta dapp is still running on the Ropsten testnet, which uses free currency. Do not yet use real money with this dapp!":"You are connected to the wrong network! This beta dapp is currently runing on the Ropsten Testnet. In Metamask, change the network option in the upper left corner of the popup window.")],null)))):null)],null))))),blueprint_cljs.core.tab_panel.call(null,ui.core.items_component.call(null,items_props)),blueprint_cljs.core.tab_panel.call(null,ui.core.proposals_component.call(null,proposals_props)),blueprint_cljs.core.tab_panel.call(null,ui.core.stakes_component.call(null,stakes_props)),blueprint_cljs.core.tab_panel.call(null,ui.faq_text.faq_text))],null)))),cljs.core.apply.call(null,React.DOM.div,({"key": "foo", "style": ({"position": "fixed", "display": "flex", "flexDirection": "column", "alignItems": "flex-end", "right": (0), "bottom": (0), "padding": "0.5rem", "opacity": "0.5"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,false,can_vote_proposal))?blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.15em"], null)], null),"Today's proposal action used up"):null),blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.15em"], null)], null),"Current Stake: ",((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?blueprint_cljs.core.spinner.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-small"], null)):stake)," Ether")],null)))),cljs.core.apply.call(null,React.DOM.div,({"key": "bar", "style": ({"pointerEvents": "none ", "top": (0), "width": "100%", "justifyContent": "center", "opacity": (1), "display": "flex", "position": "absolute", "height": "100%", "alignItems": "center", "left": (0)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.core.brain_component.call(null,om.next.computed.call(null,brain_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))], null)))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_343941;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_343940;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_343939;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_343938;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_343937;
}});})(x343932_343946))
;


ui.core.Root.prototype.constructor = ui.core.Root;

ui.core.Root.prototype.constructor.displayName = "ui.core/Root";

ui.core.Root.prototype.om$isComponent = true;

var x343944_343950 = ui.core.Root;
/** @nocollapse */
x343944_343950.om$next$IQuery$ = true;

/** @nocollapse */
x343944_343950.om$next$IQuery$query$arity$1 = ((function (x343944_343950){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x343944_343950))
;


var x343945_343951 = ui.core.Root.prototype;

x343945_343951.om$next$IQuery$ = true;


x343945_343951.om$next$IQuery$query$arity$1 = ((function (x343945_343951){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x343945_343951))
;


ui.core.Root.cljs$lang$type = true;

ui.core.Root.cljs$lang$ctorStr = "ui.core/Root";

ui.core.Root.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Root");
});
ui.core.simple_read = (function ui$core$simple_read(p__343952,key,_){
var map__343955 = p__343952;
var map__343955__$1 = ((((!((map__343955 == null)))?((((map__343955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343955):map__343955);
var env = map__343955__$1;
var state = cljs.core.get.call(null,map__343955__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state).call(null,key)], null);
});
ui.core.simple_read_with_remote = (function ui$core$simple_read_with_remote(p__343957,key,_){
var map__343960 = p__343957;
var map__343960__$1 = ((((!((map__343960 == null)))?((((map__343960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343960):map__343960);
var env = map__343960__$1;
var state = cljs.core.get.call(null,map__343960__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var value = cljs.core.deref.call(null,state).call(null,key);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"remote","remote",-1593576576),cljs.core.not.call(null,value)], null);
});
ui.core.recursive_read = (function ui$core$recursive_read(query_root,p__343962,_,___$1){
var map__343965 = p__343962;
var map__343965__$1 = ((((!((map__343965 == null)))?((((map__343965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343965):map__343965);
var env = map__343965__$1;
var parser = cljs.core.get.call(null,map__343965__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__343965__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__343965__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__343965__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query-root","query-root",359781888),query_root,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}
});
ui.core.recursive_channel_read = (function ui$core$recursive_channel_read(p__343967,_,___$1){
var map__343970 = p__343967;
var map__343970__$1 = ((((!((map__343970 == null)))?((((map__343970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343970):map__343970);
var env = map__343970__$1;
var parser = cljs.core.get.call(null,map__343970__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__343970__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.call(null,map__343970__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var res = parser.call(null,env,query);
return res;
})()], null);
});
if(typeof ui.core.read !== 'undefined'){
} else {
ui.core.read = (function (){var method_table__35413__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35417__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35417__auto__,method_table__35413__auto__,prefer_table__35414__auto__,method_cache__35415__auto__,cached_hierarchy__35416__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),(function() { 
var G__343972__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,true,args);
};
var G__343972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__343973__i = 0, G__343973__a = new Array(arguments.length -  0);
while (G__343973__i < G__343973__a.length) {G__343973__a[G__343973__i] = arguments[G__343973__i + 0]; ++G__343973__i;}
  args = new cljs.core.IndexedSeq(G__343973__a,0);
} 
return G__343972__delegate.call(this,args);};
G__343972.cljs$lang$maxFixedArity = 0;
G__343972.cljs$lang$applyTo = (function (arglist__343974){
var args = cljs.core.seq(arglist__343974);
return G__343972__delegate(args);
});
G__343972.cljs$core$IFn$_invoke$arity$variadic = G__343972__delegate;
return G__343972;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("user","address","user/address",573600859),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),dispatch_key], null))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("user","balance","user/balance",422509480),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),dispatch_key], null))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),dispatch_key], null))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("user","stake","user/stake",-1493851572),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__34390__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.Keyword("user","address","user/address",573600859)], null)),new cljs.core.Keyword("stake","value","stake/value",466231031)], null));
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return (0);
}
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","items","etherean/items",165918606),(function (env,k,params){
var map__343975 = env;
var map__343975__$1 = ((((!((map__343975 == null)))?((((map__343975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343975):map__343975);
var parser = cljs.core.get.call(null,map__343975__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__343975__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__343975__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__343975__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__343975__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__343975,map__343975__$1,parser,state,query,target,ast,state__$1){
return (function ui$core$iter__343977(s__343978){
return (new cljs.core.LazySeq(null,((function (map__343975,map__343975__$1,parser,state,query,target,ast,state__$1){
return (function (){
var s__343978__$1 = s__343978;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__343978__$1);
if(temp__6728__auto__){
var s__343978__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343978__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__343978__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__343980 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__343979 = (0);
while(true){
if((i__343979 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__343979);
cljs.core.chunk_append.call(null,b__343980,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query));

var G__343981 = (i__343979 + (1));
i__343979 = G__343981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343980),ui$core$iter__343977.call(null,cljs.core.chunk_rest.call(null,s__343978__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343980),null);
}
} else {
var item = cljs.core.first.call(null,s__343978__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query),ui$core$iter__343977.call(null,cljs.core.rest.call(null,s__343978__$2)));
}
} else {
return null;
}
break;
}
});})(map__343975,map__343975__$1,parser,state,query,target,ast,state__$1))
,null,null));
});})(map__343975,map__343975__$1,parser,state,query,target,ast,state__$1))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("item","by-id","item/by-id",-2140839086).cljs$core$IFn$_invoke$arity$1(state__$1));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),(function (env,k,params){
var map__343982 = env;
var map__343982__$1 = ((((!((map__343982 == null)))?((((map__343982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343982):map__343982);
var parser = cljs.core.get.call(null,map__343982__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__343982__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__343982__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__343982__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__343982__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__343983 = state__$1;
var map__343983__$1 = ((((!((map__343983 == null)))?((((map__343983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343983):map__343983);
var order = cljs.core.get.call(null,map__343983__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__343982,map__343982__$1,parser,state,query,target,ast,state__$1,map__343983,map__343983__$1,order){
return (function ui$core$iter__343986(s__343987){
return (new cljs.core.LazySeq(null,((function (map__343982,map__343982__$1,parser,state,query,target,ast,state__$1,map__343983,map__343983__$1,order){
return (function (){
var s__343987__$1 = s__343987;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__343987__$1);
if(temp__6728__auto__){
var s__343987__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343987__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__343987__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__343989 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__343988 = (0);
while(true){
if((i__343988 < size__35243__auto__)){
var proposal = cljs.core._nth.call(null,c__35242__auto__,i__343988);
cljs.core.chunk_append.call(null,b__343989,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query));

var G__343990 = (i__343988 + (1));
i__343988 = G__343990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343989),ui$core$iter__343986.call(null,cljs.core.chunk_rest.call(null,s__343987__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343989),null);
}
} else {
var proposal = cljs.core.first.call(null,s__343987__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query),ui$core$iter__343986.call(null,cljs.core.rest.call(null,s__343987__$2)));
}
} else {
return null;
}
break;
}
});})(map__343982,map__343982__$1,parser,state,query,target,ast,state__$1,map__343983,map__343983__$1,order))
,null,null));
});})(map__343982,map__343982__$1,parser,state,query,target,ast,state__$1,map__343983,map__343983__$1,order))
;
return iter__35244__auto__.call(null,order);
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
var map__343991 = env;
var map__343991__$1 = ((((!((map__343991 == null)))?((((map__343991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343991):map__343991);
var parser = cljs.core.get.call(null,map__343991__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__343991__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__343991__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__343991__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__343991__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__343992 = state__$1;
var map__343992__$1 = ((((!((map__343992 == null)))?((((map__343992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__343992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__343992):map__343992);
var by_id = cljs.core.get.call(null,map__343992__$1,new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__343991,map__343991__$1,parser,state,query,target,ast,state__$1,map__343992,map__343992__$1,by_id){
return (function ui$core$iter__343995(s__343996){
return (new cljs.core.LazySeq(null,((function (map__343991,map__343991__$1,parser,state,query,target,ast,state__$1,map__343992,map__343992__$1,by_id){
return (function (){
var s__343996__$1 = s__343996;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__343996__$1);
if(temp__6728__auto__){
var s__343996__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__343996__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__343996__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__343998 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__343997 = (0);
while(true){
if((i__343997 < size__35243__auto__)){
var stake = cljs.core._nth.call(null,c__35242__auto__,i__343997);
cljs.core.chunk_append.call(null,b__343998,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query));

var G__343999 = (i__343997 + (1));
i__343997 = G__343999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343998),ui$core$iter__343995.call(null,cljs.core.chunk_rest.call(null,s__343996__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__343998),null);
}
} else {
var stake = cljs.core.first.call(null,s__343996__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query),ui$core$iter__343995.call(null,cljs.core.rest.call(null,s__343996__$2)));
}
} else {
return null;
}
break;
}
});})(map__343991,map__343991__$1,parser,state,query,target,ast,state__$1,map__343992,map__343992__$1,by_id))
,null,null));
});})(map__343991,map__343991__$1,parser,state,query,target,ast,state__$1,map__343992,map__343992__$1,by_id))
;
return iter__35244__auto__.call(null,cljs.core.vals.call(null,by_id));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__344000__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__344000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__344001__i = 0, G__344001__a = new Array(arguments.length -  0);
while (G__344001__i < G__344001__a.length) {G__344001__a[G__344001__i] = arguments[G__344001__i + 0]; ++G__344001__i;}
  args = new cljs.core.IndexedSeq(G__344001__a,0);
} 
return G__344000__delegate.call(this,args);};
G__344000.cljs$lang$maxFixedArity = 0;
G__344000.cljs$lang$applyTo = (function (arglist__344002){
var args = cljs.core.seq(arglist__344002);
return G__344000__delegate(args);
});
G__344000.cljs$core$IFn$_invoke$arity$variadic = G__344000__delegate;
return G__344000;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__344003__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__344003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__344004__i = 0, G__344004__a = new Array(arguments.length -  0);
while (G__344004__i < G__344004__a.length) {G__344004__a[G__344004__i] = arguments[G__344004__i + 0]; ++G__344004__i;}
  args = new cljs.core.IndexedSeq(G__344004__a,0);
} 
return G__344003__delegate.call(this,args);};
G__344003.cljs$lang$maxFixedArity = 0;
G__344003.cljs$lang$applyTo = (function (arglist__344005){
var args = cljs.core.seq(arglist__344005);
return G__344003__delegate(args);
});
G__344003.cljs$core$IFn$_invoke$arity$variadic = G__344003__delegate;
return G__344003;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__344006__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__344006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__344007__i = 0, G__344007__a = new Array(arguments.length -  0);
while (G__344007__i < G__344007__a.length) {G__344007__a[G__344007__i] = arguments[G__344007__i + 0]; ++G__344007__i;}
  args = new cljs.core.IndexedSeq(G__344007__a,0);
} 
return G__344006__delegate.call(this,args);};
G__344006.cljs$lang$maxFixedArity = 0;
G__344006.cljs$lang$applyTo = (function (arglist__344008){
var args = cljs.core.seq(arglist__344008);
return G__344006__delegate(args);
});
G__344006.cljs$core$IFn$_invoke$arity$variadic = G__344006__delegate;
return G__344006;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__344009__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__344009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__344010__i = 0, G__344010__a = new Array(arguments.length -  0);
while (G__344010__i < G__344010__a.length) {G__344010__a[G__344010__i] = arguments[G__344010__i + 0]; ++G__344010__i;}
  args = new cljs.core.IndexedSeq(G__344010__a,0);
} 
return G__344009__delegate.call(this,args);};
G__344009.cljs$lang$maxFixedArity = 0;
G__344009.cljs$lang$applyTo = (function (arglist__344011){
var args = cljs.core.seq(arglist__344011);
return G__344009__delegate(args);
});
G__344009.cljs$core$IFn$_invoke$arity$variadic = G__344009__delegate;
return G__344009;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,k,params){
var map__344012 = env;
var map__344012__$1 = ((((!((map__344012 == null)))?((((map__344012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__344012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__344012):map__344012);
var parser = cljs.core.get.call(null,map__344012__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__344012__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__344012__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__344012__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__344012__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__344013 = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env);
var map__344013__$1 = ((((!((map__344013 == null)))?((((map__344013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__344013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__344013):map__344013);
var votes = cljs.core.get.call(null,map__344013__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(votes)?(function (){var iter__35244__auto__ = ((function (map__344012,map__344012__$1,parser,state,query,target,ast,state__$1,map__344013,map__344013__$1,votes){
return (function ui$core$iter__344016(s__344017){
return (new cljs.core.LazySeq(null,((function (map__344012,map__344012__$1,parser,state,query,target,ast,state__$1,map__344013,map__344013__$1,votes){
return (function (){
var s__344017__$1 = s__344017;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__344017__$1);
if(temp__6728__auto__){
var s__344017__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__344017__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__344017__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__344019 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__344018 = (0);
while(true){
if((i__344018 < size__35243__auto__)){
var item_votes = cljs.core._nth.call(null,c__35242__auto__,i__344018);
cljs.core.chunk_append.call(null,b__344019,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query));

var G__344020 = (i__344018 + (1));
i__344018 = G__344020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__344019),ui$core$iter__344016.call(null,cljs.core.chunk_rest.call(null,s__344017__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__344019),null);
}
} else {
var item_votes = cljs.core.first.call(null,s__344017__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query),ui$core$iter__344016.call(null,cljs.core.rest.call(null,s__344017__$2)));
}
} else {
return null;
}
break;
}
});})(map__344012,map__344012__$1,parser,state,query,target,ast,state__$1,map__344013,map__344013__$1,votes))
,null,null));
});})(map__344012,map__344012__$1,parser,state,query,target,ast,state__$1,map__344013,map__344013__$1,votes))
;
return iter__35244__auto__.call(null,votes);
})():null)], null);
}
}));
var seq__344021_344031 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake","stake",-1498497787),new cljs.core.Keyword("stake","value","stake/value",466231031),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword("item","description","item/description",-1431609213),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),true], null)], null));
var chunk__344022_344032 = null;
var count__344023_344033 = (0);
var i__344024_344034 = (0);
while(true){
if((i__344024_344034 < count__344023_344033)){
var vec__344025_344035 = cljs.core._nth.call(null,chunk__344022_344032,i__344024_344034);
var object_344036 = cljs.core.nth.call(null,vec__344025_344035,(0),null);
var method_344037 = cljs.core.nth.call(null,vec__344025_344035,(1),null);
var remote_344038 = cljs.core.nth.call(null,vec__344025_344035,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_344037,((function (seq__344021_344031,chunk__344022_344032,count__344023_344033,i__344024_344034,vec__344025_344035,object_344036,method_344037,remote_344038){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_344038,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_344036,dispatch_key], null))], null);
});})(seq__344021_344031,chunk__344022_344032,count__344023_344033,i__344024_344034,vec__344025_344035,object_344036,method_344037,remote_344038))
);

var G__344039 = seq__344021_344031;
var G__344040 = chunk__344022_344032;
var G__344041 = count__344023_344033;
var G__344042 = (i__344024_344034 + (1));
seq__344021_344031 = G__344039;
chunk__344022_344032 = G__344040;
count__344023_344033 = G__344041;
i__344024_344034 = G__344042;
continue;
} else {
var temp__6728__auto___344043 = cljs.core.seq.call(null,seq__344021_344031);
if(temp__6728__auto___344043){
var seq__344021_344044__$1 = temp__6728__auto___344043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__344021_344044__$1)){
var c__35293__auto___344045 = cljs.core.chunk_first.call(null,seq__344021_344044__$1);
var G__344046 = cljs.core.chunk_rest.call(null,seq__344021_344044__$1);
var G__344047 = c__35293__auto___344045;
var G__344048 = cljs.core.count.call(null,c__35293__auto___344045);
var G__344049 = (0);
seq__344021_344031 = G__344046;
chunk__344022_344032 = G__344047;
count__344023_344033 = G__344048;
i__344024_344034 = G__344049;
continue;
} else {
var vec__344028_344050 = cljs.core.first.call(null,seq__344021_344044__$1);
var object_344051 = cljs.core.nth.call(null,vec__344028_344050,(0),null);
var method_344052 = cljs.core.nth.call(null,vec__344028_344050,(1),null);
var remote_344053 = cljs.core.nth.call(null,vec__344028_344050,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_344052,((function (seq__344021_344031,chunk__344022_344032,count__344023_344033,i__344024_344034,vec__344028_344050,object_344051,method_344052,remote_344053,seq__344021_344044__$1,temp__6728__auto___344043){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_344053,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_344051,dispatch_key], null))], null);
});})(seq__344021_344031,chunk__344022_344032,count__344023_344033,i__344024_344034,vec__344028_344050,object_344051,method_344052,remote_344053,seq__344021_344044__$1,temp__6728__auto___344043))
);

var G__344054 = cljs.core.next.call(null,seq__344021_344044__$1);
var G__344055 = null;
var G__344056 = (0);
var G__344057 = (0);
seq__344021_344031 = G__344054;
chunk__344022_344032 = G__344055;
count__344023_344033 = G__344056;
i__344024_344034 = G__344057;
continue;
}
} else {
}
}
break;
}
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("db","id","db/id",-1388397098),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__6728__auto__ = (function (){var or__34390__auto__ = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
var or__34390__auto____$1 = new cljs.core.Keyword(null,"stake","stake",-1498497787).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__34390__auto____$1)){
return or__34390__auto____$1;
} else {
return new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env);
}
}
})();
if(cljs.core.truth_(temp__6728__auto__)){
var obj = temp__6728__auto__;
return obj.call(null,dispatch_key);
} else {
return null;
}
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),(function() { 
var G__344058__delegate = function (args){
return cljs.core.apply.call(null,ui.core.simple_read_with_remote,args);
};
var G__344058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__344059__i = 0, G__344059__a = new Array(arguments.length -  0);
while (G__344059__i < G__344059__a.length) {G__344059__a[G__344059__i] = arguments[G__344059__i + 0]; ++G__344059__i;}
  args = new cljs.core.IndexedSeq(G__344059__a,0);
} 
return G__344058__delegate.call(this,args);};
G__344058.cljs$lang$maxFixedArity = 0;
G__344058.cljs$lang$applyTo = (function (arglist__344060){
var args = cljs.core.seq(arglist__344060);
return G__344058__delegate(args);
});
G__344058.cljs$core$IFn$_invoke$arity$variadic = G__344058__delegate;
return G__344058;
})()
);
if(typeof ui.core.mutate !== 'undefined'){
} else {
ui.core.mutate = (function (){var method_table__35413__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35417__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35417__auto__,method_table__35413__auto__,prefer_table__35414__auto__,method_cache__35415__auto__,cached_hierarchy__35416__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("proposal","save","proposal/save",356239610,null),(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__344061 = params;
var map__344061__$1 = ((((!((map__344061 == null)))?((((map__344061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__344061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__344061):map__344061);
var id = cljs.core.get.call(null,map__344061__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__344061__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),((function (map__344061,map__344061__$1,id,description){
return (function (state){
var map__344063 = state;
var map__344063__$1 = ((((!((map__344063 == null)))?((((map__344063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__344063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__344063):map__344063);
var proposals = cljs.core.get.call(null,map__344063__$1,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153));
var proposal = proposals.call(null,id);
var new_tempid = om.next.tempid.call(null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),cljs.core.assoc.call(null,cljs.core.update.call(null,proposals,id,cljs.core.assoc,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),description,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false),new_tempid,cljs.core.assoc.call(null,proposal,new cljs.core.Keyword("db","id","db/id",-1388397098),new_tempid,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),true))),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),new_tempid], null));
});})(map__344061,map__344061__$1,id,description))
);
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null),(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),(function (state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null),cljs.core.dissoc,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560));
}));
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("item","vote","item/vote",-842849665,null),(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),(function (state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null),cljs.core.dissoc,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
}));
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("etherean","advance-debug-day","etherean/advance-debug-day",-132769747,null),(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("user","change-address","user/change-address",-1674946809,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),(function (state){
var map__344065 = params;
var map__344065__$1 = ((((!((map__344065 == null)))?((((map__344065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__344065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__344065):map__344065);
var address = cljs.core.get.call(null,map__344065__$1,new cljs.core.Keyword(null,"address","address",559499426));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.Keyword("user","address","user/address",573600859)], null),address);
}));
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null),(function (env,dispath_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),(function (state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.Keyword("user","address","user/address",573600859)], null)),new cljs.core.Keyword("stake","value","stake/value",466231031)], null),new cljs.core.Keyword(null,"mining","mining",-2136229325));
}));
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("user","withdraw","user/withdraw",-1187344809,null),(function (env,dispath_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),(function (state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.Keyword("user","address","user/address",573600859)], null)),new cljs.core.Keyword("stake","value","stake/value",466231031)], null),new cljs.core.Keyword(null,"mining","mining",-2136229325));
}));
})], null);
}));
ui.core.tweak_tree = (function ui$core$tweak_tree(b){
var nodes_to_elide = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),null,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),null,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),null,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),null], null), null);
var nodes = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,b)),nodes_to_elide);
if(cljs.core.seq.call(null,nodes)){
var node = cljs.core.first.call(null,nodes);
return ui$core$tweak_tree.call(null,cljs.core.merge.call(null,cljs.core.dissoc.call(null,b,node),b.call(null,node)));
} else {
return b;
}
});
ui.core.map_by_id = (function ui$core$map_by_id(items){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35244__auto__ = (function ui$core$map_by_id_$_iter__344071(s__344072){
return (new cljs.core.LazySeq(null,(function (){
var s__344072__$1 = s__344072;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__344072__$1);
if(temp__6728__auto__){
var s__344072__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__344072__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__344072__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__344074 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__344073 = (0);
while(true){
if((i__344073 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__344073);
cljs.core.chunk_append.call(null,b__344074,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null));

var G__344075 = (i__344073 + (1));
i__344073 = G__344075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__344074),ui$core$map_by_id_$_iter__344071.call(null,cljs.core.chunk_rest.call(null,s__344072__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__344074),null);
}
} else {
var item = cljs.core.first.call(null,s__344072__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null),ui$core$map_by_id_$_iter__344071.call(null,cljs.core.rest.call(null,s__344072__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35244__auto__.call(null,items);
})());
});
ui.core.my_merge_tree = (function ui$core$my_merge_tree(a,b){
var map__344082 = ui.core.tweak_tree.call(null,b);
var map__344082__$1 = ((((!((map__344082 == null)))?((((map__344082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__344082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__344082):map__344082);
var network_id = cljs.core.get.call(null,map__344082__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var proposals = cljs.core.get.call(null,map__344082__$1,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444));
var order = cljs.core.get.call(null,map__344082__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
var stakes = cljs.core.get.call(null,map__344082__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__344082__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var items = cljs.core.get.call(null,map__344082__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,a,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),((function (map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items){
return (function (k){
var or__34390__auto__ = network_id;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return k;
}
});})(map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),cljs.core.merge,user),new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),((function (map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items){
return (function (proposals_old){
return cljs.core.merge_with.call(null,cljs.core.merge,proposals_old,ui.core.map_by_id.call(null,proposals));
});})(map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),((function (map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items){
return (function (order_old){
if(cljs.core.truth_(proposals)){
var ks = cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),proposals),cljs.core.filter.call(null,om.next.tempid_QMARK_,cljs.core.map.call(null,cljs.core.second,order_old)));
return cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (ks,map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items){
return (function ui$core$my_merge_tree_$_iter__344084(s__344085){
return (new cljs.core.LazySeq(null,((function (ks,map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items){
return (function (){
var s__344085__$1 = s__344085;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__344085__$1);
if(temp__6728__auto__){
var s__344085__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__344085__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__344085__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__344087 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__344086 = (0);
while(true){
if((i__344086 < size__35243__auto__)){
var k = cljs.core._nth.call(null,c__35242__auto__,i__344086);
cljs.core.chunk_append.call(null,b__344087,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null));

var G__344088 = (i__344086 + (1));
i__344086 = G__344088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__344087),ui$core$my_merge_tree_$_iter__344084.call(null,cljs.core.chunk_rest.call(null,s__344085__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__344087),null);
}
} else {
var k = cljs.core.first.call(null,s__344085__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null),ui$core$my_merge_tree_$_iter__344084.call(null,cljs.core.rest.call(null,s__344085__$2)));
}
} else {
return null;
}
break;
}
});})(ks,map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items))
,null,null));
});})(ks,map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items))
;
return iter__35244__auto__.call(null,ks);
})());
} else {
return order_old;
}
});})(map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),((function (map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items){
return (function (stakes_old){
return cljs.core.merge_with.call(null,cljs.core.merge,stakes_old,ui.core.map_by_id.call(null,stakes));
});})(map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),((function (map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items){
return (function (items_old){
var or__34390__auto__ = items;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return items_old;
}
});})(map__344082,map__344082__$1,network_id,proposals,order,stakes,user,items))
);
});
ui.core.my_merge = (function ui$core$my_merge(reconciler,state,res,query){
var k = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),k,new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,cljs.core.select_keys.call(null,res,k),query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
ui.core.migrate = (function ui$core$migrate(var_args){
var args344089 = [];
var len__35573__auto___344136 = arguments.length;
var i__35574__auto___344137 = (0);
while(true){
if((i__35574__auto___344137 < len__35573__auto___344136)){
args344089.push((arguments[i__35574__auto___344137]));

var G__344138 = (i__35574__auto___344137 + (1));
i__35574__auto___344137 = G__344138;
continue;
} else {
}
break;
}

var G__344091 = args344089.length;
switch (G__344091) {
case 3:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args344089.length)].join('')));

}
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return ui.core.migrate.call(null,app_state_pure,query,tempids,null);
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function ui$core$dissoc_in(pure,p__344114){
var vec__344118 = p__344114;
var table = cljs.core.nth.call(null,vec__344118,(0),null);
var id = cljs.core.nth.call(null,vec__344118,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function ui$core$step(pure,p__344121){
var vec__344129 = p__344121;
var old = cljs.core.nth.call(null,vec__344129,(0),null);
var vec__344132 = cljs.core.nth.call(null,vec__344129,(1),null);
var _ = cljs.core.nth.call(null,vec__344132,(0),null);
var id = cljs.core.nth.call(null,vec__344132,(1),null);
var new$ = vec__344132;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__344135 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__344135,id_key,id);
} else {
return G__344135;
}
})());
});
var fix_id = (function ui$core$fix_id(ident){
return cljs.core.get.call(null,tempids,ident,ident);
});
return cljs.core.update.call(null,cljs.core.reduce.call(null,step,app_state_pure,tempids),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),(function (order){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,fix_id,order)));
}));
});

ui.core.migrate.cljs$lang$maxFixedArity = 4;

ui.core.chan_call = (function ui$core$chan_call(var_args){
var args__35580__auto__ = [];
var len__35573__auto___344157 = arguments.length;
var i__35574__auto___344158 = (0);
while(true){
if((i__35574__auto___344158 < len__35573__auto___344157)){
args__35580__auto__.push((arguments[i__35574__auto___344158]));

var G__344159 = (i__35574__auto___344158 + (1));
i__35574__auto___344158 = G__344159;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((2) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((2)),(0),null)):null);
return ui.core.chan_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35581__auto__);
});

ui.core.chan_call.cljs$core$IFn$_invoke$arity$variadic = (function (contract,fname,body){
var c = cljs.core.async.chan.call(null);
var start_time = ui.core.get_tick_count.call(null);
(contract[cljs.core.name.call(null,fname)]).call.apply(contract,cljs.core.apply.call(null,cljs.core.array,cljs.core.conj.call(null,cljs.core.vec.call(null,body),((function (c,start_time){
return (function (error,result){
if(cljs.core.truth_(error)){
cljs.core.println.call(null,"error when triggering",fname);

throw error;
} else {
}

var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c,start_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c,start_time){
return (function (state_344147){
var state_val_344148 = (state_344147[(1)]);
if((state_val_344148 === (1))){
var state_344147__$1 = state_344147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344147__$1,(2),c,result);
} else {
if((state_val_344148 === (2))){
var inst_344144 = (state_344147[(2)]);
var inst_344145 = cljs.core.async.close_BANG_.call(null,c);
var state_344147__$1 = (function (){var statearr_344149 = state_344147;
(statearr_344149[(7)] = inst_344144);

return statearr_344149;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344147__$1,inst_344145);
} else {
return null;
}
}
});})(c__40167__auto__,c,start_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,c,start_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344153 = [null,null,null,null,null,null,null,null];
(statearr_344153[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344153[(1)] = (1));

return statearr_344153;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344147){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344154){if((e344154 instanceof Object)){
var ex__40148__auto__ = e344154;
var statearr_344155_344160 = state_344147;
(statearr_344155_344160[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344161 = state_344147;
state_344147 = G__344161;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344147){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,start_time))
})();
var state__40169__auto__ = (function (){var statearr_344156 = f__40168__auto__.call(null);
(statearr_344156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c,start_time))
);

return c__40167__auto__;
});})(c,start_time))
)));

return c;
});

ui.core.chan_call.cljs$lang$maxFixedArity = (2);

ui.core.chan_call.cljs$lang$applyTo = (function (seq344140){
var G__344141 = cljs.core.first.call(null,seq344140);
var seq344140__$1 = cljs.core.next.call(null,seq344140);
var G__344142 = cljs.core.first.call(null,seq344140__$1);
var seq344140__$2 = cljs.core.next.call(null,seq344140__$1);
return ui.core.chan_call.cljs$core$IFn$_invoke$arity$variadic(G__344141,G__344142,seq344140__$2);
});

ui.core.get_network = (function ui$core$get_network(){
var c = cljs.core.async.chan.call(null);
web3.version.getNetwork(((function (c){
return (function (error,result){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c){
return (function (state_344179){
var state_val_344180 = (state_344179[(1)]);
if((state_val_344180 === (1))){
var inst_344175 = (result | (0));
var state_344179__$1 = state_344179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344179__$1,(2),c,inst_344175);
} else {
if((state_val_344180 === (2))){
var inst_344177 = (state_344179[(2)]);
var state_344179__$1 = state_344179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344179__$1,inst_344177);
} else {
return null;
}
}
});})(c__40167__auto__,c))
;
return ((function (switch__40144__auto__,c__40167__auto__,c){
return (function() {
var ui$core$get_network_$_state_machine__40145__auto__ = null;
var ui$core$get_network_$_state_machine__40145__auto____0 = (function (){
var statearr_344184 = [null,null,null,null,null,null,null];
(statearr_344184[(0)] = ui$core$get_network_$_state_machine__40145__auto__);

(statearr_344184[(1)] = (1));

return statearr_344184;
});
var ui$core$get_network_$_state_machine__40145__auto____1 = (function (state_344179){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344185){if((e344185 instanceof Object)){
var ex__40148__auto__ = e344185;
var statearr_344186_344188 = state_344179;
(statearr_344186_344188[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344189 = state_344179;
state_344179 = G__344189;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_network_$_state_machine__40145__auto__ = function(state_344179){
switch(arguments.length){
case 0:
return ui$core$get_network_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_network_$_state_machine__40145__auto____1.call(this,state_344179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_network_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_network_$_state_machine__40145__auto____0;
ui$core$get_network_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_network_$_state_machine__40145__auto____1;
return ui$core$get_network_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_344187 = f__40168__auto__.call(null);
(statearr_344187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c))
);

return c__40167__auto__;
});})(c))
);

return c;
});
ui.core.chan_transact = (function ui$core$chan_transact(var_args){
var args__35580__auto__ = [];
var len__35573__auto___344248 = arguments.length;
var i__35574__auto___344249 = (0);
while(true){
if((i__35574__auto___344249 < len__35573__auto___344248)){
args__35580__auto__.push((arguments[i__35574__auto___344249]));

var G__344250 = (i__35574__auto___344249 + (1));
i__35574__auto___344249 = G__344250;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((2) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((2)),(0),null)):null);
return ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35581__auto__);
});

ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic = (function (contract,fname,body){
var c = cljs.core.async.chan.call(null);
var vec__344193 = (((cljs.core.seq.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,body),cljs.core.rest.call(null,body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,body], null));
var obj = cljs.core.nth.call(null,vec__344193,(0),null);
var body__$1 = cljs.core.nth.call(null,vec__344193,(1),null);
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c,vec__344193,obj,body__$1){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c,vec__344193,obj,body__$1){
return (function (state_344220){
var state_val_344221 = (state_344220[(1)]);
if((state_val_344221 === (1))){
var inst_344196 = ui.core.get_network.call(null);
var state_344220__$1 = state_344220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344220__$1,(2),inst_344196);
} else {
if((state_val_344221 === (2))){
var inst_344198 = (state_344220[(2)]);
var inst_344199 = cljs.core._EQ_.call(null,inst_344198,(3));
var state_344220__$1 = state_344220;
if(inst_344199){
var statearr_344222_344251 = state_344220__$1;
(statearr_344222_344251[(1)] = (3));

} else {
var statearr_344223_344252 = state_344220__$1;
(statearr_344223_344252[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344221 === (3))){
var inst_344201 = cljs.core.name.call(null,fname);
var inst_344202 = (contract[inst_344201]);
var inst_344203 = inst_344202.sendTransaction;
var inst_344204 = cljs.core.vec.call(null,body__$1);
var inst_344205 = [new cljs.core.Keyword(null,"gas","gas",-139961463)];
var inst_344206 = [(4000000)];
var inst_344207 = cljs.core.PersistentHashMap.fromArrays(inst_344205,inst_344206);
var inst_344208 = cljs.core.merge.call(null,inst_344207,obj);
var inst_344209 = cljs.core.clj__GT_js.call(null,inst_344208);
var inst_344210 = (function (){return ((function (inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1){
return (function (error,result){
if(cljs.core.truth_(error)){
cljs.core.async.close_BANG_.call(null,c);

if(cljs.core.truth_(cljs.core.re_find.call(null,/User denied transaction signature/,error.message))){
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "Transaction Cancelled."}));
} else {
throw error.message;
}
} else {
var timer = cljs.core.atom.call(null,null);
return cljs.core.reset_BANG_.call(null,timer,setInterval(((function (timer,inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1){
return (function (){
return web3.eth.getTransactionReceipt(result,((function (timer,inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1){
return (function (error__$1,receipt){
if(cljs.core.truth_(receipt)){
var c__40167__auto___344253__$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto___344253__$1,timer,inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto___344253__$1,timer,inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1){
return (function (state_344228){
var state_val_344229 = (state_344228[(1)]);
if((state_val_344229 === (1))){
var state_344228__$1 = state_344228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344228__$1,(2),c,receipt);
} else {
if((state_val_344229 === (2))){
var inst_344225 = (state_344228[(2)]);
var inst_344226 = cljs.core.async.close_BANG_.call(null,c);
var state_344228__$1 = (function (){var statearr_344230 = state_344228;
(statearr_344230[(7)] = inst_344225);

return statearr_344230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344228__$1,inst_344226);
} else {
return null;
}
}
});})(c__40167__auto___344253__$1,timer,inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1))
;
return ((function (switch__40144__auto__,c__40167__auto___344253__$1,timer,inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344234 = [null,null,null,null,null,null,null,null];
(statearr_344234[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344234[(1)] = (1));

return statearr_344234;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344228){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344235){if((e344235 instanceof Object)){
var ex__40148__auto__ = e344235;
var statearr_344236_344254 = state_344228;
(statearr_344236_344254[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344255 = state_344228;
state_344228 = G__344255;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344228){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto___344253__$1,timer,inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1))
})();
var state__40169__auto__ = (function (){var statearr_344237 = f__40168__auto__.call(null);
(statearr_344237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto___344253__$1);

return statearr_344237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto___344253__$1,timer,inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1))
);


return clearInterval(cljs.core.deref.call(null,timer));
} else {
return null;
}
});})(timer,inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1))
);
});})(timer,inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1))
,(5000)));
}
});
;})(inst_344201,inst_344202,inst_344203,inst_344204,inst_344205,inst_344206,inst_344207,inst_344208,inst_344209,state_val_344221,c__40167__auto__,c,vec__344193,obj,body__$1))
})();
var inst_344211 = cljs.core.conj.call(null,inst_344204,inst_344209,inst_344210);
var inst_344212 = cljs.core.apply.call(null,cljs.core.array,inst_344211);
var inst_344213 = inst_344203.apply(contract,inst_344212);
var state_344220__$1 = (function (){var statearr_344238 = state_344220;
(statearr_344238[(7)] = inst_344213);

return statearr_344238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344220__$1,(6),c);
} else {
if((state_val_344221 === (4))){
var state_344220__$1 = state_344220;
var statearr_344239_344256 = state_344220__$1;
(statearr_344239_344256[(2)] = null);

(statearr_344239_344256[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344221 === (5))){
var inst_344218 = (state_344220[(2)]);
var state_344220__$1 = state_344220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344220__$1,inst_344218);
} else {
if((state_val_344221 === (6))){
var inst_344215 = (state_344220[(2)]);
var state_344220__$1 = state_344220;
var statearr_344240_344257 = state_344220__$1;
(statearr_344240_344257[(2)] = inst_344215);

(statearr_344240_344257[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__40167__auto__,c,vec__344193,obj,body__$1))
;
return ((function (switch__40144__auto__,c__40167__auto__,c,vec__344193,obj,body__$1){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344244 = [null,null,null,null,null,null,null,null];
(statearr_344244[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344244[(1)] = (1));

return statearr_344244;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344220){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344245){if((e344245 instanceof Object)){
var ex__40148__auto__ = e344245;
var statearr_344246_344258 = state_344220;
(statearr_344246_344258[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344259 = state_344220;
state_344220 = G__344259;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344220){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,vec__344193,obj,body__$1))
})();
var state__40169__auto__ = (function (){var statearr_344247 = f__40168__auto__.call(null);
(statearr_344247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c,vec__344193,obj,body__$1))
);

return c__40167__auto__;
});

ui.core.chan_transact.cljs$lang$maxFixedArity = (2);

ui.core.chan_transact.cljs$lang$applyTo = (function (seq344190){
var G__344191 = cljs.core.first.call(null,seq344190);
var seq344190__$1 = cljs.core.next.call(null,seq344190);
var G__344192 = cljs.core.first.call(null,seq344190__$1);
var seq344190__$2 = cljs.core.next.call(null,seq344190__$1);
return ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic(G__344191,G__344192,seq344190__$2);
});

ui.core.chan_event = (function ui$core$chan_event(var_args){
var args__35580__auto__ = [];
var len__35573__auto___344280 = arguments.length;
var i__35574__auto___344281 = (0);
while(true){
if((i__35574__auto___344281 < len__35573__auto___344280)){
args__35580__auto__.push((arguments[i__35574__auto___344281]));

var G__344282 = (i__35574__auto___344281 + (1));
i__35574__auto___344281 = G__344282;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((3) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((3)),(0),null)):null);
return ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35581__auto__);
});

ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic = (function (contract,ename,hash,body){
var c = cljs.core.async.chan.call(null);
var event = cljs.core.atom.call(null,null);
cljs.core.reset_BANG_.call(null,event,(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,cljs.core.conj.call(null,cljs.core.vec.call(null,body),((function (c,event){
return (function (error,result){
if(cljs.core._EQ_.call(null,result.transactionHash,hash)){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c,event){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c,event){
return (function (state_344270){
var state_val_344271 = (state_344270[(1)]);
if((state_val_344271 === (1))){
var state_344270__$1 = state_344270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344270__$1,(2),c,result);
} else {
if((state_val_344271 === (2))){
var inst_344265 = (state_344270[(2)]);
var inst_344266 = cljs.core.async.close_BANG_.call(null,c);
var inst_344267 = cljs.core.deref.call(null,event);
var inst_344268 = inst_344267.stopWatching();
var state_344270__$1 = (function (){var statearr_344272 = state_344270;
(statearr_344272[(7)] = inst_344265);

(statearr_344272[(8)] = inst_344266);

return statearr_344272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344270__$1,inst_344268);
} else {
return null;
}
}
});})(c__40167__auto__,c,event))
;
return ((function (switch__40144__auto__,c__40167__auto__,c,event){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344276 = [null,null,null,null,null,null,null,null,null];
(statearr_344276[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344276[(1)] = (1));

return statearr_344276;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344270){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344277){if((e344277 instanceof Object)){
var ex__40148__auto__ = e344277;
var statearr_344278_344283 = state_344270;
(statearr_344278_344283[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344284 = state_344270;
state_344270 = G__344284;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344270){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,event))
})();
var state__40169__auto__ = (function (){var statearr_344279 = f__40168__auto__.call(null);
(statearr_344279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c,event))
);

return c__40167__auto__;
} else {
return null;
}
});})(c,event))
))));

return c;
});

ui.core.chan_event.cljs$lang$maxFixedArity = (3);

ui.core.chan_event.cljs$lang$applyTo = (function (seq344260){
var G__344261 = cljs.core.first.call(null,seq344260);
var seq344260__$1 = cljs.core.next.call(null,seq344260);
var G__344262 = cljs.core.first.call(null,seq344260__$1);
var seq344260__$2 = cljs.core.next.call(null,seq344260__$1);
var G__344263 = cljs.core.first.call(null,seq344260__$2);
var seq344260__$3 = cljs.core.next.call(null,seq344260__$2);
return ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic(G__344261,G__344262,G__344263,seq344260__$3);
});

ui.core.query_events = (function ui$core$query_events(contract,starting_block,stopping_block,ename,params){
var c = cljs.core.async.chan.call(null);
var event = cljs.core.atom.call(null,null);
var start_time = ui.core.get_tick_count.call(null);
cljs.core.reset_BANG_.call(null,event,(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,({"fromBlock": starting_block, "toBlock": stopping_block}),((function (c,event,start_time){
return (function (error,result){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c,event,start_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c,event,start_time){
return (function (state_344307){
var state_val_344308 = (state_344307[(1)]);
if((state_val_344308 === (1))){
var state_344307__$1 = state_344307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344307__$1,(2),c,result);
} else {
if((state_val_344308 === (2))){
var inst_344302 = (state_344307[(2)]);
var inst_344303 = cljs.core.async.close_BANG_.call(null,c);
var inst_344304 = cljs.core.deref.call(null,event);
var inst_344305 = inst_344304.stopWatching();
var state_344307__$1 = (function (){var statearr_344309 = state_344307;
(statearr_344309[(7)] = inst_344303);

(statearr_344309[(8)] = inst_344302);

return statearr_344309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344307__$1,inst_344305);
} else {
return null;
}
}
});})(c__40167__auto__,c,event,start_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,c,event,start_time){
return (function() {
var ui$core$query_events_$_state_machine__40145__auto__ = null;
var ui$core$query_events_$_state_machine__40145__auto____0 = (function (){
var statearr_344313 = [null,null,null,null,null,null,null,null,null];
(statearr_344313[(0)] = ui$core$query_events_$_state_machine__40145__auto__);

(statearr_344313[(1)] = (1));

return statearr_344313;
});
var ui$core$query_events_$_state_machine__40145__auto____1 = (function (state_344307){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344314){if((e344314 instanceof Object)){
var ex__40148__auto__ = e344314;
var statearr_344315_344317 = state_344307;
(statearr_344315_344317[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344318 = state_344307;
state_344307 = G__344318;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$query_events_$_state_machine__40145__auto__ = function(state_344307){
switch(arguments.length){
case 0:
return ui$core$query_events_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$query_events_$_state_machine__40145__auto____1.call(this,state_344307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$query_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$query_events_$_state_machine__40145__auto____0;
ui$core$query_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$query_events_$_state_machine__40145__auto____1;
return ui$core$query_events_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,event,start_time))
})();
var state__40169__auto__ = (function (){var statearr_344316 = f__40168__auto__.call(null);
(statearr_344316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c,event,start_time))
);

return c__40167__auto__;
});})(c,event,start_time))
], null))));

return c;
});
ui.core.get_historical_events = (function ui$core$get_historical_events(contract,starting_block,ename,params){
var c = cljs.core.async.chan.call(null);
(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,({"fromBlock": starting_block, "toBlock": "latest"})], null))).get(((function (c){
return (function (error,result){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c){
return (function (state_344336){
var state_val_344337 = (state_344336[(1)]);
if((state_val_344337 === (1))){
var inst_344332 = cljs.core.vec.call(null,result);
var state_344336__$1 = state_344336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344336__$1,(2),c,inst_344332);
} else {
if((state_val_344337 === (2))){
var inst_344334 = (state_344336[(2)]);
var state_344336__$1 = state_344336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344336__$1,inst_344334);
} else {
return null;
}
}
});})(c__40167__auto__,c))
;
return ((function (switch__40144__auto__,c__40167__auto__,c){
return (function() {
var ui$core$get_historical_events_$_state_machine__40145__auto__ = null;
var ui$core$get_historical_events_$_state_machine__40145__auto____0 = (function (){
var statearr_344341 = [null,null,null,null,null,null,null];
(statearr_344341[(0)] = ui$core$get_historical_events_$_state_machine__40145__auto__);

(statearr_344341[(1)] = (1));

return statearr_344341;
});
var ui$core$get_historical_events_$_state_machine__40145__auto____1 = (function (state_344336){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344342){if((e344342 instanceof Object)){
var ex__40148__auto__ = e344342;
var statearr_344343_344345 = state_344336;
(statearr_344343_344345[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344346 = state_344336;
state_344336 = G__344346;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_historical_events_$_state_machine__40145__auto__ = function(state_344336){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_historical_events_$_state_machine__40145__auto____1.call(this,state_344336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_$_state_machine__40145__auto____0;
ui$core$get_historical_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_$_state_machine__40145__auto____1;
return ui$core$get_historical_events_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_344344 = f__40168__auto__.call(null);
(statearr_344344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c))
);

return c__40167__auto__;
});})(c))
);

return c;
});
ui.core.get_historical_events_hash = (function ui$core$get_historical_events_hash(contract,starting_block,ename,params,hash){
var c = cljs.core.async.chan.call(null);
(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,({"fromBlock": starting_block, "toBlock": "latest"})], null))).get(((function (c){
return (function (error,result){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c){
return (function (state_344368){
var state_val_344369 = (state_344368[(1)]);
if((state_val_344369 === (1))){
var inst_344362 = (function (){return ((function (state_val_344369,c__40167__auto__,c){
return (function (event){
return cljs.core._EQ_.call(null,event.transactionHash,hash);
});
;})(state_val_344369,c__40167__auto__,c))
})();
var inst_344363 = cljs.core.filter.call(null,inst_344362,result);
var inst_344364 = cljs.core.vec.call(null,inst_344363);
var state_344368__$1 = state_344368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344368__$1,(2),c,inst_344364);
} else {
if((state_val_344369 === (2))){
var inst_344366 = (state_344368[(2)]);
var state_344368__$1 = state_344368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344368__$1,inst_344366);
} else {
return null;
}
}
});})(c__40167__auto__,c))
;
return ((function (switch__40144__auto__,c__40167__auto__,c){
return (function() {
var ui$core$get_historical_events_hash_$_state_machine__40145__auto__ = null;
var ui$core$get_historical_events_hash_$_state_machine__40145__auto____0 = (function (){
var statearr_344373 = [null,null,null,null,null,null,null];
(statearr_344373[(0)] = ui$core$get_historical_events_hash_$_state_machine__40145__auto__);

(statearr_344373[(1)] = (1));

return statearr_344373;
});
var ui$core$get_historical_events_hash_$_state_machine__40145__auto____1 = (function (state_344368){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344374){if((e344374 instanceof Object)){
var ex__40148__auto__ = e344374;
var statearr_344375_344377 = state_344368;
(statearr_344375_344377[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344378 = state_344368;
state_344368 = G__344378;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_historical_events_hash_$_state_machine__40145__auto__ = function(state_344368){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_hash_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_historical_events_hash_$_state_machine__40145__auto____1.call(this,state_344368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_hash_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_hash_$_state_machine__40145__auto____0;
ui$core$get_historical_events_hash_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_hash_$_state_machine__40145__auto____1;
return ui$core$get_historical_events_hash_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_344376 = f__40168__auto__.call(null);
(statearr_344376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c))
);

return c__40167__auto__;
});})(c))
);

return c;
});
ui.core.wei__GT_eth = (function ui$core$wei__GT_eth(wei){
return ((web3.fromWei(wei,"finney") | (0)) / (1000));
});
ui.core.get_balance = (function ui$core$get_balance(address){
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(address)){
web3.eth.getBalance(address,((function (c){
return (function (error,result){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c){
return (function (state_344408){
var state_val_344409 = (state_344408[(1)]);
if((state_val_344409 === (1))){
var inst_344404 = ui.core.wei__GT_eth.call(null,result);
var state_344408__$1 = state_344408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344408__$1,(2),c,inst_344404);
} else {
if((state_val_344409 === (2))){
var inst_344406 = (state_344408[(2)]);
var state_344408__$1 = state_344408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344408__$1,inst_344406);
} else {
return null;
}
}
});})(c__40167__auto__,c))
;
return ((function (switch__40144__auto__,c__40167__auto__,c){
return (function() {
var ui$core$get_balance_$_state_machine__40145__auto__ = null;
var ui$core$get_balance_$_state_machine__40145__auto____0 = (function (){
var statearr_344413 = [null,null,null,null,null,null,null];
(statearr_344413[(0)] = ui$core$get_balance_$_state_machine__40145__auto__);

(statearr_344413[(1)] = (1));

return statearr_344413;
});
var ui$core$get_balance_$_state_machine__40145__auto____1 = (function (state_344408){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344414){if((e344414 instanceof Object)){
var ex__40148__auto__ = e344414;
var statearr_344415_344429 = state_344408;
(statearr_344415_344429[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344430 = state_344408;
state_344408 = G__344430;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__40145__auto__ = function(state_344408){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__40145__auto____1.call(this,state_344408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__40145__auto____0;
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__40145__auto____1;
return ui$core$get_balance_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_344416 = f__40168__auto__.call(null);
(statearr_344416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c))
);

return c__40167__auto__;
});})(c))
);
} else {
var c__40167__auto___344431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto___344431,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto___344431,c){
return (function (state_344420){
var state_val_344421 = (state_344420[(1)]);
if((state_val_344421 === (1))){
var state_344420__$1 = state_344420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344420__$1,(2),c,(0));
} else {
if((state_val_344421 === (2))){
var inst_344418 = (state_344420[(2)]);
var state_344420__$1 = state_344420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344420__$1,inst_344418);
} else {
return null;
}
}
});})(c__40167__auto___344431,c))
;
return ((function (switch__40144__auto__,c__40167__auto___344431,c){
return (function() {
var ui$core$get_balance_$_state_machine__40145__auto__ = null;
var ui$core$get_balance_$_state_machine__40145__auto____0 = (function (){
var statearr_344425 = [null,null,null,null,null,null,null];
(statearr_344425[(0)] = ui$core$get_balance_$_state_machine__40145__auto__);

(statearr_344425[(1)] = (1));

return statearr_344425;
});
var ui$core$get_balance_$_state_machine__40145__auto____1 = (function (state_344420){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344426){if((e344426 instanceof Object)){
var ex__40148__auto__ = e344426;
var statearr_344427_344432 = state_344420;
(statearr_344427_344432[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344433 = state_344420;
state_344420 = G__344433;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__40145__auto__ = function(state_344420){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__40145__auto____1.call(this,state_344420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__40145__auto____0;
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__40145__auto____1;
return ui$core$get_balance_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto___344431,c))
})();
var state__40169__auto__ = (function (){var statearr_344428 = f__40168__auto__.call(null);
(statearr_344428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto___344431);

return statearr_344428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto___344431,c))
);

}

return c;
});
ui.core.get_block = (function ui$core$get_block(block){
var c = cljs.core.async.chan.call(null);
web3.eth.getBlock(block,((function (c){
return (function (error,result){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c){
return (function (state_344451){
var state_val_344452 = (state_344451[(1)]);
if((state_val_344452 === (1))){
var inst_344447 = cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var state_344451__$1 = state_344451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344451__$1,(2),c,inst_344447);
} else {
if((state_val_344452 === (2))){
var inst_344449 = (state_344451[(2)]);
var state_344451__$1 = state_344451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344451__$1,inst_344449);
} else {
return null;
}
}
});})(c__40167__auto__,c))
;
return ((function (switch__40144__auto__,c__40167__auto__,c){
return (function() {
var ui$core$get_block_$_state_machine__40145__auto__ = null;
var ui$core$get_block_$_state_machine__40145__auto____0 = (function (){
var statearr_344456 = [null,null,null,null,null,null,null];
(statearr_344456[(0)] = ui$core$get_block_$_state_machine__40145__auto__);

(statearr_344456[(1)] = (1));

return statearr_344456;
});
var ui$core$get_block_$_state_machine__40145__auto____1 = (function (state_344451){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344457){if((e344457 instanceof Object)){
var ex__40148__auto__ = e344457;
var statearr_344458_344460 = state_344451;
(statearr_344458_344460[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344461 = state_344451;
state_344451 = G__344461;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_block_$_state_machine__40145__auto__ = function(state_344451){
switch(arguments.length){
case 0:
return ui$core$get_block_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_block_$_state_machine__40145__auto____1.call(this,state_344451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_block_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_block_$_state_machine__40145__auto____0;
ui$core$get_block_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_block_$_state_machine__40145__auto____1;
return ui$core$get_block_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_344459 = f__40168__auto__.call(null);
(statearr_344459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c))
);

return c__40167__auto__;
});})(c))
);

return c;
});
ui.core.block_number = (function ui$core$block_number(){
var c = cljs.core.async.chan.call(null);
web3.eth.getBlockNumber(((function (c){
return (function (error,result){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c){
return (function (state_344477){
var state_val_344478 = (state_344477[(1)]);
if((state_val_344478 === (1))){
var state_344477__$1 = state_344477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344477__$1,(2),c,result);
} else {
if((state_val_344478 === (2))){
var inst_344475 = (state_344477[(2)]);
var state_344477__$1 = state_344477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344477__$1,inst_344475);
} else {
return null;
}
}
});})(c__40167__auto__,c))
;
return ((function (switch__40144__auto__,c__40167__auto__,c){
return (function() {
var ui$core$block_number_$_state_machine__40145__auto__ = null;
var ui$core$block_number_$_state_machine__40145__auto____0 = (function (){
var statearr_344482 = [null,null,null,null,null,null,null];
(statearr_344482[(0)] = ui$core$block_number_$_state_machine__40145__auto__);

(statearr_344482[(1)] = (1));

return statearr_344482;
});
var ui$core$block_number_$_state_machine__40145__auto____1 = (function (state_344477){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344483){if((e344483 instanceof Object)){
var ex__40148__auto__ = e344483;
var statearr_344484_344486 = state_344477;
(statearr_344484_344486[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344487 = state_344477;
state_344477 = G__344487;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$block_number_$_state_machine__40145__auto__ = function(state_344477){
switch(arguments.length){
case 0:
return ui$core$block_number_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$block_number_$_state_machine__40145__auto____1.call(this,state_344477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$block_number_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$block_number_$_state_machine__40145__auto____0;
ui$core$block_number_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$block_number_$_state_machine__40145__auto____1;
return ui$core$block_number_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_344485 = f__40168__auto__.call(null);
(statearr_344485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c))
);

return c__40167__auto__;
});})(c))
);

return c;
});
ui.core.get_proposal_description = (function ui$core$get_proposal_description(proposal_block,proposal_index){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_344516){
var state_val_344517 = (state_344516[(1)]);
if((state_val_344517 === (1))){
var inst_344507 = (function (){return ((function (state_val_344517,c__40167__auto__){
return (function (x){
return web3.toAscii(x);
});
;})(state_val_344517,c__40167__auto__))
})();
var inst_344508 = ui.core.query_events.call(null,ui.core.etherean,proposal_block,proposal_block,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({"proposalIndex": proposal_index}));
var state_344516__$1 = (function (){var statearr_344518 = state_344516;
(statearr_344518[(7)] = inst_344507);

return statearr_344518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344516__$1,(2),inst_344508);
} else {
if((state_val_344517 === (2))){
var inst_344507 = (state_344516[(7)]);
var inst_344510 = (state_344516[(2)]);
var inst_344511 = inst_344510.args;
var inst_344512 = inst_344511.message;
var inst_344513 = cljs.core.map.call(null,inst_344507,inst_344512);
var inst_344514 = cljs.core.first.call(null,inst_344513);
var state_344516__$1 = state_344516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344516__$1,inst_344514);
} else {
return null;
}
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$get_proposal_description_$_state_machine__40145__auto__ = null;
var ui$core$get_proposal_description_$_state_machine__40145__auto____0 = (function (){
var statearr_344522 = [null,null,null,null,null,null,null,null];
(statearr_344522[(0)] = ui$core$get_proposal_description_$_state_machine__40145__auto__);

(statearr_344522[(1)] = (1));

return statearr_344522;
});
var ui$core$get_proposal_description_$_state_machine__40145__auto____1 = (function (state_344516){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344523){if((e344523 instanceof Object)){
var ex__40148__auto__ = e344523;
var statearr_344524_344526 = state_344516;
(statearr_344524_344526[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344527 = state_344516;
state_344516 = G__344527;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_proposal_description_$_state_machine__40145__auto__ = function(state_344516){
switch(arguments.length){
case 0:
return ui$core$get_proposal_description_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_proposal_description_$_state_machine__40145__auto____1.call(this,state_344516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_proposal_description_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_proposal_description_$_state_machine__40145__auto____0;
ui$core$get_proposal_description_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_proposal_description_$_state_machine__40145__auto____1;
return ui$core$get_proposal_description_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_344525 = f__40168__auto__.call(null);
(statearr_344525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
});
if(typeof ui.core.read_server !== 'undefined'){
} else {
ui.core.read_server = (function (){var method_table__35413__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35417__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","read-server"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35417__auto__,method_table__35413__auto__,prefer_table__35414__auto__,method_cache__35415__auto__,cached_hierarchy__35416__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("user","balance","user/balance",422509480),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_balance.call(null,(web3.eth.accounts[(0)]))], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_network.call(null)], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_344532){
var state_val_344533 = (state_344532[(1)]);
if((state_val_344533 === (1))){
var inst_344528 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"useUpProposalVote","useUpProposalVote",352109759));
var state_344532__$1 = state_344532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344532__$1,(2),inst_344528);
} else {
if((state_val_344533 === (2))){
var inst_344530 = (state_344532[(2)]);
var state_344532__$1 = state_344532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344532__$1,inst_344530);
} else {
return null;
}
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344537 = [null,null,null,null,null,null,null];
(statearr_344537[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344537[(1)] = (1));

return statearr_344537;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344532){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344538){if((e344538 instanceof Object)){
var ex__40148__auto__ = e344538;
var statearr_344539_344541 = state_344532;
(statearr_344539_344541[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344542 = state_344532;
state_344532 = G__344542;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344532){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_344540 = f__40168__auto__.call(null);
(statearr_344540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),(function (env,dispatch_key,params){
var map__344543 = env;
var map__344543__$1 = ((((!((map__344543 == null)))?((((map__344543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__344543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__344543):map__344543);
var proposal = cljs.core.get.call(null,map__344543__$1,new cljs.core.Keyword(null,"proposal","proposal",142522715));
var proposal_id = cljs.core.get.call(null,map__344543__$1,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_proposal_description.call(null,((proposal[(3)]) | (0)),new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env))], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_344549){
var state_val_344550 = (state_344549[(1)]);
if((state_val_344550 === (1))){
var inst_344545 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_344546 = cljs.core.nth.call(null,inst_344545,(0));
var inst_344547 = ui.core.wei__GT_eth.call(null,inst_344546);
var state_344549__$1 = state_344549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344549__$1,inst_344547);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344554 = [null,null,null,null,null,null,null];
(statearr_344554[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344554[(1)] = (1));

return statearr_344554;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344549){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344555){if((e344555 instanceof Object)){
var ex__40148__auto__ = e344555;
var statearr_344556_344558 = state_344549;
(statearr_344556_344558[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344559 = state_344549;
state_344549 = G__344559;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344549){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_344557 = f__40168__auto__.call(null);
(statearr_344557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_344564){
var state_val_344565 = (state_344564[(1)]);
if((state_val_344565 === (1))){
var inst_344560 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_344561 = cljs.core.nth.call(null,inst_344560,(1));
var inst_344562 = ui.core.wei__GT_eth.call(null,inst_344561);
var state_344564__$1 = state_344564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344564__$1,inst_344562);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344569 = [null,null,null,null,null,null,null];
(statearr_344569[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344569[(1)] = (1));

return statearr_344569;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344564){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344570){if((e344570 instanceof Object)){
var ex__40148__auto__ = e344570;
var statearr_344571_344573 = state_344564;
(statearr_344571_344573[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344574 = state_344564;
state_344564 = G__344574;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344564){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_344572 = f__40168__auto__.call(null);
(statearr_344572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("db","id","db/id",-1388397098),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_344582){
var state_val_344583 = (state_344582[(1)]);
if((state_val_344583 === (1))){
var inst_344575 = (state_344582[(7)]);
var inst_344575__$1 = new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env);
var state_344582__$1 = (function (){var statearr_344584 = state_344582;
(statearr_344584[(7)] = inst_344575__$1);

return statearr_344584;
})();
if(cljs.core.truth_(inst_344575__$1)){
var statearr_344585_344596 = state_344582__$1;
(statearr_344585_344596[(1)] = (2));

} else {
var statearr_344586_344597 = state_344582__$1;
(statearr_344586_344597[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344583 === (2))){
var inst_344575 = (state_344582[(7)]);
var state_344582__$1 = state_344582;
var statearr_344587_344598 = state_344582__$1;
(statearr_344587_344598[(2)] = inst_344575);

(statearr_344587_344598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344583 === (3))){
var inst_344578 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var state_344582__$1 = state_344582;
var statearr_344588_344599 = state_344582__$1;
(statearr_344588_344599[(2)] = inst_344578);

(statearr_344588_344599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344583 === (4))){
var inst_344580 = (state_344582[(2)]);
var state_344582__$1 = state_344582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344582__$1,inst_344580);
} else {
return null;
}
}
}
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344592 = [null,null,null,null,null,null,null,null];
(statearr_344592[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344592[(1)] = (1));

return statearr_344592;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344582){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344593){if((e344593 instanceof Object)){
var ex__40148__auto__ = e344593;
var statearr_344594_344600 = state_344582;
(statearr_344594_344600[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344601 = state_344582;
state_344582 = G__344601;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344582){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_344595 = f__40168__auto__.call(null);
(statearr_344595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_344609){
var state_val_344610 = (state_344609[(1)]);
if((state_val_344610 === (1))){
var inst_344602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_344603 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132)];
var inst_344604 = [(0),"bar",(10),(5)];
var inst_344605 = cljs.core.PersistentHashMap.fromArrays(inst_344603,inst_344604);
var inst_344606 = [inst_344605];
var inst_344607 = (new cljs.core.PersistentVector(null,1,(5),inst_344602,inst_344606,null));
var state_344609__$1 = state_344609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344609__$1,inst_344607);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344614 = [null,null,null,null,null,null,null];
(statearr_344614[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344614[(1)] = (1));

return statearr_344614;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344609){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344615){if((e344615 instanceof Object)){
var ex__40148__auto__ = e344615;
var statearr_344616_344742 = state_344609;
(statearr_344616_344742[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344743 = state_344609;
state_344609 = G__344743;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344609){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_344617 = f__40168__auto__.call(null);
(statearr_344617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})():(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_344695){
var state_val_344696 = (state_344695[(1)]);
if((state_val_344696 === (7))){
var inst_344630 = (state_344695[(2)]);
var state_344695__$1 = state_344695;
var statearr_344697_344744 = state_344695__$1;
(statearr_344697_344744[(2)] = inst_344630);

(statearr_344697_344744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344696 === (1))){
var inst_344620 = (env == null);
var inst_344621 = cljs.core.not.call(null,inst_344620);
var state_344695__$1 = state_344695;
if(inst_344621){
var statearr_344698_344745 = state_344695__$1;
(statearr_344698_344745[(1)] = (2));

} else {
var statearr_344699_344746 = state_344695__$1;
(statearr_344699_344746[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344696 === (4))){
var inst_344633 = (state_344695[(2)]);
var state_344695__$1 = state_344695;
if(cljs.core.truth_(inst_344633)){
var statearr_344700_344747 = state_344695__$1;
(statearr_344700_344747[(1)] = (8));

} else {
var statearr_344701_344748 = state_344695__$1;
(statearr_344701_344748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344696 === (13))){
var inst_344690 = (state_344695[(2)]);
var inst_344691 = cljs.core.sort_by.call(null,cljs.core.first,inst_344690);
var inst_344692 = cljs.core.map.call(null,cljs.core.second,inst_344691);
var inst_344693 = cljs.core.vec.call(null,inst_344692);
var state_344695__$1 = state_344695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344695__$1,inst_344693);
} else {
if((state_val_344696 === (6))){
var state_344695__$1 = state_344695;
var statearr_344702_344749 = state_344695__$1;
(statearr_344702_344749[(2)] = false);

(statearr_344702_344749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344696 === (3))){
var state_344695__$1 = state_344695;
var statearr_344703_344750 = state_344695__$1;
(statearr_344703_344750[(2)] = false);

(statearr_344703_344750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344696 === (12))){
var inst_344640 = (state_344695[(7)]);
var inst_344644 = (state_344695[(8)]);
var inst_344639 = (state_344695[(9)]);
var inst_344638 = (state_344695[(10)]);
var inst_344647 = (state_344695[(2)]);
var inst_344648 = (inst_344647 | (0));
var inst_344649 = cljs.core.async.chan.call(null);
var inst_344682 = cljs.core.async.chan.call(null,(1));
var inst_344683 = (function (){var map__344618 = inst_344638;
var parser = inst_344639;
var query = inst_344640;
var len = inst_344644;
var time = inst_344648;
var proposals = inst_344649;
var c__40167__auto____$1 = inst_344682;
return ((function (map__344618,parser,query,len,time,proposals,c__40167__auto____$1,inst_344640,inst_344644,inst_344639,inst_344638,inst_344647,inst_344648,inst_344649,inst_344682,state_val_344696,c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (map__344618,parser,query,len,time,proposals,c__40167__auto____$1,inst_344640,inst_344644,inst_344639,inst_344638,inst_344647,inst_344648,inst_344649,inst_344682,state_val_344696,c__40167__auto__){
return (function (state_344680){
var state_val_344681 = (state_344680[(1)]);
if((state_val_344681 === (7))){
var inst_344657 = (state_344680[(7)]);
var inst_344657__$1 = (state_344680[(2)]);
var inst_344658 = (inst_344657__$1[(2)]);
var inst_344659 = (inst_344658 | (0));
var inst_344660 = cljs.core._EQ_.call(null,time,inst_344659);
var state_344680__$1 = (function (){var statearr_344704 = state_344680;
(statearr_344704[(7)] = inst_344657__$1);

return statearr_344704;
})();
if(inst_344660){
var statearr_344705_344751 = state_344680__$1;
(statearr_344705_344751[(1)] = (8));

} else {
var statearr_344706_344752 = state_344680__$1;
(statearr_344706_344752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344681 === (1))){
var inst_344650 = (len - (1));
var inst_344651 = inst_344650;
var state_344680__$1 = (function (){var statearr_344707 = state_344680;
(statearr_344707[(8)] = inst_344651);

return statearr_344707;
})();
var statearr_344708_344753 = state_344680__$1;
(statearr_344708_344753[(2)] = null);

(statearr_344708_344753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344681 === (4))){
var inst_344651 = (state_344680[(8)]);
var inst_344655 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),inst_344651);
var state_344680__$1 = state_344680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344680__$1,(7),inst_344655);
} else {
if((state_val_344681 === (6))){
var inst_344675 = (state_344680[(2)]);
var state_344680__$1 = state_344680;
var statearr_344709_344754 = state_344680__$1;
(statearr_344709_344754[(2)] = inst_344675);

(statearr_344709_344754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344681 === (3))){
var inst_344677 = (state_344680[(2)]);
var inst_344678 = cljs.core.async.close_BANG_.call(null,proposals);
var state_344680__$1 = (function (){var statearr_344710 = state_344680;
(statearr_344710[(9)] = inst_344677);

return statearr_344710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344680__$1,inst_344678);
} else {
if((state_val_344681 === (12))){
var inst_344665 = (state_344680[(2)]);
var state_344680__$1 = state_344680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_344680__$1,(11),proposals,inst_344665);
} else {
if((state_val_344681 === (2))){
var inst_344651 = (state_344680[(8)]);
var inst_344653 = (inst_344651 >= (0));
var state_344680__$1 = state_344680;
if(cljs.core.truth_(inst_344653)){
var statearr_344711_344755 = state_344680__$1;
(statearr_344711_344755[(1)] = (4));

} else {
var statearr_344712_344756 = state_344680__$1;
(statearr_344712_344756[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344681 === (11))){
var inst_344651 = (state_344680[(8)]);
var inst_344667 = (state_344680[(2)]);
var inst_344668 = (inst_344651 - (1));
var inst_344651__$1 = inst_344668;
var state_344680__$1 = (function (){var statearr_344713 = state_344680;
(statearr_344713[(10)] = inst_344667);

(statearr_344713[(8)] = inst_344651__$1);

return statearr_344713;
})();
var statearr_344714_344757 = state_344680__$1;
(statearr_344714_344757[(2)] = null);

(statearr_344714_344757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344681 === (9))){
var state_344680__$1 = state_344680;
var statearr_344715_344758 = state_344680__$1;
(statearr_344715_344758[(2)] = null);

(statearr_344715_344758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344681 === (5))){
var state_344680__$1 = state_344680;
var statearr_344716_344759 = state_344680__$1;
(statearr_344716_344759[(2)] = null);

(statearr_344716_344759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344681 === (10))){
var inst_344672 = (state_344680[(2)]);
var state_344680__$1 = state_344680;
var statearr_344717_344760 = state_344680__$1;
(statearr_344717_344760[(2)] = inst_344672);

(statearr_344717_344760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344681 === (8))){
var inst_344651 = (state_344680[(8)]);
var inst_344657 = (state_344680[(7)]);
var inst_344662 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),inst_344657,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155),inst_344651);
var inst_344663 = parser.call(null,inst_344662,query);
var state_344680__$1 = state_344680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344680__$1,(12),inst_344663);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(map__344618,parser,query,len,time,proposals,c__40167__auto____$1,inst_344640,inst_344644,inst_344639,inst_344638,inst_344647,inst_344648,inst_344649,inst_344682,state_val_344696,c__40167__auto__))
;
return ((function (switch__40144__auto__,map__344618,parser,query,len,time,proposals,c__40167__auto____$1,inst_344640,inst_344644,inst_344639,inst_344638,inst_344647,inst_344648,inst_344649,inst_344682,state_val_344696,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_344721[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344721[(1)] = (1));

return statearr_344721;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344680){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344722){if((e344722 instanceof Object)){
var ex__40148__auto__ = e344722;
var statearr_344723_344761 = state_344680;
(statearr_344723_344761[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344762 = state_344680;
state_344680 = G__344762;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344680){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,map__344618,parser,query,len,time,proposals,c__40167__auto____$1,inst_344640,inst_344644,inst_344639,inst_344638,inst_344647,inst_344648,inst_344649,inst_344682,state_val_344696,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_344724 = f__40168__auto__.call(null);
(statearr_344724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto____$1);

return statearr_344724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});
;})(map__344618,parser,query,len,time,proposals,c__40167__auto____$1,inst_344640,inst_344644,inst_344639,inst_344638,inst_344647,inst_344648,inst_344649,inst_344682,state_val_344696,c__40167__auto__))
})();
var inst_344684 = cljs.core.async.impl.dispatch.run.call(null,inst_344683);
var inst_344686 = (function (){var map__344618 = inst_344638;
var parser = inst_344639;
var query = inst_344640;
var len = inst_344644;
var time = inst_344648;
var proposals = inst_344649;
return ((function (map__344618,parser,query,len,time,proposals,inst_344640,inst_344644,inst_344639,inst_344638,inst_344647,inst_344648,inst_344649,inst_344682,inst_344683,inst_344684,state_val_344696,c__40167__auto__){
return (function (acc,p__344685){
var map__344725 = p__344685;
var map__344725__$1 = ((((!((map__344725 == null)))?((((map__344725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__344725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__344725):map__344725);
var item = map__344725__$1;
var id = cljs.core.get.call(null,map__344725__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.assoc.call(null,acc,id,item);
});
;})(map__344618,parser,query,len,time,proposals,inst_344640,inst_344644,inst_344639,inst_344638,inst_344647,inst_344648,inst_344649,inst_344682,inst_344683,inst_344684,state_val_344696,c__40167__auto__))
})();
var inst_344687 = cljs.core.PersistentHashMap.EMPTY;
var inst_344688 = cljs.core.async.reduce.call(null,inst_344686,inst_344687,inst_344649);
var state_344695__$1 = (function (){var statearr_344727 = state_344695;
(statearr_344727[(11)] = inst_344684);

return statearr_344727;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344695__$1,(13),inst_344688);
} else {
if((state_val_344696 === (2))){
var inst_344623 = env.cljs$lang$protocol_mask$partition0$;
var inst_344624 = (inst_344623 & (64));
var inst_344625 = env.cljs$core$ISeq$;
var inst_344626 = (inst_344624) || (inst_344625);
var state_344695__$1 = state_344695;
if(cljs.core.truth_(inst_344626)){
var statearr_344728_344763 = state_344695__$1;
(statearr_344728_344763[(1)] = (5));

} else {
var statearr_344729_344764 = state_344695__$1;
(statearr_344729_344764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344696 === (11))){
var inst_344643 = (state_344695[(2)]);
var inst_344644 = (inst_344643 | (0));
var inst_344645 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"startOfDay","startOfDay",-1097735630));
var state_344695__$1 = (function (){var statearr_344730 = state_344695;
(statearr_344730[(8)] = inst_344644);

return statearr_344730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344695__$1,(12),inst_344645);
} else {
if((state_val_344696 === (9))){
var state_344695__$1 = state_344695;
var statearr_344731_344765 = state_344695__$1;
(statearr_344731_344765[(2)] = env);

(statearr_344731_344765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344696 === (5))){
var state_344695__$1 = state_344695;
var statearr_344732_344766 = state_344695__$1;
(statearr_344732_344766[(2)] = true);

(statearr_344732_344766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344696 === (10))){
var inst_344638 = (state_344695[(10)]);
var inst_344638__$1 = (state_344695[(2)]);
var inst_344639 = cljs.core.get.call(null,inst_344638__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_344640 = cljs.core.get.call(null,inst_344638__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_344641 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposalsLength","proposalsLength",1061236851));
var state_344695__$1 = (function (){var statearr_344733 = state_344695;
(statearr_344733[(7)] = inst_344640);

(statearr_344733[(9)] = inst_344639);

(statearr_344733[(10)] = inst_344638__$1);

return statearr_344733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344695__$1,(11),inst_344641);
} else {
if((state_val_344696 === (8))){
var inst_344635 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_344695__$1 = state_344695;
var statearr_344734_344767 = state_344695__$1;
(statearr_344734_344767[(2)] = inst_344635);

(statearr_344734_344767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344738 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_344738[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344738[(1)] = (1));

return statearr_344738;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344695){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344739){if((e344739 instanceof Object)){
var ex__40148__auto__ = e344739;
var statearr_344740_344768 = state_344695;
(statearr_344740_344768[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344769 = state_344695;
state_344695 = G__344769;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344695){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_344741 = f__40168__auto__.call(null);
(statearr_344741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__344770__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__344770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__344771__i = 0, G__344771__a = new Array(arguments.length -  0);
while (G__344771__i < G__344771__a.length) {G__344771__a[G__344771__i] = arguments[G__344771__i + 0]; ++G__344771__i;}
  args = new cljs.core.IndexedSeq(G__344771__a,0);
} 
return G__344770__delegate.call(this,args);};
G__344770.cljs$lang$maxFixedArity = 0;
G__344770.cljs$lang$applyTo = (function (arglist__344772){
var args = cljs.core.seq(arglist__344772);
return G__344770__delegate(args);
});
G__344770.cljs$core$IFn$_invoke$arity$variadic = G__344770__delegate;
return G__344770;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),(function() { 
var G__344773__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__344773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__344774__i = 0, G__344774__a = new Array(arguments.length -  0);
while (G__344774__i < G__344774__a.length) {G__344774__a[G__344774__i] = arguments[G__344774__i + 0]; ++G__344774__i;}
  args = new cljs.core.IndexedSeq(G__344774__a,0);
} 
return G__344773__delegate.call(this,args);};
G__344773.cljs$lang$maxFixedArity = 0;
G__344773.cljs$lang$applyTo = (function (arglist__344775){
var args = cljs.core.seq(arglist__344775);
return G__344773__delegate(args);
});
G__344773.cljs$core$IFn$_invoke$arity$variadic = G__344773__delegate;
return G__344773;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_344783){
var state_val_344784 = (state_344783[(1)]);
if((state_val_344784 === (1))){
var inst_344776 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_344777 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031),new cljs.core.Keyword("stake","address","stake/address",680266700)];
var inst_344778 = [(0),(1000),"12345"];
var inst_344779 = cljs.core.PersistentHashMap.fromArrays(inst_344777,inst_344778);
var inst_344780 = [inst_344779];
var inst_344781 = (new cljs.core.PersistentVector(null,1,(5),inst_344776,inst_344780,null));
var state_344783__$1 = state_344783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344783__$1,inst_344781);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344788 = [null,null,null,null,null,null,null];
(statearr_344788[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344788[(1)] = (1));

return statearr_344788;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344783){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344789){if((e344789 instanceof Object)){
var ex__40148__auto__ = e344789;
var statearr_344790_344919 = state_344783;
(statearr_344790_344919[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344920 = state_344783;
state_344783 = G__344920;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344783){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_344791 = f__40168__auto__.call(null);
(statearr_344791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})():(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_344877){
var state_val_344878 = (state_344877[(1)]);
if((state_val_344878 === (7))){
var inst_344815 = (state_344877[(2)]);
var inst_344816 = cljs.core.range.call(null,inst_344815);
var inst_344817 = cljs.core.seq.call(null,inst_344816);
var inst_344818 = inst_344817;
var inst_344819 = null;
var inst_344820 = (0);
var inst_344821 = (0);
var state_344877__$1 = (function (){var statearr_344879 = state_344877;
(statearr_344879[(7)] = inst_344819);

(statearr_344879[(8)] = inst_344821);

(statearr_344879[(9)] = inst_344820);

(statearr_344879[(10)] = inst_344818);

return statearr_344879;
})();
var statearr_344880_344921 = state_344877__$1;
(statearr_344880_344921[(2)] = null);

(statearr_344880_344921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (20))){
var inst_344867 = (state_344877[(2)]);
var state_344877__$1 = state_344877;
var statearr_344881_344922 = state_344877__$1;
(statearr_344881_344922[(2)] = inst_344867);

(statearr_344881_344922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (1))){
var inst_344792 = cljs.core.PersistentVector.EMPTY;
var inst_344793 = cljs.core.atom.call(null,inst_344792);
var inst_344794 = ui.core.get_network.call(null);
var state_344877__$1 = (function (){var statearr_344882 = state_344877;
(statearr_344882[(11)] = inst_344793);

return statearr_344882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344877__$1,(2),inst_344794);
} else {
if((state_val_344878 === (4))){
var inst_344804 = alert("Fatal Error: EthereanMind is missing data on the blockchain. Please make sure you have MetaMask set to the \"Ethereum Ropsten Test Network\".\n\n(Other possible reasons for this error may include an ongoing blockchain attack or an outage of the Infuria system.)");
var state_344877__$1 = state_344877;
var statearr_344883_344923 = state_344877__$1;
(statearr_344883_344923[(2)] = inst_344804);

(statearr_344883_344923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (15))){
var inst_344842 = (state_344877[(12)]);
var inst_344844 = cljs.core.chunked_seq_QMARK_.call(null,inst_344842);
var state_344877__$1 = state_344877;
if(inst_344844){
var statearr_344884_344924 = state_344877__$1;
(statearr_344884_344924[(1)] = (18));

} else {
var statearr_344885_344925 = state_344877__$1;
(statearr_344885_344925[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (21))){
var inst_344808 = (state_344877[(13)]);
var inst_344854 = (state_344877[(14)]);
var inst_344854__$1 = (state_344877[(2)]);
var inst_344855 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_344856 = ui.core.chan_call.call(null,inst_344808,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_344854__$1);
var state_344877__$1 = (function (){var statearr_344886 = state_344877;
(statearr_344886[(15)] = inst_344855);

(statearr_344886[(14)] = inst_344854__$1);

return statearr_344886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344877__$1,(22),inst_344856);
} else {
if((state_val_344878 === (13))){
var inst_344808 = (state_344877[(13)]);
var inst_344829 = (state_344877[(16)]);
var inst_344829__$1 = (state_344877[(2)]);
var inst_344830 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_344831 = ui.core.chan_call.call(null,inst_344808,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_344829__$1);
var state_344877__$1 = (function (){var statearr_344887 = state_344877;
(statearr_344887[(16)] = inst_344829__$1);

(statearr_344887[(17)] = inst_344830);

return statearr_344887;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344877__$1,(14),inst_344831);
} else {
if((state_val_344878 === (22))){
var inst_344855 = (state_344877[(15)]);
var inst_344793 = (state_344877[(11)]);
var inst_344842 = (state_344877[(12)]);
var inst_344854 = (state_344877[(14)]);
var inst_344858 = (state_344877[(2)]);
var inst_344859 = (inst_344858[(0)]);
var inst_344860 = ui.core.wei__GT_eth.call(null,inst_344859);
var inst_344861 = [inst_344854,inst_344860];
var inst_344862 = cljs.core.PersistentHashMap.fromArrays(inst_344855,inst_344861);
var inst_344863 = cljs.core.swap_BANG_.call(null,inst_344793,cljs.core.conj,inst_344862);
var inst_344864 = cljs.core.next.call(null,inst_344842);
var inst_344818 = inst_344864;
var inst_344819 = null;
var inst_344820 = (0);
var inst_344821 = (0);
var state_344877__$1 = (function (){var statearr_344888 = state_344877;
(statearr_344888[(7)] = inst_344819);

(statearr_344888[(8)] = inst_344821);

(statearr_344888[(9)] = inst_344820);

(statearr_344888[(10)] = inst_344818);

(statearr_344888[(18)] = inst_344863);

return statearr_344888;
})();
var statearr_344889_344926 = state_344877__$1;
(statearr_344889_344926[(2)] = null);

(statearr_344889_344926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (6))){
var inst_344808 = (state_344877[(13)]);
var inst_344799 = (state_344877[(19)]);
var inst_344807 = (state_344877[(2)]);
var inst_344808__$1 = ui.core.contract.call(null,ui.contract.staking_abi,inst_344799);
var inst_344813 = ui.core.chan_call.call(null,inst_344808__$1,new cljs.core.Keyword(null,"depositLength","depositLength",788194150));
var state_344877__$1 = (function (){var statearr_344890 = state_344877;
(statearr_344890[(13)] = inst_344808__$1);

(statearr_344890[(20)] = inst_344807);

return statearr_344890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344877__$1,(7),inst_344813);
} else {
if((state_val_344878 === (17))){
var inst_344870 = (state_344877[(2)]);
var state_344877__$1 = state_344877;
var statearr_344891_344927 = state_344877__$1;
(statearr_344891_344927[(2)] = inst_344870);

(statearr_344891_344927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (3))){
var inst_344799 = (state_344877[(19)]);
var inst_344796 = (state_344877[(21)]);
var inst_344799__$1 = (state_344877[(2)]);
var inst_344800 = cljs.core._EQ_.call(null,inst_344796,(3));
var inst_344801 = cljs.core._EQ_.call(null,inst_344799__$1,"0x");
var inst_344802 = (inst_344800) && (inst_344801);
var state_344877__$1 = (function (){var statearr_344892 = state_344877;
(statearr_344892[(19)] = inst_344799__$1);

return statearr_344892;
})();
if(cljs.core.truth_(inst_344802)){
var statearr_344893_344928 = state_344877__$1;
(statearr_344893_344928[(1)] = (4));

} else {
var statearr_344894_344929 = state_344877__$1;
(statearr_344894_344929[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (12))){
var inst_344872 = (state_344877[(2)]);
var state_344877__$1 = state_344877;
var statearr_344895_344930 = state_344877__$1;
(statearr_344895_344930[(2)] = inst_344872);

(statearr_344895_344930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (2))){
var inst_344796 = (state_344877[(2)]);
var inst_344797 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_344877__$1 = (function (){var statearr_344896 = state_344877;
(statearr_344896[(21)] = inst_344796);

return statearr_344896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344877__$1,(3),inst_344797);
} else {
if((state_val_344878 === (19))){
var inst_344808 = (state_344877[(13)]);
var inst_344842 = (state_344877[(12)]);
var inst_344851 = cljs.core.first.call(null,inst_344842);
var inst_344852 = ui.core.chan_call.call(null,inst_344808,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_344851);
var state_344877__$1 = state_344877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344877__$1,(21),inst_344852);
} else {
if((state_val_344878 === (11))){
var inst_344842 = (state_344877[(12)]);
var inst_344818 = (state_344877[(10)]);
var inst_344842__$1 = cljs.core.seq.call(null,inst_344818);
var state_344877__$1 = (function (){var statearr_344897 = state_344877;
(statearr_344897[(12)] = inst_344842__$1);

return statearr_344897;
})();
if(inst_344842__$1){
var statearr_344898_344931 = state_344877__$1;
(statearr_344898_344931[(1)] = (15));

} else {
var statearr_344899_344932 = state_344877__$1;
(statearr_344899_344932[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (9))){
var inst_344793 = (state_344877[(11)]);
var inst_344874 = (state_344877[(2)]);
var inst_344875 = cljs.core.deref.call(null,inst_344793);
var state_344877__$1 = (function (){var statearr_344903 = state_344877;
(statearr_344903[(22)] = inst_344874);

return statearr_344903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344877__$1,inst_344875);
} else {
if((state_val_344878 === (5))){
var state_344877__$1 = state_344877;
var statearr_344904_344933 = state_344877__$1;
(statearr_344904_344933[(2)] = null);

(statearr_344904_344933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (14))){
var inst_344819 = (state_344877[(7)]);
var inst_344821 = (state_344877[(8)]);
var inst_344829 = (state_344877[(16)]);
var inst_344820 = (state_344877[(9)]);
var inst_344793 = (state_344877[(11)]);
var inst_344830 = (state_344877[(17)]);
var inst_344818 = (state_344877[(10)]);
var inst_344833 = (state_344877[(2)]);
var inst_344834 = (inst_344833[(0)]);
var inst_344835 = ui.core.wei__GT_eth.call(null,inst_344834);
var inst_344836 = [inst_344829,inst_344835];
var inst_344837 = cljs.core.PersistentHashMap.fromArrays(inst_344830,inst_344836);
var inst_344838 = cljs.core.swap_BANG_.call(null,inst_344793,cljs.core.conj,inst_344837);
var inst_344839 = (inst_344821 + (1));
var tmp344900 = inst_344819;
var tmp344901 = inst_344820;
var tmp344902 = inst_344818;
var inst_344818__$1 = tmp344902;
var inst_344819__$1 = tmp344900;
var inst_344820__$1 = tmp344901;
var inst_344821__$1 = inst_344839;
var state_344877__$1 = (function (){var statearr_344905 = state_344877;
(statearr_344905[(7)] = inst_344819__$1);

(statearr_344905[(8)] = inst_344821__$1);

(statearr_344905[(9)] = inst_344820__$1);

(statearr_344905[(23)] = inst_344838);

(statearr_344905[(10)] = inst_344818__$1);

return statearr_344905;
})();
var statearr_344906_344934 = state_344877__$1;
(statearr_344906_344934[(2)] = null);

(statearr_344906_344934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (16))){
var state_344877__$1 = state_344877;
var statearr_344907_344935 = state_344877__$1;
(statearr_344907_344935[(2)] = null);

(statearr_344907_344935[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (10))){
var inst_344819 = (state_344877[(7)]);
var inst_344808 = (state_344877[(13)]);
var inst_344821 = (state_344877[(8)]);
var inst_344826 = cljs.core._nth.call(null,inst_344819,inst_344821);
var inst_344827 = ui.core.chan_call.call(null,inst_344808,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_344826);
var state_344877__$1 = state_344877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344877__$1,(13),inst_344827);
} else {
if((state_val_344878 === (18))){
var inst_344842 = (state_344877[(12)]);
var inst_344846 = cljs.core.chunk_first.call(null,inst_344842);
var inst_344847 = cljs.core.chunk_rest.call(null,inst_344842);
var inst_344848 = cljs.core.count.call(null,inst_344846);
var inst_344818 = inst_344847;
var inst_344819 = inst_344846;
var inst_344820 = inst_344848;
var inst_344821 = (0);
var state_344877__$1 = (function (){var statearr_344908 = state_344877;
(statearr_344908[(7)] = inst_344819);

(statearr_344908[(8)] = inst_344821);

(statearr_344908[(9)] = inst_344820);

(statearr_344908[(10)] = inst_344818);

return statearr_344908;
})();
var statearr_344909_344936 = state_344877__$1;
(statearr_344909_344936[(2)] = null);

(statearr_344909_344936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344878 === (8))){
var inst_344821 = (state_344877[(8)]);
var inst_344820 = (state_344877[(9)]);
var inst_344823 = (inst_344821 < inst_344820);
var inst_344824 = inst_344823;
var state_344877__$1 = state_344877;
if(cljs.core.truth_(inst_344824)){
var statearr_344910_344937 = state_344877__$1;
(statearr_344910_344937[(1)] = (10));

} else {
var statearr_344911_344938 = state_344877__$1;
(statearr_344911_344938[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_344915[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344915[(1)] = (1));

return statearr_344915;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344877){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344916){if((e344916 instanceof Object)){
var ex__40148__auto__ = e344916;
var statearr_344917_344939 = state_344877;
(statearr_344917_344939[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__344940 = state_344877;
state_344877 = G__344940;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344877){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_344918 = f__40168__auto__.call(null);
(statearr_344918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,dispatch_key,params){
var map__344941 = env;
var map__344941__$1 = ((((!((map__344941 == null)))?((((map__344941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__344941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__344941):map__344941);
var item_id = cljs.core.get.call(null,map__344941__$1,new cljs.core.Keyword(null,"item-id","item-id",-1804511607));
var item = cljs.core.get.call(null,map__344941__$1,new cljs.core.Keyword(null,"item","item",249373802));
var update_time = ((item[(1)]) | (0));
var fun = ((function (map__344941,map__344941__$1,item_id,item,update_time){
return (function (index){
if((update_time === (0))){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time){
return (function (state_344957){
var state_val_344958 = (state_344957[(1)]);
if((state_val_344958 === (1))){
var inst_344943 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_344944 = (index === (0));
var state_344957__$1 = (function (){var statearr_344959 = state_344957;
(statearr_344959[(7)] = inst_344943);

return statearr_344959;
})();
if(cljs.core.truth_(inst_344944)){
var statearr_344960_345017 = state_344957__$1;
(statearr_344960_345017[(1)] = (2));

} else {
var statearr_344961_345018 = state_344957__$1;
(statearr_344961_345018[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344958 === (2))){
var state_344957__$1 = state_344957;
var statearr_344962_345019 = state_344957__$1;
(statearr_344962_345019[(2)] = (0));

(statearr_344962_345019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344958 === (3))){
var state_344957__$1 = state_344957;
var statearr_344963_345020 = state_344957__$1;
(statearr_344963_345020[(2)] = 1.0E-4);

(statearr_344963_345020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344958 === (4))){
var inst_344948 = (state_344957[(2)]);
var inst_344949 = (index === (0));
var state_344957__$1 = (function (){var statearr_344964 = state_344957;
(statearr_344964[(8)] = inst_344948);

return statearr_344964;
})();
if(cljs.core.truth_(inst_344949)){
var statearr_344965_345021 = state_344957__$1;
(statearr_344965_345021[(1)] = (5));

} else {
var statearr_344966_345022 = state_344957__$1;
(statearr_344966_345022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344958 === (5))){
var state_344957__$1 = state_344957;
var statearr_344967_345023 = state_344957__$1;
(statearr_344967_345023[(2)] = (0));

(statearr_344967_345023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344958 === (6))){
var state_344957__$1 = state_344957;
var statearr_344968_345024 = state_344957__$1;
(statearr_344968_345024[(2)] = 1.0E-4);

(statearr_344968_345024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_344958 === (7))){
var inst_344948 = (state_344957[(8)]);
var inst_344943 = (state_344957[(7)]);
var inst_344953 = (state_344957[(2)]);
var inst_344954 = [inst_344948,inst_344953];
var inst_344955 = cljs.core.PersistentHashMap.fromArrays(inst_344943,inst_344954);
var state_344957__$1 = state_344957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344957__$1,inst_344955);
} else {
return null;
}
}
}
}
}
}
}
});})(c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344972 = [null,null,null,null,null,null,null,null,null];
(statearr_344972[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344972[(1)] = (1));

return statearr_344972;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344957){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344973){if((e344973 instanceof Object)){
var ex__40148__auto__ = e344973;
var statearr_344974_345025 = state_344957;
(statearr_344974_345025[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345026 = state_344957;
state_344957 = G__345026;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344957){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time))
})();
var state__40169__auto__ = (function (){var statearr_344975 = f__40168__auto__.call(null);
(statearr_344975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time))
);

return c__40167__auto__;
} else {
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time){
return (function (state_344987){
var state_val_344988 = (state_344987[(1)]);
if((state_val_344988 === (1))){
var inst_344976 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"itemVoteInfo","itemVoteInfo",-383659653),item_id,index);
var state_344987__$1 = state_344987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_344987__$1,(2),inst_344976);
} else {
if((state_val_344988 === (2))){
var inst_344978 = (state_344987[(2)]);
var inst_344979 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_344980 = (inst_344978[(0)]);
var inst_344981 = ui.core.wei__GT_eth.call(null,inst_344980);
var inst_344982 = (inst_344978[(1)]);
var inst_344983 = ui.core.wei__GT_eth.call(null,inst_344982);
var inst_344984 = [inst_344981,inst_344983];
var inst_344985 = cljs.core.PersistentHashMap.fromArrays(inst_344979,inst_344984);
var state_344987__$1 = state_344987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_344987__$1,inst_344985);
} else {
return null;
}
}
});})(c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_344992 = [null,null,null,null,null,null,null];
(statearr_344992[(0)] = ui$core$state_machine__40145__auto__);

(statearr_344992[(1)] = (1));

return statearr_344992;
});
var ui$core$state_machine__40145__auto____1 = (function (state_344987){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_344987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e344993){if((e344993 instanceof Object)){
var ex__40148__auto__ = e344993;
var statearr_344994_345027 = state_344987;
(statearr_344994_345027[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_344987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e344993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345028 = state_344987;
state_344987 = G__345028;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_344987){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_344987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time))
})();
var state__40169__auto__ = (function (){var statearr_344995 = f__40168__auto__.call(null);
(statearr_344995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_344995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time))
);

return c__40167__auto__;
}
});})(map__344941,map__344941__$1,item_id,item,update_time))
;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time,fun){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time,fun){
return (function (state_345006){
var state_val_345007 = (state_345006[(1)]);
if((state_val_345007 === (1))){
var inst_344996 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_344997 = fun.call(null,(0));
var state_345006__$1 = (function (){var statearr_345008 = state_345006;
(statearr_345008[(7)] = inst_344996);

return statearr_345008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345006__$1,(2),inst_344997);
} else {
if((state_val_345007 === (2))){
var inst_344999 = (state_345006[(2)]);
var inst_345000 = fun.call(null,(1));
var state_345006__$1 = (function (){var statearr_345009 = state_345006;
(statearr_345009[(8)] = inst_344999);

return statearr_345009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345006__$1,(3),inst_345000);
} else {
if((state_val_345007 === (3))){
var inst_344999 = (state_345006[(8)]);
var inst_344996 = (state_345006[(7)]);
var inst_345002 = (state_345006[(2)]);
var inst_345003 = [inst_344999,inst_345002];
var inst_345004 = (new cljs.core.PersistentVector(null,2,(5),inst_344996,inst_345003,null));
var state_345006__$1 = state_345006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_345006__$1,inst_345004);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time,fun))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time,fun){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_345013 = [null,null,null,null,null,null,null,null,null];
(statearr_345013[(0)] = ui$core$state_machine__40145__auto__);

(statearr_345013[(1)] = (1));

return statearr_345013;
});
var ui$core$state_machine__40145__auto____1 = (function (state_345006){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_345006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e345014){if((e345014 instanceof Object)){
var ex__40148__auto__ = e345014;
var statearr_345015_345029 = state_345006;
(statearr_345015_345029[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_345006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e345014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345030 = state_345006;
state_345006 = G__345030;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_345006){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_345006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time,fun))
})();
var state__40169__auto__ = (function (){var statearr_345016 = f__40168__auto__.call(null);
(statearr_345016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_345016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__344941,map__344941__$1,item_id,item,update_time,fun))
);

return c__40167__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("item","description","item/description",-1431609213),(function (env,dispatch_key,params){
var proposal_index = ((new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env)[(0)]) | (0));
var update_time = ((new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env)[(1)]) | (0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,proposal_index,update_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,proposal_index,update_time){
return (function (state_345047){
var state_val_345048 = (state_345047[(1)]);
if((state_val_345048 === (1))){
var inst_345031 = (proposal_index === (0));
var state_345047__$1 = state_345047;
if(cljs.core.truth_(inst_345031)){
var statearr_345049_345060 = state_345047__$1;
(statearr_345049_345060[(1)] = (2));

} else {
var statearr_345050_345061 = state_345047__$1;
(statearr_345050_345061[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345048 === (2))){
var inst_345033 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var inst_345034 = ui.core.starting_items.call(null,inst_345033);
var state_345047__$1 = state_345047;
var statearr_345051_345062 = state_345047__$1;
(statearr_345051_345062[(2)] = inst_345034);

(statearr_345051_345062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345048 === (3))){
var inst_345036 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),proposal_index);
var state_345047__$1 = state_345047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345047__$1,(5),inst_345036);
} else {
if((state_val_345048 === (4))){
var inst_345045 = (state_345047[(2)]);
var state_345047__$1 = state_345047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_345047__$1,inst_345045);
} else {
if((state_val_345048 === (5))){
var inst_345038 = (state_345047[(2)]);
var inst_345039 = (inst_345038[(3)]);
var inst_345040 = (inst_345039 | (0));
var inst_345041 = ui.core.get_proposal_description.call(null,inst_345040,proposal_index);
var state_345047__$1 = state_345047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345047__$1,(6),inst_345041);
} else {
if((state_val_345048 === (6))){
var inst_345043 = (state_345047[(2)]);
var state_345047__$1 = state_345047;
var statearr_345052_345063 = state_345047__$1;
(statearr_345052_345063[(2)] = inst_345043);

(statearr_345052_345063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__40167__auto__,proposal_index,update_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,proposal_index,update_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_345056 = [null,null,null,null,null,null,null];
(statearr_345056[(0)] = ui$core$state_machine__40145__auto__);

(statearr_345056[(1)] = (1));

return statearr_345056;
});
var ui$core$state_machine__40145__auto____1 = (function (state_345047){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_345047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e345057){if((e345057 instanceof Object)){
var ex__40148__auto__ = e345057;
var statearr_345058_345064 = state_345047;
(statearr_345058_345064[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_345047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e345057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345065 = state_345047;
state_345047 = G__345065;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_345047){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_345047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,proposal_index,update_time))
})();
var state__40169__auto__ = (function (){var statearr_345059 = f__40168__auto__.call(null);
(statearr_345059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_345059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,proposal_index,update_time))
);

return c__40167__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","items","etherean/items",165918606),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?cljs.core.ex_info.call(null,"not implemented",cljs.core.PersistentArrayMap.EMPTY):(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_345148){
var state_val_345149 = (state_345148[(1)]);
if((state_val_345149 === (7))){
var inst_345078 = (state_345148[(2)]);
var state_345148__$1 = state_345148;
var statearr_345150_345194 = state_345148__$1;
(statearr_345150_345194[(2)] = inst_345078);

(statearr_345150_345194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (20))){
var inst_345141 = (state_345148[(2)]);
var state_345148__$1 = state_345148;
var statearr_345151_345195 = state_345148__$1;
(statearr_345151_345195[(2)] = inst_345141);

(statearr_345151_345195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (1))){
var inst_345068 = (env == null);
var inst_345069 = cljs.core.not.call(null,inst_345068);
var state_345148__$1 = state_345148;
if(inst_345069){
var statearr_345152_345196 = state_345148__$1;
(statearr_345152_345196[(1)] = (2));

} else {
var statearr_345153_345197 = state_345148__$1;
(statearr_345153_345197[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (24))){
var inst_345126 = (state_345148[(7)]);
var inst_345088 = (state_345148[(8)]);
var inst_345087 = (state_345148[(9)]);
var inst_345129 = (state_345148[(2)]);
var inst_345130 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_345129,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_345126);
var inst_345131 = inst_345087.call(null,inst_345130,inst_345088);
var state_345148__$1 = state_345148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345148__$1,(25),inst_345131);
} else {
if((state_val_345149 === (4))){
var inst_345081 = (state_345148[(2)]);
var state_345148__$1 = state_345148;
if(cljs.core.truth_(inst_345081)){
var statearr_345154_345198 = state_345148__$1;
(statearr_345154_345198[(1)] = (8));

} else {
var statearr_345155_345199 = state_345148__$1;
(statearr_345155_345199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (15))){
var inst_345143 = (state_345148[(2)]);
var state_345148__$1 = state_345148;
var statearr_345156_345200 = state_345148__$1;
(statearr_345156_345200[(2)] = inst_345143);

(statearr_345156_345200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (21))){
var inst_345117 = (state_345148[(10)]);
var inst_345121 = cljs.core.chunk_first.call(null,inst_345117);
var inst_345122 = cljs.core.chunk_rest.call(null,inst_345117);
var inst_345123 = cljs.core.count.call(null,inst_345121);
var inst_345097 = inst_345122;
var inst_345098 = inst_345121;
var inst_345099 = inst_345123;
var inst_345100 = (0);
var state_345148__$1 = (function (){var statearr_345157 = state_345148;
(statearr_345157[(11)] = inst_345098);

(statearr_345157[(12)] = inst_345100);

(statearr_345157[(13)] = inst_345099);

(statearr_345157[(14)] = inst_345097);

return statearr_345157;
})();
var statearr_345158_345201 = state_345148__$1;
(statearr_345158_345201[(2)] = null);

(statearr_345158_345201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (13))){
var inst_345098 = (state_345148[(11)]);
var inst_345100 = (state_345148[(12)]);
var inst_345105 = (state_345148[(15)]);
var inst_345105__$1 = cljs.core._nth.call(null,inst_345098,inst_345100);
var inst_345106 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_345105__$1);
var state_345148__$1 = (function (){var statearr_345159 = state_345148;
(statearr_345159[(15)] = inst_345105__$1);

return statearr_345159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345148__$1,(16),inst_345106);
} else {
if((state_val_345149 === (22))){
var inst_345126 = (state_345148[(7)]);
var inst_345117 = (state_345148[(10)]);
var inst_345126__$1 = cljs.core.first.call(null,inst_345117);
var inst_345127 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_345126__$1);
var state_345148__$1 = (function (){var statearr_345160 = state_345148;
(statearr_345160[(7)] = inst_345126__$1);

return statearr_345160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345148__$1,(24),inst_345127);
} else {
if((state_val_345149 === (6))){
var state_345148__$1 = state_345148;
var statearr_345164_345202 = state_345148__$1;
(statearr_345164_345202[(2)] = false);

(statearr_345164_345202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (25))){
var inst_345126 = (state_345148[(7)]);
var inst_345090 = (state_345148[(16)]);
var inst_345117 = (state_345148[(10)]);
var inst_345133 = (state_345148[(2)]);
var inst_345134 = cljs.core.swap_BANG_.call(null,inst_345090,cljs.core.assoc,inst_345126,inst_345133);
var inst_345135 = cljs.core.next.call(null,inst_345117);
var inst_345097 = inst_345135;
var inst_345098 = null;
var inst_345099 = (0);
var inst_345100 = (0);
var state_345148__$1 = (function (){var statearr_345165 = state_345148;
(statearr_345165[(11)] = inst_345098);

(statearr_345165[(17)] = inst_345134);

(statearr_345165[(12)] = inst_345100);

(statearr_345165[(13)] = inst_345099);

(statearr_345165[(14)] = inst_345097);

return statearr_345165;
})();
var statearr_345166_345203 = state_345148__$1;
(statearr_345166_345203[(2)] = null);

(statearr_345166_345203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (17))){
var inst_345098 = (state_345148[(11)]);
var inst_345100 = (state_345148[(12)]);
var inst_345090 = (state_345148[(16)]);
var inst_345099 = (state_345148[(13)]);
var inst_345105 = (state_345148[(15)]);
var inst_345097 = (state_345148[(14)]);
var inst_345112 = (state_345148[(2)]);
var inst_345113 = cljs.core.swap_BANG_.call(null,inst_345090,cljs.core.assoc,inst_345105,inst_345112);
var inst_345114 = (inst_345100 + (1));
var tmp345161 = inst_345098;
var tmp345162 = inst_345099;
var tmp345163 = inst_345097;
var inst_345097__$1 = tmp345163;
var inst_345098__$1 = tmp345161;
var inst_345099__$1 = tmp345162;
var inst_345100__$1 = inst_345114;
var state_345148__$1 = (function (){var statearr_345167 = state_345148;
(statearr_345167[(18)] = inst_345113);

(statearr_345167[(11)] = inst_345098__$1);

(statearr_345167[(12)] = inst_345100__$1);

(statearr_345167[(13)] = inst_345099__$1);

(statearr_345167[(14)] = inst_345097__$1);

return statearr_345167;
})();
var statearr_345168_345204 = state_345148__$1;
(statearr_345168_345204[(2)] = null);

(statearr_345168_345204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (3))){
var state_345148__$1 = state_345148;
var statearr_345169_345205 = state_345148__$1;
(statearr_345169_345205[(2)] = false);

(statearr_345169_345205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (12))){
var inst_345090 = (state_345148[(16)]);
var inst_345145 = (state_345148[(2)]);
var inst_345146 = cljs.core.deref.call(null,inst_345090);
var state_345148__$1 = (function (){var statearr_345170 = state_345148;
(statearr_345170[(19)] = inst_345145);

return statearr_345170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_345148__$1,inst_345146);
} else {
if((state_val_345149 === (2))){
var inst_345071 = env.cljs$lang$protocol_mask$partition0$;
var inst_345072 = (inst_345071 & (64));
var inst_345073 = env.cljs$core$ISeq$;
var inst_345074 = (inst_345072) || (inst_345073);
var state_345148__$1 = state_345148;
if(cljs.core.truth_(inst_345074)){
var statearr_345171_345206 = state_345148__$1;
(statearr_345171_345206[(1)] = (5));

} else {
var statearr_345172_345207 = state_345148__$1;
(statearr_345172_345207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (23))){
var inst_345138 = (state_345148[(2)]);
var state_345148__$1 = state_345148;
var statearr_345173_345208 = state_345148__$1;
(statearr_345173_345208[(2)] = inst_345138);

(statearr_345173_345208[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (19))){
var state_345148__$1 = state_345148;
var statearr_345174_345209 = state_345148__$1;
(statearr_345174_345209[(2)] = null);

(statearr_345174_345209[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (11))){
var inst_345100 = (state_345148[(12)]);
var inst_345099 = (state_345148[(13)]);
var inst_345102 = (inst_345100 < inst_345099);
var inst_345103 = inst_345102;
var state_345148__$1 = state_345148;
if(cljs.core.truth_(inst_345103)){
var statearr_345175_345210 = state_345148__$1;
(statearr_345175_345210[(1)] = (13));

} else {
var statearr_345176_345211 = state_345148__$1;
(statearr_345176_345211[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (9))){
var state_345148__$1 = state_345148;
var statearr_345177_345212 = state_345148__$1;
(statearr_345177_345212[(2)] = env);

(statearr_345177_345212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (5))){
var state_345148__$1 = state_345148;
var statearr_345178_345213 = state_345148__$1;
(statearr_345178_345213[(2)] = true);

(statearr_345178_345213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (14))){
var inst_345117 = (state_345148[(10)]);
var inst_345097 = (state_345148[(14)]);
var inst_345117__$1 = cljs.core.seq.call(null,inst_345097);
var state_345148__$1 = (function (){var statearr_345179 = state_345148;
(statearr_345179[(10)] = inst_345117__$1);

return statearr_345179;
})();
if(inst_345117__$1){
var statearr_345180_345214 = state_345148__$1;
(statearr_345180_345214[(1)] = (18));

} else {
var statearr_345181_345215 = state_345148__$1;
(statearr_345181_345215[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (16))){
var inst_345088 = (state_345148[(8)]);
var inst_345087 = (state_345148[(9)]);
var inst_345105 = (state_345148[(15)]);
var inst_345108 = (state_345148[(2)]);
var inst_345109 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_345108,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_345105);
var inst_345110 = inst_345087.call(null,inst_345109,inst_345088);
var state_345148__$1 = state_345148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345148__$1,(17),inst_345110);
} else {
if((state_val_345149 === (10))){
var inst_345086 = (state_345148[(2)]);
var inst_345087 = cljs.core.get.call(null,inst_345086,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_345088 = cljs.core.get.call(null,inst_345086,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_345089 = cljs.core.PersistentVector.EMPTY;
var inst_345090 = cljs.core.atom.call(null,inst_345089);
var inst_345095 = cljs.core.range.call(null,ui.core.max_items);
var inst_345096 = cljs.core.seq.call(null,inst_345095);
var inst_345097 = inst_345096;
var inst_345098 = null;
var inst_345099 = (0);
var inst_345100 = (0);
var state_345148__$1 = (function (){var statearr_345182 = state_345148;
(statearr_345182[(11)] = inst_345098);

(statearr_345182[(8)] = inst_345088);

(statearr_345182[(12)] = inst_345100);

(statearr_345182[(16)] = inst_345090);

(statearr_345182[(13)] = inst_345099);

(statearr_345182[(9)] = inst_345087);

(statearr_345182[(14)] = inst_345097);

return statearr_345182;
})();
var statearr_345183_345216 = state_345148__$1;
(statearr_345183_345216[(2)] = null);

(statearr_345183_345216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (18))){
var inst_345117 = (state_345148[(10)]);
var inst_345119 = cljs.core.chunked_seq_QMARK_.call(null,inst_345117);
var state_345148__$1 = state_345148;
if(inst_345119){
var statearr_345184_345217 = state_345148__$1;
(statearr_345184_345217[(1)] = (21));

} else {
var statearr_345185_345218 = state_345148__$1;
(statearr_345185_345218[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_345149 === (8))){
var inst_345083 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_345148__$1 = state_345148;
var statearr_345186_345219 = state_345148__$1;
(statearr_345186_345219[(2)] = inst_345083);

(statearr_345186_345219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_345190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_345190[(0)] = ui$core$state_machine__40145__auto__);

(statearr_345190[(1)] = (1));

return statearr_345190;
});
var ui$core$state_machine__40145__auto____1 = (function (state_345148){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_345148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e345191){if((e345191 instanceof Object)){
var ex__40148__auto__ = e345191;
var statearr_345192_345220 = state_345148;
(statearr_345192_345220[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_345148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e345191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345221 = state_345148;
state_345148 = G__345221;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_345148){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_345148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_345193 = f__40168__auto__.call(null);
(statearr_345193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_345193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__345222__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__345222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__345223__i = 0, G__345223__a = new Array(arguments.length -  0);
while (G__345223__i < G__345223__a.length) {G__345223__a[G__345223__i] = arguments[G__345223__i + 0]; ++G__345223__i;}
  args = new cljs.core.IndexedSeq(G__345223__a,0);
} 
return G__345222__delegate.call(this,args);};
G__345222.cljs$lang$maxFixedArity = 0;
G__345222.cljs$lang$applyTo = (function (arglist__345224){
var args = cljs.core.seq(arglist__345224);
return G__345222__delegate(args);
});
G__345222.cljs$core$IFn$_invoke$arity$variadic = G__345222__delegate;
return G__345222;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__345225__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__345225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__345226__i = 0, G__345226__a = new Array(arguments.length -  0);
while (G__345226__i < G__345226__a.length) {G__345226__a[G__345226__i] = arguments[G__345226__i + 0]; ++G__345226__i;}
  args = new cljs.core.IndexedSeq(G__345226__a,0);
} 
return G__345225__delegate.call(this,args);};
G__345225.cljs$lang$maxFixedArity = 0;
G__345225.cljs$lang$applyTo = (function (arglist__345227){
var args = cljs.core.seq(arglist__345227);
return G__345225__delegate(args);
});
G__345225.cljs$core$IFn$_invoke$arity$variadic = G__345225__delegate;
return G__345225;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__345228__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__345228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__345229__i = 0, G__345229__a = new Array(arguments.length -  0);
while (G__345229__i < G__345229__a.length) {G__345229__a[G__345229__i] = arguments[G__345229__i + 0]; ++G__345229__i;}
  args = new cljs.core.IndexedSeq(G__345229__a,0);
} 
return G__345228__delegate.call(this,args);};
G__345228.cljs$lang$maxFixedArity = 0;
G__345228.cljs$lang$applyTo = (function (arglist__345230){
var args = cljs.core.seq(arglist__345230);
return G__345228__delegate(args);
});
G__345228.cljs$core$IFn$_invoke$arity$variadic = G__345228__delegate;
return G__345228;
})()
);
if(typeof ui.core.mutate_server !== 'undefined'){
} else {
ui.core.mutate_server = (function (){var method_table__35413__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35417__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","mutate-server"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35417__auto__,method_table__35413__auto__,prefer_table__35414__auto__,method_cache__35415__auto__,cached_hierarchy__35416__auto__));
})();
}
ui.core.format_message = (function ui$core$format_message(message){
return cljs.core.apply.call(null,cljs.core.array,cljs.core.take.call(null,(4),cljs.core.concat.call(null,cljs.core.map.call(null,(function (x){
return cljs.core.apply.call(null,cljs.core.str,x);
}),cljs.core.partition_all.call(null,(32),message)),cljs.core.repeat.call(null,""))));
});
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("proposal","save","proposal/save",356239610,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__345231 = params;
var map__345231__$1 = ((((!((map__345231 == null)))?((((map__345231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__345231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__345231):map__345231);
var id = cljs.core.get.call(null,map__345231__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__345231__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__345231,map__345231__$1,id,description){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__345231,map__345231__$1,id,description){
return (function (state_345260){
var state_val_345261 = (state_345260[(1)]);
if((state_val_345261 === (1))){
var inst_345233 = ui.core.block_number.call(null);
var state_345260__$1 = state_345260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345260__$1,(2),inst_345233);
} else {
if((state_val_345261 === (2))){
var inst_345235 = (state_345260[(2)]);
var inst_345236 = ui.core.format_message.call(null,description);
var inst_345237 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"addProposal","addProposal",-2108750592),inst_345236);
var state_345260__$1 = (function (){var statearr_345262 = state_345260;
(statearr_345262[(7)] = inst_345235);

return statearr_345262;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345260__$1,(3),inst_345237);
} else {
if((state_val_345261 === (3))){
var inst_345235 = (state_345260[(7)]);
var inst_345239 = (state_345260[(2)]);
var inst_345240 = ui.core.get_historical_events.call(null,ui.core.etherean,inst_345235,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({}));
var state_345260__$1 = (function (){var statearr_345263 = state_345260;
(statearr_345263[(8)] = inst_345239);

return statearr_345263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345260__$1,(4),inst_345240);
} else {
if((state_val_345261 === (4))){
var inst_345242 = (state_345260[(2)]);
var inst_345243 = cljs.core.first.call(null,inst_345242);
var inst_345244 = [new cljs.core.Keyword(null,"tempids","tempids",1767509089)];
var inst_345245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_345246 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),id];
var inst_345247 = (new cljs.core.PersistentVector(null,2,(5),inst_345245,inst_345246,null));
var inst_345248 = [inst_345247];
var inst_345249 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_345250 = inst_345243.args;
var inst_345251 = inst_345250.proposalIndex;
var inst_345252 = (inst_345251 | (0));
var inst_345253 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),inst_345252];
var inst_345254 = (new cljs.core.PersistentVector(null,2,(5),inst_345249,inst_345253,null));
var inst_345255 = [inst_345254];
var inst_345256 = cljs.core.PersistentHashMap.fromArrays(inst_345248,inst_345255);
var inst_345257 = [inst_345256];
var inst_345258 = cljs.core.PersistentHashMap.fromArrays(inst_345244,inst_345257);
var state_345260__$1 = state_345260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_345260__$1,inst_345258);
} else {
return null;
}
}
}
}
});})(c__40167__auto__,map__345231,map__345231__$1,id,description))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__345231,map__345231__$1,id,description){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_345267 = [null,null,null,null,null,null,null,null,null];
(statearr_345267[(0)] = ui$core$state_machine__40145__auto__);

(statearr_345267[(1)] = (1));

return statearr_345267;
});
var ui$core$state_machine__40145__auto____1 = (function (state_345260){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_345260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e345268){if((e345268 instanceof Object)){
var ex__40148__auto__ = e345268;
var statearr_345269_345271 = state_345260;
(statearr_345269_345271[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_345260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e345268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345272 = state_345260;
state_345260 = G__345272;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_345260){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_345260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__345231,map__345231__$1,id,description))
})();
var state__40169__auto__ = (function (){var statearr_345270 = f__40168__auto__.call(null);
(statearr_345270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_345270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__345231,map__345231__$1,id,description))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__345273 = params;
var map__345273__$1 = ((((!((map__345273 == null)))?((((map__345273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__345273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__345273):map__345273);
var id = cljs.core.get.call(null,map__345273__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__345273__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__345273,map__345273__$1,id,direction){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__345273,map__345273__$1,id,direction){
return (function (state_345280){
var state_val_345281 = (state_345280[(1)]);
if((state_val_345281 === (1))){
var inst_345275 = cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113));
var inst_345276 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnProposal","voteOnProposal",-1101682438),id,inst_345275);
var state_345280__$1 = state_345280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345280__$1,(2),inst_345276);
} else {
if((state_val_345281 === (2))){
var inst_345278 = (state_345280[(2)]);
var state_345280__$1 = state_345280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_345280__$1,inst_345278);
} else {
return null;
}
}
});})(c__40167__auto__,map__345273,map__345273__$1,id,direction))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__345273,map__345273__$1,id,direction){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_345285 = [null,null,null,null,null,null,null];
(statearr_345285[(0)] = ui$core$state_machine__40145__auto__);

(statearr_345285[(1)] = (1));

return statearr_345285;
});
var ui$core$state_machine__40145__auto____1 = (function (state_345280){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_345280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e345286){if((e345286 instanceof Object)){
var ex__40148__auto__ = e345286;
var statearr_345287_345289 = state_345280;
(statearr_345287_345289[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_345280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e345286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345290 = state_345280;
state_345280 = G__345290;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_345280){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_345280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__345273,map__345273__$1,id,direction))
})();
var state__40169__auto__ = (function (){var statearr_345288 = f__40168__auto__.call(null);
(statearr_345288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_345288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__345273,map__345273__$1,id,direction))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("item","vote","item/vote",-842849665,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__345291 = params;
var map__345291__$1 = ((((!((map__345291 == null)))?((((map__345291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__345291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__345291):map__345291);
var id = cljs.core.get.call(null,map__345291__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__345291__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__345291,map__345291__$1,id,direction){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__345291,map__345291__$1,id,direction){
return (function (state_345297){
var state_val_345298 = (state_345297[(1)]);
if((state_val_345298 === (1))){
var inst_345293 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnItem","voteOnItem",903210165),id,direction);
var state_345297__$1 = state_345297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345297__$1,(2),inst_345293);
} else {
if((state_val_345298 === (2))){
var inst_345295 = (state_345297[(2)]);
var state_345297__$1 = state_345297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_345297__$1,inst_345295);
} else {
return null;
}
}
});})(c__40167__auto__,map__345291,map__345291__$1,id,direction))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__345291,map__345291__$1,id,direction){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_345302 = [null,null,null,null,null,null,null];
(statearr_345302[(0)] = ui$core$state_machine__40145__auto__);

(statearr_345302[(1)] = (1));

return statearr_345302;
});
var ui$core$state_machine__40145__auto____1 = (function (state_345297){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_345297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e345303){if((e345303 instanceof Object)){
var ex__40148__auto__ = e345303;
var statearr_345304_345306 = state_345297;
(statearr_345304_345306[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_345297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e345303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345307 = state_345297;
state_345297 = G__345307;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_345297){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_345297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__345291,map__345291__$1,id,direction))
})();
var state__40169__auto__ = (function (){var statearr_345305 = f__40168__auto__.call(null);
(statearr_345305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_345305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__345291,map__345291__$1,id,direction))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__345308 = params;
var map__345308__$1 = ((((!((map__345308 == null)))?((((map__345308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__345308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__345308):map__345308);
var value = cljs.core.get.call(null,map__345308__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__345308,map__345308__$1,value){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__345308,map__345308__$1,value){
return (function (state_345322){
var state_val_345323 = (state_345322[(1)]);
if((state_val_345323 === (1))){
var inst_345310 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_345322__$1 = state_345322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345322__$1,(2),inst_345310);
} else {
if((state_val_345323 === (2))){
var inst_345312 = (state_345322[(2)]);
var inst_345313 = ui.core.contract.call(null,ui.contract.staking_abi,inst_345312);
var inst_345314 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_345315 = web3.toWei(value,"ether");
var inst_345316 = [inst_345315];
var inst_345317 = cljs.core.PersistentHashMap.fromArrays(inst_345314,inst_345316);
var inst_345318 = ui.core.chan_transact.call(null,inst_345313,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),inst_345317);
var state_345322__$1 = state_345322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345322__$1,(3),inst_345318);
} else {
if((state_val_345323 === (3))){
var inst_345320 = (state_345322[(2)]);
var state_345322__$1 = state_345322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_345322__$1,inst_345320);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__345308,map__345308__$1,value))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__345308,map__345308__$1,value){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_345327 = [null,null,null,null,null,null,null];
(statearr_345327[(0)] = ui$core$state_machine__40145__auto__);

(statearr_345327[(1)] = (1));

return statearr_345327;
});
var ui$core$state_machine__40145__auto____1 = (function (state_345322){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_345322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e345328){if((e345328 instanceof Object)){
var ex__40148__auto__ = e345328;
var statearr_345329_345331 = state_345322;
(statearr_345329_345331[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_345322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e345328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345332 = state_345322;
state_345322 = G__345332;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_345322){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_345322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__345308,map__345308__$1,value))
})();
var state__40169__auto__ = (function (){var statearr_345330 = f__40168__auto__.call(null);
(statearr_345330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_345330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__345308,map__345308__$1,value))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","withdraw","user/withdraw",-1187344809,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__345333 = params;
var map__345333__$1 = ((((!((map__345333 == null)))?((((map__345333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__345333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__345333):map__345333);
var value = cljs.core.get.call(null,map__345333__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__345333,map__345333__$1,value){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__345333,map__345333__$1,value){
return (function (state_345343){
var state_val_345344 = (state_345343[(1)]);
if((state_val_345344 === (1))){
var inst_345335 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_345343__$1 = state_345343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345343__$1,(2),inst_345335);
} else {
if((state_val_345344 === (2))){
var inst_345337 = (state_345343[(2)]);
var inst_345338 = ui.core.contract.call(null,ui.contract.staking_abi,inst_345337);
var inst_345339 = ui.core.chan_transact.call(null,inst_345338,new cljs.core.Keyword(null,"withdraw","withdraw",1469652053));
var state_345343__$1 = state_345343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345343__$1,(3),inst_345339);
} else {
if((state_val_345344 === (3))){
var inst_345341 = (state_345343[(2)]);
var state_345343__$1 = state_345343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_345343__$1,inst_345341);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__345333,map__345333__$1,value))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__345333,map__345333__$1,value){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_345348 = [null,null,null,null,null,null,null];
(statearr_345348[(0)] = ui$core$state_machine__40145__auto__);

(statearr_345348[(1)] = (1));

return statearr_345348;
});
var ui$core$state_machine__40145__auto____1 = (function (state_345343){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_345343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e345349){if((e345349 instanceof Object)){
var ex__40148__auto__ = e345349;
var statearr_345350_345352 = state_345343;
(statearr_345350_345352[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_345343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e345349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345353 = state_345343;
state_345343 = G__345353;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_345343){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_345343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__345333,map__345333__$1,value))
})();
var state__40169__auto__ = (function (){var statearr_345351 = f__40168__auto__.call(null);
(statearr_345351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_345351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__345333,map__345333__$1,value))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("etherean","advance-debug-day","etherean/advance-debug-day",-132769747,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_345363){
var state_val_345364 = (state_345363[(1)]);
if((state_val_345364 === (1))){
var inst_345354 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"debugTime","debugTime",-1487871746));
var state_345363__$1 = state_345363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345363__$1,(2),inst_345354);
} else {
if((state_val_345364 === (2))){
var inst_345356 = (state_345363[(2)]);
var inst_345357 = (inst_345356 | (0));
var inst_345358 = (inst_345357 + (86400));
var inst_345359 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"setDebugTime","setDebugTime",1278197802),inst_345358);
var state_345363__$1 = state_345363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345363__$1,(3),inst_345359);
} else {
if((state_val_345364 === (3))){
var inst_345361 = (state_345363[(2)]);
var state_345363__$1 = state_345363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_345363__$1,inst_345361);
} else {
return null;
}
}
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_345368 = [null,null,null,null,null,null,null];
(statearr_345368[(0)] = ui$core$state_machine__40145__auto__);

(statearr_345368[(1)] = (1));

return statearr_345368;
});
var ui$core$state_machine__40145__auto____1 = (function (state_345363){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_345363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e345369){if((e345369 instanceof Object)){
var ex__40148__auto__ = e345369;
var statearr_345370_345372 = state_345363;
(statearr_345370_345372[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_345363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e345369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345373 = state_345363;
state_345363 = G__345373;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_345363){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_345363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_345371 = f__40168__auto__.call(null);
(statearr_345371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_345371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})], null);
}));
ui.core.server_parser = ui.parser_async.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read_server,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate_server], null));
ui.core.process_remote_node = (function ui$core$process_remote_node(ast){
var chi = cljs.core.map.call(null,ui$core$process_remote_node,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"root","root",-448657453))){
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"ast","ast",-860334068),chi),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,new cljs.core.Keyword(null,"roots","roots",-1088919250),chi))));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(ast))){
var k = cljs.core.map.call(null,ui$core$process_remote_node,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),null,new cljs.core.Keyword(null,"roots","roots",-1088919250),cljs.core.cons.call(null,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"ast","ast",-860334068),k))),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"roots","roots",-1088919250),k))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),(function (){var chi__$1 = cljs.core.keep.call(null,new cljs.core.Keyword(null,"ast","ast",-860334068),chi);
if(cljs.core.truth_((function (){var or__34390__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return cljs.core.seq.call(null,chi__$1);
}
})())){
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),chi__$1);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"roots","roots",-1088919250),cljs.core.apply.call(null,cljs.core.concat,cljs.core.keep.call(null,new cljs.core.Keyword(null,"roots","roots",-1088919250),chi))], null);

}
}
});
ui.core.process_remote_query = (function ui$core$process_remote_query(query){
return om.next.merge_joins.call(null,om.next.ast__GT_query.call(null,ui.core.process_remote_node.call(null,om.next.query__GT_ast.call(null,query))));
});
ui.core.blockchain_send = (function ui$core$blockchain_send(p__345374,cb){
var map__345393 = p__345374;
var map__345393__$1 = ((((!((map__345393 == null)))?((((map__345393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__345393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__345393):map__345393);
var remote = cljs.core.get.call(null,map__345393__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__345393,map__345393__$1,remote){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__345393,map__345393__$1,remote){
return (function (state_345402){
var state_val_345403 = (state_345402[(1)]);
if((state_val_345403 === (1))){
var inst_345395 = cljs.core.PersistentHashMap.EMPTY;
var inst_345396 = ui.core.process_remote_query.call(null,remote);
var inst_345397 = ui.core.server_parser.call(null,inst_345395,inst_345396);
var state_345402__$1 = state_345402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_345402__$1,(2),inst_345397);
} else {
if((state_val_345403 === (2))){
var inst_345399 = (state_345402[(2)]);
var inst_345400 = cb.call(null,inst_345399);
var state_345402__$1 = state_345402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_345402__$1,inst_345400);
} else {
return null;
}
}
});})(c__40167__auto__,map__345393,map__345393__$1,remote))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__345393,map__345393__$1,remote){
return (function() {
var ui$core$blockchain_send_$_state_machine__40145__auto__ = null;
var ui$core$blockchain_send_$_state_machine__40145__auto____0 = (function (){
var statearr_345407 = [null,null,null,null,null,null,null];
(statearr_345407[(0)] = ui$core$blockchain_send_$_state_machine__40145__auto__);

(statearr_345407[(1)] = (1));

return statearr_345407;
});
var ui$core$blockchain_send_$_state_machine__40145__auto____1 = (function (state_345402){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_345402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e345408){if((e345408 instanceof Object)){
var ex__40148__auto__ = e345408;
var statearr_345409_345411 = state_345402;
(statearr_345409_345411[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_345402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e345408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__345412 = state_345402;
state_345402 = G__345412;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$blockchain_send_$_state_machine__40145__auto__ = function(state_345402){
switch(arguments.length){
case 0:
return ui$core$blockchain_send_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$blockchain_send_$_state_machine__40145__auto____1.call(this,state_345402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$blockchain_send_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$blockchain_send_$_state_machine__40145__auto____0;
ui$core$blockchain_send_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$blockchain_send_$_state_machine__40145__auto____1;
return ui$core$blockchain_send_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__345393,map__345393__$1,remote))
})();
var state__40169__auto__ = (function (){var statearr_345410 = f__40168__auto__.call(null);
(statearr_345410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_345410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__345393,map__345393__$1,remote))
);

return c__40167__auto__;
});
ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),ui.core.blockchain_send,new cljs.core.Keyword(null,"merge","merge",-1804319409),ui.core.my_merge,new cljs.core.Keyword(null,"migrate","migrate",-207110743),ui.core.migrate,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),ui.core.my_merge_tree,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
om.next.add_root_BANG_.call(null,ui.core.reconciler,ui.core.Root,goog.dom.getElement("app"));
ui.core.my_toaster = blueprint_cljs.core.toaster.call(null);

//# sourceMappingURL=core.js.map?rel=1488257810487