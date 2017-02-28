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
ui.core.brain_vertices = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__450966){
var vec__450967 = p__450966;
var x = cljs.core.nth.call(null,vec__450967,(0),null);
var y = cljs.core.nth.call(null,vec__450967,(1),null);
var z = cljs.core.nth.call(null,vec__450967,(2),null);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,(y - 0.01),z],null));
}),cljs.core.concat.call(null,cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))),cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))))));
ui.core.brain_faces = cljs.core.map.call(null,(function (p__450970){
var vec__450971 = p__450970;
var a = cljs.core.nth.call(null,vec__450971,(0),null);
var b = cljs.core.nth.call(null,vec__450971,(1),null);
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
var G__450974 = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
s = G__450974;
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

var x450979_450999 = ui.core.Item.prototype;
x450979_450999.componentWillUpdate = ((function (x450979_450999){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___451000 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___451001 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___451000,next_ident__40467__auto___451001)){
var idxr__40468__auto___451002 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___451002 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___451002),((function (idxr__40468__auto___451002,ident__40466__auto___451000,next_ident__40467__auto___451001,this__40462__auto__,x450979_450999){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___451000], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___451001], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___451002,ident__40466__auto___451000,next_ident__40467__auto___451001,this__40462__auto__,x450979_450999))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x450979_450999))
;

x450979_450999.shouldComponentUpdate = ((function (x450979_450999){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__450981 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__450981);
} else {
return G__450981;
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
});})(x450979_450999))
;

x450979_450999.componentWillUnmount = ((function (x450979_450999){
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
});})(x450979_450999))
;

x450979_450999.componentDidUpdate = ((function (x450979_450999){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x450979_450999))
;

x450979_450999.isMounted = ((function (x450979_450999){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x450979_450999))
;

x450979_450999.componentWillMount = ((function (x450979_450999){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x450979_450999))
;

x450979_450999.initLocalState = ((function (x450979_450999){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj450983 = {"omcljs$state":ret__40440__auto__};
return obj450983;
});})(x450979_450999))
;

x450979_450999.render = ((function (x450979_450999){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_450984 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_450985 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_450986 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_450987 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_450988 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__450989 = om.next.props.call(null,this$);
var map__450989__$1 = ((((!((map__450989 == null)))?((((map__450989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450989):map__450989);
var id = cljs.core.get.call(null,map__450989__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var description = cljs.core.get.call(null,map__450989__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
var votes = cljs.core.get.call(null,map__450989__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var user = cljs.core.get.call(null,map__450989__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__450990 = user;
var map__450990__$1 = ((((!((map__450990 == null)))?((((map__450990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450990):map__450990);
var stake = cljs.core.get.call(null,map__450990__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var has_stake = (stake > (0));
var map__450991 = om.next.get_state.call(null,this$);
var map__450991__$1 = ((((!((map__450991 == null)))?((((map__450991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450991):map__450991);
var dialog = cljs.core.get.call(null,map__450991__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__450992 = dialog;
var map__450992__$1 = ((((!((map__450992 == null)))?((((map__450992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450992):map__450992);
var direction = cljs.core.get.call(null,map__450992__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": "5px", "paddingBottom": "5px", "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),(((direction === (0)))?"Vote down":"Vote Up"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,hide_dialog,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999){
return (function (e){
return hide_dialog.call(null);
});})(map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,hide_dialog,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,hide_dialog,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("item","vote","item/vote",-842849665,null)),(function (){var x__35316__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","items","etherean/items",165918606)))))));
});})(map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,hide_dialog,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999))
], null),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can vote up ",React.DOM.i(null,"one item")," in this list per day, as well as vote down ",React.DOM.i(null,"one item")," in this list per day. These votes will be remembered and automatically applied on subsequent days, until you change your choices (or until your up/down choices fall from the front page) "],null)))),React.DOM.p(null,"So... is this an item currently on the mind of ethereans?")),(function (){var vote_button = ((function (map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,hide_dialog,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999){
return (function (direction__$1,activated){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,hide_dialog,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999){
return (function (e){
if(has_stake){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),(0),new cljs.core.Keyword(null,"up","up",-269712113),(1)], null).call(null,direction__$1)], null));
} else {
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You need to deposit some stake first before voting on items. Please go to the \"Voting Stake\" tab first."}));
}
});})(map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,hide_dialog,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999))
], null));
});})(map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,hide_dialog,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(votes)?ui.core.format_vote_number.call(null,(((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))))):"---")],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false)],null))));
})(),(function (){var item_body = ((function (map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,hide_dialog,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999){
return (function (desc,detail){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__450989,map__450989__$1,id,description,votes,user,map__450990,map__450990__$1,stake,has_stake,map__450991,map__450991__$1,dialog,map__450992,map__450992__$1,direction,hide_dialog,_STAR_reconciler_STAR_450984,_STAR_depth_STAR_450985,_STAR_shared_STAR_450986,_STAR_instrument_STAR_450987,_STAR_parent_STAR_450988,this$,this__40461__auto__,x450979_450999))
;
return item_body.call(null,description,(cljs.core.truth_(votes)?null:ui.core.mining_spinner.call(null)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_450988;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_450987;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_450986;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_450985;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_450984;
}});})(x450979_450999))
;


ui.core.Item.prototype.constructor = ui.core.Item;

ui.core.Item.prototype.constructor.displayName = "ui.core/Item";

ui.core.Item.prototype.om$isComponent = true;

var x450997_451003 = ui.core.Item;
/** @nocollapse */
x450997_451003.om$next$IQuery$ = true;

/** @nocollapse */
x450997_451003.om$next$IQuery$query$arity$1 = ((function (x450997_451003){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x450997_451003))
;


var x450998_451004 = ui.core.Item.prototype;

x450998_451004.om$next$IQuery$ = true;


x450998_451004.om$next$IQuery$query$arity$1 = ((function (x450998_451004){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x450998_451004))
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

var x451009_451023 = ui.core.Items.prototype;
x451009_451023.componentWillUpdate = ((function (x451009_451023){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___451024 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___451025 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___451024,next_ident__40467__auto___451025)){
var idxr__40468__auto___451026 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___451026 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___451026),((function (idxr__40468__auto___451026,ident__40466__auto___451024,next_ident__40467__auto___451025,this__40462__auto__,x451009_451023){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___451024], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___451025], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___451026,ident__40466__auto___451024,next_ident__40467__auto___451025,this__40462__auto__,x451009_451023))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x451009_451023))
;

x451009_451023.shouldComponentUpdate = ((function (x451009_451023){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__451011 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__451011);
} else {
return G__451011;
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
});})(x451009_451023))
;

x451009_451023.componentWillUnmount = ((function (x451009_451023){
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
});})(x451009_451023))
;

x451009_451023.componentDidUpdate = ((function (x451009_451023){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x451009_451023))
;

x451009_451023.isMounted = ((function (x451009_451023){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x451009_451023))
;

x451009_451023.componentWillMount = ((function (x451009_451023){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x451009_451023))
;

x451009_451023.render = ((function (x451009_451023){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_451012 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_451013 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_451014 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_451015 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_451016 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.9})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__35244__auto__ = ((function (_STAR_reconciler_STAR_451012,_STAR_depth_STAR_451013,_STAR_shared_STAR_451014,_STAR_instrument_STAR_451015,_STAR_parent_STAR_451016,this$,this__40461__auto__,x451009_451023){
return (function ui$core$iter__451017(s__451018){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_451012,_STAR_depth_STAR_451013,_STAR_shared_STAR_451014,_STAR_instrument_STAR_451015,_STAR_parent_STAR_451016,this$,this__40461__auto__,x451009_451023){
return (function (){
var s__451018__$1 = s__451018;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451018__$1);
if(temp__6728__auto__){
var s__451018__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451018__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451018__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451020 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451019 = (0);
while(true){
if((i__451019 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__451019);
cljs.core.chunk_append.call(null,b__451020,ui.core.item_component.call(null,item));

var G__451027 = (i__451019 + (1));
i__451019 = G__451027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451020),ui$core$iter__451017.call(null,cljs.core.chunk_rest.call(null,s__451018__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451020),null);
}
} else {
var item = cljs.core.first.call(null,s__451018__$2);
return cljs.core.cons.call(null,ui.core.item_component.call(null,item),ui$core$iter__451017.call(null,cljs.core.rest.call(null,s__451018__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_451012,_STAR_depth_STAR_451013,_STAR_shared_STAR_451014,_STAR_instrument_STAR_451015,_STAR_parent_STAR_451016,this$,this__40461__auto__,x451009_451023))
,null,null));
});})(_STAR_reconciler_STAR_451012,_STAR_depth_STAR_451013,_STAR_shared_STAR_451014,_STAR_instrument_STAR_451015,_STAR_parent_STAR_451016,this$,this__40461__auto__,x451009_451023))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("etherean","items","etherean/items",165918606).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_451016;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_451015;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_451014;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_451013;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_451012;
}});})(x451009_451023))
;


ui.core.Items.prototype.constructor = ui.core.Items;

ui.core.Items.prototype.constructor.displayName = "ui.core/Items";

ui.core.Items.prototype.om$isComponent = true;

var x451021_451028 = ui.core.Items;
/** @nocollapse */
x451021_451028.om$next$IQuery$ = true;

/** @nocollapse */
x451021_451028.om$next$IQuery$query$arity$1 = ((function (x451021_451028){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x451021_451028))
;


var x451022_451029 = ui.core.Items.prototype;

x451022_451029.om$next$IQuery$ = true;


x451022_451029.om$next$IQuery$query$arity$1 = ((function (x451022_451029){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x451022_451029))
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

var x451034_451054 = ui.core.Proposal.prototype;
x451034_451054.componentWillUpdate = ((function (x451034_451054){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___451055 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___451056 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___451055,next_ident__40467__auto___451056)){
var idxr__40468__auto___451057 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___451057 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___451057),((function (idxr__40468__auto___451057,ident__40466__auto___451055,next_ident__40467__auto___451056,this__40462__auto__,x451034_451054){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___451055], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___451056], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___451057,ident__40466__auto___451055,next_ident__40467__auto___451056,this__40462__auto__,x451034_451054))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x451034_451054))
;

x451034_451054.shouldComponentUpdate = ((function (x451034_451054){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__451036 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__451036);
} else {
return G__451036;
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
});})(x451034_451054))
;

x451034_451054.componentWillUnmount = ((function (x451034_451054){
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
});})(x451034_451054))
;

x451034_451054.componentDidUpdate = ((function (x451034_451054){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x451034_451054))
;

x451034_451054.isMounted = ((function (x451034_451054){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x451034_451054))
;

x451034_451054.componentWillMount = ((function (x451034_451054){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x451034_451054))
;

x451034_451054.initLocalState = ((function (x451034_451054){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),"",new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj451038 = {"omcljs$state":ret__40440__auto__};
return obj451038;
});})(x451034_451054))
;

x451034_451054.render = ((function (x451034_451054){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_451039 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_451040 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_451041 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_451042 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_451043 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__451044 = om.next.props.call(null,this$);
var map__451044__$1 = ((((!((map__451044 == null)))?((((map__451044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451044):map__451044);
var description = cljs.core.get.call(null,map__451044__$1,new cljs.core.Keyword("proposal","description","proposal/description",1644720226));
var id = cljs.core.get.call(null,map__451044__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var unsaved = cljs.core.get.call(null,map__451044__$1,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935));
var upvotes = cljs.core.get.call(null,map__451044__$1,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560));
var downvotes = cljs.core.get.call(null,map__451044__$1,new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132));
var user = cljs.core.get.call(null,map__451044__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__451045 = user;
var map__451045__$1 = ((((!((map__451045 == null)))?((((map__451045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451045):map__451045);
var can_vote_proposal = cljs.core.get.call(null,map__451045__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__451045__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var temporary = om.next.tempid_QMARK_.call(null,id);
var has_stake = (stake > (0));
var map__451046 = om.next.get_state.call(null,this$);
var map__451046__$1 = ((((!((map__451046 == null)))?((((map__451046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451046):map__451046);
var height = cljs.core.get.call(null,map__451046__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var dialog = cljs.core.get.call(null,map__451046__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__451047 = dialog;
var map__451047__$1 = ((((!((map__451047 == null)))?((((map__451047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451047):map__451047);
var direction = cljs.core.get.call(null,map__451047__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054))
;
return om_tools.dom.element.call(null,React.DOM.div,blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113)))?"Vote Up":"Vote Down"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054){
return (function (e){
return hide_dialog.call(null);
});})(map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null)),(function (){var x__35316__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
});})(map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054))
], null),"You can vote on one proposal per day. Is this an item currently on the mind of ethereans, that deserves to be listed on the front page?"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(unsaved)?(0):(1))], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),ui.motion.spring.call(null,height)], null)], null),((function (map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054){
return (function (value){
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingBottom": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var vote_button = ((function (map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054){
return (function (direction__$1,activated,disabled){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054){
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
});})(map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054))
], null));
});})(map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false,unsaved),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(unsaved)?null:(cljs.core.truth_(upvotes)?ui.core.format_vote_number.call(null,(upvotes - downvotes)):"---"
))],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false,unsaved)],null))));
})(),(function (){var proposal_body = ((function (map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054){
return (function (desc,detail,disabled){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)}), "onClick": om_tools.dom.format_opts.call(null,((function (map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054){
return (function (){
if(cljs.core.truth_(disabled)){
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You have not staked any funds yet. Please got to the \"Voting Stakes\" tab first."}));
} else {
return null;
}
});})(map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054))
)}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054))
;
if(cljs.core.truth_(unsaved)){
var temp_description = new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
var has_description = cljs.core.seq.call(null,temp_description);
var save_fn = ((function (temp_description,has_description,proposal_body,map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054){
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
});})(temp_description,has_description,proposal_body,map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054))
;
return proposal_body.call(null,blueprint_cljs.core.editable_text.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),((!(has_stake))?"... (Please deposit stake first to propose an item)":((cljs.core.not.call(null,can_vote_proposal))?"... (Today's proposal action already used up)":"... propose a new item!"
)),new cljs.core.Keyword(null,"value","value",305978217),temp_description,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(has_stake)) || (cljs.core.not.call(null,can_vote_proposal)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp_description,has_description,save_fn,proposal_body,map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054){
return (function (s){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),s);
});})(temp_description,has_description,save_fn,proposal_body,map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054))
], null)),((has_description)?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary pt-icon-plus pt-minimal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_fn], null),"Save"):null),!(has_stake));
} else {
return proposal_body.call(null,description,(((temporary) || (cljs.core.not.call(null,upvotes)))?ui.core.mining_spinner.call(null):null),false);
}
})()],null))));
});})(map__451044,map__451044__$1,description,id,unsaved,upvotes,downvotes,user,map__451045,map__451045__$1,can_vote_proposal,stake,temporary,has_stake,map__451046,map__451046__$1,height,dialog,map__451047,map__451047__$1,direction,hide_dialog,_STAR_reconciler_STAR_451039,_STAR_depth_STAR_451040,_STAR_shared_STAR_451041,_STAR_instrument_STAR_451042,_STAR_parent_STAR_451043,this$,this__40461__auto__,x451034_451054))
)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_451043;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_451042;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_451041;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_451040;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_451039;
}});})(x451034_451054))
;


ui.core.Proposal.prototype.constructor = ui.core.Proposal;

ui.core.Proposal.prototype.constructor.displayName = "ui.core/Proposal";

ui.core.Proposal.prototype.om$isComponent = true;

var x451052_451058 = ui.core.Proposal;
/** @nocollapse */
x451052_451058.om$next$IQuery$ = true;

/** @nocollapse */
x451052_451058.om$next$IQuery$query$arity$1 = ((function (x451052_451058){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x451052_451058))
;


var x451053_451059 = ui.core.Proposal.prototype;

x451053_451059.om$next$IQuery$ = true;


x451053_451059.om$next$IQuery$query$arity$1 = ((function (x451053_451059){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x451053_451059))
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

var x451064_451078 = ui.core.Proposals.prototype;
x451064_451078.componentWillUpdate = ((function (x451064_451078){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___451079 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___451080 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___451079,next_ident__40467__auto___451080)){
var idxr__40468__auto___451081 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___451081 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___451081),((function (idxr__40468__auto___451081,ident__40466__auto___451079,next_ident__40467__auto___451080,this__40462__auto__,x451064_451078){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___451079], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___451080], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___451081,ident__40466__auto___451079,next_ident__40467__auto___451080,this__40462__auto__,x451064_451078))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x451064_451078))
;

x451064_451078.shouldComponentUpdate = ((function (x451064_451078){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__451066 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__451066);
} else {
return G__451066;
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
});})(x451064_451078))
;

x451064_451078.componentWillUnmount = ((function (x451064_451078){
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
});})(x451064_451078))
;

x451064_451078.componentDidUpdate = ((function (x451064_451078){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x451064_451078))
;

x451064_451078.isMounted = ((function (x451064_451078){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x451064_451078))
;

x451064_451078.componentWillMount = ((function (x451064_451078){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x451064_451078))
;

x451064_451078.render = ((function (x451064_451078){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_451067 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_451068 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_451069 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_451070 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_451071 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{return om_tools.dom.element.call(null,React.DOM.div,(function (){var iter__35244__auto__ = ((function (_STAR_reconciler_STAR_451067,_STAR_depth_STAR_451068,_STAR_shared_STAR_451069,_STAR_instrument_STAR_451070,_STAR_parent_STAR_451071,this$,this__40461__auto__,x451064_451078){
return (function ui$core$iter__451072(s__451073){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_451067,_STAR_depth_STAR_451068,_STAR_shared_STAR_451069,_STAR_instrument_STAR_451070,_STAR_parent_STAR_451071,this$,this__40461__auto__,x451064_451078){
return (function (){
var s__451073__$1 = s__451073;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451073__$1);
if(temp__6728__auto__){
var s__451073__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451073__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451073__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451075 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451074 = (0);
while(true){
if((i__451074 < size__35243__auto__)){
var proposal = cljs.core._nth.call(null,c__35242__auto__,i__451074);
cljs.core.chunk_append.call(null,b__451075,ui.core.proposal_component.call(null,proposal));

var G__451082 = (i__451074 + (1));
i__451074 = G__451082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451075),ui$core$iter__451072.call(null,cljs.core.chunk_rest.call(null,s__451073__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451075),null);
}
} else {
var proposal = cljs.core.first.call(null,s__451073__$2);
return cljs.core.cons.call(null,ui.core.proposal_component.call(null,proposal),ui$core$iter__451072.call(null,cljs.core.rest.call(null,s__451073__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_451067,_STAR_depth_STAR_451068,_STAR_shared_STAR_451069,_STAR_instrument_STAR_451070,_STAR_parent_STAR_451071,this$,this__40461__auto__,x451064_451078))
,null,null));
});})(_STAR_reconciler_STAR_451067,_STAR_depth_STAR_451068,_STAR_shared_STAR_451069,_STAR_instrument_STAR_451070,_STAR_parent_STAR_451071,this$,this__40461__auto__,x451064_451078))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})(),cljs.core.PersistentVector.EMPTY);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_451071;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_451070;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_451069;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_451068;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_451067;
}});})(x451064_451078))
;


ui.core.Proposals.prototype.constructor = ui.core.Proposals;

ui.core.Proposals.prototype.constructor.displayName = "ui.core/Proposals";

ui.core.Proposals.prototype.om$isComponent = true;

var x451076_451083 = ui.core.Proposals;
/** @nocollapse */
x451076_451083.om$next$IQuery$ = true;

/** @nocollapse */
x451076_451083.om$next$IQuery$query$arity$1 = ((function (x451076_451083){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x451076_451083))
;


var x451077_451084 = ui.core.Proposals.prototype;

x451077_451084.om$next$IQuery$ = true;


x451077_451084.om$next$IQuery$query$arity$1 = ((function (x451077_451084){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x451077_451084))
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

var x451089_451101 = ui.core.Stake.prototype;
x451089_451101.componentWillUpdate = ((function (x451089_451101){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___451102 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___451103 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___451102,next_ident__40467__auto___451103)){
var idxr__40468__auto___451104 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___451104 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___451104),((function (idxr__40468__auto___451104,ident__40466__auto___451102,next_ident__40467__auto___451103,this__40462__auto__,x451089_451101){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___451102], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___451103], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___451104,ident__40466__auto___451102,next_ident__40467__auto___451103,this__40462__auto__,x451089_451101))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x451089_451101))
;

x451089_451101.shouldComponentUpdate = ((function (x451089_451101){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__451091 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__451091);
} else {
return G__451091;
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
});})(x451089_451101))
;

x451089_451101.componentWillUnmount = ((function (x451089_451101){
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
});})(x451089_451101))
;

x451089_451101.componentDidUpdate = ((function (x451089_451101){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x451089_451101))
;

x451089_451101.isMounted = ((function (x451089_451101){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x451089_451101))
;

x451089_451101.componentWillMount = ((function (x451089_451101){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x451089_451101))
;

x451089_451101.render = ((function (x451089_451101){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_451092 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_451093 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_451094 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_451095 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_451096 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__451097 = om.next.props.call(null,this$);
var map__451097__$1 = ((((!((map__451097 == null)))?((((map__451097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451097):map__451097);
var id = cljs.core.get.call(null,map__451097__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var value = cljs.core.get.call(null,map__451097__$1,new cljs.core.Keyword("stake","value","stake/value",466231031));
return om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,id,cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,value,cljs.core.PersistentVector.EMPTY)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_451096;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_451095;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_451094;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_451093;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_451092;
}});})(x451089_451101))
;


ui.core.Stake.prototype.constructor = ui.core.Stake;

ui.core.Stake.prototype.constructor.displayName = "ui.core/Stake";

ui.core.Stake.prototype.om$isComponent = true;

var x451099_451105 = ui.core.Stake;
/** @nocollapse */
x451099_451105.om$next$IQuery$ = true;

/** @nocollapse */
x451099_451105.om$next$IQuery$query$arity$1 = ((function (x451099_451105){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x451099_451105))
;


var x451100_451106 = ui.core.Stake.prototype;

x451100_451106.om$next$IQuery$ = true;


x451100_451106.om$next$IQuery$query$arity$1 = ((function (x451100_451106){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x451100_451106))
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

var x451111_451131 = ui.core.Stakes.prototype;
x451111_451131.componentWillUpdate = ((function (x451111_451131){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___451132 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___451133 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___451132,next_ident__40467__auto___451133)){
var idxr__40468__auto___451134 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___451134 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___451134),((function (idxr__40468__auto___451134,ident__40466__auto___451132,next_ident__40467__auto___451133,this__40462__auto__,x451111_451131){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___451132], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___451133], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___451134,ident__40466__auto___451132,next_ident__40467__auto___451133,this__40462__auto__,x451111_451131))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x451111_451131))
;

x451111_451131.shouldComponentUpdate = ((function (x451111_451131){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__451113 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__451113);
} else {
return G__451113;
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
});})(x451111_451131))
;

x451111_451131.componentWillUnmount = ((function (x451111_451131){
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
});})(x451111_451131))
;

x451111_451131.componentDidUpdate = ((function (x451111_451131){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x451111_451131))
;

x451111_451131.isMounted = ((function (x451111_451131){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x451111_451131))
;

x451111_451131.componentWillMount = ((function (x451111_451131){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x451111_451131))
;

x451111_451131.initLocalState = ((function (x451111_451131){
return (function (){
var this$ = this;
var ret__40440__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var obj451115 = {"omcljs$state":ret__40440__auto__};
return obj451115;
});})(x451111_451131))
;

x451111_451131.render = ((function (x451111_451131){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_451116 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_451117 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_451118 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_451119 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_451120 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__451121 = om.next.props.call(null,this$);
var map__451121__$1 = ((((!((map__451121 == null)))?((((map__451121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451121):map__451121);
var stakes = cljs.core.get.call(null,map__451121__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__451121__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__451122 = user;
var map__451122__$1 = ((((!((map__451122 == null)))?((((map__451122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451122):map__451122);
var stake = cljs.core.get.call(null,map__451122__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var address = cljs.core.get.call(null,map__451122__$1,new cljs.core.Keyword("user","address","user/address",573600859));
var balance = cljs.core.get.call(null,map__451122__$1,new cljs.core.Keyword("user","balance","user/balance",422509480));
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.8})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Current Stake"),((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?ui.core.mining_spinner.call(null):cljs.core.apply.call(null,React.DOM.h3,({"style": ({"color": "#2b95d6"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[stake," ETH"],null))))),cljs.core.apply.call(null,React.DOM.span,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["(associated with account ",ui.core.format_address.call(null,address),")"],null)))),(((stake === (0)))?React.DOM.div(({"className": "pt-callout pt-icon-info-sign", "style": ({"marginTop": "0.5rem"})}),"You do not currently have any voting stake for EthereanMind. To be able to vote on proposals and top 10 items, you need to deposit some fully-refundable coins into the EthereanMind staking contract."):null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group", "style": ({"marginTop": "0.5rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__451121,map__451121__$1,stakes,user,map__451122,map__451122__$1,stake,address,balance,_STAR_reconciler_STAR_451116,_STAR_depth_STAR_451117,_STAR_shared_STAR_451118,_STAR_instrument_STAR_451119,_STAR_parent_STAR_451120,this$,this__40461__auto__,x451111_451131){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"value","value",305978217),""], null));
});})(map__451121,map__451121__$1,stakes,user,map__451122,map__451122__$1,stake,address,balance,_STAR_reconciler_STAR_451116,_STAR_depth_STAR_451117,_STAR_shared_STAR_451118,_STAR_instrument_STAR_451119,_STAR_parent_STAR_451120,this$,this__40461__auto__,x451111_451131))
], null),"Deposit Stake"),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__451121,map__451121__$1,stakes,user,map__451122,map__451122__$1,stake,address,balance,_STAR_reconciler_STAR_451116,_STAR_depth_STAR_451117,_STAR_shared_STAR_451118,_STAR_instrument_STAR_451119,_STAR_parent_STAR_451120,this$,this__40461__auto__,x451111_451131){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"withdraw","withdraw",1469652053)], null));
});})(map__451121,map__451121__$1,stakes,user,map__451122,map__451122__$1,stake,address,balance,_STAR_reconciler_STAR_451116,_STAR_depth_STAR_451117,_STAR_shared_STAR_451118,_STAR_instrument_STAR_451119,_STAR_parent_STAR_451120,this$,this__40461__auto__,x451111_451131))
], null),"Withdraw Stake")],null))))],null)))),(function (){var map__451125 = om.next.get_state.call(null,this$);
var map__451125__$1 = ((((!((map__451125 == null)))?((((map__451125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451125):map__451125);
var dialog = cljs.core.get.call(null,map__451125__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__451126 = dialog;
var map__451126__$1 = ((((!((map__451126 == null)))?((((map__451126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451126):map__451126);
var type = cljs.core.get.call(null,map__451126__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__451126__$1,new cljs.core.Keyword(null,"value","value",305978217));
var value_status = ((cljs.core._EQ_.call(null,value,""))?new cljs.core.Keyword(null,"missing","missing",362507769):(((value <= balance))?new cljs.core.Keyword(null,"good","good",511701169):new cljs.core.Keyword(null,"bad","bad",1127186645)
));
var close_dialog = ((function (value_status,map__451125,map__451125__$1,dialog,map__451126,map__451126__$1,type,value,map__451121,map__451121__$1,stakes,user,map__451122,map__451122__$1,stake,address,balance,_STAR_reconciler_STAR_451116,_STAR_depth_STAR_451117,_STAR_shared_STAR_451118,_STAR_instrument_STAR_451119,_STAR_parent_STAR_451120,this$,this__40461__auto__,x451111_451131){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,map__451125,map__451125__$1,dialog,map__451126,map__451126__$1,type,value,map__451121,map__451121__$1,stakes,user,map__451122,map__451122__$1,stake,address,balance,_STAR_reconciler_STAR_451116,_STAR_depth_STAR_451117,_STAR_shared_STAR_451118,_STAR_instrument_STAR_451119,_STAR_parent_STAR_451120,this$,this__40461__auto__,x451111_451131))
;
return blueprint_cljs.core.dialog.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-close","on-close",-761178394),close_dialog,new cljs.core.Keyword(null,"title","title",636505583),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit Stake":"Withdraw Stake")], null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-body"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,"In order to vote on ethereanmind you need to place a refundable deposit of ether. You will be able to start voting immediately after depositing ether, but you need to wait a month before you can withdraw your deposit again."),om_tools.dom.element.call(null,React.DOM.p,React.DOM.b(null,"The rules of the smart contract assure that no one else can withdraw your money and that you will receive back 100% of your deposit."),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Balance available: ",balance," Ether"],null)))),blueprint_cljs.core.input_group.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Deposit Amount (Ether)",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"right-element","right-element",-375920256),((cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"missing","missing",362507769)))?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)))?"pt-icon-tick pt-intent-success":"pt-icon-cross pt-intent-danger")], null)):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value_status,close_dialog,map__451125,map__451125__$1,dialog,map__451126,map__451126__$1,type,value,map__451121,map__451121__$1,stakes,user,map__451122,map__451122__$1,stake,address,balance,_STAR_reconciler_STAR_451116,_STAR_depth_STAR_451117,_STAR_shared_STAR_451118,_STAR_instrument_STAR_451119,_STAR_parent_STAR_451120,this$,this__40461__auto__,x451111_451131){
return (function (e){
var value_new = e.target.value;
if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]*\.?[0-9]*/,value_new))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value_new);
} else {
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value);
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noise","noise",-994696820)], null),cljs.core.rand_int.call(null,(1000000)));
});})(value_status,close_dialog,map__451125,map__451125__$1,dialog,map__451126,map__451126__$1,type,value,map__451121,map__451121__$1,stakes,user,map__451122,map__451122__$1,stake,address,balance,_STAR_reconciler_STAR_451116,_STAR_depth_STAR_451117,_STAR_shared_STAR_451118,_STAR_instrument_STAR_451119,_STAR_parent_STAR_451120,this$,this__40461__auto__,x451111_451131))
], null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can now withdraw all of your stake (Currently ",stake," Ether) back into your regular ethereum account at [",ui.core.format_address.call(null,address),"]. At that point, you will no longer be able to participate in voting- You'll need to deposit new funds to vote again."],null))))], null))],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer-actions"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)),new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_status,close_dialog,map__451125,map__451125__$1,dialog,map__451126,map__451126__$1,type,value,map__451121,map__451121__$1,stakes,user,map__451122,map__451122__$1,stake,address,balance,_STAR_reconciler_STAR_451116,_STAR_depth_STAR_451117,_STAR_shared_STAR_451118,_STAR_instrument_STAR_451119,_STAR_parent_STAR_451120,this$,this__40461__auto__,x451111_451131){
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
});})(value_status,close_dialog,map__451125,map__451125__$1,dialog,map__451126,map__451126__$1,type,value,map__451121,map__451121__$1,stakes,user,map__451122,map__451122__$1,stake,address,balance,_STAR_reconciler_STAR_451116,_STAR_depth_STAR_451117,_STAR_shared_STAR_451118,_STAR_instrument_STAR_451119,_STAR_parent_STAR_451120,this$,this__40461__auto__,x451111_451131))
], null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit":"Withdraw")),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_dialog], null),"Cancel")],null))))],null)))));
})(),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"marginTop": "1rem", "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Staking Statistics"),React.DOM.div(null,"If you're curious about who else is using this dapp, and are using an ethereum data source that can handle large queres, click this button:"),cljs.core.apply.call(null,React.DOM.p,({"style": ({"margin": "1em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.i(null,"(Coming Soon...)")],null))))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_451120;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_451119;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_451118;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_451117;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_451116;
}});})(x451111_451131))
;


ui.core.Stakes.prototype.constructor = ui.core.Stakes;

ui.core.Stakes.prototype.constructor.displayName = "ui.core/Stakes";

ui.core.Stakes.prototype.om$isComponent = true;

var x451129_451135 = ui.core.Stakes;
/** @nocollapse */
x451129_451135.om$next$IQuery$ = true;

/** @nocollapse */
x451129_451135.om$next$IQuery$query$arity$1 = ((function (x451129_451135){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x451129_451135))
;


var x451130_451136 = ui.core.Stakes.prototype;

x451130_451136.om$next$IQuery$ = true;


x451130_451136.om$next$IQuery$query$arity$1 = ((function (x451130_451136){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x451130_451136))
;


ui.core.Stakes.cljs$lang$type = true;

ui.core.Stakes.cljs$lang$ctorStr = "ui.core/Stakes";

ui.core.Stakes.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Stakes");
});
ui.core.stakes_component = om.next.factory.call(null,ui.core.Stakes);
ui.core.canvas_resolution = (800);
ui.core.brain_prerender = (function ui$core$brain_prerender(sections){
return new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__451151,item){
var map__451152 = p__451151;
var map__451152__$1 = ((((!((map__451152 == null)))?((((map__451152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451152):map__451152);
var acc = map__451152__$1;
var vertices = cljs.core.get.call(null,map__451152__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var vertex_colors = cljs.core.get.call(null,map__451152__$1,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377));
var index = cljs.core.get.call(null,map__451152__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.call(null,map__451152__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var map__451154 = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"length","length",588987862),(function (){var iter__35244__auto__ = ((function (map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__451155(s__451156){
return (new cljs.core.LazySeq(null,((function (map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__451156__$1 = s__451156;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451156__$1);
if(temp__6728__auto__){
var s__451156__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451156__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451156__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451158 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451157 = (0);
while(true){
if((i__451157 < size__35243__auto__)){
var coord = cljs.core._nth.call(null,c__35242__auto__,i__451157);
cljs.core.chunk_append.call(null,b__451158,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (i__451157,region_size,coord,c__35242__auto__,size__35243__auto__,b__451158,s__451156__$2,temp__6728__auto__,map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__451137_SHARP_){
return cljs.core.nth.call(null,p1__451137_SHARP_,coord);
});})(i__451157,region_size,coord,c__35242__auto__,size__35243__auto__,b__451158,s__451156__$2,temp__6728__auto__,map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})());

var G__451164 = (i__451157 + (1));
i__451157 = G__451164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451158),ui$core$brain_prerender_$_iter__451155.call(null,cljs.core.chunk_rest.call(null,s__451156__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451158),null);
}
} else {
var coord = cljs.core.first.call(null,s__451156__$2);
return cljs.core.cons.call(null,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (region_size,coord,s__451156__$2,temp__6728__auto__,map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__451137_SHARP_){
return cljs.core.nth.call(null,p1__451137_SHARP_,coord);
});})(region_size,coord,s__451156__$2,temp__6728__auto__,map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})(),ui$core$brain_prerender_$_iter__451155.call(null,cljs.core.rest.call(null,s__451156__$2)));
}
} else {
return null;
}
break;
}
});})(map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})()));
var map__451154__$1 = ((((!((map__451154 == null)))?((((map__451154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451154):map__451154);
var cur_vertices = cljs.core.get.call(null,map__451154__$1,new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716));
var rest_vertices = cljs.core.get.call(null,map__451154__$1,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),rest_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.into.call(null,vertex_colors,(function (){var iter__35244__auto__ = ((function (map__451154,map__451154__$1,cur_vertices,rest_vertices,map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__451160(s__451161){
return (new cljs.core.LazySeq(null,((function (map__451154,map__451154__$1,cur_vertices,rest_vertices,map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__451161__$1 = s__451161;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451161__$1);
if(temp__6728__auto__){
var s__451161__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451161__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451161__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451163 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451162 = (0);
while(true){
if((i__451162 < size__35243__auto__)){
var vertex = cljs.core._nth.call(null,c__35242__auto__,i__451162);
cljs.core.chunk_append.call(null,b__451163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null));

var G__451165 = (i__451162 + (1));
i__451162 = G__451165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451163),ui$core$brain_prerender_$_iter__451160.call(null,cljs.core.chunk_rest.call(null,s__451161__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451163),null);
}
} else {
var vertex = cljs.core.first.call(null,s__451161__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null),ui$core$brain_prerender_$_iter__451160.call(null,cljs.core.rest.call(null,s__451161__$2)));
}
} else {
return null;
}
break;
}
});})(map__451154,map__451154__$1,cur_vertices,rest_vertices,map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__451154,map__451154__$1,cur_vertices,rest_vertices,map__451152,map__451152__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35244__auto__.call(null,cur_vertices);
})()),new cljs.core.Keyword(null,"index","index",-1531685915),(index + (1)),new cljs.core.Keyword(null,"total","total",1916810418),(total - new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))], null);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),ui.core.brain_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"size","size",1098693007),sections))], null),sections));
});
ui.core.render_graph = (function ui$core$render_graph(brain_faces,vertexes,vertex_colors){
var iter__35244__auto__ = (function ui$core$render_graph_$_iter__451198(s__451199){
return (new cljs.core.LazySeq(null,(function (){
var s__451199__$1 = s__451199;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451199__$1);
if(temp__6728__auto__){
var s__451199__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451199__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451199__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451201 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451200 = (0);
while(true){
if((i__451200 < size__35243__auto__)){
var vec__451216 = cljs.core._nth.call(null,c__35242__auto__,i__451200);
var region = cljs.core.nth.call(null,vec__451216,(0),null);
var faces = cljs.core.nth.call(null,vec__451216,(1),null);
cljs.core.chunk_append.call(null,b__451201,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (i__451200,vec__451216,region,faces,c__35242__auto__,size__35243__auto__,b__451201,s__451199__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__451198_$_iter__451219(s__451220){
return (new cljs.core.LazySeq(null,((function (i__451200,vec__451216,region,faces,c__35242__auto__,size__35243__auto__,b__451201,s__451199__$2,temp__6728__auto__){
return (function (){
var s__451220__$1 = s__451220;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__451220__$1);
if(temp__6728__auto____$1){
var s__451220__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451220__$2)){
var c__35242__auto____$1 = cljs.core.chunk_first.call(null,s__451220__$2);
var size__35243__auto____$1 = cljs.core.count.call(null,c__35242__auto____$1);
var b__451222 = cljs.core.chunk_buffer.call(null,size__35243__auto____$1);
if((function (){var i__451221 = (0);
while(true){
if((i__451221 < size__35243__auto____$1)){
var n = cljs.core._nth.call(null,c__35242__auto____$1,i__451221);
cljs.core.chunk_append.call(null,b__451222,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__451221,i__451200,n,c__35242__auto____$1,size__35243__auto____$1,b__451222,s__451220__$2,temp__6728__auto____$1,vec__451216,region,faces,c__35242__auto__,size__35243__auto__,b__451201,s__451199__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__451221,i__451200,n,c__35242__auto____$1,size__35243__auto____$1,b__451222,s__451220__$2,temp__6728__auto____$1,vec__451216,region,faces,c__35242__auto__,size__35243__auto__,b__451201,s__451199__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__451230 = (i__451221 + (1));
i__451221 = G__451230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451222),ui$core$render_graph_$_iter__451198_$_iter__451219.call(null,cljs.core.chunk_rest.call(null,s__451220__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451222),null);
}
} else {
var n = cljs.core.first.call(null,s__451220__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__451200,n,s__451220__$2,temp__6728__auto____$1,vec__451216,region,faces,c__35242__auto__,size__35243__auto__,b__451201,s__451199__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__451200,n,s__451220__$2,temp__6728__auto____$1,vec__451216,region,faces,c__35242__auto__,size__35243__auto__,b__451201,s__451199__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__451198_$_iter__451219.call(null,cljs.core.rest.call(null,s__451220__$2)));
}
} else {
return null;
}
break;
}
});})(i__451200,vec__451216,region,faces,c__35242__auto__,size__35243__auto__,b__451201,s__451199__$2,temp__6728__auto__))
,null,null));
});})(i__451200,vec__451216,region,faces,c__35242__auto__,size__35243__auto__,b__451201,s__451199__$2,temp__6728__auto__))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (i__451200,dist,max_dist,mult,centroid,vec__451216,region,faces,c__35242__auto__,size__35243__auto__,b__451201,s__451199__$2,temp__6728__auto__){
return (function (y){
var x__34723__auto__ = (function (){var x__34730__auto__ = 0.11;
var y__34731__auto__ = (y * 0.9);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})();
var y__34724__auto__ = -0.05;
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
});})(i__451200,dist,max_dist,mult,centroid,vec__451216,region,faces,c__35242__auto__,size__35243__auto__,b__451201,s__451199__$2,temp__6728__auto__))
);
})()], null);
})());

var G__451231 = (i__451200 + (1));
i__451200 = G__451231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451201),ui$core$render_graph_$_iter__451198.call(null,cljs.core.chunk_rest.call(null,s__451199__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451201),null);
}
} else {
var vec__451223 = cljs.core.first.call(null,s__451199__$2);
var region = cljs.core.nth.call(null,vec__451223,(0),null);
var faces = cljs.core.nth.call(null,vec__451223,(1),null);
return cljs.core.cons.call(null,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (vec__451223,region,faces,s__451199__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__451198_$_iter__451226(s__451227){
return (new cljs.core.LazySeq(null,((function (vec__451223,region,faces,s__451199__$2,temp__6728__auto__){
return (function (){
var s__451227__$1 = s__451227;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__451227__$1);
if(temp__6728__auto____$1){
var s__451227__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451227__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451227__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451229 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451228 = (0);
while(true){
if((i__451228 < size__35243__auto__)){
var n = cljs.core._nth.call(null,c__35242__auto__,i__451228);
cljs.core.chunk_append.call(null,b__451229,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__451228,n,c__35242__auto__,size__35243__auto__,b__451229,s__451227__$2,temp__6728__auto____$1,vec__451223,region,faces,s__451199__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__451228,n,c__35242__auto__,size__35243__auto__,b__451229,s__451227__$2,temp__6728__auto____$1,vec__451223,region,faces,s__451199__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__451232 = (i__451228 + (1));
i__451228 = G__451232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451229),ui$core$render_graph_$_iter__451198_$_iter__451226.call(null,cljs.core.chunk_rest.call(null,s__451227__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451229),null);
}
} else {
var n = cljs.core.first.call(null,s__451227__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (n,s__451227__$2,temp__6728__auto____$1,vec__451223,region,faces,s__451199__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(n,s__451227__$2,temp__6728__auto____$1,vec__451223,region,faces,s__451199__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__451198_$_iter__451226.call(null,cljs.core.rest.call(null,s__451227__$2)));
}
} else {
return null;
}
break;
}
});})(vec__451223,region,faces,s__451199__$2,temp__6728__auto__))
,null,null));
});})(vec__451223,region,faces,s__451199__$2,temp__6728__auto__))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (dist,max_dist,mult,centroid,vec__451223,region,faces,s__451199__$2,temp__6728__auto__){
return (function (y){
var x__34723__auto__ = (function (){var x__34730__auto__ = 0.11;
var y__34731__auto__ = (y * 0.9);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})();
var y__34724__auto__ = -0.05;
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
});})(dist,max_dist,mult,centroid,vec__451223,region,faces,s__451199__$2,temp__6728__auto__))
);
})()], null);
})(),ui$core$render_graph_$_iter__451198.call(null,cljs.core.rest.call(null,s__451199__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35244__auto__.call(null,cljs.core.dissoc.call(null,cljs.core.group_by.call(null,((function (iter__35244__auto__){
return (function (k){
return vertex_colors.call(null,vertexes.call(null,cljs.core.first.call(null,k)));
});})(iter__35244__auto__))
,brain_faces),null));
});
ui.core.region_color = (function ui$core$region_color(index){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.2,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),0.2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),0.2], null)], null).call(null,index);
});
ui.core.point__GT_screen = (function ui$core$point__GT_screen(canvas_resolution,rotation,p__451233){
var vec__451237 = p__451233;
var xx = cljs.core.nth.call(null,vec__451237,(0),null);
var yy = cljs.core.nth.call(null,vec__451237,(1),null);
var zz = cljs.core.nth.call(null,vec__451237,(2),null);
var vertex = vec__451237;
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
var G__451334 = ctx;
G__451334.beginPath();

G__451334.moveTo(vertices.call(null,a).call(null,(0)),vertices.call(null,a).call(null,(1)));

G__451334.lineTo(vertices.call(null,b).call(null,(0)),vertices.call(null,b).call(null,(1)));

G__451334.stroke();

return G__451334;
});})(starting_time,vertices))
;
var rgb = ((function (starting_time,vertices,line){
return (function (color,brightness,opaque){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (starting_time,vertices,line){
return (function ui$core$render_brain_$_iter__451335(s__451336){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line){
return (function (){
var s__451336__$1 = s__451336;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451336__$1);
if(temp__6728__auto__){
var s__451336__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451336__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451336__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451338 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451337 = (0);
while(true){
if((i__451337 < size__35243__auto__)){
var c = cljs.core._nth.call(null,c__35242__auto__,i__451337);
cljs.core.chunk_append.call(null,b__451338,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34730__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34731__auto__ = (255);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})()) + (((1) - colored) * (255))) | (0));
})());

var G__451428 = (i__451337 + (1));
i__451337 = G__451428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451338),ui$core$render_brain_$_iter__451335.call(null,cljs.core.chunk_rest.call(null,s__451336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451338),null);
}
} else {
var c = cljs.core.first.call(null,s__451336__$2);
return cljs.core.cons.call(null,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34730__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34731__auto__ = (255);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})()) + (((1) - colored) * (255))) | (0));
})(),ui$core$render_brain_$_iter__451335.call(null,cljs.core.rest.call(null,s__451336__$2)));
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
return (function (p__451339){
var map__451340 = p__451339;
var map__451340__$1 = ((((!((map__451340 == null)))?((((map__451340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451340):map__451340);
var label = cljs.core.get.call(null,map__451340__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var text = cljs.core.get.call(null,map__451340__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var color = cljs.core.get.call(null,map__451340__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var location = cljs.core.get.call(null,map__451340__$1,new cljs.core.Keyword(null,"location","location",1815599388));
if((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)) > (0))){
ctx.lineWidth = (4);

var vec__451342_451429 = location;
var x_451430 = cljs.core.nth.call(null,vec__451342_451429,(0),null);
var y_451431 = cljs.core.nth.call(null,vec__451342_451429,(1),null);
var z_451432 = cljs.core.nth.call(null,vec__451342_451429,(2),null);
ctx.strokeStyle = "#111A22";

ctx.fillStyle = rgb.call(null,color,((z_451432 * (2)) + (1)),true);

cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (vec__451342_451429,x_451430,y_451431,z_451432,map__451340,map__451340__$1,label,text,color,location,starting_time,vertices,line,rgb,set_color){
return (function (index,s){
var G__451345 = ctx;
G__451345.strokeText(s,x_451430,(y_451431 + (index * (15))));

G__451345.fillText(s,x_451430,(y_451431 + (index * (15))));

return G__451345;
});})(vec__451342_451429,x_451430,y_451431,z_451432,map__451340,map__451340__$1,label,text,color,location,starting_time,vertices,line,rgb,set_color))
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
return (function ui$core$render_brain_$_iter__451346(s__451347){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (){
var s__451347__$1 = s__451347;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451347__$1);
if(temp__6728__auto__){
var s__451347__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451347__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451347__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451349 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451348 = (0);
while(true){
if((i__451348 < size__35243__auto__)){
var map__451354 = cljs.core._nth.call(null,c__35242__auto__,i__451348);
var map__451354__$1 = ((((!((map__451354 == null)))?((((map__451354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451354):map__451354);
var region = cljs.core.get.call(null,map__451354__$1,new cljs.core.Keyword(null,"region","region",270415120));
var centroid = cljs.core.get.call(null,map__451354__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__451354__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append.call(null,b__451349,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null));

var G__451433 = (i__451348 + (1));
i__451348 = G__451433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451349),ui$core$render_brain_$_iter__451346.call(null,cljs.core.chunk_rest.call(null,s__451347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451349),null);
}
} else {
var map__451356 = cljs.core.first.call(null,s__451347__$2);
var map__451356__$1 = ((((!((map__451356 == null)))?((((map__451356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451356):map__451356);
var region = cljs.core.get.call(null,map__451356__$1,new cljs.core.Keyword(null,"region","region",270415120));
var centroid = cljs.core.get.call(null,map__451356__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__451356__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null),ui$core$render_brain_$_iter__451346.call(null,cljs.core.rest.call(null,s__451347__$2)));
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
var seq__451358 = cljs.core.seq.call(null,labels);
var chunk__451359 = null;
var count__451360 = (0);
var i__451361 = (0);
while(true){
if((i__451361 < count__451360)){
var label = cljs.core._nth.call(null,chunk__451359,i__451361);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__451434 = seq__451358;
var G__451435 = chunk__451359;
var G__451436 = count__451360;
var G__451437 = (i__451361 + (1));
seq__451358 = G__451434;
chunk__451359 = G__451435;
count__451360 = G__451436;
i__451361 = G__451437;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__451358);
if(temp__6728__auto__){
var seq__451358__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__451358__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__451358__$1);
var G__451438 = cljs.core.chunk_rest.call(null,seq__451358__$1);
var G__451439 = c__35293__auto__;
var G__451440 = cljs.core.count.call(null,c__35293__auto__);
var G__451441 = (0);
seq__451358 = G__451438;
chunk__451359 = G__451439;
count__451360 = G__451440;
i__451361 = G__451441;
continue;
} else {
var label = cljs.core.first.call(null,seq__451358__$1);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__451442 = cljs.core.next.call(null,seq__451358__$1);
var G__451443 = null;
var G__451444 = (0);
var G__451445 = (0);
seq__451358 = G__451442;
chunk__451359 = G__451443;
count__451360 = G__451444;
i__451361 = G__451445;
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
var seq__451362 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),-0.3,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3,0.3,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,(1000),(2)], null)], null));
var chunk__451363 = null;
var count__451364 = (0);
var i__451365 = (0);
while(true){
if((i__451365 < count__451364)){
var vec__451366 = cljs.core._nth.call(null,chunk__451363,i__451365);
var begin = cljs.core.nth.call(null,vec__451366,(0),null);
var end = cljs.core.nth.call(null,vec__451366,(1),null);
var brightness = cljs.core.nth.call(null,vec__451366,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__451369_451446 = cljs.core.seq.call(null,render_graph);
var chunk__451370_451447 = null;
var count__451371_451448 = (0);
var i__451372_451449 = (0);
while(true){
if((i__451372_451449 < count__451371_451448)){
var map__451373_451450 = cljs.core._nth.call(null,chunk__451370_451447,i__451372_451449);
var map__451373_451451__$1 = ((((!((map__451373_451450 == null)))?((((map__451373_451450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451373_451450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451373_451450):map__451373_451450);
var region_451452 = cljs.core.get.call(null,map__451373_451451__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_451453 = cljs.core.get.call(null,map__451373_451451__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_451454 = cljs.core.get.call(null,map__451373_451451__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_451455 = cljs.core.get.call(null,map__451373_451451__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_451456 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_451452))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_451456,brightness);

var seq__451375_451457 = cljs.core.seq.call(null,faces_451453);
var chunk__451376_451458 = null;
var count__451377_451459 = (0);
var i__451378_451460 = (0);
while(true){
if((i__451378_451460 < count__451377_451459)){
var vec__451379_451461 = cljs.core._nth.call(null,chunk__451376_451458,i__451378_451460);
var a_451462 = cljs.core.nth.call(null,vec__451379_451461,(0),null);
var b_451463 = cljs.core.nth.call(null,vec__451379_451461,(1),null);
var c_451464 = cljs.core.nth.call(null,vec__451379_451461,(2),null);
var face_451465 = vec__451379_451461;
if(((begin < vertices.call(null,a_451462).call(null,(2)))) && ((vertices.call(null,a_451462).call(null,(2)) < end))){
line.call(null,a_451462,b_451463);
} else {
}

var G__451466 = seq__451375_451457;
var G__451467 = chunk__451376_451458;
var G__451468 = count__451377_451459;
var G__451469 = (i__451378_451460 + (1));
seq__451375_451457 = G__451466;
chunk__451376_451458 = G__451467;
count__451377_451459 = G__451468;
i__451378_451460 = G__451469;
continue;
} else {
var temp__6728__auto___451470 = cljs.core.seq.call(null,seq__451375_451457);
if(temp__6728__auto___451470){
var seq__451375_451471__$1 = temp__6728__auto___451470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__451375_451471__$1)){
var c__35293__auto___451472 = cljs.core.chunk_first.call(null,seq__451375_451471__$1);
var G__451473 = cljs.core.chunk_rest.call(null,seq__451375_451471__$1);
var G__451474 = c__35293__auto___451472;
var G__451475 = cljs.core.count.call(null,c__35293__auto___451472);
var G__451476 = (0);
seq__451375_451457 = G__451473;
chunk__451376_451458 = G__451474;
count__451377_451459 = G__451475;
i__451378_451460 = G__451476;
continue;
} else {
var vec__451382_451477 = cljs.core.first.call(null,seq__451375_451471__$1);
var a_451478 = cljs.core.nth.call(null,vec__451382_451477,(0),null);
var b_451479 = cljs.core.nth.call(null,vec__451382_451477,(1),null);
var c_451480 = cljs.core.nth.call(null,vec__451382_451477,(2),null);
var face_451481 = vec__451382_451477;
if(((begin < vertices.call(null,a_451478).call(null,(2)))) && ((vertices.call(null,a_451478).call(null,(2)) < end))){
line.call(null,a_451478,b_451479);
} else {
}

var G__451482 = cljs.core.next.call(null,seq__451375_451471__$1);
var G__451483 = null;
var G__451484 = (0);
var G__451485 = (0);
seq__451375_451457 = G__451482;
chunk__451376_451458 = G__451483;
count__451377_451459 = G__451484;
i__451378_451460 = G__451485;
continue;
}
} else {
}
}
break;
}

var G__451486 = seq__451369_451446;
var G__451487 = chunk__451370_451447;
var G__451488 = count__451371_451448;
var G__451489 = (i__451372_451449 + (1));
seq__451369_451446 = G__451486;
chunk__451370_451447 = G__451487;
count__451371_451448 = G__451488;
i__451372_451449 = G__451489;
continue;
} else {
var temp__6728__auto___451490 = cljs.core.seq.call(null,seq__451369_451446);
if(temp__6728__auto___451490){
var seq__451369_451491__$1 = temp__6728__auto___451490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__451369_451491__$1)){
var c__35293__auto___451492 = cljs.core.chunk_first.call(null,seq__451369_451491__$1);
var G__451493 = cljs.core.chunk_rest.call(null,seq__451369_451491__$1);
var G__451494 = c__35293__auto___451492;
var G__451495 = cljs.core.count.call(null,c__35293__auto___451492);
var G__451496 = (0);
seq__451369_451446 = G__451493;
chunk__451370_451447 = G__451494;
count__451371_451448 = G__451495;
i__451372_451449 = G__451496;
continue;
} else {
var map__451385_451497 = cljs.core.first.call(null,seq__451369_451491__$1);
var map__451385_451498__$1 = ((((!((map__451385_451497 == null)))?((((map__451385_451497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451385_451497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451385_451497):map__451385_451497);
var region_451499 = cljs.core.get.call(null,map__451385_451498__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_451500 = cljs.core.get.call(null,map__451385_451498__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_451501 = cljs.core.get.call(null,map__451385_451498__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_451502 = cljs.core.get.call(null,map__451385_451498__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_451503 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_451499))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_451503,brightness);

var seq__451387_451504 = cljs.core.seq.call(null,faces_451500);
var chunk__451388_451505 = null;
var count__451389_451506 = (0);
var i__451390_451507 = (0);
while(true){
if((i__451390_451507 < count__451389_451506)){
var vec__451391_451508 = cljs.core._nth.call(null,chunk__451388_451505,i__451390_451507);
var a_451509 = cljs.core.nth.call(null,vec__451391_451508,(0),null);
var b_451510 = cljs.core.nth.call(null,vec__451391_451508,(1),null);
var c_451511 = cljs.core.nth.call(null,vec__451391_451508,(2),null);
var face_451512 = vec__451391_451508;
if(((begin < vertices.call(null,a_451509).call(null,(2)))) && ((vertices.call(null,a_451509).call(null,(2)) < end))){
line.call(null,a_451509,b_451510);
} else {
}

var G__451513 = seq__451387_451504;
var G__451514 = chunk__451388_451505;
var G__451515 = count__451389_451506;
var G__451516 = (i__451390_451507 + (1));
seq__451387_451504 = G__451513;
chunk__451388_451505 = G__451514;
count__451389_451506 = G__451515;
i__451390_451507 = G__451516;
continue;
} else {
var temp__6728__auto___451517__$1 = cljs.core.seq.call(null,seq__451387_451504);
if(temp__6728__auto___451517__$1){
var seq__451387_451518__$1 = temp__6728__auto___451517__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__451387_451518__$1)){
var c__35293__auto___451519 = cljs.core.chunk_first.call(null,seq__451387_451518__$1);
var G__451520 = cljs.core.chunk_rest.call(null,seq__451387_451518__$1);
var G__451521 = c__35293__auto___451519;
var G__451522 = cljs.core.count.call(null,c__35293__auto___451519);
var G__451523 = (0);
seq__451387_451504 = G__451520;
chunk__451388_451505 = G__451521;
count__451389_451506 = G__451522;
i__451390_451507 = G__451523;
continue;
} else {
var vec__451394_451524 = cljs.core.first.call(null,seq__451387_451518__$1);
var a_451525 = cljs.core.nth.call(null,vec__451394_451524,(0),null);
var b_451526 = cljs.core.nth.call(null,vec__451394_451524,(1),null);
var c_451527 = cljs.core.nth.call(null,vec__451394_451524,(2),null);
var face_451528 = vec__451394_451524;
if(((begin < vertices.call(null,a_451525).call(null,(2)))) && ((vertices.call(null,a_451525).call(null,(2)) < end))){
line.call(null,a_451525,b_451526);
} else {
}

var G__451529 = cljs.core.next.call(null,seq__451387_451518__$1);
var G__451530 = null;
var G__451531 = (0);
var G__451532 = (0);
seq__451387_451504 = G__451529;
chunk__451388_451505 = G__451530;
count__451389_451506 = G__451531;
i__451390_451507 = G__451532;
continue;
}
} else {
}
}
break;
}

var G__451533 = cljs.core.next.call(null,seq__451369_451491__$1);
var G__451534 = null;
var G__451535 = (0);
var G__451536 = (0);
seq__451369_451446 = G__451533;
chunk__451370_451447 = G__451534;
count__451371_451448 = G__451535;
i__451372_451449 = G__451536;
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

var G__451537 = seq__451362;
var G__451538 = chunk__451363;
var G__451539 = count__451364;
var G__451540 = (i__451365 + (1));
seq__451362 = G__451537;
chunk__451363 = G__451538;
count__451364 = G__451539;
i__451365 = G__451540;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__451362);
if(temp__6728__auto__){
var seq__451362__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__451362__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__451362__$1);
var G__451541 = cljs.core.chunk_rest.call(null,seq__451362__$1);
var G__451542 = c__35293__auto__;
var G__451543 = cljs.core.count.call(null,c__35293__auto__);
var G__451544 = (0);
seq__451362 = G__451541;
chunk__451363 = G__451542;
count__451364 = G__451543;
i__451365 = G__451544;
continue;
} else {
var vec__451397 = cljs.core.first.call(null,seq__451362__$1);
var begin = cljs.core.nth.call(null,vec__451397,(0),null);
var end = cljs.core.nth.call(null,vec__451397,(1),null);
var brightness = cljs.core.nth.call(null,vec__451397,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__451400_451545 = cljs.core.seq.call(null,render_graph);
var chunk__451401_451546 = null;
var count__451402_451547 = (0);
var i__451403_451548 = (0);
while(true){
if((i__451403_451548 < count__451402_451547)){
var map__451404_451549 = cljs.core._nth.call(null,chunk__451401_451546,i__451403_451548);
var map__451404_451550__$1 = ((((!((map__451404_451549 == null)))?((((map__451404_451549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451404_451549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451404_451549):map__451404_451549);
var region_451551 = cljs.core.get.call(null,map__451404_451550__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_451552 = cljs.core.get.call(null,map__451404_451550__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_451553 = cljs.core.get.call(null,map__451404_451550__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_451554 = cljs.core.get.call(null,map__451404_451550__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_451555 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_451551))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_451555,brightness);

var seq__451406_451556 = cljs.core.seq.call(null,faces_451552);
var chunk__451407_451557 = null;
var count__451408_451558 = (0);
var i__451409_451559 = (0);
while(true){
if((i__451409_451559 < count__451408_451558)){
var vec__451410_451560 = cljs.core._nth.call(null,chunk__451407_451557,i__451409_451559);
var a_451561 = cljs.core.nth.call(null,vec__451410_451560,(0),null);
var b_451562 = cljs.core.nth.call(null,vec__451410_451560,(1),null);
var c_451563 = cljs.core.nth.call(null,vec__451410_451560,(2),null);
var face_451564 = vec__451410_451560;
if(((begin < vertices.call(null,a_451561).call(null,(2)))) && ((vertices.call(null,a_451561).call(null,(2)) < end))){
line.call(null,a_451561,b_451562);
} else {
}

var G__451565 = seq__451406_451556;
var G__451566 = chunk__451407_451557;
var G__451567 = count__451408_451558;
var G__451568 = (i__451409_451559 + (1));
seq__451406_451556 = G__451565;
chunk__451407_451557 = G__451566;
count__451408_451558 = G__451567;
i__451409_451559 = G__451568;
continue;
} else {
var temp__6728__auto___451569__$1 = cljs.core.seq.call(null,seq__451406_451556);
if(temp__6728__auto___451569__$1){
var seq__451406_451570__$1 = temp__6728__auto___451569__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__451406_451570__$1)){
var c__35293__auto___451571 = cljs.core.chunk_first.call(null,seq__451406_451570__$1);
var G__451572 = cljs.core.chunk_rest.call(null,seq__451406_451570__$1);
var G__451573 = c__35293__auto___451571;
var G__451574 = cljs.core.count.call(null,c__35293__auto___451571);
var G__451575 = (0);
seq__451406_451556 = G__451572;
chunk__451407_451557 = G__451573;
count__451408_451558 = G__451574;
i__451409_451559 = G__451575;
continue;
} else {
var vec__451413_451576 = cljs.core.first.call(null,seq__451406_451570__$1);
var a_451577 = cljs.core.nth.call(null,vec__451413_451576,(0),null);
var b_451578 = cljs.core.nth.call(null,vec__451413_451576,(1),null);
var c_451579 = cljs.core.nth.call(null,vec__451413_451576,(2),null);
var face_451580 = vec__451413_451576;
if(((begin < vertices.call(null,a_451577).call(null,(2)))) && ((vertices.call(null,a_451577).call(null,(2)) < end))){
line.call(null,a_451577,b_451578);
} else {
}

var G__451581 = cljs.core.next.call(null,seq__451406_451570__$1);
var G__451582 = null;
var G__451583 = (0);
var G__451584 = (0);
seq__451406_451556 = G__451581;
chunk__451407_451557 = G__451582;
count__451408_451558 = G__451583;
i__451409_451559 = G__451584;
continue;
}
} else {
}
}
break;
}

var G__451585 = seq__451400_451545;
var G__451586 = chunk__451401_451546;
var G__451587 = count__451402_451547;
var G__451588 = (i__451403_451548 + (1));
seq__451400_451545 = G__451585;
chunk__451401_451546 = G__451586;
count__451402_451547 = G__451587;
i__451403_451548 = G__451588;
continue;
} else {
var temp__6728__auto___451589__$1 = cljs.core.seq.call(null,seq__451400_451545);
if(temp__6728__auto___451589__$1){
var seq__451400_451590__$1 = temp__6728__auto___451589__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__451400_451590__$1)){
var c__35293__auto___451591 = cljs.core.chunk_first.call(null,seq__451400_451590__$1);
var G__451592 = cljs.core.chunk_rest.call(null,seq__451400_451590__$1);
var G__451593 = c__35293__auto___451591;
var G__451594 = cljs.core.count.call(null,c__35293__auto___451591);
var G__451595 = (0);
seq__451400_451545 = G__451592;
chunk__451401_451546 = G__451593;
count__451402_451547 = G__451594;
i__451403_451548 = G__451595;
continue;
} else {
var map__451416_451596 = cljs.core.first.call(null,seq__451400_451590__$1);
var map__451416_451597__$1 = ((((!((map__451416_451596 == null)))?((((map__451416_451596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451416_451596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451416_451596):map__451416_451596);
var region_451598 = cljs.core.get.call(null,map__451416_451597__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_451599 = cljs.core.get.call(null,map__451416_451597__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_451600 = cljs.core.get.call(null,map__451416_451597__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_451601 = cljs.core.get.call(null,map__451416_451597__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_451602 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_451598))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_451602,brightness);

var seq__451418_451603 = cljs.core.seq.call(null,faces_451599);
var chunk__451419_451604 = null;
var count__451420_451605 = (0);
var i__451421_451606 = (0);
while(true){
if((i__451421_451606 < count__451420_451605)){
var vec__451422_451607 = cljs.core._nth.call(null,chunk__451419_451604,i__451421_451606);
var a_451608 = cljs.core.nth.call(null,vec__451422_451607,(0),null);
var b_451609 = cljs.core.nth.call(null,vec__451422_451607,(1),null);
var c_451610 = cljs.core.nth.call(null,vec__451422_451607,(2),null);
var face_451611 = vec__451422_451607;
if(((begin < vertices.call(null,a_451608).call(null,(2)))) && ((vertices.call(null,a_451608).call(null,(2)) < end))){
line.call(null,a_451608,b_451609);
} else {
}

var G__451612 = seq__451418_451603;
var G__451613 = chunk__451419_451604;
var G__451614 = count__451420_451605;
var G__451615 = (i__451421_451606 + (1));
seq__451418_451603 = G__451612;
chunk__451419_451604 = G__451613;
count__451420_451605 = G__451614;
i__451421_451606 = G__451615;
continue;
} else {
var temp__6728__auto___451616__$2 = cljs.core.seq.call(null,seq__451418_451603);
if(temp__6728__auto___451616__$2){
var seq__451418_451617__$1 = temp__6728__auto___451616__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__451418_451617__$1)){
var c__35293__auto___451618 = cljs.core.chunk_first.call(null,seq__451418_451617__$1);
var G__451619 = cljs.core.chunk_rest.call(null,seq__451418_451617__$1);
var G__451620 = c__35293__auto___451618;
var G__451621 = cljs.core.count.call(null,c__35293__auto___451618);
var G__451622 = (0);
seq__451418_451603 = G__451619;
chunk__451419_451604 = G__451620;
count__451420_451605 = G__451621;
i__451421_451606 = G__451622;
continue;
} else {
var vec__451425_451623 = cljs.core.first.call(null,seq__451418_451617__$1);
var a_451624 = cljs.core.nth.call(null,vec__451425_451623,(0),null);
var b_451625 = cljs.core.nth.call(null,vec__451425_451623,(1),null);
var c_451626 = cljs.core.nth.call(null,vec__451425_451623,(2),null);
var face_451627 = vec__451425_451623;
if(((begin < vertices.call(null,a_451624).call(null,(2)))) && ((vertices.call(null,a_451624).call(null,(2)) < end))){
line.call(null,a_451624,b_451625);
} else {
}

var G__451628 = cljs.core.next.call(null,seq__451418_451617__$1);
var G__451629 = null;
var G__451630 = (0);
var G__451631 = (0);
seq__451418_451603 = G__451628;
chunk__451419_451604 = G__451629;
count__451420_451605 = G__451630;
i__451421_451606 = G__451631;
continue;
}
} else {
}
}
break;
}

var G__451632 = cljs.core.next.call(null,seq__451400_451590__$1);
var G__451633 = null;
var G__451634 = (0);
var G__451635 = (0);
seq__451400_451545 = G__451632;
chunk__451401_451546 = G__451633;
count__451402_451547 = G__451634;
i__451403_451548 = G__451635;
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

var G__451636 = cljs.core.next.call(null,seq__451362__$1);
var G__451637 = null;
var G__451638 = (0);
var G__451639 = (0);
seq__451362 = G__451636;
chunk__451363 = G__451637;
count__451364 = G__451638;
i__451365 = G__451639;
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

var x451644_451674 = ui.core.Brain.prototype;
x451644_451674.componentWillUpdate = ((function (x451644_451674){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___451675 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___451676 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___451675,next_ident__40467__auto___451676)){
var idxr__40468__auto___451677 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___451677 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___451677),((function (idxr__40468__auto___451677,ident__40466__auto___451675,next_ident__40467__auto___451676,this__40462__auto__,x451644_451674){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___451675], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___451676], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___451677,ident__40466__auto___451675,next_ident__40467__auto___451676,this__40462__auto__,x451644_451674))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x451644_451674))
;

x451644_451674.shouldComponentUpdate = ((function (x451644_451674){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__451646 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__451646);
} else {
return G__451646;
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
});})(x451644_451674))
;

x451644_451674.componentDidUpdate = ((function (x451644_451674){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x451644_451674))
;

x451644_451674.isMounted = ((function (x451644_451674){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x451644_451674))
;

x451644_451674.componentWillMount = ((function (x451644_451674){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x451644_451674))
;

x451644_451674.initLocalState = ((function (x451644_451674){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1708495417),null], null);
var obj451648 = {"omcljs$state":ret__40440__auto__};
return obj451648;
});})(x451644_451674))
;

x451644_451674.componentDidMount = ((function (x451644_451674){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"interval","interval",1708495417),setInterval(((function (this$,x451644_451674){
return (function (){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.update,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),((function (this$,x451644_451674){
return (function (rotation){
ui.core.render_brain.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)).getContext("2d"),rotation,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));

return (rotation + 0.01);
});})(this$,x451644_451674))
);
});})(this$,x451644_451674))
,(50)));
});})(x451644_451674))
;

x451644_451674.componentWillUnmount = ((function (x451644_451674){
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
});})(x451644_451674))
;

x451644_451674.render = ((function (x451644_451674){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_451649 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_451650 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_451651 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_451652 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_451653 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__451654 = om.next.props.call(null,this$);
var map__451654__$1 = ((((!((map__451654 == null)))?((((map__451654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451654):map__451654);
var props = map__451654__$1;
var items = cljs.core.get.call(null,map__451654__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
var loading = cljs.core.not.call(null,cljs.core.seq.call(null,items));
var scores = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (map__451654,map__451654__$1,props,items,loading,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674){
return (function ui$core$iter__451657(s__451658){
return (new cljs.core.LazySeq(null,((function (map__451654,map__451654__$1,props,items,loading,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674){
return (function (){
var s__451658__$1 = s__451658;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451658__$1);
if(temp__6728__auto__){
var s__451658__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451658__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451658__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451660 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451659 = (0);
while(true){
if((i__451659 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__451659);
cljs.core.chunk_append.call(null,b__451660,(function (){var map__451665 = item;
var map__451665__$1 = ((((!((map__451665 == null)))?((((map__451665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451665):map__451665);
var votes = cljs.core.get.call(null,map__451665__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34723__auto__ = (0);
var y__34724__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})());

var G__451678 = (i__451659 + (1));
i__451659 = G__451678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451660),ui$core$iter__451657.call(null,cljs.core.chunk_rest.call(null,s__451658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451660),null);
}
} else {
var item = cljs.core.first.call(null,s__451658__$2);
return cljs.core.cons.call(null,(function (){var map__451667 = item;
var map__451667__$1 = ((((!((map__451667 == null)))?((((map__451667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451667):map__451667);
var votes = cljs.core.get.call(null,map__451667__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34723__auto__ = (0);
var y__34724__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})(),ui$core$iter__451657.call(null,cljs.core.rest.call(null,s__451658__$2)));
}
} else {
return null;
}
break;
}
});})(map__451654,map__451654__$1,props,items,loading,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674))
,null,null));
});})(map__451654,map__451654__$1,props,items,loading,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674))
;
return iter__35244__auto__.call(null,items);
})());
var sections = cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__451654,map__451654__$1,props,items,loading,scores,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674){
return (function (index,item,score){
var map__451669 = item;
var map__451669__$1 = ((((!((map__451669 == null)))?((((map__451669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451669):map__451669);
var description = cljs.core.get.call(null,map__451669__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("item","description","item/description",-1431609213).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var x__34723__auto__ = score;
var y__34724__auto__ = (cljs.core.apply.call(null,cljs.core._PLUS_,scores) / (50));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})(),new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});})(map__451654,map__451654__$1,props,items,loading,scores,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674))
,cljs.core.range.call(null),items,scores));
var sections__$1 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core._,new cljs.core.Keyword(null,"size","size",1098693007)),sections));
var map__451655 = om.next.get_computed.call(null,props);
var map__451655__$1 = ((((!((map__451655 == null)))?((((map__451655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451655):map__451655);
var mode = cljs.core.get.call(null,map__451655__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
cljs.core.swap_BANG_.call(null,ui.core.brain_state,((function (map__451654,map__451654__$1,props,items,loading,scores,sections,sections__$1,map__451655,map__451655__$1,mode,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674){
return (function (brain_state){
if(cljs.core.not_EQ_.call(null,sections__$1,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(brain_state))){
var br = ui.core.brain_prerender.call(null,sections__$1);
return cljs.core.assoc.call(null,brain_state,new cljs.core.Keyword(null,"sections","sections",-886710106),sections__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958),br,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629),ui.core.render_graph.call(null,ui.core.brain_faces,ui.core.brain_vertices,br));
} else {
return brain_state;
}
});})(map__451654,map__451654__$1,props,items,loading,scores,sections,sections__$1,map__451655,map__451655__$1,mode,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674))
);

return ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"colored","colored",-1421800355),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colored","colored",-1421800355),ui.motion.spring.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"brain","brain",428499577))) && (!(loading)))?(1):(0)),ui.motion.gentle),new cljs.core.Keyword(null,"top","top",-1856271961),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(50):(0))),new cljs.core.Keyword(null,"width","width",-384071477),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(150):(60)),ui.motion.wobbly)], null)], null),((function (map__451654,map__451654__$1,props,items,loading,scores,sections,sections__$1,map__451655,map__451655__$1,mode,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674){
return (function (value){
cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value));

return cljs.core.apply.call(null,React.DOM.div,({"style": ({"width": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "position": "absolute", "zIndex": om_tools.dom.format_opts.call(null,(((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value) > 0.5))?(1):(-1))), "top": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("%")].join(''))})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.canvas(({"ref": om_tools.dom.format_opts.call(null,((function (map__451654,map__451654__$1,props,items,loading,scores,sections,sections__$1,map__451655,map__451655__$1,mode,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674){
return (function (canvas){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas);
});})(map__451654,map__451654__$1,props,items,loading,scores,sections,sections__$1,map__451655,map__451655__$1,mode,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674))
), "width": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "height": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "style": ({"height": "100%", "width": "100%"})})),((loading)?cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "top": "40%", "left": "25%", "right": "25%", "height": "20%"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.p(({"style": ({"textAlign": "center"})}),"Brain Initializing from Ethereum Blockchain"),blueprint_cljs.core.progress_bar.call(null)],null)))):null)],null))));
});})(map__451654,map__451654__$1,props,items,loading,scores,sections,sections__$1,map__451655,map__451655__$1,mode,_STAR_reconciler_STAR_451649,_STAR_depth_STAR_451650,_STAR_shared_STAR_451651,_STAR_instrument_STAR_451652,_STAR_parent_STAR_451653,this$,this__40461__auto__,x451644_451674))
);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_451653;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_451652;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_451651;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_451650;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_451649;
}});})(x451644_451674))
;


ui.core.Brain.prototype.constructor = ui.core.Brain;

ui.core.Brain.prototype.constructor.displayName = "ui.core/Brain";

ui.core.Brain.prototype.om$isComponent = true;

var x451672_451679 = ui.core.Brain;
/** @nocollapse */
x451672_451679.om$next$IQuery$ = true;

/** @nocollapse */
x451672_451679.om$next$IQuery$query$arity$1 = ((function (x451672_451679){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x451672_451679))
;


var x451673_451680 = ui.core.Brain.prototype;

x451673_451680.om$next$IQuery$ = true;


x451673_451680.om$next$IQuery$query$arity$1 = ((function (x451673_451680){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x451673_451680))
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

var x451685_451699 = ui.core.Root.prototype;
x451685_451699.componentWillUpdate = ((function (x451685_451699){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___451700 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___451701 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___451700,next_ident__40467__auto___451701)){
var idxr__40468__auto___451702 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___451702 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___451702),((function (idxr__40468__auto___451702,ident__40466__auto___451700,next_ident__40467__auto___451701,this__40462__auto__,x451685_451699){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___451700], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___451701], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___451702,ident__40466__auto___451700,next_ident__40467__auto___451701,this__40462__auto__,x451685_451699))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x451685_451699))
;

x451685_451699.shouldComponentUpdate = ((function (x451685_451699){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__451687 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__451687);
} else {
return G__451687;
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
});})(x451685_451699))
;

x451685_451699.componentDidUpdate = ((function (x451685_451699){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x451685_451699))
;

x451685_451699.isMounted = ((function (x451685_451699){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x451685_451699))
;

x451685_451699.componentWillMount = ((function (x451685_451699){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x451685_451699))
;

x451685_451699.initLocalState = ((function (x451685_451699){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),null], null),new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.Keyword(null,"brain","brain",428499577)], null);
var obj451689 = {"omcljs$state":ret__40440__auto__};
return obj451689;
});})(x451685_451699))
;

x451685_451699.componentDidMount = ((function (x451685_451699){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),(function (){var update_address = ((function (this$,x451685_451699){
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
});})(this$,x451685_451699))
;
update_address.call(null);

return setInterval(update_address,(1000));
})()], null));
});})(x451685_451699))
;

x451685_451699.componentWillUnmount = ((function (x451685_451699){
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
});})(x451685_451699))
;

x451685_451699.render = ((function (x451685_451699){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_451690 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_451691 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_451692 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_451693 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_451694 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__451695 = om.next.props.call(null,this$);
var map__451695__$1 = ((((!((map__451695 == null)))?((((map__451695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451695):map__451695);
var proposals_props = cljs.core.get.call(null,map__451695__$1,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231));
var stakes_props = cljs.core.get.call(null,map__451695__$1,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339));
var items_props = cljs.core.get.call(null,map__451695__$1,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104));
var brain_props = cljs.core.get.call(null,map__451695__$1,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934));
var network_id = cljs.core.get.call(null,map__451695__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var can_vote_proposal = cljs.core.get.call(null,map__451695__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__451695__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dark", "style": ({"display": "flex", "justifyContent": "center", "zoom": 1.3})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"flexGrow": "1", "maxWidth": "600px"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.tabs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__451695,map__451695__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_451690,_STAR_depth_STAR_451691,_STAR_shared_STAR_451692,_STAR_instrument_STAR_451693,_STAR_parent_STAR_451694,this$,this__40461__auto__,x451685_451699){
return (function (index){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"white","white",-483998618)], null).call(null,index));
});})(map__451695,map__451695__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_451690,_STAR_depth_STAR_451691,_STAR_shared_STAR_451692,_STAR_instrument_STAR_451693,_STAR_parent_STAR_451694,this$,this__40461__auto__,x451685_451699))
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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_451694;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_451693;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_451692;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_451691;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_451690;
}});})(x451685_451699))
;


ui.core.Root.prototype.constructor = ui.core.Root;

ui.core.Root.prototype.constructor.displayName = "ui.core/Root";

ui.core.Root.prototype.om$isComponent = true;

var x451697_451703 = ui.core.Root;
/** @nocollapse */
x451697_451703.om$next$IQuery$ = true;

/** @nocollapse */
x451697_451703.om$next$IQuery$query$arity$1 = ((function (x451697_451703){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x451697_451703))
;


var x451698_451704 = ui.core.Root.prototype;

x451698_451704.om$next$IQuery$ = true;


x451698_451704.om$next$IQuery$query$arity$1 = ((function (x451698_451704){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x451698_451704))
;


ui.core.Root.cljs$lang$type = true;

ui.core.Root.cljs$lang$ctorStr = "ui.core/Root";

ui.core.Root.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Root");
});
ui.core.simple_read = (function ui$core$simple_read(p__451705,key,_){
var map__451708 = p__451705;
var map__451708__$1 = ((((!((map__451708 == null)))?((((map__451708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451708):map__451708);
var env = map__451708__$1;
var state = cljs.core.get.call(null,map__451708__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state).call(null,key)], null);
});
ui.core.simple_read_with_remote = (function ui$core$simple_read_with_remote(p__451710,key,_){
var map__451713 = p__451710;
var map__451713__$1 = ((((!((map__451713 == null)))?((((map__451713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451713):map__451713);
var env = map__451713__$1;
var state = cljs.core.get.call(null,map__451713__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var value = cljs.core.deref.call(null,state).call(null,key);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"remote","remote",-1593576576),cljs.core.not.call(null,value)], null);
});
ui.core.recursive_read = (function ui$core$recursive_read(query_root,p__451715,_,___$1){
var map__451718 = p__451715;
var map__451718__$1 = ((((!((map__451718 == null)))?((((map__451718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451718):map__451718);
var env = map__451718__$1;
var parser = cljs.core.get.call(null,map__451718__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__451718__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__451718__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__451718__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query-root","query-root",359781888),query_root,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}
});
ui.core.recursive_channel_read = (function ui$core$recursive_channel_read(p__451720,_,___$1){
var map__451723 = p__451720;
var map__451723__$1 = ((((!((map__451723 == null)))?((((map__451723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451723):map__451723);
var env = map__451723__$1;
var parser = cljs.core.get.call(null,map__451723__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__451723__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.call(null,map__451723__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
var G__451725__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,true,args);
};
var G__451725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__451726__i = 0, G__451726__a = new Array(arguments.length -  0);
while (G__451726__i < G__451726__a.length) {G__451726__a[G__451726__i] = arguments[G__451726__i + 0]; ++G__451726__i;}
  args = new cljs.core.IndexedSeq(G__451726__a,0);
} 
return G__451725__delegate.call(this,args);};
G__451725.cljs$lang$maxFixedArity = 0;
G__451725.cljs$lang$applyTo = (function (arglist__451727){
var args = cljs.core.seq(arglist__451727);
return G__451725__delegate(args);
});
G__451725.cljs$core$IFn$_invoke$arity$variadic = G__451725__delegate;
return G__451725;
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
var map__451728 = env;
var map__451728__$1 = ((((!((map__451728 == null)))?((((map__451728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451728):map__451728);
var parser = cljs.core.get.call(null,map__451728__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__451728__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__451728__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__451728__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__451728__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__451728,map__451728__$1,parser,state,query,target,ast,state__$1){
return (function ui$core$iter__451730(s__451731){
return (new cljs.core.LazySeq(null,((function (map__451728,map__451728__$1,parser,state,query,target,ast,state__$1){
return (function (){
var s__451731__$1 = s__451731;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451731__$1);
if(temp__6728__auto__){
var s__451731__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451731__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451731__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451733 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451732 = (0);
while(true){
if((i__451732 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__451732);
cljs.core.chunk_append.call(null,b__451733,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query));

var G__451734 = (i__451732 + (1));
i__451732 = G__451734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451733),ui$core$iter__451730.call(null,cljs.core.chunk_rest.call(null,s__451731__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451733),null);
}
} else {
var item = cljs.core.first.call(null,s__451731__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query),ui$core$iter__451730.call(null,cljs.core.rest.call(null,s__451731__$2)));
}
} else {
return null;
}
break;
}
});})(map__451728,map__451728__$1,parser,state,query,target,ast,state__$1))
,null,null));
});})(map__451728,map__451728__$1,parser,state,query,target,ast,state__$1))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("item","by-id","item/by-id",-2140839086).cljs$core$IFn$_invoke$arity$1(state__$1));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),(function (env,k,params){
var map__451735 = env;
var map__451735__$1 = ((((!((map__451735 == null)))?((((map__451735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451735):map__451735);
var parser = cljs.core.get.call(null,map__451735__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__451735__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__451735__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__451735__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__451735__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__451736 = state__$1;
var map__451736__$1 = ((((!((map__451736 == null)))?((((map__451736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451736):map__451736);
var order = cljs.core.get.call(null,map__451736__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__451735,map__451735__$1,parser,state,query,target,ast,state__$1,map__451736,map__451736__$1,order){
return (function ui$core$iter__451739(s__451740){
return (new cljs.core.LazySeq(null,((function (map__451735,map__451735__$1,parser,state,query,target,ast,state__$1,map__451736,map__451736__$1,order){
return (function (){
var s__451740__$1 = s__451740;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451740__$1);
if(temp__6728__auto__){
var s__451740__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451740__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451740__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451742 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451741 = (0);
while(true){
if((i__451741 < size__35243__auto__)){
var proposal = cljs.core._nth.call(null,c__35242__auto__,i__451741);
cljs.core.chunk_append.call(null,b__451742,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query));

var G__451743 = (i__451741 + (1));
i__451741 = G__451743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451742),ui$core$iter__451739.call(null,cljs.core.chunk_rest.call(null,s__451740__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451742),null);
}
} else {
var proposal = cljs.core.first.call(null,s__451740__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query),ui$core$iter__451739.call(null,cljs.core.rest.call(null,s__451740__$2)));
}
} else {
return null;
}
break;
}
});})(map__451735,map__451735__$1,parser,state,query,target,ast,state__$1,map__451736,map__451736__$1,order))
,null,null));
});})(map__451735,map__451735__$1,parser,state,query,target,ast,state__$1,map__451736,map__451736__$1,order))
;
return iter__35244__auto__.call(null,order);
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
var map__451744 = env;
var map__451744__$1 = ((((!((map__451744 == null)))?((((map__451744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451744):map__451744);
var parser = cljs.core.get.call(null,map__451744__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__451744__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__451744__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__451744__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__451744__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__451745 = state__$1;
var map__451745__$1 = ((((!((map__451745 == null)))?((((map__451745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451745):map__451745);
var by_id = cljs.core.get.call(null,map__451745__$1,new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__451744,map__451744__$1,parser,state,query,target,ast,state__$1,map__451745,map__451745__$1,by_id){
return (function ui$core$iter__451748(s__451749){
return (new cljs.core.LazySeq(null,((function (map__451744,map__451744__$1,parser,state,query,target,ast,state__$1,map__451745,map__451745__$1,by_id){
return (function (){
var s__451749__$1 = s__451749;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451749__$1);
if(temp__6728__auto__){
var s__451749__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451749__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451749__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451751 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451750 = (0);
while(true){
if((i__451750 < size__35243__auto__)){
var stake = cljs.core._nth.call(null,c__35242__auto__,i__451750);
cljs.core.chunk_append.call(null,b__451751,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query));

var G__451752 = (i__451750 + (1));
i__451750 = G__451752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451751),ui$core$iter__451748.call(null,cljs.core.chunk_rest.call(null,s__451749__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451751),null);
}
} else {
var stake = cljs.core.first.call(null,s__451749__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query),ui$core$iter__451748.call(null,cljs.core.rest.call(null,s__451749__$2)));
}
} else {
return null;
}
break;
}
});})(map__451744,map__451744__$1,parser,state,query,target,ast,state__$1,map__451745,map__451745__$1,by_id))
,null,null));
});})(map__451744,map__451744__$1,parser,state,query,target,ast,state__$1,map__451745,map__451745__$1,by_id))
;
return iter__35244__auto__.call(null,cljs.core.vals.call(null,by_id));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__451753__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__451753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__451754__i = 0, G__451754__a = new Array(arguments.length -  0);
while (G__451754__i < G__451754__a.length) {G__451754__a[G__451754__i] = arguments[G__451754__i + 0]; ++G__451754__i;}
  args = new cljs.core.IndexedSeq(G__451754__a,0);
} 
return G__451753__delegate.call(this,args);};
G__451753.cljs$lang$maxFixedArity = 0;
G__451753.cljs$lang$applyTo = (function (arglist__451755){
var args = cljs.core.seq(arglist__451755);
return G__451753__delegate(args);
});
G__451753.cljs$core$IFn$_invoke$arity$variadic = G__451753__delegate;
return G__451753;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__451756__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__451756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__451757__i = 0, G__451757__a = new Array(arguments.length -  0);
while (G__451757__i < G__451757__a.length) {G__451757__a[G__451757__i] = arguments[G__451757__i + 0]; ++G__451757__i;}
  args = new cljs.core.IndexedSeq(G__451757__a,0);
} 
return G__451756__delegate.call(this,args);};
G__451756.cljs$lang$maxFixedArity = 0;
G__451756.cljs$lang$applyTo = (function (arglist__451758){
var args = cljs.core.seq(arglist__451758);
return G__451756__delegate(args);
});
G__451756.cljs$core$IFn$_invoke$arity$variadic = G__451756__delegate;
return G__451756;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__451759__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__451759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__451760__i = 0, G__451760__a = new Array(arguments.length -  0);
while (G__451760__i < G__451760__a.length) {G__451760__a[G__451760__i] = arguments[G__451760__i + 0]; ++G__451760__i;}
  args = new cljs.core.IndexedSeq(G__451760__a,0);
} 
return G__451759__delegate.call(this,args);};
G__451759.cljs$lang$maxFixedArity = 0;
G__451759.cljs$lang$applyTo = (function (arglist__451761){
var args = cljs.core.seq(arglist__451761);
return G__451759__delegate(args);
});
G__451759.cljs$core$IFn$_invoke$arity$variadic = G__451759__delegate;
return G__451759;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__451762__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__451762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__451763__i = 0, G__451763__a = new Array(arguments.length -  0);
while (G__451763__i < G__451763__a.length) {G__451763__a[G__451763__i] = arguments[G__451763__i + 0]; ++G__451763__i;}
  args = new cljs.core.IndexedSeq(G__451763__a,0);
} 
return G__451762__delegate.call(this,args);};
G__451762.cljs$lang$maxFixedArity = 0;
G__451762.cljs$lang$applyTo = (function (arglist__451764){
var args = cljs.core.seq(arglist__451764);
return G__451762__delegate(args);
});
G__451762.cljs$core$IFn$_invoke$arity$variadic = G__451762__delegate;
return G__451762;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,k,params){
var map__451765 = env;
var map__451765__$1 = ((((!((map__451765 == null)))?((((map__451765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451765):map__451765);
var parser = cljs.core.get.call(null,map__451765__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__451765__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__451765__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__451765__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__451765__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__451766 = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env);
var map__451766__$1 = ((((!((map__451766 == null)))?((((map__451766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451766):map__451766);
var votes = cljs.core.get.call(null,map__451766__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(votes)?(function (){var iter__35244__auto__ = ((function (map__451765,map__451765__$1,parser,state,query,target,ast,state__$1,map__451766,map__451766__$1,votes){
return (function ui$core$iter__451769(s__451770){
return (new cljs.core.LazySeq(null,((function (map__451765,map__451765__$1,parser,state,query,target,ast,state__$1,map__451766,map__451766__$1,votes){
return (function (){
var s__451770__$1 = s__451770;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451770__$1);
if(temp__6728__auto__){
var s__451770__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451770__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451770__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451772 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451771 = (0);
while(true){
if((i__451771 < size__35243__auto__)){
var item_votes = cljs.core._nth.call(null,c__35242__auto__,i__451771);
cljs.core.chunk_append.call(null,b__451772,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query));

var G__451773 = (i__451771 + (1));
i__451771 = G__451773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451772),ui$core$iter__451769.call(null,cljs.core.chunk_rest.call(null,s__451770__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451772),null);
}
} else {
var item_votes = cljs.core.first.call(null,s__451770__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query),ui$core$iter__451769.call(null,cljs.core.rest.call(null,s__451770__$2)));
}
} else {
return null;
}
break;
}
});})(map__451765,map__451765__$1,parser,state,query,target,ast,state__$1,map__451766,map__451766__$1,votes))
,null,null));
});})(map__451765,map__451765__$1,parser,state,query,target,ast,state__$1,map__451766,map__451766__$1,votes))
;
return iter__35244__auto__.call(null,votes);
})():null)], null);
}
}));
var seq__451774_451784 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake","stake",-1498497787),new cljs.core.Keyword("stake","value","stake/value",466231031),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword("item","description","item/description",-1431609213),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),true], null)], null));
var chunk__451775_451785 = null;
var count__451776_451786 = (0);
var i__451777_451787 = (0);
while(true){
if((i__451777_451787 < count__451776_451786)){
var vec__451778_451788 = cljs.core._nth.call(null,chunk__451775_451785,i__451777_451787);
var object_451789 = cljs.core.nth.call(null,vec__451778_451788,(0),null);
var method_451790 = cljs.core.nth.call(null,vec__451778_451788,(1),null);
var remote_451791 = cljs.core.nth.call(null,vec__451778_451788,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_451790,((function (seq__451774_451784,chunk__451775_451785,count__451776_451786,i__451777_451787,vec__451778_451788,object_451789,method_451790,remote_451791){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_451791,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_451789,dispatch_key], null))], null);
});})(seq__451774_451784,chunk__451775_451785,count__451776_451786,i__451777_451787,vec__451778_451788,object_451789,method_451790,remote_451791))
);

var G__451792 = seq__451774_451784;
var G__451793 = chunk__451775_451785;
var G__451794 = count__451776_451786;
var G__451795 = (i__451777_451787 + (1));
seq__451774_451784 = G__451792;
chunk__451775_451785 = G__451793;
count__451776_451786 = G__451794;
i__451777_451787 = G__451795;
continue;
} else {
var temp__6728__auto___451796 = cljs.core.seq.call(null,seq__451774_451784);
if(temp__6728__auto___451796){
var seq__451774_451797__$1 = temp__6728__auto___451796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__451774_451797__$1)){
var c__35293__auto___451798 = cljs.core.chunk_first.call(null,seq__451774_451797__$1);
var G__451799 = cljs.core.chunk_rest.call(null,seq__451774_451797__$1);
var G__451800 = c__35293__auto___451798;
var G__451801 = cljs.core.count.call(null,c__35293__auto___451798);
var G__451802 = (0);
seq__451774_451784 = G__451799;
chunk__451775_451785 = G__451800;
count__451776_451786 = G__451801;
i__451777_451787 = G__451802;
continue;
} else {
var vec__451781_451803 = cljs.core.first.call(null,seq__451774_451797__$1);
var object_451804 = cljs.core.nth.call(null,vec__451781_451803,(0),null);
var method_451805 = cljs.core.nth.call(null,vec__451781_451803,(1),null);
var remote_451806 = cljs.core.nth.call(null,vec__451781_451803,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_451805,((function (seq__451774_451784,chunk__451775_451785,count__451776_451786,i__451777_451787,vec__451781_451803,object_451804,method_451805,remote_451806,seq__451774_451797__$1,temp__6728__auto___451796){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_451806,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_451804,dispatch_key], null))], null);
});})(seq__451774_451784,chunk__451775_451785,count__451776_451786,i__451777_451787,vec__451781_451803,object_451804,method_451805,remote_451806,seq__451774_451797__$1,temp__6728__auto___451796))
);

var G__451807 = cljs.core.next.call(null,seq__451774_451797__$1);
var G__451808 = null;
var G__451809 = (0);
var G__451810 = (0);
seq__451774_451784 = G__451807;
chunk__451775_451785 = G__451808;
count__451776_451786 = G__451809;
i__451777_451787 = G__451810;
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
var G__451811__delegate = function (args){
return cljs.core.apply.call(null,ui.core.simple_read_with_remote,args);
};
var G__451811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__451812__i = 0, G__451812__a = new Array(arguments.length -  0);
while (G__451812__i < G__451812__a.length) {G__451812__a[G__451812__i] = arguments[G__451812__i + 0]; ++G__451812__i;}
  args = new cljs.core.IndexedSeq(G__451812__a,0);
} 
return G__451811__delegate.call(this,args);};
G__451811.cljs$lang$maxFixedArity = 0;
G__451811.cljs$lang$applyTo = (function (arglist__451813){
var args = cljs.core.seq(arglist__451813);
return G__451811__delegate(args);
});
G__451811.cljs$core$IFn$_invoke$arity$variadic = G__451811__delegate;
return G__451811;
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
var map__451814 = params;
var map__451814__$1 = ((((!((map__451814 == null)))?((((map__451814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451814):map__451814);
var id = cljs.core.get.call(null,map__451814__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__451814__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),((function (map__451814,map__451814__$1,id,description){
return (function (state){
var map__451816 = state;
var map__451816__$1 = ((((!((map__451816 == null)))?((((map__451816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451816):map__451816);
var proposals = cljs.core.get.call(null,map__451816__$1,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153));
var proposal = proposals.call(null,id);
var new_tempid = om.next.tempid.call(null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),cljs.core.assoc.call(null,cljs.core.update.call(null,proposals,id,cljs.core.assoc,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),description,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false),new_tempid,cljs.core.assoc.call(null,proposal,new cljs.core.Keyword("db","id","db/id",-1388397098),new_tempid,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),true))),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),new_tempid], null));
});})(map__451814,map__451814__$1,id,description))
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
var map__451818 = params;
var map__451818__$1 = ((((!((map__451818 == null)))?((((map__451818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451818):map__451818);
var address = cljs.core.get.call(null,map__451818__$1,new cljs.core.Keyword(null,"address","address",559499426));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35244__auto__ = (function ui$core$map_by_id_$_iter__451824(s__451825){
return (new cljs.core.LazySeq(null,(function (){
var s__451825__$1 = s__451825;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451825__$1);
if(temp__6728__auto__){
var s__451825__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451825__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451825__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451827 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451826 = (0);
while(true){
if((i__451826 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__451826);
cljs.core.chunk_append.call(null,b__451827,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null));

var G__451828 = (i__451826 + (1));
i__451826 = G__451828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451827),ui$core$map_by_id_$_iter__451824.call(null,cljs.core.chunk_rest.call(null,s__451825__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451827),null);
}
} else {
var item = cljs.core.first.call(null,s__451825__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null),ui$core$map_by_id_$_iter__451824.call(null,cljs.core.rest.call(null,s__451825__$2)));
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
var map__451835 = ui.core.tweak_tree.call(null,b);
var map__451835__$1 = ((((!((map__451835 == null)))?((((map__451835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451835):map__451835);
var network_id = cljs.core.get.call(null,map__451835__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var proposals = cljs.core.get.call(null,map__451835__$1,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444));
var order = cljs.core.get.call(null,map__451835__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
var stakes = cljs.core.get.call(null,map__451835__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__451835__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var items = cljs.core.get.call(null,map__451835__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,a,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),((function (map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items){
return (function (k){
var or__34390__auto__ = network_id;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return k;
}
});})(map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),cljs.core.merge,user),new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),((function (map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items){
return (function (proposals_old){
return cljs.core.merge_with.call(null,cljs.core.merge,proposals_old,ui.core.map_by_id.call(null,proposals));
});})(map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),((function (map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items){
return (function (order_old){
if(cljs.core.truth_(proposals)){
var ks = cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),proposals),cljs.core.filter.call(null,om.next.tempid_QMARK_,cljs.core.map.call(null,cljs.core.second,order_old)));
return cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (ks,map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items){
return (function ui$core$my_merge_tree_$_iter__451837(s__451838){
return (new cljs.core.LazySeq(null,((function (ks,map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items){
return (function (){
var s__451838__$1 = s__451838;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__451838__$1);
if(temp__6728__auto__){
var s__451838__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451838__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__451838__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__451840 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__451839 = (0);
while(true){
if((i__451839 < size__35243__auto__)){
var k = cljs.core._nth.call(null,c__35242__auto__,i__451839);
cljs.core.chunk_append.call(null,b__451840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null));

var G__451841 = (i__451839 + (1));
i__451839 = G__451841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451840),ui$core$my_merge_tree_$_iter__451837.call(null,cljs.core.chunk_rest.call(null,s__451838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451840),null);
}
} else {
var k = cljs.core.first.call(null,s__451838__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null),ui$core$my_merge_tree_$_iter__451837.call(null,cljs.core.rest.call(null,s__451838__$2)));
}
} else {
return null;
}
break;
}
});})(ks,map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items))
,null,null));
});})(ks,map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items))
;
return iter__35244__auto__.call(null,ks);
})());
} else {
return order_old;
}
});})(map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),((function (map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items){
return (function (stakes_old){
return cljs.core.merge_with.call(null,cljs.core.merge,stakes_old,ui.core.map_by_id.call(null,stakes));
});})(map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),((function (map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items){
return (function (items_old){
var or__34390__auto__ = items;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return items_old;
}
});})(map__451835,map__451835__$1,network_id,proposals,order,stakes,user,items))
);
});
ui.core.my_merge = (function ui$core$my_merge(reconciler,state,res,query){
var k = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),k,new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,cljs.core.select_keys.call(null,res,k),query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
ui.core.migrate = (function ui$core$migrate(var_args){
var args451842 = [];
var len__35573__auto___451889 = arguments.length;
var i__35574__auto___451890 = (0);
while(true){
if((i__35574__auto___451890 < len__35573__auto___451889)){
args451842.push((arguments[i__35574__auto___451890]));

var G__451891 = (i__35574__auto___451890 + (1));
i__35574__auto___451890 = G__451891;
continue;
} else {
}
break;
}

var G__451844 = args451842.length;
switch (G__451844) {
case 3:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args451842.length)].join('')));

}
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return ui.core.migrate.call(null,app_state_pure,query,tempids,null);
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function ui$core$dissoc_in(pure,p__451867){
var vec__451871 = p__451867;
var table = cljs.core.nth.call(null,vec__451871,(0),null);
var id = cljs.core.nth.call(null,vec__451871,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function ui$core$step(pure,p__451874){
var vec__451882 = p__451874;
var old = cljs.core.nth.call(null,vec__451882,(0),null);
var vec__451885 = cljs.core.nth.call(null,vec__451882,(1),null);
var _ = cljs.core.nth.call(null,vec__451885,(0),null);
var id = cljs.core.nth.call(null,vec__451885,(1),null);
var new$ = vec__451885;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__451888 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__451888,id_key,id);
} else {
return G__451888;
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
var len__35573__auto___451910 = arguments.length;
var i__35574__auto___451911 = (0);
while(true){
if((i__35574__auto___451911 < len__35573__auto___451910)){
args__35580__auto__.push((arguments[i__35574__auto___451911]));

var G__451912 = (i__35574__auto___451911 + (1));
i__35574__auto___451911 = G__451912;
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
return (function (state_451900){
var state_val_451901 = (state_451900[(1)]);
if((state_val_451901 === (1))){
var state_451900__$1 = state_451900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_451900__$1,(2),c,result);
} else {
if((state_val_451901 === (2))){
var inst_451897 = (state_451900[(2)]);
var inst_451898 = cljs.core.async.close_BANG_.call(null,c);
var state_451900__$1 = (function (){var statearr_451902 = state_451900;
(statearr_451902[(7)] = inst_451897);

return statearr_451902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_451900__$1,inst_451898);
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
var statearr_451906 = [null,null,null,null,null,null,null,null];
(statearr_451906[(0)] = ui$core$state_machine__40145__auto__);

(statearr_451906[(1)] = (1));

return statearr_451906;
});
var ui$core$state_machine__40145__auto____1 = (function (state_451900){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_451900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e451907){if((e451907 instanceof Object)){
var ex__40148__auto__ = e451907;
var statearr_451908_451913 = state_451900;
(statearr_451908_451913[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_451900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e451907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__451914 = state_451900;
state_451900 = G__451914;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_451900){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_451900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,start_time))
})();
var state__40169__auto__ = (function (){var statearr_451909 = f__40168__auto__.call(null);
(statearr_451909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_451909;
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

ui.core.chan_call.cljs$lang$applyTo = (function (seq451893){
var G__451894 = cljs.core.first.call(null,seq451893);
var seq451893__$1 = cljs.core.next.call(null,seq451893);
var G__451895 = cljs.core.first.call(null,seq451893__$1);
var seq451893__$2 = cljs.core.next.call(null,seq451893__$1);
return ui.core.chan_call.cljs$core$IFn$_invoke$arity$variadic(G__451894,G__451895,seq451893__$2);
});

ui.core.get_network = (function ui$core$get_network(){
var c = cljs.core.async.chan.call(null);
web3.version.getNetwork(((function (c){
return (function (error,result){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c){
return (function (state_451932){
var state_val_451933 = (state_451932[(1)]);
if((state_val_451933 === (1))){
var inst_451928 = (result | (0));
var state_451932__$1 = state_451932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_451932__$1,(2),c,inst_451928);
} else {
if((state_val_451933 === (2))){
var inst_451930 = (state_451932[(2)]);
var state_451932__$1 = state_451932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_451932__$1,inst_451930);
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
var statearr_451937 = [null,null,null,null,null,null,null];
(statearr_451937[(0)] = ui$core$get_network_$_state_machine__40145__auto__);

(statearr_451937[(1)] = (1));

return statearr_451937;
});
var ui$core$get_network_$_state_machine__40145__auto____1 = (function (state_451932){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_451932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e451938){if((e451938 instanceof Object)){
var ex__40148__auto__ = e451938;
var statearr_451939_451941 = state_451932;
(statearr_451939_451941[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_451932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e451938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__451942 = state_451932;
state_451932 = G__451942;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_network_$_state_machine__40145__auto__ = function(state_451932){
switch(arguments.length){
case 0:
return ui$core$get_network_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_network_$_state_machine__40145__auto____1.call(this,state_451932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_network_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_network_$_state_machine__40145__auto____0;
ui$core$get_network_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_network_$_state_machine__40145__auto____1;
return ui$core$get_network_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_451940 = f__40168__auto__.call(null);
(statearr_451940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_451940;
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
var len__35573__auto___452001 = arguments.length;
var i__35574__auto___452002 = (0);
while(true){
if((i__35574__auto___452002 < len__35573__auto___452001)){
args__35580__auto__.push((arguments[i__35574__auto___452002]));

var G__452003 = (i__35574__auto___452002 + (1));
i__35574__auto___452002 = G__452003;
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
var vec__451946 = (((cljs.core.seq.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,body),cljs.core.rest.call(null,body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,body], null));
var obj = cljs.core.nth.call(null,vec__451946,(0),null);
var body__$1 = cljs.core.nth.call(null,vec__451946,(1),null);
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c,vec__451946,obj,body__$1){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c,vec__451946,obj,body__$1){
return (function (state_451973){
var state_val_451974 = (state_451973[(1)]);
if((state_val_451974 === (1))){
var inst_451949 = ui.core.get_network.call(null);
var state_451973__$1 = state_451973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_451973__$1,(2),inst_451949);
} else {
if((state_val_451974 === (2))){
var inst_451951 = (state_451973[(2)]);
var inst_451952 = cljs.core._EQ_.call(null,inst_451951,(3));
var state_451973__$1 = state_451973;
if(inst_451952){
var statearr_451975_452004 = state_451973__$1;
(statearr_451975_452004[(1)] = (3));

} else {
var statearr_451976_452005 = state_451973__$1;
(statearr_451976_452005[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451974 === (3))){
var inst_451954 = cljs.core.name.call(null,fname);
var inst_451955 = (contract[inst_451954]);
var inst_451956 = inst_451955.sendTransaction;
var inst_451957 = cljs.core.vec.call(null,body__$1);
var inst_451958 = [new cljs.core.Keyword(null,"gas","gas",-139961463)];
var inst_451959 = [(4000000)];
var inst_451960 = cljs.core.PersistentHashMap.fromArrays(inst_451958,inst_451959);
var inst_451961 = cljs.core.merge.call(null,inst_451960,obj);
var inst_451962 = cljs.core.clj__GT_js.call(null,inst_451961);
var inst_451963 = (function (){return ((function (inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1){
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
return cljs.core.reset_BANG_.call(null,timer,setInterval(((function (timer,inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1){
return (function (){
return web3.eth.getTransactionReceipt(result,((function (timer,inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1){
return (function (error__$1,receipt){
if(cljs.core.truth_(receipt)){
var c__40167__auto___452006__$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto___452006__$1,timer,inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto___452006__$1,timer,inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1){
return (function (state_451981){
var state_val_451982 = (state_451981[(1)]);
if((state_val_451982 === (1))){
var state_451981__$1 = state_451981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_451981__$1,(2),c,receipt);
} else {
if((state_val_451982 === (2))){
var inst_451978 = (state_451981[(2)]);
var inst_451979 = cljs.core.async.close_BANG_.call(null,c);
var state_451981__$1 = (function (){var statearr_451983 = state_451981;
(statearr_451983[(7)] = inst_451978);

return statearr_451983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_451981__$1,inst_451979);
} else {
return null;
}
}
});})(c__40167__auto___452006__$1,timer,inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1))
;
return ((function (switch__40144__auto__,c__40167__auto___452006__$1,timer,inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_451987 = [null,null,null,null,null,null,null,null];
(statearr_451987[(0)] = ui$core$state_machine__40145__auto__);

(statearr_451987[(1)] = (1));

return statearr_451987;
});
var ui$core$state_machine__40145__auto____1 = (function (state_451981){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_451981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e451988){if((e451988 instanceof Object)){
var ex__40148__auto__ = e451988;
var statearr_451989_452007 = state_451981;
(statearr_451989_452007[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_451981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e451988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452008 = state_451981;
state_451981 = G__452008;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_451981){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_451981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto___452006__$1,timer,inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1))
})();
var state__40169__auto__ = (function (){var statearr_451990 = f__40168__auto__.call(null);
(statearr_451990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto___452006__$1);

return statearr_451990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto___452006__$1,timer,inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1))
);


return clearInterval(cljs.core.deref.call(null,timer));
} else {
return null;
}
});})(timer,inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1))
);
});})(timer,inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1))
,(5000)));
}
});
;})(inst_451954,inst_451955,inst_451956,inst_451957,inst_451958,inst_451959,inst_451960,inst_451961,inst_451962,state_val_451974,c__40167__auto__,c,vec__451946,obj,body__$1))
})();
var inst_451964 = cljs.core.conj.call(null,inst_451957,inst_451962,inst_451963);
var inst_451965 = cljs.core.apply.call(null,cljs.core.array,inst_451964);
var inst_451966 = inst_451956.apply(contract,inst_451965);
var state_451973__$1 = (function (){var statearr_451991 = state_451973;
(statearr_451991[(7)] = inst_451966);

return statearr_451991;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_451973__$1,(6),c);
} else {
if((state_val_451974 === (4))){
var state_451973__$1 = state_451973;
var statearr_451992_452009 = state_451973__$1;
(statearr_451992_452009[(2)] = null);

(statearr_451992_452009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451974 === (5))){
var inst_451971 = (state_451973[(2)]);
var state_451973__$1 = state_451973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_451973__$1,inst_451971);
} else {
if((state_val_451974 === (6))){
var inst_451968 = (state_451973[(2)]);
var state_451973__$1 = state_451973;
var statearr_451993_452010 = state_451973__$1;
(statearr_451993_452010[(2)] = inst_451968);

(statearr_451993_452010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__40167__auto__,c,vec__451946,obj,body__$1))
;
return ((function (switch__40144__auto__,c__40167__auto__,c,vec__451946,obj,body__$1){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_451997 = [null,null,null,null,null,null,null,null];
(statearr_451997[(0)] = ui$core$state_machine__40145__auto__);

(statearr_451997[(1)] = (1));

return statearr_451997;
});
var ui$core$state_machine__40145__auto____1 = (function (state_451973){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_451973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e451998){if((e451998 instanceof Object)){
var ex__40148__auto__ = e451998;
var statearr_451999_452011 = state_451973;
(statearr_451999_452011[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_451973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e451998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452012 = state_451973;
state_451973 = G__452012;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_451973){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_451973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,vec__451946,obj,body__$1))
})();
var state__40169__auto__ = (function (){var statearr_452000 = f__40168__auto__.call(null);
(statearr_452000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c,vec__451946,obj,body__$1))
);

return c__40167__auto__;
});

ui.core.chan_transact.cljs$lang$maxFixedArity = (2);

ui.core.chan_transact.cljs$lang$applyTo = (function (seq451943){
var G__451944 = cljs.core.first.call(null,seq451943);
var seq451943__$1 = cljs.core.next.call(null,seq451943);
var G__451945 = cljs.core.first.call(null,seq451943__$1);
var seq451943__$2 = cljs.core.next.call(null,seq451943__$1);
return ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic(G__451944,G__451945,seq451943__$2);
});

ui.core.chan_event = (function ui$core$chan_event(var_args){
var args__35580__auto__ = [];
var len__35573__auto___452033 = arguments.length;
var i__35574__auto___452034 = (0);
while(true){
if((i__35574__auto___452034 < len__35573__auto___452033)){
args__35580__auto__.push((arguments[i__35574__auto___452034]));

var G__452035 = (i__35574__auto___452034 + (1));
i__35574__auto___452034 = G__452035;
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
return (function (state_452023){
var state_val_452024 = (state_452023[(1)]);
if((state_val_452024 === (1))){
var state_452023__$1 = state_452023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_452023__$1,(2),c,result);
} else {
if((state_val_452024 === (2))){
var inst_452018 = (state_452023[(2)]);
var inst_452019 = cljs.core.async.close_BANG_.call(null,c);
var inst_452020 = cljs.core.deref.call(null,event);
var inst_452021 = inst_452020.stopWatching();
var state_452023__$1 = (function (){var statearr_452025 = state_452023;
(statearr_452025[(7)] = inst_452018);

(statearr_452025[(8)] = inst_452019);

return statearr_452025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452023__$1,inst_452021);
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
var statearr_452029 = [null,null,null,null,null,null,null,null,null];
(statearr_452029[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452029[(1)] = (1));

return statearr_452029;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452023){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452030){if((e452030 instanceof Object)){
var ex__40148__auto__ = e452030;
var statearr_452031_452036 = state_452023;
(statearr_452031_452036[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452037 = state_452023;
state_452023 = G__452037;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452023){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,event))
})();
var state__40169__auto__ = (function (){var statearr_452032 = f__40168__auto__.call(null);
(statearr_452032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452032;
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

ui.core.chan_event.cljs$lang$applyTo = (function (seq452013){
var G__452014 = cljs.core.first.call(null,seq452013);
var seq452013__$1 = cljs.core.next.call(null,seq452013);
var G__452015 = cljs.core.first.call(null,seq452013__$1);
var seq452013__$2 = cljs.core.next.call(null,seq452013__$1);
var G__452016 = cljs.core.first.call(null,seq452013__$2);
var seq452013__$3 = cljs.core.next.call(null,seq452013__$2);
return ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic(G__452014,G__452015,G__452016,seq452013__$3);
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
return (function (state_452060){
var state_val_452061 = (state_452060[(1)]);
if((state_val_452061 === (1))){
var state_452060__$1 = state_452060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_452060__$1,(2),c,result);
} else {
if((state_val_452061 === (2))){
var inst_452055 = (state_452060[(2)]);
var inst_452056 = cljs.core.async.close_BANG_.call(null,c);
var inst_452057 = cljs.core.deref.call(null,event);
var inst_452058 = inst_452057.stopWatching();
var state_452060__$1 = (function (){var statearr_452062 = state_452060;
(statearr_452062[(7)] = inst_452055);

(statearr_452062[(8)] = inst_452056);

return statearr_452062;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452060__$1,inst_452058);
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
var statearr_452066 = [null,null,null,null,null,null,null,null,null];
(statearr_452066[(0)] = ui$core$query_events_$_state_machine__40145__auto__);

(statearr_452066[(1)] = (1));

return statearr_452066;
});
var ui$core$query_events_$_state_machine__40145__auto____1 = (function (state_452060){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452067){if((e452067 instanceof Object)){
var ex__40148__auto__ = e452067;
var statearr_452068_452070 = state_452060;
(statearr_452068_452070[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452071 = state_452060;
state_452060 = G__452071;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$query_events_$_state_machine__40145__auto__ = function(state_452060){
switch(arguments.length){
case 0:
return ui$core$query_events_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$query_events_$_state_machine__40145__auto____1.call(this,state_452060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$query_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$query_events_$_state_machine__40145__auto____0;
ui$core$query_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$query_events_$_state_machine__40145__auto____1;
return ui$core$query_events_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,event,start_time))
})();
var state__40169__auto__ = (function (){var statearr_452069 = f__40168__auto__.call(null);
(statearr_452069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452069;
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
return (function (state_452089){
var state_val_452090 = (state_452089[(1)]);
if((state_val_452090 === (1))){
var inst_452085 = cljs.core.vec.call(null,result);
var state_452089__$1 = state_452089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_452089__$1,(2),c,inst_452085);
} else {
if((state_val_452090 === (2))){
var inst_452087 = (state_452089[(2)]);
var state_452089__$1 = state_452089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452089__$1,inst_452087);
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
var statearr_452094 = [null,null,null,null,null,null,null];
(statearr_452094[(0)] = ui$core$get_historical_events_$_state_machine__40145__auto__);

(statearr_452094[(1)] = (1));

return statearr_452094;
});
var ui$core$get_historical_events_$_state_machine__40145__auto____1 = (function (state_452089){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452095){if((e452095 instanceof Object)){
var ex__40148__auto__ = e452095;
var statearr_452096_452098 = state_452089;
(statearr_452096_452098[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452099 = state_452089;
state_452089 = G__452099;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_historical_events_$_state_machine__40145__auto__ = function(state_452089){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_historical_events_$_state_machine__40145__auto____1.call(this,state_452089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_$_state_machine__40145__auto____0;
ui$core$get_historical_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_$_state_machine__40145__auto____1;
return ui$core$get_historical_events_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_452097 = f__40168__auto__.call(null);
(statearr_452097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452097;
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
return (function (state_452121){
var state_val_452122 = (state_452121[(1)]);
if((state_val_452122 === (1))){
var inst_452115 = (function (){return ((function (state_val_452122,c__40167__auto__,c){
return (function (event){
return cljs.core._EQ_.call(null,event.transactionHash,hash);
});
;})(state_val_452122,c__40167__auto__,c))
})();
var inst_452116 = cljs.core.filter.call(null,inst_452115,result);
var inst_452117 = cljs.core.vec.call(null,inst_452116);
var state_452121__$1 = state_452121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_452121__$1,(2),c,inst_452117);
} else {
if((state_val_452122 === (2))){
var inst_452119 = (state_452121[(2)]);
var state_452121__$1 = state_452121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452121__$1,inst_452119);
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
var statearr_452126 = [null,null,null,null,null,null,null];
(statearr_452126[(0)] = ui$core$get_historical_events_hash_$_state_machine__40145__auto__);

(statearr_452126[(1)] = (1));

return statearr_452126;
});
var ui$core$get_historical_events_hash_$_state_machine__40145__auto____1 = (function (state_452121){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452127){if((e452127 instanceof Object)){
var ex__40148__auto__ = e452127;
var statearr_452128_452130 = state_452121;
(statearr_452128_452130[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452131 = state_452121;
state_452121 = G__452131;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_historical_events_hash_$_state_machine__40145__auto__ = function(state_452121){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_hash_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_historical_events_hash_$_state_machine__40145__auto____1.call(this,state_452121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_hash_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_hash_$_state_machine__40145__auto____0;
ui$core$get_historical_events_hash_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_hash_$_state_machine__40145__auto____1;
return ui$core$get_historical_events_hash_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_452129 = f__40168__auto__.call(null);
(statearr_452129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452129;
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
return (function (state_452161){
var state_val_452162 = (state_452161[(1)]);
if((state_val_452162 === (1))){
var inst_452157 = ui.core.wei__GT_eth.call(null,result);
var state_452161__$1 = state_452161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_452161__$1,(2),c,inst_452157);
} else {
if((state_val_452162 === (2))){
var inst_452159 = (state_452161[(2)]);
var state_452161__$1 = state_452161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452161__$1,inst_452159);
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
var statearr_452166 = [null,null,null,null,null,null,null];
(statearr_452166[(0)] = ui$core$get_balance_$_state_machine__40145__auto__);

(statearr_452166[(1)] = (1));

return statearr_452166;
});
var ui$core$get_balance_$_state_machine__40145__auto____1 = (function (state_452161){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452167){if((e452167 instanceof Object)){
var ex__40148__auto__ = e452167;
var statearr_452168_452182 = state_452161;
(statearr_452168_452182[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452183 = state_452161;
state_452161 = G__452183;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__40145__auto__ = function(state_452161){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__40145__auto____1.call(this,state_452161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__40145__auto____0;
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__40145__auto____1;
return ui$core$get_balance_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_452169 = f__40168__auto__.call(null);
(statearr_452169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c))
);

return c__40167__auto__;
});})(c))
);
} else {
var c__40167__auto___452184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto___452184,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto___452184,c){
return (function (state_452173){
var state_val_452174 = (state_452173[(1)]);
if((state_val_452174 === (1))){
var state_452173__$1 = state_452173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_452173__$1,(2),c,(0));
} else {
if((state_val_452174 === (2))){
var inst_452171 = (state_452173[(2)]);
var state_452173__$1 = state_452173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452173__$1,inst_452171);
} else {
return null;
}
}
});})(c__40167__auto___452184,c))
;
return ((function (switch__40144__auto__,c__40167__auto___452184,c){
return (function() {
var ui$core$get_balance_$_state_machine__40145__auto__ = null;
var ui$core$get_balance_$_state_machine__40145__auto____0 = (function (){
var statearr_452178 = [null,null,null,null,null,null,null];
(statearr_452178[(0)] = ui$core$get_balance_$_state_machine__40145__auto__);

(statearr_452178[(1)] = (1));

return statearr_452178;
});
var ui$core$get_balance_$_state_machine__40145__auto____1 = (function (state_452173){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452179){if((e452179 instanceof Object)){
var ex__40148__auto__ = e452179;
var statearr_452180_452185 = state_452173;
(statearr_452180_452185[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452186 = state_452173;
state_452173 = G__452186;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__40145__auto__ = function(state_452173){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__40145__auto____1.call(this,state_452173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__40145__auto____0;
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__40145__auto____1;
return ui$core$get_balance_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto___452184,c))
})();
var state__40169__auto__ = (function (){var statearr_452181 = f__40168__auto__.call(null);
(statearr_452181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto___452184);

return statearr_452181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto___452184,c))
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
return (function (state_452204){
var state_val_452205 = (state_452204[(1)]);
if((state_val_452205 === (1))){
var inst_452200 = cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var state_452204__$1 = state_452204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_452204__$1,(2),c,inst_452200);
} else {
if((state_val_452205 === (2))){
var inst_452202 = (state_452204[(2)]);
var state_452204__$1 = state_452204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452204__$1,inst_452202);
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
var statearr_452209 = [null,null,null,null,null,null,null];
(statearr_452209[(0)] = ui$core$get_block_$_state_machine__40145__auto__);

(statearr_452209[(1)] = (1));

return statearr_452209;
});
var ui$core$get_block_$_state_machine__40145__auto____1 = (function (state_452204){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452210){if((e452210 instanceof Object)){
var ex__40148__auto__ = e452210;
var statearr_452211_452213 = state_452204;
(statearr_452211_452213[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452214 = state_452204;
state_452204 = G__452214;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_block_$_state_machine__40145__auto__ = function(state_452204){
switch(arguments.length){
case 0:
return ui$core$get_block_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_block_$_state_machine__40145__auto____1.call(this,state_452204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_block_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_block_$_state_machine__40145__auto____0;
ui$core$get_block_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_block_$_state_machine__40145__auto____1;
return ui$core$get_block_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_452212 = f__40168__auto__.call(null);
(statearr_452212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452212;
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
return (function (state_452230){
var state_val_452231 = (state_452230[(1)]);
if((state_val_452231 === (1))){
var state_452230__$1 = state_452230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_452230__$1,(2),c,result);
} else {
if((state_val_452231 === (2))){
var inst_452228 = (state_452230[(2)]);
var state_452230__$1 = state_452230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452230__$1,inst_452228);
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
var statearr_452235 = [null,null,null,null,null,null,null];
(statearr_452235[(0)] = ui$core$block_number_$_state_machine__40145__auto__);

(statearr_452235[(1)] = (1));

return statearr_452235;
});
var ui$core$block_number_$_state_machine__40145__auto____1 = (function (state_452230){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452236){if((e452236 instanceof Object)){
var ex__40148__auto__ = e452236;
var statearr_452237_452239 = state_452230;
(statearr_452237_452239[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452240 = state_452230;
state_452230 = G__452240;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$block_number_$_state_machine__40145__auto__ = function(state_452230){
switch(arguments.length){
case 0:
return ui$core$block_number_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$block_number_$_state_machine__40145__auto____1.call(this,state_452230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$block_number_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$block_number_$_state_machine__40145__auto____0;
ui$core$block_number_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$block_number_$_state_machine__40145__auto____1;
return ui$core$block_number_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_452238 = f__40168__auto__.call(null);
(statearr_452238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452238;
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
return (function (state_452269){
var state_val_452270 = (state_452269[(1)]);
if((state_val_452270 === (1))){
var inst_452260 = (function (){return ((function (state_val_452270,c__40167__auto__){
return (function (x){
return web3.toAscii(x);
});
;})(state_val_452270,c__40167__auto__))
})();
var inst_452261 = ui.core.query_events.call(null,ui.core.etherean,proposal_block,proposal_block,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({"proposalIndex": proposal_index}));
var state_452269__$1 = (function (){var statearr_452271 = state_452269;
(statearr_452271[(7)] = inst_452260);

return statearr_452271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452269__$1,(2),inst_452261);
} else {
if((state_val_452270 === (2))){
var inst_452260 = (state_452269[(7)]);
var inst_452263 = (state_452269[(2)]);
var inst_452264 = inst_452263.args;
var inst_452265 = inst_452264.message;
var inst_452266 = cljs.core.map.call(null,inst_452260,inst_452265);
var inst_452267 = cljs.core.first.call(null,inst_452266);
var state_452269__$1 = state_452269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452269__$1,inst_452267);
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
var statearr_452275 = [null,null,null,null,null,null,null,null];
(statearr_452275[(0)] = ui$core$get_proposal_description_$_state_machine__40145__auto__);

(statearr_452275[(1)] = (1));

return statearr_452275;
});
var ui$core$get_proposal_description_$_state_machine__40145__auto____1 = (function (state_452269){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452276){if((e452276 instanceof Object)){
var ex__40148__auto__ = e452276;
var statearr_452277_452279 = state_452269;
(statearr_452277_452279[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452280 = state_452269;
state_452269 = G__452280;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_proposal_description_$_state_machine__40145__auto__ = function(state_452269){
switch(arguments.length){
case 0:
return ui$core$get_proposal_description_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_proposal_description_$_state_machine__40145__auto____1.call(this,state_452269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_proposal_description_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_proposal_description_$_state_machine__40145__auto____0;
ui$core$get_proposal_description_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_proposal_description_$_state_machine__40145__auto____1;
return ui$core$get_proposal_description_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_452278 = f__40168__auto__.call(null);
(statearr_452278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452278;
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
return (function (state_452285){
var state_val_452286 = (state_452285[(1)]);
if((state_val_452286 === (1))){
var inst_452281 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"useUpProposalVote","useUpProposalVote",352109759));
var state_452285__$1 = state_452285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452285__$1,(2),inst_452281);
} else {
if((state_val_452286 === (2))){
var inst_452283 = (state_452285[(2)]);
var state_452285__$1 = state_452285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452285__$1,inst_452283);
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
var statearr_452290 = [null,null,null,null,null,null,null];
(statearr_452290[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452290[(1)] = (1));

return statearr_452290;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452285){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452291){if((e452291 instanceof Object)){
var ex__40148__auto__ = e452291;
var statearr_452292_452294 = state_452285;
(statearr_452292_452294[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452295 = state_452285;
state_452285 = G__452295;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452285){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_452293 = f__40168__auto__.call(null);
(statearr_452293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),(function (env,dispatch_key,params){
var map__452296 = env;
var map__452296__$1 = ((((!((map__452296 == null)))?((((map__452296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__452296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__452296):map__452296);
var proposal = cljs.core.get.call(null,map__452296__$1,new cljs.core.Keyword(null,"proposal","proposal",142522715));
var proposal_id = cljs.core.get.call(null,map__452296__$1,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_proposal_description.call(null,((proposal[(3)]) | (0)),new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env))], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_452302){
var state_val_452303 = (state_452302[(1)]);
if((state_val_452303 === (1))){
var inst_452298 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_452299 = cljs.core.nth.call(null,inst_452298,(0));
var inst_452300 = ui.core.wei__GT_eth.call(null,inst_452299);
var state_452302__$1 = state_452302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452302__$1,inst_452300);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_452307 = [null,null,null,null,null,null,null];
(statearr_452307[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452307[(1)] = (1));

return statearr_452307;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452302){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452308){if((e452308 instanceof Object)){
var ex__40148__auto__ = e452308;
var statearr_452309_452311 = state_452302;
(statearr_452309_452311[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452312 = state_452302;
state_452302 = G__452312;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452302){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_452310 = f__40168__auto__.call(null);
(statearr_452310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452310;
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
return (function (state_452317){
var state_val_452318 = (state_452317[(1)]);
if((state_val_452318 === (1))){
var inst_452313 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_452314 = cljs.core.nth.call(null,inst_452313,(1));
var inst_452315 = ui.core.wei__GT_eth.call(null,inst_452314);
var state_452317__$1 = state_452317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452317__$1,inst_452315);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_452322 = [null,null,null,null,null,null,null];
(statearr_452322[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452322[(1)] = (1));

return statearr_452322;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452317){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452323){if((e452323 instanceof Object)){
var ex__40148__auto__ = e452323;
var statearr_452324_452326 = state_452317;
(statearr_452324_452326[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452327 = state_452317;
state_452317 = G__452327;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452317){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_452325 = f__40168__auto__.call(null);
(statearr_452325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452325;
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
return (function (state_452335){
var state_val_452336 = (state_452335[(1)]);
if((state_val_452336 === (1))){
var inst_452328 = (state_452335[(7)]);
var inst_452328__$1 = new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env);
var state_452335__$1 = (function (){var statearr_452337 = state_452335;
(statearr_452337[(7)] = inst_452328__$1);

return statearr_452337;
})();
if(cljs.core.truth_(inst_452328__$1)){
var statearr_452338_452349 = state_452335__$1;
(statearr_452338_452349[(1)] = (2));

} else {
var statearr_452339_452350 = state_452335__$1;
(statearr_452339_452350[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452336 === (2))){
var inst_452328 = (state_452335[(7)]);
var state_452335__$1 = state_452335;
var statearr_452340_452351 = state_452335__$1;
(statearr_452340_452351[(2)] = inst_452328);

(statearr_452340_452351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452336 === (3))){
var inst_452331 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var state_452335__$1 = state_452335;
var statearr_452341_452352 = state_452335__$1;
(statearr_452341_452352[(2)] = inst_452331);

(statearr_452341_452352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452336 === (4))){
var inst_452333 = (state_452335[(2)]);
var state_452335__$1 = state_452335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452335__$1,inst_452333);
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
var statearr_452345 = [null,null,null,null,null,null,null,null];
(statearr_452345[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452345[(1)] = (1));

return statearr_452345;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452335){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452346){if((e452346 instanceof Object)){
var ex__40148__auto__ = e452346;
var statearr_452347_452353 = state_452335;
(statearr_452347_452353[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452354 = state_452335;
state_452335 = G__452354;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452335){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_452348 = f__40168__auto__.call(null);
(statearr_452348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452348;
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
return (function (state_452362){
var state_val_452363 = (state_452362[(1)]);
if((state_val_452363 === (1))){
var inst_452355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_452356 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132)];
var inst_452357 = [(0),"bar",(10),(5)];
var inst_452358 = cljs.core.PersistentHashMap.fromArrays(inst_452356,inst_452357);
var inst_452359 = [inst_452358];
var inst_452360 = (new cljs.core.PersistentVector(null,1,(5),inst_452355,inst_452359,null));
var state_452362__$1 = state_452362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452362__$1,inst_452360);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_452367 = [null,null,null,null,null,null,null];
(statearr_452367[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452367[(1)] = (1));

return statearr_452367;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452362){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452368){if((e452368 instanceof Object)){
var ex__40148__auto__ = e452368;
var statearr_452369_452495 = state_452362;
(statearr_452369_452495[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452496 = state_452362;
state_452362 = G__452496;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452362){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_452370 = f__40168__auto__.call(null);
(statearr_452370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})():(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_452448){
var state_val_452449 = (state_452448[(1)]);
if((state_val_452449 === (7))){
var inst_452383 = (state_452448[(2)]);
var state_452448__$1 = state_452448;
var statearr_452450_452497 = state_452448__$1;
(statearr_452450_452497[(2)] = inst_452383);

(statearr_452450_452497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452449 === (1))){
var inst_452373 = (env == null);
var inst_452374 = cljs.core.not.call(null,inst_452373);
var state_452448__$1 = state_452448;
if(inst_452374){
var statearr_452451_452498 = state_452448__$1;
(statearr_452451_452498[(1)] = (2));

} else {
var statearr_452452_452499 = state_452448__$1;
(statearr_452452_452499[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452449 === (4))){
var inst_452386 = (state_452448[(2)]);
var state_452448__$1 = state_452448;
if(cljs.core.truth_(inst_452386)){
var statearr_452453_452500 = state_452448__$1;
(statearr_452453_452500[(1)] = (8));

} else {
var statearr_452454_452501 = state_452448__$1;
(statearr_452454_452501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452449 === (13))){
var inst_452443 = (state_452448[(2)]);
var inst_452444 = cljs.core.sort_by.call(null,cljs.core.first,inst_452443);
var inst_452445 = cljs.core.map.call(null,cljs.core.second,inst_452444);
var inst_452446 = cljs.core.vec.call(null,inst_452445);
var state_452448__$1 = state_452448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452448__$1,inst_452446);
} else {
if((state_val_452449 === (6))){
var state_452448__$1 = state_452448;
var statearr_452455_452502 = state_452448__$1;
(statearr_452455_452502[(2)] = false);

(statearr_452455_452502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452449 === (3))){
var state_452448__$1 = state_452448;
var statearr_452456_452503 = state_452448__$1;
(statearr_452456_452503[(2)] = false);

(statearr_452456_452503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452449 === (12))){
var inst_452397 = (state_452448[(7)]);
var inst_452392 = (state_452448[(8)]);
var inst_452393 = (state_452448[(9)]);
var inst_452391 = (state_452448[(10)]);
var inst_452400 = (state_452448[(2)]);
var inst_452401 = (inst_452400 | (0));
var inst_452402 = cljs.core.async.chan.call(null);
var inst_452435 = cljs.core.async.chan.call(null,(1));
var inst_452436 = (function (){var map__452371 = inst_452391;
var parser = inst_452392;
var query = inst_452393;
var len = inst_452397;
var time = inst_452401;
var proposals = inst_452402;
var c__40167__auto____$1 = inst_452435;
return ((function (map__452371,parser,query,len,time,proposals,c__40167__auto____$1,inst_452397,inst_452392,inst_452393,inst_452391,inst_452400,inst_452401,inst_452402,inst_452435,state_val_452449,c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (map__452371,parser,query,len,time,proposals,c__40167__auto____$1,inst_452397,inst_452392,inst_452393,inst_452391,inst_452400,inst_452401,inst_452402,inst_452435,state_val_452449,c__40167__auto__){
return (function (state_452433){
var state_val_452434 = (state_452433[(1)]);
if((state_val_452434 === (7))){
var inst_452410 = (state_452433[(7)]);
var inst_452410__$1 = (state_452433[(2)]);
var inst_452411 = (inst_452410__$1[(2)]);
var inst_452412 = (inst_452411 | (0));
var inst_452413 = cljs.core._EQ_.call(null,time,inst_452412);
var state_452433__$1 = (function (){var statearr_452457 = state_452433;
(statearr_452457[(7)] = inst_452410__$1);

return statearr_452457;
})();
if(inst_452413){
var statearr_452458_452504 = state_452433__$1;
(statearr_452458_452504[(1)] = (8));

} else {
var statearr_452459_452505 = state_452433__$1;
(statearr_452459_452505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452434 === (1))){
var inst_452403 = (len - (1));
var inst_452404 = inst_452403;
var state_452433__$1 = (function (){var statearr_452460 = state_452433;
(statearr_452460[(8)] = inst_452404);

return statearr_452460;
})();
var statearr_452461_452506 = state_452433__$1;
(statearr_452461_452506[(2)] = null);

(statearr_452461_452506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452434 === (4))){
var inst_452404 = (state_452433[(8)]);
var inst_452408 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),inst_452404);
var state_452433__$1 = state_452433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452433__$1,(7),inst_452408);
} else {
if((state_val_452434 === (6))){
var inst_452428 = (state_452433[(2)]);
var state_452433__$1 = state_452433;
var statearr_452462_452507 = state_452433__$1;
(statearr_452462_452507[(2)] = inst_452428);

(statearr_452462_452507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452434 === (3))){
var inst_452430 = (state_452433[(2)]);
var inst_452431 = cljs.core.async.close_BANG_.call(null,proposals);
var state_452433__$1 = (function (){var statearr_452463 = state_452433;
(statearr_452463[(9)] = inst_452430);

return statearr_452463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452433__$1,inst_452431);
} else {
if((state_val_452434 === (12))){
var inst_452418 = (state_452433[(2)]);
var state_452433__$1 = state_452433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_452433__$1,(11),proposals,inst_452418);
} else {
if((state_val_452434 === (2))){
var inst_452404 = (state_452433[(8)]);
var inst_452406 = (inst_452404 >= (0));
var state_452433__$1 = state_452433;
if(cljs.core.truth_(inst_452406)){
var statearr_452464_452508 = state_452433__$1;
(statearr_452464_452508[(1)] = (4));

} else {
var statearr_452465_452509 = state_452433__$1;
(statearr_452465_452509[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452434 === (11))){
var inst_452404 = (state_452433[(8)]);
var inst_452420 = (state_452433[(2)]);
var inst_452421 = (inst_452404 - (1));
var inst_452404__$1 = inst_452421;
var state_452433__$1 = (function (){var statearr_452466 = state_452433;
(statearr_452466[(10)] = inst_452420);

(statearr_452466[(8)] = inst_452404__$1);

return statearr_452466;
})();
var statearr_452467_452510 = state_452433__$1;
(statearr_452467_452510[(2)] = null);

(statearr_452467_452510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452434 === (9))){
var state_452433__$1 = state_452433;
var statearr_452468_452511 = state_452433__$1;
(statearr_452468_452511[(2)] = null);

(statearr_452468_452511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452434 === (5))){
var state_452433__$1 = state_452433;
var statearr_452469_452512 = state_452433__$1;
(statearr_452469_452512[(2)] = null);

(statearr_452469_452512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452434 === (10))){
var inst_452425 = (state_452433[(2)]);
var state_452433__$1 = state_452433;
var statearr_452470_452513 = state_452433__$1;
(statearr_452470_452513[(2)] = inst_452425);

(statearr_452470_452513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452434 === (8))){
var inst_452410 = (state_452433[(7)]);
var inst_452404 = (state_452433[(8)]);
var inst_452415 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),inst_452410,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155),inst_452404);
var inst_452416 = parser.call(null,inst_452415,query);
var state_452433__$1 = state_452433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452433__$1,(12),inst_452416);
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
});})(map__452371,parser,query,len,time,proposals,c__40167__auto____$1,inst_452397,inst_452392,inst_452393,inst_452391,inst_452400,inst_452401,inst_452402,inst_452435,state_val_452449,c__40167__auto__))
;
return ((function (switch__40144__auto__,map__452371,parser,query,len,time,proposals,c__40167__auto____$1,inst_452397,inst_452392,inst_452393,inst_452391,inst_452400,inst_452401,inst_452402,inst_452435,state_val_452449,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_452474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_452474[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452474[(1)] = (1));

return statearr_452474;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452433){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452475){if((e452475 instanceof Object)){
var ex__40148__auto__ = e452475;
var statearr_452476_452514 = state_452433;
(statearr_452476_452514[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452515 = state_452433;
state_452433 = G__452515;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452433){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,map__452371,parser,query,len,time,proposals,c__40167__auto____$1,inst_452397,inst_452392,inst_452393,inst_452391,inst_452400,inst_452401,inst_452402,inst_452435,state_val_452449,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_452477 = f__40168__auto__.call(null);
(statearr_452477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto____$1);

return statearr_452477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});
;})(map__452371,parser,query,len,time,proposals,c__40167__auto____$1,inst_452397,inst_452392,inst_452393,inst_452391,inst_452400,inst_452401,inst_452402,inst_452435,state_val_452449,c__40167__auto__))
})();
var inst_452437 = cljs.core.async.impl.dispatch.run.call(null,inst_452436);
var inst_452439 = (function (){var map__452371 = inst_452391;
var parser = inst_452392;
var query = inst_452393;
var len = inst_452397;
var time = inst_452401;
var proposals = inst_452402;
return ((function (map__452371,parser,query,len,time,proposals,inst_452397,inst_452392,inst_452393,inst_452391,inst_452400,inst_452401,inst_452402,inst_452435,inst_452436,inst_452437,state_val_452449,c__40167__auto__){
return (function (acc,p__452438){
var map__452478 = p__452438;
var map__452478__$1 = ((((!((map__452478 == null)))?((((map__452478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__452478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__452478):map__452478);
var item = map__452478__$1;
var id = cljs.core.get.call(null,map__452478__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.assoc.call(null,acc,id,item);
});
;})(map__452371,parser,query,len,time,proposals,inst_452397,inst_452392,inst_452393,inst_452391,inst_452400,inst_452401,inst_452402,inst_452435,inst_452436,inst_452437,state_val_452449,c__40167__auto__))
})();
var inst_452440 = cljs.core.PersistentHashMap.EMPTY;
var inst_452441 = cljs.core.async.reduce.call(null,inst_452439,inst_452440,inst_452402);
var state_452448__$1 = (function (){var statearr_452480 = state_452448;
(statearr_452480[(11)] = inst_452437);

return statearr_452480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452448__$1,(13),inst_452441);
} else {
if((state_val_452449 === (2))){
var inst_452376 = env.cljs$lang$protocol_mask$partition0$;
var inst_452377 = (inst_452376 & (64));
var inst_452378 = env.cljs$core$ISeq$;
var inst_452379 = (inst_452377) || (inst_452378);
var state_452448__$1 = state_452448;
if(cljs.core.truth_(inst_452379)){
var statearr_452481_452516 = state_452448__$1;
(statearr_452481_452516[(1)] = (5));

} else {
var statearr_452482_452517 = state_452448__$1;
(statearr_452482_452517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452449 === (11))){
var inst_452396 = (state_452448[(2)]);
var inst_452397 = (inst_452396 | (0));
var inst_452398 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"startOfDay","startOfDay",-1097735630));
var state_452448__$1 = (function (){var statearr_452483 = state_452448;
(statearr_452483[(7)] = inst_452397);

return statearr_452483;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452448__$1,(12),inst_452398);
} else {
if((state_val_452449 === (9))){
var state_452448__$1 = state_452448;
var statearr_452484_452518 = state_452448__$1;
(statearr_452484_452518[(2)] = env);

(statearr_452484_452518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452449 === (5))){
var state_452448__$1 = state_452448;
var statearr_452485_452519 = state_452448__$1;
(statearr_452485_452519[(2)] = true);

(statearr_452485_452519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452449 === (10))){
var inst_452391 = (state_452448[(10)]);
var inst_452391__$1 = (state_452448[(2)]);
var inst_452392 = cljs.core.get.call(null,inst_452391__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_452393 = cljs.core.get.call(null,inst_452391__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_452394 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposalsLength","proposalsLength",1061236851));
var state_452448__$1 = (function (){var statearr_452486 = state_452448;
(statearr_452486[(8)] = inst_452392);

(statearr_452486[(9)] = inst_452393);

(statearr_452486[(10)] = inst_452391__$1);

return statearr_452486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452448__$1,(11),inst_452394);
} else {
if((state_val_452449 === (8))){
var inst_452388 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_452448__$1 = state_452448;
var statearr_452487_452520 = state_452448__$1;
(statearr_452487_452520[(2)] = inst_452388);

(statearr_452487_452520[(1)] = (10));


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
var statearr_452491 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_452491[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452491[(1)] = (1));

return statearr_452491;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452448){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452492){if((e452492 instanceof Object)){
var ex__40148__auto__ = e452492;
var statearr_452493_452521 = state_452448;
(statearr_452493_452521[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452522 = state_452448;
state_452448 = G__452522;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452448){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_452494 = f__40168__auto__.call(null);
(statearr_452494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__452523__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__452523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__452524__i = 0, G__452524__a = new Array(arguments.length -  0);
while (G__452524__i < G__452524__a.length) {G__452524__a[G__452524__i] = arguments[G__452524__i + 0]; ++G__452524__i;}
  args = new cljs.core.IndexedSeq(G__452524__a,0);
} 
return G__452523__delegate.call(this,args);};
G__452523.cljs$lang$maxFixedArity = 0;
G__452523.cljs$lang$applyTo = (function (arglist__452525){
var args = cljs.core.seq(arglist__452525);
return G__452523__delegate(args);
});
G__452523.cljs$core$IFn$_invoke$arity$variadic = G__452523__delegate;
return G__452523;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),(function() { 
var G__452526__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__452526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__452527__i = 0, G__452527__a = new Array(arguments.length -  0);
while (G__452527__i < G__452527__a.length) {G__452527__a[G__452527__i] = arguments[G__452527__i + 0]; ++G__452527__i;}
  args = new cljs.core.IndexedSeq(G__452527__a,0);
} 
return G__452526__delegate.call(this,args);};
G__452526.cljs$lang$maxFixedArity = 0;
G__452526.cljs$lang$applyTo = (function (arglist__452528){
var args = cljs.core.seq(arglist__452528);
return G__452526__delegate(args);
});
G__452526.cljs$core$IFn$_invoke$arity$variadic = G__452526__delegate;
return G__452526;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_452536){
var state_val_452537 = (state_452536[(1)]);
if((state_val_452537 === (1))){
var inst_452529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_452530 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031),new cljs.core.Keyword("stake","address","stake/address",680266700)];
var inst_452531 = [(0),(1000),"12345"];
var inst_452532 = cljs.core.PersistentHashMap.fromArrays(inst_452530,inst_452531);
var inst_452533 = [inst_452532];
var inst_452534 = (new cljs.core.PersistentVector(null,1,(5),inst_452529,inst_452533,null));
var state_452536__$1 = state_452536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452536__$1,inst_452534);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_452541 = [null,null,null,null,null,null,null];
(statearr_452541[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452541[(1)] = (1));

return statearr_452541;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452536){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452542){if((e452542 instanceof Object)){
var ex__40148__auto__ = e452542;
var statearr_452543_452672 = state_452536;
(statearr_452543_452672[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452673 = state_452536;
state_452536 = G__452673;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452536){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_452544 = f__40168__auto__.call(null);
(statearr_452544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})():(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_452630){
var state_val_452631 = (state_452630[(1)]);
if((state_val_452631 === (7))){
var inst_452568 = (state_452630[(2)]);
var inst_452569 = cljs.core.range.call(null,inst_452568);
var inst_452570 = cljs.core.seq.call(null,inst_452569);
var inst_452571 = inst_452570;
var inst_452572 = null;
var inst_452573 = (0);
var inst_452574 = (0);
var state_452630__$1 = (function (){var statearr_452632 = state_452630;
(statearr_452632[(7)] = inst_452573);

(statearr_452632[(8)] = inst_452572);

(statearr_452632[(9)] = inst_452571);

(statearr_452632[(10)] = inst_452574);

return statearr_452632;
})();
var statearr_452633_452674 = state_452630__$1;
(statearr_452633_452674[(2)] = null);

(statearr_452633_452674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (20))){
var inst_452620 = (state_452630[(2)]);
var state_452630__$1 = state_452630;
var statearr_452634_452675 = state_452630__$1;
(statearr_452634_452675[(2)] = inst_452620);

(statearr_452634_452675[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (1))){
var inst_452545 = cljs.core.PersistentVector.EMPTY;
var inst_452546 = cljs.core.atom.call(null,inst_452545);
var inst_452547 = ui.core.get_network.call(null);
var state_452630__$1 = (function (){var statearr_452635 = state_452630;
(statearr_452635[(11)] = inst_452546);

return statearr_452635;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452630__$1,(2),inst_452547);
} else {
if((state_val_452631 === (4))){
var inst_452557 = alert("Fatal Error: EthereanMind is missing data on the blockchain. Please make sure you have MetaMask set to the \"Ethereum Ropsten Test Network\".\n\n(Other possible reasons for this error may include an ongoing blockchain attack or an outage of the Infuria system.)");
var state_452630__$1 = state_452630;
var statearr_452636_452676 = state_452630__$1;
(statearr_452636_452676[(2)] = inst_452557);

(statearr_452636_452676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (15))){
var inst_452595 = (state_452630[(12)]);
var inst_452597 = cljs.core.chunked_seq_QMARK_.call(null,inst_452595);
var state_452630__$1 = state_452630;
if(inst_452597){
var statearr_452637_452677 = state_452630__$1;
(statearr_452637_452677[(1)] = (18));

} else {
var statearr_452638_452678 = state_452630__$1;
(statearr_452638_452678[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (21))){
var inst_452607 = (state_452630[(13)]);
var inst_452561 = (state_452630[(14)]);
var inst_452607__$1 = (state_452630[(2)]);
var inst_452608 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_452609 = ui.core.chan_call.call(null,inst_452561,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_452607__$1);
var state_452630__$1 = (function (){var statearr_452639 = state_452630;
(statearr_452639[(15)] = inst_452608);

(statearr_452639[(13)] = inst_452607__$1);

return statearr_452639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452630__$1,(22),inst_452609);
} else {
if((state_val_452631 === (13))){
var inst_452582 = (state_452630[(16)]);
var inst_452561 = (state_452630[(14)]);
var inst_452582__$1 = (state_452630[(2)]);
var inst_452583 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_452584 = ui.core.chan_call.call(null,inst_452561,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_452582__$1);
var state_452630__$1 = (function (){var statearr_452640 = state_452630;
(statearr_452640[(16)] = inst_452582__$1);

(statearr_452640[(17)] = inst_452583);

return statearr_452640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452630__$1,(14),inst_452584);
} else {
if((state_val_452631 === (22))){
var inst_452546 = (state_452630[(11)]);
var inst_452608 = (state_452630[(15)]);
var inst_452607 = (state_452630[(13)]);
var inst_452595 = (state_452630[(12)]);
var inst_452611 = (state_452630[(2)]);
var inst_452612 = (inst_452611[(0)]);
var inst_452613 = ui.core.wei__GT_eth.call(null,inst_452612);
var inst_452614 = [inst_452607,inst_452613];
var inst_452615 = cljs.core.PersistentHashMap.fromArrays(inst_452608,inst_452614);
var inst_452616 = cljs.core.swap_BANG_.call(null,inst_452546,cljs.core.conj,inst_452615);
var inst_452617 = cljs.core.next.call(null,inst_452595);
var inst_452571 = inst_452617;
var inst_452572 = null;
var inst_452573 = (0);
var inst_452574 = (0);
var state_452630__$1 = (function (){var statearr_452641 = state_452630;
(statearr_452641[(7)] = inst_452573);

(statearr_452641[(8)] = inst_452572);

(statearr_452641[(9)] = inst_452571);

(statearr_452641[(18)] = inst_452616);

(statearr_452641[(10)] = inst_452574);

return statearr_452641;
})();
var statearr_452642_452679 = state_452630__$1;
(statearr_452642_452679[(2)] = null);

(statearr_452642_452679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (6))){
var inst_452552 = (state_452630[(19)]);
var inst_452561 = (state_452630[(14)]);
var inst_452560 = (state_452630[(2)]);
var inst_452561__$1 = ui.core.contract.call(null,ui.contract.staking_abi,inst_452552);
var inst_452566 = ui.core.chan_call.call(null,inst_452561__$1,new cljs.core.Keyword(null,"depositLength","depositLength",788194150));
var state_452630__$1 = (function (){var statearr_452643 = state_452630;
(statearr_452643[(20)] = inst_452560);

(statearr_452643[(14)] = inst_452561__$1);

return statearr_452643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452630__$1,(7),inst_452566);
} else {
if((state_val_452631 === (17))){
var inst_452623 = (state_452630[(2)]);
var state_452630__$1 = state_452630;
var statearr_452644_452680 = state_452630__$1;
(statearr_452644_452680[(2)] = inst_452623);

(statearr_452644_452680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (3))){
var inst_452549 = (state_452630[(21)]);
var inst_452552 = (state_452630[(19)]);
var inst_452552__$1 = (state_452630[(2)]);
var inst_452553 = cljs.core._EQ_.call(null,inst_452549,(3));
var inst_452554 = cljs.core._EQ_.call(null,inst_452552__$1,"0x");
var inst_452555 = (inst_452553) && (inst_452554);
var state_452630__$1 = (function (){var statearr_452645 = state_452630;
(statearr_452645[(19)] = inst_452552__$1);

return statearr_452645;
})();
if(cljs.core.truth_(inst_452555)){
var statearr_452646_452681 = state_452630__$1;
(statearr_452646_452681[(1)] = (4));

} else {
var statearr_452647_452682 = state_452630__$1;
(statearr_452647_452682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (12))){
var inst_452625 = (state_452630[(2)]);
var state_452630__$1 = state_452630;
var statearr_452648_452683 = state_452630__$1;
(statearr_452648_452683[(2)] = inst_452625);

(statearr_452648_452683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (2))){
var inst_452549 = (state_452630[(2)]);
var inst_452550 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_452630__$1 = (function (){var statearr_452649 = state_452630;
(statearr_452649[(21)] = inst_452549);

return statearr_452649;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452630__$1,(3),inst_452550);
} else {
if((state_val_452631 === (19))){
var inst_452595 = (state_452630[(12)]);
var inst_452561 = (state_452630[(14)]);
var inst_452604 = cljs.core.first.call(null,inst_452595);
var inst_452605 = ui.core.chan_call.call(null,inst_452561,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_452604);
var state_452630__$1 = state_452630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452630__$1,(21),inst_452605);
} else {
if((state_val_452631 === (11))){
var inst_452571 = (state_452630[(9)]);
var inst_452595 = (state_452630[(12)]);
var inst_452595__$1 = cljs.core.seq.call(null,inst_452571);
var state_452630__$1 = (function (){var statearr_452650 = state_452630;
(statearr_452650[(12)] = inst_452595__$1);

return statearr_452650;
})();
if(inst_452595__$1){
var statearr_452651_452684 = state_452630__$1;
(statearr_452651_452684[(1)] = (15));

} else {
var statearr_452652_452685 = state_452630__$1;
(statearr_452652_452685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (9))){
var inst_452546 = (state_452630[(11)]);
var inst_452627 = (state_452630[(2)]);
var inst_452628 = cljs.core.deref.call(null,inst_452546);
var state_452630__$1 = (function (){var statearr_452656 = state_452630;
(statearr_452656[(22)] = inst_452627);

return statearr_452656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452630__$1,inst_452628);
} else {
if((state_val_452631 === (5))){
var state_452630__$1 = state_452630;
var statearr_452657_452686 = state_452630__$1;
(statearr_452657_452686[(2)] = null);

(statearr_452657_452686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (14))){
var inst_452546 = (state_452630[(11)]);
var inst_452573 = (state_452630[(7)]);
var inst_452572 = (state_452630[(8)]);
var inst_452582 = (state_452630[(16)]);
var inst_452571 = (state_452630[(9)]);
var inst_452574 = (state_452630[(10)]);
var inst_452583 = (state_452630[(17)]);
var inst_452586 = (state_452630[(2)]);
var inst_452587 = (inst_452586[(0)]);
var inst_452588 = ui.core.wei__GT_eth.call(null,inst_452587);
var inst_452589 = [inst_452582,inst_452588];
var inst_452590 = cljs.core.PersistentHashMap.fromArrays(inst_452583,inst_452589);
var inst_452591 = cljs.core.swap_BANG_.call(null,inst_452546,cljs.core.conj,inst_452590);
var inst_452592 = (inst_452574 + (1));
var tmp452653 = inst_452573;
var tmp452654 = inst_452572;
var tmp452655 = inst_452571;
var inst_452571__$1 = tmp452655;
var inst_452572__$1 = tmp452654;
var inst_452573__$1 = tmp452653;
var inst_452574__$1 = inst_452592;
var state_452630__$1 = (function (){var statearr_452658 = state_452630;
(statearr_452658[(7)] = inst_452573__$1);

(statearr_452658[(8)] = inst_452572__$1);

(statearr_452658[(9)] = inst_452571__$1);

(statearr_452658[(23)] = inst_452591);

(statearr_452658[(10)] = inst_452574__$1);

return statearr_452658;
})();
var statearr_452659_452687 = state_452630__$1;
(statearr_452659_452687[(2)] = null);

(statearr_452659_452687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (16))){
var state_452630__$1 = state_452630;
var statearr_452660_452688 = state_452630__$1;
(statearr_452660_452688[(2)] = null);

(statearr_452660_452688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (10))){
var inst_452572 = (state_452630[(8)]);
var inst_452574 = (state_452630[(10)]);
var inst_452561 = (state_452630[(14)]);
var inst_452579 = cljs.core._nth.call(null,inst_452572,inst_452574);
var inst_452580 = ui.core.chan_call.call(null,inst_452561,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_452579);
var state_452630__$1 = state_452630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452630__$1,(13),inst_452580);
} else {
if((state_val_452631 === (18))){
var inst_452595 = (state_452630[(12)]);
var inst_452599 = cljs.core.chunk_first.call(null,inst_452595);
var inst_452600 = cljs.core.chunk_rest.call(null,inst_452595);
var inst_452601 = cljs.core.count.call(null,inst_452599);
var inst_452571 = inst_452600;
var inst_452572 = inst_452599;
var inst_452573 = inst_452601;
var inst_452574 = (0);
var state_452630__$1 = (function (){var statearr_452661 = state_452630;
(statearr_452661[(7)] = inst_452573);

(statearr_452661[(8)] = inst_452572);

(statearr_452661[(9)] = inst_452571);

(statearr_452661[(10)] = inst_452574);

return statearr_452661;
})();
var statearr_452662_452689 = state_452630__$1;
(statearr_452662_452689[(2)] = null);

(statearr_452662_452689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452631 === (8))){
var inst_452573 = (state_452630[(7)]);
var inst_452574 = (state_452630[(10)]);
var inst_452576 = (inst_452574 < inst_452573);
var inst_452577 = inst_452576;
var state_452630__$1 = state_452630;
if(cljs.core.truth_(inst_452577)){
var statearr_452663_452690 = state_452630__$1;
(statearr_452663_452690[(1)] = (10));

} else {
var statearr_452664_452691 = state_452630__$1;
(statearr_452664_452691[(1)] = (11));

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
var statearr_452668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_452668[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452668[(1)] = (1));

return statearr_452668;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452630){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452669){if((e452669 instanceof Object)){
var ex__40148__auto__ = e452669;
var statearr_452670_452692 = state_452630;
(statearr_452670_452692[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452693 = state_452630;
state_452630 = G__452693;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452630){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_452671 = f__40168__auto__.call(null);
(statearr_452671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,dispatch_key,params){
var map__452694 = env;
var map__452694__$1 = ((((!((map__452694 == null)))?((((map__452694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__452694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__452694):map__452694);
var item_id = cljs.core.get.call(null,map__452694__$1,new cljs.core.Keyword(null,"item-id","item-id",-1804511607));
var item = cljs.core.get.call(null,map__452694__$1,new cljs.core.Keyword(null,"item","item",249373802));
var update_time = ((item[(1)]) | (0));
var fun = ((function (map__452694,map__452694__$1,item_id,item,update_time){
return (function (index){
if((update_time === (0))){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time){
return (function (state_452710){
var state_val_452711 = (state_452710[(1)]);
if((state_val_452711 === (1))){
var inst_452696 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_452697 = (index === (0));
var state_452710__$1 = (function (){var statearr_452712 = state_452710;
(statearr_452712[(7)] = inst_452696);

return statearr_452712;
})();
if(cljs.core.truth_(inst_452697)){
var statearr_452713_452770 = state_452710__$1;
(statearr_452713_452770[(1)] = (2));

} else {
var statearr_452714_452771 = state_452710__$1;
(statearr_452714_452771[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452711 === (2))){
var state_452710__$1 = state_452710;
var statearr_452715_452772 = state_452710__$1;
(statearr_452715_452772[(2)] = (0));

(statearr_452715_452772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452711 === (3))){
var state_452710__$1 = state_452710;
var statearr_452716_452773 = state_452710__$1;
(statearr_452716_452773[(2)] = 1.0E-4);

(statearr_452716_452773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452711 === (4))){
var inst_452701 = (state_452710[(2)]);
var inst_452702 = (index === (0));
var state_452710__$1 = (function (){var statearr_452717 = state_452710;
(statearr_452717[(8)] = inst_452701);

return statearr_452717;
})();
if(cljs.core.truth_(inst_452702)){
var statearr_452718_452774 = state_452710__$1;
(statearr_452718_452774[(1)] = (5));

} else {
var statearr_452719_452775 = state_452710__$1;
(statearr_452719_452775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452711 === (5))){
var state_452710__$1 = state_452710;
var statearr_452720_452776 = state_452710__$1;
(statearr_452720_452776[(2)] = (0));

(statearr_452720_452776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452711 === (6))){
var state_452710__$1 = state_452710;
var statearr_452721_452777 = state_452710__$1;
(statearr_452721_452777[(2)] = 1.0E-4);

(statearr_452721_452777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452711 === (7))){
var inst_452701 = (state_452710[(8)]);
var inst_452696 = (state_452710[(7)]);
var inst_452706 = (state_452710[(2)]);
var inst_452707 = [inst_452701,inst_452706];
var inst_452708 = cljs.core.PersistentHashMap.fromArrays(inst_452696,inst_452707);
var state_452710__$1 = state_452710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452710__$1,inst_452708);
} else {
return null;
}
}
}
}
}
}
}
});})(c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_452725 = [null,null,null,null,null,null,null,null,null];
(statearr_452725[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452725[(1)] = (1));

return statearr_452725;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452710){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452726){if((e452726 instanceof Object)){
var ex__40148__auto__ = e452726;
var statearr_452727_452778 = state_452710;
(statearr_452727_452778[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452779 = state_452710;
state_452710 = G__452779;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452710){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time))
})();
var state__40169__auto__ = (function (){var statearr_452728 = f__40168__auto__.call(null);
(statearr_452728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time))
);

return c__40167__auto__;
} else {
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time){
return (function (state_452740){
var state_val_452741 = (state_452740[(1)]);
if((state_val_452741 === (1))){
var inst_452729 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"itemVoteInfo","itemVoteInfo",-383659653),item_id,index);
var state_452740__$1 = state_452740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452740__$1,(2),inst_452729);
} else {
if((state_val_452741 === (2))){
var inst_452731 = (state_452740[(2)]);
var inst_452732 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_452733 = (inst_452731[(0)]);
var inst_452734 = ui.core.wei__GT_eth.call(null,inst_452733);
var inst_452735 = (inst_452731[(1)]);
var inst_452736 = ui.core.wei__GT_eth.call(null,inst_452735);
var inst_452737 = [inst_452734,inst_452736];
var inst_452738 = cljs.core.PersistentHashMap.fromArrays(inst_452732,inst_452737);
var state_452740__$1 = state_452740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452740__$1,inst_452738);
} else {
return null;
}
}
});})(c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_452745 = [null,null,null,null,null,null,null];
(statearr_452745[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452745[(1)] = (1));

return statearr_452745;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452740){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452746){if((e452746 instanceof Object)){
var ex__40148__auto__ = e452746;
var statearr_452747_452780 = state_452740;
(statearr_452747_452780[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452781 = state_452740;
state_452740 = G__452781;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452740){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time))
})();
var state__40169__auto__ = (function (){var statearr_452748 = f__40168__auto__.call(null);
(statearr_452748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time))
);

return c__40167__auto__;
}
});})(map__452694,map__452694__$1,item_id,item,update_time))
;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time,fun){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time,fun){
return (function (state_452759){
var state_val_452760 = (state_452759[(1)]);
if((state_val_452760 === (1))){
var inst_452749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_452750 = fun.call(null,(0));
var state_452759__$1 = (function (){var statearr_452761 = state_452759;
(statearr_452761[(7)] = inst_452749);

return statearr_452761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452759__$1,(2),inst_452750);
} else {
if((state_val_452760 === (2))){
var inst_452752 = (state_452759[(2)]);
var inst_452753 = fun.call(null,(1));
var state_452759__$1 = (function (){var statearr_452762 = state_452759;
(statearr_452762[(8)] = inst_452752);

return statearr_452762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452759__$1,(3),inst_452753);
} else {
if((state_val_452760 === (3))){
var inst_452749 = (state_452759[(7)]);
var inst_452752 = (state_452759[(8)]);
var inst_452755 = (state_452759[(2)]);
var inst_452756 = [inst_452752,inst_452755];
var inst_452757 = (new cljs.core.PersistentVector(null,2,(5),inst_452749,inst_452756,null));
var state_452759__$1 = state_452759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452759__$1,inst_452757);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time,fun))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time,fun){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_452766 = [null,null,null,null,null,null,null,null,null];
(statearr_452766[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452766[(1)] = (1));

return statearr_452766;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452759){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452767){if((e452767 instanceof Object)){
var ex__40148__auto__ = e452767;
var statearr_452768_452782 = state_452759;
(statearr_452768_452782[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452783 = state_452759;
state_452759 = G__452783;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452759){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time,fun))
})();
var state__40169__auto__ = (function (){var statearr_452769 = f__40168__auto__.call(null);
(statearr_452769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__452694,map__452694__$1,item_id,item,update_time,fun))
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
return (function (state_452800){
var state_val_452801 = (state_452800[(1)]);
if((state_val_452801 === (1))){
var inst_452784 = (proposal_index === (0));
var state_452800__$1 = state_452800;
if(cljs.core.truth_(inst_452784)){
var statearr_452802_452813 = state_452800__$1;
(statearr_452802_452813[(1)] = (2));

} else {
var statearr_452803_452814 = state_452800__$1;
(statearr_452803_452814[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452801 === (2))){
var inst_452786 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var inst_452787 = ui.core.starting_items.call(null,inst_452786);
var state_452800__$1 = state_452800;
var statearr_452804_452815 = state_452800__$1;
(statearr_452804_452815[(2)] = inst_452787);

(statearr_452804_452815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452801 === (3))){
var inst_452789 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),proposal_index);
var state_452800__$1 = state_452800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452800__$1,(5),inst_452789);
} else {
if((state_val_452801 === (4))){
var inst_452798 = (state_452800[(2)]);
var state_452800__$1 = state_452800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452800__$1,inst_452798);
} else {
if((state_val_452801 === (5))){
var inst_452791 = (state_452800[(2)]);
var inst_452792 = (inst_452791[(3)]);
var inst_452793 = (inst_452792 | (0));
var inst_452794 = ui.core.get_proposal_description.call(null,inst_452793,proposal_index);
var state_452800__$1 = state_452800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452800__$1,(6),inst_452794);
} else {
if((state_val_452801 === (6))){
var inst_452796 = (state_452800[(2)]);
var state_452800__$1 = state_452800;
var statearr_452805_452816 = state_452800__$1;
(statearr_452805_452816[(2)] = inst_452796);

(statearr_452805_452816[(1)] = (4));


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
var statearr_452809 = [null,null,null,null,null,null,null];
(statearr_452809[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452809[(1)] = (1));

return statearr_452809;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452800){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452810){if((e452810 instanceof Object)){
var ex__40148__auto__ = e452810;
var statearr_452811_452817 = state_452800;
(statearr_452811_452817[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452818 = state_452800;
state_452800 = G__452818;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452800){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,proposal_index,update_time))
})();
var state__40169__auto__ = (function (){var statearr_452812 = f__40168__auto__.call(null);
(statearr_452812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452812;
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
return (function (state_452901){
var state_val_452902 = (state_452901[(1)]);
if((state_val_452902 === (7))){
var inst_452831 = (state_452901[(2)]);
var state_452901__$1 = state_452901;
var statearr_452903_452947 = state_452901__$1;
(statearr_452903_452947[(2)] = inst_452831);

(statearr_452903_452947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (20))){
var inst_452894 = (state_452901[(2)]);
var state_452901__$1 = state_452901;
var statearr_452904_452948 = state_452901__$1;
(statearr_452904_452948[(2)] = inst_452894);

(statearr_452904_452948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (1))){
var inst_452821 = (env == null);
var inst_452822 = cljs.core.not.call(null,inst_452821);
var state_452901__$1 = state_452901;
if(inst_452822){
var statearr_452905_452949 = state_452901__$1;
(statearr_452905_452949[(1)] = (2));

} else {
var statearr_452906_452950 = state_452901__$1;
(statearr_452906_452950[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (24))){
var inst_452879 = (state_452901[(7)]);
var inst_452841 = (state_452901[(8)]);
var inst_452840 = (state_452901[(9)]);
var inst_452882 = (state_452901[(2)]);
var inst_452883 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_452882,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_452879);
var inst_452884 = inst_452840.call(null,inst_452883,inst_452841);
var state_452901__$1 = state_452901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452901__$1,(25),inst_452884);
} else {
if((state_val_452902 === (4))){
var inst_452834 = (state_452901[(2)]);
var state_452901__$1 = state_452901;
if(cljs.core.truth_(inst_452834)){
var statearr_452907_452951 = state_452901__$1;
(statearr_452907_452951[(1)] = (8));

} else {
var statearr_452908_452952 = state_452901__$1;
(statearr_452908_452952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (15))){
var inst_452896 = (state_452901[(2)]);
var state_452901__$1 = state_452901;
var statearr_452909_452953 = state_452901__$1;
(statearr_452909_452953[(2)] = inst_452896);

(statearr_452909_452953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (21))){
var inst_452870 = (state_452901[(10)]);
var inst_452874 = cljs.core.chunk_first.call(null,inst_452870);
var inst_452875 = cljs.core.chunk_rest.call(null,inst_452870);
var inst_452876 = cljs.core.count.call(null,inst_452874);
var inst_452850 = inst_452875;
var inst_452851 = inst_452874;
var inst_452852 = inst_452876;
var inst_452853 = (0);
var state_452901__$1 = (function (){var statearr_452910 = state_452901;
(statearr_452910[(11)] = inst_452853);

(statearr_452910[(12)] = inst_452850);

(statearr_452910[(13)] = inst_452851);

(statearr_452910[(14)] = inst_452852);

return statearr_452910;
})();
var statearr_452911_452954 = state_452901__$1;
(statearr_452911_452954[(2)] = null);

(statearr_452911_452954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (13))){
var inst_452853 = (state_452901[(11)]);
var inst_452858 = (state_452901[(15)]);
var inst_452851 = (state_452901[(13)]);
var inst_452858__$1 = cljs.core._nth.call(null,inst_452851,inst_452853);
var inst_452859 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_452858__$1);
var state_452901__$1 = (function (){var statearr_452912 = state_452901;
(statearr_452912[(15)] = inst_452858__$1);

return statearr_452912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452901__$1,(16),inst_452859);
} else {
if((state_val_452902 === (22))){
var inst_452870 = (state_452901[(10)]);
var inst_452879 = (state_452901[(7)]);
var inst_452879__$1 = cljs.core.first.call(null,inst_452870);
var inst_452880 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_452879__$1);
var state_452901__$1 = (function (){var statearr_452913 = state_452901;
(statearr_452913[(7)] = inst_452879__$1);

return statearr_452913;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452901__$1,(24),inst_452880);
} else {
if((state_val_452902 === (6))){
var state_452901__$1 = state_452901;
var statearr_452917_452955 = state_452901__$1;
(statearr_452917_452955[(2)] = false);

(statearr_452917_452955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (25))){
var inst_452870 = (state_452901[(10)]);
var inst_452879 = (state_452901[(7)]);
var inst_452843 = (state_452901[(16)]);
var inst_452886 = (state_452901[(2)]);
var inst_452887 = cljs.core.swap_BANG_.call(null,inst_452843,cljs.core.assoc,inst_452879,inst_452886);
var inst_452888 = cljs.core.next.call(null,inst_452870);
var inst_452850 = inst_452888;
var inst_452851 = null;
var inst_452852 = (0);
var inst_452853 = (0);
var state_452901__$1 = (function (){var statearr_452918 = state_452901;
(statearr_452918[(17)] = inst_452887);

(statearr_452918[(11)] = inst_452853);

(statearr_452918[(12)] = inst_452850);

(statearr_452918[(13)] = inst_452851);

(statearr_452918[(14)] = inst_452852);

return statearr_452918;
})();
var statearr_452919_452956 = state_452901__$1;
(statearr_452919_452956[(2)] = null);

(statearr_452919_452956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (17))){
var inst_452853 = (state_452901[(11)]);
var inst_452850 = (state_452901[(12)]);
var inst_452858 = (state_452901[(15)]);
var inst_452851 = (state_452901[(13)]);
var inst_452852 = (state_452901[(14)]);
var inst_452843 = (state_452901[(16)]);
var inst_452865 = (state_452901[(2)]);
var inst_452866 = cljs.core.swap_BANG_.call(null,inst_452843,cljs.core.assoc,inst_452858,inst_452865);
var inst_452867 = (inst_452853 + (1));
var tmp452914 = inst_452850;
var tmp452915 = inst_452851;
var tmp452916 = inst_452852;
var inst_452850__$1 = tmp452914;
var inst_452851__$1 = tmp452915;
var inst_452852__$1 = tmp452916;
var inst_452853__$1 = inst_452867;
var state_452901__$1 = (function (){var statearr_452920 = state_452901;
(statearr_452920[(18)] = inst_452866);

(statearr_452920[(11)] = inst_452853__$1);

(statearr_452920[(12)] = inst_452850__$1);

(statearr_452920[(13)] = inst_452851__$1);

(statearr_452920[(14)] = inst_452852__$1);

return statearr_452920;
})();
var statearr_452921_452957 = state_452901__$1;
(statearr_452921_452957[(2)] = null);

(statearr_452921_452957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (3))){
var state_452901__$1 = state_452901;
var statearr_452922_452958 = state_452901__$1;
(statearr_452922_452958[(2)] = false);

(statearr_452922_452958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (12))){
var inst_452843 = (state_452901[(16)]);
var inst_452898 = (state_452901[(2)]);
var inst_452899 = cljs.core.deref.call(null,inst_452843);
var state_452901__$1 = (function (){var statearr_452923 = state_452901;
(statearr_452923[(19)] = inst_452898);

return statearr_452923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452901__$1,inst_452899);
} else {
if((state_val_452902 === (2))){
var inst_452824 = env.cljs$lang$protocol_mask$partition0$;
var inst_452825 = (inst_452824 & (64));
var inst_452826 = env.cljs$core$ISeq$;
var inst_452827 = (inst_452825) || (inst_452826);
var state_452901__$1 = state_452901;
if(cljs.core.truth_(inst_452827)){
var statearr_452924_452959 = state_452901__$1;
(statearr_452924_452959[(1)] = (5));

} else {
var statearr_452925_452960 = state_452901__$1;
(statearr_452925_452960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (23))){
var inst_452891 = (state_452901[(2)]);
var state_452901__$1 = state_452901;
var statearr_452926_452961 = state_452901__$1;
(statearr_452926_452961[(2)] = inst_452891);

(statearr_452926_452961[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (19))){
var state_452901__$1 = state_452901;
var statearr_452927_452962 = state_452901__$1;
(statearr_452927_452962[(2)] = null);

(statearr_452927_452962[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (11))){
var inst_452853 = (state_452901[(11)]);
var inst_452852 = (state_452901[(14)]);
var inst_452855 = (inst_452853 < inst_452852);
var inst_452856 = inst_452855;
var state_452901__$1 = state_452901;
if(cljs.core.truth_(inst_452856)){
var statearr_452928_452963 = state_452901__$1;
(statearr_452928_452963[(1)] = (13));

} else {
var statearr_452929_452964 = state_452901__$1;
(statearr_452929_452964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (9))){
var state_452901__$1 = state_452901;
var statearr_452930_452965 = state_452901__$1;
(statearr_452930_452965[(2)] = env);

(statearr_452930_452965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (5))){
var state_452901__$1 = state_452901;
var statearr_452931_452966 = state_452901__$1;
(statearr_452931_452966[(2)] = true);

(statearr_452931_452966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (14))){
var inst_452870 = (state_452901[(10)]);
var inst_452850 = (state_452901[(12)]);
var inst_452870__$1 = cljs.core.seq.call(null,inst_452850);
var state_452901__$1 = (function (){var statearr_452932 = state_452901;
(statearr_452932[(10)] = inst_452870__$1);

return statearr_452932;
})();
if(inst_452870__$1){
var statearr_452933_452967 = state_452901__$1;
(statearr_452933_452967[(1)] = (18));

} else {
var statearr_452934_452968 = state_452901__$1;
(statearr_452934_452968[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (16))){
var inst_452841 = (state_452901[(8)]);
var inst_452840 = (state_452901[(9)]);
var inst_452858 = (state_452901[(15)]);
var inst_452861 = (state_452901[(2)]);
var inst_452862 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_452861,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_452858);
var inst_452863 = inst_452840.call(null,inst_452862,inst_452841);
var state_452901__$1 = state_452901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452901__$1,(17),inst_452863);
} else {
if((state_val_452902 === (10))){
var inst_452839 = (state_452901[(2)]);
var inst_452840 = cljs.core.get.call(null,inst_452839,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_452841 = cljs.core.get.call(null,inst_452839,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_452842 = cljs.core.PersistentVector.EMPTY;
var inst_452843 = cljs.core.atom.call(null,inst_452842);
var inst_452848 = cljs.core.range.call(null,ui.core.max_items);
var inst_452849 = cljs.core.seq.call(null,inst_452848);
var inst_452850 = inst_452849;
var inst_452851 = null;
var inst_452852 = (0);
var inst_452853 = (0);
var state_452901__$1 = (function (){var statearr_452935 = state_452901;
(statearr_452935[(8)] = inst_452841);

(statearr_452935[(9)] = inst_452840);

(statearr_452935[(11)] = inst_452853);

(statearr_452935[(12)] = inst_452850);

(statearr_452935[(13)] = inst_452851);

(statearr_452935[(14)] = inst_452852);

(statearr_452935[(16)] = inst_452843);

return statearr_452935;
})();
var statearr_452936_452969 = state_452901__$1;
(statearr_452936_452969[(2)] = null);

(statearr_452936_452969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (18))){
var inst_452870 = (state_452901[(10)]);
var inst_452872 = cljs.core.chunked_seq_QMARK_.call(null,inst_452870);
var state_452901__$1 = state_452901;
if(inst_452872){
var statearr_452937_452970 = state_452901__$1;
(statearr_452937_452970[(1)] = (21));

} else {
var statearr_452938_452971 = state_452901__$1;
(statearr_452938_452971[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452902 === (8))){
var inst_452836 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_452901__$1 = state_452901;
var statearr_452939_452972 = state_452901__$1;
(statearr_452939_452972[(2)] = inst_452836);

(statearr_452939_452972[(1)] = (10));


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
var statearr_452943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_452943[(0)] = ui$core$state_machine__40145__auto__);

(statearr_452943[(1)] = (1));

return statearr_452943;
});
var ui$core$state_machine__40145__auto____1 = (function (state_452901){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_452901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e452944){if((e452944 instanceof Object)){
var ex__40148__auto__ = e452944;
var statearr_452945_452973 = state_452901;
(statearr_452945_452973[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452974 = state_452901;
state_452901 = G__452974;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_452901){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_452901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_452946 = f__40168__auto__.call(null);
(statearr_452946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_452946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__452975__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__452975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__452976__i = 0, G__452976__a = new Array(arguments.length -  0);
while (G__452976__i < G__452976__a.length) {G__452976__a[G__452976__i] = arguments[G__452976__i + 0]; ++G__452976__i;}
  args = new cljs.core.IndexedSeq(G__452976__a,0);
} 
return G__452975__delegate.call(this,args);};
G__452975.cljs$lang$maxFixedArity = 0;
G__452975.cljs$lang$applyTo = (function (arglist__452977){
var args = cljs.core.seq(arglist__452977);
return G__452975__delegate(args);
});
G__452975.cljs$core$IFn$_invoke$arity$variadic = G__452975__delegate;
return G__452975;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__452978__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__452978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__452979__i = 0, G__452979__a = new Array(arguments.length -  0);
while (G__452979__i < G__452979__a.length) {G__452979__a[G__452979__i] = arguments[G__452979__i + 0]; ++G__452979__i;}
  args = new cljs.core.IndexedSeq(G__452979__a,0);
} 
return G__452978__delegate.call(this,args);};
G__452978.cljs$lang$maxFixedArity = 0;
G__452978.cljs$lang$applyTo = (function (arglist__452980){
var args = cljs.core.seq(arglist__452980);
return G__452978__delegate(args);
});
G__452978.cljs$core$IFn$_invoke$arity$variadic = G__452978__delegate;
return G__452978;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__452981__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__452981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__452982__i = 0, G__452982__a = new Array(arguments.length -  0);
while (G__452982__i < G__452982__a.length) {G__452982__a[G__452982__i] = arguments[G__452982__i + 0]; ++G__452982__i;}
  args = new cljs.core.IndexedSeq(G__452982__a,0);
} 
return G__452981__delegate.call(this,args);};
G__452981.cljs$lang$maxFixedArity = 0;
G__452981.cljs$lang$applyTo = (function (arglist__452983){
var args = cljs.core.seq(arglist__452983);
return G__452981__delegate(args);
});
G__452981.cljs$core$IFn$_invoke$arity$variadic = G__452981__delegate;
return G__452981;
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
var map__452984 = params;
var map__452984__$1 = ((((!((map__452984 == null)))?((((map__452984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__452984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__452984):map__452984);
var id = cljs.core.get.call(null,map__452984__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__452984__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__452984,map__452984__$1,id,description){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__452984,map__452984__$1,id,description){
return (function (state_453013){
var state_val_453014 = (state_453013[(1)]);
if((state_val_453014 === (1))){
var inst_452986 = ui.core.block_number.call(null);
var state_453013__$1 = state_453013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453013__$1,(2),inst_452986);
} else {
if((state_val_453014 === (2))){
var inst_452988 = (state_453013[(2)]);
var inst_452989 = ui.core.format_message.call(null,description);
var inst_452990 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"addProposal","addProposal",-2108750592),inst_452989);
var state_453013__$1 = (function (){var statearr_453015 = state_453013;
(statearr_453015[(7)] = inst_452988);

return statearr_453015;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453013__$1,(3),inst_452990);
} else {
if((state_val_453014 === (3))){
var inst_452988 = (state_453013[(7)]);
var inst_452992 = (state_453013[(2)]);
var inst_452993 = ui.core.get_historical_events.call(null,ui.core.etherean,inst_452988,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({}));
var state_453013__$1 = (function (){var statearr_453016 = state_453013;
(statearr_453016[(8)] = inst_452992);

return statearr_453016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453013__$1,(4),inst_452993);
} else {
if((state_val_453014 === (4))){
var inst_452995 = (state_453013[(2)]);
var inst_452996 = cljs.core.first.call(null,inst_452995);
var inst_452997 = [new cljs.core.Keyword(null,"tempids","tempids",1767509089)];
var inst_452998 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_452999 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),id];
var inst_453000 = (new cljs.core.PersistentVector(null,2,(5),inst_452998,inst_452999,null));
var inst_453001 = [inst_453000];
var inst_453002 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_453003 = inst_452996.args;
var inst_453004 = inst_453003.proposalIndex;
var inst_453005 = (inst_453004 | (0));
var inst_453006 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),inst_453005];
var inst_453007 = (new cljs.core.PersistentVector(null,2,(5),inst_453002,inst_453006,null));
var inst_453008 = [inst_453007];
var inst_453009 = cljs.core.PersistentHashMap.fromArrays(inst_453001,inst_453008);
var inst_453010 = [inst_453009];
var inst_453011 = cljs.core.PersistentHashMap.fromArrays(inst_452997,inst_453010);
var state_453013__$1 = state_453013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_453013__$1,inst_453011);
} else {
return null;
}
}
}
}
});})(c__40167__auto__,map__452984,map__452984__$1,id,description))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__452984,map__452984__$1,id,description){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_453020 = [null,null,null,null,null,null,null,null,null];
(statearr_453020[(0)] = ui$core$state_machine__40145__auto__);

(statearr_453020[(1)] = (1));

return statearr_453020;
});
var ui$core$state_machine__40145__auto____1 = (function (state_453013){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_453013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e453021){if((e453021 instanceof Object)){
var ex__40148__auto__ = e453021;
var statearr_453022_453024 = state_453013;
(statearr_453022_453024[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e453021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__453025 = state_453013;
state_453013 = G__453025;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_453013){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_453013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__452984,map__452984__$1,id,description))
})();
var state__40169__auto__ = (function (){var statearr_453023 = f__40168__auto__.call(null);
(statearr_453023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_453023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__452984,map__452984__$1,id,description))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__453026 = params;
var map__453026__$1 = ((((!((map__453026 == null)))?((((map__453026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__453026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__453026):map__453026);
var id = cljs.core.get.call(null,map__453026__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__453026__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__453026,map__453026__$1,id,direction){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__453026,map__453026__$1,id,direction){
return (function (state_453033){
var state_val_453034 = (state_453033[(1)]);
if((state_val_453034 === (1))){
var inst_453028 = cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113));
var inst_453029 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnProposal","voteOnProposal",-1101682438),id,inst_453028);
var state_453033__$1 = state_453033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453033__$1,(2),inst_453029);
} else {
if((state_val_453034 === (2))){
var inst_453031 = (state_453033[(2)]);
var state_453033__$1 = state_453033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_453033__$1,inst_453031);
} else {
return null;
}
}
});})(c__40167__auto__,map__453026,map__453026__$1,id,direction))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__453026,map__453026__$1,id,direction){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_453038 = [null,null,null,null,null,null,null];
(statearr_453038[(0)] = ui$core$state_machine__40145__auto__);

(statearr_453038[(1)] = (1));

return statearr_453038;
});
var ui$core$state_machine__40145__auto____1 = (function (state_453033){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_453033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e453039){if((e453039 instanceof Object)){
var ex__40148__auto__ = e453039;
var statearr_453040_453042 = state_453033;
(statearr_453040_453042[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e453039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__453043 = state_453033;
state_453033 = G__453043;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_453033){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_453033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__453026,map__453026__$1,id,direction))
})();
var state__40169__auto__ = (function (){var statearr_453041 = f__40168__auto__.call(null);
(statearr_453041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_453041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__453026,map__453026__$1,id,direction))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("item","vote","item/vote",-842849665,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__453044 = params;
var map__453044__$1 = ((((!((map__453044 == null)))?((((map__453044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__453044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__453044):map__453044);
var id = cljs.core.get.call(null,map__453044__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__453044__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__453044,map__453044__$1,id,direction){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__453044,map__453044__$1,id,direction){
return (function (state_453050){
var state_val_453051 = (state_453050[(1)]);
if((state_val_453051 === (1))){
var inst_453046 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnItem","voteOnItem",903210165),id,direction);
var state_453050__$1 = state_453050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453050__$1,(2),inst_453046);
} else {
if((state_val_453051 === (2))){
var inst_453048 = (state_453050[(2)]);
var state_453050__$1 = state_453050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_453050__$1,inst_453048);
} else {
return null;
}
}
});})(c__40167__auto__,map__453044,map__453044__$1,id,direction))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__453044,map__453044__$1,id,direction){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_453055 = [null,null,null,null,null,null,null];
(statearr_453055[(0)] = ui$core$state_machine__40145__auto__);

(statearr_453055[(1)] = (1));

return statearr_453055;
});
var ui$core$state_machine__40145__auto____1 = (function (state_453050){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_453050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e453056){if((e453056 instanceof Object)){
var ex__40148__auto__ = e453056;
var statearr_453057_453059 = state_453050;
(statearr_453057_453059[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e453056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__453060 = state_453050;
state_453050 = G__453060;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_453050){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_453050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__453044,map__453044__$1,id,direction))
})();
var state__40169__auto__ = (function (){var statearr_453058 = f__40168__auto__.call(null);
(statearr_453058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_453058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__453044,map__453044__$1,id,direction))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__453061 = params;
var map__453061__$1 = ((((!((map__453061 == null)))?((((map__453061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__453061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__453061):map__453061);
var value = cljs.core.get.call(null,map__453061__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__453061,map__453061__$1,value){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__453061,map__453061__$1,value){
return (function (state_453075){
var state_val_453076 = (state_453075[(1)]);
if((state_val_453076 === (1))){
var inst_453063 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_453075__$1 = state_453075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453075__$1,(2),inst_453063);
} else {
if((state_val_453076 === (2))){
var inst_453065 = (state_453075[(2)]);
var inst_453066 = ui.core.contract.call(null,ui.contract.staking_abi,inst_453065);
var inst_453067 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_453068 = web3.toWei(value,"ether");
var inst_453069 = [inst_453068];
var inst_453070 = cljs.core.PersistentHashMap.fromArrays(inst_453067,inst_453069);
var inst_453071 = ui.core.chan_transact.call(null,inst_453066,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),inst_453070);
var state_453075__$1 = state_453075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453075__$1,(3),inst_453071);
} else {
if((state_val_453076 === (3))){
var inst_453073 = (state_453075[(2)]);
var state_453075__$1 = state_453075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_453075__$1,inst_453073);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__453061,map__453061__$1,value))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__453061,map__453061__$1,value){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_453080 = [null,null,null,null,null,null,null];
(statearr_453080[(0)] = ui$core$state_machine__40145__auto__);

(statearr_453080[(1)] = (1));

return statearr_453080;
});
var ui$core$state_machine__40145__auto____1 = (function (state_453075){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_453075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e453081){if((e453081 instanceof Object)){
var ex__40148__auto__ = e453081;
var statearr_453082_453084 = state_453075;
(statearr_453082_453084[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e453081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__453085 = state_453075;
state_453075 = G__453085;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_453075){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_453075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__453061,map__453061__$1,value))
})();
var state__40169__auto__ = (function (){var statearr_453083 = f__40168__auto__.call(null);
(statearr_453083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_453083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__453061,map__453061__$1,value))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","withdraw","user/withdraw",-1187344809,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__453086 = params;
var map__453086__$1 = ((((!((map__453086 == null)))?((((map__453086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__453086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__453086):map__453086);
var value = cljs.core.get.call(null,map__453086__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__453086,map__453086__$1,value){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__453086,map__453086__$1,value){
return (function (state_453096){
var state_val_453097 = (state_453096[(1)]);
if((state_val_453097 === (1))){
var inst_453088 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_453096__$1 = state_453096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453096__$1,(2),inst_453088);
} else {
if((state_val_453097 === (2))){
var inst_453090 = (state_453096[(2)]);
var inst_453091 = ui.core.contract.call(null,ui.contract.staking_abi,inst_453090);
var inst_453092 = ui.core.chan_transact.call(null,inst_453091,new cljs.core.Keyword(null,"withdraw","withdraw",1469652053));
var state_453096__$1 = state_453096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453096__$1,(3),inst_453092);
} else {
if((state_val_453097 === (3))){
var inst_453094 = (state_453096[(2)]);
var state_453096__$1 = state_453096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_453096__$1,inst_453094);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__453086,map__453086__$1,value))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__453086,map__453086__$1,value){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_453101 = [null,null,null,null,null,null,null];
(statearr_453101[(0)] = ui$core$state_machine__40145__auto__);

(statearr_453101[(1)] = (1));

return statearr_453101;
});
var ui$core$state_machine__40145__auto____1 = (function (state_453096){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_453096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e453102){if((e453102 instanceof Object)){
var ex__40148__auto__ = e453102;
var statearr_453103_453105 = state_453096;
(statearr_453103_453105[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e453102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__453106 = state_453096;
state_453096 = G__453106;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_453096){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_453096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__453086,map__453086__$1,value))
})();
var state__40169__auto__ = (function (){var statearr_453104 = f__40168__auto__.call(null);
(statearr_453104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_453104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__453086,map__453086__$1,value))
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
return (function (state_453116){
var state_val_453117 = (state_453116[(1)]);
if((state_val_453117 === (1))){
var inst_453107 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"debugTime","debugTime",-1487871746));
var state_453116__$1 = state_453116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453116__$1,(2),inst_453107);
} else {
if((state_val_453117 === (2))){
var inst_453109 = (state_453116[(2)]);
var inst_453110 = (inst_453109 | (0));
var inst_453111 = (inst_453110 + (86400));
var inst_453112 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"setDebugTime","setDebugTime",1278197802),inst_453111);
var state_453116__$1 = state_453116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453116__$1,(3),inst_453112);
} else {
if((state_val_453117 === (3))){
var inst_453114 = (state_453116[(2)]);
var state_453116__$1 = state_453116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_453116__$1,inst_453114);
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
var statearr_453121 = [null,null,null,null,null,null,null];
(statearr_453121[(0)] = ui$core$state_machine__40145__auto__);

(statearr_453121[(1)] = (1));

return statearr_453121;
});
var ui$core$state_machine__40145__auto____1 = (function (state_453116){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_453116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e453122){if((e453122 instanceof Object)){
var ex__40148__auto__ = e453122;
var statearr_453123_453125 = state_453116;
(statearr_453123_453125[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e453122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__453126 = state_453116;
state_453116 = G__453126;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_453116){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_453116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_453124 = f__40168__auto__.call(null);
(statearr_453124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_453124;
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
ui.core.blockchain_send = (function ui$core$blockchain_send(p__453127,cb){
var map__453146 = p__453127;
var map__453146__$1 = ((((!((map__453146 == null)))?((((map__453146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__453146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__453146):map__453146);
var remote = cljs.core.get.call(null,map__453146__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__453146,map__453146__$1,remote){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__453146,map__453146__$1,remote){
return (function (state_453155){
var state_val_453156 = (state_453155[(1)]);
if((state_val_453156 === (1))){
var inst_453148 = cljs.core.PersistentHashMap.EMPTY;
var inst_453149 = ui.core.process_remote_query.call(null,remote);
var inst_453150 = ui.core.server_parser.call(null,inst_453148,inst_453149);
var state_453155__$1 = state_453155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453155__$1,(2),inst_453150);
} else {
if((state_val_453156 === (2))){
var inst_453152 = (state_453155[(2)]);
var inst_453153 = cb.call(null,inst_453152);
var state_453155__$1 = state_453155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_453155__$1,inst_453153);
} else {
return null;
}
}
});})(c__40167__auto__,map__453146,map__453146__$1,remote))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__453146,map__453146__$1,remote){
return (function() {
var ui$core$blockchain_send_$_state_machine__40145__auto__ = null;
var ui$core$blockchain_send_$_state_machine__40145__auto____0 = (function (){
var statearr_453160 = [null,null,null,null,null,null,null];
(statearr_453160[(0)] = ui$core$blockchain_send_$_state_machine__40145__auto__);

(statearr_453160[(1)] = (1));

return statearr_453160;
});
var ui$core$blockchain_send_$_state_machine__40145__auto____1 = (function (state_453155){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_453155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e453161){if((e453161 instanceof Object)){
var ex__40148__auto__ = e453161;
var statearr_453162_453164 = state_453155;
(statearr_453162_453164[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e453161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__453165 = state_453155;
state_453155 = G__453165;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$blockchain_send_$_state_machine__40145__auto__ = function(state_453155){
switch(arguments.length){
case 0:
return ui$core$blockchain_send_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$blockchain_send_$_state_machine__40145__auto____1.call(this,state_453155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$blockchain_send_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$blockchain_send_$_state_machine__40145__auto____0;
ui$core$blockchain_send_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$blockchain_send_$_state_machine__40145__auto____1;
return ui$core$blockchain_send_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__453146,map__453146__$1,remote))
})();
var state__40169__auto__ = (function (){var statearr_453163 = f__40168__auto__.call(null);
(statearr_453163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_453163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__453146,map__453146__$1,remote))
);

return c__40167__auto__;
});
ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),ui.core.blockchain_send,new cljs.core.Keyword(null,"merge","merge",-1804319409),ui.core.my_merge,new cljs.core.Keyword(null,"migrate","migrate",-207110743),ui.core.migrate,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),ui.core.my_merge_tree,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
om.next.add_root_BANG_.call(null,ui.core.reconciler,ui.core.Root,goog.dom.getElement("app"));
ui.core.my_toaster = blueprint_cljs.core.toaster.call(null);

//# sourceMappingURL=core.js.map?rel=1488325272254