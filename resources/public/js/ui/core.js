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
ui.core.brain_vertices = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__291786){
var vec__291787 = p__291786;
var x = cljs.core.nth.call(null,vec__291787,(0),null);
var y = cljs.core.nth.call(null,vec__291787,(1),null);
var z = cljs.core.nth.call(null,vec__291787,(2),null);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,(y - 0.01),z],null));
}),cljs.core.concat.call(null,cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))),cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))))));
ui.core.brain_faces = cljs.core.map.call(null,(function (p__291790){
var vec__291791 = p__291790;
var a = cljs.core.nth.call(null,vec__291791,(0),null);
var b = cljs.core.nth.call(null,vec__291791,(1),null);
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
var G__291794 = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
s = G__291794;
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

var x291799_291817 = ui.core.Item.prototype;
x291799_291817.componentWillUpdate = ((function (x291799_291817){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___291818 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___291819 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___291818,next_ident__40467__auto___291819)){
var idxr__40468__auto___291820 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___291820 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___291820),((function (idxr__40468__auto___291820,ident__40466__auto___291818,next_ident__40467__auto___291819,this__40462__auto__,x291799_291817){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___291818], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___291819], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___291820,ident__40466__auto___291818,next_ident__40467__auto___291819,this__40462__auto__,x291799_291817))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x291799_291817))
;

x291799_291817.shouldComponentUpdate = ((function (x291799_291817){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__291801 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__291801);
} else {
return G__291801;
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
});})(x291799_291817))
;

x291799_291817.componentWillUnmount = ((function (x291799_291817){
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
});})(x291799_291817))
;

x291799_291817.componentDidUpdate = ((function (x291799_291817){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x291799_291817))
;

x291799_291817.isMounted = ((function (x291799_291817){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x291799_291817))
;

x291799_291817.componentWillMount = ((function (x291799_291817){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x291799_291817))
;

x291799_291817.initLocalState = ((function (x291799_291817){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj291803 = {"omcljs$state":ret__40440__auto__};
return obj291803;
});})(x291799_291817))
;

x291799_291817.render = ((function (x291799_291817){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_291804 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_291805 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_291806 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_291807 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_291808 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__291809 = om.next.props.call(null,this$);
var map__291809__$1 = ((((!((map__291809 == null)))?((((map__291809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291809):map__291809);
var id = cljs.core.get.call(null,map__291809__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var description = cljs.core.get.call(null,map__291809__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
var votes = cljs.core.get.call(null,map__291809__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var map__291810 = om.next.get_state.call(null,this$);
var map__291810__$1 = ((((!((map__291810 == null)))?((((map__291810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291810):map__291810);
var dialog = cljs.core.get.call(null,map__291810__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__291811 = dialog;
var map__291811__$1 = ((((!((map__291811 == null)))?((((map__291811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291811):map__291811);
var direction = cljs.core.get.call(null,map__291811__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": "5px", "paddingBottom": "5px", "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),(((direction === (0)))?"Vote down":"Vote Up"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,hide_dialog,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817){
return (function (e){
return hide_dialog.call(null);
});})(map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,hide_dialog,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,hide_dialog,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("item","vote","item/vote",-842849665,null)),(function (){var x__35316__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","items","etherean/items",165918606)))))));
});})(map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,hide_dialog,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817))
], null),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can vote up ",React.DOM.i(null,"one item")," in this list per day, as well as vote down ",React.DOM.i(null,"one item")," in this list per day. These votes will be remembered and automatically applied on subsequent days, until you change your choices (or until your up/down choices fall from the front page) "],null)))),React.DOM.p(null,"So... is this an item currently on the mind of ethereans?")),(function (){var vote_button = ((function (map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,hide_dialog,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817){
return (function (direction__$1,activated){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,hide_dialog,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),(0),new cljs.core.Keyword(null,"up","up",-269712113),(1)], null).call(null,direction__$1)], null));
});})(map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,hide_dialog,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817))
], null));
});})(map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,hide_dialog,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(votes)?ui.core.format_vote_number.call(null,(((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))))):"---")],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false)],null))));
})(),(function (){var item_body = ((function (map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,hide_dialog,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817){
return (function (desc,detail){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__291809,map__291809__$1,id,description,votes,map__291810,map__291810__$1,dialog,map__291811,map__291811__$1,direction,hide_dialog,_STAR_reconciler_STAR_291804,_STAR_depth_STAR_291805,_STAR_shared_STAR_291806,_STAR_instrument_STAR_291807,_STAR_parent_STAR_291808,this$,this__40461__auto__,x291799_291817))
;
return item_body.call(null,description,(cljs.core.truth_(votes)?null:ui.core.mining_spinner.call(null)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_291808;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_291807;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_291806;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_291805;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_291804;
}});})(x291799_291817))
;


ui.core.Item.prototype.constructor = ui.core.Item;

ui.core.Item.prototype.constructor.displayName = "ui.core/Item";

ui.core.Item.prototype.om$isComponent = true;

var x291815_291821 = ui.core.Item;
/** @nocollapse */
x291815_291821.om$next$IQuery$ = true;

/** @nocollapse */
x291815_291821.om$next$IQuery$query$arity$1 = ((function (x291815_291821){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null);
});})(x291815_291821))
;


var x291816_291822 = ui.core.Item.prototype;

x291816_291822.om$next$IQuery$ = true;


x291816_291822.om$next$IQuery$query$arity$1 = ((function (x291816_291822){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null);
});})(x291816_291822))
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

var x291827_291841 = ui.core.Items.prototype;
x291827_291841.componentWillUpdate = ((function (x291827_291841){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___291842 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___291843 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___291842,next_ident__40467__auto___291843)){
var idxr__40468__auto___291844 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___291844 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___291844),((function (idxr__40468__auto___291844,ident__40466__auto___291842,next_ident__40467__auto___291843,this__40462__auto__,x291827_291841){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___291842], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___291843], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___291844,ident__40466__auto___291842,next_ident__40467__auto___291843,this__40462__auto__,x291827_291841))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x291827_291841))
;

x291827_291841.shouldComponentUpdate = ((function (x291827_291841){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__291829 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__291829);
} else {
return G__291829;
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
});})(x291827_291841))
;

x291827_291841.componentWillUnmount = ((function (x291827_291841){
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
});})(x291827_291841))
;

x291827_291841.componentDidUpdate = ((function (x291827_291841){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x291827_291841))
;

x291827_291841.isMounted = ((function (x291827_291841){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x291827_291841))
;

x291827_291841.componentWillMount = ((function (x291827_291841){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x291827_291841))
;

x291827_291841.render = ((function (x291827_291841){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_291830 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_291831 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_291832 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_291833 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_291834 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.9})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__35244__auto__ = ((function (_STAR_reconciler_STAR_291830,_STAR_depth_STAR_291831,_STAR_shared_STAR_291832,_STAR_instrument_STAR_291833,_STAR_parent_STAR_291834,this$,this__40461__auto__,x291827_291841){
return (function ui$core$iter__291835(s__291836){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_291830,_STAR_depth_STAR_291831,_STAR_shared_STAR_291832,_STAR_instrument_STAR_291833,_STAR_parent_STAR_291834,this$,this__40461__auto__,x291827_291841){
return (function (){
var s__291836__$1 = s__291836;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__291836__$1);
if(temp__6728__auto__){
var s__291836__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__291836__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__291836__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__291838 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__291837 = (0);
while(true){
if((i__291837 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__291837);
cljs.core.chunk_append.call(null,b__291838,ui.core.item_component.call(null,item));

var G__291845 = (i__291837 + (1));
i__291837 = G__291845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__291838),ui$core$iter__291835.call(null,cljs.core.chunk_rest.call(null,s__291836__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__291838),null);
}
} else {
var item = cljs.core.first.call(null,s__291836__$2);
return cljs.core.cons.call(null,ui.core.item_component.call(null,item),ui$core$iter__291835.call(null,cljs.core.rest.call(null,s__291836__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_291830,_STAR_depth_STAR_291831,_STAR_shared_STAR_291832,_STAR_instrument_STAR_291833,_STAR_parent_STAR_291834,this$,this__40461__auto__,x291827_291841))
,null,null));
});})(_STAR_reconciler_STAR_291830,_STAR_depth_STAR_291831,_STAR_shared_STAR_291832,_STAR_instrument_STAR_291833,_STAR_parent_STAR_291834,this$,this__40461__auto__,x291827_291841))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("etherean","items","etherean/items",165918606).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_291834;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_291833;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_291832;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_291831;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_291830;
}});})(x291827_291841))
;


ui.core.Items.prototype.constructor = ui.core.Items;

ui.core.Items.prototype.constructor.displayName = "ui.core/Items";

ui.core.Items.prototype.om$isComponent = true;

var x291839_291846 = ui.core.Items;
/** @nocollapse */
x291839_291846.om$next$IQuery$ = true;

/** @nocollapse */
x291839_291846.om$next$IQuery$query$arity$1 = ((function (x291839_291846){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x291839_291846))
;


var x291840_291847 = ui.core.Items.prototype;

x291840_291847.om$next$IQuery$ = true;


x291840_291847.om$next$IQuery$query$arity$1 = ((function (x291840_291847){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x291840_291847))
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

var x291852_291872 = ui.core.Proposal.prototype;
x291852_291872.componentWillUpdate = ((function (x291852_291872){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___291873 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___291874 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___291873,next_ident__40467__auto___291874)){
var idxr__40468__auto___291875 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___291875 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___291875),((function (idxr__40468__auto___291875,ident__40466__auto___291873,next_ident__40467__auto___291874,this__40462__auto__,x291852_291872){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___291873], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___291874], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___291875,ident__40466__auto___291873,next_ident__40467__auto___291874,this__40462__auto__,x291852_291872))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x291852_291872))
;

x291852_291872.shouldComponentUpdate = ((function (x291852_291872){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__291854 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__291854);
} else {
return G__291854;
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
});})(x291852_291872))
;

x291852_291872.componentWillUnmount = ((function (x291852_291872){
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
});})(x291852_291872))
;

x291852_291872.componentDidUpdate = ((function (x291852_291872){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x291852_291872))
;

x291852_291872.isMounted = ((function (x291852_291872){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x291852_291872))
;

x291852_291872.componentWillMount = ((function (x291852_291872){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x291852_291872))
;

x291852_291872.initLocalState = ((function (x291852_291872){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),"",new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj291856 = {"omcljs$state":ret__40440__auto__};
return obj291856;
});})(x291852_291872))
;

x291852_291872.render = ((function (x291852_291872){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_291857 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_291858 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_291859 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_291860 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_291861 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__291862 = om.next.props.call(null,this$);
var map__291862__$1 = ((((!((map__291862 == null)))?((((map__291862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291862):map__291862);
var description = cljs.core.get.call(null,map__291862__$1,new cljs.core.Keyword("proposal","description","proposal/description",1644720226));
var id = cljs.core.get.call(null,map__291862__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var unsaved = cljs.core.get.call(null,map__291862__$1,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935));
var upvotes = cljs.core.get.call(null,map__291862__$1,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560));
var downvotes = cljs.core.get.call(null,map__291862__$1,new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132));
var user = cljs.core.get.call(null,map__291862__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__291863 = user;
var map__291863__$1 = ((((!((map__291863 == null)))?((((map__291863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291863):map__291863);
var can_vote_proposal = cljs.core.get.call(null,map__291863__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__291863__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var temporary = om.next.tempid_QMARK_.call(null,id);
var has_stake = (stake > (0));
var map__291864 = om.next.get_state.call(null,this$);
var map__291864__$1 = ((((!((map__291864 == null)))?((((map__291864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291864):map__291864);
var height = cljs.core.get.call(null,map__291864__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var dialog = cljs.core.get.call(null,map__291864__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__291865 = dialog;
var map__291865__$1 = ((((!((map__291865 == null)))?((((map__291865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291865):map__291865);
var direction = cljs.core.get.call(null,map__291865__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872))
;
return om_tools.dom.element.call(null,React.DOM.div,blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113)))?"Vote Up":"Vote Down"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872){
return (function (e){
return hide_dialog.call(null);
});})(map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null)),(function (){var x__35316__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
});})(map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872))
], null),"You can vote on one proposal per day. Is this an item currently on the mind of ethereans, that deserves to be listed on the front page?"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(unsaved)?(0):(1))], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),ui.motion.spring.call(null,height)], null)], null),((function (map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872){
return (function (value){
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingBottom": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var vote_button = ((function (map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872){
return (function (direction__$1,activated,disabled){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872){
return (function (e){
if(cljs.core.truth_(can_vote_proposal)){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),direction__$1], null));
} else {
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You already voted on a proposal today. You will need to wait until tomorrow to vote again."}));
}
});})(map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872))
], null));
});})(map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false,unsaved),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(unsaved)?null:(cljs.core.truth_(upvotes)?ui.core.format_vote_number.call(null,(upvotes - downvotes)):"---"
))],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false,unsaved)],null))));
})(),(function (){var proposal_body = ((function (map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872){
return (function (desc,detail,disabled){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)}), "onClick": om_tools.dom.format_opts.call(null,((function (map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872){
return (function (){
if(cljs.core.truth_(disabled)){
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You have not staked any funds yet. Please got to the \"Voting Stakes\" tab first."}));
} else {
return null;
}
});})(map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872))
)}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872))
;
if(cljs.core.truth_(unsaved)){
var temp_description = new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
var has_description = cljs.core.seq.call(null,temp_description);
var save_fn = ((function (temp_description,has_description,proposal_body,map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872){
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
});})(temp_description,has_description,proposal_body,map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872))
;
return proposal_body.call(null,blueprint_cljs.core.editable_text.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),((!(has_stake))?"... (Please deposit stake first to propose an item)":((cljs.core.not.call(null,can_vote_proposal))?"... (Today's proposal action already used up)":"... propose a new item!"
)),new cljs.core.Keyword(null,"value","value",305978217),temp_description,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(has_stake)) || (cljs.core.not.call(null,can_vote_proposal)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp_description,has_description,save_fn,proposal_body,map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872){
return (function (s){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),s);
});})(temp_description,has_description,save_fn,proposal_body,map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872))
], null)),((has_description)?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary pt-icon-plus pt-minimal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_fn], null),"Save"):null),!(has_stake));
} else {
return proposal_body.call(null,description,(((temporary) || (cljs.core.not.call(null,upvotes)))?ui.core.mining_spinner.call(null):null),false);
}
})()],null))));
});})(map__291862,map__291862__$1,description,id,unsaved,upvotes,downvotes,user,map__291863,map__291863__$1,can_vote_proposal,stake,temporary,has_stake,map__291864,map__291864__$1,height,dialog,map__291865,map__291865__$1,direction,hide_dialog,_STAR_reconciler_STAR_291857,_STAR_depth_STAR_291858,_STAR_shared_STAR_291859,_STAR_instrument_STAR_291860,_STAR_parent_STAR_291861,this$,this__40461__auto__,x291852_291872))
)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_291861;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_291860;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_291859;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_291858;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_291857;
}});})(x291852_291872))
;


ui.core.Proposal.prototype.constructor = ui.core.Proposal;

ui.core.Proposal.prototype.constructor.displayName = "ui.core/Proposal";

ui.core.Proposal.prototype.om$isComponent = true;

var x291870_291876 = ui.core.Proposal;
/** @nocollapse */
x291870_291876.om$next$IQuery$ = true;

/** @nocollapse */
x291870_291876.om$next$IQuery$query$arity$1 = ((function (x291870_291876){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x291870_291876))
;


var x291871_291877 = ui.core.Proposal.prototype;

x291871_291877.om$next$IQuery$ = true;


x291871_291877.om$next$IQuery$query$arity$1 = ((function (x291871_291877){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x291871_291877))
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

var x291882_291896 = ui.core.Proposals.prototype;
x291882_291896.componentWillUpdate = ((function (x291882_291896){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___291897 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___291898 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___291897,next_ident__40467__auto___291898)){
var idxr__40468__auto___291899 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___291899 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___291899),((function (idxr__40468__auto___291899,ident__40466__auto___291897,next_ident__40467__auto___291898,this__40462__auto__,x291882_291896){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___291897], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___291898], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___291899,ident__40466__auto___291897,next_ident__40467__auto___291898,this__40462__auto__,x291882_291896))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x291882_291896))
;

x291882_291896.shouldComponentUpdate = ((function (x291882_291896){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__291884 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__291884);
} else {
return G__291884;
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
});})(x291882_291896))
;

x291882_291896.componentWillUnmount = ((function (x291882_291896){
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
});})(x291882_291896))
;

x291882_291896.componentDidUpdate = ((function (x291882_291896){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x291882_291896))
;

x291882_291896.isMounted = ((function (x291882_291896){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x291882_291896))
;

x291882_291896.componentWillMount = ((function (x291882_291896){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x291882_291896))
;

x291882_291896.render = ((function (x291882_291896){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_291885 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_291886 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_291887 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_291888 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_291889 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{return om_tools.dom.element.call(null,React.DOM.div,(function (){var iter__35244__auto__ = ((function (_STAR_reconciler_STAR_291885,_STAR_depth_STAR_291886,_STAR_shared_STAR_291887,_STAR_instrument_STAR_291888,_STAR_parent_STAR_291889,this$,this__40461__auto__,x291882_291896){
return (function ui$core$iter__291890(s__291891){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_291885,_STAR_depth_STAR_291886,_STAR_shared_STAR_291887,_STAR_instrument_STAR_291888,_STAR_parent_STAR_291889,this$,this__40461__auto__,x291882_291896){
return (function (){
var s__291891__$1 = s__291891;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__291891__$1);
if(temp__6728__auto__){
var s__291891__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__291891__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__291891__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__291893 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__291892 = (0);
while(true){
if((i__291892 < size__35243__auto__)){
var proposal = cljs.core._nth.call(null,c__35242__auto__,i__291892);
cljs.core.chunk_append.call(null,b__291893,ui.core.proposal_component.call(null,proposal));

var G__291900 = (i__291892 + (1));
i__291892 = G__291900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__291893),ui$core$iter__291890.call(null,cljs.core.chunk_rest.call(null,s__291891__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__291893),null);
}
} else {
var proposal = cljs.core.first.call(null,s__291891__$2);
return cljs.core.cons.call(null,ui.core.proposal_component.call(null,proposal),ui$core$iter__291890.call(null,cljs.core.rest.call(null,s__291891__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_291885,_STAR_depth_STAR_291886,_STAR_shared_STAR_291887,_STAR_instrument_STAR_291888,_STAR_parent_STAR_291889,this$,this__40461__auto__,x291882_291896))
,null,null));
});})(_STAR_reconciler_STAR_291885,_STAR_depth_STAR_291886,_STAR_shared_STAR_291887,_STAR_instrument_STAR_291888,_STAR_parent_STAR_291889,this$,this__40461__auto__,x291882_291896))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})(),cljs.core.PersistentVector.EMPTY);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_291889;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_291888;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_291887;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_291886;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_291885;
}});})(x291882_291896))
;


ui.core.Proposals.prototype.constructor = ui.core.Proposals;

ui.core.Proposals.prototype.constructor.displayName = "ui.core/Proposals";

ui.core.Proposals.prototype.om$isComponent = true;

var x291894_291901 = ui.core.Proposals;
/** @nocollapse */
x291894_291901.om$next$IQuery$ = true;

/** @nocollapse */
x291894_291901.om$next$IQuery$query$arity$1 = ((function (x291894_291901){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x291894_291901))
;


var x291895_291902 = ui.core.Proposals.prototype;

x291895_291902.om$next$IQuery$ = true;


x291895_291902.om$next$IQuery$query$arity$1 = ((function (x291895_291902){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x291895_291902))
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

var x291907_291919 = ui.core.Stake.prototype;
x291907_291919.componentWillUpdate = ((function (x291907_291919){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___291920 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___291921 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___291920,next_ident__40467__auto___291921)){
var idxr__40468__auto___291922 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___291922 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___291922),((function (idxr__40468__auto___291922,ident__40466__auto___291920,next_ident__40467__auto___291921,this__40462__auto__,x291907_291919){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___291920], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___291921], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___291922,ident__40466__auto___291920,next_ident__40467__auto___291921,this__40462__auto__,x291907_291919))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x291907_291919))
;

x291907_291919.shouldComponentUpdate = ((function (x291907_291919){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__291909 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__291909);
} else {
return G__291909;
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
});})(x291907_291919))
;

x291907_291919.componentWillUnmount = ((function (x291907_291919){
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
});})(x291907_291919))
;

x291907_291919.componentDidUpdate = ((function (x291907_291919){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x291907_291919))
;

x291907_291919.isMounted = ((function (x291907_291919){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x291907_291919))
;

x291907_291919.componentWillMount = ((function (x291907_291919){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x291907_291919))
;

x291907_291919.render = ((function (x291907_291919){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_291910 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_291911 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_291912 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_291913 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_291914 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__291915 = om.next.props.call(null,this$);
var map__291915__$1 = ((((!((map__291915 == null)))?((((map__291915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291915):map__291915);
var id = cljs.core.get.call(null,map__291915__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var value = cljs.core.get.call(null,map__291915__$1,new cljs.core.Keyword("stake","value","stake/value",466231031));
return om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,id,cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,value,cljs.core.PersistentVector.EMPTY)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_291914;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_291913;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_291912;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_291911;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_291910;
}});})(x291907_291919))
;


ui.core.Stake.prototype.constructor = ui.core.Stake;

ui.core.Stake.prototype.constructor.displayName = "ui.core/Stake";

ui.core.Stake.prototype.om$isComponent = true;

var x291917_291923 = ui.core.Stake;
/** @nocollapse */
x291917_291923.om$next$IQuery$ = true;

/** @nocollapse */
x291917_291923.om$next$IQuery$query$arity$1 = ((function (x291917_291923){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x291917_291923))
;


var x291918_291924 = ui.core.Stake.prototype;

x291918_291924.om$next$IQuery$ = true;


x291918_291924.om$next$IQuery$query$arity$1 = ((function (x291918_291924){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x291918_291924))
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

var x291929_291949 = ui.core.Stakes.prototype;
x291929_291949.componentWillUpdate = ((function (x291929_291949){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___291950 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___291951 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___291950,next_ident__40467__auto___291951)){
var idxr__40468__auto___291952 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___291952 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___291952),((function (idxr__40468__auto___291952,ident__40466__auto___291950,next_ident__40467__auto___291951,this__40462__auto__,x291929_291949){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___291950], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___291951], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___291952,ident__40466__auto___291950,next_ident__40467__auto___291951,this__40462__auto__,x291929_291949))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x291929_291949))
;

x291929_291949.shouldComponentUpdate = ((function (x291929_291949){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__291931 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__291931);
} else {
return G__291931;
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
});})(x291929_291949))
;

x291929_291949.componentWillUnmount = ((function (x291929_291949){
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
});})(x291929_291949))
;

x291929_291949.componentDidUpdate = ((function (x291929_291949){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x291929_291949))
;

x291929_291949.isMounted = ((function (x291929_291949){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x291929_291949))
;

x291929_291949.componentWillMount = ((function (x291929_291949){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x291929_291949))
;

x291929_291949.initLocalState = ((function (x291929_291949){
return (function (){
var this$ = this;
var ret__40440__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var obj291933 = {"omcljs$state":ret__40440__auto__};
return obj291933;
});})(x291929_291949))
;

x291929_291949.render = ((function (x291929_291949){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_291934 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_291935 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_291936 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_291937 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_291938 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__291939 = om.next.props.call(null,this$);
var map__291939__$1 = ((((!((map__291939 == null)))?((((map__291939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291939):map__291939);
var stakes = cljs.core.get.call(null,map__291939__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__291939__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__291940 = user;
var map__291940__$1 = ((((!((map__291940 == null)))?((((map__291940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291940):map__291940);
var stake = cljs.core.get.call(null,map__291940__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var address = cljs.core.get.call(null,map__291940__$1,new cljs.core.Keyword("user","address","user/address",573600859));
var balance = cljs.core.get.call(null,map__291940__$1,new cljs.core.Keyword("user","balance","user/balance",422509480));
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.8})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Current Stake"),((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?ui.core.mining_spinner.call(null):cljs.core.apply.call(null,React.DOM.h3,({"style": ({"color": "#2b95d6"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[stake," ETH"],null))))),cljs.core.apply.call(null,React.DOM.span,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["(associated with account ",ui.core.format_address.call(null,address),")"],null)))),(((stake === (0)))?React.DOM.div(({"className": "pt-callout pt-icon-info-sign", "style": ({"marginTop": "0.5rem"})}),"You do not currently have any voting stake for EthereanMind. To be able to vote on proposals and top 10 items, you need to deposit some fully-refundable coins into the EthereanMind staking contract."):null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group", "style": ({"marginTop": "0.5rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__291939,map__291939__$1,stakes,user,map__291940,map__291940__$1,stake,address,balance,_STAR_reconciler_STAR_291934,_STAR_depth_STAR_291935,_STAR_shared_STAR_291936,_STAR_instrument_STAR_291937,_STAR_parent_STAR_291938,this$,this__40461__auto__,x291929_291949){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"value","value",305978217),""], null));
});})(map__291939,map__291939__$1,stakes,user,map__291940,map__291940__$1,stake,address,balance,_STAR_reconciler_STAR_291934,_STAR_depth_STAR_291935,_STAR_shared_STAR_291936,_STAR_instrument_STAR_291937,_STAR_parent_STAR_291938,this$,this__40461__auto__,x291929_291949))
], null),"Deposit Stake"),blueprint_cljs.core.button.call(null,"Withdraw Stake")],null))))],null)))),(function (){var map__291943 = om.next.get_state.call(null,this$);
var map__291943__$1 = ((((!((map__291943 == null)))?((((map__291943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291943):map__291943);
var dialog = cljs.core.get.call(null,map__291943__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__291944 = dialog;
var map__291944__$1 = ((((!((map__291944 == null)))?((((map__291944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291944):map__291944);
var type = cljs.core.get.call(null,map__291944__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__291944__$1,new cljs.core.Keyword(null,"value","value",305978217));
var value_status = ((cljs.core._EQ_.call(null,value,""))?new cljs.core.Keyword(null,"missing","missing",362507769):(((value <= balance))?new cljs.core.Keyword(null,"good","good",511701169):new cljs.core.Keyword(null,"bad","bad",1127186645)
));
var close_dialog = ((function (value_status,map__291943,map__291943__$1,dialog,map__291944,map__291944__$1,type,value,map__291939,map__291939__$1,stakes,user,map__291940,map__291940__$1,stake,address,balance,_STAR_reconciler_STAR_291934,_STAR_depth_STAR_291935,_STAR_shared_STAR_291936,_STAR_instrument_STAR_291937,_STAR_parent_STAR_291938,this$,this__40461__auto__,x291929_291949){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,map__291943,map__291943__$1,dialog,map__291944,map__291944__$1,type,value,map__291939,map__291939__$1,stakes,user,map__291940,map__291940__$1,stake,address,balance,_STAR_reconciler_STAR_291934,_STAR_depth_STAR_291935,_STAR_shared_STAR_291936,_STAR_instrument_STAR_291937,_STAR_parent_STAR_291938,this$,this__40461__auto__,x291929_291949))
;
return blueprint_cljs.core.dialog.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-close","on-close",-761178394),close_dialog,new cljs.core.Keyword(null,"title","title",636505583),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit Stake":"Withdraw Stake")], null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-body"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.p(null,"In order to vote on ethereanmind you need to place a refundable deposit of ether. You will be able to start voting immediately after depositing ether, but you need to wait a month before you can withdraw your deposit again."),om_tools.dom.element.call(null,React.DOM.p,React.DOM.b(null,"The rules of the smart contract assure that no one else can withdraw your money and that you will receive back 100% of your deposit."),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Balance available: ",balance," Ether"],null)))),blueprint_cljs.core.input_group.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Deposit Amount (Ether)",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"right-element","right-element",-375920256),((cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"missing","missing",362507769)))?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)))?"pt-icon-tick pt-intent-success":"pt-icon-cross pt-intent-danger")], null)):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value_status,close_dialog,map__291943,map__291943__$1,dialog,map__291944,map__291944__$1,type,value,map__291939,map__291939__$1,stakes,user,map__291940,map__291940__$1,stake,address,balance,_STAR_reconciler_STAR_291934,_STAR_depth_STAR_291935,_STAR_shared_STAR_291936,_STAR_instrument_STAR_291937,_STAR_parent_STAR_291938,this$,this__40461__auto__,x291929_291949){
return (function (e){
var value_new = e.target.value;
if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]*\.?[0-9]*/,value_new))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value_new);
} else {
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value);
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noise","noise",-994696820)], null),cljs.core.rand_int.call(null,(1000000)));
});})(value_status,close_dialog,map__291943,map__291943__$1,dialog,map__291944,map__291944__$1,type,value,map__291939,map__291939__$1,stakes,user,map__291940,map__291940__$1,stake,address,balance,_STAR_reconciler_STAR_291934,_STAR_depth_STAR_291935,_STAR_shared_STAR_291936,_STAR_instrument_STAR_291937,_STAR_parent_STAR_291938,this$,this__40461__auto__,x291929_291949))
], null))],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer-actions"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)),new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_status,close_dialog,map__291943,map__291943__$1,dialog,map__291944,map__291944__$1,type,value,map__291939,map__291939__$1,stakes,user,map__291940,map__291940__$1,stake,address,balance,_STAR_reconciler_STAR_291934,_STAR_depth_STAR_291935,_STAR_shared_STAR_291936,_STAR_instrument_STAR_291937,_STAR_parent_STAR_291938,this$,this__40461__auto__,x291929_291949){
return (function (e){
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null)),(function (){var x__35316__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__35316__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339)))))));

return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,close_dialog,map__291943,map__291943__$1,dialog,map__291944,map__291944__$1,type,value,map__291939,map__291939__$1,stakes,user,map__291940,map__291940__$1,stake,address,balance,_STAR_reconciler_STAR_291934,_STAR_depth_STAR_291935,_STAR_shared_STAR_291936,_STAR_instrument_STAR_291937,_STAR_parent_STAR_291938,this$,this__40461__auto__,x291929_291949))
], null),"Deposit"),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_dialog], null),"Cancel")],null))))],null)))));
})(),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"marginTop": "1rem", "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Staking Statistics"),React.DOM.div(null,"If you're curious about who else is using this dapp, and are using an ethereum data source that can handle large queres, click this button:"),cljs.core.apply.call(null,React.DOM.p,({"style": ({"margin": "1em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.i(null,"(Coming Soon...)")],null))))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_291938;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_291937;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_291936;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_291935;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_291934;
}});})(x291929_291949))
;


ui.core.Stakes.prototype.constructor = ui.core.Stakes;

ui.core.Stakes.prototype.constructor.displayName = "ui.core/Stakes";

ui.core.Stakes.prototype.om$isComponent = true;

var x291947_291953 = ui.core.Stakes;
/** @nocollapse */
x291947_291953.om$next$IQuery$ = true;

/** @nocollapse */
x291947_291953.om$next$IQuery$query$arity$1 = ((function (x291947_291953){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x291947_291953))
;


var x291948_291954 = ui.core.Stakes.prototype;

x291948_291954.om$next$IQuery$ = true;


x291948_291954.om$next$IQuery$query$arity$1 = ((function (x291948_291954){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x291948_291954))
;


ui.core.Stakes.cljs$lang$type = true;

ui.core.Stakes.cljs$lang$ctorStr = "ui.core/Stakes";

ui.core.Stakes.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Stakes");
});
ui.core.stakes_component = om.next.factory.call(null,ui.core.Stakes);
ui.core.canvas_resolution = (800);
ui.core.brain_prerender = (function ui$core$brain_prerender(sections){
return new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__291969,item){
var map__291970 = p__291969;
var map__291970__$1 = ((((!((map__291970 == null)))?((((map__291970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291970):map__291970);
var acc = map__291970__$1;
var vertices = cljs.core.get.call(null,map__291970__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var vertex_colors = cljs.core.get.call(null,map__291970__$1,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377));
var index = cljs.core.get.call(null,map__291970__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.call(null,map__291970__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var map__291972 = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"length","length",588987862),(function (){var iter__35244__auto__ = ((function (map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__291973(s__291974){
return (new cljs.core.LazySeq(null,((function (map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__291974__$1 = s__291974;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__291974__$1);
if(temp__6728__auto__){
var s__291974__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__291974__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__291974__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__291976 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__291975 = (0);
while(true){
if((i__291975 < size__35243__auto__)){
var coord = cljs.core._nth.call(null,c__35242__auto__,i__291975);
cljs.core.chunk_append.call(null,b__291976,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (i__291975,region_size,coord,c__35242__auto__,size__35243__auto__,b__291976,s__291974__$2,temp__6728__auto__,map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__291955_SHARP_){
return cljs.core.nth.call(null,p1__291955_SHARP_,coord);
});})(i__291975,region_size,coord,c__35242__auto__,size__35243__auto__,b__291976,s__291974__$2,temp__6728__auto__,map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})());

var G__291982 = (i__291975 + (1));
i__291975 = G__291982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__291976),ui$core$brain_prerender_$_iter__291973.call(null,cljs.core.chunk_rest.call(null,s__291974__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__291976),null);
}
} else {
var coord = cljs.core.first.call(null,s__291974__$2);
return cljs.core.cons.call(null,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (region_size,coord,s__291974__$2,temp__6728__auto__,map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__291955_SHARP_){
return cljs.core.nth.call(null,p1__291955_SHARP_,coord);
});})(region_size,coord,s__291974__$2,temp__6728__auto__,map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})(),ui$core$brain_prerender_$_iter__291973.call(null,cljs.core.rest.call(null,s__291974__$2)));
}
} else {
return null;
}
break;
}
});})(map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})()));
var map__291972__$1 = ((((!((map__291972 == null)))?((((map__291972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291972):map__291972);
var cur_vertices = cljs.core.get.call(null,map__291972__$1,new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716));
var rest_vertices = cljs.core.get.call(null,map__291972__$1,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),rest_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.into.call(null,vertex_colors,(function (){var iter__35244__auto__ = ((function (map__291972,map__291972__$1,cur_vertices,rest_vertices,map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__291978(s__291979){
return (new cljs.core.LazySeq(null,((function (map__291972,map__291972__$1,cur_vertices,rest_vertices,map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__291979__$1 = s__291979;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__291979__$1);
if(temp__6728__auto__){
var s__291979__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__291979__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__291979__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__291981 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__291980 = (0);
while(true){
if((i__291980 < size__35243__auto__)){
var vertex = cljs.core._nth.call(null,c__35242__auto__,i__291980);
cljs.core.chunk_append.call(null,b__291981,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null));

var G__291983 = (i__291980 + (1));
i__291980 = G__291983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__291981),ui$core$brain_prerender_$_iter__291978.call(null,cljs.core.chunk_rest.call(null,s__291979__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__291981),null);
}
} else {
var vertex = cljs.core.first.call(null,s__291979__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null),ui$core$brain_prerender_$_iter__291978.call(null,cljs.core.rest.call(null,s__291979__$2)));
}
} else {
return null;
}
break;
}
});})(map__291972,map__291972__$1,cur_vertices,rest_vertices,map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__291972,map__291972__$1,cur_vertices,rest_vertices,map__291970,map__291970__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35244__auto__.call(null,cur_vertices);
})()),new cljs.core.Keyword(null,"index","index",-1531685915),(index + (1)),new cljs.core.Keyword(null,"total","total",1916810418),(total - new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))], null);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),ui.core.brain_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"size","size",1098693007),sections))], null),sections));
});
ui.core.render_graph = (function ui$core$render_graph(brain_faces,vertexes,vertex_colors){
var iter__35244__auto__ = (function ui$core$render_graph_$_iter__292016(s__292017){
return (new cljs.core.LazySeq(null,(function (){
var s__292017__$1 = s__292017;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__292017__$1);
if(temp__6728__auto__){
var s__292017__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292017__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__292017__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__292019 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__292018 = (0);
while(true){
if((i__292018 < size__35243__auto__)){
var vec__292034 = cljs.core._nth.call(null,c__35242__auto__,i__292018);
var region = cljs.core.nth.call(null,vec__292034,(0),null);
var faces = cljs.core.nth.call(null,vec__292034,(1),null);
cljs.core.chunk_append.call(null,b__292019,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (i__292018,vec__292034,region,faces,c__35242__auto__,size__35243__auto__,b__292019,s__292017__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__292016_$_iter__292037(s__292038){
return (new cljs.core.LazySeq(null,((function (i__292018,vec__292034,region,faces,c__35242__auto__,size__35243__auto__,b__292019,s__292017__$2,temp__6728__auto__){
return (function (){
var s__292038__$1 = s__292038;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__292038__$1);
if(temp__6728__auto____$1){
var s__292038__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292038__$2)){
var c__35242__auto____$1 = cljs.core.chunk_first.call(null,s__292038__$2);
var size__35243__auto____$1 = cljs.core.count.call(null,c__35242__auto____$1);
var b__292040 = cljs.core.chunk_buffer.call(null,size__35243__auto____$1);
if((function (){var i__292039 = (0);
while(true){
if((i__292039 < size__35243__auto____$1)){
var n = cljs.core._nth.call(null,c__35242__auto____$1,i__292039);
cljs.core.chunk_append.call(null,b__292040,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__292039,i__292018,n,c__35242__auto____$1,size__35243__auto____$1,b__292040,s__292038__$2,temp__6728__auto____$1,vec__292034,region,faces,c__35242__auto__,size__35243__auto__,b__292019,s__292017__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__292039,i__292018,n,c__35242__auto____$1,size__35243__auto____$1,b__292040,s__292038__$2,temp__6728__auto____$1,vec__292034,region,faces,c__35242__auto__,size__35243__auto__,b__292019,s__292017__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__292048 = (i__292039 + (1));
i__292039 = G__292048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292040),ui$core$render_graph_$_iter__292016_$_iter__292037.call(null,cljs.core.chunk_rest.call(null,s__292038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292040),null);
}
} else {
var n = cljs.core.first.call(null,s__292038__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__292018,n,s__292038__$2,temp__6728__auto____$1,vec__292034,region,faces,c__35242__auto__,size__35243__auto__,b__292019,s__292017__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__292018,n,s__292038__$2,temp__6728__auto____$1,vec__292034,region,faces,c__35242__auto__,size__35243__auto__,b__292019,s__292017__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__292016_$_iter__292037.call(null,cljs.core.rest.call(null,s__292038__$2)));
}
} else {
return null;
}
break;
}
});})(i__292018,vec__292034,region,faces,c__35242__auto__,size__35243__auto__,b__292019,s__292017__$2,temp__6728__auto__))
,null,null));
});})(i__292018,vec__292034,region,faces,c__35242__auto__,size__35243__auto__,b__292019,s__292017__$2,temp__6728__auto__))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (i__292018,dist,max_dist,mult,centroid,vec__292034,region,faces,c__35242__auto__,size__35243__auto__,b__292019,s__292017__$2,temp__6728__auto__){
return (function (y){
var x__34723__auto__ = (function (){var x__34730__auto__ = 0.11;
var y__34731__auto__ = (y * 0.9);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})();
var y__34724__auto__ = -0.05;
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
});})(i__292018,dist,max_dist,mult,centroid,vec__292034,region,faces,c__35242__auto__,size__35243__auto__,b__292019,s__292017__$2,temp__6728__auto__))
);
})()], null);
})());

var G__292049 = (i__292018 + (1));
i__292018 = G__292049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292019),ui$core$render_graph_$_iter__292016.call(null,cljs.core.chunk_rest.call(null,s__292017__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292019),null);
}
} else {
var vec__292041 = cljs.core.first.call(null,s__292017__$2);
var region = cljs.core.nth.call(null,vec__292041,(0),null);
var faces = cljs.core.nth.call(null,vec__292041,(1),null);
return cljs.core.cons.call(null,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (vec__292041,region,faces,s__292017__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__292016_$_iter__292044(s__292045){
return (new cljs.core.LazySeq(null,((function (vec__292041,region,faces,s__292017__$2,temp__6728__auto__){
return (function (){
var s__292045__$1 = s__292045;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__292045__$1);
if(temp__6728__auto____$1){
var s__292045__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292045__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__292045__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__292047 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__292046 = (0);
while(true){
if((i__292046 < size__35243__auto__)){
var n = cljs.core._nth.call(null,c__35242__auto__,i__292046);
cljs.core.chunk_append.call(null,b__292047,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__292046,n,c__35242__auto__,size__35243__auto__,b__292047,s__292045__$2,temp__6728__auto____$1,vec__292041,region,faces,s__292017__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__292046,n,c__35242__auto__,size__35243__auto__,b__292047,s__292045__$2,temp__6728__auto____$1,vec__292041,region,faces,s__292017__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__292050 = (i__292046 + (1));
i__292046 = G__292050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292047),ui$core$render_graph_$_iter__292016_$_iter__292044.call(null,cljs.core.chunk_rest.call(null,s__292045__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292047),null);
}
} else {
var n = cljs.core.first.call(null,s__292045__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (n,s__292045__$2,temp__6728__auto____$1,vec__292041,region,faces,s__292017__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(n,s__292045__$2,temp__6728__auto____$1,vec__292041,region,faces,s__292017__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__292016_$_iter__292044.call(null,cljs.core.rest.call(null,s__292045__$2)));
}
} else {
return null;
}
break;
}
});})(vec__292041,region,faces,s__292017__$2,temp__6728__auto__))
,null,null));
});})(vec__292041,region,faces,s__292017__$2,temp__6728__auto__))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (dist,max_dist,mult,centroid,vec__292041,region,faces,s__292017__$2,temp__6728__auto__){
return (function (y){
var x__34723__auto__ = (function (){var x__34730__auto__ = 0.11;
var y__34731__auto__ = (y * 0.9);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})();
var y__34724__auto__ = -0.05;
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
});})(dist,max_dist,mult,centroid,vec__292041,region,faces,s__292017__$2,temp__6728__auto__))
);
})()], null);
})(),ui$core$render_graph_$_iter__292016.call(null,cljs.core.rest.call(null,s__292017__$2)));
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
ui.core.point__GT_screen = (function ui$core$point__GT_screen(canvas_resolution,rotation,p__292051){
var vec__292055 = p__292051;
var xx = cljs.core.nth.call(null,vec__292055,(0),null);
var yy = cljs.core.nth.call(null,vec__292055,(1),null);
var zz = cljs.core.nth.call(null,vec__292055,(2),null);
var vertex = vec__292055;
var sin = Math.sin(rotation);
var cos = Math.cos(rotation);
var x = ((sin * xx) - (cos * yy));
var y = (- zz);
var z = ((8) * ((cos * xx) + (sin * yy)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((canvas_resolution / (2)) + (((4) * x) * canvas_resolution)),((canvas_resolution / 2.2) + (((4) * y) * canvas_resolution)),z], null);
});
ui.core.brain_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0),new cljs.core.Keyword(null,"sections","sections",-886710106),null,new cljs.core.Keyword(null,"colored","colored",-1421800355),(1)], null));
ui.core.render_brain = (function ui$core$render_brain(ctx,rotation,render_graph){
ctx.clearRect((0),(0),ui.core.canvas_resolution,ui.core.canvas_resolution);

var vertices = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,ui.core.point__GT_screen,ui.core.canvas_resolution,rotation),ui.core.brain_vertices));
var line = ((function (vertices){
return (function (a,b){
var G__292149 = ctx;
G__292149.beginPath();

G__292149.moveTo(vertices.call(null,a).call(null,(0)),vertices.call(null,a).call(null,(1)));

G__292149.lineTo(vertices.call(null,b).call(null,(0)),vertices.call(null,b).call(null,(1)));

G__292149.stroke();

return G__292149;
});})(vertices))
;
var rgb = ((function (vertices,line){
return (function (color,brightness,opaque){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (vertices,line){
return (function ui$core$render_brain_$_iter__292150(s__292151){
return (new cljs.core.LazySeq(null,((function (vertices,line){
return (function (){
var s__292151__$1 = s__292151;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__292151__$1);
if(temp__6728__auto__){
var s__292151__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292151__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__292151__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__292153 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__292152 = (0);
while(true){
if((i__292152 < size__35243__auto__)){
var c = cljs.core._nth.call(null,c__35242__auto__,i__292152);
cljs.core.chunk_append.call(null,b__292153,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34730__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34731__auto__ = (255);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})()) + (((1) - colored) * (255))) | (0));
})());

var G__292240 = (i__292152 + (1));
i__292152 = G__292240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292153),ui$core$render_brain_$_iter__292150.call(null,cljs.core.chunk_rest.call(null,s__292151__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292153),null);
}
} else {
var c = cljs.core.first.call(null,s__292151__$2);
return cljs.core.cons.call(null,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34730__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34731__auto__ = (255);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})()) + (((1) - colored) * (255))) | (0));
})(),ui$core$render_brain_$_iter__292150.call(null,cljs.core.rest.call(null,s__292151__$2)));
}
} else {
return null;
}
break;
}
});})(vertices,line))
,null,null));
});})(vertices,line))
;
return iter__35244__auto__.call(null,color);
})()),(cljs.core.truth_(opaque)?((0) + ((1) * new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)))):(0.05 + (0.45 * new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)))))))))].join('');
});})(vertices,line))
;
var set_color = ((function (vertices,line,rgb){
return (function (color,brightness){
return ctx.strokeStyle = rgb.call(null,color,brightness,false);
});})(vertices,line,rgb))
;
var render_text = ((function (vertices,line,rgb,set_color){
return (function (label,text,color,z_begin,z_end){
if((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)) > (0))){
ctx.lineWidth = (4);

var vec__292154_292241 = ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label);
var x_292242 = cljs.core.nth.call(null,vec__292154_292241,(0),null);
var y_292243 = cljs.core.nth.call(null,vec__292154_292241,(1),null);
var z_292244 = cljs.core.nth.call(null,vec__292154_292241,(2),null);
if(((z_begin < z_292244)) && ((z_292244 < z_end))){
ctx.strokeStyle = "#111A22";

ctx.fillStyle = rgb.call(null,color,((z_292244 * (2)) + (1)),true);

cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (vec__292154_292241,x_292242,y_292243,z_292244,vertices,line,rgb,set_color){
return (function (index,s){
var G__292157 = ctx;
G__292157.strokeText(s,x_292242,(y_292243 + (index * (15))));

G__292157.fillText(s,x_292242,(y_292243 + (index * (15))));

return G__292157;
});})(vec__292154_292241,x_292242,y_292243,z_292244,vertices,line,rgb,set_color))
,clojure.string.split.call(null,text,/ /)));
} else {
}

return ctx.lineWidth = (1);
} else {
return null;
}
});})(vertices,line,rgb,set_color))
;
var sections = new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
ctx.font = "15px sans-serif";

ctx.textAlign = "center";

if(cljs.core.seq.call(null,sections)){
var seq__292158_292245 = cljs.core.seq.call(null,render_graph);
var chunk__292159_292246 = null;
var count__292160_292247 = (0);
var i__292161_292248 = (0);
while(true){
if((i__292161_292248 < count__292160_292247)){
var map__292162_292249 = cljs.core._nth.call(null,chunk__292159_292246,i__292161_292248);
var map__292162_292250__$1 = ((((!((map__292162_292249 == null)))?((((map__292162_292249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292162_292249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292162_292249):map__292162_292249);
var region_292251 = cljs.core.get.call(null,map__292162_292250__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_292252 = cljs.core.get.call(null,map__292162_292250__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_292253 = cljs.core.get.call(null,map__292162_292250__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_292254 = cljs.core.get.call(null,map__292162_292250__$1,new cljs.core.Keyword(null,"label","label",1718410804));
render_text.call(null,label_292254,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_292251)),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_292251))),(-1000),(0));

var G__292255 = seq__292158_292245;
var G__292256 = chunk__292159_292246;
var G__292257 = count__292160_292247;
var G__292258 = (i__292161_292248 + (1));
seq__292158_292245 = G__292255;
chunk__292159_292246 = G__292256;
count__292160_292247 = G__292257;
i__292161_292248 = G__292258;
continue;
} else {
var temp__6728__auto___292259 = cljs.core.seq.call(null,seq__292158_292245);
if(temp__6728__auto___292259){
var seq__292158_292260__$1 = temp__6728__auto___292259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292158_292260__$1)){
var c__35293__auto___292261 = cljs.core.chunk_first.call(null,seq__292158_292260__$1);
var G__292262 = cljs.core.chunk_rest.call(null,seq__292158_292260__$1);
var G__292263 = c__35293__auto___292261;
var G__292264 = cljs.core.count.call(null,c__35293__auto___292261);
var G__292265 = (0);
seq__292158_292245 = G__292262;
chunk__292159_292246 = G__292263;
count__292160_292247 = G__292264;
i__292161_292248 = G__292265;
continue;
} else {
var map__292164_292266 = cljs.core.first.call(null,seq__292158_292260__$1);
var map__292164_292267__$1 = ((((!((map__292164_292266 == null)))?((((map__292164_292266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292164_292266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292164_292266):map__292164_292266);
var region_292268 = cljs.core.get.call(null,map__292164_292267__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_292269 = cljs.core.get.call(null,map__292164_292267__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_292270 = cljs.core.get.call(null,map__292164_292267__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_292271 = cljs.core.get.call(null,map__292164_292267__$1,new cljs.core.Keyword(null,"label","label",1718410804));
render_text.call(null,label_292271,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_292268)),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_292268))),(-1000),(0));

var G__292272 = cljs.core.next.call(null,seq__292158_292260__$1);
var G__292273 = null;
var G__292274 = (0);
var G__292275 = (0);
seq__292158_292245 = G__292272;
chunk__292159_292246 = G__292273;
count__292160_292247 = G__292274;
i__292161_292248 = G__292275;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__292166_292276 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),-0.3,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3,0.3,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,(1000),(2)], null)], null));
var chunk__292167_292277 = null;
var count__292168_292278 = (0);
var i__292169_292279 = (0);
while(true){
if((i__292169_292279 < count__292168_292278)){
var vec__292170_292280 = cljs.core._nth.call(null,chunk__292167_292277,i__292169_292279);
var begin_292281 = cljs.core.nth.call(null,vec__292170_292280,(0),null);
var end_292282 = cljs.core.nth.call(null,vec__292170_292280,(1),null);
var brightness_292283 = cljs.core.nth.call(null,vec__292170_292280,(2),null);
var seq__292173_292284 = cljs.core.seq.call(null,render_graph);
var chunk__292174_292285 = null;
var count__292175_292286 = (0);
var i__292176_292287 = (0);
while(true){
if((i__292176_292287 < count__292175_292286)){
var map__292177_292288 = cljs.core._nth.call(null,chunk__292174_292285,i__292176_292287);
var map__292177_292289__$1 = ((((!((map__292177_292288 == null)))?((((map__292177_292288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292177_292288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292177_292288):map__292177_292288);
var region_292290 = cljs.core.get.call(null,map__292177_292289__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_292291 = cljs.core.get.call(null,map__292177_292289__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_292292 = cljs.core.get.call(null,map__292177_292289__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_292293 = cljs.core.get.call(null,map__292177_292289__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_292294 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_292290))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_292294,brightness_292283);

var seq__292179_292295 = cljs.core.seq.call(null,faces_292291);
var chunk__292180_292296 = null;
var count__292181_292297 = (0);
var i__292182_292298 = (0);
while(true){
if((i__292182_292298 < count__292181_292297)){
var vec__292183_292299 = cljs.core._nth.call(null,chunk__292180_292296,i__292182_292298);
var a_292300 = cljs.core.nth.call(null,vec__292183_292299,(0),null);
var b_292301 = cljs.core.nth.call(null,vec__292183_292299,(1),null);
var c_292302 = cljs.core.nth.call(null,vec__292183_292299,(2),null);
var face_292303 = vec__292183_292299;
if(((begin_292281 < vertices.call(null,a_292300).call(null,(2)))) && ((vertices.call(null,a_292300).call(null,(2)) < end_292282))){
line.call(null,a_292300,b_292301);
} else {
}

var G__292304 = seq__292179_292295;
var G__292305 = chunk__292180_292296;
var G__292306 = count__292181_292297;
var G__292307 = (i__292182_292298 + (1));
seq__292179_292295 = G__292304;
chunk__292180_292296 = G__292305;
count__292181_292297 = G__292306;
i__292182_292298 = G__292307;
continue;
} else {
var temp__6728__auto___292308 = cljs.core.seq.call(null,seq__292179_292295);
if(temp__6728__auto___292308){
var seq__292179_292309__$1 = temp__6728__auto___292308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292179_292309__$1)){
var c__35293__auto___292310 = cljs.core.chunk_first.call(null,seq__292179_292309__$1);
var G__292311 = cljs.core.chunk_rest.call(null,seq__292179_292309__$1);
var G__292312 = c__35293__auto___292310;
var G__292313 = cljs.core.count.call(null,c__35293__auto___292310);
var G__292314 = (0);
seq__292179_292295 = G__292311;
chunk__292180_292296 = G__292312;
count__292181_292297 = G__292313;
i__292182_292298 = G__292314;
continue;
} else {
var vec__292186_292315 = cljs.core.first.call(null,seq__292179_292309__$1);
var a_292316 = cljs.core.nth.call(null,vec__292186_292315,(0),null);
var b_292317 = cljs.core.nth.call(null,vec__292186_292315,(1),null);
var c_292318 = cljs.core.nth.call(null,vec__292186_292315,(2),null);
var face_292319 = vec__292186_292315;
if(((begin_292281 < vertices.call(null,a_292316).call(null,(2)))) && ((vertices.call(null,a_292316).call(null,(2)) < end_292282))){
line.call(null,a_292316,b_292317);
} else {
}

var G__292320 = cljs.core.next.call(null,seq__292179_292309__$1);
var G__292321 = null;
var G__292322 = (0);
var G__292323 = (0);
seq__292179_292295 = G__292320;
chunk__292180_292296 = G__292321;
count__292181_292297 = G__292322;
i__292182_292298 = G__292323;
continue;
}
} else {
}
}
break;
}

var G__292324 = seq__292173_292284;
var G__292325 = chunk__292174_292285;
var G__292326 = count__292175_292286;
var G__292327 = (i__292176_292287 + (1));
seq__292173_292284 = G__292324;
chunk__292174_292285 = G__292325;
count__292175_292286 = G__292326;
i__292176_292287 = G__292327;
continue;
} else {
var temp__6728__auto___292328 = cljs.core.seq.call(null,seq__292173_292284);
if(temp__6728__auto___292328){
var seq__292173_292329__$1 = temp__6728__auto___292328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292173_292329__$1)){
var c__35293__auto___292330 = cljs.core.chunk_first.call(null,seq__292173_292329__$1);
var G__292331 = cljs.core.chunk_rest.call(null,seq__292173_292329__$1);
var G__292332 = c__35293__auto___292330;
var G__292333 = cljs.core.count.call(null,c__35293__auto___292330);
var G__292334 = (0);
seq__292173_292284 = G__292331;
chunk__292174_292285 = G__292332;
count__292175_292286 = G__292333;
i__292176_292287 = G__292334;
continue;
} else {
var map__292189_292335 = cljs.core.first.call(null,seq__292173_292329__$1);
var map__292189_292336__$1 = ((((!((map__292189_292335 == null)))?((((map__292189_292335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292189_292335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292189_292335):map__292189_292335);
var region_292337 = cljs.core.get.call(null,map__292189_292336__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_292338 = cljs.core.get.call(null,map__292189_292336__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_292339 = cljs.core.get.call(null,map__292189_292336__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_292340 = cljs.core.get.call(null,map__292189_292336__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_292341 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_292337))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_292341,brightness_292283);

var seq__292191_292342 = cljs.core.seq.call(null,faces_292338);
var chunk__292192_292343 = null;
var count__292193_292344 = (0);
var i__292194_292345 = (0);
while(true){
if((i__292194_292345 < count__292193_292344)){
var vec__292195_292346 = cljs.core._nth.call(null,chunk__292192_292343,i__292194_292345);
var a_292347 = cljs.core.nth.call(null,vec__292195_292346,(0),null);
var b_292348 = cljs.core.nth.call(null,vec__292195_292346,(1),null);
var c_292349 = cljs.core.nth.call(null,vec__292195_292346,(2),null);
var face_292350 = vec__292195_292346;
if(((begin_292281 < vertices.call(null,a_292347).call(null,(2)))) && ((vertices.call(null,a_292347).call(null,(2)) < end_292282))){
line.call(null,a_292347,b_292348);
} else {
}

var G__292351 = seq__292191_292342;
var G__292352 = chunk__292192_292343;
var G__292353 = count__292193_292344;
var G__292354 = (i__292194_292345 + (1));
seq__292191_292342 = G__292351;
chunk__292192_292343 = G__292352;
count__292193_292344 = G__292353;
i__292194_292345 = G__292354;
continue;
} else {
var temp__6728__auto___292355__$1 = cljs.core.seq.call(null,seq__292191_292342);
if(temp__6728__auto___292355__$1){
var seq__292191_292356__$1 = temp__6728__auto___292355__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292191_292356__$1)){
var c__35293__auto___292357 = cljs.core.chunk_first.call(null,seq__292191_292356__$1);
var G__292358 = cljs.core.chunk_rest.call(null,seq__292191_292356__$1);
var G__292359 = c__35293__auto___292357;
var G__292360 = cljs.core.count.call(null,c__35293__auto___292357);
var G__292361 = (0);
seq__292191_292342 = G__292358;
chunk__292192_292343 = G__292359;
count__292193_292344 = G__292360;
i__292194_292345 = G__292361;
continue;
} else {
var vec__292198_292362 = cljs.core.first.call(null,seq__292191_292356__$1);
var a_292363 = cljs.core.nth.call(null,vec__292198_292362,(0),null);
var b_292364 = cljs.core.nth.call(null,vec__292198_292362,(1),null);
var c_292365 = cljs.core.nth.call(null,vec__292198_292362,(2),null);
var face_292366 = vec__292198_292362;
if(((begin_292281 < vertices.call(null,a_292363).call(null,(2)))) && ((vertices.call(null,a_292363).call(null,(2)) < end_292282))){
line.call(null,a_292363,b_292364);
} else {
}

var G__292367 = cljs.core.next.call(null,seq__292191_292356__$1);
var G__292368 = null;
var G__292369 = (0);
var G__292370 = (0);
seq__292191_292342 = G__292367;
chunk__292192_292343 = G__292368;
count__292193_292344 = G__292369;
i__292194_292345 = G__292370;
continue;
}
} else {
}
}
break;
}

var G__292371 = cljs.core.next.call(null,seq__292173_292329__$1);
var G__292372 = null;
var G__292373 = (0);
var G__292374 = (0);
seq__292173_292284 = G__292371;
chunk__292174_292285 = G__292372;
count__292175_292286 = G__292373;
i__292176_292287 = G__292374;
continue;
}
} else {
}
}
break;
}

var G__292375 = seq__292166_292276;
var G__292376 = chunk__292167_292277;
var G__292377 = count__292168_292278;
var G__292378 = (i__292169_292279 + (1));
seq__292166_292276 = G__292375;
chunk__292167_292277 = G__292376;
count__292168_292278 = G__292377;
i__292169_292279 = G__292378;
continue;
} else {
var temp__6728__auto___292379 = cljs.core.seq.call(null,seq__292166_292276);
if(temp__6728__auto___292379){
var seq__292166_292380__$1 = temp__6728__auto___292379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292166_292380__$1)){
var c__35293__auto___292381 = cljs.core.chunk_first.call(null,seq__292166_292380__$1);
var G__292382 = cljs.core.chunk_rest.call(null,seq__292166_292380__$1);
var G__292383 = c__35293__auto___292381;
var G__292384 = cljs.core.count.call(null,c__35293__auto___292381);
var G__292385 = (0);
seq__292166_292276 = G__292382;
chunk__292167_292277 = G__292383;
count__292168_292278 = G__292384;
i__292169_292279 = G__292385;
continue;
} else {
var vec__292201_292386 = cljs.core.first.call(null,seq__292166_292380__$1);
var begin_292387 = cljs.core.nth.call(null,vec__292201_292386,(0),null);
var end_292388 = cljs.core.nth.call(null,vec__292201_292386,(1),null);
var brightness_292389 = cljs.core.nth.call(null,vec__292201_292386,(2),null);
var seq__292204_292390 = cljs.core.seq.call(null,render_graph);
var chunk__292205_292391 = null;
var count__292206_292392 = (0);
var i__292207_292393 = (0);
while(true){
if((i__292207_292393 < count__292206_292392)){
var map__292208_292394 = cljs.core._nth.call(null,chunk__292205_292391,i__292207_292393);
var map__292208_292395__$1 = ((((!((map__292208_292394 == null)))?((((map__292208_292394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292208_292394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292208_292394):map__292208_292394);
var region_292396 = cljs.core.get.call(null,map__292208_292395__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_292397 = cljs.core.get.call(null,map__292208_292395__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_292398 = cljs.core.get.call(null,map__292208_292395__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_292399 = cljs.core.get.call(null,map__292208_292395__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_292400 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_292396))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_292400,brightness_292389);

var seq__292210_292401 = cljs.core.seq.call(null,faces_292397);
var chunk__292211_292402 = null;
var count__292212_292403 = (0);
var i__292213_292404 = (0);
while(true){
if((i__292213_292404 < count__292212_292403)){
var vec__292214_292405 = cljs.core._nth.call(null,chunk__292211_292402,i__292213_292404);
var a_292406 = cljs.core.nth.call(null,vec__292214_292405,(0),null);
var b_292407 = cljs.core.nth.call(null,vec__292214_292405,(1),null);
var c_292408 = cljs.core.nth.call(null,vec__292214_292405,(2),null);
var face_292409 = vec__292214_292405;
if(((begin_292387 < vertices.call(null,a_292406).call(null,(2)))) && ((vertices.call(null,a_292406).call(null,(2)) < end_292388))){
line.call(null,a_292406,b_292407);
} else {
}

var G__292410 = seq__292210_292401;
var G__292411 = chunk__292211_292402;
var G__292412 = count__292212_292403;
var G__292413 = (i__292213_292404 + (1));
seq__292210_292401 = G__292410;
chunk__292211_292402 = G__292411;
count__292212_292403 = G__292412;
i__292213_292404 = G__292413;
continue;
} else {
var temp__6728__auto___292414__$1 = cljs.core.seq.call(null,seq__292210_292401);
if(temp__6728__auto___292414__$1){
var seq__292210_292415__$1 = temp__6728__auto___292414__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292210_292415__$1)){
var c__35293__auto___292416 = cljs.core.chunk_first.call(null,seq__292210_292415__$1);
var G__292417 = cljs.core.chunk_rest.call(null,seq__292210_292415__$1);
var G__292418 = c__35293__auto___292416;
var G__292419 = cljs.core.count.call(null,c__35293__auto___292416);
var G__292420 = (0);
seq__292210_292401 = G__292417;
chunk__292211_292402 = G__292418;
count__292212_292403 = G__292419;
i__292213_292404 = G__292420;
continue;
} else {
var vec__292217_292421 = cljs.core.first.call(null,seq__292210_292415__$1);
var a_292422 = cljs.core.nth.call(null,vec__292217_292421,(0),null);
var b_292423 = cljs.core.nth.call(null,vec__292217_292421,(1),null);
var c_292424 = cljs.core.nth.call(null,vec__292217_292421,(2),null);
var face_292425 = vec__292217_292421;
if(((begin_292387 < vertices.call(null,a_292422).call(null,(2)))) && ((vertices.call(null,a_292422).call(null,(2)) < end_292388))){
line.call(null,a_292422,b_292423);
} else {
}

var G__292426 = cljs.core.next.call(null,seq__292210_292415__$1);
var G__292427 = null;
var G__292428 = (0);
var G__292429 = (0);
seq__292210_292401 = G__292426;
chunk__292211_292402 = G__292427;
count__292212_292403 = G__292428;
i__292213_292404 = G__292429;
continue;
}
} else {
}
}
break;
}

var G__292430 = seq__292204_292390;
var G__292431 = chunk__292205_292391;
var G__292432 = count__292206_292392;
var G__292433 = (i__292207_292393 + (1));
seq__292204_292390 = G__292430;
chunk__292205_292391 = G__292431;
count__292206_292392 = G__292432;
i__292207_292393 = G__292433;
continue;
} else {
var temp__6728__auto___292434__$1 = cljs.core.seq.call(null,seq__292204_292390);
if(temp__6728__auto___292434__$1){
var seq__292204_292435__$1 = temp__6728__auto___292434__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292204_292435__$1)){
var c__35293__auto___292436 = cljs.core.chunk_first.call(null,seq__292204_292435__$1);
var G__292437 = cljs.core.chunk_rest.call(null,seq__292204_292435__$1);
var G__292438 = c__35293__auto___292436;
var G__292439 = cljs.core.count.call(null,c__35293__auto___292436);
var G__292440 = (0);
seq__292204_292390 = G__292437;
chunk__292205_292391 = G__292438;
count__292206_292392 = G__292439;
i__292207_292393 = G__292440;
continue;
} else {
var map__292220_292441 = cljs.core.first.call(null,seq__292204_292435__$1);
var map__292220_292442__$1 = ((((!((map__292220_292441 == null)))?((((map__292220_292441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292220_292441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292220_292441):map__292220_292441);
var region_292443 = cljs.core.get.call(null,map__292220_292442__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_292444 = cljs.core.get.call(null,map__292220_292442__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_292445 = cljs.core.get.call(null,map__292220_292442__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_292446 = cljs.core.get.call(null,map__292220_292442__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_292447 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_292443))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_292447,brightness_292389);

var seq__292222_292448 = cljs.core.seq.call(null,faces_292444);
var chunk__292223_292449 = null;
var count__292224_292450 = (0);
var i__292225_292451 = (0);
while(true){
if((i__292225_292451 < count__292224_292450)){
var vec__292226_292452 = cljs.core._nth.call(null,chunk__292223_292449,i__292225_292451);
var a_292453 = cljs.core.nth.call(null,vec__292226_292452,(0),null);
var b_292454 = cljs.core.nth.call(null,vec__292226_292452,(1),null);
var c_292455 = cljs.core.nth.call(null,vec__292226_292452,(2),null);
var face_292456 = vec__292226_292452;
if(((begin_292387 < vertices.call(null,a_292453).call(null,(2)))) && ((vertices.call(null,a_292453).call(null,(2)) < end_292388))){
line.call(null,a_292453,b_292454);
} else {
}

var G__292457 = seq__292222_292448;
var G__292458 = chunk__292223_292449;
var G__292459 = count__292224_292450;
var G__292460 = (i__292225_292451 + (1));
seq__292222_292448 = G__292457;
chunk__292223_292449 = G__292458;
count__292224_292450 = G__292459;
i__292225_292451 = G__292460;
continue;
} else {
var temp__6728__auto___292461__$2 = cljs.core.seq.call(null,seq__292222_292448);
if(temp__6728__auto___292461__$2){
var seq__292222_292462__$1 = temp__6728__auto___292461__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292222_292462__$1)){
var c__35293__auto___292463 = cljs.core.chunk_first.call(null,seq__292222_292462__$1);
var G__292464 = cljs.core.chunk_rest.call(null,seq__292222_292462__$1);
var G__292465 = c__35293__auto___292463;
var G__292466 = cljs.core.count.call(null,c__35293__auto___292463);
var G__292467 = (0);
seq__292222_292448 = G__292464;
chunk__292223_292449 = G__292465;
count__292224_292450 = G__292466;
i__292225_292451 = G__292467;
continue;
} else {
var vec__292229_292468 = cljs.core.first.call(null,seq__292222_292462__$1);
var a_292469 = cljs.core.nth.call(null,vec__292229_292468,(0),null);
var b_292470 = cljs.core.nth.call(null,vec__292229_292468,(1),null);
var c_292471 = cljs.core.nth.call(null,vec__292229_292468,(2),null);
var face_292472 = vec__292229_292468;
if(((begin_292387 < vertices.call(null,a_292469).call(null,(2)))) && ((vertices.call(null,a_292469).call(null,(2)) < end_292388))){
line.call(null,a_292469,b_292470);
} else {
}

var G__292473 = cljs.core.next.call(null,seq__292222_292462__$1);
var G__292474 = null;
var G__292475 = (0);
var G__292476 = (0);
seq__292222_292448 = G__292473;
chunk__292223_292449 = G__292474;
count__292224_292450 = G__292475;
i__292225_292451 = G__292476;
continue;
}
} else {
}
}
break;
}

var G__292477 = cljs.core.next.call(null,seq__292204_292435__$1);
var G__292478 = null;
var G__292479 = (0);
var G__292480 = (0);
seq__292204_292390 = G__292477;
chunk__292205_292391 = G__292478;
count__292206_292392 = G__292479;
i__292207_292393 = G__292480;
continue;
}
} else {
}
}
break;
}

var G__292481 = cljs.core.next.call(null,seq__292166_292380__$1);
var G__292482 = null;
var G__292483 = (0);
var G__292484 = (0);
seq__292166_292276 = G__292481;
chunk__292167_292277 = G__292482;
count__292168_292278 = G__292483;
i__292169_292279 = G__292484;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq.call(null,sections)){
var seq__292232 = cljs.core.seq.call(null,render_graph);
var chunk__292233 = null;
var count__292234 = (0);
var i__292235 = (0);
while(true){
if((i__292235 < count__292234)){
var map__292236 = cljs.core._nth.call(null,chunk__292233,i__292235);
var map__292236__$1 = ((((!((map__292236 == null)))?((((map__292236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292236):map__292236);
var region = cljs.core.get.call(null,map__292236__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces = cljs.core.get.call(null,map__292236__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid = cljs.core.get.call(null,map__292236__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__292236__$1,new cljs.core.Keyword(null,"label","label",1718410804));
render_text.call(null,label,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),(0),(1000));

var G__292485 = seq__292232;
var G__292486 = chunk__292233;
var G__292487 = count__292234;
var G__292488 = (i__292235 + (1));
seq__292232 = G__292485;
chunk__292233 = G__292486;
count__292234 = G__292487;
i__292235 = G__292488;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__292232);
if(temp__6728__auto__){
var seq__292232__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292232__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__292232__$1);
var G__292489 = cljs.core.chunk_rest.call(null,seq__292232__$1);
var G__292490 = c__35293__auto__;
var G__292491 = cljs.core.count.call(null,c__35293__auto__);
var G__292492 = (0);
seq__292232 = G__292489;
chunk__292233 = G__292490;
count__292234 = G__292491;
i__292235 = G__292492;
continue;
} else {
var map__292238 = cljs.core.first.call(null,seq__292232__$1);
var map__292238__$1 = ((((!((map__292238 == null)))?((((map__292238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292238):map__292238);
var region = cljs.core.get.call(null,map__292238__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces = cljs.core.get.call(null,map__292238__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid = cljs.core.get.call(null,map__292238__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__292238__$1,new cljs.core.Keyword(null,"label","label",1718410804));
render_text.call(null,label,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),(0),(1000));

var G__292493 = cljs.core.next.call(null,seq__292232__$1);
var G__292494 = null;
var G__292495 = (0);
var G__292496 = (0);
seq__292232 = G__292493;
chunk__292233 = G__292494;
count__292234 = G__292495;
i__292235 = G__292496;
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

var x292501_292531 = ui.core.Brain.prototype;
x292501_292531.componentWillUpdate = ((function (x292501_292531){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___292532 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___292533 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___292532,next_ident__40467__auto___292533)){
var idxr__40468__auto___292534 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___292534 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___292534),((function (idxr__40468__auto___292534,ident__40466__auto___292532,next_ident__40467__auto___292533,this__40462__auto__,x292501_292531){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___292532], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___292533], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___292534,ident__40466__auto___292532,next_ident__40467__auto___292533,this__40462__auto__,x292501_292531))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x292501_292531))
;

x292501_292531.shouldComponentUpdate = ((function (x292501_292531){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__292503 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__292503);
} else {
return G__292503;
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
});})(x292501_292531))
;

x292501_292531.componentDidUpdate = ((function (x292501_292531){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x292501_292531))
;

x292501_292531.isMounted = ((function (x292501_292531){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x292501_292531))
;

x292501_292531.componentWillMount = ((function (x292501_292531){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x292501_292531))
;

x292501_292531.initLocalState = ((function (x292501_292531){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1708495417),null], null);
var obj292505 = {"omcljs$state":ret__40440__auto__};
return obj292505;
});})(x292501_292531))
;

x292501_292531.componentDidMount = ((function (x292501_292531){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"interval","interval",1708495417),setInterval(((function (this$,x292501_292531){
return (function (){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.update,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),((function (this$,x292501_292531){
return (function (rotation){
ui.core.render_brain.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)).getContext("2d"),rotation,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));

return (rotation + 0.01);
});})(this$,x292501_292531))
);
});})(this$,x292501_292531))
,(50)));
});})(x292501_292531))
;

x292501_292531.componentWillUnmount = ((function (x292501_292531){
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
});})(x292501_292531))
;

x292501_292531.render = ((function (x292501_292531){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_292506 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_292507 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_292508 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_292509 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_292510 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__292511 = om.next.props.call(null,this$);
var map__292511__$1 = ((((!((map__292511 == null)))?((((map__292511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292511):map__292511);
var props = map__292511__$1;
var items = cljs.core.get.call(null,map__292511__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
var loading = cljs.core.not.call(null,cljs.core.seq.call(null,items));
var scores = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (map__292511,map__292511__$1,props,items,loading,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531){
return (function ui$core$iter__292514(s__292515){
return (new cljs.core.LazySeq(null,((function (map__292511,map__292511__$1,props,items,loading,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531){
return (function (){
var s__292515__$1 = s__292515;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__292515__$1);
if(temp__6728__auto__){
var s__292515__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292515__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__292515__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__292517 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__292516 = (0);
while(true){
if((i__292516 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__292516);
cljs.core.chunk_append.call(null,b__292517,(function (){var map__292522 = item;
var map__292522__$1 = ((((!((map__292522 == null)))?((((map__292522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292522):map__292522);
var votes = cljs.core.get.call(null,map__292522__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34723__auto__ = (0);
var y__34724__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})());

var G__292535 = (i__292516 + (1));
i__292516 = G__292535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292517),ui$core$iter__292514.call(null,cljs.core.chunk_rest.call(null,s__292515__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292517),null);
}
} else {
var item = cljs.core.first.call(null,s__292515__$2);
return cljs.core.cons.call(null,(function (){var map__292524 = item;
var map__292524__$1 = ((((!((map__292524 == null)))?((((map__292524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292524):map__292524);
var votes = cljs.core.get.call(null,map__292524__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34723__auto__ = (0);
var y__34724__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})(),ui$core$iter__292514.call(null,cljs.core.rest.call(null,s__292515__$2)));
}
} else {
return null;
}
break;
}
});})(map__292511,map__292511__$1,props,items,loading,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531))
,null,null));
});})(map__292511,map__292511__$1,props,items,loading,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531))
;
return iter__35244__auto__.call(null,items);
})());
var sections = cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__292511,map__292511__$1,props,items,loading,scores,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531){
return (function (index,item,score){
var map__292526 = item;
var map__292526__$1 = ((((!((map__292526 == null)))?((((map__292526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292526):map__292526);
var description = cljs.core.get.call(null,map__292526__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("item","description","item/description",-1431609213).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var x__34723__auto__ = score;
var y__34724__auto__ = (cljs.core.apply.call(null,cljs.core._PLUS_,scores) / (50));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})(),new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});})(map__292511,map__292511__$1,props,items,loading,scores,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531))
,cljs.core.range.call(null),items,scores));
var sections__$1 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core._,new cljs.core.Keyword(null,"size","size",1098693007)),sections));
var map__292512 = om.next.get_computed.call(null,props);
var map__292512__$1 = ((((!((map__292512 == null)))?((((map__292512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292512):map__292512);
var mode = cljs.core.get.call(null,map__292512__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
cljs.core.swap_BANG_.call(null,ui.core.brain_state,((function (map__292511,map__292511__$1,props,items,loading,scores,sections,sections__$1,map__292512,map__292512__$1,mode,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531){
return (function (brain_state){
if(cljs.core.not_EQ_.call(null,sections__$1,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(brain_state))){
var br = ui.core.brain_prerender.call(null,sections__$1);
return cljs.core.assoc.call(null,brain_state,new cljs.core.Keyword(null,"sections","sections",-886710106),sections__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958),br,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629),ui.core.render_graph.call(null,ui.core.brain_faces,ui.core.brain_vertices,br));
} else {
return brain_state;
}
});})(map__292511,map__292511__$1,props,items,loading,scores,sections,sections__$1,map__292512,map__292512__$1,mode,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531))
);

return ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"colored","colored",-1421800355),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colored","colored",-1421800355),ui.motion.spring.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"brain","brain",428499577))) && (!(loading)))?(1):(0)),ui.motion.gentle),new cljs.core.Keyword(null,"top","top",-1856271961),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(50):(0))),new cljs.core.Keyword(null,"width","width",-384071477),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(150):(80)),ui.motion.wobbly)], null)], null),((function (map__292511,map__292511__$1,props,items,loading,scores,sections,sections__$1,map__292512,map__292512__$1,mode,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531){
return (function (value){
cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value));

return cljs.core.apply.call(null,React.DOM.div,({"style": ({"width": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "position": "absolute", "zIndex": om_tools.dom.format_opts.call(null,(((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value) > 0.5))?(1):(-1))), "top": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("%")].join(''))})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.canvas(({"ref": om_tools.dom.format_opts.call(null,((function (map__292511,map__292511__$1,props,items,loading,scores,sections,sections__$1,map__292512,map__292512__$1,mode,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531){
return (function (canvas){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas);
});})(map__292511,map__292511__$1,props,items,loading,scores,sections,sections__$1,map__292512,map__292512__$1,mode,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531))
), "width": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "height": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "style": ({"height": "100%", "width": "100%"})})),((loading)?cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "top": "40%", "left": "25%", "right": "25%", "height": "20%"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.p(({"style": ({"textAlign": "center"})}),"Brain Initializing from Ethereum Blockchain"),blueprint_cljs.core.progress_bar.call(null)],null)))):null)],null))));
});})(map__292511,map__292511__$1,props,items,loading,scores,sections,sections__$1,map__292512,map__292512__$1,mode,_STAR_reconciler_STAR_292506,_STAR_depth_STAR_292507,_STAR_shared_STAR_292508,_STAR_instrument_STAR_292509,_STAR_parent_STAR_292510,this$,this__40461__auto__,x292501_292531))
);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_292510;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_292509;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_292508;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_292507;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_292506;
}});})(x292501_292531))
;


ui.core.Brain.prototype.constructor = ui.core.Brain;

ui.core.Brain.prototype.constructor.displayName = "ui.core/Brain";

ui.core.Brain.prototype.om$isComponent = true;

var x292529_292536 = ui.core.Brain;
/** @nocollapse */
x292529_292536.om$next$IQuery$ = true;

/** @nocollapse */
x292529_292536.om$next$IQuery$query$arity$1 = ((function (x292529_292536){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x292529_292536))
;


var x292530_292537 = ui.core.Brain.prototype;

x292530_292537.om$next$IQuery$ = true;


x292530_292537.om$next$IQuery$query$arity$1 = ((function (x292530_292537){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x292530_292537))
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

var x292542_292556 = ui.core.Root.prototype;
x292542_292556.componentWillUpdate = ((function (x292542_292556){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___292557 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___292558 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___292557,next_ident__40467__auto___292558)){
var idxr__40468__auto___292559 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___292559 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___292559),((function (idxr__40468__auto___292559,ident__40466__auto___292557,next_ident__40467__auto___292558,this__40462__auto__,x292542_292556){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___292557], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___292558], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___292559,ident__40466__auto___292557,next_ident__40467__auto___292558,this__40462__auto__,x292542_292556))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x292542_292556))
;

x292542_292556.shouldComponentUpdate = ((function (x292542_292556){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__292544 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__292544);
} else {
return G__292544;
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
});})(x292542_292556))
;

x292542_292556.componentDidUpdate = ((function (x292542_292556){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x292542_292556))
;

x292542_292556.isMounted = ((function (x292542_292556){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x292542_292556))
;

x292542_292556.componentWillMount = ((function (x292542_292556){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x292542_292556))
;

x292542_292556.initLocalState = ((function (x292542_292556){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),null], null),new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.Keyword(null,"brain","brain",428499577)], null);
var obj292546 = {"omcljs$state":ret__40440__auto__};
return obj292546;
});})(x292542_292556))
;

x292542_292556.componentDidMount = ((function (x292542_292556){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),(function (){var update_address = ((function (this$,x292542_292556){
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
});})(this$,x292542_292556))
;
update_address.call(null);

return setInterval(update_address,(1000));
})()], null));
});})(x292542_292556))
;

x292542_292556.componentWillUnmount = ((function (x292542_292556){
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
});})(x292542_292556))
;

x292542_292556.render = ((function (x292542_292556){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_292547 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_292548 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_292549 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_292550 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_292551 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__292552 = om.next.props.call(null,this$);
var map__292552__$1 = ((((!((map__292552 == null)))?((((map__292552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292552):map__292552);
var proposals_props = cljs.core.get.call(null,map__292552__$1,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231));
var stakes_props = cljs.core.get.call(null,map__292552__$1,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339));
var items_props = cljs.core.get.call(null,map__292552__$1,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104));
var brain_props = cljs.core.get.call(null,map__292552__$1,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934));
var network_id = cljs.core.get.call(null,map__292552__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var can_vote_proposal = cljs.core.get.call(null,map__292552__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__292552__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dark", "style": ({"display": "flex", "justifyContent": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"flexGrow": "1", "maxWidth": "600px"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.tabs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__292552,map__292552__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_292547,_STAR_depth_STAR_292548,_STAR_shared_STAR_292549,_STAR_instrument_STAR_292550,_STAR_parent_STAR_292551,this$,this__40461__auto__,x292542_292556){
return (function (index){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"white","white",-483998618)], null).call(null,index));
});})(map__292552,map__292552__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_292547,_STAR_depth_STAR_292548,_STAR_shared_STAR_292549,_STAR_instrument_STAR_292550,_STAR_parent_STAR_292551,this$,this__40461__auto__,x292542_292556))
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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_292551;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_292550;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_292549;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_292548;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_292547;
}});})(x292542_292556))
;


ui.core.Root.prototype.constructor = ui.core.Root;

ui.core.Root.prototype.constructor.displayName = "ui.core/Root";

ui.core.Root.prototype.om$isComponent = true;

var x292554_292560 = ui.core.Root;
/** @nocollapse */
x292554_292560.om$next$IQuery$ = true;

/** @nocollapse */
x292554_292560.om$next$IQuery$query$arity$1 = ((function (x292554_292560){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x292554_292560))
;


var x292555_292561 = ui.core.Root.prototype;

x292555_292561.om$next$IQuery$ = true;


x292555_292561.om$next$IQuery$query$arity$1 = ((function (x292555_292561){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x292555_292561))
;


ui.core.Root.cljs$lang$type = true;

ui.core.Root.cljs$lang$ctorStr = "ui.core/Root";

ui.core.Root.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Root");
});
ui.core.simple_read = (function ui$core$simple_read(p__292562,key,_){
var map__292565 = p__292562;
var map__292565__$1 = ((((!((map__292565 == null)))?((((map__292565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292565):map__292565);
var env = map__292565__$1;
var state = cljs.core.get.call(null,map__292565__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state).call(null,key)], null);
});
ui.core.simple_read_with_remote = (function ui$core$simple_read_with_remote(p__292567,key,_){
var map__292570 = p__292567;
var map__292570__$1 = ((((!((map__292570 == null)))?((((map__292570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292570):map__292570);
var env = map__292570__$1;
var state = cljs.core.get.call(null,map__292570__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var value = cljs.core.deref.call(null,state).call(null,key);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"remote","remote",-1593576576),cljs.core.not.call(null,value)], null);
});
ui.core.recursive_read = (function ui$core$recursive_read(query_root,p__292572,_,___$1){
var map__292575 = p__292572;
var map__292575__$1 = ((((!((map__292575 == null)))?((((map__292575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292575):map__292575);
var env = map__292575__$1;
var parser = cljs.core.get.call(null,map__292575__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__292575__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__292575__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__292575__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query-root","query-root",359781888),query_root,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}
});
ui.core.recursive_channel_read = (function ui$core$recursive_channel_read(p__292577,_,___$1){
var map__292580 = p__292577;
var map__292580__$1 = ((((!((map__292580 == null)))?((((map__292580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292580):map__292580);
var env = map__292580__$1;
var parser = cljs.core.get.call(null,map__292580__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__292580__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.call(null,map__292580__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
var G__292582__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,true,args);
};
var G__292582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292583__i = 0, G__292583__a = new Array(arguments.length -  0);
while (G__292583__i < G__292583__a.length) {G__292583__a[G__292583__i] = arguments[G__292583__i + 0]; ++G__292583__i;}
  args = new cljs.core.IndexedSeq(G__292583__a,0);
} 
return G__292582__delegate.call(this,args);};
G__292582.cljs$lang$maxFixedArity = 0;
G__292582.cljs$lang$applyTo = (function (arglist__292584){
var args = cljs.core.seq(arglist__292584);
return G__292582__delegate(args);
});
G__292582.cljs$core$IFn$_invoke$arity$variadic = G__292582__delegate;
return G__292582;
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
var map__292585 = env;
var map__292585__$1 = ((((!((map__292585 == null)))?((((map__292585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292585):map__292585);
var parser = cljs.core.get.call(null,map__292585__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__292585__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__292585__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__292585__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__292585__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__292585,map__292585__$1,parser,state,query,target,ast,state__$1){
return (function ui$core$iter__292587(s__292588){
return (new cljs.core.LazySeq(null,((function (map__292585,map__292585__$1,parser,state,query,target,ast,state__$1){
return (function (){
var s__292588__$1 = s__292588;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__292588__$1);
if(temp__6728__auto__){
var s__292588__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292588__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__292588__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__292590 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__292589 = (0);
while(true){
if((i__292589 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__292589);
cljs.core.chunk_append.call(null,b__292590,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query));

var G__292591 = (i__292589 + (1));
i__292589 = G__292591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292590),ui$core$iter__292587.call(null,cljs.core.chunk_rest.call(null,s__292588__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292590),null);
}
} else {
var item = cljs.core.first.call(null,s__292588__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query),ui$core$iter__292587.call(null,cljs.core.rest.call(null,s__292588__$2)));
}
} else {
return null;
}
break;
}
});})(map__292585,map__292585__$1,parser,state,query,target,ast,state__$1))
,null,null));
});})(map__292585,map__292585__$1,parser,state,query,target,ast,state__$1))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("item","by-id","item/by-id",-2140839086).cljs$core$IFn$_invoke$arity$1(state__$1));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),(function (env,k,params){
var map__292592 = env;
var map__292592__$1 = ((((!((map__292592 == null)))?((((map__292592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292592):map__292592);
var parser = cljs.core.get.call(null,map__292592__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__292592__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__292592__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__292592__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__292592__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__292593 = state__$1;
var map__292593__$1 = ((((!((map__292593 == null)))?((((map__292593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292593):map__292593);
var order = cljs.core.get.call(null,map__292593__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__292592,map__292592__$1,parser,state,query,target,ast,state__$1,map__292593,map__292593__$1,order){
return (function ui$core$iter__292596(s__292597){
return (new cljs.core.LazySeq(null,((function (map__292592,map__292592__$1,parser,state,query,target,ast,state__$1,map__292593,map__292593__$1,order){
return (function (){
var s__292597__$1 = s__292597;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__292597__$1);
if(temp__6728__auto__){
var s__292597__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292597__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__292597__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__292599 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__292598 = (0);
while(true){
if((i__292598 < size__35243__auto__)){
var proposal = cljs.core._nth.call(null,c__35242__auto__,i__292598);
cljs.core.chunk_append.call(null,b__292599,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query));

var G__292600 = (i__292598 + (1));
i__292598 = G__292600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292599),ui$core$iter__292596.call(null,cljs.core.chunk_rest.call(null,s__292597__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292599),null);
}
} else {
var proposal = cljs.core.first.call(null,s__292597__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query),ui$core$iter__292596.call(null,cljs.core.rest.call(null,s__292597__$2)));
}
} else {
return null;
}
break;
}
});})(map__292592,map__292592__$1,parser,state,query,target,ast,state__$1,map__292593,map__292593__$1,order))
,null,null));
});})(map__292592,map__292592__$1,parser,state,query,target,ast,state__$1,map__292593,map__292593__$1,order))
;
return iter__35244__auto__.call(null,order);
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
var map__292601 = env;
var map__292601__$1 = ((((!((map__292601 == null)))?((((map__292601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292601):map__292601);
var parser = cljs.core.get.call(null,map__292601__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__292601__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__292601__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__292601__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__292601__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__292602 = state__$1;
var map__292602__$1 = ((((!((map__292602 == null)))?((((map__292602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292602):map__292602);
var by_id = cljs.core.get.call(null,map__292602__$1,new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__292601,map__292601__$1,parser,state,query,target,ast,state__$1,map__292602,map__292602__$1,by_id){
return (function ui$core$iter__292605(s__292606){
return (new cljs.core.LazySeq(null,((function (map__292601,map__292601__$1,parser,state,query,target,ast,state__$1,map__292602,map__292602__$1,by_id){
return (function (){
var s__292606__$1 = s__292606;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__292606__$1);
if(temp__6728__auto__){
var s__292606__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292606__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__292606__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__292608 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__292607 = (0);
while(true){
if((i__292607 < size__35243__auto__)){
var stake = cljs.core._nth.call(null,c__35242__auto__,i__292607);
cljs.core.chunk_append.call(null,b__292608,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query));

var G__292609 = (i__292607 + (1));
i__292607 = G__292609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292608),ui$core$iter__292605.call(null,cljs.core.chunk_rest.call(null,s__292606__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292608),null);
}
} else {
var stake = cljs.core.first.call(null,s__292606__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query),ui$core$iter__292605.call(null,cljs.core.rest.call(null,s__292606__$2)));
}
} else {
return null;
}
break;
}
});})(map__292601,map__292601__$1,parser,state,query,target,ast,state__$1,map__292602,map__292602__$1,by_id))
,null,null));
});})(map__292601,map__292601__$1,parser,state,query,target,ast,state__$1,map__292602,map__292602__$1,by_id))
;
return iter__35244__auto__.call(null,cljs.core.vals.call(null,by_id));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__292610__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__292610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292611__i = 0, G__292611__a = new Array(arguments.length -  0);
while (G__292611__i < G__292611__a.length) {G__292611__a[G__292611__i] = arguments[G__292611__i + 0]; ++G__292611__i;}
  args = new cljs.core.IndexedSeq(G__292611__a,0);
} 
return G__292610__delegate.call(this,args);};
G__292610.cljs$lang$maxFixedArity = 0;
G__292610.cljs$lang$applyTo = (function (arglist__292612){
var args = cljs.core.seq(arglist__292612);
return G__292610__delegate(args);
});
G__292610.cljs$core$IFn$_invoke$arity$variadic = G__292610__delegate;
return G__292610;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__292613__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__292613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292614__i = 0, G__292614__a = new Array(arguments.length -  0);
while (G__292614__i < G__292614__a.length) {G__292614__a[G__292614__i] = arguments[G__292614__i + 0]; ++G__292614__i;}
  args = new cljs.core.IndexedSeq(G__292614__a,0);
} 
return G__292613__delegate.call(this,args);};
G__292613.cljs$lang$maxFixedArity = 0;
G__292613.cljs$lang$applyTo = (function (arglist__292615){
var args = cljs.core.seq(arglist__292615);
return G__292613__delegate(args);
});
G__292613.cljs$core$IFn$_invoke$arity$variadic = G__292613__delegate;
return G__292613;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__292616__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__292616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292617__i = 0, G__292617__a = new Array(arguments.length -  0);
while (G__292617__i < G__292617__a.length) {G__292617__a[G__292617__i] = arguments[G__292617__i + 0]; ++G__292617__i;}
  args = new cljs.core.IndexedSeq(G__292617__a,0);
} 
return G__292616__delegate.call(this,args);};
G__292616.cljs$lang$maxFixedArity = 0;
G__292616.cljs$lang$applyTo = (function (arglist__292618){
var args = cljs.core.seq(arglist__292618);
return G__292616__delegate(args);
});
G__292616.cljs$core$IFn$_invoke$arity$variadic = G__292616__delegate;
return G__292616;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__292619__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__292619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292620__i = 0, G__292620__a = new Array(arguments.length -  0);
while (G__292620__i < G__292620__a.length) {G__292620__a[G__292620__i] = arguments[G__292620__i + 0]; ++G__292620__i;}
  args = new cljs.core.IndexedSeq(G__292620__a,0);
} 
return G__292619__delegate.call(this,args);};
G__292619.cljs$lang$maxFixedArity = 0;
G__292619.cljs$lang$applyTo = (function (arglist__292621){
var args = cljs.core.seq(arglist__292621);
return G__292619__delegate(args);
});
G__292619.cljs$core$IFn$_invoke$arity$variadic = G__292619__delegate;
return G__292619;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,k,params){
var map__292622 = env;
var map__292622__$1 = ((((!((map__292622 == null)))?((((map__292622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292622):map__292622);
var parser = cljs.core.get.call(null,map__292622__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__292622__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__292622__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__292622__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__292622__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__292623 = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env);
var map__292623__$1 = ((((!((map__292623 == null)))?((((map__292623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292623):map__292623);
var votes = cljs.core.get.call(null,map__292623__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(votes)?(function (){var iter__35244__auto__ = ((function (map__292622,map__292622__$1,parser,state,query,target,ast,state__$1,map__292623,map__292623__$1,votes){
return (function ui$core$iter__292626(s__292627){
return (new cljs.core.LazySeq(null,((function (map__292622,map__292622__$1,parser,state,query,target,ast,state__$1,map__292623,map__292623__$1,votes){
return (function (){
var s__292627__$1 = s__292627;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__292627__$1);
if(temp__6728__auto__){
var s__292627__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292627__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__292627__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__292629 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__292628 = (0);
while(true){
if((i__292628 < size__35243__auto__)){
var item_votes = cljs.core._nth.call(null,c__35242__auto__,i__292628);
cljs.core.chunk_append.call(null,b__292629,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query));

var G__292630 = (i__292628 + (1));
i__292628 = G__292630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292629),ui$core$iter__292626.call(null,cljs.core.chunk_rest.call(null,s__292627__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292629),null);
}
} else {
var item_votes = cljs.core.first.call(null,s__292627__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query),ui$core$iter__292626.call(null,cljs.core.rest.call(null,s__292627__$2)));
}
} else {
return null;
}
break;
}
});})(map__292622,map__292622__$1,parser,state,query,target,ast,state__$1,map__292623,map__292623__$1,votes))
,null,null));
});})(map__292622,map__292622__$1,parser,state,query,target,ast,state__$1,map__292623,map__292623__$1,votes))
;
return iter__35244__auto__.call(null,votes);
})():null)], null);
}
}));
var seq__292631_292641 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake","stake",-1498497787),new cljs.core.Keyword("stake","value","stake/value",466231031),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword("item","description","item/description",-1431609213),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),true], null)], null));
var chunk__292632_292642 = null;
var count__292633_292643 = (0);
var i__292634_292644 = (0);
while(true){
if((i__292634_292644 < count__292633_292643)){
var vec__292635_292645 = cljs.core._nth.call(null,chunk__292632_292642,i__292634_292644);
var object_292646 = cljs.core.nth.call(null,vec__292635_292645,(0),null);
var method_292647 = cljs.core.nth.call(null,vec__292635_292645,(1),null);
var remote_292648 = cljs.core.nth.call(null,vec__292635_292645,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_292647,((function (seq__292631_292641,chunk__292632_292642,count__292633_292643,i__292634_292644,vec__292635_292645,object_292646,method_292647,remote_292648){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_292648,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_292646,dispatch_key], null))], null);
});})(seq__292631_292641,chunk__292632_292642,count__292633_292643,i__292634_292644,vec__292635_292645,object_292646,method_292647,remote_292648))
);

var G__292649 = seq__292631_292641;
var G__292650 = chunk__292632_292642;
var G__292651 = count__292633_292643;
var G__292652 = (i__292634_292644 + (1));
seq__292631_292641 = G__292649;
chunk__292632_292642 = G__292650;
count__292633_292643 = G__292651;
i__292634_292644 = G__292652;
continue;
} else {
var temp__6728__auto___292653 = cljs.core.seq.call(null,seq__292631_292641);
if(temp__6728__auto___292653){
var seq__292631_292654__$1 = temp__6728__auto___292653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292631_292654__$1)){
var c__35293__auto___292655 = cljs.core.chunk_first.call(null,seq__292631_292654__$1);
var G__292656 = cljs.core.chunk_rest.call(null,seq__292631_292654__$1);
var G__292657 = c__35293__auto___292655;
var G__292658 = cljs.core.count.call(null,c__35293__auto___292655);
var G__292659 = (0);
seq__292631_292641 = G__292656;
chunk__292632_292642 = G__292657;
count__292633_292643 = G__292658;
i__292634_292644 = G__292659;
continue;
} else {
var vec__292638_292660 = cljs.core.first.call(null,seq__292631_292654__$1);
var object_292661 = cljs.core.nth.call(null,vec__292638_292660,(0),null);
var method_292662 = cljs.core.nth.call(null,vec__292638_292660,(1),null);
var remote_292663 = cljs.core.nth.call(null,vec__292638_292660,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_292662,((function (seq__292631_292641,chunk__292632_292642,count__292633_292643,i__292634_292644,vec__292638_292660,object_292661,method_292662,remote_292663,seq__292631_292654__$1,temp__6728__auto___292653){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_292663,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_292661,dispatch_key], null))], null);
});})(seq__292631_292641,chunk__292632_292642,count__292633_292643,i__292634_292644,vec__292638_292660,object_292661,method_292662,remote_292663,seq__292631_292654__$1,temp__6728__auto___292653))
);

var G__292664 = cljs.core.next.call(null,seq__292631_292654__$1);
var G__292665 = null;
var G__292666 = (0);
var G__292667 = (0);
seq__292631_292641 = G__292664;
chunk__292632_292642 = G__292665;
count__292633_292643 = G__292666;
i__292634_292644 = G__292667;
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
var G__292668__delegate = function (args){
return cljs.core.apply.call(null,ui.core.simple_read_with_remote,args);
};
var G__292668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292669__i = 0, G__292669__a = new Array(arguments.length -  0);
while (G__292669__i < G__292669__a.length) {G__292669__a[G__292669__i] = arguments[G__292669__i + 0]; ++G__292669__i;}
  args = new cljs.core.IndexedSeq(G__292669__a,0);
} 
return G__292668__delegate.call(this,args);};
G__292668.cljs$lang$maxFixedArity = 0;
G__292668.cljs$lang$applyTo = (function (arglist__292670){
var args = cljs.core.seq(arglist__292670);
return G__292668__delegate(args);
});
G__292668.cljs$core$IFn$_invoke$arity$variadic = G__292668__delegate;
return G__292668;
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
var map__292671 = params;
var map__292671__$1 = ((((!((map__292671 == null)))?((((map__292671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292671):map__292671);
var id = cljs.core.get.call(null,map__292671__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__292671__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),((function (map__292671,map__292671__$1,id,description){
return (function (state){
var map__292673 = state;
var map__292673__$1 = ((((!((map__292673 == null)))?((((map__292673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292673):map__292673);
var proposals = cljs.core.get.call(null,map__292673__$1,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153));
var proposal = proposals.call(null,id);
var new_tempid = om.next.tempid.call(null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),cljs.core.assoc.call(null,cljs.core.update.call(null,proposals,id,cljs.core.assoc,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),description,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false),new_tempid,cljs.core.assoc.call(null,proposal,new cljs.core.Keyword("db","id","db/id",-1388397098),new_tempid,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),true))),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),new_tempid], null));
});})(map__292671,map__292671__$1,id,description))
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
var map__292675 = params;
var map__292675__$1 = ((((!((map__292675 == null)))?((((map__292675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292675):map__292675);
var address = cljs.core.get.call(null,map__292675__$1,new cljs.core.Keyword(null,"address","address",559499426));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35244__auto__ = (function ui$core$map_by_id_$_iter__292681(s__292682){
return (new cljs.core.LazySeq(null,(function (){
var s__292682__$1 = s__292682;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__292682__$1);
if(temp__6728__auto__){
var s__292682__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292682__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__292682__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__292684 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__292683 = (0);
while(true){
if((i__292683 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__292683);
cljs.core.chunk_append.call(null,b__292684,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null));

var G__292685 = (i__292683 + (1));
i__292683 = G__292685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292684),ui$core$map_by_id_$_iter__292681.call(null,cljs.core.chunk_rest.call(null,s__292682__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292684),null);
}
} else {
var item = cljs.core.first.call(null,s__292682__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null),ui$core$map_by_id_$_iter__292681.call(null,cljs.core.rest.call(null,s__292682__$2)));
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
var map__292692 = ui.core.tweak_tree.call(null,b);
var map__292692__$1 = ((((!((map__292692 == null)))?((((map__292692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292692):map__292692);
var network_id = cljs.core.get.call(null,map__292692__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var proposals = cljs.core.get.call(null,map__292692__$1,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444));
var order = cljs.core.get.call(null,map__292692__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
var stakes = cljs.core.get.call(null,map__292692__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__292692__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var items = cljs.core.get.call(null,map__292692__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,a,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),((function (map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items){
return (function (k){
var or__34390__auto__ = network_id;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return k;
}
});})(map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),cljs.core.merge,user),new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),((function (map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items){
return (function (proposals_old){
return cljs.core.merge_with.call(null,cljs.core.merge,proposals_old,ui.core.map_by_id.call(null,proposals));
});})(map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),((function (map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items){
return (function (order_old){
if(cljs.core.truth_(proposals)){
var ks = cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),proposals),cljs.core.filter.call(null,om.next.tempid_QMARK_,cljs.core.map.call(null,cljs.core.second,order_old)));
return cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (ks,map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items){
return (function ui$core$my_merge_tree_$_iter__292694(s__292695){
return (new cljs.core.LazySeq(null,((function (ks,map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items){
return (function (){
var s__292695__$1 = s__292695;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__292695__$1);
if(temp__6728__auto__){
var s__292695__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292695__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__292695__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__292697 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__292696 = (0);
while(true){
if((i__292696 < size__35243__auto__)){
var k = cljs.core._nth.call(null,c__35242__auto__,i__292696);
cljs.core.chunk_append.call(null,b__292697,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null));

var G__292698 = (i__292696 + (1));
i__292696 = G__292698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292697),ui$core$my_merge_tree_$_iter__292694.call(null,cljs.core.chunk_rest.call(null,s__292695__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292697),null);
}
} else {
var k = cljs.core.first.call(null,s__292695__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null),ui$core$my_merge_tree_$_iter__292694.call(null,cljs.core.rest.call(null,s__292695__$2)));
}
} else {
return null;
}
break;
}
});})(ks,map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items))
,null,null));
});})(ks,map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items))
;
return iter__35244__auto__.call(null,ks);
})());
} else {
return order_old;
}
});})(map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),((function (map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items){
return (function (stakes_old){
return cljs.core.merge_with.call(null,cljs.core.merge,stakes_old,ui.core.map_by_id.call(null,stakes));
});})(map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),((function (map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items){
return (function (items_old){
var or__34390__auto__ = items;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return items_old;
}
});})(map__292692,map__292692__$1,network_id,proposals,order,stakes,user,items))
);
});
ui.core.my_merge = (function ui$core$my_merge(reconciler,state,res,query){
var k = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),k,new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,cljs.core.select_keys.call(null,res,k),query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
ui.core.migrate = (function ui$core$migrate(var_args){
var args292699 = [];
var len__35573__auto___292746 = arguments.length;
var i__35574__auto___292747 = (0);
while(true){
if((i__35574__auto___292747 < len__35573__auto___292746)){
args292699.push((arguments[i__35574__auto___292747]));

var G__292748 = (i__35574__auto___292747 + (1));
i__35574__auto___292747 = G__292748;
continue;
} else {
}
break;
}

var G__292701 = args292699.length;
switch (G__292701) {
case 3:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args292699.length)].join('')));

}
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return ui.core.migrate.call(null,app_state_pure,query,tempids,null);
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function ui$core$dissoc_in(pure,p__292724){
var vec__292728 = p__292724;
var table = cljs.core.nth.call(null,vec__292728,(0),null);
var id = cljs.core.nth.call(null,vec__292728,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function ui$core$step(pure,p__292731){
var vec__292739 = p__292731;
var old = cljs.core.nth.call(null,vec__292739,(0),null);
var vec__292742 = cljs.core.nth.call(null,vec__292739,(1),null);
var _ = cljs.core.nth.call(null,vec__292742,(0),null);
var id = cljs.core.nth.call(null,vec__292742,(1),null);
var new$ = vec__292742;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__292745 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__292745,id_key,id);
} else {
return G__292745;
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

ui.core.get_tick_count = (function ui$core$get_tick_count(){
return (new Date()).getTime();
});
ui.core.chan_call = (function ui$core$chan_call(var_args){
var args__35580__auto__ = [];
var len__35573__auto___292767 = arguments.length;
var i__35574__auto___292768 = (0);
while(true){
if((i__35574__auto___292768 < len__35573__auto___292767)){
args__35580__auto__.push((arguments[i__35574__auto___292768]));

var G__292769 = (i__35574__auto___292768 + (1));
i__35574__auto___292768 = G__292769;
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
return (function (state_292757){
var state_val_292758 = (state_292757[(1)]);
if((state_val_292758 === (1))){
var state_292757__$1 = state_292757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_292757__$1,(2),c,result);
} else {
if((state_val_292758 === (2))){
var inst_292754 = (state_292757[(2)]);
var inst_292755 = cljs.core.async.close_BANG_.call(null,c);
var state_292757__$1 = (function (){var statearr_292759 = state_292757;
(statearr_292759[(7)] = inst_292754);

return statearr_292759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_292757__$1,inst_292755);
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
var statearr_292763 = [null,null,null,null,null,null,null,null];
(statearr_292763[(0)] = ui$core$state_machine__40145__auto__);

(statearr_292763[(1)] = (1));

return statearr_292763;
});
var ui$core$state_machine__40145__auto____1 = (function (state_292757){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_292757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e292764){if((e292764 instanceof Object)){
var ex__40148__auto__ = e292764;
var statearr_292765_292770 = state_292757;
(statearr_292765_292770[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_292757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e292764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__292771 = state_292757;
state_292757 = G__292771;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_292757){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_292757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,start_time))
})();
var state__40169__auto__ = (function (){var statearr_292766 = f__40168__auto__.call(null);
(statearr_292766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_292766;
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

ui.core.chan_call.cljs$lang$applyTo = (function (seq292750){
var G__292751 = cljs.core.first.call(null,seq292750);
var seq292750__$1 = cljs.core.next.call(null,seq292750);
var G__292752 = cljs.core.first.call(null,seq292750__$1);
var seq292750__$2 = cljs.core.next.call(null,seq292750__$1);
return ui.core.chan_call.cljs$core$IFn$_invoke$arity$variadic(G__292751,G__292752,seq292750__$2);
});

ui.core.get_network = (function ui$core$get_network(){
var c = cljs.core.async.chan.call(null);
web3.version.getNetwork(((function (c){
return (function (error,result){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c){
return (function (state_292789){
var state_val_292790 = (state_292789[(1)]);
if((state_val_292790 === (1))){
var inst_292785 = (result | (0));
var state_292789__$1 = state_292789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_292789__$1,(2),c,inst_292785);
} else {
if((state_val_292790 === (2))){
var inst_292787 = (state_292789[(2)]);
var state_292789__$1 = state_292789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_292789__$1,inst_292787);
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
var statearr_292794 = [null,null,null,null,null,null,null];
(statearr_292794[(0)] = ui$core$get_network_$_state_machine__40145__auto__);

(statearr_292794[(1)] = (1));

return statearr_292794;
});
var ui$core$get_network_$_state_machine__40145__auto____1 = (function (state_292789){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_292789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e292795){if((e292795 instanceof Object)){
var ex__40148__auto__ = e292795;
var statearr_292796_292798 = state_292789;
(statearr_292796_292798[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_292789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e292795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__292799 = state_292789;
state_292789 = G__292799;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_network_$_state_machine__40145__auto__ = function(state_292789){
switch(arguments.length){
case 0:
return ui$core$get_network_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_network_$_state_machine__40145__auto____1.call(this,state_292789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_network_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_network_$_state_machine__40145__auto____0;
ui$core$get_network_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_network_$_state_machine__40145__auto____1;
return ui$core$get_network_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_292797 = f__40168__auto__.call(null);
(statearr_292797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_292797;
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
var len__35573__auto___292858 = arguments.length;
var i__35574__auto___292859 = (0);
while(true){
if((i__35574__auto___292859 < len__35573__auto___292858)){
args__35580__auto__.push((arguments[i__35574__auto___292859]));

var G__292860 = (i__35574__auto___292859 + (1));
i__35574__auto___292859 = G__292860;
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
var vec__292803 = (((cljs.core.seq.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,body),cljs.core.rest.call(null,body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,body], null));
var obj = cljs.core.nth.call(null,vec__292803,(0),null);
var body__$1 = cljs.core.nth.call(null,vec__292803,(1),null);
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c,vec__292803,obj,body__$1){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c,vec__292803,obj,body__$1){
return (function (state_292830){
var state_val_292831 = (state_292830[(1)]);
if((state_val_292831 === (1))){
var inst_292806 = ui.core.get_network.call(null);
var state_292830__$1 = state_292830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_292830__$1,(2),inst_292806);
} else {
if((state_val_292831 === (2))){
var inst_292808 = (state_292830[(2)]);
var inst_292809 = cljs.core._EQ_.call(null,inst_292808,(3));
var state_292830__$1 = state_292830;
if(inst_292809){
var statearr_292832_292861 = state_292830__$1;
(statearr_292832_292861[(1)] = (3));

} else {
var statearr_292833_292862 = state_292830__$1;
(statearr_292833_292862[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_292831 === (3))){
var inst_292811 = cljs.core.name.call(null,fname);
var inst_292812 = (contract[inst_292811]);
var inst_292813 = inst_292812.sendTransaction;
var inst_292814 = cljs.core.vec.call(null,body__$1);
var inst_292815 = [new cljs.core.Keyword(null,"gas","gas",-139961463)];
var inst_292816 = [(4000000)];
var inst_292817 = cljs.core.PersistentHashMap.fromArrays(inst_292815,inst_292816);
var inst_292818 = cljs.core.merge.call(null,inst_292817,obj);
var inst_292819 = cljs.core.clj__GT_js.call(null,inst_292818);
var inst_292820 = (function (){return ((function (inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1){
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
return cljs.core.reset_BANG_.call(null,timer,setInterval(((function (timer,inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1){
return (function (){
return web3.eth.getTransactionReceipt(result,((function (timer,inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1){
return (function (error__$1,receipt){
if(cljs.core.truth_(receipt)){
var c__40167__auto___292863__$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto___292863__$1,timer,inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto___292863__$1,timer,inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1){
return (function (state_292838){
var state_val_292839 = (state_292838[(1)]);
if((state_val_292839 === (1))){
var state_292838__$1 = state_292838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_292838__$1,(2),c,receipt);
} else {
if((state_val_292839 === (2))){
var inst_292835 = (state_292838[(2)]);
var inst_292836 = cljs.core.async.close_BANG_.call(null,c);
var state_292838__$1 = (function (){var statearr_292840 = state_292838;
(statearr_292840[(7)] = inst_292835);

return statearr_292840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_292838__$1,inst_292836);
} else {
return null;
}
}
});})(c__40167__auto___292863__$1,timer,inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1))
;
return ((function (switch__40144__auto__,c__40167__auto___292863__$1,timer,inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_292844 = [null,null,null,null,null,null,null,null];
(statearr_292844[(0)] = ui$core$state_machine__40145__auto__);

(statearr_292844[(1)] = (1));

return statearr_292844;
});
var ui$core$state_machine__40145__auto____1 = (function (state_292838){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_292838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e292845){if((e292845 instanceof Object)){
var ex__40148__auto__ = e292845;
var statearr_292846_292864 = state_292838;
(statearr_292846_292864[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_292838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e292845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__292865 = state_292838;
state_292838 = G__292865;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_292838){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_292838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto___292863__$1,timer,inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1))
})();
var state__40169__auto__ = (function (){var statearr_292847 = f__40168__auto__.call(null);
(statearr_292847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto___292863__$1);

return statearr_292847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto___292863__$1,timer,inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1))
);


return clearInterval(cljs.core.deref.call(null,timer));
} else {
return null;
}
});})(timer,inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1))
);
});})(timer,inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1))
,(5000)));
}
});
;})(inst_292811,inst_292812,inst_292813,inst_292814,inst_292815,inst_292816,inst_292817,inst_292818,inst_292819,state_val_292831,c__40167__auto__,c,vec__292803,obj,body__$1))
})();
var inst_292821 = cljs.core.conj.call(null,inst_292814,inst_292819,inst_292820);
var inst_292822 = cljs.core.apply.call(null,cljs.core.array,inst_292821);
var inst_292823 = inst_292813.apply(contract,inst_292822);
var state_292830__$1 = (function (){var statearr_292848 = state_292830;
(statearr_292848[(7)] = inst_292823);

return statearr_292848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_292830__$1,(6),c);
} else {
if((state_val_292831 === (4))){
var state_292830__$1 = state_292830;
var statearr_292849_292866 = state_292830__$1;
(statearr_292849_292866[(2)] = null);

(statearr_292849_292866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_292831 === (5))){
var inst_292828 = (state_292830[(2)]);
var state_292830__$1 = state_292830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_292830__$1,inst_292828);
} else {
if((state_val_292831 === (6))){
var inst_292825 = (state_292830[(2)]);
var state_292830__$1 = state_292830;
var statearr_292850_292867 = state_292830__$1;
(statearr_292850_292867[(2)] = inst_292825);

(statearr_292850_292867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__40167__auto__,c,vec__292803,obj,body__$1))
;
return ((function (switch__40144__auto__,c__40167__auto__,c,vec__292803,obj,body__$1){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_292854 = [null,null,null,null,null,null,null,null];
(statearr_292854[(0)] = ui$core$state_machine__40145__auto__);

(statearr_292854[(1)] = (1));

return statearr_292854;
});
var ui$core$state_machine__40145__auto____1 = (function (state_292830){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_292830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e292855){if((e292855 instanceof Object)){
var ex__40148__auto__ = e292855;
var statearr_292856_292868 = state_292830;
(statearr_292856_292868[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_292830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e292855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__292869 = state_292830;
state_292830 = G__292869;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_292830){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_292830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,vec__292803,obj,body__$1))
})();
var state__40169__auto__ = (function (){var statearr_292857 = f__40168__auto__.call(null);
(statearr_292857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_292857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c,vec__292803,obj,body__$1))
);

return c__40167__auto__;
});

ui.core.chan_transact.cljs$lang$maxFixedArity = (2);

ui.core.chan_transact.cljs$lang$applyTo = (function (seq292800){
var G__292801 = cljs.core.first.call(null,seq292800);
var seq292800__$1 = cljs.core.next.call(null,seq292800);
var G__292802 = cljs.core.first.call(null,seq292800__$1);
var seq292800__$2 = cljs.core.next.call(null,seq292800__$1);
return ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic(G__292801,G__292802,seq292800__$2);
});

ui.core.chan_event = (function ui$core$chan_event(var_args){
var args__35580__auto__ = [];
var len__35573__auto___292890 = arguments.length;
var i__35574__auto___292891 = (0);
while(true){
if((i__35574__auto___292891 < len__35573__auto___292890)){
args__35580__auto__.push((arguments[i__35574__auto___292891]));

var G__292892 = (i__35574__auto___292891 + (1));
i__35574__auto___292891 = G__292892;
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
return (function (state_292880){
var state_val_292881 = (state_292880[(1)]);
if((state_val_292881 === (1))){
var state_292880__$1 = state_292880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_292880__$1,(2),c,result);
} else {
if((state_val_292881 === (2))){
var inst_292875 = (state_292880[(2)]);
var inst_292876 = cljs.core.async.close_BANG_.call(null,c);
var inst_292877 = cljs.core.deref.call(null,event);
var inst_292878 = inst_292877.stopWatching();
var state_292880__$1 = (function (){var statearr_292882 = state_292880;
(statearr_292882[(7)] = inst_292876);

(statearr_292882[(8)] = inst_292875);

return statearr_292882;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_292880__$1,inst_292878);
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
var statearr_292886 = [null,null,null,null,null,null,null,null,null];
(statearr_292886[(0)] = ui$core$state_machine__40145__auto__);

(statearr_292886[(1)] = (1));

return statearr_292886;
});
var ui$core$state_machine__40145__auto____1 = (function (state_292880){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_292880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e292887){if((e292887 instanceof Object)){
var ex__40148__auto__ = e292887;
var statearr_292888_292893 = state_292880;
(statearr_292888_292893[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_292880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e292887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__292894 = state_292880;
state_292880 = G__292894;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_292880){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_292880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,event))
})();
var state__40169__auto__ = (function (){var statearr_292889 = f__40168__auto__.call(null);
(statearr_292889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_292889;
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

ui.core.chan_event.cljs$lang$applyTo = (function (seq292870){
var G__292871 = cljs.core.first.call(null,seq292870);
var seq292870__$1 = cljs.core.next.call(null,seq292870);
var G__292872 = cljs.core.first.call(null,seq292870__$1);
var seq292870__$2 = cljs.core.next.call(null,seq292870__$1);
var G__292873 = cljs.core.first.call(null,seq292870__$2);
var seq292870__$3 = cljs.core.next.call(null,seq292870__$2);
return ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic(G__292871,G__292872,G__292873,seq292870__$3);
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
return (function (state_292917){
var state_val_292918 = (state_292917[(1)]);
if((state_val_292918 === (1))){
var state_292917__$1 = state_292917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_292917__$1,(2),c,result);
} else {
if((state_val_292918 === (2))){
var inst_292912 = (state_292917[(2)]);
var inst_292913 = cljs.core.async.close_BANG_.call(null,c);
var inst_292914 = cljs.core.deref.call(null,event);
var inst_292915 = inst_292914.stopWatching();
var state_292917__$1 = (function (){var statearr_292919 = state_292917;
(statearr_292919[(7)] = inst_292913);

(statearr_292919[(8)] = inst_292912);

return statearr_292919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_292917__$1,inst_292915);
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
var statearr_292923 = [null,null,null,null,null,null,null,null,null];
(statearr_292923[(0)] = ui$core$query_events_$_state_machine__40145__auto__);

(statearr_292923[(1)] = (1));

return statearr_292923;
});
var ui$core$query_events_$_state_machine__40145__auto____1 = (function (state_292917){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_292917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e292924){if((e292924 instanceof Object)){
var ex__40148__auto__ = e292924;
var statearr_292925_292927 = state_292917;
(statearr_292925_292927[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_292917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e292924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__292928 = state_292917;
state_292917 = G__292928;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$query_events_$_state_machine__40145__auto__ = function(state_292917){
switch(arguments.length){
case 0:
return ui$core$query_events_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$query_events_$_state_machine__40145__auto____1.call(this,state_292917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$query_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$query_events_$_state_machine__40145__auto____0;
ui$core$query_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$query_events_$_state_machine__40145__auto____1;
return ui$core$query_events_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,event,start_time))
})();
var state__40169__auto__ = (function (){var statearr_292926 = f__40168__auto__.call(null);
(statearr_292926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_292926;
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
return (function (state_292946){
var state_val_292947 = (state_292946[(1)]);
if((state_val_292947 === (1))){
var inst_292942 = cljs.core.vec.call(null,result);
var state_292946__$1 = state_292946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_292946__$1,(2),c,inst_292942);
} else {
if((state_val_292947 === (2))){
var inst_292944 = (state_292946[(2)]);
var state_292946__$1 = state_292946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_292946__$1,inst_292944);
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
var statearr_292951 = [null,null,null,null,null,null,null];
(statearr_292951[(0)] = ui$core$get_historical_events_$_state_machine__40145__auto__);

(statearr_292951[(1)] = (1));

return statearr_292951;
});
var ui$core$get_historical_events_$_state_machine__40145__auto____1 = (function (state_292946){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_292946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e292952){if((e292952 instanceof Object)){
var ex__40148__auto__ = e292952;
var statearr_292953_292955 = state_292946;
(statearr_292953_292955[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_292946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e292952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__292956 = state_292946;
state_292946 = G__292956;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_historical_events_$_state_machine__40145__auto__ = function(state_292946){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_historical_events_$_state_machine__40145__auto____1.call(this,state_292946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_$_state_machine__40145__auto____0;
ui$core$get_historical_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_$_state_machine__40145__auto____1;
return ui$core$get_historical_events_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_292954 = f__40168__auto__.call(null);
(statearr_292954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_292954;
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
return (function (state_292978){
var state_val_292979 = (state_292978[(1)]);
if((state_val_292979 === (1))){
var inst_292972 = (function (){return ((function (state_val_292979,c__40167__auto__,c){
return (function (event){
return cljs.core._EQ_.call(null,event.transactionHash,hash);
});
;})(state_val_292979,c__40167__auto__,c))
})();
var inst_292973 = cljs.core.filter.call(null,inst_292972,result);
var inst_292974 = cljs.core.vec.call(null,inst_292973);
var state_292978__$1 = state_292978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_292978__$1,(2),c,inst_292974);
} else {
if((state_val_292979 === (2))){
var inst_292976 = (state_292978[(2)]);
var state_292978__$1 = state_292978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_292978__$1,inst_292976);
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
var statearr_292983 = [null,null,null,null,null,null,null];
(statearr_292983[(0)] = ui$core$get_historical_events_hash_$_state_machine__40145__auto__);

(statearr_292983[(1)] = (1));

return statearr_292983;
});
var ui$core$get_historical_events_hash_$_state_machine__40145__auto____1 = (function (state_292978){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_292978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e292984){if((e292984 instanceof Object)){
var ex__40148__auto__ = e292984;
var statearr_292985_292987 = state_292978;
(statearr_292985_292987[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_292978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e292984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__292988 = state_292978;
state_292978 = G__292988;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_historical_events_hash_$_state_machine__40145__auto__ = function(state_292978){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_hash_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_historical_events_hash_$_state_machine__40145__auto____1.call(this,state_292978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_hash_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_hash_$_state_machine__40145__auto____0;
ui$core$get_historical_events_hash_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_hash_$_state_machine__40145__auto____1;
return ui$core$get_historical_events_hash_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_292986 = f__40168__auto__.call(null);
(statearr_292986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_292986;
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
return (function (state_293018){
var state_val_293019 = (state_293018[(1)]);
if((state_val_293019 === (1))){
var inst_293014 = ui.core.wei__GT_eth.call(null,result);
var state_293018__$1 = state_293018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_293018__$1,(2),c,inst_293014);
} else {
if((state_val_293019 === (2))){
var inst_293016 = (state_293018[(2)]);
var state_293018__$1 = state_293018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293018__$1,inst_293016);
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
var statearr_293023 = [null,null,null,null,null,null,null];
(statearr_293023[(0)] = ui$core$get_balance_$_state_machine__40145__auto__);

(statearr_293023[(1)] = (1));

return statearr_293023;
});
var ui$core$get_balance_$_state_machine__40145__auto____1 = (function (state_293018){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293024){if((e293024 instanceof Object)){
var ex__40148__auto__ = e293024;
var statearr_293025_293039 = state_293018;
(statearr_293025_293039[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293040 = state_293018;
state_293018 = G__293040;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__40145__auto__ = function(state_293018){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__40145__auto____1.call(this,state_293018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__40145__auto____0;
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__40145__auto____1;
return ui$core$get_balance_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_293026 = f__40168__auto__.call(null);
(statearr_293026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c))
);

return c__40167__auto__;
});})(c))
);
} else {
var c__40167__auto___293041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto___293041,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto___293041,c){
return (function (state_293030){
var state_val_293031 = (state_293030[(1)]);
if((state_val_293031 === (1))){
var state_293030__$1 = state_293030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_293030__$1,(2),c,(0));
} else {
if((state_val_293031 === (2))){
var inst_293028 = (state_293030[(2)]);
var state_293030__$1 = state_293030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293030__$1,inst_293028);
} else {
return null;
}
}
});})(c__40167__auto___293041,c))
;
return ((function (switch__40144__auto__,c__40167__auto___293041,c){
return (function() {
var ui$core$get_balance_$_state_machine__40145__auto__ = null;
var ui$core$get_balance_$_state_machine__40145__auto____0 = (function (){
var statearr_293035 = [null,null,null,null,null,null,null];
(statearr_293035[(0)] = ui$core$get_balance_$_state_machine__40145__auto__);

(statearr_293035[(1)] = (1));

return statearr_293035;
});
var ui$core$get_balance_$_state_machine__40145__auto____1 = (function (state_293030){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293036){if((e293036 instanceof Object)){
var ex__40148__auto__ = e293036;
var statearr_293037_293042 = state_293030;
(statearr_293037_293042[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293043 = state_293030;
state_293030 = G__293043;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__40145__auto__ = function(state_293030){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__40145__auto____1.call(this,state_293030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__40145__auto____0;
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__40145__auto____1;
return ui$core$get_balance_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto___293041,c))
})();
var state__40169__auto__ = (function (){var statearr_293038 = f__40168__auto__.call(null);
(statearr_293038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto___293041);

return statearr_293038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto___293041,c))
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
return (function (state_293061){
var state_val_293062 = (state_293061[(1)]);
if((state_val_293062 === (1))){
var inst_293057 = cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var state_293061__$1 = state_293061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_293061__$1,(2),c,inst_293057);
} else {
if((state_val_293062 === (2))){
var inst_293059 = (state_293061[(2)]);
var state_293061__$1 = state_293061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293061__$1,inst_293059);
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
var statearr_293066 = [null,null,null,null,null,null,null];
(statearr_293066[(0)] = ui$core$get_block_$_state_machine__40145__auto__);

(statearr_293066[(1)] = (1));

return statearr_293066;
});
var ui$core$get_block_$_state_machine__40145__auto____1 = (function (state_293061){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293067){if((e293067 instanceof Object)){
var ex__40148__auto__ = e293067;
var statearr_293068_293070 = state_293061;
(statearr_293068_293070[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293071 = state_293061;
state_293061 = G__293071;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_block_$_state_machine__40145__auto__ = function(state_293061){
switch(arguments.length){
case 0:
return ui$core$get_block_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_block_$_state_machine__40145__auto____1.call(this,state_293061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_block_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_block_$_state_machine__40145__auto____0;
ui$core$get_block_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_block_$_state_machine__40145__auto____1;
return ui$core$get_block_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_293069 = f__40168__auto__.call(null);
(statearr_293069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293069;
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
return (function (state_293087){
var state_val_293088 = (state_293087[(1)]);
if((state_val_293088 === (1))){
var state_293087__$1 = state_293087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_293087__$1,(2),c,result);
} else {
if((state_val_293088 === (2))){
var inst_293085 = (state_293087[(2)]);
var state_293087__$1 = state_293087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293087__$1,inst_293085);
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
var statearr_293092 = [null,null,null,null,null,null,null];
(statearr_293092[(0)] = ui$core$block_number_$_state_machine__40145__auto__);

(statearr_293092[(1)] = (1));

return statearr_293092;
});
var ui$core$block_number_$_state_machine__40145__auto____1 = (function (state_293087){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293093){if((e293093 instanceof Object)){
var ex__40148__auto__ = e293093;
var statearr_293094_293096 = state_293087;
(statearr_293094_293096[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293097 = state_293087;
state_293087 = G__293097;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$block_number_$_state_machine__40145__auto__ = function(state_293087){
switch(arguments.length){
case 0:
return ui$core$block_number_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$block_number_$_state_machine__40145__auto____1.call(this,state_293087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$block_number_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$block_number_$_state_machine__40145__auto____0;
ui$core$block_number_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$block_number_$_state_machine__40145__auto____1;
return ui$core$block_number_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_293095 = f__40168__auto__.call(null);
(statearr_293095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293095;
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
return (function (state_293126){
var state_val_293127 = (state_293126[(1)]);
if((state_val_293127 === (1))){
var inst_293117 = (function (){return ((function (state_val_293127,c__40167__auto__){
return (function (x){
return web3.toAscii(x);
});
;})(state_val_293127,c__40167__auto__))
})();
var inst_293118 = ui.core.query_events.call(null,ui.core.etherean,proposal_block,proposal_block,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({"proposalIndex": proposal_index}));
var state_293126__$1 = (function (){var statearr_293128 = state_293126;
(statearr_293128[(7)] = inst_293117);

return statearr_293128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293126__$1,(2),inst_293118);
} else {
if((state_val_293127 === (2))){
var inst_293117 = (state_293126[(7)]);
var inst_293120 = (state_293126[(2)]);
var inst_293121 = inst_293120.args;
var inst_293122 = inst_293121.message;
var inst_293123 = cljs.core.map.call(null,inst_293117,inst_293122);
var inst_293124 = cljs.core.first.call(null,inst_293123);
var state_293126__$1 = state_293126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293126__$1,inst_293124);
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
var statearr_293132 = [null,null,null,null,null,null,null,null];
(statearr_293132[(0)] = ui$core$get_proposal_description_$_state_machine__40145__auto__);

(statearr_293132[(1)] = (1));

return statearr_293132;
});
var ui$core$get_proposal_description_$_state_machine__40145__auto____1 = (function (state_293126){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293133){if((e293133 instanceof Object)){
var ex__40148__auto__ = e293133;
var statearr_293134_293136 = state_293126;
(statearr_293134_293136[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293137 = state_293126;
state_293126 = G__293137;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_proposal_description_$_state_machine__40145__auto__ = function(state_293126){
switch(arguments.length){
case 0:
return ui$core$get_proposal_description_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_proposal_description_$_state_machine__40145__auto____1.call(this,state_293126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_proposal_description_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_proposal_description_$_state_machine__40145__auto____0;
ui$core$get_proposal_description_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_proposal_description_$_state_machine__40145__auto____1;
return ui$core$get_proposal_description_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293135 = f__40168__auto__.call(null);
(statearr_293135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293135;
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
return (function (state_293142){
var state_val_293143 = (state_293142[(1)]);
if((state_val_293143 === (1))){
var inst_293138 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"useUpProposalVote","useUpProposalVote",352109759));
var state_293142__$1 = state_293142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293142__$1,(2),inst_293138);
} else {
if((state_val_293143 === (2))){
var inst_293140 = (state_293142[(2)]);
var state_293142__$1 = state_293142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293142__$1,inst_293140);
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
var statearr_293147 = [null,null,null,null,null,null,null];
(statearr_293147[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293147[(1)] = (1));

return statearr_293147;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293142){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293148){if((e293148 instanceof Object)){
var ex__40148__auto__ = e293148;
var statearr_293149_293151 = state_293142;
(statearr_293149_293151[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293152 = state_293142;
state_293142 = G__293152;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293142){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293150 = f__40168__auto__.call(null);
(statearr_293150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),(function (env,dispatch_key,params){
var map__293153 = env;
var map__293153__$1 = ((((!((map__293153 == null)))?((((map__293153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293153):map__293153);
var proposal = cljs.core.get.call(null,map__293153__$1,new cljs.core.Keyword(null,"proposal","proposal",142522715));
var proposal_id = cljs.core.get.call(null,map__293153__$1,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_proposal_description.call(null,((proposal[(3)]) | (0)),new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env))], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_293159){
var state_val_293160 = (state_293159[(1)]);
if((state_val_293160 === (1))){
var inst_293155 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_293156 = cljs.core.nth.call(null,inst_293155,(0));
var inst_293157 = ui.core.wei__GT_eth.call(null,inst_293156);
var state_293159__$1 = state_293159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293159__$1,inst_293157);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293164 = [null,null,null,null,null,null,null];
(statearr_293164[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293164[(1)] = (1));

return statearr_293164;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293159){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293165){if((e293165 instanceof Object)){
var ex__40148__auto__ = e293165;
var statearr_293166_293168 = state_293159;
(statearr_293166_293168[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293169 = state_293159;
state_293159 = G__293169;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293159){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293167 = f__40168__auto__.call(null);
(statearr_293167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293167;
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
return (function (state_293174){
var state_val_293175 = (state_293174[(1)]);
if((state_val_293175 === (1))){
var inst_293170 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_293171 = cljs.core.nth.call(null,inst_293170,(1));
var inst_293172 = ui.core.wei__GT_eth.call(null,inst_293171);
var state_293174__$1 = state_293174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293174__$1,inst_293172);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293179 = [null,null,null,null,null,null,null];
(statearr_293179[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293179[(1)] = (1));

return statearr_293179;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293174){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293180){if((e293180 instanceof Object)){
var ex__40148__auto__ = e293180;
var statearr_293181_293183 = state_293174;
(statearr_293181_293183[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293184 = state_293174;
state_293174 = G__293184;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293174){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293182 = f__40168__auto__.call(null);
(statearr_293182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293182;
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
return (function (state_293192){
var state_val_293193 = (state_293192[(1)]);
if((state_val_293193 === (1))){
var inst_293185 = (state_293192[(7)]);
var inst_293185__$1 = new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env);
var state_293192__$1 = (function (){var statearr_293194 = state_293192;
(statearr_293194[(7)] = inst_293185__$1);

return statearr_293194;
})();
if(cljs.core.truth_(inst_293185__$1)){
var statearr_293195_293206 = state_293192__$1;
(statearr_293195_293206[(1)] = (2));

} else {
var statearr_293196_293207 = state_293192__$1;
(statearr_293196_293207[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293193 === (2))){
var inst_293185 = (state_293192[(7)]);
var state_293192__$1 = state_293192;
var statearr_293197_293208 = state_293192__$1;
(statearr_293197_293208[(2)] = inst_293185);

(statearr_293197_293208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293193 === (3))){
var inst_293188 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var state_293192__$1 = state_293192;
var statearr_293198_293209 = state_293192__$1;
(statearr_293198_293209[(2)] = inst_293188);

(statearr_293198_293209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293193 === (4))){
var inst_293190 = (state_293192[(2)]);
var state_293192__$1 = state_293192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293192__$1,inst_293190);
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
var statearr_293202 = [null,null,null,null,null,null,null,null];
(statearr_293202[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293202[(1)] = (1));

return statearr_293202;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293192){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293203){if((e293203 instanceof Object)){
var ex__40148__auto__ = e293203;
var statearr_293204_293210 = state_293192;
(statearr_293204_293210[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293211 = state_293192;
state_293192 = G__293211;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293192){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293205 = f__40168__auto__.call(null);
(statearr_293205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293205;
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
return (function (state_293219){
var state_val_293220 = (state_293219[(1)]);
if((state_val_293220 === (1))){
var inst_293212 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_293213 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132)];
var inst_293214 = [(0),"bar",(10),(5)];
var inst_293215 = cljs.core.PersistentHashMap.fromArrays(inst_293213,inst_293214);
var inst_293216 = [inst_293215];
var inst_293217 = (new cljs.core.PersistentVector(null,1,(5),inst_293212,inst_293216,null));
var state_293219__$1 = state_293219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293219__$1,inst_293217);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293224 = [null,null,null,null,null,null,null];
(statearr_293224[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293224[(1)] = (1));

return statearr_293224;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293219){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293225){if((e293225 instanceof Object)){
var ex__40148__auto__ = e293225;
var statearr_293226_293352 = state_293219;
(statearr_293226_293352[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293353 = state_293219;
state_293219 = G__293353;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293219){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293227 = f__40168__auto__.call(null);
(statearr_293227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})():(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_293305){
var state_val_293306 = (state_293305[(1)]);
if((state_val_293306 === (7))){
var inst_293240 = (state_293305[(2)]);
var state_293305__$1 = state_293305;
var statearr_293307_293354 = state_293305__$1;
(statearr_293307_293354[(2)] = inst_293240);

(statearr_293307_293354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293306 === (1))){
var inst_293230 = (env == null);
var inst_293231 = cljs.core.not.call(null,inst_293230);
var state_293305__$1 = state_293305;
if(inst_293231){
var statearr_293308_293355 = state_293305__$1;
(statearr_293308_293355[(1)] = (2));

} else {
var statearr_293309_293356 = state_293305__$1;
(statearr_293309_293356[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293306 === (4))){
var inst_293243 = (state_293305[(2)]);
var state_293305__$1 = state_293305;
if(cljs.core.truth_(inst_293243)){
var statearr_293310_293357 = state_293305__$1;
(statearr_293310_293357[(1)] = (8));

} else {
var statearr_293311_293358 = state_293305__$1;
(statearr_293311_293358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293306 === (13))){
var inst_293300 = (state_293305[(2)]);
var inst_293301 = cljs.core.sort_by.call(null,cljs.core.first,inst_293300);
var inst_293302 = cljs.core.map.call(null,cljs.core.second,inst_293301);
var inst_293303 = cljs.core.vec.call(null,inst_293302);
var state_293305__$1 = state_293305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293305__$1,inst_293303);
} else {
if((state_val_293306 === (6))){
var state_293305__$1 = state_293305;
var statearr_293312_293359 = state_293305__$1;
(statearr_293312_293359[(2)] = false);

(statearr_293312_293359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293306 === (3))){
var state_293305__$1 = state_293305;
var statearr_293313_293360 = state_293305__$1;
(statearr_293313_293360[(2)] = false);

(statearr_293313_293360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293306 === (12))){
var inst_293249 = (state_293305[(7)]);
var inst_293254 = (state_293305[(8)]);
var inst_293250 = (state_293305[(9)]);
var inst_293248 = (state_293305[(10)]);
var inst_293257 = (state_293305[(2)]);
var inst_293258 = (inst_293257 | (0));
var inst_293259 = cljs.core.async.chan.call(null);
var inst_293292 = cljs.core.async.chan.call(null,(1));
var inst_293293 = (function (){var map__293228 = inst_293248;
var parser = inst_293249;
var query = inst_293250;
var len = inst_293254;
var time = inst_293258;
var proposals = inst_293259;
var c__40167__auto____$1 = inst_293292;
return ((function (map__293228,parser,query,len,time,proposals,c__40167__auto____$1,inst_293249,inst_293254,inst_293250,inst_293248,inst_293257,inst_293258,inst_293259,inst_293292,state_val_293306,c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (map__293228,parser,query,len,time,proposals,c__40167__auto____$1,inst_293249,inst_293254,inst_293250,inst_293248,inst_293257,inst_293258,inst_293259,inst_293292,state_val_293306,c__40167__auto__){
return (function (state_293290){
var state_val_293291 = (state_293290[(1)]);
if((state_val_293291 === (7))){
var inst_293267 = (state_293290[(7)]);
var inst_293267__$1 = (state_293290[(2)]);
var inst_293268 = (inst_293267__$1[(2)]);
var inst_293269 = (inst_293268 | (0));
var inst_293270 = cljs.core._EQ_.call(null,time,inst_293269);
var state_293290__$1 = (function (){var statearr_293314 = state_293290;
(statearr_293314[(7)] = inst_293267__$1);

return statearr_293314;
})();
if(inst_293270){
var statearr_293315_293361 = state_293290__$1;
(statearr_293315_293361[(1)] = (8));

} else {
var statearr_293316_293362 = state_293290__$1;
(statearr_293316_293362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293291 === (1))){
var inst_293260 = (len - (1));
var inst_293261 = inst_293260;
var state_293290__$1 = (function (){var statearr_293317 = state_293290;
(statearr_293317[(8)] = inst_293261);

return statearr_293317;
})();
var statearr_293318_293363 = state_293290__$1;
(statearr_293318_293363[(2)] = null);

(statearr_293318_293363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293291 === (4))){
var inst_293261 = (state_293290[(8)]);
var inst_293265 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),inst_293261);
var state_293290__$1 = state_293290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293290__$1,(7),inst_293265);
} else {
if((state_val_293291 === (6))){
var inst_293285 = (state_293290[(2)]);
var state_293290__$1 = state_293290;
var statearr_293319_293364 = state_293290__$1;
(statearr_293319_293364[(2)] = inst_293285);

(statearr_293319_293364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293291 === (3))){
var inst_293287 = (state_293290[(2)]);
var inst_293288 = cljs.core.async.close_BANG_.call(null,proposals);
var state_293290__$1 = (function (){var statearr_293320 = state_293290;
(statearr_293320[(9)] = inst_293287);

return statearr_293320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293290__$1,inst_293288);
} else {
if((state_val_293291 === (12))){
var inst_293275 = (state_293290[(2)]);
var state_293290__$1 = state_293290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_293290__$1,(11),proposals,inst_293275);
} else {
if((state_val_293291 === (2))){
var inst_293261 = (state_293290[(8)]);
var inst_293263 = (inst_293261 >= (0));
var state_293290__$1 = state_293290;
if(cljs.core.truth_(inst_293263)){
var statearr_293321_293365 = state_293290__$1;
(statearr_293321_293365[(1)] = (4));

} else {
var statearr_293322_293366 = state_293290__$1;
(statearr_293322_293366[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293291 === (11))){
var inst_293261 = (state_293290[(8)]);
var inst_293277 = (state_293290[(2)]);
var inst_293278 = (inst_293261 - (1));
var inst_293261__$1 = inst_293278;
var state_293290__$1 = (function (){var statearr_293323 = state_293290;
(statearr_293323[(8)] = inst_293261__$1);

(statearr_293323[(10)] = inst_293277);

return statearr_293323;
})();
var statearr_293324_293367 = state_293290__$1;
(statearr_293324_293367[(2)] = null);

(statearr_293324_293367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293291 === (9))){
var state_293290__$1 = state_293290;
var statearr_293325_293368 = state_293290__$1;
(statearr_293325_293368[(2)] = null);

(statearr_293325_293368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293291 === (5))){
var state_293290__$1 = state_293290;
var statearr_293326_293369 = state_293290__$1;
(statearr_293326_293369[(2)] = null);

(statearr_293326_293369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293291 === (10))){
var inst_293282 = (state_293290[(2)]);
var state_293290__$1 = state_293290;
var statearr_293327_293370 = state_293290__$1;
(statearr_293327_293370[(2)] = inst_293282);

(statearr_293327_293370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293291 === (8))){
var inst_293261 = (state_293290[(8)]);
var inst_293267 = (state_293290[(7)]);
var inst_293272 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),inst_293267,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155),inst_293261);
var inst_293273 = parser.call(null,inst_293272,query);
var state_293290__$1 = state_293290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293290__$1,(12),inst_293273);
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
});})(map__293228,parser,query,len,time,proposals,c__40167__auto____$1,inst_293249,inst_293254,inst_293250,inst_293248,inst_293257,inst_293258,inst_293259,inst_293292,state_val_293306,c__40167__auto__))
;
return ((function (switch__40144__auto__,map__293228,parser,query,len,time,proposals,c__40167__auto____$1,inst_293249,inst_293254,inst_293250,inst_293248,inst_293257,inst_293258,inst_293259,inst_293292,state_val_293306,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_293331[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293331[(1)] = (1));

return statearr_293331;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293290){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293332){if((e293332 instanceof Object)){
var ex__40148__auto__ = e293332;
var statearr_293333_293371 = state_293290;
(statearr_293333_293371[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293372 = state_293290;
state_293290 = G__293372;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293290){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,map__293228,parser,query,len,time,proposals,c__40167__auto____$1,inst_293249,inst_293254,inst_293250,inst_293248,inst_293257,inst_293258,inst_293259,inst_293292,state_val_293306,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293334 = f__40168__auto__.call(null);
(statearr_293334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto____$1);

return statearr_293334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});
;})(map__293228,parser,query,len,time,proposals,c__40167__auto____$1,inst_293249,inst_293254,inst_293250,inst_293248,inst_293257,inst_293258,inst_293259,inst_293292,state_val_293306,c__40167__auto__))
})();
var inst_293294 = cljs.core.async.impl.dispatch.run.call(null,inst_293293);
var inst_293296 = (function (){var map__293228 = inst_293248;
var parser = inst_293249;
var query = inst_293250;
var len = inst_293254;
var time = inst_293258;
var proposals = inst_293259;
return ((function (map__293228,parser,query,len,time,proposals,inst_293249,inst_293254,inst_293250,inst_293248,inst_293257,inst_293258,inst_293259,inst_293292,inst_293293,inst_293294,state_val_293306,c__40167__auto__){
return (function (acc,p__293295){
var map__293335 = p__293295;
var map__293335__$1 = ((((!((map__293335 == null)))?((((map__293335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293335):map__293335);
var item = map__293335__$1;
var id = cljs.core.get.call(null,map__293335__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.assoc.call(null,acc,id,item);
});
;})(map__293228,parser,query,len,time,proposals,inst_293249,inst_293254,inst_293250,inst_293248,inst_293257,inst_293258,inst_293259,inst_293292,inst_293293,inst_293294,state_val_293306,c__40167__auto__))
})();
var inst_293297 = cljs.core.PersistentHashMap.EMPTY;
var inst_293298 = cljs.core.async.reduce.call(null,inst_293296,inst_293297,inst_293259);
var state_293305__$1 = (function (){var statearr_293337 = state_293305;
(statearr_293337[(11)] = inst_293294);

return statearr_293337;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293305__$1,(13),inst_293298);
} else {
if((state_val_293306 === (2))){
var inst_293233 = env.cljs$lang$protocol_mask$partition0$;
var inst_293234 = (inst_293233 & (64));
var inst_293235 = env.cljs$core$ISeq$;
var inst_293236 = (inst_293234) || (inst_293235);
var state_293305__$1 = state_293305;
if(cljs.core.truth_(inst_293236)){
var statearr_293338_293373 = state_293305__$1;
(statearr_293338_293373[(1)] = (5));

} else {
var statearr_293339_293374 = state_293305__$1;
(statearr_293339_293374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293306 === (11))){
var inst_293253 = (state_293305[(2)]);
var inst_293254 = (inst_293253 | (0));
var inst_293255 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"startOfDay","startOfDay",-1097735630));
var state_293305__$1 = (function (){var statearr_293340 = state_293305;
(statearr_293340[(8)] = inst_293254);

return statearr_293340;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293305__$1,(12),inst_293255);
} else {
if((state_val_293306 === (9))){
var state_293305__$1 = state_293305;
var statearr_293341_293375 = state_293305__$1;
(statearr_293341_293375[(2)] = env);

(statearr_293341_293375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293306 === (5))){
var state_293305__$1 = state_293305;
var statearr_293342_293376 = state_293305__$1;
(statearr_293342_293376[(2)] = true);

(statearr_293342_293376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293306 === (10))){
var inst_293248 = (state_293305[(10)]);
var inst_293248__$1 = (state_293305[(2)]);
var inst_293249 = cljs.core.get.call(null,inst_293248__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_293250 = cljs.core.get.call(null,inst_293248__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_293251 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposalsLength","proposalsLength",1061236851));
var state_293305__$1 = (function (){var statearr_293343 = state_293305;
(statearr_293343[(7)] = inst_293249);

(statearr_293343[(9)] = inst_293250);

(statearr_293343[(10)] = inst_293248__$1);

return statearr_293343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293305__$1,(11),inst_293251);
} else {
if((state_val_293306 === (8))){
var inst_293245 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_293305__$1 = state_293305;
var statearr_293344_293377 = state_293305__$1;
(statearr_293344_293377[(2)] = inst_293245);

(statearr_293344_293377[(1)] = (10));


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
var statearr_293348 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_293348[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293348[(1)] = (1));

return statearr_293348;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293305){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293349){if((e293349 instanceof Object)){
var ex__40148__auto__ = e293349;
var statearr_293350_293378 = state_293305;
(statearr_293350_293378[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293379 = state_293305;
state_293305 = G__293379;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293305){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293351 = f__40168__auto__.call(null);
(statearr_293351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__293380__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__293380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293381__i = 0, G__293381__a = new Array(arguments.length -  0);
while (G__293381__i < G__293381__a.length) {G__293381__a[G__293381__i] = arguments[G__293381__i + 0]; ++G__293381__i;}
  args = new cljs.core.IndexedSeq(G__293381__a,0);
} 
return G__293380__delegate.call(this,args);};
G__293380.cljs$lang$maxFixedArity = 0;
G__293380.cljs$lang$applyTo = (function (arglist__293382){
var args = cljs.core.seq(arglist__293382);
return G__293380__delegate(args);
});
G__293380.cljs$core$IFn$_invoke$arity$variadic = G__293380__delegate;
return G__293380;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),(function() { 
var G__293383__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__293383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293384__i = 0, G__293384__a = new Array(arguments.length -  0);
while (G__293384__i < G__293384__a.length) {G__293384__a[G__293384__i] = arguments[G__293384__i + 0]; ++G__293384__i;}
  args = new cljs.core.IndexedSeq(G__293384__a,0);
} 
return G__293383__delegate.call(this,args);};
G__293383.cljs$lang$maxFixedArity = 0;
G__293383.cljs$lang$applyTo = (function (arglist__293385){
var args = cljs.core.seq(arglist__293385);
return G__293383__delegate(args);
});
G__293383.cljs$core$IFn$_invoke$arity$variadic = G__293383__delegate;
return G__293383;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_293393){
var state_val_293394 = (state_293393[(1)]);
if((state_val_293394 === (1))){
var inst_293386 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_293387 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031),new cljs.core.Keyword("stake","address","stake/address",680266700)];
var inst_293388 = [(0),(1000),"12345"];
var inst_293389 = cljs.core.PersistentHashMap.fromArrays(inst_293387,inst_293388);
var inst_293390 = [inst_293389];
var inst_293391 = (new cljs.core.PersistentVector(null,1,(5),inst_293386,inst_293390,null));
var state_293393__$1 = state_293393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293393__$1,inst_293391);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293398 = [null,null,null,null,null,null,null];
(statearr_293398[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293398[(1)] = (1));

return statearr_293398;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293393){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293399){if((e293399 instanceof Object)){
var ex__40148__auto__ = e293399;
var statearr_293400_293529 = state_293393;
(statearr_293400_293529[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293530 = state_293393;
state_293393 = G__293530;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293393){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293401 = f__40168__auto__.call(null);
(statearr_293401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})():(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_293487){
var state_val_293488 = (state_293487[(1)]);
if((state_val_293488 === (7))){
var inst_293425 = (state_293487[(2)]);
var inst_293426 = cljs.core.range.call(null,inst_293425);
var inst_293427 = cljs.core.seq.call(null,inst_293426);
var inst_293428 = inst_293427;
var inst_293429 = null;
var inst_293430 = (0);
var inst_293431 = (0);
var state_293487__$1 = (function (){var statearr_293489 = state_293487;
(statearr_293489[(7)] = inst_293428);

(statearr_293489[(8)] = inst_293431);

(statearr_293489[(9)] = inst_293429);

(statearr_293489[(10)] = inst_293430);

return statearr_293489;
})();
var statearr_293490_293531 = state_293487__$1;
(statearr_293490_293531[(2)] = null);

(statearr_293490_293531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (20))){
var inst_293477 = (state_293487[(2)]);
var state_293487__$1 = state_293487;
var statearr_293491_293532 = state_293487__$1;
(statearr_293491_293532[(2)] = inst_293477);

(statearr_293491_293532[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (1))){
var inst_293402 = cljs.core.PersistentVector.EMPTY;
var inst_293403 = cljs.core.atom.call(null,inst_293402);
var inst_293404 = ui.core.get_network.call(null);
var state_293487__$1 = (function (){var statearr_293492 = state_293487;
(statearr_293492[(11)] = inst_293403);

return statearr_293492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293487__$1,(2),inst_293404);
} else {
if((state_val_293488 === (4))){
var inst_293414 = alert("Fatal Error: EthereanMind is missing data on the blockchain. Please make sure you have MetaMask set to the \"Ethereum Ropsten Test Network\".\n\n(Other possible reasons for this error may include an ongoing blockchain attack or an outage of the Infuria system.)");
var state_293487__$1 = state_293487;
var statearr_293493_293533 = state_293487__$1;
(statearr_293493_293533[(2)] = inst_293414);

(statearr_293493_293533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (15))){
var inst_293452 = (state_293487[(12)]);
var inst_293454 = cljs.core.chunked_seq_QMARK_.call(null,inst_293452);
var state_293487__$1 = state_293487;
if(inst_293454){
var statearr_293494_293534 = state_293487__$1;
(statearr_293494_293534[(1)] = (18));

} else {
var statearr_293495_293535 = state_293487__$1;
(statearr_293495_293535[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (21))){
var inst_293418 = (state_293487[(13)]);
var inst_293464 = (state_293487[(14)]);
var inst_293464__$1 = (state_293487[(2)]);
var inst_293465 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_293466 = ui.core.chan_call.call(null,inst_293418,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_293464__$1);
var state_293487__$1 = (function (){var statearr_293496 = state_293487;
(statearr_293496[(15)] = inst_293465);

(statearr_293496[(14)] = inst_293464__$1);

return statearr_293496;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293487__$1,(22),inst_293466);
} else {
if((state_val_293488 === (13))){
var inst_293418 = (state_293487[(13)]);
var inst_293439 = (state_293487[(16)]);
var inst_293439__$1 = (state_293487[(2)]);
var inst_293440 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_293441 = ui.core.chan_call.call(null,inst_293418,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_293439__$1);
var state_293487__$1 = (function (){var statearr_293497 = state_293487;
(statearr_293497[(16)] = inst_293439__$1);

(statearr_293497[(17)] = inst_293440);

return statearr_293497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293487__$1,(14),inst_293441);
} else {
if((state_val_293488 === (22))){
var inst_293465 = (state_293487[(15)]);
var inst_293464 = (state_293487[(14)]);
var inst_293452 = (state_293487[(12)]);
var inst_293403 = (state_293487[(11)]);
var inst_293468 = (state_293487[(2)]);
var inst_293469 = (inst_293468[(0)]);
var inst_293470 = ui.core.wei__GT_eth.call(null,inst_293469);
var inst_293471 = [inst_293464,inst_293470];
var inst_293472 = cljs.core.PersistentHashMap.fromArrays(inst_293465,inst_293471);
var inst_293473 = cljs.core.swap_BANG_.call(null,inst_293403,cljs.core.conj,inst_293472);
var inst_293474 = cljs.core.next.call(null,inst_293452);
var inst_293428 = inst_293474;
var inst_293429 = null;
var inst_293430 = (0);
var inst_293431 = (0);
var state_293487__$1 = (function (){var statearr_293498 = state_293487;
(statearr_293498[(7)] = inst_293428);

(statearr_293498[(8)] = inst_293431);

(statearr_293498[(9)] = inst_293429);

(statearr_293498[(10)] = inst_293430);

(statearr_293498[(18)] = inst_293473);

return statearr_293498;
})();
var statearr_293499_293536 = state_293487__$1;
(statearr_293499_293536[(2)] = null);

(statearr_293499_293536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (6))){
var inst_293418 = (state_293487[(13)]);
var inst_293409 = (state_293487[(19)]);
var inst_293417 = (state_293487[(2)]);
var inst_293418__$1 = ui.core.contract.call(null,ui.contract.staking_abi,inst_293409);
var inst_293423 = ui.core.chan_call.call(null,inst_293418__$1,new cljs.core.Keyword(null,"depositLength","depositLength",788194150));
var state_293487__$1 = (function (){var statearr_293500 = state_293487;
(statearr_293500[(13)] = inst_293418__$1);

(statearr_293500[(20)] = inst_293417);

return statearr_293500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293487__$1,(7),inst_293423);
} else {
if((state_val_293488 === (17))){
var inst_293480 = (state_293487[(2)]);
var state_293487__$1 = state_293487;
var statearr_293501_293537 = state_293487__$1;
(statearr_293501_293537[(2)] = inst_293480);

(statearr_293501_293537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (3))){
var inst_293409 = (state_293487[(19)]);
var inst_293406 = (state_293487[(21)]);
var inst_293409__$1 = (state_293487[(2)]);
var inst_293410 = cljs.core._EQ_.call(null,inst_293406,(3));
var inst_293411 = cljs.core._EQ_.call(null,inst_293409__$1,"0x");
var inst_293412 = (inst_293410) && (inst_293411);
var state_293487__$1 = (function (){var statearr_293502 = state_293487;
(statearr_293502[(19)] = inst_293409__$1);

return statearr_293502;
})();
if(cljs.core.truth_(inst_293412)){
var statearr_293503_293538 = state_293487__$1;
(statearr_293503_293538[(1)] = (4));

} else {
var statearr_293504_293539 = state_293487__$1;
(statearr_293504_293539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (12))){
var inst_293482 = (state_293487[(2)]);
var state_293487__$1 = state_293487;
var statearr_293505_293540 = state_293487__$1;
(statearr_293505_293540[(2)] = inst_293482);

(statearr_293505_293540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (2))){
var inst_293406 = (state_293487[(2)]);
var inst_293407 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_293487__$1 = (function (){var statearr_293506 = state_293487;
(statearr_293506[(21)] = inst_293406);

return statearr_293506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293487__$1,(3),inst_293407);
} else {
if((state_val_293488 === (19))){
var inst_293418 = (state_293487[(13)]);
var inst_293452 = (state_293487[(12)]);
var inst_293461 = cljs.core.first.call(null,inst_293452);
var inst_293462 = ui.core.chan_call.call(null,inst_293418,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_293461);
var state_293487__$1 = state_293487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293487__$1,(21),inst_293462);
} else {
if((state_val_293488 === (11))){
var inst_293428 = (state_293487[(7)]);
var inst_293452 = (state_293487[(12)]);
var inst_293452__$1 = cljs.core.seq.call(null,inst_293428);
var state_293487__$1 = (function (){var statearr_293507 = state_293487;
(statearr_293507[(12)] = inst_293452__$1);

return statearr_293507;
})();
if(inst_293452__$1){
var statearr_293508_293541 = state_293487__$1;
(statearr_293508_293541[(1)] = (15));

} else {
var statearr_293509_293542 = state_293487__$1;
(statearr_293509_293542[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (9))){
var inst_293403 = (state_293487[(11)]);
var inst_293484 = (state_293487[(2)]);
var inst_293485 = cljs.core.deref.call(null,inst_293403);
var state_293487__$1 = (function (){var statearr_293513 = state_293487;
(statearr_293513[(22)] = inst_293484);

return statearr_293513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293487__$1,inst_293485);
} else {
if((state_val_293488 === (5))){
var state_293487__$1 = state_293487;
var statearr_293514_293543 = state_293487__$1;
(statearr_293514_293543[(2)] = null);

(statearr_293514_293543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (14))){
var inst_293428 = (state_293487[(7)]);
var inst_293439 = (state_293487[(16)]);
var inst_293431 = (state_293487[(8)]);
var inst_293429 = (state_293487[(9)]);
var inst_293430 = (state_293487[(10)]);
var inst_293440 = (state_293487[(17)]);
var inst_293403 = (state_293487[(11)]);
var inst_293443 = (state_293487[(2)]);
var inst_293444 = (inst_293443[(0)]);
var inst_293445 = ui.core.wei__GT_eth.call(null,inst_293444);
var inst_293446 = [inst_293439,inst_293445];
var inst_293447 = cljs.core.PersistentHashMap.fromArrays(inst_293440,inst_293446);
var inst_293448 = cljs.core.swap_BANG_.call(null,inst_293403,cljs.core.conj,inst_293447);
var inst_293449 = (inst_293431 + (1));
var tmp293510 = inst_293428;
var tmp293511 = inst_293429;
var tmp293512 = inst_293430;
var inst_293428__$1 = tmp293510;
var inst_293429__$1 = tmp293511;
var inst_293430__$1 = tmp293512;
var inst_293431__$1 = inst_293449;
var state_293487__$1 = (function (){var statearr_293515 = state_293487;
(statearr_293515[(7)] = inst_293428__$1);

(statearr_293515[(23)] = inst_293448);

(statearr_293515[(8)] = inst_293431__$1);

(statearr_293515[(9)] = inst_293429__$1);

(statearr_293515[(10)] = inst_293430__$1);

return statearr_293515;
})();
var statearr_293516_293544 = state_293487__$1;
(statearr_293516_293544[(2)] = null);

(statearr_293516_293544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (16))){
var state_293487__$1 = state_293487;
var statearr_293517_293545 = state_293487__$1;
(statearr_293517_293545[(2)] = null);

(statearr_293517_293545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (10))){
var inst_293418 = (state_293487[(13)]);
var inst_293431 = (state_293487[(8)]);
var inst_293429 = (state_293487[(9)]);
var inst_293436 = cljs.core._nth.call(null,inst_293429,inst_293431);
var inst_293437 = ui.core.chan_call.call(null,inst_293418,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_293436);
var state_293487__$1 = state_293487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293487__$1,(13),inst_293437);
} else {
if((state_val_293488 === (18))){
var inst_293452 = (state_293487[(12)]);
var inst_293456 = cljs.core.chunk_first.call(null,inst_293452);
var inst_293457 = cljs.core.chunk_rest.call(null,inst_293452);
var inst_293458 = cljs.core.count.call(null,inst_293456);
var inst_293428 = inst_293457;
var inst_293429 = inst_293456;
var inst_293430 = inst_293458;
var inst_293431 = (0);
var state_293487__$1 = (function (){var statearr_293518 = state_293487;
(statearr_293518[(7)] = inst_293428);

(statearr_293518[(8)] = inst_293431);

(statearr_293518[(9)] = inst_293429);

(statearr_293518[(10)] = inst_293430);

return statearr_293518;
})();
var statearr_293519_293546 = state_293487__$1;
(statearr_293519_293546[(2)] = null);

(statearr_293519_293546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293488 === (8))){
var inst_293431 = (state_293487[(8)]);
var inst_293430 = (state_293487[(10)]);
var inst_293433 = (inst_293431 < inst_293430);
var inst_293434 = inst_293433;
var state_293487__$1 = state_293487;
if(cljs.core.truth_(inst_293434)){
var statearr_293520_293547 = state_293487__$1;
(statearr_293520_293547[(1)] = (10));

} else {
var statearr_293521_293548 = state_293487__$1;
(statearr_293521_293548[(1)] = (11));

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
var statearr_293525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_293525[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293525[(1)] = (1));

return statearr_293525;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293487){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293526){if((e293526 instanceof Object)){
var ex__40148__auto__ = e293526;
var statearr_293527_293549 = state_293487;
(statearr_293527_293549[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293550 = state_293487;
state_293487 = G__293550;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293487){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293528 = f__40168__auto__.call(null);
(statearr_293528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,dispatch_key,params){
var map__293551 = env;
var map__293551__$1 = ((((!((map__293551 == null)))?((((map__293551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293551):map__293551);
var item_id = cljs.core.get.call(null,map__293551__$1,new cljs.core.Keyword(null,"item-id","item-id",-1804511607));
var item = cljs.core.get.call(null,map__293551__$1,new cljs.core.Keyword(null,"item","item",249373802));
var update_time = ((item[(1)]) | (0));
var fun = ((function (map__293551,map__293551__$1,item_id,item,update_time){
return (function (index){
if((update_time === (0))){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time){
return (function (state_293567){
var state_val_293568 = (state_293567[(1)]);
if((state_val_293568 === (1))){
var inst_293553 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_293554 = (index === (0));
var state_293567__$1 = (function (){var statearr_293569 = state_293567;
(statearr_293569[(7)] = inst_293553);

return statearr_293569;
})();
if(cljs.core.truth_(inst_293554)){
var statearr_293570_293627 = state_293567__$1;
(statearr_293570_293627[(1)] = (2));

} else {
var statearr_293571_293628 = state_293567__$1;
(statearr_293571_293628[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293568 === (2))){
var state_293567__$1 = state_293567;
var statearr_293572_293629 = state_293567__$1;
(statearr_293572_293629[(2)] = (0));

(statearr_293572_293629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293568 === (3))){
var state_293567__$1 = state_293567;
var statearr_293573_293630 = state_293567__$1;
(statearr_293573_293630[(2)] = 1.0E-4);

(statearr_293573_293630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293568 === (4))){
var inst_293558 = (state_293567[(2)]);
var inst_293559 = (index === (0));
var state_293567__$1 = (function (){var statearr_293574 = state_293567;
(statearr_293574[(8)] = inst_293558);

return statearr_293574;
})();
if(cljs.core.truth_(inst_293559)){
var statearr_293575_293631 = state_293567__$1;
(statearr_293575_293631[(1)] = (5));

} else {
var statearr_293576_293632 = state_293567__$1;
(statearr_293576_293632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293568 === (5))){
var state_293567__$1 = state_293567;
var statearr_293577_293633 = state_293567__$1;
(statearr_293577_293633[(2)] = (0));

(statearr_293577_293633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293568 === (6))){
var state_293567__$1 = state_293567;
var statearr_293578_293634 = state_293567__$1;
(statearr_293578_293634[(2)] = 1.0E-4);

(statearr_293578_293634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293568 === (7))){
var inst_293558 = (state_293567[(8)]);
var inst_293553 = (state_293567[(7)]);
var inst_293563 = (state_293567[(2)]);
var inst_293564 = [inst_293558,inst_293563];
var inst_293565 = cljs.core.PersistentHashMap.fromArrays(inst_293553,inst_293564);
var state_293567__$1 = state_293567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293567__$1,inst_293565);
} else {
return null;
}
}
}
}
}
}
}
});})(c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293582 = [null,null,null,null,null,null,null,null,null];
(statearr_293582[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293582[(1)] = (1));

return statearr_293582;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293567){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293583){if((e293583 instanceof Object)){
var ex__40148__auto__ = e293583;
var statearr_293584_293635 = state_293567;
(statearr_293584_293635[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293636 = state_293567;
state_293567 = G__293636;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293567){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time))
})();
var state__40169__auto__ = (function (){var statearr_293585 = f__40168__auto__.call(null);
(statearr_293585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time))
);

return c__40167__auto__;
} else {
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time){
return (function (state_293597){
var state_val_293598 = (state_293597[(1)]);
if((state_val_293598 === (1))){
var inst_293586 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"itemVoteInfo","itemVoteInfo",-383659653),item_id,index);
var state_293597__$1 = state_293597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293597__$1,(2),inst_293586);
} else {
if((state_val_293598 === (2))){
var inst_293588 = (state_293597[(2)]);
var inst_293589 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_293590 = (inst_293588[(0)]);
var inst_293591 = ui.core.wei__GT_eth.call(null,inst_293590);
var inst_293592 = (inst_293588[(1)]);
var inst_293593 = ui.core.wei__GT_eth.call(null,inst_293592);
var inst_293594 = [inst_293591,inst_293593];
var inst_293595 = cljs.core.PersistentHashMap.fromArrays(inst_293589,inst_293594);
var state_293597__$1 = state_293597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293597__$1,inst_293595);
} else {
return null;
}
}
});})(c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293602 = [null,null,null,null,null,null,null];
(statearr_293602[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293602[(1)] = (1));

return statearr_293602;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293597){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293603){if((e293603 instanceof Object)){
var ex__40148__auto__ = e293603;
var statearr_293604_293637 = state_293597;
(statearr_293604_293637[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293638 = state_293597;
state_293597 = G__293638;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293597){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time))
})();
var state__40169__auto__ = (function (){var statearr_293605 = f__40168__auto__.call(null);
(statearr_293605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time))
);

return c__40167__auto__;
}
});})(map__293551,map__293551__$1,item_id,item,update_time))
;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time,fun){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time,fun){
return (function (state_293616){
var state_val_293617 = (state_293616[(1)]);
if((state_val_293617 === (1))){
var inst_293606 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_293607 = fun.call(null,(0));
var state_293616__$1 = (function (){var statearr_293618 = state_293616;
(statearr_293618[(7)] = inst_293606);

return statearr_293618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293616__$1,(2),inst_293607);
} else {
if((state_val_293617 === (2))){
var inst_293609 = (state_293616[(2)]);
var inst_293610 = fun.call(null,(1));
var state_293616__$1 = (function (){var statearr_293619 = state_293616;
(statearr_293619[(8)] = inst_293609);

return statearr_293619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293616__$1,(3),inst_293610);
} else {
if((state_val_293617 === (3))){
var inst_293609 = (state_293616[(8)]);
var inst_293606 = (state_293616[(7)]);
var inst_293612 = (state_293616[(2)]);
var inst_293613 = [inst_293609,inst_293612];
var inst_293614 = (new cljs.core.PersistentVector(null,2,(5),inst_293606,inst_293613,null));
var state_293616__$1 = state_293616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293616__$1,inst_293614);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time,fun))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time,fun){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293623 = [null,null,null,null,null,null,null,null,null];
(statearr_293623[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293623[(1)] = (1));

return statearr_293623;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293616){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293624){if((e293624 instanceof Object)){
var ex__40148__auto__ = e293624;
var statearr_293625_293639 = state_293616;
(statearr_293625_293639[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293640 = state_293616;
state_293616 = G__293640;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293616){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time,fun))
})();
var state__40169__auto__ = (function (){var statearr_293626 = f__40168__auto__.call(null);
(statearr_293626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__293551,map__293551__$1,item_id,item,update_time,fun))
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
return (function (state_293657){
var state_val_293658 = (state_293657[(1)]);
if((state_val_293658 === (1))){
var inst_293641 = (proposal_index === (0));
var state_293657__$1 = state_293657;
if(cljs.core.truth_(inst_293641)){
var statearr_293659_293670 = state_293657__$1;
(statearr_293659_293670[(1)] = (2));

} else {
var statearr_293660_293671 = state_293657__$1;
(statearr_293660_293671[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293658 === (2))){
var inst_293643 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var inst_293644 = ui.core.starting_items.call(null,inst_293643);
var state_293657__$1 = state_293657;
var statearr_293661_293672 = state_293657__$1;
(statearr_293661_293672[(2)] = inst_293644);

(statearr_293661_293672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293658 === (3))){
var inst_293646 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),proposal_index);
var state_293657__$1 = state_293657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293657__$1,(5),inst_293646);
} else {
if((state_val_293658 === (4))){
var inst_293655 = (state_293657[(2)]);
var state_293657__$1 = state_293657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293657__$1,inst_293655);
} else {
if((state_val_293658 === (5))){
var inst_293648 = (state_293657[(2)]);
var inst_293649 = (inst_293648[(3)]);
var inst_293650 = (inst_293649 | (0));
var inst_293651 = ui.core.get_proposal_description.call(null,inst_293650,proposal_index);
var state_293657__$1 = state_293657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293657__$1,(6),inst_293651);
} else {
if((state_val_293658 === (6))){
var inst_293653 = (state_293657[(2)]);
var state_293657__$1 = state_293657;
var statearr_293662_293673 = state_293657__$1;
(statearr_293662_293673[(2)] = inst_293653);

(statearr_293662_293673[(1)] = (4));


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
var statearr_293666 = [null,null,null,null,null,null,null];
(statearr_293666[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293666[(1)] = (1));

return statearr_293666;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293657){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293667){if((e293667 instanceof Object)){
var ex__40148__auto__ = e293667;
var statearr_293668_293674 = state_293657;
(statearr_293668_293674[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293675 = state_293657;
state_293657 = G__293675;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293657){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,proposal_index,update_time))
})();
var state__40169__auto__ = (function (){var statearr_293669 = f__40168__auto__.call(null);
(statearr_293669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293669;
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
return (function (state_293758){
var state_val_293759 = (state_293758[(1)]);
if((state_val_293759 === (7))){
var inst_293688 = (state_293758[(2)]);
var state_293758__$1 = state_293758;
var statearr_293760_293804 = state_293758__$1;
(statearr_293760_293804[(2)] = inst_293688);

(statearr_293760_293804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (20))){
var inst_293751 = (state_293758[(2)]);
var state_293758__$1 = state_293758;
var statearr_293761_293805 = state_293758__$1;
(statearr_293761_293805[(2)] = inst_293751);

(statearr_293761_293805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (1))){
var inst_293678 = (env == null);
var inst_293679 = cljs.core.not.call(null,inst_293678);
var state_293758__$1 = state_293758;
if(inst_293679){
var statearr_293762_293806 = state_293758__$1;
(statearr_293762_293806[(1)] = (2));

} else {
var statearr_293763_293807 = state_293758__$1;
(statearr_293763_293807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (24))){
var inst_293698 = (state_293758[(7)]);
var inst_293736 = (state_293758[(8)]);
var inst_293697 = (state_293758[(9)]);
var inst_293739 = (state_293758[(2)]);
var inst_293740 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_293739,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_293736);
var inst_293741 = inst_293697.call(null,inst_293740,inst_293698);
var state_293758__$1 = state_293758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293758__$1,(25),inst_293741);
} else {
if((state_val_293759 === (4))){
var inst_293691 = (state_293758[(2)]);
var state_293758__$1 = state_293758;
if(cljs.core.truth_(inst_293691)){
var statearr_293764_293808 = state_293758__$1;
(statearr_293764_293808[(1)] = (8));

} else {
var statearr_293765_293809 = state_293758__$1;
(statearr_293765_293809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (15))){
var inst_293753 = (state_293758[(2)]);
var state_293758__$1 = state_293758;
var statearr_293766_293810 = state_293758__$1;
(statearr_293766_293810[(2)] = inst_293753);

(statearr_293766_293810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (21))){
var inst_293727 = (state_293758[(10)]);
var inst_293731 = cljs.core.chunk_first.call(null,inst_293727);
var inst_293732 = cljs.core.chunk_rest.call(null,inst_293727);
var inst_293733 = cljs.core.count.call(null,inst_293731);
var inst_293707 = inst_293732;
var inst_293708 = inst_293731;
var inst_293709 = inst_293733;
var inst_293710 = (0);
var state_293758__$1 = (function (){var statearr_293767 = state_293758;
(statearr_293767[(11)] = inst_293708);

(statearr_293767[(12)] = inst_293710);

(statearr_293767[(13)] = inst_293709);

(statearr_293767[(14)] = inst_293707);

return statearr_293767;
})();
var statearr_293768_293811 = state_293758__$1;
(statearr_293768_293811[(2)] = null);

(statearr_293768_293811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (13))){
var inst_293715 = (state_293758[(15)]);
var inst_293708 = (state_293758[(11)]);
var inst_293710 = (state_293758[(12)]);
var inst_293715__$1 = cljs.core._nth.call(null,inst_293708,inst_293710);
var inst_293716 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_293715__$1);
var state_293758__$1 = (function (){var statearr_293769 = state_293758;
(statearr_293769[(15)] = inst_293715__$1);

return statearr_293769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293758__$1,(16),inst_293716);
} else {
if((state_val_293759 === (22))){
var inst_293727 = (state_293758[(10)]);
var inst_293736 = (state_293758[(8)]);
var inst_293736__$1 = cljs.core.first.call(null,inst_293727);
var inst_293737 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_293736__$1);
var state_293758__$1 = (function (){var statearr_293770 = state_293758;
(statearr_293770[(8)] = inst_293736__$1);

return statearr_293770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293758__$1,(24),inst_293737);
} else {
if((state_val_293759 === (6))){
var state_293758__$1 = state_293758;
var statearr_293774_293812 = state_293758__$1;
(statearr_293774_293812[(2)] = false);

(statearr_293774_293812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (25))){
var inst_293727 = (state_293758[(10)]);
var inst_293700 = (state_293758[(16)]);
var inst_293736 = (state_293758[(8)]);
var inst_293743 = (state_293758[(2)]);
var inst_293744 = cljs.core.swap_BANG_.call(null,inst_293700,cljs.core.assoc,inst_293736,inst_293743);
var inst_293745 = cljs.core.next.call(null,inst_293727);
var inst_293707 = inst_293745;
var inst_293708 = null;
var inst_293709 = (0);
var inst_293710 = (0);
var state_293758__$1 = (function (){var statearr_293775 = state_293758;
(statearr_293775[(11)] = inst_293708);

(statearr_293775[(12)] = inst_293710);

(statearr_293775[(13)] = inst_293709);

(statearr_293775[(17)] = inst_293744);

(statearr_293775[(14)] = inst_293707);

return statearr_293775;
})();
var statearr_293776_293813 = state_293758__$1;
(statearr_293776_293813[(2)] = null);

(statearr_293776_293813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (17))){
var inst_293715 = (state_293758[(15)]);
var inst_293700 = (state_293758[(16)]);
var inst_293708 = (state_293758[(11)]);
var inst_293710 = (state_293758[(12)]);
var inst_293709 = (state_293758[(13)]);
var inst_293707 = (state_293758[(14)]);
var inst_293722 = (state_293758[(2)]);
var inst_293723 = cljs.core.swap_BANG_.call(null,inst_293700,cljs.core.assoc,inst_293715,inst_293722);
var inst_293724 = (inst_293710 + (1));
var tmp293771 = inst_293708;
var tmp293772 = inst_293709;
var tmp293773 = inst_293707;
var inst_293707__$1 = tmp293773;
var inst_293708__$1 = tmp293771;
var inst_293709__$1 = tmp293772;
var inst_293710__$1 = inst_293724;
var state_293758__$1 = (function (){var statearr_293777 = state_293758;
(statearr_293777[(18)] = inst_293723);

(statearr_293777[(11)] = inst_293708__$1);

(statearr_293777[(12)] = inst_293710__$1);

(statearr_293777[(13)] = inst_293709__$1);

(statearr_293777[(14)] = inst_293707__$1);

return statearr_293777;
})();
var statearr_293778_293814 = state_293758__$1;
(statearr_293778_293814[(2)] = null);

(statearr_293778_293814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (3))){
var state_293758__$1 = state_293758;
var statearr_293779_293815 = state_293758__$1;
(statearr_293779_293815[(2)] = false);

(statearr_293779_293815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (12))){
var inst_293700 = (state_293758[(16)]);
var inst_293755 = (state_293758[(2)]);
var inst_293756 = cljs.core.deref.call(null,inst_293700);
var state_293758__$1 = (function (){var statearr_293780 = state_293758;
(statearr_293780[(19)] = inst_293755);

return statearr_293780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293758__$1,inst_293756);
} else {
if((state_val_293759 === (2))){
var inst_293681 = env.cljs$lang$protocol_mask$partition0$;
var inst_293682 = (inst_293681 & (64));
var inst_293683 = env.cljs$core$ISeq$;
var inst_293684 = (inst_293682) || (inst_293683);
var state_293758__$1 = state_293758;
if(cljs.core.truth_(inst_293684)){
var statearr_293781_293816 = state_293758__$1;
(statearr_293781_293816[(1)] = (5));

} else {
var statearr_293782_293817 = state_293758__$1;
(statearr_293782_293817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (23))){
var inst_293748 = (state_293758[(2)]);
var state_293758__$1 = state_293758;
var statearr_293783_293818 = state_293758__$1;
(statearr_293783_293818[(2)] = inst_293748);

(statearr_293783_293818[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (19))){
var state_293758__$1 = state_293758;
var statearr_293784_293819 = state_293758__$1;
(statearr_293784_293819[(2)] = null);

(statearr_293784_293819[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (11))){
var inst_293710 = (state_293758[(12)]);
var inst_293709 = (state_293758[(13)]);
var inst_293712 = (inst_293710 < inst_293709);
var inst_293713 = inst_293712;
var state_293758__$1 = state_293758;
if(cljs.core.truth_(inst_293713)){
var statearr_293785_293820 = state_293758__$1;
(statearr_293785_293820[(1)] = (13));

} else {
var statearr_293786_293821 = state_293758__$1;
(statearr_293786_293821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (9))){
var state_293758__$1 = state_293758;
var statearr_293787_293822 = state_293758__$1;
(statearr_293787_293822[(2)] = env);

(statearr_293787_293822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (5))){
var state_293758__$1 = state_293758;
var statearr_293788_293823 = state_293758__$1;
(statearr_293788_293823[(2)] = true);

(statearr_293788_293823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (14))){
var inst_293727 = (state_293758[(10)]);
var inst_293707 = (state_293758[(14)]);
var inst_293727__$1 = cljs.core.seq.call(null,inst_293707);
var state_293758__$1 = (function (){var statearr_293789 = state_293758;
(statearr_293789[(10)] = inst_293727__$1);

return statearr_293789;
})();
if(inst_293727__$1){
var statearr_293790_293824 = state_293758__$1;
(statearr_293790_293824[(1)] = (18));

} else {
var statearr_293791_293825 = state_293758__$1;
(statearr_293791_293825[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (16))){
var inst_293715 = (state_293758[(15)]);
var inst_293698 = (state_293758[(7)]);
var inst_293697 = (state_293758[(9)]);
var inst_293718 = (state_293758[(2)]);
var inst_293719 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_293718,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_293715);
var inst_293720 = inst_293697.call(null,inst_293719,inst_293698);
var state_293758__$1 = state_293758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293758__$1,(17),inst_293720);
} else {
if((state_val_293759 === (10))){
var inst_293696 = (state_293758[(2)]);
var inst_293697 = cljs.core.get.call(null,inst_293696,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_293698 = cljs.core.get.call(null,inst_293696,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_293699 = cljs.core.PersistentVector.EMPTY;
var inst_293700 = cljs.core.atom.call(null,inst_293699);
var inst_293705 = cljs.core.range.call(null,ui.core.max_items);
var inst_293706 = cljs.core.seq.call(null,inst_293705);
var inst_293707 = inst_293706;
var inst_293708 = null;
var inst_293709 = (0);
var inst_293710 = (0);
var state_293758__$1 = (function (){var statearr_293792 = state_293758;
(statearr_293792[(16)] = inst_293700);

(statearr_293792[(11)] = inst_293708);

(statearr_293792[(12)] = inst_293710);

(statearr_293792[(7)] = inst_293698);

(statearr_293792[(9)] = inst_293697);

(statearr_293792[(13)] = inst_293709);

(statearr_293792[(14)] = inst_293707);

return statearr_293792;
})();
var statearr_293793_293826 = state_293758__$1;
(statearr_293793_293826[(2)] = null);

(statearr_293793_293826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (18))){
var inst_293727 = (state_293758[(10)]);
var inst_293729 = cljs.core.chunked_seq_QMARK_.call(null,inst_293727);
var state_293758__$1 = state_293758;
if(inst_293729){
var statearr_293794_293827 = state_293758__$1;
(statearr_293794_293827[(1)] = (21));

} else {
var statearr_293795_293828 = state_293758__$1;
(statearr_293795_293828[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_293759 === (8))){
var inst_293693 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_293758__$1 = state_293758;
var statearr_293796_293829 = state_293758__$1;
(statearr_293796_293829[(2)] = inst_293693);

(statearr_293796_293829[(1)] = (10));


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
var statearr_293800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_293800[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293800[(1)] = (1));

return statearr_293800;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293758){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293801){if((e293801 instanceof Object)){
var ex__40148__auto__ = e293801;
var statearr_293802_293830 = state_293758;
(statearr_293802_293830[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293831 = state_293758;
state_293758 = G__293831;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293758){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293803 = f__40168__auto__.call(null);
(statearr_293803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__293832__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__293832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293833__i = 0, G__293833__a = new Array(arguments.length -  0);
while (G__293833__i < G__293833__a.length) {G__293833__a[G__293833__i] = arguments[G__293833__i + 0]; ++G__293833__i;}
  args = new cljs.core.IndexedSeq(G__293833__a,0);
} 
return G__293832__delegate.call(this,args);};
G__293832.cljs$lang$maxFixedArity = 0;
G__293832.cljs$lang$applyTo = (function (arglist__293834){
var args = cljs.core.seq(arglist__293834);
return G__293832__delegate(args);
});
G__293832.cljs$core$IFn$_invoke$arity$variadic = G__293832__delegate;
return G__293832;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__293835__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__293835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293836__i = 0, G__293836__a = new Array(arguments.length -  0);
while (G__293836__i < G__293836__a.length) {G__293836__a[G__293836__i] = arguments[G__293836__i + 0]; ++G__293836__i;}
  args = new cljs.core.IndexedSeq(G__293836__a,0);
} 
return G__293835__delegate.call(this,args);};
G__293835.cljs$lang$maxFixedArity = 0;
G__293835.cljs$lang$applyTo = (function (arglist__293837){
var args = cljs.core.seq(arglist__293837);
return G__293835__delegate(args);
});
G__293835.cljs$core$IFn$_invoke$arity$variadic = G__293835__delegate;
return G__293835;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__293838__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__293838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293839__i = 0, G__293839__a = new Array(arguments.length -  0);
while (G__293839__i < G__293839__a.length) {G__293839__a[G__293839__i] = arguments[G__293839__i + 0]; ++G__293839__i;}
  args = new cljs.core.IndexedSeq(G__293839__a,0);
} 
return G__293838__delegate.call(this,args);};
G__293838.cljs$lang$maxFixedArity = 0;
G__293838.cljs$lang$applyTo = (function (arglist__293840){
var args = cljs.core.seq(arglist__293840);
return G__293838__delegate(args);
});
G__293838.cljs$core$IFn$_invoke$arity$variadic = G__293838__delegate;
return G__293838;
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
var map__293841 = params;
var map__293841__$1 = ((((!((map__293841 == null)))?((((map__293841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293841):map__293841);
var id = cljs.core.get.call(null,map__293841__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__293841__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__293841,map__293841__$1,id,description){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__293841,map__293841__$1,id,description){
return (function (state_293870){
var state_val_293871 = (state_293870[(1)]);
if((state_val_293871 === (1))){
var inst_293843 = ui.core.block_number.call(null);
var state_293870__$1 = state_293870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293870__$1,(2),inst_293843);
} else {
if((state_val_293871 === (2))){
var inst_293845 = (state_293870[(2)]);
var inst_293846 = ui.core.format_message.call(null,description);
var inst_293847 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"addProposal","addProposal",-2108750592),inst_293846);
var state_293870__$1 = (function (){var statearr_293872 = state_293870;
(statearr_293872[(7)] = inst_293845);

return statearr_293872;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293870__$1,(3),inst_293847);
} else {
if((state_val_293871 === (3))){
var inst_293845 = (state_293870[(7)]);
var inst_293849 = (state_293870[(2)]);
var inst_293850 = ui.core.get_historical_events.call(null,ui.core.etherean,inst_293845,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({}));
var state_293870__$1 = (function (){var statearr_293873 = state_293870;
(statearr_293873[(8)] = inst_293849);

return statearr_293873;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293870__$1,(4),inst_293850);
} else {
if((state_val_293871 === (4))){
var inst_293852 = (state_293870[(2)]);
var inst_293853 = cljs.core.first.call(null,inst_293852);
var inst_293854 = [new cljs.core.Keyword(null,"tempids","tempids",1767509089)];
var inst_293855 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_293856 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),id];
var inst_293857 = (new cljs.core.PersistentVector(null,2,(5),inst_293855,inst_293856,null));
var inst_293858 = [inst_293857];
var inst_293859 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_293860 = inst_293853.args;
var inst_293861 = inst_293860.proposalIndex;
var inst_293862 = (inst_293861 | (0));
var inst_293863 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),inst_293862];
var inst_293864 = (new cljs.core.PersistentVector(null,2,(5),inst_293859,inst_293863,null));
var inst_293865 = [inst_293864];
var inst_293866 = cljs.core.PersistentHashMap.fromArrays(inst_293858,inst_293865);
var inst_293867 = [inst_293866];
var inst_293868 = cljs.core.PersistentHashMap.fromArrays(inst_293854,inst_293867);
var state_293870__$1 = state_293870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293870__$1,inst_293868);
} else {
return null;
}
}
}
}
});})(c__40167__auto__,map__293841,map__293841__$1,id,description))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__293841,map__293841__$1,id,description){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293877 = [null,null,null,null,null,null,null,null,null];
(statearr_293877[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293877[(1)] = (1));

return statearr_293877;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293870){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293878){if((e293878 instanceof Object)){
var ex__40148__auto__ = e293878;
var statearr_293879_293881 = state_293870;
(statearr_293879_293881[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293882 = state_293870;
state_293870 = G__293882;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293870){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__293841,map__293841__$1,id,description))
})();
var state__40169__auto__ = (function (){var statearr_293880 = f__40168__auto__.call(null);
(statearr_293880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__293841,map__293841__$1,id,description))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__293883 = params;
var map__293883__$1 = ((((!((map__293883 == null)))?((((map__293883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293883):map__293883);
var id = cljs.core.get.call(null,map__293883__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__293883__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__293883,map__293883__$1,id,direction){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__293883,map__293883__$1,id,direction){
return (function (state_293890){
var state_val_293891 = (state_293890[(1)]);
if((state_val_293891 === (1))){
var inst_293885 = cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113));
var inst_293886 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnProposal","voteOnProposal",-1101682438),id,inst_293885);
var state_293890__$1 = state_293890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293890__$1,(2),inst_293886);
} else {
if((state_val_293891 === (2))){
var inst_293888 = (state_293890[(2)]);
var state_293890__$1 = state_293890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293890__$1,inst_293888);
} else {
return null;
}
}
});})(c__40167__auto__,map__293883,map__293883__$1,id,direction))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__293883,map__293883__$1,id,direction){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293895 = [null,null,null,null,null,null,null];
(statearr_293895[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293895[(1)] = (1));

return statearr_293895;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293890){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293896){if((e293896 instanceof Object)){
var ex__40148__auto__ = e293896;
var statearr_293897_293899 = state_293890;
(statearr_293897_293899[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293900 = state_293890;
state_293890 = G__293900;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293890){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__293883,map__293883__$1,id,direction))
})();
var state__40169__auto__ = (function (){var statearr_293898 = f__40168__auto__.call(null);
(statearr_293898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__293883,map__293883__$1,id,direction))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("item","vote","item/vote",-842849665,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__293901 = params;
var map__293901__$1 = ((((!((map__293901 == null)))?((((map__293901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293901):map__293901);
var id = cljs.core.get.call(null,map__293901__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__293901__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__293901,map__293901__$1,id,direction){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__293901,map__293901__$1,id,direction){
return (function (state_293907){
var state_val_293908 = (state_293907[(1)]);
if((state_val_293908 === (1))){
var inst_293903 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnItem","voteOnItem",903210165),id,direction);
var state_293907__$1 = state_293907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293907__$1,(2),inst_293903);
} else {
if((state_val_293908 === (2))){
var inst_293905 = (state_293907[(2)]);
var state_293907__$1 = state_293907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293907__$1,inst_293905);
} else {
return null;
}
}
});})(c__40167__auto__,map__293901,map__293901__$1,id,direction))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__293901,map__293901__$1,id,direction){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293912 = [null,null,null,null,null,null,null];
(statearr_293912[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293912[(1)] = (1));

return statearr_293912;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293907){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293913){if((e293913 instanceof Object)){
var ex__40148__auto__ = e293913;
var statearr_293914_293916 = state_293907;
(statearr_293914_293916[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293917 = state_293907;
state_293907 = G__293917;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293907){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__293901,map__293901__$1,id,direction))
})();
var state__40169__auto__ = (function (){var statearr_293915 = f__40168__auto__.call(null);
(statearr_293915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__293901,map__293901__$1,id,direction))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__293918 = params;
var map__293918__$1 = ((((!((map__293918 == null)))?((((map__293918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293918):map__293918);
var value = cljs.core.get.call(null,map__293918__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__293918,map__293918__$1,value){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__293918,map__293918__$1,value){
return (function (state_293932){
var state_val_293933 = (state_293932[(1)]);
if((state_val_293933 === (1))){
var inst_293920 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_293932__$1 = state_293932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293932__$1,(2),inst_293920);
} else {
if((state_val_293933 === (2))){
var inst_293922 = (state_293932[(2)]);
var inst_293923 = ui.core.contract.call(null,ui.contract.staking_abi,inst_293922);
var inst_293924 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_293925 = web3.toWei(value,"ether");
var inst_293926 = [inst_293925];
var inst_293927 = cljs.core.PersistentHashMap.fromArrays(inst_293924,inst_293926);
var inst_293928 = ui.core.chan_transact.call(null,inst_293923,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),inst_293927);
var state_293932__$1 = state_293932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293932__$1,(3),inst_293928);
} else {
if((state_val_293933 === (3))){
var inst_293930 = (state_293932[(2)]);
var state_293932__$1 = state_293932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293932__$1,inst_293930);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__293918,map__293918__$1,value))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__293918,map__293918__$1,value){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_293937 = [null,null,null,null,null,null,null];
(statearr_293937[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293937[(1)] = (1));

return statearr_293937;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293932){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293938){if((e293938 instanceof Object)){
var ex__40148__auto__ = e293938;
var statearr_293939_293941 = state_293932;
(statearr_293939_293941[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293942 = state_293932;
state_293932 = G__293942;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293932){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__293918,map__293918__$1,value))
})();
var state__40169__auto__ = (function (){var statearr_293940 = f__40168__auto__.call(null);
(statearr_293940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__293918,map__293918__$1,value))
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
return (function (state_293952){
var state_val_293953 = (state_293952[(1)]);
if((state_val_293953 === (1))){
var inst_293943 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"debugTime","debugTime",-1487871746));
var state_293952__$1 = state_293952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293952__$1,(2),inst_293943);
} else {
if((state_val_293953 === (2))){
var inst_293945 = (state_293952[(2)]);
var inst_293946 = (inst_293945 | (0));
var inst_293947 = (inst_293946 + (86400));
var inst_293948 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"setDebugTime","setDebugTime",1278197802),inst_293947);
var state_293952__$1 = state_293952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293952__$1,(3),inst_293948);
} else {
if((state_val_293953 === (3))){
var inst_293950 = (state_293952[(2)]);
var state_293952__$1 = state_293952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293952__$1,inst_293950);
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
var statearr_293957 = [null,null,null,null,null,null,null];
(statearr_293957[(0)] = ui$core$state_machine__40145__auto__);

(statearr_293957[(1)] = (1));

return statearr_293957;
});
var ui$core$state_machine__40145__auto____1 = (function (state_293952){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293958){if((e293958 instanceof Object)){
var ex__40148__auto__ = e293958;
var statearr_293959_293961 = state_293952;
(statearr_293959_293961[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__293962 = state_293952;
state_293952 = G__293962;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_293952){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_293952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_293960 = f__40168__auto__.call(null);
(statearr_293960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293960;
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
ui.core.blockchain_send = (function ui$core$blockchain_send(p__293963,cb){
var map__293982 = p__293963;
var map__293982__$1 = ((((!((map__293982 == null)))?((((map__293982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293982):map__293982);
var remote = cljs.core.get.call(null,map__293982__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__293982,map__293982__$1,remote){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__293982,map__293982__$1,remote){
return (function (state_293991){
var state_val_293992 = (state_293991[(1)]);
if((state_val_293992 === (1))){
var inst_293984 = cljs.core.PersistentHashMap.EMPTY;
var inst_293985 = ui.core.process_remote_query.call(null,remote);
var inst_293986 = ui.core.server_parser.call(null,inst_293984,inst_293985);
var state_293991__$1 = state_293991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_293991__$1,(2),inst_293986);
} else {
if((state_val_293992 === (2))){
var inst_293988 = (state_293991[(2)]);
var inst_293989 = cb.call(null,inst_293988);
var state_293991__$1 = state_293991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_293991__$1,inst_293989);
} else {
return null;
}
}
});})(c__40167__auto__,map__293982,map__293982__$1,remote))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__293982,map__293982__$1,remote){
return (function() {
var ui$core$blockchain_send_$_state_machine__40145__auto__ = null;
var ui$core$blockchain_send_$_state_machine__40145__auto____0 = (function (){
var statearr_293996 = [null,null,null,null,null,null,null];
(statearr_293996[(0)] = ui$core$blockchain_send_$_state_machine__40145__auto__);

(statearr_293996[(1)] = (1));

return statearr_293996;
});
var ui$core$blockchain_send_$_state_machine__40145__auto____1 = (function (state_293991){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_293991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e293997){if((e293997 instanceof Object)){
var ex__40148__auto__ = e293997;
var statearr_293998_294000 = state_293991;
(statearr_293998_294000[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_293991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e293997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__294001 = state_293991;
state_293991 = G__294001;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$blockchain_send_$_state_machine__40145__auto__ = function(state_293991){
switch(arguments.length){
case 0:
return ui$core$blockchain_send_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$blockchain_send_$_state_machine__40145__auto____1.call(this,state_293991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$blockchain_send_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$blockchain_send_$_state_machine__40145__auto____0;
ui$core$blockchain_send_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$blockchain_send_$_state_machine__40145__auto____1;
return ui$core$blockchain_send_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__293982,map__293982__$1,remote))
})();
var state__40169__auto__ = (function (){var statearr_293999 = f__40168__auto__.call(null);
(statearr_293999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_293999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__293982,map__293982__$1,remote))
);

return c__40167__auto__;
});
ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),ui.core.blockchain_send,new cljs.core.Keyword(null,"merge","merge",-1804319409),ui.core.my_merge,new cljs.core.Keyword(null,"migrate","migrate",-207110743),ui.core.migrate,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),ui.core.my_merge_tree,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
om.next.add_root_BANG_.call(null,ui.core.reconciler,ui.core.Root,goog.dom.getElement("app"));
ui.core.my_toaster = blueprint_cljs.core.toaster.call(null);

//# sourceMappingURL=core.js.map?rel=1488247582296