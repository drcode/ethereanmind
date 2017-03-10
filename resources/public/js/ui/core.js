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
ui.core.brain_vertices = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__80103){
var vec__80104 = p__80103;
var x = cljs.core.nth.call(null,vec__80104,(0),null);
var y = cljs.core.nth.call(null,vec__80104,(1),null);
var z = cljs.core.nth.call(null,vec__80104,(2),null);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,(y - 0.01),z],null));
}),cljs.core.concat.call(null,cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))),cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))))));
ui.core.brain_faces = cljs.core.map.call(null,(function (p__80107){
var vec__80108 = p__80107;
var a = cljs.core.nth.call(null,vec__80108,(0),null);
var b = cljs.core.nth.call(null,vec__80108,(1),null);
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
var G__80111 = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
s = G__80111;
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
var this__36483__auto__ = this;
React.Component.apply(this__36483__auto__,arguments);

if(!((this__36483__auto__.initLocalState == null))){
this__36483__auto__.state = this__36483__auto__.initLocalState();
} else {
this__36483__auto__.state = {};
}

return this__36483__auto__;
});

ui.core.Item.prototype = goog.object.clone(React.Component.prototype);

var x80116_80136 = ui.core.Item.prototype;
x80116_80136.componentWillUpdate = ((function (x80116_80136){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
if(((!((this__36328__auto__ == null)))?(((false) || (this__36328__auto__.om$next$Ident$))?true:false):false)){
var ident__36332__auto___80137 = om.next.ident.call(null,this__36328__auto__,om.next.props.call(null,this__36328__auto__));
var next_ident__36333__auto___80138 = om.next.ident.call(null,this__36328__auto__,om.next._next_props.call(null,next_props__36329__auto__,this__36328__auto__));
if(cljs.core.not_EQ_.call(null,ident__36332__auto___80137,next_ident__36333__auto___80138)){
var idxr__36334__auto___80139 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36334__auto___80139 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36334__auto___80139),((function (idxr__36334__auto___80139,ident__36332__auto___80137,next_ident__36333__auto___80138,this__36328__auto__,x80116_80136){
return (function (indexes__36335__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36335__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36332__auto___80137], null),cljs.core.disj,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36333__auto___80138], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36328__auto__);
});})(idxr__36334__auto___80139,ident__36332__auto___80137,next_ident__36333__auto___80138,this__36328__auto__,x80116_80136))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36328__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36328__auto__);
});})(x80116_80136))
;

x80116_80136.shouldComponentUpdate = ((function (x80116_80136){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
var next_children__36331__auto__ = next_props__36329__auto__.children;
var next_props__36329__auto____$1 = goog.object.get(next_props__36329__auto__,"omcljs$value");
var next_props__36329__auto____$2 = (function (){var G__80118 = next_props__36329__auto____$1;
if((next_props__36329__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__80118);
} else {
return G__80118;
}
})();
var or__34227__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36328__auto__),next_props__36329__auto____$2);
if(or__34227__auto__){
return or__34227__auto__;
} else {
var or__34227__auto____$1 = (function (){var and__34215__auto__ = this__36328__auto__.state;
if(cljs.core.truth_(and__34215__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36328__auto__.state,"omcljs$state"),goog.object.get(next_state__36330__auto__,"omcljs$state"));
} else {
return and__34215__auto__;
}
})();
if(cljs.core.truth_(or__34227__auto____$1)){
return or__34227__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36328__auto__.props.children,next_children__36331__auto__);
}
}
});})(x80116_80136))
;

x80116_80136.componentWillUnmount = ((function (x80116_80136){
return (function (){
var this__36328__auto__ = this;
var r__36339__auto__ = om.next.get_reconciler.call(null,this__36328__auto__);
var cfg__36340__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36339__auto__);
var st__36341__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
var indexer__36338__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
if(cljs.core.truth_((function (){var and__34215__auto__ = !((st__36341__auto__ == null));
if(and__34215__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36341__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36328__auto__], null));
} else {
return and__34215__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36341__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36328__auto__);
} else {
}

if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80116_80136))
;

x80116_80136.componentDidUpdate = ((function (x80116_80136){
return (function (prev_props__36336__auto__,prev_state__36337__auto__){
var this__36328__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36328__auto__);
});})(x80116_80136))
;

x80116_80136.isMounted = ((function (x80116_80136){
return (function (){
var this__36328__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36328__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x80116_80136))
;

x80116_80136.componentWillMount = ((function (x80116_80136){
return (function (){
var this__36328__auto__ = this;
var indexer__36338__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80116_80136))
;

x80116_80136.initLocalState = ((function (x80116_80136){
return (function (){
var this$ = this;
var ret__36306__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj80120 = {"omcljs$state":ret__36306__auto__};
return obj80120;
});})(x80116_80136))
;

x80116_80136.render = ((function (x80116_80136){
return (function (){
var this__36327__auto__ = this;
var this$ = this__36327__auto__;
var _STAR_reconciler_STAR_80121 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_80122 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_80123 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_80124 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_80125 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36327__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36327__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36327__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36327__auto__);

om.next._STAR_parent_STAR_ = this__36327__auto__;

try{var map__80126 = om.next.props.call(null,this$);
var map__80126__$1 = ((((!((map__80126 == null)))?((((map__80126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80126):map__80126);
var id = cljs.core.get.call(null,map__80126__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var description = cljs.core.get.call(null,map__80126__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
var votes = cljs.core.get.call(null,map__80126__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var user = cljs.core.get.call(null,map__80126__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__80127 = user;
var map__80127__$1 = ((((!((map__80127 == null)))?((((map__80127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80127):map__80127);
var stake = cljs.core.get.call(null,map__80127__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var has_stake = (stake > (0));
var map__80128 = om.next.get_state.call(null,this$);
var map__80128__$1 = ((((!((map__80128 == null)))?((((map__80128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80128):map__80128);
var dialog = cljs.core.get.call(null,map__80128__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__80129 = dialog;
var map__80129__$1 = ((((!((map__80129 == null)))?((((map__80129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80129):map__80129);
var direction = cljs.core.get.call(null,map__80129__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": "5px", "paddingBottom": "5px", "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),(((direction === (0)))?"Vote down":"Vote Up"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,hide_dialog,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136){
return (function (e){
return hide_dialog.call(null);
});})(map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,hide_dialog,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,hide_dialog,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("item","vote","item/vote",-842849665,null)),(function (){var x__35153__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","items","etherean/items",165918606)))))));
});})(map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,hide_dialog,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136))
], null),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can vote up ",React.DOM.i(null,"one item")," in this list per day, as well as vote down ",React.DOM.i(null,"one item")," in this list per day. These votes will be remembered and automatically applied on subsequent days, until you change your choices (or until your up/down choices fall from the front page) "],null)))),React.DOM.p(null,"So... is this an item currently on the mind of ethereans?")),(function (){var vote_button = ((function (map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,hide_dialog,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136){
return (function (direction__$1,activated){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,hide_dialog,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136){
return (function (e){
if(has_stake){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),(0),new cljs.core.Keyword(null,"up","up",-269712113),(1)], null).call(null,direction__$1)], null));
} else {
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You need to deposit some stake first before voting on items. Please go to the \"Voting Stake\" tab first."}));
}
});})(map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,hide_dialog,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136))
], null));
});})(map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,hide_dialog,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(votes)?ui.core.format_vote_number.call(null,(((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))))):"---")],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false)],null))));
})(),(function (){var item_body = ((function (map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,hide_dialog,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136){
return (function (desc,detail){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__80126,map__80126__$1,id,description,votes,user,map__80127,map__80127__$1,stake,has_stake,map__80128,map__80128__$1,dialog,map__80129,map__80129__$1,direction,hide_dialog,_STAR_reconciler_STAR_80121,_STAR_depth_STAR_80122,_STAR_shared_STAR_80123,_STAR_instrument_STAR_80124,_STAR_parent_STAR_80125,this$,this__36327__auto__,x80116_80136))
;
return item_body.call(null,description,(cljs.core.truth_(votes)?null:ui.core.mining_spinner.call(null)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_80125;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_80124;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_80123;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_80122;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_80121;
}});})(x80116_80136))
;


ui.core.Item.prototype.constructor = ui.core.Item;

ui.core.Item.prototype.constructor.displayName = "ui.core/Item";

ui.core.Item.prototype.om$isComponent = true;

var x80134_80140 = ui.core.Item;
/** @nocollapse */
x80134_80140.om$next$IQuery$ = true;

/** @nocollapse */
x80134_80140.om$next$IQuery$query$arity$1 = ((function (x80134_80140){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x80134_80140))
;


var x80135_80141 = ui.core.Item.prototype;

x80135_80141.om$next$IQuery$ = true;


x80135_80141.om$next$IQuery$query$arity$1 = ((function (x80135_80141){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x80135_80141))
;


ui.core.Item.cljs$lang$type = true;

ui.core.Item.cljs$lang$ctorStr = "ui.core/Item";

ui.core.Item.cljs$lang$ctorPrWriter = (function (this__36486__auto__,writer__36487__auto__,opt__36488__auto__){
return cljs.core._write.call(null,writer__36487__auto__,"ui.core/Item");
});
ui.core.item_component = om.next.factory.call(null,ui.core.Item);
/**
 * @constructor
 */
ui.core.Items = (function ui$core$Items(){
var this__36483__auto__ = this;
React.Component.apply(this__36483__auto__,arguments);

if(!((this__36483__auto__.initLocalState == null))){
this__36483__auto__.state = this__36483__auto__.initLocalState();
} else {
this__36483__auto__.state = {};
}

return this__36483__auto__;
});

ui.core.Items.prototype = goog.object.clone(React.Component.prototype);

var x80146_80160 = ui.core.Items.prototype;
x80146_80160.componentWillUpdate = ((function (x80146_80160){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
if(((!((this__36328__auto__ == null)))?(((false) || (this__36328__auto__.om$next$Ident$))?true:false):false)){
var ident__36332__auto___80161 = om.next.ident.call(null,this__36328__auto__,om.next.props.call(null,this__36328__auto__));
var next_ident__36333__auto___80162 = om.next.ident.call(null,this__36328__auto__,om.next._next_props.call(null,next_props__36329__auto__,this__36328__auto__));
if(cljs.core.not_EQ_.call(null,ident__36332__auto___80161,next_ident__36333__auto___80162)){
var idxr__36334__auto___80163 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36334__auto___80163 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36334__auto___80163),((function (idxr__36334__auto___80163,ident__36332__auto___80161,next_ident__36333__auto___80162,this__36328__auto__,x80146_80160){
return (function (indexes__36335__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36335__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36332__auto___80161], null),cljs.core.disj,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36333__auto___80162], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36328__auto__);
});})(idxr__36334__auto___80163,ident__36332__auto___80161,next_ident__36333__auto___80162,this__36328__auto__,x80146_80160))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36328__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36328__auto__);
});})(x80146_80160))
;

x80146_80160.shouldComponentUpdate = ((function (x80146_80160){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
var next_children__36331__auto__ = next_props__36329__auto__.children;
var next_props__36329__auto____$1 = goog.object.get(next_props__36329__auto__,"omcljs$value");
var next_props__36329__auto____$2 = (function (){var G__80148 = next_props__36329__auto____$1;
if((next_props__36329__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__80148);
} else {
return G__80148;
}
})();
var or__34227__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36328__auto__),next_props__36329__auto____$2);
if(or__34227__auto__){
return or__34227__auto__;
} else {
var or__34227__auto____$1 = (function (){var and__34215__auto__ = this__36328__auto__.state;
if(cljs.core.truth_(and__34215__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36328__auto__.state,"omcljs$state"),goog.object.get(next_state__36330__auto__,"omcljs$state"));
} else {
return and__34215__auto__;
}
})();
if(cljs.core.truth_(or__34227__auto____$1)){
return or__34227__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36328__auto__.props.children,next_children__36331__auto__);
}
}
});})(x80146_80160))
;

x80146_80160.componentWillUnmount = ((function (x80146_80160){
return (function (){
var this__36328__auto__ = this;
var r__36339__auto__ = om.next.get_reconciler.call(null,this__36328__auto__);
var cfg__36340__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36339__auto__);
var st__36341__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
var indexer__36338__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
if(cljs.core.truth_((function (){var and__34215__auto__ = !((st__36341__auto__ == null));
if(and__34215__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36341__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36328__auto__], null));
} else {
return and__34215__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36341__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36328__auto__);
} else {
}

if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80146_80160))
;

x80146_80160.componentDidUpdate = ((function (x80146_80160){
return (function (prev_props__36336__auto__,prev_state__36337__auto__){
var this__36328__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36328__auto__);
});})(x80146_80160))
;

x80146_80160.isMounted = ((function (x80146_80160){
return (function (){
var this__36328__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36328__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x80146_80160))
;

x80146_80160.componentWillMount = ((function (x80146_80160){
return (function (){
var this__36328__auto__ = this;
var indexer__36338__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80146_80160))
;

x80146_80160.render = ((function (x80146_80160){
return (function (){
var this__36327__auto__ = this;
var this$ = this__36327__auto__;
var _STAR_reconciler_STAR_80149 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_80150 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_80151 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_80152 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_80153 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36327__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36327__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36327__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36327__auto__);

om.next._STAR_parent_STAR_ = this__36327__auto__;

try{return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.9})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__35081__auto__ = ((function (_STAR_reconciler_STAR_80149,_STAR_depth_STAR_80150,_STAR_shared_STAR_80151,_STAR_instrument_STAR_80152,_STAR_parent_STAR_80153,this$,this__36327__auto__,x80146_80160){
return (function ui$core$iter__80154(s__80155){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_80149,_STAR_depth_STAR_80150,_STAR_shared_STAR_80151,_STAR_instrument_STAR_80152,_STAR_parent_STAR_80153,this$,this__36327__auto__,x80146_80160){
return (function (){
var s__80155__$1 = s__80155;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80155__$1);
if(temp__6728__auto__){
var s__80155__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80155__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80155__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80157 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80156 = (0);
while(true){
if((i__80156 < size__35080__auto__)){
var item = cljs.core._nth.call(null,c__35079__auto__,i__80156);
cljs.core.chunk_append.call(null,b__80157,ui.core.item_component.call(null,item));

var G__80164 = (i__80156 + (1));
i__80156 = G__80164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80157),ui$core$iter__80154.call(null,cljs.core.chunk_rest.call(null,s__80155__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80157),null);
}
} else {
var item = cljs.core.first.call(null,s__80155__$2);
return cljs.core.cons.call(null,ui.core.item_component.call(null,item),ui$core$iter__80154.call(null,cljs.core.rest.call(null,s__80155__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_80149,_STAR_depth_STAR_80150,_STAR_shared_STAR_80151,_STAR_instrument_STAR_80152,_STAR_parent_STAR_80153,this$,this__36327__auto__,x80146_80160))
,null,null));
});})(_STAR_reconciler_STAR_80149,_STAR_depth_STAR_80150,_STAR_shared_STAR_80151,_STAR_instrument_STAR_80152,_STAR_parent_STAR_80153,this$,this__36327__auto__,x80146_80160))
;
return iter__35081__auto__.call(null,new cljs.core.Keyword("etherean","items","etherean/items",165918606).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_80153;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_80152;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_80151;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_80150;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_80149;
}});})(x80146_80160))
;


ui.core.Items.prototype.constructor = ui.core.Items;

ui.core.Items.prototype.constructor.displayName = "ui.core/Items";

ui.core.Items.prototype.om$isComponent = true;

var x80158_80165 = ui.core.Items;
/** @nocollapse */
x80158_80165.om$next$IQuery$ = true;

/** @nocollapse */
x80158_80165.om$next$IQuery$query$arity$1 = ((function (x80158_80165){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x80158_80165))
;


var x80159_80166 = ui.core.Items.prototype;

x80159_80166.om$next$IQuery$ = true;


x80159_80166.om$next$IQuery$query$arity$1 = ((function (x80159_80166){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x80159_80166))
;


ui.core.Items.cljs$lang$type = true;

ui.core.Items.cljs$lang$ctorStr = "ui.core/Items";

ui.core.Items.cljs$lang$ctorPrWriter = (function (this__36486__auto__,writer__36487__auto__,opt__36488__auto__){
return cljs.core._write.call(null,writer__36487__auto__,"ui.core/Items");
});
ui.core.items_component = om.next.factory.call(null,ui.core.Items);
/**
 * @constructor
 */
ui.core.Proposal = (function ui$core$Proposal(){
var this__36483__auto__ = this;
React.Component.apply(this__36483__auto__,arguments);

if(!((this__36483__auto__.initLocalState == null))){
this__36483__auto__.state = this__36483__auto__.initLocalState();
} else {
this__36483__auto__.state = {};
}

return this__36483__auto__;
});

ui.core.Proposal.prototype = goog.object.clone(React.Component.prototype);

var x80171_80191 = ui.core.Proposal.prototype;
x80171_80191.componentWillUpdate = ((function (x80171_80191){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
if(((!((this__36328__auto__ == null)))?(((false) || (this__36328__auto__.om$next$Ident$))?true:false):false)){
var ident__36332__auto___80192 = om.next.ident.call(null,this__36328__auto__,om.next.props.call(null,this__36328__auto__));
var next_ident__36333__auto___80193 = om.next.ident.call(null,this__36328__auto__,om.next._next_props.call(null,next_props__36329__auto__,this__36328__auto__));
if(cljs.core.not_EQ_.call(null,ident__36332__auto___80192,next_ident__36333__auto___80193)){
var idxr__36334__auto___80194 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36334__auto___80194 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36334__auto___80194),((function (idxr__36334__auto___80194,ident__36332__auto___80192,next_ident__36333__auto___80193,this__36328__auto__,x80171_80191){
return (function (indexes__36335__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36335__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36332__auto___80192], null),cljs.core.disj,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36333__auto___80193], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36328__auto__);
});})(idxr__36334__auto___80194,ident__36332__auto___80192,next_ident__36333__auto___80193,this__36328__auto__,x80171_80191))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36328__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36328__auto__);
});})(x80171_80191))
;

x80171_80191.shouldComponentUpdate = ((function (x80171_80191){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
var next_children__36331__auto__ = next_props__36329__auto__.children;
var next_props__36329__auto____$1 = goog.object.get(next_props__36329__auto__,"omcljs$value");
var next_props__36329__auto____$2 = (function (){var G__80173 = next_props__36329__auto____$1;
if((next_props__36329__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__80173);
} else {
return G__80173;
}
})();
var or__34227__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36328__auto__),next_props__36329__auto____$2);
if(or__34227__auto__){
return or__34227__auto__;
} else {
var or__34227__auto____$1 = (function (){var and__34215__auto__ = this__36328__auto__.state;
if(cljs.core.truth_(and__34215__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36328__auto__.state,"omcljs$state"),goog.object.get(next_state__36330__auto__,"omcljs$state"));
} else {
return and__34215__auto__;
}
})();
if(cljs.core.truth_(or__34227__auto____$1)){
return or__34227__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36328__auto__.props.children,next_children__36331__auto__);
}
}
});})(x80171_80191))
;

x80171_80191.componentWillUnmount = ((function (x80171_80191){
return (function (){
var this__36328__auto__ = this;
var r__36339__auto__ = om.next.get_reconciler.call(null,this__36328__auto__);
var cfg__36340__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36339__auto__);
var st__36341__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
var indexer__36338__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
if(cljs.core.truth_((function (){var and__34215__auto__ = !((st__36341__auto__ == null));
if(and__34215__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36341__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36328__auto__], null));
} else {
return and__34215__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36341__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36328__auto__);
} else {
}

if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80171_80191))
;

x80171_80191.componentDidUpdate = ((function (x80171_80191){
return (function (prev_props__36336__auto__,prev_state__36337__auto__){
var this__36328__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36328__auto__);
});})(x80171_80191))
;

x80171_80191.isMounted = ((function (x80171_80191){
return (function (){
var this__36328__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36328__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x80171_80191))
;

x80171_80191.componentWillMount = ((function (x80171_80191){
return (function (){
var this__36328__auto__ = this;
var indexer__36338__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80171_80191))
;

x80171_80191.initLocalState = ((function (x80171_80191){
return (function (){
var this$ = this;
var ret__36306__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),"",new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj80175 = {"omcljs$state":ret__36306__auto__};
return obj80175;
});})(x80171_80191))
;

x80171_80191.render = ((function (x80171_80191){
return (function (){
var this__36327__auto__ = this;
var this$ = this__36327__auto__;
var _STAR_reconciler_STAR_80176 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_80177 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_80178 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_80179 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_80180 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36327__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36327__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36327__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36327__auto__);

om.next._STAR_parent_STAR_ = this__36327__auto__;

try{var map__80181 = om.next.props.call(null,this$);
var map__80181__$1 = ((((!((map__80181 == null)))?((((map__80181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80181):map__80181);
var description = cljs.core.get.call(null,map__80181__$1,new cljs.core.Keyword("proposal","description","proposal/description",1644720226));
var id = cljs.core.get.call(null,map__80181__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var unsaved = cljs.core.get.call(null,map__80181__$1,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935));
var upvotes = cljs.core.get.call(null,map__80181__$1,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560));
var downvotes = cljs.core.get.call(null,map__80181__$1,new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132));
var user = cljs.core.get.call(null,map__80181__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__80182 = user;
var map__80182__$1 = ((((!((map__80182 == null)))?((((map__80182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80182):map__80182);
var can_vote_proposal = cljs.core.get.call(null,map__80182__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__80182__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var temporary = om.next.tempid_QMARK_.call(null,id);
var has_stake = (stake > (0));
var map__80183 = om.next.get_state.call(null,this$);
var map__80183__$1 = ((((!((map__80183 == null)))?((((map__80183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80183):map__80183);
var height = cljs.core.get.call(null,map__80183__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var dialog = cljs.core.get.call(null,map__80183__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__80184 = dialog;
var map__80184__$1 = ((((!((map__80184 == null)))?((((map__80184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80184):map__80184);
var direction = cljs.core.get.call(null,map__80184__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191))
;
return om_tools.dom.element.call(null,React.DOM.div,blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113)))?"Vote Up":"Vote Down"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191){
return (function (e){
return hide_dialog.call(null);
});})(map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null)),(function (){var x__35153__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
});})(map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191))
], null),"You can vote on one proposal per day. Is this an item currently on the mind of ethereans, that deserves to be listed on the front page?"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(unsaved)?(0):(1))], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),ui.motion.spring.call(null,height)], null)], null),((function (map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191){
return (function (value){
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingBottom": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var vote_button = ((function (map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191){
return (function (direction__$1,activated,disabled){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191){
return (function (e){
if(cljs.core.truth_((function (){var and__34215__auto__ = has_stake;
if(and__34215__auto__){
return can_vote_proposal;
} else {
return and__34215__auto__;
}
})())){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),direction__$1], null));
} else {
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": ((has_stake)?"You already voted on a proposal today. You will need to wait until tomorrow to vote again.":"Please deposit stake first in the stake tab to vote on proposals.")}));
}
});})(map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191))
], null));
});})(map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false,unsaved),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(unsaved)?null:(cljs.core.truth_(upvotes)?ui.core.format_vote_number.call(null,(upvotes - downvotes)):"---"
))],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false,unsaved)],null))));
})(),(function (){var proposal_body = ((function (map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191){
return (function (desc,detail,disabled){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)}), "onClick": om_tools.dom.format_opts.call(null,((function (map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191){
return (function (){
if(cljs.core.truth_(disabled)){
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You have not staked any funds yet. Please got to the \"Voting Stakes\" tab first."}));
} else {
return null;
}
});})(map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191))
)}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191))
;
if(cljs.core.truth_(unsaved)){
var temp_description = new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
var has_description = cljs.core.seq.call(null,temp_description);
var save_fn = ((function (temp_description,has_description,proposal_body,map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191){
return (function (){
if(has_description){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","save","proposal/save",356239610,null)),(function (){var x__35153__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),(function (){var x__35153__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__35153__auto__ = temp_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
} else {
return null;
}
});})(temp_description,has_description,proposal_body,map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191))
;
return proposal_body.call(null,blueprint_cljs.core.editable_text.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),((!(has_stake))?"... (Please deposit stake first to propose an item)":((cljs.core.not.call(null,can_vote_proposal))?"... (Today's proposal action already used up)":"... propose a new item!"
)),new cljs.core.Keyword(null,"value","value",305978217),temp_description,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(has_stake)) || (cljs.core.not.call(null,can_vote_proposal)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp_description,has_description,save_fn,proposal_body,map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191){
return (function (s){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),s);
});})(temp_description,has_description,save_fn,proposal_body,map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191))
], null)),((has_description)?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary pt-icon-plus pt-minimal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_fn], null),"Save"):null),!(has_stake));
} else {
return proposal_body.call(null,description,(((temporary) || (cljs.core.not.call(null,upvotes)))?ui.core.mining_spinner.call(null):null),false);
}
})()],null))));
});})(map__80181,map__80181__$1,description,id,unsaved,upvotes,downvotes,user,map__80182,map__80182__$1,can_vote_proposal,stake,temporary,has_stake,map__80183,map__80183__$1,height,dialog,map__80184,map__80184__$1,direction,hide_dialog,_STAR_reconciler_STAR_80176,_STAR_depth_STAR_80177,_STAR_shared_STAR_80178,_STAR_instrument_STAR_80179,_STAR_parent_STAR_80180,this$,this__36327__auto__,x80171_80191))
)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_80180;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_80179;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_80178;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_80177;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_80176;
}});})(x80171_80191))
;


ui.core.Proposal.prototype.constructor = ui.core.Proposal;

ui.core.Proposal.prototype.constructor.displayName = "ui.core/Proposal";

ui.core.Proposal.prototype.om$isComponent = true;

var x80189_80195 = ui.core.Proposal;
/** @nocollapse */
x80189_80195.om$next$IQuery$ = true;

/** @nocollapse */
x80189_80195.om$next$IQuery$query$arity$1 = ((function (x80189_80195){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x80189_80195))
;


var x80190_80196 = ui.core.Proposal.prototype;

x80190_80196.om$next$IQuery$ = true;


x80190_80196.om$next$IQuery$query$arity$1 = ((function (x80190_80196){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x80190_80196))
;


ui.core.Proposal.cljs$lang$type = true;

ui.core.Proposal.cljs$lang$ctorStr = "ui.core/Proposal";

ui.core.Proposal.cljs$lang$ctorPrWriter = (function (this__36486__auto__,writer__36487__auto__,opt__36488__auto__){
return cljs.core._write.call(null,writer__36487__auto__,"ui.core/Proposal");
});
ui.core.proposal_component = om.next.factory.call(null,ui.core.Proposal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
/**
 * @constructor
 */
ui.core.Proposals = (function ui$core$Proposals(){
var this__36483__auto__ = this;
React.Component.apply(this__36483__auto__,arguments);

if(!((this__36483__auto__.initLocalState == null))){
this__36483__auto__.state = this__36483__auto__.initLocalState();
} else {
this__36483__auto__.state = {};
}

return this__36483__auto__;
});

ui.core.Proposals.prototype = goog.object.clone(React.Component.prototype);

var x80201_80215 = ui.core.Proposals.prototype;
x80201_80215.componentWillUpdate = ((function (x80201_80215){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
if(((!((this__36328__auto__ == null)))?(((false) || (this__36328__auto__.om$next$Ident$))?true:false):false)){
var ident__36332__auto___80216 = om.next.ident.call(null,this__36328__auto__,om.next.props.call(null,this__36328__auto__));
var next_ident__36333__auto___80217 = om.next.ident.call(null,this__36328__auto__,om.next._next_props.call(null,next_props__36329__auto__,this__36328__auto__));
if(cljs.core.not_EQ_.call(null,ident__36332__auto___80216,next_ident__36333__auto___80217)){
var idxr__36334__auto___80218 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36334__auto___80218 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36334__auto___80218),((function (idxr__36334__auto___80218,ident__36332__auto___80216,next_ident__36333__auto___80217,this__36328__auto__,x80201_80215){
return (function (indexes__36335__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36335__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36332__auto___80216], null),cljs.core.disj,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36333__auto___80217], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36328__auto__);
});})(idxr__36334__auto___80218,ident__36332__auto___80216,next_ident__36333__auto___80217,this__36328__auto__,x80201_80215))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36328__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36328__auto__);
});})(x80201_80215))
;

x80201_80215.shouldComponentUpdate = ((function (x80201_80215){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
var next_children__36331__auto__ = next_props__36329__auto__.children;
var next_props__36329__auto____$1 = goog.object.get(next_props__36329__auto__,"omcljs$value");
var next_props__36329__auto____$2 = (function (){var G__80203 = next_props__36329__auto____$1;
if((next_props__36329__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__80203);
} else {
return G__80203;
}
})();
var or__34227__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36328__auto__),next_props__36329__auto____$2);
if(or__34227__auto__){
return or__34227__auto__;
} else {
var or__34227__auto____$1 = (function (){var and__34215__auto__ = this__36328__auto__.state;
if(cljs.core.truth_(and__34215__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36328__auto__.state,"omcljs$state"),goog.object.get(next_state__36330__auto__,"omcljs$state"));
} else {
return and__34215__auto__;
}
})();
if(cljs.core.truth_(or__34227__auto____$1)){
return or__34227__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36328__auto__.props.children,next_children__36331__auto__);
}
}
});})(x80201_80215))
;

x80201_80215.componentWillUnmount = ((function (x80201_80215){
return (function (){
var this__36328__auto__ = this;
var r__36339__auto__ = om.next.get_reconciler.call(null,this__36328__auto__);
var cfg__36340__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36339__auto__);
var st__36341__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
var indexer__36338__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
if(cljs.core.truth_((function (){var and__34215__auto__ = !((st__36341__auto__ == null));
if(and__34215__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36341__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36328__auto__], null));
} else {
return and__34215__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36341__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36328__auto__);
} else {
}

if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80201_80215))
;

x80201_80215.componentDidUpdate = ((function (x80201_80215){
return (function (prev_props__36336__auto__,prev_state__36337__auto__){
var this__36328__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36328__auto__);
});})(x80201_80215))
;

x80201_80215.isMounted = ((function (x80201_80215){
return (function (){
var this__36328__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36328__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x80201_80215))
;

x80201_80215.componentWillMount = ((function (x80201_80215){
return (function (){
var this__36328__auto__ = this;
var indexer__36338__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80201_80215))
;

x80201_80215.render = ((function (x80201_80215){
return (function (){
var this__36327__auto__ = this;
var this$ = this__36327__auto__;
var _STAR_reconciler_STAR_80204 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_80205 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_80206 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_80207 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_80208 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36327__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36327__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36327__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36327__auto__);

om.next._STAR_parent_STAR_ = this__36327__auto__;

try{return om_tools.dom.element.call(null,React.DOM.div,(function (){var iter__35081__auto__ = ((function (_STAR_reconciler_STAR_80204,_STAR_depth_STAR_80205,_STAR_shared_STAR_80206,_STAR_instrument_STAR_80207,_STAR_parent_STAR_80208,this$,this__36327__auto__,x80201_80215){
return (function ui$core$iter__80209(s__80210){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_80204,_STAR_depth_STAR_80205,_STAR_shared_STAR_80206,_STAR_instrument_STAR_80207,_STAR_parent_STAR_80208,this$,this__36327__auto__,x80201_80215){
return (function (){
var s__80210__$1 = s__80210;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80210__$1);
if(temp__6728__auto__){
var s__80210__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80210__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80210__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80212 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80211 = (0);
while(true){
if((i__80211 < size__35080__auto__)){
var proposal = cljs.core._nth.call(null,c__35079__auto__,i__80211);
cljs.core.chunk_append.call(null,b__80212,ui.core.proposal_component.call(null,proposal));

var G__80219 = (i__80211 + (1));
i__80211 = G__80219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80212),ui$core$iter__80209.call(null,cljs.core.chunk_rest.call(null,s__80210__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80212),null);
}
} else {
var proposal = cljs.core.first.call(null,s__80210__$2);
return cljs.core.cons.call(null,ui.core.proposal_component.call(null,proposal),ui$core$iter__80209.call(null,cljs.core.rest.call(null,s__80210__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_80204,_STAR_depth_STAR_80205,_STAR_shared_STAR_80206,_STAR_instrument_STAR_80207,_STAR_parent_STAR_80208,this$,this__36327__auto__,x80201_80215))
,null,null));
});})(_STAR_reconciler_STAR_80204,_STAR_depth_STAR_80205,_STAR_shared_STAR_80206,_STAR_instrument_STAR_80207,_STAR_parent_STAR_80208,this$,this__36327__auto__,x80201_80215))
;
return iter__35081__auto__.call(null,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})(),cljs.core.PersistentVector.EMPTY);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_80208;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_80207;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_80206;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_80205;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_80204;
}});})(x80201_80215))
;


ui.core.Proposals.prototype.constructor = ui.core.Proposals;

ui.core.Proposals.prototype.constructor.displayName = "ui.core/Proposals";

ui.core.Proposals.prototype.om$isComponent = true;

var x80213_80220 = ui.core.Proposals;
/** @nocollapse */
x80213_80220.om$next$IQuery$ = true;

/** @nocollapse */
x80213_80220.om$next$IQuery$query$arity$1 = ((function (x80213_80220){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x80213_80220))
;


var x80214_80221 = ui.core.Proposals.prototype;

x80214_80221.om$next$IQuery$ = true;


x80214_80221.om$next$IQuery$query$arity$1 = ((function (x80214_80221){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x80214_80221))
;


ui.core.Proposals.cljs$lang$type = true;

ui.core.Proposals.cljs$lang$ctorStr = "ui.core/Proposals";

ui.core.Proposals.cljs$lang$ctorPrWriter = (function (this__36486__auto__,writer__36487__auto__,opt__36488__auto__){
return cljs.core._write.call(null,writer__36487__auto__,"ui.core/Proposals");
});
ui.core.proposals_component = om.next.factory.call(null,ui.core.Proposals);
/**
 * @constructor
 */
ui.core.Stake = (function ui$core$Stake(){
var this__36483__auto__ = this;
React.Component.apply(this__36483__auto__,arguments);

if(!((this__36483__auto__.initLocalState == null))){
this__36483__auto__.state = this__36483__auto__.initLocalState();
} else {
this__36483__auto__.state = {};
}

return this__36483__auto__;
});

ui.core.Stake.prototype = goog.object.clone(React.Component.prototype);

var x80226_80238 = ui.core.Stake.prototype;
x80226_80238.componentWillUpdate = ((function (x80226_80238){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
if(((!((this__36328__auto__ == null)))?(((false) || (this__36328__auto__.om$next$Ident$))?true:false):false)){
var ident__36332__auto___80239 = om.next.ident.call(null,this__36328__auto__,om.next.props.call(null,this__36328__auto__));
var next_ident__36333__auto___80240 = om.next.ident.call(null,this__36328__auto__,om.next._next_props.call(null,next_props__36329__auto__,this__36328__auto__));
if(cljs.core.not_EQ_.call(null,ident__36332__auto___80239,next_ident__36333__auto___80240)){
var idxr__36334__auto___80241 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36334__auto___80241 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36334__auto___80241),((function (idxr__36334__auto___80241,ident__36332__auto___80239,next_ident__36333__auto___80240,this__36328__auto__,x80226_80238){
return (function (indexes__36335__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36335__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36332__auto___80239], null),cljs.core.disj,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36333__auto___80240], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36328__auto__);
});})(idxr__36334__auto___80241,ident__36332__auto___80239,next_ident__36333__auto___80240,this__36328__auto__,x80226_80238))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36328__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36328__auto__);
});})(x80226_80238))
;

x80226_80238.shouldComponentUpdate = ((function (x80226_80238){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
var next_children__36331__auto__ = next_props__36329__auto__.children;
var next_props__36329__auto____$1 = goog.object.get(next_props__36329__auto__,"omcljs$value");
var next_props__36329__auto____$2 = (function (){var G__80228 = next_props__36329__auto____$1;
if((next_props__36329__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__80228);
} else {
return G__80228;
}
})();
var or__34227__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36328__auto__),next_props__36329__auto____$2);
if(or__34227__auto__){
return or__34227__auto__;
} else {
var or__34227__auto____$1 = (function (){var and__34215__auto__ = this__36328__auto__.state;
if(cljs.core.truth_(and__34215__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36328__auto__.state,"omcljs$state"),goog.object.get(next_state__36330__auto__,"omcljs$state"));
} else {
return and__34215__auto__;
}
})();
if(cljs.core.truth_(or__34227__auto____$1)){
return or__34227__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36328__auto__.props.children,next_children__36331__auto__);
}
}
});})(x80226_80238))
;

x80226_80238.componentWillUnmount = ((function (x80226_80238){
return (function (){
var this__36328__auto__ = this;
var r__36339__auto__ = om.next.get_reconciler.call(null,this__36328__auto__);
var cfg__36340__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36339__auto__);
var st__36341__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
var indexer__36338__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
if(cljs.core.truth_((function (){var and__34215__auto__ = !((st__36341__auto__ == null));
if(and__34215__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36341__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36328__auto__], null));
} else {
return and__34215__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36341__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36328__auto__);
} else {
}

if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80226_80238))
;

x80226_80238.componentDidUpdate = ((function (x80226_80238){
return (function (prev_props__36336__auto__,prev_state__36337__auto__){
var this__36328__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36328__auto__);
});})(x80226_80238))
;

x80226_80238.isMounted = ((function (x80226_80238){
return (function (){
var this__36328__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36328__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x80226_80238))
;

x80226_80238.componentWillMount = ((function (x80226_80238){
return (function (){
var this__36328__auto__ = this;
var indexer__36338__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80226_80238))
;

x80226_80238.render = ((function (x80226_80238){
return (function (){
var this__36327__auto__ = this;
var this$ = this__36327__auto__;
var _STAR_reconciler_STAR_80229 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_80230 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_80231 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_80232 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_80233 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36327__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36327__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36327__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36327__auto__);

om.next._STAR_parent_STAR_ = this__36327__auto__;

try{var map__80234 = om.next.props.call(null,this$);
var map__80234__$1 = ((((!((map__80234 == null)))?((((map__80234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80234):map__80234);
var id = cljs.core.get.call(null,map__80234__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var value = cljs.core.get.call(null,map__80234__$1,new cljs.core.Keyword("stake","value","stake/value",466231031));
return om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,id,cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,value,cljs.core.PersistentVector.EMPTY)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_80233;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_80232;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_80231;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_80230;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_80229;
}});})(x80226_80238))
;


ui.core.Stake.prototype.constructor = ui.core.Stake;

ui.core.Stake.prototype.constructor.displayName = "ui.core/Stake";

ui.core.Stake.prototype.om$isComponent = true;

var x80236_80242 = ui.core.Stake;
/** @nocollapse */
x80236_80242.om$next$IQuery$ = true;

/** @nocollapse */
x80236_80242.om$next$IQuery$query$arity$1 = ((function (x80236_80242){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x80236_80242))
;


var x80237_80243 = ui.core.Stake.prototype;

x80237_80243.om$next$IQuery$ = true;


x80237_80243.om$next$IQuery$query$arity$1 = ((function (x80237_80243){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x80237_80243))
;


ui.core.Stake.cljs$lang$type = true;

ui.core.Stake.cljs$lang$ctorStr = "ui.core/Stake";

ui.core.Stake.cljs$lang$ctorPrWriter = (function (this__36486__auto__,writer__36487__auto__,opt__36488__auto__){
return cljs.core._write.call(null,writer__36487__auto__,"ui.core/Stake");
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
var this__36483__auto__ = this;
React.Component.apply(this__36483__auto__,arguments);

if(!((this__36483__auto__.initLocalState == null))){
this__36483__auto__.state = this__36483__auto__.initLocalState();
} else {
this__36483__auto__.state = {};
}

return this__36483__auto__;
});

ui.core.Stakes.prototype = goog.object.clone(React.Component.prototype);

var x80248_80268 = ui.core.Stakes.prototype;
x80248_80268.componentWillUpdate = ((function (x80248_80268){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
if(((!((this__36328__auto__ == null)))?(((false) || (this__36328__auto__.om$next$Ident$))?true:false):false)){
var ident__36332__auto___80269 = om.next.ident.call(null,this__36328__auto__,om.next.props.call(null,this__36328__auto__));
var next_ident__36333__auto___80270 = om.next.ident.call(null,this__36328__auto__,om.next._next_props.call(null,next_props__36329__auto__,this__36328__auto__));
if(cljs.core.not_EQ_.call(null,ident__36332__auto___80269,next_ident__36333__auto___80270)){
var idxr__36334__auto___80271 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36334__auto___80271 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36334__auto___80271),((function (idxr__36334__auto___80271,ident__36332__auto___80269,next_ident__36333__auto___80270,this__36328__auto__,x80248_80268){
return (function (indexes__36335__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36335__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36332__auto___80269], null),cljs.core.disj,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36333__auto___80270], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36328__auto__);
});})(idxr__36334__auto___80271,ident__36332__auto___80269,next_ident__36333__auto___80270,this__36328__auto__,x80248_80268))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36328__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36328__auto__);
});})(x80248_80268))
;

x80248_80268.shouldComponentUpdate = ((function (x80248_80268){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
var next_children__36331__auto__ = next_props__36329__auto__.children;
var next_props__36329__auto____$1 = goog.object.get(next_props__36329__auto__,"omcljs$value");
var next_props__36329__auto____$2 = (function (){var G__80250 = next_props__36329__auto____$1;
if((next_props__36329__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__80250);
} else {
return G__80250;
}
})();
var or__34227__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36328__auto__),next_props__36329__auto____$2);
if(or__34227__auto__){
return or__34227__auto__;
} else {
var or__34227__auto____$1 = (function (){var and__34215__auto__ = this__36328__auto__.state;
if(cljs.core.truth_(and__34215__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36328__auto__.state,"omcljs$state"),goog.object.get(next_state__36330__auto__,"omcljs$state"));
} else {
return and__34215__auto__;
}
})();
if(cljs.core.truth_(or__34227__auto____$1)){
return or__34227__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36328__auto__.props.children,next_children__36331__auto__);
}
}
});})(x80248_80268))
;

x80248_80268.componentWillUnmount = ((function (x80248_80268){
return (function (){
var this__36328__auto__ = this;
var r__36339__auto__ = om.next.get_reconciler.call(null,this__36328__auto__);
var cfg__36340__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36339__auto__);
var st__36341__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
var indexer__36338__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36340__auto__);
if(cljs.core.truth_((function (){var and__34215__auto__ = !((st__36341__auto__ == null));
if(and__34215__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36341__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36328__auto__], null));
} else {
return and__34215__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36341__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36328__auto__);
} else {
}

if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80248_80268))
;

x80248_80268.componentDidUpdate = ((function (x80248_80268){
return (function (prev_props__36336__auto__,prev_state__36337__auto__){
var this__36328__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36328__auto__);
});})(x80248_80268))
;

x80248_80268.isMounted = ((function (x80248_80268){
return (function (){
var this__36328__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36328__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x80248_80268))
;

x80248_80268.componentWillMount = ((function (x80248_80268){
return (function (){
var this__36328__auto__ = this;
var indexer__36338__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80248_80268))
;

x80248_80268.initLocalState = ((function (x80248_80268){
return (function (){
var this$ = this;
var ret__36306__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var obj80252 = {"omcljs$state":ret__36306__auto__};
return obj80252;
});})(x80248_80268))
;

x80248_80268.render = ((function (x80248_80268){
return (function (){
var this__36327__auto__ = this;
var this$ = this__36327__auto__;
var _STAR_reconciler_STAR_80253 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_80254 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_80255 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_80256 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_80257 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36327__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36327__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36327__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36327__auto__);

om.next._STAR_parent_STAR_ = this__36327__auto__;

try{var map__80258 = om.next.props.call(null,this$);
var map__80258__$1 = ((((!((map__80258 == null)))?((((map__80258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80258):map__80258);
var stakes = cljs.core.get.call(null,map__80258__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__80258__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__80259 = user;
var map__80259__$1 = ((((!((map__80259 == null)))?((((map__80259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80259):map__80259);
var stake = cljs.core.get.call(null,map__80259__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var address = cljs.core.get.call(null,map__80259__$1,new cljs.core.Keyword("user","address","user/address",573600859));
var balance = cljs.core.get.call(null,map__80259__$1,new cljs.core.Keyword("user","balance","user/balance",422509480));
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.8})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Current Stake"),((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?ui.core.mining_spinner.call(null):cljs.core.apply.call(null,React.DOM.h3,({"style": ({"color": "#2b95d6"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[stake," ETH"],null))))),cljs.core.apply.call(null,React.DOM.span,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["(associated with account ",ui.core.format_address.call(null,address),")"],null)))),(((stake === (0)))?React.DOM.div(({"className": "pt-callout pt-icon-info-sign", "style": ({"marginTop": "0.5rem"})}),"You do not currently have any voting stake for EthereanMind. To be able to vote on proposals and top 10 items, you need to deposit some fully-refundable coins into the EthereanMind staking contract."):null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group", "style": ({"marginTop": "0.5rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__80258,map__80258__$1,stakes,user,map__80259,map__80259__$1,stake,address,balance,_STAR_reconciler_STAR_80253,_STAR_depth_STAR_80254,_STAR_shared_STAR_80255,_STAR_instrument_STAR_80256,_STAR_parent_STAR_80257,this$,this__36327__auto__,x80248_80268){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"value","value",305978217),""], null));
});})(map__80258,map__80258__$1,stakes,user,map__80259,map__80259__$1,stake,address,balance,_STAR_reconciler_STAR_80253,_STAR_depth_STAR_80254,_STAR_shared_STAR_80255,_STAR_instrument_STAR_80256,_STAR_parent_STAR_80257,this$,this__36327__auto__,x80248_80268))
], null),"Deposit Stake"),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__80258,map__80258__$1,stakes,user,map__80259,map__80259__$1,stake,address,balance,_STAR_reconciler_STAR_80253,_STAR_depth_STAR_80254,_STAR_shared_STAR_80255,_STAR_instrument_STAR_80256,_STAR_parent_STAR_80257,this$,this__36327__auto__,x80248_80268){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"withdraw","withdraw",1469652053)], null));
});})(map__80258,map__80258__$1,stakes,user,map__80259,map__80259__$1,stake,address,balance,_STAR_reconciler_STAR_80253,_STAR_depth_STAR_80254,_STAR_shared_STAR_80255,_STAR_instrument_STAR_80256,_STAR_parent_STAR_80257,this$,this__36327__auto__,x80248_80268))
], null),"Withdraw Stake")],null))))],null)))),(function (){var map__80262 = om.next.get_state.call(null,this$);
var map__80262__$1 = ((((!((map__80262 == null)))?((((map__80262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80262):map__80262);
var dialog = cljs.core.get.call(null,map__80262__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__80263 = dialog;
var map__80263__$1 = ((((!((map__80263 == null)))?((((map__80263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80263):map__80263);
var type = cljs.core.get.call(null,map__80263__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__80263__$1,new cljs.core.Keyword(null,"value","value",305978217));
var value_status = ((cljs.core._EQ_.call(null,value,""))?new cljs.core.Keyword(null,"missing","missing",362507769):(((value <= balance))?new cljs.core.Keyword(null,"good","good",511701169):new cljs.core.Keyword(null,"bad","bad",1127186645)
));
var close_dialog = ((function (value_status,map__80262,map__80262__$1,dialog,map__80263,map__80263__$1,type,value,map__80258,map__80258__$1,stakes,user,map__80259,map__80259__$1,stake,address,balance,_STAR_reconciler_STAR_80253,_STAR_depth_STAR_80254,_STAR_shared_STAR_80255,_STAR_instrument_STAR_80256,_STAR_parent_STAR_80257,this$,this__36327__auto__,x80248_80268){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,map__80262,map__80262__$1,dialog,map__80263,map__80263__$1,type,value,map__80258,map__80258__$1,stakes,user,map__80259,map__80259__$1,stake,address,balance,_STAR_reconciler_STAR_80253,_STAR_depth_STAR_80254,_STAR_shared_STAR_80255,_STAR_instrument_STAR_80256,_STAR_parent_STAR_80257,this$,this__36327__auto__,x80248_80268))
;
return blueprint_cljs.core.dialog.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-close","on-close",-761178394),close_dialog,new cljs.core.Keyword(null,"title","title",636505583),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit Stake":"Withdraw Stake")], null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-body"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,"In order to vote on ethereanmind you need to place a refundable deposit of ether. You will be able to start voting immediately after depositing ether, but you need to wait a month before you can withdraw your deposit again."),om_tools.dom.element.call(null,React.DOM.p,React.DOM.b(null,"The rules of the smart contract assure that no one else can withdraw your money and that you will receive back 100% of your deposit."),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Balance available: ",balance," Ether"],null)))),blueprint_cljs.core.input_group.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Deposit Amount (Ether)",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"right-element","right-element",-375920256),((cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"missing","missing",362507769)))?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)))?"pt-icon-tick pt-intent-success":"pt-icon-cross pt-intent-danger")], null)):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value_status,close_dialog,map__80262,map__80262__$1,dialog,map__80263,map__80263__$1,type,value,map__80258,map__80258__$1,stakes,user,map__80259,map__80259__$1,stake,address,balance,_STAR_reconciler_STAR_80253,_STAR_depth_STAR_80254,_STAR_shared_STAR_80255,_STAR_instrument_STAR_80256,_STAR_parent_STAR_80257,this$,this__36327__auto__,x80248_80268){
return (function (e){
var value_new = e.target.value;
if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]*\.?[0-9]*/,value_new))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value_new);
} else {
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value);
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noise","noise",-994696820)], null),cljs.core.rand_int.call(null,(1000000)));
});})(value_status,close_dialog,map__80262,map__80262__$1,dialog,map__80263,map__80263__$1,type,value,map__80258,map__80258__$1,stakes,user,map__80259,map__80259__$1,stake,address,balance,_STAR_reconciler_STAR_80253,_STAR_depth_STAR_80254,_STAR_shared_STAR_80255,_STAR_instrument_STAR_80256,_STAR_parent_STAR_80257,this$,this__36327__auto__,x80248_80268))
], null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can now withdraw all of your stake (Currently ",stake," Ether) back into your regular ethereum account at [",ui.core.format_address.call(null,address),"]. At that point, you will no longer be able to participate in voting- You'll need to deposit new funds to vote again."],null))))], null))],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer-actions"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)),new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_status,close_dialog,map__80262,map__80262__$1,dialog,map__80263,map__80263__$1,type,value,map__80258,map__80258__$1,stakes,user,map__80259,map__80259__$1,stake,address,balance,_STAR_reconciler_STAR_80253,_STAR_depth_STAR_80254,_STAR_shared_STAR_80255,_STAR_instrument_STAR_80256,_STAR_parent_STAR_80257,this$,this__36327__auto__,x80248_80268){
return (function (e){
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851))){
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null)),(function (){var x__35153__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__35153__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339)))))));
} else {
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","withdraw","user/withdraw",-1187344809,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339)))))));
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,close_dialog,map__80262,map__80262__$1,dialog,map__80263,map__80263__$1,type,value,map__80258,map__80258__$1,stakes,user,map__80259,map__80259__$1,stake,address,balance,_STAR_reconciler_STAR_80253,_STAR_depth_STAR_80254,_STAR_shared_STAR_80255,_STAR_instrument_STAR_80256,_STAR_parent_STAR_80257,this$,this__36327__auto__,x80248_80268))
], null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit":"Withdraw")),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_dialog], null),"Cancel")],null))))],null)))));
})(),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"marginTop": "1rem", "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Staking Statistics"),React.DOM.div(null,"If you're curious about who else is using this dapp, and are using an ethereum data source that can handle large queres, click this button:"),cljs.core.apply.call(null,React.DOM.p,({"style": ({"margin": "1em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.i(null,"(Coming Soon...)")],null))))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_80257;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_80256;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_80255;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_80254;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_80253;
}});})(x80248_80268))
;


ui.core.Stakes.prototype.constructor = ui.core.Stakes;

ui.core.Stakes.prototype.constructor.displayName = "ui.core/Stakes";

ui.core.Stakes.prototype.om$isComponent = true;

var x80266_80272 = ui.core.Stakes;
/** @nocollapse */
x80266_80272.om$next$IQuery$ = true;

/** @nocollapse */
x80266_80272.om$next$IQuery$query$arity$1 = ((function (x80266_80272){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x80266_80272))
;


var x80267_80273 = ui.core.Stakes.prototype;

x80267_80273.om$next$IQuery$ = true;


x80267_80273.om$next$IQuery$query$arity$1 = ((function (x80267_80273){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x80267_80273))
;


ui.core.Stakes.cljs$lang$type = true;

ui.core.Stakes.cljs$lang$ctorStr = "ui.core/Stakes";

ui.core.Stakes.cljs$lang$ctorPrWriter = (function (this__36486__auto__,writer__36487__auto__,opt__36488__auto__){
return cljs.core._write.call(null,writer__36487__auto__,"ui.core/Stakes");
});
ui.core.stakes_component = om.next.factory.call(null,ui.core.Stakes);
ui.core.canvas_resolution = (800);
ui.core.brain_prerender = (function ui$core$brain_prerender(sections){
return new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__80288,item){
var map__80289 = p__80288;
var map__80289__$1 = ((((!((map__80289 == null)))?((((map__80289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80289):map__80289);
var acc = map__80289__$1;
var vertices = cljs.core.get.call(null,map__80289__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var vertex_colors = cljs.core.get.call(null,map__80289__$1,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377));
var index = cljs.core.get.call(null,map__80289__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.call(null,map__80289__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var map__80291 = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"length","length",588987862),(function (){var iter__35081__auto__ = ((function (map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__80292(s__80293){
return (new cljs.core.LazySeq(null,((function (map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__80293__$1 = s__80293;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80293__$1);
if(temp__6728__auto__){
var s__80293__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80293__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80293__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80295 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80294 = (0);
while(true){
if((i__80294 < size__35080__auto__)){
var coord = cljs.core._nth.call(null,c__35079__auto__,i__80294);
cljs.core.chunk_append.call(null,b__80295,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (i__80294,region_size,coord,c__35079__auto__,size__35080__auto__,b__80295,s__80293__$2,temp__6728__auto__,map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__80274_SHARP_){
return cljs.core.nth.call(null,p1__80274_SHARP_,coord);
});})(i__80294,region_size,coord,c__35079__auto__,size__35080__auto__,b__80295,s__80293__$2,temp__6728__auto__,map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})());

var G__80301 = (i__80294 + (1));
i__80294 = G__80301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80295),ui$core$brain_prerender_$_iter__80292.call(null,cljs.core.chunk_rest.call(null,s__80293__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80295),null);
}
} else {
var coord = cljs.core.first.call(null,s__80293__$2);
return cljs.core.cons.call(null,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (region_size,coord,s__80293__$2,temp__6728__auto__,map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__80274_SHARP_){
return cljs.core.nth.call(null,p1__80274_SHARP_,coord);
});})(region_size,coord,s__80293__$2,temp__6728__auto__,map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})(),ui$core$brain_prerender_$_iter__80292.call(null,cljs.core.rest.call(null,s__80293__$2)));
}
} else {
return null;
}
break;
}
});})(map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35081__auto__.call(null,cljs.core.range.call(null,(3)));
})()));
var map__80291__$1 = ((((!((map__80291 == null)))?((((map__80291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80291):map__80291);
var cur_vertices = cljs.core.get.call(null,map__80291__$1,new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716));
var rest_vertices = cljs.core.get.call(null,map__80291__$1,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),rest_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.into.call(null,vertex_colors,(function (){var iter__35081__auto__ = ((function (map__80291,map__80291__$1,cur_vertices,rest_vertices,map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__80297(s__80298){
return (new cljs.core.LazySeq(null,((function (map__80291,map__80291__$1,cur_vertices,rest_vertices,map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__80298__$1 = s__80298;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80298__$1);
if(temp__6728__auto__){
var s__80298__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80298__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80298__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80300 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80299 = (0);
while(true){
if((i__80299 < size__35080__auto__)){
var vertex = cljs.core._nth.call(null,c__35079__auto__,i__80299);
cljs.core.chunk_append.call(null,b__80300,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null));

var G__80302 = (i__80299 + (1));
i__80299 = G__80302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80300),ui$core$brain_prerender_$_iter__80297.call(null,cljs.core.chunk_rest.call(null,s__80298__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80300),null);
}
} else {
var vertex = cljs.core.first.call(null,s__80298__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null),ui$core$brain_prerender_$_iter__80297.call(null,cljs.core.rest.call(null,s__80298__$2)));
}
} else {
return null;
}
break;
}
});})(map__80291,map__80291__$1,cur_vertices,rest_vertices,map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__80291,map__80291__$1,cur_vertices,rest_vertices,map__80289,map__80289__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35081__auto__.call(null,cur_vertices);
})()),new cljs.core.Keyword(null,"index","index",-1531685915),(index + (1)),new cljs.core.Keyword(null,"total","total",1916810418),(total - new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))], null);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),ui.core.brain_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"size","size",1098693007),sections))], null),sections));
});
ui.core.render_graph = (function ui$core$render_graph(brain_faces,vertexes,vertex_colors){
var iter__35081__auto__ = (function ui$core$render_graph_$_iter__80335(s__80336){
return (new cljs.core.LazySeq(null,(function (){
var s__80336__$1 = s__80336;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80336__$1);
if(temp__6728__auto__){
var s__80336__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80336__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80336__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80338 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80337 = (0);
while(true){
if((i__80337 < size__35080__auto__)){
var vec__80353 = cljs.core._nth.call(null,c__35079__auto__,i__80337);
var region = cljs.core.nth.call(null,vec__80353,(0),null);
var faces = cljs.core.nth.call(null,vec__80353,(1),null);
cljs.core.chunk_append.call(null,b__80338,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35081__auto__ = ((function (i__80337,vec__80353,region,faces,c__35079__auto__,size__35080__auto__,b__80338,s__80336__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__80335_$_iter__80356(s__80357){
return (new cljs.core.LazySeq(null,((function (i__80337,vec__80353,region,faces,c__35079__auto__,size__35080__auto__,b__80338,s__80336__$2,temp__6728__auto__){
return (function (){
var s__80357__$1 = s__80357;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__80357__$1);
if(temp__6728__auto____$1){
var s__80357__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80357__$2)){
var c__35079__auto____$1 = cljs.core.chunk_first.call(null,s__80357__$2);
var size__35080__auto____$1 = cljs.core.count.call(null,c__35079__auto____$1);
var b__80359 = cljs.core.chunk_buffer.call(null,size__35080__auto____$1);
if((function (){var i__80358 = (0);
while(true){
if((i__80358 < size__35080__auto____$1)){
var n = cljs.core._nth.call(null,c__35079__auto____$1,i__80358);
cljs.core.chunk_append.call(null,b__80359,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__80358,i__80337,n,c__35079__auto____$1,size__35080__auto____$1,b__80359,s__80357__$2,temp__6728__auto____$1,vec__80353,region,faces,c__35079__auto__,size__35080__auto__,b__80338,s__80336__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__80358,i__80337,n,c__35079__auto____$1,size__35080__auto____$1,b__80359,s__80357__$2,temp__6728__auto____$1,vec__80353,region,faces,c__35079__auto__,size__35080__auto__,b__80338,s__80336__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__80367 = (i__80358 + (1));
i__80358 = G__80367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80359),ui$core$render_graph_$_iter__80335_$_iter__80356.call(null,cljs.core.chunk_rest.call(null,s__80357__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80359),null);
}
} else {
var n = cljs.core.first.call(null,s__80357__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__80337,n,s__80357__$2,temp__6728__auto____$1,vec__80353,region,faces,c__35079__auto__,size__35080__auto__,b__80338,s__80336__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__80337,n,s__80357__$2,temp__6728__auto____$1,vec__80353,region,faces,c__35079__auto__,size__35080__auto__,b__80338,s__80336__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__80335_$_iter__80356.call(null,cljs.core.rest.call(null,s__80357__$2)));
}
} else {
return null;
}
break;
}
});})(i__80337,vec__80353,region,faces,c__35079__auto__,size__35080__auto__,b__80338,s__80336__$2,temp__6728__auto__))
,null,null));
});})(i__80337,vec__80353,region,faces,c__35079__auto__,size__35080__auto__,b__80338,s__80336__$2,temp__6728__auto__))
;
return iter__35081__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (i__80337,dist,max_dist,mult,centroid,vec__80353,region,faces,c__35079__auto__,size__35080__auto__,b__80338,s__80336__$2,temp__6728__auto__){
return (function (y){
var x__34560__auto__ = (function (){var x__34567__auto__ = 0.11;
var y__34568__auto__ = (y * 0.9);
return ((x__34567__auto__ < y__34568__auto__) ? x__34567__auto__ : y__34568__auto__);
})();
var y__34561__auto__ = -0.05;
return ((x__34560__auto__ > y__34561__auto__) ? x__34560__auto__ : y__34561__auto__);
});})(i__80337,dist,max_dist,mult,centroid,vec__80353,region,faces,c__35079__auto__,size__35080__auto__,b__80338,s__80336__$2,temp__6728__auto__))
);
})()], null);
})());

var G__80368 = (i__80337 + (1));
i__80337 = G__80368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80338),ui$core$render_graph_$_iter__80335.call(null,cljs.core.chunk_rest.call(null,s__80336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80338),null);
}
} else {
var vec__80360 = cljs.core.first.call(null,s__80336__$2);
var region = cljs.core.nth.call(null,vec__80360,(0),null);
var faces = cljs.core.nth.call(null,vec__80360,(1),null);
return cljs.core.cons.call(null,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35081__auto__ = ((function (vec__80360,region,faces,s__80336__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__80335_$_iter__80363(s__80364){
return (new cljs.core.LazySeq(null,((function (vec__80360,region,faces,s__80336__$2,temp__6728__auto__){
return (function (){
var s__80364__$1 = s__80364;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__80364__$1);
if(temp__6728__auto____$1){
var s__80364__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80364__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80364__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80366 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80365 = (0);
while(true){
if((i__80365 < size__35080__auto__)){
var n = cljs.core._nth.call(null,c__35079__auto__,i__80365);
cljs.core.chunk_append.call(null,b__80366,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__80365,n,c__35079__auto__,size__35080__auto__,b__80366,s__80364__$2,temp__6728__auto____$1,vec__80360,region,faces,s__80336__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__80365,n,c__35079__auto__,size__35080__auto__,b__80366,s__80364__$2,temp__6728__auto____$1,vec__80360,region,faces,s__80336__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__80369 = (i__80365 + (1));
i__80365 = G__80369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80366),ui$core$render_graph_$_iter__80335_$_iter__80363.call(null,cljs.core.chunk_rest.call(null,s__80364__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80366),null);
}
} else {
var n = cljs.core.first.call(null,s__80364__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (n,s__80364__$2,temp__6728__auto____$1,vec__80360,region,faces,s__80336__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(n,s__80364__$2,temp__6728__auto____$1,vec__80360,region,faces,s__80336__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__80335_$_iter__80363.call(null,cljs.core.rest.call(null,s__80364__$2)));
}
} else {
return null;
}
break;
}
});})(vec__80360,region,faces,s__80336__$2,temp__6728__auto__))
,null,null));
});})(vec__80360,region,faces,s__80336__$2,temp__6728__auto__))
;
return iter__35081__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (dist,max_dist,mult,centroid,vec__80360,region,faces,s__80336__$2,temp__6728__auto__){
return (function (y){
var x__34560__auto__ = (function (){var x__34567__auto__ = 0.11;
var y__34568__auto__ = (y * 0.9);
return ((x__34567__auto__ < y__34568__auto__) ? x__34567__auto__ : y__34568__auto__);
})();
var y__34561__auto__ = -0.05;
return ((x__34560__auto__ > y__34561__auto__) ? x__34560__auto__ : y__34561__auto__);
});})(dist,max_dist,mult,centroid,vec__80360,region,faces,s__80336__$2,temp__6728__auto__))
);
})()], null);
})(),ui$core$render_graph_$_iter__80335.call(null,cljs.core.rest.call(null,s__80336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35081__auto__.call(null,cljs.core.group_by.call(null,((function (iter__35081__auto__){
return (function (k){
return vertex_colors.call(null,vertexes.call(null,cljs.core.first.call(null,k)));
});})(iter__35081__auto__))
,brain_faces));
});
ui.core.region_color = (function ui$core$region_color(index){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.2,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),0.2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),0.2], null)], null).call(null,index);
});
ui.core.point__GT_screen = (function ui$core$point__GT_screen(canvas_resolution,rotation,p__80370){
var vec__80374 = p__80370;
var xx = cljs.core.nth.call(null,vec__80374,(0),null);
var yy = cljs.core.nth.call(null,vec__80374,(1),null);
var zz = cljs.core.nth.call(null,vec__80374,(2),null);
var vertex = vec__80374;
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
var G__80471 = ctx;
G__80471.beginPath();

G__80471.moveTo(vertices.call(null,a).call(null,(0)),vertices.call(null,a).call(null,(1)));

G__80471.lineTo(vertices.call(null,b).call(null,(0)),vertices.call(null,b).call(null,(1)));

G__80471.stroke();

return G__80471;
});})(starting_time,vertices))
;
var rgb = ((function (starting_time,vertices,line){
return (function (color,brightness,opaque){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var iter__35081__auto__ = ((function (starting_time,vertices,line){
return (function ui$core$render_brain_$_iter__80472(s__80473){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line){
return (function (){
var s__80473__$1 = s__80473;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80473__$1);
if(temp__6728__auto__){
var s__80473__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80473__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80473__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80475 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80474 = (0);
while(true){
if((i__80474 < size__35080__auto__)){
var c = cljs.core._nth.call(null,c__35079__auto__,i__80474);
cljs.core.chunk_append.call(null,b__80475,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34567__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34568__auto__ = (255);
return ((x__34567__auto__ < y__34568__auto__) ? x__34567__auto__ : y__34568__auto__);
})()) + (((1) - colored) * (255))) | (0));
})());

var G__80565 = (i__80474 + (1));
i__80474 = G__80565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80475),ui$core$render_brain_$_iter__80472.call(null,cljs.core.chunk_rest.call(null,s__80473__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80475),null);
}
} else {
var c = cljs.core.first.call(null,s__80473__$2);
return cljs.core.cons.call(null,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34567__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34568__auto__ = (255);
return ((x__34567__auto__ < y__34568__auto__) ? x__34567__auto__ : y__34568__auto__);
})()) + (((1) - colored) * (255))) | (0));
})(),ui$core$render_brain_$_iter__80472.call(null,cljs.core.rest.call(null,s__80473__$2)));
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
return iter__35081__auto__.call(null,color);
})()),(cljs.core.truth_(opaque)?((0) + ((1) * new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)))):(0.05 + (0.45 * new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)))))))))].join('');
});})(starting_time,vertices,line))
;
var set_color = ((function (starting_time,vertices,line,rgb){
return (function (color,brightness){
return ctx.strokeStyle = rgb.call(null,color,brightness,false);
});})(starting_time,vertices,line,rgb))
;
var render_text = ((function (starting_time,vertices,line,rgb,set_color){
return (function (p__80476){
var map__80477 = p__80476;
var map__80477__$1 = ((((!((map__80477 == null)))?((((map__80477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80477):map__80477);
var text = cljs.core.get.call(null,map__80477__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var color = cljs.core.get.call(null,map__80477__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var location = cljs.core.get.call(null,map__80477__$1,new cljs.core.Keyword(null,"location","location",1815599388));
if((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)) > (0))){
ctx.lineWidth = (4);

var vec__80479_80566 = location;
var x_80567 = cljs.core.nth.call(null,vec__80479_80566,(0),null);
var y_80568 = cljs.core.nth.call(null,vec__80479_80566,(1),null);
var z_80569 = cljs.core.nth.call(null,vec__80479_80566,(2),null);
ctx.strokeStyle = "#111A22";

ctx.fillStyle = rgb.call(null,color,((z_80569 * (2)) + (1)),true);

cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (vec__80479_80566,x_80567,y_80568,z_80569,map__80477,map__80477__$1,text,color,location,starting_time,vertices,line,rgb,set_color){
return (function (index,s){
var G__80482 = ctx;
G__80482.strokeText(s,x_80567,(y_80568 + (index * (15))));

G__80482.fillText(s,x_80567,(y_80568 + (index * (15))));

return G__80482;
});})(vec__80479_80566,x_80567,y_80568,z_80569,map__80477,map__80477__$1,text,color,location,starting_time,vertices,line,rgb,set_color))
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
,(function (){var iter__35081__auto__ = ((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function ui$core$render_brain_$_iter__80483(s__80484){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (){
var s__80484__$1 = s__80484;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80484__$1);
if(temp__6728__auto__){
var s__80484__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80484__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80484__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80486 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80485 = (0);
while(true){
if((i__80485 < size__35080__auto__)){
var map__80491 = cljs.core._nth.call(null,c__35079__auto__,i__80485);
var map__80491__$1 = ((((!((map__80491 == null)))?((((map__80491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80491):map__80491);
var region = cljs.core.get.call(null,map__80491__$1,new cljs.core.Keyword(null,"region","region",270415120));
var centroid = cljs.core.get.call(null,map__80491__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__80491__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append.call(null,b__80486,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null));

var G__80570 = (i__80485 + (1));
i__80485 = G__80570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80486),ui$core$render_brain_$_iter__80483.call(null,cljs.core.chunk_rest.call(null,s__80484__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80486),null);
}
} else {
var map__80493 = cljs.core.first.call(null,s__80484__$2);
var map__80493__$1 = ((((!((map__80493 == null)))?((((map__80493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80493):map__80493);
var region = cljs.core.get.call(null,map__80493__$1,new cljs.core.Keyword(null,"region","region",270415120));
var centroid = cljs.core.get.call(null,map__80493__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__80493__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null),ui$core$render_brain_$_iter__80483.call(null,cljs.core.rest.call(null,s__80484__$2)));
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
return iter__35081__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"region","region",270415120),render_graph));
})()):null);
var render_labels = ((function (labels,starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (from,to){
var seq__80495 = cljs.core.seq.call(null,labels);
var chunk__80496 = null;
var count__80497 = (0);
var i__80498 = (0);
while(true){
if((i__80498 < count__80497)){
var label = cljs.core._nth.call(null,chunk__80496,i__80498);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__80571 = seq__80495;
var G__80572 = chunk__80496;
var G__80573 = count__80497;
var G__80574 = (i__80498 + (1));
seq__80495 = G__80571;
chunk__80496 = G__80572;
count__80497 = G__80573;
i__80498 = G__80574;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__80495);
if(temp__6728__auto__){
var seq__80495__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80495__$1)){
var c__35130__auto__ = cljs.core.chunk_first.call(null,seq__80495__$1);
var G__80575 = cljs.core.chunk_rest.call(null,seq__80495__$1);
var G__80576 = c__35130__auto__;
var G__80577 = cljs.core.count.call(null,c__35130__auto__);
var G__80578 = (0);
seq__80495 = G__80575;
chunk__80496 = G__80576;
count__80497 = G__80577;
i__80498 = G__80578;
continue;
} else {
var label = cljs.core.first.call(null,seq__80495__$1);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__80579 = cljs.core.next.call(null,seq__80495__$1);
var G__80580 = null;
var G__80581 = (0);
var G__80582 = (0);
seq__80495 = G__80579;
chunk__80496 = G__80580;
count__80497 = G__80581;
i__80498 = G__80582;
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
var seq__80499 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),-0.3,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3,0.3,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,(1000),(2)], null)], null));
var chunk__80500 = null;
var count__80501 = (0);
var i__80502 = (0);
while(true){
if((i__80502 < count__80501)){
var vec__80503 = cljs.core._nth.call(null,chunk__80500,i__80502);
var begin = cljs.core.nth.call(null,vec__80503,(0),null);
var end = cljs.core.nth.call(null,vec__80503,(1),null);
var brightness = cljs.core.nth.call(null,vec__80503,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__80506_80583 = cljs.core.seq.call(null,render_graph);
var chunk__80507_80584 = null;
var count__80508_80585 = (0);
var i__80509_80586 = (0);
while(true){
if((i__80509_80586 < count__80508_80585)){
var map__80510_80587 = cljs.core._nth.call(null,chunk__80507_80584,i__80509_80586);
var map__80510_80588__$1 = ((((!((map__80510_80587 == null)))?((((map__80510_80587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80510_80587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80510_80587):map__80510_80587);
var region_80589 = cljs.core.get.call(null,map__80510_80588__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_80590 = cljs.core.get.call(null,map__80510_80588__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_80591 = cljs.core.get.call(null,map__80510_80588__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_80592 = cljs.core.get.call(null,map__80510_80588__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_80593 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_80589))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_80593,brightness);

var seq__80512_80594 = cljs.core.seq.call(null,faces_80590);
var chunk__80513_80595 = null;
var count__80514_80596 = (0);
var i__80515_80597 = (0);
while(true){
if((i__80515_80597 < count__80514_80596)){
var vec__80516_80598 = cljs.core._nth.call(null,chunk__80513_80595,i__80515_80597);
var a_80599 = cljs.core.nth.call(null,vec__80516_80598,(0),null);
var b_80600 = cljs.core.nth.call(null,vec__80516_80598,(1),null);
var c_80601 = cljs.core.nth.call(null,vec__80516_80598,(2),null);
var face_80602 = vec__80516_80598;
if(((begin < vertices.call(null,a_80599).call(null,(2)))) && ((vertices.call(null,a_80599).call(null,(2)) < end))){
line.call(null,a_80599,b_80600);
} else {
}

var G__80603 = seq__80512_80594;
var G__80604 = chunk__80513_80595;
var G__80605 = count__80514_80596;
var G__80606 = (i__80515_80597 + (1));
seq__80512_80594 = G__80603;
chunk__80513_80595 = G__80604;
count__80514_80596 = G__80605;
i__80515_80597 = G__80606;
continue;
} else {
var temp__6728__auto___80607 = cljs.core.seq.call(null,seq__80512_80594);
if(temp__6728__auto___80607){
var seq__80512_80608__$1 = temp__6728__auto___80607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80512_80608__$1)){
var c__35130__auto___80609 = cljs.core.chunk_first.call(null,seq__80512_80608__$1);
var G__80610 = cljs.core.chunk_rest.call(null,seq__80512_80608__$1);
var G__80611 = c__35130__auto___80609;
var G__80612 = cljs.core.count.call(null,c__35130__auto___80609);
var G__80613 = (0);
seq__80512_80594 = G__80610;
chunk__80513_80595 = G__80611;
count__80514_80596 = G__80612;
i__80515_80597 = G__80613;
continue;
} else {
var vec__80519_80614 = cljs.core.first.call(null,seq__80512_80608__$1);
var a_80615 = cljs.core.nth.call(null,vec__80519_80614,(0),null);
var b_80616 = cljs.core.nth.call(null,vec__80519_80614,(1),null);
var c_80617 = cljs.core.nth.call(null,vec__80519_80614,(2),null);
var face_80618 = vec__80519_80614;
if(((begin < vertices.call(null,a_80615).call(null,(2)))) && ((vertices.call(null,a_80615).call(null,(2)) < end))){
line.call(null,a_80615,b_80616);
} else {
}

var G__80619 = cljs.core.next.call(null,seq__80512_80608__$1);
var G__80620 = null;
var G__80621 = (0);
var G__80622 = (0);
seq__80512_80594 = G__80619;
chunk__80513_80595 = G__80620;
count__80514_80596 = G__80621;
i__80515_80597 = G__80622;
continue;
}
} else {
}
}
break;
}

var G__80623 = seq__80506_80583;
var G__80624 = chunk__80507_80584;
var G__80625 = count__80508_80585;
var G__80626 = (i__80509_80586 + (1));
seq__80506_80583 = G__80623;
chunk__80507_80584 = G__80624;
count__80508_80585 = G__80625;
i__80509_80586 = G__80626;
continue;
} else {
var temp__6728__auto___80627 = cljs.core.seq.call(null,seq__80506_80583);
if(temp__6728__auto___80627){
var seq__80506_80628__$1 = temp__6728__auto___80627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80506_80628__$1)){
var c__35130__auto___80629 = cljs.core.chunk_first.call(null,seq__80506_80628__$1);
var G__80630 = cljs.core.chunk_rest.call(null,seq__80506_80628__$1);
var G__80631 = c__35130__auto___80629;
var G__80632 = cljs.core.count.call(null,c__35130__auto___80629);
var G__80633 = (0);
seq__80506_80583 = G__80630;
chunk__80507_80584 = G__80631;
count__80508_80585 = G__80632;
i__80509_80586 = G__80633;
continue;
} else {
var map__80522_80634 = cljs.core.first.call(null,seq__80506_80628__$1);
var map__80522_80635__$1 = ((((!((map__80522_80634 == null)))?((((map__80522_80634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80522_80634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80522_80634):map__80522_80634);
var region_80636 = cljs.core.get.call(null,map__80522_80635__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_80637 = cljs.core.get.call(null,map__80522_80635__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_80638 = cljs.core.get.call(null,map__80522_80635__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_80639 = cljs.core.get.call(null,map__80522_80635__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_80640 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_80636))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_80640,brightness);

var seq__80524_80641 = cljs.core.seq.call(null,faces_80637);
var chunk__80525_80642 = null;
var count__80526_80643 = (0);
var i__80527_80644 = (0);
while(true){
if((i__80527_80644 < count__80526_80643)){
var vec__80528_80645 = cljs.core._nth.call(null,chunk__80525_80642,i__80527_80644);
var a_80646 = cljs.core.nth.call(null,vec__80528_80645,(0),null);
var b_80647 = cljs.core.nth.call(null,vec__80528_80645,(1),null);
var c_80648 = cljs.core.nth.call(null,vec__80528_80645,(2),null);
var face_80649 = vec__80528_80645;
if(((begin < vertices.call(null,a_80646).call(null,(2)))) && ((vertices.call(null,a_80646).call(null,(2)) < end))){
line.call(null,a_80646,b_80647);
} else {
}

var G__80650 = seq__80524_80641;
var G__80651 = chunk__80525_80642;
var G__80652 = count__80526_80643;
var G__80653 = (i__80527_80644 + (1));
seq__80524_80641 = G__80650;
chunk__80525_80642 = G__80651;
count__80526_80643 = G__80652;
i__80527_80644 = G__80653;
continue;
} else {
var temp__6728__auto___80654__$1 = cljs.core.seq.call(null,seq__80524_80641);
if(temp__6728__auto___80654__$1){
var seq__80524_80655__$1 = temp__6728__auto___80654__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80524_80655__$1)){
var c__35130__auto___80656 = cljs.core.chunk_first.call(null,seq__80524_80655__$1);
var G__80657 = cljs.core.chunk_rest.call(null,seq__80524_80655__$1);
var G__80658 = c__35130__auto___80656;
var G__80659 = cljs.core.count.call(null,c__35130__auto___80656);
var G__80660 = (0);
seq__80524_80641 = G__80657;
chunk__80525_80642 = G__80658;
count__80526_80643 = G__80659;
i__80527_80644 = G__80660;
continue;
} else {
var vec__80531_80661 = cljs.core.first.call(null,seq__80524_80655__$1);
var a_80662 = cljs.core.nth.call(null,vec__80531_80661,(0),null);
var b_80663 = cljs.core.nth.call(null,vec__80531_80661,(1),null);
var c_80664 = cljs.core.nth.call(null,vec__80531_80661,(2),null);
var face_80665 = vec__80531_80661;
if(((begin < vertices.call(null,a_80662).call(null,(2)))) && ((vertices.call(null,a_80662).call(null,(2)) < end))){
line.call(null,a_80662,b_80663);
} else {
}

var G__80666 = cljs.core.next.call(null,seq__80524_80655__$1);
var G__80667 = null;
var G__80668 = (0);
var G__80669 = (0);
seq__80524_80641 = G__80666;
chunk__80525_80642 = G__80667;
count__80526_80643 = G__80668;
i__80527_80644 = G__80669;
continue;
}
} else {
}
}
break;
}

var G__80670 = cljs.core.next.call(null,seq__80506_80628__$1);
var G__80671 = null;
var G__80672 = (0);
var G__80673 = (0);
seq__80506_80583 = G__80670;
chunk__80507_80584 = G__80671;
count__80508_80585 = G__80672;
i__80509_80586 = G__80673;
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

var G__80674 = seq__80499;
var G__80675 = chunk__80500;
var G__80676 = count__80501;
var G__80677 = (i__80502 + (1));
seq__80499 = G__80674;
chunk__80500 = G__80675;
count__80501 = G__80676;
i__80502 = G__80677;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__80499);
if(temp__6728__auto__){
var seq__80499__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80499__$1)){
var c__35130__auto__ = cljs.core.chunk_first.call(null,seq__80499__$1);
var G__80678 = cljs.core.chunk_rest.call(null,seq__80499__$1);
var G__80679 = c__35130__auto__;
var G__80680 = cljs.core.count.call(null,c__35130__auto__);
var G__80681 = (0);
seq__80499 = G__80678;
chunk__80500 = G__80679;
count__80501 = G__80680;
i__80502 = G__80681;
continue;
} else {
var vec__80534 = cljs.core.first.call(null,seq__80499__$1);
var begin = cljs.core.nth.call(null,vec__80534,(0),null);
var end = cljs.core.nth.call(null,vec__80534,(1),null);
var brightness = cljs.core.nth.call(null,vec__80534,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__80537_80682 = cljs.core.seq.call(null,render_graph);
var chunk__80538_80683 = null;
var count__80539_80684 = (0);
var i__80540_80685 = (0);
while(true){
if((i__80540_80685 < count__80539_80684)){
var map__80541_80686 = cljs.core._nth.call(null,chunk__80538_80683,i__80540_80685);
var map__80541_80687__$1 = ((((!((map__80541_80686 == null)))?((((map__80541_80686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80541_80686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80541_80686):map__80541_80686);
var region_80688 = cljs.core.get.call(null,map__80541_80687__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_80689 = cljs.core.get.call(null,map__80541_80687__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_80690 = cljs.core.get.call(null,map__80541_80687__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_80691 = cljs.core.get.call(null,map__80541_80687__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_80692 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_80688))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_80692,brightness);

var seq__80543_80693 = cljs.core.seq.call(null,faces_80689);
var chunk__80544_80694 = null;
var count__80545_80695 = (0);
var i__80546_80696 = (0);
while(true){
if((i__80546_80696 < count__80545_80695)){
var vec__80547_80697 = cljs.core._nth.call(null,chunk__80544_80694,i__80546_80696);
var a_80698 = cljs.core.nth.call(null,vec__80547_80697,(0),null);
var b_80699 = cljs.core.nth.call(null,vec__80547_80697,(1),null);
var c_80700 = cljs.core.nth.call(null,vec__80547_80697,(2),null);
var face_80701 = vec__80547_80697;
if(((begin < vertices.call(null,a_80698).call(null,(2)))) && ((vertices.call(null,a_80698).call(null,(2)) < end))){
line.call(null,a_80698,b_80699);
} else {
}

var G__80702 = seq__80543_80693;
var G__80703 = chunk__80544_80694;
var G__80704 = count__80545_80695;
var G__80705 = (i__80546_80696 + (1));
seq__80543_80693 = G__80702;
chunk__80544_80694 = G__80703;
count__80545_80695 = G__80704;
i__80546_80696 = G__80705;
continue;
} else {
var temp__6728__auto___80706__$1 = cljs.core.seq.call(null,seq__80543_80693);
if(temp__6728__auto___80706__$1){
var seq__80543_80707__$1 = temp__6728__auto___80706__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80543_80707__$1)){
var c__35130__auto___80708 = cljs.core.chunk_first.call(null,seq__80543_80707__$1);
var G__80709 = cljs.core.chunk_rest.call(null,seq__80543_80707__$1);
var G__80710 = c__35130__auto___80708;
var G__80711 = cljs.core.count.call(null,c__35130__auto___80708);
var G__80712 = (0);
seq__80543_80693 = G__80709;
chunk__80544_80694 = G__80710;
count__80545_80695 = G__80711;
i__80546_80696 = G__80712;
continue;
} else {
var vec__80550_80713 = cljs.core.first.call(null,seq__80543_80707__$1);
var a_80714 = cljs.core.nth.call(null,vec__80550_80713,(0),null);
var b_80715 = cljs.core.nth.call(null,vec__80550_80713,(1),null);
var c_80716 = cljs.core.nth.call(null,vec__80550_80713,(2),null);
var face_80717 = vec__80550_80713;
if(((begin < vertices.call(null,a_80714).call(null,(2)))) && ((vertices.call(null,a_80714).call(null,(2)) < end))){
line.call(null,a_80714,b_80715);
} else {
}

var G__80718 = cljs.core.next.call(null,seq__80543_80707__$1);
var G__80719 = null;
var G__80720 = (0);
var G__80721 = (0);
seq__80543_80693 = G__80718;
chunk__80544_80694 = G__80719;
count__80545_80695 = G__80720;
i__80546_80696 = G__80721;
continue;
}
} else {
}
}
break;
}

var G__80722 = seq__80537_80682;
var G__80723 = chunk__80538_80683;
var G__80724 = count__80539_80684;
var G__80725 = (i__80540_80685 + (1));
seq__80537_80682 = G__80722;
chunk__80538_80683 = G__80723;
count__80539_80684 = G__80724;
i__80540_80685 = G__80725;
continue;
} else {
var temp__6728__auto___80726__$1 = cljs.core.seq.call(null,seq__80537_80682);
if(temp__6728__auto___80726__$1){
var seq__80537_80727__$1 = temp__6728__auto___80726__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80537_80727__$1)){
var c__35130__auto___80728 = cljs.core.chunk_first.call(null,seq__80537_80727__$1);
var G__80729 = cljs.core.chunk_rest.call(null,seq__80537_80727__$1);
var G__80730 = c__35130__auto___80728;
var G__80731 = cljs.core.count.call(null,c__35130__auto___80728);
var G__80732 = (0);
seq__80537_80682 = G__80729;
chunk__80538_80683 = G__80730;
count__80539_80684 = G__80731;
i__80540_80685 = G__80732;
continue;
} else {
var map__80553_80733 = cljs.core.first.call(null,seq__80537_80727__$1);
var map__80553_80734__$1 = ((((!((map__80553_80733 == null)))?((((map__80553_80733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80553_80733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80553_80733):map__80553_80733);
var region_80735 = cljs.core.get.call(null,map__80553_80734__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_80736 = cljs.core.get.call(null,map__80553_80734__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_80737 = cljs.core.get.call(null,map__80553_80734__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_80738 = cljs.core.get.call(null,map__80553_80734__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_80739 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_80735))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_80739,brightness);

var seq__80555_80740 = cljs.core.seq.call(null,faces_80736);
var chunk__80556_80741 = null;
var count__80557_80742 = (0);
var i__80558_80743 = (0);
while(true){
if((i__80558_80743 < count__80557_80742)){
var vec__80559_80744 = cljs.core._nth.call(null,chunk__80556_80741,i__80558_80743);
var a_80745 = cljs.core.nth.call(null,vec__80559_80744,(0),null);
var b_80746 = cljs.core.nth.call(null,vec__80559_80744,(1),null);
var c_80747 = cljs.core.nth.call(null,vec__80559_80744,(2),null);
var face_80748 = vec__80559_80744;
if(((begin < vertices.call(null,a_80745).call(null,(2)))) && ((vertices.call(null,a_80745).call(null,(2)) < end))){
line.call(null,a_80745,b_80746);
} else {
}

var G__80749 = seq__80555_80740;
var G__80750 = chunk__80556_80741;
var G__80751 = count__80557_80742;
var G__80752 = (i__80558_80743 + (1));
seq__80555_80740 = G__80749;
chunk__80556_80741 = G__80750;
count__80557_80742 = G__80751;
i__80558_80743 = G__80752;
continue;
} else {
var temp__6728__auto___80753__$2 = cljs.core.seq.call(null,seq__80555_80740);
if(temp__6728__auto___80753__$2){
var seq__80555_80754__$1 = temp__6728__auto___80753__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80555_80754__$1)){
var c__35130__auto___80755 = cljs.core.chunk_first.call(null,seq__80555_80754__$1);
var G__80756 = cljs.core.chunk_rest.call(null,seq__80555_80754__$1);
var G__80757 = c__35130__auto___80755;
var G__80758 = cljs.core.count.call(null,c__35130__auto___80755);
var G__80759 = (0);
seq__80555_80740 = G__80756;
chunk__80556_80741 = G__80757;
count__80557_80742 = G__80758;
i__80558_80743 = G__80759;
continue;
} else {
var vec__80562_80760 = cljs.core.first.call(null,seq__80555_80754__$1);
var a_80761 = cljs.core.nth.call(null,vec__80562_80760,(0),null);
var b_80762 = cljs.core.nth.call(null,vec__80562_80760,(1),null);
var c_80763 = cljs.core.nth.call(null,vec__80562_80760,(2),null);
var face_80764 = vec__80562_80760;
if(((begin < vertices.call(null,a_80761).call(null,(2)))) && ((vertices.call(null,a_80761).call(null,(2)) < end))){
line.call(null,a_80761,b_80762);
} else {
}

var G__80765 = cljs.core.next.call(null,seq__80555_80754__$1);
var G__80766 = null;
var G__80767 = (0);
var G__80768 = (0);
seq__80555_80740 = G__80765;
chunk__80556_80741 = G__80766;
count__80557_80742 = G__80767;
i__80558_80743 = G__80768;
continue;
}
} else {
}
}
break;
}

var G__80769 = cljs.core.next.call(null,seq__80537_80727__$1);
var G__80770 = null;
var G__80771 = (0);
var G__80772 = (0);
seq__80537_80682 = G__80769;
chunk__80538_80683 = G__80770;
count__80539_80684 = G__80771;
i__80540_80685 = G__80772;
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

var G__80773 = cljs.core.next.call(null,seq__80499__$1);
var G__80774 = null;
var G__80775 = (0);
var G__80776 = (0);
seq__80499 = G__80773;
chunk__80500 = G__80774;
count__80501 = G__80775;
i__80502 = G__80776;
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
var this__36483__auto__ = this;
React.Component.apply(this__36483__auto__,arguments);

if(!((this__36483__auto__.initLocalState == null))){
this__36483__auto__.state = this__36483__auto__.initLocalState();
} else {
this__36483__auto__.state = {};
}

return this__36483__auto__;
});

ui.core.Brain.prototype = goog.object.clone(React.Component.prototype);

var x80781_80811 = ui.core.Brain.prototype;
x80781_80811.componentWillUpdate = ((function (x80781_80811){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
if(((!((this__36328__auto__ == null)))?(((false) || (this__36328__auto__.om$next$Ident$))?true:false):false)){
var ident__36332__auto___80812 = om.next.ident.call(null,this__36328__auto__,om.next.props.call(null,this__36328__auto__));
var next_ident__36333__auto___80813 = om.next.ident.call(null,this__36328__auto__,om.next._next_props.call(null,next_props__36329__auto__,this__36328__auto__));
if(cljs.core.not_EQ_.call(null,ident__36332__auto___80812,next_ident__36333__auto___80813)){
var idxr__36334__auto___80814 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36334__auto___80814 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36334__auto___80814),((function (idxr__36334__auto___80814,ident__36332__auto___80812,next_ident__36333__auto___80813,this__36328__auto__,x80781_80811){
return (function (indexes__36335__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36335__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36332__auto___80812], null),cljs.core.disj,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36333__auto___80813], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36328__auto__);
});})(idxr__36334__auto___80814,ident__36332__auto___80812,next_ident__36333__auto___80813,this__36328__auto__,x80781_80811))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36328__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36328__auto__);
});})(x80781_80811))
;

x80781_80811.shouldComponentUpdate = ((function (x80781_80811){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
var next_children__36331__auto__ = next_props__36329__auto__.children;
var next_props__36329__auto____$1 = goog.object.get(next_props__36329__auto__,"omcljs$value");
var next_props__36329__auto____$2 = (function (){var G__80783 = next_props__36329__auto____$1;
if((next_props__36329__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__80783);
} else {
return G__80783;
}
})();
var or__34227__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36328__auto__),next_props__36329__auto____$2);
if(or__34227__auto__){
return or__34227__auto__;
} else {
var or__34227__auto____$1 = (function (){var and__34215__auto__ = this__36328__auto__.state;
if(cljs.core.truth_(and__34215__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36328__auto__.state,"omcljs$state"),goog.object.get(next_state__36330__auto__,"omcljs$state"));
} else {
return and__34215__auto__;
}
})();
if(cljs.core.truth_(or__34227__auto____$1)){
return or__34227__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36328__auto__.props.children,next_children__36331__auto__);
}
}
});})(x80781_80811))
;

x80781_80811.componentDidUpdate = ((function (x80781_80811){
return (function (prev_props__36336__auto__,prev_state__36337__auto__){
var this__36328__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36328__auto__);
});})(x80781_80811))
;

x80781_80811.isMounted = ((function (x80781_80811){
return (function (){
var this__36328__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36328__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x80781_80811))
;

x80781_80811.componentWillMount = ((function (x80781_80811){
return (function (){
var this__36328__auto__ = this;
var indexer__36338__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80781_80811))
;

x80781_80811.initLocalState = ((function (x80781_80811){
return (function (){
var this$ = this;
var ret__36306__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1708495417),null], null);
var obj80785 = {"omcljs$state":ret__36306__auto__};
return obj80785;
});})(x80781_80811))
;

x80781_80811.componentDidMount = ((function (x80781_80811){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"interval","interval",1708495417),setInterval(((function (this$,x80781_80811){
return (function (){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.update,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),((function (this$,x80781_80811){
return (function (rotation){
ui.core.render_brain.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)).getContext("2d"),rotation,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));

return (rotation + new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));
});})(this$,x80781_80811))
);
});})(this$,x80781_80811))
,(50)));
});})(x80781_80811))
;

x80781_80811.componentWillUnmount = ((function (x80781_80811){
return (function (){
var this__36322__auto__ = this;
var this$ = this__36322__auto__;
var r__36323__auto__ = om.next.get_reconciler.call(null,this__36322__auto__);
var cfg__36324__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36323__auto__);
var st__36325__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36324__auto__);
var indexer__36326__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36324__auto__);
if(cljs.core.truth_((function (){var and__34215__auto__ = !((st__36325__auto__ == null));
if(and__34215__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36325__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36322__auto__], null));
} else {
return and__34215__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36325__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36322__auto__);
} else {
}

if((indexer__36326__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_.call(null,indexer__36326__auto__,this__36322__auto__);
}

return clearInterval(new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)));
});})(x80781_80811))
;

x80781_80811.render = ((function (x80781_80811){
return (function (){
var this__36327__auto__ = this;
var this$ = this__36327__auto__;
var _STAR_reconciler_STAR_80786 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_80787 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_80788 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_80789 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_80790 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36327__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36327__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36327__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36327__auto__);

om.next._STAR_parent_STAR_ = this__36327__auto__;

try{var map__80791 = om.next.props.call(null,this$);
var map__80791__$1 = ((((!((map__80791 == null)))?((((map__80791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80791):map__80791);
var props = map__80791__$1;
var items = cljs.core.get.call(null,map__80791__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
var loading = cljs.core.not.call(null,cljs.core.seq.call(null,items));
var scores = cljs.core.vec.call(null,(function (){var iter__35081__auto__ = ((function (map__80791,map__80791__$1,props,items,loading,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811){
return (function ui$core$iter__80794(s__80795){
return (new cljs.core.LazySeq(null,((function (map__80791,map__80791__$1,props,items,loading,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811){
return (function (){
var s__80795__$1 = s__80795;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80795__$1);
if(temp__6728__auto__){
var s__80795__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80795__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80795__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80797 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80796 = (0);
while(true){
if((i__80796 < size__35080__auto__)){
var item = cljs.core._nth.call(null,c__35079__auto__,i__80796);
cljs.core.chunk_append.call(null,b__80797,(function (){var map__80802 = item;
var map__80802__$1 = ((((!((map__80802 == null)))?((((map__80802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80802):map__80802);
var votes = cljs.core.get.call(null,map__80802__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34560__auto__ = (0);
var y__34561__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34560__auto__ > y__34561__auto__) ? x__34560__auto__ : y__34561__auto__);
})());

var G__80815 = (i__80796 + (1));
i__80796 = G__80815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80797),ui$core$iter__80794.call(null,cljs.core.chunk_rest.call(null,s__80795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80797),null);
}
} else {
var item = cljs.core.first.call(null,s__80795__$2);
return cljs.core.cons.call(null,(function (){var map__80804 = item;
var map__80804__$1 = ((((!((map__80804 == null)))?((((map__80804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80804):map__80804);
var votes = cljs.core.get.call(null,map__80804__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34560__auto__ = (0);
var y__34561__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34560__auto__ > y__34561__auto__) ? x__34560__auto__ : y__34561__auto__);
})(),ui$core$iter__80794.call(null,cljs.core.rest.call(null,s__80795__$2)));
}
} else {
return null;
}
break;
}
});})(map__80791,map__80791__$1,props,items,loading,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811))
,null,null));
});})(map__80791,map__80791__$1,props,items,loading,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811))
;
return iter__35081__auto__.call(null,items);
})());
var sections = cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__80791,map__80791__$1,props,items,loading,scores,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811){
return (function (index,item,score){
var map__80806 = item;
var map__80806__$1 = ((((!((map__80806 == null)))?((((map__80806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80806):map__80806);
var description = cljs.core.get.call(null,map__80806__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("item","description","item/description",-1431609213).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var x__34560__auto__ = score;
var y__34561__auto__ = (cljs.core.apply.call(null,cljs.core._PLUS_,scores) / (50));
return ((x__34560__auto__ > y__34561__auto__) ? x__34560__auto__ : y__34561__auto__);
})(),new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});})(map__80791,map__80791__$1,props,items,loading,scores,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811))
,cljs.core.range.call(null),items,scores));
var sections__$1 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core._,new cljs.core.Keyword(null,"size","size",1098693007)),sections));
var map__80792 = om.next.get_computed.call(null,props);
var map__80792__$1 = ((((!((map__80792 == null)))?((((map__80792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80792):map__80792);
var mode = cljs.core.get.call(null,map__80792__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
cljs.core.swap_BANG_.call(null,ui.core.brain_state,((function (map__80791,map__80791__$1,props,items,loading,scores,sections,sections__$1,map__80792,map__80792__$1,mode,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811){
return (function (brain_state){
if(cljs.core.not_EQ_.call(null,sections__$1,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(brain_state))){
var br = ui.core.brain_prerender.call(null,sections__$1);
return cljs.core.assoc.call(null,brain_state,new cljs.core.Keyword(null,"sections","sections",-886710106),sections__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958),br,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629),ui.core.render_graph.call(null,ui.core.brain_faces,ui.core.brain_vertices,br));
} else {
return brain_state;
}
});})(map__80791,map__80791__$1,props,items,loading,scores,sections,sections__$1,map__80792,map__80792__$1,mode,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811))
);

return ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"colored","colored",-1421800355),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"speed","speed",1257663751),0.01], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colored","colored",-1421800355),ui.motion.spring.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"brain","brain",428499577))) && (!(loading)))?(1):(0)),ui.motion.gentle),new cljs.core.Keyword(null,"top","top",-1856271961),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(50):(0))),new cljs.core.Keyword(null,"width","width",-384071477),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(150):(60)),ui.motion.wobbly),new cljs.core.Keyword(null,"speed","speed",1257663751),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),null,new cljs.core.Keyword(null,"brain","brain",428499577),null], null), null).call(null,mode))?0.01:(0))], null)], null),((function (map__80791,map__80791__$1,props,items,loading,scores,sections,sections__$1,map__80792,map__80792__$1,mode,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811){
return (function (value){
cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(value));

return cljs.core.apply.call(null,React.DOM.div,({"style": ({"width": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "position": "absolute", "zIndex": om_tools.dom.format_opts.call(null,(((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value) > 0.5))?(1):(-1))), "top": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("%")].join(''))})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.canvas(({"ref": om_tools.dom.format_opts.call(null,((function (map__80791,map__80791__$1,props,items,loading,scores,sections,sections__$1,map__80792,map__80792__$1,mode,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811){
return (function (canvas){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas);
});})(map__80791,map__80791__$1,props,items,loading,scores,sections,sections__$1,map__80792,map__80792__$1,mode,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811))
), "width": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "height": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "style": ({"height": "100%", "width": "100%"})})),((loading)?cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "top": "40%", "left": "25%", "right": "25%", "height": "20%"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.p(({"style": ({"textAlign": "center"})}),"Brain Initializing from Ethereum Blockchain"),blueprint_cljs.core.progress_bar.call(null)],null)))):null)],null))));
});})(map__80791,map__80791__$1,props,items,loading,scores,sections,sections__$1,map__80792,map__80792__$1,mode,_STAR_reconciler_STAR_80786,_STAR_depth_STAR_80787,_STAR_shared_STAR_80788,_STAR_instrument_STAR_80789,_STAR_parent_STAR_80790,this$,this__36327__auto__,x80781_80811))
);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_80790;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_80789;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_80788;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_80787;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_80786;
}});})(x80781_80811))
;


ui.core.Brain.prototype.constructor = ui.core.Brain;

ui.core.Brain.prototype.constructor.displayName = "ui.core/Brain";

ui.core.Brain.prototype.om$isComponent = true;

var x80809_80816 = ui.core.Brain;
/** @nocollapse */
x80809_80816.om$next$IQuery$ = true;

/** @nocollapse */
x80809_80816.om$next$IQuery$query$arity$1 = ((function (x80809_80816){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x80809_80816))
;


var x80810_80817 = ui.core.Brain.prototype;

x80810_80817.om$next$IQuery$ = true;


x80810_80817.om$next$IQuery$query$arity$1 = ((function (x80810_80817){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x80810_80817))
;


ui.core.Brain.cljs$lang$type = true;

ui.core.Brain.cljs$lang$ctorStr = "ui.core/Brain";

ui.core.Brain.cljs$lang$ctorPrWriter = (function (this__36486__auto__,writer__36487__auto__,opt__36488__auto__){
return cljs.core._write.call(null,writer__36487__auto__,"ui.core/Brain");
});
ui.core.brain_component = om.next.factory.call(null,ui.core.Brain);
/**
 * @constructor
 */
ui.core.Root = (function ui$core$Root(){
var this__36483__auto__ = this;
React.Component.apply(this__36483__auto__,arguments);

if(!((this__36483__auto__.initLocalState == null))){
this__36483__auto__.state = this__36483__auto__.initLocalState();
} else {
this__36483__auto__.state = {};
}

return this__36483__auto__;
});

ui.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x80822_80836 = ui.core.Root.prototype;
x80822_80836.componentWillUpdate = ((function (x80822_80836){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
if(((!((this__36328__auto__ == null)))?(((false) || (this__36328__auto__.om$next$Ident$))?true:false):false)){
var ident__36332__auto___80837 = om.next.ident.call(null,this__36328__auto__,om.next.props.call(null,this__36328__auto__));
var next_ident__36333__auto___80838 = om.next.ident.call(null,this__36328__auto__,om.next._next_props.call(null,next_props__36329__auto__,this__36328__auto__));
if(cljs.core.not_EQ_.call(null,ident__36332__auto___80837,next_ident__36333__auto___80838)){
var idxr__36334__auto___80839 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__36334__auto___80839 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__36334__auto___80839),((function (idxr__36334__auto___80839,ident__36332__auto___80837,next_ident__36333__auto___80838,this__36328__auto__,x80822_80836){
return (function (indexes__36335__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__36335__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__36332__auto___80837], null),cljs.core.disj,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__36333__auto___80838], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__36328__auto__);
});})(idxr__36334__auto___80839,ident__36332__auto___80837,next_ident__36333__auto___80838,this__36328__auto__,x80822_80836))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__36328__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__36328__auto__);
});})(x80822_80836))
;

x80822_80836.shouldComponentUpdate = ((function (x80822_80836){
return (function (next_props__36329__auto__,next_state__36330__auto__){
var this__36328__auto__ = this;
var next_children__36331__auto__ = next_props__36329__auto__.children;
var next_props__36329__auto____$1 = goog.object.get(next_props__36329__auto__,"omcljs$value");
var next_props__36329__auto____$2 = (function (){var G__80824 = next_props__36329__auto____$1;
if((next_props__36329__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__80824);
} else {
return G__80824;
}
})();
var or__34227__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__36328__auto__),next_props__36329__auto____$2);
if(or__34227__auto__){
return or__34227__auto__;
} else {
var or__34227__auto____$1 = (function (){var and__34215__auto__ = this__36328__auto__.state;
if(cljs.core.truth_(and__34215__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__36328__auto__.state,"omcljs$state"),goog.object.get(next_state__36330__auto__,"omcljs$state"));
} else {
return and__34215__auto__;
}
})();
if(cljs.core.truth_(or__34227__auto____$1)){
return or__34227__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__36328__auto__.props.children,next_children__36331__auto__);
}
}
});})(x80822_80836))
;

x80822_80836.componentDidUpdate = ((function (x80822_80836){
return (function (prev_props__36336__auto__,prev_state__36337__auto__){
var this__36328__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__36328__auto__);
});})(x80822_80836))
;

x80822_80836.isMounted = ((function (x80822_80836){
return (function (){
var this__36328__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__36328__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x80822_80836))
;

x80822_80836.componentWillMount = ((function (x80822_80836){
return (function (){
var this__36328__auto__ = this;
var indexer__36338__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__36328__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__36338__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__36338__auto__,this__36328__auto__);
}
});})(x80822_80836))
;

x80822_80836.initLocalState = ((function (x80822_80836){
return (function (){
var this$ = this;
var ret__36306__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),null], null),new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.Keyword(null,"brain","brain",428499577)], null);
var obj80826 = {"omcljs$state":ret__36306__auto__};
return obj80826;
});})(x80822_80836))
;

x80822_80836.componentDidMount = ((function (x80822_80836){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),(function (){var update_address = ((function (this$,x80822_80836){
return (function (){
var address = (web3.eth.accounts[(0)]);
if(cljs.core.not_EQ_.call(null,address,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"address","address",559499426),address);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","change-address","user/change-address",-1674946809,null)),(function (){var x__35153__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"address","address",559499426)),(function (){var x__35153__auto__ = address;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())))));
} else {
return null;
}
});})(this$,x80822_80836))
;
update_address.call(null);

return setInterval(update_address,(1000));
})()], null));
});})(x80822_80836))
;

x80822_80836.componentWillUnmount = ((function (x80822_80836){
return (function (){
var this__36322__auto__ = this;
var this$ = this__36322__auto__;
var r__36323__auto__ = om.next.get_reconciler.call(null,this__36322__auto__);
var cfg__36324__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__36323__auto__);
var st__36325__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__36324__auto__);
var indexer__36326__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__36324__auto__);
if(cljs.core.truth_((function (){var and__34215__auto__ = !((st__36325__auto__ == null));
if(and__34215__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__36325__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__36322__auto__], null));
} else {
return and__34215__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__36325__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__36322__auto__);
} else {
}

if((indexer__36326__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_.call(null,indexer__36326__auto__,this__36322__auto__);
}

return clearInterval(cljs.core.get_in.call(null,om.next.get_state.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.Keyword(null,"address","address",559499426)], null)));
});})(x80822_80836))
;

x80822_80836.render = ((function (x80822_80836){
return (function (){
var this__36327__auto__ = this;
var this$ = this__36327__auto__;
var _STAR_reconciler_STAR_80827 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_80828 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_80829 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_80830 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_80831 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__36327__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__36327__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__36327__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__36327__auto__);

om.next._STAR_parent_STAR_ = this__36327__auto__;

try{var map__80832 = om.next.props.call(null,this$);
var map__80832__$1 = ((((!((map__80832 == null)))?((((map__80832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80832):map__80832);
var proposals_props = cljs.core.get.call(null,map__80832__$1,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231));
var stakes_props = cljs.core.get.call(null,map__80832__$1,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339));
var items_props = cljs.core.get.call(null,map__80832__$1,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104));
var brain_props = cljs.core.get.call(null,map__80832__$1,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934));
var network_id = cljs.core.get.call(null,map__80832__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var can_vote_proposal = cljs.core.get.call(null,map__80832__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__80832__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dark", "style": ({"display": "flex", "justifyContent": "center", "zoom": 1.3})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"flexGrow": "1", "maxWidth": "600px"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.tabs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__80832,map__80832__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_80827,_STAR_depth_STAR_80828,_STAR_shared_STAR_80829,_STAR_instrument_STAR_80830,_STAR_parent_STAR_80831,this$,this__36327__auto__,x80822_80836){
return (function (index){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"white","white",-483998618)], null).call(null,index));
});})(map__80832,map__80832__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_80827,_STAR_depth_STAR_80828,_STAR_shared_STAR_80829,_STAR_instrument_STAR_80830,_STAR_parent_STAR_80831,this$,this__36327__auto__,x80822_80836))
], null),blueprint_cljs.core.tab_list.call(null,blueprint_cljs.core.tab.call(null,"Brain"),blueprint_cljs.core.tab.call(null,"Top 10 Items"),blueprint_cljs.core.tab.call(null,"Today's Proposed Items"),blueprint_cljs.core.tab.call(null,"Voting Stakes"),blueprint_cljs.core.tab.call(null,"FAQ")),blueprint_cljs.core.tab_panel.call(null,cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "bottom": (0), "left": (0), "right": (0), "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-elevation-4", "style": ({"opacity": om_tools.dom.format_opts.call(null,(cljs.core.truth_(ui.core.web3)?0.7:(1))), "maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(ui.core.web3)?null:cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "alignItems": "center", "fontSize": "1.1rem", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"margin": "0.5em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["EthereanMind requires access to the ",React.DOM.a(({"target": "_blank", "href": "http://ethereum.org"}),"ethereum network "),"to initialize. Please install the ",React.DOM.a(({"target": "_blank", "href": "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"}),"metamask chrome extension"),", or a similar ethereum data source."],null)))),React.DOM.img(({"src": "metamask.png"}))],null))))),React.DOM.h3(({"style": ({"textAlign": "center"})}),"Ethereans, what's on your mind?"),React.DOM.p(null,"EthereanMind lets ethereum users maintain a decentralized \"Top 10 list\" of the most important items to the community. Voting attacks are prevented via time-locked, fully refundable deposits in a staking contract.")],null)))),(cljs.core.truth_((function (){var and__34215__auto__ = ui.core.web3;
if(cljs.core.truth_(and__34215__auto__)){
var and__34215__auto____$1 = network_id;
if(cljs.core.truth_(and__34215__auto____$1)){
return cljs.core.not_EQ_.call(null,network_id,(3));
} else {
return and__34215__auto____$1;
}
} else {
return and__34215__auto__;
}
})())?cljs.core.apply.call(null,React.DOM.div,({"className": "pt-callout pt-intent-danger pt-icon-warning-sign", "style": ({"maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h5(null,"Wrong Network!"),((cljs.core._EQ_.call(null,network_id,(1)))?"You are currently connected to the Ethereum main network which uses real currency. This beta dapp is still running on the Ropsten testnet, which uses free currency. Do not yet use real money with this dapp!":"You are connected to the wrong network! This beta dapp is currently runing on the Ropsten Testnet. In Metamask, change the network option in the upper left corner of the popup window.")],null)))):null),((cljs.core._EQ_.call(null,network_id,(3)))?cljs.core.apply.call(null,React.DOM.div,({"className": "pt-callout pt-intent-warning pt-icon-warning-sign", "style": ({"maxWidth": "500px", "marginBottom": "2rem", "opacity": 0.5, "fontSize": "0.7em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h5(null,"Ropsten Testnet Attack"),"Please be aware that the ethereum testnet is experiencing a (senseless) spam attack this week. This may cause failures in staking/voting that will not exist once this app goes out of beta on the main ethereum network."],null)))):null)],null))))),blueprint_cljs.core.tab_panel.call(null,ui.core.items_component.call(null,items_props)),blueprint_cljs.core.tab_panel.call(null,ui.core.proposals_component.call(null,proposals_props)),blueprint_cljs.core.tab_panel.call(null,ui.core.stakes_component.call(null,stakes_props)),blueprint_cljs.core.tab_panel.call(null,ui.faq_text.faq_text))],null)))),cljs.core.apply.call(null,React.DOM.div,({"key": "foo", "style": ({"position": "fixed", "display": "flex", "flexDirection": "column", "alignItems": "flex-end", "right": (0), "bottom": (0), "padding": "0.5rem", "opacity": "0.5"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,false,can_vote_proposal))?blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.15em"], null)], null),"Today's proposal action used up"):null),blueprint_cljs.core.tag.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.15em"], null)], null),"Current Stake: ",((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?blueprint_cljs.core.spinner.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-small"], null)):stake)," Ether")],null)))),cljs.core.apply.call(null,React.DOM.div,({"key": "bar", "style": ({"pointerEvents": "none ", "top": (0), "width": "100%", "justifyContent": "center", "opacity": (1), "display": "flex", "position": "absolute", "height": "100%", "alignItems": "center", "left": (0)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.core.brain_component.call(null,om.next.computed.call(null,brain_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))], null)))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_80831;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_80830;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_80829;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_80828;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_80827;
}});})(x80822_80836))
;


ui.core.Root.prototype.constructor = ui.core.Root;

ui.core.Root.prototype.constructor.displayName = "ui.core/Root";

ui.core.Root.prototype.om$isComponent = true;

var x80834_80840 = ui.core.Root;
/** @nocollapse */
x80834_80840.om$next$IQuery$ = true;

/** @nocollapse */
x80834_80840.om$next$IQuery$query$arity$1 = ((function (x80834_80840){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x80834_80840))
;


var x80835_80841 = ui.core.Root.prototype;

x80835_80841.om$next$IQuery$ = true;


x80835_80841.om$next$IQuery$query$arity$1 = ((function (x80835_80841){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x80835_80841))
;


ui.core.Root.cljs$lang$type = true;

ui.core.Root.cljs$lang$ctorStr = "ui.core/Root";

ui.core.Root.cljs$lang$ctorPrWriter = (function (this__36486__auto__,writer__36487__auto__,opt__36488__auto__){
return cljs.core._write.call(null,writer__36487__auto__,"ui.core/Root");
});
ui.core.simple_read = (function ui$core$simple_read(p__80842,key,_){
var map__80845 = p__80842;
var map__80845__$1 = ((((!((map__80845 == null)))?((((map__80845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80845):map__80845);
var env = map__80845__$1;
var state = cljs.core.get.call(null,map__80845__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state).call(null,key)], null);
});
ui.core.simple_read_with_remote = (function ui$core$simple_read_with_remote(p__80847,key,_){
var map__80850 = p__80847;
var map__80850__$1 = ((((!((map__80850 == null)))?((((map__80850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80850):map__80850);
var env = map__80850__$1;
var state = cljs.core.get.call(null,map__80850__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var value = cljs.core.deref.call(null,state).call(null,key);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"remote","remote",-1593576576),cljs.core.not.call(null,value)], null);
});
ui.core.recursive_read = (function ui$core$recursive_read(query_root,p__80852,_,___$1){
var map__80855 = p__80852;
var map__80855__$1 = ((((!((map__80855 == null)))?((((map__80855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80855):map__80855);
var env = map__80855__$1;
var parser = cljs.core.get.call(null,map__80855__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__80855__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__80855__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__80855__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query-root","query-root",359781888),query_root,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}
});
ui.core.recursive_channel_read = (function ui$core$recursive_channel_read(p__80857,_,___$1){
var map__80860 = p__80857;
var map__80860__$1 = ((((!((map__80860 == null)))?((((map__80860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80860):map__80860);
var env = map__80860__$1;
var parser = cljs.core.get.call(null,map__80860__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__80860__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.call(null,map__80860__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var res = parser.call(null,env,query);
return res;
})()], null);
});
if(typeof ui.core.read !== 'undefined'){
} else {
ui.core.read = (function (){var method_table__35250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35254__auto__,method_table__35250__auto__,prefer_table__35251__auto__,method_cache__35252__auto__,cached_hierarchy__35253__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),(function() { 
var G__80862__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,true,args);
};
var G__80862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80863__i = 0, G__80863__a = new Array(arguments.length -  0);
while (G__80863__i < G__80863__a.length) {G__80863__a[G__80863__i] = arguments[G__80863__i + 0]; ++G__80863__i;}
  args = new cljs.core.IndexedSeq(G__80863__a,0);
} 
return G__80862__delegate.call(this,args);};
G__80862.cljs$lang$maxFixedArity = 0;
G__80862.cljs$lang$applyTo = (function (arglist__80864){
var args = cljs.core.seq(arglist__80864);
return G__80862__delegate(args);
});
G__80862.cljs$core$IFn$_invoke$arity$variadic = G__80862__delegate;
return G__80862;
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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__34227__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.Keyword("user","address","user/address",573600859)], null)),new cljs.core.Keyword("stake","value","stake/value",466231031)], null));
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
return (0);
}
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","items","etherean/items",165918606),(function (env,k,params){
var map__80865 = env;
var map__80865__$1 = ((((!((map__80865 == null)))?((((map__80865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80865):map__80865);
var parser = cljs.core.get.call(null,map__80865__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__80865__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__80865__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__80865__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__80865__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35081__auto__ = ((function (map__80865,map__80865__$1,parser,state,query,target,ast,state__$1){
return (function ui$core$iter__80867(s__80868){
return (new cljs.core.LazySeq(null,((function (map__80865,map__80865__$1,parser,state,query,target,ast,state__$1){
return (function (){
var s__80868__$1 = s__80868;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80868__$1);
if(temp__6728__auto__){
var s__80868__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80868__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80868__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80870 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80869 = (0);
while(true){
if((i__80869 < size__35080__auto__)){
var item = cljs.core._nth.call(null,c__35079__auto__,i__80869);
cljs.core.chunk_append.call(null,b__80870,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query));

var G__80871 = (i__80869 + (1));
i__80869 = G__80871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80870),ui$core$iter__80867.call(null,cljs.core.chunk_rest.call(null,s__80868__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80870),null);
}
} else {
var item = cljs.core.first.call(null,s__80868__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query),ui$core$iter__80867.call(null,cljs.core.rest.call(null,s__80868__$2)));
}
} else {
return null;
}
break;
}
});})(map__80865,map__80865__$1,parser,state,query,target,ast,state__$1))
,null,null));
});})(map__80865,map__80865__$1,parser,state,query,target,ast,state__$1))
;
return iter__35081__auto__.call(null,new cljs.core.Keyword("item","by-id","item/by-id",-2140839086).cljs$core$IFn$_invoke$arity$1(state__$1));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),(function (env,k,params){
var map__80872 = env;
var map__80872__$1 = ((((!((map__80872 == null)))?((((map__80872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80872):map__80872);
var parser = cljs.core.get.call(null,map__80872__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__80872__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__80872__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__80872__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__80872__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__80873 = state__$1;
var map__80873__$1 = ((((!((map__80873 == null)))?((((map__80873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80873):map__80873);
var order = cljs.core.get.call(null,map__80873__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35081__auto__ = ((function (map__80872,map__80872__$1,parser,state,query,target,ast,state__$1,map__80873,map__80873__$1,order){
return (function ui$core$iter__80876(s__80877){
return (new cljs.core.LazySeq(null,((function (map__80872,map__80872__$1,parser,state,query,target,ast,state__$1,map__80873,map__80873__$1,order){
return (function (){
var s__80877__$1 = s__80877;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80877__$1);
if(temp__6728__auto__){
var s__80877__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80877__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80877__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80879 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80878 = (0);
while(true){
if((i__80878 < size__35080__auto__)){
var proposal = cljs.core._nth.call(null,c__35079__auto__,i__80878);
cljs.core.chunk_append.call(null,b__80879,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query));

var G__80880 = (i__80878 + (1));
i__80878 = G__80880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80879),ui$core$iter__80876.call(null,cljs.core.chunk_rest.call(null,s__80877__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80879),null);
}
} else {
var proposal = cljs.core.first.call(null,s__80877__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query),ui$core$iter__80876.call(null,cljs.core.rest.call(null,s__80877__$2)));
}
} else {
return null;
}
break;
}
});})(map__80872,map__80872__$1,parser,state,query,target,ast,state__$1,map__80873,map__80873__$1,order))
,null,null));
});})(map__80872,map__80872__$1,parser,state,query,target,ast,state__$1,map__80873,map__80873__$1,order))
;
return iter__35081__auto__.call(null,order);
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
var map__80881 = env;
var map__80881__$1 = ((((!((map__80881 == null)))?((((map__80881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80881):map__80881);
var parser = cljs.core.get.call(null,map__80881__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__80881__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__80881__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__80881__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__80881__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__80882 = state__$1;
var map__80882__$1 = ((((!((map__80882 == null)))?((((map__80882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80882):map__80882);
var by_id = cljs.core.get.call(null,map__80882__$1,new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35081__auto__ = ((function (map__80881,map__80881__$1,parser,state,query,target,ast,state__$1,map__80882,map__80882__$1,by_id){
return (function ui$core$iter__80885(s__80886){
return (new cljs.core.LazySeq(null,((function (map__80881,map__80881__$1,parser,state,query,target,ast,state__$1,map__80882,map__80882__$1,by_id){
return (function (){
var s__80886__$1 = s__80886;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80886__$1);
if(temp__6728__auto__){
var s__80886__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80886__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80886__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80888 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80887 = (0);
while(true){
if((i__80887 < size__35080__auto__)){
var stake = cljs.core._nth.call(null,c__35079__auto__,i__80887);
cljs.core.chunk_append.call(null,b__80888,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query));

var G__80889 = (i__80887 + (1));
i__80887 = G__80889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80888),ui$core$iter__80885.call(null,cljs.core.chunk_rest.call(null,s__80886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80888),null);
}
} else {
var stake = cljs.core.first.call(null,s__80886__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query),ui$core$iter__80885.call(null,cljs.core.rest.call(null,s__80886__$2)));
}
} else {
return null;
}
break;
}
});})(map__80881,map__80881__$1,parser,state,query,target,ast,state__$1,map__80882,map__80882__$1,by_id))
,null,null));
});})(map__80881,map__80881__$1,parser,state,query,target,ast,state__$1,map__80882,map__80882__$1,by_id))
;
return iter__35081__auto__.call(null,cljs.core.vals.call(null,by_id));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__80890__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__80890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80891__i = 0, G__80891__a = new Array(arguments.length -  0);
while (G__80891__i < G__80891__a.length) {G__80891__a[G__80891__i] = arguments[G__80891__i + 0]; ++G__80891__i;}
  args = new cljs.core.IndexedSeq(G__80891__a,0);
} 
return G__80890__delegate.call(this,args);};
G__80890.cljs$lang$maxFixedArity = 0;
G__80890.cljs$lang$applyTo = (function (arglist__80892){
var args = cljs.core.seq(arglist__80892);
return G__80890__delegate(args);
});
G__80890.cljs$core$IFn$_invoke$arity$variadic = G__80890__delegate;
return G__80890;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__80893__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__80893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80894__i = 0, G__80894__a = new Array(arguments.length -  0);
while (G__80894__i < G__80894__a.length) {G__80894__a[G__80894__i] = arguments[G__80894__i + 0]; ++G__80894__i;}
  args = new cljs.core.IndexedSeq(G__80894__a,0);
} 
return G__80893__delegate.call(this,args);};
G__80893.cljs$lang$maxFixedArity = 0;
G__80893.cljs$lang$applyTo = (function (arglist__80895){
var args = cljs.core.seq(arglist__80895);
return G__80893__delegate(args);
});
G__80893.cljs$core$IFn$_invoke$arity$variadic = G__80893__delegate;
return G__80893;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__80896__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__80896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80897__i = 0, G__80897__a = new Array(arguments.length -  0);
while (G__80897__i < G__80897__a.length) {G__80897__a[G__80897__i] = arguments[G__80897__i + 0]; ++G__80897__i;}
  args = new cljs.core.IndexedSeq(G__80897__a,0);
} 
return G__80896__delegate.call(this,args);};
G__80896.cljs$lang$maxFixedArity = 0;
G__80896.cljs$lang$applyTo = (function (arglist__80898){
var args = cljs.core.seq(arglist__80898);
return G__80896__delegate(args);
});
G__80896.cljs$core$IFn$_invoke$arity$variadic = G__80896__delegate;
return G__80896;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__80899__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__80899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80900__i = 0, G__80900__a = new Array(arguments.length -  0);
while (G__80900__i < G__80900__a.length) {G__80900__a[G__80900__i] = arguments[G__80900__i + 0]; ++G__80900__i;}
  args = new cljs.core.IndexedSeq(G__80900__a,0);
} 
return G__80899__delegate.call(this,args);};
G__80899.cljs$lang$maxFixedArity = 0;
G__80899.cljs$lang$applyTo = (function (arglist__80901){
var args = cljs.core.seq(arglist__80901);
return G__80899__delegate(args);
});
G__80899.cljs$core$IFn$_invoke$arity$variadic = G__80899__delegate;
return G__80899;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,k,params){
var map__80902 = env;
var map__80902__$1 = ((((!((map__80902 == null)))?((((map__80902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80902):map__80902);
var parser = cljs.core.get.call(null,map__80902__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__80902__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__80902__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__80902__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__80902__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__80903 = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env);
var map__80903__$1 = ((((!((map__80903 == null)))?((((map__80903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80903):map__80903);
var votes = cljs.core.get.call(null,map__80903__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(votes)?(function (){var iter__35081__auto__ = ((function (map__80902,map__80902__$1,parser,state,query,target,ast,state__$1,map__80903,map__80903__$1,votes){
return (function ui$core$iter__80906(s__80907){
return (new cljs.core.LazySeq(null,((function (map__80902,map__80902__$1,parser,state,query,target,ast,state__$1,map__80903,map__80903__$1,votes){
return (function (){
var s__80907__$1 = s__80907;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80907__$1);
if(temp__6728__auto__){
var s__80907__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80907__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80907__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80909 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80908 = (0);
while(true){
if((i__80908 < size__35080__auto__)){
var item_votes = cljs.core._nth.call(null,c__35079__auto__,i__80908);
cljs.core.chunk_append.call(null,b__80909,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query));

var G__80910 = (i__80908 + (1));
i__80908 = G__80910;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80909),ui$core$iter__80906.call(null,cljs.core.chunk_rest.call(null,s__80907__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80909),null);
}
} else {
var item_votes = cljs.core.first.call(null,s__80907__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query),ui$core$iter__80906.call(null,cljs.core.rest.call(null,s__80907__$2)));
}
} else {
return null;
}
break;
}
});})(map__80902,map__80902__$1,parser,state,query,target,ast,state__$1,map__80903,map__80903__$1,votes))
,null,null));
});})(map__80902,map__80902__$1,parser,state,query,target,ast,state__$1,map__80903,map__80903__$1,votes))
;
return iter__35081__auto__.call(null,votes);
})():null)], null);
}
}));
var seq__80911_80921 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake","stake",-1498497787),new cljs.core.Keyword("stake","value","stake/value",466231031),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword("item","description","item/description",-1431609213),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),true], null)], null));
var chunk__80912_80922 = null;
var count__80913_80923 = (0);
var i__80914_80924 = (0);
while(true){
if((i__80914_80924 < count__80913_80923)){
var vec__80915_80925 = cljs.core._nth.call(null,chunk__80912_80922,i__80914_80924);
var object_80926 = cljs.core.nth.call(null,vec__80915_80925,(0),null);
var method_80927 = cljs.core.nth.call(null,vec__80915_80925,(1),null);
var remote_80928 = cljs.core.nth.call(null,vec__80915_80925,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_80927,((function (seq__80911_80921,chunk__80912_80922,count__80913_80923,i__80914_80924,vec__80915_80925,object_80926,method_80927,remote_80928){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_80928,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_80926,dispatch_key], null))], null);
});})(seq__80911_80921,chunk__80912_80922,count__80913_80923,i__80914_80924,vec__80915_80925,object_80926,method_80927,remote_80928))
);

var G__80929 = seq__80911_80921;
var G__80930 = chunk__80912_80922;
var G__80931 = count__80913_80923;
var G__80932 = (i__80914_80924 + (1));
seq__80911_80921 = G__80929;
chunk__80912_80922 = G__80930;
count__80913_80923 = G__80931;
i__80914_80924 = G__80932;
continue;
} else {
var temp__6728__auto___80933 = cljs.core.seq.call(null,seq__80911_80921);
if(temp__6728__auto___80933){
var seq__80911_80934__$1 = temp__6728__auto___80933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80911_80934__$1)){
var c__35130__auto___80935 = cljs.core.chunk_first.call(null,seq__80911_80934__$1);
var G__80936 = cljs.core.chunk_rest.call(null,seq__80911_80934__$1);
var G__80937 = c__35130__auto___80935;
var G__80938 = cljs.core.count.call(null,c__35130__auto___80935);
var G__80939 = (0);
seq__80911_80921 = G__80936;
chunk__80912_80922 = G__80937;
count__80913_80923 = G__80938;
i__80914_80924 = G__80939;
continue;
} else {
var vec__80918_80940 = cljs.core.first.call(null,seq__80911_80934__$1);
var object_80941 = cljs.core.nth.call(null,vec__80918_80940,(0),null);
var method_80942 = cljs.core.nth.call(null,vec__80918_80940,(1),null);
var remote_80943 = cljs.core.nth.call(null,vec__80918_80940,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_80942,((function (seq__80911_80921,chunk__80912_80922,count__80913_80923,i__80914_80924,vec__80918_80940,object_80941,method_80942,remote_80943,seq__80911_80934__$1,temp__6728__auto___80933){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_80943,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_80941,dispatch_key], null))], null);
});})(seq__80911_80921,chunk__80912_80922,count__80913_80923,i__80914_80924,vec__80918_80940,object_80941,method_80942,remote_80943,seq__80911_80934__$1,temp__6728__auto___80933))
);

var G__80944 = cljs.core.next.call(null,seq__80911_80934__$1);
var G__80945 = null;
var G__80946 = (0);
var G__80947 = (0);
seq__80911_80921 = G__80944;
chunk__80912_80922 = G__80945;
count__80913_80923 = G__80946;
i__80914_80924 = G__80947;
continue;
}
} else {
}
}
break;
}
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("db","id","db/id",-1388397098),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__6728__auto__ = (function (){var or__34227__auto__ = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
var or__34227__auto____$1 = new cljs.core.Keyword(null,"stake","stake",-1498497787).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__34227__auto____$1)){
return or__34227__auto____$1;
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
var G__80948__delegate = function (args){
return cljs.core.apply.call(null,ui.core.simple_read_with_remote,args);
};
var G__80948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80949__i = 0, G__80949__a = new Array(arguments.length -  0);
while (G__80949__i < G__80949__a.length) {G__80949__a[G__80949__i] = arguments[G__80949__i + 0]; ++G__80949__i;}
  args = new cljs.core.IndexedSeq(G__80949__a,0);
} 
return G__80948__delegate.call(this,args);};
G__80948.cljs$lang$maxFixedArity = 0;
G__80948.cljs$lang$applyTo = (function (arglist__80950){
var args = cljs.core.seq(arglist__80950);
return G__80948__delegate(args);
});
G__80948.cljs$core$IFn$_invoke$arity$variadic = G__80948__delegate;
return G__80948;
})()
);
if(typeof ui.core.mutate !== 'undefined'){
} else {
ui.core.mutate = (function (){var method_table__35250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35254__auto__,method_table__35250__auto__,prefer_table__35251__auto__,method_cache__35252__auto__,cached_hierarchy__35253__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("proposal","save","proposal/save",356239610,null),(function (env,k,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__80951 = params;
var map__80951__$1 = ((((!((map__80951 == null)))?((((map__80951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80951):map__80951);
var id = cljs.core.get.call(null,map__80951__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__80951__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),((function (map__80951,map__80951__$1,id,description){
return (function (state){
var map__80953 = state;
var map__80953__$1 = ((((!((map__80953 == null)))?((((map__80953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80953):map__80953);
var proposals = cljs.core.get.call(null,map__80953__$1,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153));
var proposal = proposals.call(null,id);
var new_tempid = om.next.tempid.call(null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),cljs.core.assoc.call(null,cljs.core.update.call(null,proposals,id,cljs.core.assoc,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),description,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false),new_tempid,cljs.core.assoc.call(null,proposal,new cljs.core.Keyword("db","id","db/id",-1388397098),new_tempid,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),true))),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),new_tempid], null));
});})(map__80951,map__80951__$1,id,description))
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
var map__80955 = params;
var map__80955__$1 = ((((!((map__80955 == null)))?((((map__80955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80955):map__80955);
var address = cljs.core.get.call(null,map__80955__$1,new cljs.core.Keyword(null,"address","address",559499426));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35081__auto__ = (function ui$core$map_by_id_$_iter__80961(s__80962){
return (new cljs.core.LazySeq(null,(function (){
var s__80962__$1 = s__80962;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80962__$1);
if(temp__6728__auto__){
var s__80962__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80962__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80962__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80964 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80963 = (0);
while(true){
if((i__80963 < size__35080__auto__)){
var item = cljs.core._nth.call(null,c__35079__auto__,i__80963);
cljs.core.chunk_append.call(null,b__80964,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null));

var G__80965 = (i__80963 + (1));
i__80963 = G__80965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80964),ui$core$map_by_id_$_iter__80961.call(null,cljs.core.chunk_rest.call(null,s__80962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80964),null);
}
} else {
var item = cljs.core.first.call(null,s__80962__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null),ui$core$map_by_id_$_iter__80961.call(null,cljs.core.rest.call(null,s__80962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35081__auto__.call(null,items);
})());
});
ui.core.my_merge_tree = (function ui$core$my_merge_tree(a,b){
var map__80972 = ui.core.tweak_tree.call(null,b);
var map__80972__$1 = ((((!((map__80972 == null)))?((((map__80972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80972):map__80972);
var network_id = cljs.core.get.call(null,map__80972__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var proposals = cljs.core.get.call(null,map__80972__$1,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444));
var order = cljs.core.get.call(null,map__80972__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
var stakes = cljs.core.get.call(null,map__80972__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__80972__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var items = cljs.core.get.call(null,map__80972__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,a,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),((function (map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items){
return (function (k){
var or__34227__auto__ = network_id;
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
return k;
}
});})(map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),cljs.core.merge,user),new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),((function (map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items){
return (function (proposals_old){
return cljs.core.merge_with.call(null,cljs.core.merge,proposals_old,ui.core.map_by_id.call(null,proposals));
});})(map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),((function (map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items){
return (function (order_old){
if(cljs.core.truth_(proposals)){
var ks = cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),proposals),cljs.core.filter.call(null,om.next.tempid_QMARK_,cljs.core.map.call(null,cljs.core.second,order_old)));
return cljs.core.vec.call(null,(function (){var iter__35081__auto__ = ((function (ks,map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items){
return (function ui$core$my_merge_tree_$_iter__80974(s__80975){
return (new cljs.core.LazySeq(null,((function (ks,map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items){
return (function (){
var s__80975__$1 = s__80975;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__80975__$1);
if(temp__6728__auto__){
var s__80975__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80975__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__80975__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__80977 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__80976 = (0);
while(true){
if((i__80976 < size__35080__auto__)){
var k = cljs.core._nth.call(null,c__35079__auto__,i__80976);
cljs.core.chunk_append.call(null,b__80977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null));

var G__80978 = (i__80976 + (1));
i__80976 = G__80978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80977),ui$core$my_merge_tree_$_iter__80974.call(null,cljs.core.chunk_rest.call(null,s__80975__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80977),null);
}
} else {
var k = cljs.core.first.call(null,s__80975__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null),ui$core$my_merge_tree_$_iter__80974.call(null,cljs.core.rest.call(null,s__80975__$2)));
}
} else {
return null;
}
break;
}
});})(ks,map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items))
,null,null));
});})(ks,map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items))
;
return iter__35081__auto__.call(null,ks);
})());
} else {
return order_old;
}
});})(map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),((function (map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items){
return (function (stakes_old){
return cljs.core.merge_with.call(null,cljs.core.merge,stakes_old,ui.core.map_by_id.call(null,stakes));
});})(map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),((function (map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items){
return (function (items_old){
var or__34227__auto__ = items;
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
return items_old;
}
});})(map__80972,map__80972__$1,network_id,proposals,order,stakes,user,items))
);
});
ui.core.my_merge = (function ui$core$my_merge(reconciler,state,res,query){
var k = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),k,new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,cljs.core.select_keys.call(null,res,k),query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
ui.core.migrate = (function ui$core$migrate(var_args){
var args80979 = [];
var len__35410__auto___81026 = arguments.length;
var i__35411__auto___81027 = (0);
while(true){
if((i__35411__auto___81027 < len__35410__auto___81026)){
args80979.push((arguments[i__35411__auto___81027]));

var G__81028 = (i__35411__auto___81027 + (1));
i__35411__auto___81027 = G__81028;
continue;
} else {
}
break;
}

var G__80981 = args80979.length;
switch (G__80981) {
case 3:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80979.length)].join('')));

}
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return ui.core.migrate.call(null,app_state_pure,query,tempids,null);
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function ui$core$dissoc_in(pure,p__81004){
var vec__81008 = p__81004;
var table = cljs.core.nth.call(null,vec__81008,(0),null);
var id = cljs.core.nth.call(null,vec__81008,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function ui$core$step(pure,p__81011){
var vec__81019 = p__81011;
var old = cljs.core.nth.call(null,vec__81019,(0),null);
var vec__81022 = cljs.core.nth.call(null,vec__81019,(1),null);
var _ = cljs.core.nth.call(null,vec__81022,(0),null);
var id = cljs.core.nth.call(null,vec__81022,(1),null);
var new$ = vec__81022;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__81025 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__81025,id_key,id);
} else {
return G__81025;
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
var args__35417__auto__ = [];
var len__35410__auto___81047 = arguments.length;
var i__35411__auto___81048 = (0);
while(true){
if((i__35411__auto___81048 < len__35410__auto___81047)){
args__35417__auto__.push((arguments[i__35411__auto___81048]));

var G__81049 = (i__35411__auto___81048 + (1));
i__35411__auto___81048 = G__81049;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((2) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((2)),(0),null)):null);
return ui.core.chan_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35418__auto__);
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

var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,c,start_time){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,c,start_time){
return (function (state_81037){
var state_val_81038 = (state_81037[(1)]);
if((state_val_81038 === (1))){
var state_81037__$1 = state_81037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81037__$1,(2),c,result);
} else {
if((state_val_81038 === (2))){
var inst_81034 = (state_81037[(2)]);
var inst_81035 = cljs.core.async.close_BANG_.call(null,c);
var state_81037__$1 = (function (){var statearr_81039 = state_81037;
(statearr_81039[(7)] = inst_81034);

return statearr_81039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81037__$1,inst_81035);
} else {
return null;
}
}
});})(c__42763__auto__,c,start_time))
;
return ((function (switch__42740__auto__,c__42763__auto__,c,start_time){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81043 = [null,null,null,null,null,null,null,null];
(statearr_81043[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81043[(1)] = (1));

return statearr_81043;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81037){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81044){if((e81044 instanceof Object)){
var ex__42744__auto__ = e81044;
var statearr_81045_81050 = state_81037;
(statearr_81045_81050[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81051 = state_81037;
state_81037 = G__81051;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81037){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,c,start_time))
})();
var state__42765__auto__ = (function (){var statearr_81046 = f__42764__auto__.call(null);
(statearr_81046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,c,start_time))
);

return c__42763__auto__;
});})(c,start_time))
)));

return c;
});

ui.core.chan_call.cljs$lang$maxFixedArity = (2);

ui.core.chan_call.cljs$lang$applyTo = (function (seq81030){
var G__81031 = cljs.core.first.call(null,seq81030);
var seq81030__$1 = cljs.core.next.call(null,seq81030);
var G__81032 = cljs.core.first.call(null,seq81030__$1);
var seq81030__$2 = cljs.core.next.call(null,seq81030__$1);
return ui.core.chan_call.cljs$core$IFn$_invoke$arity$variadic(G__81031,G__81032,seq81030__$2);
});

ui.core.get_network = (function ui$core$get_network(){
var c = cljs.core.async.chan.call(null);
web3.version.getNetwork(((function (c){
return (function (error,result){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,c){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,c){
return (function (state_81069){
var state_val_81070 = (state_81069[(1)]);
if((state_val_81070 === (1))){
var inst_81065 = (result | (0));
var state_81069__$1 = state_81069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81069__$1,(2),c,inst_81065);
} else {
if((state_val_81070 === (2))){
var inst_81067 = (state_81069[(2)]);
var state_81069__$1 = state_81069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81069__$1,inst_81067);
} else {
return null;
}
}
});})(c__42763__auto__,c))
;
return ((function (switch__42740__auto__,c__42763__auto__,c){
return (function() {
var ui$core$get_network_$_state_machine__42741__auto__ = null;
var ui$core$get_network_$_state_machine__42741__auto____0 = (function (){
var statearr_81074 = [null,null,null,null,null,null,null];
(statearr_81074[(0)] = ui$core$get_network_$_state_machine__42741__auto__);

(statearr_81074[(1)] = (1));

return statearr_81074;
});
var ui$core$get_network_$_state_machine__42741__auto____1 = (function (state_81069){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81075){if((e81075 instanceof Object)){
var ex__42744__auto__ = e81075;
var statearr_81076_81078 = state_81069;
(statearr_81076_81078[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81079 = state_81069;
state_81069 = G__81079;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$get_network_$_state_machine__42741__auto__ = function(state_81069){
switch(arguments.length){
case 0:
return ui$core$get_network_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$core$get_network_$_state_machine__42741__auto____1.call(this,state_81069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_network_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_network_$_state_machine__42741__auto____0;
ui$core$get_network_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_network_$_state_machine__42741__auto____1;
return ui$core$get_network_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,c))
})();
var state__42765__auto__ = (function (){var statearr_81077 = f__42764__auto__.call(null);
(statearr_81077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,c))
);

return c__42763__auto__;
});})(c))
);

return c;
});
ui.core.chan_transact = (function ui$core$chan_transact(var_args){
var args__35417__auto__ = [];
var len__35410__auto___81138 = arguments.length;
var i__35411__auto___81139 = (0);
while(true){
if((i__35411__auto___81139 < len__35410__auto___81138)){
args__35417__auto__.push((arguments[i__35411__auto___81139]));

var G__81140 = (i__35411__auto___81139 + (1));
i__35411__auto___81139 = G__81140;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((2) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((2)),(0),null)):null);
return ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35418__auto__);
});

ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic = (function (contract,fname,body){
var c = cljs.core.async.chan.call(null);
var vec__81083 = (((cljs.core.seq.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,body),cljs.core.rest.call(null,body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,body], null));
var obj = cljs.core.nth.call(null,vec__81083,(0),null);
var body__$1 = cljs.core.nth.call(null,vec__81083,(1),null);
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,c,vec__81083,obj,body__$1){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,c,vec__81083,obj,body__$1){
return (function (state_81110){
var state_val_81111 = (state_81110[(1)]);
if((state_val_81111 === (1))){
var inst_81086 = ui.core.get_network.call(null);
var state_81110__$1 = state_81110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81110__$1,(2),inst_81086);
} else {
if((state_val_81111 === (2))){
var inst_81088 = (state_81110[(2)]);
var inst_81089 = cljs.core._EQ_.call(null,inst_81088,(3));
var state_81110__$1 = state_81110;
if(inst_81089){
var statearr_81112_81141 = state_81110__$1;
(statearr_81112_81141[(1)] = (3));

} else {
var statearr_81113_81142 = state_81110__$1;
(statearr_81113_81142[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81111 === (3))){
var inst_81091 = cljs.core.name.call(null,fname);
var inst_81092 = (contract[inst_81091]);
var inst_81093 = inst_81092.sendTransaction;
var inst_81094 = cljs.core.vec.call(null,body__$1);
var inst_81095 = [new cljs.core.Keyword(null,"gas","gas",-139961463)];
var inst_81096 = [(4000000)];
var inst_81097 = cljs.core.PersistentHashMap.fromArrays(inst_81095,inst_81096);
var inst_81098 = cljs.core.merge.call(null,inst_81097,obj);
var inst_81099 = cljs.core.clj__GT_js.call(null,inst_81098);
var inst_81100 = (function (){return ((function (inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1){
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
return cljs.core.reset_BANG_.call(null,timer,setInterval(((function (timer,inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1){
return (function (){
return web3.eth.getTransactionReceipt(result,((function (timer,inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1){
return (function (error__$1,receipt){
if(cljs.core.truth_(receipt)){
var c__42763__auto___81143__$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___81143__$1,timer,inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___81143__$1,timer,inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1){
return (function (state_81118){
var state_val_81119 = (state_81118[(1)]);
if((state_val_81119 === (1))){
var state_81118__$1 = state_81118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81118__$1,(2),c,receipt);
} else {
if((state_val_81119 === (2))){
var inst_81115 = (state_81118[(2)]);
var inst_81116 = cljs.core.async.close_BANG_.call(null,c);
var state_81118__$1 = (function (){var statearr_81120 = state_81118;
(statearr_81120[(7)] = inst_81115);

return statearr_81120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81118__$1,inst_81116);
} else {
return null;
}
}
});})(c__42763__auto___81143__$1,timer,inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1))
;
return ((function (switch__42740__auto__,c__42763__auto___81143__$1,timer,inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81124 = [null,null,null,null,null,null,null,null];
(statearr_81124[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81124[(1)] = (1));

return statearr_81124;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81118){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81125){if((e81125 instanceof Object)){
var ex__42744__auto__ = e81125;
var statearr_81126_81144 = state_81118;
(statearr_81126_81144[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81145 = state_81118;
state_81118 = G__81145;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81118){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___81143__$1,timer,inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1))
})();
var state__42765__auto__ = (function (){var statearr_81127 = f__42764__auto__.call(null);
(statearr_81127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___81143__$1);

return statearr_81127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___81143__$1,timer,inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1))
);


return clearInterval(cljs.core.deref.call(null,timer));
} else {
return null;
}
});})(timer,inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1))
);
});})(timer,inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1))
,(5000)));
}
});
;})(inst_81091,inst_81092,inst_81093,inst_81094,inst_81095,inst_81096,inst_81097,inst_81098,inst_81099,state_val_81111,c__42763__auto__,c,vec__81083,obj,body__$1))
})();
var inst_81101 = cljs.core.conj.call(null,inst_81094,inst_81099,inst_81100);
var inst_81102 = cljs.core.apply.call(null,cljs.core.array,inst_81101);
var inst_81103 = inst_81093.apply(contract,inst_81102);
var state_81110__$1 = (function (){var statearr_81128 = state_81110;
(statearr_81128[(7)] = inst_81103);

return statearr_81128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81110__$1,(6),c);
} else {
if((state_val_81111 === (4))){
var state_81110__$1 = state_81110;
var statearr_81129_81146 = state_81110__$1;
(statearr_81129_81146[(2)] = null);

(statearr_81129_81146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81111 === (5))){
var inst_81108 = (state_81110[(2)]);
var state_81110__$1 = state_81110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81110__$1,inst_81108);
} else {
if((state_val_81111 === (6))){
var inst_81105 = (state_81110[(2)]);
var state_81110__$1 = state_81110;
var statearr_81130_81147 = state_81110__$1;
(statearr_81130_81147[(2)] = inst_81105);

(statearr_81130_81147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__42763__auto__,c,vec__81083,obj,body__$1))
;
return ((function (switch__42740__auto__,c__42763__auto__,c,vec__81083,obj,body__$1){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81134 = [null,null,null,null,null,null,null,null];
(statearr_81134[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81134[(1)] = (1));

return statearr_81134;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81110){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81135){if((e81135 instanceof Object)){
var ex__42744__auto__ = e81135;
var statearr_81136_81148 = state_81110;
(statearr_81136_81148[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81149 = state_81110;
state_81110 = G__81149;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81110){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,c,vec__81083,obj,body__$1))
})();
var state__42765__auto__ = (function (){var statearr_81137 = f__42764__auto__.call(null);
(statearr_81137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,c,vec__81083,obj,body__$1))
);

return c__42763__auto__;
});

ui.core.chan_transact.cljs$lang$maxFixedArity = (2);

ui.core.chan_transact.cljs$lang$applyTo = (function (seq81080){
var G__81081 = cljs.core.first.call(null,seq81080);
var seq81080__$1 = cljs.core.next.call(null,seq81080);
var G__81082 = cljs.core.first.call(null,seq81080__$1);
var seq81080__$2 = cljs.core.next.call(null,seq81080__$1);
return ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic(G__81081,G__81082,seq81080__$2);
});

ui.core.chan_event = (function ui$core$chan_event(var_args){
var args__35417__auto__ = [];
var len__35410__auto___81170 = arguments.length;
var i__35411__auto___81171 = (0);
while(true){
if((i__35411__auto___81171 < len__35410__auto___81170)){
args__35417__auto__.push((arguments[i__35411__auto___81171]));

var G__81172 = (i__35411__auto___81171 + (1));
i__35411__auto___81171 = G__81172;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((3) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((3)),(0),null)):null);
return ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35418__auto__);
});

ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic = (function (contract,ename,hash,body){
var c = cljs.core.async.chan.call(null);
var event = cljs.core.atom.call(null,null);
cljs.core.reset_BANG_.call(null,event,(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,cljs.core.conj.call(null,cljs.core.vec.call(null,body),((function (c,event){
return (function (error,result){
if(cljs.core._EQ_.call(null,result.transactionHash,hash)){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,c,event){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,c,event){
return (function (state_81160){
var state_val_81161 = (state_81160[(1)]);
if((state_val_81161 === (1))){
var state_81160__$1 = state_81160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81160__$1,(2),c,result);
} else {
if((state_val_81161 === (2))){
var inst_81155 = (state_81160[(2)]);
var inst_81156 = cljs.core.async.close_BANG_.call(null,c);
var inst_81157 = cljs.core.deref.call(null,event);
var inst_81158 = inst_81157.stopWatching();
var state_81160__$1 = (function (){var statearr_81162 = state_81160;
(statearr_81162[(7)] = inst_81156);

(statearr_81162[(8)] = inst_81155);

return statearr_81162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81160__$1,inst_81158);
} else {
return null;
}
}
});})(c__42763__auto__,c,event))
;
return ((function (switch__42740__auto__,c__42763__auto__,c,event){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81166 = [null,null,null,null,null,null,null,null,null];
(statearr_81166[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81166[(1)] = (1));

return statearr_81166;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81160){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81167){if((e81167 instanceof Object)){
var ex__42744__auto__ = e81167;
var statearr_81168_81173 = state_81160;
(statearr_81168_81173[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81174 = state_81160;
state_81160 = G__81174;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81160){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,c,event))
})();
var state__42765__auto__ = (function (){var statearr_81169 = f__42764__auto__.call(null);
(statearr_81169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,c,event))
);

return c__42763__auto__;
} else {
return null;
}
});})(c,event))
))));

return c;
});

ui.core.chan_event.cljs$lang$maxFixedArity = (3);

ui.core.chan_event.cljs$lang$applyTo = (function (seq81150){
var G__81151 = cljs.core.first.call(null,seq81150);
var seq81150__$1 = cljs.core.next.call(null,seq81150);
var G__81152 = cljs.core.first.call(null,seq81150__$1);
var seq81150__$2 = cljs.core.next.call(null,seq81150__$1);
var G__81153 = cljs.core.first.call(null,seq81150__$2);
var seq81150__$3 = cljs.core.next.call(null,seq81150__$2);
return ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic(G__81151,G__81152,G__81153,seq81150__$3);
});

ui.core.query_events = (function ui$core$query_events(contract,starting_block,stopping_block,ename,params){
var c = cljs.core.async.chan.call(null);
var event = cljs.core.atom.call(null,null);
var start_time = ui.core.get_tick_count.call(null);
cljs.core.reset_BANG_.call(null,event,(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,({"fromBlock": starting_block, "toBlock": stopping_block}),((function (c,event,start_time){
return (function (error,result){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,c,event,start_time){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,c,event,start_time){
return (function (state_81197){
var state_val_81198 = (state_81197[(1)]);
if((state_val_81198 === (1))){
var state_81197__$1 = state_81197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81197__$1,(2),c,result);
} else {
if((state_val_81198 === (2))){
var inst_81192 = (state_81197[(2)]);
var inst_81193 = cljs.core.async.close_BANG_.call(null,c);
var inst_81194 = cljs.core.deref.call(null,event);
var inst_81195 = inst_81194.stopWatching();
var state_81197__$1 = (function (){var statearr_81199 = state_81197;
(statearr_81199[(7)] = inst_81193);

(statearr_81199[(8)] = inst_81192);

return statearr_81199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81197__$1,inst_81195);
} else {
return null;
}
}
});})(c__42763__auto__,c,event,start_time))
;
return ((function (switch__42740__auto__,c__42763__auto__,c,event,start_time){
return (function() {
var ui$core$query_events_$_state_machine__42741__auto__ = null;
var ui$core$query_events_$_state_machine__42741__auto____0 = (function (){
var statearr_81203 = [null,null,null,null,null,null,null,null,null];
(statearr_81203[(0)] = ui$core$query_events_$_state_machine__42741__auto__);

(statearr_81203[(1)] = (1));

return statearr_81203;
});
var ui$core$query_events_$_state_machine__42741__auto____1 = (function (state_81197){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81204){if((e81204 instanceof Object)){
var ex__42744__auto__ = e81204;
var statearr_81205_81207 = state_81197;
(statearr_81205_81207[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81208 = state_81197;
state_81197 = G__81208;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$query_events_$_state_machine__42741__auto__ = function(state_81197){
switch(arguments.length){
case 0:
return ui$core$query_events_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$core$query_events_$_state_machine__42741__auto____1.call(this,state_81197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$query_events_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$query_events_$_state_machine__42741__auto____0;
ui$core$query_events_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$query_events_$_state_machine__42741__auto____1;
return ui$core$query_events_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,c,event,start_time))
})();
var state__42765__auto__ = (function (){var statearr_81206 = f__42764__auto__.call(null);
(statearr_81206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,c,event,start_time))
);

return c__42763__auto__;
});})(c,event,start_time))
], null))));

return c;
});
ui.core.get_historical_events = (function ui$core$get_historical_events(contract,starting_block,ename,params){
var c = cljs.core.async.chan.call(null);
(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,({"fromBlock": starting_block, "toBlock": "latest"})], null))).get(((function (c){
return (function (error,result){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,c){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,c){
return (function (state_81226){
var state_val_81227 = (state_81226[(1)]);
if((state_val_81227 === (1))){
var inst_81222 = cljs.core.vec.call(null,result);
var state_81226__$1 = state_81226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81226__$1,(2),c,inst_81222);
} else {
if((state_val_81227 === (2))){
var inst_81224 = (state_81226[(2)]);
var state_81226__$1 = state_81226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81226__$1,inst_81224);
} else {
return null;
}
}
});})(c__42763__auto__,c))
;
return ((function (switch__42740__auto__,c__42763__auto__,c){
return (function() {
var ui$core$get_historical_events_$_state_machine__42741__auto__ = null;
var ui$core$get_historical_events_$_state_machine__42741__auto____0 = (function (){
var statearr_81231 = [null,null,null,null,null,null,null];
(statearr_81231[(0)] = ui$core$get_historical_events_$_state_machine__42741__auto__);

(statearr_81231[(1)] = (1));

return statearr_81231;
});
var ui$core$get_historical_events_$_state_machine__42741__auto____1 = (function (state_81226){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81232){if((e81232 instanceof Object)){
var ex__42744__auto__ = e81232;
var statearr_81233_81235 = state_81226;
(statearr_81233_81235[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81236 = state_81226;
state_81226 = G__81236;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$get_historical_events_$_state_machine__42741__auto__ = function(state_81226){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$core$get_historical_events_$_state_machine__42741__auto____1.call(this,state_81226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_$_state_machine__42741__auto____0;
ui$core$get_historical_events_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_$_state_machine__42741__auto____1;
return ui$core$get_historical_events_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,c))
})();
var state__42765__auto__ = (function (){var statearr_81234 = f__42764__auto__.call(null);
(statearr_81234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,c))
);

return c__42763__auto__;
});})(c))
);

return c;
});
ui.core.get_historical_events_hash = (function ui$core$get_historical_events_hash(contract,starting_block,ename,params,hash){
var c = cljs.core.async.chan.call(null);
(contract[cljs.core.name.call(null,ename)]).apply(contract,cljs.core.apply.call(null,cljs.core.array,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,({"fromBlock": starting_block, "toBlock": "latest"})], null))).get(((function (c){
return (function (error,result){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,c){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,c){
return (function (state_81258){
var state_val_81259 = (state_81258[(1)]);
if((state_val_81259 === (1))){
var inst_81252 = (function (){return ((function (state_val_81259,c__42763__auto__,c){
return (function (event){
return cljs.core._EQ_.call(null,event.transactionHash,hash);
});
;})(state_val_81259,c__42763__auto__,c))
})();
var inst_81253 = cljs.core.filter.call(null,inst_81252,result);
var inst_81254 = cljs.core.vec.call(null,inst_81253);
var state_81258__$1 = state_81258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81258__$1,(2),c,inst_81254);
} else {
if((state_val_81259 === (2))){
var inst_81256 = (state_81258[(2)]);
var state_81258__$1 = state_81258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81258__$1,inst_81256);
} else {
return null;
}
}
});})(c__42763__auto__,c))
;
return ((function (switch__42740__auto__,c__42763__auto__,c){
return (function() {
var ui$core$get_historical_events_hash_$_state_machine__42741__auto__ = null;
var ui$core$get_historical_events_hash_$_state_machine__42741__auto____0 = (function (){
var statearr_81263 = [null,null,null,null,null,null,null];
(statearr_81263[(0)] = ui$core$get_historical_events_hash_$_state_machine__42741__auto__);

(statearr_81263[(1)] = (1));

return statearr_81263;
});
var ui$core$get_historical_events_hash_$_state_machine__42741__auto____1 = (function (state_81258){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81264){if((e81264 instanceof Object)){
var ex__42744__auto__ = e81264;
var statearr_81265_81267 = state_81258;
(statearr_81265_81267[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81268 = state_81258;
state_81258 = G__81268;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$get_historical_events_hash_$_state_machine__42741__auto__ = function(state_81258){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_hash_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$core$get_historical_events_hash_$_state_machine__42741__auto____1.call(this,state_81258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_hash_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_hash_$_state_machine__42741__auto____0;
ui$core$get_historical_events_hash_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_hash_$_state_machine__42741__auto____1;
return ui$core$get_historical_events_hash_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,c))
})();
var state__42765__auto__ = (function (){var statearr_81266 = f__42764__auto__.call(null);
(statearr_81266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,c))
);

return c__42763__auto__;
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
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,c){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,c){
return (function (state_81298){
var state_val_81299 = (state_81298[(1)]);
if((state_val_81299 === (1))){
var inst_81294 = ui.core.wei__GT_eth.call(null,result);
var state_81298__$1 = state_81298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81298__$1,(2),c,inst_81294);
} else {
if((state_val_81299 === (2))){
var inst_81296 = (state_81298[(2)]);
var state_81298__$1 = state_81298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81298__$1,inst_81296);
} else {
return null;
}
}
});})(c__42763__auto__,c))
;
return ((function (switch__42740__auto__,c__42763__auto__,c){
return (function() {
var ui$core$get_balance_$_state_machine__42741__auto__ = null;
var ui$core$get_balance_$_state_machine__42741__auto____0 = (function (){
var statearr_81303 = [null,null,null,null,null,null,null];
(statearr_81303[(0)] = ui$core$get_balance_$_state_machine__42741__auto__);

(statearr_81303[(1)] = (1));

return statearr_81303;
});
var ui$core$get_balance_$_state_machine__42741__auto____1 = (function (state_81298){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81304){if((e81304 instanceof Object)){
var ex__42744__auto__ = e81304;
var statearr_81305_81319 = state_81298;
(statearr_81305_81319[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81320 = state_81298;
state_81298 = G__81320;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__42741__auto__ = function(state_81298){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__42741__auto____1.call(this,state_81298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__42741__auto____0;
ui$core$get_balance_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__42741__auto____1;
return ui$core$get_balance_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,c))
})();
var state__42765__auto__ = (function (){var statearr_81306 = f__42764__auto__.call(null);
(statearr_81306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,c))
);

return c__42763__auto__;
});})(c))
);
} else {
var c__42763__auto___81321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___81321,c){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___81321,c){
return (function (state_81310){
var state_val_81311 = (state_81310[(1)]);
if((state_val_81311 === (1))){
var state_81310__$1 = state_81310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81310__$1,(2),c,(0));
} else {
if((state_val_81311 === (2))){
var inst_81308 = (state_81310[(2)]);
var state_81310__$1 = state_81310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81310__$1,inst_81308);
} else {
return null;
}
}
});})(c__42763__auto___81321,c))
;
return ((function (switch__42740__auto__,c__42763__auto___81321,c){
return (function() {
var ui$core$get_balance_$_state_machine__42741__auto__ = null;
var ui$core$get_balance_$_state_machine__42741__auto____0 = (function (){
var statearr_81315 = [null,null,null,null,null,null,null];
(statearr_81315[(0)] = ui$core$get_balance_$_state_machine__42741__auto__);

(statearr_81315[(1)] = (1));

return statearr_81315;
});
var ui$core$get_balance_$_state_machine__42741__auto____1 = (function (state_81310){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81316){if((e81316 instanceof Object)){
var ex__42744__auto__ = e81316;
var statearr_81317_81322 = state_81310;
(statearr_81317_81322[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81323 = state_81310;
state_81310 = G__81323;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__42741__auto__ = function(state_81310){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__42741__auto____1.call(this,state_81310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__42741__auto____0;
ui$core$get_balance_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__42741__auto____1;
return ui$core$get_balance_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___81321,c))
})();
var state__42765__auto__ = (function (){var statearr_81318 = f__42764__auto__.call(null);
(statearr_81318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___81321);

return statearr_81318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___81321,c))
);

}

return c;
});
ui.core.get_block = (function ui$core$get_block(block){
var c = cljs.core.async.chan.call(null);
web3.eth.getBlock(block,((function (c){
return (function (error,result){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,c){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,c){
return (function (state_81341){
var state_val_81342 = (state_81341[(1)]);
if((state_val_81342 === (1))){
var inst_81337 = cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var state_81341__$1 = state_81341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81341__$1,(2),c,inst_81337);
} else {
if((state_val_81342 === (2))){
var inst_81339 = (state_81341[(2)]);
var state_81341__$1 = state_81341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81341__$1,inst_81339);
} else {
return null;
}
}
});})(c__42763__auto__,c))
;
return ((function (switch__42740__auto__,c__42763__auto__,c){
return (function() {
var ui$core$get_block_$_state_machine__42741__auto__ = null;
var ui$core$get_block_$_state_machine__42741__auto____0 = (function (){
var statearr_81346 = [null,null,null,null,null,null,null];
(statearr_81346[(0)] = ui$core$get_block_$_state_machine__42741__auto__);

(statearr_81346[(1)] = (1));

return statearr_81346;
});
var ui$core$get_block_$_state_machine__42741__auto____1 = (function (state_81341){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81347){if((e81347 instanceof Object)){
var ex__42744__auto__ = e81347;
var statearr_81348_81350 = state_81341;
(statearr_81348_81350[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81351 = state_81341;
state_81341 = G__81351;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$get_block_$_state_machine__42741__auto__ = function(state_81341){
switch(arguments.length){
case 0:
return ui$core$get_block_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$core$get_block_$_state_machine__42741__auto____1.call(this,state_81341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_block_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_block_$_state_machine__42741__auto____0;
ui$core$get_block_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_block_$_state_machine__42741__auto____1;
return ui$core$get_block_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,c))
})();
var state__42765__auto__ = (function (){var statearr_81349 = f__42764__auto__.call(null);
(statearr_81349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,c))
);

return c__42763__auto__;
});})(c))
);

return c;
});
ui.core.block_number = (function ui$core$block_number(){
var c = cljs.core.async.chan.call(null);
web3.eth.getBlockNumber(((function (c){
return (function (error,result){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,c){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,c){
return (function (state_81367){
var state_val_81368 = (state_81367[(1)]);
if((state_val_81368 === (1))){
var state_81367__$1 = state_81367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81367__$1,(2),c,result);
} else {
if((state_val_81368 === (2))){
var inst_81365 = (state_81367[(2)]);
var state_81367__$1 = state_81367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81367__$1,inst_81365);
} else {
return null;
}
}
});})(c__42763__auto__,c))
;
return ((function (switch__42740__auto__,c__42763__auto__,c){
return (function() {
var ui$core$block_number_$_state_machine__42741__auto__ = null;
var ui$core$block_number_$_state_machine__42741__auto____0 = (function (){
var statearr_81372 = [null,null,null,null,null,null,null];
(statearr_81372[(0)] = ui$core$block_number_$_state_machine__42741__auto__);

(statearr_81372[(1)] = (1));

return statearr_81372;
});
var ui$core$block_number_$_state_machine__42741__auto____1 = (function (state_81367){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81373){if((e81373 instanceof Object)){
var ex__42744__auto__ = e81373;
var statearr_81374_81376 = state_81367;
(statearr_81374_81376[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81377 = state_81367;
state_81367 = G__81377;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$block_number_$_state_machine__42741__auto__ = function(state_81367){
switch(arguments.length){
case 0:
return ui$core$block_number_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$core$block_number_$_state_machine__42741__auto____1.call(this,state_81367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$block_number_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$block_number_$_state_machine__42741__auto____0;
ui$core$block_number_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$block_number_$_state_machine__42741__auto____1;
return ui$core$block_number_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,c))
})();
var state__42765__auto__ = (function (){var statearr_81375 = f__42764__auto__.call(null);
(statearr_81375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,c))
);

return c__42763__auto__;
});})(c))
);

return c;
});
ui.core.get_proposal_description = (function ui$core$get_proposal_description(proposal_block,proposal_index){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_81406){
var state_val_81407 = (state_81406[(1)]);
if((state_val_81407 === (1))){
var inst_81397 = (function (){return ((function (state_val_81407,c__42763__auto__){
return (function (x){
return web3.toAscii(x);
});
;})(state_val_81407,c__42763__auto__))
})();
var inst_81398 = ui.core.query_events.call(null,ui.core.etherean,proposal_block,proposal_block,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({"proposalIndex": proposal_index}));
var state_81406__$1 = (function (){var statearr_81408 = state_81406;
(statearr_81408[(7)] = inst_81397);

return statearr_81408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81406__$1,(2),inst_81398);
} else {
if((state_val_81407 === (2))){
var inst_81397 = (state_81406[(7)]);
var inst_81400 = (state_81406[(2)]);
var inst_81401 = inst_81400.args;
var inst_81402 = inst_81401.message;
var inst_81403 = cljs.core.map.call(null,inst_81397,inst_81402);
var inst_81404 = cljs.core.first.call(null,inst_81403);
var state_81406__$1 = state_81406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81406__$1,inst_81404);
} else {
return null;
}
}
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var ui$core$get_proposal_description_$_state_machine__42741__auto__ = null;
var ui$core$get_proposal_description_$_state_machine__42741__auto____0 = (function (){
var statearr_81412 = [null,null,null,null,null,null,null,null];
(statearr_81412[(0)] = ui$core$get_proposal_description_$_state_machine__42741__auto__);

(statearr_81412[(1)] = (1));

return statearr_81412;
});
var ui$core$get_proposal_description_$_state_machine__42741__auto____1 = (function (state_81406){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81413){if((e81413 instanceof Object)){
var ex__42744__auto__ = e81413;
var statearr_81414_81416 = state_81406;
(statearr_81414_81416[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81417 = state_81406;
state_81406 = G__81417;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$get_proposal_description_$_state_machine__42741__auto__ = function(state_81406){
switch(arguments.length){
case 0:
return ui$core$get_proposal_description_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$core$get_proposal_description_$_state_machine__42741__auto____1.call(this,state_81406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_proposal_description_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_proposal_description_$_state_machine__42741__auto____0;
ui$core$get_proposal_description_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_proposal_description_$_state_machine__42741__auto____1;
return ui$core$get_proposal_description_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_81415 = f__42764__auto__.call(null);
(statearr_81415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
});
if(typeof ui.core.read_server !== 'undefined'){
} else {
ui.core.read_server = (function (){var method_table__35250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","read-server"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35254__auto__,method_table__35250__auto__,prefer_table__35251__auto__,method_cache__35252__auto__,cached_hierarchy__35253__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("user","balance","user/balance",422509480),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_balance.call(null,(web3.eth.accounts[(0)]))], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_network.call(null)], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_81422){
var state_val_81423 = (state_81422[(1)]);
if((state_val_81423 === (1))){
var inst_81418 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"useUpProposalVote","useUpProposalVote",352109759));
var state_81422__$1 = state_81422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81422__$1,(2),inst_81418);
} else {
if((state_val_81423 === (2))){
var inst_81420 = (state_81422[(2)]);
var state_81422__$1 = state_81422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81422__$1,inst_81420);
} else {
return null;
}
}
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81427 = [null,null,null,null,null,null,null];
(statearr_81427[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81427[(1)] = (1));

return statearr_81427;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81422){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81428){if((e81428 instanceof Object)){
var ex__42744__auto__ = e81428;
var statearr_81429_81431 = state_81422;
(statearr_81429_81431[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81432 = state_81422;
state_81422 = G__81432;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81422){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_81430 = f__42764__auto__.call(null);
(statearr_81430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),(function (env,dispatch_key,params){
var map__81433 = env;
var map__81433__$1 = ((((!((map__81433 == null)))?((((map__81433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81433):map__81433);
var proposal = cljs.core.get.call(null,map__81433__$1,new cljs.core.Keyword(null,"proposal","proposal",142522715));
var proposal_id = cljs.core.get.call(null,map__81433__$1,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_proposal_description.call(null,((proposal[(3)]) | (0)),new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env))], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_81439){
var state_val_81440 = (state_81439[(1)]);
if((state_val_81440 === (1))){
var inst_81435 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_81436 = cljs.core.nth.call(null,inst_81435,(0));
var inst_81437 = ui.core.wei__GT_eth.call(null,inst_81436);
var state_81439__$1 = state_81439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81439__$1,inst_81437);
} else {
return null;
}
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81444 = [null,null,null,null,null,null,null];
(statearr_81444[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81444[(1)] = (1));

return statearr_81444;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81439){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81445){if((e81445 instanceof Object)){
var ex__42744__auto__ = e81445;
var statearr_81446_81448 = state_81439;
(statearr_81446_81448[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81449 = state_81439;
state_81439 = G__81449;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81439){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_81447 = f__42764__auto__.call(null);
(statearr_81447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_81454){
var state_val_81455 = (state_81454[(1)]);
if((state_val_81455 === (1))){
var inst_81450 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_81451 = cljs.core.nth.call(null,inst_81450,(1));
var inst_81452 = ui.core.wei__GT_eth.call(null,inst_81451);
var state_81454__$1 = state_81454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81454__$1,inst_81452);
} else {
return null;
}
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81459 = [null,null,null,null,null,null,null];
(statearr_81459[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81459[(1)] = (1));

return statearr_81459;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81454){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81460){if((e81460 instanceof Object)){
var ex__42744__auto__ = e81460;
var statearr_81461_81463 = state_81454;
(statearr_81461_81463[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81464 = state_81454;
state_81454 = G__81464;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81454){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_81462 = f__42764__auto__.call(null);
(statearr_81462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("db","id","db/id",-1388397098),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_81472){
var state_val_81473 = (state_81472[(1)]);
if((state_val_81473 === (1))){
var inst_81465 = (state_81472[(7)]);
var inst_81465__$1 = new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env);
var state_81472__$1 = (function (){var statearr_81474 = state_81472;
(statearr_81474[(7)] = inst_81465__$1);

return statearr_81474;
})();
if(cljs.core.truth_(inst_81465__$1)){
var statearr_81475_81486 = state_81472__$1;
(statearr_81475_81486[(1)] = (2));

} else {
var statearr_81476_81487 = state_81472__$1;
(statearr_81476_81487[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81473 === (2))){
var inst_81465 = (state_81472[(7)]);
var state_81472__$1 = state_81472;
var statearr_81477_81488 = state_81472__$1;
(statearr_81477_81488[(2)] = inst_81465);

(statearr_81477_81488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81473 === (3))){
var inst_81468 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var state_81472__$1 = state_81472;
var statearr_81478_81489 = state_81472__$1;
(statearr_81478_81489[(2)] = inst_81468);

(statearr_81478_81489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81473 === (4))){
var inst_81470 = (state_81472[(2)]);
var state_81472__$1 = state_81472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81472__$1,inst_81470);
} else {
return null;
}
}
}
}
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81482 = [null,null,null,null,null,null,null,null];
(statearr_81482[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81482[(1)] = (1));

return statearr_81482;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81472){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81483){if((e81483 instanceof Object)){
var ex__42744__auto__ = e81483;
var statearr_81484_81490 = state_81472;
(statearr_81484_81490[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81491 = state_81472;
state_81472 = G__81491;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81472){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_81485 = f__42764__auto__.call(null);
(statearr_81485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?(function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_81499){
var state_val_81500 = (state_81499[(1)]);
if((state_val_81500 === (1))){
var inst_81492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81493 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132)];
var inst_81494 = [(0),"bar",(10),(5)];
var inst_81495 = cljs.core.PersistentHashMap.fromArrays(inst_81493,inst_81494);
var inst_81496 = [inst_81495];
var inst_81497 = (new cljs.core.PersistentVector(null,1,(5),inst_81492,inst_81496,null));
var state_81499__$1 = state_81499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81499__$1,inst_81497);
} else {
return null;
}
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81504 = [null,null,null,null,null,null,null];
(statearr_81504[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81504[(1)] = (1));

return statearr_81504;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81499){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81505){if((e81505 instanceof Object)){
var ex__42744__auto__ = e81505;
var statearr_81506_81632 = state_81499;
(statearr_81506_81632[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81633 = state_81499;
state_81499 = G__81633;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81499){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_81507 = f__42764__auto__.call(null);
(statearr_81507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
})():(function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_81585){
var state_val_81586 = (state_81585[(1)]);
if((state_val_81586 === (7))){
var inst_81520 = (state_81585[(2)]);
var state_81585__$1 = state_81585;
var statearr_81587_81634 = state_81585__$1;
(statearr_81587_81634[(2)] = inst_81520);

(statearr_81587_81634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81586 === (1))){
var inst_81510 = (env == null);
var inst_81511 = cljs.core.not.call(null,inst_81510);
var state_81585__$1 = state_81585;
if(inst_81511){
var statearr_81588_81635 = state_81585__$1;
(statearr_81588_81635[(1)] = (2));

} else {
var statearr_81589_81636 = state_81585__$1;
(statearr_81589_81636[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81586 === (4))){
var inst_81523 = (state_81585[(2)]);
var state_81585__$1 = state_81585;
if(cljs.core.truth_(inst_81523)){
var statearr_81590_81637 = state_81585__$1;
(statearr_81590_81637[(1)] = (8));

} else {
var statearr_81591_81638 = state_81585__$1;
(statearr_81591_81638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81586 === (13))){
var inst_81580 = (state_81585[(2)]);
var inst_81581 = cljs.core.sort_by.call(null,cljs.core.first,inst_81580);
var inst_81582 = cljs.core.map.call(null,cljs.core.second,inst_81581);
var inst_81583 = cljs.core.vec.call(null,inst_81582);
var state_81585__$1 = state_81585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81585__$1,inst_81583);
} else {
if((state_val_81586 === (6))){
var state_81585__$1 = state_81585;
var statearr_81592_81639 = state_81585__$1;
(statearr_81592_81639[(2)] = false);

(statearr_81592_81639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81586 === (3))){
var state_81585__$1 = state_81585;
var statearr_81593_81640 = state_81585__$1;
(statearr_81593_81640[(2)] = false);

(statearr_81593_81640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81586 === (12))){
var inst_81528 = (state_81585[(7)]);
var inst_81530 = (state_81585[(8)]);
var inst_81529 = (state_81585[(9)]);
var inst_81534 = (state_81585[(10)]);
var inst_81537 = (state_81585[(2)]);
var inst_81538 = (inst_81537 | (0));
var inst_81539 = cljs.core.async.chan.call(null);
var inst_81572 = cljs.core.async.chan.call(null,(1));
var inst_81573 = (function (){var map__81508 = inst_81528;
var parser = inst_81529;
var query = inst_81530;
var len = inst_81534;
var time = inst_81538;
var proposals = inst_81539;
var c__42763__auto____$1 = inst_81572;
return ((function (map__81508,parser,query,len,time,proposals,c__42763__auto____$1,inst_81528,inst_81530,inst_81529,inst_81534,inst_81537,inst_81538,inst_81539,inst_81572,state_val_81586,c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (map__81508,parser,query,len,time,proposals,c__42763__auto____$1,inst_81528,inst_81530,inst_81529,inst_81534,inst_81537,inst_81538,inst_81539,inst_81572,state_val_81586,c__42763__auto__){
return (function (state_81570){
var state_val_81571 = (state_81570[(1)]);
if((state_val_81571 === (7))){
var inst_81547 = (state_81570[(7)]);
var inst_81547__$1 = (state_81570[(2)]);
var inst_81548 = (inst_81547__$1[(2)]);
var inst_81549 = (inst_81548 | (0));
var inst_81550 = cljs.core._EQ_.call(null,time,inst_81549);
var state_81570__$1 = (function (){var statearr_81594 = state_81570;
(statearr_81594[(7)] = inst_81547__$1);

return statearr_81594;
})();
if(inst_81550){
var statearr_81595_81641 = state_81570__$1;
(statearr_81595_81641[(1)] = (8));

} else {
var statearr_81596_81642 = state_81570__$1;
(statearr_81596_81642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81571 === (1))){
var inst_81540 = (len - (1));
var inst_81541 = inst_81540;
var state_81570__$1 = (function (){var statearr_81597 = state_81570;
(statearr_81597[(8)] = inst_81541);

return statearr_81597;
})();
var statearr_81598_81643 = state_81570__$1;
(statearr_81598_81643[(2)] = null);

(statearr_81598_81643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81571 === (4))){
var inst_81541 = (state_81570[(8)]);
var inst_81545 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),inst_81541);
var state_81570__$1 = state_81570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81570__$1,(7),inst_81545);
} else {
if((state_val_81571 === (6))){
var inst_81565 = (state_81570[(2)]);
var state_81570__$1 = state_81570;
var statearr_81599_81644 = state_81570__$1;
(statearr_81599_81644[(2)] = inst_81565);

(statearr_81599_81644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81571 === (3))){
var inst_81567 = (state_81570[(2)]);
var inst_81568 = cljs.core.async.close_BANG_.call(null,proposals);
var state_81570__$1 = (function (){var statearr_81600 = state_81570;
(statearr_81600[(9)] = inst_81567);

return statearr_81600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81570__$1,inst_81568);
} else {
if((state_val_81571 === (12))){
var inst_81555 = (state_81570[(2)]);
var state_81570__$1 = state_81570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81570__$1,(11),proposals,inst_81555);
} else {
if((state_val_81571 === (2))){
var inst_81541 = (state_81570[(8)]);
var inst_81543 = (inst_81541 >= (0));
var state_81570__$1 = state_81570;
if(cljs.core.truth_(inst_81543)){
var statearr_81601_81645 = state_81570__$1;
(statearr_81601_81645[(1)] = (4));

} else {
var statearr_81602_81646 = state_81570__$1;
(statearr_81602_81646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81571 === (11))){
var inst_81541 = (state_81570[(8)]);
var inst_81557 = (state_81570[(2)]);
var inst_81558 = (inst_81541 - (1));
var inst_81541__$1 = inst_81558;
var state_81570__$1 = (function (){var statearr_81603 = state_81570;
(statearr_81603[(10)] = inst_81557);

(statearr_81603[(8)] = inst_81541__$1);

return statearr_81603;
})();
var statearr_81604_81647 = state_81570__$1;
(statearr_81604_81647[(2)] = null);

(statearr_81604_81647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81571 === (9))){
var state_81570__$1 = state_81570;
var statearr_81605_81648 = state_81570__$1;
(statearr_81605_81648[(2)] = null);

(statearr_81605_81648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81571 === (5))){
var state_81570__$1 = state_81570;
var statearr_81606_81649 = state_81570__$1;
(statearr_81606_81649[(2)] = null);

(statearr_81606_81649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81571 === (10))){
var inst_81562 = (state_81570[(2)]);
var state_81570__$1 = state_81570;
var statearr_81607_81650 = state_81570__$1;
(statearr_81607_81650[(2)] = inst_81562);

(statearr_81607_81650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81571 === (8))){
var inst_81541 = (state_81570[(8)]);
var inst_81547 = (state_81570[(7)]);
var inst_81552 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),inst_81547,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155),inst_81541);
var inst_81553 = parser.call(null,inst_81552,query);
var state_81570__$1 = state_81570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81570__$1,(12),inst_81553);
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
});})(map__81508,parser,query,len,time,proposals,c__42763__auto____$1,inst_81528,inst_81530,inst_81529,inst_81534,inst_81537,inst_81538,inst_81539,inst_81572,state_val_81586,c__42763__auto__))
;
return ((function (switch__42740__auto__,map__81508,parser,query,len,time,proposals,c__42763__auto____$1,inst_81528,inst_81530,inst_81529,inst_81534,inst_81537,inst_81538,inst_81539,inst_81572,state_val_81586,c__42763__auto__){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_81611[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81611[(1)] = (1));

return statearr_81611;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81570){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81612){if((e81612 instanceof Object)){
var ex__42744__auto__ = e81612;
var statearr_81613_81651 = state_81570;
(statearr_81613_81651[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81652 = state_81570;
state_81570 = G__81652;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81570){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,map__81508,parser,query,len,time,proposals,c__42763__auto____$1,inst_81528,inst_81530,inst_81529,inst_81534,inst_81537,inst_81538,inst_81539,inst_81572,state_val_81586,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_81614 = f__42764__auto__.call(null);
(statearr_81614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto____$1);

return statearr_81614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});
;})(map__81508,parser,query,len,time,proposals,c__42763__auto____$1,inst_81528,inst_81530,inst_81529,inst_81534,inst_81537,inst_81538,inst_81539,inst_81572,state_val_81586,c__42763__auto__))
})();
var inst_81574 = cljs.core.async.impl.dispatch.run.call(null,inst_81573);
var inst_81576 = (function (){var map__81508 = inst_81528;
var parser = inst_81529;
var query = inst_81530;
var len = inst_81534;
var time = inst_81538;
var proposals = inst_81539;
return ((function (map__81508,parser,query,len,time,proposals,inst_81528,inst_81530,inst_81529,inst_81534,inst_81537,inst_81538,inst_81539,inst_81572,inst_81573,inst_81574,state_val_81586,c__42763__auto__){
return (function (acc,p__81575){
var map__81615 = p__81575;
var map__81615__$1 = ((((!((map__81615 == null)))?((((map__81615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81615):map__81615);
var item = map__81615__$1;
var id = cljs.core.get.call(null,map__81615__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.assoc.call(null,acc,id,item);
});
;})(map__81508,parser,query,len,time,proposals,inst_81528,inst_81530,inst_81529,inst_81534,inst_81537,inst_81538,inst_81539,inst_81572,inst_81573,inst_81574,state_val_81586,c__42763__auto__))
})();
var inst_81577 = cljs.core.PersistentHashMap.EMPTY;
var inst_81578 = cljs.core.async.reduce.call(null,inst_81576,inst_81577,inst_81539);
var state_81585__$1 = (function (){var statearr_81617 = state_81585;
(statearr_81617[(11)] = inst_81574);

return statearr_81617;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81585__$1,(13),inst_81578);
} else {
if((state_val_81586 === (2))){
var inst_81513 = env.cljs$lang$protocol_mask$partition0$;
var inst_81514 = (inst_81513 & (64));
var inst_81515 = env.cljs$core$ISeq$;
var inst_81516 = (inst_81514) || (inst_81515);
var state_81585__$1 = state_81585;
if(cljs.core.truth_(inst_81516)){
var statearr_81618_81653 = state_81585__$1;
(statearr_81618_81653[(1)] = (5));

} else {
var statearr_81619_81654 = state_81585__$1;
(statearr_81619_81654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81586 === (11))){
var inst_81533 = (state_81585[(2)]);
var inst_81534 = (inst_81533 | (0));
var inst_81535 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"startOfDay","startOfDay",-1097735630));
var state_81585__$1 = (function (){var statearr_81620 = state_81585;
(statearr_81620[(10)] = inst_81534);

return statearr_81620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81585__$1,(12),inst_81535);
} else {
if((state_val_81586 === (9))){
var state_81585__$1 = state_81585;
var statearr_81621_81655 = state_81585__$1;
(statearr_81621_81655[(2)] = env);

(statearr_81621_81655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81586 === (5))){
var state_81585__$1 = state_81585;
var statearr_81622_81656 = state_81585__$1;
(statearr_81622_81656[(2)] = true);

(statearr_81622_81656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81586 === (10))){
var inst_81528 = (state_81585[(7)]);
var inst_81528__$1 = (state_81585[(2)]);
var inst_81529 = cljs.core.get.call(null,inst_81528__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_81530 = cljs.core.get.call(null,inst_81528__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_81531 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposalsLength","proposalsLength",1061236851));
var state_81585__$1 = (function (){var statearr_81623 = state_81585;
(statearr_81623[(7)] = inst_81528__$1);

(statearr_81623[(8)] = inst_81530);

(statearr_81623[(9)] = inst_81529);

return statearr_81623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81585__$1,(11),inst_81531);
} else {
if((state_val_81586 === (8))){
var inst_81525 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_81585__$1 = state_81585;
var statearr_81624_81657 = state_81585__$1;
(statearr_81624_81657[(2)] = inst_81525);

(statearr_81624_81657[(1)] = (10));


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
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81628 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81628[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81628[(1)] = (1));

return statearr_81628;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81585){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81629){if((e81629 instanceof Object)){
var ex__42744__auto__ = e81629;
var statearr_81630_81658 = state_81585;
(statearr_81630_81658[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81659 = state_81585;
state_81585 = G__81659;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81585){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_81631 = f__42764__auto__.call(null);
(statearr_81631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__81660__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__81660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81661__i = 0, G__81661__a = new Array(arguments.length -  0);
while (G__81661__i < G__81661__a.length) {G__81661__a[G__81661__i] = arguments[G__81661__i + 0]; ++G__81661__i;}
  args = new cljs.core.IndexedSeq(G__81661__a,0);
} 
return G__81660__delegate.call(this,args);};
G__81660.cljs$lang$maxFixedArity = 0;
G__81660.cljs$lang$applyTo = (function (arglist__81662){
var args = cljs.core.seq(arglist__81662);
return G__81660__delegate(args);
});
G__81660.cljs$core$IFn$_invoke$arity$variadic = G__81660__delegate;
return G__81660;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),(function() { 
var G__81663__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__81663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81664__i = 0, G__81664__a = new Array(arguments.length -  0);
while (G__81664__i < G__81664__a.length) {G__81664__a[G__81664__i] = arguments[G__81664__i + 0]; ++G__81664__i;}
  args = new cljs.core.IndexedSeq(G__81664__a,0);
} 
return G__81663__delegate.call(this,args);};
G__81663.cljs$lang$maxFixedArity = 0;
G__81663.cljs$lang$applyTo = (function (arglist__81665){
var args = cljs.core.seq(arglist__81665);
return G__81663__delegate(args);
});
G__81663.cljs$core$IFn$_invoke$arity$variadic = G__81663__delegate;
return G__81663;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?(function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_81673){
var state_val_81674 = (state_81673[(1)]);
if((state_val_81674 === (1))){
var inst_81666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81667 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031),new cljs.core.Keyword("stake","address","stake/address",680266700)];
var inst_81668 = [(0),(1000),"12345"];
var inst_81669 = cljs.core.PersistentHashMap.fromArrays(inst_81667,inst_81668);
var inst_81670 = [inst_81669];
var inst_81671 = (new cljs.core.PersistentVector(null,1,(5),inst_81666,inst_81670,null));
var state_81673__$1 = state_81673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81673__$1,inst_81671);
} else {
return null;
}
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81678 = [null,null,null,null,null,null,null];
(statearr_81678[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81678[(1)] = (1));

return statearr_81678;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81673){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81679){if((e81679 instanceof Object)){
var ex__42744__auto__ = e81679;
var statearr_81680_81809 = state_81673;
(statearr_81680_81809[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81810 = state_81673;
state_81673 = G__81810;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81673){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_81681 = f__42764__auto__.call(null);
(statearr_81681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
})():(function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_81767){
var state_val_81768 = (state_81767[(1)]);
if((state_val_81768 === (7))){
var inst_81705 = (state_81767[(2)]);
var inst_81706 = cljs.core.range.call(null,inst_81705);
var inst_81707 = cljs.core.seq.call(null,inst_81706);
var inst_81708 = inst_81707;
var inst_81709 = null;
var inst_81710 = (0);
var inst_81711 = (0);
var state_81767__$1 = (function (){var statearr_81769 = state_81767;
(statearr_81769[(7)] = inst_81710);

(statearr_81769[(8)] = inst_81711);

(statearr_81769[(9)] = inst_81709);

(statearr_81769[(10)] = inst_81708);

return statearr_81769;
})();
var statearr_81770_81811 = state_81767__$1;
(statearr_81770_81811[(2)] = null);

(statearr_81770_81811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (20))){
var inst_81757 = (state_81767[(2)]);
var state_81767__$1 = state_81767;
var statearr_81771_81812 = state_81767__$1;
(statearr_81771_81812[(2)] = inst_81757);

(statearr_81771_81812[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (1))){
var inst_81682 = cljs.core.PersistentVector.EMPTY;
var inst_81683 = cljs.core.atom.call(null,inst_81682);
var inst_81684 = ui.core.get_network.call(null);
var state_81767__$1 = (function (){var statearr_81772 = state_81767;
(statearr_81772[(11)] = inst_81683);

return statearr_81772;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81767__$1,(2),inst_81684);
} else {
if((state_val_81768 === (4))){
var inst_81694 = alert("Fatal Error: EthereanMind is missing data on the blockchain. Please make sure you have MetaMask set to the \"Ethereum Ropsten Test Network\".\n\n(Other possible reasons for this error may include an ongoing blockchain attack or an outage of the Infuria system.)");
var state_81767__$1 = state_81767;
var statearr_81773_81813 = state_81767__$1;
(statearr_81773_81813[(2)] = inst_81694);

(statearr_81773_81813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (15))){
var inst_81732 = (state_81767[(12)]);
var inst_81734 = cljs.core.chunked_seq_QMARK_.call(null,inst_81732);
var state_81767__$1 = state_81767;
if(inst_81734){
var statearr_81774_81814 = state_81767__$1;
(statearr_81774_81814[(1)] = (18));

} else {
var statearr_81775_81815 = state_81767__$1;
(statearr_81775_81815[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (21))){
var inst_81698 = (state_81767[(13)]);
var inst_81744 = (state_81767[(14)]);
var inst_81744__$1 = (state_81767[(2)]);
var inst_81745 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_81746 = ui.core.chan_call.call(null,inst_81698,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_81744__$1);
var state_81767__$1 = (function (){var statearr_81776 = state_81767;
(statearr_81776[(14)] = inst_81744__$1);

(statearr_81776[(15)] = inst_81745);

return statearr_81776;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81767__$1,(22),inst_81746);
} else {
if((state_val_81768 === (13))){
var inst_81698 = (state_81767[(13)]);
var inst_81719 = (state_81767[(16)]);
var inst_81719__$1 = (state_81767[(2)]);
var inst_81720 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_81721 = ui.core.chan_call.call(null,inst_81698,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_81719__$1);
var state_81767__$1 = (function (){var statearr_81777 = state_81767;
(statearr_81777[(17)] = inst_81720);

(statearr_81777[(16)] = inst_81719__$1);

return statearr_81777;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81767__$1,(14),inst_81721);
} else {
if((state_val_81768 === (22))){
var inst_81732 = (state_81767[(12)]);
var inst_81744 = (state_81767[(14)]);
var inst_81683 = (state_81767[(11)]);
var inst_81745 = (state_81767[(15)]);
var inst_81748 = (state_81767[(2)]);
var inst_81749 = (inst_81748[(0)]);
var inst_81750 = ui.core.wei__GT_eth.call(null,inst_81749);
var inst_81751 = [inst_81744,inst_81750];
var inst_81752 = cljs.core.PersistentHashMap.fromArrays(inst_81745,inst_81751);
var inst_81753 = cljs.core.swap_BANG_.call(null,inst_81683,cljs.core.conj,inst_81752);
var inst_81754 = cljs.core.next.call(null,inst_81732);
var inst_81708 = inst_81754;
var inst_81709 = null;
var inst_81710 = (0);
var inst_81711 = (0);
var state_81767__$1 = (function (){var statearr_81778 = state_81767;
(statearr_81778[(7)] = inst_81710);

(statearr_81778[(8)] = inst_81711);

(statearr_81778[(18)] = inst_81753);

(statearr_81778[(9)] = inst_81709);

(statearr_81778[(10)] = inst_81708);

return statearr_81778;
})();
var statearr_81779_81816 = state_81767__$1;
(statearr_81779_81816[(2)] = null);

(statearr_81779_81816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (6))){
var inst_81689 = (state_81767[(19)]);
var inst_81698 = (state_81767[(13)]);
var inst_81697 = (state_81767[(2)]);
var inst_81698__$1 = ui.core.contract.call(null,ui.contract.staking_abi,inst_81689);
var inst_81703 = ui.core.chan_call.call(null,inst_81698__$1,new cljs.core.Keyword(null,"depositLength","depositLength",788194150));
var state_81767__$1 = (function (){var statearr_81780 = state_81767;
(statearr_81780[(13)] = inst_81698__$1);

(statearr_81780[(20)] = inst_81697);

return statearr_81780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81767__$1,(7),inst_81703);
} else {
if((state_val_81768 === (17))){
var inst_81760 = (state_81767[(2)]);
var state_81767__$1 = state_81767;
var statearr_81781_81817 = state_81767__$1;
(statearr_81781_81817[(2)] = inst_81760);

(statearr_81781_81817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (3))){
var inst_81689 = (state_81767[(19)]);
var inst_81686 = (state_81767[(21)]);
var inst_81689__$1 = (state_81767[(2)]);
var inst_81690 = cljs.core._EQ_.call(null,inst_81686,(3));
var inst_81691 = cljs.core._EQ_.call(null,inst_81689__$1,"0x");
var inst_81692 = (inst_81690) && (inst_81691);
var state_81767__$1 = (function (){var statearr_81782 = state_81767;
(statearr_81782[(19)] = inst_81689__$1);

return statearr_81782;
})();
if(cljs.core.truth_(inst_81692)){
var statearr_81783_81818 = state_81767__$1;
(statearr_81783_81818[(1)] = (4));

} else {
var statearr_81784_81819 = state_81767__$1;
(statearr_81784_81819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (12))){
var inst_81762 = (state_81767[(2)]);
var state_81767__$1 = state_81767;
var statearr_81785_81820 = state_81767__$1;
(statearr_81785_81820[(2)] = inst_81762);

(statearr_81785_81820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (2))){
var inst_81686 = (state_81767[(2)]);
var inst_81687 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_81767__$1 = (function (){var statearr_81786 = state_81767;
(statearr_81786[(21)] = inst_81686);

return statearr_81786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81767__$1,(3),inst_81687);
} else {
if((state_val_81768 === (19))){
var inst_81732 = (state_81767[(12)]);
var inst_81698 = (state_81767[(13)]);
var inst_81741 = cljs.core.first.call(null,inst_81732);
var inst_81742 = ui.core.chan_call.call(null,inst_81698,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_81741);
var state_81767__$1 = state_81767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81767__$1,(21),inst_81742);
} else {
if((state_val_81768 === (11))){
var inst_81732 = (state_81767[(12)]);
var inst_81708 = (state_81767[(10)]);
var inst_81732__$1 = cljs.core.seq.call(null,inst_81708);
var state_81767__$1 = (function (){var statearr_81787 = state_81767;
(statearr_81787[(12)] = inst_81732__$1);

return statearr_81787;
})();
if(inst_81732__$1){
var statearr_81788_81821 = state_81767__$1;
(statearr_81788_81821[(1)] = (15));

} else {
var statearr_81789_81822 = state_81767__$1;
(statearr_81789_81822[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (9))){
var inst_81683 = (state_81767[(11)]);
var inst_81764 = (state_81767[(2)]);
var inst_81765 = cljs.core.deref.call(null,inst_81683);
var state_81767__$1 = (function (){var statearr_81793 = state_81767;
(statearr_81793[(22)] = inst_81764);

return statearr_81793;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81767__$1,inst_81765);
} else {
if((state_val_81768 === (5))){
var state_81767__$1 = state_81767;
var statearr_81794_81823 = state_81767__$1;
(statearr_81794_81823[(2)] = null);

(statearr_81794_81823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (14))){
var inst_81710 = (state_81767[(7)]);
var inst_81720 = (state_81767[(17)]);
var inst_81711 = (state_81767[(8)]);
var inst_81683 = (state_81767[(11)]);
var inst_81709 = (state_81767[(9)]);
var inst_81708 = (state_81767[(10)]);
var inst_81719 = (state_81767[(16)]);
var inst_81723 = (state_81767[(2)]);
var inst_81724 = (inst_81723[(0)]);
var inst_81725 = ui.core.wei__GT_eth.call(null,inst_81724);
var inst_81726 = [inst_81719,inst_81725];
var inst_81727 = cljs.core.PersistentHashMap.fromArrays(inst_81720,inst_81726);
var inst_81728 = cljs.core.swap_BANG_.call(null,inst_81683,cljs.core.conj,inst_81727);
var inst_81729 = (inst_81711 + (1));
var tmp81790 = inst_81710;
var tmp81791 = inst_81709;
var tmp81792 = inst_81708;
var inst_81708__$1 = tmp81792;
var inst_81709__$1 = tmp81791;
var inst_81710__$1 = tmp81790;
var inst_81711__$1 = inst_81729;
var state_81767__$1 = (function (){var statearr_81795 = state_81767;
(statearr_81795[(7)] = inst_81710__$1);

(statearr_81795[(8)] = inst_81711__$1);

(statearr_81795[(23)] = inst_81728);

(statearr_81795[(9)] = inst_81709__$1);

(statearr_81795[(10)] = inst_81708__$1);

return statearr_81795;
})();
var statearr_81796_81824 = state_81767__$1;
(statearr_81796_81824[(2)] = null);

(statearr_81796_81824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (16))){
var state_81767__$1 = state_81767;
var statearr_81797_81825 = state_81767__$1;
(statearr_81797_81825[(2)] = null);

(statearr_81797_81825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (10))){
var inst_81711 = (state_81767[(8)]);
var inst_81698 = (state_81767[(13)]);
var inst_81709 = (state_81767[(9)]);
var inst_81716 = cljs.core._nth.call(null,inst_81709,inst_81711);
var inst_81717 = ui.core.chan_call.call(null,inst_81698,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_81716);
var state_81767__$1 = state_81767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81767__$1,(13),inst_81717);
} else {
if((state_val_81768 === (18))){
var inst_81732 = (state_81767[(12)]);
var inst_81736 = cljs.core.chunk_first.call(null,inst_81732);
var inst_81737 = cljs.core.chunk_rest.call(null,inst_81732);
var inst_81738 = cljs.core.count.call(null,inst_81736);
var inst_81708 = inst_81737;
var inst_81709 = inst_81736;
var inst_81710 = inst_81738;
var inst_81711 = (0);
var state_81767__$1 = (function (){var statearr_81798 = state_81767;
(statearr_81798[(7)] = inst_81710);

(statearr_81798[(8)] = inst_81711);

(statearr_81798[(9)] = inst_81709);

(statearr_81798[(10)] = inst_81708);

return statearr_81798;
})();
var statearr_81799_81826 = state_81767__$1;
(statearr_81799_81826[(2)] = null);

(statearr_81799_81826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81768 === (8))){
var inst_81710 = (state_81767[(7)]);
var inst_81711 = (state_81767[(8)]);
var inst_81713 = (inst_81711 < inst_81710);
var inst_81714 = inst_81713;
var state_81767__$1 = state_81767;
if(cljs.core.truth_(inst_81714)){
var statearr_81800_81827 = state_81767__$1;
(statearr_81800_81827[(1)] = (10));

} else {
var statearr_81801_81828 = state_81767__$1;
(statearr_81801_81828[(1)] = (11));

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
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81805[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81805[(1)] = (1));

return statearr_81805;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81767){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81806){if((e81806 instanceof Object)){
var ex__42744__auto__ = e81806;
var statearr_81807_81829 = state_81767;
(statearr_81807_81829[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81830 = state_81767;
state_81767 = G__81830;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81767){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_81808 = f__42764__auto__.call(null);
(statearr_81808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,dispatch_key,params){
var map__81831 = env;
var map__81831__$1 = ((((!((map__81831 == null)))?((((map__81831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81831):map__81831);
var item_id = cljs.core.get.call(null,map__81831__$1,new cljs.core.Keyword(null,"item-id","item-id",-1804511607));
var item = cljs.core.get.call(null,map__81831__$1,new cljs.core.Keyword(null,"item","item",249373802));
var update_time = ((item[(1)]) | (0));
var fun = ((function (map__81831,map__81831__$1,item_id,item,update_time){
return (function (index){
if((update_time === (0))){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time){
return (function (state_81847){
var state_val_81848 = (state_81847[(1)]);
if((state_val_81848 === (1))){
var inst_81833 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_81834 = (index === (0));
var state_81847__$1 = (function (){var statearr_81849 = state_81847;
(statearr_81849[(7)] = inst_81833);

return statearr_81849;
})();
if(cljs.core.truth_(inst_81834)){
var statearr_81850_81907 = state_81847__$1;
(statearr_81850_81907[(1)] = (2));

} else {
var statearr_81851_81908 = state_81847__$1;
(statearr_81851_81908[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81848 === (2))){
var state_81847__$1 = state_81847;
var statearr_81852_81909 = state_81847__$1;
(statearr_81852_81909[(2)] = (0));

(statearr_81852_81909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81848 === (3))){
var state_81847__$1 = state_81847;
var statearr_81853_81910 = state_81847__$1;
(statearr_81853_81910[(2)] = 1.0E-4);

(statearr_81853_81910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81848 === (4))){
var inst_81838 = (state_81847[(2)]);
var inst_81839 = (index === (0));
var state_81847__$1 = (function (){var statearr_81854 = state_81847;
(statearr_81854[(8)] = inst_81838);

return statearr_81854;
})();
if(cljs.core.truth_(inst_81839)){
var statearr_81855_81911 = state_81847__$1;
(statearr_81855_81911[(1)] = (5));

} else {
var statearr_81856_81912 = state_81847__$1;
(statearr_81856_81912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81848 === (5))){
var state_81847__$1 = state_81847;
var statearr_81857_81913 = state_81847__$1;
(statearr_81857_81913[(2)] = (0));

(statearr_81857_81913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81848 === (6))){
var state_81847__$1 = state_81847;
var statearr_81858_81914 = state_81847__$1;
(statearr_81858_81914[(2)] = 1.0E-4);

(statearr_81858_81914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81848 === (7))){
var inst_81833 = (state_81847[(7)]);
var inst_81838 = (state_81847[(8)]);
var inst_81843 = (state_81847[(2)]);
var inst_81844 = [inst_81838,inst_81843];
var inst_81845 = cljs.core.PersistentHashMap.fromArrays(inst_81833,inst_81844);
var state_81847__$1 = state_81847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81847__$1,inst_81845);
} else {
return null;
}
}
}
}
}
}
}
});})(c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time))
;
return ((function (switch__42740__auto__,c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81862 = [null,null,null,null,null,null,null,null,null];
(statearr_81862[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81862[(1)] = (1));

return statearr_81862;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81847){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81863){if((e81863 instanceof Object)){
var ex__42744__auto__ = e81863;
var statearr_81864_81915 = state_81847;
(statearr_81864_81915[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81916 = state_81847;
state_81847 = G__81916;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81847){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time))
})();
var state__42765__auto__ = (function (){var statearr_81865 = f__42764__auto__.call(null);
(statearr_81865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time))
);

return c__42763__auto__;
} else {
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time){
return (function (state_81877){
var state_val_81878 = (state_81877[(1)]);
if((state_val_81878 === (1))){
var inst_81866 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"itemVoteInfo","itemVoteInfo",-383659653),item_id,index);
var state_81877__$1 = state_81877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81877__$1,(2),inst_81866);
} else {
if((state_val_81878 === (2))){
var inst_81868 = (state_81877[(2)]);
var inst_81869 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_81870 = (inst_81868[(0)]);
var inst_81871 = ui.core.wei__GT_eth.call(null,inst_81870);
var inst_81872 = (inst_81868[(1)]);
var inst_81873 = ui.core.wei__GT_eth.call(null,inst_81872);
var inst_81874 = [inst_81871,inst_81873];
var inst_81875 = cljs.core.PersistentHashMap.fromArrays(inst_81869,inst_81874);
var state_81877__$1 = state_81877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81877__$1,inst_81875);
} else {
return null;
}
}
});})(c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time))
;
return ((function (switch__42740__auto__,c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81882 = [null,null,null,null,null,null,null];
(statearr_81882[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81882[(1)] = (1));

return statearr_81882;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81877){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81883){if((e81883 instanceof Object)){
var ex__42744__auto__ = e81883;
var statearr_81884_81917 = state_81877;
(statearr_81884_81917[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81918 = state_81877;
state_81877 = G__81918;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81877){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time))
})();
var state__42765__auto__ = (function (){var statearr_81885 = f__42764__auto__.call(null);
(statearr_81885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time))
);

return c__42763__auto__;
}
});})(map__81831,map__81831__$1,item_id,item,update_time))
;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time,fun){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time,fun){
return (function (state_81896){
var state_val_81897 = (state_81896[(1)]);
if((state_val_81897 === (1))){
var inst_81886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81887 = fun.call(null,(0));
var state_81896__$1 = (function (){var statearr_81898 = state_81896;
(statearr_81898[(7)] = inst_81886);

return statearr_81898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81896__$1,(2),inst_81887);
} else {
if((state_val_81897 === (2))){
var inst_81889 = (state_81896[(2)]);
var inst_81890 = fun.call(null,(1));
var state_81896__$1 = (function (){var statearr_81899 = state_81896;
(statearr_81899[(8)] = inst_81889);

return statearr_81899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81896__$1,(3),inst_81890);
} else {
if((state_val_81897 === (3))){
var inst_81886 = (state_81896[(7)]);
var inst_81889 = (state_81896[(8)]);
var inst_81892 = (state_81896[(2)]);
var inst_81893 = [inst_81889,inst_81892];
var inst_81894 = (new cljs.core.PersistentVector(null,2,(5),inst_81886,inst_81893,null));
var state_81896__$1 = state_81896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81896__$1,inst_81894);
} else {
return null;
}
}
}
});})(c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time,fun))
;
return ((function (switch__42740__auto__,c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time,fun){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81903 = [null,null,null,null,null,null,null,null,null];
(statearr_81903[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81903[(1)] = (1));

return statearr_81903;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81896){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81904){if((e81904 instanceof Object)){
var ex__42744__auto__ = e81904;
var statearr_81905_81919 = state_81896;
(statearr_81905_81919[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81920 = state_81896;
state_81896 = G__81920;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81896){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time,fun))
})();
var state__42765__auto__ = (function (){var statearr_81906 = f__42764__auto__.call(null);
(statearr_81906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,map__81831,map__81831__$1,item_id,item,update_time,fun))
);

return c__42763__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("item","description","item/description",-1431609213),(function (env,dispatch_key,params){
var proposal_index = ((new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env)[(0)]) | (0));
var update_time = ((new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env)[(1)]) | (0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,proposal_index,update_time){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,proposal_index,update_time){
return (function (state_81937){
var state_val_81938 = (state_81937[(1)]);
if((state_val_81938 === (1))){
var inst_81921 = (proposal_index === (0));
var state_81937__$1 = state_81937;
if(cljs.core.truth_(inst_81921)){
var statearr_81939_81950 = state_81937__$1;
(statearr_81939_81950[(1)] = (2));

} else {
var statearr_81940_81951 = state_81937__$1;
(statearr_81940_81951[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81938 === (2))){
var inst_81923 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var inst_81924 = ui.core.starting_items.call(null,inst_81923);
var state_81937__$1 = state_81937;
var statearr_81941_81952 = state_81937__$1;
(statearr_81941_81952[(2)] = inst_81924);

(statearr_81941_81952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81938 === (3))){
var inst_81926 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),proposal_index);
var state_81937__$1 = state_81937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81937__$1,(5),inst_81926);
} else {
if((state_val_81938 === (4))){
var inst_81935 = (state_81937[(2)]);
var state_81937__$1 = state_81937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81937__$1,inst_81935);
} else {
if((state_val_81938 === (5))){
var inst_81928 = (state_81937[(2)]);
var inst_81929 = (inst_81928[(3)]);
var inst_81930 = (inst_81929 | (0));
var inst_81931 = ui.core.get_proposal_description.call(null,inst_81930,proposal_index);
var state_81937__$1 = state_81937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81937__$1,(6),inst_81931);
} else {
if((state_val_81938 === (6))){
var inst_81933 = (state_81937[(2)]);
var state_81937__$1 = state_81937;
var statearr_81942_81953 = state_81937__$1;
(statearr_81942_81953[(2)] = inst_81933);

(statearr_81942_81953[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__42763__auto__,proposal_index,update_time))
;
return ((function (switch__42740__auto__,c__42763__auto__,proposal_index,update_time){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_81946 = [null,null,null,null,null,null,null];
(statearr_81946[(0)] = ui$core$state_machine__42741__auto__);

(statearr_81946[(1)] = (1));

return statearr_81946;
});
var ui$core$state_machine__42741__auto____1 = (function (state_81937){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_81937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e81947){if((e81947 instanceof Object)){
var ex__42744__auto__ = e81947;
var statearr_81948_81954 = state_81937;
(statearr_81948_81954[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81955 = state_81937;
state_81937 = G__81955;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_81937){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_81937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,proposal_index,update_time))
})();
var state__42765__auto__ = (function (){var statearr_81949 = f__42764__auto__.call(null);
(statearr_81949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_81949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,proposal_index,update_time))
);

return c__42763__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","items","etherean/items",165918606),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?cljs.core.ex_info.call(null,"not implemented",cljs.core.PersistentArrayMap.EMPTY):(function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_82038){
var state_val_82039 = (state_82038[(1)]);
if((state_val_82039 === (7))){
var inst_81968 = (state_82038[(2)]);
var state_82038__$1 = state_82038;
var statearr_82040_82084 = state_82038__$1;
(statearr_82040_82084[(2)] = inst_81968);

(statearr_82040_82084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (20))){
var inst_82031 = (state_82038[(2)]);
var state_82038__$1 = state_82038;
var statearr_82041_82085 = state_82038__$1;
(statearr_82041_82085[(2)] = inst_82031);

(statearr_82041_82085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (1))){
var inst_81958 = (env == null);
var inst_81959 = cljs.core.not.call(null,inst_81958);
var state_82038__$1 = state_82038;
if(inst_81959){
var statearr_82042_82086 = state_82038__$1;
(statearr_82042_82086[(1)] = (2));

} else {
var statearr_82043_82087 = state_82038__$1;
(statearr_82043_82087[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (24))){
var inst_81977 = (state_82038[(7)]);
var inst_82016 = (state_82038[(8)]);
var inst_81978 = (state_82038[(9)]);
var inst_82019 = (state_82038[(2)]);
var inst_82020 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_82019,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_82016);
var inst_82021 = inst_81977.call(null,inst_82020,inst_81978);
var state_82038__$1 = state_82038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82038__$1,(25),inst_82021);
} else {
if((state_val_82039 === (4))){
var inst_81971 = (state_82038[(2)]);
var state_82038__$1 = state_82038;
if(cljs.core.truth_(inst_81971)){
var statearr_82044_82088 = state_82038__$1;
(statearr_82044_82088[(1)] = (8));

} else {
var statearr_82045_82089 = state_82038__$1;
(statearr_82045_82089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (15))){
var inst_82033 = (state_82038[(2)]);
var state_82038__$1 = state_82038;
var statearr_82046_82090 = state_82038__$1;
(statearr_82046_82090[(2)] = inst_82033);

(statearr_82046_82090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (21))){
var inst_82007 = (state_82038[(10)]);
var inst_82011 = cljs.core.chunk_first.call(null,inst_82007);
var inst_82012 = cljs.core.chunk_rest.call(null,inst_82007);
var inst_82013 = cljs.core.count.call(null,inst_82011);
var inst_81987 = inst_82012;
var inst_81988 = inst_82011;
var inst_81989 = inst_82013;
var inst_81990 = (0);
var state_82038__$1 = (function (){var statearr_82047 = state_82038;
(statearr_82047[(11)] = inst_81988);

(statearr_82047[(12)] = inst_81987);

(statearr_82047[(13)] = inst_81989);

(statearr_82047[(14)] = inst_81990);

return statearr_82047;
})();
var statearr_82048_82091 = state_82038__$1;
(statearr_82048_82091[(2)] = null);

(statearr_82048_82091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (13))){
var inst_81995 = (state_82038[(15)]);
var inst_81988 = (state_82038[(11)]);
var inst_81990 = (state_82038[(14)]);
var inst_81995__$1 = cljs.core._nth.call(null,inst_81988,inst_81990);
var inst_81996 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_81995__$1);
var state_82038__$1 = (function (){var statearr_82049 = state_82038;
(statearr_82049[(15)] = inst_81995__$1);

return statearr_82049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82038__$1,(16),inst_81996);
} else {
if((state_val_82039 === (22))){
var inst_82007 = (state_82038[(10)]);
var inst_82016 = (state_82038[(8)]);
var inst_82016__$1 = cljs.core.first.call(null,inst_82007);
var inst_82017 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_82016__$1);
var state_82038__$1 = (function (){var statearr_82050 = state_82038;
(statearr_82050[(8)] = inst_82016__$1);

return statearr_82050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82038__$1,(24),inst_82017);
} else {
if((state_val_82039 === (6))){
var state_82038__$1 = state_82038;
var statearr_82054_82092 = state_82038__$1;
(statearr_82054_82092[(2)] = false);

(statearr_82054_82092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (25))){
var inst_82007 = (state_82038[(10)]);
var inst_82016 = (state_82038[(8)]);
var inst_81980 = (state_82038[(16)]);
var inst_82023 = (state_82038[(2)]);
var inst_82024 = cljs.core.swap_BANG_.call(null,inst_81980,cljs.core.assoc,inst_82016,inst_82023);
var inst_82025 = cljs.core.next.call(null,inst_82007);
var inst_81987 = inst_82025;
var inst_81988 = null;
var inst_81989 = (0);
var inst_81990 = (0);
var state_82038__$1 = (function (){var statearr_82055 = state_82038;
(statearr_82055[(17)] = inst_82024);

(statearr_82055[(11)] = inst_81988);

(statearr_82055[(12)] = inst_81987);

(statearr_82055[(13)] = inst_81989);

(statearr_82055[(14)] = inst_81990);

return statearr_82055;
})();
var statearr_82056_82093 = state_82038__$1;
(statearr_82056_82093[(2)] = null);

(statearr_82056_82093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (17))){
var inst_81995 = (state_82038[(15)]);
var inst_81988 = (state_82038[(11)]);
var inst_81987 = (state_82038[(12)]);
var inst_81980 = (state_82038[(16)]);
var inst_81989 = (state_82038[(13)]);
var inst_81990 = (state_82038[(14)]);
var inst_82002 = (state_82038[(2)]);
var inst_82003 = cljs.core.swap_BANG_.call(null,inst_81980,cljs.core.assoc,inst_81995,inst_82002);
var inst_82004 = (inst_81990 + (1));
var tmp82051 = inst_81988;
var tmp82052 = inst_81987;
var tmp82053 = inst_81989;
var inst_81987__$1 = tmp82052;
var inst_81988__$1 = tmp82051;
var inst_81989__$1 = tmp82053;
var inst_81990__$1 = inst_82004;
var state_82038__$1 = (function (){var statearr_82057 = state_82038;
(statearr_82057[(11)] = inst_81988__$1);

(statearr_82057[(12)] = inst_81987__$1);

(statearr_82057[(18)] = inst_82003);

(statearr_82057[(13)] = inst_81989__$1);

(statearr_82057[(14)] = inst_81990__$1);

return statearr_82057;
})();
var statearr_82058_82094 = state_82038__$1;
(statearr_82058_82094[(2)] = null);

(statearr_82058_82094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (3))){
var state_82038__$1 = state_82038;
var statearr_82059_82095 = state_82038__$1;
(statearr_82059_82095[(2)] = false);

(statearr_82059_82095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (12))){
var inst_81980 = (state_82038[(16)]);
var inst_82035 = (state_82038[(2)]);
var inst_82036 = cljs.core.deref.call(null,inst_81980);
var state_82038__$1 = (function (){var statearr_82060 = state_82038;
(statearr_82060[(19)] = inst_82035);

return statearr_82060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82038__$1,inst_82036);
} else {
if((state_val_82039 === (2))){
var inst_81961 = env.cljs$lang$protocol_mask$partition0$;
var inst_81962 = (inst_81961 & (64));
var inst_81963 = env.cljs$core$ISeq$;
var inst_81964 = (inst_81962) || (inst_81963);
var state_82038__$1 = state_82038;
if(cljs.core.truth_(inst_81964)){
var statearr_82061_82096 = state_82038__$1;
(statearr_82061_82096[(1)] = (5));

} else {
var statearr_82062_82097 = state_82038__$1;
(statearr_82062_82097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (23))){
var inst_82028 = (state_82038[(2)]);
var state_82038__$1 = state_82038;
var statearr_82063_82098 = state_82038__$1;
(statearr_82063_82098[(2)] = inst_82028);

(statearr_82063_82098[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (19))){
var state_82038__$1 = state_82038;
var statearr_82064_82099 = state_82038__$1;
(statearr_82064_82099[(2)] = null);

(statearr_82064_82099[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (11))){
var inst_81989 = (state_82038[(13)]);
var inst_81990 = (state_82038[(14)]);
var inst_81992 = (inst_81990 < inst_81989);
var inst_81993 = inst_81992;
var state_82038__$1 = state_82038;
if(cljs.core.truth_(inst_81993)){
var statearr_82065_82100 = state_82038__$1;
(statearr_82065_82100[(1)] = (13));

} else {
var statearr_82066_82101 = state_82038__$1;
(statearr_82066_82101[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (9))){
var state_82038__$1 = state_82038;
var statearr_82067_82102 = state_82038__$1;
(statearr_82067_82102[(2)] = env);

(statearr_82067_82102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (5))){
var state_82038__$1 = state_82038;
var statearr_82068_82103 = state_82038__$1;
(statearr_82068_82103[(2)] = true);

(statearr_82068_82103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (14))){
var inst_82007 = (state_82038[(10)]);
var inst_81987 = (state_82038[(12)]);
var inst_82007__$1 = cljs.core.seq.call(null,inst_81987);
var state_82038__$1 = (function (){var statearr_82069 = state_82038;
(statearr_82069[(10)] = inst_82007__$1);

return statearr_82069;
})();
if(inst_82007__$1){
var statearr_82070_82104 = state_82038__$1;
(statearr_82070_82104[(1)] = (18));

} else {
var statearr_82071_82105 = state_82038__$1;
(statearr_82071_82105[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (16))){
var inst_81995 = (state_82038[(15)]);
var inst_81977 = (state_82038[(7)]);
var inst_81978 = (state_82038[(9)]);
var inst_81998 = (state_82038[(2)]);
var inst_81999 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_81998,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_81995);
var inst_82000 = inst_81977.call(null,inst_81999,inst_81978);
var state_82038__$1 = state_82038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82038__$1,(17),inst_82000);
} else {
if((state_val_82039 === (10))){
var inst_81976 = (state_82038[(2)]);
var inst_81977 = cljs.core.get.call(null,inst_81976,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_81978 = cljs.core.get.call(null,inst_81976,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_81979 = cljs.core.PersistentVector.EMPTY;
var inst_81980 = cljs.core.atom.call(null,inst_81979);
var inst_81985 = cljs.core.range.call(null,ui.core.max_items);
var inst_81986 = cljs.core.seq.call(null,inst_81985);
var inst_81987 = inst_81986;
var inst_81988 = null;
var inst_81989 = (0);
var inst_81990 = (0);
var state_82038__$1 = (function (){var statearr_82072 = state_82038;
(statearr_82072[(7)] = inst_81977);

(statearr_82072[(11)] = inst_81988);

(statearr_82072[(12)] = inst_81987);

(statearr_82072[(16)] = inst_81980);

(statearr_82072[(9)] = inst_81978);

(statearr_82072[(13)] = inst_81989);

(statearr_82072[(14)] = inst_81990);

return statearr_82072;
})();
var statearr_82073_82106 = state_82038__$1;
(statearr_82073_82106[(2)] = null);

(statearr_82073_82106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (18))){
var inst_82007 = (state_82038[(10)]);
var inst_82009 = cljs.core.chunked_seq_QMARK_.call(null,inst_82007);
var state_82038__$1 = state_82038;
if(inst_82009){
var statearr_82074_82107 = state_82038__$1;
(statearr_82074_82107[(1)] = (21));

} else {
var statearr_82075_82108 = state_82038__$1;
(statearr_82075_82108[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82039 === (8))){
var inst_81973 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_82038__$1 = state_82038;
var statearr_82076_82109 = state_82038__$1;
(statearr_82076_82109[(2)] = inst_81973);

(statearr_82076_82109[(1)] = (10));


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
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_82080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82080[(0)] = ui$core$state_machine__42741__auto__);

(statearr_82080[(1)] = (1));

return statearr_82080;
});
var ui$core$state_machine__42741__auto____1 = (function (state_82038){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_82038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e82081){if((e82081 instanceof Object)){
var ex__42744__auto__ = e82081;
var statearr_82082_82110 = state_82038;
(statearr_82082_82110[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82111 = state_82038;
state_82038 = G__82111;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_82038){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_82038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_82083 = f__42764__auto__.call(null);
(statearr_82083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_82083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__82112__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__82112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82113__i = 0, G__82113__a = new Array(arguments.length -  0);
while (G__82113__i < G__82113__a.length) {G__82113__a[G__82113__i] = arguments[G__82113__i + 0]; ++G__82113__i;}
  args = new cljs.core.IndexedSeq(G__82113__a,0);
} 
return G__82112__delegate.call(this,args);};
G__82112.cljs$lang$maxFixedArity = 0;
G__82112.cljs$lang$applyTo = (function (arglist__82114){
var args = cljs.core.seq(arglist__82114);
return G__82112__delegate(args);
});
G__82112.cljs$core$IFn$_invoke$arity$variadic = G__82112__delegate;
return G__82112;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__82115__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__82115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82116__i = 0, G__82116__a = new Array(arguments.length -  0);
while (G__82116__i < G__82116__a.length) {G__82116__a[G__82116__i] = arguments[G__82116__i + 0]; ++G__82116__i;}
  args = new cljs.core.IndexedSeq(G__82116__a,0);
} 
return G__82115__delegate.call(this,args);};
G__82115.cljs$lang$maxFixedArity = 0;
G__82115.cljs$lang$applyTo = (function (arglist__82117){
var args = cljs.core.seq(arglist__82117);
return G__82115__delegate(args);
});
G__82115.cljs$core$IFn$_invoke$arity$variadic = G__82115__delegate;
return G__82115;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__82118__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__82118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82119__i = 0, G__82119__a = new Array(arguments.length -  0);
while (G__82119__i < G__82119__a.length) {G__82119__a[G__82119__i] = arguments[G__82119__i + 0]; ++G__82119__i;}
  args = new cljs.core.IndexedSeq(G__82119__a,0);
} 
return G__82118__delegate.call(this,args);};
G__82118.cljs$lang$maxFixedArity = 0;
G__82118.cljs$lang$applyTo = (function (arglist__82120){
var args = cljs.core.seq(arglist__82120);
return G__82118__delegate(args);
});
G__82118.cljs$core$IFn$_invoke$arity$variadic = G__82118__delegate;
return G__82118;
})()
);
if(typeof ui.core.mutate_server !== 'undefined'){
} else {
ui.core.mutate_server = (function (){var method_table__35250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","mutate-server"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35254__auto__,method_table__35250__auto__,prefer_table__35251__auto__,method_cache__35252__auto__,cached_hierarchy__35253__auto__));
})();
}
ui.core.format_message = (function ui$core$format_message(message){
return cljs.core.apply.call(null,cljs.core.array,cljs.core.take.call(null,(4),cljs.core.concat.call(null,cljs.core.map.call(null,(function (x){
return cljs.core.apply.call(null,cljs.core.str,x);
}),cljs.core.partition_all.call(null,(32),message)),cljs.core.repeat.call(null,""))));
});
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("proposal","save","proposal/save",356239610,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__82121 = params;
var map__82121__$1 = ((((!((map__82121 == null)))?((((map__82121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82121):map__82121);
var id = cljs.core.get.call(null,map__82121__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__82121__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,map__82121,map__82121__$1,id,description){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,map__82121,map__82121__$1,id,description){
return (function (state_82150){
var state_val_82151 = (state_82150[(1)]);
if((state_val_82151 === (1))){
var inst_82123 = ui.core.block_number.call(null);
var state_82150__$1 = state_82150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82150__$1,(2),inst_82123);
} else {
if((state_val_82151 === (2))){
var inst_82125 = (state_82150[(2)]);
var inst_82126 = ui.core.format_message.call(null,description);
var inst_82127 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"addProposal","addProposal",-2108750592),inst_82126);
var state_82150__$1 = (function (){var statearr_82152 = state_82150;
(statearr_82152[(7)] = inst_82125);

return statearr_82152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82150__$1,(3),inst_82127);
} else {
if((state_val_82151 === (3))){
var inst_82125 = (state_82150[(7)]);
var inst_82129 = (state_82150[(2)]);
var inst_82130 = ui.core.get_historical_events.call(null,ui.core.etherean,inst_82125,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({}));
var state_82150__$1 = (function (){var statearr_82153 = state_82150;
(statearr_82153[(8)] = inst_82129);

return statearr_82153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82150__$1,(4),inst_82130);
} else {
if((state_val_82151 === (4))){
var inst_82132 = (state_82150[(2)]);
var inst_82133 = cljs.core.first.call(null,inst_82132);
var inst_82134 = [new cljs.core.Keyword(null,"tempids","tempids",1767509089)];
var inst_82135 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82136 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),id];
var inst_82137 = (new cljs.core.PersistentVector(null,2,(5),inst_82135,inst_82136,null));
var inst_82138 = [inst_82137];
var inst_82139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82140 = inst_82133.args;
var inst_82141 = inst_82140.proposalIndex;
var inst_82142 = (inst_82141 | (0));
var inst_82143 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),inst_82142];
var inst_82144 = (new cljs.core.PersistentVector(null,2,(5),inst_82139,inst_82143,null));
var inst_82145 = [inst_82144];
var inst_82146 = cljs.core.PersistentHashMap.fromArrays(inst_82138,inst_82145);
var inst_82147 = [inst_82146];
var inst_82148 = cljs.core.PersistentHashMap.fromArrays(inst_82134,inst_82147);
var state_82150__$1 = state_82150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82150__$1,inst_82148);
} else {
return null;
}
}
}
}
});})(c__42763__auto__,map__82121,map__82121__$1,id,description))
;
return ((function (switch__42740__auto__,c__42763__auto__,map__82121,map__82121__$1,id,description){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_82157 = [null,null,null,null,null,null,null,null,null];
(statearr_82157[(0)] = ui$core$state_machine__42741__auto__);

(statearr_82157[(1)] = (1));

return statearr_82157;
});
var ui$core$state_machine__42741__auto____1 = (function (state_82150){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_82150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e82158){if((e82158 instanceof Object)){
var ex__42744__auto__ = e82158;
var statearr_82159_82161 = state_82150;
(statearr_82159_82161[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82162 = state_82150;
state_82150 = G__82162;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_82150){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_82150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,map__82121,map__82121__$1,id,description))
})();
var state__42765__auto__ = (function (){var statearr_82160 = f__42764__auto__.call(null);
(statearr_82160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_82160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,map__82121,map__82121__$1,id,description))
);

return c__42763__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__82163 = params;
var map__82163__$1 = ((((!((map__82163 == null)))?((((map__82163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82163):map__82163);
var id = cljs.core.get.call(null,map__82163__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__82163__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,map__82163,map__82163__$1,id,direction){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,map__82163,map__82163__$1,id,direction){
return (function (state_82170){
var state_val_82171 = (state_82170[(1)]);
if((state_val_82171 === (1))){
var inst_82165 = cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113));
var inst_82166 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnProposal","voteOnProposal",-1101682438),id,inst_82165);
var state_82170__$1 = state_82170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82170__$1,(2),inst_82166);
} else {
if((state_val_82171 === (2))){
var inst_82168 = (state_82170[(2)]);
var state_82170__$1 = state_82170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82170__$1,inst_82168);
} else {
return null;
}
}
});})(c__42763__auto__,map__82163,map__82163__$1,id,direction))
;
return ((function (switch__42740__auto__,c__42763__auto__,map__82163,map__82163__$1,id,direction){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_82175 = [null,null,null,null,null,null,null];
(statearr_82175[(0)] = ui$core$state_machine__42741__auto__);

(statearr_82175[(1)] = (1));

return statearr_82175;
});
var ui$core$state_machine__42741__auto____1 = (function (state_82170){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_82170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e82176){if((e82176 instanceof Object)){
var ex__42744__auto__ = e82176;
var statearr_82177_82179 = state_82170;
(statearr_82177_82179[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82180 = state_82170;
state_82170 = G__82180;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_82170){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_82170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,map__82163,map__82163__$1,id,direction))
})();
var state__42765__auto__ = (function (){var statearr_82178 = f__42764__auto__.call(null);
(statearr_82178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_82178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,map__82163,map__82163__$1,id,direction))
);

return c__42763__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("item","vote","item/vote",-842849665,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__82181 = params;
var map__82181__$1 = ((((!((map__82181 == null)))?((((map__82181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82181):map__82181);
var id = cljs.core.get.call(null,map__82181__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__82181__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,map__82181,map__82181__$1,id,direction){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,map__82181,map__82181__$1,id,direction){
return (function (state_82187){
var state_val_82188 = (state_82187[(1)]);
if((state_val_82188 === (1))){
var inst_82183 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnItem","voteOnItem",903210165),id,direction);
var state_82187__$1 = state_82187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82187__$1,(2),inst_82183);
} else {
if((state_val_82188 === (2))){
var inst_82185 = (state_82187[(2)]);
var state_82187__$1 = state_82187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82187__$1,inst_82185);
} else {
return null;
}
}
});})(c__42763__auto__,map__82181,map__82181__$1,id,direction))
;
return ((function (switch__42740__auto__,c__42763__auto__,map__82181,map__82181__$1,id,direction){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_82192 = [null,null,null,null,null,null,null];
(statearr_82192[(0)] = ui$core$state_machine__42741__auto__);

(statearr_82192[(1)] = (1));

return statearr_82192;
});
var ui$core$state_machine__42741__auto____1 = (function (state_82187){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_82187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e82193){if((e82193 instanceof Object)){
var ex__42744__auto__ = e82193;
var statearr_82194_82196 = state_82187;
(statearr_82194_82196[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82197 = state_82187;
state_82187 = G__82197;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_82187){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_82187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,map__82181,map__82181__$1,id,direction))
})();
var state__42765__auto__ = (function (){var statearr_82195 = f__42764__auto__.call(null);
(statearr_82195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_82195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,map__82181,map__82181__$1,id,direction))
);

return c__42763__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__82198 = params;
var map__82198__$1 = ((((!((map__82198 == null)))?((((map__82198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82198):map__82198);
var value = cljs.core.get.call(null,map__82198__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,map__82198,map__82198__$1,value){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,map__82198,map__82198__$1,value){
return (function (state_82212){
var state_val_82213 = (state_82212[(1)]);
if((state_val_82213 === (1))){
var inst_82200 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_82212__$1 = state_82212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82212__$1,(2),inst_82200);
} else {
if((state_val_82213 === (2))){
var inst_82202 = (state_82212[(2)]);
var inst_82203 = ui.core.contract.call(null,ui.contract.staking_abi,inst_82202);
var inst_82204 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_82205 = web3.toWei(value,"ether");
var inst_82206 = [inst_82205];
var inst_82207 = cljs.core.PersistentHashMap.fromArrays(inst_82204,inst_82206);
var inst_82208 = ui.core.chan_transact.call(null,inst_82203,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),inst_82207);
var state_82212__$1 = state_82212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82212__$1,(3),inst_82208);
} else {
if((state_val_82213 === (3))){
var inst_82210 = (state_82212[(2)]);
var state_82212__$1 = state_82212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82212__$1,inst_82210);
} else {
return null;
}
}
}
});})(c__42763__auto__,map__82198,map__82198__$1,value))
;
return ((function (switch__42740__auto__,c__42763__auto__,map__82198,map__82198__$1,value){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_82217 = [null,null,null,null,null,null,null];
(statearr_82217[(0)] = ui$core$state_machine__42741__auto__);

(statearr_82217[(1)] = (1));

return statearr_82217;
});
var ui$core$state_machine__42741__auto____1 = (function (state_82212){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_82212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e82218){if((e82218 instanceof Object)){
var ex__42744__auto__ = e82218;
var statearr_82219_82221 = state_82212;
(statearr_82219_82221[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82222 = state_82212;
state_82212 = G__82222;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_82212){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_82212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,map__82198,map__82198__$1,value))
})();
var state__42765__auto__ = (function (){var statearr_82220 = f__42764__auto__.call(null);
(statearr_82220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_82220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,map__82198,map__82198__$1,value))
);

return c__42763__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","withdraw","user/withdraw",-1187344809,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__82223 = params;
var map__82223__$1 = ((((!((map__82223 == null)))?((((map__82223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82223):map__82223);
var value = cljs.core.get.call(null,map__82223__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,map__82223,map__82223__$1,value){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,map__82223,map__82223__$1,value){
return (function (state_82233){
var state_val_82234 = (state_82233[(1)]);
if((state_val_82234 === (1))){
var inst_82225 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_82233__$1 = state_82233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82233__$1,(2),inst_82225);
} else {
if((state_val_82234 === (2))){
var inst_82227 = (state_82233[(2)]);
var inst_82228 = ui.core.contract.call(null,ui.contract.staking_abi,inst_82227);
var inst_82229 = ui.core.chan_transact.call(null,inst_82228,new cljs.core.Keyword(null,"withdraw","withdraw",1469652053));
var state_82233__$1 = state_82233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82233__$1,(3),inst_82229);
} else {
if((state_val_82234 === (3))){
var inst_82231 = (state_82233[(2)]);
var state_82233__$1 = state_82233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82233__$1,inst_82231);
} else {
return null;
}
}
}
});})(c__42763__auto__,map__82223,map__82223__$1,value))
;
return ((function (switch__42740__auto__,c__42763__auto__,map__82223,map__82223__$1,value){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_82238 = [null,null,null,null,null,null,null];
(statearr_82238[(0)] = ui$core$state_machine__42741__auto__);

(statearr_82238[(1)] = (1));

return statearr_82238;
});
var ui$core$state_machine__42741__auto____1 = (function (state_82233){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_82233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e82239){if((e82239 instanceof Object)){
var ex__42744__auto__ = e82239;
var statearr_82240_82242 = state_82233;
(statearr_82240_82242[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82243 = state_82233;
state_82233 = G__82243;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_82233){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_82233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,map__82223,map__82223__$1,value))
})();
var state__42765__auto__ = (function (){var statearr_82241 = f__42764__auto__.call(null);
(statearr_82241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_82241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,map__82223,map__82223__$1,value))
);

return c__42763__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("etherean","advance-debug-day","etherean/advance-debug-day",-132769747,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_82253){
var state_val_82254 = (state_82253[(1)]);
if((state_val_82254 === (1))){
var inst_82244 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"debugTime","debugTime",-1487871746));
var state_82253__$1 = state_82253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82253__$1,(2),inst_82244);
} else {
if((state_val_82254 === (2))){
var inst_82246 = (state_82253[(2)]);
var inst_82247 = (inst_82246 | (0));
var inst_82248 = (inst_82247 + (86400));
var inst_82249 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"setDebugTime","setDebugTime",1278197802),inst_82248);
var state_82253__$1 = state_82253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82253__$1,(3),inst_82249);
} else {
if((state_val_82254 === (3))){
var inst_82251 = (state_82253[(2)]);
var state_82253__$1 = state_82253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82253__$1,inst_82251);
} else {
return null;
}
}
}
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var ui$core$state_machine__42741__auto__ = null;
var ui$core$state_machine__42741__auto____0 = (function (){
var statearr_82258 = [null,null,null,null,null,null,null];
(statearr_82258[(0)] = ui$core$state_machine__42741__auto__);

(statearr_82258[(1)] = (1));

return statearr_82258;
});
var ui$core$state_machine__42741__auto____1 = (function (state_82253){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_82253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e82259){if((e82259 instanceof Object)){
var ex__42744__auto__ = e82259;
var statearr_82260_82262 = state_82253;
(statearr_82260_82262[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82263 = state_82253;
state_82253 = G__82263;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$state_machine__42741__auto__ = function(state_82253){
switch(arguments.length){
case 0:
return ui$core$state_machine__42741__auto____0.call(this);
case 1:
return ui$core$state_machine__42741__auto____1.call(this,state_82253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__42741__auto____0;
ui$core$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__42741__auto____1;
return ui$core$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_82261 = f__42764__auto__.call(null);
(statearr_82261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_82261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
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
if(cljs.core.truth_((function (){var or__34227__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
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
ui.core.blockchain_send = (function ui$core$blockchain_send(p__82264,cb){
var map__82283 = p__82264;
var map__82283__$1 = ((((!((map__82283 == null)))?((((map__82283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82283):map__82283);
var remote = cljs.core.get.call(null,map__82283__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,map__82283,map__82283__$1,remote){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,map__82283,map__82283__$1,remote){
return (function (state_82292){
var state_val_82293 = (state_82292[(1)]);
if((state_val_82293 === (1))){
var inst_82285 = cljs.core.PersistentHashMap.EMPTY;
var inst_82286 = ui.core.process_remote_query.call(null,remote);
var inst_82287 = ui.core.server_parser.call(null,inst_82285,inst_82286);
var state_82292__$1 = state_82292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82292__$1,(2),inst_82287);
} else {
if((state_val_82293 === (2))){
var inst_82289 = (state_82292[(2)]);
var inst_82290 = cb.call(null,inst_82289);
var state_82292__$1 = state_82292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82292__$1,inst_82290);
} else {
return null;
}
}
});})(c__42763__auto__,map__82283,map__82283__$1,remote))
;
return ((function (switch__42740__auto__,c__42763__auto__,map__82283,map__82283__$1,remote){
return (function() {
var ui$core$blockchain_send_$_state_machine__42741__auto__ = null;
var ui$core$blockchain_send_$_state_machine__42741__auto____0 = (function (){
var statearr_82297 = [null,null,null,null,null,null,null];
(statearr_82297[(0)] = ui$core$blockchain_send_$_state_machine__42741__auto__);

(statearr_82297[(1)] = (1));

return statearr_82297;
});
var ui$core$blockchain_send_$_state_machine__42741__auto____1 = (function (state_82292){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_82292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e82298){if((e82298 instanceof Object)){
var ex__42744__auto__ = e82298;
var statearr_82299_82301 = state_82292;
(statearr_82299_82301[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82302 = state_82292;
state_82292 = G__82302;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
ui$core$blockchain_send_$_state_machine__42741__auto__ = function(state_82292){
switch(arguments.length){
case 0:
return ui$core$blockchain_send_$_state_machine__42741__auto____0.call(this);
case 1:
return ui$core$blockchain_send_$_state_machine__42741__auto____1.call(this,state_82292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$blockchain_send_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$blockchain_send_$_state_machine__42741__auto____0;
ui$core$blockchain_send_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$blockchain_send_$_state_machine__42741__auto____1;
return ui$core$blockchain_send_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,map__82283,map__82283__$1,remote))
})();
var state__42765__auto__ = (function (){var statearr_82300 = f__42764__auto__.call(null);
(statearr_82300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_82300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,map__82283,map__82283__$1,remote))
);

return c__42763__auto__;
});
ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),ui.core.blockchain_send,new cljs.core.Keyword(null,"merge","merge",-1804319409),ui.core.my_merge,new cljs.core.Keyword(null,"migrate","migrate",-207110743),ui.core.migrate,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),ui.core.my_merge_tree,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
om.next.add_root_BANG_.call(null,ui.core.reconciler,ui.core.Root,goog.dom.getElement("app"));
ui.core.my_toaster = blueprint_cljs.core.toaster.call(null);

//# sourceMappingURL=core.js.map?rel=1489120406895