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
ui.core.brain_vertices = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__70605){
var vec__70606 = p__70605;
var x = cljs.core.nth.call(null,vec__70606,(0),null);
var y = cljs.core.nth.call(null,vec__70606,(1),null);
var z = cljs.core.nth.call(null,vec__70606,(2),null);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,(y - 0.01),z],null));
}),cljs.core.concat.call(null,cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))),cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))))));
ui.core.brain_faces = cljs.core.map.call(null,(function (p__70609){
var vec__70610 = p__70609;
var a = cljs.core.nth.call(null,vec__70610,(0),null);
var b = cljs.core.nth.call(null,vec__70610,(1),null);
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
var G__70613 = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
s = G__70613;
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
var this__43442__auto__ = this;
React.Component.apply(this__43442__auto__,arguments);

if(!((this__43442__auto__.initLocalState == null))){
this__43442__auto__.state = this__43442__auto__.initLocalState();
} else {
this__43442__auto__.state = {};
}

return this__43442__auto__;
});

ui.core.Item.prototype = goog.object.clone(React.Component.prototype);

var x70618_70638 = ui.core.Item.prototype;
x70618_70638.componentWillUpdate = ((function (x70618_70638){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
if(((!((this__43333__auto__ == null)))?(((false) || (this__43333__auto__.om$next$Ident$))?true:false):false)){
var ident__43337__auto___70639 = om.next.ident.call(null,this__43333__auto__,om.next.props.call(null,this__43333__auto__));
var next_ident__43338__auto___70640 = om.next.ident.call(null,this__43333__auto__,om.next._next_props.call(null,next_props__43334__auto__,this__43333__auto__));
if(cljs.core.not_EQ_.call(null,ident__43337__auto___70639,next_ident__43338__auto___70640)){
var idxr__43339__auto___70641 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43339__auto___70641 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43339__auto___70641),((function (idxr__43339__auto___70641,ident__43337__auto___70639,next_ident__43338__auto___70640,this__43333__auto__,x70618_70638){
return (function (indexes__43340__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__43340__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43337__auto___70639], null),cljs.core.disj,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43338__auto___70640], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43333__auto__);
});})(idxr__43339__auto___70641,ident__43337__auto___70639,next_ident__43338__auto___70640,this__43333__auto__,x70618_70638))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__43333__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__43333__auto__);
});})(x70618_70638))
;

x70618_70638.shouldComponentUpdate = ((function (x70618_70638){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
var next_children__43336__auto__ = next_props__43334__auto__.children;
var next_props__43334__auto____$1 = goog.object.get(next_props__43334__auto__,"omcljs$value");
var next_props__43334__auto____$2 = (function (){var G__70620 = next_props__43334__auto____$1;
if((next_props__43334__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__70620);
} else {
return G__70620;
}
})();
var or__31879__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__43333__auto__),next_props__43334__auto____$2);
if(or__31879__auto__){
return or__31879__auto__;
} else {
var or__31879__auto____$1 = (function (){var and__31867__auto__ = this__43333__auto__.state;
if(cljs.core.truth_(and__31867__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__43333__auto__.state,"omcljs$state"),goog.object.get(next_state__43335__auto__,"omcljs$state"));
} else {
return and__31867__auto__;
}
})();
if(cljs.core.truth_(or__31879__auto____$1)){
return or__31879__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__43333__auto__.props.children,next_children__43336__auto__);
}
}
});})(x70618_70638))
;

x70618_70638.componentWillUnmount = ((function (x70618_70638){
return (function (){
var this__43333__auto__ = this;
var r__43344__auto__ = om.next.get_reconciler.call(null,this__43333__auto__);
var cfg__43345__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__43344__auto__);
var st__43346__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
var indexer__43343__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
if(cljs.core.truth_((function (){var and__31867__auto__ = !((st__43346__auto__ == null));
if(and__31867__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__43346__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__43333__auto__], null));
} else {
return and__31867__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__43346__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__43333__auto__);
} else {
}

if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70618_70638))
;

x70618_70638.componentDidUpdate = ((function (x70618_70638){
return (function (prev_props__43341__auto__,prev_state__43342__auto__){
var this__43333__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__43333__auto__);
});})(x70618_70638))
;

x70618_70638.isMounted = ((function (x70618_70638){
return (function (){
var this__43333__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__43333__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x70618_70638))
;

x70618_70638.componentWillMount = ((function (x70618_70638){
return (function (){
var this__43333__auto__ = this;
var indexer__43343__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70618_70638))
;

x70618_70638.initLocalState = ((function (x70618_70638){
return (function (){
var this$ = this;
var ret__43311__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj70622 = {"omcljs$state":ret__43311__auto__};
return obj70622;
});})(x70618_70638))
;

x70618_70638.render = ((function (x70618_70638){
return (function (){
var this__43332__auto__ = this;
var this$ = this__43332__auto__;
var _STAR_reconciler_STAR_70623 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_70624 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_70625 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_70626 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_70627 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__43332__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__43332__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__43332__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__43332__auto__);

om.next._STAR_parent_STAR_ = this__43332__auto__;

try{var map__70628 = om.next.props.call(null,this$);
var map__70628__$1 = ((((!((map__70628 == null)))?((((map__70628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70628):map__70628);
var id = cljs.core.get.call(null,map__70628__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var description = cljs.core.get.call(null,map__70628__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
var votes = cljs.core.get.call(null,map__70628__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var user = cljs.core.get.call(null,map__70628__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__70629 = user;
var map__70629__$1 = ((((!((map__70629 == null)))?((((map__70629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70629):map__70629);
var stake = cljs.core.get.call(null,map__70629__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var has_stake = (stake > (0));
var map__70630 = om.next.get_state.call(null,this$);
var map__70630__$1 = ((((!((map__70630 == null)))?((((map__70630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70630):map__70630);
var dialog = cljs.core.get.call(null,map__70630__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__70631 = dialog;
var map__70631__$1 = ((((!((map__70631 == null)))?((((map__70631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70631):map__70631);
var direction = cljs.core.get.call(null,map__70631__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": "5px", "paddingBottom": "5px", "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),(((direction === (0)))?"Vote down":"Vote Up"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,hide_dialog,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638){
return (function (e){
return hide_dialog.call(null);
});})(map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,hide_dialog,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,hide_dialog,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("item","vote","item/vote",-842849665,null)),(function (){var x__32713__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","items","etherean/items",165918606)))))));
});})(map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,hide_dialog,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638))
], null),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can vote up ",React.DOM.i(null,"one item")," in this list per day, as well as vote down ",React.DOM.i(null,"one item")," in this list per day. These votes will be remembered and automatically applied on subsequent days, until you change your choices (or until your up/down choices fall from the front page) "],null)))),React.DOM.p(null,"So... is this an item currently on the mind of ethereans?")),(function (){var vote_button = ((function (map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,hide_dialog,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638){
return (function (direction__$1,activated){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,hide_dialog,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638){
return (function (e){
if(has_stake){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),(0),new cljs.core.Keyword(null,"up","up",-269712113),(1)], null).call(null,direction__$1)], null));
} else {
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You need to deposit some stake first before voting on items. Please go to the \"Voting Stake\" tab first."}));
}
});})(map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,hide_dialog,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638))
], null));
});})(map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,hide_dialog,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(votes)?ui.core.format_vote_number.call(null,(((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))))):"---")],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false)],null))));
})(),(function (){var item_body = ((function (map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,hide_dialog,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638){
return (function (desc,detail){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__70628,map__70628__$1,id,description,votes,user,map__70629,map__70629__$1,stake,has_stake,map__70630,map__70630__$1,dialog,map__70631,map__70631__$1,direction,hide_dialog,_STAR_reconciler_STAR_70623,_STAR_depth_STAR_70624,_STAR_shared_STAR_70625,_STAR_instrument_STAR_70626,_STAR_parent_STAR_70627,this$,this__43332__auto__,x70618_70638))
;
return item_body.call(null,description,(cljs.core.truth_(votes)?null:ui.core.mining_spinner.call(null)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_70627;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_70626;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_70625;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_70624;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_70623;
}});})(x70618_70638))
;


ui.core.Item.prototype.constructor = ui.core.Item;

ui.core.Item.prototype.constructor.displayName = "ui.core/Item";

ui.core.Item.prototype.om$isComponent = true;

var x70636_70642 = ui.core.Item;
/** @nocollapse */
x70636_70642.om$next$IQuery$ = true;

/** @nocollapse */
x70636_70642.om$next$IQuery$query$arity$1 = ((function (x70636_70642){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x70636_70642))
;


var x70637_70643 = ui.core.Item.prototype;

x70637_70643.om$next$IQuery$ = true;


x70637_70643.om$next$IQuery$query$arity$1 = ((function (x70637_70643){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x70637_70643))
;


ui.core.Item.cljs$lang$type = true;

ui.core.Item.cljs$lang$ctorStr = "ui.core/Item";

ui.core.Item.cljs$lang$ctorPrWriter = (function (this__43445__auto__,writer__43446__auto__,opt__43447__auto__){
return cljs.core._write.call(null,writer__43446__auto__,"ui.core/Item");
});
ui.core.item_component = om.next.factory.call(null,ui.core.Item);
/**
 * @constructor
 */
ui.core.Items = (function ui$core$Items(){
var this__43442__auto__ = this;
React.Component.apply(this__43442__auto__,arguments);

if(!((this__43442__auto__.initLocalState == null))){
this__43442__auto__.state = this__43442__auto__.initLocalState();
} else {
this__43442__auto__.state = {};
}

return this__43442__auto__;
});

ui.core.Items.prototype = goog.object.clone(React.Component.prototype);

var x70648_70662 = ui.core.Items.prototype;
x70648_70662.componentWillUpdate = ((function (x70648_70662){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
if(((!((this__43333__auto__ == null)))?(((false) || (this__43333__auto__.om$next$Ident$))?true:false):false)){
var ident__43337__auto___70663 = om.next.ident.call(null,this__43333__auto__,om.next.props.call(null,this__43333__auto__));
var next_ident__43338__auto___70664 = om.next.ident.call(null,this__43333__auto__,om.next._next_props.call(null,next_props__43334__auto__,this__43333__auto__));
if(cljs.core.not_EQ_.call(null,ident__43337__auto___70663,next_ident__43338__auto___70664)){
var idxr__43339__auto___70665 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43339__auto___70665 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43339__auto___70665),((function (idxr__43339__auto___70665,ident__43337__auto___70663,next_ident__43338__auto___70664,this__43333__auto__,x70648_70662){
return (function (indexes__43340__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__43340__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43337__auto___70663], null),cljs.core.disj,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43338__auto___70664], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43333__auto__);
});})(idxr__43339__auto___70665,ident__43337__auto___70663,next_ident__43338__auto___70664,this__43333__auto__,x70648_70662))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__43333__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__43333__auto__);
});})(x70648_70662))
;

x70648_70662.shouldComponentUpdate = ((function (x70648_70662){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
var next_children__43336__auto__ = next_props__43334__auto__.children;
var next_props__43334__auto____$1 = goog.object.get(next_props__43334__auto__,"omcljs$value");
var next_props__43334__auto____$2 = (function (){var G__70650 = next_props__43334__auto____$1;
if((next_props__43334__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__70650);
} else {
return G__70650;
}
})();
var or__31879__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__43333__auto__),next_props__43334__auto____$2);
if(or__31879__auto__){
return or__31879__auto__;
} else {
var or__31879__auto____$1 = (function (){var and__31867__auto__ = this__43333__auto__.state;
if(cljs.core.truth_(and__31867__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__43333__auto__.state,"omcljs$state"),goog.object.get(next_state__43335__auto__,"omcljs$state"));
} else {
return and__31867__auto__;
}
})();
if(cljs.core.truth_(or__31879__auto____$1)){
return or__31879__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__43333__auto__.props.children,next_children__43336__auto__);
}
}
});})(x70648_70662))
;

x70648_70662.componentWillUnmount = ((function (x70648_70662){
return (function (){
var this__43333__auto__ = this;
var r__43344__auto__ = om.next.get_reconciler.call(null,this__43333__auto__);
var cfg__43345__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__43344__auto__);
var st__43346__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
var indexer__43343__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
if(cljs.core.truth_((function (){var and__31867__auto__ = !((st__43346__auto__ == null));
if(and__31867__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__43346__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__43333__auto__], null));
} else {
return and__31867__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__43346__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__43333__auto__);
} else {
}

if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70648_70662))
;

x70648_70662.componentDidUpdate = ((function (x70648_70662){
return (function (prev_props__43341__auto__,prev_state__43342__auto__){
var this__43333__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__43333__auto__);
});})(x70648_70662))
;

x70648_70662.isMounted = ((function (x70648_70662){
return (function (){
var this__43333__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__43333__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x70648_70662))
;

x70648_70662.componentWillMount = ((function (x70648_70662){
return (function (){
var this__43333__auto__ = this;
var indexer__43343__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70648_70662))
;

x70648_70662.render = ((function (x70648_70662){
return (function (){
var this__43332__auto__ = this;
var this$ = this__43332__auto__;
var _STAR_reconciler_STAR_70651 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_70652 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_70653 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_70654 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_70655 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__43332__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__43332__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__43332__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__43332__auto__);

om.next._STAR_parent_STAR_ = this__43332__auto__;

try{return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.9})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__32659__auto__ = ((function (_STAR_reconciler_STAR_70651,_STAR_depth_STAR_70652,_STAR_shared_STAR_70653,_STAR_instrument_STAR_70654,_STAR_parent_STAR_70655,this$,this__43332__auto__,x70648_70662){
return (function ui$core$iter__70656(s__70657){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_70651,_STAR_depth_STAR_70652,_STAR_shared_STAR_70653,_STAR_instrument_STAR_70654,_STAR_parent_STAR_70655,this$,this__43332__auto__,x70648_70662){
return (function (){
var s__70657__$1 = s__70657;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70657__$1);
if(temp__4657__auto__){
var s__70657__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70657__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__70657__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__70659 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__70658 = (0);
while(true){
if((i__70658 < size__32658__auto__)){
var item = cljs.core._nth.call(null,c__32657__auto__,i__70658);
cljs.core.chunk_append.call(null,b__70659,ui.core.item_component.call(null,item));

var G__70666 = (i__70658 + (1));
i__70658 = G__70666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70659),ui$core$iter__70656.call(null,cljs.core.chunk_rest.call(null,s__70657__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70659),null);
}
} else {
var item = cljs.core.first.call(null,s__70657__$2);
return cljs.core.cons.call(null,ui.core.item_component.call(null,item),ui$core$iter__70656.call(null,cljs.core.rest.call(null,s__70657__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_70651,_STAR_depth_STAR_70652,_STAR_shared_STAR_70653,_STAR_instrument_STAR_70654,_STAR_parent_STAR_70655,this$,this__43332__auto__,x70648_70662))
,null,null));
});})(_STAR_reconciler_STAR_70651,_STAR_depth_STAR_70652,_STAR_shared_STAR_70653,_STAR_instrument_STAR_70654,_STAR_parent_STAR_70655,this$,this__43332__auto__,x70648_70662))
;
return iter__32659__auto__.call(null,new cljs.core.Keyword("etherean","items","etherean/items",165918606).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_70655;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_70654;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_70653;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_70652;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_70651;
}});})(x70648_70662))
;


ui.core.Items.prototype.constructor = ui.core.Items;

ui.core.Items.prototype.constructor.displayName = "ui.core/Items";

ui.core.Items.prototype.om$isComponent = true;

var x70660_70667 = ui.core.Items;
/** @nocollapse */
x70660_70667.om$next$IQuery$ = true;

/** @nocollapse */
x70660_70667.om$next$IQuery$query$arity$1 = ((function (x70660_70667){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x70660_70667))
;


var x70661_70668 = ui.core.Items.prototype;

x70661_70668.om$next$IQuery$ = true;


x70661_70668.om$next$IQuery$query$arity$1 = ((function (x70661_70668){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x70661_70668))
;


ui.core.Items.cljs$lang$type = true;

ui.core.Items.cljs$lang$ctorStr = "ui.core/Items";

ui.core.Items.cljs$lang$ctorPrWriter = (function (this__43445__auto__,writer__43446__auto__,opt__43447__auto__){
return cljs.core._write.call(null,writer__43446__auto__,"ui.core/Items");
});
ui.core.items_component = om.next.factory.call(null,ui.core.Items);
/**
 * @constructor
 */
ui.core.Proposal = (function ui$core$Proposal(){
var this__43442__auto__ = this;
React.Component.apply(this__43442__auto__,arguments);

if(!((this__43442__auto__.initLocalState == null))){
this__43442__auto__.state = this__43442__auto__.initLocalState();
} else {
this__43442__auto__.state = {};
}

return this__43442__auto__;
});

ui.core.Proposal.prototype = goog.object.clone(React.Component.prototype);

var x70673_70693 = ui.core.Proposal.prototype;
x70673_70693.componentWillUpdate = ((function (x70673_70693){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
if(((!((this__43333__auto__ == null)))?(((false) || (this__43333__auto__.om$next$Ident$))?true:false):false)){
var ident__43337__auto___70694 = om.next.ident.call(null,this__43333__auto__,om.next.props.call(null,this__43333__auto__));
var next_ident__43338__auto___70695 = om.next.ident.call(null,this__43333__auto__,om.next._next_props.call(null,next_props__43334__auto__,this__43333__auto__));
if(cljs.core.not_EQ_.call(null,ident__43337__auto___70694,next_ident__43338__auto___70695)){
var idxr__43339__auto___70696 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43339__auto___70696 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43339__auto___70696),((function (idxr__43339__auto___70696,ident__43337__auto___70694,next_ident__43338__auto___70695,this__43333__auto__,x70673_70693){
return (function (indexes__43340__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__43340__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43337__auto___70694], null),cljs.core.disj,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43338__auto___70695], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43333__auto__);
});})(idxr__43339__auto___70696,ident__43337__auto___70694,next_ident__43338__auto___70695,this__43333__auto__,x70673_70693))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__43333__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__43333__auto__);
});})(x70673_70693))
;

x70673_70693.shouldComponentUpdate = ((function (x70673_70693){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
var next_children__43336__auto__ = next_props__43334__auto__.children;
var next_props__43334__auto____$1 = goog.object.get(next_props__43334__auto__,"omcljs$value");
var next_props__43334__auto____$2 = (function (){var G__70675 = next_props__43334__auto____$1;
if((next_props__43334__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__70675);
} else {
return G__70675;
}
})();
var or__31879__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__43333__auto__),next_props__43334__auto____$2);
if(or__31879__auto__){
return or__31879__auto__;
} else {
var or__31879__auto____$1 = (function (){var and__31867__auto__ = this__43333__auto__.state;
if(cljs.core.truth_(and__31867__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__43333__auto__.state,"omcljs$state"),goog.object.get(next_state__43335__auto__,"omcljs$state"));
} else {
return and__31867__auto__;
}
})();
if(cljs.core.truth_(or__31879__auto____$1)){
return or__31879__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__43333__auto__.props.children,next_children__43336__auto__);
}
}
});})(x70673_70693))
;

x70673_70693.componentWillUnmount = ((function (x70673_70693){
return (function (){
var this__43333__auto__ = this;
var r__43344__auto__ = om.next.get_reconciler.call(null,this__43333__auto__);
var cfg__43345__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__43344__auto__);
var st__43346__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
var indexer__43343__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
if(cljs.core.truth_((function (){var and__31867__auto__ = !((st__43346__auto__ == null));
if(and__31867__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__43346__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__43333__auto__], null));
} else {
return and__31867__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__43346__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__43333__auto__);
} else {
}

if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70673_70693))
;

x70673_70693.componentDidUpdate = ((function (x70673_70693){
return (function (prev_props__43341__auto__,prev_state__43342__auto__){
var this__43333__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__43333__auto__);
});})(x70673_70693))
;

x70673_70693.isMounted = ((function (x70673_70693){
return (function (){
var this__43333__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__43333__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x70673_70693))
;

x70673_70693.componentWillMount = ((function (x70673_70693){
return (function (){
var this__43333__auto__ = this;
var indexer__43343__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70673_70693))
;

x70673_70693.initLocalState = ((function (x70673_70693){
return (function (){
var this$ = this;
var ret__43311__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),"",new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj70677 = {"omcljs$state":ret__43311__auto__};
return obj70677;
});})(x70673_70693))
;

x70673_70693.render = ((function (x70673_70693){
return (function (){
var this__43332__auto__ = this;
var this$ = this__43332__auto__;
var _STAR_reconciler_STAR_70678 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_70679 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_70680 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_70681 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_70682 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__43332__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__43332__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__43332__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__43332__auto__);

om.next._STAR_parent_STAR_ = this__43332__auto__;

try{var map__70683 = om.next.props.call(null,this$);
var map__70683__$1 = ((((!((map__70683 == null)))?((((map__70683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70683):map__70683);
var description = cljs.core.get.call(null,map__70683__$1,new cljs.core.Keyword("proposal","description","proposal/description",1644720226));
var id = cljs.core.get.call(null,map__70683__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var unsaved = cljs.core.get.call(null,map__70683__$1,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935));
var upvotes = cljs.core.get.call(null,map__70683__$1,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560));
var downvotes = cljs.core.get.call(null,map__70683__$1,new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132));
var user = cljs.core.get.call(null,map__70683__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__70684 = user;
var map__70684__$1 = ((((!((map__70684 == null)))?((((map__70684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70684):map__70684);
var can_vote_proposal = cljs.core.get.call(null,map__70684__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__70684__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var temporary = om.next.tempid_QMARK_.call(null,id);
var has_stake = (stake > (0));
var map__70685 = om.next.get_state.call(null,this$);
var map__70685__$1 = ((((!((map__70685 == null)))?((((map__70685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70685):map__70685);
var height = cljs.core.get.call(null,map__70685__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var dialog = cljs.core.get.call(null,map__70685__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__70686 = dialog;
var map__70686__$1 = ((((!((map__70686 == null)))?((((map__70686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70686):map__70686);
var direction = cljs.core.get.call(null,map__70686__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693))
;
return om_tools.dom.element.call(null,React.DOM.div,blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113)))?"Vote Up":"Vote Down"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693){
return (function (e){
return hide_dialog.call(null);
});})(map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null)),(function (){var x__32713__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
});})(map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693))
], null),"You can vote on one proposal per day. Is this an item currently on the mind of ethereans, that deserves to be listed on the front page?"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(unsaved)?(0):(1))], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),ui.motion.spring.call(null,height)], null)], null),((function (map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693){
return (function (value){
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingBottom": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var vote_button = ((function (map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693){
return (function (direction__$1,activated,disabled){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693){
return (function (e){
if(cljs.core.truth_((function (){var and__31867__auto__ = has_stake;
if(and__31867__auto__){
return can_vote_proposal;
} else {
return and__31867__auto__;
}
})())){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),direction__$1], null));
} else {
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": ((has_stake)?"You already voted on a proposal today. You will need to wait until tomorrow to vote again.":"Please deposit stake first in the stake tab to vote on proposals.")}));
}
});})(map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693))
], null));
});})(map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false,unsaved),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(unsaved)?null:(cljs.core.truth_(upvotes)?ui.core.format_vote_number.call(null,(upvotes - downvotes)):"---"
))],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false,unsaved)],null))));
})(),(function (){var proposal_body = ((function (map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693){
return (function (desc,detail,disabled){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)}), "onClick": om_tools.dom.format_opts.call(null,((function (map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693){
return (function (){
if(cljs.core.truth_(disabled)){
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You have not staked any funds yet. Please got to the \"Voting Stakes\" tab first."}));
} else {
return null;
}
});})(map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693))
)}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693))
;
if(cljs.core.truth_(unsaved)){
var temp_description = new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
var has_description = cljs.core.seq.call(null,temp_description);
var save_fn = ((function (temp_description,has_description,proposal_body,map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693){
return (function (){
if(has_description){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","save","proposal/save",356239610,null)),(function (){var x__32713__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),(function (){var x__32713__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__32713__auto__ = temp_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
} else {
return null;
}
});})(temp_description,has_description,proposal_body,map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693))
;
return proposal_body.call(null,blueprint_cljs.core.editable_text.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),((!(has_stake))?"... (Please deposit stake first to propose an item)":((cljs.core.not.call(null,can_vote_proposal))?"... (Today's proposal action already used up)":"... propose a new item!"
)),new cljs.core.Keyword(null,"value","value",305978217),temp_description,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(has_stake)) || (cljs.core.not.call(null,can_vote_proposal)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp_description,has_description,save_fn,proposal_body,map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693){
return (function (s){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),s);
});})(temp_description,has_description,save_fn,proposal_body,map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693))
], null)),((has_description)?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary pt-icon-plus pt-minimal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_fn], null),"Save"):null),!(has_stake));
} else {
return proposal_body.call(null,description,(((temporary) || (cljs.core.not.call(null,upvotes)))?ui.core.mining_spinner.call(null):null),false);
}
})()],null))));
});})(map__70683,map__70683__$1,description,id,unsaved,upvotes,downvotes,user,map__70684,map__70684__$1,can_vote_proposal,stake,temporary,has_stake,map__70685,map__70685__$1,height,dialog,map__70686,map__70686__$1,direction,hide_dialog,_STAR_reconciler_STAR_70678,_STAR_depth_STAR_70679,_STAR_shared_STAR_70680,_STAR_instrument_STAR_70681,_STAR_parent_STAR_70682,this$,this__43332__auto__,x70673_70693))
)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_70682;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_70681;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_70680;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_70679;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_70678;
}});})(x70673_70693))
;


ui.core.Proposal.prototype.constructor = ui.core.Proposal;

ui.core.Proposal.prototype.constructor.displayName = "ui.core/Proposal";

ui.core.Proposal.prototype.om$isComponent = true;

var x70691_70697 = ui.core.Proposal;
/** @nocollapse */
x70691_70697.om$next$IQuery$ = true;

/** @nocollapse */
x70691_70697.om$next$IQuery$query$arity$1 = ((function (x70691_70697){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x70691_70697))
;


var x70692_70698 = ui.core.Proposal.prototype;

x70692_70698.om$next$IQuery$ = true;


x70692_70698.om$next$IQuery$query$arity$1 = ((function (x70692_70698){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x70692_70698))
;


ui.core.Proposal.cljs$lang$type = true;

ui.core.Proposal.cljs$lang$ctorStr = "ui.core/Proposal";

ui.core.Proposal.cljs$lang$ctorPrWriter = (function (this__43445__auto__,writer__43446__auto__,opt__43447__auto__){
return cljs.core._write.call(null,writer__43446__auto__,"ui.core/Proposal");
});
ui.core.proposal_component = om.next.factory.call(null,ui.core.Proposal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
/**
 * @constructor
 */
ui.core.Proposals = (function ui$core$Proposals(){
var this__43442__auto__ = this;
React.Component.apply(this__43442__auto__,arguments);

if(!((this__43442__auto__.initLocalState == null))){
this__43442__auto__.state = this__43442__auto__.initLocalState();
} else {
this__43442__auto__.state = {};
}

return this__43442__auto__;
});

ui.core.Proposals.prototype = goog.object.clone(React.Component.prototype);

var x70703_70717 = ui.core.Proposals.prototype;
x70703_70717.componentWillUpdate = ((function (x70703_70717){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
if(((!((this__43333__auto__ == null)))?(((false) || (this__43333__auto__.om$next$Ident$))?true:false):false)){
var ident__43337__auto___70718 = om.next.ident.call(null,this__43333__auto__,om.next.props.call(null,this__43333__auto__));
var next_ident__43338__auto___70719 = om.next.ident.call(null,this__43333__auto__,om.next._next_props.call(null,next_props__43334__auto__,this__43333__auto__));
if(cljs.core.not_EQ_.call(null,ident__43337__auto___70718,next_ident__43338__auto___70719)){
var idxr__43339__auto___70720 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43339__auto___70720 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43339__auto___70720),((function (idxr__43339__auto___70720,ident__43337__auto___70718,next_ident__43338__auto___70719,this__43333__auto__,x70703_70717){
return (function (indexes__43340__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__43340__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43337__auto___70718], null),cljs.core.disj,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43338__auto___70719], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43333__auto__);
});})(idxr__43339__auto___70720,ident__43337__auto___70718,next_ident__43338__auto___70719,this__43333__auto__,x70703_70717))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__43333__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__43333__auto__);
});})(x70703_70717))
;

x70703_70717.shouldComponentUpdate = ((function (x70703_70717){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
var next_children__43336__auto__ = next_props__43334__auto__.children;
var next_props__43334__auto____$1 = goog.object.get(next_props__43334__auto__,"omcljs$value");
var next_props__43334__auto____$2 = (function (){var G__70705 = next_props__43334__auto____$1;
if((next_props__43334__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__70705);
} else {
return G__70705;
}
})();
var or__31879__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__43333__auto__),next_props__43334__auto____$2);
if(or__31879__auto__){
return or__31879__auto__;
} else {
var or__31879__auto____$1 = (function (){var and__31867__auto__ = this__43333__auto__.state;
if(cljs.core.truth_(and__31867__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__43333__auto__.state,"omcljs$state"),goog.object.get(next_state__43335__auto__,"omcljs$state"));
} else {
return and__31867__auto__;
}
})();
if(cljs.core.truth_(or__31879__auto____$1)){
return or__31879__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__43333__auto__.props.children,next_children__43336__auto__);
}
}
});})(x70703_70717))
;

x70703_70717.componentWillUnmount = ((function (x70703_70717){
return (function (){
var this__43333__auto__ = this;
var r__43344__auto__ = om.next.get_reconciler.call(null,this__43333__auto__);
var cfg__43345__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__43344__auto__);
var st__43346__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
var indexer__43343__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
if(cljs.core.truth_((function (){var and__31867__auto__ = !((st__43346__auto__ == null));
if(and__31867__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__43346__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__43333__auto__], null));
} else {
return and__31867__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__43346__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__43333__auto__);
} else {
}

if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70703_70717))
;

x70703_70717.componentDidUpdate = ((function (x70703_70717){
return (function (prev_props__43341__auto__,prev_state__43342__auto__){
var this__43333__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__43333__auto__);
});})(x70703_70717))
;

x70703_70717.isMounted = ((function (x70703_70717){
return (function (){
var this__43333__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__43333__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x70703_70717))
;

x70703_70717.componentWillMount = ((function (x70703_70717){
return (function (){
var this__43333__auto__ = this;
var indexer__43343__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70703_70717))
;

x70703_70717.render = ((function (x70703_70717){
return (function (){
var this__43332__auto__ = this;
var this$ = this__43332__auto__;
var _STAR_reconciler_STAR_70706 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_70707 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_70708 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_70709 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_70710 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__43332__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__43332__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__43332__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__43332__auto__);

om.next._STAR_parent_STAR_ = this__43332__auto__;

try{return om_tools.dom.element.call(null,React.DOM.div,(function (){var iter__32659__auto__ = ((function (_STAR_reconciler_STAR_70706,_STAR_depth_STAR_70707,_STAR_shared_STAR_70708,_STAR_instrument_STAR_70709,_STAR_parent_STAR_70710,this$,this__43332__auto__,x70703_70717){
return (function ui$core$iter__70711(s__70712){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_70706,_STAR_depth_STAR_70707,_STAR_shared_STAR_70708,_STAR_instrument_STAR_70709,_STAR_parent_STAR_70710,this$,this__43332__auto__,x70703_70717){
return (function (){
var s__70712__$1 = s__70712;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70712__$1);
if(temp__4657__auto__){
var s__70712__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70712__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__70712__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__70714 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__70713 = (0);
while(true){
if((i__70713 < size__32658__auto__)){
var proposal = cljs.core._nth.call(null,c__32657__auto__,i__70713);
cljs.core.chunk_append.call(null,b__70714,ui.core.proposal_component.call(null,proposal));

var G__70721 = (i__70713 + (1));
i__70713 = G__70721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70714),ui$core$iter__70711.call(null,cljs.core.chunk_rest.call(null,s__70712__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70714),null);
}
} else {
var proposal = cljs.core.first.call(null,s__70712__$2);
return cljs.core.cons.call(null,ui.core.proposal_component.call(null,proposal),ui$core$iter__70711.call(null,cljs.core.rest.call(null,s__70712__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_70706,_STAR_depth_STAR_70707,_STAR_shared_STAR_70708,_STAR_instrument_STAR_70709,_STAR_parent_STAR_70710,this$,this__43332__auto__,x70703_70717))
,null,null));
});})(_STAR_reconciler_STAR_70706,_STAR_depth_STAR_70707,_STAR_shared_STAR_70708,_STAR_instrument_STAR_70709,_STAR_parent_STAR_70710,this$,this__43332__auto__,x70703_70717))
;
return iter__32659__auto__.call(null,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})(),cljs.core.PersistentVector.EMPTY);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_70710;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_70709;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_70708;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_70707;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_70706;
}});})(x70703_70717))
;


ui.core.Proposals.prototype.constructor = ui.core.Proposals;

ui.core.Proposals.prototype.constructor.displayName = "ui.core/Proposals";

ui.core.Proposals.prototype.om$isComponent = true;

var x70715_70722 = ui.core.Proposals;
/** @nocollapse */
x70715_70722.om$next$IQuery$ = true;

/** @nocollapse */
x70715_70722.om$next$IQuery$query$arity$1 = ((function (x70715_70722){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x70715_70722))
;


var x70716_70723 = ui.core.Proposals.prototype;

x70716_70723.om$next$IQuery$ = true;


x70716_70723.om$next$IQuery$query$arity$1 = ((function (x70716_70723){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x70716_70723))
;


ui.core.Proposals.cljs$lang$type = true;

ui.core.Proposals.cljs$lang$ctorStr = "ui.core/Proposals";

ui.core.Proposals.cljs$lang$ctorPrWriter = (function (this__43445__auto__,writer__43446__auto__,opt__43447__auto__){
return cljs.core._write.call(null,writer__43446__auto__,"ui.core/Proposals");
});
ui.core.proposals_component = om.next.factory.call(null,ui.core.Proposals);
/**
 * @constructor
 */
ui.core.Stake = (function ui$core$Stake(){
var this__43442__auto__ = this;
React.Component.apply(this__43442__auto__,arguments);

if(!((this__43442__auto__.initLocalState == null))){
this__43442__auto__.state = this__43442__auto__.initLocalState();
} else {
this__43442__auto__.state = {};
}

return this__43442__auto__;
});

ui.core.Stake.prototype = goog.object.clone(React.Component.prototype);

var x70728_70740 = ui.core.Stake.prototype;
x70728_70740.componentWillUpdate = ((function (x70728_70740){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
if(((!((this__43333__auto__ == null)))?(((false) || (this__43333__auto__.om$next$Ident$))?true:false):false)){
var ident__43337__auto___70741 = om.next.ident.call(null,this__43333__auto__,om.next.props.call(null,this__43333__auto__));
var next_ident__43338__auto___70742 = om.next.ident.call(null,this__43333__auto__,om.next._next_props.call(null,next_props__43334__auto__,this__43333__auto__));
if(cljs.core.not_EQ_.call(null,ident__43337__auto___70741,next_ident__43338__auto___70742)){
var idxr__43339__auto___70743 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43339__auto___70743 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43339__auto___70743),((function (idxr__43339__auto___70743,ident__43337__auto___70741,next_ident__43338__auto___70742,this__43333__auto__,x70728_70740){
return (function (indexes__43340__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__43340__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43337__auto___70741], null),cljs.core.disj,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43338__auto___70742], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43333__auto__);
});})(idxr__43339__auto___70743,ident__43337__auto___70741,next_ident__43338__auto___70742,this__43333__auto__,x70728_70740))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__43333__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__43333__auto__);
});})(x70728_70740))
;

x70728_70740.shouldComponentUpdate = ((function (x70728_70740){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
var next_children__43336__auto__ = next_props__43334__auto__.children;
var next_props__43334__auto____$1 = goog.object.get(next_props__43334__auto__,"omcljs$value");
var next_props__43334__auto____$2 = (function (){var G__70730 = next_props__43334__auto____$1;
if((next_props__43334__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__70730);
} else {
return G__70730;
}
})();
var or__31879__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__43333__auto__),next_props__43334__auto____$2);
if(or__31879__auto__){
return or__31879__auto__;
} else {
var or__31879__auto____$1 = (function (){var and__31867__auto__ = this__43333__auto__.state;
if(cljs.core.truth_(and__31867__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__43333__auto__.state,"omcljs$state"),goog.object.get(next_state__43335__auto__,"omcljs$state"));
} else {
return and__31867__auto__;
}
})();
if(cljs.core.truth_(or__31879__auto____$1)){
return or__31879__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__43333__auto__.props.children,next_children__43336__auto__);
}
}
});})(x70728_70740))
;

x70728_70740.componentWillUnmount = ((function (x70728_70740){
return (function (){
var this__43333__auto__ = this;
var r__43344__auto__ = om.next.get_reconciler.call(null,this__43333__auto__);
var cfg__43345__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__43344__auto__);
var st__43346__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
var indexer__43343__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
if(cljs.core.truth_((function (){var and__31867__auto__ = !((st__43346__auto__ == null));
if(and__31867__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__43346__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__43333__auto__], null));
} else {
return and__31867__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__43346__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__43333__auto__);
} else {
}

if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70728_70740))
;

x70728_70740.componentDidUpdate = ((function (x70728_70740){
return (function (prev_props__43341__auto__,prev_state__43342__auto__){
var this__43333__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__43333__auto__);
});})(x70728_70740))
;

x70728_70740.isMounted = ((function (x70728_70740){
return (function (){
var this__43333__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__43333__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x70728_70740))
;

x70728_70740.componentWillMount = ((function (x70728_70740){
return (function (){
var this__43333__auto__ = this;
var indexer__43343__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70728_70740))
;

x70728_70740.render = ((function (x70728_70740){
return (function (){
var this__43332__auto__ = this;
var this$ = this__43332__auto__;
var _STAR_reconciler_STAR_70731 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_70732 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_70733 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_70734 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_70735 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__43332__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__43332__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__43332__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__43332__auto__);

om.next._STAR_parent_STAR_ = this__43332__auto__;

try{var map__70736 = om.next.props.call(null,this$);
var map__70736__$1 = ((((!((map__70736 == null)))?((((map__70736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70736):map__70736);
var id = cljs.core.get.call(null,map__70736__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var value = cljs.core.get.call(null,map__70736__$1,new cljs.core.Keyword("stake","value","stake/value",466231031));
return om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,id,cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,value,cljs.core.PersistentVector.EMPTY)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_70735;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_70734;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_70733;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_70732;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_70731;
}});})(x70728_70740))
;


ui.core.Stake.prototype.constructor = ui.core.Stake;

ui.core.Stake.prototype.constructor.displayName = "ui.core/Stake";

ui.core.Stake.prototype.om$isComponent = true;

var x70738_70744 = ui.core.Stake;
/** @nocollapse */
x70738_70744.om$next$IQuery$ = true;

/** @nocollapse */
x70738_70744.om$next$IQuery$query$arity$1 = ((function (x70738_70744){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x70738_70744))
;


var x70739_70745 = ui.core.Stake.prototype;

x70739_70745.om$next$IQuery$ = true;


x70739_70745.om$next$IQuery$query$arity$1 = ((function (x70739_70745){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x70739_70745))
;


ui.core.Stake.cljs$lang$type = true;

ui.core.Stake.cljs$lang$ctorStr = "ui.core/Stake";

ui.core.Stake.cljs$lang$ctorPrWriter = (function (this__43445__auto__,writer__43446__auto__,opt__43447__auto__){
return cljs.core._write.call(null,writer__43446__auto__,"ui.core/Stake");
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
var this__43442__auto__ = this;
React.Component.apply(this__43442__auto__,arguments);

if(!((this__43442__auto__.initLocalState == null))){
this__43442__auto__.state = this__43442__auto__.initLocalState();
} else {
this__43442__auto__.state = {};
}

return this__43442__auto__;
});

ui.core.Stakes.prototype = goog.object.clone(React.Component.prototype);

var x70750_70770 = ui.core.Stakes.prototype;
x70750_70770.componentWillUpdate = ((function (x70750_70770){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
if(((!((this__43333__auto__ == null)))?(((false) || (this__43333__auto__.om$next$Ident$))?true:false):false)){
var ident__43337__auto___70771 = om.next.ident.call(null,this__43333__auto__,om.next.props.call(null,this__43333__auto__));
var next_ident__43338__auto___70772 = om.next.ident.call(null,this__43333__auto__,om.next._next_props.call(null,next_props__43334__auto__,this__43333__auto__));
if(cljs.core.not_EQ_.call(null,ident__43337__auto___70771,next_ident__43338__auto___70772)){
var idxr__43339__auto___70773 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43339__auto___70773 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43339__auto___70773),((function (idxr__43339__auto___70773,ident__43337__auto___70771,next_ident__43338__auto___70772,this__43333__auto__,x70750_70770){
return (function (indexes__43340__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__43340__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43337__auto___70771], null),cljs.core.disj,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43338__auto___70772], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43333__auto__);
});})(idxr__43339__auto___70773,ident__43337__auto___70771,next_ident__43338__auto___70772,this__43333__auto__,x70750_70770))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__43333__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__43333__auto__);
});})(x70750_70770))
;

x70750_70770.shouldComponentUpdate = ((function (x70750_70770){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
var next_children__43336__auto__ = next_props__43334__auto__.children;
var next_props__43334__auto____$1 = goog.object.get(next_props__43334__auto__,"omcljs$value");
var next_props__43334__auto____$2 = (function (){var G__70752 = next_props__43334__auto____$1;
if((next_props__43334__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__70752);
} else {
return G__70752;
}
})();
var or__31879__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__43333__auto__),next_props__43334__auto____$2);
if(or__31879__auto__){
return or__31879__auto__;
} else {
var or__31879__auto____$1 = (function (){var and__31867__auto__ = this__43333__auto__.state;
if(cljs.core.truth_(and__31867__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__43333__auto__.state,"omcljs$state"),goog.object.get(next_state__43335__auto__,"omcljs$state"));
} else {
return and__31867__auto__;
}
})();
if(cljs.core.truth_(or__31879__auto____$1)){
return or__31879__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__43333__auto__.props.children,next_children__43336__auto__);
}
}
});})(x70750_70770))
;

x70750_70770.componentWillUnmount = ((function (x70750_70770){
return (function (){
var this__43333__auto__ = this;
var r__43344__auto__ = om.next.get_reconciler.call(null,this__43333__auto__);
var cfg__43345__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__43344__auto__);
var st__43346__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
var indexer__43343__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43345__auto__);
if(cljs.core.truth_((function (){var and__31867__auto__ = !((st__43346__auto__ == null));
if(and__31867__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__43346__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__43333__auto__], null));
} else {
return and__31867__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__43346__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__43333__auto__);
} else {
}

if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70750_70770))
;

x70750_70770.componentDidUpdate = ((function (x70750_70770){
return (function (prev_props__43341__auto__,prev_state__43342__auto__){
var this__43333__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__43333__auto__);
});})(x70750_70770))
;

x70750_70770.isMounted = ((function (x70750_70770){
return (function (){
var this__43333__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__43333__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x70750_70770))
;

x70750_70770.componentWillMount = ((function (x70750_70770){
return (function (){
var this__43333__auto__ = this;
var indexer__43343__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x70750_70770))
;

x70750_70770.initLocalState = ((function (x70750_70770){
return (function (){
var this$ = this;
var ret__43311__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var obj70754 = {"omcljs$state":ret__43311__auto__};
return obj70754;
});})(x70750_70770))
;

x70750_70770.render = ((function (x70750_70770){
return (function (){
var this__43332__auto__ = this;
var this$ = this__43332__auto__;
var _STAR_reconciler_STAR_70755 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_70756 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_70757 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_70758 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_70759 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__43332__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__43332__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__43332__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__43332__auto__);

om.next._STAR_parent_STAR_ = this__43332__auto__;

try{var map__70760 = om.next.props.call(null,this$);
var map__70760__$1 = ((((!((map__70760 == null)))?((((map__70760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70760):map__70760);
var stakes = cljs.core.get.call(null,map__70760__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__70760__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__70761 = user;
var map__70761__$1 = ((((!((map__70761 == null)))?((((map__70761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70761):map__70761);
var stake = cljs.core.get.call(null,map__70761__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var address = cljs.core.get.call(null,map__70761__$1,new cljs.core.Keyword("user","address","user/address",573600859));
var balance = cljs.core.get.call(null,map__70761__$1,new cljs.core.Keyword("user","balance","user/balance",422509480));
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.8})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Current Stake"),((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?ui.core.mining_spinner.call(null):cljs.core.apply.call(null,React.DOM.h3,({"style": ({"color": "#2b95d6"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[stake," ETH"],null))))),cljs.core.apply.call(null,React.DOM.span,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["(associated with account ",ui.core.format_address.call(null,address),")"],null)))),(((stake === (0)))?React.DOM.div(({"className": "pt-callout pt-icon-info-sign", "style": ({"marginTop": "0.5rem"})}),"You do not currently have any voting stake for EthereanMind. To be able to vote on proposals and top 10 items, you need to deposit some fully-refundable coins into the EthereanMind staking contract."):null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group", "style": ({"marginTop": "0.5rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__70760,map__70760__$1,stakes,user,map__70761,map__70761__$1,stake,address,balance,_STAR_reconciler_STAR_70755,_STAR_depth_STAR_70756,_STAR_shared_STAR_70757,_STAR_instrument_STAR_70758,_STAR_parent_STAR_70759,this$,this__43332__auto__,x70750_70770){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"value","value",305978217),""], null));
});})(map__70760,map__70760__$1,stakes,user,map__70761,map__70761__$1,stake,address,balance,_STAR_reconciler_STAR_70755,_STAR_depth_STAR_70756,_STAR_shared_STAR_70757,_STAR_instrument_STAR_70758,_STAR_parent_STAR_70759,this$,this__43332__auto__,x70750_70770))
], null),"Deposit Stake"),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__70760,map__70760__$1,stakes,user,map__70761,map__70761__$1,stake,address,balance,_STAR_reconciler_STAR_70755,_STAR_depth_STAR_70756,_STAR_shared_STAR_70757,_STAR_instrument_STAR_70758,_STAR_parent_STAR_70759,this$,this__43332__auto__,x70750_70770){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"withdraw","withdraw",1469652053)], null));
});})(map__70760,map__70760__$1,stakes,user,map__70761,map__70761__$1,stake,address,balance,_STAR_reconciler_STAR_70755,_STAR_depth_STAR_70756,_STAR_shared_STAR_70757,_STAR_instrument_STAR_70758,_STAR_parent_STAR_70759,this$,this__43332__auto__,x70750_70770))
], null),"Withdraw Stake")],null))))],null)))),(function (){var map__70764 = om.next.get_state.call(null,this$);
var map__70764__$1 = ((((!((map__70764 == null)))?((((map__70764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70764):map__70764);
var dialog = cljs.core.get.call(null,map__70764__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__70765 = dialog;
var map__70765__$1 = ((((!((map__70765 == null)))?((((map__70765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70765):map__70765);
var type = cljs.core.get.call(null,map__70765__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__70765__$1,new cljs.core.Keyword(null,"value","value",305978217));
var value_status = ((cljs.core._EQ_.call(null,value,""))?new cljs.core.Keyword(null,"missing","missing",362507769):(((value <= balance))?new cljs.core.Keyword(null,"good","good",511701169):new cljs.core.Keyword(null,"bad","bad",1127186645)
));
var close_dialog = ((function (value_status,map__70764,map__70764__$1,dialog,map__70765,map__70765__$1,type,value,map__70760,map__70760__$1,stakes,user,map__70761,map__70761__$1,stake,address,balance,_STAR_reconciler_STAR_70755,_STAR_depth_STAR_70756,_STAR_shared_STAR_70757,_STAR_instrument_STAR_70758,_STAR_parent_STAR_70759,this$,this__43332__auto__,x70750_70770){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,map__70764,map__70764__$1,dialog,map__70765,map__70765__$1,type,value,map__70760,map__70760__$1,stakes,user,map__70761,map__70761__$1,stake,address,balance,_STAR_reconciler_STAR_70755,_STAR_depth_STAR_70756,_STAR_shared_STAR_70757,_STAR_instrument_STAR_70758,_STAR_parent_STAR_70759,this$,this__43332__auto__,x70750_70770))
;
return blueprint_cljs.core.dialog.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-close","on-close",-761178394),close_dialog,new cljs.core.Keyword(null,"title","title",636505583),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit Stake":"Withdraw Stake")], null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-body"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,"In order to vote on ethereanmind you need to place a refundable deposit of ether. You will be able to start voting immediately after depositing ether, but you need to wait a month before you can withdraw your deposit again."),om_tools.dom.element.call(null,React.DOM.p,React.DOM.b(null,"The rules of the smart contract assure that no one else can withdraw your money and that you will receive back 100% of your deposit."),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Balance available: ",balance," Ether"],null)))),blueprint_cljs.core.input_group.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Deposit Amount (Ether)",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"right-element","right-element",-375920256),((cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"missing","missing",362507769)))?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)))?"pt-icon-tick pt-intent-success":"pt-icon-cross pt-intent-danger")], null)):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value_status,close_dialog,map__70764,map__70764__$1,dialog,map__70765,map__70765__$1,type,value,map__70760,map__70760__$1,stakes,user,map__70761,map__70761__$1,stake,address,balance,_STAR_reconciler_STAR_70755,_STAR_depth_STAR_70756,_STAR_shared_STAR_70757,_STAR_instrument_STAR_70758,_STAR_parent_STAR_70759,this$,this__43332__auto__,x70750_70770){
return (function (e){
var value_new = e.target.value;
if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]*\.?[0-9]*/,value_new))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value_new);
} else {
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value);
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noise","noise",-994696820)], null),cljs.core.rand_int.call(null,(1000000)));
});})(value_status,close_dialog,map__70764,map__70764__$1,dialog,map__70765,map__70765__$1,type,value,map__70760,map__70760__$1,stakes,user,map__70761,map__70761__$1,stake,address,balance,_STAR_reconciler_STAR_70755,_STAR_depth_STAR_70756,_STAR_shared_STAR_70757,_STAR_instrument_STAR_70758,_STAR_parent_STAR_70759,this$,this__43332__auto__,x70750_70770))
], null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can now withdraw all of your stake (Currently ",stake," Ether) back into your regular ethereum account at [",ui.core.format_address.call(null,address),"]. At that point, you will no longer be able to participate in voting- You'll need to deposit new funds to vote again."],null))))], null))],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer-actions"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)),new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_status,close_dialog,map__70764,map__70764__$1,dialog,map__70765,map__70765__$1,type,value,map__70760,map__70760__$1,stakes,user,map__70761,map__70761__$1,stake,address,balance,_STAR_reconciler_STAR_70755,_STAR_depth_STAR_70756,_STAR_shared_STAR_70757,_STAR_instrument_STAR_70758,_STAR_parent_STAR_70759,this$,this__43332__auto__,x70750_70770){
return (function (e){
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851))){
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null)),(function (){var x__32713__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__32713__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339)))))));
} else {
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","withdraw","user/withdraw",-1187344809,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339)))))));
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,close_dialog,map__70764,map__70764__$1,dialog,map__70765,map__70765__$1,type,value,map__70760,map__70760__$1,stakes,user,map__70761,map__70761__$1,stake,address,balance,_STAR_reconciler_STAR_70755,_STAR_depth_STAR_70756,_STAR_shared_STAR_70757,_STAR_instrument_STAR_70758,_STAR_parent_STAR_70759,this$,this__43332__auto__,x70750_70770))
], null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit":"Withdraw")),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_dialog], null),"Cancel")],null))))],null)))));
})(),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"marginTop": "1rem", "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Staking Statistics"),React.DOM.div(null,"If you're curious about who else is using this dapp, and are using an ethereum data source that can handle large queres, click this button:"),cljs.core.apply.call(null,React.DOM.p,({"style": ({"margin": "1em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.i(null,"(Coming Soon...)")],null))))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_70759;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_70758;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_70757;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_70756;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_70755;
}});})(x70750_70770))
;


ui.core.Stakes.prototype.constructor = ui.core.Stakes;

ui.core.Stakes.prototype.constructor.displayName = "ui.core/Stakes";

ui.core.Stakes.prototype.om$isComponent = true;

var x70768_70774 = ui.core.Stakes;
/** @nocollapse */
x70768_70774.om$next$IQuery$ = true;

/** @nocollapse */
x70768_70774.om$next$IQuery$query$arity$1 = ((function (x70768_70774){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x70768_70774))
;


var x70769_70775 = ui.core.Stakes.prototype;

x70769_70775.om$next$IQuery$ = true;


x70769_70775.om$next$IQuery$query$arity$1 = ((function (x70769_70775){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x70769_70775))
;


ui.core.Stakes.cljs$lang$type = true;

ui.core.Stakes.cljs$lang$ctorStr = "ui.core/Stakes";

ui.core.Stakes.cljs$lang$ctorPrWriter = (function (this__43445__auto__,writer__43446__auto__,opt__43447__auto__){
return cljs.core._write.call(null,writer__43446__auto__,"ui.core/Stakes");
});
ui.core.stakes_component = om.next.factory.call(null,ui.core.Stakes);
ui.core.canvas_resolution = (800);
ui.core.brain_prerender = (function ui$core$brain_prerender(sections){
return new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__70790,item){
var map__70791 = p__70790;
var map__70791__$1 = ((((!((map__70791 == null)))?((((map__70791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70791):map__70791);
var acc = map__70791__$1;
var vertices = cljs.core.get.call(null,map__70791__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var vertex_colors = cljs.core.get.call(null,map__70791__$1,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377));
var index = cljs.core.get.call(null,map__70791__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.call(null,map__70791__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var map__70793 = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"length","length",588987862),(function (){var iter__32659__auto__ = ((function (map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__70794(s__70795){
return (new cljs.core.LazySeq(null,((function (map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__70795__$1 = s__70795;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70795__$1);
if(temp__4657__auto__){
var s__70795__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70795__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__70795__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__70797 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__70796 = (0);
while(true){
if((i__70796 < size__32658__auto__)){
var coord = cljs.core._nth.call(null,c__32657__auto__,i__70796);
cljs.core.chunk_append.call(null,b__70797,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (i__70796,region_size,coord,c__32657__auto__,size__32658__auto__,b__70797,s__70795__$2,temp__4657__auto__,map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__70776_SHARP_){
return cljs.core.nth.call(null,p1__70776_SHARP_,coord);
});})(i__70796,region_size,coord,c__32657__auto__,size__32658__auto__,b__70797,s__70795__$2,temp__4657__auto__,map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})());

var G__70803 = (i__70796 + (1));
i__70796 = G__70803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70797),ui$core$brain_prerender_$_iter__70794.call(null,cljs.core.chunk_rest.call(null,s__70795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70797),null);
}
} else {
var coord = cljs.core.first.call(null,s__70795__$2);
return cljs.core.cons.call(null,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (region_size,coord,s__70795__$2,temp__4657__auto__,map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__70776_SHARP_){
return cljs.core.nth.call(null,p1__70776_SHARP_,coord);
});})(region_size,coord,s__70795__$2,temp__4657__auto__,map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})(),ui$core$brain_prerender_$_iter__70794.call(null,cljs.core.rest.call(null,s__70795__$2)));
}
} else {
return null;
}
break;
}
});})(map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total))
;
return iter__32659__auto__.call(null,cljs.core.range.call(null,(3)));
})()));
var map__70793__$1 = ((((!((map__70793 == null)))?((((map__70793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70793):map__70793);
var cur_vertices = cljs.core.get.call(null,map__70793__$1,new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716));
var rest_vertices = cljs.core.get.call(null,map__70793__$1,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),rest_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.into.call(null,vertex_colors,(function (){var iter__32659__auto__ = ((function (map__70793,map__70793__$1,cur_vertices,rest_vertices,map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__70799(s__70800){
return (new cljs.core.LazySeq(null,((function (map__70793,map__70793__$1,cur_vertices,rest_vertices,map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__70800__$1 = s__70800;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70800__$1);
if(temp__4657__auto__){
var s__70800__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70800__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__70800__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__70802 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__70801 = (0);
while(true){
if((i__70801 < size__32658__auto__)){
var vertex = cljs.core._nth.call(null,c__32657__auto__,i__70801);
cljs.core.chunk_append.call(null,b__70802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null));

var G__70804 = (i__70801 + (1));
i__70801 = G__70804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70802),ui$core$brain_prerender_$_iter__70799.call(null,cljs.core.chunk_rest.call(null,s__70800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70802),null);
}
} else {
var vertex = cljs.core.first.call(null,s__70800__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null),ui$core$brain_prerender_$_iter__70799.call(null,cljs.core.rest.call(null,s__70800__$2)));
}
} else {
return null;
}
break;
}
});})(map__70793,map__70793__$1,cur_vertices,rest_vertices,map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__70793,map__70793__$1,cur_vertices,rest_vertices,map__70791,map__70791__$1,acc,vertices,vertex_colors,index,total))
;
return iter__32659__auto__.call(null,cur_vertices);
})()),new cljs.core.Keyword(null,"index","index",-1531685915),(index + (1)),new cljs.core.Keyword(null,"total","total",1916810418),(total - new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))], null);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),ui.core.brain_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"size","size",1098693007),sections))], null),sections));
});
ui.core.render_graph = (function ui$core$render_graph(brain_faces,vertexes,vertex_colors){
var iter__32659__auto__ = (function ui$core$render_graph_$_iter__70837(s__70838){
return (new cljs.core.LazySeq(null,(function (){
var s__70838__$1 = s__70838;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70838__$1);
if(temp__4657__auto__){
var s__70838__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70838__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__70838__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__70840 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__70839 = (0);
while(true){
if((i__70839 < size__32658__auto__)){
var vec__70855 = cljs.core._nth.call(null,c__32657__auto__,i__70839);
var region = cljs.core.nth.call(null,vec__70855,(0),null);
var faces = cljs.core.nth.call(null,vec__70855,(1),null);
cljs.core.chunk_append.call(null,b__70840,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__32659__auto__ = ((function (i__70839,vec__70855,region,faces,c__32657__auto__,size__32658__auto__,b__70840,s__70838__$2,temp__4657__auto__){
return (function ui$core$render_graph_$_iter__70837_$_iter__70858(s__70859){
return (new cljs.core.LazySeq(null,((function (i__70839,vec__70855,region,faces,c__32657__auto__,size__32658__auto__,b__70840,s__70838__$2,temp__4657__auto__){
return (function (){
var s__70859__$1 = s__70859;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__70859__$1);
if(temp__4657__auto____$1){
var s__70859__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70859__$2)){
var c__32657__auto____$1 = cljs.core.chunk_first.call(null,s__70859__$2);
var size__32658__auto____$1 = cljs.core.count.call(null,c__32657__auto____$1);
var b__70861 = cljs.core.chunk_buffer.call(null,size__32658__auto____$1);
if((function (){var i__70860 = (0);
while(true){
if((i__70860 < size__32658__auto____$1)){
var n = cljs.core._nth.call(null,c__32657__auto____$1,i__70860);
cljs.core.chunk_append.call(null,b__70861,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__70860,i__70839,n,c__32657__auto____$1,size__32658__auto____$1,b__70861,s__70859__$2,temp__4657__auto____$1,vec__70855,region,faces,c__32657__auto__,size__32658__auto__,b__70840,s__70838__$2,temp__4657__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__70860,i__70839,n,c__32657__auto____$1,size__32658__auto____$1,b__70861,s__70859__$2,temp__4657__auto____$1,vec__70855,region,faces,c__32657__auto__,size__32658__auto__,b__70840,s__70838__$2,temp__4657__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__70869 = (i__70860 + (1));
i__70860 = G__70869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70861),ui$core$render_graph_$_iter__70837_$_iter__70858.call(null,cljs.core.chunk_rest.call(null,s__70859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70861),null);
}
} else {
var n = cljs.core.first.call(null,s__70859__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__70839,n,s__70859__$2,temp__4657__auto____$1,vec__70855,region,faces,c__32657__auto__,size__32658__auto__,b__70840,s__70838__$2,temp__4657__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__70839,n,s__70859__$2,temp__4657__auto____$1,vec__70855,region,faces,c__32657__auto__,size__32658__auto__,b__70840,s__70838__$2,temp__4657__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__70837_$_iter__70858.call(null,cljs.core.rest.call(null,s__70859__$2)));
}
} else {
return null;
}
break;
}
});})(i__70839,vec__70855,region,faces,c__32657__auto__,size__32658__auto__,b__70840,s__70838__$2,temp__4657__auto__))
,null,null));
});})(i__70839,vec__70855,region,faces,c__32657__auto__,size__32658__auto__,b__70840,s__70838__$2,temp__4657__auto__))
;
return iter__32659__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (i__70839,dist,max_dist,mult,centroid,vec__70855,region,faces,c__32657__auto__,size__32658__auto__,b__70840,s__70838__$2,temp__4657__auto__){
return (function (y){
var x__32210__auto__ = (function (){var x__32217__auto__ = 0.11;
var y__32218__auto__ = (y * 0.9);
return ((x__32217__auto__ < y__32218__auto__) ? x__32217__auto__ : y__32218__auto__);
})();
var y__32211__auto__ = -0.05;
return ((x__32210__auto__ > y__32211__auto__) ? x__32210__auto__ : y__32211__auto__);
});})(i__70839,dist,max_dist,mult,centroid,vec__70855,region,faces,c__32657__auto__,size__32658__auto__,b__70840,s__70838__$2,temp__4657__auto__))
);
})()], null);
})());

var G__70870 = (i__70839 + (1));
i__70839 = G__70870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70840),ui$core$render_graph_$_iter__70837.call(null,cljs.core.chunk_rest.call(null,s__70838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70840),null);
}
} else {
var vec__70862 = cljs.core.first.call(null,s__70838__$2);
var region = cljs.core.nth.call(null,vec__70862,(0),null);
var faces = cljs.core.nth.call(null,vec__70862,(1),null);
return cljs.core.cons.call(null,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__32659__auto__ = ((function (vec__70862,region,faces,s__70838__$2,temp__4657__auto__){
return (function ui$core$render_graph_$_iter__70837_$_iter__70865(s__70866){
return (new cljs.core.LazySeq(null,((function (vec__70862,region,faces,s__70838__$2,temp__4657__auto__){
return (function (){
var s__70866__$1 = s__70866;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__70866__$1);
if(temp__4657__auto____$1){
var s__70866__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70866__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__70866__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__70868 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__70867 = (0);
while(true){
if((i__70867 < size__32658__auto__)){
var n = cljs.core._nth.call(null,c__32657__auto__,i__70867);
cljs.core.chunk_append.call(null,b__70868,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__70867,n,c__32657__auto__,size__32658__auto__,b__70868,s__70866__$2,temp__4657__auto____$1,vec__70862,region,faces,s__70838__$2,temp__4657__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__70867,n,c__32657__auto__,size__32658__auto__,b__70868,s__70866__$2,temp__4657__auto____$1,vec__70862,region,faces,s__70838__$2,temp__4657__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__70871 = (i__70867 + (1));
i__70867 = G__70871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70868),ui$core$render_graph_$_iter__70837_$_iter__70865.call(null,cljs.core.chunk_rest.call(null,s__70866__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70868),null);
}
} else {
var n = cljs.core.first.call(null,s__70866__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (n,s__70866__$2,temp__4657__auto____$1,vec__70862,region,faces,s__70838__$2,temp__4657__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(n,s__70866__$2,temp__4657__auto____$1,vec__70862,region,faces,s__70838__$2,temp__4657__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__70837_$_iter__70865.call(null,cljs.core.rest.call(null,s__70866__$2)));
}
} else {
return null;
}
break;
}
});})(vec__70862,region,faces,s__70838__$2,temp__4657__auto__))
,null,null));
});})(vec__70862,region,faces,s__70838__$2,temp__4657__auto__))
;
return iter__32659__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (dist,max_dist,mult,centroid,vec__70862,region,faces,s__70838__$2,temp__4657__auto__){
return (function (y){
var x__32210__auto__ = (function (){var x__32217__auto__ = 0.11;
var y__32218__auto__ = (y * 0.9);
return ((x__32217__auto__ < y__32218__auto__) ? x__32217__auto__ : y__32218__auto__);
})();
var y__32211__auto__ = -0.05;
return ((x__32210__auto__ > y__32211__auto__) ? x__32210__auto__ : y__32211__auto__);
});})(dist,max_dist,mult,centroid,vec__70862,region,faces,s__70838__$2,temp__4657__auto__))
);
})()], null);
})(),ui$core$render_graph_$_iter__70837.call(null,cljs.core.rest.call(null,s__70838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__32659__auto__.call(null,cljs.core.group_by.call(null,((function (iter__32659__auto__){
return (function (k){
return vertex_colors.call(null,vertexes.call(null,cljs.core.first.call(null,k)));
});})(iter__32659__auto__))
,brain_faces));
});
ui.core.region_color = (function ui$core$region_color(index){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.2,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),0.2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),0.2], null)], null).call(null,index);
});
ui.core.point__GT_screen = (function ui$core$point__GT_screen(canvas_resolution,rotation,p__70872){
var vec__70876 = p__70872;
var xx = cljs.core.nth.call(null,vec__70876,(0),null);
var yy = cljs.core.nth.call(null,vec__70876,(1),null);
var zz = cljs.core.nth.call(null,vec__70876,(2),null);
var vertex = vec__70876;
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
var G__70973 = ctx;
G__70973.beginPath();

G__70973.moveTo(vertices.call(null,a).call(null,(0)),vertices.call(null,a).call(null,(1)));

G__70973.lineTo(vertices.call(null,b).call(null,(0)),vertices.call(null,b).call(null,(1)));

G__70973.stroke();

return G__70973;
});})(starting_time,vertices))
;
var rgb = ((function (starting_time,vertices,line){
return (function (color,brightness,opaque){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var iter__32659__auto__ = ((function (starting_time,vertices,line){
return (function ui$core$render_brain_$_iter__70974(s__70975){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line){
return (function (){
var s__70975__$1 = s__70975;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70975__$1);
if(temp__4657__auto__){
var s__70975__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70975__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__70975__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__70977 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__70976 = (0);
while(true){
if((i__70976 < size__32658__auto__)){
var c = cljs.core._nth.call(null,c__32657__auto__,i__70976);
cljs.core.chunk_append.call(null,b__70977,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__32217__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__32218__auto__ = (255);
return ((x__32217__auto__ < y__32218__auto__) ? x__32217__auto__ : y__32218__auto__);
})()) + (((1) - colored) * (255))) | (0));
})());

var G__71067 = (i__70976 + (1));
i__70976 = G__71067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70977),ui$core$render_brain_$_iter__70974.call(null,cljs.core.chunk_rest.call(null,s__70975__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70977),null);
}
} else {
var c = cljs.core.first.call(null,s__70975__$2);
return cljs.core.cons.call(null,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__32217__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__32218__auto__ = (255);
return ((x__32217__auto__ < y__32218__auto__) ? x__32217__auto__ : y__32218__auto__);
})()) + (((1) - colored) * (255))) | (0));
})(),ui$core$render_brain_$_iter__70974.call(null,cljs.core.rest.call(null,s__70975__$2)));
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
return iter__32659__auto__.call(null,color);
})()),(cljs.core.truth_(opaque)?((0) + ((1) * new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)))):(0.05 + (0.45 * new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)))))))))].join('');
});})(starting_time,vertices,line))
;
var set_color = ((function (starting_time,vertices,line,rgb){
return (function (color,brightness){
return ctx.strokeStyle = rgb.call(null,color,brightness,false);
});})(starting_time,vertices,line,rgb))
;
var render_text = ((function (starting_time,vertices,line,rgb,set_color){
return (function (p__70978){
var map__70979 = p__70978;
var map__70979__$1 = ((((!((map__70979 == null)))?((((map__70979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70979):map__70979);
var text = cljs.core.get.call(null,map__70979__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var color = cljs.core.get.call(null,map__70979__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var location = cljs.core.get.call(null,map__70979__$1,new cljs.core.Keyword(null,"location","location",1815599388));
if((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)) > (0))){
ctx.lineWidth = (4);

var vec__70981_71068 = location;
var x_71069 = cljs.core.nth.call(null,vec__70981_71068,(0),null);
var y_71070 = cljs.core.nth.call(null,vec__70981_71068,(1),null);
var z_71071 = cljs.core.nth.call(null,vec__70981_71068,(2),null);
ctx.strokeStyle = "#111A22";

ctx.fillStyle = rgb.call(null,color,((z_71071 * (2)) + (1)),true);

cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (vec__70981_71068,x_71069,y_71070,z_71071,map__70979,map__70979__$1,text,color,location,starting_time,vertices,line,rgb,set_color){
return (function (index,s){
var G__70984 = ctx;
G__70984.strokeText(s,x_71069,(y_71070 + (index * (15))));

G__70984.fillText(s,x_71069,(y_71070 + (index * (15))));

return G__70984;
});})(vec__70981_71068,x_71069,y_71070,z_71071,map__70979,map__70979__$1,text,color,location,starting_time,vertices,line,rgb,set_color))
,clojure.string.split.call(null,text,/ /)));

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

var labels = ((cljs.core.seq.call(null,sections))?cljs.core.sort_by.call(null,((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (label){
return cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null));
});})(starting_time,vertices,line,rgb,set_color,render_text,sections))
,(function (){var iter__32659__auto__ = ((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function ui$core$render_brain_$_iter__70985(s__70986){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (){
var s__70986__$1 = s__70986;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70986__$1);
if(temp__4657__auto__){
var s__70986__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70986__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__70986__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__70988 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__70987 = (0);
while(true){
if((i__70987 < size__32658__auto__)){
var map__70993 = cljs.core._nth.call(null,c__32657__auto__,i__70987);
var map__70993__$1 = ((((!((map__70993 == null)))?((((map__70993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70993):map__70993);
var region = cljs.core.get.call(null,map__70993__$1,new cljs.core.Keyword(null,"region","region",270415120));
var centroid = cljs.core.get.call(null,map__70993__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__70993__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append.call(null,b__70988,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null));

var G__71072 = (i__70987 + (1));
i__70987 = G__71072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70988),ui$core$render_brain_$_iter__70985.call(null,cljs.core.chunk_rest.call(null,s__70986__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70988),null);
}
} else {
var map__70995 = cljs.core.first.call(null,s__70986__$2);
var map__70995__$1 = ((((!((map__70995 == null)))?((((map__70995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70995):map__70995);
var region = cljs.core.get.call(null,map__70995__$1,new cljs.core.Keyword(null,"region","region",270415120));
var centroid = cljs.core.get.call(null,map__70995__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__70995__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null),ui$core$render_brain_$_iter__70985.call(null,cljs.core.rest.call(null,s__70986__$2)));
}
} else {
return null;
}
break;
}
});})(starting_time,vertices,line,rgb,set_color,render_text,sections))
,null,null));
});})(starting_time,vertices,line,rgb,set_color,render_text,sections))
;
return iter__32659__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"region","region",270415120),render_graph));
})()):null);
var render_labels = ((function (labels,starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (from,to){
var seq__70997 = cljs.core.seq.call(null,labels);
var chunk__70998 = null;
var count__70999 = (0);
var i__71000 = (0);
while(true){
if((i__71000 < count__70999)){
var label = cljs.core._nth.call(null,chunk__70998,i__71000);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__71073 = seq__70997;
var G__71074 = chunk__70998;
var G__71075 = count__70999;
var G__71076 = (i__71000 + (1));
seq__70997 = G__71073;
chunk__70998 = G__71074;
count__70999 = G__71075;
i__71000 = G__71076;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__70997);
if(temp__4657__auto__){
var seq__70997__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70997__$1)){
var c__32690__auto__ = cljs.core.chunk_first.call(null,seq__70997__$1);
var G__71077 = cljs.core.chunk_rest.call(null,seq__70997__$1);
var G__71078 = c__32690__auto__;
var G__71079 = cljs.core.count.call(null,c__32690__auto__);
var G__71080 = (0);
seq__70997 = G__71077;
chunk__70998 = G__71078;
count__70999 = G__71079;
i__71000 = G__71080;
continue;
} else {
var label = cljs.core.first.call(null,seq__70997__$1);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__71081 = cljs.core.next.call(null,seq__70997__$1);
var G__71082 = null;
var G__71083 = (0);
var G__71084 = (0);
seq__70997 = G__71081;
chunk__70998 = G__71082;
count__70999 = G__71083;
i__71000 = G__71084;
continue;
}
} else {
return null;
}
}
break;
}
});})(labels,starting_time,vertices,line,rgb,set_color,render_text,sections))
;
var seq__71001 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),-0.3,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3,0.3,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,(1000),(2)], null)], null));
var chunk__71002 = null;
var count__71003 = (0);
var i__71004 = (0);
while(true){
if((i__71004 < count__71003)){
var vec__71005 = cljs.core._nth.call(null,chunk__71002,i__71004);
var begin = cljs.core.nth.call(null,vec__71005,(0),null);
var end = cljs.core.nth.call(null,vec__71005,(1),null);
var brightness = cljs.core.nth.call(null,vec__71005,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__71008_71085 = cljs.core.seq.call(null,render_graph);
var chunk__71009_71086 = null;
var count__71010_71087 = (0);
var i__71011_71088 = (0);
while(true){
if((i__71011_71088 < count__71010_71087)){
var map__71012_71089 = cljs.core._nth.call(null,chunk__71009_71086,i__71011_71088);
var map__71012_71090__$1 = ((((!((map__71012_71089 == null)))?((((map__71012_71089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71012_71089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71012_71089):map__71012_71089);
var region_71091 = cljs.core.get.call(null,map__71012_71090__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_71092 = cljs.core.get.call(null,map__71012_71090__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_71093 = cljs.core.get.call(null,map__71012_71090__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_71094 = cljs.core.get.call(null,map__71012_71090__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_71095 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_71091))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_71095,brightness);

var seq__71014_71096 = cljs.core.seq.call(null,faces_71092);
var chunk__71015_71097 = null;
var count__71016_71098 = (0);
var i__71017_71099 = (0);
while(true){
if((i__71017_71099 < count__71016_71098)){
var vec__71018_71100 = cljs.core._nth.call(null,chunk__71015_71097,i__71017_71099);
var a_71101 = cljs.core.nth.call(null,vec__71018_71100,(0),null);
var b_71102 = cljs.core.nth.call(null,vec__71018_71100,(1),null);
var c_71103 = cljs.core.nth.call(null,vec__71018_71100,(2),null);
var face_71104 = vec__71018_71100;
if(((begin < vertices.call(null,a_71101).call(null,(2)))) && ((vertices.call(null,a_71101).call(null,(2)) < end))){
line.call(null,a_71101,b_71102);
} else {
}

var G__71105 = seq__71014_71096;
var G__71106 = chunk__71015_71097;
var G__71107 = count__71016_71098;
var G__71108 = (i__71017_71099 + (1));
seq__71014_71096 = G__71105;
chunk__71015_71097 = G__71106;
count__71016_71098 = G__71107;
i__71017_71099 = G__71108;
continue;
} else {
var temp__4657__auto___71109 = cljs.core.seq.call(null,seq__71014_71096);
if(temp__4657__auto___71109){
var seq__71014_71110__$1 = temp__4657__auto___71109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71014_71110__$1)){
var c__32690__auto___71111 = cljs.core.chunk_first.call(null,seq__71014_71110__$1);
var G__71112 = cljs.core.chunk_rest.call(null,seq__71014_71110__$1);
var G__71113 = c__32690__auto___71111;
var G__71114 = cljs.core.count.call(null,c__32690__auto___71111);
var G__71115 = (0);
seq__71014_71096 = G__71112;
chunk__71015_71097 = G__71113;
count__71016_71098 = G__71114;
i__71017_71099 = G__71115;
continue;
} else {
var vec__71021_71116 = cljs.core.first.call(null,seq__71014_71110__$1);
var a_71117 = cljs.core.nth.call(null,vec__71021_71116,(0),null);
var b_71118 = cljs.core.nth.call(null,vec__71021_71116,(1),null);
var c_71119 = cljs.core.nth.call(null,vec__71021_71116,(2),null);
var face_71120 = vec__71021_71116;
if(((begin < vertices.call(null,a_71117).call(null,(2)))) && ((vertices.call(null,a_71117).call(null,(2)) < end))){
line.call(null,a_71117,b_71118);
} else {
}

var G__71121 = cljs.core.next.call(null,seq__71014_71110__$1);
var G__71122 = null;
var G__71123 = (0);
var G__71124 = (0);
seq__71014_71096 = G__71121;
chunk__71015_71097 = G__71122;
count__71016_71098 = G__71123;
i__71017_71099 = G__71124;
continue;
}
} else {
}
}
break;
}

var G__71125 = seq__71008_71085;
var G__71126 = chunk__71009_71086;
var G__71127 = count__71010_71087;
var G__71128 = (i__71011_71088 + (1));
seq__71008_71085 = G__71125;
chunk__71009_71086 = G__71126;
count__71010_71087 = G__71127;
i__71011_71088 = G__71128;
continue;
} else {
var temp__4657__auto___71129 = cljs.core.seq.call(null,seq__71008_71085);
if(temp__4657__auto___71129){
var seq__71008_71130__$1 = temp__4657__auto___71129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71008_71130__$1)){
var c__32690__auto___71131 = cljs.core.chunk_first.call(null,seq__71008_71130__$1);
var G__71132 = cljs.core.chunk_rest.call(null,seq__71008_71130__$1);
var G__71133 = c__32690__auto___71131;
var G__71134 = cljs.core.count.call(null,c__32690__auto___71131);
var G__71135 = (0);
seq__71008_71085 = G__71132;
chunk__71009_71086 = G__71133;
count__71010_71087 = G__71134;
i__71011_71088 = G__71135;
continue;
} else {
var map__71024_71136 = cljs.core.first.call(null,seq__71008_71130__$1);
var map__71024_71137__$1 = ((((!((map__71024_71136 == null)))?((((map__71024_71136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71024_71136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71024_71136):map__71024_71136);
var region_71138 = cljs.core.get.call(null,map__71024_71137__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_71139 = cljs.core.get.call(null,map__71024_71137__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_71140 = cljs.core.get.call(null,map__71024_71137__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_71141 = cljs.core.get.call(null,map__71024_71137__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_71142 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_71138))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_71142,brightness);

var seq__71026_71143 = cljs.core.seq.call(null,faces_71139);
var chunk__71027_71144 = null;
var count__71028_71145 = (0);
var i__71029_71146 = (0);
while(true){
if((i__71029_71146 < count__71028_71145)){
var vec__71030_71147 = cljs.core._nth.call(null,chunk__71027_71144,i__71029_71146);
var a_71148 = cljs.core.nth.call(null,vec__71030_71147,(0),null);
var b_71149 = cljs.core.nth.call(null,vec__71030_71147,(1),null);
var c_71150 = cljs.core.nth.call(null,vec__71030_71147,(2),null);
var face_71151 = vec__71030_71147;
if(((begin < vertices.call(null,a_71148).call(null,(2)))) && ((vertices.call(null,a_71148).call(null,(2)) < end))){
line.call(null,a_71148,b_71149);
} else {
}

var G__71152 = seq__71026_71143;
var G__71153 = chunk__71027_71144;
var G__71154 = count__71028_71145;
var G__71155 = (i__71029_71146 + (1));
seq__71026_71143 = G__71152;
chunk__71027_71144 = G__71153;
count__71028_71145 = G__71154;
i__71029_71146 = G__71155;
continue;
} else {
var temp__4657__auto___71156__$1 = cljs.core.seq.call(null,seq__71026_71143);
if(temp__4657__auto___71156__$1){
var seq__71026_71157__$1 = temp__4657__auto___71156__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71026_71157__$1)){
var c__32690__auto___71158 = cljs.core.chunk_first.call(null,seq__71026_71157__$1);
var G__71159 = cljs.core.chunk_rest.call(null,seq__71026_71157__$1);
var G__71160 = c__32690__auto___71158;
var G__71161 = cljs.core.count.call(null,c__32690__auto___71158);
var G__71162 = (0);
seq__71026_71143 = G__71159;
chunk__71027_71144 = G__71160;
count__71028_71145 = G__71161;
i__71029_71146 = G__71162;
continue;
} else {
var vec__71033_71163 = cljs.core.first.call(null,seq__71026_71157__$1);
var a_71164 = cljs.core.nth.call(null,vec__71033_71163,(0),null);
var b_71165 = cljs.core.nth.call(null,vec__71033_71163,(1),null);
var c_71166 = cljs.core.nth.call(null,vec__71033_71163,(2),null);
var face_71167 = vec__71033_71163;
if(((begin < vertices.call(null,a_71164).call(null,(2)))) && ((vertices.call(null,a_71164).call(null,(2)) < end))){
line.call(null,a_71164,b_71165);
} else {
}

var G__71168 = cljs.core.next.call(null,seq__71026_71157__$1);
var G__71169 = null;
var G__71170 = (0);
var G__71171 = (0);
seq__71026_71143 = G__71168;
chunk__71027_71144 = G__71169;
count__71028_71145 = G__71170;
i__71029_71146 = G__71171;
continue;
}
} else {
}
}
break;
}

var G__71172 = cljs.core.next.call(null,seq__71008_71130__$1);
var G__71173 = null;
var G__71174 = (0);
var G__71175 = (0);
seq__71008_71085 = G__71172;
chunk__71009_71086 = G__71173;
count__71010_71087 = G__71174;
i__71011_71088 = G__71175;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,begin,(-1000))){
} else {
render_labels.call(null,begin,end);
}

var G__71176 = seq__71001;
var G__71177 = chunk__71002;
var G__71178 = count__71003;
var G__71179 = (i__71004 + (1));
seq__71001 = G__71176;
chunk__71002 = G__71177;
count__71003 = G__71178;
i__71004 = G__71179;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__71001);
if(temp__4657__auto__){
var seq__71001__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71001__$1)){
var c__32690__auto__ = cljs.core.chunk_first.call(null,seq__71001__$1);
var G__71180 = cljs.core.chunk_rest.call(null,seq__71001__$1);
var G__71181 = c__32690__auto__;
var G__71182 = cljs.core.count.call(null,c__32690__auto__);
var G__71183 = (0);
seq__71001 = G__71180;
chunk__71002 = G__71181;
count__71003 = G__71182;
i__71004 = G__71183;
continue;
} else {
var vec__71036 = cljs.core.first.call(null,seq__71001__$1);
var begin = cljs.core.nth.call(null,vec__71036,(0),null);
var end = cljs.core.nth.call(null,vec__71036,(1),null);
var brightness = cljs.core.nth.call(null,vec__71036,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__71039_71184 = cljs.core.seq.call(null,render_graph);
var chunk__71040_71185 = null;
var count__71041_71186 = (0);
var i__71042_71187 = (0);
while(true){
if((i__71042_71187 < count__71041_71186)){
var map__71043_71188 = cljs.core._nth.call(null,chunk__71040_71185,i__71042_71187);
var map__71043_71189__$1 = ((((!((map__71043_71188 == null)))?((((map__71043_71188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71043_71188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71043_71188):map__71043_71188);
var region_71190 = cljs.core.get.call(null,map__71043_71189__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_71191 = cljs.core.get.call(null,map__71043_71189__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_71192 = cljs.core.get.call(null,map__71043_71189__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_71193 = cljs.core.get.call(null,map__71043_71189__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_71194 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_71190))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_71194,brightness);

var seq__71045_71195 = cljs.core.seq.call(null,faces_71191);
var chunk__71046_71196 = null;
var count__71047_71197 = (0);
var i__71048_71198 = (0);
while(true){
if((i__71048_71198 < count__71047_71197)){
var vec__71049_71199 = cljs.core._nth.call(null,chunk__71046_71196,i__71048_71198);
var a_71200 = cljs.core.nth.call(null,vec__71049_71199,(0),null);
var b_71201 = cljs.core.nth.call(null,vec__71049_71199,(1),null);
var c_71202 = cljs.core.nth.call(null,vec__71049_71199,(2),null);
var face_71203 = vec__71049_71199;
if(((begin < vertices.call(null,a_71200).call(null,(2)))) && ((vertices.call(null,a_71200).call(null,(2)) < end))){
line.call(null,a_71200,b_71201);
} else {
}

var G__71204 = seq__71045_71195;
var G__71205 = chunk__71046_71196;
var G__71206 = count__71047_71197;
var G__71207 = (i__71048_71198 + (1));
seq__71045_71195 = G__71204;
chunk__71046_71196 = G__71205;
count__71047_71197 = G__71206;
i__71048_71198 = G__71207;
continue;
} else {
var temp__4657__auto___71208__$1 = cljs.core.seq.call(null,seq__71045_71195);
if(temp__4657__auto___71208__$1){
var seq__71045_71209__$1 = temp__4657__auto___71208__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71045_71209__$1)){
var c__32690__auto___71210 = cljs.core.chunk_first.call(null,seq__71045_71209__$1);
var G__71211 = cljs.core.chunk_rest.call(null,seq__71045_71209__$1);
var G__71212 = c__32690__auto___71210;
var G__71213 = cljs.core.count.call(null,c__32690__auto___71210);
var G__71214 = (0);
seq__71045_71195 = G__71211;
chunk__71046_71196 = G__71212;
count__71047_71197 = G__71213;
i__71048_71198 = G__71214;
continue;
} else {
var vec__71052_71215 = cljs.core.first.call(null,seq__71045_71209__$1);
var a_71216 = cljs.core.nth.call(null,vec__71052_71215,(0),null);
var b_71217 = cljs.core.nth.call(null,vec__71052_71215,(1),null);
var c_71218 = cljs.core.nth.call(null,vec__71052_71215,(2),null);
var face_71219 = vec__71052_71215;
if(((begin < vertices.call(null,a_71216).call(null,(2)))) && ((vertices.call(null,a_71216).call(null,(2)) < end))){
line.call(null,a_71216,b_71217);
} else {
}

var G__71220 = cljs.core.next.call(null,seq__71045_71209__$1);
var G__71221 = null;
var G__71222 = (0);
var G__71223 = (0);
seq__71045_71195 = G__71220;
chunk__71046_71196 = G__71221;
count__71047_71197 = G__71222;
i__71048_71198 = G__71223;
continue;
}
} else {
}
}
break;
}

var G__71224 = seq__71039_71184;
var G__71225 = chunk__71040_71185;
var G__71226 = count__71041_71186;
var G__71227 = (i__71042_71187 + (1));
seq__71039_71184 = G__71224;
chunk__71040_71185 = G__71225;
count__71041_71186 = G__71226;
i__71042_71187 = G__71227;
continue;
} else {
var temp__4657__auto___71228__$1 = cljs.core.seq.call(null,seq__71039_71184);
if(temp__4657__auto___71228__$1){
var seq__71039_71229__$1 = temp__4657__auto___71228__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71039_71229__$1)){
var c__32690__auto___71230 = cljs.core.chunk_first.call(null,seq__71039_71229__$1);
var G__71231 = cljs.core.chunk_rest.call(null,seq__71039_71229__$1);
var G__71232 = c__32690__auto___71230;
var G__71233 = cljs.core.count.call(null,c__32690__auto___71230);
var G__71234 = (0);
seq__71039_71184 = G__71231;
chunk__71040_71185 = G__71232;
count__71041_71186 = G__71233;
i__71042_71187 = G__71234;
continue;
} else {
var map__71055_71235 = cljs.core.first.call(null,seq__71039_71229__$1);
var map__71055_71236__$1 = ((((!((map__71055_71235 == null)))?((((map__71055_71235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71055_71235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71055_71235):map__71055_71235);
var region_71237 = cljs.core.get.call(null,map__71055_71236__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_71238 = cljs.core.get.call(null,map__71055_71236__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_71239 = cljs.core.get.call(null,map__71055_71236__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_71240 = cljs.core.get.call(null,map__71055_71236__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_71241 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_71237))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_71241,brightness);

var seq__71057_71242 = cljs.core.seq.call(null,faces_71238);
var chunk__71058_71243 = null;
var count__71059_71244 = (0);
var i__71060_71245 = (0);
while(true){
if((i__71060_71245 < count__71059_71244)){
var vec__71061_71246 = cljs.core._nth.call(null,chunk__71058_71243,i__71060_71245);
var a_71247 = cljs.core.nth.call(null,vec__71061_71246,(0),null);
var b_71248 = cljs.core.nth.call(null,vec__71061_71246,(1),null);
var c_71249 = cljs.core.nth.call(null,vec__71061_71246,(2),null);
var face_71250 = vec__71061_71246;
if(((begin < vertices.call(null,a_71247).call(null,(2)))) && ((vertices.call(null,a_71247).call(null,(2)) < end))){
line.call(null,a_71247,b_71248);
} else {
}

var G__71251 = seq__71057_71242;
var G__71252 = chunk__71058_71243;
var G__71253 = count__71059_71244;
var G__71254 = (i__71060_71245 + (1));
seq__71057_71242 = G__71251;
chunk__71058_71243 = G__71252;
count__71059_71244 = G__71253;
i__71060_71245 = G__71254;
continue;
} else {
var temp__4657__auto___71255__$2 = cljs.core.seq.call(null,seq__71057_71242);
if(temp__4657__auto___71255__$2){
var seq__71057_71256__$1 = temp__4657__auto___71255__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71057_71256__$1)){
var c__32690__auto___71257 = cljs.core.chunk_first.call(null,seq__71057_71256__$1);
var G__71258 = cljs.core.chunk_rest.call(null,seq__71057_71256__$1);
var G__71259 = c__32690__auto___71257;
var G__71260 = cljs.core.count.call(null,c__32690__auto___71257);
var G__71261 = (0);
seq__71057_71242 = G__71258;
chunk__71058_71243 = G__71259;
count__71059_71244 = G__71260;
i__71060_71245 = G__71261;
continue;
} else {
var vec__71064_71262 = cljs.core.first.call(null,seq__71057_71256__$1);
var a_71263 = cljs.core.nth.call(null,vec__71064_71262,(0),null);
var b_71264 = cljs.core.nth.call(null,vec__71064_71262,(1),null);
var c_71265 = cljs.core.nth.call(null,vec__71064_71262,(2),null);
var face_71266 = vec__71064_71262;
if(((begin < vertices.call(null,a_71263).call(null,(2)))) && ((vertices.call(null,a_71263).call(null,(2)) < end))){
line.call(null,a_71263,b_71264);
} else {
}

var G__71267 = cljs.core.next.call(null,seq__71057_71256__$1);
var G__71268 = null;
var G__71269 = (0);
var G__71270 = (0);
seq__71057_71242 = G__71267;
chunk__71058_71243 = G__71268;
count__71059_71244 = G__71269;
i__71060_71245 = G__71270;
continue;
}
} else {
}
}
break;
}

var G__71271 = cljs.core.next.call(null,seq__71039_71229__$1);
var G__71272 = null;
var G__71273 = (0);
var G__71274 = (0);
seq__71039_71184 = G__71271;
chunk__71040_71185 = G__71272;
count__71041_71186 = G__71273;
i__71042_71187 = G__71274;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,begin,(-1000))){
} else {
render_labels.call(null,begin,end);
}

var G__71275 = cljs.core.next.call(null,seq__71001__$1);
var G__71276 = null;
var G__71277 = (0);
var G__71278 = (0);
seq__71001 = G__71275;
chunk__71002 = G__71276;
count__71003 = G__71277;
i__71004 = G__71278;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * @constructor
 */
ui.core.Brain = (function ui$core$Brain(){
var this__43442__auto__ = this;
React.Component.apply(this__43442__auto__,arguments);

if(!((this__43442__auto__.initLocalState == null))){
this__43442__auto__.state = this__43442__auto__.initLocalState();
} else {
this__43442__auto__.state = {};
}

return this__43442__auto__;
});

ui.core.Brain.prototype = goog.object.clone(React.Component.prototype);

var x71283_71313 = ui.core.Brain.prototype;
x71283_71313.componentWillUpdate = ((function (x71283_71313){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
if(((!((this__43333__auto__ == null)))?(((false) || (this__43333__auto__.om$next$Ident$))?true:false):false)){
var ident__43337__auto___71314 = om.next.ident.call(null,this__43333__auto__,om.next.props.call(null,this__43333__auto__));
var next_ident__43338__auto___71315 = om.next.ident.call(null,this__43333__auto__,om.next._next_props.call(null,next_props__43334__auto__,this__43333__auto__));
if(cljs.core.not_EQ_.call(null,ident__43337__auto___71314,next_ident__43338__auto___71315)){
var idxr__43339__auto___71316 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43339__auto___71316 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43339__auto___71316),((function (idxr__43339__auto___71316,ident__43337__auto___71314,next_ident__43338__auto___71315,this__43333__auto__,x71283_71313){
return (function (indexes__43340__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__43340__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43337__auto___71314], null),cljs.core.disj,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43338__auto___71315], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43333__auto__);
});})(idxr__43339__auto___71316,ident__43337__auto___71314,next_ident__43338__auto___71315,this__43333__auto__,x71283_71313))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__43333__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__43333__auto__);
});})(x71283_71313))
;

x71283_71313.shouldComponentUpdate = ((function (x71283_71313){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
var next_children__43336__auto__ = next_props__43334__auto__.children;
var next_props__43334__auto____$1 = goog.object.get(next_props__43334__auto__,"omcljs$value");
var next_props__43334__auto____$2 = (function (){var G__71285 = next_props__43334__auto____$1;
if((next_props__43334__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__71285);
} else {
return G__71285;
}
})();
var or__31879__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__43333__auto__),next_props__43334__auto____$2);
if(or__31879__auto__){
return or__31879__auto__;
} else {
var or__31879__auto____$1 = (function (){var and__31867__auto__ = this__43333__auto__.state;
if(cljs.core.truth_(and__31867__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__43333__auto__.state,"omcljs$state"),goog.object.get(next_state__43335__auto__,"omcljs$state"));
} else {
return and__31867__auto__;
}
})();
if(cljs.core.truth_(or__31879__auto____$1)){
return or__31879__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__43333__auto__.props.children,next_children__43336__auto__);
}
}
});})(x71283_71313))
;

x71283_71313.componentDidUpdate = ((function (x71283_71313){
return (function (prev_props__43341__auto__,prev_state__43342__auto__){
var this__43333__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__43333__auto__);
});})(x71283_71313))
;

x71283_71313.isMounted = ((function (x71283_71313){
return (function (){
var this__43333__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__43333__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x71283_71313))
;

x71283_71313.componentWillMount = ((function (x71283_71313){
return (function (){
var this__43333__auto__ = this;
var indexer__43343__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x71283_71313))
;

x71283_71313.initLocalState = ((function (x71283_71313){
return (function (){
var this$ = this;
var ret__43311__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1708495417),null], null);
var obj71287 = {"omcljs$state":ret__43311__auto__};
return obj71287;
});})(x71283_71313))
;

x71283_71313.componentDidMount = ((function (x71283_71313){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"interval","interval",1708495417),setInterval(((function (this$,x71283_71313){
return (function (){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.update,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),((function (this$,x71283_71313){
return (function (rotation){
ui.core.render_brain.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)).getContext("2d"),rotation,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));

return (rotation + new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));
});})(this$,x71283_71313))
);
});})(this$,x71283_71313))
,(50)));
});})(x71283_71313))
;

x71283_71313.componentWillUnmount = ((function (x71283_71313){
return (function (){
var this__43327__auto__ = this;
var this$ = this__43327__auto__;
var r__43328__auto__ = om.next.get_reconciler.call(null,this__43327__auto__);
var cfg__43329__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__43328__auto__);
var st__43330__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43329__auto__);
var indexer__43331__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43329__auto__);
if(cljs.core.truth_((function (){var and__31867__auto__ = !((st__43330__auto__ == null));
if(and__31867__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__43330__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__43327__auto__], null));
} else {
return and__31867__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__43330__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__43327__auto__);
} else {
}

if((indexer__43331__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_.call(null,indexer__43331__auto__,this__43327__auto__);
}

return clearInterval(new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)));
});})(x71283_71313))
;

x71283_71313.render = ((function (x71283_71313){
return (function (){
var this__43332__auto__ = this;
var this$ = this__43332__auto__;
var _STAR_reconciler_STAR_71288 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_71289 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_71290 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_71291 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_71292 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__43332__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__43332__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__43332__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__43332__auto__);

om.next._STAR_parent_STAR_ = this__43332__auto__;

try{var map__71293 = om.next.props.call(null,this$);
var map__71293__$1 = ((((!((map__71293 == null)))?((((map__71293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71293):map__71293);
var props = map__71293__$1;
var items = cljs.core.get.call(null,map__71293__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
var loading = cljs.core.not.call(null,cljs.core.seq.call(null,items));
var scores = cljs.core.vec.call(null,(function (){var iter__32659__auto__ = ((function (map__71293,map__71293__$1,props,items,loading,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313){
return (function ui$core$iter__71296(s__71297){
return (new cljs.core.LazySeq(null,((function (map__71293,map__71293__$1,props,items,loading,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313){
return (function (){
var s__71297__$1 = s__71297;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71297__$1);
if(temp__4657__auto__){
var s__71297__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71297__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__71297__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__71299 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__71298 = (0);
while(true){
if((i__71298 < size__32658__auto__)){
var item = cljs.core._nth.call(null,c__32657__auto__,i__71298);
cljs.core.chunk_append.call(null,b__71299,(function (){var map__71304 = item;
var map__71304__$1 = ((((!((map__71304 == null)))?((((map__71304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71304):map__71304);
var votes = cljs.core.get.call(null,map__71304__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__32210__auto__ = (0);
var y__32211__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__32210__auto__ > y__32211__auto__) ? x__32210__auto__ : y__32211__auto__);
})());

var G__71317 = (i__71298 + (1));
i__71298 = G__71317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71299),ui$core$iter__71296.call(null,cljs.core.chunk_rest.call(null,s__71297__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71299),null);
}
} else {
var item = cljs.core.first.call(null,s__71297__$2);
return cljs.core.cons.call(null,(function (){var map__71306 = item;
var map__71306__$1 = ((((!((map__71306 == null)))?((((map__71306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71306):map__71306);
var votes = cljs.core.get.call(null,map__71306__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__32210__auto__ = (0);
var y__32211__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__32210__auto__ > y__32211__auto__) ? x__32210__auto__ : y__32211__auto__);
})(),ui$core$iter__71296.call(null,cljs.core.rest.call(null,s__71297__$2)));
}
} else {
return null;
}
break;
}
});})(map__71293,map__71293__$1,props,items,loading,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313))
,null,null));
});})(map__71293,map__71293__$1,props,items,loading,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313))
;
return iter__32659__auto__.call(null,items);
})());
var sections = cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__71293,map__71293__$1,props,items,loading,scores,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313){
return (function (index,item,score){
var map__71308 = item;
var map__71308__$1 = ((((!((map__71308 == null)))?((((map__71308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71308):map__71308);
var description = cljs.core.get.call(null,map__71308__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("item","description","item/description",-1431609213).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var x__32210__auto__ = score;
var y__32211__auto__ = (cljs.core.apply.call(null,cljs.core._PLUS_,scores) / (50));
return ((x__32210__auto__ > y__32211__auto__) ? x__32210__auto__ : y__32211__auto__);
})(),new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});})(map__71293,map__71293__$1,props,items,loading,scores,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313))
,cljs.core.range.call(null),items,scores));
var sections__$1 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core._,new cljs.core.Keyword(null,"size","size",1098693007)),sections));
var map__71294 = om.next.get_computed.call(null,props);
var map__71294__$1 = ((((!((map__71294 == null)))?((((map__71294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71294):map__71294);
var mode = cljs.core.get.call(null,map__71294__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
cljs.core.swap_BANG_.call(null,ui.core.brain_state,((function (map__71293,map__71293__$1,props,items,loading,scores,sections,sections__$1,map__71294,map__71294__$1,mode,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313){
return (function (brain_state){
if(cljs.core.not_EQ_.call(null,sections__$1,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(brain_state))){
var br = ui.core.brain_prerender.call(null,sections__$1);
return cljs.core.assoc.call(null,brain_state,new cljs.core.Keyword(null,"sections","sections",-886710106),sections__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958),br,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629),ui.core.render_graph.call(null,ui.core.brain_faces,ui.core.brain_vertices,br));
} else {
return brain_state;
}
});})(map__71293,map__71293__$1,props,items,loading,scores,sections,sections__$1,map__71294,map__71294__$1,mode,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313))
);

return ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"colored","colored",-1421800355),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"speed","speed",1257663751),0.01], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colored","colored",-1421800355),ui.motion.spring.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"brain","brain",428499577))) && (!(loading)))?(1):(0)),ui.motion.gentle),new cljs.core.Keyword(null,"top","top",-1856271961),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(50):(0))),new cljs.core.Keyword(null,"width","width",-384071477),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(150):(60)),ui.motion.wobbly),new cljs.core.Keyword(null,"speed","speed",1257663751),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),null,new cljs.core.Keyword(null,"brain","brain",428499577),null], null), null).call(null,mode))?0.01:(0))], null)], null),((function (map__71293,map__71293__$1,props,items,loading,scores,sections,sections__$1,map__71294,map__71294__$1,mode,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313){
return (function (value){
cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(value));

return cljs.core.apply.call(null,React.DOM.div,({"style": ({"width": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "position": "absolute", "zIndex": om_tools.dom.format_opts.call(null,(((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value) > 0.5))?(1):(-1))), "top": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("%")].join(''))})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.canvas(({"ref": om_tools.dom.format_opts.call(null,((function (map__71293,map__71293__$1,props,items,loading,scores,sections,sections__$1,map__71294,map__71294__$1,mode,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313){
return (function (canvas){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas);
});})(map__71293,map__71293__$1,props,items,loading,scores,sections,sections__$1,map__71294,map__71294__$1,mode,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313))
), "width": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "height": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "style": ({"height": "100%", "width": "100%"})})),((loading)?cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "top": "40%", "left": "25%", "right": "25%", "height": "20%"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.p(({"style": ({"textAlign": "center"})}),"Brain Initializing from Ethereum Blockchain"),blueprint_cljs.core.progress_bar.call(null)],null)))):null)],null))));
});})(map__71293,map__71293__$1,props,items,loading,scores,sections,sections__$1,map__71294,map__71294__$1,mode,_STAR_reconciler_STAR_71288,_STAR_depth_STAR_71289,_STAR_shared_STAR_71290,_STAR_instrument_STAR_71291,_STAR_parent_STAR_71292,this$,this__43332__auto__,x71283_71313))
);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_71292;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_71291;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_71290;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_71289;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_71288;
}});})(x71283_71313))
;


ui.core.Brain.prototype.constructor = ui.core.Brain;

ui.core.Brain.prototype.constructor.displayName = "ui.core/Brain";

ui.core.Brain.prototype.om$isComponent = true;

var x71311_71318 = ui.core.Brain;
/** @nocollapse */
x71311_71318.om$next$IQuery$ = true;

/** @nocollapse */
x71311_71318.om$next$IQuery$query$arity$1 = ((function (x71311_71318){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x71311_71318))
;


var x71312_71319 = ui.core.Brain.prototype;

x71312_71319.om$next$IQuery$ = true;


x71312_71319.om$next$IQuery$query$arity$1 = ((function (x71312_71319){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x71312_71319))
;


ui.core.Brain.cljs$lang$type = true;

ui.core.Brain.cljs$lang$ctorStr = "ui.core/Brain";

ui.core.Brain.cljs$lang$ctorPrWriter = (function (this__43445__auto__,writer__43446__auto__,opt__43447__auto__){
return cljs.core._write.call(null,writer__43446__auto__,"ui.core/Brain");
});
ui.core.brain_component = om.next.factory.call(null,ui.core.Brain);
/**
 * @constructor
 */
ui.core.Root = (function ui$core$Root(){
var this__43442__auto__ = this;
React.Component.apply(this__43442__auto__,arguments);

if(!((this__43442__auto__.initLocalState == null))){
this__43442__auto__.state = this__43442__auto__.initLocalState();
} else {
this__43442__auto__.state = {};
}

return this__43442__auto__;
});

ui.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x71324_71338 = ui.core.Root.prototype;
x71324_71338.componentWillUpdate = ((function (x71324_71338){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
if(((!((this__43333__auto__ == null)))?(((false) || (this__43333__auto__.om$next$Ident$))?true:false):false)){
var ident__43337__auto___71339 = om.next.ident.call(null,this__43333__auto__,om.next.props.call(null,this__43333__auto__));
var next_ident__43338__auto___71340 = om.next.ident.call(null,this__43333__auto__,om.next._next_props.call(null,next_props__43334__auto__,this__43333__auto__));
if(cljs.core.not_EQ_.call(null,ident__43337__auto___71339,next_ident__43338__auto___71340)){
var idxr__43339__auto___71341 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43339__auto___71341 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43339__auto___71341),((function (idxr__43339__auto___71341,ident__43337__auto___71339,next_ident__43338__auto___71340,this__43333__auto__,x71324_71338){
return (function (indexes__43340__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__43340__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43337__auto___71339], null),cljs.core.disj,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43338__auto___71340], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43333__auto__);
});})(idxr__43339__auto___71341,ident__43337__auto___71339,next_ident__43338__auto___71340,this__43333__auto__,x71324_71338))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__43333__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__43333__auto__);
});})(x71324_71338))
;

x71324_71338.shouldComponentUpdate = ((function (x71324_71338){
return (function (next_props__43334__auto__,next_state__43335__auto__){
var this__43333__auto__ = this;
var next_children__43336__auto__ = next_props__43334__auto__.children;
var next_props__43334__auto____$1 = goog.object.get(next_props__43334__auto__,"omcljs$value");
var next_props__43334__auto____$2 = (function (){var G__71326 = next_props__43334__auto____$1;
if((next_props__43334__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__71326);
} else {
return G__71326;
}
})();
var or__31879__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__43333__auto__),next_props__43334__auto____$2);
if(or__31879__auto__){
return or__31879__auto__;
} else {
var or__31879__auto____$1 = (function (){var and__31867__auto__ = this__43333__auto__.state;
if(cljs.core.truth_(and__31867__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__43333__auto__.state,"omcljs$state"),goog.object.get(next_state__43335__auto__,"omcljs$state"));
} else {
return and__31867__auto__;
}
})();
if(cljs.core.truth_(or__31879__auto____$1)){
return or__31879__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__43333__auto__.props.children,next_children__43336__auto__);
}
}
});})(x71324_71338))
;

x71324_71338.componentDidUpdate = ((function (x71324_71338){
return (function (prev_props__43341__auto__,prev_state__43342__auto__){
var this__43333__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__43333__auto__);
});})(x71324_71338))
;

x71324_71338.isMounted = ((function (x71324_71338){
return (function (){
var this__43333__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__43333__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x71324_71338))
;

x71324_71338.componentWillMount = ((function (x71324_71338){
return (function (){
var this__43333__auto__ = this;
var indexer__43343__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43333__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__43343__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__43343__auto__,this__43333__auto__);
}
});})(x71324_71338))
;

x71324_71338.initLocalState = ((function (x71324_71338){
return (function (){
var this$ = this;
var ret__43311__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),null], null),new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.Keyword(null,"brain","brain",428499577)], null);
var obj71328 = {"omcljs$state":ret__43311__auto__};
return obj71328;
});})(x71324_71338))
;

x71324_71338.componentDidMount = ((function (x71324_71338){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),(function (){var update_address = ((function (this$,x71324_71338){
return (function (){
var address = (web3.eth.accounts[(0)]);
if(cljs.core.not_EQ_.call(null,address,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"address","address",559499426),address);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","change-address","user/change-address",-1674946809,null)),(function (){var x__32713__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"address","address",559499426)),(function (){var x__32713__auto__ = address;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())))));
} else {
return null;
}
});})(this$,x71324_71338))
;
update_address.call(null);

return setInterval(update_address,(1000));
})()], null));
});})(x71324_71338))
;

x71324_71338.componentWillUnmount = ((function (x71324_71338){
return (function (){
var this__43327__auto__ = this;
var this$ = this__43327__auto__;
var r__43328__auto__ = om.next.get_reconciler.call(null,this__43327__auto__);
var cfg__43329__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__43328__auto__);
var st__43330__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43329__auto__);
var indexer__43331__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43329__auto__);
if(cljs.core.truth_((function (){var and__31867__auto__ = !((st__43330__auto__ == null));
if(and__31867__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__43330__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__43327__auto__], null));
} else {
return and__31867__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__43330__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__43327__auto__);
} else {
}

if((indexer__43331__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_.call(null,indexer__43331__auto__,this__43327__auto__);
}

return clearInterval(cljs.core.get_in.call(null,om.next.get_state.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.Keyword(null,"address","address",559499426)], null)));
});})(x71324_71338))
;

x71324_71338.render = ((function (x71324_71338){
return (function (){
var this__43332__auto__ = this;
var this$ = this__43332__auto__;
var _STAR_reconciler_STAR_71329 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_71330 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_71331 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_71332 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_71333 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__43332__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__43332__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__43332__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__43332__auto__);

om.next._STAR_parent_STAR_ = this__43332__auto__;

try{var map__71334 = om.next.props.call(null,this$);
var map__71334__$1 = ((((!((map__71334 == null)))?((((map__71334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71334):map__71334);
var proposals_props = cljs.core.get.call(null,map__71334__$1,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231));
var stakes_props = cljs.core.get.call(null,map__71334__$1,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339));
var items_props = cljs.core.get.call(null,map__71334__$1,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104));
var brain_props = cljs.core.get.call(null,map__71334__$1,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934));
var network_id = cljs.core.get.call(null,map__71334__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var can_vote_proposal = cljs.core.get.call(null,map__71334__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__71334__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dark", "style": ({"display": "flex", "justifyContent": "center", "zoom": 1.3})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"flexGrow": "1", "maxWidth": "600px"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.tabs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__71334,map__71334__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_71329,_STAR_depth_STAR_71330,_STAR_shared_STAR_71331,_STAR_instrument_STAR_71332,_STAR_parent_STAR_71333,this$,this__43332__auto__,x71324_71338){
return (function (index){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"white","white",-483998618)], null).call(null,index));
});})(map__71334,map__71334__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_71329,_STAR_depth_STAR_71330,_STAR_shared_STAR_71331,_STAR_instrument_STAR_71332,_STAR_parent_STAR_71333,this$,this__43332__auto__,x71324_71338))
], null),blueprint_cljs.core.tab_list.call(null,blueprint_cljs.core.tab.call(null,"Brain"),blueprint_cljs.core.tab.call(null,"Top 10 Items"),blueprint_cljs.core.tab.call(null,"Today's Proposed Items"),blueprint_cljs.core.tab.call(null,"Voting Stakes"),blueprint_cljs.core.tab.call(null,"FAQ")),blueprint_cljs.core.tab_panel.call(null,cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "bottom": (0), "left": (0), "right": (0), "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-elevation-4", "style": ({"opacity": om_tools.dom.format_opts.call(null,(cljs.core.truth_(ui.core.web3)?0.7:(1))), "maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(ui.core.web3)?null:cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "alignItems": "center", "fontSize": "1.1rem", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"margin": "0.5em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["EthereanMind requires access to the ",React.DOM.a(({"target": "_blank", "href": "http://ethereum.org"}),"ethereum network "),"to initialize. Please install the ",React.DOM.a(({"target": "_blank", "href": "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"}),"metamask chrome extension"),", or a similar ethereum data source."],null)))),React.DOM.img(({"src": "metamask.png"}))],null))))),React.DOM.h3(({"style": ({"textAlign": "center"})}),"Ethereans, what's on your mind?"),React.DOM.p(null,"EthereanMind lets ethereum users maintain a decentralized \"Top 10 list\" of the most important items to the community. Voting attacks are prevented via time-locked, fully refundable deposits in a staking contract.")],null)))),(cljs.core.truth_((function (){var and__31867__auto__ = ui.core.web3;
if(cljs.core.truth_(and__31867__auto__)){
var and__31867__auto____$1 = network_id;
if(cljs.core.truth_(and__31867__auto____$1)){
return cljs.core.not_EQ_.call(null,network_id,(3));
} else {
return and__31867__auto____$1;
}
} else {
return and__31867__auto__;
}
})())?cljs.core.apply.call(null,React.DOM.div,({"className": "pt-callout pt-intent-danger pt-icon-warning-sign", "style": ({"maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h5(null,"Wrong Network!"),((cljs.core._EQ_.call(null,network_id,(1)))?"You are currently connected to the Ethereum main network which uses real currency. This beta dapp is still running on the Ropsten testnet, which uses free currency. Do not yet use real money with this dapp!":"You are connected to the wrong network! This beta dapp is currently runing on the Ropsten Testnet. In Metamask, change the network option in the upper left corner of the popup window.")],null)))):null),((cljs.core._EQ_.call(null,network_id,(3)))?cljs.core.apply.call(null,React.DOM.div,({"className": "pt-callout pt-intent-warning pt-icon-warning-sign", "style": ({"maxWidth": "500px", "marginBottom": "2rem", "opacity": 0.5, "fontSize": "0.7em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h5(null,"Ropsten Testnet Attack"),"Please be aware that the ethereum testnet is experiencing a (senseless) spam attack this week. This may cause failures in staking/voting that will not exist once this app goes out of beta on the main ethereum network."],null)))):null)],null))))),blueprint_cljs.core.tab_panel.call(null,ui.core.items_component.call(null,items_props)),blueprint_cljs.core.tab_panel.call(null,ui.core.proposals_component.call(null,proposals_props)),blueprint_cljs.core.tab_panel.call(null,ui.core.stakes_component.call(null,stakes_props)),blueprint_cljs.core.tab_panel.call(null,ui.faq_text.faq_text))],null)))),cljs.core.apply.call(null,React.DOM.div,({"key": "foo", "style": ({"position": "fixed", "display": "flex", "flexDirection": "column", "alignItems": "flex-end", "right": (0), "bottom": (0), "padding": "0.5rem", "opacity": "0.5"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,false,can_vote_proposal))?blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.15em"], null)], null),"Today's proposal action used up"):null),blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.15em"], null)], null),"Current Stake: ",((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?blueprint_cljs.core.spinner.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-small"], null)):stake)," Ether")],null)))),cljs.core.apply.call(null,React.DOM.div,({"key": "bar", "style": ({"pointerEvents": "none ", "top": (0), "width": "100%", "justifyContent": "center", "opacity": (1), "display": "flex", "position": "absolute", "height": "100%", "alignItems": "center", "left": (0)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.core.brain_component.call(null,om.next.computed.call(null,brain_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))], null)))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_71333;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_71332;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_71331;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_71330;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_71329;
}});})(x71324_71338))
;


ui.core.Root.prototype.constructor = ui.core.Root;

ui.core.Root.prototype.constructor.displayName = "ui.core/Root";

ui.core.Root.prototype.om$isComponent = true;

var x71336_71342 = ui.core.Root;
/** @nocollapse */
x71336_71342.om$next$IQuery$ = true;

/** @nocollapse */
x71336_71342.om$next$IQuery$query$arity$1 = ((function (x71336_71342){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x71336_71342))
;


var x71337_71343 = ui.core.Root.prototype;

x71337_71343.om$next$IQuery$ = true;


x71337_71343.om$next$IQuery$query$arity$1 = ((function (x71337_71343){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x71337_71343))
;


ui.core.Root.cljs$lang$type = true;

ui.core.Root.cljs$lang$ctorStr = "ui.core/Root";

ui.core.Root.cljs$lang$ctorPrWriter = (function (this__43445__auto__,writer__43446__auto__,opt__43447__auto__){
return cljs.core._write.call(null,writer__43446__auto__,"ui.core/Root");
});
ui.core.simple_read = (function ui$core$simple_read(p__71344,key,_){
var map__71347 = p__71344;
var map__71347__$1 = ((((!((map__71347 == null)))?((((map__71347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71347):map__71347);
var env = map__71347__$1;
var state = cljs.core.get.call(null,map__71347__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state).call(null,key)], null);
});
ui.core.simple_read_with_remote = (function ui$core$simple_read_with_remote(p__71349,key,_){
var map__71352 = p__71349;
var map__71352__$1 = ((((!((map__71352 == null)))?((((map__71352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71352):map__71352);
var env = map__71352__$1;
var state = cljs.core.get.call(null,map__71352__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var value = cljs.core.deref.call(null,state).call(null,key);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"remote","remote",-1593576576),cljs.core.not.call(null,value)], null);
});
ui.core.recursive_read = (function ui$core$recursive_read(query_root,p__71354,_,___$1){
var map__71357 = p__71354;
var map__71357__$1 = ((((!((map__71357 == null)))?((((map__71357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71357):map__71357);
var env = map__71357__$1;
var parser = cljs.core.get.call(null,map__71357__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__71357__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__71357__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__71357__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query-root","query-root",359781888),query_root,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}
});
ui.core.recursive_channel_read = (function ui$core$recursive_channel_read(p__71359,_,___$1){
var map__71362 = p__71359;
var map__71362__$1 = ((((!((map__71362 == null)))?((((map__71362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71362):map__71362);
var env = map__71362__$1;
var parser = cljs.core.get.call(null,map__71362__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__71362__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.call(null,map__71362__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var res = parser.call(null,env,query);
return res;
})()], null);
});
if(typeof ui.core.read !== 'undefined'){
} else {
ui.core.read = (function (){var method_table__32804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__32805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__32806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__32807__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__32808__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__32808__auto__,method_table__32804__auto__,prefer_table__32805__auto__,method_cache__32806__auto__,cached_hierarchy__32807__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),(function() { 
var G__71364__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,true,args);
};
var G__71364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71365__i = 0, G__71365__a = new Array(arguments.length -  0);
while (G__71365__i < G__71365__a.length) {G__71365__a[G__71365__i] = arguments[G__71365__i + 0]; ++G__71365__i;}
  args = new cljs.core.IndexedSeq(G__71365__a,0);
} 
return G__71364__delegate.call(this,args);};
G__71364.cljs$lang$maxFixedArity = 0;
G__71364.cljs$lang$applyTo = (function (arglist__71366){
var args = cljs.core.seq(arglist__71366);
return G__71364__delegate(args);
});
G__71364.cljs$core$IFn$_invoke$arity$variadic = G__71364__delegate;
return G__71364;
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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__31879__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.Keyword("user","address","user/address",573600859)], null)),new cljs.core.Keyword("stake","value","stake/value",466231031)], null));
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return (0);
}
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","items","etherean/items",165918606),(function (env,k,params){
var map__71367 = env;
var map__71367__$1 = ((((!((map__71367 == null)))?((((map__71367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71367):map__71367);
var parser = cljs.core.get.call(null,map__71367__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__71367__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__71367__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__71367__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__71367__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__32659__auto__ = ((function (map__71367,map__71367__$1,parser,state,query,target,ast,state__$1){
return (function ui$core$iter__71369(s__71370){
return (new cljs.core.LazySeq(null,((function (map__71367,map__71367__$1,parser,state,query,target,ast,state__$1){
return (function (){
var s__71370__$1 = s__71370;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71370__$1);
if(temp__4657__auto__){
var s__71370__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71370__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__71370__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__71372 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__71371 = (0);
while(true){
if((i__71371 < size__32658__auto__)){
var item = cljs.core._nth.call(null,c__32657__auto__,i__71371);
cljs.core.chunk_append.call(null,b__71372,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query));

var G__71373 = (i__71371 + (1));
i__71371 = G__71373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71372),ui$core$iter__71369.call(null,cljs.core.chunk_rest.call(null,s__71370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71372),null);
}
} else {
var item = cljs.core.first.call(null,s__71370__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query),ui$core$iter__71369.call(null,cljs.core.rest.call(null,s__71370__$2)));
}
} else {
return null;
}
break;
}
});})(map__71367,map__71367__$1,parser,state,query,target,ast,state__$1))
,null,null));
});})(map__71367,map__71367__$1,parser,state,query,target,ast,state__$1))
;
return iter__32659__auto__.call(null,new cljs.core.Keyword("item","by-id","item/by-id",-2140839086).cljs$core$IFn$_invoke$arity$1(state__$1));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),(function (env,k,params){
var map__71374 = env;
var map__71374__$1 = ((((!((map__71374 == null)))?((((map__71374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71374):map__71374);
var parser = cljs.core.get.call(null,map__71374__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__71374__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__71374__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__71374__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__71374__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__71375 = state__$1;
var map__71375__$1 = ((((!((map__71375 == null)))?((((map__71375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71375):map__71375);
var order = cljs.core.get.call(null,map__71375__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__32659__auto__ = ((function (map__71374,map__71374__$1,parser,state,query,target,ast,state__$1,map__71375,map__71375__$1,order){
return (function ui$core$iter__71378(s__71379){
return (new cljs.core.LazySeq(null,((function (map__71374,map__71374__$1,parser,state,query,target,ast,state__$1,map__71375,map__71375__$1,order){
return (function (){
var s__71379__$1 = s__71379;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71379__$1);
if(temp__4657__auto__){
var s__71379__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71379__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__71379__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__71381 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__71380 = (0);
while(true){
if((i__71380 < size__32658__auto__)){
var proposal = cljs.core._nth.call(null,c__32657__auto__,i__71380);
cljs.core.chunk_append.call(null,b__71381,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query));

var G__71382 = (i__71380 + (1));
i__71380 = G__71382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71381),ui$core$iter__71378.call(null,cljs.core.chunk_rest.call(null,s__71379__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71381),null);
}
} else {
var proposal = cljs.core.first.call(null,s__71379__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query),ui$core$iter__71378.call(null,cljs.core.rest.call(null,s__71379__$2)));
}
} else {
return null;
}
break;
}
});})(map__71374,map__71374__$1,parser,state,query,target,ast,state__$1,map__71375,map__71375__$1,order))
,null,null));
});})(map__71374,map__71374__$1,parser,state,query,target,ast,state__$1,map__71375,map__71375__$1,order))
;
return iter__32659__auto__.call(null,order);
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
var map__71383 = env;
var map__71383__$1 = ((((!((map__71383 == null)))?((((map__71383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71383):map__71383);
var parser = cljs.core.get.call(null,map__71383__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__71383__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__71383__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__71383__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__71383__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__71384 = state__$1;
var map__71384__$1 = ((((!((map__71384 == null)))?((((map__71384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71384):map__71384);
var by_id = cljs.core.get.call(null,map__71384__$1,new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__32659__auto__ = ((function (map__71383,map__71383__$1,parser,state,query,target,ast,state__$1,map__71384,map__71384__$1,by_id){
return (function ui$core$iter__71387(s__71388){
return (new cljs.core.LazySeq(null,((function (map__71383,map__71383__$1,parser,state,query,target,ast,state__$1,map__71384,map__71384__$1,by_id){
return (function (){
var s__71388__$1 = s__71388;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71388__$1);
if(temp__4657__auto__){
var s__71388__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71388__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__71388__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__71390 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__71389 = (0);
while(true){
if((i__71389 < size__32658__auto__)){
var stake = cljs.core._nth.call(null,c__32657__auto__,i__71389);
cljs.core.chunk_append.call(null,b__71390,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query));

var G__71391 = (i__71389 + (1));
i__71389 = G__71391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71390),ui$core$iter__71387.call(null,cljs.core.chunk_rest.call(null,s__71388__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71390),null);
}
} else {
var stake = cljs.core.first.call(null,s__71388__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query),ui$core$iter__71387.call(null,cljs.core.rest.call(null,s__71388__$2)));
}
} else {
return null;
}
break;
}
});})(map__71383,map__71383__$1,parser,state,query,target,ast,state__$1,map__71384,map__71384__$1,by_id))
,null,null));
});})(map__71383,map__71383__$1,parser,state,query,target,ast,state__$1,map__71384,map__71384__$1,by_id))
;
return iter__32659__auto__.call(null,cljs.core.vals.call(null,by_id));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__71392__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__71392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71393__i = 0, G__71393__a = new Array(arguments.length -  0);
while (G__71393__i < G__71393__a.length) {G__71393__a[G__71393__i] = arguments[G__71393__i + 0]; ++G__71393__i;}
  args = new cljs.core.IndexedSeq(G__71393__a,0);
} 
return G__71392__delegate.call(this,args);};
G__71392.cljs$lang$maxFixedArity = 0;
G__71392.cljs$lang$applyTo = (function (arglist__71394){
var args = cljs.core.seq(arglist__71394);
return G__71392__delegate(args);
});
G__71392.cljs$core$IFn$_invoke$arity$variadic = G__71392__delegate;
return G__71392;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__71395__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__71395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71396__i = 0, G__71396__a = new Array(arguments.length -  0);
while (G__71396__i < G__71396__a.length) {G__71396__a[G__71396__i] = arguments[G__71396__i + 0]; ++G__71396__i;}
  args = new cljs.core.IndexedSeq(G__71396__a,0);
} 
return G__71395__delegate.call(this,args);};
G__71395.cljs$lang$maxFixedArity = 0;
G__71395.cljs$lang$applyTo = (function (arglist__71397){
var args = cljs.core.seq(arglist__71397);
return G__71395__delegate(args);
});
G__71395.cljs$core$IFn$_invoke$arity$variadic = G__71395__delegate;
return G__71395;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__71398__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__71398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71399__i = 0, G__71399__a = new Array(arguments.length -  0);
while (G__71399__i < G__71399__a.length) {G__71399__a[G__71399__i] = arguments[G__71399__i + 0]; ++G__71399__i;}
  args = new cljs.core.IndexedSeq(G__71399__a,0);
} 
return G__71398__delegate.call(this,args);};
G__71398.cljs$lang$maxFixedArity = 0;
G__71398.cljs$lang$applyTo = (function (arglist__71400){
var args = cljs.core.seq(arglist__71400);
return G__71398__delegate(args);
});
G__71398.cljs$core$IFn$_invoke$arity$variadic = G__71398__delegate;
return G__71398;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__71401__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__71401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71402__i = 0, G__71402__a = new Array(arguments.length -  0);
while (G__71402__i < G__71402__a.length) {G__71402__a[G__71402__i] = arguments[G__71402__i + 0]; ++G__71402__i;}
  args = new cljs.core.IndexedSeq(G__71402__a,0);
} 
return G__71401__delegate.call(this,args);};
G__71401.cljs$lang$maxFixedArity = 0;
G__71401.cljs$lang$applyTo = (function (arglist__71403){
var args = cljs.core.seq(arglist__71403);
return G__71401__delegate(args);
});
G__71401.cljs$core$IFn$_invoke$arity$variadic = G__71401__delegate;
return G__71401;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,k,params){
var map__71404 = env;
var map__71404__$1 = ((((!((map__71404 == null)))?((((map__71404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71404):map__71404);
var parser = cljs.core.get.call(null,map__71404__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__71404__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__71404__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__71404__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__71404__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__71405 = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env);
var map__71405__$1 = ((((!((map__71405 == null)))?((((map__71405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71405):map__71405);
var votes = cljs.core.get.call(null,map__71405__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(votes)?(function (){var iter__32659__auto__ = ((function (map__71404,map__71404__$1,parser,state,query,target,ast,state__$1,map__71405,map__71405__$1,votes){
return (function ui$core$iter__71408(s__71409){
return (new cljs.core.LazySeq(null,((function (map__71404,map__71404__$1,parser,state,query,target,ast,state__$1,map__71405,map__71405__$1,votes){
return (function (){
var s__71409__$1 = s__71409;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71409__$1);
if(temp__4657__auto__){
var s__71409__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71409__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__71409__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__71411 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__71410 = (0);
while(true){
if((i__71410 < size__32658__auto__)){
var item_votes = cljs.core._nth.call(null,c__32657__auto__,i__71410);
cljs.core.chunk_append.call(null,b__71411,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query));

var G__71412 = (i__71410 + (1));
i__71410 = G__71412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71411),ui$core$iter__71408.call(null,cljs.core.chunk_rest.call(null,s__71409__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71411),null);
}
} else {
var item_votes = cljs.core.first.call(null,s__71409__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query),ui$core$iter__71408.call(null,cljs.core.rest.call(null,s__71409__$2)));
}
} else {
return null;
}
break;
}
});})(map__71404,map__71404__$1,parser,state,query,target,ast,state__$1,map__71405,map__71405__$1,votes))
,null,null));
});})(map__71404,map__71404__$1,parser,state,query,target,ast,state__$1,map__71405,map__71405__$1,votes))
;
return iter__32659__auto__.call(null,votes);
})():null)], null);
}
}));
var seq__71413_71423 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake","stake",-1498497787),new cljs.core.Keyword("stake","value","stake/value",466231031),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword("item","description","item/description",-1431609213),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),true], null)], null));
var chunk__71414_71424 = null;
var count__71415_71425 = (0);
var i__71416_71426 = (0);
while(true){
if((i__71416_71426 < count__71415_71425)){
var vec__71417_71427 = cljs.core._nth.call(null,chunk__71414_71424,i__71416_71426);
var object_71428 = cljs.core.nth.call(null,vec__71417_71427,(0),null);
var method_71429 = cljs.core.nth.call(null,vec__71417_71427,(1),null);
var remote_71430 = cljs.core.nth.call(null,vec__71417_71427,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_71429,((function (seq__71413_71423,chunk__71414_71424,count__71415_71425,i__71416_71426,vec__71417_71427,object_71428,method_71429,remote_71430){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_71430,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_71428,dispatch_key], null))], null);
});})(seq__71413_71423,chunk__71414_71424,count__71415_71425,i__71416_71426,vec__71417_71427,object_71428,method_71429,remote_71430))
);

var G__71431 = seq__71413_71423;
var G__71432 = chunk__71414_71424;
var G__71433 = count__71415_71425;
var G__71434 = (i__71416_71426 + (1));
seq__71413_71423 = G__71431;
chunk__71414_71424 = G__71432;
count__71415_71425 = G__71433;
i__71416_71426 = G__71434;
continue;
} else {
var temp__4657__auto___71435 = cljs.core.seq.call(null,seq__71413_71423);
if(temp__4657__auto___71435){
var seq__71413_71436__$1 = temp__4657__auto___71435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71413_71436__$1)){
var c__32690__auto___71437 = cljs.core.chunk_first.call(null,seq__71413_71436__$1);
var G__71438 = cljs.core.chunk_rest.call(null,seq__71413_71436__$1);
var G__71439 = c__32690__auto___71437;
var G__71440 = cljs.core.count.call(null,c__32690__auto___71437);
var G__71441 = (0);
seq__71413_71423 = G__71438;
chunk__71414_71424 = G__71439;
count__71415_71425 = G__71440;
i__71416_71426 = G__71441;
continue;
} else {
var vec__71420_71442 = cljs.core.first.call(null,seq__71413_71436__$1);
var object_71443 = cljs.core.nth.call(null,vec__71420_71442,(0),null);
var method_71444 = cljs.core.nth.call(null,vec__71420_71442,(1),null);
var remote_71445 = cljs.core.nth.call(null,vec__71420_71442,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_71444,((function (seq__71413_71423,chunk__71414_71424,count__71415_71425,i__71416_71426,vec__71420_71442,object_71443,method_71444,remote_71445,seq__71413_71436__$1,temp__4657__auto___71435){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_71445,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_71443,dispatch_key], null))], null);
});})(seq__71413_71423,chunk__71414_71424,count__71415_71425,i__71416_71426,vec__71420_71442,object_71443,method_71444,remote_71445,seq__71413_71436__$1,temp__4657__auto___71435))
);

var G__71446 = cljs.core.next.call(null,seq__71413_71436__$1);
var G__71447 = null;
var G__71448 = (0);
var G__71449 = (0);
seq__71413_71423 = G__71446;
chunk__71414_71424 = G__71447;
count__71415_71425 = G__71448;
i__71416_71426 = G__71449;
continue;
}
} else {
}
}
break;
}
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("db","id","db/id",-1388397098),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4657__auto__ = (function (){var or__31879__auto__ = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
var or__31879__auto____$1 = new cljs.core.Keyword(null,"stake","stake",-1498497787).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__31879__auto____$1)){
return or__31879__auto____$1;
} else {
return new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env);
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var obj = temp__4657__auto__;
return obj.call(null,dispatch_key);
} else {
return null;
}
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),(function() { 
var G__71450__delegate = function (args){
return cljs.core.apply.call(null,ui.core.simple_read_with_remote,args);
};
var G__71450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71451__i = 0, G__71451__a = new Array(arguments.length -  0);
while (G__71451__i < G__71451__a.length) {G__71451__a[G__71451__i] = arguments[G__71451__i + 0]; ++G__71451__i;}
  args = new cljs.core.IndexedSeq(G__71451__a,0);
} 
return G__71450__delegate.call(this,args);};
G__71450.cljs$lang$maxFixedArity = 0;
G__71450.cljs$lang$applyTo = (function (arglist__71452){
var args = cljs.core.seq(arglist__71452);
return G__71450__delegate(args);
});
G__71450.cljs$core$IFn$_invoke$arity$variadic = G__71450__delegate;
return G__71450;
})()
);
if(typeof ui.core.mutate !== 'undefined'){
} else {
ui.core.mutate = (function (){var method_table__32804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__32805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__32806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__32807__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__32808__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__32808__auto__,method_table__32804__auto__,prefer_table__32805__auto__,method_cache__32806__auto__,cached_hierarchy__32807__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("proposal","save","proposal/save",356239610,null),(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__71453 = params;
var map__71453__$1 = ((((!((map__71453 == null)))?((((map__71453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71453):map__71453);
var id = cljs.core.get.call(null,map__71453__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__71453__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),((function (map__71453,map__71453__$1,id,description){
return (function (state){
var map__71455 = state;
var map__71455__$1 = ((((!((map__71455 == null)))?((((map__71455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71455):map__71455);
var proposals = cljs.core.get.call(null,map__71455__$1,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153));
var proposal = proposals.call(null,id);
var new_tempid = om.next.tempid.call(null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),cljs.core.assoc.call(null,cljs.core.update.call(null,proposals,id,cljs.core.assoc,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),description,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false),new_tempid,cljs.core.assoc.call(null,proposal,new cljs.core.Keyword("db","id","db/id",-1388397098),new_tempid,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),true))),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),new_tempid], null));
});})(map__71453,map__71453__$1,id,description))
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
var map__71457 = params;
var map__71457__$1 = ((((!((map__71457 == null)))?((((map__71457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71457):map__71457);
var address = cljs.core.get.call(null,map__71457__$1,new cljs.core.Keyword(null,"address","address",559499426));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__32659__auto__ = (function ui$core$map_by_id_$_iter__71463(s__71464){
return (new cljs.core.LazySeq(null,(function (){
var s__71464__$1 = s__71464;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71464__$1);
if(temp__4657__auto__){
var s__71464__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71464__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__71464__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__71466 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__71465 = (0);
while(true){
if((i__71465 < size__32658__auto__)){
var item = cljs.core._nth.call(null,c__32657__auto__,i__71465);
cljs.core.chunk_append.call(null,b__71466,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null));

var G__71467 = (i__71465 + (1));
i__71465 = G__71467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71466),ui$core$map_by_id_$_iter__71463.call(null,cljs.core.chunk_rest.call(null,s__71464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71466),null);
}
} else {
var item = cljs.core.first.call(null,s__71464__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null),ui$core$map_by_id_$_iter__71463.call(null,cljs.core.rest.call(null,s__71464__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__32659__auto__.call(null,items);
})());
});
ui.core.my_merge_tree = (function ui$core$my_merge_tree(a,b){
var map__71474 = ui.core.tweak_tree.call(null,b);
var map__71474__$1 = ((((!((map__71474 == null)))?((((map__71474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71474):map__71474);
var network_id = cljs.core.get.call(null,map__71474__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var proposals = cljs.core.get.call(null,map__71474__$1,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444));
var order = cljs.core.get.call(null,map__71474__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
var stakes = cljs.core.get.call(null,map__71474__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__71474__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var items = cljs.core.get.call(null,map__71474__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,a,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),((function (map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items){
return (function (k){
var or__31879__auto__ = network_id;
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return k;
}
});})(map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),cljs.core.merge,user),new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),((function (map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items){
return (function (proposals_old){
return cljs.core.merge_with.call(null,cljs.core.merge,proposals_old,ui.core.map_by_id.call(null,proposals));
});})(map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),((function (map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items){
return (function (order_old){
if(cljs.core.truth_(proposals)){
var ks = cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),proposals),cljs.core.filter.call(null,om.next.tempid_QMARK_,cljs.core.map.call(null,cljs.core.second,order_old)));
return cljs.core.vec.call(null,(function (){var iter__32659__auto__ = ((function (ks,map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items){
return (function ui$core$my_merge_tree_$_iter__71476(s__71477){
return (new cljs.core.LazySeq(null,((function (ks,map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items){
return (function (){
var s__71477__$1 = s__71477;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71477__$1);
if(temp__4657__auto__){
var s__71477__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71477__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__71477__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__71479 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__71478 = (0);
while(true){
if((i__71478 < size__32658__auto__)){
var k = cljs.core._nth.call(null,c__32657__auto__,i__71478);
cljs.core.chunk_append.call(null,b__71479,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null));

var G__71480 = (i__71478 + (1));
i__71478 = G__71480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71479),ui$core$my_merge_tree_$_iter__71476.call(null,cljs.core.chunk_rest.call(null,s__71477__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71479),null);
}
} else {
var k = cljs.core.first.call(null,s__71477__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null),ui$core$my_merge_tree_$_iter__71476.call(null,cljs.core.rest.call(null,s__71477__$2)));
}
} else {
return null;
}
break;
}
});})(ks,map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items))
,null,null));
});})(ks,map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items))
;
return iter__32659__auto__.call(null,ks);
})());
} else {
return order_old;
}
});})(map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),((function (map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items){
return (function (stakes_old){
return cljs.core.merge_with.call(null,cljs.core.merge,stakes_old,ui.core.map_by_id.call(null,stakes));
});})(map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),((function (map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items){
return (function (items_old){
var or__31879__auto__ = items;
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return items_old;
}
});})(map__71474,map__71474__$1,network_id,proposals,order,stakes,user,items))
);
});
ui.core.my_merge = (function ui$core$my_merge(reconciler,state,res,query){
var k = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),k,new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,cljs.core.select_keys.call(null,res,k),query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
ui.core.migrate = (function ui$core$migrate(var_args){
var args71481 = [];
var len__32954__auto___71528 = arguments.length;
var i__32955__auto___71529 = (0);
while(true){
if((i__32955__auto___71529 < len__32954__auto___71528)){
args71481.push((arguments[i__32955__auto___71529]));

var G__71530 = (i__32955__auto___71529 + (1));
i__32955__auto___71529 = G__71530;
continue;
} else {
}
break;
}

var G__71483 = args71481.length;
switch (G__71483) {
case 3:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71481.length)].join('')));

}
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return ui.core.migrate.call(null,app_state_pure,query,tempids,null);
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function ui$core$dissoc_in(pure,p__71506){
var vec__71510 = p__71506;
var table = cljs.core.nth.call(null,vec__71510,(0),null);
var id = cljs.core.nth.call(null,vec__71510,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function ui$core$step(pure,p__71513){
var vec__71521 = p__71513;
var old = cljs.core.nth.call(null,vec__71521,(0),null);
var vec__71524 = cljs.core.nth.call(null,vec__71521,(1),null);
var _ = cljs.core.nth.call(null,vec__71524,(0),null);
var id = cljs.core.nth.call(null,vec__71524,(1),null);
var new$ = vec__71524;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__71527 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__71527,id_key,id);
} else {
return G__71527;
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
var args__32961__auto__ = [];
var len__32954__auto___71549 = arguments.length;
var i__32955__auto___71550 = (0);
while(true){
if((i__32955__auto___71550 < len__32954__auto___71549)){
args__32961__auto__.push((arguments[i__32955__auto___71550]));

var G__71551 = (i__32955__auto___71550 + (1));
i__32955__auto___71550 = G__71551;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((2) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((2)),(0),null)):null);
return ui.core.chan_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32962__auto__);
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

var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,c,start_time){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,c,start_time){
return (function (state_71539){
var state_val_71540 = (state_71539[(1)]);
if((state_val_71540 === (1))){
var state_71539__$1 = state_71539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71539__$1,(2),c,result);
} else {
if((state_val_71540 === (2))){
var inst_71536 = (state_71539[(2)]);
var inst_71537 = cljs.core.async.close_BANG_.call(null,c);
var state_71539__$1 = (function (){var statearr_71541 = state_71539;
(statearr_71541[(7)] = inst_71536);

return statearr_71541;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71539__$1,inst_71537);
} else {
return null;
}
}
});})(c__38812__auto__,c,start_time))
;
return ((function (switch__38700__auto__,c__38812__auto__,c,start_time){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_71545 = [null,null,null,null,null,null,null,null];
(statearr_71545[(0)] = ui$core$state_machine__38701__auto__);

(statearr_71545[(1)] = (1));

return statearr_71545;
});
var ui$core$state_machine__38701__auto____1 = (function (state_71539){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71546){if((e71546 instanceof Object)){
var ex__38704__auto__ = e71546;
var statearr_71547_71552 = state_71539;
(statearr_71547_71552[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71553 = state_71539;
state_71539 = G__71553;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_71539){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_71539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,c,start_time))
})();
var state__38814__auto__ = (function (){var statearr_71548 = f__38813__auto__.call(null);
(statearr_71548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,c,start_time))
);

return c__38812__auto__;
});})(c,start_time))
)));

return c;
});

ui.core.chan_call.cljs$lang$maxFixedArity = (2);

ui.core.chan_call.cljs$lang$applyTo = (function (seq71532){
var G__71533 = cljs.core.first.call(null,seq71532);
var seq71532__$1 = cljs.core.next.call(null,seq71532);
var G__71534 = cljs.core.first.call(null,seq71532__$1);
var seq71532__$2 = cljs.core.next.call(null,seq71532__$1);
return ui.core.chan_call.cljs$core$IFn$_invoke$arity$variadic(G__71533,G__71534,seq71532__$2);
});

ui.core.get_network = (function ui$core$get_network(){
var c = cljs.core.async.chan.call(null);
web3.version.getNetwork(((function (c){
return (function (error,result){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,c){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,c){
return (function (state_71571){
var state_val_71572 = (state_71571[(1)]);
if((state_val_71572 === (1))){
var inst_71567 = (result | (0));
var state_71571__$1 = state_71571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71571__$1,(2),c,inst_71567);
} else {
if((state_val_71572 === (2))){
var inst_71569 = (state_71571[(2)]);
var state_71571__$1 = state_71571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71571__$1,inst_71569);
} else {
return null;
}
}
});})(c__38812__auto__,c))
;
return ((function (switch__38700__auto__,c__38812__auto__,c){
return (function() {
var ui$core$get_network_$_state_machine__38701__auto__ = null;
var ui$core$get_network_$_state_machine__38701__auto____0 = (function (){
var statearr_71576 = [null,null,null,null,null,null,null];
(statearr_71576[(0)] = ui$core$get_network_$_state_machine__38701__auto__);

(statearr_71576[(1)] = (1));

return statearr_71576;
});
var ui$core$get_network_$_state_machine__38701__auto____1 = (function (state_71571){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71577){if((e71577 instanceof Object)){
var ex__38704__auto__ = e71577;
var statearr_71578_71580 = state_71571;
(statearr_71578_71580[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71581 = state_71571;
state_71571 = G__71581;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$get_network_$_state_machine__38701__auto__ = function(state_71571){
switch(arguments.length){
case 0:
return ui$core$get_network_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$core$get_network_$_state_machine__38701__auto____1.call(this,state_71571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_network_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_network_$_state_machine__38701__auto____0;
ui$core$get_network_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_network_$_state_machine__38701__auto____1;
return ui$core$get_network_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,c))
})();
var state__38814__auto__ = (function (){var statearr_71579 = f__38813__auto__.call(null);
(statearr_71579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,c))
);

return c__38812__auto__;
});})(c))
);

return c;
});
ui.core.chan_transact = (function ui$core$chan_transact(var_args){
var args__32961__auto__ = [];
var len__32954__auto___71640 = arguments.length;
var i__32955__auto___71641 = (0);
while(true){
if((i__32955__auto___71641 < len__32954__auto___71640)){
args__32961__auto__.push((arguments[i__32955__auto___71641]));

var G__71642 = (i__32955__auto___71641 + (1));
i__32955__auto___71641 = G__71642;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((2) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((2)),(0),null)):null);
return ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32962__auto__);
});

ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic = (function (contract,fname,body){
var c = cljs.core.async.chan.call(null);
var vec__71585 = (((cljs.core.seq.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,body),cljs.core.rest.call(null,body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,body], null));
var obj = cljs.core.nth.call(null,vec__71585,(0),null);
var body__$1 = cljs.core.nth.call(null,vec__71585,(1),null);
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,c,vec__71585,obj,body__$1){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,c,vec__71585,obj,body__$1){
return (function (state_71612){
var state_val_71613 = (state_71612[(1)]);
if((state_val_71613 === (1))){
var inst_71588 = ui.core.get_network.call(null);
var state_71612__$1 = state_71612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71612__$1,(2),inst_71588);
} else {
if((state_val_71613 === (2))){
var inst_71590 = (state_71612[(2)]);
var inst_71591 = cljs.core._EQ_.call(null,inst_71590,(3));
var state_71612__$1 = state_71612;
if(inst_71591){
var statearr_71614_71643 = state_71612__$1;
(statearr_71614_71643[(1)] = (3));

} else {
var statearr_71615_71644 = state_71612__$1;
(statearr_71615_71644[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71613 === (3))){
var inst_71593 = cljs.core.name.call(null,fname);
var inst_71594 = (contract[inst_71593]);
var inst_71595 = inst_71594.sendTransaction;
var inst_71596 = cljs.core.vec.call(null,body__$1);
var inst_71597 = [new cljs.core.Keyword(null,"gas","gas",-139961463)];
var inst_71598 = [(4000000)];
var inst_71599 = cljs.core.PersistentHashMap.fromArrays(inst_71597,inst_71598);
var inst_71600 = cljs.core.merge.call(null,inst_71599,obj);
var inst_71601 = cljs.core.clj__GT_js.call(null,inst_71600);
var inst_71602 = (function (){return ((function (inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1){
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
return cljs.core.reset_BANG_.call(null,timer,setInterval(((function (timer,inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1){
return (function (){
return web3.eth.getTransactionReceipt(result,((function (timer,inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1){
return (function (error__$1,receipt){
if(cljs.core.truth_(receipt)){
var c__38812__auto___71645__$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___71645__$1,timer,inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___71645__$1,timer,inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1){
return (function (state_71620){
var state_val_71621 = (state_71620[(1)]);
if((state_val_71621 === (1))){
var state_71620__$1 = state_71620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71620__$1,(2),c,receipt);
} else {
if((state_val_71621 === (2))){
var inst_71617 = (state_71620[(2)]);
var inst_71618 = cljs.core.async.close_BANG_.call(null,c);
var state_71620__$1 = (function (){var statearr_71622 = state_71620;
(statearr_71622[(7)] = inst_71617);

return statearr_71622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71620__$1,inst_71618);
} else {
return null;
}
}
});})(c__38812__auto___71645__$1,timer,inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1))
;
return ((function (switch__38700__auto__,c__38812__auto___71645__$1,timer,inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_71626 = [null,null,null,null,null,null,null,null];
(statearr_71626[(0)] = ui$core$state_machine__38701__auto__);

(statearr_71626[(1)] = (1));

return statearr_71626;
});
var ui$core$state_machine__38701__auto____1 = (function (state_71620){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71627){if((e71627 instanceof Object)){
var ex__38704__auto__ = e71627;
var statearr_71628_71646 = state_71620;
(statearr_71628_71646[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71647 = state_71620;
state_71620 = G__71647;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_71620){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_71620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___71645__$1,timer,inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1))
})();
var state__38814__auto__ = (function (){var statearr_71629 = f__38813__auto__.call(null);
(statearr_71629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___71645__$1);

return statearr_71629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___71645__$1,timer,inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1))
);


return clearInterval(cljs.core.deref.call(null,timer));
} else {
return null;
}
});})(timer,inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1))
);
});})(timer,inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1))
,(5000)));
}
});
;})(inst_71593,inst_71594,inst_71595,inst_71596,inst_71597,inst_71598,inst_71599,inst_71600,inst_71601,state_val_71613,c__38812__auto__,c,vec__71585,obj,body__$1))
})();
var inst_71603 = cljs.core.conj.call(null,inst_71596,inst_71601,inst_71602);
var inst_71604 = cljs.core.apply.call(null,cljs.core.array,inst_71603);
var inst_71605 = inst_71595.apply(contract,inst_71604);
var state_71612__$1 = (function (){var statearr_71630 = state_71612;
(statearr_71630[(7)] = inst_71605);

return statearr_71630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71612__$1,(6),c);
} else {
if((state_val_71613 === (4))){
var state_71612__$1 = state_71612;
var statearr_71631_71648 = state_71612__$1;
(statearr_71631_71648[(2)] = null);

(statearr_71631_71648[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71613 === (5))){
var inst_71610 = (state_71612[(2)]);
var state_71612__$1 = state_71612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71612__$1,inst_71610);
} else {
if((state_val_71613 === (6))){
var inst_71607 = (state_71612[(2)]);
var state_71612__$1 = state_71612;
var statearr_71632_71649 = state_71612__$1;
(statearr_71632_71649[(2)] = inst_71607);

(statearr_71632_71649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__38812__auto__,c,vec__71585,obj,body__$1))
;
return ((function (switch__38700__auto__,c__38812__auto__,c,vec__71585,obj,body__$1){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_71636 = [null,null,null,null,null,null,null,null];
(statearr_71636[(0)] = ui$core$state_machine__38701__auto__);

(statearr_71636[(1)] = (1));

return statearr_71636;
});
var ui$core$state_machine__38701__auto____1 = (function (state_71612){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71637){if((e71637 instanceof Object)){
var ex__38704__auto__ = e71637;
var statearr_71638_71650 = state_71612;
(statearr_71638_71650[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71651 = state_71612;
state_71612 = G__71651;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_71612){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_71612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,c,vec__71585,obj,body__$1))
})();
var state__38814__auto__ = (function (){var statearr_71639 = f__38813__auto__.call(null);
(statearr_71639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,c,vec__71585,obj,body__$1))
);

return c__38812__auto__;
});

ui.core.chan_transact.cljs$lang$maxFixedArity = (2);

ui.core.chan_transact.cljs$lang$applyTo = (function (seq71582){
var G__71583 = cljs.core.first.call(null,seq71582);
var seq71582__$1 = cljs.core.next.call(null,seq71582);
var G__71584 = cljs.core.first.call(null,seq71582__$1);
var seq71582__$2 = cljs.core.next.call(null,seq71582__$1);
return ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic(G__71583,G__71584,seq71582__$2);
});

ui.core.chan_event = (function ui$core$chan_event(var_args){
var args__32961__auto__ = [];
var len__32954__auto___71672 = arguments.length;
var i__32955__auto___71673 = (0);
while(true){
if((i__32955__auto___71673 < len__32954__auto___71672)){
args__32961__auto__.push((arguments[i__32955__auto___71673]));

var G__71674 = (i__32955__auto___71673 + (1));
i__32955__auto___71673 = G__71674;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((3) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((3)),(0),null)):null);
return ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32962__auto__);
});

ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic = (function (contract,ename,hash,body){
var c = cljs.core.async.chan.call(null);
var event = cljs.core.atom.call(null,null);
cljs.core.reset_BANG_.call(null,event,(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,cljs.core.conj.call(null,cljs.core.vec.call(null,body),((function (c,event){
return (function (error,result){
if(cljs.core._EQ_.call(null,result.transactionHash,hash)){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,c,event){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,c,event){
return (function (state_71662){
var state_val_71663 = (state_71662[(1)]);
if((state_val_71663 === (1))){
var state_71662__$1 = state_71662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71662__$1,(2),c,result);
} else {
if((state_val_71663 === (2))){
var inst_71657 = (state_71662[(2)]);
var inst_71658 = cljs.core.async.close_BANG_.call(null,c);
var inst_71659 = cljs.core.deref.call(null,event);
var inst_71660 = inst_71659.stopWatching();
var state_71662__$1 = (function (){var statearr_71664 = state_71662;
(statearr_71664[(7)] = inst_71658);

(statearr_71664[(8)] = inst_71657);

return statearr_71664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71662__$1,inst_71660);
} else {
return null;
}
}
});})(c__38812__auto__,c,event))
;
return ((function (switch__38700__auto__,c__38812__auto__,c,event){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_71668 = [null,null,null,null,null,null,null,null,null];
(statearr_71668[(0)] = ui$core$state_machine__38701__auto__);

(statearr_71668[(1)] = (1));

return statearr_71668;
});
var ui$core$state_machine__38701__auto____1 = (function (state_71662){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71669){if((e71669 instanceof Object)){
var ex__38704__auto__ = e71669;
var statearr_71670_71675 = state_71662;
(statearr_71670_71675[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71676 = state_71662;
state_71662 = G__71676;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_71662){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_71662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,c,event))
})();
var state__38814__auto__ = (function (){var statearr_71671 = f__38813__auto__.call(null);
(statearr_71671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,c,event))
);

return c__38812__auto__;
} else {
return null;
}
});})(c,event))
))));

return c;
});

ui.core.chan_event.cljs$lang$maxFixedArity = (3);

ui.core.chan_event.cljs$lang$applyTo = (function (seq71652){
var G__71653 = cljs.core.first.call(null,seq71652);
var seq71652__$1 = cljs.core.next.call(null,seq71652);
var G__71654 = cljs.core.first.call(null,seq71652__$1);
var seq71652__$2 = cljs.core.next.call(null,seq71652__$1);
var G__71655 = cljs.core.first.call(null,seq71652__$2);
var seq71652__$3 = cljs.core.next.call(null,seq71652__$2);
return ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic(G__71653,G__71654,G__71655,seq71652__$3);
});

ui.core.query_events = (function ui$core$query_events(contract,starting_block,stopping_block,ename,params){
var c = cljs.core.async.chan.call(null);
var event = cljs.core.atom.call(null,null);
var start_time = ui.core.get_tick_count.call(null);
cljs.core.reset_BANG_.call(null,event,(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,({"fromBlock": starting_block, "toBlock": stopping_block}),((function (c,event,start_time){
return (function (error,result){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,c,event,start_time){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,c,event,start_time){
return (function (state_71699){
var state_val_71700 = (state_71699[(1)]);
if((state_val_71700 === (1))){
var state_71699__$1 = state_71699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71699__$1,(2),c,result);
} else {
if((state_val_71700 === (2))){
var inst_71694 = (state_71699[(2)]);
var inst_71695 = cljs.core.async.close_BANG_.call(null,c);
var inst_71696 = cljs.core.deref.call(null,event);
var inst_71697 = inst_71696.stopWatching();
var state_71699__$1 = (function (){var statearr_71701 = state_71699;
(statearr_71701[(7)] = inst_71694);

(statearr_71701[(8)] = inst_71695);

return statearr_71701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71699__$1,inst_71697);
} else {
return null;
}
}
});})(c__38812__auto__,c,event,start_time))
;
return ((function (switch__38700__auto__,c__38812__auto__,c,event,start_time){
return (function() {
var ui$core$query_events_$_state_machine__38701__auto__ = null;
var ui$core$query_events_$_state_machine__38701__auto____0 = (function (){
var statearr_71705 = [null,null,null,null,null,null,null,null,null];
(statearr_71705[(0)] = ui$core$query_events_$_state_machine__38701__auto__);

(statearr_71705[(1)] = (1));

return statearr_71705;
});
var ui$core$query_events_$_state_machine__38701__auto____1 = (function (state_71699){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71706){if((e71706 instanceof Object)){
var ex__38704__auto__ = e71706;
var statearr_71707_71709 = state_71699;
(statearr_71707_71709[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71710 = state_71699;
state_71699 = G__71710;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$query_events_$_state_machine__38701__auto__ = function(state_71699){
switch(arguments.length){
case 0:
return ui$core$query_events_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$core$query_events_$_state_machine__38701__auto____1.call(this,state_71699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$query_events_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$query_events_$_state_machine__38701__auto____0;
ui$core$query_events_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$query_events_$_state_machine__38701__auto____1;
return ui$core$query_events_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,c,event,start_time))
})();
var state__38814__auto__ = (function (){var statearr_71708 = f__38813__auto__.call(null);
(statearr_71708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,c,event,start_time))
);

return c__38812__auto__;
});})(c,event,start_time))
], null))));

return c;
});
ui.core.get_historical_events = (function ui$core$get_historical_events(contract,starting_block,ename,params){
var c = cljs.core.async.chan.call(null);
(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,({"fromBlock": starting_block, "toBlock": "latest"})], null))).get(((function (c){
return (function (error,result){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,c){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,c){
return (function (state_71728){
var state_val_71729 = (state_71728[(1)]);
if((state_val_71729 === (1))){
var inst_71724 = cljs.core.vec.call(null,result);
var state_71728__$1 = state_71728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71728__$1,(2),c,inst_71724);
} else {
if((state_val_71729 === (2))){
var inst_71726 = (state_71728[(2)]);
var state_71728__$1 = state_71728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71728__$1,inst_71726);
} else {
return null;
}
}
});})(c__38812__auto__,c))
;
return ((function (switch__38700__auto__,c__38812__auto__,c){
return (function() {
var ui$core$get_historical_events_$_state_machine__38701__auto__ = null;
var ui$core$get_historical_events_$_state_machine__38701__auto____0 = (function (){
var statearr_71733 = [null,null,null,null,null,null,null];
(statearr_71733[(0)] = ui$core$get_historical_events_$_state_machine__38701__auto__);

(statearr_71733[(1)] = (1));

return statearr_71733;
});
var ui$core$get_historical_events_$_state_machine__38701__auto____1 = (function (state_71728){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71734){if((e71734 instanceof Object)){
var ex__38704__auto__ = e71734;
var statearr_71735_71737 = state_71728;
(statearr_71735_71737[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71738 = state_71728;
state_71728 = G__71738;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$get_historical_events_$_state_machine__38701__auto__ = function(state_71728){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$core$get_historical_events_$_state_machine__38701__auto____1.call(this,state_71728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_$_state_machine__38701__auto____0;
ui$core$get_historical_events_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_$_state_machine__38701__auto____1;
return ui$core$get_historical_events_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,c))
})();
var state__38814__auto__ = (function (){var statearr_71736 = f__38813__auto__.call(null);
(statearr_71736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,c))
);

return c__38812__auto__;
});})(c))
);

return c;
});
ui.core.get_historical_events_hash = (function ui$core$get_historical_events_hash(contract,starting_block,ename,params,hash){
var c = cljs.core.async.chan.call(null);
(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,({"fromBlock": starting_block, "toBlock": "latest"})], null))).get(((function (c){
return (function (error,result){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,c){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,c){
return (function (state_71760){
var state_val_71761 = (state_71760[(1)]);
if((state_val_71761 === (1))){
var inst_71754 = (function (){return ((function (state_val_71761,c__38812__auto__,c){
return (function (event){
return cljs.core._EQ_.call(null,event.transactionHash,hash);
});
;})(state_val_71761,c__38812__auto__,c))
})();
var inst_71755 = cljs.core.filter.call(null,inst_71754,result);
var inst_71756 = cljs.core.vec.call(null,inst_71755);
var state_71760__$1 = state_71760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71760__$1,(2),c,inst_71756);
} else {
if((state_val_71761 === (2))){
var inst_71758 = (state_71760[(2)]);
var state_71760__$1 = state_71760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71760__$1,inst_71758);
} else {
return null;
}
}
});})(c__38812__auto__,c))
;
return ((function (switch__38700__auto__,c__38812__auto__,c){
return (function() {
var ui$core$get_historical_events_hash_$_state_machine__38701__auto__ = null;
var ui$core$get_historical_events_hash_$_state_machine__38701__auto____0 = (function (){
var statearr_71765 = [null,null,null,null,null,null,null];
(statearr_71765[(0)] = ui$core$get_historical_events_hash_$_state_machine__38701__auto__);

(statearr_71765[(1)] = (1));

return statearr_71765;
});
var ui$core$get_historical_events_hash_$_state_machine__38701__auto____1 = (function (state_71760){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71766){if((e71766 instanceof Object)){
var ex__38704__auto__ = e71766;
var statearr_71767_71769 = state_71760;
(statearr_71767_71769[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71770 = state_71760;
state_71760 = G__71770;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$get_historical_events_hash_$_state_machine__38701__auto__ = function(state_71760){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_hash_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$core$get_historical_events_hash_$_state_machine__38701__auto____1.call(this,state_71760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_hash_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_hash_$_state_machine__38701__auto____0;
ui$core$get_historical_events_hash_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_hash_$_state_machine__38701__auto____1;
return ui$core$get_historical_events_hash_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,c))
})();
var state__38814__auto__ = (function (){var statearr_71768 = f__38813__auto__.call(null);
(statearr_71768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,c))
);

return c__38812__auto__;
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
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,c){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,c){
return (function (state_71800){
var state_val_71801 = (state_71800[(1)]);
if((state_val_71801 === (1))){
var inst_71796 = ui.core.wei__GT_eth.call(null,result);
var state_71800__$1 = state_71800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71800__$1,(2),c,inst_71796);
} else {
if((state_val_71801 === (2))){
var inst_71798 = (state_71800[(2)]);
var state_71800__$1 = state_71800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71800__$1,inst_71798);
} else {
return null;
}
}
});})(c__38812__auto__,c))
;
return ((function (switch__38700__auto__,c__38812__auto__,c){
return (function() {
var ui$core$get_balance_$_state_machine__38701__auto__ = null;
var ui$core$get_balance_$_state_machine__38701__auto____0 = (function (){
var statearr_71805 = [null,null,null,null,null,null,null];
(statearr_71805[(0)] = ui$core$get_balance_$_state_machine__38701__auto__);

(statearr_71805[(1)] = (1));

return statearr_71805;
});
var ui$core$get_balance_$_state_machine__38701__auto____1 = (function (state_71800){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71806){if((e71806 instanceof Object)){
var ex__38704__auto__ = e71806;
var statearr_71807_71821 = state_71800;
(statearr_71807_71821[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71822 = state_71800;
state_71800 = G__71822;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__38701__auto__ = function(state_71800){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__38701__auto____1.call(this,state_71800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__38701__auto____0;
ui$core$get_balance_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__38701__auto____1;
return ui$core$get_balance_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,c))
})();
var state__38814__auto__ = (function (){var statearr_71808 = f__38813__auto__.call(null);
(statearr_71808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,c))
);

return c__38812__auto__;
});})(c))
);
} else {
var c__38812__auto___71823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___71823,c){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___71823,c){
return (function (state_71812){
var state_val_71813 = (state_71812[(1)]);
if((state_val_71813 === (1))){
var state_71812__$1 = state_71812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71812__$1,(2),c,(0));
} else {
if((state_val_71813 === (2))){
var inst_71810 = (state_71812[(2)]);
var state_71812__$1 = state_71812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71812__$1,inst_71810);
} else {
return null;
}
}
});})(c__38812__auto___71823,c))
;
return ((function (switch__38700__auto__,c__38812__auto___71823,c){
return (function() {
var ui$core$get_balance_$_state_machine__38701__auto__ = null;
var ui$core$get_balance_$_state_machine__38701__auto____0 = (function (){
var statearr_71817 = [null,null,null,null,null,null,null];
(statearr_71817[(0)] = ui$core$get_balance_$_state_machine__38701__auto__);

(statearr_71817[(1)] = (1));

return statearr_71817;
});
var ui$core$get_balance_$_state_machine__38701__auto____1 = (function (state_71812){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71818){if((e71818 instanceof Object)){
var ex__38704__auto__ = e71818;
var statearr_71819_71824 = state_71812;
(statearr_71819_71824[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71825 = state_71812;
state_71812 = G__71825;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__38701__auto__ = function(state_71812){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__38701__auto____1.call(this,state_71812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__38701__auto____0;
ui$core$get_balance_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__38701__auto____1;
return ui$core$get_balance_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___71823,c))
})();
var state__38814__auto__ = (function (){var statearr_71820 = f__38813__auto__.call(null);
(statearr_71820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___71823);

return statearr_71820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___71823,c))
);

}

return c;
});
ui.core.get_block = (function ui$core$get_block(block){
var c = cljs.core.async.chan.call(null);
web3.eth.getBlock(block,((function (c){
return (function (error,result){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,c){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,c){
return (function (state_71843){
var state_val_71844 = (state_71843[(1)]);
if((state_val_71844 === (1))){
var inst_71839 = cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var state_71843__$1 = state_71843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71843__$1,(2),c,inst_71839);
} else {
if((state_val_71844 === (2))){
var inst_71841 = (state_71843[(2)]);
var state_71843__$1 = state_71843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71843__$1,inst_71841);
} else {
return null;
}
}
});})(c__38812__auto__,c))
;
return ((function (switch__38700__auto__,c__38812__auto__,c){
return (function() {
var ui$core$get_block_$_state_machine__38701__auto__ = null;
var ui$core$get_block_$_state_machine__38701__auto____0 = (function (){
var statearr_71848 = [null,null,null,null,null,null,null];
(statearr_71848[(0)] = ui$core$get_block_$_state_machine__38701__auto__);

(statearr_71848[(1)] = (1));

return statearr_71848;
});
var ui$core$get_block_$_state_machine__38701__auto____1 = (function (state_71843){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71849){if((e71849 instanceof Object)){
var ex__38704__auto__ = e71849;
var statearr_71850_71852 = state_71843;
(statearr_71850_71852[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71853 = state_71843;
state_71843 = G__71853;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$get_block_$_state_machine__38701__auto__ = function(state_71843){
switch(arguments.length){
case 0:
return ui$core$get_block_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$core$get_block_$_state_machine__38701__auto____1.call(this,state_71843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_block_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_block_$_state_machine__38701__auto____0;
ui$core$get_block_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_block_$_state_machine__38701__auto____1;
return ui$core$get_block_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,c))
})();
var state__38814__auto__ = (function (){var statearr_71851 = f__38813__auto__.call(null);
(statearr_71851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,c))
);

return c__38812__auto__;
});})(c))
);

return c;
});
ui.core.block_number = (function ui$core$block_number(){
var c = cljs.core.async.chan.call(null);
web3.eth.getBlockNumber(((function (c){
return (function (error,result){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,c){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,c){
return (function (state_71869){
var state_val_71870 = (state_71869[(1)]);
if((state_val_71870 === (1))){
var state_71869__$1 = state_71869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71869__$1,(2),c,result);
} else {
if((state_val_71870 === (2))){
var inst_71867 = (state_71869[(2)]);
var state_71869__$1 = state_71869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71869__$1,inst_71867);
} else {
return null;
}
}
});})(c__38812__auto__,c))
;
return ((function (switch__38700__auto__,c__38812__auto__,c){
return (function() {
var ui$core$block_number_$_state_machine__38701__auto__ = null;
var ui$core$block_number_$_state_machine__38701__auto____0 = (function (){
var statearr_71874 = [null,null,null,null,null,null,null];
(statearr_71874[(0)] = ui$core$block_number_$_state_machine__38701__auto__);

(statearr_71874[(1)] = (1));

return statearr_71874;
});
var ui$core$block_number_$_state_machine__38701__auto____1 = (function (state_71869){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71875){if((e71875 instanceof Object)){
var ex__38704__auto__ = e71875;
var statearr_71876_71878 = state_71869;
(statearr_71876_71878[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71879 = state_71869;
state_71869 = G__71879;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$block_number_$_state_machine__38701__auto__ = function(state_71869){
switch(arguments.length){
case 0:
return ui$core$block_number_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$core$block_number_$_state_machine__38701__auto____1.call(this,state_71869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$block_number_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$block_number_$_state_machine__38701__auto____0;
ui$core$block_number_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$block_number_$_state_machine__38701__auto____1;
return ui$core$block_number_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,c))
})();
var state__38814__auto__ = (function (){var statearr_71877 = f__38813__auto__.call(null);
(statearr_71877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,c))
);

return c__38812__auto__;
});})(c))
);

return c;
});
ui.core.get_proposal_description = (function ui$core$get_proposal_description(proposal_block,proposal_index){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_71908){
var state_val_71909 = (state_71908[(1)]);
if((state_val_71909 === (1))){
var inst_71899 = (function (){return ((function (state_val_71909,c__38812__auto__){
return (function (x){
return web3.toAscii(x);
});
;})(state_val_71909,c__38812__auto__))
})();
var inst_71900 = ui.core.query_events.call(null,ui.core.etherean,proposal_block,proposal_block,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({"proposalIndex": proposal_index}));
var state_71908__$1 = (function (){var statearr_71910 = state_71908;
(statearr_71910[(7)] = inst_71899);

return statearr_71910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71908__$1,(2),inst_71900);
} else {
if((state_val_71909 === (2))){
var inst_71899 = (state_71908[(7)]);
var inst_71902 = (state_71908[(2)]);
var inst_71903 = inst_71902.args;
var inst_71904 = inst_71903.message;
var inst_71905 = cljs.core.map.call(null,inst_71899,inst_71904);
var inst_71906 = cljs.core.first.call(null,inst_71905);
var state_71908__$1 = state_71908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71908__$1,inst_71906);
} else {
return null;
}
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var ui$core$get_proposal_description_$_state_machine__38701__auto__ = null;
var ui$core$get_proposal_description_$_state_machine__38701__auto____0 = (function (){
var statearr_71914 = [null,null,null,null,null,null,null,null];
(statearr_71914[(0)] = ui$core$get_proposal_description_$_state_machine__38701__auto__);

(statearr_71914[(1)] = (1));

return statearr_71914;
});
var ui$core$get_proposal_description_$_state_machine__38701__auto____1 = (function (state_71908){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71915){if((e71915 instanceof Object)){
var ex__38704__auto__ = e71915;
var statearr_71916_71918 = state_71908;
(statearr_71916_71918[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71919 = state_71908;
state_71908 = G__71919;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$get_proposal_description_$_state_machine__38701__auto__ = function(state_71908){
switch(arguments.length){
case 0:
return ui$core$get_proposal_description_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$core$get_proposal_description_$_state_machine__38701__auto____1.call(this,state_71908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_proposal_description_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_proposal_description_$_state_machine__38701__auto____0;
ui$core$get_proposal_description_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_proposal_description_$_state_machine__38701__auto____1;
return ui$core$get_proposal_description_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_71917 = f__38813__auto__.call(null);
(statearr_71917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
});
if(typeof ui.core.read_server !== 'undefined'){
} else {
ui.core.read_server = (function (){var method_table__32804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__32805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__32806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__32807__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__32808__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","read-server"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__32808__auto__,method_table__32804__auto__,prefer_table__32805__auto__,method_cache__32806__auto__,cached_hierarchy__32807__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("user","balance","user/balance",422509480),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_balance.call(null,(web3.eth.accounts[(0)]))], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_network.call(null)], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_71924){
var state_val_71925 = (state_71924[(1)]);
if((state_val_71925 === (1))){
var inst_71920 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"useUpProposalVote","useUpProposalVote",352109759));
var state_71924__$1 = state_71924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71924__$1,(2),inst_71920);
} else {
if((state_val_71925 === (2))){
var inst_71922 = (state_71924[(2)]);
var state_71924__$1 = state_71924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71924__$1,inst_71922);
} else {
return null;
}
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_71929 = [null,null,null,null,null,null,null];
(statearr_71929[(0)] = ui$core$state_machine__38701__auto__);

(statearr_71929[(1)] = (1));

return statearr_71929;
});
var ui$core$state_machine__38701__auto____1 = (function (state_71924){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71930){if((e71930 instanceof Object)){
var ex__38704__auto__ = e71930;
var statearr_71931_71933 = state_71924;
(statearr_71931_71933[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71934 = state_71924;
state_71924 = G__71934;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_71924){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_71924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_71932 = f__38813__auto__.call(null);
(statearr_71932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),(function (env,dispatch_key,params){
var map__71935 = env;
var map__71935__$1 = ((((!((map__71935 == null)))?((((map__71935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71935):map__71935);
var proposal = cljs.core.get.call(null,map__71935__$1,new cljs.core.Keyword(null,"proposal","proposal",142522715));
var proposal_id = cljs.core.get.call(null,map__71935__$1,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_proposal_description.call(null,((proposal[(3)]) | (0)),new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env))], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_71941){
var state_val_71942 = (state_71941[(1)]);
if((state_val_71942 === (1))){
var inst_71937 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_71938 = cljs.core.nth.call(null,inst_71937,(0));
var inst_71939 = ui.core.wei__GT_eth.call(null,inst_71938);
var state_71941__$1 = state_71941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71941__$1,inst_71939);
} else {
return null;
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_71946 = [null,null,null,null,null,null,null];
(statearr_71946[(0)] = ui$core$state_machine__38701__auto__);

(statearr_71946[(1)] = (1));

return statearr_71946;
});
var ui$core$state_machine__38701__auto____1 = (function (state_71941){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71947){if((e71947 instanceof Object)){
var ex__38704__auto__ = e71947;
var statearr_71948_71950 = state_71941;
(statearr_71948_71950[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71951 = state_71941;
state_71941 = G__71951;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_71941){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_71941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_71949 = f__38813__auto__.call(null);
(statearr_71949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_71956){
var state_val_71957 = (state_71956[(1)]);
if((state_val_71957 === (1))){
var inst_71952 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_71953 = cljs.core.nth.call(null,inst_71952,(1));
var inst_71954 = ui.core.wei__GT_eth.call(null,inst_71953);
var state_71956__$1 = state_71956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71956__$1,inst_71954);
} else {
return null;
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_71961 = [null,null,null,null,null,null,null];
(statearr_71961[(0)] = ui$core$state_machine__38701__auto__);

(statearr_71961[(1)] = (1));

return statearr_71961;
});
var ui$core$state_machine__38701__auto____1 = (function (state_71956){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71962){if((e71962 instanceof Object)){
var ex__38704__auto__ = e71962;
var statearr_71963_71965 = state_71956;
(statearr_71963_71965[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71966 = state_71956;
state_71956 = G__71966;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_71956){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_71956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_71964 = f__38813__auto__.call(null);
(statearr_71964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("db","id","db/id",-1388397098),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_71974){
var state_val_71975 = (state_71974[(1)]);
if((state_val_71975 === (1))){
var inst_71967 = (state_71974[(7)]);
var inst_71967__$1 = new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env);
var state_71974__$1 = (function (){var statearr_71976 = state_71974;
(statearr_71976[(7)] = inst_71967__$1);

return statearr_71976;
})();
if(cljs.core.truth_(inst_71967__$1)){
var statearr_71977_71988 = state_71974__$1;
(statearr_71977_71988[(1)] = (2));

} else {
var statearr_71978_71989 = state_71974__$1;
(statearr_71978_71989[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71975 === (2))){
var inst_71967 = (state_71974[(7)]);
var state_71974__$1 = state_71974;
var statearr_71979_71990 = state_71974__$1;
(statearr_71979_71990[(2)] = inst_71967);

(statearr_71979_71990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71975 === (3))){
var inst_71970 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var state_71974__$1 = state_71974;
var statearr_71980_71991 = state_71974__$1;
(statearr_71980_71991[(2)] = inst_71970);

(statearr_71980_71991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71975 === (4))){
var inst_71972 = (state_71974[(2)]);
var state_71974__$1 = state_71974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71974__$1,inst_71972);
} else {
return null;
}
}
}
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_71984 = [null,null,null,null,null,null,null,null];
(statearr_71984[(0)] = ui$core$state_machine__38701__auto__);

(statearr_71984[(1)] = (1));

return statearr_71984;
});
var ui$core$state_machine__38701__auto____1 = (function (state_71974){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_71974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e71985){if((e71985 instanceof Object)){
var ex__38704__auto__ = e71985;
var statearr_71986_71992 = state_71974;
(statearr_71986_71992[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71993 = state_71974;
state_71974 = G__71993;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_71974){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_71974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_71987 = f__38813__auto__.call(null);
(statearr_71987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_71987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?(function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_72001){
var state_val_72002 = (state_72001[(1)]);
if((state_val_72002 === (1))){
var inst_71994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71995 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132)];
var inst_71996 = [(0),"bar",(10),(5)];
var inst_71997 = cljs.core.PersistentHashMap.fromArrays(inst_71995,inst_71996);
var inst_71998 = [inst_71997];
var inst_71999 = (new cljs.core.PersistentVector(null,1,(5),inst_71994,inst_71998,null));
var state_72001__$1 = state_72001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72001__$1,inst_71999);
} else {
return null;
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72006 = [null,null,null,null,null,null,null];
(statearr_72006[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72006[(1)] = (1));

return statearr_72006;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72001){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72007){if((e72007 instanceof Object)){
var ex__38704__auto__ = e72007;
var statearr_72008_72134 = state_72001;
(statearr_72008_72134[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72135 = state_72001;
state_72001 = G__72135;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72001){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_72009 = f__38813__auto__.call(null);
(statearr_72009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
})():(function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_72087){
var state_val_72088 = (state_72087[(1)]);
if((state_val_72088 === (7))){
var inst_72022 = (state_72087[(2)]);
var state_72087__$1 = state_72087;
var statearr_72089_72136 = state_72087__$1;
(statearr_72089_72136[(2)] = inst_72022);

(statearr_72089_72136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72088 === (1))){
var inst_72012 = (env == null);
var inst_72013 = cljs.core.not.call(null,inst_72012);
var state_72087__$1 = state_72087;
if(inst_72013){
var statearr_72090_72137 = state_72087__$1;
(statearr_72090_72137[(1)] = (2));

} else {
var statearr_72091_72138 = state_72087__$1;
(statearr_72091_72138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72088 === (4))){
var inst_72025 = (state_72087[(2)]);
var state_72087__$1 = state_72087;
if(cljs.core.truth_(inst_72025)){
var statearr_72092_72139 = state_72087__$1;
(statearr_72092_72139[(1)] = (8));

} else {
var statearr_72093_72140 = state_72087__$1;
(statearr_72093_72140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72088 === (13))){
var inst_72082 = (state_72087[(2)]);
var inst_72083 = cljs.core.sort_by.call(null,cljs.core.first,inst_72082);
var inst_72084 = cljs.core.map.call(null,cljs.core.second,inst_72083);
var inst_72085 = cljs.core.vec.call(null,inst_72084);
var state_72087__$1 = state_72087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72087__$1,inst_72085);
} else {
if((state_val_72088 === (6))){
var state_72087__$1 = state_72087;
var statearr_72094_72141 = state_72087__$1;
(statearr_72094_72141[(2)] = false);

(statearr_72094_72141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72088 === (3))){
var state_72087__$1 = state_72087;
var statearr_72095_72142 = state_72087__$1;
(statearr_72095_72142[(2)] = false);

(statearr_72095_72142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72088 === (12))){
var inst_72032 = (state_72087[(7)]);
var inst_72031 = (state_72087[(8)]);
var inst_72036 = (state_72087[(9)]);
var inst_72030 = (state_72087[(10)]);
var inst_72039 = (state_72087[(2)]);
var inst_72040 = (inst_72039 | (0));
var inst_72041 = cljs.core.async.chan.call(null);
var inst_72074 = cljs.core.async.chan.call(null,(1));
var inst_72075 = (function (){var map__72010 = inst_72030;
var parser = inst_72031;
var query = inst_72032;
var len = inst_72036;
var time = inst_72040;
var proposals = inst_72041;
var c__38812__auto____$1 = inst_72074;
return ((function (map__72010,parser,query,len,time,proposals,c__38812__auto____$1,inst_72032,inst_72031,inst_72036,inst_72030,inst_72039,inst_72040,inst_72041,inst_72074,state_val_72088,c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (map__72010,parser,query,len,time,proposals,c__38812__auto____$1,inst_72032,inst_72031,inst_72036,inst_72030,inst_72039,inst_72040,inst_72041,inst_72074,state_val_72088,c__38812__auto__){
return (function (state_72072){
var state_val_72073 = (state_72072[(1)]);
if((state_val_72073 === (7))){
var inst_72049 = (state_72072[(7)]);
var inst_72049__$1 = (state_72072[(2)]);
var inst_72050 = (inst_72049__$1[(2)]);
var inst_72051 = (inst_72050 | (0));
var inst_72052 = cljs.core._EQ_.call(null,time,inst_72051);
var state_72072__$1 = (function (){var statearr_72096 = state_72072;
(statearr_72096[(7)] = inst_72049__$1);

return statearr_72096;
})();
if(inst_72052){
var statearr_72097_72143 = state_72072__$1;
(statearr_72097_72143[(1)] = (8));

} else {
var statearr_72098_72144 = state_72072__$1;
(statearr_72098_72144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72073 === (1))){
var inst_72042 = (len - (1));
var inst_72043 = inst_72042;
var state_72072__$1 = (function (){var statearr_72099 = state_72072;
(statearr_72099[(8)] = inst_72043);

return statearr_72099;
})();
var statearr_72100_72145 = state_72072__$1;
(statearr_72100_72145[(2)] = null);

(statearr_72100_72145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72073 === (4))){
var inst_72043 = (state_72072[(8)]);
var inst_72047 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),inst_72043);
var state_72072__$1 = state_72072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72072__$1,(7),inst_72047);
} else {
if((state_val_72073 === (6))){
var inst_72067 = (state_72072[(2)]);
var state_72072__$1 = state_72072;
var statearr_72101_72146 = state_72072__$1;
(statearr_72101_72146[(2)] = inst_72067);

(statearr_72101_72146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72073 === (3))){
var inst_72069 = (state_72072[(2)]);
var inst_72070 = cljs.core.async.close_BANG_.call(null,proposals);
var state_72072__$1 = (function (){var statearr_72102 = state_72072;
(statearr_72102[(9)] = inst_72069);

return statearr_72102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72072__$1,inst_72070);
} else {
if((state_val_72073 === (12))){
var inst_72057 = (state_72072[(2)]);
var state_72072__$1 = state_72072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72072__$1,(11),proposals,inst_72057);
} else {
if((state_val_72073 === (2))){
var inst_72043 = (state_72072[(8)]);
var inst_72045 = (inst_72043 >= (0));
var state_72072__$1 = state_72072;
if(cljs.core.truth_(inst_72045)){
var statearr_72103_72147 = state_72072__$1;
(statearr_72103_72147[(1)] = (4));

} else {
var statearr_72104_72148 = state_72072__$1;
(statearr_72104_72148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72073 === (11))){
var inst_72043 = (state_72072[(8)]);
var inst_72059 = (state_72072[(2)]);
var inst_72060 = (inst_72043 - (1));
var inst_72043__$1 = inst_72060;
var state_72072__$1 = (function (){var statearr_72105 = state_72072;
(statearr_72105[(10)] = inst_72059);

(statearr_72105[(8)] = inst_72043__$1);

return statearr_72105;
})();
var statearr_72106_72149 = state_72072__$1;
(statearr_72106_72149[(2)] = null);

(statearr_72106_72149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72073 === (9))){
var state_72072__$1 = state_72072;
var statearr_72107_72150 = state_72072__$1;
(statearr_72107_72150[(2)] = null);

(statearr_72107_72150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72073 === (5))){
var state_72072__$1 = state_72072;
var statearr_72108_72151 = state_72072__$1;
(statearr_72108_72151[(2)] = null);

(statearr_72108_72151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72073 === (10))){
var inst_72064 = (state_72072[(2)]);
var state_72072__$1 = state_72072;
var statearr_72109_72152 = state_72072__$1;
(statearr_72109_72152[(2)] = inst_72064);

(statearr_72109_72152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72073 === (8))){
var inst_72043 = (state_72072[(8)]);
var inst_72049 = (state_72072[(7)]);
var inst_72054 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),inst_72049,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155),inst_72043);
var inst_72055 = parser.call(null,inst_72054,query);
var state_72072__$1 = state_72072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72072__$1,(12),inst_72055);
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
});})(map__72010,parser,query,len,time,proposals,c__38812__auto____$1,inst_72032,inst_72031,inst_72036,inst_72030,inst_72039,inst_72040,inst_72041,inst_72074,state_val_72088,c__38812__auto__))
;
return ((function (switch__38700__auto__,map__72010,parser,query,len,time,proposals,c__38812__auto____$1,inst_72032,inst_72031,inst_72036,inst_72030,inst_72039,inst_72040,inst_72041,inst_72074,state_val_72088,c__38812__auto__){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72113[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72113[(1)] = (1));

return statearr_72113;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72072){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72114){if((e72114 instanceof Object)){
var ex__38704__auto__ = e72114;
var statearr_72115_72153 = state_72072;
(statearr_72115_72153[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72154 = state_72072;
state_72072 = G__72154;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72072){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,map__72010,parser,query,len,time,proposals,c__38812__auto____$1,inst_72032,inst_72031,inst_72036,inst_72030,inst_72039,inst_72040,inst_72041,inst_72074,state_val_72088,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_72116 = f__38813__auto__.call(null);
(statearr_72116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto____$1);

return statearr_72116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});
;})(map__72010,parser,query,len,time,proposals,c__38812__auto____$1,inst_72032,inst_72031,inst_72036,inst_72030,inst_72039,inst_72040,inst_72041,inst_72074,state_val_72088,c__38812__auto__))
})();
var inst_72076 = cljs.core.async.impl.dispatch.run.call(null,inst_72075);
var inst_72078 = (function (){var map__72010 = inst_72030;
var parser = inst_72031;
var query = inst_72032;
var len = inst_72036;
var time = inst_72040;
var proposals = inst_72041;
return ((function (map__72010,parser,query,len,time,proposals,inst_72032,inst_72031,inst_72036,inst_72030,inst_72039,inst_72040,inst_72041,inst_72074,inst_72075,inst_72076,state_val_72088,c__38812__auto__){
return (function (acc,p__72077){
var map__72117 = p__72077;
var map__72117__$1 = ((((!((map__72117 == null)))?((((map__72117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72117):map__72117);
var item = map__72117__$1;
var id = cljs.core.get.call(null,map__72117__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.assoc.call(null,acc,id,item);
});
;})(map__72010,parser,query,len,time,proposals,inst_72032,inst_72031,inst_72036,inst_72030,inst_72039,inst_72040,inst_72041,inst_72074,inst_72075,inst_72076,state_val_72088,c__38812__auto__))
})();
var inst_72079 = cljs.core.PersistentHashMap.EMPTY;
var inst_72080 = cljs.core.async.reduce.call(null,inst_72078,inst_72079,inst_72041);
var state_72087__$1 = (function (){var statearr_72119 = state_72087;
(statearr_72119[(11)] = inst_72076);

return statearr_72119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72087__$1,(13),inst_72080);
} else {
if((state_val_72088 === (2))){
var inst_72015 = env.cljs$lang$protocol_mask$partition0$;
var inst_72016 = (inst_72015 & (64));
var inst_72017 = env.cljs$core$ISeq$;
var inst_72018 = (inst_72016) || (inst_72017);
var state_72087__$1 = state_72087;
if(cljs.core.truth_(inst_72018)){
var statearr_72120_72155 = state_72087__$1;
(statearr_72120_72155[(1)] = (5));

} else {
var statearr_72121_72156 = state_72087__$1;
(statearr_72121_72156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72088 === (11))){
var inst_72035 = (state_72087[(2)]);
var inst_72036 = (inst_72035 | (0));
var inst_72037 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"startOfDay","startOfDay",-1097735630));
var state_72087__$1 = (function (){var statearr_72122 = state_72087;
(statearr_72122[(9)] = inst_72036);

return statearr_72122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72087__$1,(12),inst_72037);
} else {
if((state_val_72088 === (9))){
var state_72087__$1 = state_72087;
var statearr_72123_72157 = state_72087__$1;
(statearr_72123_72157[(2)] = env);

(statearr_72123_72157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72088 === (5))){
var state_72087__$1 = state_72087;
var statearr_72124_72158 = state_72087__$1;
(statearr_72124_72158[(2)] = true);

(statearr_72124_72158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72088 === (10))){
var inst_72030 = (state_72087[(10)]);
var inst_72030__$1 = (state_72087[(2)]);
var inst_72031 = cljs.core.get.call(null,inst_72030__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_72032 = cljs.core.get.call(null,inst_72030__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_72033 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposalsLength","proposalsLength",1061236851));
var state_72087__$1 = (function (){var statearr_72125 = state_72087;
(statearr_72125[(7)] = inst_72032);

(statearr_72125[(8)] = inst_72031);

(statearr_72125[(10)] = inst_72030__$1);

return statearr_72125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72087__$1,(11),inst_72033);
} else {
if((state_val_72088 === (8))){
var inst_72027 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_72087__$1 = state_72087;
var statearr_72126_72159 = state_72087__$1;
(statearr_72126_72159[(2)] = inst_72027);

(statearr_72126_72159[(1)] = (10));


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
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72130 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72130[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72130[(1)] = (1));

return statearr_72130;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72087){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72131){if((e72131 instanceof Object)){
var ex__38704__auto__ = e72131;
var statearr_72132_72160 = state_72087;
(statearr_72132_72160[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72161 = state_72087;
state_72087 = G__72161;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72087){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_72133 = f__38813__auto__.call(null);
(statearr_72133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__72162__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__72162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72163__i = 0, G__72163__a = new Array(arguments.length -  0);
while (G__72163__i < G__72163__a.length) {G__72163__a[G__72163__i] = arguments[G__72163__i + 0]; ++G__72163__i;}
  args = new cljs.core.IndexedSeq(G__72163__a,0);
} 
return G__72162__delegate.call(this,args);};
G__72162.cljs$lang$maxFixedArity = 0;
G__72162.cljs$lang$applyTo = (function (arglist__72164){
var args = cljs.core.seq(arglist__72164);
return G__72162__delegate(args);
});
G__72162.cljs$core$IFn$_invoke$arity$variadic = G__72162__delegate;
return G__72162;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),(function() { 
var G__72165__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__72165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72166__i = 0, G__72166__a = new Array(arguments.length -  0);
while (G__72166__i < G__72166__a.length) {G__72166__a[G__72166__i] = arguments[G__72166__i + 0]; ++G__72166__i;}
  args = new cljs.core.IndexedSeq(G__72166__a,0);
} 
return G__72165__delegate.call(this,args);};
G__72165.cljs$lang$maxFixedArity = 0;
G__72165.cljs$lang$applyTo = (function (arglist__72167){
var args = cljs.core.seq(arglist__72167);
return G__72165__delegate(args);
});
G__72165.cljs$core$IFn$_invoke$arity$variadic = G__72165__delegate;
return G__72165;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?(function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_72175){
var state_val_72176 = (state_72175[(1)]);
if((state_val_72176 === (1))){
var inst_72168 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72169 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031),new cljs.core.Keyword("stake","address","stake/address",680266700)];
var inst_72170 = [(0),(1000),"12345"];
var inst_72171 = cljs.core.PersistentHashMap.fromArrays(inst_72169,inst_72170);
var inst_72172 = [inst_72171];
var inst_72173 = (new cljs.core.PersistentVector(null,1,(5),inst_72168,inst_72172,null));
var state_72175__$1 = state_72175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72175__$1,inst_72173);
} else {
return null;
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72180 = [null,null,null,null,null,null,null];
(statearr_72180[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72180[(1)] = (1));

return statearr_72180;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72175){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72181){if((e72181 instanceof Object)){
var ex__38704__auto__ = e72181;
var statearr_72182_72311 = state_72175;
(statearr_72182_72311[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72312 = state_72175;
state_72175 = G__72312;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72175){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_72183 = f__38813__auto__.call(null);
(statearr_72183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
})():(function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_72269){
var state_val_72270 = (state_72269[(1)]);
if((state_val_72270 === (7))){
var inst_72207 = (state_72269[(2)]);
var inst_72208 = cljs.core.range.call(null,inst_72207);
var inst_72209 = cljs.core.seq.call(null,inst_72208);
var inst_72210 = inst_72209;
var inst_72211 = null;
var inst_72212 = (0);
var inst_72213 = (0);
var state_72269__$1 = (function (){var statearr_72271 = state_72269;
(statearr_72271[(7)] = inst_72211);

(statearr_72271[(8)] = inst_72213);

(statearr_72271[(9)] = inst_72210);

(statearr_72271[(10)] = inst_72212);

return statearr_72271;
})();
var statearr_72272_72313 = state_72269__$1;
(statearr_72272_72313[(2)] = null);

(statearr_72272_72313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (20))){
var inst_72259 = (state_72269[(2)]);
var state_72269__$1 = state_72269;
var statearr_72273_72314 = state_72269__$1;
(statearr_72273_72314[(2)] = inst_72259);

(statearr_72273_72314[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (1))){
var inst_72184 = cljs.core.PersistentVector.EMPTY;
var inst_72185 = cljs.core.atom.call(null,inst_72184);
var inst_72186 = ui.core.get_network.call(null);
var state_72269__$1 = (function (){var statearr_72274 = state_72269;
(statearr_72274[(11)] = inst_72185);

return statearr_72274;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72269__$1,(2),inst_72186);
} else {
if((state_val_72270 === (4))){
var inst_72196 = alert("Fatal Error: EthereanMind is missing data on the blockchain. Please make sure you have MetaMask set to the \"Ethereum Ropsten Test Network\".\n\n(Other possible reasons for this error may include an ongoing blockchain attack or an outage of the Infuria system.)");
var state_72269__$1 = state_72269;
var statearr_72275_72315 = state_72269__$1;
(statearr_72275_72315[(2)] = inst_72196);

(statearr_72275_72315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (15))){
var inst_72234 = (state_72269[(12)]);
var inst_72236 = cljs.core.chunked_seq_QMARK_.call(null,inst_72234);
var state_72269__$1 = state_72269;
if(inst_72236){
var statearr_72276_72316 = state_72269__$1;
(statearr_72276_72316[(1)] = (18));

} else {
var statearr_72277_72317 = state_72269__$1;
(statearr_72277_72317[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (21))){
var inst_72200 = (state_72269[(13)]);
var inst_72246 = (state_72269[(14)]);
var inst_72246__$1 = (state_72269[(2)]);
var inst_72247 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_72248 = ui.core.chan_call.call(null,inst_72200,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_72246__$1);
var state_72269__$1 = (function (){var statearr_72278 = state_72269;
(statearr_72278[(15)] = inst_72247);

(statearr_72278[(14)] = inst_72246__$1);

return statearr_72278;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72269__$1,(22),inst_72248);
} else {
if((state_val_72270 === (13))){
var inst_72221 = (state_72269[(16)]);
var inst_72200 = (state_72269[(13)]);
var inst_72221__$1 = (state_72269[(2)]);
var inst_72222 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_72223 = ui.core.chan_call.call(null,inst_72200,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_72221__$1);
var state_72269__$1 = (function (){var statearr_72279 = state_72269;
(statearr_72279[(17)] = inst_72222);

(statearr_72279[(16)] = inst_72221__$1);

return statearr_72279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72269__$1,(14),inst_72223);
} else {
if((state_val_72270 === (22))){
var inst_72185 = (state_72269[(11)]);
var inst_72247 = (state_72269[(15)]);
var inst_72234 = (state_72269[(12)]);
var inst_72246 = (state_72269[(14)]);
var inst_72250 = (state_72269[(2)]);
var inst_72251 = (inst_72250[(0)]);
var inst_72252 = ui.core.wei__GT_eth.call(null,inst_72251);
var inst_72253 = [inst_72246,inst_72252];
var inst_72254 = cljs.core.PersistentHashMap.fromArrays(inst_72247,inst_72253);
var inst_72255 = cljs.core.swap_BANG_.call(null,inst_72185,cljs.core.conj,inst_72254);
var inst_72256 = cljs.core.next.call(null,inst_72234);
var inst_72210 = inst_72256;
var inst_72211 = null;
var inst_72212 = (0);
var inst_72213 = (0);
var state_72269__$1 = (function (){var statearr_72280 = state_72269;
(statearr_72280[(7)] = inst_72211);

(statearr_72280[(8)] = inst_72213);

(statearr_72280[(18)] = inst_72255);

(statearr_72280[(9)] = inst_72210);

(statearr_72280[(10)] = inst_72212);

return statearr_72280;
})();
var statearr_72281_72318 = state_72269__$1;
(statearr_72281_72318[(2)] = null);

(statearr_72281_72318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (6))){
var inst_72200 = (state_72269[(13)]);
var inst_72191 = (state_72269[(19)]);
var inst_72199 = (state_72269[(2)]);
var inst_72200__$1 = ui.core.contract.call(null,ui.contract.staking_abi,inst_72191);
var inst_72205 = ui.core.chan_call.call(null,inst_72200__$1,new cljs.core.Keyword(null,"depositLength","depositLength",788194150));
var state_72269__$1 = (function (){var statearr_72282 = state_72269;
(statearr_72282[(13)] = inst_72200__$1);

(statearr_72282[(20)] = inst_72199);

return statearr_72282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72269__$1,(7),inst_72205);
} else {
if((state_val_72270 === (17))){
var inst_72262 = (state_72269[(2)]);
var state_72269__$1 = state_72269;
var statearr_72283_72319 = state_72269__$1;
(statearr_72283_72319[(2)] = inst_72262);

(statearr_72283_72319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (3))){
var inst_72188 = (state_72269[(21)]);
var inst_72191 = (state_72269[(19)]);
var inst_72191__$1 = (state_72269[(2)]);
var inst_72192 = cljs.core._EQ_.call(null,inst_72188,(3));
var inst_72193 = cljs.core._EQ_.call(null,inst_72191__$1,"0x");
var inst_72194 = (inst_72192) && (inst_72193);
var state_72269__$1 = (function (){var statearr_72284 = state_72269;
(statearr_72284[(19)] = inst_72191__$1);

return statearr_72284;
})();
if(cljs.core.truth_(inst_72194)){
var statearr_72285_72320 = state_72269__$1;
(statearr_72285_72320[(1)] = (4));

} else {
var statearr_72286_72321 = state_72269__$1;
(statearr_72286_72321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (12))){
var inst_72264 = (state_72269[(2)]);
var state_72269__$1 = state_72269;
var statearr_72287_72322 = state_72269__$1;
(statearr_72287_72322[(2)] = inst_72264);

(statearr_72287_72322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (2))){
var inst_72188 = (state_72269[(2)]);
var inst_72189 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_72269__$1 = (function (){var statearr_72288 = state_72269;
(statearr_72288[(21)] = inst_72188);

return statearr_72288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72269__$1,(3),inst_72189);
} else {
if((state_val_72270 === (19))){
var inst_72234 = (state_72269[(12)]);
var inst_72200 = (state_72269[(13)]);
var inst_72243 = cljs.core.first.call(null,inst_72234);
var inst_72244 = ui.core.chan_call.call(null,inst_72200,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_72243);
var state_72269__$1 = state_72269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72269__$1,(21),inst_72244);
} else {
if((state_val_72270 === (11))){
var inst_72234 = (state_72269[(12)]);
var inst_72210 = (state_72269[(9)]);
var inst_72234__$1 = cljs.core.seq.call(null,inst_72210);
var state_72269__$1 = (function (){var statearr_72289 = state_72269;
(statearr_72289[(12)] = inst_72234__$1);

return statearr_72289;
})();
if(inst_72234__$1){
var statearr_72290_72323 = state_72269__$1;
(statearr_72290_72323[(1)] = (15));

} else {
var statearr_72291_72324 = state_72269__$1;
(statearr_72291_72324[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (9))){
var inst_72185 = (state_72269[(11)]);
var inst_72266 = (state_72269[(2)]);
var inst_72267 = cljs.core.deref.call(null,inst_72185);
var state_72269__$1 = (function (){var statearr_72295 = state_72269;
(statearr_72295[(22)] = inst_72266);

return statearr_72295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72269__$1,inst_72267);
} else {
if((state_val_72270 === (5))){
var state_72269__$1 = state_72269;
var statearr_72296_72325 = state_72269__$1;
(statearr_72296_72325[(2)] = null);

(statearr_72296_72325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (14))){
var inst_72211 = (state_72269[(7)]);
var inst_72213 = (state_72269[(8)]);
var inst_72222 = (state_72269[(17)]);
var inst_72185 = (state_72269[(11)]);
var inst_72221 = (state_72269[(16)]);
var inst_72210 = (state_72269[(9)]);
var inst_72212 = (state_72269[(10)]);
var inst_72225 = (state_72269[(2)]);
var inst_72226 = (inst_72225[(0)]);
var inst_72227 = ui.core.wei__GT_eth.call(null,inst_72226);
var inst_72228 = [inst_72221,inst_72227];
var inst_72229 = cljs.core.PersistentHashMap.fromArrays(inst_72222,inst_72228);
var inst_72230 = cljs.core.swap_BANG_.call(null,inst_72185,cljs.core.conj,inst_72229);
var inst_72231 = (inst_72213 + (1));
var tmp72292 = inst_72211;
var tmp72293 = inst_72210;
var tmp72294 = inst_72212;
var inst_72210__$1 = tmp72293;
var inst_72211__$1 = tmp72292;
var inst_72212__$1 = tmp72294;
var inst_72213__$1 = inst_72231;
var state_72269__$1 = (function (){var statearr_72297 = state_72269;
(statearr_72297[(7)] = inst_72211__$1);

(statearr_72297[(8)] = inst_72213__$1);

(statearr_72297[(9)] = inst_72210__$1);

(statearr_72297[(23)] = inst_72230);

(statearr_72297[(10)] = inst_72212__$1);

return statearr_72297;
})();
var statearr_72298_72326 = state_72269__$1;
(statearr_72298_72326[(2)] = null);

(statearr_72298_72326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (16))){
var state_72269__$1 = state_72269;
var statearr_72299_72327 = state_72269__$1;
(statearr_72299_72327[(2)] = null);

(statearr_72299_72327[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (10))){
var inst_72211 = (state_72269[(7)]);
var inst_72213 = (state_72269[(8)]);
var inst_72200 = (state_72269[(13)]);
var inst_72218 = cljs.core._nth.call(null,inst_72211,inst_72213);
var inst_72219 = ui.core.chan_call.call(null,inst_72200,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_72218);
var state_72269__$1 = state_72269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72269__$1,(13),inst_72219);
} else {
if((state_val_72270 === (18))){
var inst_72234 = (state_72269[(12)]);
var inst_72238 = cljs.core.chunk_first.call(null,inst_72234);
var inst_72239 = cljs.core.chunk_rest.call(null,inst_72234);
var inst_72240 = cljs.core.count.call(null,inst_72238);
var inst_72210 = inst_72239;
var inst_72211 = inst_72238;
var inst_72212 = inst_72240;
var inst_72213 = (0);
var state_72269__$1 = (function (){var statearr_72300 = state_72269;
(statearr_72300[(7)] = inst_72211);

(statearr_72300[(8)] = inst_72213);

(statearr_72300[(9)] = inst_72210);

(statearr_72300[(10)] = inst_72212);

return statearr_72300;
})();
var statearr_72301_72328 = state_72269__$1;
(statearr_72301_72328[(2)] = null);

(statearr_72301_72328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72270 === (8))){
var inst_72213 = (state_72269[(8)]);
var inst_72212 = (state_72269[(10)]);
var inst_72215 = (inst_72213 < inst_72212);
var inst_72216 = inst_72215;
var state_72269__$1 = state_72269;
if(cljs.core.truth_(inst_72216)){
var statearr_72302_72329 = state_72269__$1;
(statearr_72302_72329[(1)] = (10));

} else {
var statearr_72303_72330 = state_72269__$1;
(statearr_72303_72330[(1)] = (11));

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
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72307[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72307[(1)] = (1));

return statearr_72307;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72269){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72308){if((e72308 instanceof Object)){
var ex__38704__auto__ = e72308;
var statearr_72309_72331 = state_72269;
(statearr_72309_72331[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72332 = state_72269;
state_72269 = G__72332;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72269){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_72310 = f__38813__auto__.call(null);
(statearr_72310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,dispatch_key,params){
var map__72333 = env;
var map__72333__$1 = ((((!((map__72333 == null)))?((((map__72333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72333):map__72333);
var item_id = cljs.core.get.call(null,map__72333__$1,new cljs.core.Keyword(null,"item-id","item-id",-1804511607));
var item = cljs.core.get.call(null,map__72333__$1,new cljs.core.Keyword(null,"item","item",249373802));
var update_time = ((item[(1)]) | (0));
var fun = ((function (map__72333,map__72333__$1,item_id,item,update_time){
return (function (index){
if((update_time === (0))){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time){
return (function (state_72349){
var state_val_72350 = (state_72349[(1)]);
if((state_val_72350 === (1))){
var inst_72335 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_72336 = (index === (0));
var state_72349__$1 = (function (){var statearr_72351 = state_72349;
(statearr_72351[(7)] = inst_72335);

return statearr_72351;
})();
if(cljs.core.truth_(inst_72336)){
var statearr_72352_72409 = state_72349__$1;
(statearr_72352_72409[(1)] = (2));

} else {
var statearr_72353_72410 = state_72349__$1;
(statearr_72353_72410[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72350 === (2))){
var state_72349__$1 = state_72349;
var statearr_72354_72411 = state_72349__$1;
(statearr_72354_72411[(2)] = (0));

(statearr_72354_72411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72350 === (3))){
var state_72349__$1 = state_72349;
var statearr_72355_72412 = state_72349__$1;
(statearr_72355_72412[(2)] = 1.0E-4);

(statearr_72355_72412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72350 === (4))){
var inst_72340 = (state_72349[(2)]);
var inst_72341 = (index === (0));
var state_72349__$1 = (function (){var statearr_72356 = state_72349;
(statearr_72356[(8)] = inst_72340);

return statearr_72356;
})();
if(cljs.core.truth_(inst_72341)){
var statearr_72357_72413 = state_72349__$1;
(statearr_72357_72413[(1)] = (5));

} else {
var statearr_72358_72414 = state_72349__$1;
(statearr_72358_72414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72350 === (5))){
var state_72349__$1 = state_72349;
var statearr_72359_72415 = state_72349__$1;
(statearr_72359_72415[(2)] = (0));

(statearr_72359_72415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72350 === (6))){
var state_72349__$1 = state_72349;
var statearr_72360_72416 = state_72349__$1;
(statearr_72360_72416[(2)] = 1.0E-4);

(statearr_72360_72416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72350 === (7))){
var inst_72340 = (state_72349[(8)]);
var inst_72335 = (state_72349[(7)]);
var inst_72345 = (state_72349[(2)]);
var inst_72346 = [inst_72340,inst_72345];
var inst_72347 = cljs.core.PersistentHashMap.fromArrays(inst_72335,inst_72346);
var state_72349__$1 = state_72349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72349__$1,inst_72347);
} else {
return null;
}
}
}
}
}
}
}
});})(c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time))
;
return ((function (switch__38700__auto__,c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72364 = [null,null,null,null,null,null,null,null,null];
(statearr_72364[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72364[(1)] = (1));

return statearr_72364;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72349){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72365){if((e72365 instanceof Object)){
var ex__38704__auto__ = e72365;
var statearr_72366_72417 = state_72349;
(statearr_72366_72417[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72418 = state_72349;
state_72349 = G__72418;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72349){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time))
})();
var state__38814__auto__ = (function (){var statearr_72367 = f__38813__auto__.call(null);
(statearr_72367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time))
);

return c__38812__auto__;
} else {
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time){
return (function (state_72379){
var state_val_72380 = (state_72379[(1)]);
if((state_val_72380 === (1))){
var inst_72368 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"itemVoteInfo","itemVoteInfo",-383659653),item_id,index);
var state_72379__$1 = state_72379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72379__$1,(2),inst_72368);
} else {
if((state_val_72380 === (2))){
var inst_72370 = (state_72379[(2)]);
var inst_72371 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_72372 = (inst_72370[(0)]);
var inst_72373 = ui.core.wei__GT_eth.call(null,inst_72372);
var inst_72374 = (inst_72370[(1)]);
var inst_72375 = ui.core.wei__GT_eth.call(null,inst_72374);
var inst_72376 = [inst_72373,inst_72375];
var inst_72377 = cljs.core.PersistentHashMap.fromArrays(inst_72371,inst_72376);
var state_72379__$1 = state_72379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72379__$1,inst_72377);
} else {
return null;
}
}
});})(c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time))
;
return ((function (switch__38700__auto__,c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72384 = [null,null,null,null,null,null,null];
(statearr_72384[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72384[(1)] = (1));

return statearr_72384;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72379){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72385){if((e72385 instanceof Object)){
var ex__38704__auto__ = e72385;
var statearr_72386_72419 = state_72379;
(statearr_72386_72419[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72420 = state_72379;
state_72379 = G__72420;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72379){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time))
})();
var state__38814__auto__ = (function (){var statearr_72387 = f__38813__auto__.call(null);
(statearr_72387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time))
);

return c__38812__auto__;
}
});})(map__72333,map__72333__$1,item_id,item,update_time))
;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time,fun){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time,fun){
return (function (state_72398){
var state_val_72399 = (state_72398[(1)]);
if((state_val_72399 === (1))){
var inst_72388 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72389 = fun.call(null,(0));
var state_72398__$1 = (function (){var statearr_72400 = state_72398;
(statearr_72400[(7)] = inst_72388);

return statearr_72400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72398__$1,(2),inst_72389);
} else {
if((state_val_72399 === (2))){
var inst_72391 = (state_72398[(2)]);
var inst_72392 = fun.call(null,(1));
var state_72398__$1 = (function (){var statearr_72401 = state_72398;
(statearr_72401[(8)] = inst_72391);

return statearr_72401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72398__$1,(3),inst_72392);
} else {
if((state_val_72399 === (3))){
var inst_72388 = (state_72398[(7)]);
var inst_72391 = (state_72398[(8)]);
var inst_72394 = (state_72398[(2)]);
var inst_72395 = [inst_72391,inst_72394];
var inst_72396 = (new cljs.core.PersistentVector(null,2,(5),inst_72388,inst_72395,null));
var state_72398__$1 = state_72398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72398__$1,inst_72396);
} else {
return null;
}
}
}
});})(c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time,fun))
;
return ((function (switch__38700__auto__,c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time,fun){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72405 = [null,null,null,null,null,null,null,null,null];
(statearr_72405[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72405[(1)] = (1));

return statearr_72405;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72398){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72406){if((e72406 instanceof Object)){
var ex__38704__auto__ = e72406;
var statearr_72407_72421 = state_72398;
(statearr_72407_72421[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72422 = state_72398;
state_72398 = G__72422;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72398){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time,fun))
})();
var state__38814__auto__ = (function (){var statearr_72408 = f__38813__auto__.call(null);
(statearr_72408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,map__72333,map__72333__$1,item_id,item,update_time,fun))
);

return c__38812__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("item","description","item/description",-1431609213),(function (env,dispatch_key,params){
var proposal_index = ((new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env)[(0)]) | (0));
var update_time = ((new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env)[(1)]) | (0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,proposal_index,update_time){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,proposal_index,update_time){
return (function (state_72439){
var state_val_72440 = (state_72439[(1)]);
if((state_val_72440 === (1))){
var inst_72423 = (proposal_index === (0));
var state_72439__$1 = state_72439;
if(cljs.core.truth_(inst_72423)){
var statearr_72441_72452 = state_72439__$1;
(statearr_72441_72452[(1)] = (2));

} else {
var statearr_72442_72453 = state_72439__$1;
(statearr_72442_72453[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72440 === (2))){
var inst_72425 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var inst_72426 = ui.core.starting_items.call(null,inst_72425);
var state_72439__$1 = state_72439;
var statearr_72443_72454 = state_72439__$1;
(statearr_72443_72454[(2)] = inst_72426);

(statearr_72443_72454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72440 === (3))){
var inst_72428 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),proposal_index);
var state_72439__$1 = state_72439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72439__$1,(5),inst_72428);
} else {
if((state_val_72440 === (4))){
var inst_72437 = (state_72439[(2)]);
var state_72439__$1 = state_72439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72439__$1,inst_72437);
} else {
if((state_val_72440 === (5))){
var inst_72430 = (state_72439[(2)]);
var inst_72431 = (inst_72430[(3)]);
var inst_72432 = (inst_72431 | (0));
var inst_72433 = ui.core.get_proposal_description.call(null,inst_72432,proposal_index);
var state_72439__$1 = state_72439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72439__$1,(6),inst_72433);
} else {
if((state_val_72440 === (6))){
var inst_72435 = (state_72439[(2)]);
var state_72439__$1 = state_72439;
var statearr_72444_72455 = state_72439__$1;
(statearr_72444_72455[(2)] = inst_72435);

(statearr_72444_72455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__38812__auto__,proposal_index,update_time))
;
return ((function (switch__38700__auto__,c__38812__auto__,proposal_index,update_time){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72448 = [null,null,null,null,null,null,null];
(statearr_72448[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72448[(1)] = (1));

return statearr_72448;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72439){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72449){if((e72449 instanceof Object)){
var ex__38704__auto__ = e72449;
var statearr_72450_72456 = state_72439;
(statearr_72450_72456[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72457 = state_72439;
state_72439 = G__72457;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72439){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,proposal_index,update_time))
})();
var state__38814__auto__ = (function (){var statearr_72451 = f__38813__auto__.call(null);
(statearr_72451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,proposal_index,update_time))
);

return c__38812__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","items","etherean/items",165918606),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?cljs.core.ex_info.call(null,"not implemented",cljs.core.PersistentArrayMap.EMPTY):(function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_72540){
var state_val_72541 = (state_72540[(1)]);
if((state_val_72541 === (7))){
var inst_72470 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
var statearr_72542_72586 = state_72540__$1;
(statearr_72542_72586[(2)] = inst_72470);

(statearr_72542_72586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (20))){
var inst_72533 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
var statearr_72543_72587 = state_72540__$1;
(statearr_72543_72587[(2)] = inst_72533);

(statearr_72543_72587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (1))){
var inst_72460 = (env == null);
var inst_72461 = cljs.core.not.call(null,inst_72460);
var state_72540__$1 = state_72540;
if(inst_72461){
var statearr_72544_72588 = state_72540__$1;
(statearr_72544_72588[(1)] = (2));

} else {
var statearr_72545_72589 = state_72540__$1;
(statearr_72545_72589[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (24))){
var inst_72518 = (state_72540[(7)]);
var inst_72479 = (state_72540[(8)]);
var inst_72480 = (state_72540[(9)]);
var inst_72521 = (state_72540[(2)]);
var inst_72522 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_72521,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_72518);
var inst_72523 = inst_72479.call(null,inst_72522,inst_72480);
var state_72540__$1 = state_72540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72540__$1,(25),inst_72523);
} else {
if((state_val_72541 === (4))){
var inst_72473 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
if(cljs.core.truth_(inst_72473)){
var statearr_72546_72590 = state_72540__$1;
(statearr_72546_72590[(1)] = (8));

} else {
var statearr_72547_72591 = state_72540__$1;
(statearr_72547_72591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (15))){
var inst_72535 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
var statearr_72548_72592 = state_72540__$1;
(statearr_72548_72592[(2)] = inst_72535);

(statearr_72548_72592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (21))){
var inst_72509 = (state_72540[(10)]);
var inst_72513 = cljs.core.chunk_first.call(null,inst_72509);
var inst_72514 = cljs.core.chunk_rest.call(null,inst_72509);
var inst_72515 = cljs.core.count.call(null,inst_72513);
var inst_72489 = inst_72514;
var inst_72490 = inst_72513;
var inst_72491 = inst_72515;
var inst_72492 = (0);
var state_72540__$1 = (function (){var statearr_72549 = state_72540;
(statearr_72549[(11)] = inst_72489);

(statearr_72549[(12)] = inst_72490);

(statearr_72549[(13)] = inst_72492);

(statearr_72549[(14)] = inst_72491);

return statearr_72549;
})();
var statearr_72550_72593 = state_72540__$1;
(statearr_72550_72593[(2)] = null);

(statearr_72550_72593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (13))){
var inst_72490 = (state_72540[(12)]);
var inst_72492 = (state_72540[(13)]);
var inst_72497 = (state_72540[(15)]);
var inst_72497__$1 = cljs.core._nth.call(null,inst_72490,inst_72492);
var inst_72498 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_72497__$1);
var state_72540__$1 = (function (){var statearr_72551 = state_72540;
(statearr_72551[(15)] = inst_72497__$1);

return statearr_72551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72540__$1,(16),inst_72498);
} else {
if((state_val_72541 === (22))){
var inst_72518 = (state_72540[(7)]);
var inst_72509 = (state_72540[(10)]);
var inst_72518__$1 = cljs.core.first.call(null,inst_72509);
var inst_72519 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_72518__$1);
var state_72540__$1 = (function (){var statearr_72552 = state_72540;
(statearr_72552[(7)] = inst_72518__$1);

return statearr_72552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72540__$1,(24),inst_72519);
} else {
if((state_val_72541 === (6))){
var state_72540__$1 = state_72540;
var statearr_72556_72594 = state_72540__$1;
(statearr_72556_72594[(2)] = false);

(statearr_72556_72594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (25))){
var inst_72518 = (state_72540[(7)]);
var inst_72509 = (state_72540[(10)]);
var inst_72482 = (state_72540[(16)]);
var inst_72525 = (state_72540[(2)]);
var inst_72526 = cljs.core.swap_BANG_.call(null,inst_72482,cljs.core.assoc,inst_72518,inst_72525);
var inst_72527 = cljs.core.next.call(null,inst_72509);
var inst_72489 = inst_72527;
var inst_72490 = null;
var inst_72491 = (0);
var inst_72492 = (0);
var state_72540__$1 = (function (){var statearr_72557 = state_72540;
(statearr_72557[(11)] = inst_72489);

(statearr_72557[(12)] = inst_72490);

(statearr_72557[(13)] = inst_72492);

(statearr_72557[(17)] = inst_72526);

(statearr_72557[(14)] = inst_72491);

return statearr_72557;
})();
var statearr_72558_72595 = state_72540__$1;
(statearr_72558_72595[(2)] = null);

(statearr_72558_72595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (17))){
var inst_72489 = (state_72540[(11)]);
var inst_72490 = (state_72540[(12)]);
var inst_72492 = (state_72540[(13)]);
var inst_72482 = (state_72540[(16)]);
var inst_72497 = (state_72540[(15)]);
var inst_72491 = (state_72540[(14)]);
var inst_72504 = (state_72540[(2)]);
var inst_72505 = cljs.core.swap_BANG_.call(null,inst_72482,cljs.core.assoc,inst_72497,inst_72504);
var inst_72506 = (inst_72492 + (1));
var tmp72553 = inst_72489;
var tmp72554 = inst_72490;
var tmp72555 = inst_72491;
var inst_72489__$1 = tmp72553;
var inst_72490__$1 = tmp72554;
var inst_72491__$1 = tmp72555;
var inst_72492__$1 = inst_72506;
var state_72540__$1 = (function (){var statearr_72559 = state_72540;
(statearr_72559[(11)] = inst_72489__$1);

(statearr_72559[(18)] = inst_72505);

(statearr_72559[(12)] = inst_72490__$1);

(statearr_72559[(13)] = inst_72492__$1);

(statearr_72559[(14)] = inst_72491__$1);

return statearr_72559;
})();
var statearr_72560_72596 = state_72540__$1;
(statearr_72560_72596[(2)] = null);

(statearr_72560_72596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (3))){
var state_72540__$1 = state_72540;
var statearr_72561_72597 = state_72540__$1;
(statearr_72561_72597[(2)] = false);

(statearr_72561_72597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (12))){
var inst_72482 = (state_72540[(16)]);
var inst_72537 = (state_72540[(2)]);
var inst_72538 = cljs.core.deref.call(null,inst_72482);
var state_72540__$1 = (function (){var statearr_72562 = state_72540;
(statearr_72562[(19)] = inst_72537);

return statearr_72562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72540__$1,inst_72538);
} else {
if((state_val_72541 === (2))){
var inst_72463 = env.cljs$lang$protocol_mask$partition0$;
var inst_72464 = (inst_72463 & (64));
var inst_72465 = env.cljs$core$ISeq$;
var inst_72466 = (inst_72464) || (inst_72465);
var state_72540__$1 = state_72540;
if(cljs.core.truth_(inst_72466)){
var statearr_72563_72598 = state_72540__$1;
(statearr_72563_72598[(1)] = (5));

} else {
var statearr_72564_72599 = state_72540__$1;
(statearr_72564_72599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (23))){
var inst_72530 = (state_72540[(2)]);
var state_72540__$1 = state_72540;
var statearr_72565_72600 = state_72540__$1;
(statearr_72565_72600[(2)] = inst_72530);

(statearr_72565_72600[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (19))){
var state_72540__$1 = state_72540;
var statearr_72566_72601 = state_72540__$1;
(statearr_72566_72601[(2)] = null);

(statearr_72566_72601[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (11))){
var inst_72492 = (state_72540[(13)]);
var inst_72491 = (state_72540[(14)]);
var inst_72494 = (inst_72492 < inst_72491);
var inst_72495 = inst_72494;
var state_72540__$1 = state_72540;
if(cljs.core.truth_(inst_72495)){
var statearr_72567_72602 = state_72540__$1;
(statearr_72567_72602[(1)] = (13));

} else {
var statearr_72568_72603 = state_72540__$1;
(statearr_72568_72603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (9))){
var state_72540__$1 = state_72540;
var statearr_72569_72604 = state_72540__$1;
(statearr_72569_72604[(2)] = env);

(statearr_72569_72604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (5))){
var state_72540__$1 = state_72540;
var statearr_72570_72605 = state_72540__$1;
(statearr_72570_72605[(2)] = true);

(statearr_72570_72605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (14))){
var inst_72489 = (state_72540[(11)]);
var inst_72509 = (state_72540[(10)]);
var inst_72509__$1 = cljs.core.seq.call(null,inst_72489);
var state_72540__$1 = (function (){var statearr_72571 = state_72540;
(statearr_72571[(10)] = inst_72509__$1);

return statearr_72571;
})();
if(inst_72509__$1){
var statearr_72572_72606 = state_72540__$1;
(statearr_72572_72606[(1)] = (18));

} else {
var statearr_72573_72607 = state_72540__$1;
(statearr_72573_72607[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (16))){
var inst_72479 = (state_72540[(8)]);
var inst_72480 = (state_72540[(9)]);
var inst_72497 = (state_72540[(15)]);
var inst_72500 = (state_72540[(2)]);
var inst_72501 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_72500,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_72497);
var inst_72502 = inst_72479.call(null,inst_72501,inst_72480);
var state_72540__$1 = state_72540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72540__$1,(17),inst_72502);
} else {
if((state_val_72541 === (10))){
var inst_72478 = (state_72540[(2)]);
var inst_72479 = cljs.core.get.call(null,inst_72478,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_72480 = cljs.core.get.call(null,inst_72478,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_72481 = cljs.core.PersistentVector.EMPTY;
var inst_72482 = cljs.core.atom.call(null,inst_72481);
var inst_72487 = cljs.core.range.call(null,ui.core.max_items);
var inst_72488 = cljs.core.seq.call(null,inst_72487);
var inst_72489 = inst_72488;
var inst_72490 = null;
var inst_72491 = (0);
var inst_72492 = (0);
var state_72540__$1 = (function (){var statearr_72574 = state_72540;
(statearr_72574[(11)] = inst_72489);

(statearr_72574[(8)] = inst_72479);

(statearr_72574[(9)] = inst_72480);

(statearr_72574[(12)] = inst_72490);

(statearr_72574[(13)] = inst_72492);

(statearr_72574[(16)] = inst_72482);

(statearr_72574[(14)] = inst_72491);

return statearr_72574;
})();
var statearr_72575_72608 = state_72540__$1;
(statearr_72575_72608[(2)] = null);

(statearr_72575_72608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (18))){
var inst_72509 = (state_72540[(10)]);
var inst_72511 = cljs.core.chunked_seq_QMARK_.call(null,inst_72509);
var state_72540__$1 = state_72540;
if(inst_72511){
var statearr_72576_72609 = state_72540__$1;
(statearr_72576_72609[(1)] = (21));

} else {
var statearr_72577_72610 = state_72540__$1;
(statearr_72577_72610[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72541 === (8))){
var inst_72475 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_72540__$1 = state_72540;
var statearr_72578_72611 = state_72540__$1;
(statearr_72578_72611[(2)] = inst_72475);

(statearr_72578_72611[(1)] = (10));


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
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72582[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72582[(1)] = (1));

return statearr_72582;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72540){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72583){if((e72583 instanceof Object)){
var ex__38704__auto__ = e72583;
var statearr_72584_72612 = state_72540;
(statearr_72584_72612[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72613 = state_72540;
state_72540 = G__72613;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72540){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_72585 = f__38813__auto__.call(null);
(statearr_72585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__72614__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__72614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72615__i = 0, G__72615__a = new Array(arguments.length -  0);
while (G__72615__i < G__72615__a.length) {G__72615__a[G__72615__i] = arguments[G__72615__i + 0]; ++G__72615__i;}
  args = new cljs.core.IndexedSeq(G__72615__a,0);
} 
return G__72614__delegate.call(this,args);};
G__72614.cljs$lang$maxFixedArity = 0;
G__72614.cljs$lang$applyTo = (function (arglist__72616){
var args = cljs.core.seq(arglist__72616);
return G__72614__delegate(args);
});
G__72614.cljs$core$IFn$_invoke$arity$variadic = G__72614__delegate;
return G__72614;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__72617__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__72617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72618__i = 0, G__72618__a = new Array(arguments.length -  0);
while (G__72618__i < G__72618__a.length) {G__72618__a[G__72618__i] = arguments[G__72618__i + 0]; ++G__72618__i;}
  args = new cljs.core.IndexedSeq(G__72618__a,0);
} 
return G__72617__delegate.call(this,args);};
G__72617.cljs$lang$maxFixedArity = 0;
G__72617.cljs$lang$applyTo = (function (arglist__72619){
var args = cljs.core.seq(arglist__72619);
return G__72617__delegate(args);
});
G__72617.cljs$core$IFn$_invoke$arity$variadic = G__72617__delegate;
return G__72617;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__72620__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__72620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72621__i = 0, G__72621__a = new Array(arguments.length -  0);
while (G__72621__i < G__72621__a.length) {G__72621__a[G__72621__i] = arguments[G__72621__i + 0]; ++G__72621__i;}
  args = new cljs.core.IndexedSeq(G__72621__a,0);
} 
return G__72620__delegate.call(this,args);};
G__72620.cljs$lang$maxFixedArity = 0;
G__72620.cljs$lang$applyTo = (function (arglist__72622){
var args = cljs.core.seq(arglist__72622);
return G__72620__delegate(args);
});
G__72620.cljs$core$IFn$_invoke$arity$variadic = G__72620__delegate;
return G__72620;
})()
);
if(typeof ui.core.mutate_server !== 'undefined'){
} else {
ui.core.mutate_server = (function (){var method_table__32804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__32805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__32806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__32807__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__32808__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","mutate-server"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__32808__auto__,method_table__32804__auto__,prefer_table__32805__auto__,method_cache__32806__auto__,cached_hierarchy__32807__auto__));
})();
}
ui.core.format_message = (function ui$core$format_message(message){
return cljs.core.apply.call(null,cljs.core.array,cljs.core.take.call(null,(4),cljs.core.concat.call(null,cljs.core.map.call(null,(function (x){
return cljs.core.apply.call(null,cljs.core.str,x);
}),cljs.core.partition_all.call(null,(32),message)),cljs.core.repeat.call(null,""))));
});
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("proposal","save","proposal/save",356239610,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__72623 = params;
var map__72623__$1 = ((((!((map__72623 == null)))?((((map__72623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72623):map__72623);
var id = cljs.core.get.call(null,map__72623__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__72623__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,map__72623,map__72623__$1,id,description){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,map__72623,map__72623__$1,id,description){
return (function (state_72652){
var state_val_72653 = (state_72652[(1)]);
if((state_val_72653 === (1))){
var inst_72625 = ui.core.block_number.call(null);
var state_72652__$1 = state_72652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72652__$1,(2),inst_72625);
} else {
if((state_val_72653 === (2))){
var inst_72627 = (state_72652[(2)]);
var inst_72628 = ui.core.format_message.call(null,description);
var inst_72629 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"addProposal","addProposal",-2108750592),inst_72628);
var state_72652__$1 = (function (){var statearr_72654 = state_72652;
(statearr_72654[(7)] = inst_72627);

return statearr_72654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72652__$1,(3),inst_72629);
} else {
if((state_val_72653 === (3))){
var inst_72627 = (state_72652[(7)]);
var inst_72631 = (state_72652[(2)]);
var inst_72632 = ui.core.get_historical_events.call(null,ui.core.etherean,inst_72627,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({}));
var state_72652__$1 = (function (){var statearr_72655 = state_72652;
(statearr_72655[(8)] = inst_72631);

return statearr_72655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72652__$1,(4),inst_72632);
} else {
if((state_val_72653 === (4))){
var inst_72634 = (state_72652[(2)]);
var inst_72635 = cljs.core.first.call(null,inst_72634);
var inst_72636 = [new cljs.core.Keyword(null,"tempids","tempids",1767509089)];
var inst_72637 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72638 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),id];
var inst_72639 = (new cljs.core.PersistentVector(null,2,(5),inst_72637,inst_72638,null));
var inst_72640 = [inst_72639];
var inst_72641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72642 = inst_72635.args;
var inst_72643 = inst_72642.proposalIndex;
var inst_72644 = (inst_72643 | (0));
var inst_72645 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),inst_72644];
var inst_72646 = (new cljs.core.PersistentVector(null,2,(5),inst_72641,inst_72645,null));
var inst_72647 = [inst_72646];
var inst_72648 = cljs.core.PersistentHashMap.fromArrays(inst_72640,inst_72647);
var inst_72649 = [inst_72648];
var inst_72650 = cljs.core.PersistentHashMap.fromArrays(inst_72636,inst_72649);
var state_72652__$1 = state_72652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72652__$1,inst_72650);
} else {
return null;
}
}
}
}
});})(c__38812__auto__,map__72623,map__72623__$1,id,description))
;
return ((function (switch__38700__auto__,c__38812__auto__,map__72623,map__72623__$1,id,description){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72659 = [null,null,null,null,null,null,null,null,null];
(statearr_72659[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72659[(1)] = (1));

return statearr_72659;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72652){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72660){if((e72660 instanceof Object)){
var ex__38704__auto__ = e72660;
var statearr_72661_72663 = state_72652;
(statearr_72661_72663[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72664 = state_72652;
state_72652 = G__72664;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72652){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,map__72623,map__72623__$1,id,description))
})();
var state__38814__auto__ = (function (){var statearr_72662 = f__38813__auto__.call(null);
(statearr_72662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,map__72623,map__72623__$1,id,description))
);

return c__38812__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__72665 = params;
var map__72665__$1 = ((((!((map__72665 == null)))?((((map__72665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72665):map__72665);
var id = cljs.core.get.call(null,map__72665__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__72665__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,map__72665,map__72665__$1,id,direction){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,map__72665,map__72665__$1,id,direction){
return (function (state_72672){
var state_val_72673 = (state_72672[(1)]);
if((state_val_72673 === (1))){
var inst_72667 = cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113));
var inst_72668 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnProposal","voteOnProposal",-1101682438),id,inst_72667);
var state_72672__$1 = state_72672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72672__$1,(2),inst_72668);
} else {
if((state_val_72673 === (2))){
var inst_72670 = (state_72672[(2)]);
var state_72672__$1 = state_72672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72672__$1,inst_72670);
} else {
return null;
}
}
});})(c__38812__auto__,map__72665,map__72665__$1,id,direction))
;
return ((function (switch__38700__auto__,c__38812__auto__,map__72665,map__72665__$1,id,direction){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72677 = [null,null,null,null,null,null,null];
(statearr_72677[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72677[(1)] = (1));

return statearr_72677;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72672){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72678){if((e72678 instanceof Object)){
var ex__38704__auto__ = e72678;
var statearr_72679_72681 = state_72672;
(statearr_72679_72681[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72682 = state_72672;
state_72672 = G__72682;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72672){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,map__72665,map__72665__$1,id,direction))
})();
var state__38814__auto__ = (function (){var statearr_72680 = f__38813__auto__.call(null);
(statearr_72680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,map__72665,map__72665__$1,id,direction))
);

return c__38812__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("item","vote","item/vote",-842849665,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__72683 = params;
var map__72683__$1 = ((((!((map__72683 == null)))?((((map__72683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72683):map__72683);
var id = cljs.core.get.call(null,map__72683__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__72683__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,map__72683,map__72683__$1,id,direction){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,map__72683,map__72683__$1,id,direction){
return (function (state_72689){
var state_val_72690 = (state_72689[(1)]);
if((state_val_72690 === (1))){
var inst_72685 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnItem","voteOnItem",903210165),id,direction);
var state_72689__$1 = state_72689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72689__$1,(2),inst_72685);
} else {
if((state_val_72690 === (2))){
var inst_72687 = (state_72689[(2)]);
var state_72689__$1 = state_72689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72689__$1,inst_72687);
} else {
return null;
}
}
});})(c__38812__auto__,map__72683,map__72683__$1,id,direction))
;
return ((function (switch__38700__auto__,c__38812__auto__,map__72683,map__72683__$1,id,direction){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72694 = [null,null,null,null,null,null,null];
(statearr_72694[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72694[(1)] = (1));

return statearr_72694;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72689){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72695){if((e72695 instanceof Object)){
var ex__38704__auto__ = e72695;
var statearr_72696_72698 = state_72689;
(statearr_72696_72698[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72699 = state_72689;
state_72689 = G__72699;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72689){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,map__72683,map__72683__$1,id,direction))
})();
var state__38814__auto__ = (function (){var statearr_72697 = f__38813__auto__.call(null);
(statearr_72697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,map__72683,map__72683__$1,id,direction))
);

return c__38812__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__72700 = params;
var map__72700__$1 = ((((!((map__72700 == null)))?((((map__72700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72700):map__72700);
var value = cljs.core.get.call(null,map__72700__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,map__72700,map__72700__$1,value){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,map__72700,map__72700__$1,value){
return (function (state_72714){
var state_val_72715 = (state_72714[(1)]);
if((state_val_72715 === (1))){
var inst_72702 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_72714__$1 = state_72714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72714__$1,(2),inst_72702);
} else {
if((state_val_72715 === (2))){
var inst_72704 = (state_72714[(2)]);
var inst_72705 = ui.core.contract.call(null,ui.contract.staking_abi,inst_72704);
var inst_72706 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_72707 = web3.toWei(value,"ether");
var inst_72708 = [inst_72707];
var inst_72709 = cljs.core.PersistentHashMap.fromArrays(inst_72706,inst_72708);
var inst_72710 = ui.core.chan_transact.call(null,inst_72705,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),inst_72709);
var state_72714__$1 = state_72714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72714__$1,(3),inst_72710);
} else {
if((state_val_72715 === (3))){
var inst_72712 = (state_72714[(2)]);
var state_72714__$1 = state_72714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72714__$1,inst_72712);
} else {
return null;
}
}
}
});})(c__38812__auto__,map__72700,map__72700__$1,value))
;
return ((function (switch__38700__auto__,c__38812__auto__,map__72700,map__72700__$1,value){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72719 = [null,null,null,null,null,null,null];
(statearr_72719[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72719[(1)] = (1));

return statearr_72719;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72714){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72720){if((e72720 instanceof Object)){
var ex__38704__auto__ = e72720;
var statearr_72721_72723 = state_72714;
(statearr_72721_72723[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72724 = state_72714;
state_72714 = G__72724;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72714){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,map__72700,map__72700__$1,value))
})();
var state__38814__auto__ = (function (){var statearr_72722 = f__38813__auto__.call(null);
(statearr_72722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,map__72700,map__72700__$1,value))
);

return c__38812__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","withdraw","user/withdraw",-1187344809,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__72725 = params;
var map__72725__$1 = ((((!((map__72725 == null)))?((((map__72725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72725):map__72725);
var value = cljs.core.get.call(null,map__72725__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,map__72725,map__72725__$1,value){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,map__72725,map__72725__$1,value){
return (function (state_72735){
var state_val_72736 = (state_72735[(1)]);
if((state_val_72736 === (1))){
var inst_72727 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_72735__$1 = state_72735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72735__$1,(2),inst_72727);
} else {
if((state_val_72736 === (2))){
var inst_72729 = (state_72735[(2)]);
var inst_72730 = ui.core.contract.call(null,ui.contract.staking_abi,inst_72729);
var inst_72731 = ui.core.chan_transact.call(null,inst_72730,new cljs.core.Keyword(null,"withdraw","withdraw",1469652053));
var state_72735__$1 = state_72735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72735__$1,(3),inst_72731);
} else {
if((state_val_72736 === (3))){
var inst_72733 = (state_72735[(2)]);
var state_72735__$1 = state_72735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72735__$1,inst_72733);
} else {
return null;
}
}
}
});})(c__38812__auto__,map__72725,map__72725__$1,value))
;
return ((function (switch__38700__auto__,c__38812__auto__,map__72725,map__72725__$1,value){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72740 = [null,null,null,null,null,null,null];
(statearr_72740[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72740[(1)] = (1));

return statearr_72740;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72735){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72741){if((e72741 instanceof Object)){
var ex__38704__auto__ = e72741;
var statearr_72742_72744 = state_72735;
(statearr_72742_72744[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72745 = state_72735;
state_72735 = G__72745;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72735){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,map__72725,map__72725__$1,value))
})();
var state__38814__auto__ = (function (){var statearr_72743 = f__38813__auto__.call(null);
(statearr_72743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,map__72725,map__72725__$1,value))
);

return c__38812__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("etherean","advance-debug-day","etherean/advance-debug-day",-132769747,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_72755){
var state_val_72756 = (state_72755[(1)]);
if((state_val_72756 === (1))){
var inst_72746 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"debugTime","debugTime",-1487871746));
var state_72755__$1 = state_72755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72755__$1,(2),inst_72746);
} else {
if((state_val_72756 === (2))){
var inst_72748 = (state_72755[(2)]);
var inst_72749 = (inst_72748 | (0));
var inst_72750 = (inst_72749 + (86400));
var inst_72751 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"setDebugTime","setDebugTime",1278197802),inst_72750);
var state_72755__$1 = state_72755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72755__$1,(3),inst_72751);
} else {
if((state_val_72756 === (3))){
var inst_72753 = (state_72755[(2)]);
var state_72755__$1 = state_72755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72755__$1,inst_72753);
} else {
return null;
}
}
}
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var ui$core$state_machine__38701__auto__ = null;
var ui$core$state_machine__38701__auto____0 = (function (){
var statearr_72760 = [null,null,null,null,null,null,null];
(statearr_72760[(0)] = ui$core$state_machine__38701__auto__);

(statearr_72760[(1)] = (1));

return statearr_72760;
});
var ui$core$state_machine__38701__auto____1 = (function (state_72755){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72761){if((e72761 instanceof Object)){
var ex__38704__auto__ = e72761;
var statearr_72762_72764 = state_72755;
(statearr_72762_72764[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72765 = state_72755;
state_72755 = G__72765;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$state_machine__38701__auto__ = function(state_72755){
switch(arguments.length){
case 0:
return ui$core$state_machine__38701__auto____0.call(this);
case 1:
return ui$core$state_machine__38701__auto____1.call(this,state_72755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__38701__auto____0;
ui$core$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__38701__auto____1;
return ui$core$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_72763 = f__38813__auto__.call(null);
(statearr_72763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
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
if(cljs.core.truth_((function (){var or__31879__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
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
ui.core.blockchain_send = (function ui$core$blockchain_send(p__72766,cb){
var map__72785 = p__72766;
var map__72785__$1 = ((((!((map__72785 == null)))?((((map__72785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72785):map__72785);
var remote = cljs.core.get.call(null,map__72785__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,map__72785,map__72785__$1,remote){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,map__72785,map__72785__$1,remote){
return (function (state_72794){
var state_val_72795 = (state_72794[(1)]);
if((state_val_72795 === (1))){
var inst_72787 = cljs.core.PersistentHashMap.EMPTY;
var inst_72788 = ui.core.process_remote_query.call(null,remote);
var inst_72789 = ui.core.server_parser.call(null,inst_72787,inst_72788);
var state_72794__$1 = state_72794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72794__$1,(2),inst_72789);
} else {
if((state_val_72795 === (2))){
var inst_72791 = (state_72794[(2)]);
var inst_72792 = cb.call(null,inst_72791);
var state_72794__$1 = state_72794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72794__$1,inst_72792);
} else {
return null;
}
}
});})(c__38812__auto__,map__72785,map__72785__$1,remote))
;
return ((function (switch__38700__auto__,c__38812__auto__,map__72785,map__72785__$1,remote){
return (function() {
var ui$core$blockchain_send_$_state_machine__38701__auto__ = null;
var ui$core$blockchain_send_$_state_machine__38701__auto____0 = (function (){
var statearr_72799 = [null,null,null,null,null,null,null];
(statearr_72799[(0)] = ui$core$blockchain_send_$_state_machine__38701__auto__);

(statearr_72799[(1)] = (1));

return statearr_72799;
});
var ui$core$blockchain_send_$_state_machine__38701__auto____1 = (function (state_72794){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_72794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e72800){if((e72800 instanceof Object)){
var ex__38704__auto__ = e72800;
var statearr_72801_72803 = state_72794;
(statearr_72801_72803[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72804 = state_72794;
state_72794 = G__72804;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
ui$core$blockchain_send_$_state_machine__38701__auto__ = function(state_72794){
switch(arguments.length){
case 0:
return ui$core$blockchain_send_$_state_machine__38701__auto____0.call(this);
case 1:
return ui$core$blockchain_send_$_state_machine__38701__auto____1.call(this,state_72794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$blockchain_send_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$blockchain_send_$_state_machine__38701__auto____0;
ui$core$blockchain_send_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$blockchain_send_$_state_machine__38701__auto____1;
return ui$core$blockchain_send_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,map__72785,map__72785__$1,remote))
})();
var state__38814__auto__ = (function (){var statearr_72802 = f__38813__auto__.call(null);
(statearr_72802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_72802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,map__72785,map__72785__$1,remote))
);

return c__38812__auto__;
});
ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),ui.core.blockchain_send,new cljs.core.Keyword(null,"merge","merge",-1804319409),ui.core.my_merge,new cljs.core.Keyword(null,"migrate","migrate",-207110743),ui.core.migrate,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),ui.core.my_merge_tree,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
om.next.add_root_BANG_.call(null,ui.core.reconciler,ui.core.Root,goog.dom.getElement("app"));
ui.core.my_toaster = blueprint_cljs.core.toaster.call(null);

//# sourceMappingURL=core.js.map?rel=1489123429893