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
ui.core.brain_vertices = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__422269){
var vec__422270 = p__422269;
var x = cljs.core.nth.call(null,vec__422270,(0),null);
var y = cljs.core.nth.call(null,vec__422270,(1),null);
var z = cljs.core.nth.call(null,vec__422270,(2),null);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,(y - 0.01),z],null));
}),cljs.core.concat.call(null,cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))),cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))))));
ui.core.brain_faces = cljs.core.map.call(null,(function (p__422273){
var vec__422274 = p__422273;
var a = cljs.core.nth.call(null,vec__422274,(0),null);
var b = cljs.core.nth.call(null,vec__422274,(1),null);
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
var G__422277 = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
s = G__422277;
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

var x422282_422302 = ui.core.Item.prototype;
x422282_422302.componentWillUpdate = ((function (x422282_422302){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___422303 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___422304 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___422303,next_ident__40467__auto___422304)){
var idxr__40468__auto___422305 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___422305 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___422305),((function (idxr__40468__auto___422305,ident__40466__auto___422303,next_ident__40467__auto___422304,this__40462__auto__,x422282_422302){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___422303], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___422304], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___422305,ident__40466__auto___422303,next_ident__40467__auto___422304,this__40462__auto__,x422282_422302))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x422282_422302))
;

x422282_422302.shouldComponentUpdate = ((function (x422282_422302){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__422284 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__422284);
} else {
return G__422284;
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
});})(x422282_422302))
;

x422282_422302.componentWillUnmount = ((function (x422282_422302){
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
});})(x422282_422302))
;

x422282_422302.componentDidUpdate = ((function (x422282_422302){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x422282_422302))
;

x422282_422302.isMounted = ((function (x422282_422302){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x422282_422302))
;

x422282_422302.componentWillMount = ((function (x422282_422302){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x422282_422302))
;

x422282_422302.initLocalState = ((function (x422282_422302){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj422286 = {"omcljs$state":ret__40440__auto__};
return obj422286;
});})(x422282_422302))
;

x422282_422302.render = ((function (x422282_422302){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_422287 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_422288 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_422289 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_422290 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_422291 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__422292 = om.next.props.call(null,this$);
var map__422292__$1 = ((((!((map__422292 == null)))?((((map__422292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422292):map__422292);
var id = cljs.core.get.call(null,map__422292__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var description = cljs.core.get.call(null,map__422292__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
var votes = cljs.core.get.call(null,map__422292__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var user = cljs.core.get.call(null,map__422292__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__422293 = user;
var map__422293__$1 = ((((!((map__422293 == null)))?((((map__422293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422293):map__422293);
var stake = cljs.core.get.call(null,map__422293__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var has_stake = (stake > (0));
var map__422294 = om.next.get_state.call(null,this$);
var map__422294__$1 = ((((!((map__422294 == null)))?((((map__422294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422294):map__422294);
var dialog = cljs.core.get.call(null,map__422294__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__422295 = dialog;
var map__422295__$1 = ((((!((map__422295 == null)))?((((map__422295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422295):map__422295);
var direction = cljs.core.get.call(null,map__422295__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": "5px", "paddingBottom": "5px", "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),(((direction === (0)))?"Vote down":"Vote Up"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,hide_dialog,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302){
return (function (e){
return hide_dialog.call(null);
});})(map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,hide_dialog,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,hide_dialog,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("item","vote","item/vote",-842849665,null)),(function (){var x__35316__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","items","etherean/items",165918606)))))));
});})(map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,hide_dialog,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302))
], null),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can vote up ",React.DOM.i(null,"one item")," in this list per day, as well as vote down ",React.DOM.i(null,"one item")," in this list per day. These votes will be remembered and automatically applied on subsequent days, until you change your choices (or until your up/down choices fall from the front page) "],null)))),React.DOM.p(null,"So... is this an item currently on the mind of ethereans?")),(function (){var vote_button = ((function (map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,hide_dialog,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302){
return (function (direction__$1,activated){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,hide_dialog,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302){
return (function (e){
if(has_stake){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),(0),new cljs.core.Keyword(null,"up","up",-269712113),(1)], null).call(null,direction__$1)], null));
} else {
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You need to deposit some stake first before voting on items. Please go to the \"Voting Stake\" tab first."}));
}
});})(map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,hide_dialog,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302))
], null));
});})(map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,hide_dialog,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(votes)?ui.core.format_vote_number.call(null,(((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))))):"---")],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false)],null))));
})(),(function (){var item_body = ((function (map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,hide_dialog,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302){
return (function (desc,detail){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__422292,map__422292__$1,id,description,votes,user,map__422293,map__422293__$1,stake,has_stake,map__422294,map__422294__$1,dialog,map__422295,map__422295__$1,direction,hide_dialog,_STAR_reconciler_STAR_422287,_STAR_depth_STAR_422288,_STAR_shared_STAR_422289,_STAR_instrument_STAR_422290,_STAR_parent_STAR_422291,this$,this__40461__auto__,x422282_422302))
;
return item_body.call(null,description,(cljs.core.truth_(votes)?null:ui.core.mining_spinner.call(null)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_422291;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_422290;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_422289;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_422288;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_422287;
}});})(x422282_422302))
;


ui.core.Item.prototype.constructor = ui.core.Item;

ui.core.Item.prototype.constructor.displayName = "ui.core/Item";

ui.core.Item.prototype.om$isComponent = true;

var x422300_422306 = ui.core.Item;
/** @nocollapse */
x422300_422306.om$next$IQuery$ = true;

/** @nocollapse */
x422300_422306.om$next$IQuery$query$arity$1 = ((function (x422300_422306){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x422300_422306))
;


var x422301_422307 = ui.core.Item.prototype;

x422301_422307.om$next$IQuery$ = true;


x422301_422307.om$next$IQuery$query$arity$1 = ((function (x422301_422307){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x422301_422307))
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

var x422312_422326 = ui.core.Items.prototype;
x422312_422326.componentWillUpdate = ((function (x422312_422326){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___422327 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___422328 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___422327,next_ident__40467__auto___422328)){
var idxr__40468__auto___422329 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___422329 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___422329),((function (idxr__40468__auto___422329,ident__40466__auto___422327,next_ident__40467__auto___422328,this__40462__auto__,x422312_422326){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___422327], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___422328], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___422329,ident__40466__auto___422327,next_ident__40467__auto___422328,this__40462__auto__,x422312_422326))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x422312_422326))
;

x422312_422326.shouldComponentUpdate = ((function (x422312_422326){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__422314 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__422314);
} else {
return G__422314;
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
});})(x422312_422326))
;

x422312_422326.componentWillUnmount = ((function (x422312_422326){
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
});})(x422312_422326))
;

x422312_422326.componentDidUpdate = ((function (x422312_422326){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x422312_422326))
;

x422312_422326.isMounted = ((function (x422312_422326){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x422312_422326))
;

x422312_422326.componentWillMount = ((function (x422312_422326){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x422312_422326))
;

x422312_422326.render = ((function (x422312_422326){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_422315 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_422316 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_422317 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_422318 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_422319 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.9})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__35244__auto__ = ((function (_STAR_reconciler_STAR_422315,_STAR_depth_STAR_422316,_STAR_shared_STAR_422317,_STAR_instrument_STAR_422318,_STAR_parent_STAR_422319,this$,this__40461__auto__,x422312_422326){
return (function ui$core$iter__422320(s__422321){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_422315,_STAR_depth_STAR_422316,_STAR_shared_STAR_422317,_STAR_instrument_STAR_422318,_STAR_parent_STAR_422319,this$,this__40461__auto__,x422312_422326){
return (function (){
var s__422321__$1 = s__422321;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__422321__$1);
if(temp__6728__auto__){
var s__422321__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__422321__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__422321__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__422323 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__422322 = (0);
while(true){
if((i__422322 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__422322);
cljs.core.chunk_append.call(null,b__422323,ui.core.item_component.call(null,item));

var G__422330 = (i__422322 + (1));
i__422322 = G__422330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422323),ui$core$iter__422320.call(null,cljs.core.chunk_rest.call(null,s__422321__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422323),null);
}
} else {
var item = cljs.core.first.call(null,s__422321__$2);
return cljs.core.cons.call(null,ui.core.item_component.call(null,item),ui$core$iter__422320.call(null,cljs.core.rest.call(null,s__422321__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_422315,_STAR_depth_STAR_422316,_STAR_shared_STAR_422317,_STAR_instrument_STAR_422318,_STAR_parent_STAR_422319,this$,this__40461__auto__,x422312_422326))
,null,null));
});})(_STAR_reconciler_STAR_422315,_STAR_depth_STAR_422316,_STAR_shared_STAR_422317,_STAR_instrument_STAR_422318,_STAR_parent_STAR_422319,this$,this__40461__auto__,x422312_422326))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("etherean","items","etherean/items",165918606).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_422319;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_422318;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_422317;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_422316;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_422315;
}});})(x422312_422326))
;


ui.core.Items.prototype.constructor = ui.core.Items;

ui.core.Items.prototype.constructor.displayName = "ui.core/Items";

ui.core.Items.prototype.om$isComponent = true;

var x422324_422331 = ui.core.Items;
/** @nocollapse */
x422324_422331.om$next$IQuery$ = true;

/** @nocollapse */
x422324_422331.om$next$IQuery$query$arity$1 = ((function (x422324_422331){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x422324_422331))
;


var x422325_422332 = ui.core.Items.prototype;

x422325_422332.om$next$IQuery$ = true;


x422325_422332.om$next$IQuery$query$arity$1 = ((function (x422325_422332){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x422325_422332))
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

var x422337_422357 = ui.core.Proposal.prototype;
x422337_422357.componentWillUpdate = ((function (x422337_422357){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___422358 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___422359 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___422358,next_ident__40467__auto___422359)){
var idxr__40468__auto___422360 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___422360 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___422360),((function (idxr__40468__auto___422360,ident__40466__auto___422358,next_ident__40467__auto___422359,this__40462__auto__,x422337_422357){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___422358], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___422359], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___422360,ident__40466__auto___422358,next_ident__40467__auto___422359,this__40462__auto__,x422337_422357))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x422337_422357))
;

x422337_422357.shouldComponentUpdate = ((function (x422337_422357){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__422339 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__422339);
} else {
return G__422339;
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
});})(x422337_422357))
;

x422337_422357.componentWillUnmount = ((function (x422337_422357){
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
});})(x422337_422357))
;

x422337_422357.componentDidUpdate = ((function (x422337_422357){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x422337_422357))
;

x422337_422357.isMounted = ((function (x422337_422357){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x422337_422357))
;

x422337_422357.componentWillMount = ((function (x422337_422357){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x422337_422357))
;

x422337_422357.initLocalState = ((function (x422337_422357){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),"",new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj422341 = {"omcljs$state":ret__40440__auto__};
return obj422341;
});})(x422337_422357))
;

x422337_422357.render = ((function (x422337_422357){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_422342 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_422343 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_422344 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_422345 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_422346 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__422347 = om.next.props.call(null,this$);
var map__422347__$1 = ((((!((map__422347 == null)))?((((map__422347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422347):map__422347);
var description = cljs.core.get.call(null,map__422347__$1,new cljs.core.Keyword("proposal","description","proposal/description",1644720226));
var id = cljs.core.get.call(null,map__422347__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var unsaved = cljs.core.get.call(null,map__422347__$1,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935));
var upvotes = cljs.core.get.call(null,map__422347__$1,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560));
var downvotes = cljs.core.get.call(null,map__422347__$1,new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132));
var user = cljs.core.get.call(null,map__422347__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__422348 = user;
var map__422348__$1 = ((((!((map__422348 == null)))?((((map__422348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422348):map__422348);
var can_vote_proposal = cljs.core.get.call(null,map__422348__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__422348__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var temporary = om.next.tempid_QMARK_.call(null,id);
var has_stake = (stake > (0));
var map__422349 = om.next.get_state.call(null,this$);
var map__422349__$1 = ((((!((map__422349 == null)))?((((map__422349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422349):map__422349);
var height = cljs.core.get.call(null,map__422349__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var dialog = cljs.core.get.call(null,map__422349__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__422350 = dialog;
var map__422350__$1 = ((((!((map__422350 == null)))?((((map__422350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422350):map__422350);
var direction = cljs.core.get.call(null,map__422350__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357))
;
return om_tools.dom.element.call(null,React.DOM.div,blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113)))?"Vote Up":"Vote Down"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357){
return (function (e){
return hide_dialog.call(null);
});})(map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null)),(function (){var x__35316__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
});})(map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357))
], null),"You can vote on one proposal per day. Is this an item currently on the mind of ethereans, that deserves to be listed on the front page?"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(unsaved)?(0):(1))], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),ui.motion.spring.call(null,height)], null)], null),((function (map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357){
return (function (value){
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingBottom": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var vote_button = ((function (map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357){
return (function (direction__$1,activated,disabled){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357){
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
});})(map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357))
], null));
});})(map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false,unsaved),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(unsaved)?null:(cljs.core.truth_(upvotes)?ui.core.format_vote_number.call(null,(upvotes - downvotes)):"---"
))],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false,unsaved)],null))));
})(),(function (){var proposal_body = ((function (map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357){
return (function (desc,detail,disabled){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)}), "onClick": om_tools.dom.format_opts.call(null,((function (map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357){
return (function (){
if(cljs.core.truth_(disabled)){
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You have not staked any funds yet. Please got to the \"Voting Stakes\" tab first."}));
} else {
return null;
}
});})(map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357))
)}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357))
;
if(cljs.core.truth_(unsaved)){
var temp_description = new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
var has_description = cljs.core.seq.call(null,temp_description);
var save_fn = ((function (temp_description,has_description,proposal_body,map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357){
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
});})(temp_description,has_description,proposal_body,map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357))
;
return proposal_body.call(null,blueprint_cljs.core.editable_text.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),((!(has_stake))?"... (Please deposit stake first to propose an item)":((cljs.core.not.call(null,can_vote_proposal))?"... (Today's proposal action already used up)":"... propose a new item!"
)),new cljs.core.Keyword(null,"value","value",305978217),temp_description,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(has_stake)) || (cljs.core.not.call(null,can_vote_proposal)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp_description,has_description,save_fn,proposal_body,map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357){
return (function (s){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),s);
});})(temp_description,has_description,save_fn,proposal_body,map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357))
], null)),((has_description)?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary pt-icon-plus pt-minimal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_fn], null),"Save"):null),!(has_stake));
} else {
return proposal_body.call(null,description,(((temporary) || (cljs.core.not.call(null,upvotes)))?ui.core.mining_spinner.call(null):null),false);
}
})()],null))));
});})(map__422347,map__422347__$1,description,id,unsaved,upvotes,downvotes,user,map__422348,map__422348__$1,can_vote_proposal,stake,temporary,has_stake,map__422349,map__422349__$1,height,dialog,map__422350,map__422350__$1,direction,hide_dialog,_STAR_reconciler_STAR_422342,_STAR_depth_STAR_422343,_STAR_shared_STAR_422344,_STAR_instrument_STAR_422345,_STAR_parent_STAR_422346,this$,this__40461__auto__,x422337_422357))
)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_422346;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_422345;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_422344;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_422343;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_422342;
}});})(x422337_422357))
;


ui.core.Proposal.prototype.constructor = ui.core.Proposal;

ui.core.Proposal.prototype.constructor.displayName = "ui.core/Proposal";

ui.core.Proposal.prototype.om$isComponent = true;

var x422355_422361 = ui.core.Proposal;
/** @nocollapse */
x422355_422361.om$next$IQuery$ = true;

/** @nocollapse */
x422355_422361.om$next$IQuery$query$arity$1 = ((function (x422355_422361){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x422355_422361))
;


var x422356_422362 = ui.core.Proposal.prototype;

x422356_422362.om$next$IQuery$ = true;


x422356_422362.om$next$IQuery$query$arity$1 = ((function (x422356_422362){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x422356_422362))
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

var x422367_422381 = ui.core.Proposals.prototype;
x422367_422381.componentWillUpdate = ((function (x422367_422381){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___422382 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___422383 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___422382,next_ident__40467__auto___422383)){
var idxr__40468__auto___422384 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___422384 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___422384),((function (idxr__40468__auto___422384,ident__40466__auto___422382,next_ident__40467__auto___422383,this__40462__auto__,x422367_422381){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___422382], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___422383], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___422384,ident__40466__auto___422382,next_ident__40467__auto___422383,this__40462__auto__,x422367_422381))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x422367_422381))
;

x422367_422381.shouldComponentUpdate = ((function (x422367_422381){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__422369 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__422369);
} else {
return G__422369;
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
});})(x422367_422381))
;

x422367_422381.componentWillUnmount = ((function (x422367_422381){
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
});})(x422367_422381))
;

x422367_422381.componentDidUpdate = ((function (x422367_422381){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x422367_422381))
;

x422367_422381.isMounted = ((function (x422367_422381){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x422367_422381))
;

x422367_422381.componentWillMount = ((function (x422367_422381){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x422367_422381))
;

x422367_422381.render = ((function (x422367_422381){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_422370 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_422371 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_422372 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_422373 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_422374 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{return om_tools.dom.element.call(null,React.DOM.div,(function (){var iter__35244__auto__ = ((function (_STAR_reconciler_STAR_422370,_STAR_depth_STAR_422371,_STAR_shared_STAR_422372,_STAR_instrument_STAR_422373,_STAR_parent_STAR_422374,this$,this__40461__auto__,x422367_422381){
return (function ui$core$iter__422375(s__422376){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_422370,_STAR_depth_STAR_422371,_STAR_shared_STAR_422372,_STAR_instrument_STAR_422373,_STAR_parent_STAR_422374,this$,this__40461__auto__,x422367_422381){
return (function (){
var s__422376__$1 = s__422376;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__422376__$1);
if(temp__6728__auto__){
var s__422376__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__422376__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__422376__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__422378 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__422377 = (0);
while(true){
if((i__422377 < size__35243__auto__)){
var proposal = cljs.core._nth.call(null,c__35242__auto__,i__422377);
cljs.core.chunk_append.call(null,b__422378,ui.core.proposal_component.call(null,proposal));

var G__422385 = (i__422377 + (1));
i__422377 = G__422385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422378),ui$core$iter__422375.call(null,cljs.core.chunk_rest.call(null,s__422376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422378),null);
}
} else {
var proposal = cljs.core.first.call(null,s__422376__$2);
return cljs.core.cons.call(null,ui.core.proposal_component.call(null,proposal),ui$core$iter__422375.call(null,cljs.core.rest.call(null,s__422376__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_422370,_STAR_depth_STAR_422371,_STAR_shared_STAR_422372,_STAR_instrument_STAR_422373,_STAR_parent_STAR_422374,this$,this__40461__auto__,x422367_422381))
,null,null));
});})(_STAR_reconciler_STAR_422370,_STAR_depth_STAR_422371,_STAR_shared_STAR_422372,_STAR_instrument_STAR_422373,_STAR_parent_STAR_422374,this$,this__40461__auto__,x422367_422381))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})(),cljs.core.PersistentVector.EMPTY);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_422374;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_422373;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_422372;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_422371;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_422370;
}});})(x422367_422381))
;


ui.core.Proposals.prototype.constructor = ui.core.Proposals;

ui.core.Proposals.prototype.constructor.displayName = "ui.core/Proposals";

ui.core.Proposals.prototype.om$isComponent = true;

var x422379_422386 = ui.core.Proposals;
/** @nocollapse */
x422379_422386.om$next$IQuery$ = true;

/** @nocollapse */
x422379_422386.om$next$IQuery$query$arity$1 = ((function (x422379_422386){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x422379_422386))
;


var x422380_422387 = ui.core.Proposals.prototype;

x422380_422387.om$next$IQuery$ = true;


x422380_422387.om$next$IQuery$query$arity$1 = ((function (x422380_422387){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x422380_422387))
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

var x422392_422404 = ui.core.Stake.prototype;
x422392_422404.componentWillUpdate = ((function (x422392_422404){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___422405 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___422406 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___422405,next_ident__40467__auto___422406)){
var idxr__40468__auto___422407 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___422407 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___422407),((function (idxr__40468__auto___422407,ident__40466__auto___422405,next_ident__40467__auto___422406,this__40462__auto__,x422392_422404){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___422405], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___422406], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___422407,ident__40466__auto___422405,next_ident__40467__auto___422406,this__40462__auto__,x422392_422404))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x422392_422404))
;

x422392_422404.shouldComponentUpdate = ((function (x422392_422404){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__422394 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__422394);
} else {
return G__422394;
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
});})(x422392_422404))
;

x422392_422404.componentWillUnmount = ((function (x422392_422404){
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
});})(x422392_422404))
;

x422392_422404.componentDidUpdate = ((function (x422392_422404){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x422392_422404))
;

x422392_422404.isMounted = ((function (x422392_422404){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x422392_422404))
;

x422392_422404.componentWillMount = ((function (x422392_422404){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x422392_422404))
;

x422392_422404.render = ((function (x422392_422404){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_422395 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_422396 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_422397 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_422398 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_422399 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__422400 = om.next.props.call(null,this$);
var map__422400__$1 = ((((!((map__422400 == null)))?((((map__422400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422400):map__422400);
var id = cljs.core.get.call(null,map__422400__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var value = cljs.core.get.call(null,map__422400__$1,new cljs.core.Keyword("stake","value","stake/value",466231031));
return om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,id,cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,value,cljs.core.PersistentVector.EMPTY)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_422399;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_422398;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_422397;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_422396;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_422395;
}});})(x422392_422404))
;


ui.core.Stake.prototype.constructor = ui.core.Stake;

ui.core.Stake.prototype.constructor.displayName = "ui.core/Stake";

ui.core.Stake.prototype.om$isComponent = true;

var x422402_422408 = ui.core.Stake;
/** @nocollapse */
x422402_422408.om$next$IQuery$ = true;

/** @nocollapse */
x422402_422408.om$next$IQuery$query$arity$1 = ((function (x422402_422408){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x422402_422408))
;


var x422403_422409 = ui.core.Stake.prototype;

x422403_422409.om$next$IQuery$ = true;


x422403_422409.om$next$IQuery$query$arity$1 = ((function (x422403_422409){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x422403_422409))
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

var x422414_422434 = ui.core.Stakes.prototype;
x422414_422434.componentWillUpdate = ((function (x422414_422434){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___422435 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___422436 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___422435,next_ident__40467__auto___422436)){
var idxr__40468__auto___422437 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___422437 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___422437),((function (idxr__40468__auto___422437,ident__40466__auto___422435,next_ident__40467__auto___422436,this__40462__auto__,x422414_422434){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___422435], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___422436], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___422437,ident__40466__auto___422435,next_ident__40467__auto___422436,this__40462__auto__,x422414_422434))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x422414_422434))
;

x422414_422434.shouldComponentUpdate = ((function (x422414_422434){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__422416 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__422416);
} else {
return G__422416;
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
});})(x422414_422434))
;

x422414_422434.componentWillUnmount = ((function (x422414_422434){
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
});})(x422414_422434))
;

x422414_422434.componentDidUpdate = ((function (x422414_422434){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x422414_422434))
;

x422414_422434.isMounted = ((function (x422414_422434){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x422414_422434))
;

x422414_422434.componentWillMount = ((function (x422414_422434){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x422414_422434))
;

x422414_422434.initLocalState = ((function (x422414_422434){
return (function (){
var this$ = this;
var ret__40440__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var obj422418 = {"omcljs$state":ret__40440__auto__};
return obj422418;
});})(x422414_422434))
;

x422414_422434.render = ((function (x422414_422434){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_422419 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_422420 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_422421 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_422422 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_422423 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__422424 = om.next.props.call(null,this$);
var map__422424__$1 = ((((!((map__422424 == null)))?((((map__422424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422424):map__422424);
var stakes = cljs.core.get.call(null,map__422424__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__422424__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__422425 = user;
var map__422425__$1 = ((((!((map__422425 == null)))?((((map__422425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422425):map__422425);
var stake = cljs.core.get.call(null,map__422425__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var address = cljs.core.get.call(null,map__422425__$1,new cljs.core.Keyword("user","address","user/address",573600859));
var balance = cljs.core.get.call(null,map__422425__$1,new cljs.core.Keyword("user","balance","user/balance",422509480));
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.8})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Current Stake"),((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?ui.core.mining_spinner.call(null):cljs.core.apply.call(null,React.DOM.h3,({"style": ({"color": "#2b95d6"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[stake," ETH"],null))))),cljs.core.apply.call(null,React.DOM.span,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["(associated with account ",ui.core.format_address.call(null,address),")"],null)))),(((stake === (0)))?React.DOM.div(({"className": "pt-callout pt-icon-info-sign", "style": ({"marginTop": "0.5rem"})}),"You do not currently have any voting stake for EthereanMind. To be able to vote on proposals and top 10 items, you need to deposit some fully-refundable coins into the EthereanMind staking contract."):null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group", "style": ({"marginTop": "0.5rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__422424,map__422424__$1,stakes,user,map__422425,map__422425__$1,stake,address,balance,_STAR_reconciler_STAR_422419,_STAR_depth_STAR_422420,_STAR_shared_STAR_422421,_STAR_instrument_STAR_422422,_STAR_parent_STAR_422423,this$,this__40461__auto__,x422414_422434){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"value","value",305978217),""], null));
});})(map__422424,map__422424__$1,stakes,user,map__422425,map__422425__$1,stake,address,balance,_STAR_reconciler_STAR_422419,_STAR_depth_STAR_422420,_STAR_shared_STAR_422421,_STAR_instrument_STAR_422422,_STAR_parent_STAR_422423,this$,this__40461__auto__,x422414_422434))
], null),"Deposit Stake"),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__422424,map__422424__$1,stakes,user,map__422425,map__422425__$1,stake,address,balance,_STAR_reconciler_STAR_422419,_STAR_depth_STAR_422420,_STAR_shared_STAR_422421,_STAR_instrument_STAR_422422,_STAR_parent_STAR_422423,this$,this__40461__auto__,x422414_422434){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"withdraw","withdraw",1469652053)], null));
});})(map__422424,map__422424__$1,stakes,user,map__422425,map__422425__$1,stake,address,balance,_STAR_reconciler_STAR_422419,_STAR_depth_STAR_422420,_STAR_shared_STAR_422421,_STAR_instrument_STAR_422422,_STAR_parent_STAR_422423,this$,this__40461__auto__,x422414_422434))
], null),"Withdraw Stake")],null))))],null)))),(function (){var map__422428 = om.next.get_state.call(null,this$);
var map__422428__$1 = ((((!((map__422428 == null)))?((((map__422428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422428):map__422428);
var dialog = cljs.core.get.call(null,map__422428__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__422429 = dialog;
var map__422429__$1 = ((((!((map__422429 == null)))?((((map__422429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422429):map__422429);
var type = cljs.core.get.call(null,map__422429__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__422429__$1,new cljs.core.Keyword(null,"value","value",305978217));
var value_status = ((cljs.core._EQ_.call(null,value,""))?new cljs.core.Keyword(null,"missing","missing",362507769):(((value <= balance))?new cljs.core.Keyword(null,"good","good",511701169):new cljs.core.Keyword(null,"bad","bad",1127186645)
));
var close_dialog = ((function (value_status,map__422428,map__422428__$1,dialog,map__422429,map__422429__$1,type,value,map__422424,map__422424__$1,stakes,user,map__422425,map__422425__$1,stake,address,balance,_STAR_reconciler_STAR_422419,_STAR_depth_STAR_422420,_STAR_shared_STAR_422421,_STAR_instrument_STAR_422422,_STAR_parent_STAR_422423,this$,this__40461__auto__,x422414_422434){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,map__422428,map__422428__$1,dialog,map__422429,map__422429__$1,type,value,map__422424,map__422424__$1,stakes,user,map__422425,map__422425__$1,stake,address,balance,_STAR_reconciler_STAR_422419,_STAR_depth_STAR_422420,_STAR_shared_STAR_422421,_STAR_instrument_STAR_422422,_STAR_parent_STAR_422423,this$,this__40461__auto__,x422414_422434))
;
return blueprint_cljs.core.dialog.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-close","on-close",-761178394),close_dialog,new cljs.core.Keyword(null,"title","title",636505583),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit Stake":"Withdraw Stake")], null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-body"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,"In order to vote on ethereanmind you need to place a refundable deposit of ether. You will be able to start voting immediately after depositing ether, but you need to wait a month before you can withdraw your deposit again."),om_tools.dom.element.call(null,React.DOM.p,React.DOM.b(null,"The rules of the smart contract assure that no one else can withdraw your money and that you will receive back 100% of your deposit."),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Balance available: ",balance," Ether"],null)))),blueprint_cljs.core.input_group.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Deposit Amount (Ether)",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"right-element","right-element",-375920256),((cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"missing","missing",362507769)))?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)))?"pt-icon-tick pt-intent-success":"pt-icon-cross pt-intent-danger")], null)):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value_status,close_dialog,map__422428,map__422428__$1,dialog,map__422429,map__422429__$1,type,value,map__422424,map__422424__$1,stakes,user,map__422425,map__422425__$1,stake,address,balance,_STAR_reconciler_STAR_422419,_STAR_depth_STAR_422420,_STAR_shared_STAR_422421,_STAR_instrument_STAR_422422,_STAR_parent_STAR_422423,this$,this__40461__auto__,x422414_422434){
return (function (e){
var value_new = e.target.value;
if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]*\.?[0-9]*/,value_new))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value_new);
} else {
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value);
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noise","noise",-994696820)], null),cljs.core.rand_int.call(null,(1000000)));
});})(value_status,close_dialog,map__422428,map__422428__$1,dialog,map__422429,map__422429__$1,type,value,map__422424,map__422424__$1,stakes,user,map__422425,map__422425__$1,stake,address,balance,_STAR_reconciler_STAR_422419,_STAR_depth_STAR_422420,_STAR_shared_STAR_422421,_STAR_instrument_STAR_422422,_STAR_parent_STAR_422423,this$,this__40461__auto__,x422414_422434))
], null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can now withdraw all of your stake (Currently ",stake," Ether) back into your regular ethereum account at [",ui.core.format_address.call(null,address),"]. At that point, you will no longer be able to participate in voting- You'll need to deposit new funds to vote again."],null))))], null))],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer-actions"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)),new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_status,close_dialog,map__422428,map__422428__$1,dialog,map__422429,map__422429__$1,type,value,map__422424,map__422424__$1,stakes,user,map__422425,map__422425__$1,stake,address,balance,_STAR_reconciler_STAR_422419,_STAR_depth_STAR_422420,_STAR_shared_STAR_422421,_STAR_instrument_STAR_422422,_STAR_parent_STAR_422423,this$,this__40461__auto__,x422414_422434){
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
});})(value_status,close_dialog,map__422428,map__422428__$1,dialog,map__422429,map__422429__$1,type,value,map__422424,map__422424__$1,stakes,user,map__422425,map__422425__$1,stake,address,balance,_STAR_reconciler_STAR_422419,_STAR_depth_STAR_422420,_STAR_shared_STAR_422421,_STAR_instrument_STAR_422422,_STAR_parent_STAR_422423,this$,this__40461__auto__,x422414_422434))
], null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit":"Withdraw")),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_dialog], null),"Cancel")],null))))],null)))));
})(),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"marginTop": "1rem", "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Staking Statistics"),React.DOM.div(null,"If you're curious about who else is using this dapp, and are using an ethereum data source that can handle large queres, click this button:"),cljs.core.apply.call(null,React.DOM.p,({"style": ({"margin": "1em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.i(null,"(Coming Soon...)")],null))))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_422423;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_422422;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_422421;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_422420;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_422419;
}});})(x422414_422434))
;


ui.core.Stakes.prototype.constructor = ui.core.Stakes;

ui.core.Stakes.prototype.constructor.displayName = "ui.core/Stakes";

ui.core.Stakes.prototype.om$isComponent = true;

var x422432_422438 = ui.core.Stakes;
/** @nocollapse */
x422432_422438.om$next$IQuery$ = true;

/** @nocollapse */
x422432_422438.om$next$IQuery$query$arity$1 = ((function (x422432_422438){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x422432_422438))
;


var x422433_422439 = ui.core.Stakes.prototype;

x422433_422439.om$next$IQuery$ = true;


x422433_422439.om$next$IQuery$query$arity$1 = ((function (x422433_422439){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x422433_422439))
;


ui.core.Stakes.cljs$lang$type = true;

ui.core.Stakes.cljs$lang$ctorStr = "ui.core/Stakes";

ui.core.Stakes.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Stakes");
});
ui.core.stakes_component = om.next.factory.call(null,ui.core.Stakes);
ui.core.canvas_resolution = (800);
ui.core.brain_prerender = (function ui$core$brain_prerender(sections){
return new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__422454,item){
var map__422455 = p__422454;
var map__422455__$1 = ((((!((map__422455 == null)))?((((map__422455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422455):map__422455);
var acc = map__422455__$1;
var vertices = cljs.core.get.call(null,map__422455__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var vertex_colors = cljs.core.get.call(null,map__422455__$1,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377));
var index = cljs.core.get.call(null,map__422455__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.call(null,map__422455__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var map__422457 = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"length","length",588987862),(function (){var iter__35244__auto__ = ((function (map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__422458(s__422459){
return (new cljs.core.LazySeq(null,((function (map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__422459__$1 = s__422459;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__422459__$1);
if(temp__6728__auto__){
var s__422459__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__422459__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__422459__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__422461 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__422460 = (0);
while(true){
if((i__422460 < size__35243__auto__)){
var coord = cljs.core._nth.call(null,c__35242__auto__,i__422460);
cljs.core.chunk_append.call(null,b__422461,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (i__422460,region_size,coord,c__35242__auto__,size__35243__auto__,b__422461,s__422459__$2,temp__6728__auto__,map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__422440_SHARP_){
return cljs.core.nth.call(null,p1__422440_SHARP_,coord);
});})(i__422460,region_size,coord,c__35242__auto__,size__35243__auto__,b__422461,s__422459__$2,temp__6728__auto__,map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})());

var G__422467 = (i__422460 + (1));
i__422460 = G__422467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422461),ui$core$brain_prerender_$_iter__422458.call(null,cljs.core.chunk_rest.call(null,s__422459__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422461),null);
}
} else {
var coord = cljs.core.first.call(null,s__422459__$2);
return cljs.core.cons.call(null,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (region_size,coord,s__422459__$2,temp__6728__auto__,map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__422440_SHARP_){
return cljs.core.nth.call(null,p1__422440_SHARP_,coord);
});})(region_size,coord,s__422459__$2,temp__6728__auto__,map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})(),ui$core$brain_prerender_$_iter__422458.call(null,cljs.core.rest.call(null,s__422459__$2)));
}
} else {
return null;
}
break;
}
});})(map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})()));
var map__422457__$1 = ((((!((map__422457 == null)))?((((map__422457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422457):map__422457);
var cur_vertices = cljs.core.get.call(null,map__422457__$1,new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716));
var rest_vertices = cljs.core.get.call(null,map__422457__$1,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),rest_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.into.call(null,vertex_colors,(function (){var iter__35244__auto__ = ((function (map__422457,map__422457__$1,cur_vertices,rest_vertices,map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__422463(s__422464){
return (new cljs.core.LazySeq(null,((function (map__422457,map__422457__$1,cur_vertices,rest_vertices,map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__422464__$1 = s__422464;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__422464__$1);
if(temp__6728__auto__){
var s__422464__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__422464__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__422464__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__422466 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__422465 = (0);
while(true){
if((i__422465 < size__35243__auto__)){
var vertex = cljs.core._nth.call(null,c__35242__auto__,i__422465);
cljs.core.chunk_append.call(null,b__422466,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null));

var G__422468 = (i__422465 + (1));
i__422465 = G__422468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422466),ui$core$brain_prerender_$_iter__422463.call(null,cljs.core.chunk_rest.call(null,s__422464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422466),null);
}
} else {
var vertex = cljs.core.first.call(null,s__422464__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null),ui$core$brain_prerender_$_iter__422463.call(null,cljs.core.rest.call(null,s__422464__$2)));
}
} else {
return null;
}
break;
}
});})(map__422457,map__422457__$1,cur_vertices,rest_vertices,map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__422457,map__422457__$1,cur_vertices,rest_vertices,map__422455,map__422455__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35244__auto__.call(null,cur_vertices);
})()),new cljs.core.Keyword(null,"index","index",-1531685915),(index + (1)),new cljs.core.Keyword(null,"total","total",1916810418),(total - new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))], null);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),ui.core.brain_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"size","size",1098693007),sections))], null),sections));
});
ui.core.render_graph = (function ui$core$render_graph(brain_faces,vertexes,vertex_colors){
var iter__35244__auto__ = (function ui$core$render_graph_$_iter__422501(s__422502){
return (new cljs.core.LazySeq(null,(function (){
var s__422502__$1 = s__422502;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__422502__$1);
if(temp__6728__auto__){
var s__422502__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__422502__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__422502__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__422504 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__422503 = (0);
while(true){
if((i__422503 < size__35243__auto__)){
var vec__422519 = cljs.core._nth.call(null,c__35242__auto__,i__422503);
var region = cljs.core.nth.call(null,vec__422519,(0),null);
var faces = cljs.core.nth.call(null,vec__422519,(1),null);
cljs.core.chunk_append.call(null,b__422504,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (i__422503,vec__422519,region,faces,c__35242__auto__,size__35243__auto__,b__422504,s__422502__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__422501_$_iter__422522(s__422523){
return (new cljs.core.LazySeq(null,((function (i__422503,vec__422519,region,faces,c__35242__auto__,size__35243__auto__,b__422504,s__422502__$2,temp__6728__auto__){
return (function (){
var s__422523__$1 = s__422523;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__422523__$1);
if(temp__6728__auto____$1){
var s__422523__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__422523__$2)){
var c__35242__auto____$1 = cljs.core.chunk_first.call(null,s__422523__$2);
var size__35243__auto____$1 = cljs.core.count.call(null,c__35242__auto____$1);
var b__422525 = cljs.core.chunk_buffer.call(null,size__35243__auto____$1);
if((function (){var i__422524 = (0);
while(true){
if((i__422524 < size__35243__auto____$1)){
var n = cljs.core._nth.call(null,c__35242__auto____$1,i__422524);
cljs.core.chunk_append.call(null,b__422525,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__422524,i__422503,n,c__35242__auto____$1,size__35243__auto____$1,b__422525,s__422523__$2,temp__6728__auto____$1,vec__422519,region,faces,c__35242__auto__,size__35243__auto__,b__422504,s__422502__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__422524,i__422503,n,c__35242__auto____$1,size__35243__auto____$1,b__422525,s__422523__$2,temp__6728__auto____$1,vec__422519,region,faces,c__35242__auto__,size__35243__auto__,b__422504,s__422502__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__422533 = (i__422524 + (1));
i__422524 = G__422533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422525),ui$core$render_graph_$_iter__422501_$_iter__422522.call(null,cljs.core.chunk_rest.call(null,s__422523__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422525),null);
}
} else {
var n = cljs.core.first.call(null,s__422523__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__422503,n,s__422523__$2,temp__6728__auto____$1,vec__422519,region,faces,c__35242__auto__,size__35243__auto__,b__422504,s__422502__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__422503,n,s__422523__$2,temp__6728__auto____$1,vec__422519,region,faces,c__35242__auto__,size__35243__auto__,b__422504,s__422502__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__422501_$_iter__422522.call(null,cljs.core.rest.call(null,s__422523__$2)));
}
} else {
return null;
}
break;
}
});})(i__422503,vec__422519,region,faces,c__35242__auto__,size__35243__auto__,b__422504,s__422502__$2,temp__6728__auto__))
,null,null));
});})(i__422503,vec__422519,region,faces,c__35242__auto__,size__35243__auto__,b__422504,s__422502__$2,temp__6728__auto__))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (i__422503,dist,max_dist,mult,centroid,vec__422519,region,faces,c__35242__auto__,size__35243__auto__,b__422504,s__422502__$2,temp__6728__auto__){
return (function (y){
var x__34723__auto__ = (function (){var x__34730__auto__ = 0.11;
var y__34731__auto__ = (y * 0.9);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})();
var y__34724__auto__ = -0.05;
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
});})(i__422503,dist,max_dist,mult,centroid,vec__422519,region,faces,c__35242__auto__,size__35243__auto__,b__422504,s__422502__$2,temp__6728__auto__))
);
})()], null);
})());

var G__422534 = (i__422503 + (1));
i__422503 = G__422534;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422504),ui$core$render_graph_$_iter__422501.call(null,cljs.core.chunk_rest.call(null,s__422502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422504),null);
}
} else {
var vec__422526 = cljs.core.first.call(null,s__422502__$2);
var region = cljs.core.nth.call(null,vec__422526,(0),null);
var faces = cljs.core.nth.call(null,vec__422526,(1),null);
return cljs.core.cons.call(null,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (vec__422526,region,faces,s__422502__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__422501_$_iter__422529(s__422530){
return (new cljs.core.LazySeq(null,((function (vec__422526,region,faces,s__422502__$2,temp__6728__auto__){
return (function (){
var s__422530__$1 = s__422530;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__422530__$1);
if(temp__6728__auto____$1){
var s__422530__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__422530__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__422530__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__422532 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__422531 = (0);
while(true){
if((i__422531 < size__35243__auto__)){
var n = cljs.core._nth.call(null,c__35242__auto__,i__422531);
cljs.core.chunk_append.call(null,b__422532,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__422531,n,c__35242__auto__,size__35243__auto__,b__422532,s__422530__$2,temp__6728__auto____$1,vec__422526,region,faces,s__422502__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__422531,n,c__35242__auto__,size__35243__auto__,b__422532,s__422530__$2,temp__6728__auto____$1,vec__422526,region,faces,s__422502__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__422535 = (i__422531 + (1));
i__422531 = G__422535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422532),ui$core$render_graph_$_iter__422501_$_iter__422529.call(null,cljs.core.chunk_rest.call(null,s__422530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422532),null);
}
} else {
var n = cljs.core.first.call(null,s__422530__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (n,s__422530__$2,temp__6728__auto____$1,vec__422526,region,faces,s__422502__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(n,s__422530__$2,temp__6728__auto____$1,vec__422526,region,faces,s__422502__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__422501_$_iter__422529.call(null,cljs.core.rest.call(null,s__422530__$2)));
}
} else {
return null;
}
break;
}
});})(vec__422526,region,faces,s__422502__$2,temp__6728__auto__))
,null,null));
});})(vec__422526,region,faces,s__422502__$2,temp__6728__auto__))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (dist,max_dist,mult,centroid,vec__422526,region,faces,s__422502__$2,temp__6728__auto__){
return (function (y){
var x__34723__auto__ = (function (){var x__34730__auto__ = 0.11;
var y__34731__auto__ = (y * 0.9);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})();
var y__34724__auto__ = -0.05;
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
});})(dist,max_dist,mult,centroid,vec__422526,region,faces,s__422502__$2,temp__6728__auto__))
);
})()], null);
})(),ui$core$render_graph_$_iter__422501.call(null,cljs.core.rest.call(null,s__422502__$2)));
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
ui.core.point__GT_screen = (function ui$core$point__GT_screen(canvas_resolution,rotation,p__422536){
var vec__422540 = p__422536;
var xx = cljs.core.nth.call(null,vec__422540,(0),null);
var yy = cljs.core.nth.call(null,vec__422540,(1),null);
var zz = cljs.core.nth.call(null,vec__422540,(2),null);
var vertex = vec__422540;
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
var G__422637 = ctx;
G__422637.beginPath();

G__422637.moveTo(vertices.call(null,a).call(null,(0)),vertices.call(null,a).call(null,(1)));

G__422637.lineTo(vertices.call(null,b).call(null,(0)),vertices.call(null,b).call(null,(1)));

G__422637.stroke();

return G__422637;
});})(starting_time,vertices))
;
var rgb = ((function (starting_time,vertices,line){
return (function (color,brightness,opaque){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (starting_time,vertices,line){
return (function ui$core$render_brain_$_iter__422638(s__422639){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line){
return (function (){
var s__422639__$1 = s__422639;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__422639__$1);
if(temp__6728__auto__){
var s__422639__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__422639__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__422639__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__422641 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__422640 = (0);
while(true){
if((i__422640 < size__35243__auto__)){
var c = cljs.core._nth.call(null,c__35242__auto__,i__422640);
cljs.core.chunk_append.call(null,b__422641,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34730__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34731__auto__ = (255);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})()) + (((1) - colored) * (255))) | (0));
})());

var G__422731 = (i__422640 + (1));
i__422640 = G__422731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422641),ui$core$render_brain_$_iter__422638.call(null,cljs.core.chunk_rest.call(null,s__422639__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422641),null);
}
} else {
var c = cljs.core.first.call(null,s__422639__$2);
return cljs.core.cons.call(null,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34730__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34731__auto__ = (255);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})()) + (((1) - colored) * (255))) | (0));
})(),ui$core$render_brain_$_iter__422638.call(null,cljs.core.rest.call(null,s__422639__$2)));
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
return (function (p__422642){
var map__422643 = p__422642;
var map__422643__$1 = ((((!((map__422643 == null)))?((((map__422643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422643):map__422643);
var label = cljs.core.get.call(null,map__422643__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var text = cljs.core.get.call(null,map__422643__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var color = cljs.core.get.call(null,map__422643__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var location = cljs.core.get.call(null,map__422643__$1,new cljs.core.Keyword(null,"location","location",1815599388));
if((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)) > (0))){
ctx.lineWidth = (4);

var vec__422645_422732 = location;
var x_422733 = cljs.core.nth.call(null,vec__422645_422732,(0),null);
var y_422734 = cljs.core.nth.call(null,vec__422645_422732,(1),null);
var z_422735 = cljs.core.nth.call(null,vec__422645_422732,(2),null);
ctx.strokeStyle = "#111A22";

ctx.fillStyle = rgb.call(null,color,((z_422735 * (2)) + (1)),true);

cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (vec__422645_422732,x_422733,y_422734,z_422735,map__422643,map__422643__$1,label,text,color,location,starting_time,vertices,line,rgb,set_color){
return (function (index,s){
var G__422648 = ctx;
G__422648.strokeText(s,x_422733,(y_422734 + (index * (15))));

G__422648.fillText(s,x_422733,(y_422734 + (index * (15))));

return G__422648;
});})(vec__422645_422732,x_422733,y_422734,z_422735,map__422643,map__422643__$1,label,text,color,location,starting_time,vertices,line,rgb,set_color))
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
,(function (){var iter__35244__auto__ = ((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function ui$core$render_brain_$_iter__422649(s__422650){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (){
var s__422650__$1 = s__422650;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__422650__$1);
if(temp__6728__auto__){
var s__422650__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__422650__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__422650__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__422652 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__422651 = (0);
while(true){
if((i__422651 < size__35243__auto__)){
var map__422657 = cljs.core._nth.call(null,c__35242__auto__,i__422651);
var map__422657__$1 = ((((!((map__422657 == null)))?((((map__422657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422657):map__422657);
var region = cljs.core.get.call(null,map__422657__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces = cljs.core.get.call(null,map__422657__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid = cljs.core.get.call(null,map__422657__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__422657__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append.call(null,b__422652,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null));

var G__422736 = (i__422651 + (1));
i__422651 = G__422736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422652),ui$core$render_brain_$_iter__422649.call(null,cljs.core.chunk_rest.call(null,s__422650__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422652),null);
}
} else {
var map__422659 = cljs.core.first.call(null,s__422650__$2);
var map__422659__$1 = ((((!((map__422659 == null)))?((((map__422659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422659):map__422659);
var region = cljs.core.get.call(null,map__422659__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces = cljs.core.get.call(null,map__422659__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid = cljs.core.get.call(null,map__422659__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__422659__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null),ui$core$render_brain_$_iter__422649.call(null,cljs.core.rest.call(null,s__422650__$2)));
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
return iter__35244__auto__.call(null,render_graph);
})()):null);
var render_labels = ((function (labels,starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (from,to){
var seq__422661 = cljs.core.seq.call(null,labels);
var chunk__422662 = null;
var count__422663 = (0);
var i__422664 = (0);
while(true){
if((i__422664 < count__422663)){
var label = cljs.core._nth.call(null,chunk__422662,i__422664);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__422737 = seq__422661;
var G__422738 = chunk__422662;
var G__422739 = count__422663;
var G__422740 = (i__422664 + (1));
seq__422661 = G__422737;
chunk__422662 = G__422738;
count__422663 = G__422739;
i__422664 = G__422740;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__422661);
if(temp__6728__auto__){
var seq__422661__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__422661__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__422661__$1);
var G__422741 = cljs.core.chunk_rest.call(null,seq__422661__$1);
var G__422742 = c__35293__auto__;
var G__422743 = cljs.core.count.call(null,c__35293__auto__);
var G__422744 = (0);
seq__422661 = G__422741;
chunk__422662 = G__422742;
count__422663 = G__422743;
i__422664 = G__422744;
continue;
} else {
var label = cljs.core.first.call(null,seq__422661__$1);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__422745 = cljs.core.next.call(null,seq__422661__$1);
var G__422746 = null;
var G__422747 = (0);
var G__422748 = (0);
seq__422661 = G__422745;
chunk__422662 = G__422746;
count__422663 = G__422747;
i__422664 = G__422748;
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
var seq__422665 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),-0.3,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3,0.3,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,(1000),(2)], null)], null));
var chunk__422666 = null;
var count__422667 = (0);
var i__422668 = (0);
while(true){
if((i__422668 < count__422667)){
var vec__422669 = cljs.core._nth.call(null,chunk__422666,i__422668);
var begin = cljs.core.nth.call(null,vec__422669,(0),null);
var end = cljs.core.nth.call(null,vec__422669,(1),null);
var brightness = cljs.core.nth.call(null,vec__422669,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__422672_422749 = cljs.core.seq.call(null,render_graph);
var chunk__422673_422750 = null;
var count__422674_422751 = (0);
var i__422675_422752 = (0);
while(true){
if((i__422675_422752 < count__422674_422751)){
var map__422676_422753 = cljs.core._nth.call(null,chunk__422673_422750,i__422675_422752);
var map__422676_422754__$1 = ((((!((map__422676_422753 == null)))?((((map__422676_422753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422676_422753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422676_422753):map__422676_422753);
var region_422755 = cljs.core.get.call(null,map__422676_422754__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_422756 = cljs.core.get.call(null,map__422676_422754__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_422757 = cljs.core.get.call(null,map__422676_422754__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_422758 = cljs.core.get.call(null,map__422676_422754__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_422759 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_422755))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_422759,brightness);

var seq__422678_422760 = cljs.core.seq.call(null,faces_422756);
var chunk__422679_422761 = null;
var count__422680_422762 = (0);
var i__422681_422763 = (0);
while(true){
if((i__422681_422763 < count__422680_422762)){
var vec__422682_422764 = cljs.core._nth.call(null,chunk__422679_422761,i__422681_422763);
var a_422765 = cljs.core.nth.call(null,vec__422682_422764,(0),null);
var b_422766 = cljs.core.nth.call(null,vec__422682_422764,(1),null);
var c_422767 = cljs.core.nth.call(null,vec__422682_422764,(2),null);
var face_422768 = vec__422682_422764;
if(((begin < vertices.call(null,a_422765).call(null,(2)))) && ((vertices.call(null,a_422765).call(null,(2)) < end))){
line.call(null,a_422765,b_422766);
} else {
}

var G__422769 = seq__422678_422760;
var G__422770 = chunk__422679_422761;
var G__422771 = count__422680_422762;
var G__422772 = (i__422681_422763 + (1));
seq__422678_422760 = G__422769;
chunk__422679_422761 = G__422770;
count__422680_422762 = G__422771;
i__422681_422763 = G__422772;
continue;
} else {
var temp__6728__auto___422773 = cljs.core.seq.call(null,seq__422678_422760);
if(temp__6728__auto___422773){
var seq__422678_422774__$1 = temp__6728__auto___422773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__422678_422774__$1)){
var c__35293__auto___422775 = cljs.core.chunk_first.call(null,seq__422678_422774__$1);
var G__422776 = cljs.core.chunk_rest.call(null,seq__422678_422774__$1);
var G__422777 = c__35293__auto___422775;
var G__422778 = cljs.core.count.call(null,c__35293__auto___422775);
var G__422779 = (0);
seq__422678_422760 = G__422776;
chunk__422679_422761 = G__422777;
count__422680_422762 = G__422778;
i__422681_422763 = G__422779;
continue;
} else {
var vec__422685_422780 = cljs.core.first.call(null,seq__422678_422774__$1);
var a_422781 = cljs.core.nth.call(null,vec__422685_422780,(0),null);
var b_422782 = cljs.core.nth.call(null,vec__422685_422780,(1),null);
var c_422783 = cljs.core.nth.call(null,vec__422685_422780,(2),null);
var face_422784 = vec__422685_422780;
if(((begin < vertices.call(null,a_422781).call(null,(2)))) && ((vertices.call(null,a_422781).call(null,(2)) < end))){
line.call(null,a_422781,b_422782);
} else {
}

var G__422785 = cljs.core.next.call(null,seq__422678_422774__$1);
var G__422786 = null;
var G__422787 = (0);
var G__422788 = (0);
seq__422678_422760 = G__422785;
chunk__422679_422761 = G__422786;
count__422680_422762 = G__422787;
i__422681_422763 = G__422788;
continue;
}
} else {
}
}
break;
}

var G__422789 = seq__422672_422749;
var G__422790 = chunk__422673_422750;
var G__422791 = count__422674_422751;
var G__422792 = (i__422675_422752 + (1));
seq__422672_422749 = G__422789;
chunk__422673_422750 = G__422790;
count__422674_422751 = G__422791;
i__422675_422752 = G__422792;
continue;
} else {
var temp__6728__auto___422793 = cljs.core.seq.call(null,seq__422672_422749);
if(temp__6728__auto___422793){
var seq__422672_422794__$1 = temp__6728__auto___422793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__422672_422794__$1)){
var c__35293__auto___422795 = cljs.core.chunk_first.call(null,seq__422672_422794__$1);
var G__422796 = cljs.core.chunk_rest.call(null,seq__422672_422794__$1);
var G__422797 = c__35293__auto___422795;
var G__422798 = cljs.core.count.call(null,c__35293__auto___422795);
var G__422799 = (0);
seq__422672_422749 = G__422796;
chunk__422673_422750 = G__422797;
count__422674_422751 = G__422798;
i__422675_422752 = G__422799;
continue;
} else {
var map__422688_422800 = cljs.core.first.call(null,seq__422672_422794__$1);
var map__422688_422801__$1 = ((((!((map__422688_422800 == null)))?((((map__422688_422800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422688_422800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422688_422800):map__422688_422800);
var region_422802 = cljs.core.get.call(null,map__422688_422801__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_422803 = cljs.core.get.call(null,map__422688_422801__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_422804 = cljs.core.get.call(null,map__422688_422801__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_422805 = cljs.core.get.call(null,map__422688_422801__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_422806 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_422802))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_422806,brightness);

var seq__422690_422807 = cljs.core.seq.call(null,faces_422803);
var chunk__422691_422808 = null;
var count__422692_422809 = (0);
var i__422693_422810 = (0);
while(true){
if((i__422693_422810 < count__422692_422809)){
var vec__422694_422811 = cljs.core._nth.call(null,chunk__422691_422808,i__422693_422810);
var a_422812 = cljs.core.nth.call(null,vec__422694_422811,(0),null);
var b_422813 = cljs.core.nth.call(null,vec__422694_422811,(1),null);
var c_422814 = cljs.core.nth.call(null,vec__422694_422811,(2),null);
var face_422815 = vec__422694_422811;
if(((begin < vertices.call(null,a_422812).call(null,(2)))) && ((vertices.call(null,a_422812).call(null,(2)) < end))){
line.call(null,a_422812,b_422813);
} else {
}

var G__422816 = seq__422690_422807;
var G__422817 = chunk__422691_422808;
var G__422818 = count__422692_422809;
var G__422819 = (i__422693_422810 + (1));
seq__422690_422807 = G__422816;
chunk__422691_422808 = G__422817;
count__422692_422809 = G__422818;
i__422693_422810 = G__422819;
continue;
} else {
var temp__6728__auto___422820__$1 = cljs.core.seq.call(null,seq__422690_422807);
if(temp__6728__auto___422820__$1){
var seq__422690_422821__$1 = temp__6728__auto___422820__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__422690_422821__$1)){
var c__35293__auto___422822 = cljs.core.chunk_first.call(null,seq__422690_422821__$1);
var G__422823 = cljs.core.chunk_rest.call(null,seq__422690_422821__$1);
var G__422824 = c__35293__auto___422822;
var G__422825 = cljs.core.count.call(null,c__35293__auto___422822);
var G__422826 = (0);
seq__422690_422807 = G__422823;
chunk__422691_422808 = G__422824;
count__422692_422809 = G__422825;
i__422693_422810 = G__422826;
continue;
} else {
var vec__422697_422827 = cljs.core.first.call(null,seq__422690_422821__$1);
var a_422828 = cljs.core.nth.call(null,vec__422697_422827,(0),null);
var b_422829 = cljs.core.nth.call(null,vec__422697_422827,(1),null);
var c_422830 = cljs.core.nth.call(null,vec__422697_422827,(2),null);
var face_422831 = vec__422697_422827;
if(((begin < vertices.call(null,a_422828).call(null,(2)))) && ((vertices.call(null,a_422828).call(null,(2)) < end))){
line.call(null,a_422828,b_422829);
} else {
}

var G__422832 = cljs.core.next.call(null,seq__422690_422821__$1);
var G__422833 = null;
var G__422834 = (0);
var G__422835 = (0);
seq__422690_422807 = G__422832;
chunk__422691_422808 = G__422833;
count__422692_422809 = G__422834;
i__422693_422810 = G__422835;
continue;
}
} else {
}
}
break;
}

var G__422836 = cljs.core.next.call(null,seq__422672_422794__$1);
var G__422837 = null;
var G__422838 = (0);
var G__422839 = (0);
seq__422672_422749 = G__422836;
chunk__422673_422750 = G__422837;
count__422674_422751 = G__422838;
i__422675_422752 = G__422839;
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

var G__422840 = seq__422665;
var G__422841 = chunk__422666;
var G__422842 = count__422667;
var G__422843 = (i__422668 + (1));
seq__422665 = G__422840;
chunk__422666 = G__422841;
count__422667 = G__422842;
i__422668 = G__422843;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__422665);
if(temp__6728__auto__){
var seq__422665__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__422665__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__422665__$1);
var G__422844 = cljs.core.chunk_rest.call(null,seq__422665__$1);
var G__422845 = c__35293__auto__;
var G__422846 = cljs.core.count.call(null,c__35293__auto__);
var G__422847 = (0);
seq__422665 = G__422844;
chunk__422666 = G__422845;
count__422667 = G__422846;
i__422668 = G__422847;
continue;
} else {
var vec__422700 = cljs.core.first.call(null,seq__422665__$1);
var begin = cljs.core.nth.call(null,vec__422700,(0),null);
var end = cljs.core.nth.call(null,vec__422700,(1),null);
var brightness = cljs.core.nth.call(null,vec__422700,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__422703_422848 = cljs.core.seq.call(null,render_graph);
var chunk__422704_422849 = null;
var count__422705_422850 = (0);
var i__422706_422851 = (0);
while(true){
if((i__422706_422851 < count__422705_422850)){
var map__422707_422852 = cljs.core._nth.call(null,chunk__422704_422849,i__422706_422851);
var map__422707_422853__$1 = ((((!((map__422707_422852 == null)))?((((map__422707_422852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422707_422852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422707_422852):map__422707_422852);
var region_422854 = cljs.core.get.call(null,map__422707_422853__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_422855 = cljs.core.get.call(null,map__422707_422853__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_422856 = cljs.core.get.call(null,map__422707_422853__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_422857 = cljs.core.get.call(null,map__422707_422853__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_422858 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_422854))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_422858,brightness);

var seq__422709_422859 = cljs.core.seq.call(null,faces_422855);
var chunk__422710_422860 = null;
var count__422711_422861 = (0);
var i__422712_422862 = (0);
while(true){
if((i__422712_422862 < count__422711_422861)){
var vec__422713_422863 = cljs.core._nth.call(null,chunk__422710_422860,i__422712_422862);
var a_422864 = cljs.core.nth.call(null,vec__422713_422863,(0),null);
var b_422865 = cljs.core.nth.call(null,vec__422713_422863,(1),null);
var c_422866 = cljs.core.nth.call(null,vec__422713_422863,(2),null);
var face_422867 = vec__422713_422863;
if(((begin < vertices.call(null,a_422864).call(null,(2)))) && ((vertices.call(null,a_422864).call(null,(2)) < end))){
line.call(null,a_422864,b_422865);
} else {
}

var G__422868 = seq__422709_422859;
var G__422869 = chunk__422710_422860;
var G__422870 = count__422711_422861;
var G__422871 = (i__422712_422862 + (1));
seq__422709_422859 = G__422868;
chunk__422710_422860 = G__422869;
count__422711_422861 = G__422870;
i__422712_422862 = G__422871;
continue;
} else {
var temp__6728__auto___422872__$1 = cljs.core.seq.call(null,seq__422709_422859);
if(temp__6728__auto___422872__$1){
var seq__422709_422873__$1 = temp__6728__auto___422872__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__422709_422873__$1)){
var c__35293__auto___422874 = cljs.core.chunk_first.call(null,seq__422709_422873__$1);
var G__422875 = cljs.core.chunk_rest.call(null,seq__422709_422873__$1);
var G__422876 = c__35293__auto___422874;
var G__422877 = cljs.core.count.call(null,c__35293__auto___422874);
var G__422878 = (0);
seq__422709_422859 = G__422875;
chunk__422710_422860 = G__422876;
count__422711_422861 = G__422877;
i__422712_422862 = G__422878;
continue;
} else {
var vec__422716_422879 = cljs.core.first.call(null,seq__422709_422873__$1);
var a_422880 = cljs.core.nth.call(null,vec__422716_422879,(0),null);
var b_422881 = cljs.core.nth.call(null,vec__422716_422879,(1),null);
var c_422882 = cljs.core.nth.call(null,vec__422716_422879,(2),null);
var face_422883 = vec__422716_422879;
if(((begin < vertices.call(null,a_422880).call(null,(2)))) && ((vertices.call(null,a_422880).call(null,(2)) < end))){
line.call(null,a_422880,b_422881);
} else {
}

var G__422884 = cljs.core.next.call(null,seq__422709_422873__$1);
var G__422885 = null;
var G__422886 = (0);
var G__422887 = (0);
seq__422709_422859 = G__422884;
chunk__422710_422860 = G__422885;
count__422711_422861 = G__422886;
i__422712_422862 = G__422887;
continue;
}
} else {
}
}
break;
}

var G__422888 = seq__422703_422848;
var G__422889 = chunk__422704_422849;
var G__422890 = count__422705_422850;
var G__422891 = (i__422706_422851 + (1));
seq__422703_422848 = G__422888;
chunk__422704_422849 = G__422889;
count__422705_422850 = G__422890;
i__422706_422851 = G__422891;
continue;
} else {
var temp__6728__auto___422892__$1 = cljs.core.seq.call(null,seq__422703_422848);
if(temp__6728__auto___422892__$1){
var seq__422703_422893__$1 = temp__6728__auto___422892__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__422703_422893__$1)){
var c__35293__auto___422894 = cljs.core.chunk_first.call(null,seq__422703_422893__$1);
var G__422895 = cljs.core.chunk_rest.call(null,seq__422703_422893__$1);
var G__422896 = c__35293__auto___422894;
var G__422897 = cljs.core.count.call(null,c__35293__auto___422894);
var G__422898 = (0);
seq__422703_422848 = G__422895;
chunk__422704_422849 = G__422896;
count__422705_422850 = G__422897;
i__422706_422851 = G__422898;
continue;
} else {
var map__422719_422899 = cljs.core.first.call(null,seq__422703_422893__$1);
var map__422719_422900__$1 = ((((!((map__422719_422899 == null)))?((((map__422719_422899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422719_422899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422719_422899):map__422719_422899);
var region_422901 = cljs.core.get.call(null,map__422719_422900__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_422902 = cljs.core.get.call(null,map__422719_422900__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_422903 = cljs.core.get.call(null,map__422719_422900__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_422904 = cljs.core.get.call(null,map__422719_422900__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_422905 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_422901))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_422905,brightness);

var seq__422721_422906 = cljs.core.seq.call(null,faces_422902);
var chunk__422722_422907 = null;
var count__422723_422908 = (0);
var i__422724_422909 = (0);
while(true){
if((i__422724_422909 < count__422723_422908)){
var vec__422725_422910 = cljs.core._nth.call(null,chunk__422722_422907,i__422724_422909);
var a_422911 = cljs.core.nth.call(null,vec__422725_422910,(0),null);
var b_422912 = cljs.core.nth.call(null,vec__422725_422910,(1),null);
var c_422913 = cljs.core.nth.call(null,vec__422725_422910,(2),null);
var face_422914 = vec__422725_422910;
if(((begin < vertices.call(null,a_422911).call(null,(2)))) && ((vertices.call(null,a_422911).call(null,(2)) < end))){
line.call(null,a_422911,b_422912);
} else {
}

var G__422915 = seq__422721_422906;
var G__422916 = chunk__422722_422907;
var G__422917 = count__422723_422908;
var G__422918 = (i__422724_422909 + (1));
seq__422721_422906 = G__422915;
chunk__422722_422907 = G__422916;
count__422723_422908 = G__422917;
i__422724_422909 = G__422918;
continue;
} else {
var temp__6728__auto___422919__$2 = cljs.core.seq.call(null,seq__422721_422906);
if(temp__6728__auto___422919__$2){
var seq__422721_422920__$1 = temp__6728__auto___422919__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__422721_422920__$1)){
var c__35293__auto___422921 = cljs.core.chunk_first.call(null,seq__422721_422920__$1);
var G__422922 = cljs.core.chunk_rest.call(null,seq__422721_422920__$1);
var G__422923 = c__35293__auto___422921;
var G__422924 = cljs.core.count.call(null,c__35293__auto___422921);
var G__422925 = (0);
seq__422721_422906 = G__422922;
chunk__422722_422907 = G__422923;
count__422723_422908 = G__422924;
i__422724_422909 = G__422925;
continue;
} else {
var vec__422728_422926 = cljs.core.first.call(null,seq__422721_422920__$1);
var a_422927 = cljs.core.nth.call(null,vec__422728_422926,(0),null);
var b_422928 = cljs.core.nth.call(null,vec__422728_422926,(1),null);
var c_422929 = cljs.core.nth.call(null,vec__422728_422926,(2),null);
var face_422930 = vec__422728_422926;
if(((begin < vertices.call(null,a_422927).call(null,(2)))) && ((vertices.call(null,a_422927).call(null,(2)) < end))){
line.call(null,a_422927,b_422928);
} else {
}

var G__422931 = cljs.core.next.call(null,seq__422721_422920__$1);
var G__422932 = null;
var G__422933 = (0);
var G__422934 = (0);
seq__422721_422906 = G__422931;
chunk__422722_422907 = G__422932;
count__422723_422908 = G__422933;
i__422724_422909 = G__422934;
continue;
}
} else {
}
}
break;
}

var G__422935 = cljs.core.next.call(null,seq__422703_422893__$1);
var G__422936 = null;
var G__422937 = (0);
var G__422938 = (0);
seq__422703_422848 = G__422935;
chunk__422704_422849 = G__422936;
count__422705_422850 = G__422937;
i__422706_422851 = G__422938;
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

var G__422939 = cljs.core.next.call(null,seq__422665__$1);
var G__422940 = null;
var G__422941 = (0);
var G__422942 = (0);
seq__422665 = G__422939;
chunk__422666 = G__422940;
count__422667 = G__422941;
i__422668 = G__422942;
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

var x422947_422977 = ui.core.Brain.prototype;
x422947_422977.componentWillUpdate = ((function (x422947_422977){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___422978 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___422979 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___422978,next_ident__40467__auto___422979)){
var idxr__40468__auto___422980 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___422980 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___422980),((function (idxr__40468__auto___422980,ident__40466__auto___422978,next_ident__40467__auto___422979,this__40462__auto__,x422947_422977){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___422978], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___422979], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___422980,ident__40466__auto___422978,next_ident__40467__auto___422979,this__40462__auto__,x422947_422977))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x422947_422977))
;

x422947_422977.shouldComponentUpdate = ((function (x422947_422977){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__422949 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__422949);
} else {
return G__422949;
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
});})(x422947_422977))
;

x422947_422977.componentDidUpdate = ((function (x422947_422977){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x422947_422977))
;

x422947_422977.isMounted = ((function (x422947_422977){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x422947_422977))
;

x422947_422977.componentWillMount = ((function (x422947_422977){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x422947_422977))
;

x422947_422977.initLocalState = ((function (x422947_422977){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1708495417),null], null);
var obj422951 = {"omcljs$state":ret__40440__auto__};
return obj422951;
});})(x422947_422977))
;

x422947_422977.componentDidMount = ((function (x422947_422977){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"interval","interval",1708495417),setInterval(((function (this$,x422947_422977){
return (function (){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.update,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),((function (this$,x422947_422977){
return (function (rotation){
ui.core.render_brain.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)).getContext("2d"),rotation,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));

return (rotation + 0.01);
});})(this$,x422947_422977))
);
});})(this$,x422947_422977))
,(50)));
});})(x422947_422977))
;

x422947_422977.componentWillUnmount = ((function (x422947_422977){
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
});})(x422947_422977))
;

x422947_422977.render = ((function (x422947_422977){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_422952 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_422953 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_422954 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_422955 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_422956 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__422957 = om.next.props.call(null,this$);
var map__422957__$1 = ((((!((map__422957 == null)))?((((map__422957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422957):map__422957);
var props = map__422957__$1;
var items = cljs.core.get.call(null,map__422957__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
var loading = cljs.core.not.call(null,cljs.core.seq.call(null,items));
var scores = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (map__422957,map__422957__$1,props,items,loading,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977){
return (function ui$core$iter__422960(s__422961){
return (new cljs.core.LazySeq(null,((function (map__422957,map__422957__$1,props,items,loading,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977){
return (function (){
var s__422961__$1 = s__422961;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__422961__$1);
if(temp__6728__auto__){
var s__422961__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__422961__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__422961__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__422963 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__422962 = (0);
while(true){
if((i__422962 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__422962);
cljs.core.chunk_append.call(null,b__422963,(function (){var map__422968 = item;
var map__422968__$1 = ((((!((map__422968 == null)))?((((map__422968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422968):map__422968);
var votes = cljs.core.get.call(null,map__422968__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34723__auto__ = (0);
var y__34724__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})());

var G__422981 = (i__422962 + (1));
i__422962 = G__422981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422963),ui$core$iter__422960.call(null,cljs.core.chunk_rest.call(null,s__422961__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__422963),null);
}
} else {
var item = cljs.core.first.call(null,s__422961__$2);
return cljs.core.cons.call(null,(function (){var map__422970 = item;
var map__422970__$1 = ((((!((map__422970 == null)))?((((map__422970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422970):map__422970);
var votes = cljs.core.get.call(null,map__422970__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34723__auto__ = (0);
var y__34724__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})(),ui$core$iter__422960.call(null,cljs.core.rest.call(null,s__422961__$2)));
}
} else {
return null;
}
break;
}
});})(map__422957,map__422957__$1,props,items,loading,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977))
,null,null));
});})(map__422957,map__422957__$1,props,items,loading,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977))
;
return iter__35244__auto__.call(null,items);
})());
var sections = cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__422957,map__422957__$1,props,items,loading,scores,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977){
return (function (index,item,score){
var map__422972 = item;
var map__422972__$1 = ((((!((map__422972 == null)))?((((map__422972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422972):map__422972);
var description = cljs.core.get.call(null,map__422972__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("item","description","item/description",-1431609213).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var x__34723__auto__ = score;
var y__34724__auto__ = (cljs.core.apply.call(null,cljs.core._PLUS_,scores) / (50));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})(),new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});})(map__422957,map__422957__$1,props,items,loading,scores,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977))
,cljs.core.range.call(null),items,scores));
var sections__$1 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core._,new cljs.core.Keyword(null,"size","size",1098693007)),sections));
var map__422958 = om.next.get_computed.call(null,props);
var map__422958__$1 = ((((!((map__422958 == null)))?((((map__422958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422958):map__422958);
var mode = cljs.core.get.call(null,map__422958__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
cljs.core.swap_BANG_.call(null,ui.core.brain_state,((function (map__422957,map__422957__$1,props,items,loading,scores,sections,sections__$1,map__422958,map__422958__$1,mode,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977){
return (function (brain_state){
if(cljs.core.not_EQ_.call(null,sections__$1,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(brain_state))){
var br = ui.core.brain_prerender.call(null,sections__$1);
return cljs.core.assoc.call(null,brain_state,new cljs.core.Keyword(null,"sections","sections",-886710106),sections__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958),br,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629),ui.core.render_graph.call(null,ui.core.brain_faces,ui.core.brain_vertices,br));
} else {
return brain_state;
}
});})(map__422957,map__422957__$1,props,items,loading,scores,sections,sections__$1,map__422958,map__422958__$1,mode,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977))
);

return ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"colored","colored",-1421800355),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colored","colored",-1421800355),ui.motion.spring.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"brain","brain",428499577))) && (!(loading)))?(1):(0)),ui.motion.gentle),new cljs.core.Keyword(null,"top","top",-1856271961),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(50):(0))),new cljs.core.Keyword(null,"width","width",-384071477),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(150):(60)),ui.motion.wobbly)], null)], null),((function (map__422957,map__422957__$1,props,items,loading,scores,sections,sections__$1,map__422958,map__422958__$1,mode,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977){
return (function (value){
cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value));

return cljs.core.apply.call(null,React.DOM.div,({"style": ({"width": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "position": "absolute", "zIndex": om_tools.dom.format_opts.call(null,(((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value) > 0.5))?(1):(-1))), "top": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("%")].join(''))})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.canvas(({"ref": om_tools.dom.format_opts.call(null,((function (map__422957,map__422957__$1,props,items,loading,scores,sections,sections__$1,map__422958,map__422958__$1,mode,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977){
return (function (canvas){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas);
});})(map__422957,map__422957__$1,props,items,loading,scores,sections,sections__$1,map__422958,map__422958__$1,mode,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977))
), "width": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "height": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "style": ({"height": "100%", "width": "100%"})})),((loading)?cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "top": "40%", "left": "25%", "right": "25%", "height": "20%"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.p(({"style": ({"textAlign": "center"})}),"Brain Initializing from Ethereum Blockchain"),blueprint_cljs.core.progress_bar.call(null)],null)))):null)],null))));
});})(map__422957,map__422957__$1,props,items,loading,scores,sections,sections__$1,map__422958,map__422958__$1,mode,_STAR_reconciler_STAR_422952,_STAR_depth_STAR_422953,_STAR_shared_STAR_422954,_STAR_instrument_STAR_422955,_STAR_parent_STAR_422956,this$,this__40461__auto__,x422947_422977))
);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_422956;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_422955;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_422954;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_422953;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_422952;
}});})(x422947_422977))
;


ui.core.Brain.prototype.constructor = ui.core.Brain;

ui.core.Brain.prototype.constructor.displayName = "ui.core/Brain";

ui.core.Brain.prototype.om$isComponent = true;

var x422975_422982 = ui.core.Brain;
/** @nocollapse */
x422975_422982.om$next$IQuery$ = true;

/** @nocollapse */
x422975_422982.om$next$IQuery$query$arity$1 = ((function (x422975_422982){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x422975_422982))
;


var x422976_422983 = ui.core.Brain.prototype;

x422976_422983.om$next$IQuery$ = true;


x422976_422983.om$next$IQuery$query$arity$1 = ((function (x422976_422983){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x422976_422983))
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

var x422988_423002 = ui.core.Root.prototype;
x422988_423002.componentWillUpdate = ((function (x422988_423002){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___423003 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___423004 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___423003,next_ident__40467__auto___423004)){
var idxr__40468__auto___423005 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___423005 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___423005),((function (idxr__40468__auto___423005,ident__40466__auto___423003,next_ident__40467__auto___423004,this__40462__auto__,x422988_423002){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___423003], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___423004], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___423005,ident__40466__auto___423003,next_ident__40467__auto___423004,this__40462__auto__,x422988_423002))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x422988_423002))
;

x422988_423002.shouldComponentUpdate = ((function (x422988_423002){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__422990 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__422990);
} else {
return G__422990;
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
});})(x422988_423002))
;

x422988_423002.componentDidUpdate = ((function (x422988_423002){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x422988_423002))
;

x422988_423002.isMounted = ((function (x422988_423002){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x422988_423002))
;

x422988_423002.componentWillMount = ((function (x422988_423002){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x422988_423002))
;

x422988_423002.initLocalState = ((function (x422988_423002){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),null], null),new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.Keyword(null,"brain","brain",428499577)], null);
var obj422992 = {"omcljs$state":ret__40440__auto__};
return obj422992;
});})(x422988_423002))
;

x422988_423002.componentDidMount = ((function (x422988_423002){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),(function (){var update_address = ((function (this$,x422988_423002){
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
});})(this$,x422988_423002))
;
update_address.call(null);

return setInterval(update_address,(1000));
})()], null));
});})(x422988_423002))
;

x422988_423002.componentWillUnmount = ((function (x422988_423002){
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
});})(x422988_423002))
;

x422988_423002.render = ((function (x422988_423002){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_422993 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_422994 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_422995 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_422996 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_422997 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__422998 = om.next.props.call(null,this$);
var map__422998__$1 = ((((!((map__422998 == null)))?((((map__422998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__422998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__422998):map__422998);
var proposals_props = cljs.core.get.call(null,map__422998__$1,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231));
var stakes_props = cljs.core.get.call(null,map__422998__$1,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339));
var items_props = cljs.core.get.call(null,map__422998__$1,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104));
var brain_props = cljs.core.get.call(null,map__422998__$1,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934));
var network_id = cljs.core.get.call(null,map__422998__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var can_vote_proposal = cljs.core.get.call(null,map__422998__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__422998__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dark", "style": ({"display": "flex", "justifyContent": "center", "zoom": 1.3})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"flexGrow": "1", "maxWidth": "600px"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.tabs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__422998,map__422998__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_422993,_STAR_depth_STAR_422994,_STAR_shared_STAR_422995,_STAR_instrument_STAR_422996,_STAR_parent_STAR_422997,this$,this__40461__auto__,x422988_423002){
return (function (index){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"white","white",-483998618)], null).call(null,index));
});})(map__422998,map__422998__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_422993,_STAR_depth_STAR_422994,_STAR_shared_STAR_422995,_STAR_instrument_STAR_422996,_STAR_parent_STAR_422997,this$,this__40461__auto__,x422988_423002))
], null),blueprint_cljs.core.tab_list.call(null,blueprint_cljs.core.tab.call(null,"Brain"),blueprint_cljs.core.tab.call(null,"Top 10 Items"),blueprint_cljs.core.tab.call(null,"Today's Proposed Items"),blueprint_cljs.core.tab.call(null,"Voting Stakes"),blueprint_cljs.core.tab.call(null,"FAQ")),blueprint_cljs.core.tab_panel.call(null,cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "bottom": (0), "left": (0), "right": (0), "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-elevation-4", "style": ({"opacity": om_tools.dom.format_opts.call(null,(cljs.core.truth_(ui.core.web3)?0.7:(1))), "maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(ui.core.web3)?null:cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "alignItems": "center", "fontSize": "1.1rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"margin": "0.5em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["EthereanMind requires access to the ",React.DOM.a(({"target": "_blank", "href": "http://ethereum.org"}),"ethereum network "),"to initialize. Please install the ",React.DOM.a(({"target": "_blank", "href": "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"}),"metamask chrome extension"),", or a similar ethereum data source."],null)))),React.DOM.img(({"src": "metamask.png"}))],null))))),React.DOM.h3(({"style": ({"textAlign": "center"})}),"Ethereans, what's on your mind?"),React.DOM.p(null,"EthereanMind lets ethereum users maintain a decentralized \"Top 10 list\" of the most important items to the community. Voting attacks are prevented via time-locked, fully refundable deposits in a staking contract.")],null)))),(cljs.core.truth_((function (){var and__34378__auto__ = ui.core.web3;
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
})())?cljs.core.apply.call(null,React.DOM.div,({"className": "pt-callout pt-intent-danger pt-icon-warning-sign", "style": ({"maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h5(null,"Wrong Network!"),((cljs.core._EQ_.call(null,network_id,(1)))?"You are currently connected to the Ethereum main network which uses real currency. This beta dapp is still running on the Ropsten testnet, which uses free currency. Do not yet use real money with this dapp!":"You are connected to the wrong network! This beta dapp is currently runing on the Ropsten Testnet. In Metamask, change the network option in the upper left corner of the popup window.")],null)))):null),((cljs.core._EQ_.call(null,network_id,(3)))?cljs.core.apply.call(null,React.DOM.div,({"className": "pt-callout pt-intent-warning pt-icon-warning-sign", "style": ({"maxWidth": "500px", "marginBottom": "2rem", "opacity": 0.5, "fontSize": "0.7em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h5(null,"Ropsten Testnet Attack"),"Please be aware that the ethereum testnet is experiencing a (senseless) spam attack this week. This may cause failures in staking/voting that will not exist once this app goes out of beta on the main ethereum network."],null)))):null)],null))))),blueprint_cljs.core.tab_panel.call(null,ui.core.items_component.call(null,items_props)),blueprint_cljs.core.tab_panel.call(null,ui.core.proposals_component.call(null,proposals_props)),blueprint_cljs.core.tab_panel.call(null,ui.core.stakes_component.call(null,stakes_props)),blueprint_cljs.core.tab_panel.call(null,ui.faq_text.faq_text))],null)))),cljs.core.apply.call(null,React.DOM.div,({"key": "foo", "style": ({"position": "fixed", "display": "flex", "flexDirection": "column", "alignItems": "flex-end", "right": (0), "bottom": (0), "padding": "0.5rem", "opacity": "0.5"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,false,can_vote_proposal))?blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.15em"], null)], null),"Today's proposal action used up"):null),blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.15em"], null)], null),"Current Stake: ",((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?blueprint_cljs.core.spinner.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-small"], null)):stake)," Ether")],null)))),cljs.core.apply.call(null,React.DOM.div,({"key": "bar", "style": ({"pointerEvents": "none ", "top": (0), "width": "100%", "justifyContent": "center", "opacity": (1), "display": "flex", "position": "absolute", "height": "100%", "alignItems": "center", "left": (0)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.core.brain_component.call(null,om.next.computed.call(null,brain_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))], null)))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_422997;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_422996;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_422995;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_422994;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_422993;
}});})(x422988_423002))
;


ui.core.Root.prototype.constructor = ui.core.Root;

ui.core.Root.prototype.constructor.displayName = "ui.core/Root";

ui.core.Root.prototype.om$isComponent = true;

var x423000_423006 = ui.core.Root;
/** @nocollapse */
x423000_423006.om$next$IQuery$ = true;

/** @nocollapse */
x423000_423006.om$next$IQuery$query$arity$1 = ((function (x423000_423006){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x423000_423006))
;


var x423001_423007 = ui.core.Root.prototype;

x423001_423007.om$next$IQuery$ = true;


x423001_423007.om$next$IQuery$query$arity$1 = ((function (x423001_423007){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x423001_423007))
;


ui.core.Root.cljs$lang$type = true;

ui.core.Root.cljs$lang$ctorStr = "ui.core/Root";

ui.core.Root.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Root");
});
ui.core.simple_read = (function ui$core$simple_read(p__423008,key,_){
var map__423011 = p__423008;
var map__423011__$1 = ((((!((map__423011 == null)))?((((map__423011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423011):map__423011);
var env = map__423011__$1;
var state = cljs.core.get.call(null,map__423011__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state).call(null,key)], null);
});
ui.core.simple_read_with_remote = (function ui$core$simple_read_with_remote(p__423013,key,_){
var map__423016 = p__423013;
var map__423016__$1 = ((((!((map__423016 == null)))?((((map__423016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423016):map__423016);
var env = map__423016__$1;
var state = cljs.core.get.call(null,map__423016__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var value = cljs.core.deref.call(null,state).call(null,key);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"remote","remote",-1593576576),cljs.core.not.call(null,value)], null);
});
ui.core.recursive_read = (function ui$core$recursive_read(query_root,p__423018,_,___$1){
var map__423021 = p__423018;
var map__423021__$1 = ((((!((map__423021 == null)))?((((map__423021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423021):map__423021);
var env = map__423021__$1;
var parser = cljs.core.get.call(null,map__423021__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__423021__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__423021__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__423021__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query-root","query-root",359781888),query_root,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}
});
ui.core.recursive_channel_read = (function ui$core$recursive_channel_read(p__423023,_,___$1){
var map__423026 = p__423023;
var map__423026__$1 = ((((!((map__423026 == null)))?((((map__423026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423026):map__423026);
var env = map__423026__$1;
var parser = cljs.core.get.call(null,map__423026__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__423026__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.call(null,map__423026__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
var G__423028__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,true,args);
};
var G__423028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__423029__i = 0, G__423029__a = new Array(arguments.length -  0);
while (G__423029__i < G__423029__a.length) {G__423029__a[G__423029__i] = arguments[G__423029__i + 0]; ++G__423029__i;}
  args = new cljs.core.IndexedSeq(G__423029__a,0);
} 
return G__423028__delegate.call(this,args);};
G__423028.cljs$lang$maxFixedArity = 0;
G__423028.cljs$lang$applyTo = (function (arglist__423030){
var args = cljs.core.seq(arglist__423030);
return G__423028__delegate(args);
});
G__423028.cljs$core$IFn$_invoke$arity$variadic = G__423028__delegate;
return G__423028;
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
var map__423031 = env;
var map__423031__$1 = ((((!((map__423031 == null)))?((((map__423031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423031):map__423031);
var parser = cljs.core.get.call(null,map__423031__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__423031__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__423031__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__423031__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__423031__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__423031,map__423031__$1,parser,state,query,target,ast,state__$1){
return (function ui$core$iter__423033(s__423034){
return (new cljs.core.LazySeq(null,((function (map__423031,map__423031__$1,parser,state,query,target,ast,state__$1){
return (function (){
var s__423034__$1 = s__423034;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__423034__$1);
if(temp__6728__auto__){
var s__423034__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__423034__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__423034__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__423036 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__423035 = (0);
while(true){
if((i__423035 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__423035);
cljs.core.chunk_append.call(null,b__423036,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query));

var G__423037 = (i__423035 + (1));
i__423035 = G__423037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423036),ui$core$iter__423033.call(null,cljs.core.chunk_rest.call(null,s__423034__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423036),null);
}
} else {
var item = cljs.core.first.call(null,s__423034__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query),ui$core$iter__423033.call(null,cljs.core.rest.call(null,s__423034__$2)));
}
} else {
return null;
}
break;
}
});})(map__423031,map__423031__$1,parser,state,query,target,ast,state__$1))
,null,null));
});})(map__423031,map__423031__$1,parser,state,query,target,ast,state__$1))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("item","by-id","item/by-id",-2140839086).cljs$core$IFn$_invoke$arity$1(state__$1));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),(function (env,k,params){
var map__423038 = env;
var map__423038__$1 = ((((!((map__423038 == null)))?((((map__423038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423038):map__423038);
var parser = cljs.core.get.call(null,map__423038__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__423038__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__423038__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__423038__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__423038__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__423039 = state__$1;
var map__423039__$1 = ((((!((map__423039 == null)))?((((map__423039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423039):map__423039);
var order = cljs.core.get.call(null,map__423039__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__423038,map__423038__$1,parser,state,query,target,ast,state__$1,map__423039,map__423039__$1,order){
return (function ui$core$iter__423042(s__423043){
return (new cljs.core.LazySeq(null,((function (map__423038,map__423038__$1,parser,state,query,target,ast,state__$1,map__423039,map__423039__$1,order){
return (function (){
var s__423043__$1 = s__423043;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__423043__$1);
if(temp__6728__auto__){
var s__423043__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__423043__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__423043__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__423045 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__423044 = (0);
while(true){
if((i__423044 < size__35243__auto__)){
var proposal = cljs.core._nth.call(null,c__35242__auto__,i__423044);
cljs.core.chunk_append.call(null,b__423045,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query));

var G__423046 = (i__423044 + (1));
i__423044 = G__423046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423045),ui$core$iter__423042.call(null,cljs.core.chunk_rest.call(null,s__423043__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423045),null);
}
} else {
var proposal = cljs.core.first.call(null,s__423043__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query),ui$core$iter__423042.call(null,cljs.core.rest.call(null,s__423043__$2)));
}
} else {
return null;
}
break;
}
});})(map__423038,map__423038__$1,parser,state,query,target,ast,state__$1,map__423039,map__423039__$1,order))
,null,null));
});})(map__423038,map__423038__$1,parser,state,query,target,ast,state__$1,map__423039,map__423039__$1,order))
;
return iter__35244__auto__.call(null,order);
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
var map__423047 = env;
var map__423047__$1 = ((((!((map__423047 == null)))?((((map__423047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423047):map__423047);
var parser = cljs.core.get.call(null,map__423047__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__423047__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__423047__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__423047__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__423047__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__423048 = state__$1;
var map__423048__$1 = ((((!((map__423048 == null)))?((((map__423048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423048):map__423048);
var by_id = cljs.core.get.call(null,map__423048__$1,new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__423047,map__423047__$1,parser,state,query,target,ast,state__$1,map__423048,map__423048__$1,by_id){
return (function ui$core$iter__423051(s__423052){
return (new cljs.core.LazySeq(null,((function (map__423047,map__423047__$1,parser,state,query,target,ast,state__$1,map__423048,map__423048__$1,by_id){
return (function (){
var s__423052__$1 = s__423052;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__423052__$1);
if(temp__6728__auto__){
var s__423052__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__423052__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__423052__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__423054 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__423053 = (0);
while(true){
if((i__423053 < size__35243__auto__)){
var stake = cljs.core._nth.call(null,c__35242__auto__,i__423053);
cljs.core.chunk_append.call(null,b__423054,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query));

var G__423055 = (i__423053 + (1));
i__423053 = G__423055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423054),ui$core$iter__423051.call(null,cljs.core.chunk_rest.call(null,s__423052__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423054),null);
}
} else {
var stake = cljs.core.first.call(null,s__423052__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query),ui$core$iter__423051.call(null,cljs.core.rest.call(null,s__423052__$2)));
}
} else {
return null;
}
break;
}
});})(map__423047,map__423047__$1,parser,state,query,target,ast,state__$1,map__423048,map__423048__$1,by_id))
,null,null));
});})(map__423047,map__423047__$1,parser,state,query,target,ast,state__$1,map__423048,map__423048__$1,by_id))
;
return iter__35244__auto__.call(null,cljs.core.vals.call(null,by_id));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__423056__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__423056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__423057__i = 0, G__423057__a = new Array(arguments.length -  0);
while (G__423057__i < G__423057__a.length) {G__423057__a[G__423057__i] = arguments[G__423057__i + 0]; ++G__423057__i;}
  args = new cljs.core.IndexedSeq(G__423057__a,0);
} 
return G__423056__delegate.call(this,args);};
G__423056.cljs$lang$maxFixedArity = 0;
G__423056.cljs$lang$applyTo = (function (arglist__423058){
var args = cljs.core.seq(arglist__423058);
return G__423056__delegate(args);
});
G__423056.cljs$core$IFn$_invoke$arity$variadic = G__423056__delegate;
return G__423056;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__423059__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__423059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__423060__i = 0, G__423060__a = new Array(arguments.length -  0);
while (G__423060__i < G__423060__a.length) {G__423060__a[G__423060__i] = arguments[G__423060__i + 0]; ++G__423060__i;}
  args = new cljs.core.IndexedSeq(G__423060__a,0);
} 
return G__423059__delegate.call(this,args);};
G__423059.cljs$lang$maxFixedArity = 0;
G__423059.cljs$lang$applyTo = (function (arglist__423061){
var args = cljs.core.seq(arglist__423061);
return G__423059__delegate(args);
});
G__423059.cljs$core$IFn$_invoke$arity$variadic = G__423059__delegate;
return G__423059;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__423062__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__423062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__423063__i = 0, G__423063__a = new Array(arguments.length -  0);
while (G__423063__i < G__423063__a.length) {G__423063__a[G__423063__i] = arguments[G__423063__i + 0]; ++G__423063__i;}
  args = new cljs.core.IndexedSeq(G__423063__a,0);
} 
return G__423062__delegate.call(this,args);};
G__423062.cljs$lang$maxFixedArity = 0;
G__423062.cljs$lang$applyTo = (function (arglist__423064){
var args = cljs.core.seq(arglist__423064);
return G__423062__delegate(args);
});
G__423062.cljs$core$IFn$_invoke$arity$variadic = G__423062__delegate;
return G__423062;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__423065__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__423065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__423066__i = 0, G__423066__a = new Array(arguments.length -  0);
while (G__423066__i < G__423066__a.length) {G__423066__a[G__423066__i] = arguments[G__423066__i + 0]; ++G__423066__i;}
  args = new cljs.core.IndexedSeq(G__423066__a,0);
} 
return G__423065__delegate.call(this,args);};
G__423065.cljs$lang$maxFixedArity = 0;
G__423065.cljs$lang$applyTo = (function (arglist__423067){
var args = cljs.core.seq(arglist__423067);
return G__423065__delegate(args);
});
G__423065.cljs$core$IFn$_invoke$arity$variadic = G__423065__delegate;
return G__423065;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,k,params){
var map__423068 = env;
var map__423068__$1 = ((((!((map__423068 == null)))?((((map__423068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423068):map__423068);
var parser = cljs.core.get.call(null,map__423068__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__423068__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__423068__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__423068__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__423068__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__423069 = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env);
var map__423069__$1 = ((((!((map__423069 == null)))?((((map__423069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423069):map__423069);
var votes = cljs.core.get.call(null,map__423069__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(votes)?(function (){var iter__35244__auto__ = ((function (map__423068,map__423068__$1,parser,state,query,target,ast,state__$1,map__423069,map__423069__$1,votes){
return (function ui$core$iter__423072(s__423073){
return (new cljs.core.LazySeq(null,((function (map__423068,map__423068__$1,parser,state,query,target,ast,state__$1,map__423069,map__423069__$1,votes){
return (function (){
var s__423073__$1 = s__423073;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__423073__$1);
if(temp__6728__auto__){
var s__423073__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__423073__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__423073__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__423075 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__423074 = (0);
while(true){
if((i__423074 < size__35243__auto__)){
var item_votes = cljs.core._nth.call(null,c__35242__auto__,i__423074);
cljs.core.chunk_append.call(null,b__423075,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query));

var G__423076 = (i__423074 + (1));
i__423074 = G__423076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423075),ui$core$iter__423072.call(null,cljs.core.chunk_rest.call(null,s__423073__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423075),null);
}
} else {
var item_votes = cljs.core.first.call(null,s__423073__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query),ui$core$iter__423072.call(null,cljs.core.rest.call(null,s__423073__$2)));
}
} else {
return null;
}
break;
}
});})(map__423068,map__423068__$1,parser,state,query,target,ast,state__$1,map__423069,map__423069__$1,votes))
,null,null));
});})(map__423068,map__423068__$1,parser,state,query,target,ast,state__$1,map__423069,map__423069__$1,votes))
;
return iter__35244__auto__.call(null,votes);
})():null)], null);
}
}));
var seq__423077_423087 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake","stake",-1498497787),new cljs.core.Keyword("stake","value","stake/value",466231031),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword("item","description","item/description",-1431609213),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),true], null)], null));
var chunk__423078_423088 = null;
var count__423079_423089 = (0);
var i__423080_423090 = (0);
while(true){
if((i__423080_423090 < count__423079_423089)){
var vec__423081_423091 = cljs.core._nth.call(null,chunk__423078_423088,i__423080_423090);
var object_423092 = cljs.core.nth.call(null,vec__423081_423091,(0),null);
var method_423093 = cljs.core.nth.call(null,vec__423081_423091,(1),null);
var remote_423094 = cljs.core.nth.call(null,vec__423081_423091,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_423093,((function (seq__423077_423087,chunk__423078_423088,count__423079_423089,i__423080_423090,vec__423081_423091,object_423092,method_423093,remote_423094){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_423094,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_423092,dispatch_key], null))], null);
});})(seq__423077_423087,chunk__423078_423088,count__423079_423089,i__423080_423090,vec__423081_423091,object_423092,method_423093,remote_423094))
);

var G__423095 = seq__423077_423087;
var G__423096 = chunk__423078_423088;
var G__423097 = count__423079_423089;
var G__423098 = (i__423080_423090 + (1));
seq__423077_423087 = G__423095;
chunk__423078_423088 = G__423096;
count__423079_423089 = G__423097;
i__423080_423090 = G__423098;
continue;
} else {
var temp__6728__auto___423099 = cljs.core.seq.call(null,seq__423077_423087);
if(temp__6728__auto___423099){
var seq__423077_423100__$1 = temp__6728__auto___423099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__423077_423100__$1)){
var c__35293__auto___423101 = cljs.core.chunk_first.call(null,seq__423077_423100__$1);
var G__423102 = cljs.core.chunk_rest.call(null,seq__423077_423100__$1);
var G__423103 = c__35293__auto___423101;
var G__423104 = cljs.core.count.call(null,c__35293__auto___423101);
var G__423105 = (0);
seq__423077_423087 = G__423102;
chunk__423078_423088 = G__423103;
count__423079_423089 = G__423104;
i__423080_423090 = G__423105;
continue;
} else {
var vec__423084_423106 = cljs.core.first.call(null,seq__423077_423100__$1);
var object_423107 = cljs.core.nth.call(null,vec__423084_423106,(0),null);
var method_423108 = cljs.core.nth.call(null,vec__423084_423106,(1),null);
var remote_423109 = cljs.core.nth.call(null,vec__423084_423106,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_423108,((function (seq__423077_423087,chunk__423078_423088,count__423079_423089,i__423080_423090,vec__423084_423106,object_423107,method_423108,remote_423109,seq__423077_423100__$1,temp__6728__auto___423099){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_423109,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_423107,dispatch_key], null))], null);
});})(seq__423077_423087,chunk__423078_423088,count__423079_423089,i__423080_423090,vec__423084_423106,object_423107,method_423108,remote_423109,seq__423077_423100__$1,temp__6728__auto___423099))
);

var G__423110 = cljs.core.next.call(null,seq__423077_423100__$1);
var G__423111 = null;
var G__423112 = (0);
var G__423113 = (0);
seq__423077_423087 = G__423110;
chunk__423078_423088 = G__423111;
count__423079_423089 = G__423112;
i__423080_423090 = G__423113;
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
var G__423114__delegate = function (args){
return cljs.core.apply.call(null,ui.core.simple_read_with_remote,args);
};
var G__423114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__423115__i = 0, G__423115__a = new Array(arguments.length -  0);
while (G__423115__i < G__423115__a.length) {G__423115__a[G__423115__i] = arguments[G__423115__i + 0]; ++G__423115__i;}
  args = new cljs.core.IndexedSeq(G__423115__a,0);
} 
return G__423114__delegate.call(this,args);};
G__423114.cljs$lang$maxFixedArity = 0;
G__423114.cljs$lang$applyTo = (function (arglist__423116){
var args = cljs.core.seq(arglist__423116);
return G__423114__delegate(args);
});
G__423114.cljs$core$IFn$_invoke$arity$variadic = G__423114__delegate;
return G__423114;
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
var map__423117 = params;
var map__423117__$1 = ((((!((map__423117 == null)))?((((map__423117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423117):map__423117);
var id = cljs.core.get.call(null,map__423117__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__423117__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),((function (map__423117,map__423117__$1,id,description){
return (function (state){
var map__423119 = state;
var map__423119__$1 = ((((!((map__423119 == null)))?((((map__423119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423119):map__423119);
var proposals = cljs.core.get.call(null,map__423119__$1,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153));
var proposal = proposals.call(null,id);
var new_tempid = om.next.tempid.call(null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),cljs.core.assoc.call(null,cljs.core.update.call(null,proposals,id,cljs.core.assoc,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),description,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false),new_tempid,cljs.core.assoc.call(null,proposal,new cljs.core.Keyword("db","id","db/id",-1388397098),new_tempid,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),true))),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),new_tempid], null));
});})(map__423117,map__423117__$1,id,description))
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
var map__423121 = params;
var map__423121__$1 = ((((!((map__423121 == null)))?((((map__423121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423121):map__423121);
var address = cljs.core.get.call(null,map__423121__$1,new cljs.core.Keyword(null,"address","address",559499426));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35244__auto__ = (function ui$core$map_by_id_$_iter__423127(s__423128){
return (new cljs.core.LazySeq(null,(function (){
var s__423128__$1 = s__423128;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__423128__$1);
if(temp__6728__auto__){
var s__423128__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__423128__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__423128__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__423130 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__423129 = (0);
while(true){
if((i__423129 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__423129);
cljs.core.chunk_append.call(null,b__423130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null));

var G__423131 = (i__423129 + (1));
i__423129 = G__423131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423130),ui$core$map_by_id_$_iter__423127.call(null,cljs.core.chunk_rest.call(null,s__423128__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423130),null);
}
} else {
var item = cljs.core.first.call(null,s__423128__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null),ui$core$map_by_id_$_iter__423127.call(null,cljs.core.rest.call(null,s__423128__$2)));
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
var map__423138 = ui.core.tweak_tree.call(null,b);
var map__423138__$1 = ((((!((map__423138 == null)))?((((map__423138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423138):map__423138);
var network_id = cljs.core.get.call(null,map__423138__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var proposals = cljs.core.get.call(null,map__423138__$1,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444));
var order = cljs.core.get.call(null,map__423138__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
var stakes = cljs.core.get.call(null,map__423138__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__423138__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var items = cljs.core.get.call(null,map__423138__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,a,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),((function (map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items){
return (function (k){
var or__34390__auto__ = network_id;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return k;
}
});})(map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),cljs.core.merge,user),new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),((function (map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items){
return (function (proposals_old){
return cljs.core.merge_with.call(null,cljs.core.merge,proposals_old,ui.core.map_by_id.call(null,proposals));
});})(map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),((function (map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items){
return (function (order_old){
if(cljs.core.truth_(proposals)){
var ks = cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),proposals),cljs.core.filter.call(null,om.next.tempid_QMARK_,cljs.core.map.call(null,cljs.core.second,order_old)));
return cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (ks,map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items){
return (function ui$core$my_merge_tree_$_iter__423140(s__423141){
return (new cljs.core.LazySeq(null,((function (ks,map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items){
return (function (){
var s__423141__$1 = s__423141;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__423141__$1);
if(temp__6728__auto__){
var s__423141__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__423141__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__423141__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__423143 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__423142 = (0);
while(true){
if((i__423142 < size__35243__auto__)){
var k = cljs.core._nth.call(null,c__35242__auto__,i__423142);
cljs.core.chunk_append.call(null,b__423143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null));

var G__423144 = (i__423142 + (1));
i__423142 = G__423144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423143),ui$core$my_merge_tree_$_iter__423140.call(null,cljs.core.chunk_rest.call(null,s__423141__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423143),null);
}
} else {
var k = cljs.core.first.call(null,s__423141__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null),ui$core$my_merge_tree_$_iter__423140.call(null,cljs.core.rest.call(null,s__423141__$2)));
}
} else {
return null;
}
break;
}
});})(ks,map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items))
,null,null));
});})(ks,map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items))
;
return iter__35244__auto__.call(null,ks);
})());
} else {
return order_old;
}
});})(map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),((function (map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items){
return (function (stakes_old){
return cljs.core.merge_with.call(null,cljs.core.merge,stakes_old,ui.core.map_by_id.call(null,stakes));
});})(map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),((function (map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items){
return (function (items_old){
var or__34390__auto__ = items;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return items_old;
}
});})(map__423138,map__423138__$1,network_id,proposals,order,stakes,user,items))
);
});
ui.core.my_merge = (function ui$core$my_merge(reconciler,state,res,query){
var k = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),k,new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,cljs.core.select_keys.call(null,res,k),query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
ui.core.migrate = (function ui$core$migrate(var_args){
var args423145 = [];
var len__35573__auto___423192 = arguments.length;
var i__35574__auto___423193 = (0);
while(true){
if((i__35574__auto___423193 < len__35573__auto___423192)){
args423145.push((arguments[i__35574__auto___423193]));

var G__423194 = (i__35574__auto___423193 + (1));
i__35574__auto___423193 = G__423194;
continue;
} else {
}
break;
}

var G__423147 = args423145.length;
switch (G__423147) {
case 3:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args423145.length)].join('')));

}
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return ui.core.migrate.call(null,app_state_pure,query,tempids,null);
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function ui$core$dissoc_in(pure,p__423170){
var vec__423174 = p__423170;
var table = cljs.core.nth.call(null,vec__423174,(0),null);
var id = cljs.core.nth.call(null,vec__423174,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function ui$core$step(pure,p__423177){
var vec__423185 = p__423177;
var old = cljs.core.nth.call(null,vec__423185,(0),null);
var vec__423188 = cljs.core.nth.call(null,vec__423185,(1),null);
var _ = cljs.core.nth.call(null,vec__423188,(0),null);
var id = cljs.core.nth.call(null,vec__423188,(1),null);
var new$ = vec__423188;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__423191 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__423191,id_key,id);
} else {
return G__423191;
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
var len__35573__auto___423213 = arguments.length;
var i__35574__auto___423214 = (0);
while(true){
if((i__35574__auto___423214 < len__35573__auto___423213)){
args__35580__auto__.push((arguments[i__35574__auto___423214]));

var G__423215 = (i__35574__auto___423214 + (1));
i__35574__auto___423214 = G__423215;
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
return (function (state_423203){
var state_val_423204 = (state_423203[(1)]);
if((state_val_423204 === (1))){
var state_423203__$1 = state_423203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423203__$1,(2),c,result);
} else {
if((state_val_423204 === (2))){
var inst_423200 = (state_423203[(2)]);
var inst_423201 = cljs.core.async.close_BANG_.call(null,c);
var state_423203__$1 = (function (){var statearr_423205 = state_423203;
(statearr_423205[(7)] = inst_423200);

return statearr_423205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423203__$1,inst_423201);
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
var statearr_423209 = [null,null,null,null,null,null,null,null];
(statearr_423209[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423209[(1)] = (1));

return statearr_423209;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423203){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423210){if((e423210 instanceof Object)){
var ex__40148__auto__ = e423210;
var statearr_423211_423216 = state_423203;
(statearr_423211_423216[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423217 = state_423203;
state_423203 = G__423217;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423203){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,start_time))
})();
var state__40169__auto__ = (function (){var statearr_423212 = f__40168__auto__.call(null);
(statearr_423212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423212;
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

ui.core.chan_call.cljs$lang$applyTo = (function (seq423196){
var G__423197 = cljs.core.first.call(null,seq423196);
var seq423196__$1 = cljs.core.next.call(null,seq423196);
var G__423198 = cljs.core.first.call(null,seq423196__$1);
var seq423196__$2 = cljs.core.next.call(null,seq423196__$1);
return ui.core.chan_call.cljs$core$IFn$_invoke$arity$variadic(G__423197,G__423198,seq423196__$2);
});

ui.core.get_network = (function ui$core$get_network(){
var c = cljs.core.async.chan.call(null);
web3.version.getNetwork(((function (c){
return (function (error,result){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c){
return (function (state_423235){
var state_val_423236 = (state_423235[(1)]);
if((state_val_423236 === (1))){
var inst_423231 = (result | (0));
var state_423235__$1 = state_423235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423235__$1,(2),c,inst_423231);
} else {
if((state_val_423236 === (2))){
var inst_423233 = (state_423235[(2)]);
var state_423235__$1 = state_423235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423235__$1,inst_423233);
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
var statearr_423240 = [null,null,null,null,null,null,null];
(statearr_423240[(0)] = ui$core$get_network_$_state_machine__40145__auto__);

(statearr_423240[(1)] = (1));

return statearr_423240;
});
var ui$core$get_network_$_state_machine__40145__auto____1 = (function (state_423235){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423241){if((e423241 instanceof Object)){
var ex__40148__auto__ = e423241;
var statearr_423242_423244 = state_423235;
(statearr_423242_423244[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423245 = state_423235;
state_423235 = G__423245;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_network_$_state_machine__40145__auto__ = function(state_423235){
switch(arguments.length){
case 0:
return ui$core$get_network_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_network_$_state_machine__40145__auto____1.call(this,state_423235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_network_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_network_$_state_machine__40145__auto____0;
ui$core$get_network_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_network_$_state_machine__40145__auto____1;
return ui$core$get_network_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_423243 = f__40168__auto__.call(null);
(statearr_423243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423243;
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
var len__35573__auto___423304 = arguments.length;
var i__35574__auto___423305 = (0);
while(true){
if((i__35574__auto___423305 < len__35573__auto___423304)){
args__35580__auto__.push((arguments[i__35574__auto___423305]));

var G__423306 = (i__35574__auto___423305 + (1));
i__35574__auto___423305 = G__423306;
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
var vec__423249 = (((cljs.core.seq.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,body),cljs.core.rest.call(null,body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,body], null));
var obj = cljs.core.nth.call(null,vec__423249,(0),null);
var body__$1 = cljs.core.nth.call(null,vec__423249,(1),null);
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c,vec__423249,obj,body__$1){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c,vec__423249,obj,body__$1){
return (function (state_423276){
var state_val_423277 = (state_423276[(1)]);
if((state_val_423277 === (1))){
var inst_423252 = ui.core.get_network.call(null);
var state_423276__$1 = state_423276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423276__$1,(2),inst_423252);
} else {
if((state_val_423277 === (2))){
var inst_423254 = (state_423276[(2)]);
var inst_423255 = cljs.core._EQ_.call(null,inst_423254,(3));
var state_423276__$1 = state_423276;
if(inst_423255){
var statearr_423278_423307 = state_423276__$1;
(statearr_423278_423307[(1)] = (3));

} else {
var statearr_423279_423308 = state_423276__$1;
(statearr_423279_423308[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423277 === (3))){
var inst_423257 = cljs.core.name.call(null,fname);
var inst_423258 = (contract[inst_423257]);
var inst_423259 = inst_423258.sendTransaction;
var inst_423260 = cljs.core.vec.call(null,body__$1);
var inst_423261 = [new cljs.core.Keyword(null,"gas","gas",-139961463)];
var inst_423262 = [(4000000)];
var inst_423263 = cljs.core.PersistentHashMap.fromArrays(inst_423261,inst_423262);
var inst_423264 = cljs.core.merge.call(null,inst_423263,obj);
var inst_423265 = cljs.core.clj__GT_js.call(null,inst_423264);
var inst_423266 = (function (){return ((function (inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1){
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
return cljs.core.reset_BANG_.call(null,timer,setInterval(((function (timer,inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1){
return (function (){
return web3.eth.getTransactionReceipt(result,((function (timer,inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1){
return (function (error__$1,receipt){
if(cljs.core.truth_(receipt)){
var c__40167__auto___423309__$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto___423309__$1,timer,inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto___423309__$1,timer,inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1){
return (function (state_423284){
var state_val_423285 = (state_423284[(1)]);
if((state_val_423285 === (1))){
var state_423284__$1 = state_423284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423284__$1,(2),c,receipt);
} else {
if((state_val_423285 === (2))){
var inst_423281 = (state_423284[(2)]);
var inst_423282 = cljs.core.async.close_BANG_.call(null,c);
var state_423284__$1 = (function (){var statearr_423286 = state_423284;
(statearr_423286[(7)] = inst_423281);

return statearr_423286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423284__$1,inst_423282);
} else {
return null;
}
}
});})(c__40167__auto___423309__$1,timer,inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1))
;
return ((function (switch__40144__auto__,c__40167__auto___423309__$1,timer,inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_423290 = [null,null,null,null,null,null,null,null];
(statearr_423290[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423290[(1)] = (1));

return statearr_423290;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423284){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423291){if((e423291 instanceof Object)){
var ex__40148__auto__ = e423291;
var statearr_423292_423310 = state_423284;
(statearr_423292_423310[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423311 = state_423284;
state_423284 = G__423311;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423284){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto___423309__$1,timer,inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1))
})();
var state__40169__auto__ = (function (){var statearr_423293 = f__40168__auto__.call(null);
(statearr_423293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto___423309__$1);

return statearr_423293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto___423309__$1,timer,inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1))
);


return clearInterval(cljs.core.deref.call(null,timer));
} else {
return null;
}
});})(timer,inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1))
);
});})(timer,inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1))
,(5000)));
}
});
;})(inst_423257,inst_423258,inst_423259,inst_423260,inst_423261,inst_423262,inst_423263,inst_423264,inst_423265,state_val_423277,c__40167__auto__,c,vec__423249,obj,body__$1))
})();
var inst_423267 = cljs.core.conj.call(null,inst_423260,inst_423265,inst_423266);
var inst_423268 = cljs.core.apply.call(null,cljs.core.array,inst_423267);
var inst_423269 = inst_423259.apply(contract,inst_423268);
var state_423276__$1 = (function (){var statearr_423294 = state_423276;
(statearr_423294[(7)] = inst_423269);

return statearr_423294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423276__$1,(6),c);
} else {
if((state_val_423277 === (4))){
var state_423276__$1 = state_423276;
var statearr_423295_423312 = state_423276__$1;
(statearr_423295_423312[(2)] = null);

(statearr_423295_423312[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423277 === (5))){
var inst_423274 = (state_423276[(2)]);
var state_423276__$1 = state_423276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423276__$1,inst_423274);
} else {
if((state_val_423277 === (6))){
var inst_423271 = (state_423276[(2)]);
var state_423276__$1 = state_423276;
var statearr_423296_423313 = state_423276__$1;
(statearr_423296_423313[(2)] = inst_423271);

(statearr_423296_423313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__40167__auto__,c,vec__423249,obj,body__$1))
;
return ((function (switch__40144__auto__,c__40167__auto__,c,vec__423249,obj,body__$1){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_423300 = [null,null,null,null,null,null,null,null];
(statearr_423300[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423300[(1)] = (1));

return statearr_423300;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423276){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423301){if((e423301 instanceof Object)){
var ex__40148__auto__ = e423301;
var statearr_423302_423314 = state_423276;
(statearr_423302_423314[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423315 = state_423276;
state_423276 = G__423315;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423276){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,vec__423249,obj,body__$1))
})();
var state__40169__auto__ = (function (){var statearr_423303 = f__40168__auto__.call(null);
(statearr_423303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c,vec__423249,obj,body__$1))
);

return c__40167__auto__;
});

ui.core.chan_transact.cljs$lang$maxFixedArity = (2);

ui.core.chan_transact.cljs$lang$applyTo = (function (seq423246){
var G__423247 = cljs.core.first.call(null,seq423246);
var seq423246__$1 = cljs.core.next.call(null,seq423246);
var G__423248 = cljs.core.first.call(null,seq423246__$1);
var seq423246__$2 = cljs.core.next.call(null,seq423246__$1);
return ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic(G__423247,G__423248,seq423246__$2);
});

ui.core.chan_event = (function ui$core$chan_event(var_args){
var args__35580__auto__ = [];
var len__35573__auto___423336 = arguments.length;
var i__35574__auto___423337 = (0);
while(true){
if((i__35574__auto___423337 < len__35573__auto___423336)){
args__35580__auto__.push((arguments[i__35574__auto___423337]));

var G__423338 = (i__35574__auto___423337 + (1));
i__35574__auto___423337 = G__423338;
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
return (function (state_423326){
var state_val_423327 = (state_423326[(1)]);
if((state_val_423327 === (1))){
var state_423326__$1 = state_423326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423326__$1,(2),c,result);
} else {
if((state_val_423327 === (2))){
var inst_423321 = (state_423326[(2)]);
var inst_423322 = cljs.core.async.close_BANG_.call(null,c);
var inst_423323 = cljs.core.deref.call(null,event);
var inst_423324 = inst_423323.stopWatching();
var state_423326__$1 = (function (){var statearr_423328 = state_423326;
(statearr_423328[(7)] = inst_423322);

(statearr_423328[(8)] = inst_423321);

return statearr_423328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423326__$1,inst_423324);
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
var statearr_423332 = [null,null,null,null,null,null,null,null,null];
(statearr_423332[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423332[(1)] = (1));

return statearr_423332;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423326){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423333){if((e423333 instanceof Object)){
var ex__40148__auto__ = e423333;
var statearr_423334_423339 = state_423326;
(statearr_423334_423339[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423340 = state_423326;
state_423326 = G__423340;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423326){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,event))
})();
var state__40169__auto__ = (function (){var statearr_423335 = f__40168__auto__.call(null);
(statearr_423335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423335;
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

ui.core.chan_event.cljs$lang$applyTo = (function (seq423316){
var G__423317 = cljs.core.first.call(null,seq423316);
var seq423316__$1 = cljs.core.next.call(null,seq423316);
var G__423318 = cljs.core.first.call(null,seq423316__$1);
var seq423316__$2 = cljs.core.next.call(null,seq423316__$1);
var G__423319 = cljs.core.first.call(null,seq423316__$2);
var seq423316__$3 = cljs.core.next.call(null,seq423316__$2);
return ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic(G__423317,G__423318,G__423319,seq423316__$3);
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
return (function (state_423363){
var state_val_423364 = (state_423363[(1)]);
if((state_val_423364 === (1))){
var state_423363__$1 = state_423363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423363__$1,(2),c,result);
} else {
if((state_val_423364 === (2))){
var inst_423358 = (state_423363[(2)]);
var inst_423359 = cljs.core.async.close_BANG_.call(null,c);
var inst_423360 = cljs.core.deref.call(null,event);
var inst_423361 = inst_423360.stopWatching();
var state_423363__$1 = (function (){var statearr_423365 = state_423363;
(statearr_423365[(7)] = inst_423358);

(statearr_423365[(8)] = inst_423359);

return statearr_423365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423363__$1,inst_423361);
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
var statearr_423369 = [null,null,null,null,null,null,null,null,null];
(statearr_423369[(0)] = ui$core$query_events_$_state_machine__40145__auto__);

(statearr_423369[(1)] = (1));

return statearr_423369;
});
var ui$core$query_events_$_state_machine__40145__auto____1 = (function (state_423363){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423370){if((e423370 instanceof Object)){
var ex__40148__auto__ = e423370;
var statearr_423371_423373 = state_423363;
(statearr_423371_423373[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423374 = state_423363;
state_423363 = G__423374;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$query_events_$_state_machine__40145__auto__ = function(state_423363){
switch(arguments.length){
case 0:
return ui$core$query_events_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$query_events_$_state_machine__40145__auto____1.call(this,state_423363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$query_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$query_events_$_state_machine__40145__auto____0;
ui$core$query_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$query_events_$_state_machine__40145__auto____1;
return ui$core$query_events_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,event,start_time))
})();
var state__40169__auto__ = (function (){var statearr_423372 = f__40168__auto__.call(null);
(statearr_423372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423372;
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
return (function (state_423392){
var state_val_423393 = (state_423392[(1)]);
if((state_val_423393 === (1))){
var inst_423388 = cljs.core.vec.call(null,result);
var state_423392__$1 = state_423392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423392__$1,(2),c,inst_423388);
} else {
if((state_val_423393 === (2))){
var inst_423390 = (state_423392[(2)]);
var state_423392__$1 = state_423392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423392__$1,inst_423390);
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
var statearr_423397 = [null,null,null,null,null,null,null];
(statearr_423397[(0)] = ui$core$get_historical_events_$_state_machine__40145__auto__);

(statearr_423397[(1)] = (1));

return statearr_423397;
});
var ui$core$get_historical_events_$_state_machine__40145__auto____1 = (function (state_423392){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423398){if((e423398 instanceof Object)){
var ex__40148__auto__ = e423398;
var statearr_423399_423401 = state_423392;
(statearr_423399_423401[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423402 = state_423392;
state_423392 = G__423402;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_historical_events_$_state_machine__40145__auto__ = function(state_423392){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_historical_events_$_state_machine__40145__auto____1.call(this,state_423392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_$_state_machine__40145__auto____0;
ui$core$get_historical_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_$_state_machine__40145__auto____1;
return ui$core$get_historical_events_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_423400 = f__40168__auto__.call(null);
(statearr_423400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423400;
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
return (function (state_423424){
var state_val_423425 = (state_423424[(1)]);
if((state_val_423425 === (1))){
var inst_423418 = (function (){return ((function (state_val_423425,c__40167__auto__,c){
return (function (event){
return cljs.core._EQ_.call(null,event.transactionHash,hash);
});
;})(state_val_423425,c__40167__auto__,c))
})();
var inst_423419 = cljs.core.filter.call(null,inst_423418,result);
var inst_423420 = cljs.core.vec.call(null,inst_423419);
var state_423424__$1 = state_423424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423424__$1,(2),c,inst_423420);
} else {
if((state_val_423425 === (2))){
var inst_423422 = (state_423424[(2)]);
var state_423424__$1 = state_423424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423424__$1,inst_423422);
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
var statearr_423429 = [null,null,null,null,null,null,null];
(statearr_423429[(0)] = ui$core$get_historical_events_hash_$_state_machine__40145__auto__);

(statearr_423429[(1)] = (1));

return statearr_423429;
});
var ui$core$get_historical_events_hash_$_state_machine__40145__auto____1 = (function (state_423424){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423430){if((e423430 instanceof Object)){
var ex__40148__auto__ = e423430;
var statearr_423431_423433 = state_423424;
(statearr_423431_423433[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423434 = state_423424;
state_423424 = G__423434;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_historical_events_hash_$_state_machine__40145__auto__ = function(state_423424){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_hash_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_historical_events_hash_$_state_machine__40145__auto____1.call(this,state_423424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_hash_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_hash_$_state_machine__40145__auto____0;
ui$core$get_historical_events_hash_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_hash_$_state_machine__40145__auto____1;
return ui$core$get_historical_events_hash_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_423432 = f__40168__auto__.call(null);
(statearr_423432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423432;
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
return (function (state_423464){
var state_val_423465 = (state_423464[(1)]);
if((state_val_423465 === (1))){
var inst_423460 = ui.core.wei__GT_eth.call(null,result);
var state_423464__$1 = state_423464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423464__$1,(2),c,inst_423460);
} else {
if((state_val_423465 === (2))){
var inst_423462 = (state_423464[(2)]);
var state_423464__$1 = state_423464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423464__$1,inst_423462);
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
var statearr_423469 = [null,null,null,null,null,null,null];
(statearr_423469[(0)] = ui$core$get_balance_$_state_machine__40145__auto__);

(statearr_423469[(1)] = (1));

return statearr_423469;
});
var ui$core$get_balance_$_state_machine__40145__auto____1 = (function (state_423464){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423470){if((e423470 instanceof Object)){
var ex__40148__auto__ = e423470;
var statearr_423471_423485 = state_423464;
(statearr_423471_423485[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423486 = state_423464;
state_423464 = G__423486;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__40145__auto__ = function(state_423464){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__40145__auto____1.call(this,state_423464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__40145__auto____0;
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__40145__auto____1;
return ui$core$get_balance_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_423472 = f__40168__auto__.call(null);
(statearr_423472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c))
);

return c__40167__auto__;
});})(c))
);
} else {
var c__40167__auto___423487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto___423487,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto___423487,c){
return (function (state_423476){
var state_val_423477 = (state_423476[(1)]);
if((state_val_423477 === (1))){
var state_423476__$1 = state_423476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423476__$1,(2),c,(0));
} else {
if((state_val_423477 === (2))){
var inst_423474 = (state_423476[(2)]);
var state_423476__$1 = state_423476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423476__$1,inst_423474);
} else {
return null;
}
}
});})(c__40167__auto___423487,c))
;
return ((function (switch__40144__auto__,c__40167__auto___423487,c){
return (function() {
var ui$core$get_balance_$_state_machine__40145__auto__ = null;
var ui$core$get_balance_$_state_machine__40145__auto____0 = (function (){
var statearr_423481 = [null,null,null,null,null,null,null];
(statearr_423481[(0)] = ui$core$get_balance_$_state_machine__40145__auto__);

(statearr_423481[(1)] = (1));

return statearr_423481;
});
var ui$core$get_balance_$_state_machine__40145__auto____1 = (function (state_423476){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423482){if((e423482 instanceof Object)){
var ex__40148__auto__ = e423482;
var statearr_423483_423488 = state_423476;
(statearr_423483_423488[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423489 = state_423476;
state_423476 = G__423489;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__40145__auto__ = function(state_423476){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__40145__auto____1.call(this,state_423476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__40145__auto____0;
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__40145__auto____1;
return ui$core$get_balance_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto___423487,c))
})();
var state__40169__auto__ = (function (){var statearr_423484 = f__40168__auto__.call(null);
(statearr_423484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto___423487);

return statearr_423484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto___423487,c))
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
return (function (state_423507){
var state_val_423508 = (state_423507[(1)]);
if((state_val_423508 === (1))){
var inst_423503 = cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var state_423507__$1 = state_423507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423507__$1,(2),c,inst_423503);
} else {
if((state_val_423508 === (2))){
var inst_423505 = (state_423507[(2)]);
var state_423507__$1 = state_423507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423507__$1,inst_423505);
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
var statearr_423512 = [null,null,null,null,null,null,null];
(statearr_423512[(0)] = ui$core$get_block_$_state_machine__40145__auto__);

(statearr_423512[(1)] = (1));

return statearr_423512;
});
var ui$core$get_block_$_state_machine__40145__auto____1 = (function (state_423507){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423513){if((e423513 instanceof Object)){
var ex__40148__auto__ = e423513;
var statearr_423514_423516 = state_423507;
(statearr_423514_423516[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423517 = state_423507;
state_423507 = G__423517;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_block_$_state_machine__40145__auto__ = function(state_423507){
switch(arguments.length){
case 0:
return ui$core$get_block_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_block_$_state_machine__40145__auto____1.call(this,state_423507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_block_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_block_$_state_machine__40145__auto____0;
ui$core$get_block_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_block_$_state_machine__40145__auto____1;
return ui$core$get_block_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_423515 = f__40168__auto__.call(null);
(statearr_423515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423515;
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
return (function (state_423533){
var state_val_423534 = (state_423533[(1)]);
if((state_val_423534 === (1))){
var state_423533__$1 = state_423533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423533__$1,(2),c,result);
} else {
if((state_val_423534 === (2))){
var inst_423531 = (state_423533[(2)]);
var state_423533__$1 = state_423533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423533__$1,inst_423531);
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
var statearr_423538 = [null,null,null,null,null,null,null];
(statearr_423538[(0)] = ui$core$block_number_$_state_machine__40145__auto__);

(statearr_423538[(1)] = (1));

return statearr_423538;
});
var ui$core$block_number_$_state_machine__40145__auto____1 = (function (state_423533){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423539){if((e423539 instanceof Object)){
var ex__40148__auto__ = e423539;
var statearr_423540_423542 = state_423533;
(statearr_423540_423542[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423543 = state_423533;
state_423533 = G__423543;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$block_number_$_state_machine__40145__auto__ = function(state_423533){
switch(arguments.length){
case 0:
return ui$core$block_number_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$block_number_$_state_machine__40145__auto____1.call(this,state_423533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$block_number_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$block_number_$_state_machine__40145__auto____0;
ui$core$block_number_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$block_number_$_state_machine__40145__auto____1;
return ui$core$block_number_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_423541 = f__40168__auto__.call(null);
(statearr_423541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423541;
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
return (function (state_423572){
var state_val_423573 = (state_423572[(1)]);
if((state_val_423573 === (1))){
var inst_423563 = (function (){return ((function (state_val_423573,c__40167__auto__){
return (function (x){
return web3.toAscii(x);
});
;})(state_val_423573,c__40167__auto__))
})();
var inst_423564 = ui.core.query_events.call(null,ui.core.etherean,proposal_block,proposal_block,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({"proposalIndex": proposal_index}));
var state_423572__$1 = (function (){var statearr_423574 = state_423572;
(statearr_423574[(7)] = inst_423563);

return statearr_423574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423572__$1,(2),inst_423564);
} else {
if((state_val_423573 === (2))){
var inst_423563 = (state_423572[(7)]);
var inst_423566 = (state_423572[(2)]);
var inst_423567 = inst_423566.args;
var inst_423568 = inst_423567.message;
var inst_423569 = cljs.core.map.call(null,inst_423563,inst_423568);
var inst_423570 = cljs.core.first.call(null,inst_423569);
var state_423572__$1 = state_423572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423572__$1,inst_423570);
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
var statearr_423578 = [null,null,null,null,null,null,null,null];
(statearr_423578[(0)] = ui$core$get_proposal_description_$_state_machine__40145__auto__);

(statearr_423578[(1)] = (1));

return statearr_423578;
});
var ui$core$get_proposal_description_$_state_machine__40145__auto____1 = (function (state_423572){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423579){if((e423579 instanceof Object)){
var ex__40148__auto__ = e423579;
var statearr_423580_423582 = state_423572;
(statearr_423580_423582[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423583 = state_423572;
state_423572 = G__423583;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_proposal_description_$_state_machine__40145__auto__ = function(state_423572){
switch(arguments.length){
case 0:
return ui$core$get_proposal_description_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_proposal_description_$_state_machine__40145__auto____1.call(this,state_423572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_proposal_description_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_proposal_description_$_state_machine__40145__auto____0;
ui$core$get_proposal_description_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_proposal_description_$_state_machine__40145__auto____1;
return ui$core$get_proposal_description_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_423581 = f__40168__auto__.call(null);
(statearr_423581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423581;
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
return (function (state_423588){
var state_val_423589 = (state_423588[(1)]);
if((state_val_423589 === (1))){
var inst_423584 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"useUpProposalVote","useUpProposalVote",352109759));
var state_423588__$1 = state_423588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423588__$1,(2),inst_423584);
} else {
if((state_val_423589 === (2))){
var inst_423586 = (state_423588[(2)]);
var state_423588__$1 = state_423588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423588__$1,inst_423586);
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
var statearr_423593 = [null,null,null,null,null,null,null];
(statearr_423593[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423593[(1)] = (1));

return statearr_423593;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423588){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423594){if((e423594 instanceof Object)){
var ex__40148__auto__ = e423594;
var statearr_423595_423597 = state_423588;
(statearr_423595_423597[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423598 = state_423588;
state_423588 = G__423598;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423588){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_423596 = f__40168__auto__.call(null);
(statearr_423596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),(function (env,dispatch_key,params){
var map__423599 = env;
var map__423599__$1 = ((((!((map__423599 == null)))?((((map__423599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423599):map__423599);
var proposal = cljs.core.get.call(null,map__423599__$1,new cljs.core.Keyword(null,"proposal","proposal",142522715));
var proposal_id = cljs.core.get.call(null,map__423599__$1,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_proposal_description.call(null,((proposal[(3)]) | (0)),new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env))], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_423605){
var state_val_423606 = (state_423605[(1)]);
if((state_val_423606 === (1))){
var inst_423601 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_423602 = cljs.core.nth.call(null,inst_423601,(0));
var inst_423603 = ui.core.wei__GT_eth.call(null,inst_423602);
var state_423605__$1 = state_423605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423605__$1,inst_423603);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_423610 = [null,null,null,null,null,null,null];
(statearr_423610[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423610[(1)] = (1));

return statearr_423610;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423605){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423611){if((e423611 instanceof Object)){
var ex__40148__auto__ = e423611;
var statearr_423612_423614 = state_423605;
(statearr_423612_423614[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423615 = state_423605;
state_423605 = G__423615;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423605){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_423613 = f__40168__auto__.call(null);
(statearr_423613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423613;
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
return (function (state_423620){
var state_val_423621 = (state_423620[(1)]);
if((state_val_423621 === (1))){
var inst_423616 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_423617 = cljs.core.nth.call(null,inst_423616,(1));
var inst_423618 = ui.core.wei__GT_eth.call(null,inst_423617);
var state_423620__$1 = state_423620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423620__$1,inst_423618);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_423625 = [null,null,null,null,null,null,null];
(statearr_423625[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423625[(1)] = (1));

return statearr_423625;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423620){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423626){if((e423626 instanceof Object)){
var ex__40148__auto__ = e423626;
var statearr_423627_423629 = state_423620;
(statearr_423627_423629[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423630 = state_423620;
state_423620 = G__423630;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423620){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_423628 = f__40168__auto__.call(null);
(statearr_423628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423628;
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
return (function (state_423638){
var state_val_423639 = (state_423638[(1)]);
if((state_val_423639 === (1))){
var inst_423631 = (state_423638[(7)]);
var inst_423631__$1 = new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env);
var state_423638__$1 = (function (){var statearr_423640 = state_423638;
(statearr_423640[(7)] = inst_423631__$1);

return statearr_423640;
})();
if(cljs.core.truth_(inst_423631__$1)){
var statearr_423641_423652 = state_423638__$1;
(statearr_423641_423652[(1)] = (2));

} else {
var statearr_423642_423653 = state_423638__$1;
(statearr_423642_423653[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423639 === (2))){
var inst_423631 = (state_423638[(7)]);
var state_423638__$1 = state_423638;
var statearr_423643_423654 = state_423638__$1;
(statearr_423643_423654[(2)] = inst_423631);

(statearr_423643_423654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423639 === (3))){
var inst_423634 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var state_423638__$1 = state_423638;
var statearr_423644_423655 = state_423638__$1;
(statearr_423644_423655[(2)] = inst_423634);

(statearr_423644_423655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423639 === (4))){
var inst_423636 = (state_423638[(2)]);
var state_423638__$1 = state_423638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423638__$1,inst_423636);
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
var statearr_423648 = [null,null,null,null,null,null,null,null];
(statearr_423648[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423648[(1)] = (1));

return statearr_423648;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423638){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423649){if((e423649 instanceof Object)){
var ex__40148__auto__ = e423649;
var statearr_423650_423656 = state_423638;
(statearr_423650_423656[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423657 = state_423638;
state_423638 = G__423657;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423638){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_423651 = f__40168__auto__.call(null);
(statearr_423651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423651;
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
return (function (state_423665){
var state_val_423666 = (state_423665[(1)]);
if((state_val_423666 === (1))){
var inst_423658 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_423659 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132)];
var inst_423660 = [(0),"bar",(10),(5)];
var inst_423661 = cljs.core.PersistentHashMap.fromArrays(inst_423659,inst_423660);
var inst_423662 = [inst_423661];
var inst_423663 = (new cljs.core.PersistentVector(null,1,(5),inst_423658,inst_423662,null));
var state_423665__$1 = state_423665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423665__$1,inst_423663);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_423670 = [null,null,null,null,null,null,null];
(statearr_423670[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423670[(1)] = (1));

return statearr_423670;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423665){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423671){if((e423671 instanceof Object)){
var ex__40148__auto__ = e423671;
var statearr_423672_423798 = state_423665;
(statearr_423672_423798[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423799 = state_423665;
state_423665 = G__423799;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423665){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_423673 = f__40168__auto__.call(null);
(statearr_423673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})():(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_423751){
var state_val_423752 = (state_423751[(1)]);
if((state_val_423752 === (7))){
var inst_423686 = (state_423751[(2)]);
var state_423751__$1 = state_423751;
var statearr_423753_423800 = state_423751__$1;
(statearr_423753_423800[(2)] = inst_423686);

(statearr_423753_423800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423752 === (1))){
var inst_423676 = (env == null);
var inst_423677 = cljs.core.not.call(null,inst_423676);
var state_423751__$1 = state_423751;
if(inst_423677){
var statearr_423754_423801 = state_423751__$1;
(statearr_423754_423801[(1)] = (2));

} else {
var statearr_423755_423802 = state_423751__$1;
(statearr_423755_423802[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423752 === (4))){
var inst_423689 = (state_423751[(2)]);
var state_423751__$1 = state_423751;
if(cljs.core.truth_(inst_423689)){
var statearr_423756_423803 = state_423751__$1;
(statearr_423756_423803[(1)] = (8));

} else {
var statearr_423757_423804 = state_423751__$1;
(statearr_423757_423804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423752 === (13))){
var inst_423746 = (state_423751[(2)]);
var inst_423747 = cljs.core.sort_by.call(null,cljs.core.first,inst_423746);
var inst_423748 = cljs.core.map.call(null,cljs.core.second,inst_423747);
var inst_423749 = cljs.core.vec.call(null,inst_423748);
var state_423751__$1 = state_423751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423751__$1,inst_423749);
} else {
if((state_val_423752 === (6))){
var state_423751__$1 = state_423751;
var statearr_423758_423805 = state_423751__$1;
(statearr_423758_423805[(2)] = false);

(statearr_423758_423805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423752 === (3))){
var state_423751__$1 = state_423751;
var statearr_423759_423806 = state_423751__$1;
(statearr_423759_423806[(2)] = false);

(statearr_423759_423806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423752 === (12))){
var inst_423700 = (state_423751[(7)]);
var inst_423694 = (state_423751[(8)]);
var inst_423696 = (state_423751[(9)]);
var inst_423695 = (state_423751[(10)]);
var inst_423703 = (state_423751[(2)]);
var inst_423704 = (inst_423703 | (0));
var inst_423705 = cljs.core.async.chan.call(null);
var inst_423738 = cljs.core.async.chan.call(null,(1));
var inst_423739 = (function (){var map__423674 = inst_423694;
var parser = inst_423695;
var query = inst_423696;
var len = inst_423700;
var time = inst_423704;
var proposals = inst_423705;
var c__40167__auto____$1 = inst_423738;
return ((function (map__423674,parser,query,len,time,proposals,c__40167__auto____$1,inst_423700,inst_423694,inst_423696,inst_423695,inst_423703,inst_423704,inst_423705,inst_423738,state_val_423752,c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (map__423674,parser,query,len,time,proposals,c__40167__auto____$1,inst_423700,inst_423694,inst_423696,inst_423695,inst_423703,inst_423704,inst_423705,inst_423738,state_val_423752,c__40167__auto__){
return (function (state_423736){
var state_val_423737 = (state_423736[(1)]);
if((state_val_423737 === (7))){
var inst_423713 = (state_423736[(7)]);
var inst_423713__$1 = (state_423736[(2)]);
var inst_423714 = (inst_423713__$1[(2)]);
var inst_423715 = (inst_423714 | (0));
var inst_423716 = cljs.core._EQ_.call(null,time,inst_423715);
var state_423736__$1 = (function (){var statearr_423760 = state_423736;
(statearr_423760[(7)] = inst_423713__$1);

return statearr_423760;
})();
if(inst_423716){
var statearr_423761_423807 = state_423736__$1;
(statearr_423761_423807[(1)] = (8));

} else {
var statearr_423762_423808 = state_423736__$1;
(statearr_423762_423808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423737 === (1))){
var inst_423706 = (len - (1));
var inst_423707 = inst_423706;
var state_423736__$1 = (function (){var statearr_423763 = state_423736;
(statearr_423763[(8)] = inst_423707);

return statearr_423763;
})();
var statearr_423764_423809 = state_423736__$1;
(statearr_423764_423809[(2)] = null);

(statearr_423764_423809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423737 === (4))){
var inst_423707 = (state_423736[(8)]);
var inst_423711 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),inst_423707);
var state_423736__$1 = state_423736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423736__$1,(7),inst_423711);
} else {
if((state_val_423737 === (6))){
var inst_423731 = (state_423736[(2)]);
var state_423736__$1 = state_423736;
var statearr_423765_423810 = state_423736__$1;
(statearr_423765_423810[(2)] = inst_423731);

(statearr_423765_423810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423737 === (3))){
var inst_423733 = (state_423736[(2)]);
var inst_423734 = cljs.core.async.close_BANG_.call(null,proposals);
var state_423736__$1 = (function (){var statearr_423766 = state_423736;
(statearr_423766[(9)] = inst_423733);

return statearr_423766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423736__$1,inst_423734);
} else {
if((state_val_423737 === (12))){
var inst_423721 = (state_423736[(2)]);
var state_423736__$1 = state_423736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_423736__$1,(11),proposals,inst_423721);
} else {
if((state_val_423737 === (2))){
var inst_423707 = (state_423736[(8)]);
var inst_423709 = (inst_423707 >= (0));
var state_423736__$1 = state_423736;
if(cljs.core.truth_(inst_423709)){
var statearr_423767_423811 = state_423736__$1;
(statearr_423767_423811[(1)] = (4));

} else {
var statearr_423768_423812 = state_423736__$1;
(statearr_423768_423812[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423737 === (11))){
var inst_423707 = (state_423736[(8)]);
var inst_423723 = (state_423736[(2)]);
var inst_423724 = (inst_423707 - (1));
var inst_423707__$1 = inst_423724;
var state_423736__$1 = (function (){var statearr_423769 = state_423736;
(statearr_423769[(8)] = inst_423707__$1);

(statearr_423769[(10)] = inst_423723);

return statearr_423769;
})();
var statearr_423770_423813 = state_423736__$1;
(statearr_423770_423813[(2)] = null);

(statearr_423770_423813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423737 === (9))){
var state_423736__$1 = state_423736;
var statearr_423771_423814 = state_423736__$1;
(statearr_423771_423814[(2)] = null);

(statearr_423771_423814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423737 === (5))){
var state_423736__$1 = state_423736;
var statearr_423772_423815 = state_423736__$1;
(statearr_423772_423815[(2)] = null);

(statearr_423772_423815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423737 === (10))){
var inst_423728 = (state_423736[(2)]);
var state_423736__$1 = state_423736;
var statearr_423773_423816 = state_423736__$1;
(statearr_423773_423816[(2)] = inst_423728);

(statearr_423773_423816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423737 === (8))){
var inst_423713 = (state_423736[(7)]);
var inst_423707 = (state_423736[(8)]);
var inst_423718 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),inst_423713,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155),inst_423707);
var inst_423719 = parser.call(null,inst_423718,query);
var state_423736__$1 = state_423736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423736__$1,(12),inst_423719);
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
});})(map__423674,parser,query,len,time,proposals,c__40167__auto____$1,inst_423700,inst_423694,inst_423696,inst_423695,inst_423703,inst_423704,inst_423705,inst_423738,state_val_423752,c__40167__auto__))
;
return ((function (switch__40144__auto__,map__423674,parser,query,len,time,proposals,c__40167__auto____$1,inst_423700,inst_423694,inst_423696,inst_423695,inst_423703,inst_423704,inst_423705,inst_423738,state_val_423752,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_423777 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_423777[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423777[(1)] = (1));

return statearr_423777;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423736){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423778){if((e423778 instanceof Object)){
var ex__40148__auto__ = e423778;
var statearr_423779_423817 = state_423736;
(statearr_423779_423817[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423818 = state_423736;
state_423736 = G__423818;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423736){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,map__423674,parser,query,len,time,proposals,c__40167__auto____$1,inst_423700,inst_423694,inst_423696,inst_423695,inst_423703,inst_423704,inst_423705,inst_423738,state_val_423752,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_423780 = f__40168__auto__.call(null);
(statearr_423780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto____$1);

return statearr_423780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});
;})(map__423674,parser,query,len,time,proposals,c__40167__auto____$1,inst_423700,inst_423694,inst_423696,inst_423695,inst_423703,inst_423704,inst_423705,inst_423738,state_val_423752,c__40167__auto__))
})();
var inst_423740 = cljs.core.async.impl.dispatch.run.call(null,inst_423739);
var inst_423742 = (function (){var map__423674 = inst_423694;
var parser = inst_423695;
var query = inst_423696;
var len = inst_423700;
var time = inst_423704;
var proposals = inst_423705;
return ((function (map__423674,parser,query,len,time,proposals,inst_423700,inst_423694,inst_423696,inst_423695,inst_423703,inst_423704,inst_423705,inst_423738,inst_423739,inst_423740,state_val_423752,c__40167__auto__){
return (function (acc,p__423741){
var map__423781 = p__423741;
var map__423781__$1 = ((((!((map__423781 == null)))?((((map__423781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423781):map__423781);
var item = map__423781__$1;
var id = cljs.core.get.call(null,map__423781__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.assoc.call(null,acc,id,item);
});
;})(map__423674,parser,query,len,time,proposals,inst_423700,inst_423694,inst_423696,inst_423695,inst_423703,inst_423704,inst_423705,inst_423738,inst_423739,inst_423740,state_val_423752,c__40167__auto__))
})();
var inst_423743 = cljs.core.PersistentHashMap.EMPTY;
var inst_423744 = cljs.core.async.reduce.call(null,inst_423742,inst_423743,inst_423705);
var state_423751__$1 = (function (){var statearr_423783 = state_423751;
(statearr_423783[(11)] = inst_423740);

return statearr_423783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423751__$1,(13),inst_423744);
} else {
if((state_val_423752 === (2))){
var inst_423679 = env.cljs$lang$protocol_mask$partition0$;
var inst_423680 = (inst_423679 & (64));
var inst_423681 = env.cljs$core$ISeq$;
var inst_423682 = (inst_423680) || (inst_423681);
var state_423751__$1 = state_423751;
if(cljs.core.truth_(inst_423682)){
var statearr_423784_423819 = state_423751__$1;
(statearr_423784_423819[(1)] = (5));

} else {
var statearr_423785_423820 = state_423751__$1;
(statearr_423785_423820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423752 === (11))){
var inst_423699 = (state_423751[(2)]);
var inst_423700 = (inst_423699 | (0));
var inst_423701 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"startOfDay","startOfDay",-1097735630));
var state_423751__$1 = (function (){var statearr_423786 = state_423751;
(statearr_423786[(7)] = inst_423700);

return statearr_423786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423751__$1,(12),inst_423701);
} else {
if((state_val_423752 === (9))){
var state_423751__$1 = state_423751;
var statearr_423787_423821 = state_423751__$1;
(statearr_423787_423821[(2)] = env);

(statearr_423787_423821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423752 === (5))){
var state_423751__$1 = state_423751;
var statearr_423788_423822 = state_423751__$1;
(statearr_423788_423822[(2)] = true);

(statearr_423788_423822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423752 === (10))){
var inst_423694 = (state_423751[(8)]);
var inst_423694__$1 = (state_423751[(2)]);
var inst_423695 = cljs.core.get.call(null,inst_423694__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_423696 = cljs.core.get.call(null,inst_423694__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_423697 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposalsLength","proposalsLength",1061236851));
var state_423751__$1 = (function (){var statearr_423789 = state_423751;
(statearr_423789[(8)] = inst_423694__$1);

(statearr_423789[(9)] = inst_423696);

(statearr_423789[(10)] = inst_423695);

return statearr_423789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423751__$1,(11),inst_423697);
} else {
if((state_val_423752 === (8))){
var inst_423691 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_423751__$1 = state_423751;
var statearr_423790_423823 = state_423751__$1;
(statearr_423790_423823[(2)] = inst_423691);

(statearr_423790_423823[(1)] = (10));


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
var statearr_423794 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_423794[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423794[(1)] = (1));

return statearr_423794;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423751){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423795){if((e423795 instanceof Object)){
var ex__40148__auto__ = e423795;
var statearr_423796_423824 = state_423751;
(statearr_423796_423824[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423825 = state_423751;
state_423751 = G__423825;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423751){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_423797 = f__40168__auto__.call(null);
(statearr_423797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__423826__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__423826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__423827__i = 0, G__423827__a = new Array(arguments.length -  0);
while (G__423827__i < G__423827__a.length) {G__423827__a[G__423827__i] = arguments[G__423827__i + 0]; ++G__423827__i;}
  args = new cljs.core.IndexedSeq(G__423827__a,0);
} 
return G__423826__delegate.call(this,args);};
G__423826.cljs$lang$maxFixedArity = 0;
G__423826.cljs$lang$applyTo = (function (arglist__423828){
var args = cljs.core.seq(arglist__423828);
return G__423826__delegate(args);
});
G__423826.cljs$core$IFn$_invoke$arity$variadic = G__423826__delegate;
return G__423826;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),(function() { 
var G__423829__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__423829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__423830__i = 0, G__423830__a = new Array(arguments.length -  0);
while (G__423830__i < G__423830__a.length) {G__423830__a[G__423830__i] = arguments[G__423830__i + 0]; ++G__423830__i;}
  args = new cljs.core.IndexedSeq(G__423830__a,0);
} 
return G__423829__delegate.call(this,args);};
G__423829.cljs$lang$maxFixedArity = 0;
G__423829.cljs$lang$applyTo = (function (arglist__423831){
var args = cljs.core.seq(arglist__423831);
return G__423829__delegate(args);
});
G__423829.cljs$core$IFn$_invoke$arity$variadic = G__423829__delegate;
return G__423829;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_423839){
var state_val_423840 = (state_423839[(1)]);
if((state_val_423840 === (1))){
var inst_423832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_423833 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031),new cljs.core.Keyword("stake","address","stake/address",680266700)];
var inst_423834 = [(0),(1000),"12345"];
var inst_423835 = cljs.core.PersistentHashMap.fromArrays(inst_423833,inst_423834);
var inst_423836 = [inst_423835];
var inst_423837 = (new cljs.core.PersistentVector(null,1,(5),inst_423832,inst_423836,null));
var state_423839__$1 = state_423839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423839__$1,inst_423837);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_423844 = [null,null,null,null,null,null,null];
(statearr_423844[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423844[(1)] = (1));

return statearr_423844;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423839){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423845){if((e423845 instanceof Object)){
var ex__40148__auto__ = e423845;
var statearr_423846_423975 = state_423839;
(statearr_423846_423975[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423976 = state_423839;
state_423839 = G__423976;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423839){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_423847 = f__40168__auto__.call(null);
(statearr_423847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})():(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_423933){
var state_val_423934 = (state_423933[(1)]);
if((state_val_423934 === (7))){
var inst_423871 = (state_423933[(2)]);
var inst_423872 = cljs.core.range.call(null,inst_423871);
var inst_423873 = cljs.core.seq.call(null,inst_423872);
var inst_423874 = inst_423873;
var inst_423875 = null;
var inst_423876 = (0);
var inst_423877 = (0);
var state_423933__$1 = (function (){var statearr_423935 = state_423933;
(statearr_423935[(7)] = inst_423874);

(statearr_423935[(8)] = inst_423877);

(statearr_423935[(9)] = inst_423875);

(statearr_423935[(10)] = inst_423876);

return statearr_423935;
})();
var statearr_423936_423977 = state_423933__$1;
(statearr_423936_423977[(2)] = null);

(statearr_423936_423977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (20))){
var inst_423923 = (state_423933[(2)]);
var state_423933__$1 = state_423933;
var statearr_423937_423978 = state_423933__$1;
(statearr_423937_423978[(2)] = inst_423923);

(statearr_423937_423978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (1))){
var inst_423848 = cljs.core.PersistentVector.EMPTY;
var inst_423849 = cljs.core.atom.call(null,inst_423848);
var inst_423850 = ui.core.get_network.call(null);
var state_423933__$1 = (function (){var statearr_423938 = state_423933;
(statearr_423938[(11)] = inst_423849);

return statearr_423938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423933__$1,(2),inst_423850);
} else {
if((state_val_423934 === (4))){
var inst_423860 = alert("Fatal Error: EthereanMind is missing data on the blockchain. Please make sure you have MetaMask set to the \"Ethereum Ropsten Test Network\".\n\n(Other possible reasons for this error may include an ongoing blockchain attack or an outage of the Infuria system.)");
var state_423933__$1 = state_423933;
var statearr_423939_423979 = state_423933__$1;
(statearr_423939_423979[(2)] = inst_423860);

(statearr_423939_423979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (15))){
var inst_423898 = (state_423933[(12)]);
var inst_423900 = cljs.core.chunked_seq_QMARK_.call(null,inst_423898);
var state_423933__$1 = state_423933;
if(inst_423900){
var statearr_423940_423980 = state_423933__$1;
(statearr_423940_423980[(1)] = (18));

} else {
var statearr_423941_423981 = state_423933__$1;
(statearr_423941_423981[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (21))){
var inst_423864 = (state_423933[(13)]);
var inst_423910 = (state_423933[(14)]);
var inst_423910__$1 = (state_423933[(2)]);
var inst_423911 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_423912 = ui.core.chan_call.call(null,inst_423864,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_423910__$1);
var state_423933__$1 = (function (){var statearr_423942 = state_423933;
(statearr_423942[(15)] = inst_423911);

(statearr_423942[(14)] = inst_423910__$1);

return statearr_423942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423933__$1,(22),inst_423912);
} else {
if((state_val_423934 === (13))){
var inst_423885 = (state_423933[(16)]);
var inst_423864 = (state_423933[(13)]);
var inst_423885__$1 = (state_423933[(2)]);
var inst_423886 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_423887 = ui.core.chan_call.call(null,inst_423864,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_423885__$1);
var state_423933__$1 = (function (){var statearr_423943 = state_423933;
(statearr_423943[(16)] = inst_423885__$1);

(statearr_423943[(17)] = inst_423886);

return statearr_423943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423933__$1,(14),inst_423887);
} else {
if((state_val_423934 === (22))){
var inst_423911 = (state_423933[(15)]);
var inst_423898 = (state_423933[(12)]);
var inst_423849 = (state_423933[(11)]);
var inst_423910 = (state_423933[(14)]);
var inst_423914 = (state_423933[(2)]);
var inst_423915 = (inst_423914[(0)]);
var inst_423916 = ui.core.wei__GT_eth.call(null,inst_423915);
var inst_423917 = [inst_423910,inst_423916];
var inst_423918 = cljs.core.PersistentHashMap.fromArrays(inst_423911,inst_423917);
var inst_423919 = cljs.core.swap_BANG_.call(null,inst_423849,cljs.core.conj,inst_423918);
var inst_423920 = cljs.core.next.call(null,inst_423898);
var inst_423874 = inst_423920;
var inst_423875 = null;
var inst_423876 = (0);
var inst_423877 = (0);
var state_423933__$1 = (function (){var statearr_423944 = state_423933;
(statearr_423944[(7)] = inst_423874);

(statearr_423944[(8)] = inst_423877);

(statearr_423944[(18)] = inst_423919);

(statearr_423944[(9)] = inst_423875);

(statearr_423944[(10)] = inst_423876);

return statearr_423944;
})();
var statearr_423945_423982 = state_423933__$1;
(statearr_423945_423982[(2)] = null);

(statearr_423945_423982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (6))){
var inst_423864 = (state_423933[(13)]);
var inst_423855 = (state_423933[(19)]);
var inst_423863 = (state_423933[(2)]);
var inst_423864__$1 = ui.core.contract.call(null,ui.contract.staking_abi,inst_423855);
var inst_423869 = ui.core.chan_call.call(null,inst_423864__$1,new cljs.core.Keyword(null,"depositLength","depositLength",788194150));
var state_423933__$1 = (function (){var statearr_423946 = state_423933;
(statearr_423946[(13)] = inst_423864__$1);

(statearr_423946[(20)] = inst_423863);

return statearr_423946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423933__$1,(7),inst_423869);
} else {
if((state_val_423934 === (17))){
var inst_423926 = (state_423933[(2)]);
var state_423933__$1 = state_423933;
var statearr_423947_423983 = state_423933__$1;
(statearr_423947_423983[(2)] = inst_423926);

(statearr_423947_423983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (3))){
var inst_423852 = (state_423933[(21)]);
var inst_423855 = (state_423933[(19)]);
var inst_423855__$1 = (state_423933[(2)]);
var inst_423856 = cljs.core._EQ_.call(null,inst_423852,(3));
var inst_423857 = cljs.core._EQ_.call(null,inst_423855__$1,"0x");
var inst_423858 = (inst_423856) && (inst_423857);
var state_423933__$1 = (function (){var statearr_423948 = state_423933;
(statearr_423948[(19)] = inst_423855__$1);

return statearr_423948;
})();
if(cljs.core.truth_(inst_423858)){
var statearr_423949_423984 = state_423933__$1;
(statearr_423949_423984[(1)] = (4));

} else {
var statearr_423950_423985 = state_423933__$1;
(statearr_423950_423985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (12))){
var inst_423928 = (state_423933[(2)]);
var state_423933__$1 = state_423933;
var statearr_423951_423986 = state_423933__$1;
(statearr_423951_423986[(2)] = inst_423928);

(statearr_423951_423986[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (2))){
var inst_423852 = (state_423933[(2)]);
var inst_423853 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_423933__$1 = (function (){var statearr_423952 = state_423933;
(statearr_423952[(21)] = inst_423852);

return statearr_423952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423933__$1,(3),inst_423853);
} else {
if((state_val_423934 === (19))){
var inst_423898 = (state_423933[(12)]);
var inst_423864 = (state_423933[(13)]);
var inst_423907 = cljs.core.first.call(null,inst_423898);
var inst_423908 = ui.core.chan_call.call(null,inst_423864,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_423907);
var state_423933__$1 = state_423933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423933__$1,(21),inst_423908);
} else {
if((state_val_423934 === (11))){
var inst_423874 = (state_423933[(7)]);
var inst_423898 = (state_423933[(12)]);
var inst_423898__$1 = cljs.core.seq.call(null,inst_423874);
var state_423933__$1 = (function (){var statearr_423953 = state_423933;
(statearr_423953[(12)] = inst_423898__$1);

return statearr_423953;
})();
if(inst_423898__$1){
var statearr_423954_423987 = state_423933__$1;
(statearr_423954_423987[(1)] = (15));

} else {
var statearr_423955_423988 = state_423933__$1;
(statearr_423955_423988[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (9))){
var inst_423849 = (state_423933[(11)]);
var inst_423930 = (state_423933[(2)]);
var inst_423931 = cljs.core.deref.call(null,inst_423849);
var state_423933__$1 = (function (){var statearr_423959 = state_423933;
(statearr_423959[(22)] = inst_423930);

return statearr_423959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423933__$1,inst_423931);
} else {
if((state_val_423934 === (5))){
var state_423933__$1 = state_423933;
var statearr_423960_423989 = state_423933__$1;
(statearr_423960_423989[(2)] = null);

(statearr_423960_423989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (14))){
var inst_423874 = (state_423933[(7)]);
var inst_423885 = (state_423933[(16)]);
var inst_423849 = (state_423933[(11)]);
var inst_423877 = (state_423933[(8)]);
var inst_423886 = (state_423933[(17)]);
var inst_423875 = (state_423933[(9)]);
var inst_423876 = (state_423933[(10)]);
var inst_423889 = (state_423933[(2)]);
var inst_423890 = (inst_423889[(0)]);
var inst_423891 = ui.core.wei__GT_eth.call(null,inst_423890);
var inst_423892 = [inst_423885,inst_423891];
var inst_423893 = cljs.core.PersistentHashMap.fromArrays(inst_423886,inst_423892);
var inst_423894 = cljs.core.swap_BANG_.call(null,inst_423849,cljs.core.conj,inst_423893);
var inst_423895 = (inst_423877 + (1));
var tmp423956 = inst_423874;
var tmp423957 = inst_423875;
var tmp423958 = inst_423876;
var inst_423874__$1 = tmp423956;
var inst_423875__$1 = tmp423957;
var inst_423876__$1 = tmp423958;
var inst_423877__$1 = inst_423895;
var state_423933__$1 = (function (){var statearr_423961 = state_423933;
(statearr_423961[(23)] = inst_423894);

(statearr_423961[(7)] = inst_423874__$1);

(statearr_423961[(8)] = inst_423877__$1);

(statearr_423961[(9)] = inst_423875__$1);

(statearr_423961[(10)] = inst_423876__$1);

return statearr_423961;
})();
var statearr_423962_423990 = state_423933__$1;
(statearr_423962_423990[(2)] = null);

(statearr_423962_423990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (16))){
var state_423933__$1 = state_423933;
var statearr_423963_423991 = state_423933__$1;
(statearr_423963_423991[(2)] = null);

(statearr_423963_423991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (10))){
var inst_423877 = (state_423933[(8)]);
var inst_423864 = (state_423933[(13)]);
var inst_423875 = (state_423933[(9)]);
var inst_423882 = cljs.core._nth.call(null,inst_423875,inst_423877);
var inst_423883 = ui.core.chan_call.call(null,inst_423864,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_423882);
var state_423933__$1 = state_423933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_423933__$1,(13),inst_423883);
} else {
if((state_val_423934 === (18))){
var inst_423898 = (state_423933[(12)]);
var inst_423902 = cljs.core.chunk_first.call(null,inst_423898);
var inst_423903 = cljs.core.chunk_rest.call(null,inst_423898);
var inst_423904 = cljs.core.count.call(null,inst_423902);
var inst_423874 = inst_423903;
var inst_423875 = inst_423902;
var inst_423876 = inst_423904;
var inst_423877 = (0);
var state_423933__$1 = (function (){var statearr_423964 = state_423933;
(statearr_423964[(7)] = inst_423874);

(statearr_423964[(8)] = inst_423877);

(statearr_423964[(9)] = inst_423875);

(statearr_423964[(10)] = inst_423876);

return statearr_423964;
})();
var statearr_423965_423992 = state_423933__$1;
(statearr_423965_423992[(2)] = null);

(statearr_423965_423992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_423934 === (8))){
var inst_423877 = (state_423933[(8)]);
var inst_423876 = (state_423933[(10)]);
var inst_423879 = (inst_423877 < inst_423876);
var inst_423880 = inst_423879;
var state_423933__$1 = state_423933;
if(cljs.core.truth_(inst_423880)){
var statearr_423966_423993 = state_423933__$1;
(statearr_423966_423993[(1)] = (10));

} else {
var statearr_423967_423994 = state_423933__$1;
(statearr_423967_423994[(1)] = (11));

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
var statearr_423971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_423971[(0)] = ui$core$state_machine__40145__auto__);

(statearr_423971[(1)] = (1));

return statearr_423971;
});
var ui$core$state_machine__40145__auto____1 = (function (state_423933){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_423933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e423972){if((e423972 instanceof Object)){
var ex__40148__auto__ = e423972;
var statearr_423973_423995 = state_423933;
(statearr_423973_423995[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e423972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__423996 = state_423933;
state_423933 = G__423996;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_423933){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_423933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_423974 = f__40168__auto__.call(null);
(statearr_423974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_423974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,dispatch_key,params){
var map__423997 = env;
var map__423997__$1 = ((((!((map__423997 == null)))?((((map__423997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__423997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__423997):map__423997);
var item_id = cljs.core.get.call(null,map__423997__$1,new cljs.core.Keyword(null,"item-id","item-id",-1804511607));
var item = cljs.core.get.call(null,map__423997__$1,new cljs.core.Keyword(null,"item","item",249373802));
var update_time = ((item[(1)]) | (0));
var fun = ((function (map__423997,map__423997__$1,item_id,item,update_time){
return (function (index){
if((update_time === (0))){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time){
return (function (state_424013){
var state_val_424014 = (state_424013[(1)]);
if((state_val_424014 === (1))){
var inst_423999 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_424000 = (index === (0));
var state_424013__$1 = (function (){var statearr_424015 = state_424013;
(statearr_424015[(7)] = inst_423999);

return statearr_424015;
})();
if(cljs.core.truth_(inst_424000)){
var statearr_424016_424073 = state_424013__$1;
(statearr_424016_424073[(1)] = (2));

} else {
var statearr_424017_424074 = state_424013__$1;
(statearr_424017_424074[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424014 === (2))){
var state_424013__$1 = state_424013;
var statearr_424018_424075 = state_424013__$1;
(statearr_424018_424075[(2)] = (0));

(statearr_424018_424075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424014 === (3))){
var state_424013__$1 = state_424013;
var statearr_424019_424076 = state_424013__$1;
(statearr_424019_424076[(2)] = 1.0E-4);

(statearr_424019_424076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424014 === (4))){
var inst_424004 = (state_424013[(2)]);
var inst_424005 = (index === (0));
var state_424013__$1 = (function (){var statearr_424020 = state_424013;
(statearr_424020[(8)] = inst_424004);

return statearr_424020;
})();
if(cljs.core.truth_(inst_424005)){
var statearr_424021_424077 = state_424013__$1;
(statearr_424021_424077[(1)] = (5));

} else {
var statearr_424022_424078 = state_424013__$1;
(statearr_424022_424078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424014 === (5))){
var state_424013__$1 = state_424013;
var statearr_424023_424079 = state_424013__$1;
(statearr_424023_424079[(2)] = (0));

(statearr_424023_424079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424014 === (6))){
var state_424013__$1 = state_424013;
var statearr_424024_424080 = state_424013__$1;
(statearr_424024_424080[(2)] = 1.0E-4);

(statearr_424024_424080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424014 === (7))){
var inst_423999 = (state_424013[(7)]);
var inst_424004 = (state_424013[(8)]);
var inst_424009 = (state_424013[(2)]);
var inst_424010 = [inst_424004,inst_424009];
var inst_424011 = cljs.core.PersistentHashMap.fromArrays(inst_423999,inst_424010);
var state_424013__$1 = state_424013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424013__$1,inst_424011);
} else {
return null;
}
}
}
}
}
}
}
});})(c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_424028 = [null,null,null,null,null,null,null,null,null];
(statearr_424028[(0)] = ui$core$state_machine__40145__auto__);

(statearr_424028[(1)] = (1));

return statearr_424028;
});
var ui$core$state_machine__40145__auto____1 = (function (state_424013){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424029){if((e424029 instanceof Object)){
var ex__40148__auto__ = e424029;
var statearr_424030_424081 = state_424013;
(statearr_424030_424081[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424082 = state_424013;
state_424013 = G__424082;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_424013){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_424013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time))
})();
var state__40169__auto__ = (function (){var statearr_424031 = f__40168__auto__.call(null);
(statearr_424031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time))
);

return c__40167__auto__;
} else {
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time){
return (function (state_424043){
var state_val_424044 = (state_424043[(1)]);
if((state_val_424044 === (1))){
var inst_424032 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"itemVoteInfo","itemVoteInfo",-383659653),item_id,index);
var state_424043__$1 = state_424043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424043__$1,(2),inst_424032);
} else {
if((state_val_424044 === (2))){
var inst_424034 = (state_424043[(2)]);
var inst_424035 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_424036 = (inst_424034[(0)]);
var inst_424037 = ui.core.wei__GT_eth.call(null,inst_424036);
var inst_424038 = (inst_424034[(1)]);
var inst_424039 = ui.core.wei__GT_eth.call(null,inst_424038);
var inst_424040 = [inst_424037,inst_424039];
var inst_424041 = cljs.core.PersistentHashMap.fromArrays(inst_424035,inst_424040);
var state_424043__$1 = state_424043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424043__$1,inst_424041);
} else {
return null;
}
}
});})(c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_424048 = [null,null,null,null,null,null,null];
(statearr_424048[(0)] = ui$core$state_machine__40145__auto__);

(statearr_424048[(1)] = (1));

return statearr_424048;
});
var ui$core$state_machine__40145__auto____1 = (function (state_424043){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424049){if((e424049 instanceof Object)){
var ex__40148__auto__ = e424049;
var statearr_424050_424083 = state_424043;
(statearr_424050_424083[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424084 = state_424043;
state_424043 = G__424084;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_424043){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_424043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time))
})();
var state__40169__auto__ = (function (){var statearr_424051 = f__40168__auto__.call(null);
(statearr_424051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time))
);

return c__40167__auto__;
}
});})(map__423997,map__423997__$1,item_id,item,update_time))
;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time,fun){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time,fun){
return (function (state_424062){
var state_val_424063 = (state_424062[(1)]);
if((state_val_424063 === (1))){
var inst_424052 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_424053 = fun.call(null,(0));
var state_424062__$1 = (function (){var statearr_424064 = state_424062;
(statearr_424064[(7)] = inst_424052);

return statearr_424064;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424062__$1,(2),inst_424053);
} else {
if((state_val_424063 === (2))){
var inst_424055 = (state_424062[(2)]);
var inst_424056 = fun.call(null,(1));
var state_424062__$1 = (function (){var statearr_424065 = state_424062;
(statearr_424065[(8)] = inst_424055);

return statearr_424065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424062__$1,(3),inst_424056);
} else {
if((state_val_424063 === (3))){
var inst_424052 = (state_424062[(7)]);
var inst_424055 = (state_424062[(8)]);
var inst_424058 = (state_424062[(2)]);
var inst_424059 = [inst_424055,inst_424058];
var inst_424060 = (new cljs.core.PersistentVector(null,2,(5),inst_424052,inst_424059,null));
var state_424062__$1 = state_424062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424062__$1,inst_424060);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time,fun))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time,fun){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_424069 = [null,null,null,null,null,null,null,null,null];
(statearr_424069[(0)] = ui$core$state_machine__40145__auto__);

(statearr_424069[(1)] = (1));

return statearr_424069;
});
var ui$core$state_machine__40145__auto____1 = (function (state_424062){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424070){if((e424070 instanceof Object)){
var ex__40148__auto__ = e424070;
var statearr_424071_424085 = state_424062;
(statearr_424071_424085[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424086 = state_424062;
state_424062 = G__424086;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_424062){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_424062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time,fun))
})();
var state__40169__auto__ = (function (){var statearr_424072 = f__40168__auto__.call(null);
(statearr_424072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__423997,map__423997__$1,item_id,item,update_time,fun))
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
return (function (state_424103){
var state_val_424104 = (state_424103[(1)]);
if((state_val_424104 === (1))){
var inst_424087 = (proposal_index === (0));
var state_424103__$1 = state_424103;
if(cljs.core.truth_(inst_424087)){
var statearr_424105_424116 = state_424103__$1;
(statearr_424105_424116[(1)] = (2));

} else {
var statearr_424106_424117 = state_424103__$1;
(statearr_424106_424117[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424104 === (2))){
var inst_424089 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var inst_424090 = ui.core.starting_items.call(null,inst_424089);
var state_424103__$1 = state_424103;
var statearr_424107_424118 = state_424103__$1;
(statearr_424107_424118[(2)] = inst_424090);

(statearr_424107_424118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424104 === (3))){
var inst_424092 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),proposal_index);
var state_424103__$1 = state_424103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424103__$1,(5),inst_424092);
} else {
if((state_val_424104 === (4))){
var inst_424101 = (state_424103[(2)]);
var state_424103__$1 = state_424103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424103__$1,inst_424101);
} else {
if((state_val_424104 === (5))){
var inst_424094 = (state_424103[(2)]);
var inst_424095 = (inst_424094[(3)]);
var inst_424096 = (inst_424095 | (0));
var inst_424097 = ui.core.get_proposal_description.call(null,inst_424096,proposal_index);
var state_424103__$1 = state_424103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424103__$1,(6),inst_424097);
} else {
if((state_val_424104 === (6))){
var inst_424099 = (state_424103[(2)]);
var state_424103__$1 = state_424103;
var statearr_424108_424119 = state_424103__$1;
(statearr_424108_424119[(2)] = inst_424099);

(statearr_424108_424119[(1)] = (4));


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
var statearr_424112 = [null,null,null,null,null,null,null];
(statearr_424112[(0)] = ui$core$state_machine__40145__auto__);

(statearr_424112[(1)] = (1));

return statearr_424112;
});
var ui$core$state_machine__40145__auto____1 = (function (state_424103){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424113){if((e424113 instanceof Object)){
var ex__40148__auto__ = e424113;
var statearr_424114_424120 = state_424103;
(statearr_424114_424120[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424121 = state_424103;
state_424103 = G__424121;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_424103){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_424103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,proposal_index,update_time))
})();
var state__40169__auto__ = (function (){var statearr_424115 = f__40168__auto__.call(null);
(statearr_424115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424115;
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
return (function (state_424204){
var state_val_424205 = (state_424204[(1)]);
if((state_val_424205 === (7))){
var inst_424134 = (state_424204[(2)]);
var state_424204__$1 = state_424204;
var statearr_424206_424250 = state_424204__$1;
(statearr_424206_424250[(2)] = inst_424134);

(statearr_424206_424250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (20))){
var inst_424197 = (state_424204[(2)]);
var state_424204__$1 = state_424204;
var statearr_424207_424251 = state_424204__$1;
(statearr_424207_424251[(2)] = inst_424197);

(statearr_424207_424251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (1))){
var inst_424124 = (env == null);
var inst_424125 = cljs.core.not.call(null,inst_424124);
var state_424204__$1 = state_424204;
if(inst_424125){
var statearr_424208_424252 = state_424204__$1;
(statearr_424208_424252[(1)] = (2));

} else {
var statearr_424209_424253 = state_424204__$1;
(statearr_424209_424253[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (24))){
var inst_424144 = (state_424204[(7)]);
var inst_424143 = (state_424204[(8)]);
var inst_424182 = (state_424204[(9)]);
var inst_424185 = (state_424204[(2)]);
var inst_424186 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_424185,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_424182);
var inst_424187 = inst_424143.call(null,inst_424186,inst_424144);
var state_424204__$1 = state_424204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424204__$1,(25),inst_424187);
} else {
if((state_val_424205 === (4))){
var inst_424137 = (state_424204[(2)]);
var state_424204__$1 = state_424204;
if(cljs.core.truth_(inst_424137)){
var statearr_424210_424254 = state_424204__$1;
(statearr_424210_424254[(1)] = (8));

} else {
var statearr_424211_424255 = state_424204__$1;
(statearr_424211_424255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (15))){
var inst_424199 = (state_424204[(2)]);
var state_424204__$1 = state_424204;
var statearr_424212_424256 = state_424204__$1;
(statearr_424212_424256[(2)] = inst_424199);

(statearr_424212_424256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (21))){
var inst_424173 = (state_424204[(10)]);
var inst_424177 = cljs.core.chunk_first.call(null,inst_424173);
var inst_424178 = cljs.core.chunk_rest.call(null,inst_424173);
var inst_424179 = cljs.core.count.call(null,inst_424177);
var inst_424153 = inst_424178;
var inst_424154 = inst_424177;
var inst_424155 = inst_424179;
var inst_424156 = (0);
var state_424204__$1 = (function (){var statearr_424213 = state_424204;
(statearr_424213[(11)] = inst_424153);

(statearr_424213[(12)] = inst_424154);

(statearr_424213[(13)] = inst_424155);

(statearr_424213[(14)] = inst_424156);

return statearr_424213;
})();
var statearr_424214_424257 = state_424204__$1;
(statearr_424214_424257[(2)] = null);

(statearr_424214_424257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (13))){
var inst_424154 = (state_424204[(12)]);
var inst_424161 = (state_424204[(15)]);
var inst_424156 = (state_424204[(14)]);
var inst_424161__$1 = cljs.core._nth.call(null,inst_424154,inst_424156);
var inst_424162 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_424161__$1);
var state_424204__$1 = (function (){var statearr_424215 = state_424204;
(statearr_424215[(15)] = inst_424161__$1);

return statearr_424215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424204__$1,(16),inst_424162);
} else {
if((state_val_424205 === (22))){
var inst_424173 = (state_424204[(10)]);
var inst_424182 = (state_424204[(9)]);
var inst_424182__$1 = cljs.core.first.call(null,inst_424173);
var inst_424183 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_424182__$1);
var state_424204__$1 = (function (){var statearr_424216 = state_424204;
(statearr_424216[(9)] = inst_424182__$1);

return statearr_424216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424204__$1,(24),inst_424183);
} else {
if((state_val_424205 === (6))){
var state_424204__$1 = state_424204;
var statearr_424220_424258 = state_424204__$1;
(statearr_424220_424258[(2)] = false);

(statearr_424220_424258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (25))){
var inst_424173 = (state_424204[(10)]);
var inst_424146 = (state_424204[(16)]);
var inst_424182 = (state_424204[(9)]);
var inst_424189 = (state_424204[(2)]);
var inst_424190 = cljs.core.swap_BANG_.call(null,inst_424146,cljs.core.assoc,inst_424182,inst_424189);
var inst_424191 = cljs.core.next.call(null,inst_424173);
var inst_424153 = inst_424191;
var inst_424154 = null;
var inst_424155 = (0);
var inst_424156 = (0);
var state_424204__$1 = (function (){var statearr_424221 = state_424204;
(statearr_424221[(11)] = inst_424153);

(statearr_424221[(12)] = inst_424154);

(statearr_424221[(13)] = inst_424155);

(statearr_424221[(17)] = inst_424190);

(statearr_424221[(14)] = inst_424156);

return statearr_424221;
})();
var statearr_424222_424259 = state_424204__$1;
(statearr_424222_424259[(2)] = null);

(statearr_424222_424259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (17))){
var inst_424146 = (state_424204[(16)]);
var inst_424153 = (state_424204[(11)]);
var inst_424154 = (state_424204[(12)]);
var inst_424161 = (state_424204[(15)]);
var inst_424155 = (state_424204[(13)]);
var inst_424156 = (state_424204[(14)]);
var inst_424168 = (state_424204[(2)]);
var inst_424169 = cljs.core.swap_BANG_.call(null,inst_424146,cljs.core.assoc,inst_424161,inst_424168);
var inst_424170 = (inst_424156 + (1));
var tmp424217 = inst_424153;
var tmp424218 = inst_424154;
var tmp424219 = inst_424155;
var inst_424153__$1 = tmp424217;
var inst_424154__$1 = tmp424218;
var inst_424155__$1 = tmp424219;
var inst_424156__$1 = inst_424170;
var state_424204__$1 = (function (){var statearr_424223 = state_424204;
(statearr_424223[(18)] = inst_424169);

(statearr_424223[(11)] = inst_424153__$1);

(statearr_424223[(12)] = inst_424154__$1);

(statearr_424223[(13)] = inst_424155__$1);

(statearr_424223[(14)] = inst_424156__$1);

return statearr_424223;
})();
var statearr_424224_424260 = state_424204__$1;
(statearr_424224_424260[(2)] = null);

(statearr_424224_424260[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (3))){
var state_424204__$1 = state_424204;
var statearr_424225_424261 = state_424204__$1;
(statearr_424225_424261[(2)] = false);

(statearr_424225_424261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (12))){
var inst_424146 = (state_424204[(16)]);
var inst_424201 = (state_424204[(2)]);
var inst_424202 = cljs.core.deref.call(null,inst_424146);
var state_424204__$1 = (function (){var statearr_424226 = state_424204;
(statearr_424226[(19)] = inst_424201);

return statearr_424226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424204__$1,inst_424202);
} else {
if((state_val_424205 === (2))){
var inst_424127 = env.cljs$lang$protocol_mask$partition0$;
var inst_424128 = (inst_424127 & (64));
var inst_424129 = env.cljs$core$ISeq$;
var inst_424130 = (inst_424128) || (inst_424129);
var state_424204__$1 = state_424204;
if(cljs.core.truth_(inst_424130)){
var statearr_424227_424262 = state_424204__$1;
(statearr_424227_424262[(1)] = (5));

} else {
var statearr_424228_424263 = state_424204__$1;
(statearr_424228_424263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (23))){
var inst_424194 = (state_424204[(2)]);
var state_424204__$1 = state_424204;
var statearr_424229_424264 = state_424204__$1;
(statearr_424229_424264[(2)] = inst_424194);

(statearr_424229_424264[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (19))){
var state_424204__$1 = state_424204;
var statearr_424230_424265 = state_424204__$1;
(statearr_424230_424265[(2)] = null);

(statearr_424230_424265[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (11))){
var inst_424155 = (state_424204[(13)]);
var inst_424156 = (state_424204[(14)]);
var inst_424158 = (inst_424156 < inst_424155);
var inst_424159 = inst_424158;
var state_424204__$1 = state_424204;
if(cljs.core.truth_(inst_424159)){
var statearr_424231_424266 = state_424204__$1;
(statearr_424231_424266[(1)] = (13));

} else {
var statearr_424232_424267 = state_424204__$1;
(statearr_424232_424267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (9))){
var state_424204__$1 = state_424204;
var statearr_424233_424268 = state_424204__$1;
(statearr_424233_424268[(2)] = env);

(statearr_424233_424268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (5))){
var state_424204__$1 = state_424204;
var statearr_424234_424269 = state_424204__$1;
(statearr_424234_424269[(2)] = true);

(statearr_424234_424269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (14))){
var inst_424173 = (state_424204[(10)]);
var inst_424153 = (state_424204[(11)]);
var inst_424173__$1 = cljs.core.seq.call(null,inst_424153);
var state_424204__$1 = (function (){var statearr_424235 = state_424204;
(statearr_424235[(10)] = inst_424173__$1);

return statearr_424235;
})();
if(inst_424173__$1){
var statearr_424236_424270 = state_424204__$1;
(statearr_424236_424270[(1)] = (18));

} else {
var statearr_424237_424271 = state_424204__$1;
(statearr_424237_424271[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (16))){
var inst_424144 = (state_424204[(7)]);
var inst_424161 = (state_424204[(15)]);
var inst_424143 = (state_424204[(8)]);
var inst_424164 = (state_424204[(2)]);
var inst_424165 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_424164,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_424161);
var inst_424166 = inst_424143.call(null,inst_424165,inst_424144);
var state_424204__$1 = state_424204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424204__$1,(17),inst_424166);
} else {
if((state_val_424205 === (10))){
var inst_424142 = (state_424204[(2)]);
var inst_424143 = cljs.core.get.call(null,inst_424142,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_424144 = cljs.core.get.call(null,inst_424142,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_424145 = cljs.core.PersistentVector.EMPTY;
var inst_424146 = cljs.core.atom.call(null,inst_424145);
var inst_424151 = cljs.core.range.call(null,ui.core.max_items);
var inst_424152 = cljs.core.seq.call(null,inst_424151);
var inst_424153 = inst_424152;
var inst_424154 = null;
var inst_424155 = (0);
var inst_424156 = (0);
var state_424204__$1 = (function (){var statearr_424238 = state_424204;
(statearr_424238[(16)] = inst_424146);

(statearr_424238[(11)] = inst_424153);

(statearr_424238[(12)] = inst_424154);

(statearr_424238[(7)] = inst_424144);

(statearr_424238[(8)] = inst_424143);

(statearr_424238[(13)] = inst_424155);

(statearr_424238[(14)] = inst_424156);

return statearr_424238;
})();
var statearr_424239_424272 = state_424204__$1;
(statearr_424239_424272[(2)] = null);

(statearr_424239_424272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (18))){
var inst_424173 = (state_424204[(10)]);
var inst_424175 = cljs.core.chunked_seq_QMARK_.call(null,inst_424173);
var state_424204__$1 = state_424204;
if(inst_424175){
var statearr_424240_424273 = state_424204__$1;
(statearr_424240_424273[(1)] = (21));

} else {
var statearr_424241_424274 = state_424204__$1;
(statearr_424241_424274[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_424205 === (8))){
var inst_424139 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_424204__$1 = state_424204;
var statearr_424242_424275 = state_424204__$1;
(statearr_424242_424275[(2)] = inst_424139);

(statearr_424242_424275[(1)] = (10));


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
var statearr_424246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_424246[(0)] = ui$core$state_machine__40145__auto__);

(statearr_424246[(1)] = (1));

return statearr_424246;
});
var ui$core$state_machine__40145__auto____1 = (function (state_424204){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424247){if((e424247 instanceof Object)){
var ex__40148__auto__ = e424247;
var statearr_424248_424276 = state_424204;
(statearr_424248_424276[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424277 = state_424204;
state_424204 = G__424277;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_424204){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_424204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_424249 = f__40168__auto__.call(null);
(statearr_424249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__424278__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__424278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__424279__i = 0, G__424279__a = new Array(arguments.length -  0);
while (G__424279__i < G__424279__a.length) {G__424279__a[G__424279__i] = arguments[G__424279__i + 0]; ++G__424279__i;}
  args = new cljs.core.IndexedSeq(G__424279__a,0);
} 
return G__424278__delegate.call(this,args);};
G__424278.cljs$lang$maxFixedArity = 0;
G__424278.cljs$lang$applyTo = (function (arglist__424280){
var args = cljs.core.seq(arglist__424280);
return G__424278__delegate(args);
});
G__424278.cljs$core$IFn$_invoke$arity$variadic = G__424278__delegate;
return G__424278;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__424281__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__424281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__424282__i = 0, G__424282__a = new Array(arguments.length -  0);
while (G__424282__i < G__424282__a.length) {G__424282__a[G__424282__i] = arguments[G__424282__i + 0]; ++G__424282__i;}
  args = new cljs.core.IndexedSeq(G__424282__a,0);
} 
return G__424281__delegate.call(this,args);};
G__424281.cljs$lang$maxFixedArity = 0;
G__424281.cljs$lang$applyTo = (function (arglist__424283){
var args = cljs.core.seq(arglist__424283);
return G__424281__delegate(args);
});
G__424281.cljs$core$IFn$_invoke$arity$variadic = G__424281__delegate;
return G__424281;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__424284__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__424284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__424285__i = 0, G__424285__a = new Array(arguments.length -  0);
while (G__424285__i < G__424285__a.length) {G__424285__a[G__424285__i] = arguments[G__424285__i + 0]; ++G__424285__i;}
  args = new cljs.core.IndexedSeq(G__424285__a,0);
} 
return G__424284__delegate.call(this,args);};
G__424284.cljs$lang$maxFixedArity = 0;
G__424284.cljs$lang$applyTo = (function (arglist__424286){
var args = cljs.core.seq(arglist__424286);
return G__424284__delegate(args);
});
G__424284.cljs$core$IFn$_invoke$arity$variadic = G__424284__delegate;
return G__424284;
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
var map__424287 = params;
var map__424287__$1 = ((((!((map__424287 == null)))?((((map__424287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__424287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__424287):map__424287);
var id = cljs.core.get.call(null,map__424287__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__424287__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__424287,map__424287__$1,id,description){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__424287,map__424287__$1,id,description){
return (function (state_424316){
var state_val_424317 = (state_424316[(1)]);
if((state_val_424317 === (1))){
var inst_424289 = ui.core.block_number.call(null);
var state_424316__$1 = state_424316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424316__$1,(2),inst_424289);
} else {
if((state_val_424317 === (2))){
var inst_424291 = (state_424316[(2)]);
var inst_424292 = ui.core.format_message.call(null,description);
var inst_424293 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"addProposal","addProposal",-2108750592),inst_424292);
var state_424316__$1 = (function (){var statearr_424318 = state_424316;
(statearr_424318[(7)] = inst_424291);

return statearr_424318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424316__$1,(3),inst_424293);
} else {
if((state_val_424317 === (3))){
var inst_424291 = (state_424316[(7)]);
var inst_424295 = (state_424316[(2)]);
var inst_424296 = ui.core.get_historical_events.call(null,ui.core.etherean,inst_424291,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({}));
var state_424316__$1 = (function (){var statearr_424319 = state_424316;
(statearr_424319[(8)] = inst_424295);

return statearr_424319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424316__$1,(4),inst_424296);
} else {
if((state_val_424317 === (4))){
var inst_424298 = (state_424316[(2)]);
var inst_424299 = cljs.core.first.call(null,inst_424298);
var inst_424300 = [new cljs.core.Keyword(null,"tempids","tempids",1767509089)];
var inst_424301 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_424302 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),id];
var inst_424303 = (new cljs.core.PersistentVector(null,2,(5),inst_424301,inst_424302,null));
var inst_424304 = [inst_424303];
var inst_424305 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_424306 = inst_424299.args;
var inst_424307 = inst_424306.proposalIndex;
var inst_424308 = (inst_424307 | (0));
var inst_424309 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),inst_424308];
var inst_424310 = (new cljs.core.PersistentVector(null,2,(5),inst_424305,inst_424309,null));
var inst_424311 = [inst_424310];
var inst_424312 = cljs.core.PersistentHashMap.fromArrays(inst_424304,inst_424311);
var inst_424313 = [inst_424312];
var inst_424314 = cljs.core.PersistentHashMap.fromArrays(inst_424300,inst_424313);
var state_424316__$1 = state_424316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424316__$1,inst_424314);
} else {
return null;
}
}
}
}
});})(c__40167__auto__,map__424287,map__424287__$1,id,description))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__424287,map__424287__$1,id,description){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_424323 = [null,null,null,null,null,null,null,null,null];
(statearr_424323[(0)] = ui$core$state_machine__40145__auto__);

(statearr_424323[(1)] = (1));

return statearr_424323;
});
var ui$core$state_machine__40145__auto____1 = (function (state_424316){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424324){if((e424324 instanceof Object)){
var ex__40148__auto__ = e424324;
var statearr_424325_424327 = state_424316;
(statearr_424325_424327[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424328 = state_424316;
state_424316 = G__424328;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_424316){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_424316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__424287,map__424287__$1,id,description))
})();
var state__40169__auto__ = (function (){var statearr_424326 = f__40168__auto__.call(null);
(statearr_424326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__424287,map__424287__$1,id,description))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__424329 = params;
var map__424329__$1 = ((((!((map__424329 == null)))?((((map__424329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__424329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__424329):map__424329);
var id = cljs.core.get.call(null,map__424329__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__424329__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__424329,map__424329__$1,id,direction){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__424329,map__424329__$1,id,direction){
return (function (state_424336){
var state_val_424337 = (state_424336[(1)]);
if((state_val_424337 === (1))){
var inst_424331 = cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113));
var inst_424332 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnProposal","voteOnProposal",-1101682438),id,inst_424331);
var state_424336__$1 = state_424336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424336__$1,(2),inst_424332);
} else {
if((state_val_424337 === (2))){
var inst_424334 = (state_424336[(2)]);
var state_424336__$1 = state_424336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424336__$1,inst_424334);
} else {
return null;
}
}
});})(c__40167__auto__,map__424329,map__424329__$1,id,direction))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__424329,map__424329__$1,id,direction){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_424341 = [null,null,null,null,null,null,null];
(statearr_424341[(0)] = ui$core$state_machine__40145__auto__);

(statearr_424341[(1)] = (1));

return statearr_424341;
});
var ui$core$state_machine__40145__auto____1 = (function (state_424336){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424342){if((e424342 instanceof Object)){
var ex__40148__auto__ = e424342;
var statearr_424343_424345 = state_424336;
(statearr_424343_424345[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424346 = state_424336;
state_424336 = G__424346;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_424336){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_424336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__424329,map__424329__$1,id,direction))
})();
var state__40169__auto__ = (function (){var statearr_424344 = f__40168__auto__.call(null);
(statearr_424344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__424329,map__424329__$1,id,direction))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("item","vote","item/vote",-842849665,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__424347 = params;
var map__424347__$1 = ((((!((map__424347 == null)))?((((map__424347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__424347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__424347):map__424347);
var id = cljs.core.get.call(null,map__424347__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__424347__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__424347,map__424347__$1,id,direction){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__424347,map__424347__$1,id,direction){
return (function (state_424353){
var state_val_424354 = (state_424353[(1)]);
if((state_val_424354 === (1))){
var inst_424349 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnItem","voteOnItem",903210165),id,direction);
var state_424353__$1 = state_424353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424353__$1,(2),inst_424349);
} else {
if((state_val_424354 === (2))){
var inst_424351 = (state_424353[(2)]);
var state_424353__$1 = state_424353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424353__$1,inst_424351);
} else {
return null;
}
}
});})(c__40167__auto__,map__424347,map__424347__$1,id,direction))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__424347,map__424347__$1,id,direction){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_424358 = [null,null,null,null,null,null,null];
(statearr_424358[(0)] = ui$core$state_machine__40145__auto__);

(statearr_424358[(1)] = (1));

return statearr_424358;
});
var ui$core$state_machine__40145__auto____1 = (function (state_424353){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424359){if((e424359 instanceof Object)){
var ex__40148__auto__ = e424359;
var statearr_424360_424362 = state_424353;
(statearr_424360_424362[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424363 = state_424353;
state_424353 = G__424363;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_424353){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_424353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__424347,map__424347__$1,id,direction))
})();
var state__40169__auto__ = (function (){var statearr_424361 = f__40168__auto__.call(null);
(statearr_424361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__424347,map__424347__$1,id,direction))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__424364 = params;
var map__424364__$1 = ((((!((map__424364 == null)))?((((map__424364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__424364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__424364):map__424364);
var value = cljs.core.get.call(null,map__424364__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__424364,map__424364__$1,value){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__424364,map__424364__$1,value){
return (function (state_424378){
var state_val_424379 = (state_424378[(1)]);
if((state_val_424379 === (1))){
var inst_424366 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_424378__$1 = state_424378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424378__$1,(2),inst_424366);
} else {
if((state_val_424379 === (2))){
var inst_424368 = (state_424378[(2)]);
var inst_424369 = ui.core.contract.call(null,ui.contract.staking_abi,inst_424368);
var inst_424370 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_424371 = web3.toWei(value,"ether");
var inst_424372 = [inst_424371];
var inst_424373 = cljs.core.PersistentHashMap.fromArrays(inst_424370,inst_424372);
var inst_424374 = ui.core.chan_transact.call(null,inst_424369,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),inst_424373);
var state_424378__$1 = state_424378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424378__$1,(3),inst_424374);
} else {
if((state_val_424379 === (3))){
var inst_424376 = (state_424378[(2)]);
var state_424378__$1 = state_424378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424378__$1,inst_424376);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__424364,map__424364__$1,value))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__424364,map__424364__$1,value){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_424383 = [null,null,null,null,null,null,null];
(statearr_424383[(0)] = ui$core$state_machine__40145__auto__);

(statearr_424383[(1)] = (1));

return statearr_424383;
});
var ui$core$state_machine__40145__auto____1 = (function (state_424378){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424384){if((e424384 instanceof Object)){
var ex__40148__auto__ = e424384;
var statearr_424385_424387 = state_424378;
(statearr_424385_424387[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424388 = state_424378;
state_424378 = G__424388;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_424378){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_424378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__424364,map__424364__$1,value))
})();
var state__40169__auto__ = (function (){var statearr_424386 = f__40168__auto__.call(null);
(statearr_424386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__424364,map__424364__$1,value))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","withdraw","user/withdraw",-1187344809,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__424389 = params;
var map__424389__$1 = ((((!((map__424389 == null)))?((((map__424389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__424389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__424389):map__424389);
var value = cljs.core.get.call(null,map__424389__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__424389,map__424389__$1,value){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__424389,map__424389__$1,value){
return (function (state_424399){
var state_val_424400 = (state_424399[(1)]);
if((state_val_424400 === (1))){
var inst_424391 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_424399__$1 = state_424399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424399__$1,(2),inst_424391);
} else {
if((state_val_424400 === (2))){
var inst_424393 = (state_424399[(2)]);
var inst_424394 = ui.core.contract.call(null,ui.contract.staking_abi,inst_424393);
var inst_424395 = ui.core.chan_transact.call(null,inst_424394,new cljs.core.Keyword(null,"withdraw","withdraw",1469652053));
var state_424399__$1 = state_424399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424399__$1,(3),inst_424395);
} else {
if((state_val_424400 === (3))){
var inst_424397 = (state_424399[(2)]);
var state_424399__$1 = state_424399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424399__$1,inst_424397);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__424389,map__424389__$1,value))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__424389,map__424389__$1,value){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_424404 = [null,null,null,null,null,null,null];
(statearr_424404[(0)] = ui$core$state_machine__40145__auto__);

(statearr_424404[(1)] = (1));

return statearr_424404;
});
var ui$core$state_machine__40145__auto____1 = (function (state_424399){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424405){if((e424405 instanceof Object)){
var ex__40148__auto__ = e424405;
var statearr_424406_424408 = state_424399;
(statearr_424406_424408[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424409 = state_424399;
state_424399 = G__424409;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_424399){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_424399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__424389,map__424389__$1,value))
})();
var state__40169__auto__ = (function (){var statearr_424407 = f__40168__auto__.call(null);
(statearr_424407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__424389,map__424389__$1,value))
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
return (function (state_424419){
var state_val_424420 = (state_424419[(1)]);
if((state_val_424420 === (1))){
var inst_424410 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"debugTime","debugTime",-1487871746));
var state_424419__$1 = state_424419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424419__$1,(2),inst_424410);
} else {
if((state_val_424420 === (2))){
var inst_424412 = (state_424419[(2)]);
var inst_424413 = (inst_424412 | (0));
var inst_424414 = (inst_424413 + (86400));
var inst_424415 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"setDebugTime","setDebugTime",1278197802),inst_424414);
var state_424419__$1 = state_424419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424419__$1,(3),inst_424415);
} else {
if((state_val_424420 === (3))){
var inst_424417 = (state_424419[(2)]);
var state_424419__$1 = state_424419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424419__$1,inst_424417);
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
var statearr_424424 = [null,null,null,null,null,null,null];
(statearr_424424[(0)] = ui$core$state_machine__40145__auto__);

(statearr_424424[(1)] = (1));

return statearr_424424;
});
var ui$core$state_machine__40145__auto____1 = (function (state_424419){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424425){if((e424425 instanceof Object)){
var ex__40148__auto__ = e424425;
var statearr_424426_424428 = state_424419;
(statearr_424426_424428[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424429 = state_424419;
state_424419 = G__424429;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_424419){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_424419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_424427 = f__40168__auto__.call(null);
(statearr_424427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424427;
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
ui.core.blockchain_send = (function ui$core$blockchain_send(p__424430,cb){
var map__424449 = p__424430;
var map__424449__$1 = ((((!((map__424449 == null)))?((((map__424449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__424449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__424449):map__424449);
var remote = cljs.core.get.call(null,map__424449__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__424449,map__424449__$1,remote){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__424449,map__424449__$1,remote){
return (function (state_424458){
var state_val_424459 = (state_424458[(1)]);
if((state_val_424459 === (1))){
var inst_424451 = cljs.core.PersistentHashMap.EMPTY;
var inst_424452 = ui.core.process_remote_query.call(null,remote);
var inst_424453 = ui.core.server_parser.call(null,inst_424451,inst_424452);
var state_424458__$1 = state_424458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_424458__$1,(2),inst_424453);
} else {
if((state_val_424459 === (2))){
var inst_424455 = (state_424458[(2)]);
var inst_424456 = cb.call(null,inst_424455);
var state_424458__$1 = state_424458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_424458__$1,inst_424456);
} else {
return null;
}
}
});})(c__40167__auto__,map__424449,map__424449__$1,remote))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__424449,map__424449__$1,remote){
return (function() {
var ui$core$blockchain_send_$_state_machine__40145__auto__ = null;
var ui$core$blockchain_send_$_state_machine__40145__auto____0 = (function (){
var statearr_424463 = [null,null,null,null,null,null,null];
(statearr_424463[(0)] = ui$core$blockchain_send_$_state_machine__40145__auto__);

(statearr_424463[(1)] = (1));

return statearr_424463;
});
var ui$core$blockchain_send_$_state_machine__40145__auto____1 = (function (state_424458){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_424458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e424464){if((e424464 instanceof Object)){
var ex__40148__auto__ = e424464;
var statearr_424465_424467 = state_424458;
(statearr_424465_424467[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_424458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e424464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__424468 = state_424458;
state_424458 = G__424468;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$blockchain_send_$_state_machine__40145__auto__ = function(state_424458){
switch(arguments.length){
case 0:
return ui$core$blockchain_send_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$blockchain_send_$_state_machine__40145__auto____1.call(this,state_424458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$blockchain_send_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$blockchain_send_$_state_machine__40145__auto____0;
ui$core$blockchain_send_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$blockchain_send_$_state_machine__40145__auto____1;
return ui$core$blockchain_send_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__424449,map__424449__$1,remote))
})();
var state__40169__auto__ = (function (){var statearr_424466 = f__40168__auto__.call(null);
(statearr_424466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_424466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__424449,map__424449__$1,remote))
);

return c__40167__auto__;
});
ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),ui.core.blockchain_send,new cljs.core.Keyword(null,"merge","merge",-1804319409),ui.core.my_merge,new cljs.core.Keyword(null,"migrate","migrate",-207110743),ui.core.migrate,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),ui.core.my_merge_tree,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
om.next.add_root_BANG_.call(null,ui.core.reconciler,ui.core.Root,goog.dom.getElement("app"));
ui.core.my_toaster = blueprint_cljs.core.toaster.call(null);

//# sourceMappingURL=core.js.map?rel=1488324296278