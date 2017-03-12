// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
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
cljs.core.enable_console_print_BANG_();
ui.core.brain_vertices = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34399){
var vec__34400 = p__34399;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34400,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34400,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34400,(2),null);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,(y - 0.01),z],null));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geometries,(0),cljs.core.cst$kw$data,cljs.core.cst$kw$vertices], null))),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geometries,(1),cljs.core.cst$kw$data,cljs.core.cst$kw$vertices], null))))));
ui.core.brain_faces = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34403){
var vec__34404 = p__34403;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34404,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34404,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
var baddies = cljs.core.PersistentHashSet.fromArray([(0),(284),(34),(35),((284) + (35)),((284) + (34))], true);
if((cljs.core.not((baddies.cljs$core$IFn$_invoke$arity$1 ? baddies.cljs$core$IFn$_invoke$arity$1(a) : baddies.call(null,a)))) && (cljs.core.not((baddies.cljs$core$IFn$_invoke$arity$1 ? baddies.cljs$core$IFn$_invoke$arity$1(b) : baddies.call(null,b))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return null;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geometries,(0),cljs.core.cst$kw$data,cljs.core.cst$kw$faces], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(284)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geometries,(1),cljs.core.cst$kw$data,cljs.core.cst$kw$faces], null)))),cljs.core.rest(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geometries,(0),cljs.core.cst$kw$data,cljs.core.cst$kw$faces], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(284)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geometries,(1),cljs.core.cst$kw$data,cljs.core.cst$kw$faces], null))))))));
if(typeof ui.core.app_state !== 'undefined'){
} else {
ui.core.app_state = (function (){var G__34407 = (function (){var id = om.next.tempid.cljs$core$IFn$_invoke$arity$0();
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$proposal_SLASH_by_DASH_id,cljs.core.PersistentArrayMap.fromArray([id,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,id,cljs.core.cst$kw$proposal_SLASH_unsaved,true], null)], true, false),cljs.core.cst$kw$proposal_SLASH_order,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$proposal_SLASH_by_DASH_id,id], null)], null),cljs.core.cst$kw$etherean_SLASH_user,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$item_SLASH_by_DASH_id,cljs.core.PersistentVector.EMPTY], null);
})();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34407) : cljs.core.atom.call(null,G__34407));
})();
}
ui.core.css_percent = (function ui$core$css_percent(part,whole){
return [cljs.core.str(((part * (100)) / whole)),cljs.core.str("%")].join('');
});
ui.core.mining_spinner = (function ui$core$mining_spinner(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"height": "50px", "width": "50px"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"position": "absolute"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__34410 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"pt-intent-primary"], null);
return (blueprint_cljs.core.spinner.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.spinner.cljs$core$IFn$_invoke$arity$1(G__34410) : blueprint_cljs.core.spinner.call(null,G__34410));
})()],null)))),(function (){var G__34411 = ({"className": "pt-icon-build pt-icon-large", "style": ({"padding": "14px"})});
return React.DOM.span(G__34411);
})()],null))));
});
ui.core.max_digits = (5);
ui.core.format_vote_number = (function ui$core$format_vote_number(num){
var whole_digits = cljs.core.count([cljs.core.str((num | (0)))].join(''));
var total_digits = cljs.core.count([cljs.core.str(num)].join(''));
if((num === (0))){
return "0";
} else {
if((whole_digits > (ui.core.max_digits - (2)))){
return [cljs.core.str((num | (0)))].join('');
} else {
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str(num)].join(''),(0),ui.core.max_digits);
while(true){
if(cljs.core.seq(s)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(s),"0")){
var G__34412 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(cljs.core.count(s) - (1)));
s = G__34412;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(s),".")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(cljs.core.count(s) - (1)));
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
var this__24686__auto__ = this;
React.Component.apply(this__24686__auto__,arguments);

if(!((this__24686__auto__.initLocalState == null))){
this__24686__auto__.state = this__24686__auto__.initLocalState();
} else {
this__24686__auto__.state = {};
}

return this__24686__auto__;
});

ui.core.Item.prototype = goog.object.clone(React.Component.prototype);

var x34417_34447 = ui.core.Item.prototype;
x34417_34447.componentWillUpdate = ((function (x34417_34447){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
if(((!((this__24577__auto__ == null)))?(((false) || (this__24577__auto__.om$next$Ident$))?true:false):false)){
var ident__24581__auto___34448 = om.next.ident(this__24577__auto__,om.next.props(this__24577__auto__));
var next_ident__24582__auto___34449 = om.next.ident(this__24577__auto__,om.next._next_props(next_props__24578__auto__,this__24577__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24581__auto___34448,next_ident__24582__auto___34449)){
var idxr__24583__auto___34450 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24583__auto___34450 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24583__auto___34450),((function (idxr__24583__auto___34450,ident__24581__auto___34448,next_ident__24582__auto___34449,this__24577__auto__,x34417_34447){
return (function (indexes__24584__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24584__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24581__auto___34448], null),cljs.core.disj,this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24582__auto___34449], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24577__auto__);
});})(idxr__24583__auto___34450,ident__24581__auto___34448,next_ident__24582__auto___34449,this__24577__auto__,x34417_34447))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24577__auto__);

return om.next.merge_pending_state_BANG_(this__24577__auto__);
});})(x34417_34447))
;

x34417_34447.shouldComponentUpdate = ((function (x34417_34447){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
var next_children__24580__auto__ = next_props__24578__auto__.children;
var next_props__24578__auto____$1 = goog.object.get(next_props__24578__auto__,"omcljs$value");
var next_props__24578__auto____$2 = (function (){var G__34419 = next_props__24578__auto____$1;
if((next_props__24578__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__34419);
} else {
return G__34419;
}
})();
var or__6417__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24577__auto__),next_props__24578__auto____$2);
if(or__6417__auto__){
return or__6417__auto__;
} else {
var or__6417__auto____$1 = (function (){var and__6405__auto__ = this__24577__auto__.state;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34424 = this__24577__auto__.state;
var G__34425 = "omcljs$state";
return goog.object.get(G__34424,G__34425);
})(),goog.object.get(next_state__24579__auto__,"omcljs$state"));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto____$1)){
return or__6417__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__24577__auto__.props.children,next_children__24580__auto__);
}
}
});})(x34417_34447))
;

x34417_34447.componentWillUnmount = ((function (x34417_34447){
return (function (){
var this__24577__auto__ = this;
var r__24588__auto__ = om.next.get_reconciler(this__24577__auto__);
var cfg__24589__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24588__auto__);
var st__24590__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
var indexer__24587__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
if(cljs.core.truth_((function (){var and__6405__auto__ = !((st__24590__auto__ == null));
if(and__6405__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__24590__auto__) : cljs.core.deref.call(null,st__24590__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24577__auto__], null));
} else {
return and__6405__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24590__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__24577__auto__], 0));
} else {
}

if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34417_34447))
;

x34417_34447.componentDidUpdate = ((function (x34417_34447){
return (function (prev_props__24585__auto__,prev_state__24586__auto__){
var this__24577__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24577__auto__);
});})(x34417_34447))
;

x34417_34447.isMounted = ((function (x34417_34447){
return (function (){
var this__24577__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24577__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34417_34447))
;

x34417_34447.componentWillMount = ((function (x34417_34447){
return (function (){
var this__24577__auto__ = this;
var indexer__24587__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34417_34447))
;

x34417_34447.initLocalState = ((function (x34417_34447){
return (function (){
var this$ = this;
var ret__24555__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dialog,false], null);
var obj34427 = {"omcljs$state":ret__24555__auto__};
return obj34427;
});})(x34417_34447))
;

x34417_34447.render = ((function (x34417_34447){
return (function (){
var this__24576__auto__ = this;
var this$ = this__24576__auto__;
var _STAR_reconciler_STAR_34428 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34429 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34430 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34431 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34432 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__24576__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__24576__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__24576__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__24576__auto__);

om.next._STAR_parent_STAR_ = this__24576__auto__;

try{var map__34433 = om.next.props(this$);
var map__34433__$1 = ((((!((map__34433 == null)))?((((map__34433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34433):map__34433);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34433__$1,cljs.core.cst$kw$db_SLASH_id);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34433__$1,cljs.core.cst$kw$item_SLASH_description);
var votes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34433__$1,cljs.core.cst$kw$item_SLASH_votes);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34433__$1,cljs.core.cst$kw$etherean_SLASH_user);
var map__34434 = user;
var map__34434__$1 = ((((!((map__34434 == null)))?((((map__34434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34434):map__34434);
var stake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34434__$1,cljs.core.cst$kw$user_SLASH_stake);
var has_stake = (stake > (0));
var map__34435 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__34435__$1 = ((((!((map__34435 == null)))?((((map__34435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34435):map__34435);
var dialog = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34435__$1,cljs.core.cst$kw$dialog);
var map__34436 = dialog;
var map__34436__$1 = ((((!((map__34436 == null)))?((((map__34436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34436):map__34436);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34436__$1,cljs.core.cst$kw$direction);
var hide_dialog = ((function (map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447){
return (function (){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$,cljs.core.dissoc,cljs.core.cst$kw$dialog);
});})(map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": "5px", "paddingBottom": "5px", "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__34441 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cancel_DASH_button_DASH_text,"Cancel",cljs.core.cst$kw$confirm_DASH_button_DASH_text,(((direction === (0)))?"Vote down":"Vote Up"),cljs.core.cst$kw$intent,cljs.core.cst$kw$primary.cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),cljs.core.cst$kw$is_DASH_open,dialog,cljs.core.cst$kw$on_DASH_cancel,((function (map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,hide_dialog,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447){
return (function (e){
return hide_dialog();
});})(map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,hide_dialog,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447))
,cljs.core.cst$kw$on_DASH_confirm,((function (map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,hide_dialog,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447){
return (function (e){
hide_dialog();

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$item_SLASH_vote),(function (){var x__7251__auto__ = dialog;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$etherean_SLASH_items))))));
});})(map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,hide_dialog,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447))
], null);
var G__34442 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,null,cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can vote up ",React.DOM.i(null,"one item")," in this list per day, as well as vote down ",React.DOM.i(null,"one item")," in this list per day. These votes will be remembered and automatically applied on subsequent days, until you change your choices (or until your up/down choices fall from the front page) "],null))));
var G__34443 = React.DOM.p(null,"So... is this an item currently on the mind of ethereans?");
return (blueprint_cljs.core.alert.cljs$core$IFn$_invoke$arity$3 ? blueprint_cljs.core.alert.cljs$core$IFn$_invoke$arity$3(G__34441,G__34442,G__34443) : blueprint_cljs.core.alert.call(null,G__34441,G__34442,G__34443));
})(),(function (){var vote_button = ((function (map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,hide_dialog,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447){
return (function (direction__$1,activated){
var G__34444 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name(direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line_DASH_height,(0),cljs.core.cst$kw$min_DASH_height,(0),cljs.core.cst$kw$outline,"none"], null),cljs.core.cst$kw$on_DASH_click,((function (map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,hide_dialog,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447){
return (function (e){
if(has_stake){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$direction,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$down,(0),cljs.core.cst$kw$up,(1)], null).call(null,direction__$1)], null));
} else {
return ui.util.my_toaster.show(({"intent": cljs.core.cst$kw$danger.cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You need to deposit some stake first before voting on items. Please go to the \"Voting Stake\" tab first."}));
}
});})(map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,hide_dialog,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447))
], null);
return (blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$1(G__34444) : blueprint_cljs.core.button.call(null,G__34444));
});})(map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,hide_dialog,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button(cljs.core.cst$kw$up,false),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(votes)?ui.core.format_vote_number((((0.7 * cljs.core.cst$kw$item_DASH_votes_SLASH_total.cljs$core$IFn$_invoke$arity$1(cljs.core.second(votes))) + cljs.core.cst$kw$item_DASH_votes_SLASH_today.cljs$core$IFn$_invoke$arity$1(cljs.core.second(votes))) - ((0.7 * cljs.core.cst$kw$item_DASH_votes_SLASH_total.cljs$core$IFn$_invoke$arity$1(cljs.core.first(votes))) + cljs.core.cst$kw$item_DASH_votes_SLASH_today.cljs$core$IFn$_invoke$arity$1(cljs.core.first(votes))))):"---")],null)))),vote_button(cljs.core.cst$kw$down,false)],null))));
})(),(function (){var item_body = ((function (map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,hide_dialog,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447){
return (function (desc,detail){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__34433,map__34433__$1,id,description,votes,user,map__34434,map__34434__$1,stake,has_stake,map__34435,map__34435__$1,dialog,map__34436,map__34436__$1,direction,hide_dialog,_STAR_reconciler_STAR_34428,_STAR_depth_STAR_34429,_STAR_shared_STAR_34430,_STAR_instrument_STAR_34431,_STAR_parent_STAR_34432,this$,this__24576__auto__,x34417_34447))
;
return item_body(description,(cljs.core.truth_(votes)?null:ui.core.mining_spinner()));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34432;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34431;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34430;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34429;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34428;
}});})(x34417_34447))
;


ui.core.Item.prototype.constructor = ui.core.Item;

ui.core.Item.prototype.constructor.displayName = "ui.core/Item";

ui.core.Item.prototype.om$isComponent = true;

var x34445_34451 = ui.core.Item;
/** @nocollapse */
x34445_34451.om$next$IQuery$ = true;

/** @nocollapse */
x34445_34451.om$next$IQuery$query$arity$1 = ((function (x34445_34451){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$item_SLASH_description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$item_SLASH_votes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_votes_SLASH_today,cljs.core.cst$kw$item_DASH_votes_SLASH_total], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_user,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_stake], null)], null)], null);
});})(x34445_34451))
;


var x34446_34452 = ui.core.Item.prototype;

x34446_34452.om$next$IQuery$ = true;


x34446_34452.om$next$IQuery$query$arity$1 = ((function (x34446_34452){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$item_SLASH_description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$item_SLASH_votes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_votes_SLASH_today,cljs.core.cst$kw$item_DASH_votes_SLASH_total], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_user,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_stake], null)], null)], null);
});})(x34446_34452))
;


ui.core.Item.cljs$lang$type = true;

ui.core.Item.cljs$lang$ctorStr = "ui.core/Item";

ui.core.Item.cljs$lang$ctorPrWriter = (function (this__24689__auto__,writer__24690__auto__,opt__24691__auto__){
return cljs.core._write(writer__24690__auto__,"ui.core/Item");
});
ui.core.item_component = om.next.factory.cljs$core$IFn$_invoke$arity$1(ui.core.Item);
/**
 * @constructor
 */
ui.core.Items = (function ui$core$Items(){
var this__24686__auto__ = this;
React.Component.apply(this__24686__auto__,arguments);

if(!((this__24686__auto__.initLocalState == null))){
this__24686__auto__.state = this__24686__auto__.initLocalState();
} else {
this__24686__auto__.state = {};
}

return this__24686__auto__;
});

ui.core.Items.prototype = goog.object.clone(React.Component.prototype);

var x34457_34479 = ui.core.Items.prototype;
x34457_34479.componentWillUpdate = ((function (x34457_34479){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
if(((!((this__24577__auto__ == null)))?(((false) || (this__24577__auto__.om$next$Ident$))?true:false):false)){
var ident__24581__auto___34480 = om.next.ident(this__24577__auto__,om.next.props(this__24577__auto__));
var next_ident__24582__auto___34481 = om.next.ident(this__24577__auto__,om.next._next_props(next_props__24578__auto__,this__24577__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24581__auto___34480,next_ident__24582__auto___34481)){
var idxr__24583__auto___34482 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24583__auto___34482 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24583__auto___34482),((function (idxr__24583__auto___34482,ident__24581__auto___34480,next_ident__24582__auto___34481,this__24577__auto__,x34457_34479){
return (function (indexes__24584__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24584__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24581__auto___34480], null),cljs.core.disj,this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24582__auto___34481], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24577__auto__);
});})(idxr__24583__auto___34482,ident__24581__auto___34480,next_ident__24582__auto___34481,this__24577__auto__,x34457_34479))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24577__auto__);

return om.next.merge_pending_state_BANG_(this__24577__auto__);
});})(x34457_34479))
;

x34457_34479.shouldComponentUpdate = ((function (x34457_34479){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
var next_children__24580__auto__ = next_props__24578__auto__.children;
var next_props__24578__auto____$1 = goog.object.get(next_props__24578__auto__,"omcljs$value");
var next_props__24578__auto____$2 = (function (){var G__34459 = next_props__24578__auto____$1;
if((next_props__24578__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__34459);
} else {
return G__34459;
}
})();
var or__6417__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24577__auto__),next_props__24578__auto____$2);
if(or__6417__auto__){
return or__6417__auto__;
} else {
var or__6417__auto____$1 = (function (){var and__6405__auto__ = this__24577__auto__.state;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34464 = this__24577__auto__.state;
var G__34465 = "omcljs$state";
return goog.object.get(G__34464,G__34465);
})(),goog.object.get(next_state__24579__auto__,"omcljs$state"));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto____$1)){
return or__6417__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__24577__auto__.props.children,next_children__24580__auto__);
}
}
});})(x34457_34479))
;

x34457_34479.componentWillUnmount = ((function (x34457_34479){
return (function (){
var this__24577__auto__ = this;
var r__24588__auto__ = om.next.get_reconciler(this__24577__auto__);
var cfg__24589__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24588__auto__);
var st__24590__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
var indexer__24587__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
if(cljs.core.truth_((function (){var and__6405__auto__ = !((st__24590__auto__ == null));
if(and__6405__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__24590__auto__) : cljs.core.deref.call(null,st__24590__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24577__auto__], null));
} else {
return and__6405__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24590__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__24577__auto__], 0));
} else {
}

if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34457_34479))
;

x34457_34479.componentDidUpdate = ((function (x34457_34479){
return (function (prev_props__24585__auto__,prev_state__24586__auto__){
var this__24577__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24577__auto__);
});})(x34457_34479))
;

x34457_34479.isMounted = ((function (x34457_34479){
return (function (){
var this__24577__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24577__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34457_34479))
;

x34457_34479.componentWillMount = ((function (x34457_34479){
return (function (){
var this__24577__auto__ = this;
var indexer__24587__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34457_34479))
;

x34457_34479.render = ((function (x34457_34479){
return (function (){
var this__24576__auto__ = this;
var this$ = this__24576__auto__;
var _STAR_reconciler_STAR_34466 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34467 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34468 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34469 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34470 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__24576__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__24576__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__24576__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__24576__auto__);

om.next._STAR_parent_STAR_ = this__24576__auto__;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"opacity": 0.9})}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7197__auto__ = ((function (_STAR_reconciler_STAR_34466,_STAR_depth_STAR_34467,_STAR_shared_STAR_34468,_STAR_instrument_STAR_34469,_STAR_parent_STAR_34470,this$,this__24576__auto__,x34457_34479){
return (function ui$core$iter__34471(s__34472){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_34466,_STAR_depth_STAR_34467,_STAR_shared_STAR_34468,_STAR_instrument_STAR_34469,_STAR_parent_STAR_34470,this$,this__24576__auto__,x34457_34479){
return (function (){
var s__34472__$1 = s__34472;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34472__$1);
if(temp__4657__auto__){
var s__34472__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34472__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__34472__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__34474 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__34473 = (0);
while(true){
if((i__34473 < size__7196__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__34473);
cljs.core.chunk_append(b__34474,(ui.core.item_component.cljs$core$IFn$_invoke$arity$1 ? ui.core.item_component.cljs$core$IFn$_invoke$arity$1(item) : ui.core.item_component.call(null,item)));

var G__34483 = (i__34473 + (1));
i__34473 = G__34483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34474),ui$core$iter__34471(cljs.core.chunk_rest(s__34472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34474),null);
}
} else {
var item = cljs.core.first(s__34472__$2);
return cljs.core.cons((ui.core.item_component.cljs$core$IFn$_invoke$arity$1 ? ui.core.item_component.cljs$core$IFn$_invoke$arity$1(item) : ui.core.item_component.call(null,item)),ui$core$iter__34471(cljs.core.rest(s__34472__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_34466,_STAR_depth_STAR_34467,_STAR_shared_STAR_34468,_STAR_instrument_STAR_34469,_STAR_parent_STAR_34470,this$,this__24576__auto__,x34457_34479))
,null,null));
});})(_STAR_reconciler_STAR_34466,_STAR_depth_STAR_34467,_STAR_shared_STAR_34468,_STAR_instrument_STAR_34469,_STAR_parent_STAR_34470,this$,this__24576__auto__,x34457_34479))
;
return iter__7197__auto__(cljs.core.cst$kw$etherean_SLASH_items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34470;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34469;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34468;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34467;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34466;
}});})(x34457_34479))
;


ui.core.Items.prototype.constructor = ui.core.Items;

ui.core.Items.prototype.constructor.displayName = "ui.core/Items";

ui.core.Items.prototype.om$isComponent = true;

var x34477_34484 = ui.core.Items;
/** @nocollapse */
x34477_34484.om$next$IQuery$ = true;

/** @nocollapse */
x34477_34484.om$next$IQuery$query$arity$1 = ((function (x34477_34484){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_items,om.next.get_query(ui.core.Item)], null)], null);
});})(x34477_34484))
;


var x34478_34485 = ui.core.Items.prototype;

x34478_34485.om$next$IQuery$ = true;


x34478_34485.om$next$IQuery$query$arity$1 = ((function (x34478_34485){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_items,om.next.get_query(ui.core.Item)], null)], null);
});})(x34478_34485))
;


ui.core.Items.cljs$lang$type = true;

ui.core.Items.cljs$lang$ctorStr = "ui.core/Items";

ui.core.Items.cljs$lang$ctorPrWriter = (function (this__24689__auto__,writer__24690__auto__,opt__24691__auto__){
return cljs.core._write(writer__24690__auto__,"ui.core/Items");
});
ui.core.items_component = om.next.factory.cljs$core$IFn$_invoke$arity$1(ui.core.Items);
/**
 * @constructor
 */
ui.core.Proposal = (function ui$core$Proposal(){
var this__24686__auto__ = this;
React.Component.apply(this__24686__auto__,arguments);

if(!((this__24686__auto__.initLocalState == null))){
this__24686__auto__.state = this__24686__auto__.initLocalState();
} else {
this__24686__auto__.state = {};
}

return this__24686__auto__;
});

ui.core.Proposal.prototype = goog.object.clone(React.Component.prototype);

var x34490_34522 = ui.core.Proposal.prototype;
x34490_34522.componentWillUpdate = ((function (x34490_34522){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
if(((!((this__24577__auto__ == null)))?(((false) || (this__24577__auto__.om$next$Ident$))?true:false):false)){
var ident__24581__auto___34523 = om.next.ident(this__24577__auto__,om.next.props(this__24577__auto__));
var next_ident__24582__auto___34524 = om.next.ident(this__24577__auto__,om.next._next_props(next_props__24578__auto__,this__24577__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24581__auto___34523,next_ident__24582__auto___34524)){
var idxr__24583__auto___34525 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24583__auto___34525 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24583__auto___34525),((function (idxr__24583__auto___34525,ident__24581__auto___34523,next_ident__24582__auto___34524,this__24577__auto__,x34490_34522){
return (function (indexes__24584__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24584__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24581__auto___34523], null),cljs.core.disj,this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24582__auto___34524], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24577__auto__);
});})(idxr__24583__auto___34525,ident__24581__auto___34523,next_ident__24582__auto___34524,this__24577__auto__,x34490_34522))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24577__auto__);

return om.next.merge_pending_state_BANG_(this__24577__auto__);
});})(x34490_34522))
;

x34490_34522.shouldComponentUpdate = ((function (x34490_34522){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
var next_children__24580__auto__ = next_props__24578__auto__.children;
var next_props__24578__auto____$1 = goog.object.get(next_props__24578__auto__,"omcljs$value");
var next_props__24578__auto____$2 = (function (){var G__34492 = next_props__24578__auto____$1;
if((next_props__24578__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__34492);
} else {
return G__34492;
}
})();
var or__6417__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24577__auto__),next_props__24578__auto____$2);
if(or__6417__auto__){
return or__6417__auto__;
} else {
var or__6417__auto____$1 = (function (){var and__6405__auto__ = this__24577__auto__.state;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34497 = this__24577__auto__.state;
var G__34498 = "omcljs$state";
return goog.object.get(G__34497,G__34498);
})(),goog.object.get(next_state__24579__auto__,"omcljs$state"));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto____$1)){
return or__6417__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__24577__auto__.props.children,next_children__24580__auto__);
}
}
});})(x34490_34522))
;

x34490_34522.componentWillUnmount = ((function (x34490_34522){
return (function (){
var this__24577__auto__ = this;
var r__24588__auto__ = om.next.get_reconciler(this__24577__auto__);
var cfg__24589__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24588__auto__);
var st__24590__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
var indexer__24587__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
if(cljs.core.truth_((function (){var and__6405__auto__ = !((st__24590__auto__ == null));
if(and__6405__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__24590__auto__) : cljs.core.deref.call(null,st__24590__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24577__auto__], null));
} else {
return and__6405__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24590__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__24577__auto__], 0));
} else {
}

if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34490_34522))
;

x34490_34522.componentDidUpdate = ((function (x34490_34522){
return (function (prev_props__24585__auto__,prev_state__24586__auto__){
var this__24577__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24577__auto__);
});})(x34490_34522))
;

x34490_34522.isMounted = ((function (x34490_34522){
return (function (){
var this__24577__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24577__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34490_34522))
;

x34490_34522.componentWillMount = ((function (x34490_34522){
return (function (){
var this__24577__auto__ = this;
var indexer__24587__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34490_34522))
;

x34490_34522.initLocalState = ((function (x34490_34522){
return (function (){
var this$ = this;
var ret__24555__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$temp_DASH_description,"",cljs.core.cst$kw$height,(1),cljs.core.cst$kw$dialog,false], null);
var obj34500 = {"omcljs$state":ret__24555__auto__};
return obj34500;
});})(x34490_34522))
;

x34490_34522.render = ((function (x34490_34522){
return (function (){
var this__24576__auto__ = this;
var this$ = this__24576__auto__;
var _STAR_reconciler_STAR_34501 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34502 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34503 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34504 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34505 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__24576__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__24576__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__24576__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__24576__auto__);

om.next._STAR_parent_STAR_ = this__24576__auto__;

try{var map__34506 = om.next.props(this$);
var map__34506__$1 = ((((!((map__34506 == null)))?((((map__34506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34506):map__34506);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34506__$1,cljs.core.cst$kw$proposal_SLASH_description);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34506__$1,cljs.core.cst$kw$db_SLASH_id);
var unsaved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34506__$1,cljs.core.cst$kw$proposal_SLASH_unsaved);
var upvotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34506__$1,cljs.core.cst$kw$proposal_SLASH_upvotes);
var downvotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34506__$1,cljs.core.cst$kw$proposal_SLASH_downvotes);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34506__$1,cljs.core.cst$kw$etherean_SLASH_user);
var map__34507 = user;
var map__34507__$1 = ((((!((map__34507 == null)))?((((map__34507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34507):map__34507);
var can_vote_proposal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34507__$1,cljs.core.cst$kw$user_SLASH_can_DASH_vote_DASH_proposal);
var stake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34507__$1,cljs.core.cst$kw$user_SLASH_stake);
var temporary = om.next.tempid_QMARK_(id);
var has_stake = (stake > (0));
var map__34508 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__34508__$1 = ((((!((map__34508 == null)))?((((map__34508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34508):map__34508);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34508__$1,cljs.core.cst$kw$height);
var dialog = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34508__$1,cljs.core.cst$kw$dialog);
var map__34509 = dialog;
var map__34509__$1 = ((((!((map__34509 == null)))?((((map__34509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34509):map__34509);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34509__$1,cljs.core.cst$kw$direction);
var hide_dialog = ((function (map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522){
return (function (){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$,cljs.core.dissoc,cljs.core.cst$kw$dialog);
});})(map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522))
;
return om_tools.dom.element(React.DOM.div,(function (){var G__34514 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cancel_DASH_button_DASH_text,"Cancel",cljs.core.cst$kw$confirm_DASH_button_DASH_text,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$up))?"Vote Up":"Vote Down"),cljs.core.cst$kw$intent,cljs.core.cst$kw$primary.cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),cljs.core.cst$kw$is_DASH_open,dialog,cljs.core.cst$kw$on_DASH_cancel,((function (map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522){
return (function (e){
return hide_dialog();
});})(map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522))
,cljs.core.cst$kw$on_DASH_confirm,((function (map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522){
return (function (e){
hide_dialog();

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$proposal_SLASH_vote),(function (){var x__7251__auto__ = dialog;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$etherean_SLASH_proposals))))));
});})(map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522))
], null);
var G__34515 = "You can vote on one proposal per day. Is this an item currently on the mind of ethereans, that deserves to be listed on the front page?";
return (blueprint_cljs.core.alert.cljs$core$IFn$_invoke$arity$2 ? blueprint_cljs.core.alert.cljs$core$IFn$_invoke$arity$2(G__34514,G__34515) : blueprint_cljs.core.alert.call(null,G__34514,G__34515));
})(),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.motion.motion(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,id,cljs.core.cst$kw$defaultStyle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(cljs.core.truth_(unsaved)?(0):(1))], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(ui.motion.spring.cljs$core$IFn$_invoke$arity$1 ? ui.motion.spring.cljs$core$IFn$_invoke$arity$1(height) : ui.motion.spring.call(null,height))], null)], null),((function (map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522){
return (function (value){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": om_tools.dom.format_opts([cljs.core.str(((5) * cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingBottom": om_tools.dom.format_opts([cljs.core.str(((5) * cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var vote_button = ((function (map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522){
return (function (direction__$1,activated,disabled){
var G__34516 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name(direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),cljs.core.cst$kw$disabled,disabled,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line_DASH_height,(0),cljs.core.cst$kw$min_DASH_height,(0),cljs.core.cst$kw$outline,"none"], null),cljs.core.cst$kw$on_DASH_click,((function (map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522){
return (function (e){
if(cljs.core.truth_((function (){var and__6405__auto__ = has_stake;
if(and__6405__auto__){
return can_vote_proposal;
} else {
return and__6405__auto__;
}
})())){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$direction,direction__$1], null));
} else {
return ui.util.my_toaster.show(({"intent": cljs.core.cst$kw$danger.cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": ((has_stake)?"You already voted on a proposal today. You will need to wait until tomorrow to vote again.":"Please deposit stake first in the stake tab to vote on proposals.")}));
}
});})(map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522))
], null);
return (blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$1(G__34516) : blueprint_cljs.core.button.call(null,G__34516));
});})(map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button(cljs.core.cst$kw$up,false,unsaved),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(unsaved)?null:(cljs.core.truth_(upvotes)?ui.core.format_vote_number((upvotes - downvotes)):"---"
))],null)))),vote_button(cljs.core.cst$kw$down,false,unsaved)],null))));
})(),(function (){var proposal_body = ((function (map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522){
return (function (desc,detail,disabled){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)}), "onClick": om_tools.dom.format_opts(((function (map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522){
return (function (){
if(cljs.core.truth_(disabled)){
return ui.util.my_toaster.show(({"intent": cljs.core.cst$kw$danger.cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You have not staked any funds yet. Please got to the \"Voting Stakes\" tab first."}));
} else {
return null;
}
});})(map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522))
;
if(cljs.core.truth_(unsaved)){
var temp_description = cljs.core.cst$kw$temp_DASH_description.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
var has_description = cljs.core.seq(temp_description);
var save_fn = ((function (temp_description,has_description,proposal_body,map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522){
return (function (){
if(has_description){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$proposal_SLASH_save),(function (){var x__7251__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$id),(function (){var x__7251__auto__ = id;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$description),(function (){var x__7251__auto__ = temp_description;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$etherean_SLASH_proposals))))));
} else {
return null;
}
});})(temp_description,has_description,proposal_body,map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522))
;
return proposal_body((function (){var G__34517 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,((!(has_stake))?"... (Please deposit stake first to propose an item)":((cljs.core.not(can_vote_proposal))?"... (Today's proposal action already used up)":"... propose a new item!"
)),cljs.core.cst$kw$value,temp_description,cljs.core.cst$kw$disabled,(!(has_stake)) || (cljs.core.not(can_vote_proposal)),cljs.core.cst$kw$on_DASH_change,((function (temp_description,has_description,save_fn,proposal_body,map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522){
return (function (s){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$temp_DASH_description,s);
});})(temp_description,has_description,save_fn,proposal_body,map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522))
], null);
return (blueprint_cljs.core.editable_text.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.editable_text.cljs$core$IFn$_invoke$arity$1(G__34517) : blueprint_cljs.core.editable_text.call(null,G__34517));
})(),((has_description)?(function (){var G__34518 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"pt-intent-primary pt-icon-plus pt-minimal",cljs.core.cst$kw$on_DASH_click,save_fn], null);
var G__34519 = "Save";
return (blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$2 ? blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$2(G__34518,G__34519) : blueprint_cljs.core.button.call(null,G__34518,G__34519));
})():null),!(has_stake));
} else {
return proposal_body(description,(((temporary) || (cljs.core.not(upvotes)))?ui.core.mining_spinner():null),false);
}
})()],null))));
});})(map__34506,map__34506__$1,description,id,unsaved,upvotes,downvotes,user,map__34507,map__34507__$1,can_vote_proposal,stake,temporary,has_stake,map__34508,map__34508__$1,height,dialog,map__34509,map__34509__$1,direction,hide_dialog,_STAR_reconciler_STAR_34501,_STAR_depth_STAR_34502,_STAR_shared_STAR_34503,_STAR_instrument_STAR_34504,_STAR_parent_STAR_34505,this$,this__24576__auto__,x34490_34522))
)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34505;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34504;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34503;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34502;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34501;
}});})(x34490_34522))
;


ui.core.Proposal.prototype.constructor = ui.core.Proposal;

ui.core.Proposal.prototype.constructor.displayName = "ui.core/Proposal";

ui.core.Proposal.prototype.om$isComponent = true;

var x34520_34526 = ui.core.Proposal;
/** @nocollapse */
x34520_34526.om$next$IQuery$ = true;

/** @nocollapse */
x34520_34526.om$next$IQuery$query$arity$1 = ((function (x34520_34526){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$proposal_SLASH_description,cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$proposal_SLASH_unsaved,cljs.core.cst$kw$proposal_SLASH_upvotes,cljs.core.cst$kw$proposal_SLASH_downvotes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_can_DASH_vote_DASH_proposal,cljs.core.cst$kw$user_SLASH_stake], null)], null)], null);
});})(x34520_34526))
;


var x34521_34527 = ui.core.Proposal.prototype;

x34521_34527.om$next$IQuery$ = true;


x34521_34527.om$next$IQuery$query$arity$1 = ((function (x34521_34527){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$proposal_SLASH_description,cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$proposal_SLASH_unsaved,cljs.core.cst$kw$proposal_SLASH_upvotes,cljs.core.cst$kw$proposal_SLASH_downvotes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_can_DASH_vote_DASH_proposal,cljs.core.cst$kw$user_SLASH_stake], null)], null)], null);
});})(x34521_34527))
;


ui.core.Proposal.cljs$lang$type = true;

ui.core.Proposal.cljs$lang$ctorStr = "ui.core/Proposal";

ui.core.Proposal.cljs$lang$ctorPrWriter = (function (this__24689__auto__,writer__24690__auto__,opt__24691__auto__){
return cljs.core._write(writer__24690__auto__,"ui.core/Proposal");
});
ui.core.proposal_component = om.next.factory.cljs$core$IFn$_invoke$arity$2(ui.core.Proposal,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$db_SLASH_id], null));
/**
 * @constructor
 */
ui.core.Proposals = (function ui$core$Proposals(){
var this__24686__auto__ = this;
React.Component.apply(this__24686__auto__,arguments);

if(!((this__24686__auto__.initLocalState == null))){
this__24686__auto__.state = this__24686__auto__.initLocalState();
} else {
this__24686__auto__.state = {};
}

return this__24686__auto__;
});

ui.core.Proposals.prototype = goog.object.clone(React.Component.prototype);

var x34532_34554 = ui.core.Proposals.prototype;
x34532_34554.componentWillUpdate = ((function (x34532_34554){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
if(((!((this__24577__auto__ == null)))?(((false) || (this__24577__auto__.om$next$Ident$))?true:false):false)){
var ident__24581__auto___34555 = om.next.ident(this__24577__auto__,om.next.props(this__24577__auto__));
var next_ident__24582__auto___34556 = om.next.ident(this__24577__auto__,om.next._next_props(next_props__24578__auto__,this__24577__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24581__auto___34555,next_ident__24582__auto___34556)){
var idxr__24583__auto___34557 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24583__auto___34557 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24583__auto___34557),((function (idxr__24583__auto___34557,ident__24581__auto___34555,next_ident__24582__auto___34556,this__24577__auto__,x34532_34554){
return (function (indexes__24584__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24584__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24581__auto___34555], null),cljs.core.disj,this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24582__auto___34556], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24577__auto__);
});})(idxr__24583__auto___34557,ident__24581__auto___34555,next_ident__24582__auto___34556,this__24577__auto__,x34532_34554))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24577__auto__);

return om.next.merge_pending_state_BANG_(this__24577__auto__);
});})(x34532_34554))
;

x34532_34554.shouldComponentUpdate = ((function (x34532_34554){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
var next_children__24580__auto__ = next_props__24578__auto__.children;
var next_props__24578__auto____$1 = goog.object.get(next_props__24578__auto__,"omcljs$value");
var next_props__24578__auto____$2 = (function (){var G__34534 = next_props__24578__auto____$1;
if((next_props__24578__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__34534);
} else {
return G__34534;
}
})();
var or__6417__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24577__auto__),next_props__24578__auto____$2);
if(or__6417__auto__){
return or__6417__auto__;
} else {
var or__6417__auto____$1 = (function (){var and__6405__auto__ = this__24577__auto__.state;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34539 = this__24577__auto__.state;
var G__34540 = "omcljs$state";
return goog.object.get(G__34539,G__34540);
})(),goog.object.get(next_state__24579__auto__,"omcljs$state"));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto____$1)){
return or__6417__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__24577__auto__.props.children,next_children__24580__auto__);
}
}
});})(x34532_34554))
;

x34532_34554.componentWillUnmount = ((function (x34532_34554){
return (function (){
var this__24577__auto__ = this;
var r__24588__auto__ = om.next.get_reconciler(this__24577__auto__);
var cfg__24589__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24588__auto__);
var st__24590__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
var indexer__24587__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
if(cljs.core.truth_((function (){var and__6405__auto__ = !((st__24590__auto__ == null));
if(and__6405__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__24590__auto__) : cljs.core.deref.call(null,st__24590__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24577__auto__], null));
} else {
return and__6405__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24590__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__24577__auto__], 0));
} else {
}

if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34532_34554))
;

x34532_34554.componentDidUpdate = ((function (x34532_34554){
return (function (prev_props__24585__auto__,prev_state__24586__auto__){
var this__24577__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24577__auto__);
});})(x34532_34554))
;

x34532_34554.isMounted = ((function (x34532_34554){
return (function (){
var this__24577__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24577__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34532_34554))
;

x34532_34554.componentWillMount = ((function (x34532_34554){
return (function (){
var this__24577__auto__ = this;
var indexer__24587__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34532_34554))
;

x34532_34554.render = ((function (x34532_34554){
return (function (){
var this__24576__auto__ = this;
var this$ = this__24576__auto__;
var _STAR_reconciler_STAR_34541 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34542 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34543 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34544 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34545 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__24576__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__24576__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__24576__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__24576__auto__);

om.next._STAR_parent_STAR_ = this__24576__auto__;

try{return om_tools.dom.element(React.DOM.div,(function (){var iter__7197__auto__ = ((function (_STAR_reconciler_STAR_34541,_STAR_depth_STAR_34542,_STAR_shared_STAR_34543,_STAR_instrument_STAR_34544,_STAR_parent_STAR_34545,this$,this__24576__auto__,x34532_34554){
return (function ui$core$iter__34546(s__34547){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_34541,_STAR_depth_STAR_34542,_STAR_shared_STAR_34543,_STAR_instrument_STAR_34544,_STAR_parent_STAR_34545,this$,this__24576__auto__,x34532_34554){
return (function (){
var s__34547__$1 = s__34547;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34547__$1);
if(temp__4657__auto__){
var s__34547__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34547__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__34547__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__34549 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__34548 = (0);
while(true){
if((i__34548 < size__7196__auto__)){
var proposal = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__34548);
cljs.core.chunk_append(b__34549,(ui.core.proposal_component.cljs$core$IFn$_invoke$arity$1 ? ui.core.proposal_component.cljs$core$IFn$_invoke$arity$1(proposal) : ui.core.proposal_component.call(null,proposal)));

var G__34558 = (i__34548 + (1));
i__34548 = G__34558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34549),ui$core$iter__34546(cljs.core.chunk_rest(s__34547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34549),null);
}
} else {
var proposal = cljs.core.first(s__34547__$2);
return cljs.core.cons((ui.core.proposal_component.cljs$core$IFn$_invoke$arity$1 ? ui.core.proposal_component.cljs$core$IFn$_invoke$arity$1(proposal) : ui.core.proposal_component.call(null,proposal)),ui$core$iter__34546(cljs.core.rest(s__34547__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_34541,_STAR_depth_STAR_34542,_STAR_shared_STAR_34543,_STAR_instrument_STAR_34544,_STAR_parent_STAR_34545,this$,this__24576__auto__,x34532_34554))
,null,null));
});})(_STAR_reconciler_STAR_34541,_STAR_depth_STAR_34542,_STAR_shared_STAR_34543,_STAR_instrument_STAR_34544,_STAR_parent_STAR_34545,this$,this__24576__auto__,x34532_34554))
;
return iter__7197__auto__(cljs.core.cst$kw$etherean_SLASH_proposals.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));
})(),cljs.core.PersistentVector.EMPTY);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34545;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34544;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34543;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34542;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34541;
}});})(x34532_34554))
;


ui.core.Proposals.prototype.constructor = ui.core.Proposals;

ui.core.Proposals.prototype.constructor.displayName = "ui.core/Proposals";

ui.core.Proposals.prototype.om$isComponent = true;

var x34552_34559 = ui.core.Proposals;
/** @nocollapse */
x34552_34559.om$next$IQuery$ = true;

/** @nocollapse */
x34552_34559.om$next$IQuery$query$arity$1 = ((function (x34552_34559){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_proposals,om.next.get_query(ui.core.Proposal)], null)], null);
});})(x34552_34559))
;


var x34553_34560 = ui.core.Proposals.prototype;

x34553_34560.om$next$IQuery$ = true;


x34553_34560.om$next$IQuery$query$arity$1 = ((function (x34553_34560){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_proposals,om.next.get_query(ui.core.Proposal)], null)], null);
});})(x34553_34560))
;


ui.core.Proposals.cljs$lang$type = true;

ui.core.Proposals.cljs$lang$ctorStr = "ui.core/Proposals";

ui.core.Proposals.cljs$lang$ctorPrWriter = (function (this__24689__auto__,writer__24690__auto__,opt__24691__auto__){
return cljs.core._write(writer__24690__auto__,"ui.core/Proposals");
});
ui.core.proposals_component = om.next.factory.cljs$core$IFn$_invoke$arity$1(ui.core.Proposals);
/**
 * @constructor
 */
ui.core.Stake = (function ui$core$Stake(){
var this__24686__auto__ = this;
React.Component.apply(this__24686__auto__,arguments);

if(!((this__24686__auto__.initLocalState == null))){
this__24686__auto__.state = this__24686__auto__.initLocalState();
} else {
this__24686__auto__.state = {};
}

return this__24686__auto__;
});

ui.core.Stake.prototype = goog.object.clone(React.Component.prototype);

var x34565_34583 = ui.core.Stake.prototype;
x34565_34583.componentWillUpdate = ((function (x34565_34583){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
if(((!((this__24577__auto__ == null)))?(((false) || (this__24577__auto__.om$next$Ident$))?true:false):false)){
var ident__24581__auto___34584 = om.next.ident(this__24577__auto__,om.next.props(this__24577__auto__));
var next_ident__24582__auto___34585 = om.next.ident(this__24577__auto__,om.next._next_props(next_props__24578__auto__,this__24577__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24581__auto___34584,next_ident__24582__auto___34585)){
var idxr__24583__auto___34586 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24583__auto___34586 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24583__auto___34586),((function (idxr__24583__auto___34586,ident__24581__auto___34584,next_ident__24582__auto___34585,this__24577__auto__,x34565_34583){
return (function (indexes__24584__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24584__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24581__auto___34584], null),cljs.core.disj,this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24582__auto___34585], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24577__auto__);
});})(idxr__24583__auto___34586,ident__24581__auto___34584,next_ident__24582__auto___34585,this__24577__auto__,x34565_34583))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24577__auto__);

return om.next.merge_pending_state_BANG_(this__24577__auto__);
});})(x34565_34583))
;

x34565_34583.shouldComponentUpdate = ((function (x34565_34583){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
var next_children__24580__auto__ = next_props__24578__auto__.children;
var next_props__24578__auto____$1 = goog.object.get(next_props__24578__auto__,"omcljs$value");
var next_props__24578__auto____$2 = (function (){var G__34567 = next_props__24578__auto____$1;
if((next_props__24578__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__34567);
} else {
return G__34567;
}
})();
var or__6417__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24577__auto__),next_props__24578__auto____$2);
if(or__6417__auto__){
return or__6417__auto__;
} else {
var or__6417__auto____$1 = (function (){var and__6405__auto__ = this__24577__auto__.state;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34572 = this__24577__auto__.state;
var G__34573 = "omcljs$state";
return goog.object.get(G__34572,G__34573);
})(),goog.object.get(next_state__24579__auto__,"omcljs$state"));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto____$1)){
return or__6417__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__24577__auto__.props.children,next_children__24580__auto__);
}
}
});})(x34565_34583))
;

x34565_34583.componentWillUnmount = ((function (x34565_34583){
return (function (){
var this__24577__auto__ = this;
var r__24588__auto__ = om.next.get_reconciler(this__24577__auto__);
var cfg__24589__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24588__auto__);
var st__24590__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
var indexer__24587__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
if(cljs.core.truth_((function (){var and__6405__auto__ = !((st__24590__auto__ == null));
if(and__6405__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__24590__auto__) : cljs.core.deref.call(null,st__24590__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24577__auto__], null));
} else {
return and__6405__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24590__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__24577__auto__], 0));
} else {
}

if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34565_34583))
;

x34565_34583.componentDidUpdate = ((function (x34565_34583){
return (function (prev_props__24585__auto__,prev_state__24586__auto__){
var this__24577__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24577__auto__);
});})(x34565_34583))
;

x34565_34583.isMounted = ((function (x34565_34583){
return (function (){
var this__24577__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24577__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34565_34583))
;

x34565_34583.componentWillMount = ((function (x34565_34583){
return (function (){
var this__24577__auto__ = this;
var indexer__24587__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34565_34583))
;

x34565_34583.render = ((function (x34565_34583){
return (function (){
var this__24576__auto__ = this;
var this$ = this__24576__auto__;
var _STAR_reconciler_STAR_34574 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34575 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34576 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34577 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34578 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__24576__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__24576__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__24576__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__24576__auto__);

om.next._STAR_parent_STAR_ = this__24576__auto__;

try{var map__34579 = om.next.props(this$);
var map__34579__$1 = ((((!((map__34579 == null)))?((((map__34579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34579):map__34579);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34579__$1,cljs.core.cst$kw$db_SLASH_id);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34579__$1,cljs.core.cst$kw$stake_SLASH_value);
return om_tools.dom.element(React.DOM.tr,om_tools.dom.element(React.DOM.td,id,cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.td,value,cljs.core.PersistentVector.EMPTY)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34578;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34577;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34576;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34575;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34574;
}});})(x34565_34583))
;


ui.core.Stake.prototype.constructor = ui.core.Stake;

ui.core.Stake.prototype.constructor.displayName = "ui.core/Stake";

ui.core.Stake.prototype.om$isComponent = true;

var x34581_34587 = ui.core.Stake;
/** @nocollapse */
x34581_34587.om$next$IQuery$ = true;

/** @nocollapse */
x34581_34587.om$next$IQuery$query$arity$1 = ((function (x34581_34587){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$stake_SLASH_value], null);
});})(x34581_34587))
;


var x34582_34588 = ui.core.Stake.prototype;

x34582_34588.om$next$IQuery$ = true;


x34582_34588.om$next$IQuery$query$arity$1 = ((function (x34582_34588){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$stake_SLASH_value], null);
});})(x34582_34588))
;


ui.core.Stake.cljs$lang$type = true;

ui.core.Stake.cljs$lang$ctorStr = "ui.core/Stake";

ui.core.Stake.cljs$lang$ctorPrWriter = (function (this__24689__auto__,writer__24690__auto__,opt__24691__auto__){
return cljs.core._write(writer__24690__auto__,"ui.core/Stake");
});
ui.core.stake_component = om.next.factory.cljs$core$IFn$_invoke$arity$2(ui.core.Stake,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$db_SLASH_id], null));
ui.core.format_address = (function ui$core$format_address(address){
if(cljs.core.truth_(address)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.i,({"style": ({"fontWeight": (200)})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(address,(0),(8)),"..."],null))));
} else {
return null;
}
});
/**
 * @constructor
 */
ui.core.Stakes = (function ui$core$Stakes(){
var this__24686__auto__ = this;
React.Component.apply(this__24686__auto__,arguments);

if(!((this__24686__auto__.initLocalState == null))){
this__24686__auto__.state = this__24686__auto__.initLocalState();
} else {
this__24686__auto__.state = {};
}

return this__24686__auto__;
});

ui.core.Stakes.prototype = goog.object.clone(React.Component.prototype);

var x34593_34634 = ui.core.Stakes.prototype;
x34593_34634.componentWillUpdate = ((function (x34593_34634){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
if(((!((this__24577__auto__ == null)))?(((false) || (this__24577__auto__.om$next$Ident$))?true:false):false)){
var ident__24581__auto___34635 = om.next.ident(this__24577__auto__,om.next.props(this__24577__auto__));
var next_ident__24582__auto___34636 = om.next.ident(this__24577__auto__,om.next._next_props(next_props__24578__auto__,this__24577__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24581__auto___34635,next_ident__24582__auto___34636)){
var idxr__24583__auto___34637 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24583__auto___34637 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24583__auto___34637),((function (idxr__24583__auto___34637,ident__24581__auto___34635,next_ident__24582__auto___34636,this__24577__auto__,x34593_34634){
return (function (indexes__24584__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24584__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24581__auto___34635], null),cljs.core.disj,this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24582__auto___34636], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24577__auto__);
});})(idxr__24583__auto___34637,ident__24581__auto___34635,next_ident__24582__auto___34636,this__24577__auto__,x34593_34634))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24577__auto__);

return om.next.merge_pending_state_BANG_(this__24577__auto__);
});})(x34593_34634))
;

x34593_34634.shouldComponentUpdate = ((function (x34593_34634){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
var next_children__24580__auto__ = next_props__24578__auto__.children;
var next_props__24578__auto____$1 = goog.object.get(next_props__24578__auto__,"omcljs$value");
var next_props__24578__auto____$2 = (function (){var G__34595 = next_props__24578__auto____$1;
if((next_props__24578__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__34595);
} else {
return G__34595;
}
})();
var or__6417__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24577__auto__),next_props__24578__auto____$2);
if(or__6417__auto__){
return or__6417__auto__;
} else {
var or__6417__auto____$1 = (function (){var and__6405__auto__ = this__24577__auto__.state;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34600 = this__24577__auto__.state;
var G__34601 = "omcljs$state";
return goog.object.get(G__34600,G__34601);
})(),goog.object.get(next_state__24579__auto__,"omcljs$state"));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto____$1)){
return or__6417__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__24577__auto__.props.children,next_children__24580__auto__);
}
}
});})(x34593_34634))
;

x34593_34634.componentWillUnmount = ((function (x34593_34634){
return (function (){
var this__24577__auto__ = this;
var r__24588__auto__ = om.next.get_reconciler(this__24577__auto__);
var cfg__24589__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24588__auto__);
var st__24590__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
var indexer__24587__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24589__auto__);
if(cljs.core.truth_((function (){var and__6405__auto__ = !((st__24590__auto__ == null));
if(and__6405__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__24590__auto__) : cljs.core.deref.call(null,st__24590__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24577__auto__], null));
} else {
return and__6405__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24590__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__24577__auto__], 0));
} else {
}

if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34593_34634))
;

x34593_34634.componentDidUpdate = ((function (x34593_34634){
return (function (prev_props__24585__auto__,prev_state__24586__auto__){
var this__24577__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24577__auto__);
});})(x34593_34634))
;

x34593_34634.isMounted = ((function (x34593_34634){
return (function (){
var this__24577__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24577__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34593_34634))
;

x34593_34634.componentWillMount = ((function (x34593_34634){
return (function (){
var this__24577__auto__ = this;
var indexer__24587__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x34593_34634))
;

x34593_34634.initLocalState = ((function (x34593_34634){
return (function (){
var this$ = this;
var ret__24555__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var obj34603 = {"omcljs$state":ret__24555__auto__};
return obj34603;
});})(x34593_34634))
;

x34593_34634.render = ((function (x34593_34634){
return (function (){
var this__24576__auto__ = this;
var this$ = this__24576__auto__;
var _STAR_reconciler_STAR_34604 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34605 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34606 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34607 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34608 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__24576__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__24576__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__24576__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__24576__auto__);

om.next._STAR_parent_STAR_ = this__24576__auto__;

try{var map__34609 = om.next.props(this$);
var map__34609__$1 = ((((!((map__34609 == null)))?((((map__34609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34609):map__34609);
var stakes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34609__$1,cljs.core.cst$kw$etherean_SLASH_stakes);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34609__$1,cljs.core.cst$kw$etherean_SLASH_user);
var map__34610 = user;
var map__34610__$1 = ((((!((map__34610 == null)))?((((map__34610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34610):map__34610);
var stake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34610__$1,cljs.core.cst$kw$user_SLASH_stake);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34610__$1,cljs.core.cst$kw$user_SLASH_address);
var balance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34610__$1,cljs.core.cst$kw$user_SLASH_balance);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"opacity": 0.8})}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Current Stake"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stake,cljs.core.cst$kw$mining))?ui.core.mining_spinner():cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,({"style": ({"color": "#2b95d6"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[stake," ETH"],null))))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,null,cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["(associated with account ",ui.core.format_address(address),")"],null)))),(((stake === (0)))?(function (){var G__34613 = ({"className": "pt-callout pt-icon-info-sign", "style": ({"marginTop": "0.5rem"})});
var G__34614 = "You do not currently have any voting stake for EthereanMind. To be able to vote on proposals and top 10 items, you need to deposit some fully-refundable coins into the EthereanMind staking contract.";
return React.DOM.div(G__34613,G__34614);
})():null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-button-group", "style": ({"marginTop": "0.5rem"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__34615 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"pt-intent-primary",cljs.core.cst$kw$on_DASH_click,((function (map__34609,map__34609__$1,stakes,user,map__34610,map__34610__$1,stake,address,balance,_STAR_reconciler_STAR_34604,_STAR_depth_STAR_34605,_STAR_shared_STAR_34606,_STAR_instrument_STAR_34607,_STAR_parent_STAR_34608,this$,this__24576__auto__,x34593_34634){
return (function (e){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$deposit,cljs.core.cst$kw$value,""], null));
});})(map__34609,map__34609__$1,stakes,user,map__34610,map__34610__$1,stake,address,balance,_STAR_reconciler_STAR_34604,_STAR_depth_STAR_34605,_STAR_shared_STAR_34606,_STAR_instrument_STAR_34607,_STAR_parent_STAR_34608,this$,this__24576__auto__,x34593_34634))
], null);
var G__34616 = "Deposit Stake";
return (blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$2 ? blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$2(G__34615,G__34616) : blueprint_cljs.core.button.call(null,G__34615,G__34616));
})(),(function (){var G__34617 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__34609,map__34609__$1,stakes,user,map__34610,map__34610__$1,stake,address,balance,_STAR_reconciler_STAR_34604,_STAR_depth_STAR_34605,_STAR_shared_STAR_34606,_STAR_instrument_STAR_34607,_STAR_parent_STAR_34608,this$,this__24576__auto__,x34593_34634){
return (function (e){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$withdraw], null));
});})(map__34609,map__34609__$1,stakes,user,map__34610,map__34610__$1,stake,address,balance,_STAR_reconciler_STAR_34604,_STAR_depth_STAR_34605,_STAR_shared_STAR_34606,_STAR_instrument_STAR_34607,_STAR_parent_STAR_34608,this$,this__24576__auto__,x34593_34634))
], null);
var G__34618 = "Withdraw Stake";
return (blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$2 ? blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$2(G__34617,G__34618) : blueprint_cljs.core.button.call(null,G__34617,G__34618));
})()],null))))],null)))),(function (){var map__34619 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__34619__$1 = ((((!((map__34619 == null)))?((((map__34619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34619):map__34619);
var dialog = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34619__$1,cljs.core.cst$kw$dialog);
var map__34620 = dialog;
var map__34620__$1 = ((((!((map__34620 == null)))?((((map__34620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34620):map__34620);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34620__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34620__$1,cljs.core.cst$kw$value);
var value_status = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,""))?cljs.core.cst$kw$missing:(((value <= balance))?cljs.core.cst$kw$good:cljs.core.cst$kw$bad
));
var close_dialog = ((function (value_status,map__34619,map__34619__$1,dialog,map__34620,map__34620__$1,type,value,map__34609,map__34609__$1,stakes,user,map__34610,map__34610__$1,stake,address,balance,_STAR_reconciler_STAR_34604,_STAR_depth_STAR_34605,_STAR_shared_STAR_34606,_STAR_instrument_STAR_34607,_STAR_parent_STAR_34608,this$,this__24576__auto__,x34593_34634){
return (function (){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$,cljs.core.dissoc,cljs.core.cst$kw$dialog);
});})(value_status,map__34619,map__34619__$1,dialog,map__34620,map__34620__$1,type,value,map__34609,map__34609__$1,stakes,user,map__34610,map__34610__$1,stake,address,balance,_STAR_reconciler_STAR_34604,_STAR_depth_STAR_34605,_STAR_shared_STAR_34606,_STAR_instrument_STAR_34607,_STAR_parent_STAR_34608,this$,this__24576__auto__,x34593_34634))
;
var G__34623 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$is_DASH_open,dialog,cljs.core.cst$kw$on_DASH_close,close_dialog,cljs.core.cst$kw$title,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$deposit))?"Deposit Stake":"Withdraw Stake")], null);
var G__34624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-dialog-body"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$deposit))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,"In order to vote on ethereanmind you need to place a refundable deposit of ether. You will be able to start voting immediately after depositing ether, but you need to wait a month before you can withdraw your deposit again."),om_tools.dom.element(React.DOM.p,React.DOM.b(null,"The rules of the smart contract assure that no one else can withdraw your money and that you will receive back 100% of your deposit."),cljs.core.PersistentVector.EMPTY),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,null,cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Balance available: ",balance," Ether"],null)))),(function (){var G__34626 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,"Deposit Amount (Ether)",cljs.core.cst$kw$value,value,cljs.core.cst$kw$right_DASH_element,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value_status,cljs.core.cst$kw$missing))?(function (){var G__34627 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value_status,cljs.core.cst$kw$good))?"pt-icon-tick pt-intent-success":"pt-icon-cross pt-intent-danger")], null);
return (blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$1(G__34627) : blueprint_cljs.core.button.call(null,G__34627));
})():null),cljs.core.cst$kw$on_DASH_change,((function (G__34623,value_status,close_dialog,map__34619,map__34619__$1,dialog,map__34620,map__34620__$1,type,value,map__34609,map__34609__$1,stakes,user,map__34610,map__34610__$1,stake,address,balance,_STAR_reconciler_STAR_34604,_STAR_depth_STAR_34605,_STAR_shared_STAR_34606,_STAR_instrument_STAR_34607,_STAR_parent_STAR_34608,this$,this__24576__auto__,x34593_34634){
return (function (e){
var value_new = e.target.value;
if(cljs.core.truth_(cljs.core.re_matches(/[0-9]*\.?[0-9]*/,value_new))){
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dialog,cljs.core.cst$kw$value], null),value_new);
} else {
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dialog,cljs.core.cst$kw$value], null),value);
}

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$noise], null),cljs.core.rand_int((1000000)));
});})(G__34623,value_status,close_dialog,map__34619,map__34619__$1,dialog,map__34620,map__34620__$1,type,value,map__34609,map__34609__$1,stakes,user,map__34610,map__34610__$1,stake,address,balance,_STAR_reconciler_STAR_34604,_STAR_depth_STAR_34605,_STAR_shared_STAR_34606,_STAR_instrument_STAR_34607,_STAR_parent_STAR_34608,this$,this__24576__auto__,x34593_34634))
], null);
return (blueprint_cljs.core.input_group.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.input_group.cljs$core$IFn$_invoke$arity$1(G__34626) : blueprint_cljs.core.input_group.call(null,G__34626));
})()], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,null,cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can now withdraw all of your stake (Currently ",stake," Ether) back into your regular ethereum account at [",ui.core.format_address(address),"]. At that point, you will no longer be able to participate in voting- You'll need to deposit new funds to vote again."],null))))], null))],null))));
var G__34625 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-dialog-footer"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-dialog-footer-actions"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__34628 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value_status,cljs.core.cst$kw$good),cljs.core.cst$kw$class,"pt-intent-primary",cljs.core.cst$kw$on_DASH_click,((function (G__34623,G__34624,value_status,close_dialog,map__34619,map__34619__$1,dialog,map__34620,map__34620__$1,type,value,map__34609,map__34609__$1,stakes,user,map__34610,map__34610__$1,stake,address,balance,_STAR_reconciler_STAR_34604,_STAR_depth_STAR_34605,_STAR_shared_STAR_34606,_STAR_instrument_STAR_34607,_STAR_parent_STAR_34608,this$,this__24576__auto__,x34593_34634){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$deposit)){
om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$user_SLASH_deposit),(function (){var x__7251__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),(function (){var x__7251__auto__ = value;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$etherean_SLASH_main_DASH_stakes))))));
} else {
om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$user_SLASH_withdraw))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$etherean_SLASH_main_DASH_stakes))))));
}

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$,cljs.core.dissoc,cljs.core.cst$kw$dialog);
});})(G__34623,G__34624,value_status,close_dialog,map__34619,map__34619__$1,dialog,map__34620,map__34620__$1,type,value,map__34609,map__34609__$1,stakes,user,map__34610,map__34610__$1,stake,address,balance,_STAR_reconciler_STAR_34604,_STAR_depth_STAR_34605,_STAR_shared_STAR_34606,_STAR_instrument_STAR_34607,_STAR_parent_STAR_34608,this$,this__24576__auto__,x34593_34634))
], null);
var G__34629 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$deposit))?"Deposit":"Withdraw");
return (blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$2 ? blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$2(G__34628,G__34629) : blueprint_cljs.core.button.call(null,G__34628,G__34629));
})(),(function (){var G__34630 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,close_dialog], null);
var G__34631 = "Cancel";
return (blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$2 ? blueprint_cljs.core.button.cljs$core$IFn$_invoke$arity$2(G__34630,G__34631) : blueprint_cljs.core.button.call(null,G__34630,G__34631));
})()],null))))],null))));
return (blueprint_cljs.core.dialog.cljs$core$IFn$_invoke$arity$3 ? blueprint_cljs.core.dialog.cljs$core$IFn$_invoke$arity$3(G__34623,G__34624,G__34625) : blueprint_cljs.core.dialog.call(null,G__34623,G__34624,G__34625));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"marginTop": "1rem", "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Staking Statistics"),React.DOM.div(null,"If you're curious about who else is using this dapp, and are using an ethereum data source that can handle large queres, click this button:"),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({"style": ({"margin": "1em"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.i(null,"(Coming Soon...)")],null))))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34608;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34607;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34606;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34605;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34604;
}});})(x34593_34634))
;


ui.core.Stakes.prototype.constructor = ui.core.Stakes;

ui.core.Stakes.prototype.constructor.displayName = "ui.core/Stakes";

ui.core.Stakes.prototype.om$isComponent = true;

var x34632_34638 = ui.core.Stakes;
/** @nocollapse */
x34632_34638.om$next$IQuery$ = true;

/** @nocollapse */
x34632_34638.om$next$IQuery$query$arity$1 = ((function (x34632_34638){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_user,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_stake,cljs.core.cst$kw$user_SLASH_address,cljs.core.cst$kw$user_SLASH_balance], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_stakes,om.next.get_query(ui.core.Stake)], null)], null);
});})(x34632_34638))
;


var x34633_34639 = ui.core.Stakes.prototype;

x34633_34639.om$next$IQuery$ = true;


x34633_34639.om$next$IQuery$query$arity$1 = ((function (x34633_34639){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_user,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_stake,cljs.core.cst$kw$user_SLASH_address,cljs.core.cst$kw$user_SLASH_balance], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_stakes,om.next.get_query(ui.core.Stake)], null)], null);
});})(x34633_34639))
;


ui.core.Stakes.cljs$lang$type = true;

ui.core.Stakes.cljs$lang$ctorStr = "ui.core/Stakes";

ui.core.Stakes.cljs$lang$ctorPrWriter = (function (this__24689__auto__,writer__24690__auto__,opt__24691__auto__){
return cljs.core._write(writer__24690__auto__,"ui.core/Stakes");
});
ui.core.stakes_component = om.next.factory.cljs$core$IFn$_invoke$arity$1(ui.core.Stakes);
ui.core.canvas_resolution = (800);
ui.core.brain_prerender = (function ui$core$brain_prerender(sections){
return cljs.core.cst$kw$vertex_DASH_colors.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__34662,item){
var map__34663 = p__34662;
var map__34663__$1 = ((((!((map__34663 == null)))?((((map__34663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34663):map__34663);
var acc = map__34663__$1;
var vertices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34663__$1,cljs.core.cst$kw$vertices);
var vertex_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34663__$1,cljs.core.cst$kw$vertex_DASH_colors);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34663__$1,cljs.core.cst$kw$index);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34663__$1,cljs.core.cst$kw$total);
var map__34665 = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$length,(function (){var iter__7197__auto__ = ((function (map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__34666(s__34667){
return (new cljs.core.LazySeq(null,((function (map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__34667__$1 = s__34667;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34667__$1);
if(temp__4657__auto__){
var s__34667__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34667__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__34667__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__34669 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__34668 = (0);
while(true){
if((i__34668 < size__7196__auto__)){
var coord = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__34668);
cljs.core.chunk_append(b__34669,(function (){var region_size = ((cljs.core.count(vertices) * (cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (i__34668,region_size,coord,c__7195__auto__,size__7196__auto__,b__34669,s__34667__$2,temp__4657__auto__,map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__34640_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__34640_SHARP_,coord);
});})(i__34668,region_size,coord,c__7195__auto__,size__7196__auto__,b__34669,s__34667__$2,temp__4657__auto__,map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.cljs$core$IFn$_invoke$arity$2(region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cur_DASH_vertices,cur_vertices,cljs.core.cst$kw$rest_DASH_vertices,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(region_size,vertices__$1),cljs.core.cst$kw$length,(- (function (){var G__34674 = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cur_vertices),coord) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.last(cur_vertices),coord));
return Math.abs(G__34674);
})())], null);
})());

var G__34683 = (i__34668 + (1));
i__34668 = G__34683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34669),ui$core$brain_prerender_$_iter__34666(cljs.core.chunk_rest(s__34667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34669),null);
}
} else {
var coord = cljs.core.first(s__34667__$2);
return cljs.core.cons((function (){var region_size = ((cljs.core.count(vertices) * (cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (region_size,coord,s__34667__$2,temp__4657__auto__,map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__34640_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__34640_SHARP_,coord);
});})(region_size,coord,s__34667__$2,temp__4657__auto__,map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.cljs$core$IFn$_invoke$arity$2(region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cur_DASH_vertices,cur_vertices,cljs.core.cst$kw$rest_DASH_vertices,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(region_size,vertices__$1),cljs.core.cst$kw$length,(- (function (){var G__34675 = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cur_vertices),coord) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.last(cur_vertices),coord));
return Math.abs(G__34675);
})())], null);
})(),ui$core$brain_prerender_$_iter__34666(cljs.core.rest(s__34667__$2)));
}
} else {
return null;
}
break;
}
});})(map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total))
;
return iter__7197__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})()));
var map__34665__$1 = ((((!((map__34665 == null)))?((((map__34665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34665):map__34665);
var cur_vertices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34665__$1,cljs.core.cst$kw$cur_DASH_vertices);
var rest_vertices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34665__$1,cljs.core.cst$kw$rest_DASH_vertices);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$vertices,rest_vertices,cljs.core.cst$kw$vertex_DASH_colors,cljs.core.into.cljs$core$IFn$_invoke$arity$2(vertex_colors,(function (){var iter__7197__auto__ = ((function (map__34665,map__34665__$1,cur_vertices,rest_vertices,map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__34677(s__34678){
return (new cljs.core.LazySeq(null,((function (map__34665,map__34665__$1,cur_vertices,rest_vertices,map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__34678__$1 = s__34678;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34678__$1);
if(temp__4657__auto__){
var s__34678__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34678__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__34678__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__34680 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__34679 = (0);
while(true){
if((i__34679 < size__7196__auto__)){
var vertex = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__34679);
cljs.core.chunk_append(b__34680,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null));

var G__34684 = (i__34679 + (1));
i__34679 = G__34684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34680),ui$core$brain_prerender_$_iter__34677(cljs.core.chunk_rest(s__34678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34680),null);
}
} else {
var vertex = cljs.core.first(s__34678__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null),ui$core$brain_prerender_$_iter__34677(cljs.core.rest(s__34678__$2)));
}
} else {
return null;
}
break;
}
});})(map__34665,map__34665__$1,cur_vertices,rest_vertices,map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__34665,map__34665__$1,cur_vertices,rest_vertices,map__34663,map__34663__$1,acc,vertices,vertex_colors,index,total))
;
return iter__7197__auto__(cur_vertices);
})()),cljs.core.cst$kw$index,(index + (1)),cljs.core.cst$kw$total,(total - cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(item))], null);
}),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$vertices,ui.core.brain_vertices,cljs.core.cst$kw$vertex_DASH_colors,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$index,(0),cljs.core.cst$kw$total,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$size,sections))], null),sections));
});
ui.core.render_graph = (function ui$core$render_graph(brain_faces,vertexes,vertex_colors){
var iter__7197__auto__ = (function ui$core$render_graph_$_iter__34749(s__34750){
return (new cljs.core.LazySeq(null,(function (){
var s__34750__$1 = s__34750;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34750__$1);
if(temp__4657__auto__){
var s__34750__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34750__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__34750__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__34752 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__34751 = (0);
while(true){
if((i__34751 < size__7196__auto__)){
var vec__34783 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__34751);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34783,(0),null);
var faces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34783,(1),null);
cljs.core.chunk_append(b__34752,(function (){var centroid = cljs.core.vec((function (){var iter__7197__auto__ = ((function (i__34751,vec__34783,region,faces,c__7195__auto__,size__7196__auto__,b__34752,s__34750__$2,temp__4657__auto__){
return (function ui$core$render_graph_$_iter__34749_$_iter__34786(s__34787){
return (new cljs.core.LazySeq(null,((function (i__34751,vec__34783,region,faces,c__7195__auto__,size__7196__auto__,b__34752,s__34750__$2,temp__4657__auto__){
return (function (){
var s__34787__$1 = s__34787;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__34787__$1);
if(temp__4657__auto____$1){
var s__34787__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34787__$2)){
var c__7195__auto____$1 = cljs.core.chunk_first(s__34787__$2);
var size__7196__auto____$1 = cljs.core.count(c__7195__auto____$1);
var b__34789 = cljs.core.chunk_buffer(size__7196__auto____$1);
if((function (){var i__34788 = (0);
while(true){
if((i__34788 < size__7196__auto____$1)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto____$1,i__34788);
cljs.core.chunk_append(b__34789,(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__34788,i__34751,n,c__7195__auto____$1,size__7196__auto____$1,b__34789,s__34787__$2,temp__4657__auto____$1,vec__34783,region,faces,c__7195__auto__,size__7196__auto__,b__34752,s__34750__$2,temp__4657__auto__){
return (function (face){
return (function (){var G__34794 = cljs.core.first(face);
return (vertexes.cljs$core$IFn$_invoke$arity$1 ? vertexes.cljs$core$IFn$_invoke$arity$1(G__34794) : vertexes.call(null,G__34794));
})().call(null,n);
});})(i__34788,i__34751,n,c__7195__auto____$1,size__7196__auto____$1,b__34789,s__34787__$2,temp__4657__auto____$1,vec__34783,region,faces,c__7195__auto__,size__7196__auto__,b__34752,s__34750__$2,temp__4657__auto__))
,faces)) / cljs.core.count(faces)));

var G__34813 = (i__34788 + (1));
i__34788 = G__34813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34789),ui$core$render_graph_$_iter__34749_$_iter__34786(cljs.core.chunk_rest(s__34787__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34789),null);
}
} else {
var n = cljs.core.first(s__34787__$2);
return cljs.core.cons((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__34751,n,s__34787__$2,temp__4657__auto____$1,vec__34783,region,faces,c__7195__auto__,size__7196__auto__,b__34752,s__34750__$2,temp__4657__auto__){
return (function (face){
return (function (){var G__34795 = cljs.core.first(face);
return (vertexes.cljs$core$IFn$_invoke$arity$1 ? vertexes.cljs$core$IFn$_invoke$arity$1(G__34795) : vertexes.call(null,G__34795));
})().call(null,n);
});})(i__34751,n,s__34787__$2,temp__4657__auto____$1,vec__34783,region,faces,c__7195__auto__,size__7196__auto__,b__34752,s__34750__$2,temp__4657__auto__))
,faces)) / cljs.core.count(faces)),ui$core$render_graph_$_iter__34749_$_iter__34786(cljs.core.rest(s__34787__$2)));
}
} else {
return null;
}
break;
}
});})(i__34751,vec__34783,region,faces,c__7195__auto__,size__7196__auto__,b__34752,s__34750__$2,temp__4657__auto__))
,null,null));
});})(i__34751,vec__34783,region,faces,c__7195__auto__,size__7196__auto__,b__34752,s__34750__$2,temp__4657__auto__))
;
return iter__7197__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$region,region,cljs.core.cst$kw$faces,faces,cljs.core.cst$kw$centroid,centroid,cljs.core.cst$kw$label,(function (){var dist = (function (){var G__34796 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,centroid,centroid));
return Math.sqrt(G__34796);
})();
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,1.7,mult),centroid)),(2),((function (i__34751,dist,max_dist,mult,centroid,vec__34783,region,faces,c__7195__auto__,size__7196__auto__,b__34752,s__34750__$2,temp__4657__auto__){
return (function (y){
var x__6748__auto__ = (function (){var x__6755__auto__ = 0.11;
var y__6756__auto__ = (y * 0.9);
return ((x__6755__auto__ < y__6756__auto__) ? x__6755__auto__ : y__6756__auto__);
})();
var y__6749__auto__ = -0.05;
return ((x__6748__auto__ > y__6749__auto__) ? x__6748__auto__ : y__6749__auto__);
});})(i__34751,dist,max_dist,mult,centroid,vec__34783,region,faces,c__7195__auto__,size__7196__auto__,b__34752,s__34750__$2,temp__4657__auto__))
);
})()], null);
})());

var G__34814 = (i__34751 + (1));
i__34751 = G__34814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34752),ui$core$render_graph_$_iter__34749(cljs.core.chunk_rest(s__34750__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34752),null);
}
} else {
var vec__34797 = cljs.core.first(s__34750__$2);
var region = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34797,(0),null);
var faces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34797,(1),null);
return cljs.core.cons((function (){var centroid = cljs.core.vec((function (){var iter__7197__auto__ = ((function (vec__34797,region,faces,s__34750__$2,temp__4657__auto__){
return (function ui$core$render_graph_$_iter__34749_$_iter__34800(s__34801){
return (new cljs.core.LazySeq(null,((function (vec__34797,region,faces,s__34750__$2,temp__4657__auto__){
return (function (){
var s__34801__$1 = s__34801;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__34801__$1);
if(temp__4657__auto____$1){
var s__34801__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34801__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__34801__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__34803 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__34802 = (0);
while(true){
if((i__34802 < size__7196__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__34802);
cljs.core.chunk_append(b__34803,(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__34802,n,c__7195__auto__,size__7196__auto__,b__34803,s__34801__$2,temp__4657__auto____$1,vec__34797,region,faces,s__34750__$2,temp__4657__auto__){
return (function (face){
return (function (){var G__34808 = cljs.core.first(face);
return (vertexes.cljs$core$IFn$_invoke$arity$1 ? vertexes.cljs$core$IFn$_invoke$arity$1(G__34808) : vertexes.call(null,G__34808));
})().call(null,n);
});})(i__34802,n,c__7195__auto__,size__7196__auto__,b__34803,s__34801__$2,temp__4657__auto____$1,vec__34797,region,faces,s__34750__$2,temp__4657__auto__))
,faces)) / cljs.core.count(faces)));

var G__34815 = (i__34802 + (1));
i__34802 = G__34815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34803),ui$core$render_graph_$_iter__34749_$_iter__34800(cljs.core.chunk_rest(s__34801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34803),null);
}
} else {
var n = cljs.core.first(s__34801__$2);
return cljs.core.cons((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (n,s__34801__$2,temp__4657__auto____$1,vec__34797,region,faces,s__34750__$2,temp__4657__auto__){
return (function (face){
return (function (){var G__34809 = cljs.core.first(face);
return (vertexes.cljs$core$IFn$_invoke$arity$1 ? vertexes.cljs$core$IFn$_invoke$arity$1(G__34809) : vertexes.call(null,G__34809));
})().call(null,n);
});})(n,s__34801__$2,temp__4657__auto____$1,vec__34797,region,faces,s__34750__$2,temp__4657__auto__))
,faces)) / cljs.core.count(faces)),ui$core$render_graph_$_iter__34749_$_iter__34800(cljs.core.rest(s__34801__$2)));
}
} else {
return null;
}
break;
}
});})(vec__34797,region,faces,s__34750__$2,temp__4657__auto__))
,null,null));
});})(vec__34797,region,faces,s__34750__$2,temp__4657__auto__))
;
return iter__7197__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$region,region,cljs.core.cst$kw$faces,faces,cljs.core.cst$kw$centroid,centroid,cljs.core.cst$kw$label,(function (){var dist = (function (){var G__34810 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,centroid,centroid));
return Math.sqrt(G__34810);
})();
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,1.7,mult),centroid)),(2),((function (dist,max_dist,mult,centroid,vec__34797,region,faces,s__34750__$2,temp__4657__auto__){
return (function (y){
var x__6748__auto__ = (function (){var x__6755__auto__ = 0.11;
var y__6756__auto__ = (y * 0.9);
return ((x__6755__auto__ < y__6756__auto__) ? x__6755__auto__ : y__6756__auto__);
})();
var y__6749__auto__ = -0.05;
return ((x__6748__auto__ > y__6749__auto__) ? x__6748__auto__ : y__6749__auto__);
});})(dist,max_dist,mult,centroid,vec__34797,region,faces,s__34750__$2,temp__4657__auto__))
);
})()], null);
})(),ui$core$render_graph_$_iter__34749(cljs.core.rest(s__34750__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7197__auto__(cljs.core.group_by(((function (iter__7197__auto__){
return (function (k){
var G__34811 = (function (){var G__34812 = cljs.core.first(k);
return (vertexes.cljs$core$IFn$_invoke$arity$1 ? vertexes.cljs$core$IFn$_invoke$arity$1(G__34812) : vertexes.call(null,G__34812));
})();
return (vertex_colors.cljs$core$IFn$_invoke$arity$1 ? vertex_colors.cljs$core$IFn$_invoke$arity$1(G__34811) : vertex_colors.call(null,G__34811));
});})(iter__7197__auto__))
,brain_faces));
});
ui.core.region_color = (function ui$core$region_color(index){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.2,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),0.2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),0.2], null)], null).call(null,index);
});
ui.core.point__GT_screen = (function ui$core$point__GT_screen(canvas_resolution,rotation,p__34816){
var vec__34820 = p__34816;
var xx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34820,(0),null);
var yy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34820,(1),null);
var zz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34820,(2),null);
var vertex = vec__34820;
var sin = Math.sin(rotation);
var cos = Math.cos(rotation);
var x = ((sin * xx) - (cos * yy));
var y = (- zz);
var z = ((8) * ((cos * xx) + (sin * yy)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((canvas_resolution / (2)) + (((4) * x) * canvas_resolution)),((canvas_resolution / 2.2) + (((4) * y) * canvas_resolution)),z], null);
});
ui.core.brain_state = (function (){var G__34823 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rotation,(0),cljs.core.cst$kw$sections,null,cljs.core.cst$kw$colored,(1)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34823) : cljs.core.atom.call(null,G__34823));
})();
ui.core.render_brain = (function ui$core$render_brain(ctx,rotation,render_graph){
var starting_time = ui.util.get_tick_count();
var vertices = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(ui.core.point__GT_screen,ui.core.canvas_resolution,rotation),ui.core.brain_vertices));
var line = ((function (starting_time,vertices){
return (function (a,b){
var G__34922 = ctx;
G__34922.beginPath();

G__34922.moveTo((vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a) : vertices.call(null,a)).call(null,(0)),(vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a) : vertices.call(null,a)).call(null,(1)));

G__34922.lineTo((vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(b) : vertices.call(null,b)).call(null,(0)),(vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(b) : vertices.call(null,b)).call(null,(1)));

G__34922.stroke();

return G__34922;
});})(starting_time,vertices))
;
var rgb = ((function (starting_time,vertices,line){
return (function (color,brightness,opaque){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec((function (){var iter__7197__auto__ = ((function (starting_time,vertices,line){
return (function ui$core$render_brain_$_iter__34923(s__34924){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line){
return (function (){
var s__34924__$1 = s__34924;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34924__$1);
if(temp__4657__auto__){
var s__34924__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34924__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__34924__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__34926 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__34925 = (0);
while(true){
if((i__34925 < size__7196__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__34925);
cljs.core.chunk_append(b__34926,(function (){var colored = cljs.core.cst$kw$colored.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.brain_state) : cljs.core.deref.call(null,ui.core.brain_state)));
return (((colored * (function (){var x__6755__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__6756__auto__ = (255);
return ((x__6755__auto__ < y__6756__auto__) ? x__6755__auto__ : y__6756__auto__);
})()) + (((1) - colored) * (255))) | (0));
})());

var G__35020 = (i__34925 + (1));
i__34925 = G__35020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34926),ui$core$render_brain_$_iter__34923(cljs.core.chunk_rest(s__34924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34926),null);
}
} else {
var c = cljs.core.first(s__34924__$2);
return cljs.core.cons((function (){var colored = cljs.core.cst$kw$colored.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.brain_state) : cljs.core.deref.call(null,ui.core.brain_state)));
return (((colored * (function (){var x__6755__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__6756__auto__ = (255);
return ((x__6755__auto__ < y__6756__auto__) ? x__6755__auto__ : y__6756__auto__);
})()) + (((1) - colored) * (255))) | (0));
})(),ui$core$render_brain_$_iter__34923(cljs.core.rest(s__34924__$2)));
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
return iter__7197__auto__(color);
})()),(cljs.core.truth_(opaque)?((0) + ((1) * cljs.core.cst$kw$colored.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.brain_state) : cljs.core.deref.call(null,ui.core.brain_state))))):(0.05 + (0.45 * cljs.core.cst$kw$colored.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.brain_state) : cljs.core.deref.call(null,ui.core.brain_state))))))))))].join('');
});})(starting_time,vertices,line))
;
var set_color = ((function (starting_time,vertices,line,rgb){
return (function (color,brightness){
return ctx.strokeStyle = rgb(color,brightness,false);
});})(starting_time,vertices,line,rgb))
;
var render_text = ((function (starting_time,vertices,line,rgb,set_color){
return (function (p__34929){
var map__34930 = p__34929;
var map__34930__$1 = ((((!((map__34930 == null)))?((((map__34930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34930):map__34930);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34930__$1,cljs.core.cst$kw$text);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34930__$1,cljs.core.cst$kw$color);
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34930__$1,cljs.core.cst$kw$location);
if((cljs.core.cst$kw$colored.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.brain_state) : cljs.core.deref.call(null,ui.core.brain_state))) > (0))){
ctx.lineWidth = (4);

var vec__34932_35021 = location;
var x_35022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34932_35021,(0),null);
var y_35023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34932_35021,(1),null);
var z_35024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34932_35021,(2),null);
ctx.strokeStyle = "#111A22";

ctx.fillStyle = rgb(color,((z_35024 * (2)) + (1)),true);

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__34932_35021,x_35022,y_35023,z_35024,map__34930,map__34930__$1,text,color,location,starting_time,vertices,line,rgb,set_color){
return (function (index,s){
var G__34935 = ctx;
G__34935.strokeText(s,x_35022,(y_35023 + (index * (15))));

G__34935.fillText(s,x_35022,(y_35023 + (index * (15))));

return G__34935;
});})(vec__34932_35021,x_35022,y_35023,z_35024,map__34930,map__34930__$1,text,color,location,starting_time,vertices,line,rgb,set_color))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/ /)));

return ctx.lineWidth = (1);
} else {
return null;
}
});})(starting_time,vertices,line,rgb,set_color))
;
var sections = cljs.core.cst$kw$sections.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.brain_state) : cljs.core.deref.call(null,ui.core.brain_state)));
ctx.clearRect((0),(0),ui.core.canvas_resolution,ui.core.canvas_resolution);

ctx.font = "15px sans-serif";

ctx.textAlign = "center";

var labels = ((cljs.core.seq(sections))?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (label){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$location,(2)], null));
});})(starting_time,vertices,line,rgb,set_color,render_text,sections))
,(function (){var iter__7197__auto__ = ((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function ui$core$render_brain_$_iter__34936(s__34937){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (){
var s__34937__$1 = s__34937;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34937__$1);
if(temp__4657__auto__){
var s__34937__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34937__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__34937__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__34939 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__34938 = (0);
while(true){
if((i__34938 < size__7196__auto__)){
var map__34946 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__34938);
var map__34946__$1 = ((((!((map__34946 == null)))?((((map__34946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34946):map__34946);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34946__$1,cljs.core.cst$kw$region);
var centroid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34946__$1,cljs.core.cst$kw$centroid);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34946__$1,cljs.core.cst$kw$label);
cljs.core.chunk_append(b__34939,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1((sections.cljs$core$IFn$_invoke$arity$1 ? sections.cljs$core$IFn$_invoke$arity$1(region) : sections.call(null,region))),cljs.core.cst$kw$color,ui.core.region_color(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1((sections.cljs$core$IFn$_invoke$arity$1 ? sections.cljs$core$IFn$_invoke$arity$1(region) : sections.call(null,region)))),cljs.core.cst$kw$location,ui.core.point__GT_screen(ui.core.canvas_resolution,rotation,label)], null));

var G__35025 = (i__34938 + (1));
i__34938 = G__35025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34939),ui$core$render_brain_$_iter__34936(cljs.core.chunk_rest(s__34937__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34939),null);
}
} else {
var map__34948 = cljs.core.first(s__34937__$2);
var map__34948__$1 = ((((!((map__34948 == null)))?((((map__34948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34948):map__34948);
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34948__$1,cljs.core.cst$kw$region);
var centroid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34948__$1,cljs.core.cst$kw$centroid);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34948__$1,cljs.core.cst$kw$label);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1((sections.cljs$core$IFn$_invoke$arity$1 ? sections.cljs$core$IFn$_invoke$arity$1(region) : sections.call(null,region))),cljs.core.cst$kw$color,ui.core.region_color(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1((sections.cljs$core$IFn$_invoke$arity$1 ? sections.cljs$core$IFn$_invoke$arity$1(region) : sections.call(null,region)))),cljs.core.cst$kw$location,ui.core.point__GT_screen(ui.core.canvas_resolution,rotation,label)], null),ui$core$render_brain_$_iter__34936(cljs.core.rest(s__34937__$2)));
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
return iter__7197__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$region,render_graph));
})()):null);
var render_labels = ((function (labels,starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (from,to){
var seq__34950 = cljs.core.seq(labels);
var chunk__34951 = null;
var count__34952 = (0);
var i__34953 = (0);
while(true){
if((i__34953 < count__34952)){
var label = chunk__34951.cljs$core$IIndexed$_nth$arity$2(null,i__34953);
if(((from < cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$location,(2)], null)))) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$location,(2)], null)) < to))){
render_text(label);
} else {
}

var G__35026 = seq__34950;
var G__35027 = chunk__34951;
var G__35028 = count__34952;
var G__35029 = (i__34953 + (1));
seq__34950 = G__35026;
chunk__34951 = G__35027;
count__34952 = G__35028;
i__34953 = G__35029;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__34950);
if(temp__4657__auto__){
var seq__34950__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34950__$1)){
var c__7228__auto__ = cljs.core.chunk_first(seq__34950__$1);
var G__35030 = cljs.core.chunk_rest(seq__34950__$1);
var G__35031 = c__7228__auto__;
var G__35032 = cljs.core.count(c__7228__auto__);
var G__35033 = (0);
seq__34950 = G__35030;
chunk__34951 = G__35031;
count__34952 = G__35032;
i__34953 = G__35033;
continue;
} else {
var label = cljs.core.first(seq__34950__$1);
if(((from < cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$location,(2)], null)))) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$location,(2)], null)) < to))){
render_text(label);
} else {
}

var G__35034 = cljs.core.next(seq__34950__$1);
var G__35035 = null;
var G__35036 = (0);
var G__35037 = (0);
seq__34950 = G__35034;
chunk__34951 = G__35035;
count__34952 = G__35036;
i__34953 = G__35037;
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
var seq__34954 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),-0.3,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3,0.3,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,(1000),(2)], null)], null));
var chunk__34955 = null;
var count__34956 = (0);
var i__34957 = (0);
while(true){
if((i__34957 < count__34956)){
var vec__34958 = chunk__34955.cljs$core$IIndexed$_nth$arity$2(null,i__34957);
var begin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958,(1),null);
var brightness = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(begin,(-1000))){
render_labels(begin,end);
} else {
}

var seq__34961_35038 = cljs.core.seq(render_graph);
var chunk__34962_35039 = null;
var count__34963_35040 = (0);
var i__34964_35041 = (0);
while(true){
if((i__34964_35041 < count__34963_35040)){
var map__34965_35042 = chunk__34962_35039.cljs$core$IIndexed$_nth$arity$2(null,i__34964_35041);
var map__34965_35043__$1 = ((((!((map__34965_35042 == null)))?((((map__34965_35042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34965_35042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34965_35042):map__34965_35042);
var region_35044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34965_35043__$1,cljs.core.cst$kw$region);
var faces_35045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34965_35043__$1,cljs.core.cst$kw$faces);
var centroid_35046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34965_35043__$1,cljs.core.cst$kw$centroid);
var label_35047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34965_35043__$1,cljs.core.cst$kw$label);
var color_35048 = ((cljs.core.seq(sections))?ui.core.region_color(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1((sections.cljs$core$IFn$_invoke$arity$1 ? sections.cljs$core$IFn$_invoke$arity$1(region_35044) : sections.call(null,region_35044)))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color(color_35048,brightness);

var seq__34967_35049 = cljs.core.seq(faces_35045);
var chunk__34968_35050 = null;
var count__34969_35051 = (0);
var i__34970_35052 = (0);
while(true){
if((i__34970_35052 < count__34969_35051)){
var vec__34971_35053 = chunk__34968_35050.cljs$core$IIndexed$_nth$arity$2(null,i__34970_35052);
var a_35054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35053,(0),null);
var b_35055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35053,(1),null);
var c_35056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971_35053,(2),null);
var face_35057 = vec__34971_35053;
if(((begin < (vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35054) : vertices.call(null,a_35054)).call(null,(2)))) && (((vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35054) : vertices.call(null,a_35054)).call(null,(2)) < end))){
line(a_35054,b_35055);
} else {
}

var G__35058 = seq__34967_35049;
var G__35059 = chunk__34968_35050;
var G__35060 = count__34969_35051;
var G__35061 = (i__34970_35052 + (1));
seq__34967_35049 = G__35058;
chunk__34968_35050 = G__35059;
count__34969_35051 = G__35060;
i__34970_35052 = G__35061;
continue;
} else {
var temp__4657__auto___35062 = cljs.core.seq(seq__34967_35049);
if(temp__4657__auto___35062){
var seq__34967_35063__$1 = temp__4657__auto___35062;
if(cljs.core.chunked_seq_QMARK_(seq__34967_35063__$1)){
var c__7228__auto___35064 = cljs.core.chunk_first(seq__34967_35063__$1);
var G__35065 = cljs.core.chunk_rest(seq__34967_35063__$1);
var G__35066 = c__7228__auto___35064;
var G__35067 = cljs.core.count(c__7228__auto___35064);
var G__35068 = (0);
seq__34967_35049 = G__35065;
chunk__34968_35050 = G__35066;
count__34969_35051 = G__35067;
i__34970_35052 = G__35068;
continue;
} else {
var vec__34974_35069 = cljs.core.first(seq__34967_35063__$1);
var a_35070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34974_35069,(0),null);
var b_35071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34974_35069,(1),null);
var c_35072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34974_35069,(2),null);
var face_35073 = vec__34974_35069;
if(((begin < (vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35070) : vertices.call(null,a_35070)).call(null,(2)))) && (((vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35070) : vertices.call(null,a_35070)).call(null,(2)) < end))){
line(a_35070,b_35071);
} else {
}

var G__35074 = cljs.core.next(seq__34967_35063__$1);
var G__35075 = null;
var G__35076 = (0);
var G__35077 = (0);
seq__34967_35049 = G__35074;
chunk__34968_35050 = G__35075;
count__34969_35051 = G__35076;
i__34970_35052 = G__35077;
continue;
}
} else {
}
}
break;
}

var G__35078 = seq__34961_35038;
var G__35079 = chunk__34962_35039;
var G__35080 = count__34963_35040;
var G__35081 = (i__34964_35041 + (1));
seq__34961_35038 = G__35078;
chunk__34962_35039 = G__35079;
count__34963_35040 = G__35080;
i__34964_35041 = G__35081;
continue;
} else {
var temp__4657__auto___35082 = cljs.core.seq(seq__34961_35038);
if(temp__4657__auto___35082){
var seq__34961_35083__$1 = temp__4657__auto___35082;
if(cljs.core.chunked_seq_QMARK_(seq__34961_35083__$1)){
var c__7228__auto___35084 = cljs.core.chunk_first(seq__34961_35083__$1);
var G__35085 = cljs.core.chunk_rest(seq__34961_35083__$1);
var G__35086 = c__7228__auto___35084;
var G__35087 = cljs.core.count(c__7228__auto___35084);
var G__35088 = (0);
seq__34961_35038 = G__35085;
chunk__34962_35039 = G__35086;
count__34963_35040 = G__35087;
i__34964_35041 = G__35088;
continue;
} else {
var map__34977_35089 = cljs.core.first(seq__34961_35083__$1);
var map__34977_35090__$1 = ((((!((map__34977_35089 == null)))?((((map__34977_35089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34977_35089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34977_35089):map__34977_35089);
var region_35091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34977_35090__$1,cljs.core.cst$kw$region);
var faces_35092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34977_35090__$1,cljs.core.cst$kw$faces);
var centroid_35093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34977_35090__$1,cljs.core.cst$kw$centroid);
var label_35094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34977_35090__$1,cljs.core.cst$kw$label);
var color_35095 = ((cljs.core.seq(sections))?ui.core.region_color(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1((sections.cljs$core$IFn$_invoke$arity$1 ? sections.cljs$core$IFn$_invoke$arity$1(region_35091) : sections.call(null,region_35091)))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color(color_35095,brightness);

var seq__34979_35096 = cljs.core.seq(faces_35092);
var chunk__34980_35097 = null;
var count__34981_35098 = (0);
var i__34982_35099 = (0);
while(true){
if((i__34982_35099 < count__34981_35098)){
var vec__34983_35100 = chunk__34980_35097.cljs$core$IIndexed$_nth$arity$2(null,i__34982_35099);
var a_35101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34983_35100,(0),null);
var b_35102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34983_35100,(1),null);
var c_35103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34983_35100,(2),null);
var face_35104 = vec__34983_35100;
if(((begin < (vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35101) : vertices.call(null,a_35101)).call(null,(2)))) && (((vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35101) : vertices.call(null,a_35101)).call(null,(2)) < end))){
line(a_35101,b_35102);
} else {
}

var G__35105 = seq__34979_35096;
var G__35106 = chunk__34980_35097;
var G__35107 = count__34981_35098;
var G__35108 = (i__34982_35099 + (1));
seq__34979_35096 = G__35105;
chunk__34980_35097 = G__35106;
count__34981_35098 = G__35107;
i__34982_35099 = G__35108;
continue;
} else {
var temp__4657__auto___35109__$1 = cljs.core.seq(seq__34979_35096);
if(temp__4657__auto___35109__$1){
var seq__34979_35110__$1 = temp__4657__auto___35109__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34979_35110__$1)){
var c__7228__auto___35111 = cljs.core.chunk_first(seq__34979_35110__$1);
var G__35112 = cljs.core.chunk_rest(seq__34979_35110__$1);
var G__35113 = c__7228__auto___35111;
var G__35114 = cljs.core.count(c__7228__auto___35111);
var G__35115 = (0);
seq__34979_35096 = G__35112;
chunk__34980_35097 = G__35113;
count__34981_35098 = G__35114;
i__34982_35099 = G__35115;
continue;
} else {
var vec__34986_35116 = cljs.core.first(seq__34979_35110__$1);
var a_35117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986_35116,(0),null);
var b_35118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986_35116,(1),null);
var c_35119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986_35116,(2),null);
var face_35120 = vec__34986_35116;
if(((begin < (vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35117) : vertices.call(null,a_35117)).call(null,(2)))) && (((vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35117) : vertices.call(null,a_35117)).call(null,(2)) < end))){
line(a_35117,b_35118);
} else {
}

var G__35121 = cljs.core.next(seq__34979_35110__$1);
var G__35122 = null;
var G__35123 = (0);
var G__35124 = (0);
seq__34979_35096 = G__35121;
chunk__34980_35097 = G__35122;
count__34981_35098 = G__35123;
i__34982_35099 = G__35124;
continue;
}
} else {
}
}
break;
}

var G__35125 = cljs.core.next(seq__34961_35083__$1);
var G__35126 = null;
var G__35127 = (0);
var G__35128 = (0);
seq__34961_35038 = G__35125;
chunk__34962_35039 = G__35126;
count__34963_35040 = G__35127;
i__34964_35041 = G__35128;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(begin,(-1000))){
} else {
render_labels(begin,end);
}

var G__35129 = seq__34954;
var G__35130 = chunk__34955;
var G__35131 = count__34956;
var G__35132 = (i__34957 + (1));
seq__34954 = G__35129;
chunk__34955 = G__35130;
count__34956 = G__35131;
i__34957 = G__35132;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__34954);
if(temp__4657__auto__){
var seq__34954__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34954__$1)){
var c__7228__auto__ = cljs.core.chunk_first(seq__34954__$1);
var G__35133 = cljs.core.chunk_rest(seq__34954__$1);
var G__35134 = c__7228__auto__;
var G__35135 = cljs.core.count(c__7228__auto__);
var G__35136 = (0);
seq__34954 = G__35133;
chunk__34955 = G__35134;
count__34956 = G__35135;
i__34957 = G__35136;
continue;
} else {
var vec__34989 = cljs.core.first(seq__34954__$1);
var begin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34989,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34989,(1),null);
var brightness = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34989,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(begin,(-1000))){
render_labels(begin,end);
} else {
}

var seq__34992_35137 = cljs.core.seq(render_graph);
var chunk__34993_35138 = null;
var count__34994_35139 = (0);
var i__34995_35140 = (0);
while(true){
if((i__34995_35140 < count__34994_35139)){
var map__34996_35141 = chunk__34993_35138.cljs$core$IIndexed$_nth$arity$2(null,i__34995_35140);
var map__34996_35142__$1 = ((((!((map__34996_35141 == null)))?((((map__34996_35141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34996_35141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34996_35141):map__34996_35141);
var region_35143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996_35142__$1,cljs.core.cst$kw$region);
var faces_35144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996_35142__$1,cljs.core.cst$kw$faces);
var centroid_35145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996_35142__$1,cljs.core.cst$kw$centroid);
var label_35146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996_35142__$1,cljs.core.cst$kw$label);
var color_35147 = ((cljs.core.seq(sections))?ui.core.region_color(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1((sections.cljs$core$IFn$_invoke$arity$1 ? sections.cljs$core$IFn$_invoke$arity$1(region_35143) : sections.call(null,region_35143)))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color(color_35147,brightness);

var seq__34998_35148 = cljs.core.seq(faces_35144);
var chunk__34999_35149 = null;
var count__35000_35150 = (0);
var i__35001_35151 = (0);
while(true){
if((i__35001_35151 < count__35000_35150)){
var vec__35002_35152 = chunk__34999_35149.cljs$core$IIndexed$_nth$arity$2(null,i__35001_35151);
var a_35153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35002_35152,(0),null);
var b_35154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35002_35152,(1),null);
var c_35155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35002_35152,(2),null);
var face_35156 = vec__35002_35152;
if(((begin < (vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35153) : vertices.call(null,a_35153)).call(null,(2)))) && (((vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35153) : vertices.call(null,a_35153)).call(null,(2)) < end))){
line(a_35153,b_35154);
} else {
}

var G__35157 = seq__34998_35148;
var G__35158 = chunk__34999_35149;
var G__35159 = count__35000_35150;
var G__35160 = (i__35001_35151 + (1));
seq__34998_35148 = G__35157;
chunk__34999_35149 = G__35158;
count__35000_35150 = G__35159;
i__35001_35151 = G__35160;
continue;
} else {
var temp__4657__auto___35161__$1 = cljs.core.seq(seq__34998_35148);
if(temp__4657__auto___35161__$1){
var seq__34998_35162__$1 = temp__4657__auto___35161__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34998_35162__$1)){
var c__7228__auto___35163 = cljs.core.chunk_first(seq__34998_35162__$1);
var G__35164 = cljs.core.chunk_rest(seq__34998_35162__$1);
var G__35165 = c__7228__auto___35163;
var G__35166 = cljs.core.count(c__7228__auto___35163);
var G__35167 = (0);
seq__34998_35148 = G__35164;
chunk__34999_35149 = G__35165;
count__35000_35150 = G__35166;
i__35001_35151 = G__35167;
continue;
} else {
var vec__35005_35168 = cljs.core.first(seq__34998_35162__$1);
var a_35169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35168,(0),null);
var b_35170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35168,(1),null);
var c_35171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35168,(2),null);
var face_35172 = vec__35005_35168;
if(((begin < (vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35169) : vertices.call(null,a_35169)).call(null,(2)))) && (((vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35169) : vertices.call(null,a_35169)).call(null,(2)) < end))){
line(a_35169,b_35170);
} else {
}

var G__35173 = cljs.core.next(seq__34998_35162__$1);
var G__35174 = null;
var G__35175 = (0);
var G__35176 = (0);
seq__34998_35148 = G__35173;
chunk__34999_35149 = G__35174;
count__35000_35150 = G__35175;
i__35001_35151 = G__35176;
continue;
}
} else {
}
}
break;
}

var G__35177 = seq__34992_35137;
var G__35178 = chunk__34993_35138;
var G__35179 = count__34994_35139;
var G__35180 = (i__34995_35140 + (1));
seq__34992_35137 = G__35177;
chunk__34993_35138 = G__35178;
count__34994_35139 = G__35179;
i__34995_35140 = G__35180;
continue;
} else {
var temp__4657__auto___35181__$1 = cljs.core.seq(seq__34992_35137);
if(temp__4657__auto___35181__$1){
var seq__34992_35182__$1 = temp__4657__auto___35181__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34992_35182__$1)){
var c__7228__auto___35183 = cljs.core.chunk_first(seq__34992_35182__$1);
var G__35184 = cljs.core.chunk_rest(seq__34992_35182__$1);
var G__35185 = c__7228__auto___35183;
var G__35186 = cljs.core.count(c__7228__auto___35183);
var G__35187 = (0);
seq__34992_35137 = G__35184;
chunk__34993_35138 = G__35185;
count__34994_35139 = G__35186;
i__34995_35140 = G__35187;
continue;
} else {
var map__35008_35188 = cljs.core.first(seq__34992_35182__$1);
var map__35008_35189__$1 = ((((!((map__35008_35188 == null)))?((((map__35008_35188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35008_35188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35008_35188):map__35008_35188);
var region_35190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008_35189__$1,cljs.core.cst$kw$region);
var faces_35191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008_35189__$1,cljs.core.cst$kw$faces);
var centroid_35192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008_35189__$1,cljs.core.cst$kw$centroid);
var label_35193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008_35189__$1,cljs.core.cst$kw$label);
var color_35194 = ((cljs.core.seq(sections))?ui.core.region_color(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1((sections.cljs$core$IFn$_invoke$arity$1 ? sections.cljs$core$IFn$_invoke$arity$1(region_35190) : sections.call(null,region_35190)))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color(color_35194,brightness);

var seq__35010_35195 = cljs.core.seq(faces_35191);
var chunk__35011_35196 = null;
var count__35012_35197 = (0);
var i__35013_35198 = (0);
while(true){
if((i__35013_35198 < count__35012_35197)){
var vec__35014_35199 = chunk__35011_35196.cljs$core$IIndexed$_nth$arity$2(null,i__35013_35198);
var a_35200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35014_35199,(0),null);
var b_35201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35014_35199,(1),null);
var c_35202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35014_35199,(2),null);
var face_35203 = vec__35014_35199;
if(((begin < (vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35200) : vertices.call(null,a_35200)).call(null,(2)))) && (((vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35200) : vertices.call(null,a_35200)).call(null,(2)) < end))){
line(a_35200,b_35201);
} else {
}

var G__35204 = seq__35010_35195;
var G__35205 = chunk__35011_35196;
var G__35206 = count__35012_35197;
var G__35207 = (i__35013_35198 + (1));
seq__35010_35195 = G__35204;
chunk__35011_35196 = G__35205;
count__35012_35197 = G__35206;
i__35013_35198 = G__35207;
continue;
} else {
var temp__4657__auto___35208__$2 = cljs.core.seq(seq__35010_35195);
if(temp__4657__auto___35208__$2){
var seq__35010_35209__$1 = temp__4657__auto___35208__$2;
if(cljs.core.chunked_seq_QMARK_(seq__35010_35209__$1)){
var c__7228__auto___35210 = cljs.core.chunk_first(seq__35010_35209__$1);
var G__35211 = cljs.core.chunk_rest(seq__35010_35209__$1);
var G__35212 = c__7228__auto___35210;
var G__35213 = cljs.core.count(c__7228__auto___35210);
var G__35214 = (0);
seq__35010_35195 = G__35211;
chunk__35011_35196 = G__35212;
count__35012_35197 = G__35213;
i__35013_35198 = G__35214;
continue;
} else {
var vec__35017_35215 = cljs.core.first(seq__35010_35209__$1);
var a_35216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017_35215,(0),null);
var b_35217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017_35215,(1),null);
var c_35218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35017_35215,(2),null);
var face_35219 = vec__35017_35215;
if(((begin < (vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35216) : vertices.call(null,a_35216)).call(null,(2)))) && (((vertices.cljs$core$IFn$_invoke$arity$1 ? vertices.cljs$core$IFn$_invoke$arity$1(a_35216) : vertices.call(null,a_35216)).call(null,(2)) < end))){
line(a_35216,b_35217);
} else {
}

var G__35220 = cljs.core.next(seq__35010_35209__$1);
var G__35221 = null;
var G__35222 = (0);
var G__35223 = (0);
seq__35010_35195 = G__35220;
chunk__35011_35196 = G__35221;
count__35012_35197 = G__35222;
i__35013_35198 = G__35223;
continue;
}
} else {
}
}
break;
}

var G__35224 = cljs.core.next(seq__34992_35182__$1);
var G__35225 = null;
var G__35226 = (0);
var G__35227 = (0);
seq__34992_35137 = G__35224;
chunk__34993_35138 = G__35225;
count__34994_35139 = G__35226;
i__34995_35140 = G__35227;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(begin,(-1000))){
} else {
render_labels(begin,end);
}

var G__35228 = cljs.core.next(seq__34954__$1);
var G__35229 = null;
var G__35230 = (0);
var G__35231 = (0);
seq__34954 = G__35228;
chunk__34955 = G__35229;
count__34956 = G__35230;
i__34957 = G__35231;
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
var this__24686__auto__ = this;
React.Component.apply(this__24686__auto__,arguments);

if(!((this__24686__auto__.initLocalState == null))){
this__24686__auto__.state = this__24686__auto__.initLocalState();
} else {
this__24686__auto__.state = {};
}

return this__24686__auto__;
});

ui.core.Brain.prototype = goog.object.clone(React.Component.prototype);

var x35236_35285 = ui.core.Brain.prototype;
x35236_35285.componentWillUpdate = ((function (x35236_35285){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
if(((!((this__24577__auto__ == null)))?(((false) || (this__24577__auto__.om$next$Ident$))?true:false):false)){
var ident__24581__auto___35286 = om.next.ident(this__24577__auto__,om.next.props(this__24577__auto__));
var next_ident__24582__auto___35287 = om.next.ident(this__24577__auto__,om.next._next_props(next_props__24578__auto__,this__24577__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24581__auto___35286,next_ident__24582__auto___35287)){
var idxr__24583__auto___35288 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24583__auto___35288 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24583__auto___35288),((function (idxr__24583__auto___35288,ident__24581__auto___35286,next_ident__24582__auto___35287,this__24577__auto__,x35236_35285){
return (function (indexes__24584__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24584__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24581__auto___35286], null),cljs.core.disj,this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24582__auto___35287], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24577__auto__);
});})(idxr__24583__auto___35288,ident__24581__auto___35286,next_ident__24582__auto___35287,this__24577__auto__,x35236_35285))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24577__auto__);

return om.next.merge_pending_state_BANG_(this__24577__auto__);
});})(x35236_35285))
;

x35236_35285.shouldComponentUpdate = ((function (x35236_35285){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
var next_children__24580__auto__ = next_props__24578__auto__.children;
var next_props__24578__auto____$1 = goog.object.get(next_props__24578__auto__,"omcljs$value");
var next_props__24578__auto____$2 = (function (){var G__35238 = next_props__24578__auto____$1;
if((next_props__24578__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__35238);
} else {
return G__35238;
}
})();
var or__6417__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24577__auto__),next_props__24578__auto____$2);
if(or__6417__auto__){
return or__6417__auto__;
} else {
var or__6417__auto____$1 = (function (){var and__6405__auto__ = this__24577__auto__.state;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__35243 = this__24577__auto__.state;
var G__35244 = "omcljs$state";
return goog.object.get(G__35243,G__35244);
})(),goog.object.get(next_state__24579__auto__,"omcljs$state"));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto____$1)){
return or__6417__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__24577__auto__.props.children,next_children__24580__auto__);
}
}
});})(x35236_35285))
;

x35236_35285.componentDidUpdate = ((function (x35236_35285){
return (function (prev_props__24585__auto__,prev_state__24586__auto__){
var this__24577__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24577__auto__);
});})(x35236_35285))
;

x35236_35285.isMounted = ((function (x35236_35285){
return (function (){
var this__24577__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24577__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35236_35285))
;

x35236_35285.componentWillMount = ((function (x35236_35285){
return (function (){
var this__24577__auto__ = this;
var indexer__24587__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x35236_35285))
;

x35236_35285.initLocalState = ((function (x35236_35285){
return (function (){
var this$ = this;
var ret__24555__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$interval,null], null);
var obj35246 = {"omcljs$state":ret__24555__auto__};
return obj35246;
});})(x35236_35285))
;

x35236_35285.componentDidMount = ((function (x35236_35285){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$interval,(function (){var G__35247 = ((function (this$,x35236_35285){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.core.brain_state,cljs.core.update,cljs.core.cst$kw$rotation,((function (this$,x35236_35285){
return (function (rotation){
ui.core.render_brain(cljs.core.cst$kw$canvas.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.brain_state) : cljs.core.deref.call(null,ui.core.brain_state))).getContext("2d"),rotation,cljs.core.cst$kw$render_DASH_graph.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.brain_state) : cljs.core.deref.call(null,ui.core.brain_state))));

return (rotation + cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.brain_state) : cljs.core.deref.call(null,ui.core.brain_state))));
});})(this$,x35236_35285))
);
});})(this$,x35236_35285))
;
var G__35248 = (50);
return setInterval(G__35247,G__35248);
})());
});})(x35236_35285))
;

x35236_35285.componentWillUnmount = ((function (x35236_35285){
return (function (){
var this__24571__auto__ = this;
var this$ = this__24571__auto__;
var r__24572__auto__ = om.next.get_reconciler(this__24571__auto__);
var cfg__24573__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24572__auto__);
var st__24574__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24573__auto__);
var indexer__24575__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24573__auto__);
if(cljs.core.truth_((function (){var and__6405__auto__ = !((st__24574__auto__ == null));
if(and__6405__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__24574__auto__) : cljs.core.deref.call(null,st__24574__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24571__auto__], null));
} else {
return and__6405__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24574__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__24571__auto__], 0));
} else {
}

if((indexer__24575__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_(indexer__24575__auto__,this__24571__auto__);
}

var G__35249 = cljs.core.cst$kw$interval.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
return clearInterval(G__35249);
});})(x35236_35285))
;

x35236_35285.render = ((function (x35236_35285){
return (function (){
var this__24576__auto__ = this;
var this$ = this__24576__auto__;
var _STAR_reconciler_STAR_35250 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35251 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35252 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35253 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35254 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__24576__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__24576__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__24576__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__24576__auto__);

om.next._STAR_parent_STAR_ = this__24576__auto__;

try{var map__35255 = om.next.props(this$);
var map__35255__$1 = ((((!((map__35255 == null)))?((((map__35255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35255):map__35255);
var props = map__35255__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35255__$1,cljs.core.cst$kw$etherean_SLASH_items);
var loading = cljs.core.not(cljs.core.seq(items));
var scores = cljs.core.vec((function (){var iter__7197__auto__ = ((function (map__35255,map__35255__$1,props,items,loading,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285){
return (function ui$core$iter__35258(s__35259){
return (new cljs.core.LazySeq(null,((function (map__35255,map__35255__$1,props,items,loading,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285){
return (function (){
var s__35259__$1 = s__35259;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35259__$1);
if(temp__4657__auto__){
var s__35259__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35259__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__35259__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__35261 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__35260 = (0);
while(true){
if((i__35260 < size__7196__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__35260);
cljs.core.chunk_append(b__35261,(function (){var map__35268 = item;
var map__35268__$1 = ((((!((map__35268 == null)))?((((map__35268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35268):map__35268);
var votes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35268__$1,cljs.core.cst$kw$item_SLASH_votes);
var x__6748__auto__ = (0);
var y__6749__auto__ = (((0.7 * cljs.core.cst$kw$item_DASH_votes_SLASH_total.cljs$core$IFn$_invoke$arity$1(cljs.core.second(votes))) + cljs.core.cst$kw$item_DASH_votes_SLASH_today.cljs$core$IFn$_invoke$arity$1(cljs.core.second(votes))) - ((0.7 * cljs.core.cst$kw$item_DASH_votes_SLASH_total.cljs$core$IFn$_invoke$arity$1(cljs.core.first(votes))) + cljs.core.cst$kw$item_DASH_votes_SLASH_today.cljs$core$IFn$_invoke$arity$1(cljs.core.first(votes))));
return ((x__6748__auto__ > y__6749__auto__) ? x__6748__auto__ : y__6749__auto__);
})());

var G__35289 = (i__35260 + (1));
i__35260 = G__35289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35261),ui$core$iter__35258(cljs.core.chunk_rest(s__35259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35261),null);
}
} else {
var item = cljs.core.first(s__35259__$2);
return cljs.core.cons((function (){var map__35270 = item;
var map__35270__$1 = ((((!((map__35270 == null)))?((((map__35270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35270):map__35270);
var votes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35270__$1,cljs.core.cst$kw$item_SLASH_votes);
var x__6748__auto__ = (0);
var y__6749__auto__ = (((0.7 * cljs.core.cst$kw$item_DASH_votes_SLASH_total.cljs$core$IFn$_invoke$arity$1(cljs.core.second(votes))) + cljs.core.cst$kw$item_DASH_votes_SLASH_today.cljs$core$IFn$_invoke$arity$1(cljs.core.second(votes))) - ((0.7 * cljs.core.cst$kw$item_DASH_votes_SLASH_total.cljs$core$IFn$_invoke$arity$1(cljs.core.first(votes))) + cljs.core.cst$kw$item_DASH_votes_SLASH_today.cljs$core$IFn$_invoke$arity$1(cljs.core.first(votes))));
return ((x__6748__auto__ > y__6749__auto__) ? x__6748__auto__ : y__6749__auto__);
})(),ui$core$iter__35258(cljs.core.rest(s__35259__$2)));
}
} else {
return null;
}
break;
}
});})(map__35255,map__35255__$1,props,items,loading,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285))
,null,null));
});})(map__35255,map__35255__$1,props,items,loading,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285))
;
return iter__7197__auto__(items);
})());
var sections = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (map__35255,map__35255__$1,props,items,loading,scores,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285){
return (function (index,item,score){
var map__35272 = item;
var map__35272__$1 = ((((!((map__35272 == null)))?((((map__35272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35272):map__35272);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,cljs.core.cst$kw$item_SLASH_description);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,cljs.core.cst$kw$item_SLASH_description.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$size,(function (){var x__6748__auto__ = score;
var y__6749__auto__ = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,scores) / (50));
return ((x__6748__auto__ > y__6749__auto__) ? x__6748__auto__ : y__6749__auto__);
})(),cljs.core.cst$kw$index,index], null);
});})(map__35255,map__35255__$1,props,items,loading,scores,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),items,scores));
var sections__$1 = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.cst$kw$size),sections));
var map__35256 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(props);
var map__35256__$1 = ((((!((map__35256 == null)))?((((map__35256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35256):map__35256);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35256__$1,cljs.core.cst$kw$mode);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.core.brain_state,((function (map__35255,map__35255__$1,props,items,loading,scores,sections,sections__$1,map__35256,map__35256__$1,mode,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285){
return (function (brain_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sections__$1,cljs.core.cst$kw$sections.cljs$core$IFn$_invoke$arity$1(brain_state))){
var br = ui.core.brain_prerender(sections__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(brain_state,cljs.core.cst$kw$sections,sections__$1,cljs.core.array_seq([cljs.core.cst$kw$regions,br,cljs.core.cst$kw$render_DASH_graph,ui.core.render_graph(ui.core.brain_faces,ui.core.brain_vertices,br)], 0));
} else {
return brain_state;
}
});})(map__35255,map__35255__$1,props,items,loading,scores,sections,sections__$1,map__35256,map__35256__$1,mode,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285))
);

return ui.motion.motion(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defaultStyle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$top,(0),cljs.core.cst$kw$colored,(0),cljs.core.cst$kw$width,(100),cljs.core.cst$kw$speed,0.01], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colored,(function (){var G__35275 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$brain)) && (!(loading)))?(1):(0));
var G__35276 = ui.motion.gentle;
return (ui.motion.spring.cljs$core$IFn$_invoke$arity$2 ? ui.motion.spring.cljs$core$IFn$_invoke$arity$2(G__35275,G__35276) : ui.motion.spring.call(null,G__35275,G__35276));
})(),cljs.core.cst$kw$top,(function (){var G__35277 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$zoom))?(50):(0));
return (ui.motion.spring.cljs$core$IFn$_invoke$arity$1 ? ui.motion.spring.cljs$core$IFn$_invoke$arity$1(G__35277) : ui.motion.spring.call(null,G__35277));
})(),cljs.core.cst$kw$width,(function (){var G__35278 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$zoom))?(150):(60));
var G__35279 = ui.motion.wobbly;
return (ui.motion.spring.cljs$core$IFn$_invoke$arity$2 ? ui.motion.spring.cljs$core$IFn$_invoke$arity$2(G__35278,G__35279) : ui.motion.spring.call(null,G__35278,G__35279));
})(),cljs.core.cst$kw$speed,(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$white,null,cljs.core.cst$kw$brain,null], null), null).call(null,mode))?0.01:(0))], null)], null),((function (map__35255,map__35255__$1,props,items,loading,scores,sections,sections__$1,map__35256,map__35256__$1,mode,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285){
return (function (value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ui.core.brain_state,cljs.core.assoc,cljs.core.cst$kw$colored,cljs.core.cst$kw$colored.cljs$core$IFn$_invoke$arity$1(value),cljs.core.array_seq([cljs.core.cst$kw$speed,cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(value)], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"width": om_tools.dom.format_opts([cljs.core.str(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "height": om_tools.dom.format_opts([cljs.core.str(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "position": "absolute", "zIndex": om_tools.dom.format_opts((((cljs.core.cst$kw$colored.cljs$core$IFn$_invoke$arity$1(value) > 0.5))?(1):(-1))), "top": om_tools.dom.format_opts([cljs.core.str(cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("%")].join(''))})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__35280 = ({"ref": om_tools.dom.format_opts(((function (map__35255,map__35255__$1,props,items,loading,scores,sections,sections__$1,map__35256,map__35256__$1,mode,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285){
return (function (canvas){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.core.brain_state,cljs.core.assoc,cljs.core.cst$kw$canvas,canvas);
});})(map__35255,map__35255__$1,props,items,loading,scores,sections,sections__$1,map__35256,map__35256__$1,mode,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285))
), "width": om_tools.dom.format_opts(ui.core.canvas_resolution), "height": om_tools.dom.format_opts(ui.core.canvas_resolution), "style": ({"height": "100%", "width": "100%"})});
return React.DOM.canvas(G__35280);
})(),((loading)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"position": "absolute", "top": "40%", "left": "25%", "right": "25%", "height": "20%"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__35281 = ({"style": ({"textAlign": "center"})});
var G__35282 = "Brain Initializing from Ethereum Blockchain";
return React.DOM.p(G__35281,G__35282);
})(),(blueprint_cljs.core.progress_bar.cljs$core$IFn$_invoke$arity$0 ? blueprint_cljs.core.progress_bar.cljs$core$IFn$_invoke$arity$0() : blueprint_cljs.core.progress_bar.call(null))],null)))):null)],null))));
});})(map__35255,map__35255__$1,props,items,loading,scores,sections,sections__$1,map__35256,map__35256__$1,mode,_STAR_reconciler_STAR_35250,_STAR_depth_STAR_35251,_STAR_shared_STAR_35252,_STAR_instrument_STAR_35253,_STAR_parent_STAR_35254,this$,this__24576__auto__,x35236_35285))
);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35254;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35253;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35252;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35251;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35250;
}});})(x35236_35285))
;


ui.core.Brain.prototype.constructor = ui.core.Brain;

ui.core.Brain.prototype.constructor.displayName = "ui.core/Brain";

ui.core.Brain.prototype.om$isComponent = true;

var x35283_35290 = ui.core.Brain;
/** @nocollapse */
x35283_35290.om$next$IQuery$ = true;

/** @nocollapse */
x35283_35290.om$next$IQuery$query$arity$1 = ((function (x35283_35290){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_SLASH_description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$item_SLASH_votes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_votes_SLASH_today,cljs.core.cst$kw$item_DASH_votes_SLASH_total], null)], null)], null)], null)], null);
});})(x35283_35290))
;


var x35284_35291 = ui.core.Brain.prototype;

x35284_35291.om$next$IQuery$ = true;


x35284_35291.om$next$IQuery$query$arity$1 = ((function (x35284_35291){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_SLASH_description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$item_SLASH_votes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_votes_SLASH_today,cljs.core.cst$kw$item_DASH_votes_SLASH_total], null)], null)], null)], null)], null);
});})(x35284_35291))
;


ui.core.Brain.cljs$lang$type = true;

ui.core.Brain.cljs$lang$ctorStr = "ui.core/Brain";

ui.core.Brain.cljs$lang$ctorPrWriter = (function (this__24689__auto__,writer__24690__auto__,opt__24691__auto__){
return cljs.core._write(writer__24690__auto__,"ui.core/Brain");
});
ui.core.brain_component = om.next.factory.cljs$core$IFn$_invoke$arity$1(ui.core.Brain);
/**
 * @constructor
 */
ui.core.Root = (function ui$core$Root(){
var this__24686__auto__ = this;
React.Component.apply(this__24686__auto__,arguments);

if(!((this__24686__auto__.initLocalState == null))){
this__24686__auto__.state = this__24686__auto__.initLocalState();
} else {
this__24686__auto__.state = {};
}

return this__24686__auto__;
});

ui.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x35296_35348 = ui.core.Root.prototype;
x35296_35348.componentWillUpdate = ((function (x35296_35348){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
if(((!((this__24577__auto__ == null)))?(((false) || (this__24577__auto__.om$next$Ident$))?true:false):false)){
var ident__24581__auto___35349 = om.next.ident(this__24577__auto__,om.next.props(this__24577__auto__));
var next_ident__24582__auto___35350 = om.next.ident(this__24577__auto__,om.next._next_props(next_props__24578__auto__,this__24577__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24581__auto___35349,next_ident__24582__auto___35350)){
var idxr__24583__auto___35351 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24583__auto___35351 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24583__auto___35351),((function (idxr__24583__auto___35351,ident__24581__auto___35349,next_ident__24582__auto___35350,this__24577__auto__,x35296_35348){
return (function (indexes__24584__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24584__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24581__auto___35349], null),cljs.core.disj,this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24582__auto___35350], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24577__auto__);
});})(idxr__24583__auto___35351,ident__24581__auto___35349,next_ident__24582__auto___35350,this__24577__auto__,x35296_35348))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24577__auto__);

return om.next.merge_pending_state_BANG_(this__24577__auto__);
});})(x35296_35348))
;

x35296_35348.shouldComponentUpdate = ((function (x35296_35348){
return (function (next_props__24578__auto__,next_state__24579__auto__){
var this__24577__auto__ = this;
var next_children__24580__auto__ = next_props__24578__auto__.children;
var next_props__24578__auto____$1 = goog.object.get(next_props__24578__auto__,"omcljs$value");
var next_props__24578__auto____$2 = (function (){var G__35298 = next_props__24578__auto____$1;
if((next_props__24578__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__35298);
} else {
return G__35298;
}
})();
var or__6417__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24577__auto__),next_props__24578__auto____$2);
if(or__6417__auto__){
return or__6417__auto__;
} else {
var or__6417__auto____$1 = (function (){var and__6405__auto__ = this__24577__auto__.state;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__35303 = this__24577__auto__.state;
var G__35304 = "omcljs$state";
return goog.object.get(G__35303,G__35304);
})(),goog.object.get(next_state__24579__auto__,"omcljs$state"));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto____$1)){
return or__6417__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__24577__auto__.props.children,next_children__24580__auto__);
}
}
});})(x35296_35348))
;

x35296_35348.componentDidUpdate = ((function (x35296_35348){
return (function (prev_props__24585__auto__,prev_state__24586__auto__){
var this__24577__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24577__auto__);
});})(x35296_35348))
;

x35296_35348.isMounted = ((function (x35296_35348){
return (function (){
var this__24577__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24577__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35296_35348))
;

x35296_35348.componentWillMount = ((function (x35296_35348){
return (function (){
var this__24577__auto__ = this;
var indexer__24587__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24577__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24587__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24587__auto__,this__24577__auto__);
}
});})(x35296_35348))
;

x35296_35348.initLocalState = ((function (x35296_35348){
return (function (){
var this$ = this;
var ret__24555__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$intervals,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$address,null], null),cljs.core.cst$kw$address,null,cljs.core.cst$kw$canvas_DASH_mode,cljs.core.cst$kw$brain], null);
var obj35306 = {"omcljs$state":ret__24555__auto__};
return obj35306;
});})(x35296_35348))
;

x35296_35348.componentDidMount = ((function (x35296_35348){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$intervals,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$address,(function (){var update_address = ((function (this$,x35296_35348){
return (function (){
var address = ((typeof web3 !== 'undefined')?(web3.eth.accounts[(0)]):null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(address,cljs.core.cst$kw$address.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$address,address);

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$user_SLASH_change_DASH_address),(function (){var x__7251__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$address),(function (){var x__7251__auto__ = address;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())))));
} else {
return null;
}
});})(this$,x35296_35348))
;
update_address();

return setInterval(update_address,(1000));
})()], null));
});})(x35296_35348))
;

x35296_35348.componentWillUnmount = ((function (x35296_35348){
return (function (){
var this__24571__auto__ = this;
var this$ = this__24571__auto__;
var r__24572__auto__ = om.next.get_reconciler(this__24571__auto__);
var cfg__24573__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24572__auto__);
var st__24574__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24573__auto__);
var indexer__24575__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24573__auto__);
if(cljs.core.truth_((function (){var and__6405__auto__ = !((st__24574__auto__ == null));
if(and__6405__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__24574__auto__) : cljs.core.deref.call(null,st__24574__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24571__auto__], null));
} else {
return and__6405__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24574__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__24571__auto__], 0));
} else {
}

if((indexer__24575__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_(indexer__24575__auto__,this__24571__auto__);
}

var G__35307 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$intervals,cljs.core.cst$kw$address], null));
return clearInterval(G__35307);
});})(x35296_35348))
;

x35296_35348.render = ((function (x35296_35348){
return (function (){
var this__24576__auto__ = this;
var this$ = this__24576__auto__;
var _STAR_reconciler_STAR_35308 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35309 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35310 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35311 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35312 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__24576__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__24576__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__24576__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__24576__auto__);

om.next._STAR_parent_STAR_ = this__24576__auto__;

try{var map__35313 = om.next.props(this$);
var map__35313__$1 = ((((!((map__35313 == null)))?((((map__35313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35313):map__35313);
var proposals_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35313__$1,cljs.core.cst$kw$etherean_SLASH_main_DASH_proposals);
var stakes_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35313__$1,cljs.core.cst$kw$etherean_SLASH_main_DASH_stakes);
var items_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35313__$1,cljs.core.cst$kw$etherean_SLASH_main_DASH_items);
var brain_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35313__$1,cljs.core.cst$kw$etherean_SLASH_main_DASH_brain);
var network_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35313__$1,cljs.core.cst$kw$etherean_SLASH_network_DASH_id);
var can_vote_proposal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35313__$1,cljs.core.cst$kw$user_SLASH_can_DASH_vote_DASH_proposal);
var stake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35313__$1,cljs.core.cst$kw$user_SLASH_stake);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-dark", "style": ({"display": "flex", "justifyContent": "center", "zoom": 1.3})}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"flexGrow": "1", "maxWidth": "600px"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__35315 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (map__35313,map__35313__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_35308,_STAR_depth_STAR_35309,_STAR_shared_STAR_35310,_STAR_instrument_STAR_35311,_STAR_parent_STAR_35312,this$,this__24576__auto__,x35296_35348){
return (function (index){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$canvas_DASH_mode,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$brain,cljs.core.cst$kw$stopped,cljs.core.cst$kw$zoom,cljs.core.cst$kw$white,cljs.core.cst$kw$white], null).call(null,index));
});})(map__35313,map__35313__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_35308,_STAR_depth_STAR_35309,_STAR_shared_STAR_35310,_STAR_instrument_STAR_35311,_STAR_parent_STAR_35312,this$,this__24576__auto__,x35296_35348))
], null);
var G__35316 = (function (){var G__35322 = (blueprint_cljs.core.tab.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.tab.cljs$core$IFn$_invoke$arity$1("Brain") : blueprint_cljs.core.tab.call(null,"Brain"));
var G__35323 = (blueprint_cljs.core.tab.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.tab.cljs$core$IFn$_invoke$arity$1("Top 10 Items") : blueprint_cljs.core.tab.call(null,"Top 10 Items"));
var G__35324 = (blueprint_cljs.core.tab.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.tab.cljs$core$IFn$_invoke$arity$1("Today's Proposed Items") : blueprint_cljs.core.tab.call(null,"Today's Proposed Items"));
var G__35325 = (blueprint_cljs.core.tab.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.tab.cljs$core$IFn$_invoke$arity$1("Voting Stakes") : blueprint_cljs.core.tab.call(null,"Voting Stakes"));
var G__35326 = (blueprint_cljs.core.tab.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.tab.cljs$core$IFn$_invoke$arity$1("FAQ") : blueprint_cljs.core.tab.call(null,"FAQ"));
return (blueprint_cljs.core.tab_list.cljs$core$IFn$_invoke$arity$5 ? blueprint_cljs.core.tab_list.cljs$core$IFn$_invoke$arity$5(G__35322,G__35323,G__35324,G__35325,G__35326) : blueprint_cljs.core.tab_list.call(null,G__35322,G__35323,G__35324,G__35325,G__35326));
})();
var G__35317 = (function (){var G__35327 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"position": "absolute", "bottom": (0), "left": (0), "right": (0), "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-card pt-elevation-4", "style": ({"opacity": om_tools.dom.format_opts(((typeof web3 !== 'undefined')?0.7:(1))), "maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((typeof web3 !== 'undefined')?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"display": "flex", "alignItems": "center", "fontSize": "1.1rem", "marginBottom": "2rem"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"style": ({"margin": "0.5em"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["EthereanMind requires access to the ",(function (){var G__35328 = ({"target": "_blank", "href": "http://ethereum.org"});
var G__35329 = "ethereum network ";
return React.DOM.a(G__35328,G__35329);
})(),"to initialize. Please install the ",(function (){var G__35330 = ({"target": "_blank", "href": "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"});
var G__35331 = "metamask chrome extension";
return React.DOM.a(G__35330,G__35331);
})(),", or a similar ethereum data source."],null)))),(function (){var G__35332 = ({"src": "metamask.png"});
return React.DOM.img(G__35332);
})()],null))))),(function (){var G__35333 = ({"style": ({"textAlign": "center"})});
var G__35334 = "Ethereans, what's on your mind?";
return React.DOM.h3(G__35333,G__35334);
})(),React.DOM.p(null,"EthereanMind lets ethereum users maintain a decentralized \"Top 10 list\" of the most important items to the community. Voting attacks are prevented via time-locked, fully refundable deposits in a staking contract.")],null)))),(cljs.core.truth_((function (){var and__6405__auto__ = typeof web3 !== 'undefined';
if(and__6405__auto__){
var and__6405__auto____$1 = network_id;
if(cljs.core.truth_(and__6405__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(network_id,(3));
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})())?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-callout pt-intent-danger pt-icon-warning-sign", "style": ({"maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h5(null,"Wrong Network!"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(network_id,(1)))?"You are currently connected to the Ethereum main network which uses real currency. This beta dapp is still running on the Ropsten testnet, which uses free currency. Do not yet use real money with this dapp!":"You are connected to the wrong network! This beta dapp is currently runing on the Ropsten Testnet. In Metamask, change the network option in the upper left corner of the popup window.")],null)))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(network_id,(3)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "pt-callout pt-intent-warning pt-icon-warning-sign", "style": ({"maxWidth": "500px", "marginBottom": "2rem", "opacity": 0.5, "fontSize": "0.7em"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h5(null,"Ropsten Testnet Attack"),"Please be aware that the ethereum testnet is experiencing a (senseless) spam attack this week. This may cause failures in staking/voting that will not exist once this app goes out of beta on the main ethereum network."],null)))):null)],null))));
return (blueprint_cljs.core.tab_panel.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.tab_panel.cljs$core$IFn$_invoke$arity$1(G__35327) : blueprint_cljs.core.tab_panel.call(null,G__35327));
})();
var G__35318 = (function (){var G__35335 = (ui.core.items_component.cljs$core$IFn$_invoke$arity$1 ? ui.core.items_component.cljs$core$IFn$_invoke$arity$1(items_props) : ui.core.items_component.call(null,items_props));
return (blueprint_cljs.core.tab_panel.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.tab_panel.cljs$core$IFn$_invoke$arity$1(G__35335) : blueprint_cljs.core.tab_panel.call(null,G__35335));
})();
var G__35319 = (function (){var G__35336 = (ui.core.proposals_component.cljs$core$IFn$_invoke$arity$1 ? ui.core.proposals_component.cljs$core$IFn$_invoke$arity$1(proposals_props) : ui.core.proposals_component.call(null,proposals_props));
return (blueprint_cljs.core.tab_panel.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.tab_panel.cljs$core$IFn$_invoke$arity$1(G__35336) : blueprint_cljs.core.tab_panel.call(null,G__35336));
})();
var G__35320 = (function (){var G__35337 = (ui.core.stakes_component.cljs$core$IFn$_invoke$arity$1 ? ui.core.stakes_component.cljs$core$IFn$_invoke$arity$1(stakes_props) : ui.core.stakes_component.call(null,stakes_props));
return (blueprint_cljs.core.tab_panel.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.tab_panel.cljs$core$IFn$_invoke$arity$1(G__35337) : blueprint_cljs.core.tab_panel.call(null,G__35337));
})();
var G__35321 = (blueprint_cljs.core.tab_panel.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.tab_panel.cljs$core$IFn$_invoke$arity$1(ui.faq_text.faq_text) : blueprint_cljs.core.tab_panel.call(null,ui.faq_text.faq_text));
return (blueprint_cljs.core.tabs.cljs$core$IFn$_invoke$arity$7 ? blueprint_cljs.core.tabs.cljs$core$IFn$_invoke$arity$7(G__35315,G__35316,G__35317,G__35318,G__35319,G__35320,G__35321) : blueprint_cljs.core.tabs.call(null,G__35315,G__35316,G__35317,G__35318,G__35319,G__35320,G__35321));
})()],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"key": "foo", "style": ({"position": "fixed", "display": "flex", "flexDirection": "column", "alignItems": "flex-end", "right": (0), "bottom": (0), "padding": "0.5rem", "opacity": "0.5"})}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,can_vote_proposal))?(function (){var G__35338 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"0.15em"], null)], null);
var G__35339 = "Today's proposal action used up";
return (blueprint_cljs.core.tag.cljs$core$IFn$_invoke$arity$2 ? blueprint_cljs.core.tag.cljs$core$IFn$_invoke$arity$2(G__35338,G__35339) : blueprint_cljs.core.tag.call(null,G__35338,G__35339));
})():null),(function (){var G__35340 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"0.15em"], null)], null);
var G__35341 = "Current Stake: ";
var G__35342 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stake,cljs.core.cst$kw$mining))?(function (){var G__35344 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"pt-small"], null);
return (blueprint_cljs.core.spinner.cljs$core$IFn$_invoke$arity$1 ? blueprint_cljs.core.spinner.cljs$core$IFn$_invoke$arity$1(G__35344) : blueprint_cljs.core.spinner.call(null,G__35344));
})():stake);
var G__35343 = " Ether";
return (blueprint_cljs.core.tag.cljs$core$IFn$_invoke$arity$4 ? blueprint_cljs.core.tag.cljs$core$IFn$_invoke$arity$4(G__35340,G__35341,G__35342,G__35343) : blueprint_cljs.core.tag.call(null,G__35340,G__35341,G__35342,G__35343));
})()],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"key": "bar", "style": ({"pointerEvents": "none ", "top": (0), "width": "100%", "justifyContent": "center", "opacity": (1), "display": "flex", "position": "absolute", "height": "100%", "alignItems": "center", "left": (0)})}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__35345 = om.next.computed(brain_props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mode,cljs.core.cst$kw$canvas_DASH_mode.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$))], null));
return (ui.core.brain_component.cljs$core$IFn$_invoke$arity$1 ? ui.core.brain_component.cljs$core$IFn$_invoke$arity$1(G__35345) : ui.core.brain_component.call(null,G__35345));
})()],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35312;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35311;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35310;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35309;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35308;
}});})(x35296_35348))
;


ui.core.Root.prototype.constructor = ui.core.Root;

ui.core.Root.prototype.constructor.displayName = "ui.core/Root";

ui.core.Root.prototype.om$isComponent = true;

var x35346_35352 = ui.core.Root;
/** @nocollapse */
x35346_35352.om$next$IQuery$ = true;

/** @nocollapse */
x35346_35352.om$next$IQuery$query$arity$1 = ((function (x35346_35352){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$etherean_SLASH_network_DASH_id,cljs.core.cst$kw$user_SLASH_stake,cljs.core.cst$kw$user_SLASH_can_DASH_vote_DASH_proposal,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_main_DASH_proposals,om.next.get_query(ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_main_DASH_stakes,om.next.get_query(ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_main_DASH_brain,om.next.get_query(ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_main_DASH_items,om.next.get_query(ui.core.Items)], null)], null);
});})(x35346_35352))
;


var x35347_35353 = ui.core.Root.prototype;

x35347_35353.om$next$IQuery$ = true;


x35347_35353.om$next$IQuery$query$arity$1 = ((function (x35347_35353){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$etherean_SLASH_network_DASH_id,cljs.core.cst$kw$user_SLASH_stake,cljs.core.cst$kw$user_SLASH_can_DASH_vote_DASH_proposal,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_main_DASH_proposals,om.next.get_query(ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_main_DASH_stakes,om.next.get_query(ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_main_DASH_brain,om.next.get_query(ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$etherean_SLASH_main_DASH_items,om.next.get_query(ui.core.Items)], null)], null);
});})(x35347_35353))
;


ui.core.Root.cljs$lang$type = true;

ui.core.Root.cljs$lang$ctorStr = "ui.core/Root";

ui.core.Root.cljs$lang$ctorPrWriter = (function (this__24689__auto__,writer__24690__auto__,opt__24691__auto__){
return cljs.core._write(writer__24690__auto__,"ui.core/Root");
});
ui.core.simple_read = (function ui$core$simple_read(p__35354,key,_){
var map__35357 = p__35354;
var map__35357__$1 = ((((!((map__35357 == null)))?((((map__35357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35357):map__35357);
var env = map__35357__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35357__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)).call(null,key)], null);
});
ui.core.simple_read_with_remote = (function ui$core$simple_read_with_remote(p__35359,key,_){
var map__35362 = p__35359;
var map__35362__$1 = ((((!((map__35362 == null)))?((((map__35362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35362):map__35362);
var env = map__35362__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35362__$1,cljs.core.cst$kw$state);
var value = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)).call(null,key);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$remote,cljs.core.not(value)], null);
});
ui.core.recursive_read = (function ui$core$recursive_read(query_root,p__35364,_,___$1){
var map__35367 = p__35364;
var map__35367__$1 = ((((!((map__35367 == null)))?((((map__35367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35367):map__35367);
var env = map__35367__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35367__$1,cljs.core.cst$kw$parser);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35367__$1,cljs.core.cst$kw$query);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35367__$1,cljs.core.cst$kw$target);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35367__$1,cljs.core.cst$kw$ast);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,cljs.core.cst$kw$query_DASH_root,query_root,cljs.core.array_seq([cljs.core.cst$kw$query,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,query,target) : parser.call(null,env,query,target))], 0))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,query) : parser.call(null,env,query))], null);
}
});
if(typeof ui.core.read !== 'undefined'){
} else {
ui.core.read = (function (){var method_table__7342__auto__ = (function (){var G__35369 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35369) : cljs.core.atom.call(null,G__35369));
})();
var prefer_table__7343__auto__ = (function (){var G__35370 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35370) : cljs.core.atom.call(null,G__35370));
})();
var method_cache__7344__auto__ = (function (){var G__35371 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35371) : cljs.core.atom.call(null,G__35371));
})();
var cached_hierarchy__7345__auto__ = (function (){var G__35372 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35372) : cljs.core.atom.call(null,G__35372));
})();
var hierarchy__7346__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ui.core","read"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__7346__auto__,method_table__7342__auto__,prefer_table__7343__auto__,method_cache__7344__auto__,cached_hierarchy__7345__auto__));
})();
}
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$etherean_SLASH_user,(function() { 
var G__35373__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.core.recursive_read,true,args);
};
var G__35373 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35374__i = 0, G__35374__a = new Array(arguments.length -  0);
while (G__35374__i < G__35374__a.length) {G__35374__a[G__35374__i] = arguments[G__35374__i + 0]; ++G__35374__i;}
  args = new cljs.core.IndexedSeq(G__35374__a,0);
} 
return G__35373__delegate.call(this,args);};
G__35373.cljs$lang$maxFixedArity = 0;
G__35373.cljs$lang$applyTo = (function (arglist__35375){
var args = cljs.core.seq(arglist__35375);
return G__35373__delegate(args);
});
G__35373.cljs$core$IFn$_invoke$arity$variadic = G__35373__delegate;
return G__35373;
})()
);
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$user_SLASH_address,(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__35376 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35376) : cljs.core.deref.call(null,G__35376));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$etherean_SLASH_user,dispatch_key], null))], null);
}));
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$user_SLASH_balance,(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,true,cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__35377 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35377) : cljs.core.deref.call(null,G__35377));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$etherean_SLASH_user,dispatch_key], null))], null);
}));
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$user_SLASH_can_DASH_vote_DASH_proposal,(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,true,cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__35378 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35378) : cljs.core.deref.call(null,G__35378));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$etherean_SLASH_user,dispatch_key], null))], null);
}));
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$user_SLASH_stake,(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(function (){var or__6417__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__35381 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35381) : cljs.core.deref.call(null,G__35381));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stake_SLASH_by_DASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__35382 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35382) : cljs.core.deref.call(null,G__35382));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$etherean_SLASH_user,cljs.core.cst$kw$user_SLASH_address], null)),cljs.core.cst$kw$stake_SLASH_value], null));
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return (0);
}
})()], null);
}));
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$etherean_SLASH_items,(function (env,k,params){
var map__35383 = env;
var map__35383__$1 = ((((!((map__35383 == null)))?((((map__35383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35383):map__35383);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,cljs.core.cst$kw$parser);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,cljs.core.cst$kw$query);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,cljs.core.cst$kw$target);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,cljs.core.cst$kw$ast);
var state__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$query,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,query,target) : parser.call(null,env,query,target)))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(function (){var iter__7197__auto__ = ((function (map__35383,map__35383__$1,parser,state,query,target,ast,state__$1){
return (function ui$core$iter__35385(s__35386){
return (new cljs.core.LazySeq(null,((function (map__35383,map__35383__$1,parser,state,query,target,ast,state__$1){
return (function (){
var s__35386__$1 = s__35386;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35386__$1);
if(temp__4657__auto__){
var s__35386__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35386__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__35386__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__35388 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__35387 = (0);
while(true){
if((i__35387 < size__7196__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__35387);
cljs.core.chunk_append(b__35388,(function (){var G__35395 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$item,item);
var G__35396 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__35395,G__35396) : parser.call(null,G__35395,G__35396));
})());

var G__35399 = (i__35387 + (1));
i__35387 = G__35399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35388),ui$core$iter__35385(cljs.core.chunk_rest(s__35386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35388),null);
}
} else {
var item = cljs.core.first(s__35386__$2);
return cljs.core.cons((function (){var G__35397 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$item,item);
var G__35398 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__35397,G__35398) : parser.call(null,G__35397,G__35398));
})(),ui$core$iter__35385(cljs.core.rest(s__35386__$2)));
}
} else {
return null;
}
break;
}
});})(map__35383,map__35383__$1,parser,state,query,target,ast,state__$1))
,null,null));
});})(map__35383,map__35383__$1,parser,state,query,target,ast,state__$1))
;
return iter__7197__auto__(cljs.core.cst$kw$item_SLASH_by_DASH_id.cljs$core$IFn$_invoke$arity$1(state__$1));
})()], null);
}
}));
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$etherean_SLASH_proposals,(function (env,k,params){
var map__35400 = env;
var map__35400__$1 = ((((!((map__35400 == null)))?((((map__35400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35400):map__35400);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35400__$1,cljs.core.cst$kw$parser);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35400__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35400__$1,cljs.core.cst$kw$query);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35400__$1,cljs.core.cst$kw$target);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35400__$1,cljs.core.cst$kw$ast);
var state__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var map__35401 = state__$1;
var map__35401__$1 = ((((!((map__35401 == null)))?((((map__35401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35401):map__35401);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35401__$1,cljs.core.cst$kw$proposal_SLASH_order);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$query,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,query,target) : parser.call(null,env,query,target)))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(function (){var iter__7197__auto__ = ((function (map__35400,map__35400__$1,parser,state,query,target,ast,state__$1,map__35401,map__35401__$1,order){
return (function ui$core$iter__35404(s__35405){
return (new cljs.core.LazySeq(null,((function (map__35400,map__35400__$1,parser,state,query,target,ast,state__$1,map__35401,map__35401__$1,order){
return (function (){
var s__35405__$1 = s__35405;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35405__$1);
if(temp__4657__auto__){
var s__35405__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35405__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__35405__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__35407 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__35406 = (0);
while(true){
if((i__35406 < size__7196__auto__)){
var proposal = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__35406);
cljs.core.chunk_append(b__35407,(function (){var G__35414 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$proposal,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,proposal));
var G__35415 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__35414,G__35415) : parser.call(null,G__35414,G__35415));
})());

var G__35418 = (i__35406 + (1));
i__35406 = G__35418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35407),ui$core$iter__35404(cljs.core.chunk_rest(s__35405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35407),null);
}
} else {
var proposal = cljs.core.first(s__35405__$2);
return cljs.core.cons((function (){var G__35416 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$proposal,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,proposal));
var G__35417 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__35416,G__35417) : parser.call(null,G__35416,G__35417));
})(),ui$core$iter__35404(cljs.core.rest(s__35405__$2)));
}
} else {
return null;
}
break;
}
});})(map__35400,map__35400__$1,parser,state,query,target,ast,state__$1,map__35401,map__35401__$1,order))
,null,null));
});})(map__35400,map__35400__$1,parser,state,query,target,ast,state__$1,map__35401,map__35401__$1,order))
;
return iter__7197__auto__(order);
})()], null);
}
}));
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$etherean_SLASH_stakes,(function (env,dispatch_key,params){
var map__35419 = env;
var map__35419__$1 = ((((!((map__35419 == null)))?((((map__35419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35419):map__35419);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35419__$1,cljs.core.cst$kw$parser);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35419__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35419__$1,cljs.core.cst$kw$query);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35419__$1,cljs.core.cst$kw$target);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35419__$1,cljs.core.cst$kw$ast);
var state__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var map__35420 = state__$1;
var map__35420__$1 = ((((!((map__35420 == null)))?((((map__35420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35420):map__35420);
var by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35420__$1,cljs.core.cst$kw$stake_SLASH_by_DASH_id);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$query,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,query,target) : parser.call(null,env,query,target)))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(function (){var iter__7197__auto__ = ((function (map__35419,map__35419__$1,parser,state,query,target,ast,state__$1,map__35420,map__35420__$1,by_id){
return (function ui$core$iter__35423(s__35424){
return (new cljs.core.LazySeq(null,((function (map__35419,map__35419__$1,parser,state,query,target,ast,state__$1,map__35420,map__35420__$1,by_id){
return (function (){
var s__35424__$1 = s__35424;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35424__$1);
if(temp__4657__auto__){
var s__35424__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35424__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__35424__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__35426 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__35425 = (0);
while(true){
if((i__35425 < size__7196__auto__)){
var stake = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__35425);
cljs.core.chunk_append(b__35426,(function (){var G__35433 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$stake,stake);
var G__35434 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__35433,G__35434) : parser.call(null,G__35433,G__35434));
})());

var G__35437 = (i__35425 + (1));
i__35425 = G__35437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35426),ui$core$iter__35423(cljs.core.chunk_rest(s__35424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35426),null);
}
} else {
var stake = cljs.core.first(s__35424__$2);
return cljs.core.cons((function (){var G__35435 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$stake,stake);
var G__35436 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__35435,G__35436) : parser.call(null,G__35435,G__35436));
})(),ui$core$iter__35423(cljs.core.rest(s__35424__$2)));
}
} else {
return null;
}
break;
}
});})(map__35419,map__35419__$1,parser,state,query,target,ast,state__$1,map__35420,map__35420__$1,by_id))
,null,null));
});})(map__35419,map__35419__$1,parser,state,query,target,ast,state__$1,map__35420,map__35420__$1,by_id))
;
return iter__7197__auto__(cljs.core.vals(by_id));
})()], null);
}
}));
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$etherean_SLASH_main_DASH_items,(function() { 
var G__35438__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.core.recursive_read,false,args);
};
var G__35438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35439__i = 0, G__35439__a = new Array(arguments.length -  0);
while (G__35439__i < G__35439__a.length) {G__35439__a[G__35439__i] = arguments[G__35439__i + 0]; ++G__35439__i;}
  args = new cljs.core.IndexedSeq(G__35439__a,0);
} 
return G__35438__delegate.call(this,args);};
G__35438.cljs$lang$maxFixedArity = 0;
G__35438.cljs$lang$applyTo = (function (arglist__35440){
var args = cljs.core.seq(arglist__35440);
return G__35438__delegate(args);
});
G__35438.cljs$core$IFn$_invoke$arity$variadic = G__35438__delegate;
return G__35438;
})()
);
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$etherean_SLASH_main_DASH_proposals,(function() { 
var G__35441__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.core.recursive_read,false,args);
};
var G__35441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35442__i = 0, G__35442__a = new Array(arguments.length -  0);
while (G__35442__i < G__35442__a.length) {G__35442__a[G__35442__i] = arguments[G__35442__i + 0]; ++G__35442__i;}
  args = new cljs.core.IndexedSeq(G__35442__a,0);
} 
return G__35441__delegate.call(this,args);};
G__35441.cljs$lang$maxFixedArity = 0;
G__35441.cljs$lang$applyTo = (function (arglist__35443){
var args = cljs.core.seq(arglist__35443);
return G__35441__delegate(args);
});
G__35441.cljs$core$IFn$_invoke$arity$variadic = G__35441__delegate;
return G__35441;
})()
);
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$etherean_SLASH_main_DASH_stakes,(function() { 
var G__35444__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.core.recursive_read,false,args);
};
var G__35444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35445__i = 0, G__35445__a = new Array(arguments.length -  0);
while (G__35445__i < G__35445__a.length) {G__35445__a[G__35445__i] = arguments[G__35445__i + 0]; ++G__35445__i;}
  args = new cljs.core.IndexedSeq(G__35445__a,0);
} 
return G__35444__delegate.call(this,args);};
G__35444.cljs$lang$maxFixedArity = 0;
G__35444.cljs$lang$applyTo = (function (arglist__35446){
var args = cljs.core.seq(arglist__35446);
return G__35444__delegate(args);
});
G__35444.cljs$core$IFn$_invoke$arity$variadic = G__35444__delegate;
return G__35444;
})()
);
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$etherean_SLASH_main_DASH_brain,(function() { 
var G__35447__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.core.recursive_read,false,args);
};
var G__35447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35448__i = 0, G__35448__a = new Array(arguments.length -  0);
while (G__35448__i < G__35448__a.length) {G__35448__a[G__35448__i] = arguments[G__35448__i + 0]; ++G__35448__i;}
  args = new cljs.core.IndexedSeq(G__35448__a,0);
} 
return G__35447__delegate.call(this,args);};
G__35447.cljs$lang$maxFixedArity = 0;
G__35447.cljs$lang$applyTo = (function (arglist__35449){
var args = cljs.core.seq(arglist__35449);
return G__35447__delegate(args);
});
G__35447.cljs$core$IFn$_invoke$arity$variadic = G__35447__delegate;
return G__35447;
})()
);
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$item_SLASH_votes,(function (env,k,params){
var map__35450 = env;
var map__35450__$1 = ((((!((map__35450 == null)))?((((map__35450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35450):map__35450);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35450__$1,cljs.core.cst$kw$parser);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35450__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35450__$1,cljs.core.cst$kw$query);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35450__$1,cljs.core.cst$kw$target);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35450__$1,cljs.core.cst$kw$ast);
var state__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var map__35451 = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(env);
var map__35451__$1 = ((((!((map__35451 == null)))?((((map__35451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35451):map__35451);
var votes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,cljs.core.cst$kw$item_SLASH_votes);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$query,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,query,target) : parser.call(null,env,query,target)))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.core.truth_(votes)?(function (){var iter__7197__auto__ = ((function (map__35450,map__35450__$1,parser,state,query,target,ast,state__$1,map__35451,map__35451__$1,votes){
return (function ui$core$iter__35454(s__35455){
return (new cljs.core.LazySeq(null,((function (map__35450,map__35450__$1,parser,state,query,target,ast,state__$1,map__35451,map__35451__$1,votes){
return (function (){
var s__35455__$1 = s__35455;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35455__$1);
if(temp__4657__auto__){
var s__35455__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35455__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__35455__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__35457 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__35456 = (0);
while(true){
if((i__35456 < size__7196__auto__)){
var item_votes = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__35456);
cljs.core.chunk_append(b__35457,(function (){var G__35464 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$item_DASH_votes,item_votes);
var G__35465 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__35464,G__35465) : parser.call(null,G__35464,G__35465));
})());

var G__35468 = (i__35456 + (1));
i__35456 = G__35468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35457),ui$core$iter__35454(cljs.core.chunk_rest(s__35455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35457),null);
}
} else {
var item_votes = cljs.core.first(s__35455__$2);
return cljs.core.cons((function (){var G__35466 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$item_DASH_votes,item_votes);
var G__35467 = query;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__35466,G__35467) : parser.call(null,G__35466,G__35467));
})(),ui$core$iter__35454(cljs.core.rest(s__35455__$2)));
}
} else {
return null;
}
break;
}
});})(map__35450,map__35450__$1,parser,state,query,target,ast,state__$1,map__35451,map__35451__$1,votes))
,null,null));
});})(map__35450,map__35450__$1,parser,state,query,target,ast,state__$1,map__35451,map__35451__$1,votes))
;
return iter__7197__auto__(votes);
})():null)], null);
}
}));
var seq__35469_35479 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$proposal,cljs.core.cst$kw$proposal_SLASH_description,true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$proposal,cljs.core.cst$kw$proposal_SLASH_unsaved,false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$proposal,cljs.core.cst$kw$proposal_SLASH_upvotes,true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$proposal,cljs.core.cst$kw$proposal_SLASH_downvotes,true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stake,cljs.core.cst$kw$stake_SLASH_value,true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item,cljs.core.cst$kw$item_SLASH_description,true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_votes,cljs.core.cst$kw$item_DASH_votes_SLASH_today,true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_DASH_votes,cljs.core.cst$kw$item_DASH_votes_SLASH_total,true], null)], null));
var chunk__35470_35480 = null;
var count__35471_35481 = (0);
var i__35472_35482 = (0);
while(true){
if((i__35472_35482 < count__35471_35481)){
var vec__35473_35483 = chunk__35470_35480.cljs$core$IIndexed$_nth$arity$2(null,i__35472_35482);
var object_35484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35473_35483,(0),null);
var method_35485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35473_35483,(1),null);
var remote_35486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35473_35483,(2),null);
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,method_35485,((function (seq__35469_35479,chunk__35470_35480,count__35471_35481,i__35472_35482,vec__35473_35483,object_35484,method_35485,remote_35486){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,remote_35486,cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_35484,dispatch_key], null))], null);
});})(seq__35469_35479,chunk__35470_35480,count__35471_35481,i__35472_35482,vec__35473_35483,object_35484,method_35485,remote_35486))
);

var G__35487 = seq__35469_35479;
var G__35488 = chunk__35470_35480;
var G__35489 = count__35471_35481;
var G__35490 = (i__35472_35482 + (1));
seq__35469_35479 = G__35487;
chunk__35470_35480 = G__35488;
count__35471_35481 = G__35489;
i__35472_35482 = G__35490;
continue;
} else {
var temp__4657__auto___35491 = cljs.core.seq(seq__35469_35479);
if(temp__4657__auto___35491){
var seq__35469_35492__$1 = temp__4657__auto___35491;
if(cljs.core.chunked_seq_QMARK_(seq__35469_35492__$1)){
var c__7228__auto___35493 = cljs.core.chunk_first(seq__35469_35492__$1);
var G__35494 = cljs.core.chunk_rest(seq__35469_35492__$1);
var G__35495 = c__7228__auto___35493;
var G__35496 = cljs.core.count(c__7228__auto___35493);
var G__35497 = (0);
seq__35469_35479 = G__35494;
chunk__35470_35480 = G__35495;
count__35471_35481 = G__35496;
i__35472_35482 = G__35497;
continue;
} else {
var vec__35476_35498 = cljs.core.first(seq__35469_35492__$1);
var object_35499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476_35498,(0),null);
var method_35500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476_35498,(1),null);
var remote_35501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476_35498,(2),null);
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,method_35500,((function (seq__35469_35479,chunk__35470_35480,count__35471_35481,i__35472_35482,vec__35476_35498,object_35499,method_35500,remote_35501,seq__35469_35492__$1,temp__4657__auto___35491){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,remote_35501,cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_35499,dispatch_key], null))], null);
});})(seq__35469_35479,chunk__35470_35480,count__35471_35481,i__35472_35482,vec__35476_35498,object_35499,method_35500,remote_35501,seq__35469_35492__$1,temp__4657__auto___35491))
);

var G__35502 = cljs.core.next(seq__35469_35492__$1);
var G__35503 = null;
var G__35504 = (0);
var G__35505 = (0);
seq__35469_35479 = G__35502;
chunk__35470_35480 = G__35503;
count__35471_35481 = G__35504;
i__35472_35482 = G__35505;
continue;
}
} else {
}
}
break;
}
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$db_SLASH_id,(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,true,cljs.core.cst$kw$value,(function (){var temp__4657__auto__ = (function (){var or__6417__auto__ = cljs.core.cst$kw$proposal.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
var or__6417__auto____$1 = cljs.core.cst$kw$stake.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__6417__auto____$1)){
return or__6417__auto____$1;
} else {
return cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(env);
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var obj = temp__4657__auto__;
return (obj.cljs$core$IFn$_invoke$arity$1 ? obj.cljs$core$IFn$_invoke$arity$1(dispatch_key) : obj.call(null,dispatch_key));
} else {
return null;
}
})()], null);
}));
ui.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$etherean_SLASH_network_DASH_id,(function() { 
var G__35506__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.core.simple_read_with_remote,args);
};
var G__35506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35507__i = 0, G__35507__a = new Array(arguments.length -  0);
while (G__35507__i < G__35507__a.length) {G__35507__a[G__35507__i] = arguments[G__35507__i + 0]; ++G__35507__i;}
  args = new cljs.core.IndexedSeq(G__35507__a,0);
} 
return G__35506__delegate.call(this,args);};
G__35506.cljs$lang$maxFixedArity = 0;
G__35506.cljs$lang$applyTo = (function (arglist__35508){
var args = cljs.core.seq(arglist__35508);
return G__35506__delegate(args);
});
G__35506.cljs$core$IFn$_invoke$arity$variadic = G__35506__delegate;
return G__35506;
})()
);
if(typeof ui.core.mutate !== 'undefined'){
} else {
ui.core.mutate = (function (){var method_table__7342__auto__ = (function (){var G__35509 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35509) : cljs.core.atom.call(null,G__35509));
})();
var prefer_table__7343__auto__ = (function (){var G__35510 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35510) : cljs.core.atom.call(null,G__35510));
})();
var method_cache__7344__auto__ = (function (){var G__35511 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35511) : cljs.core.atom.call(null,G__35511));
})();
var cached_hierarchy__7345__auto__ = (function (){var G__35512 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35512) : cljs.core.atom.call(null,G__35512));
})();
var hierarchy__7346__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ui.core","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__7346__auto__,method_table__7342__auto__,prefer_table__7343__auto__,method_cache__7344__auto__,cached_hierarchy__7345__auto__));
})();
}
ui.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$proposal_SLASH_save,(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,true,cljs.core.cst$kw$action,(function (){
var map__35513 = params;
var map__35513__$1 = ((((!((map__35513 == null)))?((((map__35513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35513):map__35513);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35513__$1,cljs.core.cst$kw$id);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35513__$1,cljs.core.cst$kw$description);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env),((function (map__35513,map__35513__$1,id,description){
return (function (state){
var map__35515 = state;
var map__35515__$1 = ((((!((map__35515 == null)))?((((map__35515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35515):map__35515);
var proposals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35515__$1,cljs.core.cst$kw$proposal_SLASH_by_DASH_id);
var proposal = (proposals.cljs$core$IFn$_invoke$arity$1 ? proposals.cljs$core$IFn$_invoke$arity$1(id) : proposals.call(null,id));
var new_tempid = om.next.tempid.cljs$core$IFn$_invoke$arity$0();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$proposal_SLASH_by_DASH_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(proposals,id,cljs.core.assoc,cljs.core.cst$kw$proposal_SLASH_description,description,cljs.core.cst$kw$proposal_SLASH_unsaved,cljs.core.array_seq([false], 0)),new_tempid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(proposal,cljs.core.cst$kw$db_SLASH_id,new_tempid,cljs.core.array_seq([cljs.core.cst$kw$proposal_SLASH_unsaved,true], 0)))),cljs.core.cst$kw$proposal_SLASH_order,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$proposal_SLASH_by_DASH_id,new_tempid], null));
});})(map__35513,map__35513__$1,id,description))
);
})], null);
}));
ui.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$proposal_SLASH_vote,(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,true,cljs.core.cst$kw$action,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env),(function (state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$proposal_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(params)], null),cljs.core.dissoc,cljs.core.cst$kw$proposal_SLASH_upvotes);
}));
})], null);
}));
ui.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$item_SLASH_vote,(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,true,cljs.core.cst$kw$action,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env),(function (state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$item_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(params)], null),cljs.core.dissoc,cljs.core.cst$kw$item_SLASH_votes);
}));
})], null);
}));
ui.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$etherean_SLASH_advance_DASH_debug_DASH_day,(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,true], null);
}));
ui.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$user_SLASH_change_DASH_address,(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env),(function (state){
var map__35517 = params;
var map__35517__$1 = ((((!((map__35517 == null)))?((((map__35517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35517):map__35517);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35517__$1,cljs.core.cst$kw$address);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$etherean_SLASH_user,cljs.core.cst$kw$user_SLASH_address], null),address);
}));
})], null);
}));
ui.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$user_SLASH_deposit,(function (env,dispath_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,true,cljs.core.cst$kw$action,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env),(function (state){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stake_SLASH_by_DASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$etherean_SLASH_user,cljs.core.cst$kw$user_SLASH_address], null)),cljs.core.cst$kw$stake_SLASH_value], null),cljs.core.cst$kw$mining);
}));
})], null);
}));
ui.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$user_SLASH_withdraw,(function (env,dispath_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,true,cljs.core.cst$kw$action,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(env),(function (state){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stake_SLASH_by_DASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$etherean_SLASH_user,cljs.core.cst$kw$user_SLASH_address], null)),cljs.core.cst$kw$stake_SLASH_value], null),cljs.core.cst$kw$mining);
}));
})], null);
}));
ui.core.tweak_tree = (function ui$core$tweak_tree(b){
var nodes_to_elide = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$etherean_SLASH_main_DASH_brain,null,cljs.core.cst$kw$etherean_SLASH_main_DASH_stakes,null,cljs.core.cst$kw$etherean_SLASH_main_DASH_proposals,null,cljs.core.cst$kw$etherean_SLASH_main_DASH_items,null], null), null);
var nodes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(b)),nodes_to_elide);
if(cljs.core.seq(nodes)){
var node = cljs.core.first(nodes);
return ui$core$tweak_tree(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(b,node),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(node) : b.call(null,node))], 0)));
} else {
return b;
}
});
ui.core.map_by_id = (function ui$core$map_by_id(items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7197__auto__ = (function ui$core$map_by_id_$_iter__35526(s__35527){
return (new cljs.core.LazySeq(null,(function (){
var s__35527__$1 = s__35527;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35527__$1);
if(temp__4657__auto__){
var s__35527__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35527__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__35527__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__35529 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__35528 = (0);
while(true){
if((i__35528 < size__7196__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__35528);
cljs.core.chunk_append(b__35529,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(item),item], null));

var G__35532 = (i__35528 + (1));
i__35528 = G__35532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35529),ui$core$map_by_id_$_iter__35526(cljs.core.chunk_rest(s__35527__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35529),null);
}
} else {
var item = cljs.core.first(s__35527__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(item),item], null),ui$core$map_by_id_$_iter__35526(cljs.core.rest(s__35527__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7197__auto__(items);
})());
});
ui.core.my_merge_tree = (function ui$core$my_merge_tree(a,b){
var map__35541 = ui.core.tweak_tree(b);
var map__35541__$1 = ((((!((map__35541 == null)))?((((map__35541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35541):map__35541);
var network_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35541__$1,cljs.core.cst$kw$etherean_SLASH_network_DASH_id);
var proposals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35541__$1,cljs.core.cst$kw$etherean_SLASH_proposals);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35541__$1,cljs.core.cst$kw$proposal_SLASH_order);
var stakes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35541__$1,cljs.core.cst$kw$etherean_SLASH_stakes);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35541__$1,cljs.core.cst$kw$etherean_SLASH_user);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35541__$1,cljs.core.cst$kw$etherean_SLASH_items);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,cljs.core.cst$kw$etherean_SLASH_network_DASH_id,((function (map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items){
return (function (k){
var or__6417__auto__ = network_id;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return k;
}
});})(map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items))
),cljs.core.cst$kw$etherean_SLASH_user,cljs.core.merge,user),cljs.core.cst$kw$proposal_SLASH_by_DASH_id,((function (map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items){
return (function (proposals_old){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([proposals_old,ui.core.map_by_id(proposals)], 0));
});})(map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items))
),cljs.core.cst$kw$proposal_SLASH_order,((function (map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items){
return (function (order_old){
if(cljs.core.truth_(proposals)){
var ks = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_id,proposals),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(om.next.tempid_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,order_old)));
return cljs.core.vec((function (){var iter__7197__auto__ = ((function (ks,map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items){
return (function ui$core$my_merge_tree_$_iter__35543(s__35544){
return (new cljs.core.LazySeq(null,((function (ks,map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items){
return (function (){
var s__35544__$1 = s__35544;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__35544__$1);
if(temp__4657__auto__){
var s__35544__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35544__$2)){
var c__7195__auto__ = cljs.core.chunk_first(s__35544__$2);
var size__7196__auto__ = cljs.core.count(c__7195__auto__);
var b__35546 = cljs.core.chunk_buffer(size__7196__auto__);
if((function (){var i__35545 = (0);
while(true){
if((i__35545 < size__7196__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7195__auto__,i__35545);
cljs.core.chunk_append(b__35546,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$proposal_SLASH_by_DASH_id,k], null));

var G__35549 = (i__35545 + (1));
i__35545 = G__35549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35546),ui$core$my_merge_tree_$_iter__35543(cljs.core.chunk_rest(s__35544__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35546),null);
}
} else {
var k = cljs.core.first(s__35544__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$proposal_SLASH_by_DASH_id,k], null),ui$core$my_merge_tree_$_iter__35543(cljs.core.rest(s__35544__$2)));
}
} else {
return null;
}
break;
}
});})(ks,map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items))
,null,null));
});})(ks,map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items))
;
return iter__7197__auto__(ks);
})());
} else {
return order_old;
}
});})(map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items))
),cljs.core.cst$kw$stake_SLASH_by_DASH_id,((function (map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items){
return (function (stakes_old){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([stakes_old,ui.core.map_by_id(stakes)], 0));
});})(map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items))
),cljs.core.cst$kw$item_SLASH_by_DASH_id,((function (map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items){
return (function (items_old){
var or__6417__auto__ = items;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return items_old;
}
});})(map__35541,map__35541__$1,network_id,proposals,order,stakes,user,items))
);
});
ui.core.my_merge = (function ui$core$my_merge(reconciler,state,res,query){
var k = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,k,cljs.core.cst$kw$next,om.next.merge_novelty_BANG_(reconciler,state,cljs.core.select_keys(res,k),query),cljs.core.cst$kw$tempids,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids,cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
ui.core.migrate = (function ui$core$migrate(var_args){
var args35550 = [];
var len__7492__auto___35597 = arguments.length;
var i__7493__auto___35598 = (0);
while(true){
if((i__7493__auto___35598 < len__7492__auto___35597)){
args35550.push((arguments[i__7493__auto___35598]));

var G__35599 = (i__7493__auto___35598 + (1));
i__7493__auto___35598 = G__35599;
continue;
} else {
}
break;
}

var G__35552 = args35550.length;
switch (G__35552) {
case 3:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35550.length)].join('')));

}
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return ui.core.migrate.cljs$core$IFn$_invoke$arity$4(app_state_pure,query,tempids,null);
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function ui$core$dissoc_in(pure,p__35575){
var vec__35579 = p__35575;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35579,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35579,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pure,table,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pure,table),id));
});
var step = (function ui$core$step(pure,p__35582){
var vec__35590 = p__35582;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35590,(0),null);
var vec__35593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35590,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35593,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35593,(1),null);
var new$ = vec__35593;
return cljs.core.assoc_in(dissoc_in(pure,old),new$,(function (){var G__35596 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,old),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,new$)], 0));
if(!((id_key == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35596,id_key,id);
} else {
return G__35596;
}
})());
});
var fix_id = (function ui$core$fix_id(ident){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tempids,ident,ident);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,app_state_pure,tempids),cljs.core.cst$kw$proposal_SLASH_order,(function (order){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(fix_id,order)));
}));
});

ui.core.migrate.cljs$lang$maxFixedArity = 4;

ui.core.reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$state,ui.core.app_state,cljs.core.cst$kw$parser,om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,ui.core.read,cljs.core.cst$kw$mutate,ui.core.mutate], null)),cljs.core.cst$kw$send,ui.ethereum.blockchain_send,cljs.core.cst$kw$merge,ui.core.my_merge,cljs.core.cst$kw$migrate,ui.core.migrate,cljs.core.cst$kw$merge_DASH_tree,ui.core.my_merge_tree,cljs.core.cst$kw$normalize,false,cljs.core.cst$kw$id_DASH_key,cljs.core.cst$kw$db_SLASH_id], null));
om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(ui.core.reconciler,ui.core.Root,goog.dom.getElement("app"));
