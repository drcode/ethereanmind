// Compiled by ClojureScript 1.9.229 {}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('ui.util');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om_tools.dom');
goog.require('ui.motion');
goog.require('ui.ethereum');
goog.require('ui.brain');
goog.require('om.next');
goog.require('shared.debug');
goog.require('ui.faq_text');
goog.require('clojure.string');
goog.require('blueprint_cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
ui.core.brain_vertices = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__88291){
var vec__88292 = p__88291;
var x = cljs.core.nth.call(null,vec__88292,(0),null);
var y = cljs.core.nth.call(null,vec__88292,(1),null);
var z = cljs.core.nth.call(null,vec__88292,(2),null);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,(y - 0.01),z],null));
}),cljs.core.concat.call(null,cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))),cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))))));
ui.core.brain_faces = cljs.core.map.call(null,(function (p__88295){
var vec__88296 = p__88295;
var a = cljs.core.nth.call(null,vec__88296,(0),null);
var b = cljs.core.nth.call(null,vec__88296,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,(function (a,b){
var baddies = cljs.core.PersistentHashSet.fromArray([(0),(284),(34),(35),((284) + (35)),((284) + (34))], true);
if((cljs.core.not.call(null,baddies.call(null,a))) && (cljs.core.not.call(null,baddies.call(null,b)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return null;
}
}),cljs.core.concat.call(null,cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"faces","faces",-73909544)], null)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(284)),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"faces","faces",-73909544)], null)))),cljs.core.rest.call(null,cljs.core.concat.call(null,cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"faces","faces",-73909544)], null)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(284)),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"faces","faces",-73909544)], null))))))));
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
var G__88299 = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
s = G__88299;
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
var this__37291__auto__ = this;
React.Component.apply(this__37291__auto__,arguments);

if(!((this__37291__auto__.initLocalState == null))){
this__37291__auto__.state = this__37291__auto__.initLocalState();
} else {
this__37291__auto__.state = {};
}

return this__37291__auto__;
});

ui.core.Item.prototype = goog.object.clone(React.Component.prototype);

var x88304_88324 = ui.core.Item.prototype;
x88304_88324.componentWillUpdate = ((function (x88304_88324){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
if(((!((this__37182__auto__ == null)))?(((false) || (this__37182__auto__.om$next$Ident$))?true:false):false)){
var ident__37186__auto___88325 = om.next.ident.call(null,this__37182__auto__,om.next.props.call(null,this__37182__auto__));
var next_ident__37187__auto___88326 = om.next.ident.call(null,this__37182__auto__,om.next._next_props.call(null,next_props__37183__auto__,this__37182__auto__));
if(cljs.core.not_EQ_.call(null,ident__37186__auto___88325,next_ident__37187__auto___88326)){
var idxr__37188__auto___88327 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__37188__auto___88327 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__37188__auto___88327),((function (idxr__37188__auto___88327,ident__37186__auto___88325,next_ident__37187__auto___88326,this__37182__auto__,x88304_88324){
return (function (indexes__37189__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__37189__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__37186__auto___88325], null),cljs.core.disj,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__37187__auto___88326], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__37182__auto__);
});})(idxr__37188__auto___88327,ident__37186__auto___88325,next_ident__37187__auto___88326,this__37182__auto__,x88304_88324))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__37182__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__37182__auto__);
});})(x88304_88324))
;

x88304_88324.shouldComponentUpdate = ((function (x88304_88324){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
var next_children__37185__auto__ = next_props__37183__auto__.children;
var next_props__37183__auto____$1 = goog.object.get(next_props__37183__auto__,"omcljs$value");
var next_props__37183__auto____$2 = (function (){var G__88306 = next_props__37183__auto____$1;
if((next_props__37183__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__88306);
} else {
return G__88306;
}
})();
var or__31951__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__37182__auto__),next_props__37183__auto____$2);
if(or__31951__auto__){
return or__31951__auto__;
} else {
var or__31951__auto____$1 = (function (){var and__31939__auto__ = this__37182__auto__.state;
if(cljs.core.truth_(and__31939__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__37182__auto__.state,"omcljs$state"),goog.object.get(next_state__37184__auto__,"omcljs$state"));
} else {
return and__31939__auto__;
}
})();
if(cljs.core.truth_(or__31951__auto____$1)){
return or__31951__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__37182__auto__.props.children,next_children__37185__auto__);
}
}
});})(x88304_88324))
;

x88304_88324.componentWillUnmount = ((function (x88304_88324){
return (function (){
var this__37182__auto__ = this;
var r__37193__auto__ = om.next.get_reconciler.call(null,this__37182__auto__);
var cfg__37194__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__37193__auto__);
var st__37195__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
var indexer__37192__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
if(cljs.core.truth_((function (){var and__31939__auto__ = !((st__37195__auto__ == null));
if(and__31939__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__37195__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__37182__auto__], null));
} else {
return and__31939__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__37195__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__37182__auto__);
} else {
}

if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88304_88324))
;

x88304_88324.componentDidUpdate = ((function (x88304_88324){
return (function (prev_props__37190__auto__,prev_state__37191__auto__){
var this__37182__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__37182__auto__);
});})(x88304_88324))
;

x88304_88324.isMounted = ((function (x88304_88324){
return (function (){
var this__37182__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__37182__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x88304_88324))
;

x88304_88324.componentWillMount = ((function (x88304_88324){
return (function (){
var this__37182__auto__ = this;
var indexer__37192__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88304_88324))
;

x88304_88324.initLocalState = ((function (x88304_88324){
return (function (){
var this$ = this;
var ret__37160__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj88308 = {"omcljs$state":ret__37160__auto__};
return obj88308;
});})(x88304_88324))
;

x88304_88324.render = ((function (x88304_88324){
return (function (){
var this__37181__auto__ = this;
var this$ = this__37181__auto__;
var _STAR_reconciler_STAR_88309 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_88310 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_88311 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_88312 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_88313 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__37181__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__37181__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__37181__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__37181__auto__);

om.next._STAR_parent_STAR_ = this__37181__auto__;

try{var map__88314 = om.next.props.call(null,this$);
var map__88314__$1 = ((((!((map__88314 == null)))?((((map__88314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88314):map__88314);
var id = cljs.core.get.call(null,map__88314__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var description = cljs.core.get.call(null,map__88314__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
var votes = cljs.core.get.call(null,map__88314__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var user = cljs.core.get.call(null,map__88314__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__88315 = user;
var map__88315__$1 = ((((!((map__88315 == null)))?((((map__88315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88315):map__88315);
var stake = cljs.core.get.call(null,map__88315__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var has_stake = (stake > (0));
var map__88316 = om.next.get_state.call(null,this$);
var map__88316__$1 = ((((!((map__88316 == null)))?((((map__88316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88316):map__88316);
var dialog = cljs.core.get.call(null,map__88316__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__88317 = dialog;
var map__88317__$1 = ((((!((map__88317 == null)))?((((map__88317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88317):map__88317);
var direction = cljs.core.get.call(null,map__88317__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": "5px", "paddingBottom": "5px", "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),(((direction === (0)))?"Vote down":"Vote Up"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,hide_dialog,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324){
return (function (e){
return hide_dialog.call(null);
});})(map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,hide_dialog,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,hide_dialog,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("item","vote","item/vote",-842849665,null)),(function (){var x__32785__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","items","etherean/items",165918606)))))));
});})(map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,hide_dialog,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324))
], null),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can vote up ",React.DOM.i(null,"one item")," in this list per day, as well as vote down ",React.DOM.i(null,"one item")," in this list per day. These votes will be remembered and automatically applied on subsequent days, until you change your choices (or until your up/down choices fall from the front page) "],null)))),React.DOM.p(null,"So... is this an item currently on the mind of ethereans?")),(function (){var vote_button = ((function (map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,hide_dialog,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324){
return (function (direction__$1,activated){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,hide_dialog,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324){
return (function (e){
if(has_stake){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),(0),new cljs.core.Keyword(null,"up","up",-269712113),(1)], null).call(null,direction__$1)], null));
} else {
return ui.util.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You need to deposit some stake first before voting on items. Please go to the \"Voting Stake\" tab first."}));
}
});})(map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,hide_dialog,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324))
], null));
});})(map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,hide_dialog,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(votes)?ui.core.format_vote_number.call(null,(((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))))):"---")],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false)],null))));
})(),(function (){var item_body = ((function (map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,hide_dialog,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324){
return (function (desc,detail){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__88314,map__88314__$1,id,description,votes,user,map__88315,map__88315__$1,stake,has_stake,map__88316,map__88316__$1,dialog,map__88317,map__88317__$1,direction,hide_dialog,_STAR_reconciler_STAR_88309,_STAR_depth_STAR_88310,_STAR_shared_STAR_88311,_STAR_instrument_STAR_88312,_STAR_parent_STAR_88313,this$,this__37181__auto__,x88304_88324))
;
return item_body.call(null,description,(cljs.core.truth_(votes)?null:ui.core.mining_spinner.call(null)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_88313;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_88312;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_88311;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_88310;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_88309;
}});})(x88304_88324))
;


ui.core.Item.prototype.constructor = ui.core.Item;

ui.core.Item.prototype.constructor.displayName = "ui.core/Item";

ui.core.Item.prototype.om$isComponent = true;

var x88322_88328 = ui.core.Item;
/** @nocollapse */
x88322_88328.om$next$IQuery$ = true;

/** @nocollapse */
x88322_88328.om$next$IQuery$query$arity$1 = ((function (x88322_88328){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x88322_88328))
;


var x88323_88329 = ui.core.Item.prototype;

x88323_88329.om$next$IQuery$ = true;


x88323_88329.om$next$IQuery$query$arity$1 = ((function (x88323_88329){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x88323_88329))
;


ui.core.Item.cljs$lang$type = true;

ui.core.Item.cljs$lang$ctorStr = "ui.core/Item";

ui.core.Item.cljs$lang$ctorPrWriter = (function (this__37294__auto__,writer__37295__auto__,opt__37296__auto__){
return cljs.core._write.call(null,writer__37295__auto__,"ui.core/Item");
});
ui.core.item_component = om.next.factory.call(null,ui.core.Item);
/**
 * @constructor
 */
ui.core.Items = (function ui$core$Items(){
var this__37291__auto__ = this;
React.Component.apply(this__37291__auto__,arguments);

if(!((this__37291__auto__.initLocalState == null))){
this__37291__auto__.state = this__37291__auto__.initLocalState();
} else {
this__37291__auto__.state = {};
}

return this__37291__auto__;
});

ui.core.Items.prototype = goog.object.clone(React.Component.prototype);

var x88334_88348 = ui.core.Items.prototype;
x88334_88348.componentWillUpdate = ((function (x88334_88348){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
if(((!((this__37182__auto__ == null)))?(((false) || (this__37182__auto__.om$next$Ident$))?true:false):false)){
var ident__37186__auto___88349 = om.next.ident.call(null,this__37182__auto__,om.next.props.call(null,this__37182__auto__));
var next_ident__37187__auto___88350 = om.next.ident.call(null,this__37182__auto__,om.next._next_props.call(null,next_props__37183__auto__,this__37182__auto__));
if(cljs.core.not_EQ_.call(null,ident__37186__auto___88349,next_ident__37187__auto___88350)){
var idxr__37188__auto___88351 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__37188__auto___88351 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__37188__auto___88351),((function (idxr__37188__auto___88351,ident__37186__auto___88349,next_ident__37187__auto___88350,this__37182__auto__,x88334_88348){
return (function (indexes__37189__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__37189__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__37186__auto___88349], null),cljs.core.disj,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__37187__auto___88350], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__37182__auto__);
});})(idxr__37188__auto___88351,ident__37186__auto___88349,next_ident__37187__auto___88350,this__37182__auto__,x88334_88348))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__37182__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__37182__auto__);
});})(x88334_88348))
;

x88334_88348.shouldComponentUpdate = ((function (x88334_88348){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
var next_children__37185__auto__ = next_props__37183__auto__.children;
var next_props__37183__auto____$1 = goog.object.get(next_props__37183__auto__,"omcljs$value");
var next_props__37183__auto____$2 = (function (){var G__88336 = next_props__37183__auto____$1;
if((next_props__37183__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__88336);
} else {
return G__88336;
}
})();
var or__31951__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__37182__auto__),next_props__37183__auto____$2);
if(or__31951__auto__){
return or__31951__auto__;
} else {
var or__31951__auto____$1 = (function (){var and__31939__auto__ = this__37182__auto__.state;
if(cljs.core.truth_(and__31939__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__37182__auto__.state,"omcljs$state"),goog.object.get(next_state__37184__auto__,"omcljs$state"));
} else {
return and__31939__auto__;
}
})();
if(cljs.core.truth_(or__31951__auto____$1)){
return or__31951__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__37182__auto__.props.children,next_children__37185__auto__);
}
}
});})(x88334_88348))
;

x88334_88348.componentWillUnmount = ((function (x88334_88348){
return (function (){
var this__37182__auto__ = this;
var r__37193__auto__ = om.next.get_reconciler.call(null,this__37182__auto__);
var cfg__37194__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__37193__auto__);
var st__37195__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
var indexer__37192__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
if(cljs.core.truth_((function (){var and__31939__auto__ = !((st__37195__auto__ == null));
if(and__31939__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__37195__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__37182__auto__], null));
} else {
return and__31939__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__37195__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__37182__auto__);
} else {
}

if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88334_88348))
;

x88334_88348.componentDidUpdate = ((function (x88334_88348){
return (function (prev_props__37190__auto__,prev_state__37191__auto__){
var this__37182__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__37182__auto__);
});})(x88334_88348))
;

x88334_88348.isMounted = ((function (x88334_88348){
return (function (){
var this__37182__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__37182__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x88334_88348))
;

x88334_88348.componentWillMount = ((function (x88334_88348){
return (function (){
var this__37182__auto__ = this;
var indexer__37192__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88334_88348))
;

x88334_88348.render = ((function (x88334_88348){
return (function (){
var this__37181__auto__ = this;
var this$ = this__37181__auto__;
var _STAR_reconciler_STAR_88337 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_88338 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_88339 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_88340 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_88341 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__37181__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__37181__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__37181__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__37181__auto__);

om.next._STAR_parent_STAR_ = this__37181__auto__;

try{return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.9})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__32731__auto__ = ((function (_STAR_reconciler_STAR_88337,_STAR_depth_STAR_88338,_STAR_shared_STAR_88339,_STAR_instrument_STAR_88340,_STAR_parent_STAR_88341,this$,this__37181__auto__,x88334_88348){
return (function ui$core$iter__88342(s__88343){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_88337,_STAR_depth_STAR_88338,_STAR_shared_STAR_88339,_STAR_instrument_STAR_88340,_STAR_parent_STAR_88341,this$,this__37181__auto__,x88334_88348){
return (function (){
var s__88343__$1 = s__88343;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88343__$1);
if(temp__4657__auto__){
var s__88343__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88343__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__88343__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__88345 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__88344 = (0);
while(true){
if((i__88344 < size__32730__auto__)){
var item = cljs.core._nth.call(null,c__32729__auto__,i__88344);
cljs.core.chunk_append.call(null,b__88345,ui.core.item_component.call(null,item));

var G__88352 = (i__88344 + (1));
i__88344 = G__88352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88345),ui$core$iter__88342.call(null,cljs.core.chunk_rest.call(null,s__88343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88345),null);
}
} else {
var item = cljs.core.first.call(null,s__88343__$2);
return cljs.core.cons.call(null,ui.core.item_component.call(null,item),ui$core$iter__88342.call(null,cljs.core.rest.call(null,s__88343__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_88337,_STAR_depth_STAR_88338,_STAR_shared_STAR_88339,_STAR_instrument_STAR_88340,_STAR_parent_STAR_88341,this$,this__37181__auto__,x88334_88348))
,null,null));
});})(_STAR_reconciler_STAR_88337,_STAR_depth_STAR_88338,_STAR_shared_STAR_88339,_STAR_instrument_STAR_88340,_STAR_parent_STAR_88341,this$,this__37181__auto__,x88334_88348))
;
return iter__32731__auto__.call(null,new cljs.core.Keyword("etherean","items","etherean/items",165918606).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_88341;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_88340;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_88339;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_88338;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_88337;
}});})(x88334_88348))
;


ui.core.Items.prototype.constructor = ui.core.Items;

ui.core.Items.prototype.constructor.displayName = "ui.core/Items";

ui.core.Items.prototype.om$isComponent = true;

var x88346_88353 = ui.core.Items;
/** @nocollapse */
x88346_88353.om$next$IQuery$ = true;

/** @nocollapse */
x88346_88353.om$next$IQuery$query$arity$1 = ((function (x88346_88353){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x88346_88353))
;


var x88347_88354 = ui.core.Items.prototype;

x88347_88354.om$next$IQuery$ = true;


x88347_88354.om$next$IQuery$query$arity$1 = ((function (x88347_88354){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x88347_88354))
;


ui.core.Items.cljs$lang$type = true;

ui.core.Items.cljs$lang$ctorStr = "ui.core/Items";

ui.core.Items.cljs$lang$ctorPrWriter = (function (this__37294__auto__,writer__37295__auto__,opt__37296__auto__){
return cljs.core._write.call(null,writer__37295__auto__,"ui.core/Items");
});
ui.core.items_component = om.next.factory.call(null,ui.core.Items);
/**
 * @constructor
 */
ui.core.Proposal = (function ui$core$Proposal(){
var this__37291__auto__ = this;
React.Component.apply(this__37291__auto__,arguments);

if(!((this__37291__auto__.initLocalState == null))){
this__37291__auto__.state = this__37291__auto__.initLocalState();
} else {
this__37291__auto__.state = {};
}

return this__37291__auto__;
});

ui.core.Proposal.prototype = goog.object.clone(React.Component.prototype);

var x88359_88379 = ui.core.Proposal.prototype;
x88359_88379.componentWillUpdate = ((function (x88359_88379){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
if(((!((this__37182__auto__ == null)))?(((false) || (this__37182__auto__.om$next$Ident$))?true:false):false)){
var ident__37186__auto___88380 = om.next.ident.call(null,this__37182__auto__,om.next.props.call(null,this__37182__auto__));
var next_ident__37187__auto___88381 = om.next.ident.call(null,this__37182__auto__,om.next._next_props.call(null,next_props__37183__auto__,this__37182__auto__));
if(cljs.core.not_EQ_.call(null,ident__37186__auto___88380,next_ident__37187__auto___88381)){
var idxr__37188__auto___88382 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__37188__auto___88382 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__37188__auto___88382),((function (idxr__37188__auto___88382,ident__37186__auto___88380,next_ident__37187__auto___88381,this__37182__auto__,x88359_88379){
return (function (indexes__37189__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__37189__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__37186__auto___88380], null),cljs.core.disj,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__37187__auto___88381], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__37182__auto__);
});})(idxr__37188__auto___88382,ident__37186__auto___88380,next_ident__37187__auto___88381,this__37182__auto__,x88359_88379))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__37182__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__37182__auto__);
});})(x88359_88379))
;

x88359_88379.shouldComponentUpdate = ((function (x88359_88379){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
var next_children__37185__auto__ = next_props__37183__auto__.children;
var next_props__37183__auto____$1 = goog.object.get(next_props__37183__auto__,"omcljs$value");
var next_props__37183__auto____$2 = (function (){var G__88361 = next_props__37183__auto____$1;
if((next_props__37183__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__88361);
} else {
return G__88361;
}
})();
var or__31951__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__37182__auto__),next_props__37183__auto____$2);
if(or__31951__auto__){
return or__31951__auto__;
} else {
var or__31951__auto____$1 = (function (){var and__31939__auto__ = this__37182__auto__.state;
if(cljs.core.truth_(and__31939__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__37182__auto__.state,"omcljs$state"),goog.object.get(next_state__37184__auto__,"omcljs$state"));
} else {
return and__31939__auto__;
}
})();
if(cljs.core.truth_(or__31951__auto____$1)){
return or__31951__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__37182__auto__.props.children,next_children__37185__auto__);
}
}
});})(x88359_88379))
;

x88359_88379.componentWillUnmount = ((function (x88359_88379){
return (function (){
var this__37182__auto__ = this;
var r__37193__auto__ = om.next.get_reconciler.call(null,this__37182__auto__);
var cfg__37194__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__37193__auto__);
var st__37195__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
var indexer__37192__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
if(cljs.core.truth_((function (){var and__31939__auto__ = !((st__37195__auto__ == null));
if(and__31939__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__37195__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__37182__auto__], null));
} else {
return and__31939__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__37195__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__37182__auto__);
} else {
}

if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88359_88379))
;

x88359_88379.componentDidUpdate = ((function (x88359_88379){
return (function (prev_props__37190__auto__,prev_state__37191__auto__){
var this__37182__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__37182__auto__);
});})(x88359_88379))
;

x88359_88379.isMounted = ((function (x88359_88379){
return (function (){
var this__37182__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__37182__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x88359_88379))
;

x88359_88379.componentWillMount = ((function (x88359_88379){
return (function (){
var this__37182__auto__ = this;
var indexer__37192__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88359_88379))
;

x88359_88379.initLocalState = ((function (x88359_88379){
return (function (){
var this$ = this;
var ret__37160__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),"",new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj88363 = {"omcljs$state":ret__37160__auto__};
return obj88363;
});})(x88359_88379))
;

x88359_88379.render = ((function (x88359_88379){
return (function (){
var this__37181__auto__ = this;
var this$ = this__37181__auto__;
var _STAR_reconciler_STAR_88364 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_88365 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_88366 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_88367 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_88368 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__37181__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__37181__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__37181__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__37181__auto__);

om.next._STAR_parent_STAR_ = this__37181__auto__;

try{var map__88369 = om.next.props.call(null,this$);
var map__88369__$1 = ((((!((map__88369 == null)))?((((map__88369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88369):map__88369);
var description = cljs.core.get.call(null,map__88369__$1,new cljs.core.Keyword("proposal","description","proposal/description",1644720226));
var id = cljs.core.get.call(null,map__88369__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var unsaved = cljs.core.get.call(null,map__88369__$1,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935));
var upvotes = cljs.core.get.call(null,map__88369__$1,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560));
var downvotes = cljs.core.get.call(null,map__88369__$1,new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132));
var user = cljs.core.get.call(null,map__88369__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__88370 = user;
var map__88370__$1 = ((((!((map__88370 == null)))?((((map__88370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88370):map__88370);
var can_vote_proposal = cljs.core.get.call(null,map__88370__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__88370__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var temporary = om.next.tempid_QMARK_.call(null,id);
var has_stake = (stake > (0));
var map__88371 = om.next.get_state.call(null,this$);
var map__88371__$1 = ((((!((map__88371 == null)))?((((map__88371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88371):map__88371);
var height = cljs.core.get.call(null,map__88371__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var dialog = cljs.core.get.call(null,map__88371__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__88372 = dialog;
var map__88372__$1 = ((((!((map__88372 == null)))?((((map__88372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88372):map__88372);
var direction = cljs.core.get.call(null,map__88372__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379))
;
return om_tools.dom.element.call(null,React.DOM.div,blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113)))?"Vote Up":"Vote Down"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379){
return (function (e){
return hide_dialog.call(null);
});})(map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null)),(function (){var x__32785__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
});})(map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379))
], null),"You can vote on one proposal per day. Is this an item currently on the mind of ethereans, that deserves to be listed on the front page?"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(unsaved)?(0):(1))], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),ui.motion.spring.call(null,height)], null)], null),((function (map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379){
return (function (value){
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingBottom": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var vote_button = ((function (map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379){
return (function (direction__$1,activated,disabled){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379){
return (function (e){
if(cljs.core.truth_((function (){var and__31939__auto__ = has_stake;
if(and__31939__auto__){
return can_vote_proposal;
} else {
return and__31939__auto__;
}
})())){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),direction__$1], null));
} else {
return ui.util.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": ((has_stake)?"You already voted on a proposal today. You will need to wait until tomorrow to vote again.":"Please deposit stake first in the stake tab to vote on proposals.")}));
}
});})(map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379))
], null));
});})(map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false,unsaved),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(unsaved)?null:(cljs.core.truth_(upvotes)?ui.core.format_vote_number.call(null,(upvotes - downvotes)):"---"
))],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false,unsaved)],null))));
})(),(function (){var proposal_body = ((function (map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379){
return (function (desc,detail,disabled){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)}), "onClick": om_tools.dom.format_opts.call(null,((function (map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379){
return (function (){
if(cljs.core.truth_(disabled)){
return ui.util.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You have not staked any funds yet. Please got to the \"Voting Stakes\" tab first."}));
} else {
return null;
}
});})(map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379))
)}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379))
;
if(cljs.core.truth_(unsaved)){
var temp_description = new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
var has_description = cljs.core.seq.call(null,temp_description);
var save_fn = ((function (temp_description,has_description,proposal_body,map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379){
return (function (){
if(has_description){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","save","proposal/save",356239610,null)),(function (){var x__32785__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),(function (){var x__32785__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__32785__auto__ = temp_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
} else {
return null;
}
});})(temp_description,has_description,proposal_body,map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379))
;
return proposal_body.call(null,blueprint_cljs.core.editable_text.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),((!(has_stake))?"... (Please deposit stake first to propose an item)":((cljs.core.not.call(null,can_vote_proposal))?"... (Today's proposal action already used up)":"... propose a new item!"
)),new cljs.core.Keyword(null,"value","value",305978217),temp_description,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(has_stake)) || (cljs.core.not.call(null,can_vote_proposal)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp_description,has_description,save_fn,proposal_body,map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379){
return (function (s){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),s);
});})(temp_description,has_description,save_fn,proposal_body,map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379))
], null)),((has_description)?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary pt-icon-plus pt-minimal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_fn], null),"Save"):null),!(has_stake));
} else {
return proposal_body.call(null,description,(((temporary) || (cljs.core.not.call(null,upvotes)))?ui.core.mining_spinner.call(null):null),false);
}
})()],null))));
});})(map__88369,map__88369__$1,description,id,unsaved,upvotes,downvotes,user,map__88370,map__88370__$1,can_vote_proposal,stake,temporary,has_stake,map__88371,map__88371__$1,height,dialog,map__88372,map__88372__$1,direction,hide_dialog,_STAR_reconciler_STAR_88364,_STAR_depth_STAR_88365,_STAR_shared_STAR_88366,_STAR_instrument_STAR_88367,_STAR_parent_STAR_88368,this$,this__37181__auto__,x88359_88379))
)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_88368;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_88367;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_88366;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_88365;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_88364;
}});})(x88359_88379))
;


ui.core.Proposal.prototype.constructor = ui.core.Proposal;

ui.core.Proposal.prototype.constructor.displayName = "ui.core/Proposal";

ui.core.Proposal.prototype.om$isComponent = true;

var x88377_88383 = ui.core.Proposal;
/** @nocollapse */
x88377_88383.om$next$IQuery$ = true;

/** @nocollapse */
x88377_88383.om$next$IQuery$query$arity$1 = ((function (x88377_88383){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x88377_88383))
;


var x88378_88384 = ui.core.Proposal.prototype;

x88378_88384.om$next$IQuery$ = true;


x88378_88384.om$next$IQuery$query$arity$1 = ((function (x88378_88384){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x88378_88384))
;


ui.core.Proposal.cljs$lang$type = true;

ui.core.Proposal.cljs$lang$ctorStr = "ui.core/Proposal";

ui.core.Proposal.cljs$lang$ctorPrWriter = (function (this__37294__auto__,writer__37295__auto__,opt__37296__auto__){
return cljs.core._write.call(null,writer__37295__auto__,"ui.core/Proposal");
});
ui.core.proposal_component = om.next.factory.call(null,ui.core.Proposal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
/**
 * @constructor
 */
ui.core.Proposals = (function ui$core$Proposals(){
var this__37291__auto__ = this;
React.Component.apply(this__37291__auto__,arguments);

if(!((this__37291__auto__.initLocalState == null))){
this__37291__auto__.state = this__37291__auto__.initLocalState();
} else {
this__37291__auto__.state = {};
}

return this__37291__auto__;
});

ui.core.Proposals.prototype = goog.object.clone(React.Component.prototype);

var x88389_88403 = ui.core.Proposals.prototype;
x88389_88403.componentWillUpdate = ((function (x88389_88403){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
if(((!((this__37182__auto__ == null)))?(((false) || (this__37182__auto__.om$next$Ident$))?true:false):false)){
var ident__37186__auto___88404 = om.next.ident.call(null,this__37182__auto__,om.next.props.call(null,this__37182__auto__));
var next_ident__37187__auto___88405 = om.next.ident.call(null,this__37182__auto__,om.next._next_props.call(null,next_props__37183__auto__,this__37182__auto__));
if(cljs.core.not_EQ_.call(null,ident__37186__auto___88404,next_ident__37187__auto___88405)){
var idxr__37188__auto___88406 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__37188__auto___88406 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__37188__auto___88406),((function (idxr__37188__auto___88406,ident__37186__auto___88404,next_ident__37187__auto___88405,this__37182__auto__,x88389_88403){
return (function (indexes__37189__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__37189__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__37186__auto___88404], null),cljs.core.disj,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__37187__auto___88405], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__37182__auto__);
});})(idxr__37188__auto___88406,ident__37186__auto___88404,next_ident__37187__auto___88405,this__37182__auto__,x88389_88403))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__37182__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__37182__auto__);
});})(x88389_88403))
;

x88389_88403.shouldComponentUpdate = ((function (x88389_88403){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
var next_children__37185__auto__ = next_props__37183__auto__.children;
var next_props__37183__auto____$1 = goog.object.get(next_props__37183__auto__,"omcljs$value");
var next_props__37183__auto____$2 = (function (){var G__88391 = next_props__37183__auto____$1;
if((next_props__37183__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__88391);
} else {
return G__88391;
}
})();
var or__31951__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__37182__auto__),next_props__37183__auto____$2);
if(or__31951__auto__){
return or__31951__auto__;
} else {
var or__31951__auto____$1 = (function (){var and__31939__auto__ = this__37182__auto__.state;
if(cljs.core.truth_(and__31939__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__37182__auto__.state,"omcljs$state"),goog.object.get(next_state__37184__auto__,"omcljs$state"));
} else {
return and__31939__auto__;
}
})();
if(cljs.core.truth_(or__31951__auto____$1)){
return or__31951__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__37182__auto__.props.children,next_children__37185__auto__);
}
}
});})(x88389_88403))
;

x88389_88403.componentWillUnmount = ((function (x88389_88403){
return (function (){
var this__37182__auto__ = this;
var r__37193__auto__ = om.next.get_reconciler.call(null,this__37182__auto__);
var cfg__37194__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__37193__auto__);
var st__37195__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
var indexer__37192__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
if(cljs.core.truth_((function (){var and__31939__auto__ = !((st__37195__auto__ == null));
if(and__31939__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__37195__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__37182__auto__], null));
} else {
return and__31939__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__37195__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__37182__auto__);
} else {
}

if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88389_88403))
;

x88389_88403.componentDidUpdate = ((function (x88389_88403){
return (function (prev_props__37190__auto__,prev_state__37191__auto__){
var this__37182__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__37182__auto__);
});})(x88389_88403))
;

x88389_88403.isMounted = ((function (x88389_88403){
return (function (){
var this__37182__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__37182__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x88389_88403))
;

x88389_88403.componentWillMount = ((function (x88389_88403){
return (function (){
var this__37182__auto__ = this;
var indexer__37192__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88389_88403))
;

x88389_88403.render = ((function (x88389_88403){
return (function (){
var this__37181__auto__ = this;
var this$ = this__37181__auto__;
var _STAR_reconciler_STAR_88392 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_88393 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_88394 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_88395 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_88396 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__37181__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__37181__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__37181__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__37181__auto__);

om.next._STAR_parent_STAR_ = this__37181__auto__;

try{return om_tools.dom.element.call(null,React.DOM.div,(function (){var iter__32731__auto__ = ((function (_STAR_reconciler_STAR_88392,_STAR_depth_STAR_88393,_STAR_shared_STAR_88394,_STAR_instrument_STAR_88395,_STAR_parent_STAR_88396,this$,this__37181__auto__,x88389_88403){
return (function ui$core$iter__88397(s__88398){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_88392,_STAR_depth_STAR_88393,_STAR_shared_STAR_88394,_STAR_instrument_STAR_88395,_STAR_parent_STAR_88396,this$,this__37181__auto__,x88389_88403){
return (function (){
var s__88398__$1 = s__88398;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88398__$1);
if(temp__4657__auto__){
var s__88398__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88398__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__88398__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__88400 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__88399 = (0);
while(true){
if((i__88399 < size__32730__auto__)){
var proposal = cljs.core._nth.call(null,c__32729__auto__,i__88399);
cljs.core.chunk_append.call(null,b__88400,ui.core.proposal_component.call(null,proposal));

var G__88407 = (i__88399 + (1));
i__88399 = G__88407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88400),ui$core$iter__88397.call(null,cljs.core.chunk_rest.call(null,s__88398__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88400),null);
}
} else {
var proposal = cljs.core.first.call(null,s__88398__$2);
return cljs.core.cons.call(null,ui.core.proposal_component.call(null,proposal),ui$core$iter__88397.call(null,cljs.core.rest.call(null,s__88398__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_88392,_STAR_depth_STAR_88393,_STAR_shared_STAR_88394,_STAR_instrument_STAR_88395,_STAR_parent_STAR_88396,this$,this__37181__auto__,x88389_88403))
,null,null));
});})(_STAR_reconciler_STAR_88392,_STAR_depth_STAR_88393,_STAR_shared_STAR_88394,_STAR_instrument_STAR_88395,_STAR_parent_STAR_88396,this$,this__37181__auto__,x88389_88403))
;
return iter__32731__auto__.call(null,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})(),cljs.core.PersistentVector.EMPTY);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_88396;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_88395;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_88394;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_88393;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_88392;
}});})(x88389_88403))
;


ui.core.Proposals.prototype.constructor = ui.core.Proposals;

ui.core.Proposals.prototype.constructor.displayName = "ui.core/Proposals";

ui.core.Proposals.prototype.om$isComponent = true;

var x88401_88408 = ui.core.Proposals;
/** @nocollapse */
x88401_88408.om$next$IQuery$ = true;

/** @nocollapse */
x88401_88408.om$next$IQuery$query$arity$1 = ((function (x88401_88408){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x88401_88408))
;


var x88402_88409 = ui.core.Proposals.prototype;

x88402_88409.om$next$IQuery$ = true;


x88402_88409.om$next$IQuery$query$arity$1 = ((function (x88402_88409){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x88402_88409))
;


ui.core.Proposals.cljs$lang$type = true;

ui.core.Proposals.cljs$lang$ctorStr = "ui.core/Proposals";

ui.core.Proposals.cljs$lang$ctorPrWriter = (function (this__37294__auto__,writer__37295__auto__,opt__37296__auto__){
return cljs.core._write.call(null,writer__37295__auto__,"ui.core/Proposals");
});
ui.core.proposals_component = om.next.factory.call(null,ui.core.Proposals);
/**
 * @constructor
 */
ui.core.Stake = (function ui$core$Stake(){
var this__37291__auto__ = this;
React.Component.apply(this__37291__auto__,arguments);

if(!((this__37291__auto__.initLocalState == null))){
this__37291__auto__.state = this__37291__auto__.initLocalState();
} else {
this__37291__auto__.state = {};
}

return this__37291__auto__;
});

ui.core.Stake.prototype = goog.object.clone(React.Component.prototype);

var x88414_88426 = ui.core.Stake.prototype;
x88414_88426.componentWillUpdate = ((function (x88414_88426){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
if(((!((this__37182__auto__ == null)))?(((false) || (this__37182__auto__.om$next$Ident$))?true:false):false)){
var ident__37186__auto___88427 = om.next.ident.call(null,this__37182__auto__,om.next.props.call(null,this__37182__auto__));
var next_ident__37187__auto___88428 = om.next.ident.call(null,this__37182__auto__,om.next._next_props.call(null,next_props__37183__auto__,this__37182__auto__));
if(cljs.core.not_EQ_.call(null,ident__37186__auto___88427,next_ident__37187__auto___88428)){
var idxr__37188__auto___88429 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__37188__auto___88429 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__37188__auto___88429),((function (idxr__37188__auto___88429,ident__37186__auto___88427,next_ident__37187__auto___88428,this__37182__auto__,x88414_88426){
return (function (indexes__37189__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__37189__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__37186__auto___88427], null),cljs.core.disj,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__37187__auto___88428], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__37182__auto__);
});})(idxr__37188__auto___88429,ident__37186__auto___88427,next_ident__37187__auto___88428,this__37182__auto__,x88414_88426))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__37182__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__37182__auto__);
});})(x88414_88426))
;

x88414_88426.shouldComponentUpdate = ((function (x88414_88426){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
var next_children__37185__auto__ = next_props__37183__auto__.children;
var next_props__37183__auto____$1 = goog.object.get(next_props__37183__auto__,"omcljs$value");
var next_props__37183__auto____$2 = (function (){var G__88416 = next_props__37183__auto____$1;
if((next_props__37183__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__88416);
} else {
return G__88416;
}
})();
var or__31951__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__37182__auto__),next_props__37183__auto____$2);
if(or__31951__auto__){
return or__31951__auto__;
} else {
var or__31951__auto____$1 = (function (){var and__31939__auto__ = this__37182__auto__.state;
if(cljs.core.truth_(and__31939__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__37182__auto__.state,"omcljs$state"),goog.object.get(next_state__37184__auto__,"omcljs$state"));
} else {
return and__31939__auto__;
}
})();
if(cljs.core.truth_(or__31951__auto____$1)){
return or__31951__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__37182__auto__.props.children,next_children__37185__auto__);
}
}
});})(x88414_88426))
;

x88414_88426.componentWillUnmount = ((function (x88414_88426){
return (function (){
var this__37182__auto__ = this;
var r__37193__auto__ = om.next.get_reconciler.call(null,this__37182__auto__);
var cfg__37194__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__37193__auto__);
var st__37195__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
var indexer__37192__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
if(cljs.core.truth_((function (){var and__31939__auto__ = !((st__37195__auto__ == null));
if(and__31939__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__37195__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__37182__auto__], null));
} else {
return and__31939__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__37195__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__37182__auto__);
} else {
}

if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88414_88426))
;

x88414_88426.componentDidUpdate = ((function (x88414_88426){
return (function (prev_props__37190__auto__,prev_state__37191__auto__){
var this__37182__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__37182__auto__);
});})(x88414_88426))
;

x88414_88426.isMounted = ((function (x88414_88426){
return (function (){
var this__37182__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__37182__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x88414_88426))
;

x88414_88426.componentWillMount = ((function (x88414_88426){
return (function (){
var this__37182__auto__ = this;
var indexer__37192__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88414_88426))
;

x88414_88426.render = ((function (x88414_88426){
return (function (){
var this__37181__auto__ = this;
var this$ = this__37181__auto__;
var _STAR_reconciler_STAR_88417 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_88418 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_88419 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_88420 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_88421 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__37181__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__37181__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__37181__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__37181__auto__);

om.next._STAR_parent_STAR_ = this__37181__auto__;

try{var map__88422 = om.next.props.call(null,this$);
var map__88422__$1 = ((((!((map__88422 == null)))?((((map__88422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88422):map__88422);
var id = cljs.core.get.call(null,map__88422__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var value = cljs.core.get.call(null,map__88422__$1,new cljs.core.Keyword("stake","value","stake/value",466231031));
return om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,id,cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,value,cljs.core.PersistentVector.EMPTY)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_88421;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_88420;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_88419;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_88418;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_88417;
}});})(x88414_88426))
;


ui.core.Stake.prototype.constructor = ui.core.Stake;

ui.core.Stake.prototype.constructor.displayName = "ui.core/Stake";

ui.core.Stake.prototype.om$isComponent = true;

var x88424_88430 = ui.core.Stake;
/** @nocollapse */
x88424_88430.om$next$IQuery$ = true;

/** @nocollapse */
x88424_88430.om$next$IQuery$query$arity$1 = ((function (x88424_88430){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x88424_88430))
;


var x88425_88431 = ui.core.Stake.prototype;

x88425_88431.om$next$IQuery$ = true;


x88425_88431.om$next$IQuery$query$arity$1 = ((function (x88425_88431){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x88425_88431))
;


ui.core.Stake.cljs$lang$type = true;

ui.core.Stake.cljs$lang$ctorStr = "ui.core/Stake";

ui.core.Stake.cljs$lang$ctorPrWriter = (function (this__37294__auto__,writer__37295__auto__,opt__37296__auto__){
return cljs.core._write.call(null,writer__37295__auto__,"ui.core/Stake");
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
var this__37291__auto__ = this;
React.Component.apply(this__37291__auto__,arguments);

if(!((this__37291__auto__.initLocalState == null))){
this__37291__auto__.state = this__37291__auto__.initLocalState();
} else {
this__37291__auto__.state = {};
}

return this__37291__auto__;
});

ui.core.Stakes.prototype = goog.object.clone(React.Component.prototype);

var x88436_88456 = ui.core.Stakes.prototype;
x88436_88456.componentWillUpdate = ((function (x88436_88456){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
if(((!((this__37182__auto__ == null)))?(((false) || (this__37182__auto__.om$next$Ident$))?true:false):false)){
var ident__37186__auto___88457 = om.next.ident.call(null,this__37182__auto__,om.next.props.call(null,this__37182__auto__));
var next_ident__37187__auto___88458 = om.next.ident.call(null,this__37182__auto__,om.next._next_props.call(null,next_props__37183__auto__,this__37182__auto__));
if(cljs.core.not_EQ_.call(null,ident__37186__auto___88457,next_ident__37187__auto___88458)){
var idxr__37188__auto___88459 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__37188__auto___88459 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__37188__auto___88459),((function (idxr__37188__auto___88459,ident__37186__auto___88457,next_ident__37187__auto___88458,this__37182__auto__,x88436_88456){
return (function (indexes__37189__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__37189__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__37186__auto___88457], null),cljs.core.disj,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__37187__auto___88458], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__37182__auto__);
});})(idxr__37188__auto___88459,ident__37186__auto___88457,next_ident__37187__auto___88458,this__37182__auto__,x88436_88456))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__37182__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__37182__auto__);
});})(x88436_88456))
;

x88436_88456.shouldComponentUpdate = ((function (x88436_88456){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
var next_children__37185__auto__ = next_props__37183__auto__.children;
var next_props__37183__auto____$1 = goog.object.get(next_props__37183__auto__,"omcljs$value");
var next_props__37183__auto____$2 = (function (){var G__88438 = next_props__37183__auto____$1;
if((next_props__37183__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__88438);
} else {
return G__88438;
}
})();
var or__31951__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__37182__auto__),next_props__37183__auto____$2);
if(or__31951__auto__){
return or__31951__auto__;
} else {
var or__31951__auto____$1 = (function (){var and__31939__auto__ = this__37182__auto__.state;
if(cljs.core.truth_(and__31939__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__37182__auto__.state,"omcljs$state"),goog.object.get(next_state__37184__auto__,"omcljs$state"));
} else {
return and__31939__auto__;
}
})();
if(cljs.core.truth_(or__31951__auto____$1)){
return or__31951__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__37182__auto__.props.children,next_children__37185__auto__);
}
}
});})(x88436_88456))
;

x88436_88456.componentWillUnmount = ((function (x88436_88456){
return (function (){
var this__37182__auto__ = this;
var r__37193__auto__ = om.next.get_reconciler.call(null,this__37182__auto__);
var cfg__37194__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__37193__auto__);
var st__37195__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
var indexer__37192__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__37194__auto__);
if(cljs.core.truth_((function (){var and__31939__auto__ = !((st__37195__auto__ == null));
if(and__31939__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__37195__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__37182__auto__], null));
} else {
return and__31939__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__37195__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__37182__auto__);
} else {
}

if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88436_88456))
;

x88436_88456.componentDidUpdate = ((function (x88436_88456){
return (function (prev_props__37190__auto__,prev_state__37191__auto__){
var this__37182__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__37182__auto__);
});})(x88436_88456))
;

x88436_88456.isMounted = ((function (x88436_88456){
return (function (){
var this__37182__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__37182__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x88436_88456))
;

x88436_88456.componentWillMount = ((function (x88436_88456){
return (function (){
var this__37182__auto__ = this;
var indexer__37192__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88436_88456))
;

x88436_88456.initLocalState = ((function (x88436_88456){
return (function (){
var this$ = this;
var ret__37160__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var obj88440 = {"omcljs$state":ret__37160__auto__};
return obj88440;
});})(x88436_88456))
;

x88436_88456.render = ((function (x88436_88456){
return (function (){
var this__37181__auto__ = this;
var this$ = this__37181__auto__;
var _STAR_reconciler_STAR_88441 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_88442 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_88443 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_88444 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_88445 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__37181__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__37181__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__37181__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__37181__auto__);

om.next._STAR_parent_STAR_ = this__37181__auto__;

try{var map__88446 = om.next.props.call(null,this$);
var map__88446__$1 = ((((!((map__88446 == null)))?((((map__88446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88446):map__88446);
var stakes = cljs.core.get.call(null,map__88446__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__88446__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__88447 = user;
var map__88447__$1 = ((((!((map__88447 == null)))?((((map__88447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88447):map__88447);
var stake = cljs.core.get.call(null,map__88447__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var address = cljs.core.get.call(null,map__88447__$1,new cljs.core.Keyword("user","address","user/address",573600859));
var balance = cljs.core.get.call(null,map__88447__$1,new cljs.core.Keyword("user","balance","user/balance",422509480));
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.8})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Current Stake"),((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?ui.core.mining_spinner.call(null):cljs.core.apply.call(null,React.DOM.h3,({"style": ({"color": "#2b95d6"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[stake," ETH"],null))))),cljs.core.apply.call(null,React.DOM.span,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["(associated with account ",ui.core.format_address.call(null,address),")"],null)))),(((stake === (0)))?React.DOM.div(({"className": "pt-callout pt-icon-info-sign", "style": ({"marginTop": "0.5rem"})}),"You do not currently have any voting stake for EthereanMind. To be able to vote on proposals and top 10 items, you need to deposit some fully-refundable coins into the EthereanMind staking contract."):null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group", "style": ({"marginTop": "0.5rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__88446,map__88446__$1,stakes,user,map__88447,map__88447__$1,stake,address,balance,_STAR_reconciler_STAR_88441,_STAR_depth_STAR_88442,_STAR_shared_STAR_88443,_STAR_instrument_STAR_88444,_STAR_parent_STAR_88445,this$,this__37181__auto__,x88436_88456){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"value","value",305978217),""], null));
});})(map__88446,map__88446__$1,stakes,user,map__88447,map__88447__$1,stake,address,balance,_STAR_reconciler_STAR_88441,_STAR_depth_STAR_88442,_STAR_shared_STAR_88443,_STAR_instrument_STAR_88444,_STAR_parent_STAR_88445,this$,this__37181__auto__,x88436_88456))
], null),"Deposit Stake"),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__88446,map__88446__$1,stakes,user,map__88447,map__88447__$1,stake,address,balance,_STAR_reconciler_STAR_88441,_STAR_depth_STAR_88442,_STAR_shared_STAR_88443,_STAR_instrument_STAR_88444,_STAR_parent_STAR_88445,this$,this__37181__auto__,x88436_88456){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"withdraw","withdraw",1469652053)], null));
});})(map__88446,map__88446__$1,stakes,user,map__88447,map__88447__$1,stake,address,balance,_STAR_reconciler_STAR_88441,_STAR_depth_STAR_88442,_STAR_shared_STAR_88443,_STAR_instrument_STAR_88444,_STAR_parent_STAR_88445,this$,this__37181__auto__,x88436_88456))
], null),"Withdraw Stake")],null))))],null)))),(function (){var map__88450 = om.next.get_state.call(null,this$);
var map__88450__$1 = ((((!((map__88450 == null)))?((((map__88450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88450):map__88450);
var dialog = cljs.core.get.call(null,map__88450__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__88451 = dialog;
var map__88451__$1 = ((((!((map__88451 == null)))?((((map__88451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88451):map__88451);
var type = cljs.core.get.call(null,map__88451__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__88451__$1,new cljs.core.Keyword(null,"value","value",305978217));
var value_status = ((cljs.core._EQ_.call(null,value,""))?new cljs.core.Keyword(null,"missing","missing",362507769):(((value <= balance))?new cljs.core.Keyword(null,"good","good",511701169):new cljs.core.Keyword(null,"bad","bad",1127186645)
));
var close_dialog = ((function (value_status,map__88450,map__88450__$1,dialog,map__88451,map__88451__$1,type,value,map__88446,map__88446__$1,stakes,user,map__88447,map__88447__$1,stake,address,balance,_STAR_reconciler_STAR_88441,_STAR_depth_STAR_88442,_STAR_shared_STAR_88443,_STAR_instrument_STAR_88444,_STAR_parent_STAR_88445,this$,this__37181__auto__,x88436_88456){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,map__88450,map__88450__$1,dialog,map__88451,map__88451__$1,type,value,map__88446,map__88446__$1,stakes,user,map__88447,map__88447__$1,stake,address,balance,_STAR_reconciler_STAR_88441,_STAR_depth_STAR_88442,_STAR_shared_STAR_88443,_STAR_instrument_STAR_88444,_STAR_parent_STAR_88445,this$,this__37181__auto__,x88436_88456))
;
return blueprint_cljs.core.dialog.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-close","on-close",-761178394),close_dialog,new cljs.core.Keyword(null,"title","title",636505583),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit Stake":"Withdraw Stake")], null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-body"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,"In order to vote on ethereanmind you need to place a refundable deposit of ether. You will be able to start voting immediately after depositing ether, but you need to wait a month before you can withdraw your deposit again."),om_tools.dom.element.call(null,React.DOM.p,React.DOM.b(null,"The rules of the smart contract assure that no one else can withdraw your money and that you will receive back 100% of your deposit."),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Balance available: ",balance," Ether"],null)))),blueprint_cljs.core.input_group.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Deposit Amount (Ether)",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"right-element","right-element",-375920256),((cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"missing","missing",362507769)))?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)))?"pt-icon-tick pt-intent-success":"pt-icon-cross pt-intent-danger")], null)):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value_status,close_dialog,map__88450,map__88450__$1,dialog,map__88451,map__88451__$1,type,value,map__88446,map__88446__$1,stakes,user,map__88447,map__88447__$1,stake,address,balance,_STAR_reconciler_STAR_88441,_STAR_depth_STAR_88442,_STAR_shared_STAR_88443,_STAR_instrument_STAR_88444,_STAR_parent_STAR_88445,this$,this__37181__auto__,x88436_88456){
return (function (e){
var value_new = e.target.value;
if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]*\.?[0-9]*/,value_new))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value_new);
} else {
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value);
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noise","noise",-994696820)], null),cljs.core.rand_int.call(null,(1000000)));
});})(value_status,close_dialog,map__88450,map__88450__$1,dialog,map__88451,map__88451__$1,type,value,map__88446,map__88446__$1,stakes,user,map__88447,map__88447__$1,stake,address,balance,_STAR_reconciler_STAR_88441,_STAR_depth_STAR_88442,_STAR_shared_STAR_88443,_STAR_instrument_STAR_88444,_STAR_parent_STAR_88445,this$,this__37181__auto__,x88436_88456))
], null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can now withdraw all of your stake (Currently ",stake," Ether) back into your regular ethereum account at [",ui.core.format_address.call(null,address),"]. At that point, you will no longer be able to participate in voting- You'll need to deposit new funds to vote again."],null))))], null))],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer-actions"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)),new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_status,close_dialog,map__88450,map__88450__$1,dialog,map__88451,map__88451__$1,type,value,map__88446,map__88446__$1,stakes,user,map__88447,map__88447__$1,stake,address,balance,_STAR_reconciler_STAR_88441,_STAR_depth_STAR_88442,_STAR_shared_STAR_88443,_STAR_instrument_STAR_88444,_STAR_parent_STAR_88445,this$,this__37181__auto__,x88436_88456){
return (function (e){
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851))){
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null)),(function (){var x__32785__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__32785__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339)))))));
} else {
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","withdraw","user/withdraw",-1187344809,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339)))))));
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,close_dialog,map__88450,map__88450__$1,dialog,map__88451,map__88451__$1,type,value,map__88446,map__88446__$1,stakes,user,map__88447,map__88447__$1,stake,address,balance,_STAR_reconciler_STAR_88441,_STAR_depth_STAR_88442,_STAR_shared_STAR_88443,_STAR_instrument_STAR_88444,_STAR_parent_STAR_88445,this$,this__37181__auto__,x88436_88456))
], null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit":"Withdraw")),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_dialog], null),"Cancel")],null))))],null)))));
})(),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"marginTop": "1rem", "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Staking Statistics"),React.DOM.div(null,"If you're curious about who else is using this dapp, and are using an ethereum data source that can handle large queres, click this button:"),cljs.core.apply.call(null,React.DOM.p,({"style": ({"margin": "1em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.i(null,"(Coming Soon...)")],null))))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_88445;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_88444;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_88443;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_88442;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_88441;
}});})(x88436_88456))
;


ui.core.Stakes.prototype.constructor = ui.core.Stakes;

ui.core.Stakes.prototype.constructor.displayName = "ui.core/Stakes";

ui.core.Stakes.prototype.om$isComponent = true;

var x88454_88460 = ui.core.Stakes;
/** @nocollapse */
x88454_88460.om$next$IQuery$ = true;

/** @nocollapse */
x88454_88460.om$next$IQuery$query$arity$1 = ((function (x88454_88460){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x88454_88460))
;


var x88455_88461 = ui.core.Stakes.prototype;

x88455_88461.om$next$IQuery$ = true;


x88455_88461.om$next$IQuery$query$arity$1 = ((function (x88455_88461){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x88455_88461))
;


ui.core.Stakes.cljs$lang$type = true;

ui.core.Stakes.cljs$lang$ctorStr = "ui.core/Stakes";

ui.core.Stakes.cljs$lang$ctorPrWriter = (function (this__37294__auto__,writer__37295__auto__,opt__37296__auto__){
return cljs.core._write.call(null,writer__37295__auto__,"ui.core/Stakes");
});
ui.core.stakes_component = om.next.factory.call(null,ui.core.Stakes);
ui.core.canvas_resolution = (800);
ui.core.brain_prerender = (function ui$core$brain_prerender(sections){
return new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__88476,item){
var map__88477 = p__88476;
var map__88477__$1 = ((((!((map__88477 == null)))?((((map__88477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88477):map__88477);
var acc = map__88477__$1;
var vertices = cljs.core.get.call(null,map__88477__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var vertex_colors = cljs.core.get.call(null,map__88477__$1,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377));
var index = cljs.core.get.call(null,map__88477__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.call(null,map__88477__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var map__88479 = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"length","length",588987862),(function (){var iter__32731__auto__ = ((function (map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__88480(s__88481){
return (new cljs.core.LazySeq(null,((function (map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__88481__$1 = s__88481;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88481__$1);
if(temp__4657__auto__){
var s__88481__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88481__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__88481__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__88483 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__88482 = (0);
while(true){
if((i__88482 < size__32730__auto__)){
var coord = cljs.core._nth.call(null,c__32729__auto__,i__88482);
cljs.core.chunk_append.call(null,b__88483,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (i__88482,region_size,coord,c__32729__auto__,size__32730__auto__,b__88483,s__88481__$2,temp__4657__auto__,map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__88462_SHARP_){
return cljs.core.nth.call(null,p1__88462_SHARP_,coord);
});})(i__88482,region_size,coord,c__32729__auto__,size__32730__auto__,b__88483,s__88481__$2,temp__4657__auto__,map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})());

var G__88489 = (i__88482 + (1));
i__88482 = G__88489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88483),ui$core$brain_prerender_$_iter__88480.call(null,cljs.core.chunk_rest.call(null,s__88481__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88483),null);
}
} else {
var coord = cljs.core.first.call(null,s__88481__$2);
return cljs.core.cons.call(null,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (region_size,coord,s__88481__$2,temp__4657__auto__,map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__88462_SHARP_){
return cljs.core.nth.call(null,p1__88462_SHARP_,coord);
});})(region_size,coord,s__88481__$2,temp__4657__auto__,map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})(),ui$core$brain_prerender_$_iter__88480.call(null,cljs.core.rest.call(null,s__88481__$2)));
}
} else {
return null;
}
break;
}
});})(map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total))
;
return iter__32731__auto__.call(null,cljs.core.range.call(null,(3)));
})()));
var map__88479__$1 = ((((!((map__88479 == null)))?((((map__88479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88479):map__88479);
var cur_vertices = cljs.core.get.call(null,map__88479__$1,new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716));
var rest_vertices = cljs.core.get.call(null,map__88479__$1,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),rest_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.into.call(null,vertex_colors,(function (){var iter__32731__auto__ = ((function (map__88479,map__88479__$1,cur_vertices,rest_vertices,map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__88485(s__88486){
return (new cljs.core.LazySeq(null,((function (map__88479,map__88479__$1,cur_vertices,rest_vertices,map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__88486__$1 = s__88486;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88486__$1);
if(temp__4657__auto__){
var s__88486__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88486__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__88486__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__88488 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__88487 = (0);
while(true){
if((i__88487 < size__32730__auto__)){
var vertex = cljs.core._nth.call(null,c__32729__auto__,i__88487);
cljs.core.chunk_append.call(null,b__88488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null));

var G__88490 = (i__88487 + (1));
i__88487 = G__88490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88488),ui$core$brain_prerender_$_iter__88485.call(null,cljs.core.chunk_rest.call(null,s__88486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88488),null);
}
} else {
var vertex = cljs.core.first.call(null,s__88486__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null),ui$core$brain_prerender_$_iter__88485.call(null,cljs.core.rest.call(null,s__88486__$2)));
}
} else {
return null;
}
break;
}
});})(map__88479,map__88479__$1,cur_vertices,rest_vertices,map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__88479,map__88479__$1,cur_vertices,rest_vertices,map__88477,map__88477__$1,acc,vertices,vertex_colors,index,total))
;
return iter__32731__auto__.call(null,cur_vertices);
})()),new cljs.core.Keyword(null,"index","index",-1531685915),(index + (1)),new cljs.core.Keyword(null,"total","total",1916810418),(total - new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))], null);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),ui.core.brain_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"size","size",1098693007),sections))], null),sections));
});
ui.core.render_graph = (function ui$core$render_graph(brain_faces,vertexes,vertex_colors){
var iter__32731__auto__ = (function ui$core$render_graph_$_iter__88523(s__88524){
return (new cljs.core.LazySeq(null,(function (){
var s__88524__$1 = s__88524;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88524__$1);
if(temp__4657__auto__){
var s__88524__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88524__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__88524__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__88526 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__88525 = (0);
while(true){
if((i__88525 < size__32730__auto__)){
var vec__88541 = cljs.core._nth.call(null,c__32729__auto__,i__88525);
var region = cljs.core.nth.call(null,vec__88541,(0),null);
var faces = cljs.core.nth.call(null,vec__88541,(1),null);
cljs.core.chunk_append.call(null,b__88526,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__32731__auto__ = ((function (i__88525,vec__88541,region,faces,c__32729__auto__,size__32730__auto__,b__88526,s__88524__$2,temp__4657__auto__){
return (function ui$core$render_graph_$_iter__88523_$_iter__88544(s__88545){
return (new cljs.core.LazySeq(null,((function (i__88525,vec__88541,region,faces,c__32729__auto__,size__32730__auto__,b__88526,s__88524__$2,temp__4657__auto__){
return (function (){
var s__88545__$1 = s__88545;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__88545__$1);
if(temp__4657__auto____$1){
var s__88545__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88545__$2)){
var c__32729__auto____$1 = cljs.core.chunk_first.call(null,s__88545__$2);
var size__32730__auto____$1 = cljs.core.count.call(null,c__32729__auto____$1);
var b__88547 = cljs.core.chunk_buffer.call(null,size__32730__auto____$1);
if((function (){var i__88546 = (0);
while(true){
if((i__88546 < size__32730__auto____$1)){
var n = cljs.core._nth.call(null,c__32729__auto____$1,i__88546);
cljs.core.chunk_append.call(null,b__88547,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__88546,i__88525,n,c__32729__auto____$1,size__32730__auto____$1,b__88547,s__88545__$2,temp__4657__auto____$1,vec__88541,region,faces,c__32729__auto__,size__32730__auto__,b__88526,s__88524__$2,temp__4657__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__88546,i__88525,n,c__32729__auto____$1,size__32730__auto____$1,b__88547,s__88545__$2,temp__4657__auto____$1,vec__88541,region,faces,c__32729__auto__,size__32730__auto__,b__88526,s__88524__$2,temp__4657__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__88555 = (i__88546 + (1));
i__88546 = G__88555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88547),ui$core$render_graph_$_iter__88523_$_iter__88544.call(null,cljs.core.chunk_rest.call(null,s__88545__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88547),null);
}
} else {
var n = cljs.core.first.call(null,s__88545__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__88525,n,s__88545__$2,temp__4657__auto____$1,vec__88541,region,faces,c__32729__auto__,size__32730__auto__,b__88526,s__88524__$2,temp__4657__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__88525,n,s__88545__$2,temp__4657__auto____$1,vec__88541,region,faces,c__32729__auto__,size__32730__auto__,b__88526,s__88524__$2,temp__4657__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__88523_$_iter__88544.call(null,cljs.core.rest.call(null,s__88545__$2)));
}
} else {
return null;
}
break;
}
});})(i__88525,vec__88541,region,faces,c__32729__auto__,size__32730__auto__,b__88526,s__88524__$2,temp__4657__auto__))
,null,null));
});})(i__88525,vec__88541,region,faces,c__32729__auto__,size__32730__auto__,b__88526,s__88524__$2,temp__4657__auto__))
;
return iter__32731__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (i__88525,dist,max_dist,mult,centroid,vec__88541,region,faces,c__32729__auto__,size__32730__auto__,b__88526,s__88524__$2,temp__4657__auto__){
return (function (y){
var x__32282__auto__ = (function (){var x__32289__auto__ = 0.11;
var y__32290__auto__ = (y * 0.9);
return ((x__32289__auto__ < y__32290__auto__) ? x__32289__auto__ : y__32290__auto__);
})();
var y__32283__auto__ = -0.05;
return ((x__32282__auto__ > y__32283__auto__) ? x__32282__auto__ : y__32283__auto__);
});})(i__88525,dist,max_dist,mult,centroid,vec__88541,region,faces,c__32729__auto__,size__32730__auto__,b__88526,s__88524__$2,temp__4657__auto__))
);
})()], null);
})());

var G__88556 = (i__88525 + (1));
i__88525 = G__88556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88526),ui$core$render_graph_$_iter__88523.call(null,cljs.core.chunk_rest.call(null,s__88524__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88526),null);
}
} else {
var vec__88548 = cljs.core.first.call(null,s__88524__$2);
var region = cljs.core.nth.call(null,vec__88548,(0),null);
var faces = cljs.core.nth.call(null,vec__88548,(1),null);
return cljs.core.cons.call(null,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__32731__auto__ = ((function (vec__88548,region,faces,s__88524__$2,temp__4657__auto__){
return (function ui$core$render_graph_$_iter__88523_$_iter__88551(s__88552){
return (new cljs.core.LazySeq(null,((function (vec__88548,region,faces,s__88524__$2,temp__4657__auto__){
return (function (){
var s__88552__$1 = s__88552;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__88552__$1);
if(temp__4657__auto____$1){
var s__88552__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88552__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__88552__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__88554 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__88553 = (0);
while(true){
if((i__88553 < size__32730__auto__)){
var n = cljs.core._nth.call(null,c__32729__auto__,i__88553);
cljs.core.chunk_append.call(null,b__88554,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__88553,n,c__32729__auto__,size__32730__auto__,b__88554,s__88552__$2,temp__4657__auto____$1,vec__88548,region,faces,s__88524__$2,temp__4657__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__88553,n,c__32729__auto__,size__32730__auto__,b__88554,s__88552__$2,temp__4657__auto____$1,vec__88548,region,faces,s__88524__$2,temp__4657__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__88557 = (i__88553 + (1));
i__88553 = G__88557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88554),ui$core$render_graph_$_iter__88523_$_iter__88551.call(null,cljs.core.chunk_rest.call(null,s__88552__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88554),null);
}
} else {
var n = cljs.core.first.call(null,s__88552__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (n,s__88552__$2,temp__4657__auto____$1,vec__88548,region,faces,s__88524__$2,temp__4657__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(n,s__88552__$2,temp__4657__auto____$1,vec__88548,region,faces,s__88524__$2,temp__4657__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__88523_$_iter__88551.call(null,cljs.core.rest.call(null,s__88552__$2)));
}
} else {
return null;
}
break;
}
});})(vec__88548,region,faces,s__88524__$2,temp__4657__auto__))
,null,null));
});})(vec__88548,region,faces,s__88524__$2,temp__4657__auto__))
;
return iter__32731__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (dist,max_dist,mult,centroid,vec__88548,region,faces,s__88524__$2,temp__4657__auto__){
return (function (y){
var x__32282__auto__ = (function (){var x__32289__auto__ = 0.11;
var y__32290__auto__ = (y * 0.9);
return ((x__32289__auto__ < y__32290__auto__) ? x__32289__auto__ : y__32290__auto__);
})();
var y__32283__auto__ = -0.05;
return ((x__32282__auto__ > y__32283__auto__) ? x__32282__auto__ : y__32283__auto__);
});})(dist,max_dist,mult,centroid,vec__88548,region,faces,s__88524__$2,temp__4657__auto__))
);
})()], null);
})(),ui$core$render_graph_$_iter__88523.call(null,cljs.core.rest.call(null,s__88524__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__32731__auto__.call(null,cljs.core.group_by.call(null,((function (iter__32731__auto__){
return (function (k){
return vertex_colors.call(null,vertexes.call(null,cljs.core.first.call(null,k)));
});})(iter__32731__auto__))
,brain_faces));
});
ui.core.region_color = (function ui$core$region_color(index){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.2,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),0.2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),0.2], null)], null).call(null,index);
});
ui.core.point__GT_screen = (function ui$core$point__GT_screen(canvas_resolution,rotation,p__88558){
var vec__88562 = p__88558;
var xx = cljs.core.nth.call(null,vec__88562,(0),null);
var yy = cljs.core.nth.call(null,vec__88562,(1),null);
var zz = cljs.core.nth.call(null,vec__88562,(2),null);
var vertex = vec__88562;
var sin = Math.sin(rotation);
var cos = Math.cos(rotation);
var x = ((sin * xx) - (cos * yy));
var y = (- zz);
var z = ((8) * ((cos * xx) + (sin * yy)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((canvas_resolution / (2)) + (((4) * x) * canvas_resolution)),((canvas_resolution / 2.2) + (((4) * y) * canvas_resolution)),z], null);
});
ui.core.brain_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0),new cljs.core.Keyword(null,"sections","sections",-886710106),null,new cljs.core.Keyword(null,"colored","colored",-1421800355),(1)], null));
ui.core.render_brain = (function ui$core$render_brain(ctx,rotation,render_graph){
var starting_time = ui.util.get_tick_count.call(null);
var vertices = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,ui.core.point__GT_screen,ui.core.canvas_resolution,rotation),ui.core.brain_vertices));
var line = ((function (starting_time,vertices){
return (function (a,b){
var G__88659 = ctx;
G__88659.beginPath();

G__88659.moveTo(vertices.call(null,a).call(null,(0)),vertices.call(null,a).call(null,(1)));

G__88659.lineTo(vertices.call(null,b).call(null,(0)),vertices.call(null,b).call(null,(1)));

G__88659.stroke();

return G__88659;
});})(starting_time,vertices))
;
var rgb = ((function (starting_time,vertices,line){
return (function (color,brightness,opaque){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var iter__32731__auto__ = ((function (starting_time,vertices,line){
return (function ui$core$render_brain_$_iter__88660(s__88661){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line){
return (function (){
var s__88661__$1 = s__88661;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88661__$1);
if(temp__4657__auto__){
var s__88661__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88661__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__88661__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__88663 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__88662 = (0);
while(true){
if((i__88662 < size__32730__auto__)){
var c = cljs.core._nth.call(null,c__32729__auto__,i__88662);
cljs.core.chunk_append.call(null,b__88663,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__32289__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__32290__auto__ = (255);
return ((x__32289__auto__ < y__32290__auto__) ? x__32289__auto__ : y__32290__auto__);
})()) + (((1) - colored) * (255))) | (0));
})());

var G__88753 = (i__88662 + (1));
i__88662 = G__88753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88663),ui$core$render_brain_$_iter__88660.call(null,cljs.core.chunk_rest.call(null,s__88661__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88663),null);
}
} else {
var c = cljs.core.first.call(null,s__88661__$2);
return cljs.core.cons.call(null,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__32289__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__32290__auto__ = (255);
return ((x__32289__auto__ < y__32290__auto__) ? x__32289__auto__ : y__32290__auto__);
})()) + (((1) - colored) * (255))) | (0));
})(),ui$core$render_brain_$_iter__88660.call(null,cljs.core.rest.call(null,s__88661__$2)));
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
return iter__32731__auto__.call(null,color);
})()),(cljs.core.truth_(opaque)?((0) + ((1) * new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)))):(0.05 + (0.45 * new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)))))))))].join('');
});})(starting_time,vertices,line))
;
var set_color = ((function (starting_time,vertices,line,rgb){
return (function (color,brightness){
return ctx.strokeStyle = rgb.call(null,color,brightness,false);
});})(starting_time,vertices,line,rgb))
;
var render_text = ((function (starting_time,vertices,line,rgb,set_color){
return (function (p__88664){
var map__88665 = p__88664;
var map__88665__$1 = ((((!((map__88665 == null)))?((((map__88665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88665):map__88665);
var text = cljs.core.get.call(null,map__88665__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var color = cljs.core.get.call(null,map__88665__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var location = cljs.core.get.call(null,map__88665__$1,new cljs.core.Keyword(null,"location","location",1815599388));
if((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)) > (0))){
ctx.lineWidth = (4);

var vec__88667_88754 = location;
var x_88755 = cljs.core.nth.call(null,vec__88667_88754,(0),null);
var y_88756 = cljs.core.nth.call(null,vec__88667_88754,(1),null);
var z_88757 = cljs.core.nth.call(null,vec__88667_88754,(2),null);
ctx.strokeStyle = "#111A22";

ctx.fillStyle = rgb.call(null,color,((z_88757 * (2)) + (1)),true);

cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (vec__88667_88754,x_88755,y_88756,z_88757,map__88665,map__88665__$1,text,color,location,starting_time,vertices,line,rgb,set_color){
return (function (index,s){
var G__88670 = ctx;
G__88670.strokeText(s,x_88755,(y_88756 + (index * (15))));

G__88670.fillText(s,x_88755,(y_88756 + (index * (15))));

return G__88670;
});})(vec__88667_88754,x_88755,y_88756,z_88757,map__88665,map__88665__$1,text,color,location,starting_time,vertices,line,rgb,set_color))
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
,(function (){var iter__32731__auto__ = ((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function ui$core$render_brain_$_iter__88671(s__88672){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (){
var s__88672__$1 = s__88672;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88672__$1);
if(temp__4657__auto__){
var s__88672__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88672__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__88672__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__88674 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__88673 = (0);
while(true){
if((i__88673 < size__32730__auto__)){
var map__88679 = cljs.core._nth.call(null,c__32729__auto__,i__88673);
var map__88679__$1 = ((((!((map__88679 == null)))?((((map__88679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88679):map__88679);
var region = cljs.core.get.call(null,map__88679__$1,new cljs.core.Keyword(null,"region","region",270415120));
var centroid = cljs.core.get.call(null,map__88679__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__88679__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append.call(null,b__88674,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null));

var G__88758 = (i__88673 + (1));
i__88673 = G__88758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88674),ui$core$render_brain_$_iter__88671.call(null,cljs.core.chunk_rest.call(null,s__88672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88674),null);
}
} else {
var map__88681 = cljs.core.first.call(null,s__88672__$2);
var map__88681__$1 = ((((!((map__88681 == null)))?((((map__88681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88681):map__88681);
var region = cljs.core.get.call(null,map__88681__$1,new cljs.core.Keyword(null,"region","region",270415120));
var centroid = cljs.core.get.call(null,map__88681__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__88681__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null),ui$core$render_brain_$_iter__88671.call(null,cljs.core.rest.call(null,s__88672__$2)));
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
return iter__32731__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"region","region",270415120),render_graph));
})()):null);
var render_labels = ((function (labels,starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (from,to){
var seq__88683 = cljs.core.seq.call(null,labels);
var chunk__88684 = null;
var count__88685 = (0);
var i__88686 = (0);
while(true){
if((i__88686 < count__88685)){
var label = cljs.core._nth.call(null,chunk__88684,i__88686);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__88759 = seq__88683;
var G__88760 = chunk__88684;
var G__88761 = count__88685;
var G__88762 = (i__88686 + (1));
seq__88683 = G__88759;
chunk__88684 = G__88760;
count__88685 = G__88761;
i__88686 = G__88762;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__88683);
if(temp__4657__auto__){
var seq__88683__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88683__$1)){
var c__32762__auto__ = cljs.core.chunk_first.call(null,seq__88683__$1);
var G__88763 = cljs.core.chunk_rest.call(null,seq__88683__$1);
var G__88764 = c__32762__auto__;
var G__88765 = cljs.core.count.call(null,c__32762__auto__);
var G__88766 = (0);
seq__88683 = G__88763;
chunk__88684 = G__88764;
count__88685 = G__88765;
i__88686 = G__88766;
continue;
} else {
var label = cljs.core.first.call(null,seq__88683__$1);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__88767 = cljs.core.next.call(null,seq__88683__$1);
var G__88768 = null;
var G__88769 = (0);
var G__88770 = (0);
seq__88683 = G__88767;
chunk__88684 = G__88768;
count__88685 = G__88769;
i__88686 = G__88770;
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
var seq__88687 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),-0.3,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3,0.3,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,(1000),(2)], null)], null));
var chunk__88688 = null;
var count__88689 = (0);
var i__88690 = (0);
while(true){
if((i__88690 < count__88689)){
var vec__88691 = cljs.core._nth.call(null,chunk__88688,i__88690);
var begin = cljs.core.nth.call(null,vec__88691,(0),null);
var end = cljs.core.nth.call(null,vec__88691,(1),null);
var brightness = cljs.core.nth.call(null,vec__88691,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__88694_88771 = cljs.core.seq.call(null,render_graph);
var chunk__88695_88772 = null;
var count__88696_88773 = (0);
var i__88697_88774 = (0);
while(true){
if((i__88697_88774 < count__88696_88773)){
var map__88698_88775 = cljs.core._nth.call(null,chunk__88695_88772,i__88697_88774);
var map__88698_88776__$1 = ((((!((map__88698_88775 == null)))?((((map__88698_88775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88698_88775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88698_88775):map__88698_88775);
var region_88777 = cljs.core.get.call(null,map__88698_88776__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_88778 = cljs.core.get.call(null,map__88698_88776__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_88779 = cljs.core.get.call(null,map__88698_88776__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_88780 = cljs.core.get.call(null,map__88698_88776__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_88781 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_88777))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_88781,brightness);

var seq__88700_88782 = cljs.core.seq.call(null,faces_88778);
var chunk__88701_88783 = null;
var count__88702_88784 = (0);
var i__88703_88785 = (0);
while(true){
if((i__88703_88785 < count__88702_88784)){
var vec__88704_88786 = cljs.core._nth.call(null,chunk__88701_88783,i__88703_88785);
var a_88787 = cljs.core.nth.call(null,vec__88704_88786,(0),null);
var b_88788 = cljs.core.nth.call(null,vec__88704_88786,(1),null);
var c_88789 = cljs.core.nth.call(null,vec__88704_88786,(2),null);
var face_88790 = vec__88704_88786;
if(((begin < vertices.call(null,a_88787).call(null,(2)))) && ((vertices.call(null,a_88787).call(null,(2)) < end))){
line.call(null,a_88787,b_88788);
} else {
}

var G__88791 = seq__88700_88782;
var G__88792 = chunk__88701_88783;
var G__88793 = count__88702_88784;
var G__88794 = (i__88703_88785 + (1));
seq__88700_88782 = G__88791;
chunk__88701_88783 = G__88792;
count__88702_88784 = G__88793;
i__88703_88785 = G__88794;
continue;
} else {
var temp__4657__auto___88795 = cljs.core.seq.call(null,seq__88700_88782);
if(temp__4657__auto___88795){
var seq__88700_88796__$1 = temp__4657__auto___88795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88700_88796__$1)){
var c__32762__auto___88797 = cljs.core.chunk_first.call(null,seq__88700_88796__$1);
var G__88798 = cljs.core.chunk_rest.call(null,seq__88700_88796__$1);
var G__88799 = c__32762__auto___88797;
var G__88800 = cljs.core.count.call(null,c__32762__auto___88797);
var G__88801 = (0);
seq__88700_88782 = G__88798;
chunk__88701_88783 = G__88799;
count__88702_88784 = G__88800;
i__88703_88785 = G__88801;
continue;
} else {
var vec__88707_88802 = cljs.core.first.call(null,seq__88700_88796__$1);
var a_88803 = cljs.core.nth.call(null,vec__88707_88802,(0),null);
var b_88804 = cljs.core.nth.call(null,vec__88707_88802,(1),null);
var c_88805 = cljs.core.nth.call(null,vec__88707_88802,(2),null);
var face_88806 = vec__88707_88802;
if(((begin < vertices.call(null,a_88803).call(null,(2)))) && ((vertices.call(null,a_88803).call(null,(2)) < end))){
line.call(null,a_88803,b_88804);
} else {
}

var G__88807 = cljs.core.next.call(null,seq__88700_88796__$1);
var G__88808 = null;
var G__88809 = (0);
var G__88810 = (0);
seq__88700_88782 = G__88807;
chunk__88701_88783 = G__88808;
count__88702_88784 = G__88809;
i__88703_88785 = G__88810;
continue;
}
} else {
}
}
break;
}

var G__88811 = seq__88694_88771;
var G__88812 = chunk__88695_88772;
var G__88813 = count__88696_88773;
var G__88814 = (i__88697_88774 + (1));
seq__88694_88771 = G__88811;
chunk__88695_88772 = G__88812;
count__88696_88773 = G__88813;
i__88697_88774 = G__88814;
continue;
} else {
var temp__4657__auto___88815 = cljs.core.seq.call(null,seq__88694_88771);
if(temp__4657__auto___88815){
var seq__88694_88816__$1 = temp__4657__auto___88815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88694_88816__$1)){
var c__32762__auto___88817 = cljs.core.chunk_first.call(null,seq__88694_88816__$1);
var G__88818 = cljs.core.chunk_rest.call(null,seq__88694_88816__$1);
var G__88819 = c__32762__auto___88817;
var G__88820 = cljs.core.count.call(null,c__32762__auto___88817);
var G__88821 = (0);
seq__88694_88771 = G__88818;
chunk__88695_88772 = G__88819;
count__88696_88773 = G__88820;
i__88697_88774 = G__88821;
continue;
} else {
var map__88710_88822 = cljs.core.first.call(null,seq__88694_88816__$1);
var map__88710_88823__$1 = ((((!((map__88710_88822 == null)))?((((map__88710_88822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88710_88822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88710_88822):map__88710_88822);
var region_88824 = cljs.core.get.call(null,map__88710_88823__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_88825 = cljs.core.get.call(null,map__88710_88823__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_88826 = cljs.core.get.call(null,map__88710_88823__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_88827 = cljs.core.get.call(null,map__88710_88823__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_88828 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_88824))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_88828,brightness);

var seq__88712_88829 = cljs.core.seq.call(null,faces_88825);
var chunk__88713_88830 = null;
var count__88714_88831 = (0);
var i__88715_88832 = (0);
while(true){
if((i__88715_88832 < count__88714_88831)){
var vec__88716_88833 = cljs.core._nth.call(null,chunk__88713_88830,i__88715_88832);
var a_88834 = cljs.core.nth.call(null,vec__88716_88833,(0),null);
var b_88835 = cljs.core.nth.call(null,vec__88716_88833,(1),null);
var c_88836 = cljs.core.nth.call(null,vec__88716_88833,(2),null);
var face_88837 = vec__88716_88833;
if(((begin < vertices.call(null,a_88834).call(null,(2)))) && ((vertices.call(null,a_88834).call(null,(2)) < end))){
line.call(null,a_88834,b_88835);
} else {
}

var G__88838 = seq__88712_88829;
var G__88839 = chunk__88713_88830;
var G__88840 = count__88714_88831;
var G__88841 = (i__88715_88832 + (1));
seq__88712_88829 = G__88838;
chunk__88713_88830 = G__88839;
count__88714_88831 = G__88840;
i__88715_88832 = G__88841;
continue;
} else {
var temp__4657__auto___88842__$1 = cljs.core.seq.call(null,seq__88712_88829);
if(temp__4657__auto___88842__$1){
var seq__88712_88843__$1 = temp__4657__auto___88842__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88712_88843__$1)){
var c__32762__auto___88844 = cljs.core.chunk_first.call(null,seq__88712_88843__$1);
var G__88845 = cljs.core.chunk_rest.call(null,seq__88712_88843__$1);
var G__88846 = c__32762__auto___88844;
var G__88847 = cljs.core.count.call(null,c__32762__auto___88844);
var G__88848 = (0);
seq__88712_88829 = G__88845;
chunk__88713_88830 = G__88846;
count__88714_88831 = G__88847;
i__88715_88832 = G__88848;
continue;
} else {
var vec__88719_88849 = cljs.core.first.call(null,seq__88712_88843__$1);
var a_88850 = cljs.core.nth.call(null,vec__88719_88849,(0),null);
var b_88851 = cljs.core.nth.call(null,vec__88719_88849,(1),null);
var c_88852 = cljs.core.nth.call(null,vec__88719_88849,(2),null);
var face_88853 = vec__88719_88849;
if(((begin < vertices.call(null,a_88850).call(null,(2)))) && ((vertices.call(null,a_88850).call(null,(2)) < end))){
line.call(null,a_88850,b_88851);
} else {
}

var G__88854 = cljs.core.next.call(null,seq__88712_88843__$1);
var G__88855 = null;
var G__88856 = (0);
var G__88857 = (0);
seq__88712_88829 = G__88854;
chunk__88713_88830 = G__88855;
count__88714_88831 = G__88856;
i__88715_88832 = G__88857;
continue;
}
} else {
}
}
break;
}

var G__88858 = cljs.core.next.call(null,seq__88694_88816__$1);
var G__88859 = null;
var G__88860 = (0);
var G__88861 = (0);
seq__88694_88771 = G__88858;
chunk__88695_88772 = G__88859;
count__88696_88773 = G__88860;
i__88697_88774 = G__88861;
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

var G__88862 = seq__88687;
var G__88863 = chunk__88688;
var G__88864 = count__88689;
var G__88865 = (i__88690 + (1));
seq__88687 = G__88862;
chunk__88688 = G__88863;
count__88689 = G__88864;
i__88690 = G__88865;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__88687);
if(temp__4657__auto__){
var seq__88687__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88687__$1)){
var c__32762__auto__ = cljs.core.chunk_first.call(null,seq__88687__$1);
var G__88866 = cljs.core.chunk_rest.call(null,seq__88687__$1);
var G__88867 = c__32762__auto__;
var G__88868 = cljs.core.count.call(null,c__32762__auto__);
var G__88869 = (0);
seq__88687 = G__88866;
chunk__88688 = G__88867;
count__88689 = G__88868;
i__88690 = G__88869;
continue;
} else {
var vec__88722 = cljs.core.first.call(null,seq__88687__$1);
var begin = cljs.core.nth.call(null,vec__88722,(0),null);
var end = cljs.core.nth.call(null,vec__88722,(1),null);
var brightness = cljs.core.nth.call(null,vec__88722,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__88725_88870 = cljs.core.seq.call(null,render_graph);
var chunk__88726_88871 = null;
var count__88727_88872 = (0);
var i__88728_88873 = (0);
while(true){
if((i__88728_88873 < count__88727_88872)){
var map__88729_88874 = cljs.core._nth.call(null,chunk__88726_88871,i__88728_88873);
var map__88729_88875__$1 = ((((!((map__88729_88874 == null)))?((((map__88729_88874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88729_88874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88729_88874):map__88729_88874);
var region_88876 = cljs.core.get.call(null,map__88729_88875__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_88877 = cljs.core.get.call(null,map__88729_88875__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_88878 = cljs.core.get.call(null,map__88729_88875__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_88879 = cljs.core.get.call(null,map__88729_88875__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_88880 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_88876))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_88880,brightness);

var seq__88731_88881 = cljs.core.seq.call(null,faces_88877);
var chunk__88732_88882 = null;
var count__88733_88883 = (0);
var i__88734_88884 = (0);
while(true){
if((i__88734_88884 < count__88733_88883)){
var vec__88735_88885 = cljs.core._nth.call(null,chunk__88732_88882,i__88734_88884);
var a_88886 = cljs.core.nth.call(null,vec__88735_88885,(0),null);
var b_88887 = cljs.core.nth.call(null,vec__88735_88885,(1),null);
var c_88888 = cljs.core.nth.call(null,vec__88735_88885,(2),null);
var face_88889 = vec__88735_88885;
if(((begin < vertices.call(null,a_88886).call(null,(2)))) && ((vertices.call(null,a_88886).call(null,(2)) < end))){
line.call(null,a_88886,b_88887);
} else {
}

var G__88890 = seq__88731_88881;
var G__88891 = chunk__88732_88882;
var G__88892 = count__88733_88883;
var G__88893 = (i__88734_88884 + (1));
seq__88731_88881 = G__88890;
chunk__88732_88882 = G__88891;
count__88733_88883 = G__88892;
i__88734_88884 = G__88893;
continue;
} else {
var temp__4657__auto___88894__$1 = cljs.core.seq.call(null,seq__88731_88881);
if(temp__4657__auto___88894__$1){
var seq__88731_88895__$1 = temp__4657__auto___88894__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88731_88895__$1)){
var c__32762__auto___88896 = cljs.core.chunk_first.call(null,seq__88731_88895__$1);
var G__88897 = cljs.core.chunk_rest.call(null,seq__88731_88895__$1);
var G__88898 = c__32762__auto___88896;
var G__88899 = cljs.core.count.call(null,c__32762__auto___88896);
var G__88900 = (0);
seq__88731_88881 = G__88897;
chunk__88732_88882 = G__88898;
count__88733_88883 = G__88899;
i__88734_88884 = G__88900;
continue;
} else {
var vec__88738_88901 = cljs.core.first.call(null,seq__88731_88895__$1);
var a_88902 = cljs.core.nth.call(null,vec__88738_88901,(0),null);
var b_88903 = cljs.core.nth.call(null,vec__88738_88901,(1),null);
var c_88904 = cljs.core.nth.call(null,vec__88738_88901,(2),null);
var face_88905 = vec__88738_88901;
if(((begin < vertices.call(null,a_88902).call(null,(2)))) && ((vertices.call(null,a_88902).call(null,(2)) < end))){
line.call(null,a_88902,b_88903);
} else {
}

var G__88906 = cljs.core.next.call(null,seq__88731_88895__$1);
var G__88907 = null;
var G__88908 = (0);
var G__88909 = (0);
seq__88731_88881 = G__88906;
chunk__88732_88882 = G__88907;
count__88733_88883 = G__88908;
i__88734_88884 = G__88909;
continue;
}
} else {
}
}
break;
}

var G__88910 = seq__88725_88870;
var G__88911 = chunk__88726_88871;
var G__88912 = count__88727_88872;
var G__88913 = (i__88728_88873 + (1));
seq__88725_88870 = G__88910;
chunk__88726_88871 = G__88911;
count__88727_88872 = G__88912;
i__88728_88873 = G__88913;
continue;
} else {
var temp__4657__auto___88914__$1 = cljs.core.seq.call(null,seq__88725_88870);
if(temp__4657__auto___88914__$1){
var seq__88725_88915__$1 = temp__4657__auto___88914__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88725_88915__$1)){
var c__32762__auto___88916 = cljs.core.chunk_first.call(null,seq__88725_88915__$1);
var G__88917 = cljs.core.chunk_rest.call(null,seq__88725_88915__$1);
var G__88918 = c__32762__auto___88916;
var G__88919 = cljs.core.count.call(null,c__32762__auto___88916);
var G__88920 = (0);
seq__88725_88870 = G__88917;
chunk__88726_88871 = G__88918;
count__88727_88872 = G__88919;
i__88728_88873 = G__88920;
continue;
} else {
var map__88741_88921 = cljs.core.first.call(null,seq__88725_88915__$1);
var map__88741_88922__$1 = ((((!((map__88741_88921 == null)))?((((map__88741_88921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88741_88921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88741_88921):map__88741_88921);
var region_88923 = cljs.core.get.call(null,map__88741_88922__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_88924 = cljs.core.get.call(null,map__88741_88922__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_88925 = cljs.core.get.call(null,map__88741_88922__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_88926 = cljs.core.get.call(null,map__88741_88922__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_88927 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_88923))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_88927,brightness);

var seq__88743_88928 = cljs.core.seq.call(null,faces_88924);
var chunk__88744_88929 = null;
var count__88745_88930 = (0);
var i__88746_88931 = (0);
while(true){
if((i__88746_88931 < count__88745_88930)){
var vec__88747_88932 = cljs.core._nth.call(null,chunk__88744_88929,i__88746_88931);
var a_88933 = cljs.core.nth.call(null,vec__88747_88932,(0),null);
var b_88934 = cljs.core.nth.call(null,vec__88747_88932,(1),null);
var c_88935 = cljs.core.nth.call(null,vec__88747_88932,(2),null);
var face_88936 = vec__88747_88932;
if(((begin < vertices.call(null,a_88933).call(null,(2)))) && ((vertices.call(null,a_88933).call(null,(2)) < end))){
line.call(null,a_88933,b_88934);
} else {
}

var G__88937 = seq__88743_88928;
var G__88938 = chunk__88744_88929;
var G__88939 = count__88745_88930;
var G__88940 = (i__88746_88931 + (1));
seq__88743_88928 = G__88937;
chunk__88744_88929 = G__88938;
count__88745_88930 = G__88939;
i__88746_88931 = G__88940;
continue;
} else {
var temp__4657__auto___88941__$2 = cljs.core.seq.call(null,seq__88743_88928);
if(temp__4657__auto___88941__$2){
var seq__88743_88942__$1 = temp__4657__auto___88941__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88743_88942__$1)){
var c__32762__auto___88943 = cljs.core.chunk_first.call(null,seq__88743_88942__$1);
var G__88944 = cljs.core.chunk_rest.call(null,seq__88743_88942__$1);
var G__88945 = c__32762__auto___88943;
var G__88946 = cljs.core.count.call(null,c__32762__auto___88943);
var G__88947 = (0);
seq__88743_88928 = G__88944;
chunk__88744_88929 = G__88945;
count__88745_88930 = G__88946;
i__88746_88931 = G__88947;
continue;
} else {
var vec__88750_88948 = cljs.core.first.call(null,seq__88743_88942__$1);
var a_88949 = cljs.core.nth.call(null,vec__88750_88948,(0),null);
var b_88950 = cljs.core.nth.call(null,vec__88750_88948,(1),null);
var c_88951 = cljs.core.nth.call(null,vec__88750_88948,(2),null);
var face_88952 = vec__88750_88948;
if(((begin < vertices.call(null,a_88949).call(null,(2)))) && ((vertices.call(null,a_88949).call(null,(2)) < end))){
line.call(null,a_88949,b_88950);
} else {
}

var G__88953 = cljs.core.next.call(null,seq__88743_88942__$1);
var G__88954 = null;
var G__88955 = (0);
var G__88956 = (0);
seq__88743_88928 = G__88953;
chunk__88744_88929 = G__88954;
count__88745_88930 = G__88955;
i__88746_88931 = G__88956;
continue;
}
} else {
}
}
break;
}

var G__88957 = cljs.core.next.call(null,seq__88725_88915__$1);
var G__88958 = null;
var G__88959 = (0);
var G__88960 = (0);
seq__88725_88870 = G__88957;
chunk__88726_88871 = G__88958;
count__88727_88872 = G__88959;
i__88728_88873 = G__88960;
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

var G__88961 = cljs.core.next.call(null,seq__88687__$1);
var G__88962 = null;
var G__88963 = (0);
var G__88964 = (0);
seq__88687 = G__88961;
chunk__88688 = G__88962;
count__88689 = G__88963;
i__88690 = G__88964;
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
var this__37291__auto__ = this;
React.Component.apply(this__37291__auto__,arguments);

if(!((this__37291__auto__.initLocalState == null))){
this__37291__auto__.state = this__37291__auto__.initLocalState();
} else {
this__37291__auto__.state = {};
}

return this__37291__auto__;
});

ui.core.Brain.prototype = goog.object.clone(React.Component.prototype);

var x88969_88999 = ui.core.Brain.prototype;
x88969_88999.componentWillUpdate = ((function (x88969_88999){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
if(((!((this__37182__auto__ == null)))?(((false) || (this__37182__auto__.om$next$Ident$))?true:false):false)){
var ident__37186__auto___89000 = om.next.ident.call(null,this__37182__auto__,om.next.props.call(null,this__37182__auto__));
var next_ident__37187__auto___89001 = om.next.ident.call(null,this__37182__auto__,om.next._next_props.call(null,next_props__37183__auto__,this__37182__auto__));
if(cljs.core.not_EQ_.call(null,ident__37186__auto___89000,next_ident__37187__auto___89001)){
var idxr__37188__auto___89002 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__37188__auto___89002 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__37188__auto___89002),((function (idxr__37188__auto___89002,ident__37186__auto___89000,next_ident__37187__auto___89001,this__37182__auto__,x88969_88999){
return (function (indexes__37189__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__37189__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__37186__auto___89000], null),cljs.core.disj,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__37187__auto___89001], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__37182__auto__);
});})(idxr__37188__auto___89002,ident__37186__auto___89000,next_ident__37187__auto___89001,this__37182__auto__,x88969_88999))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__37182__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__37182__auto__);
});})(x88969_88999))
;

x88969_88999.shouldComponentUpdate = ((function (x88969_88999){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
var next_children__37185__auto__ = next_props__37183__auto__.children;
var next_props__37183__auto____$1 = goog.object.get(next_props__37183__auto__,"omcljs$value");
var next_props__37183__auto____$2 = (function (){var G__88971 = next_props__37183__auto____$1;
if((next_props__37183__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__88971);
} else {
return G__88971;
}
})();
var or__31951__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__37182__auto__),next_props__37183__auto____$2);
if(or__31951__auto__){
return or__31951__auto__;
} else {
var or__31951__auto____$1 = (function (){var and__31939__auto__ = this__37182__auto__.state;
if(cljs.core.truth_(and__31939__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__37182__auto__.state,"omcljs$state"),goog.object.get(next_state__37184__auto__,"omcljs$state"));
} else {
return and__31939__auto__;
}
})();
if(cljs.core.truth_(or__31951__auto____$1)){
return or__31951__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__37182__auto__.props.children,next_children__37185__auto__);
}
}
});})(x88969_88999))
;

x88969_88999.componentDidUpdate = ((function (x88969_88999){
return (function (prev_props__37190__auto__,prev_state__37191__auto__){
var this__37182__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__37182__auto__);
});})(x88969_88999))
;

x88969_88999.isMounted = ((function (x88969_88999){
return (function (){
var this__37182__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__37182__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x88969_88999))
;

x88969_88999.componentWillMount = ((function (x88969_88999){
return (function (){
var this__37182__auto__ = this;
var indexer__37192__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x88969_88999))
;

x88969_88999.initLocalState = ((function (x88969_88999){
return (function (){
var this$ = this;
var ret__37160__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1708495417),null], null);
var obj88973 = {"omcljs$state":ret__37160__auto__};
return obj88973;
});})(x88969_88999))
;

x88969_88999.componentDidMount = ((function (x88969_88999){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"interval","interval",1708495417),setInterval(((function (this$,x88969_88999){
return (function (){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.update,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),((function (this$,x88969_88999){
return (function (rotation){
ui.core.render_brain.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)).getContext("2d"),rotation,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));

return (rotation + new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));
});})(this$,x88969_88999))
);
});})(this$,x88969_88999))
,(50)));
});})(x88969_88999))
;

x88969_88999.componentWillUnmount = ((function (x88969_88999){
return (function (){
var this__37176__auto__ = this;
var this$ = this__37176__auto__;
var r__37177__auto__ = om.next.get_reconciler.call(null,this__37176__auto__);
var cfg__37178__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__37177__auto__);
var st__37179__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__37178__auto__);
var indexer__37180__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__37178__auto__);
if(cljs.core.truth_((function (){var and__31939__auto__ = !((st__37179__auto__ == null));
if(and__31939__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__37179__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__37176__auto__], null));
} else {
return and__31939__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__37179__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__37176__auto__);
} else {
}

if((indexer__37180__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_.call(null,indexer__37180__auto__,this__37176__auto__);
}

return clearInterval(new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)));
});})(x88969_88999))
;

x88969_88999.render = ((function (x88969_88999){
return (function (){
var this__37181__auto__ = this;
var this$ = this__37181__auto__;
var _STAR_reconciler_STAR_88974 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_88975 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_88976 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_88977 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_88978 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__37181__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__37181__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__37181__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__37181__auto__);

om.next._STAR_parent_STAR_ = this__37181__auto__;

try{var map__88979 = om.next.props.call(null,this$);
var map__88979__$1 = ((((!((map__88979 == null)))?((((map__88979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88979):map__88979);
var props = map__88979__$1;
var items = cljs.core.get.call(null,map__88979__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
var loading = cljs.core.not.call(null,cljs.core.seq.call(null,items));
var scores = cljs.core.vec.call(null,(function (){var iter__32731__auto__ = ((function (map__88979,map__88979__$1,props,items,loading,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999){
return (function ui$core$iter__88982(s__88983){
return (new cljs.core.LazySeq(null,((function (map__88979,map__88979__$1,props,items,loading,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999){
return (function (){
var s__88983__$1 = s__88983;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88983__$1);
if(temp__4657__auto__){
var s__88983__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88983__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__88983__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__88985 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__88984 = (0);
while(true){
if((i__88984 < size__32730__auto__)){
var item = cljs.core._nth.call(null,c__32729__auto__,i__88984);
cljs.core.chunk_append.call(null,b__88985,(function (){var map__88990 = item;
var map__88990__$1 = ((((!((map__88990 == null)))?((((map__88990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88990):map__88990);
var votes = cljs.core.get.call(null,map__88990__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__32282__auto__ = (0);
var y__32283__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__32282__auto__ > y__32283__auto__) ? x__32282__auto__ : y__32283__auto__);
})());

var G__89003 = (i__88984 + (1));
i__88984 = G__89003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88985),ui$core$iter__88982.call(null,cljs.core.chunk_rest.call(null,s__88983__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88985),null);
}
} else {
var item = cljs.core.first.call(null,s__88983__$2);
return cljs.core.cons.call(null,(function (){var map__88992 = item;
var map__88992__$1 = ((((!((map__88992 == null)))?((((map__88992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88992):map__88992);
var votes = cljs.core.get.call(null,map__88992__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__32282__auto__ = (0);
var y__32283__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__32282__auto__ > y__32283__auto__) ? x__32282__auto__ : y__32283__auto__);
})(),ui$core$iter__88982.call(null,cljs.core.rest.call(null,s__88983__$2)));
}
} else {
return null;
}
break;
}
});})(map__88979,map__88979__$1,props,items,loading,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999))
,null,null));
});})(map__88979,map__88979__$1,props,items,loading,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999))
;
return iter__32731__auto__.call(null,items);
})());
var sections = cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__88979,map__88979__$1,props,items,loading,scores,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999){
return (function (index,item,score){
var map__88994 = item;
var map__88994__$1 = ((((!((map__88994 == null)))?((((map__88994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88994):map__88994);
var description = cljs.core.get.call(null,map__88994__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("item","description","item/description",-1431609213).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var x__32282__auto__ = score;
var y__32283__auto__ = (cljs.core.apply.call(null,cljs.core._PLUS_,scores) / (50));
return ((x__32282__auto__ > y__32283__auto__) ? x__32282__auto__ : y__32283__auto__);
})(),new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});})(map__88979,map__88979__$1,props,items,loading,scores,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999))
,cljs.core.range.call(null),items,scores));
var sections__$1 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core._,new cljs.core.Keyword(null,"size","size",1098693007)),sections));
var map__88980 = om.next.get_computed.call(null,props);
var map__88980__$1 = ((((!((map__88980 == null)))?((((map__88980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88980):map__88980);
var mode = cljs.core.get.call(null,map__88980__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
cljs.core.swap_BANG_.call(null,ui.core.brain_state,((function (map__88979,map__88979__$1,props,items,loading,scores,sections,sections__$1,map__88980,map__88980__$1,mode,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999){
return (function (brain_state){
if(cljs.core.not_EQ_.call(null,sections__$1,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(brain_state))){
var br = ui.core.brain_prerender.call(null,sections__$1);
return cljs.core.assoc.call(null,brain_state,new cljs.core.Keyword(null,"sections","sections",-886710106),sections__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958),br,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629),ui.core.render_graph.call(null,ui.core.brain_faces,ui.core.brain_vertices,br));
} else {
return brain_state;
}
});})(map__88979,map__88979__$1,props,items,loading,scores,sections,sections__$1,map__88980,map__88980__$1,mode,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999))
);

return ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"colored","colored",-1421800355),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"speed","speed",1257663751),0.01], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colored","colored",-1421800355),ui.motion.spring.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"brain","brain",428499577))) && (!(loading)))?(1):(0)),ui.motion.gentle),new cljs.core.Keyword(null,"top","top",-1856271961),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(50):(0))),new cljs.core.Keyword(null,"width","width",-384071477),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(150):(60)),ui.motion.wobbly),new cljs.core.Keyword(null,"speed","speed",1257663751),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),null,new cljs.core.Keyword(null,"brain","brain",428499577),null], null), null).call(null,mode))?0.01:(0))], null)], null),((function (map__88979,map__88979__$1,props,items,loading,scores,sections,sections__$1,map__88980,map__88980__$1,mode,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999){
return (function (value){
cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(value));

return cljs.core.apply.call(null,React.DOM.div,({"style": ({"width": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "position": "absolute", "zIndex": om_tools.dom.format_opts.call(null,(((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value) > 0.5))?(1):(-1))), "top": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("%")].join(''))})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.canvas(({"ref": om_tools.dom.format_opts.call(null,((function (map__88979,map__88979__$1,props,items,loading,scores,sections,sections__$1,map__88980,map__88980__$1,mode,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999){
return (function (canvas){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas);
});})(map__88979,map__88979__$1,props,items,loading,scores,sections,sections__$1,map__88980,map__88980__$1,mode,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999))
), "width": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "height": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "style": ({"height": "100%", "width": "100%"})})),((loading)?cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "top": "40%", "left": "25%", "right": "25%", "height": "20%"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.p(({"style": ({"textAlign": "center"})}),"Brain Initializing from Ethereum Blockchain"),blueprint_cljs.core.progress_bar.call(null)],null)))):null)],null))));
});})(map__88979,map__88979__$1,props,items,loading,scores,sections,sections__$1,map__88980,map__88980__$1,mode,_STAR_reconciler_STAR_88974,_STAR_depth_STAR_88975,_STAR_shared_STAR_88976,_STAR_instrument_STAR_88977,_STAR_parent_STAR_88978,this$,this__37181__auto__,x88969_88999))
);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_88978;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_88977;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_88976;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_88975;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_88974;
}});})(x88969_88999))
;


ui.core.Brain.prototype.constructor = ui.core.Brain;

ui.core.Brain.prototype.constructor.displayName = "ui.core/Brain";

ui.core.Brain.prototype.om$isComponent = true;

var x88997_89004 = ui.core.Brain;
/** @nocollapse */
x88997_89004.om$next$IQuery$ = true;

/** @nocollapse */
x88997_89004.om$next$IQuery$query$arity$1 = ((function (x88997_89004){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x88997_89004))
;


var x88998_89005 = ui.core.Brain.prototype;

x88998_89005.om$next$IQuery$ = true;


x88998_89005.om$next$IQuery$query$arity$1 = ((function (x88998_89005){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x88998_89005))
;


ui.core.Brain.cljs$lang$type = true;

ui.core.Brain.cljs$lang$ctorStr = "ui.core/Brain";

ui.core.Brain.cljs$lang$ctorPrWriter = (function (this__37294__auto__,writer__37295__auto__,opt__37296__auto__){
return cljs.core._write.call(null,writer__37295__auto__,"ui.core/Brain");
});
ui.core.brain_component = om.next.factory.call(null,ui.core.Brain);
/**
 * @constructor
 */
ui.core.Root = (function ui$core$Root(){
var this__37291__auto__ = this;
React.Component.apply(this__37291__auto__,arguments);

if(!((this__37291__auto__.initLocalState == null))){
this__37291__auto__.state = this__37291__auto__.initLocalState();
} else {
this__37291__auto__.state = {};
}

return this__37291__auto__;
});

ui.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x89010_89024 = ui.core.Root.prototype;
x89010_89024.componentWillUpdate = ((function (x89010_89024){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
if(((!((this__37182__auto__ == null)))?(((false) || (this__37182__auto__.om$next$Ident$))?true:false):false)){
var ident__37186__auto___89025 = om.next.ident.call(null,this__37182__auto__,om.next.props.call(null,this__37182__auto__));
var next_ident__37187__auto___89026 = om.next.ident.call(null,this__37182__auto__,om.next._next_props.call(null,next_props__37183__auto__,this__37182__auto__));
if(cljs.core.not_EQ_.call(null,ident__37186__auto___89025,next_ident__37187__auto___89026)){
var idxr__37188__auto___89027 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__37188__auto___89027 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__37188__auto___89027),((function (idxr__37188__auto___89027,ident__37186__auto___89025,next_ident__37187__auto___89026,this__37182__auto__,x89010_89024){
return (function (indexes__37189__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__37189__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__37186__auto___89025], null),cljs.core.disj,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__37187__auto___89026], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__37182__auto__);
});})(idxr__37188__auto___89027,ident__37186__auto___89025,next_ident__37187__auto___89026,this__37182__auto__,x89010_89024))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__37182__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__37182__auto__);
});})(x89010_89024))
;

x89010_89024.shouldComponentUpdate = ((function (x89010_89024){
return (function (next_props__37183__auto__,next_state__37184__auto__){
var this__37182__auto__ = this;
var next_children__37185__auto__ = next_props__37183__auto__.children;
var next_props__37183__auto____$1 = goog.object.get(next_props__37183__auto__,"omcljs$value");
var next_props__37183__auto____$2 = (function (){var G__89012 = next_props__37183__auto____$1;
if((next_props__37183__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__89012);
} else {
return G__89012;
}
})();
var or__31951__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__37182__auto__),next_props__37183__auto____$2);
if(or__31951__auto__){
return or__31951__auto__;
} else {
var or__31951__auto____$1 = (function (){var and__31939__auto__ = this__37182__auto__.state;
if(cljs.core.truth_(and__31939__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__37182__auto__.state,"omcljs$state"),goog.object.get(next_state__37184__auto__,"omcljs$state"));
} else {
return and__31939__auto__;
}
})();
if(cljs.core.truth_(or__31951__auto____$1)){
return or__31951__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__37182__auto__.props.children,next_children__37185__auto__);
}
}
});})(x89010_89024))
;

x89010_89024.componentDidUpdate = ((function (x89010_89024){
return (function (prev_props__37190__auto__,prev_state__37191__auto__){
var this__37182__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__37182__auto__);
});})(x89010_89024))
;

x89010_89024.isMounted = ((function (x89010_89024){
return (function (){
var this__37182__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__37182__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x89010_89024))
;

x89010_89024.componentWillMount = ((function (x89010_89024){
return (function (){
var this__37182__auto__ = this;
var indexer__37192__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__37182__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__37192__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__37192__auto__,this__37182__auto__);
}
});})(x89010_89024))
;

x89010_89024.initLocalState = ((function (x89010_89024){
return (function (){
var this$ = this;
var ret__37160__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),null], null),new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.Keyword(null,"brain","brain",428499577)], null);
var obj89014 = {"omcljs$state":ret__37160__auto__};
return obj89014;
});})(x89010_89024))
;

x89010_89024.componentDidMount = ((function (x89010_89024){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),(function (){var update_address = ((function (this$,x89010_89024){
return (function (){
var address = ((typeof web3 !== 'undefined')?(web3.eth.accounts[(0)]):null);
if(cljs.core.not_EQ_.call(null,address,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"address","address",559499426),address);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","change-address","user/change-address",-1674946809,null)),(function (){var x__32785__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"address","address",559499426)),(function (){var x__32785__auto__ = address;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())))));
} else {
return null;
}
});})(this$,x89010_89024))
;
update_address.call(null);

return setInterval(update_address,(1000));
})()], null));
});})(x89010_89024))
;

x89010_89024.componentWillUnmount = ((function (x89010_89024){
return (function (){
var this__37176__auto__ = this;
var this$ = this__37176__auto__;
var r__37177__auto__ = om.next.get_reconciler.call(null,this__37176__auto__);
var cfg__37178__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__37177__auto__);
var st__37179__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__37178__auto__);
var indexer__37180__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__37178__auto__);
if(cljs.core.truth_((function (){var and__31939__auto__ = !((st__37179__auto__ == null));
if(and__31939__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__37179__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__37176__auto__], null));
} else {
return and__31939__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__37179__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__37176__auto__);
} else {
}

if((indexer__37180__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_.call(null,indexer__37180__auto__,this__37176__auto__);
}

return clearInterval(cljs.core.get_in.call(null,om.next.get_state.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.Keyword(null,"address","address",559499426)], null)));
});})(x89010_89024))
;

x89010_89024.render = ((function (x89010_89024){
return (function (){
var this__37181__auto__ = this;
var this$ = this__37181__auto__;
var _STAR_reconciler_STAR_89015 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_89016 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_89017 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_89018 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_89019 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__37181__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__37181__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__37181__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__37181__auto__);

om.next._STAR_parent_STAR_ = this__37181__auto__;

try{var map__89020 = om.next.props.call(null,this$);
var map__89020__$1 = ((((!((map__89020 == null)))?((((map__89020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89020):map__89020);
var proposals_props = cljs.core.get.call(null,map__89020__$1,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231));
var stakes_props = cljs.core.get.call(null,map__89020__$1,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339));
var items_props = cljs.core.get.call(null,map__89020__$1,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104));
var brain_props = cljs.core.get.call(null,map__89020__$1,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934));
var network_id = cljs.core.get.call(null,map__89020__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var can_vote_proposal = cljs.core.get.call(null,map__89020__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__89020__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dark", "style": ({"display": "flex", "justifyContent": "center", "zoom": 1.3})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"flexGrow": "1", "maxWidth": "600px"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.tabs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__89020,map__89020__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_89015,_STAR_depth_STAR_89016,_STAR_shared_STAR_89017,_STAR_instrument_STAR_89018,_STAR_parent_STAR_89019,this$,this__37181__auto__,x89010_89024){
return (function (index){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"white","white",-483998618)], null).call(null,index));
});})(map__89020,map__89020__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_89015,_STAR_depth_STAR_89016,_STAR_shared_STAR_89017,_STAR_instrument_STAR_89018,_STAR_parent_STAR_89019,this$,this__37181__auto__,x89010_89024))
], null),blueprint_cljs.core.tab_list.call(null,blueprint_cljs.core.tab.call(null,"Brain"),blueprint_cljs.core.tab.call(null,"Top 10 Items"),blueprint_cljs.core.tab.call(null,"Today's Proposed Items"),blueprint_cljs.core.tab.call(null,"Voting Stakes"),blueprint_cljs.core.tab.call(null,"FAQ")),blueprint_cljs.core.tab_panel.call(null,cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "bottom": (0), "left": (0), "right": (0), "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-elevation-4", "style": ({"opacity": om_tools.dom.format_opts.call(null,((typeof web3 !== 'undefined')?0.7:(1))), "maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((typeof web3 !== 'undefined')?null:cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "alignItems": "center", "fontSize": "1.1rem", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"margin": "0.5em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["EthereanMind requires access to the ",React.DOM.a(({"target": "_blank", "href": "http://ethereum.org"}),"ethereum network "),"to initialize. Please install the ",React.DOM.a(({"target": "_blank", "href": "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"}),"metamask chrome extension"),", or a similar ethereum data source."],null)))),React.DOM.img(({"src": "metamask.png"}))],null))))),React.DOM.h3(({"style": ({"textAlign": "center"})}),"Ethereans, what's on your mind?"),React.DOM.p(null,"EthereanMind lets ethereum users maintain a decentralized \"Top 10 list\" of the most important items to the community. Voting attacks are prevented via time-locked, fully refundable deposits in a staking contract.")],null)))),(cljs.core.truth_((function (){var and__31939__auto__ = typeof web3 !== 'undefined';
if(and__31939__auto__){
var and__31939__auto____$1 = network_id;
if(cljs.core.truth_(and__31939__auto____$1)){
return cljs.core.not_EQ_.call(null,network_id,(3));
} else {
return and__31939__auto____$1;
}
} else {
return and__31939__auto__;
}
})())?cljs.core.apply.call(null,React.DOM.div,({"className": "pt-callout pt-intent-danger pt-icon-warning-sign", "style": ({"maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h5(null,"Wrong Network!"),((cljs.core._EQ_.call(null,network_id,(1)))?"You are currently connected to the Ethereum main network which uses real currency. This beta dapp is still running on the Ropsten testnet, which uses free currency. Do not yet use real money with this dapp!":"You are connected to the wrong network! This beta dapp is currently runing on the Ropsten Testnet. In Metamask, change the network option in the upper left corner of the popup window.")],null)))):null),((cljs.core._EQ_.call(null,network_id,(3)))?cljs.core.apply.call(null,React.DOM.div,({"className": "pt-callout pt-intent-warning pt-icon-warning-sign", "style": ({"maxWidth": "500px", "marginBottom": "2rem", "opacity": 0.5, "fontSize": "0.7em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h5(null,"Ropsten Testnet Attack"),"Please be aware that the ethereum testnet is experiencing a (senseless) spam attack this week. This may cause failures in staking/voting that will not exist once this app goes out of beta on the main ethereum network."],null)))):null)],null))))),blueprint_cljs.core.tab_panel.call(null,ui.core.items_component.call(null,items_props)),blueprint_cljs.core.tab_panel.call(null,ui.core.proposals_component.call(null,proposals_props)),blueprint_cljs.core.tab_panel.call(null,ui.core.stakes_component.call(null,stakes_props)),blueprint_cljs.core.tab_panel.call(null,ui.faq_text.faq_text))],null)))),cljs.core.apply.call(null,React.DOM.div,({"key": "foo", "style": ({"position": "fixed", "display": "flex", "flexDirection": "column", "alignItems": "flex-end", "right": (0), "bottom": (0), "padding": "0.5rem", "opacity": "0.5"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,false,can_vote_proposal))?blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.15em"], null)], null),"Today's proposal action used up"):null),blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.15em"], null)], null),"Current Stake: ",((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?blueprint_cljs.core.spinner.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-small"], null)):stake)," Ether")],null)))),cljs.core.apply.call(null,React.DOM.div,({"key": "bar", "style": ({"pointerEvents": "none ", "top": (0), "width": "100%", "justifyContent": "center", "opacity": (1), "display": "flex", "position": "absolute", "height": "100%", "alignItems": "center", "left": (0)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.core.brain_component.call(null,om.next.computed.call(null,brain_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))], null)))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_89019;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_89018;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_89017;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_89016;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_89015;
}});})(x89010_89024))
;


ui.core.Root.prototype.constructor = ui.core.Root;

ui.core.Root.prototype.constructor.displayName = "ui.core/Root";

ui.core.Root.prototype.om$isComponent = true;

var x89022_89028 = ui.core.Root;
/** @nocollapse */
x89022_89028.om$next$IQuery$ = true;

/** @nocollapse */
x89022_89028.om$next$IQuery$query$arity$1 = ((function (x89022_89028){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x89022_89028))
;


var x89023_89029 = ui.core.Root.prototype;

x89023_89029.om$next$IQuery$ = true;


x89023_89029.om$next$IQuery$query$arity$1 = ((function (x89023_89029){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x89023_89029))
;


ui.core.Root.cljs$lang$type = true;

ui.core.Root.cljs$lang$ctorStr = "ui.core/Root";

ui.core.Root.cljs$lang$ctorPrWriter = (function (this__37294__auto__,writer__37295__auto__,opt__37296__auto__){
return cljs.core._write.call(null,writer__37295__auto__,"ui.core/Root");
});
ui.core.simple_read = (function ui$core$simple_read(p__89030,key,_){
var map__89033 = p__89030;
var map__89033__$1 = ((((!((map__89033 == null)))?((((map__89033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89033):map__89033);
var env = map__89033__$1;
var state = cljs.core.get.call(null,map__89033__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state).call(null,key)], null);
});
ui.core.simple_read_with_remote = (function ui$core$simple_read_with_remote(p__89035,key,_){
var map__89038 = p__89035;
var map__89038__$1 = ((((!((map__89038 == null)))?((((map__89038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89038):map__89038);
var env = map__89038__$1;
var state = cljs.core.get.call(null,map__89038__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var value = cljs.core.deref.call(null,state).call(null,key);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"remote","remote",-1593576576),cljs.core.not.call(null,value)], null);
});
ui.core.recursive_read = (function ui$core$recursive_read(query_root,p__89040,_,___$1){
var map__89043 = p__89040;
var map__89043__$1 = ((((!((map__89043 == null)))?((((map__89043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89043):map__89043);
var env = map__89043__$1;
var parser = cljs.core.get.call(null,map__89043__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__89043__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__89043__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__89043__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query-root","query-root",359781888),query_root,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}
});
if(typeof ui.core.read !== 'undefined'){
} else {
ui.core.read = (function (){var method_table__32876__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__32877__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__32878__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__32879__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__32880__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__32880__auto__,method_table__32876__auto__,prefer_table__32877__auto__,method_cache__32878__auto__,cached_hierarchy__32879__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),(function() { 
var G__89045__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,true,args);
};
var G__89045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89046__i = 0, G__89046__a = new Array(arguments.length -  0);
while (G__89046__i < G__89046__a.length) {G__89046__a[G__89046__i] = arguments[G__89046__i + 0]; ++G__89046__i;}
  args = new cljs.core.IndexedSeq(G__89046__a,0);
} 
return G__89045__delegate.call(this,args);};
G__89045.cljs$lang$maxFixedArity = 0;
G__89045.cljs$lang$applyTo = (function (arglist__89047){
var args = cljs.core.seq(arglist__89047);
return G__89045__delegate(args);
});
G__89045.cljs$core$IFn$_invoke$arity$variadic = G__89045__delegate;
return G__89045;
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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__31951__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.Keyword("user","address","user/address",573600859)], null)),new cljs.core.Keyword("stake","value","stake/value",466231031)], null));
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return (0);
}
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","items","etherean/items",165918606),(function (env,k,params){
var map__89048 = env;
var map__89048__$1 = ((((!((map__89048 == null)))?((((map__89048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89048):map__89048);
var parser = cljs.core.get.call(null,map__89048__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__89048__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__89048__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__89048__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__89048__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__32731__auto__ = ((function (map__89048,map__89048__$1,parser,state,query,target,ast,state__$1){
return (function ui$core$iter__89050(s__89051){
return (new cljs.core.LazySeq(null,((function (map__89048,map__89048__$1,parser,state,query,target,ast,state__$1){
return (function (){
var s__89051__$1 = s__89051;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89051__$1);
if(temp__4657__auto__){
var s__89051__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89051__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__89051__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__89053 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__89052 = (0);
while(true){
if((i__89052 < size__32730__auto__)){
var item = cljs.core._nth.call(null,c__32729__auto__,i__89052);
cljs.core.chunk_append.call(null,b__89053,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query));

var G__89054 = (i__89052 + (1));
i__89052 = G__89054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89053),ui$core$iter__89050.call(null,cljs.core.chunk_rest.call(null,s__89051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89053),null);
}
} else {
var item = cljs.core.first.call(null,s__89051__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query),ui$core$iter__89050.call(null,cljs.core.rest.call(null,s__89051__$2)));
}
} else {
return null;
}
break;
}
});})(map__89048,map__89048__$1,parser,state,query,target,ast,state__$1))
,null,null));
});})(map__89048,map__89048__$1,parser,state,query,target,ast,state__$1))
;
return iter__32731__auto__.call(null,new cljs.core.Keyword("item","by-id","item/by-id",-2140839086).cljs$core$IFn$_invoke$arity$1(state__$1));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),(function (env,k,params){
var map__89055 = env;
var map__89055__$1 = ((((!((map__89055 == null)))?((((map__89055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89055):map__89055);
var parser = cljs.core.get.call(null,map__89055__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__89055__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__89055__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__89055__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__89055__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__89056 = state__$1;
var map__89056__$1 = ((((!((map__89056 == null)))?((((map__89056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89056):map__89056);
var order = cljs.core.get.call(null,map__89056__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__32731__auto__ = ((function (map__89055,map__89055__$1,parser,state,query,target,ast,state__$1,map__89056,map__89056__$1,order){
return (function ui$core$iter__89059(s__89060){
return (new cljs.core.LazySeq(null,((function (map__89055,map__89055__$1,parser,state,query,target,ast,state__$1,map__89056,map__89056__$1,order){
return (function (){
var s__89060__$1 = s__89060;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89060__$1);
if(temp__4657__auto__){
var s__89060__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89060__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__89060__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__89062 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__89061 = (0);
while(true){
if((i__89061 < size__32730__auto__)){
var proposal = cljs.core._nth.call(null,c__32729__auto__,i__89061);
cljs.core.chunk_append.call(null,b__89062,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query));

var G__89063 = (i__89061 + (1));
i__89061 = G__89063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89062),ui$core$iter__89059.call(null,cljs.core.chunk_rest.call(null,s__89060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89062),null);
}
} else {
var proposal = cljs.core.first.call(null,s__89060__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query),ui$core$iter__89059.call(null,cljs.core.rest.call(null,s__89060__$2)));
}
} else {
return null;
}
break;
}
});})(map__89055,map__89055__$1,parser,state,query,target,ast,state__$1,map__89056,map__89056__$1,order))
,null,null));
});})(map__89055,map__89055__$1,parser,state,query,target,ast,state__$1,map__89056,map__89056__$1,order))
;
return iter__32731__auto__.call(null,order);
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
var map__89064 = env;
var map__89064__$1 = ((((!((map__89064 == null)))?((((map__89064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89064):map__89064);
var parser = cljs.core.get.call(null,map__89064__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__89064__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__89064__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__89064__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__89064__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__89065 = state__$1;
var map__89065__$1 = ((((!((map__89065 == null)))?((((map__89065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89065):map__89065);
var by_id = cljs.core.get.call(null,map__89065__$1,new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__32731__auto__ = ((function (map__89064,map__89064__$1,parser,state,query,target,ast,state__$1,map__89065,map__89065__$1,by_id){
return (function ui$core$iter__89068(s__89069){
return (new cljs.core.LazySeq(null,((function (map__89064,map__89064__$1,parser,state,query,target,ast,state__$1,map__89065,map__89065__$1,by_id){
return (function (){
var s__89069__$1 = s__89069;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89069__$1);
if(temp__4657__auto__){
var s__89069__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89069__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__89069__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__89071 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__89070 = (0);
while(true){
if((i__89070 < size__32730__auto__)){
var stake = cljs.core._nth.call(null,c__32729__auto__,i__89070);
cljs.core.chunk_append.call(null,b__89071,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query));

var G__89072 = (i__89070 + (1));
i__89070 = G__89072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89071),ui$core$iter__89068.call(null,cljs.core.chunk_rest.call(null,s__89069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89071),null);
}
} else {
var stake = cljs.core.first.call(null,s__89069__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query),ui$core$iter__89068.call(null,cljs.core.rest.call(null,s__89069__$2)));
}
} else {
return null;
}
break;
}
});})(map__89064,map__89064__$1,parser,state,query,target,ast,state__$1,map__89065,map__89065__$1,by_id))
,null,null));
});})(map__89064,map__89064__$1,parser,state,query,target,ast,state__$1,map__89065,map__89065__$1,by_id))
;
return iter__32731__auto__.call(null,cljs.core.vals.call(null,by_id));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__89073__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__89073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89074__i = 0, G__89074__a = new Array(arguments.length -  0);
while (G__89074__i < G__89074__a.length) {G__89074__a[G__89074__i] = arguments[G__89074__i + 0]; ++G__89074__i;}
  args = new cljs.core.IndexedSeq(G__89074__a,0);
} 
return G__89073__delegate.call(this,args);};
G__89073.cljs$lang$maxFixedArity = 0;
G__89073.cljs$lang$applyTo = (function (arglist__89075){
var args = cljs.core.seq(arglist__89075);
return G__89073__delegate(args);
});
G__89073.cljs$core$IFn$_invoke$arity$variadic = G__89073__delegate;
return G__89073;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__89076__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__89076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89077__i = 0, G__89077__a = new Array(arguments.length -  0);
while (G__89077__i < G__89077__a.length) {G__89077__a[G__89077__i] = arguments[G__89077__i + 0]; ++G__89077__i;}
  args = new cljs.core.IndexedSeq(G__89077__a,0);
} 
return G__89076__delegate.call(this,args);};
G__89076.cljs$lang$maxFixedArity = 0;
G__89076.cljs$lang$applyTo = (function (arglist__89078){
var args = cljs.core.seq(arglist__89078);
return G__89076__delegate(args);
});
G__89076.cljs$core$IFn$_invoke$arity$variadic = G__89076__delegate;
return G__89076;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__89079__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__89079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89080__i = 0, G__89080__a = new Array(arguments.length -  0);
while (G__89080__i < G__89080__a.length) {G__89080__a[G__89080__i] = arguments[G__89080__i + 0]; ++G__89080__i;}
  args = new cljs.core.IndexedSeq(G__89080__a,0);
} 
return G__89079__delegate.call(this,args);};
G__89079.cljs$lang$maxFixedArity = 0;
G__89079.cljs$lang$applyTo = (function (arglist__89081){
var args = cljs.core.seq(arglist__89081);
return G__89079__delegate(args);
});
G__89079.cljs$core$IFn$_invoke$arity$variadic = G__89079__delegate;
return G__89079;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__89082__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__89082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89083__i = 0, G__89083__a = new Array(arguments.length -  0);
while (G__89083__i < G__89083__a.length) {G__89083__a[G__89083__i] = arguments[G__89083__i + 0]; ++G__89083__i;}
  args = new cljs.core.IndexedSeq(G__89083__a,0);
} 
return G__89082__delegate.call(this,args);};
G__89082.cljs$lang$maxFixedArity = 0;
G__89082.cljs$lang$applyTo = (function (arglist__89084){
var args = cljs.core.seq(arglist__89084);
return G__89082__delegate(args);
});
G__89082.cljs$core$IFn$_invoke$arity$variadic = G__89082__delegate;
return G__89082;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,k,params){
var map__89085 = env;
var map__89085__$1 = ((((!((map__89085 == null)))?((((map__89085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89085):map__89085);
var parser = cljs.core.get.call(null,map__89085__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__89085__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__89085__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__89085__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__89085__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__89086 = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env);
var map__89086__$1 = ((((!((map__89086 == null)))?((((map__89086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89086):map__89086);
var votes = cljs.core.get.call(null,map__89086__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(votes)?(function (){var iter__32731__auto__ = ((function (map__89085,map__89085__$1,parser,state,query,target,ast,state__$1,map__89086,map__89086__$1,votes){
return (function ui$core$iter__89089(s__89090){
return (new cljs.core.LazySeq(null,((function (map__89085,map__89085__$1,parser,state,query,target,ast,state__$1,map__89086,map__89086__$1,votes){
return (function (){
var s__89090__$1 = s__89090;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89090__$1);
if(temp__4657__auto__){
var s__89090__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89090__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__89090__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__89092 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__89091 = (0);
while(true){
if((i__89091 < size__32730__auto__)){
var item_votes = cljs.core._nth.call(null,c__32729__auto__,i__89091);
cljs.core.chunk_append.call(null,b__89092,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query));

var G__89093 = (i__89091 + (1));
i__89091 = G__89093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89092),ui$core$iter__89089.call(null,cljs.core.chunk_rest.call(null,s__89090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89092),null);
}
} else {
var item_votes = cljs.core.first.call(null,s__89090__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query),ui$core$iter__89089.call(null,cljs.core.rest.call(null,s__89090__$2)));
}
} else {
return null;
}
break;
}
});})(map__89085,map__89085__$1,parser,state,query,target,ast,state__$1,map__89086,map__89086__$1,votes))
,null,null));
});})(map__89085,map__89085__$1,parser,state,query,target,ast,state__$1,map__89086,map__89086__$1,votes))
;
return iter__32731__auto__.call(null,votes);
})():null)], null);
}
}));
var seq__89094_89104 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake","stake",-1498497787),new cljs.core.Keyword("stake","value","stake/value",466231031),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword("item","description","item/description",-1431609213),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),true], null)], null));
var chunk__89095_89105 = null;
var count__89096_89106 = (0);
var i__89097_89107 = (0);
while(true){
if((i__89097_89107 < count__89096_89106)){
var vec__89098_89108 = cljs.core._nth.call(null,chunk__89095_89105,i__89097_89107);
var object_89109 = cljs.core.nth.call(null,vec__89098_89108,(0),null);
var method_89110 = cljs.core.nth.call(null,vec__89098_89108,(1),null);
var remote_89111 = cljs.core.nth.call(null,vec__89098_89108,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_89110,((function (seq__89094_89104,chunk__89095_89105,count__89096_89106,i__89097_89107,vec__89098_89108,object_89109,method_89110,remote_89111){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_89111,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_89109,dispatch_key], null))], null);
});})(seq__89094_89104,chunk__89095_89105,count__89096_89106,i__89097_89107,vec__89098_89108,object_89109,method_89110,remote_89111))
);

var G__89112 = seq__89094_89104;
var G__89113 = chunk__89095_89105;
var G__89114 = count__89096_89106;
var G__89115 = (i__89097_89107 + (1));
seq__89094_89104 = G__89112;
chunk__89095_89105 = G__89113;
count__89096_89106 = G__89114;
i__89097_89107 = G__89115;
continue;
} else {
var temp__4657__auto___89116 = cljs.core.seq.call(null,seq__89094_89104);
if(temp__4657__auto___89116){
var seq__89094_89117__$1 = temp__4657__auto___89116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89094_89117__$1)){
var c__32762__auto___89118 = cljs.core.chunk_first.call(null,seq__89094_89117__$1);
var G__89119 = cljs.core.chunk_rest.call(null,seq__89094_89117__$1);
var G__89120 = c__32762__auto___89118;
var G__89121 = cljs.core.count.call(null,c__32762__auto___89118);
var G__89122 = (0);
seq__89094_89104 = G__89119;
chunk__89095_89105 = G__89120;
count__89096_89106 = G__89121;
i__89097_89107 = G__89122;
continue;
} else {
var vec__89101_89123 = cljs.core.first.call(null,seq__89094_89117__$1);
var object_89124 = cljs.core.nth.call(null,vec__89101_89123,(0),null);
var method_89125 = cljs.core.nth.call(null,vec__89101_89123,(1),null);
var remote_89126 = cljs.core.nth.call(null,vec__89101_89123,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_89125,((function (seq__89094_89104,chunk__89095_89105,count__89096_89106,i__89097_89107,vec__89101_89123,object_89124,method_89125,remote_89126,seq__89094_89117__$1,temp__4657__auto___89116){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_89126,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_89124,dispatch_key], null))], null);
});})(seq__89094_89104,chunk__89095_89105,count__89096_89106,i__89097_89107,vec__89101_89123,object_89124,method_89125,remote_89126,seq__89094_89117__$1,temp__4657__auto___89116))
);

var G__89127 = cljs.core.next.call(null,seq__89094_89117__$1);
var G__89128 = null;
var G__89129 = (0);
var G__89130 = (0);
seq__89094_89104 = G__89127;
chunk__89095_89105 = G__89128;
count__89096_89106 = G__89129;
i__89097_89107 = G__89130;
continue;
}
} else {
}
}
break;
}
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("db","id","db/id",-1388397098),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4657__auto__ = (function (){var or__31951__auto__ = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
var or__31951__auto____$1 = new cljs.core.Keyword(null,"stake","stake",-1498497787).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__31951__auto____$1)){
return or__31951__auto____$1;
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
var G__89131__delegate = function (args){
return cljs.core.apply.call(null,ui.core.simple_read_with_remote,args);
};
var G__89131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89132__i = 0, G__89132__a = new Array(arguments.length -  0);
while (G__89132__i < G__89132__a.length) {G__89132__a[G__89132__i] = arguments[G__89132__i + 0]; ++G__89132__i;}
  args = new cljs.core.IndexedSeq(G__89132__a,0);
} 
return G__89131__delegate.call(this,args);};
G__89131.cljs$lang$maxFixedArity = 0;
G__89131.cljs$lang$applyTo = (function (arglist__89133){
var args = cljs.core.seq(arglist__89133);
return G__89131__delegate(args);
});
G__89131.cljs$core$IFn$_invoke$arity$variadic = G__89131__delegate;
return G__89131;
})()
);
if(typeof ui.core.mutate !== 'undefined'){
} else {
ui.core.mutate = (function (){var method_table__32876__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__32877__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__32878__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__32879__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__32880__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__32880__auto__,method_table__32876__auto__,prefer_table__32877__auto__,method_cache__32878__auto__,cached_hierarchy__32879__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("proposal","save","proposal/save",356239610,null),(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__89134 = params;
var map__89134__$1 = ((((!((map__89134 == null)))?((((map__89134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89134):map__89134);
var id = cljs.core.get.call(null,map__89134__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__89134__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),((function (map__89134,map__89134__$1,id,description){
return (function (state){
var map__89136 = state;
var map__89136__$1 = ((((!((map__89136 == null)))?((((map__89136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89136):map__89136);
var proposals = cljs.core.get.call(null,map__89136__$1,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153));
var proposal = proposals.call(null,id);
var new_tempid = om.next.tempid.call(null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),cljs.core.assoc.call(null,cljs.core.update.call(null,proposals,id,cljs.core.assoc,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),description,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false),new_tempid,cljs.core.assoc.call(null,proposal,new cljs.core.Keyword("db","id","db/id",-1388397098),new_tempid,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),true))),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),new_tempid], null));
});})(map__89134,map__89134__$1,id,description))
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
var map__89138 = params;
var map__89138__$1 = ((((!((map__89138 == null)))?((((map__89138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89138):map__89138);
var address = cljs.core.get.call(null,map__89138__$1,new cljs.core.Keyword(null,"address","address",559499426));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__32731__auto__ = (function ui$core$map_by_id_$_iter__89144(s__89145){
return (new cljs.core.LazySeq(null,(function (){
var s__89145__$1 = s__89145;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89145__$1);
if(temp__4657__auto__){
var s__89145__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89145__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__89145__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__89147 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__89146 = (0);
while(true){
if((i__89146 < size__32730__auto__)){
var item = cljs.core._nth.call(null,c__32729__auto__,i__89146);
cljs.core.chunk_append.call(null,b__89147,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null));

var G__89148 = (i__89146 + (1));
i__89146 = G__89148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89147),ui$core$map_by_id_$_iter__89144.call(null,cljs.core.chunk_rest.call(null,s__89145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89147),null);
}
} else {
var item = cljs.core.first.call(null,s__89145__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null),ui$core$map_by_id_$_iter__89144.call(null,cljs.core.rest.call(null,s__89145__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__32731__auto__.call(null,items);
})());
});
ui.core.my_merge_tree = (function ui$core$my_merge_tree(a,b){
var map__89155 = ui.core.tweak_tree.call(null,b);
var map__89155__$1 = ((((!((map__89155 == null)))?((((map__89155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89155):map__89155);
var network_id = cljs.core.get.call(null,map__89155__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var proposals = cljs.core.get.call(null,map__89155__$1,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444));
var order = cljs.core.get.call(null,map__89155__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
var stakes = cljs.core.get.call(null,map__89155__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__89155__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var items = cljs.core.get.call(null,map__89155__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,a,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),((function (map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items){
return (function (k){
var or__31951__auto__ = network_id;
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return k;
}
});})(map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),cljs.core.merge,user),new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),((function (map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items){
return (function (proposals_old){
return cljs.core.merge_with.call(null,cljs.core.merge,proposals_old,ui.core.map_by_id.call(null,proposals));
});})(map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),((function (map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items){
return (function (order_old){
if(cljs.core.truth_(proposals)){
var ks = cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),proposals),cljs.core.filter.call(null,om.next.tempid_QMARK_,cljs.core.map.call(null,cljs.core.second,order_old)));
return cljs.core.vec.call(null,(function (){var iter__32731__auto__ = ((function (ks,map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items){
return (function ui$core$my_merge_tree_$_iter__89157(s__89158){
return (new cljs.core.LazySeq(null,((function (ks,map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items){
return (function (){
var s__89158__$1 = s__89158;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89158__$1);
if(temp__4657__auto__){
var s__89158__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89158__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__89158__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__89160 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__89159 = (0);
while(true){
if((i__89159 < size__32730__auto__)){
var k = cljs.core._nth.call(null,c__32729__auto__,i__89159);
cljs.core.chunk_append.call(null,b__89160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null));

var G__89161 = (i__89159 + (1));
i__89159 = G__89161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89160),ui$core$my_merge_tree_$_iter__89157.call(null,cljs.core.chunk_rest.call(null,s__89158__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89160),null);
}
} else {
var k = cljs.core.first.call(null,s__89158__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null),ui$core$my_merge_tree_$_iter__89157.call(null,cljs.core.rest.call(null,s__89158__$2)));
}
} else {
return null;
}
break;
}
});})(ks,map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items))
,null,null));
});})(ks,map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items))
;
return iter__32731__auto__.call(null,ks);
})());
} else {
return order_old;
}
});})(map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),((function (map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items){
return (function (stakes_old){
return cljs.core.merge_with.call(null,cljs.core.merge,stakes_old,ui.core.map_by_id.call(null,stakes));
});})(map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),((function (map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items){
return (function (items_old){
var or__31951__auto__ = items;
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return items_old;
}
});})(map__89155,map__89155__$1,network_id,proposals,order,stakes,user,items))
);
});
ui.core.my_merge = (function ui$core$my_merge(reconciler,state,res,query){
var k = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),k,new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,cljs.core.select_keys.call(null,res,k),query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
ui.core.migrate = (function ui$core$migrate(var_args){
var args89162 = [];
var len__33026__auto___89209 = arguments.length;
var i__33027__auto___89210 = (0);
while(true){
if((i__33027__auto___89210 < len__33026__auto___89209)){
args89162.push((arguments[i__33027__auto___89210]));

var G__89211 = (i__33027__auto___89210 + (1));
i__33027__auto___89210 = G__89211;
continue;
} else {
}
break;
}

var G__89164 = args89162.length;
switch (G__89164) {
case 3:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89162.length)].join('')));

}
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return ui.core.migrate.call(null,app_state_pure,query,tempids,null);
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function ui$core$dissoc_in(pure,p__89187){
var vec__89191 = p__89187;
var table = cljs.core.nth.call(null,vec__89191,(0),null);
var id = cljs.core.nth.call(null,vec__89191,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function ui$core$step(pure,p__89194){
var vec__89202 = p__89194;
var old = cljs.core.nth.call(null,vec__89202,(0),null);
var vec__89205 = cljs.core.nth.call(null,vec__89202,(1),null);
var _ = cljs.core.nth.call(null,vec__89205,(0),null);
var id = cljs.core.nth.call(null,vec__89205,(1),null);
var new$ = vec__89205;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__89208 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__89208,id_key,id);
} else {
return G__89208;
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

ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),ui.ethereum.blockchain_send,new cljs.core.Keyword(null,"merge","merge",-1804319409),ui.core.my_merge,new cljs.core.Keyword(null,"migrate","migrate",-207110743),ui.core.migrate,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),ui.core.my_merge_tree,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
om.next.add_root_BANG_.call(null,ui.core.reconciler,ui.core.Root,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map?rel=1491003662727