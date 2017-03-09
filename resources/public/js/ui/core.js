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
ui.core.brain_vertices = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__506497){
var vec__506498 = p__506497;
var x = cljs.core.nth.call(null,vec__506498,(0),null);
var y = cljs.core.nth.call(null,vec__506498,(1),null);
var z = cljs.core.nth.call(null,vec__506498,(2),null);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,(y - 0.01),z],null));
}),cljs.core.concat.call(null,cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))),cljs.core.partition.call(null,(3),cljs.core.get_in.call(null,ui.brain.brain_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometries","geometries",-1679297218),(1),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"vertices","vertices",2008905731)], null))))));
ui.core.brain_faces = cljs.core.map.call(null,(function (p__506501){
var vec__506502 = p__506501;
var a = cljs.core.nth.call(null,vec__506502,(0),null);
var b = cljs.core.nth.call(null,vec__506502,(1),null);
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
var G__506505 = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
s = G__506505;
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

var x506510_506530 = ui.core.Item.prototype;
x506510_506530.componentWillUpdate = ((function (x506510_506530){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___506531 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___506532 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___506531,next_ident__40467__auto___506532)){
var idxr__40468__auto___506533 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___506533 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___506533),((function (idxr__40468__auto___506533,ident__40466__auto___506531,next_ident__40467__auto___506532,this__40462__auto__,x506510_506530){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___506531], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___506532], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___506533,ident__40466__auto___506531,next_ident__40467__auto___506532,this__40462__auto__,x506510_506530))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x506510_506530))
;

x506510_506530.shouldComponentUpdate = ((function (x506510_506530){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__506512 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__506512);
} else {
return G__506512;
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
});})(x506510_506530))
;

x506510_506530.componentWillUnmount = ((function (x506510_506530){
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
});})(x506510_506530))
;

x506510_506530.componentDidUpdate = ((function (x506510_506530){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x506510_506530))
;

x506510_506530.isMounted = ((function (x506510_506530){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x506510_506530))
;

x506510_506530.componentWillMount = ((function (x506510_506530){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x506510_506530))
;

x506510_506530.initLocalState = ((function (x506510_506530){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj506514 = {"omcljs$state":ret__40440__auto__};
return obj506514;
});})(x506510_506530))
;

x506510_506530.render = ((function (x506510_506530){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_506515 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_506516 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_506517 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_506518 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_506519 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__506520 = om.next.props.call(null,this$);
var map__506520__$1 = ((((!((map__506520 == null)))?((((map__506520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506520):map__506520);
var id = cljs.core.get.call(null,map__506520__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var description = cljs.core.get.call(null,map__506520__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
var votes = cljs.core.get.call(null,map__506520__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var user = cljs.core.get.call(null,map__506520__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__506521 = user;
var map__506521__$1 = ((((!((map__506521 == null)))?((((map__506521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506521):map__506521);
var stake = cljs.core.get.call(null,map__506521__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var has_stake = (stake > (0));
var map__506522 = om.next.get_state.call(null,this$);
var map__506522__$1 = ((((!((map__506522 == null)))?((((map__506522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506522):map__506522);
var dialog = cljs.core.get.call(null,map__506522__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__506523 = dialog;
var map__506523__$1 = ((((!((map__506523 == null)))?((((map__506523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506523):map__506523);
var direction = cljs.core.get.call(null,map__506523__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": "5px", "paddingBottom": "5px", "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),(((direction === (0)))?"Vote down":"Vote Up"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,hide_dialog,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530){
return (function (e){
return hide_dialog.call(null);
});})(map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,hide_dialog,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,hide_dialog,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("item","vote","item/vote",-842849665,null)),(function (){var x__35316__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","items","etherean/items",165918606)))))));
});})(map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,hide_dialog,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530))
], null),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can vote up ",React.DOM.i(null,"one item")," in this list per day, as well as vote down ",React.DOM.i(null,"one item")," in this list per day. These votes will be remembered and automatically applied on subsequent days, until you change your choices (or until your up/down choices fall from the front page) "],null)))),React.DOM.p(null,"So... is this an item currently on the mind of ethereans?")),(function (){var vote_button = ((function (map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,hide_dialog,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530){
return (function (direction__$1,activated){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,hide_dialog,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530){
return (function (e){
if(has_stake){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),(0),new cljs.core.Keyword(null,"up","up",-269712113),(1)], null).call(null,direction__$1)], null));
} else {
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You need to deposit some stake first before voting on items. Please go to the \"Voting Stake\" tab first."}));
}
});})(map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,hide_dialog,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530))
], null));
});})(map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,hide_dialog,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(votes)?ui.core.format_vote_number.call(null,(((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))))):"---")],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false)],null))));
})(),(function (){var item_body = ((function (map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,hide_dialog,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530){
return (function (desc,detail){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__506520,map__506520__$1,id,description,votes,user,map__506521,map__506521__$1,stake,has_stake,map__506522,map__506522__$1,dialog,map__506523,map__506523__$1,direction,hide_dialog,_STAR_reconciler_STAR_506515,_STAR_depth_STAR_506516,_STAR_shared_STAR_506517,_STAR_instrument_STAR_506518,_STAR_parent_STAR_506519,this$,this__40461__auto__,x506510_506530))
;
return item_body.call(null,description,(cljs.core.truth_(votes)?null:ui.core.mining_spinner.call(null)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_506519;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_506518;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_506517;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_506516;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_506515;
}});})(x506510_506530))
;


ui.core.Item.prototype.constructor = ui.core.Item;

ui.core.Item.prototype.constructor.displayName = "ui.core/Item";

ui.core.Item.prototype.om$isComponent = true;

var x506528_506534 = ui.core.Item;
/** @nocollapse */
x506528_506534.om$next$IQuery$ = true;

/** @nocollapse */
x506528_506534.om$next$IQuery$query$arity$1 = ((function (x506528_506534){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x506528_506534))
;


var x506529_506535 = ui.core.Item.prototype;

x506529_506535.om$next$IQuery$ = true;


x506529_506535.om$next$IQuery$query$arity$1 = ((function (x506529_506535){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x506529_506535))
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

var x506540_506554 = ui.core.Items.prototype;
x506540_506554.componentWillUpdate = ((function (x506540_506554){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___506555 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___506556 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___506555,next_ident__40467__auto___506556)){
var idxr__40468__auto___506557 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___506557 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___506557),((function (idxr__40468__auto___506557,ident__40466__auto___506555,next_ident__40467__auto___506556,this__40462__auto__,x506540_506554){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___506555], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___506556], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___506557,ident__40466__auto___506555,next_ident__40467__auto___506556,this__40462__auto__,x506540_506554))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x506540_506554))
;

x506540_506554.shouldComponentUpdate = ((function (x506540_506554){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__506542 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__506542);
} else {
return G__506542;
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
});})(x506540_506554))
;

x506540_506554.componentWillUnmount = ((function (x506540_506554){
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
});})(x506540_506554))
;

x506540_506554.componentDidUpdate = ((function (x506540_506554){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x506540_506554))
;

x506540_506554.isMounted = ((function (x506540_506554){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x506540_506554))
;

x506540_506554.componentWillMount = ((function (x506540_506554){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x506540_506554))
;

x506540_506554.render = ((function (x506540_506554){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_506543 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_506544 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_506545 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_506546 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_506547 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.9})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__35244__auto__ = ((function (_STAR_reconciler_STAR_506543,_STAR_depth_STAR_506544,_STAR_shared_STAR_506545,_STAR_instrument_STAR_506546,_STAR_parent_STAR_506547,this$,this__40461__auto__,x506540_506554){
return (function ui$core$iter__506548(s__506549){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_506543,_STAR_depth_STAR_506544,_STAR_shared_STAR_506545,_STAR_instrument_STAR_506546,_STAR_parent_STAR_506547,this$,this__40461__auto__,x506540_506554){
return (function (){
var s__506549__$1 = s__506549;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__506549__$1);
if(temp__6728__auto__){
var s__506549__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__506549__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__506549__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__506551 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__506550 = (0);
while(true){
if((i__506550 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__506550);
cljs.core.chunk_append.call(null,b__506551,ui.core.item_component.call(null,item));

var G__506558 = (i__506550 + (1));
i__506550 = G__506558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506551),ui$core$iter__506548.call(null,cljs.core.chunk_rest.call(null,s__506549__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506551),null);
}
} else {
var item = cljs.core.first.call(null,s__506549__$2);
return cljs.core.cons.call(null,ui.core.item_component.call(null,item),ui$core$iter__506548.call(null,cljs.core.rest.call(null,s__506549__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_506543,_STAR_depth_STAR_506544,_STAR_shared_STAR_506545,_STAR_instrument_STAR_506546,_STAR_parent_STAR_506547,this$,this__40461__auto__,x506540_506554))
,null,null));
});})(_STAR_reconciler_STAR_506543,_STAR_depth_STAR_506544,_STAR_shared_STAR_506545,_STAR_instrument_STAR_506546,_STAR_parent_STAR_506547,this$,this__40461__auto__,x506540_506554))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("etherean","items","etherean/items",165918606).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})()],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_506547;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_506546;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_506545;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_506544;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_506543;
}});})(x506540_506554))
;


ui.core.Items.prototype.constructor = ui.core.Items;

ui.core.Items.prototype.constructor.displayName = "ui.core/Items";

ui.core.Items.prototype.om$isComponent = true;

var x506552_506559 = ui.core.Items;
/** @nocollapse */
x506552_506559.om$next$IQuery$ = true;

/** @nocollapse */
x506552_506559.om$next$IQuery$query$arity$1 = ((function (x506552_506559){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x506552_506559))
;


var x506553_506560 = ui.core.Items.prototype;

x506553_506560.om$next$IQuery$ = true;


x506553_506560.om$next$IQuery$query$arity$1 = ((function (x506553_506560){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),om.next.get_query.call(null,ui.core.Item)], null)], null);
});})(x506553_506560))
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

var x506565_506585 = ui.core.Proposal.prototype;
x506565_506585.componentWillUpdate = ((function (x506565_506585){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___506586 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___506587 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___506586,next_ident__40467__auto___506587)){
var idxr__40468__auto___506588 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___506588 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___506588),((function (idxr__40468__auto___506588,ident__40466__auto___506586,next_ident__40467__auto___506587,this__40462__auto__,x506565_506585){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___506586], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___506587], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___506588,ident__40466__auto___506586,next_ident__40467__auto___506587,this__40462__auto__,x506565_506585))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x506565_506585))
;

x506565_506585.shouldComponentUpdate = ((function (x506565_506585){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__506567 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__506567);
} else {
return G__506567;
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
});})(x506565_506585))
;

x506565_506585.componentWillUnmount = ((function (x506565_506585){
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
});})(x506565_506585))
;

x506565_506585.componentDidUpdate = ((function (x506565_506585){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x506565_506585))
;

x506565_506585.isMounted = ((function (x506565_506585){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x506565_506585))
;

x506565_506585.componentWillMount = ((function (x506565_506585){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x506565_506585))
;

x506565_506585.initLocalState = ((function (x506565_506585){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),"",new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"dialog","dialog",1415150135),false], null);
var obj506569 = {"omcljs$state":ret__40440__auto__};
return obj506569;
});})(x506565_506585))
;

x506565_506585.render = ((function (x506565_506585){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_506570 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_506571 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_506572 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_506573 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_506574 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__506575 = om.next.props.call(null,this$);
var map__506575__$1 = ((((!((map__506575 == null)))?((((map__506575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506575):map__506575);
var description = cljs.core.get.call(null,map__506575__$1,new cljs.core.Keyword("proposal","description","proposal/description",1644720226));
var id = cljs.core.get.call(null,map__506575__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var unsaved = cljs.core.get.call(null,map__506575__$1,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935));
var upvotes = cljs.core.get.call(null,map__506575__$1,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560));
var downvotes = cljs.core.get.call(null,map__506575__$1,new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132));
var user = cljs.core.get.call(null,map__506575__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__506576 = user;
var map__506576__$1 = ((((!((map__506576 == null)))?((((map__506576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506576):map__506576);
var can_vote_proposal = cljs.core.get.call(null,map__506576__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__506576__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var temporary = om.next.tempid_QMARK_.call(null,id);
var has_stake = (stake > (0));
var map__506577 = om.next.get_state.call(null,this$);
var map__506577__$1 = ((((!((map__506577 == null)))?((((map__506577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506577):map__506577);
var height = cljs.core.get.call(null,map__506577__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var dialog = cljs.core.get.call(null,map__506577__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__506578 = dialog;
var map__506578__$1 = ((((!((map__506578 == null)))?((((map__506578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506578):map__506578);
var direction = cljs.core.get.call(null,map__506578__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var hide_dialog = ((function (map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585))
;
return om_tools.dom.element.call(null,React.DOM.div,blueprint_cljs.core.alert.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523),"Cancel",new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941),((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113)))?"Vote Up":"Vote Down"),new cljs.core.Keyword(null,"intent","intent",-390846953),new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents),new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585){
return (function (e){
return hide_dialog.call(null);
});})(map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585))
,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585){
return (function (e){
hide_dialog.call(null);

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null)),(function (){var x__35316__auto__ = dialog;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444)))))));
});})(map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585))
], null),"You can vote on one proposal per day. Is this an item currently on the mind of ethereans, that deserves to be listed on the front page?"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(unsaved)?(0):(1))], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),ui.motion.spring.call(null,height)], null)], null),((function (map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585){
return (function (value){
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"paddingTop": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingBottom": om_tools.dom.format_opts.call(null,[cljs.core.str(((5) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str("px")].join('')), "paddingLeft": "0.3em", "overflow": "hidden", "marginBottom": "1em", "display": "flex"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var vote_button = ((function (map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585){
return (function (direction__$1,activated,disabled){
return blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("pt-minimal pt-icon-symbol-triangle-"),cljs.core.str(cljs.core.name.call(null,direction__$1)),cljs.core.str((cljs.core.truth_(activated)?" pt-intent-primary":null))].join(''),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585){
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
});})(map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585))
], null));
});})(map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585))
;
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group pt-vertical"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[vote_button.call(null,new cljs.core.Keyword(null,"up","up",-269712113),false,unsaved),cljs.core.apply.call(null,React.DOM.div,({"style": ({"textAlign": "center", "paddingTop": "0.15em", "margin": (0), "fontSize": "0.6em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(unsaved)?null:(cljs.core.truth_(upvotes)?ui.core.format_vote_number.call(null,(upvotes - downvotes)):"---"
))],null)))),vote_button.call(null,new cljs.core.Keyword(null,"down","down",1565245570),false,unsaved)],null))));
})(),(function (){var proposal_body = ((function (map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585){
return (function (desc,detail,disabled){
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "paddingLeft": "0.3em", "flexGrow": (1)}), "onClick": om_tools.dom.format_opts.call(null,((function (map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585){
return (function (){
if(cljs.core.truth_(disabled)){
return ui.core.my_toaster.show(({"intent": new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(blueprint_cljs.core.intents), "message": "You have not staked any funds yet. Please got to the \"Voting Stakes\" tab first."}));
} else {
return null;
}
});})(map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585))
)}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[desc,detail],null))));
});})(map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585))
;
if(cljs.core.truth_(unsaved)){
var temp_description = new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
var has_description = cljs.core.seq.call(null,temp_description);
var save_fn = ((function (temp_description,has_description,proposal_body,map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585){
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
});})(temp_description,has_description,proposal_body,map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585))
;
return proposal_body.call(null,blueprint_cljs.core.editable_text.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),((!(has_stake))?"... (Please deposit stake first to propose an item)":((cljs.core.not.call(null,can_vote_proposal))?"... (Today's proposal action already used up)":"... propose a new item!"
)),new cljs.core.Keyword(null,"value","value",305978217),temp_description,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(has_stake)) || (cljs.core.not.call(null,can_vote_proposal)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp_description,has_description,save_fn,proposal_body,map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585){
return (function (s){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"temp-description","temp-description",-1705447786),s);
});})(temp_description,has_description,save_fn,proposal_body,map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585))
], null)),((has_description)?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary pt-icon-plus pt-minimal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),save_fn], null),"Save"):null),!(has_stake));
} else {
return proposal_body.call(null,description,(((temporary) || (cljs.core.not.call(null,upvotes)))?ui.core.mining_spinner.call(null):null),false);
}
})()],null))));
});})(map__506575,map__506575__$1,description,id,unsaved,upvotes,downvotes,user,map__506576,map__506576__$1,can_vote_proposal,stake,temporary,has_stake,map__506577,map__506577__$1,height,dialog,map__506578,map__506578__$1,direction,hide_dialog,_STAR_reconciler_STAR_506570,_STAR_depth_STAR_506571,_STAR_shared_STAR_506572,_STAR_instrument_STAR_506573,_STAR_parent_STAR_506574,this$,this__40461__auto__,x506565_506585))
)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_506574;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_506573;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_506572;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_506571;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_506570;
}});})(x506565_506585))
;


ui.core.Proposal.prototype.constructor = ui.core.Proposal;

ui.core.Proposal.prototype.constructor.displayName = "ui.core/Proposal";

ui.core.Proposal.prototype.om$isComponent = true;

var x506583_506589 = ui.core.Proposal;
/** @nocollapse */
x506583_506589.om$next$IQuery$ = true;

/** @nocollapse */
x506583_506589.om$next$IQuery$query$arity$1 = ((function (x506583_506589){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x506583_506589))
;


var x506584_506590 = ui.core.Proposal.prototype;

x506584_506590.om$next$IQuery$ = true;


x506584_506590.om$next$IQuery$query$arity$1 = ((function (x506584_506590){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.Keyword("user","stake","user/stake",-1493851572)], null)], null)], null);
});})(x506584_506590))
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

var x506595_506609 = ui.core.Proposals.prototype;
x506595_506609.componentWillUpdate = ((function (x506595_506609){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___506610 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___506611 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___506610,next_ident__40467__auto___506611)){
var idxr__40468__auto___506612 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___506612 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___506612),((function (idxr__40468__auto___506612,ident__40466__auto___506610,next_ident__40467__auto___506611,this__40462__auto__,x506595_506609){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___506610], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___506611], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___506612,ident__40466__auto___506610,next_ident__40467__auto___506611,this__40462__auto__,x506595_506609))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x506595_506609))
;

x506595_506609.shouldComponentUpdate = ((function (x506595_506609){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__506597 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__506597);
} else {
return G__506597;
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
});})(x506595_506609))
;

x506595_506609.componentWillUnmount = ((function (x506595_506609){
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
});})(x506595_506609))
;

x506595_506609.componentDidUpdate = ((function (x506595_506609){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x506595_506609))
;

x506595_506609.isMounted = ((function (x506595_506609){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x506595_506609))
;

x506595_506609.componentWillMount = ((function (x506595_506609){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x506595_506609))
;

x506595_506609.render = ((function (x506595_506609){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_506598 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_506599 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_506600 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_506601 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_506602 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{return om_tools.dom.element.call(null,React.DOM.div,(function (){var iter__35244__auto__ = ((function (_STAR_reconciler_STAR_506598,_STAR_depth_STAR_506599,_STAR_shared_STAR_506600,_STAR_instrument_STAR_506601,_STAR_parent_STAR_506602,this$,this__40461__auto__,x506595_506609){
return (function ui$core$iter__506603(s__506604){
return (new cljs.core.LazySeq(null,((function (_STAR_reconciler_STAR_506598,_STAR_depth_STAR_506599,_STAR_shared_STAR_506600,_STAR_instrument_STAR_506601,_STAR_parent_STAR_506602,this$,this__40461__auto__,x506595_506609){
return (function (){
var s__506604__$1 = s__506604;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__506604__$1);
if(temp__6728__auto__){
var s__506604__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__506604__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__506604__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__506606 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__506605 = (0);
while(true){
if((i__506605 < size__35243__auto__)){
var proposal = cljs.core._nth.call(null,c__35242__auto__,i__506605);
cljs.core.chunk_append.call(null,b__506606,ui.core.proposal_component.call(null,proposal));

var G__506613 = (i__506605 + (1));
i__506605 = G__506613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506606),ui$core$iter__506603.call(null,cljs.core.chunk_rest.call(null,s__506604__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506606),null);
}
} else {
var proposal = cljs.core.first.call(null,s__506604__$2);
return cljs.core.cons.call(null,ui.core.proposal_component.call(null,proposal),ui$core$iter__506603.call(null,cljs.core.rest.call(null,s__506604__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_reconciler_STAR_506598,_STAR_depth_STAR_506599,_STAR_shared_STAR_506600,_STAR_instrument_STAR_506601,_STAR_parent_STAR_506602,this$,this__40461__auto__,x506595_506609))
,null,null));
});})(_STAR_reconciler_STAR_506598,_STAR_depth_STAR_506599,_STAR_shared_STAR_506600,_STAR_instrument_STAR_506601,_STAR_parent_STAR_506602,this$,this__40461__auto__,x506595_506609))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})(),cljs.core.PersistentVector.EMPTY);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_506602;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_506601;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_506600;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_506599;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_506598;
}});})(x506595_506609))
;


ui.core.Proposals.prototype.constructor = ui.core.Proposals;

ui.core.Proposals.prototype.constructor.displayName = "ui.core/Proposals";

ui.core.Proposals.prototype.om$isComponent = true;

var x506607_506614 = ui.core.Proposals;
/** @nocollapse */
x506607_506614.om$next$IQuery$ = true;

/** @nocollapse */
x506607_506614.om$next$IQuery$query$arity$1 = ((function (x506607_506614){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x506607_506614))
;


var x506608_506615 = ui.core.Proposals.prototype;

x506608_506615.om$next$IQuery$ = true;


x506608_506615.om$next$IQuery$query$arity$1 = ((function (x506608_506615){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),om.next.get_query.call(null,ui.core.Proposal)], null)], null);
});})(x506608_506615))
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

var x506620_506632 = ui.core.Stake.prototype;
x506620_506632.componentWillUpdate = ((function (x506620_506632){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___506633 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___506634 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___506633,next_ident__40467__auto___506634)){
var idxr__40468__auto___506635 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___506635 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___506635),((function (idxr__40468__auto___506635,ident__40466__auto___506633,next_ident__40467__auto___506634,this__40462__auto__,x506620_506632){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___506633], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___506634], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___506635,ident__40466__auto___506633,next_ident__40467__auto___506634,this__40462__auto__,x506620_506632))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x506620_506632))
;

x506620_506632.shouldComponentUpdate = ((function (x506620_506632){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__506622 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__506622);
} else {
return G__506622;
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
});})(x506620_506632))
;

x506620_506632.componentWillUnmount = ((function (x506620_506632){
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
});})(x506620_506632))
;

x506620_506632.componentDidUpdate = ((function (x506620_506632){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x506620_506632))
;

x506620_506632.isMounted = ((function (x506620_506632){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x506620_506632))
;

x506620_506632.componentWillMount = ((function (x506620_506632){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x506620_506632))
;

x506620_506632.render = ((function (x506620_506632){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_506623 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_506624 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_506625 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_506626 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_506627 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__506628 = om.next.props.call(null,this$);
var map__506628__$1 = ((((!((map__506628 == null)))?((((map__506628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506628):map__506628);
var id = cljs.core.get.call(null,map__506628__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var value = cljs.core.get.call(null,map__506628__$1,new cljs.core.Keyword("stake","value","stake/value",466231031));
return om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,id,cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,value,cljs.core.PersistentVector.EMPTY)],null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_506627;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_506626;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_506625;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_506624;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_506623;
}});})(x506620_506632))
;


ui.core.Stake.prototype.constructor = ui.core.Stake;

ui.core.Stake.prototype.constructor.displayName = "ui.core/Stake";

ui.core.Stake.prototype.om$isComponent = true;

var x506630_506636 = ui.core.Stake;
/** @nocollapse */
x506630_506636.om$next$IQuery$ = true;

/** @nocollapse */
x506630_506636.om$next$IQuery$query$arity$1 = ((function (x506630_506636){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x506630_506636))
;


var x506631_506637 = ui.core.Stake.prototype;

x506631_506637.om$next$IQuery$ = true;


x506631_506637.om$next$IQuery$query$arity$1 = ((function (x506631_506637){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)], null);
});})(x506631_506637))
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

var x506642_506662 = ui.core.Stakes.prototype;
x506642_506662.componentWillUpdate = ((function (x506642_506662){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___506663 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___506664 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___506663,next_ident__40467__auto___506664)){
var idxr__40468__auto___506665 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___506665 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___506665),((function (idxr__40468__auto___506665,ident__40466__auto___506663,next_ident__40467__auto___506664,this__40462__auto__,x506642_506662){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___506663], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___506664], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___506665,ident__40466__auto___506663,next_ident__40467__auto___506664,this__40462__auto__,x506642_506662))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x506642_506662))
;

x506642_506662.shouldComponentUpdate = ((function (x506642_506662){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__506644 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__506644);
} else {
return G__506644;
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
});})(x506642_506662))
;

x506642_506662.componentWillUnmount = ((function (x506642_506662){
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
});})(x506642_506662))
;

x506642_506662.componentDidUpdate = ((function (x506642_506662){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x506642_506662))
;

x506642_506662.isMounted = ((function (x506642_506662){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x506642_506662))
;

x506642_506662.componentWillMount = ((function (x506642_506662){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x506642_506662))
;

x506642_506662.initLocalState = ((function (x506642_506662){
return (function (){
var this$ = this;
var ret__40440__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var obj506646 = {"omcljs$state":ret__40440__auto__};
return obj506646;
});})(x506642_506662))
;

x506642_506662.render = ((function (x506642_506662){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_506647 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_506648 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_506649 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_506650 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_506651 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__506652 = om.next.props.call(null,this$);
var map__506652__$1 = ((((!((map__506652 == null)))?((((map__506652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506652):map__506652);
var stakes = cljs.core.get.call(null,map__506652__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__506652__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var map__506653 = user;
var map__506653__$1 = ((((!((map__506653 == null)))?((((map__506653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506653):map__506653);
var stake = cljs.core.get.call(null,map__506653__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
var address = cljs.core.get.call(null,map__506653__$1,new cljs.core.Keyword("user","address","user/address",573600859));
var balance = cljs.core.get.call(null,map__506653__$1,new cljs.core.Keyword("user","balance","user/balance",422509480));
return cljs.core.apply.call(null,React.DOM.div,({"style": ({"opacity": 0.8})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Current Stake"),((cljs.core._EQ_.call(null,stake,new cljs.core.Keyword(null,"mining","mining",-2136229325)))?ui.core.mining_spinner.call(null):cljs.core.apply.call(null,React.DOM.h3,({"style": ({"color": "#2b95d6"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[stake," ETH"],null))))),cljs.core.apply.call(null,React.DOM.span,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["(associated with account ",ui.core.format_address.call(null,address),")"],null)))),(((stake === (0)))?React.DOM.div(({"className": "pt-callout pt-icon-info-sign", "style": ({"marginTop": "0.5rem"})}),"You do not currently have any voting stake for EthereanMind. To be able to vote on proposals and top 10 items, you need to deposit some fully-refundable coins into the EthereanMind staking contract."):null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-button-group", "style": ({"marginTop": "0.5rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__506652,map__506652__$1,stakes,user,map__506653,map__506653__$1,stake,address,balance,_STAR_reconciler_STAR_506647,_STAR_depth_STAR_506648,_STAR_shared_STAR_506649,_STAR_instrument_STAR_506650,_STAR_parent_STAR_506651,this$,this__40461__auto__,x506642_506662){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"value","value",305978217),""], null));
});})(map__506652,map__506652__$1,stakes,user,map__506653,map__506653__$1,stake,address,balance,_STAR_reconciler_STAR_506647,_STAR_depth_STAR_506648,_STAR_shared_STAR_506649,_STAR_instrument_STAR_506650,_STAR_parent_STAR_506651,this$,this__40461__auto__,x506642_506662))
], null),"Deposit Stake"),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__506652,map__506652__$1,stakes,user,map__506653,map__506653__$1,stake,address,balance,_STAR_reconciler_STAR_506647,_STAR_depth_STAR_506648,_STAR_shared_STAR_506649,_STAR_instrument_STAR_506650,_STAR_parent_STAR_506651,this$,this__40461__auto__,x506642_506662){
return (function (e){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"withdraw","withdraw",1469652053)], null));
});})(map__506652,map__506652__$1,stakes,user,map__506653,map__506653__$1,stake,address,balance,_STAR_reconciler_STAR_506647,_STAR_depth_STAR_506648,_STAR_shared_STAR_506649,_STAR_instrument_STAR_506650,_STAR_parent_STAR_506651,this$,this__40461__auto__,x506642_506662))
], null),"Withdraw Stake")],null))))],null)))),(function (){var map__506656 = om.next.get_state.call(null,this$);
var map__506656__$1 = ((((!((map__506656 == null)))?((((map__506656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506656):map__506656);
var dialog = cljs.core.get.call(null,map__506656__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
var map__506657 = dialog;
var map__506657__$1 = ((((!((map__506657 == null)))?((((map__506657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506657):map__506657);
var type = cljs.core.get.call(null,map__506657__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__506657__$1,new cljs.core.Keyword(null,"value","value",305978217));
var value_status = ((cljs.core._EQ_.call(null,value,""))?new cljs.core.Keyword(null,"missing","missing",362507769):(((value <= balance))?new cljs.core.Keyword(null,"good","good",511701169):new cljs.core.Keyword(null,"bad","bad",1127186645)
));
var close_dialog = ((function (value_status,map__506656,map__506656__$1,dialog,map__506657,map__506657__$1,type,value,map__506652,map__506652__$1,stakes,user,map__506653,map__506653__$1,stake,address,balance,_STAR_reconciler_STAR_506647,_STAR_depth_STAR_506648,_STAR_shared_STAR_506649,_STAR_instrument_STAR_506650,_STAR_parent_STAR_506651,this$,this__40461__auto__,x506642_506662){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
});})(value_status,map__506656,map__506656__$1,dialog,map__506657,map__506657__$1,type,value,map__506652,map__506652__$1,stakes,user,map__506653,map__506653__$1,stake,address,balance,_STAR_reconciler_STAR_506647,_STAR_depth_STAR_506648,_STAR_shared_STAR_506649,_STAR_instrument_STAR_506650,_STAR_parent_STAR_506651,this$,this__40461__auto__,x506642_506662))
;
return blueprint_cljs.core.dialog.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),dialog,new cljs.core.Keyword(null,"on-close","on-close",-761178394),close_dialog,new cljs.core.Keyword(null,"title","title",636505583),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit Stake":"Withdraw Stake")], null),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-body"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,"In order to vote on ethereanmind you need to place a refundable deposit of ether. You will be able to start voting immediately after depositing ether, but you need to wait a month before you can withdraw your deposit again."),om_tools.dom.element.call(null,React.DOM.p,React.DOM.b(null,"The rules of the smart contract assure that no one else can withdraw your money and that you will receive back 100% of your deposit."),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,["Balance available: ",balance," Ether"],null)))),blueprint_cljs.core.input_group.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Deposit Amount (Ether)",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"right-element","right-element",-375920256),((cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"missing","missing",362507769)))?blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)))?"pt-icon-tick pt-intent-success":"pt-icon-cross pt-intent-danger")], null)):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value_status,close_dialog,map__506656,map__506656__$1,dialog,map__506657,map__506657__$1,type,value,map__506652,map__506652__$1,stakes,user,map__506653,map__506653__$1,stake,address,balance,_STAR_reconciler_STAR_506647,_STAR_depth_STAR_506648,_STAR_shared_STAR_506649,_STAR_instrument_STAR_506650,_STAR_parent_STAR_506651,this$,this__40461__auto__,x506642_506662){
return (function (e){
var value_new = e.target.value;
if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]*\.?[0-9]*/,value_new))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value_new);
} else {
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"value","value",305978217)], null),value);
}

return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noise","noise",-994696820)], null),cljs.core.rand_int.call(null,(1000000)));
});})(value_status,close_dialog,map__506656,map__506656__$1,dialog,map__506657,map__506657__$1,type,value,map__506652,map__506652__$1,stakes,user,map__506653,map__506653__$1,stake,address,balance,_STAR_reconciler_STAR_506647,_STAR_depth_STAR_506648,_STAR_shared_STAR_506649,_STAR_instrument_STAR_506650,_STAR_parent_STAR_506651,this$,this__40461__auto__,x506642_506662))
], null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You can now withdraw all of your stake (Currently ",stake," Ether) back into your regular ethereum account at [",ui.core.format_address.call(null,address),"]. At that point, you will no longer be able to participate in voting- You'll need to deposit new funds to vote again."],null))))], null))],null)))),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dialog-footer-actions"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.call(null,value_status,new cljs.core.Keyword(null,"good","good",511701169)),new cljs.core.Keyword(null,"class","class",-2030961996),"pt-intent-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value_status,close_dialog,map__506656,map__506656__$1,dialog,map__506657,map__506657__$1,type,value,map__506652,map__506652__$1,stakes,user,map__506653,map__506653__$1,stake,address,balance,_STAR_reconciler_STAR_506647,_STAR_depth_STAR_506648,_STAR_shared_STAR_506649,_STAR_instrument_STAR_506650,_STAR_parent_STAR_506651,this$,this__40461__auto__,x506642_506662){
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
});})(value_status,close_dialog,map__506656,map__506656__$1,dialog,map__506657,map__506657__$1,type,value,map__506652,map__506652__$1,stakes,user,map__506653,map__506653__$1,stake,address,balance,_STAR_reconciler_STAR_506647,_STAR_depth_STAR_506648,_STAR_shared_STAR_506649,_STAR_instrument_STAR_506650,_STAR_parent_STAR_506651,this$,this__40461__auto__,x506642_506662))
], null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"deposit","deposit",-1686435851)))?"Deposit":"Withdraw")),blueprint_cljs.core.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_dialog], null),"Cancel")],null))))],null)))));
})(),cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-interactive pt-elevation-1", "style": ({"marginTop": "1rem", "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h3(null,"Staking Statistics"),React.DOM.div(null,"If you're curious about who else is using this dapp, and are using an ethereum data source that can handle large queres, click this button:"),cljs.core.apply.call(null,React.DOM.p,({"style": ({"margin": "1em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.i(null,"(Coming Soon...)")],null))))],null))))],null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_506651;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_506650;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_506649;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_506648;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_506647;
}});})(x506642_506662))
;


ui.core.Stakes.prototype.constructor = ui.core.Stakes;

ui.core.Stakes.prototype.constructor.displayName = "ui.core/Stakes";

ui.core.Stakes.prototype.om$isComponent = true;

var x506660_506666 = ui.core.Stakes;
/** @nocollapse */
x506660_506666.om$next$IQuery$ = true;

/** @nocollapse */
x506660_506666.om$next$IQuery$query$arity$1 = ((function (x506660_506666){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x506660_506666))
;


var x506661_506667 = ui.core.Stakes.prototype;

x506661_506667.om$next$IQuery$ = true;


x506661_506667.om$next$IQuery$query$arity$1 = ((function (x506661_506667){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","address","user/address",573600859),new cljs.core.Keyword("user","balance","user/balance",422509480)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),om.next.get_query.call(null,ui.core.Stake)], null)], null);
});})(x506661_506667))
;


ui.core.Stakes.cljs$lang$type = true;

ui.core.Stakes.cljs$lang$ctorStr = "ui.core/Stakes";

ui.core.Stakes.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Stakes");
});
ui.core.stakes_component = om.next.factory.call(null,ui.core.Stakes);
ui.core.canvas_resolution = (800);
ui.core.brain_prerender = (function ui$core$brain_prerender(sections){
return new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__506682,item){
var map__506683 = p__506682;
var map__506683__$1 = ((((!((map__506683 == null)))?((((map__506683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506683):map__506683);
var acc = map__506683__$1;
var vertices = cljs.core.get.call(null,map__506683__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var vertex_colors = cljs.core.get.call(null,map__506683__$1,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377));
var index = cljs.core.get.call(null,map__506683__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.call(null,map__506683__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var map__506685 = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"length","length",588987862),(function (){var iter__35244__auto__ = ((function (map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__506686(s__506687){
return (new cljs.core.LazySeq(null,((function (map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__506687__$1 = s__506687;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__506687__$1);
if(temp__6728__auto__){
var s__506687__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__506687__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__506687__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__506689 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__506688 = (0);
while(true){
if((i__506688 < size__35243__auto__)){
var coord = cljs.core._nth.call(null,c__35242__auto__,i__506688);
cljs.core.chunk_append.call(null,b__506689,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (i__506688,region_size,coord,c__35242__auto__,size__35243__auto__,b__506689,s__506687__$2,temp__6728__auto__,map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__506668_SHARP_){
return cljs.core.nth.call(null,p1__506668_SHARP_,coord);
});})(i__506688,region_size,coord,c__35242__auto__,size__35243__auto__,b__506689,s__506687__$2,temp__6728__auto__,map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})());

var G__506695 = (i__506688 + (1));
i__506688 = G__506695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506689),ui$core$brain_prerender_$_iter__506686.call(null,cljs.core.chunk_rest.call(null,s__506687__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506689),null);
}
} else {
var coord = cljs.core.first.call(null,s__506687__$2);
return cljs.core.cons.call(null,(function (){var region_size = ((cljs.core.count.call(null,vertices) * (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item) / total)) | (0));
var vertices__$1 = cljs.core.sort_by.call(null,((function (region_size,coord,s__506687__$2,temp__6728__auto__,map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total){
return (function (p1__506668_SHARP_){
return cljs.core.nth.call(null,p1__506668_SHARP_,coord);
});})(region_size,coord,s__506687__$2,temp__6728__auto__,map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total))
,vertices);
var cur_vertices = cljs.core.take.call(null,region_size,vertices__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716),cur_vertices,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774),cljs.core.drop.call(null,region_size,vertices__$1),new cljs.core.Keyword(null,"length","length",588987862),(- Math.abs((cljs.core.nth.call(null,cljs.core.first.call(null,cur_vertices),coord) - cljs.core.nth.call(null,cljs.core.last.call(null,cur_vertices),coord))))], null);
})(),ui$core$brain_prerender_$_iter__506686.call(null,cljs.core.rest.call(null,s__506687__$2)));
}
} else {
return null;
}
break;
}
});})(map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})()));
var map__506685__$1 = ((((!((map__506685 == null)))?((((map__506685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506685):map__506685);
var cur_vertices = cljs.core.get.call(null,map__506685__$1,new cljs.core.Keyword(null,"cur-vertices","cur-vertices",-1484853716));
var rest_vertices = cljs.core.get.call(null,map__506685__$1,new cljs.core.Keyword(null,"rest-vertices","rest-vertices",480429774));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),rest_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.into.call(null,vertex_colors,(function (){var iter__35244__auto__ = ((function (map__506685,map__506685__$1,cur_vertices,rest_vertices,map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total){
return (function ui$core$brain_prerender_$_iter__506691(s__506692){
return (new cljs.core.LazySeq(null,((function (map__506685,map__506685__$1,cur_vertices,rest_vertices,map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total){
return (function (){
var s__506692__$1 = s__506692;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__506692__$1);
if(temp__6728__auto__){
var s__506692__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__506692__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__506692__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__506694 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__506693 = (0);
while(true){
if((i__506693 < size__35243__auto__)){
var vertex = cljs.core._nth.call(null,c__35242__auto__,i__506693);
cljs.core.chunk_append.call(null,b__506694,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null));

var G__506696 = (i__506693 + (1));
i__506693 = G__506696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506694),ui$core$brain_prerender_$_iter__506691.call(null,cljs.core.chunk_rest.call(null,s__506692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506694),null);
}
} else {
var vertex = cljs.core.first.call(null,s__506692__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,index], null),ui$core$brain_prerender_$_iter__506691.call(null,cljs.core.rest.call(null,s__506692__$2)));
}
} else {
return null;
}
break;
}
});})(map__506685,map__506685__$1,cur_vertices,rest_vertices,map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total))
,null,null));
});})(map__506685,map__506685__$1,cur_vertices,rest_vertices,map__506683,map__506683__$1,acc,vertices,vertex_colors,index,total))
;
return iter__35244__auto__.call(null,cur_vertices);
})()),new cljs.core.Keyword(null,"index","index",-1531685915),(index + (1)),new cljs.core.Keyword(null,"total","total",1916810418),(total - new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))], null);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),ui.core.brain_vertices,new cljs.core.Keyword(null,"vertex-colors","vertex-colors",-1813116377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"size","size",1098693007),sections))], null),sections));
});
ui.core.render_graph = (function ui$core$render_graph(brain_faces,vertexes,vertex_colors){
var iter__35244__auto__ = (function ui$core$render_graph_$_iter__506729(s__506730){
return (new cljs.core.LazySeq(null,(function (){
var s__506730__$1 = s__506730;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__506730__$1);
if(temp__6728__auto__){
var s__506730__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__506730__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__506730__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__506732 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__506731 = (0);
while(true){
if((i__506731 < size__35243__auto__)){
var vec__506747 = cljs.core._nth.call(null,c__35242__auto__,i__506731);
var region = cljs.core.nth.call(null,vec__506747,(0),null);
var faces = cljs.core.nth.call(null,vec__506747,(1),null);
cljs.core.chunk_append.call(null,b__506732,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (i__506731,vec__506747,region,faces,c__35242__auto__,size__35243__auto__,b__506732,s__506730__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__506729_$_iter__506750(s__506751){
return (new cljs.core.LazySeq(null,((function (i__506731,vec__506747,region,faces,c__35242__auto__,size__35243__auto__,b__506732,s__506730__$2,temp__6728__auto__){
return (function (){
var s__506751__$1 = s__506751;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__506751__$1);
if(temp__6728__auto____$1){
var s__506751__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__506751__$2)){
var c__35242__auto____$1 = cljs.core.chunk_first.call(null,s__506751__$2);
var size__35243__auto____$1 = cljs.core.count.call(null,c__35242__auto____$1);
var b__506753 = cljs.core.chunk_buffer.call(null,size__35243__auto____$1);
if((function (){var i__506752 = (0);
while(true){
if((i__506752 < size__35243__auto____$1)){
var n = cljs.core._nth.call(null,c__35242__auto____$1,i__506752);
cljs.core.chunk_append.call(null,b__506753,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__506752,i__506731,n,c__35242__auto____$1,size__35243__auto____$1,b__506753,s__506751__$2,temp__6728__auto____$1,vec__506747,region,faces,c__35242__auto__,size__35243__auto__,b__506732,s__506730__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__506752,i__506731,n,c__35242__auto____$1,size__35243__auto____$1,b__506753,s__506751__$2,temp__6728__auto____$1,vec__506747,region,faces,c__35242__auto__,size__35243__auto__,b__506732,s__506730__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__506761 = (i__506752 + (1));
i__506752 = G__506761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506753),ui$core$render_graph_$_iter__506729_$_iter__506750.call(null,cljs.core.chunk_rest.call(null,s__506751__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506753),null);
}
} else {
var n = cljs.core.first.call(null,s__506751__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__506731,n,s__506751__$2,temp__6728__auto____$1,vec__506747,region,faces,c__35242__auto__,size__35243__auto__,b__506732,s__506730__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__506731,n,s__506751__$2,temp__6728__auto____$1,vec__506747,region,faces,c__35242__auto__,size__35243__auto__,b__506732,s__506730__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__506729_$_iter__506750.call(null,cljs.core.rest.call(null,s__506751__$2)));
}
} else {
return null;
}
break;
}
});})(i__506731,vec__506747,region,faces,c__35242__auto__,size__35243__auto__,b__506732,s__506730__$2,temp__6728__auto__))
,null,null));
});})(i__506731,vec__506747,region,faces,c__35242__auto__,size__35243__auto__,b__506732,s__506730__$2,temp__6728__auto__))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (i__506731,dist,max_dist,mult,centroid,vec__506747,region,faces,c__35242__auto__,size__35243__auto__,b__506732,s__506730__$2,temp__6728__auto__){
return (function (y){
var x__34723__auto__ = (function (){var x__34730__auto__ = 0.11;
var y__34731__auto__ = (y * 0.9);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})();
var y__34724__auto__ = -0.05;
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
});})(i__506731,dist,max_dist,mult,centroid,vec__506747,region,faces,c__35242__auto__,size__35243__auto__,b__506732,s__506730__$2,temp__6728__auto__))
);
})()], null);
})());

var G__506762 = (i__506731 + (1));
i__506731 = G__506762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506732),ui$core$render_graph_$_iter__506729.call(null,cljs.core.chunk_rest.call(null,s__506730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506732),null);
}
} else {
var vec__506754 = cljs.core.first.call(null,s__506730__$2);
var region = cljs.core.nth.call(null,vec__506754,(0),null);
var faces = cljs.core.nth.call(null,vec__506754,(1),null);
return cljs.core.cons.call(null,(function (){var centroid = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (vec__506754,region,faces,s__506730__$2,temp__6728__auto__){
return (function ui$core$render_graph_$_iter__506729_$_iter__506757(s__506758){
return (new cljs.core.LazySeq(null,((function (vec__506754,region,faces,s__506730__$2,temp__6728__auto__){
return (function (){
var s__506758__$1 = s__506758;
while(true){
var temp__6728__auto____$1 = cljs.core.seq.call(null,s__506758__$1);
if(temp__6728__auto____$1){
var s__506758__$2 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__506758__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__506758__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__506760 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__506759 = (0);
while(true){
if((i__506759 < size__35243__auto__)){
var n = cljs.core._nth.call(null,c__35242__auto__,i__506759);
cljs.core.chunk_append.call(null,b__506760,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__506759,n,c__35242__auto__,size__35243__auto__,b__506760,s__506758__$2,temp__6728__auto____$1,vec__506754,region,faces,s__506730__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(i__506759,n,c__35242__auto__,size__35243__auto__,b__506760,s__506758__$2,temp__6728__auto____$1,vec__506754,region,faces,s__506730__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)));

var G__506763 = (i__506759 + (1));
i__506759 = G__506763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506760),ui$core$render_graph_$_iter__506729_$_iter__506757.call(null,cljs.core.chunk_rest.call(null,s__506758__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506760),null);
}
} else {
var n = cljs.core.first.call(null,s__506758__$2);
return cljs.core.cons.call(null,(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (n,s__506758__$2,temp__6728__auto____$1,vec__506754,region,faces,s__506730__$2,temp__6728__auto__){
return (function (face){
return vertexes.call(null,cljs.core.first.call(null,face)).call(null,n);
});})(n,s__506758__$2,temp__6728__auto____$1,vec__506754,region,faces,s__506730__$2,temp__6728__auto__))
,faces)) / cljs.core.count.call(null,faces)),ui$core$render_graph_$_iter__506729_$_iter__506757.call(null,cljs.core.rest.call(null,s__506758__$2)));
}
} else {
return null;
}
break;
}
});})(vec__506754,region,faces,s__506730__$2,temp__6728__auto__))
,null,null));
});})(vec__506754,region,faces,s__506730__$2,temp__6728__auto__))
;
return iter__35244__auto__.call(null,cljs.core.range.call(null,(3)));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"region","region",270415120),region,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"centroid","centroid",-39626797),centroid,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var dist = Math.sqrt(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,centroid,centroid)));
var max_dist = 0.065;
var mult = (((dist < max_dist))?(1):(max_dist / dist));
return cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,1.7,mult),centroid)),(2),((function (dist,max_dist,mult,centroid,vec__506754,region,faces,s__506730__$2,temp__6728__auto__){
return (function (y){
var x__34723__auto__ = (function (){var x__34730__auto__ = 0.11;
var y__34731__auto__ = (y * 0.9);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})();
var y__34724__auto__ = -0.05;
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
});})(dist,max_dist,mult,centroid,vec__506754,region,faces,s__506730__$2,temp__6728__auto__))
);
})()], null);
})(),ui$core$render_graph_$_iter__506729.call(null,cljs.core.rest.call(null,s__506730__$2)));
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
ui.core.point__GT_screen = (function ui$core$point__GT_screen(canvas_resolution,rotation,p__506764){
var vec__506768 = p__506764;
var xx = cljs.core.nth.call(null,vec__506768,(0),null);
var yy = cljs.core.nth.call(null,vec__506768,(1),null);
var zz = cljs.core.nth.call(null,vec__506768,(2),null);
var vertex = vec__506768;
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
var G__506865 = ctx;
G__506865.beginPath();

G__506865.moveTo(vertices.call(null,a).call(null,(0)),vertices.call(null,a).call(null,(1)));

G__506865.lineTo(vertices.call(null,b).call(null,(0)),vertices.call(null,b).call(null,(1)));

G__506865.stroke();

return G__506865;
});})(starting_time,vertices))
;
var rgb = ((function (starting_time,vertices,line){
return (function (color,brightness,opaque){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (starting_time,vertices,line){
return (function ui$core$render_brain_$_iter__506866(s__506867){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line){
return (function (){
var s__506867__$1 = s__506867;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__506867__$1);
if(temp__6728__auto__){
var s__506867__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__506867__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__506867__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__506869 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__506868 = (0);
while(true){
if((i__506868 < size__35243__auto__)){
var c = cljs.core._nth.call(null,c__35242__auto__,i__506868);
cljs.core.chunk_append.call(null,b__506869,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34730__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34731__auto__ = (255);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})()) + (((1) - colored) * (255))) | (0));
})());

var G__506959 = (i__506868 + (1));
i__506868 = G__506959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506869),ui$core$render_brain_$_iter__506866.call(null,cljs.core.chunk_rest.call(null,s__506867__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506869),null);
}
} else {
var c = cljs.core.first.call(null,s__506867__$2);
return cljs.core.cons.call(null,(function (){var colored = new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state));
return (((colored * (function (){var x__34730__auto__ = (((50) + ((160) * c)) * (0.7 + brightness));
var y__34731__auto__ = (255);
return ((x__34730__auto__ < y__34731__auto__) ? x__34730__auto__ : y__34731__auto__);
})()) + (((1) - colored) * (255))) | (0));
})(),ui$core$render_brain_$_iter__506866.call(null,cljs.core.rest.call(null,s__506867__$2)));
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
return (function (p__506870){
var map__506871 = p__506870;
var map__506871__$1 = ((((!((map__506871 == null)))?((((map__506871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506871):map__506871);
var text = cljs.core.get.call(null,map__506871__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var color = cljs.core.get.call(null,map__506871__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var location = cljs.core.get.call(null,map__506871__$1,new cljs.core.Keyword(null,"location","location",1815599388));
if((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)) > (0))){
ctx.lineWidth = (4);

var vec__506873_506960 = location;
var x_506961 = cljs.core.nth.call(null,vec__506873_506960,(0),null);
var y_506962 = cljs.core.nth.call(null,vec__506873_506960,(1),null);
var z_506963 = cljs.core.nth.call(null,vec__506873_506960,(2),null);
ctx.strokeStyle = "#111A22";

ctx.fillStyle = rgb.call(null,color,((z_506963 * (2)) + (1)),true);

cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (vec__506873_506960,x_506961,y_506962,z_506963,map__506871,map__506871__$1,text,color,location,starting_time,vertices,line,rgb,set_color){
return (function (index,s){
var G__506876 = ctx;
G__506876.strokeText(s,x_506961,(y_506962 + (index * (15))));

G__506876.fillText(s,x_506961,(y_506962 + (index * (15))));

return G__506876;
});})(vec__506873_506960,x_506961,y_506962,z_506963,map__506871,map__506871__$1,text,color,location,starting_time,vertices,line,rgb,set_color))
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
return (function ui$core$render_brain_$_iter__506877(s__506878){
return (new cljs.core.LazySeq(null,((function (starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (){
var s__506878__$1 = s__506878;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__506878__$1);
if(temp__6728__auto__){
var s__506878__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__506878__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__506878__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__506880 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__506879 = (0);
while(true){
if((i__506879 < size__35243__auto__)){
var map__506885 = cljs.core._nth.call(null,c__35242__auto__,i__506879);
var map__506885__$1 = ((((!((map__506885 == null)))?((((map__506885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506885):map__506885);
var region = cljs.core.get.call(null,map__506885__$1,new cljs.core.Keyword(null,"region","region",270415120));
var centroid = cljs.core.get.call(null,map__506885__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__506885__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append.call(null,b__506880,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null));

var G__506964 = (i__506879 + (1));
i__506879 = G__506964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506880),ui$core$render_brain_$_iter__506877.call(null,cljs.core.chunk_rest.call(null,s__506878__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__506880),null);
}
} else {
var map__506887 = cljs.core.first.call(null,s__506878__$2);
var map__506887__$1 = ((((!((map__506887 == null)))?((((map__506887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506887):map__506887);
var region = cljs.core.get.call(null,map__506887__$1,new cljs.core.Keyword(null,"region","region",270415120));
var centroid = cljs.core.get.call(null,map__506887__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label = cljs.core.get.call(null,map__506887__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(sections.call(null,region)),new cljs.core.Keyword(null,"color","color",1011675173),ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region))),new cljs.core.Keyword(null,"location","location",1815599388),ui.core.point__GT_screen.call(null,ui.core.canvas_resolution,rotation,label)], null),ui$core$render_brain_$_iter__506877.call(null,cljs.core.rest.call(null,s__506878__$2)));
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
return iter__35244__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"region","region",270415120),render_graph));
})()):null);
var render_labels = ((function (labels,starting_time,vertices,line,rgb,set_color,render_text,sections){
return (function (from,to){
var seq__506889 = cljs.core.seq.call(null,labels);
var chunk__506890 = null;
var count__506891 = (0);
var i__506892 = (0);
while(true){
if((i__506892 < count__506891)){
var label = cljs.core._nth.call(null,chunk__506890,i__506892);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__506965 = seq__506889;
var G__506966 = chunk__506890;
var G__506967 = count__506891;
var G__506968 = (i__506892 + (1));
seq__506889 = G__506965;
chunk__506890 = G__506966;
count__506891 = G__506967;
i__506892 = G__506968;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__506889);
if(temp__6728__auto__){
var seq__506889__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__506889__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__506889__$1);
var G__506969 = cljs.core.chunk_rest.call(null,seq__506889__$1);
var G__506970 = c__35293__auto__;
var G__506971 = cljs.core.count.call(null,c__35293__auto__);
var G__506972 = (0);
seq__506889 = G__506969;
chunk__506890 = G__506970;
count__506891 = G__506971;
i__506892 = G__506972;
continue;
} else {
var label = cljs.core.first.call(null,seq__506889__$1);
if(((from < cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)))) && ((cljs.core.get_in.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),(2)], null)) < to))){
render_text.call(null,label);
} else {
}

var G__506973 = cljs.core.next.call(null,seq__506889__$1);
var G__506974 = null;
var G__506975 = (0);
var G__506976 = (0);
seq__506889 = G__506973;
chunk__506890 = G__506974;
count__506891 = G__506975;
i__506892 = G__506976;
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
var seq__506893 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),-0.3,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3,0.3,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,(1000),(2)], null)], null));
var chunk__506894 = null;
var count__506895 = (0);
var i__506896 = (0);
while(true){
if((i__506896 < count__506895)){
var vec__506897 = cljs.core._nth.call(null,chunk__506894,i__506896);
var begin = cljs.core.nth.call(null,vec__506897,(0),null);
var end = cljs.core.nth.call(null,vec__506897,(1),null);
var brightness = cljs.core.nth.call(null,vec__506897,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__506900_506977 = cljs.core.seq.call(null,render_graph);
var chunk__506901_506978 = null;
var count__506902_506979 = (0);
var i__506903_506980 = (0);
while(true){
if((i__506903_506980 < count__506902_506979)){
var map__506904_506981 = cljs.core._nth.call(null,chunk__506901_506978,i__506903_506980);
var map__506904_506982__$1 = ((((!((map__506904_506981 == null)))?((((map__506904_506981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506904_506981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506904_506981):map__506904_506981);
var region_506983 = cljs.core.get.call(null,map__506904_506982__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_506984 = cljs.core.get.call(null,map__506904_506982__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_506985 = cljs.core.get.call(null,map__506904_506982__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_506986 = cljs.core.get.call(null,map__506904_506982__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_506987 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_506983))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_506987,brightness);

var seq__506906_506988 = cljs.core.seq.call(null,faces_506984);
var chunk__506907_506989 = null;
var count__506908_506990 = (0);
var i__506909_506991 = (0);
while(true){
if((i__506909_506991 < count__506908_506990)){
var vec__506910_506992 = cljs.core._nth.call(null,chunk__506907_506989,i__506909_506991);
var a_506993 = cljs.core.nth.call(null,vec__506910_506992,(0),null);
var b_506994 = cljs.core.nth.call(null,vec__506910_506992,(1),null);
var c_506995 = cljs.core.nth.call(null,vec__506910_506992,(2),null);
var face_506996 = vec__506910_506992;
if(((begin < vertices.call(null,a_506993).call(null,(2)))) && ((vertices.call(null,a_506993).call(null,(2)) < end))){
line.call(null,a_506993,b_506994);
} else {
}

var G__506997 = seq__506906_506988;
var G__506998 = chunk__506907_506989;
var G__506999 = count__506908_506990;
var G__507000 = (i__506909_506991 + (1));
seq__506906_506988 = G__506997;
chunk__506907_506989 = G__506998;
count__506908_506990 = G__506999;
i__506909_506991 = G__507000;
continue;
} else {
var temp__6728__auto___507001 = cljs.core.seq.call(null,seq__506906_506988);
if(temp__6728__auto___507001){
var seq__506906_507002__$1 = temp__6728__auto___507001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__506906_507002__$1)){
var c__35293__auto___507003 = cljs.core.chunk_first.call(null,seq__506906_507002__$1);
var G__507004 = cljs.core.chunk_rest.call(null,seq__506906_507002__$1);
var G__507005 = c__35293__auto___507003;
var G__507006 = cljs.core.count.call(null,c__35293__auto___507003);
var G__507007 = (0);
seq__506906_506988 = G__507004;
chunk__506907_506989 = G__507005;
count__506908_506990 = G__507006;
i__506909_506991 = G__507007;
continue;
} else {
var vec__506913_507008 = cljs.core.first.call(null,seq__506906_507002__$1);
var a_507009 = cljs.core.nth.call(null,vec__506913_507008,(0),null);
var b_507010 = cljs.core.nth.call(null,vec__506913_507008,(1),null);
var c_507011 = cljs.core.nth.call(null,vec__506913_507008,(2),null);
var face_507012 = vec__506913_507008;
if(((begin < vertices.call(null,a_507009).call(null,(2)))) && ((vertices.call(null,a_507009).call(null,(2)) < end))){
line.call(null,a_507009,b_507010);
} else {
}

var G__507013 = cljs.core.next.call(null,seq__506906_507002__$1);
var G__507014 = null;
var G__507015 = (0);
var G__507016 = (0);
seq__506906_506988 = G__507013;
chunk__506907_506989 = G__507014;
count__506908_506990 = G__507015;
i__506909_506991 = G__507016;
continue;
}
} else {
}
}
break;
}

var G__507017 = seq__506900_506977;
var G__507018 = chunk__506901_506978;
var G__507019 = count__506902_506979;
var G__507020 = (i__506903_506980 + (1));
seq__506900_506977 = G__507017;
chunk__506901_506978 = G__507018;
count__506902_506979 = G__507019;
i__506903_506980 = G__507020;
continue;
} else {
var temp__6728__auto___507021 = cljs.core.seq.call(null,seq__506900_506977);
if(temp__6728__auto___507021){
var seq__506900_507022__$1 = temp__6728__auto___507021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__506900_507022__$1)){
var c__35293__auto___507023 = cljs.core.chunk_first.call(null,seq__506900_507022__$1);
var G__507024 = cljs.core.chunk_rest.call(null,seq__506900_507022__$1);
var G__507025 = c__35293__auto___507023;
var G__507026 = cljs.core.count.call(null,c__35293__auto___507023);
var G__507027 = (0);
seq__506900_506977 = G__507024;
chunk__506901_506978 = G__507025;
count__506902_506979 = G__507026;
i__506903_506980 = G__507027;
continue;
} else {
var map__506916_507028 = cljs.core.first.call(null,seq__506900_507022__$1);
var map__506916_507029__$1 = ((((!((map__506916_507028 == null)))?((((map__506916_507028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506916_507028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506916_507028):map__506916_507028);
var region_507030 = cljs.core.get.call(null,map__506916_507029__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_507031 = cljs.core.get.call(null,map__506916_507029__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_507032 = cljs.core.get.call(null,map__506916_507029__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_507033 = cljs.core.get.call(null,map__506916_507029__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_507034 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_507030))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_507034,brightness);

var seq__506918_507035 = cljs.core.seq.call(null,faces_507031);
var chunk__506919_507036 = null;
var count__506920_507037 = (0);
var i__506921_507038 = (0);
while(true){
if((i__506921_507038 < count__506920_507037)){
var vec__506922_507039 = cljs.core._nth.call(null,chunk__506919_507036,i__506921_507038);
var a_507040 = cljs.core.nth.call(null,vec__506922_507039,(0),null);
var b_507041 = cljs.core.nth.call(null,vec__506922_507039,(1),null);
var c_507042 = cljs.core.nth.call(null,vec__506922_507039,(2),null);
var face_507043 = vec__506922_507039;
if(((begin < vertices.call(null,a_507040).call(null,(2)))) && ((vertices.call(null,a_507040).call(null,(2)) < end))){
line.call(null,a_507040,b_507041);
} else {
}

var G__507044 = seq__506918_507035;
var G__507045 = chunk__506919_507036;
var G__507046 = count__506920_507037;
var G__507047 = (i__506921_507038 + (1));
seq__506918_507035 = G__507044;
chunk__506919_507036 = G__507045;
count__506920_507037 = G__507046;
i__506921_507038 = G__507047;
continue;
} else {
var temp__6728__auto___507048__$1 = cljs.core.seq.call(null,seq__506918_507035);
if(temp__6728__auto___507048__$1){
var seq__506918_507049__$1 = temp__6728__auto___507048__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__506918_507049__$1)){
var c__35293__auto___507050 = cljs.core.chunk_first.call(null,seq__506918_507049__$1);
var G__507051 = cljs.core.chunk_rest.call(null,seq__506918_507049__$1);
var G__507052 = c__35293__auto___507050;
var G__507053 = cljs.core.count.call(null,c__35293__auto___507050);
var G__507054 = (0);
seq__506918_507035 = G__507051;
chunk__506919_507036 = G__507052;
count__506920_507037 = G__507053;
i__506921_507038 = G__507054;
continue;
} else {
var vec__506925_507055 = cljs.core.first.call(null,seq__506918_507049__$1);
var a_507056 = cljs.core.nth.call(null,vec__506925_507055,(0),null);
var b_507057 = cljs.core.nth.call(null,vec__506925_507055,(1),null);
var c_507058 = cljs.core.nth.call(null,vec__506925_507055,(2),null);
var face_507059 = vec__506925_507055;
if(((begin < vertices.call(null,a_507056).call(null,(2)))) && ((vertices.call(null,a_507056).call(null,(2)) < end))){
line.call(null,a_507056,b_507057);
} else {
}

var G__507060 = cljs.core.next.call(null,seq__506918_507049__$1);
var G__507061 = null;
var G__507062 = (0);
var G__507063 = (0);
seq__506918_507035 = G__507060;
chunk__506919_507036 = G__507061;
count__506920_507037 = G__507062;
i__506921_507038 = G__507063;
continue;
}
} else {
}
}
break;
}

var G__507064 = cljs.core.next.call(null,seq__506900_507022__$1);
var G__507065 = null;
var G__507066 = (0);
var G__507067 = (0);
seq__506900_506977 = G__507064;
chunk__506901_506978 = G__507065;
count__506902_506979 = G__507066;
i__506903_506980 = G__507067;
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

var G__507068 = seq__506893;
var G__507069 = chunk__506894;
var G__507070 = count__506895;
var G__507071 = (i__506896 + (1));
seq__506893 = G__507068;
chunk__506894 = G__507069;
count__506895 = G__507070;
i__506896 = G__507071;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__506893);
if(temp__6728__auto__){
var seq__506893__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__506893__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__506893__$1);
var G__507072 = cljs.core.chunk_rest.call(null,seq__506893__$1);
var G__507073 = c__35293__auto__;
var G__507074 = cljs.core.count.call(null,c__35293__auto__);
var G__507075 = (0);
seq__506893 = G__507072;
chunk__506894 = G__507073;
count__506895 = G__507074;
i__506896 = G__507075;
continue;
} else {
var vec__506928 = cljs.core.first.call(null,seq__506893__$1);
var begin = cljs.core.nth.call(null,vec__506928,(0),null);
var end = cljs.core.nth.call(null,vec__506928,(1),null);
var brightness = cljs.core.nth.call(null,vec__506928,(2),null);
if(cljs.core._EQ_.call(null,begin,(-1000))){
render_labels.call(null,begin,end);
} else {
}

var seq__506931_507076 = cljs.core.seq.call(null,render_graph);
var chunk__506932_507077 = null;
var count__506933_507078 = (0);
var i__506934_507079 = (0);
while(true){
if((i__506934_507079 < count__506933_507078)){
var map__506935_507080 = cljs.core._nth.call(null,chunk__506932_507077,i__506934_507079);
var map__506935_507081__$1 = ((((!((map__506935_507080 == null)))?((((map__506935_507080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506935_507080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506935_507080):map__506935_507080);
var region_507082 = cljs.core.get.call(null,map__506935_507081__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_507083 = cljs.core.get.call(null,map__506935_507081__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_507084 = cljs.core.get.call(null,map__506935_507081__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_507085 = cljs.core.get.call(null,map__506935_507081__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_507086 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_507082))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_507086,brightness);

var seq__506937_507087 = cljs.core.seq.call(null,faces_507083);
var chunk__506938_507088 = null;
var count__506939_507089 = (0);
var i__506940_507090 = (0);
while(true){
if((i__506940_507090 < count__506939_507089)){
var vec__506941_507091 = cljs.core._nth.call(null,chunk__506938_507088,i__506940_507090);
var a_507092 = cljs.core.nth.call(null,vec__506941_507091,(0),null);
var b_507093 = cljs.core.nth.call(null,vec__506941_507091,(1),null);
var c_507094 = cljs.core.nth.call(null,vec__506941_507091,(2),null);
var face_507095 = vec__506941_507091;
if(((begin < vertices.call(null,a_507092).call(null,(2)))) && ((vertices.call(null,a_507092).call(null,(2)) < end))){
line.call(null,a_507092,b_507093);
} else {
}

var G__507096 = seq__506937_507087;
var G__507097 = chunk__506938_507088;
var G__507098 = count__506939_507089;
var G__507099 = (i__506940_507090 + (1));
seq__506937_507087 = G__507096;
chunk__506938_507088 = G__507097;
count__506939_507089 = G__507098;
i__506940_507090 = G__507099;
continue;
} else {
var temp__6728__auto___507100__$1 = cljs.core.seq.call(null,seq__506937_507087);
if(temp__6728__auto___507100__$1){
var seq__506937_507101__$1 = temp__6728__auto___507100__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__506937_507101__$1)){
var c__35293__auto___507102 = cljs.core.chunk_first.call(null,seq__506937_507101__$1);
var G__507103 = cljs.core.chunk_rest.call(null,seq__506937_507101__$1);
var G__507104 = c__35293__auto___507102;
var G__507105 = cljs.core.count.call(null,c__35293__auto___507102);
var G__507106 = (0);
seq__506937_507087 = G__507103;
chunk__506938_507088 = G__507104;
count__506939_507089 = G__507105;
i__506940_507090 = G__507106;
continue;
} else {
var vec__506944_507107 = cljs.core.first.call(null,seq__506937_507101__$1);
var a_507108 = cljs.core.nth.call(null,vec__506944_507107,(0),null);
var b_507109 = cljs.core.nth.call(null,vec__506944_507107,(1),null);
var c_507110 = cljs.core.nth.call(null,vec__506944_507107,(2),null);
var face_507111 = vec__506944_507107;
if(((begin < vertices.call(null,a_507108).call(null,(2)))) && ((vertices.call(null,a_507108).call(null,(2)) < end))){
line.call(null,a_507108,b_507109);
} else {
}

var G__507112 = cljs.core.next.call(null,seq__506937_507101__$1);
var G__507113 = null;
var G__507114 = (0);
var G__507115 = (0);
seq__506937_507087 = G__507112;
chunk__506938_507088 = G__507113;
count__506939_507089 = G__507114;
i__506940_507090 = G__507115;
continue;
}
} else {
}
}
break;
}

var G__507116 = seq__506931_507076;
var G__507117 = chunk__506932_507077;
var G__507118 = count__506933_507078;
var G__507119 = (i__506934_507079 + (1));
seq__506931_507076 = G__507116;
chunk__506932_507077 = G__507117;
count__506933_507078 = G__507118;
i__506934_507079 = G__507119;
continue;
} else {
var temp__6728__auto___507120__$1 = cljs.core.seq.call(null,seq__506931_507076);
if(temp__6728__auto___507120__$1){
var seq__506931_507121__$1 = temp__6728__auto___507120__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__506931_507121__$1)){
var c__35293__auto___507122 = cljs.core.chunk_first.call(null,seq__506931_507121__$1);
var G__507123 = cljs.core.chunk_rest.call(null,seq__506931_507121__$1);
var G__507124 = c__35293__auto___507122;
var G__507125 = cljs.core.count.call(null,c__35293__auto___507122);
var G__507126 = (0);
seq__506931_507076 = G__507123;
chunk__506932_507077 = G__507124;
count__506933_507078 = G__507125;
i__506934_507079 = G__507126;
continue;
} else {
var map__506947_507127 = cljs.core.first.call(null,seq__506931_507121__$1);
var map__506947_507128__$1 = ((((!((map__506947_507127 == null)))?((((map__506947_507127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__506947_507127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__506947_507127):map__506947_507127);
var region_507129 = cljs.core.get.call(null,map__506947_507128__$1,new cljs.core.Keyword(null,"region","region",270415120));
var faces_507130 = cljs.core.get.call(null,map__506947_507128__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var centroid_507131 = cljs.core.get.call(null,map__506947_507128__$1,new cljs.core.Keyword(null,"centroid","centroid",-39626797));
var label_507132 = cljs.core.get.call(null,map__506947_507128__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var color_507133 = ((cljs.core.seq.call(null,sections))?ui.core.region_color.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(sections.call(null,region_507129))):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
set_color.call(null,color_507133,brightness);

var seq__506949_507134 = cljs.core.seq.call(null,faces_507130);
var chunk__506950_507135 = null;
var count__506951_507136 = (0);
var i__506952_507137 = (0);
while(true){
if((i__506952_507137 < count__506951_507136)){
var vec__506953_507138 = cljs.core._nth.call(null,chunk__506950_507135,i__506952_507137);
var a_507139 = cljs.core.nth.call(null,vec__506953_507138,(0),null);
var b_507140 = cljs.core.nth.call(null,vec__506953_507138,(1),null);
var c_507141 = cljs.core.nth.call(null,vec__506953_507138,(2),null);
var face_507142 = vec__506953_507138;
if(((begin < vertices.call(null,a_507139).call(null,(2)))) && ((vertices.call(null,a_507139).call(null,(2)) < end))){
line.call(null,a_507139,b_507140);
} else {
}

var G__507143 = seq__506949_507134;
var G__507144 = chunk__506950_507135;
var G__507145 = count__506951_507136;
var G__507146 = (i__506952_507137 + (1));
seq__506949_507134 = G__507143;
chunk__506950_507135 = G__507144;
count__506951_507136 = G__507145;
i__506952_507137 = G__507146;
continue;
} else {
var temp__6728__auto___507147__$2 = cljs.core.seq.call(null,seq__506949_507134);
if(temp__6728__auto___507147__$2){
var seq__506949_507148__$1 = temp__6728__auto___507147__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__506949_507148__$1)){
var c__35293__auto___507149 = cljs.core.chunk_first.call(null,seq__506949_507148__$1);
var G__507150 = cljs.core.chunk_rest.call(null,seq__506949_507148__$1);
var G__507151 = c__35293__auto___507149;
var G__507152 = cljs.core.count.call(null,c__35293__auto___507149);
var G__507153 = (0);
seq__506949_507134 = G__507150;
chunk__506950_507135 = G__507151;
count__506951_507136 = G__507152;
i__506952_507137 = G__507153;
continue;
} else {
var vec__506956_507154 = cljs.core.first.call(null,seq__506949_507148__$1);
var a_507155 = cljs.core.nth.call(null,vec__506956_507154,(0),null);
var b_507156 = cljs.core.nth.call(null,vec__506956_507154,(1),null);
var c_507157 = cljs.core.nth.call(null,vec__506956_507154,(2),null);
var face_507158 = vec__506956_507154;
if(((begin < vertices.call(null,a_507155).call(null,(2)))) && ((vertices.call(null,a_507155).call(null,(2)) < end))){
line.call(null,a_507155,b_507156);
} else {
}

var G__507159 = cljs.core.next.call(null,seq__506949_507148__$1);
var G__507160 = null;
var G__507161 = (0);
var G__507162 = (0);
seq__506949_507134 = G__507159;
chunk__506950_507135 = G__507160;
count__506951_507136 = G__507161;
i__506952_507137 = G__507162;
continue;
}
} else {
}
}
break;
}

var G__507163 = cljs.core.next.call(null,seq__506931_507121__$1);
var G__507164 = null;
var G__507165 = (0);
var G__507166 = (0);
seq__506931_507076 = G__507163;
chunk__506932_507077 = G__507164;
count__506933_507078 = G__507165;
i__506934_507079 = G__507166;
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

var G__507167 = cljs.core.next.call(null,seq__506893__$1);
var G__507168 = null;
var G__507169 = (0);
var G__507170 = (0);
seq__506893 = G__507167;
chunk__506894 = G__507168;
count__506895 = G__507169;
i__506896 = G__507170;
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

var x507175_507205 = ui.core.Brain.prototype;
x507175_507205.componentWillUpdate = ((function (x507175_507205){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___507206 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___507207 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___507206,next_ident__40467__auto___507207)){
var idxr__40468__auto___507208 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___507208 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___507208),((function (idxr__40468__auto___507208,ident__40466__auto___507206,next_ident__40467__auto___507207,this__40462__auto__,x507175_507205){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___507206], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___507207], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___507208,ident__40466__auto___507206,next_ident__40467__auto___507207,this__40462__auto__,x507175_507205))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x507175_507205))
;

x507175_507205.shouldComponentUpdate = ((function (x507175_507205){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__507177 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__507177);
} else {
return G__507177;
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
});})(x507175_507205))
;

x507175_507205.componentDidUpdate = ((function (x507175_507205){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x507175_507205))
;

x507175_507205.isMounted = ((function (x507175_507205){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x507175_507205))
;

x507175_507205.componentWillMount = ((function (x507175_507205){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x507175_507205))
;

x507175_507205.initLocalState = ((function (x507175_507205){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1708495417),null], null);
var obj507179 = {"omcljs$state":ret__40440__auto__};
return obj507179;
});})(x507175_507205))
;

x507175_507205.componentDidMount = ((function (x507175_507205){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"interval","interval",1708495417),setInterval(((function (this$,x507175_507205){
return (function (){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.update,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),((function (this$,x507175_507205){
return (function (rotation){
ui.core.render_brain.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)).getContext("2d"),rotation,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));

return (rotation + new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core.brain_state)));
});})(this$,x507175_507205))
);
});})(this$,x507175_507205))
,(50)));
});})(x507175_507205))
;

x507175_507205.componentWillUnmount = ((function (x507175_507205){
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
});})(x507175_507205))
;

x507175_507205.render = ((function (x507175_507205){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_507180 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_507181 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_507182 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_507183 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_507184 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__507185 = om.next.props.call(null,this$);
var map__507185__$1 = ((((!((map__507185 == null)))?((((map__507185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507185):map__507185);
var props = map__507185__$1;
var items = cljs.core.get.call(null,map__507185__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
var loading = cljs.core.not.call(null,cljs.core.seq.call(null,items));
var scores = cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (map__507185,map__507185__$1,props,items,loading,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205){
return (function ui$core$iter__507188(s__507189){
return (new cljs.core.LazySeq(null,((function (map__507185,map__507185__$1,props,items,loading,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205){
return (function (){
var s__507189__$1 = s__507189;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__507189__$1);
if(temp__6728__auto__){
var s__507189__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__507189__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__507189__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__507191 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__507190 = (0);
while(true){
if((i__507190 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__507190);
cljs.core.chunk_append.call(null,b__507191,(function (){var map__507196 = item;
var map__507196__$1 = ((((!((map__507196 == null)))?((((map__507196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507196):map__507196);
var votes = cljs.core.get.call(null,map__507196__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34723__auto__ = (0);
var y__34724__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})());

var G__507209 = (i__507190 + (1));
i__507190 = G__507209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507191),ui$core$iter__507188.call(null,cljs.core.chunk_rest.call(null,s__507189__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507191),null);
}
} else {
var item = cljs.core.first.call(null,s__507189__$2);
return cljs.core.cons.call(null,(function (){var map__507198 = item;
var map__507198__$1 = ((((!((map__507198 == null)))?((((map__507198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507198):map__507198);
var votes = cljs.core.get.call(null,map__507198__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
var x__34723__auto__ = (0);
var y__34724__auto__ = (((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,votes))) - ((0.7 * new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))) + new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,votes))));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})(),ui$core$iter__507188.call(null,cljs.core.rest.call(null,s__507189__$2)));
}
} else {
return null;
}
break;
}
});})(map__507185,map__507185__$1,props,items,loading,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205))
,null,null));
});})(map__507185,map__507185__$1,props,items,loading,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205))
;
return iter__35244__auto__.call(null,items);
})());
var sections = cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__507185,map__507185__$1,props,items,loading,scores,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205){
return (function (index,item,score){
var map__507200 = item;
var map__507200__$1 = ((((!((map__507200 == null)))?((((map__507200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507200):map__507200);
var description = cljs.core.get.call(null,map__507200__$1,new cljs.core.Keyword("item","description","item/description",-1431609213));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("item","description","item/description",-1431609213).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var x__34723__auto__ = score;
var y__34724__auto__ = (cljs.core.apply.call(null,cljs.core._PLUS_,scores) / (50));
return ((x__34723__auto__ > y__34724__auto__) ? x__34723__auto__ : y__34724__auto__);
})(),new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});})(map__507185,map__507185__$1,props,items,loading,scores,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205))
,cljs.core.range.call(null),items,scores));
var sections__$1 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core._,new cljs.core.Keyword(null,"size","size",1098693007)),sections));
var map__507186 = om.next.get_computed.call(null,props);
var map__507186__$1 = ((((!((map__507186 == null)))?((((map__507186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507186):map__507186);
var mode = cljs.core.get.call(null,map__507186__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
cljs.core.swap_BANG_.call(null,ui.core.brain_state,((function (map__507185,map__507185__$1,props,items,loading,scores,sections,sections__$1,map__507186,map__507186__$1,mode,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205){
return (function (brain_state){
if(cljs.core.not_EQ_.call(null,sections__$1,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(brain_state))){
var br = ui.core.brain_prerender.call(null,sections__$1);
return cljs.core.assoc.call(null,brain_state,new cljs.core.Keyword(null,"sections","sections",-886710106),sections__$1,new cljs.core.Keyword(null,"regions","regions",-1023815958),br,new cljs.core.Keyword(null,"render-graph","render-graph",-2065692629),ui.core.render_graph.call(null,ui.core.brain_faces,ui.core.brain_vertices,br));
} else {
return brain_state;
}
});})(map__507185,map__507185__$1,props,items,loading,scores,sections,sections__$1,map__507186,map__507186__$1,mode,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205))
);

return ui.motion.motion.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultStyle","defaultStyle",-1871684416),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"colored","colored",-1421800355),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"speed","speed",1257663751),0.01], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colored","colored",-1421800355),ui.motion.spring.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"brain","brain",428499577))) && (!(loading)))?(1):(0)),ui.motion.gentle),new cljs.core.Keyword(null,"top","top",-1856271961),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(50):(0))),new cljs.core.Keyword(null,"width","width",-384071477),ui.motion.spring.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)))?(150):(60)),ui.motion.wobbly),new cljs.core.Keyword(null,"speed","speed",1257663751),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),null,new cljs.core.Keyword(null,"brain","brain",428499577),null], null), null).call(null,mode))?0.01:(0))], null)], null),((function (map__507185,map__507185__$1,props,items,loading,scores,sections,sections__$1,map__507186,map__507186__$1,mode,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205){
return (function (value){
cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(value));

return cljs.core.apply.call(null,React.DOM.div,({"style": ({"width": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "height": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("vmin")].join('')), "position": "absolute", "zIndex": om_tools.dom.format_opts.call(null,(((new cljs.core.Keyword(null,"colored","colored",-1421800355).cljs$core$IFn$_invoke$arity$1(value) > 0.5))?(1):(-1))), "top": om_tools.dom.format_opts.call(null,[cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(value)),cljs.core.str("%")].join(''))})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.canvas(({"ref": om_tools.dom.format_opts.call(null,((function (map__507185,map__507185__$1,props,items,loading,scores,sections,sections__$1,map__507186,map__507186__$1,mode,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205){
return (function (canvas){
return cljs.core.swap_BANG_.call(null,ui.core.brain_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas);
});})(map__507185,map__507185__$1,props,items,loading,scores,sections,sections__$1,map__507186,map__507186__$1,mode,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205))
), "width": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "height": om_tools.dom.format_opts.call(null,ui.core.canvas_resolution), "style": ({"height": "100%", "width": "100%"})})),((loading)?cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "top": "40%", "left": "25%", "right": "25%", "height": "20%"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.p(({"style": ({"textAlign": "center"})}),"Brain Initializing from Ethereum Blockchain"),blueprint_cljs.core.progress_bar.call(null)],null)))):null)],null))));
});})(map__507185,map__507185__$1,props,items,loading,scores,sections,sections__$1,map__507186,map__507186__$1,mode,_STAR_reconciler_STAR_507180,_STAR_depth_STAR_507181,_STAR_shared_STAR_507182,_STAR_instrument_STAR_507183,_STAR_parent_STAR_507184,this$,this__40461__auto__,x507175_507205))
);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_507184;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_507183;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_507182;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_507181;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_507180;
}});})(x507175_507205))
;


ui.core.Brain.prototype.constructor = ui.core.Brain;

ui.core.Brain.prototype.constructor.displayName = "ui.core/Brain";

ui.core.Brain.prototype.om$isComponent = true;

var x507203_507210 = ui.core.Brain;
/** @nocollapse */
x507203_507210.om$next$IQuery$ = true;

/** @nocollapse */
x507203_507210.om$next$IQuery$query$arity$1 = ((function (x507203_507210){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x507203_507210))
;


var x507204_507211 = ui.core.Brain.prototype;

x507204_507211.om$next$IQuery$ = true;


x507204_507211.om$next$IQuery$query$arity$1 = ((function (x507204_507211){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","items","etherean/items",165918606),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","description","item/description",-1431609213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","votes","item/votes",-1158219213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919)], null)], null)], null)], null)], null);
});})(x507204_507211))
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

var x507216_507230 = ui.core.Root.prototype;
x507216_507230.componentWillUpdate = ((function (x507216_507230){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
if(((!((this__40462__auto__ == null)))?(((false) || (this__40462__auto__.om$next$Ident$))?true:false):false)){
var ident__40466__auto___507231 = om.next.ident.call(null,this__40462__auto__,om.next.props.call(null,this__40462__auto__));
var next_ident__40467__auto___507232 = om.next.ident.call(null,this__40462__auto__,om.next._next_props.call(null,next_props__40463__auto__,this__40462__auto__));
if(cljs.core.not_EQ_.call(null,ident__40466__auto___507231,next_ident__40467__auto___507232)){
var idxr__40468__auto___507233 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40468__auto___507233 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40468__auto___507233),((function (idxr__40468__auto___507233,ident__40466__auto___507231,next_ident__40467__auto___507232,this__40462__auto__,x507216_507230){
return (function (indexes__40469__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40469__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40466__auto___507231], null),cljs.core.disj,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40467__auto___507232], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40462__auto__);
});})(idxr__40468__auto___507233,ident__40466__auto___507231,next_ident__40467__auto___507232,this__40462__auto__,x507216_507230))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40462__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40462__auto__);
});})(x507216_507230))
;

x507216_507230.shouldComponentUpdate = ((function (x507216_507230){
return (function (next_props__40463__auto__,next_state__40464__auto__){
var this__40462__auto__ = this;
var next_children__40465__auto__ = next_props__40463__auto__.children;
var next_props__40463__auto____$1 = goog.object.get(next_props__40463__auto__,"omcljs$value");
var next_props__40463__auto____$2 = (function (){var G__507218 = next_props__40463__auto____$1;
if((next_props__40463__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__507218);
} else {
return G__507218;
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
});})(x507216_507230))
;

x507216_507230.componentDidUpdate = ((function (x507216_507230){
return (function (prev_props__40470__auto__,prev_state__40471__auto__){
var this__40462__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40462__auto__);
});})(x507216_507230))
;

x507216_507230.isMounted = ((function (x507216_507230){
return (function (){
var this__40462__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40462__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x507216_507230))
;

x507216_507230.componentWillMount = ((function (x507216_507230){
return (function (){
var this__40462__auto__ = this;
var indexer__40472__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40462__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40472__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40472__auto__,this__40462__auto__);
}
});})(x507216_507230))
;

x507216_507230.initLocalState = ((function (x507216_507230){
return (function (){
var this$ = this;
var ret__40440__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),null], null),new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.Keyword(null,"brain","brain",428499577)], null);
var obj507220 = {"omcljs$state":ret__40440__auto__};
return obj507220;
});})(x507216_507230))
;

x507216_507230.componentDidMount = ((function (x507216_507230){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"intervals","intervals",2096054013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),(function (){var update_address = ((function (this$,x507216_507230){
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
});})(this$,x507216_507230))
;
update_address.call(null);

return setInterval(update_address,(1000));
})()], null));
});})(x507216_507230))
;

x507216_507230.componentWillUnmount = ((function (x507216_507230){
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
});})(x507216_507230))
;

x507216_507230.render = ((function (x507216_507230){
return (function (){
var this__40461__auto__ = this;
var this$ = this__40461__auto__;
var _STAR_reconciler_STAR_507221 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_507222 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_507223 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_507224 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_507225 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40461__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40461__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40461__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40461__auto__);

om.next._STAR_parent_STAR_ = this__40461__auto__;

try{var map__507226 = om.next.props.call(null,this$);
var map__507226__$1 = ((((!((map__507226 == null)))?((((map__507226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507226):map__507226);
var proposals_props = cljs.core.get.call(null,map__507226__$1,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231));
var stakes_props = cljs.core.get.call(null,map__507226__$1,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339));
var items_props = cljs.core.get.call(null,map__507226__$1,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104));
var brain_props = cljs.core.get.call(null,map__507226__$1,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934));
var network_id = cljs.core.get.call(null,map__507226__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var can_vote_proposal = cljs.core.get.call(null,map__507226__$1,new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010));
var stake = cljs.core.get.call(null,map__507226__$1,new cljs.core.Keyword("user","stake","user/stake",-1493851572));
return cljs.core.apply.call(null,React.DOM.div,({"className": "pt-dark", "style": ({"display": "flex", "justifyContent": "center", "zoom": 1.3})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"flexGrow": "1", "maxWidth": "600px"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[blueprint_cljs.core.tabs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__507226,map__507226__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_507221,_STAR_depth_STAR_507222,_STAR_shared_STAR_507223,_STAR_instrument_STAR_507224,_STAR_parent_STAR_507225,this$,this__40461__auto__,x507216_507230){
return (function (index){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"canvas-mode","canvas-mode",2051496650),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"white","white",-483998618)], null).call(null,index));
});})(map__507226,map__507226__$1,proposals_props,stakes_props,items_props,brain_props,network_id,can_vote_proposal,stake,_STAR_reconciler_STAR_507221,_STAR_depth_STAR_507222,_STAR_shared_STAR_507223,_STAR_instrument_STAR_507224,_STAR_parent_STAR_507225,this$,this__40461__auto__,x507216_507230))
], null),blueprint_cljs.core.tab_list.call(null,blueprint_cljs.core.tab.call(null,"Brain"),blueprint_cljs.core.tab.call(null,"Top 10 Items"),blueprint_cljs.core.tab.call(null,"Today's Proposed Items"),blueprint_cljs.core.tab.call(null,"Voting Stakes"),blueprint_cljs.core.tab.call(null,"FAQ")),blueprint_cljs.core.tab_panel.call(null,cljs.core.apply.call(null,React.DOM.div,({"style": ({"position": "absolute", "bottom": (0), "left": (0), "right": (0), "display": "flex", "flexDirection": "column", "alignItems": "center"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"className": "pt-card pt-elevation-4", "style": ({"opacity": om_tools.dom.format_opts.call(null,(cljs.core.truth_(ui.core.web3)?0.7:(1))), "maxWidth": "500px", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(ui.core.web3)?null:cljs.core.apply.call(null,React.DOM.div,({"style": ({"display": "flex", "alignItems": "center", "fontSize": "1.1rem", "marginBottom": "2rem"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,({"style": ({"margin": "0.5em"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["EthereanMind requires access to the ",React.DOM.a(({"target": "_blank", "href": "http://ethereum.org"}),"ethereum network "),"to initialize. Please install the ",React.DOM.a(({"target": "_blank", "href": "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"}),"metamask chrome extension"),", or a similar ethereum data source."],null)))),React.DOM.img(({"src": "metamask.png"}))],null))))),React.DOM.h3(({"style": ({"textAlign": "center"})}),"Ethereans, what's on your mind?"),React.DOM.p(null,"EthereanMind lets ethereum users maintain a decentralized \"Top 10 list\" of the most important items to the community. Voting attacks are prevented via time-locked, fully refundable deposits in a staking contract.")],null)))),(cljs.core.truth_((function (){var and__34378__auto__ = ui.core.web3;
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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_507225;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_507224;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_507223;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_507222;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_507221;
}});})(x507216_507230))
;


ui.core.Root.prototype.constructor = ui.core.Root;

ui.core.Root.prototype.constructor.displayName = "ui.core/Root";

ui.core.Root.prototype.om$isComponent = true;

var x507228_507234 = ui.core.Root;
/** @nocollapse */
x507228_507234.om$next$IQuery$ = true;

/** @nocollapse */
x507228_507234.om$next$IQuery$query$arity$1 = ((function (x507228_507234){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x507228_507234))
;


var x507229_507235 = ui.core.Root.prototype;

x507229_507235.om$next$IQuery$ = true;


x507229_507235.om$next$IQuery$query$arity$1 = ((function (x507229_507235){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),new cljs.core.Keyword("user","stake","user/stake",-1493851572),new cljs.core.Keyword("user","can-vote-proposal","user/can-vote-proposal",229183010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),om.next.get_query.call(null,ui.core.Proposals)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),om.next.get_query.call(null,ui.core.Stakes)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),om.next.get_query.call(null,ui.core.Brain)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),om.next.get_query.call(null,ui.core.Items)], null)], null);
});})(x507229_507235))
;


ui.core.Root.cljs$lang$type = true;

ui.core.Root.cljs$lang$ctorStr = "ui.core/Root";

ui.core.Root.cljs$lang$ctorPrWriter = (function (this__40611__auto__,writer__40612__auto__,opt__40613__auto__){
return cljs.core._write.call(null,writer__40612__auto__,"ui.core/Root");
});
ui.core.simple_read = (function ui$core$simple_read(p__507236,key,_){
var map__507239 = p__507236;
var map__507239__$1 = ((((!((map__507239 == null)))?((((map__507239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507239):map__507239);
var env = map__507239__$1;
var state = cljs.core.get.call(null,map__507239__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,state).call(null,key)], null);
});
ui.core.simple_read_with_remote = (function ui$core$simple_read_with_remote(p__507241,key,_){
var map__507244 = p__507241;
var map__507244__$1 = ((((!((map__507244 == null)))?((((map__507244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507244):map__507244);
var env = map__507244__$1;
var state = cljs.core.get.call(null,map__507244__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var value = cljs.core.deref.call(null,state).call(null,key);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"remote","remote",-1593576576),cljs.core.not.call(null,value)], null);
});
ui.core.recursive_read = (function ui$core$recursive_read(query_root,p__507246,_,___$1){
var map__507249 = p__507246;
var map__507249__$1 = ((((!((map__507249 == null)))?((((map__507249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507249):map__507249);
var env = map__507249__$1;
var parser = cljs.core.get.call(null,map__507249__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__507249__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__507249__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__507249__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query-root","query-root",359781888),query_root,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parser.call(null,env,query)], null);
}
});
ui.core.recursive_channel_read = (function ui$core$recursive_channel_read(p__507251,_,___$1){
var map__507254 = p__507251;
var map__507254__$1 = ((((!((map__507254 == null)))?((((map__507254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507254):map__507254);
var env = map__507254__$1;
var parser = cljs.core.get.call(null,map__507254__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var query = cljs.core.get.call(null,map__507254__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.call(null,map__507254__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
var G__507256__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,true,args);
};
var G__507256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__507257__i = 0, G__507257__a = new Array(arguments.length -  0);
while (G__507257__i < G__507257__a.length) {G__507257__a[G__507257__i] = arguments[G__507257__i + 0]; ++G__507257__i;}
  args = new cljs.core.IndexedSeq(G__507257__a,0);
} 
return G__507256__delegate.call(this,args);};
G__507256.cljs$lang$maxFixedArity = 0;
G__507256.cljs$lang$applyTo = (function (arglist__507258){
var args = cljs.core.seq(arglist__507258);
return G__507256__delegate(args);
});
G__507256.cljs$core$IFn$_invoke$arity$variadic = G__507256__delegate;
return G__507256;
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
var map__507259 = env;
var map__507259__$1 = ((((!((map__507259 == null)))?((((map__507259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507259):map__507259);
var parser = cljs.core.get.call(null,map__507259__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__507259__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__507259__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__507259__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__507259__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__507259,map__507259__$1,parser,state,query,target,ast,state__$1){
return (function ui$core$iter__507261(s__507262){
return (new cljs.core.LazySeq(null,((function (map__507259,map__507259__$1,parser,state,query,target,ast,state__$1){
return (function (){
var s__507262__$1 = s__507262;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__507262__$1);
if(temp__6728__auto__){
var s__507262__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__507262__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__507262__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__507264 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__507263 = (0);
while(true){
if((i__507263 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__507263);
cljs.core.chunk_append.call(null,b__507264,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query));

var G__507265 = (i__507263 + (1));
i__507263 = G__507265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507264),ui$core$iter__507261.call(null,cljs.core.chunk_rest.call(null,s__507262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507264),null);
}
} else {
var item = cljs.core.first.call(null,s__507262__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),item),query),ui$core$iter__507261.call(null,cljs.core.rest.call(null,s__507262__$2)));
}
} else {
return null;
}
break;
}
});})(map__507259,map__507259__$1,parser,state,query,target,ast,state__$1))
,null,null));
});})(map__507259,map__507259__$1,parser,state,query,target,ast,state__$1))
;
return iter__35244__auto__.call(null,new cljs.core.Keyword("item","by-id","item/by-id",-2140839086).cljs$core$IFn$_invoke$arity$1(state__$1));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444),(function (env,k,params){
var map__507266 = env;
var map__507266__$1 = ((((!((map__507266 == null)))?((((map__507266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507266):map__507266);
var parser = cljs.core.get.call(null,map__507266__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__507266__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__507266__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__507266__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__507266__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__507267 = state__$1;
var map__507267__$1 = ((((!((map__507267 == null)))?((((map__507267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507267):map__507267);
var order = cljs.core.get.call(null,map__507267__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__507266,map__507266__$1,parser,state,query,target,ast,state__$1,map__507267,map__507267__$1,order){
return (function ui$core$iter__507270(s__507271){
return (new cljs.core.LazySeq(null,((function (map__507266,map__507266__$1,parser,state,query,target,ast,state__$1,map__507267,map__507267__$1,order){
return (function (){
var s__507271__$1 = s__507271;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__507271__$1);
if(temp__6728__auto__){
var s__507271__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__507271__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__507271__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__507273 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__507272 = (0);
while(true){
if((i__507272 < size__35243__auto__)){
var proposal = cljs.core._nth.call(null,c__35242__auto__,i__507272);
cljs.core.chunk_append.call(null,b__507273,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query));

var G__507274 = (i__507272 + (1));
i__507272 = G__507274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507273),ui$core$iter__507270.call(null,cljs.core.chunk_rest.call(null,s__507271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507273),null);
}
} else {
var proposal = cljs.core.first.call(null,s__507271__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),cljs.core.get_in.call(null,state__$1,proposal)),query),ui$core$iter__507270.call(null,cljs.core.rest.call(null,s__507271__$2)));
}
} else {
return null;
}
break;
}
});})(map__507266,map__507266__$1,parser,state,query,target,ast,state__$1,map__507267,map__507267__$1,order))
,null,null));
});})(map__507266,map__507266__$1,parser,state,query,target,ast,state__$1,map__507267,map__507267__$1,order))
;
return iter__35244__auto__.call(null,order);
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
var map__507275 = env;
var map__507275__$1 = ((((!((map__507275 == null)))?((((map__507275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507275):map__507275);
var parser = cljs.core.get.call(null,map__507275__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__507275__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__507275__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__507275__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__507275__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__507276 = state__$1;
var map__507276__$1 = ((((!((map__507276 == null)))?((((map__507276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507276):map__507276);
var by_id = cljs.core.get.call(null,map__507276__$1,new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var iter__35244__auto__ = ((function (map__507275,map__507275__$1,parser,state,query,target,ast,state__$1,map__507276,map__507276__$1,by_id){
return (function ui$core$iter__507279(s__507280){
return (new cljs.core.LazySeq(null,((function (map__507275,map__507275__$1,parser,state,query,target,ast,state__$1,map__507276,map__507276__$1,by_id){
return (function (){
var s__507280__$1 = s__507280;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__507280__$1);
if(temp__6728__auto__){
var s__507280__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__507280__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__507280__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__507282 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__507281 = (0);
while(true){
if((i__507281 < size__35243__auto__)){
var stake = cljs.core._nth.call(null,c__35242__auto__,i__507281);
cljs.core.chunk_append.call(null,b__507282,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query));

var G__507283 = (i__507281 + (1));
i__507281 = G__507283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507282),ui$core$iter__507279.call(null,cljs.core.chunk_rest.call(null,s__507280__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507282),null);
}
} else {
var stake = cljs.core.first.call(null,s__507280__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"stake","stake",-1498497787),stake),query),ui$core$iter__507279.call(null,cljs.core.rest.call(null,s__507280__$2)));
}
} else {
return null;
}
break;
}
});})(map__507275,map__507275__$1,parser,state,query,target,ast,state__$1,map__507276,map__507276__$1,by_id))
,null,null));
});})(map__507275,map__507275__$1,parser,state,query,target,ast,state__$1,map__507276,map__507276__$1,by_id))
;
return iter__35244__auto__.call(null,cljs.core.vals.call(null,by_id));
})()], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__507284__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__507284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__507285__i = 0, G__507285__a = new Array(arguments.length -  0);
while (G__507285__i < G__507285__a.length) {G__507285__a[G__507285__i] = arguments[G__507285__i + 0]; ++G__507285__i;}
  args = new cljs.core.IndexedSeq(G__507285__a,0);
} 
return G__507284__delegate.call(this,args);};
G__507284.cljs$lang$maxFixedArity = 0;
G__507284.cljs$lang$applyTo = (function (arglist__507286){
var args = cljs.core.seq(arglist__507286);
return G__507284__delegate(args);
});
G__507284.cljs$core$IFn$_invoke$arity$variadic = G__507284__delegate;
return G__507284;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__507287__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__507287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__507288__i = 0, G__507288__a = new Array(arguments.length -  0);
while (G__507288__i < G__507288__a.length) {G__507288__a[G__507288__i] = arguments[G__507288__i + 0]; ++G__507288__i;}
  args = new cljs.core.IndexedSeq(G__507288__a,0);
} 
return G__507287__delegate.call(this,args);};
G__507287.cljs$lang$maxFixedArity = 0;
G__507287.cljs$lang$applyTo = (function (arglist__507289){
var args = cljs.core.seq(arglist__507289);
return G__507287__delegate(args);
});
G__507287.cljs$core$IFn$_invoke$arity$variadic = G__507287__delegate;
return G__507287;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__507290__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__507290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__507291__i = 0, G__507291__a = new Array(arguments.length -  0);
while (G__507291__i < G__507291__a.length) {G__507291__a[G__507291__i] = arguments[G__507291__i + 0]; ++G__507291__i;}
  args = new cljs.core.IndexedSeq(G__507291__a,0);
} 
return G__507290__delegate.call(this,args);};
G__507290.cljs$lang$maxFixedArity = 0;
G__507290.cljs$lang$applyTo = (function (arglist__507292){
var args = cljs.core.seq(arglist__507292);
return G__507290__delegate(args);
});
G__507290.cljs$core$IFn$_invoke$arity$variadic = G__507290__delegate;
return G__507290;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__507293__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_read,false,args);
};
var G__507293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__507294__i = 0, G__507294__a = new Array(arguments.length -  0);
while (G__507294__i < G__507294__a.length) {G__507294__a[G__507294__i] = arguments[G__507294__i + 0]; ++G__507294__i;}
  args = new cljs.core.IndexedSeq(G__507294__a,0);
} 
return G__507293__delegate.call(this,args);};
G__507293.cljs$lang$maxFixedArity = 0;
G__507293.cljs$lang$applyTo = (function (arglist__507295){
var args = cljs.core.seq(arglist__507295);
return G__507293__delegate(args);
});
G__507293.cljs$core$IFn$_invoke$arity$variadic = G__507293__delegate;
return G__507293;
})()
);
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,k,params){
var map__507296 = env;
var map__507296__$1 = ((((!((map__507296 == null)))?((((map__507296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507296):map__507296);
var parser = cljs.core.get.call(null,map__507296__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.call(null,map__507296__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__507296__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.call(null,map__507296__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.call(null,map__507296__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state__$1 = cljs.core.deref.call(null,state);
var map__507297 = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(env);
var map__507297__$1 = ((((!((map__507297 == null)))?((((map__507297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507297):map__507297);
var votes = cljs.core.get.call(null,map__507297__$1,new cljs.core.Keyword("item","votes","item/votes",-1158219213));
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.fromArray([target,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"query","query",-1288509510),parser.call(null,env,query,target))], true, false);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(votes)?(function (){var iter__35244__auto__ = ((function (map__507296,map__507296__$1,parser,state,query,target,ast,state__$1,map__507297,map__507297__$1,votes){
return (function ui$core$iter__507300(s__507301){
return (new cljs.core.LazySeq(null,((function (map__507296,map__507296__$1,parser,state,query,target,ast,state__$1,map__507297,map__507297__$1,votes){
return (function (){
var s__507301__$1 = s__507301;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__507301__$1);
if(temp__6728__auto__){
var s__507301__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__507301__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__507301__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__507303 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__507302 = (0);
while(true){
if((i__507302 < size__35243__auto__)){
var item_votes = cljs.core._nth.call(null,c__35242__auto__,i__507302);
cljs.core.chunk_append.call(null,b__507303,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query));

var G__507304 = (i__507302 + (1));
i__507302 = G__507304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507303),ui$core$iter__507300.call(null,cljs.core.chunk_rest.call(null,s__507301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507303),null);
}
} else {
var item_votes = cljs.core.first.call(null,s__507301__$2);
return cljs.core.cons.call(null,parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),item_votes),query),ui$core$iter__507300.call(null,cljs.core.rest.call(null,s__507301__$2)));
}
} else {
return null;
}
break;
}
});})(map__507296,map__507296__$1,parser,state,query,target,ast,state__$1,map__507297,map__507297__$1,votes))
,null,null));
});})(map__507296,map__507296__$1,parser,state,query,target,ast,state__$1,map__507297,map__507297__$1,votes))
;
return iter__35244__auto__.call(null,votes);
})():null)], null);
}
}));
var seq__507305_507315 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proposal","proposal",142522715),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stake","stake",-1498497787),new cljs.core.Keyword("stake","value","stake/value",466231031),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword("item","description","item/description",-1431609213),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-votes","item-votes",1479448359),new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),true], null)], null));
var chunk__507306_507316 = null;
var count__507307_507317 = (0);
var i__507308_507318 = (0);
while(true){
if((i__507308_507318 < count__507307_507317)){
var vec__507309_507319 = cljs.core._nth.call(null,chunk__507306_507316,i__507308_507318);
var object_507320 = cljs.core.nth.call(null,vec__507309_507319,(0),null);
var method_507321 = cljs.core.nth.call(null,vec__507309_507319,(1),null);
var remote_507322 = cljs.core.nth.call(null,vec__507309_507319,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_507321,((function (seq__507305_507315,chunk__507306_507316,count__507307_507317,i__507308_507318,vec__507309_507319,object_507320,method_507321,remote_507322){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_507322,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_507320,dispatch_key], null))], null);
});})(seq__507305_507315,chunk__507306_507316,count__507307_507317,i__507308_507318,vec__507309_507319,object_507320,method_507321,remote_507322))
);

var G__507323 = seq__507305_507315;
var G__507324 = chunk__507306_507316;
var G__507325 = count__507307_507317;
var G__507326 = (i__507308_507318 + (1));
seq__507305_507315 = G__507323;
chunk__507306_507316 = G__507324;
count__507307_507317 = G__507325;
i__507308_507318 = G__507326;
continue;
} else {
var temp__6728__auto___507327 = cljs.core.seq.call(null,seq__507305_507315);
if(temp__6728__auto___507327){
var seq__507305_507328__$1 = temp__6728__auto___507327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__507305_507328__$1)){
var c__35293__auto___507329 = cljs.core.chunk_first.call(null,seq__507305_507328__$1);
var G__507330 = cljs.core.chunk_rest.call(null,seq__507305_507328__$1);
var G__507331 = c__35293__auto___507329;
var G__507332 = cljs.core.count.call(null,c__35293__auto___507329);
var G__507333 = (0);
seq__507305_507315 = G__507330;
chunk__507306_507316 = G__507331;
count__507307_507317 = G__507332;
i__507308_507318 = G__507333;
continue;
} else {
var vec__507312_507334 = cljs.core.first.call(null,seq__507305_507328__$1);
var object_507335 = cljs.core.nth.call(null,vec__507312_507334,(0),null);
var method_507336 = cljs.core.nth.call(null,vec__507312_507334,(1),null);
var remote_507337 = cljs.core.nth.call(null,vec__507312_507334,(2),null);
cljs.core._add_method.call(null,ui.core.read,method_507336,((function (seq__507305_507315,chunk__507306_507316,count__507307_507317,i__507308_507318,vec__507312_507334,object_507335,method_507336,remote_507337,seq__507305_507328__$1,temp__6728__auto___507327){
return (function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote_507337,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_507335,dispatch_key], null))], null);
});})(seq__507305_507315,chunk__507306_507316,count__507307_507317,i__507308_507318,vec__507312_507334,object_507335,method_507336,remote_507337,seq__507305_507328__$1,temp__6728__auto___507327))
);

var G__507338 = cljs.core.next.call(null,seq__507305_507328__$1);
var G__507339 = null;
var G__507340 = (0);
var G__507341 = (0);
seq__507305_507315 = G__507338;
chunk__507306_507316 = G__507339;
count__507307_507317 = G__507340;
i__507308_507318 = G__507341;
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
var G__507342__delegate = function (args){
return cljs.core.apply.call(null,ui.core.simple_read_with_remote,args);
};
var G__507342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__507343__i = 0, G__507343__a = new Array(arguments.length -  0);
while (G__507343__i < G__507343__a.length) {G__507343__a[G__507343__i] = arguments[G__507343__i + 0]; ++G__507343__i;}
  args = new cljs.core.IndexedSeq(G__507343__a,0);
} 
return G__507342__delegate.call(this,args);};
G__507342.cljs$lang$maxFixedArity = 0;
G__507342.cljs$lang$applyTo = (function (arglist__507344){
var args = cljs.core.seq(arglist__507344);
return G__507342__delegate(args);
});
G__507342.cljs$core$IFn$_invoke$arity$variadic = G__507342__delegate;
return G__507342;
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
var map__507345 = params;
var map__507345__$1 = ((((!((map__507345 == null)))?((((map__507345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507345):map__507345);
var id = cljs.core.get.call(null,map__507345__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__507345__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),((function (map__507345,map__507345__$1,id,description){
return (function (state){
var map__507347 = state;
var map__507347__$1 = ((((!((map__507347 == null)))?((((map__507347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507347):map__507347);
var proposals = cljs.core.get.call(null,map__507347__$1,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153));
var proposal = proposals.call(null,id);
var new_tempid = om.next.tempid.call(null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),cljs.core.assoc.call(null,cljs.core.update.call(null,proposals,id,cljs.core.assoc,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),description,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),false),new_tempid,cljs.core.assoc.call(null,proposal,new cljs.core.Keyword("db","id","db/id",-1388397098),new_tempid,new cljs.core.Keyword("proposal","unsaved","proposal/unsaved",-989146935),true))),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),new_tempid], null));
});})(map__507345,map__507345__$1,id,description))
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
var map__507349 = params;
var map__507349__$1 = ((((!((map__507349 == null)))?((((map__507349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507349):map__507349);
var address = cljs.core.get.call(null,map__507349__$1,new cljs.core.Keyword(null,"address","address",559499426));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35244__auto__ = (function ui$core$map_by_id_$_iter__507355(s__507356){
return (new cljs.core.LazySeq(null,(function (){
var s__507356__$1 = s__507356;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__507356__$1);
if(temp__6728__auto__){
var s__507356__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__507356__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__507356__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__507358 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__507357 = (0);
while(true){
if((i__507357 < size__35243__auto__)){
var item = cljs.core._nth.call(null,c__35242__auto__,i__507357);
cljs.core.chunk_append.call(null,b__507358,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null));

var G__507359 = (i__507357 + (1));
i__507357 = G__507359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507358),ui$core$map_by_id_$_iter__507355.call(null,cljs.core.chunk_rest.call(null,s__507356__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507358),null);
}
} else {
var item = cljs.core.first.call(null,s__507356__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),item], null),ui$core$map_by_id_$_iter__507355.call(null,cljs.core.rest.call(null,s__507356__$2)));
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
var map__507366 = ui.core.tweak_tree.call(null,b);
var map__507366__$1 = ((((!((map__507366 == null)))?((((map__507366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507366):map__507366);
var network_id = cljs.core.get.call(null,map__507366__$1,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338));
var proposals = cljs.core.get.call(null,map__507366__$1,new cljs.core.Keyword("etherean","proposals","etherean/proposals",1266696444));
var order = cljs.core.get.call(null,map__507366__$1,new cljs.core.Keyword("proposal","order","proposal/order",1810191842));
var stakes = cljs.core.get.call(null,map__507366__$1,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547));
var user = cljs.core.get.call(null,map__507366__$1,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072));
var items = cljs.core.get.call(null,map__507366__$1,new cljs.core.Keyword("etherean","items","etherean/items",165918606));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,a,new cljs.core.Keyword("etherean","network-id","etherean/network-id",-1036956338),((function (map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items){
return (function (k){
var or__34390__auto__ = network_id;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return k;
}
});})(map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),cljs.core.merge,user),new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),((function (map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items){
return (function (proposals_old){
return cljs.core.merge_with.call(null,cljs.core.merge,proposals_old,ui.core.map_by_id.call(null,proposals));
});})(map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("proposal","order","proposal/order",1810191842),((function (map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items){
return (function (order_old){
if(cljs.core.truth_(proposals)){
var ks = cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),proposals),cljs.core.filter.call(null,om.next.tempid_QMARK_,cljs.core.map.call(null,cljs.core.second,order_old)));
return cljs.core.vec.call(null,(function (){var iter__35244__auto__ = ((function (ks,map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items){
return (function ui$core$my_merge_tree_$_iter__507368(s__507369){
return (new cljs.core.LazySeq(null,((function (ks,map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items){
return (function (){
var s__507369__$1 = s__507369;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__507369__$1);
if(temp__6728__auto__){
var s__507369__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__507369__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__507369__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__507371 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__507370 = (0);
while(true){
if((i__507370 < size__35243__auto__)){
var k = cljs.core._nth.call(null,c__35242__auto__,i__507370);
cljs.core.chunk_append.call(null,b__507371,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null));

var G__507372 = (i__507370 + (1));
i__507370 = G__507372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507371),ui$core$my_merge_tree_$_iter__507368.call(null,cljs.core.chunk_rest.call(null,s__507369__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__507371),null);
}
} else {
var k = cljs.core.first.call(null,s__507369__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),k], null),ui$core$my_merge_tree_$_iter__507368.call(null,cljs.core.rest.call(null,s__507369__$2)));
}
} else {
return null;
}
break;
}
});})(ks,map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items))
,null,null));
});})(ks,map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items))
;
return iter__35244__auto__.call(null,ks);
})());
} else {
return order_old;
}
});})(map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("stake","by-id","stake/by-id",-2104620311),((function (map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items){
return (function (stakes_old){
return cljs.core.merge_with.call(null,cljs.core.merge,stakes_old,ui.core.map_by_id.call(null,stakes));
});})(map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items))
),new cljs.core.Keyword("item","by-id","item/by-id",-2140839086),((function (map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items){
return (function (items_old){
var or__34390__auto__ = items;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return items_old;
}
});})(map__507366,map__507366__$1,network_id,proposals,order,stakes,user,items))
);
});
ui.core.my_merge = (function ui$core$my_merge(reconciler,state,res,query){
var k = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),k,new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,cljs.core.select_keys.call(null,res,k),query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
ui.core.migrate = (function ui$core$migrate(var_args){
var args507373 = [];
var len__35573__auto___507420 = arguments.length;
var i__35574__auto___507421 = (0);
while(true){
if((i__35574__auto___507421 < len__35573__auto___507420)){
args507373.push((arguments[i__35574__auto___507421]));

var G__507422 = (i__35574__auto___507421 + (1));
i__35574__auto___507421 = G__507422;
continue;
} else {
}
break;
}

var G__507375 = args507373.length;
switch (G__507375) {
case 3:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return ui.core.migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args507373.length)].join('')));

}
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return ui.core.migrate.call(null,app_state_pure,query,tempids,null);
});

ui.core.migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function ui$core$dissoc_in(pure,p__507398){
var vec__507402 = p__507398;
var table = cljs.core.nth.call(null,vec__507402,(0),null);
var id = cljs.core.nth.call(null,vec__507402,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function ui$core$step(pure,p__507405){
var vec__507413 = p__507405;
var old = cljs.core.nth.call(null,vec__507413,(0),null);
var vec__507416 = cljs.core.nth.call(null,vec__507413,(1),null);
var _ = cljs.core.nth.call(null,vec__507416,(0),null);
var id = cljs.core.nth.call(null,vec__507416,(1),null);
var new$ = vec__507416;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__507419 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__507419,id_key,id);
} else {
return G__507419;
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
var len__35573__auto___507441 = arguments.length;
var i__35574__auto___507442 = (0);
while(true){
if((i__35574__auto___507442 < len__35573__auto___507441)){
args__35580__auto__.push((arguments[i__35574__auto___507442]));

var G__507443 = (i__35574__auto___507442 + (1));
i__35574__auto___507442 = G__507443;
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
return (function (state_507431){
var state_val_507432 = (state_507431[(1)]);
if((state_val_507432 === (1))){
var state_507431__$1 = state_507431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507431__$1,(2),c,result);
} else {
if((state_val_507432 === (2))){
var inst_507428 = (state_507431[(2)]);
var inst_507429 = cljs.core.async.close_BANG_.call(null,c);
var state_507431__$1 = (function (){var statearr_507433 = state_507431;
(statearr_507433[(7)] = inst_507428);

return statearr_507433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507431__$1,inst_507429);
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
var statearr_507437 = [null,null,null,null,null,null,null,null];
(statearr_507437[(0)] = ui$core$state_machine__40145__auto__);

(statearr_507437[(1)] = (1));

return statearr_507437;
});
var ui$core$state_machine__40145__auto____1 = (function (state_507431){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507438){if((e507438 instanceof Object)){
var ex__40148__auto__ = e507438;
var statearr_507439_507444 = state_507431;
(statearr_507439_507444[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507445 = state_507431;
state_507431 = G__507445;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_507431){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_507431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,start_time))
})();
var state__40169__auto__ = (function (){var statearr_507440 = f__40168__auto__.call(null);
(statearr_507440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507440;
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

ui.core.chan_call.cljs$lang$applyTo = (function (seq507424){
var G__507425 = cljs.core.first.call(null,seq507424);
var seq507424__$1 = cljs.core.next.call(null,seq507424);
var G__507426 = cljs.core.first.call(null,seq507424__$1);
var seq507424__$2 = cljs.core.next.call(null,seq507424__$1);
return ui.core.chan_call.cljs$core$IFn$_invoke$arity$variadic(G__507425,G__507426,seq507424__$2);
});

ui.core.get_network = (function ui$core$get_network(){
var c = cljs.core.async.chan.call(null);
web3.version.getNetwork(((function (c){
return (function (error,result){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c){
return (function (state_507463){
var state_val_507464 = (state_507463[(1)]);
if((state_val_507464 === (1))){
var inst_507459 = (result | (0));
var state_507463__$1 = state_507463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507463__$1,(2),c,inst_507459);
} else {
if((state_val_507464 === (2))){
var inst_507461 = (state_507463[(2)]);
var state_507463__$1 = state_507463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507463__$1,inst_507461);
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
var statearr_507468 = [null,null,null,null,null,null,null];
(statearr_507468[(0)] = ui$core$get_network_$_state_machine__40145__auto__);

(statearr_507468[(1)] = (1));

return statearr_507468;
});
var ui$core$get_network_$_state_machine__40145__auto____1 = (function (state_507463){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507469){if((e507469 instanceof Object)){
var ex__40148__auto__ = e507469;
var statearr_507470_507472 = state_507463;
(statearr_507470_507472[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507473 = state_507463;
state_507463 = G__507473;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_network_$_state_machine__40145__auto__ = function(state_507463){
switch(arguments.length){
case 0:
return ui$core$get_network_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_network_$_state_machine__40145__auto____1.call(this,state_507463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_network_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_network_$_state_machine__40145__auto____0;
ui$core$get_network_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_network_$_state_machine__40145__auto____1;
return ui$core$get_network_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_507471 = f__40168__auto__.call(null);
(statearr_507471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507471;
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
var len__35573__auto___507532 = arguments.length;
var i__35574__auto___507533 = (0);
while(true){
if((i__35574__auto___507533 < len__35573__auto___507532)){
args__35580__auto__.push((arguments[i__35574__auto___507533]));

var G__507534 = (i__35574__auto___507533 + (1));
i__35574__auto___507533 = G__507534;
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
var vec__507477 = (((cljs.core.seq.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,body),cljs.core.rest.call(null,body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,body], null));
var obj = cljs.core.nth.call(null,vec__507477,(0),null);
var body__$1 = cljs.core.nth.call(null,vec__507477,(1),null);
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,c,vec__507477,obj,body__$1){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,c,vec__507477,obj,body__$1){
return (function (state_507504){
var state_val_507505 = (state_507504[(1)]);
if((state_val_507505 === (1))){
var inst_507480 = ui.core.get_network.call(null);
var state_507504__$1 = state_507504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_507504__$1,(2),inst_507480);
} else {
if((state_val_507505 === (2))){
var inst_507482 = (state_507504[(2)]);
var inst_507483 = cljs.core._EQ_.call(null,inst_507482,(3));
var state_507504__$1 = state_507504;
if(inst_507483){
var statearr_507506_507535 = state_507504__$1;
(statearr_507506_507535[(1)] = (3));

} else {
var statearr_507507_507536 = state_507504__$1;
(statearr_507507_507536[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507505 === (3))){
var inst_507485 = cljs.core.name.call(null,fname);
var inst_507486 = (contract[inst_507485]);
var inst_507487 = inst_507486.sendTransaction;
var inst_507488 = cljs.core.vec.call(null,body__$1);
var inst_507489 = [new cljs.core.Keyword(null,"gas","gas",-139961463)];
var inst_507490 = [(4000000)];
var inst_507491 = cljs.core.PersistentHashMap.fromArrays(inst_507489,inst_507490);
var inst_507492 = cljs.core.merge.call(null,inst_507491,obj);
var inst_507493 = cljs.core.clj__GT_js.call(null,inst_507492);
var inst_507494 = (function (){return ((function (inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1){
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
return cljs.core.reset_BANG_.call(null,timer,setInterval(((function (timer,inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1){
return (function (){
return web3.eth.getTransactionReceipt(result,((function (timer,inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1){
return (function (error__$1,receipt){
if(cljs.core.truth_(receipt)){
var c__40167__auto___507537__$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto___507537__$1,timer,inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto___507537__$1,timer,inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1){
return (function (state_507512){
var state_val_507513 = (state_507512[(1)]);
if((state_val_507513 === (1))){
var state_507512__$1 = state_507512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507512__$1,(2),c,receipt);
} else {
if((state_val_507513 === (2))){
var inst_507509 = (state_507512[(2)]);
var inst_507510 = cljs.core.async.close_BANG_.call(null,c);
var state_507512__$1 = (function (){var statearr_507514 = state_507512;
(statearr_507514[(7)] = inst_507509);

return statearr_507514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507512__$1,inst_507510);
} else {
return null;
}
}
});})(c__40167__auto___507537__$1,timer,inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1))
;
return ((function (switch__40144__auto__,c__40167__auto___507537__$1,timer,inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_507518 = [null,null,null,null,null,null,null,null];
(statearr_507518[(0)] = ui$core$state_machine__40145__auto__);

(statearr_507518[(1)] = (1));

return statearr_507518;
});
var ui$core$state_machine__40145__auto____1 = (function (state_507512){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507519){if((e507519 instanceof Object)){
var ex__40148__auto__ = e507519;
var statearr_507520_507538 = state_507512;
(statearr_507520_507538[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507539 = state_507512;
state_507512 = G__507539;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_507512){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_507512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto___507537__$1,timer,inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1))
})();
var state__40169__auto__ = (function (){var statearr_507521 = f__40168__auto__.call(null);
(statearr_507521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto___507537__$1);

return statearr_507521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto___507537__$1,timer,inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1))
);


return clearInterval(cljs.core.deref.call(null,timer));
} else {
return null;
}
});})(timer,inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1))
);
});})(timer,inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1))
,(5000)));
}
});
;})(inst_507485,inst_507486,inst_507487,inst_507488,inst_507489,inst_507490,inst_507491,inst_507492,inst_507493,state_val_507505,c__40167__auto__,c,vec__507477,obj,body__$1))
})();
var inst_507495 = cljs.core.conj.call(null,inst_507488,inst_507493,inst_507494);
var inst_507496 = cljs.core.apply.call(null,cljs.core.array,inst_507495);
var inst_507497 = inst_507487.apply(contract,inst_507496);
var state_507504__$1 = (function (){var statearr_507522 = state_507504;
(statearr_507522[(7)] = inst_507497);

return statearr_507522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_507504__$1,(6),c);
} else {
if((state_val_507505 === (4))){
var state_507504__$1 = state_507504;
var statearr_507523_507540 = state_507504__$1;
(statearr_507523_507540[(2)] = null);

(statearr_507523_507540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507505 === (5))){
var inst_507502 = (state_507504[(2)]);
var state_507504__$1 = state_507504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507504__$1,inst_507502);
} else {
if((state_val_507505 === (6))){
var inst_507499 = (state_507504[(2)]);
var state_507504__$1 = state_507504;
var statearr_507524_507541 = state_507504__$1;
(statearr_507524_507541[(2)] = inst_507499);

(statearr_507524_507541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__40167__auto__,c,vec__507477,obj,body__$1))
;
return ((function (switch__40144__auto__,c__40167__auto__,c,vec__507477,obj,body__$1){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_507528 = [null,null,null,null,null,null,null,null];
(statearr_507528[(0)] = ui$core$state_machine__40145__auto__);

(statearr_507528[(1)] = (1));

return statearr_507528;
});
var ui$core$state_machine__40145__auto____1 = (function (state_507504){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507529){if((e507529 instanceof Object)){
var ex__40148__auto__ = e507529;
var statearr_507530_507542 = state_507504;
(statearr_507530_507542[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507543 = state_507504;
state_507504 = G__507543;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_507504){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_507504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,vec__507477,obj,body__$1))
})();
var state__40169__auto__ = (function (){var statearr_507531 = f__40168__auto__.call(null);
(statearr_507531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c,vec__507477,obj,body__$1))
);

return c__40167__auto__;
});

ui.core.chan_transact.cljs$lang$maxFixedArity = (2);

ui.core.chan_transact.cljs$lang$applyTo = (function (seq507474){
var G__507475 = cljs.core.first.call(null,seq507474);
var seq507474__$1 = cljs.core.next.call(null,seq507474);
var G__507476 = cljs.core.first.call(null,seq507474__$1);
var seq507474__$2 = cljs.core.next.call(null,seq507474__$1);
return ui.core.chan_transact.cljs$core$IFn$_invoke$arity$variadic(G__507475,G__507476,seq507474__$2);
});

ui.core.chan_event = (function ui$core$chan_event(var_args){
var args__35580__auto__ = [];
var len__35573__auto___507564 = arguments.length;
var i__35574__auto___507565 = (0);
while(true){
if((i__35574__auto___507565 < len__35573__auto___507564)){
args__35580__auto__.push((arguments[i__35574__auto___507565]));

var G__507566 = (i__35574__auto___507565 + (1));
i__35574__auto___507565 = G__507566;
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
return (function (state_507554){
var state_val_507555 = (state_507554[(1)]);
if((state_val_507555 === (1))){
var state_507554__$1 = state_507554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507554__$1,(2),c,result);
} else {
if((state_val_507555 === (2))){
var inst_507549 = (state_507554[(2)]);
var inst_507550 = cljs.core.async.close_BANG_.call(null,c);
var inst_507551 = cljs.core.deref.call(null,event);
var inst_507552 = inst_507551.stopWatching();
var state_507554__$1 = (function (){var statearr_507556 = state_507554;
(statearr_507556[(7)] = inst_507550);

(statearr_507556[(8)] = inst_507549);

return statearr_507556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507554__$1,inst_507552);
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
var statearr_507560 = [null,null,null,null,null,null,null,null,null];
(statearr_507560[(0)] = ui$core$state_machine__40145__auto__);

(statearr_507560[(1)] = (1));

return statearr_507560;
});
var ui$core$state_machine__40145__auto____1 = (function (state_507554){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507561){if((e507561 instanceof Object)){
var ex__40148__auto__ = e507561;
var statearr_507562_507567 = state_507554;
(statearr_507562_507567[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507568 = state_507554;
state_507554 = G__507568;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_507554){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_507554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,event))
})();
var state__40169__auto__ = (function (){var statearr_507563 = f__40168__auto__.call(null);
(statearr_507563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507563;
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

ui.core.chan_event.cljs$lang$applyTo = (function (seq507544){
var G__507545 = cljs.core.first.call(null,seq507544);
var seq507544__$1 = cljs.core.next.call(null,seq507544);
var G__507546 = cljs.core.first.call(null,seq507544__$1);
var seq507544__$2 = cljs.core.next.call(null,seq507544__$1);
var G__507547 = cljs.core.first.call(null,seq507544__$2);
var seq507544__$3 = cljs.core.next.call(null,seq507544__$2);
return ui.core.chan_event.cljs$core$IFn$_invoke$arity$variadic(G__507545,G__507546,G__507547,seq507544__$3);
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
return (function (state_507591){
var state_val_507592 = (state_507591[(1)]);
if((state_val_507592 === (1))){
var state_507591__$1 = state_507591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507591__$1,(2),c,result);
} else {
if((state_val_507592 === (2))){
var inst_507586 = (state_507591[(2)]);
var inst_507587 = cljs.core.async.close_BANG_.call(null,c);
var inst_507588 = cljs.core.deref.call(null,event);
var inst_507589 = inst_507588.stopWatching();
var state_507591__$1 = (function (){var statearr_507593 = state_507591;
(statearr_507593[(7)] = inst_507587);

(statearr_507593[(8)] = inst_507586);

return statearr_507593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507591__$1,inst_507589);
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
var statearr_507597 = [null,null,null,null,null,null,null,null,null];
(statearr_507597[(0)] = ui$core$query_events_$_state_machine__40145__auto__);

(statearr_507597[(1)] = (1));

return statearr_507597;
});
var ui$core$query_events_$_state_machine__40145__auto____1 = (function (state_507591){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507598){if((e507598 instanceof Object)){
var ex__40148__auto__ = e507598;
var statearr_507599_507601 = state_507591;
(statearr_507599_507601[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507602 = state_507591;
state_507591 = G__507602;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$query_events_$_state_machine__40145__auto__ = function(state_507591){
switch(arguments.length){
case 0:
return ui$core$query_events_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$query_events_$_state_machine__40145__auto____1.call(this,state_507591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$query_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$query_events_$_state_machine__40145__auto____0;
ui$core$query_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$query_events_$_state_machine__40145__auto____1;
return ui$core$query_events_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c,event,start_time))
})();
var state__40169__auto__ = (function (){var statearr_507600 = f__40168__auto__.call(null);
(statearr_507600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507600;
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
return (function (state_507620){
var state_val_507621 = (state_507620[(1)]);
if((state_val_507621 === (1))){
var inst_507616 = cljs.core.vec.call(null,result);
var state_507620__$1 = state_507620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507620__$1,(2),c,inst_507616);
} else {
if((state_val_507621 === (2))){
var inst_507618 = (state_507620[(2)]);
var state_507620__$1 = state_507620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507620__$1,inst_507618);
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
var statearr_507625 = [null,null,null,null,null,null,null];
(statearr_507625[(0)] = ui$core$get_historical_events_$_state_machine__40145__auto__);

(statearr_507625[(1)] = (1));

return statearr_507625;
});
var ui$core$get_historical_events_$_state_machine__40145__auto____1 = (function (state_507620){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507626){if((e507626 instanceof Object)){
var ex__40148__auto__ = e507626;
var statearr_507627_507629 = state_507620;
(statearr_507627_507629[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507630 = state_507620;
state_507620 = G__507630;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_historical_events_$_state_machine__40145__auto__ = function(state_507620){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_historical_events_$_state_machine__40145__auto____1.call(this,state_507620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_$_state_machine__40145__auto____0;
ui$core$get_historical_events_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_$_state_machine__40145__auto____1;
return ui$core$get_historical_events_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_507628 = f__40168__auto__.call(null);
(statearr_507628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507628;
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
return (function (state_507652){
var state_val_507653 = (state_507652[(1)]);
if((state_val_507653 === (1))){
var inst_507646 = (function (){return ((function (state_val_507653,c__40167__auto__,c){
return (function (event){
return cljs.core._EQ_.call(null,event.transactionHash,hash);
});
;})(state_val_507653,c__40167__auto__,c))
})();
var inst_507647 = cljs.core.filter.call(null,inst_507646,result);
var inst_507648 = cljs.core.vec.call(null,inst_507647);
var state_507652__$1 = state_507652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507652__$1,(2),c,inst_507648);
} else {
if((state_val_507653 === (2))){
var inst_507650 = (state_507652[(2)]);
var state_507652__$1 = state_507652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507652__$1,inst_507650);
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
var statearr_507657 = [null,null,null,null,null,null,null];
(statearr_507657[(0)] = ui$core$get_historical_events_hash_$_state_machine__40145__auto__);

(statearr_507657[(1)] = (1));

return statearr_507657;
});
var ui$core$get_historical_events_hash_$_state_machine__40145__auto____1 = (function (state_507652){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507658){if((e507658 instanceof Object)){
var ex__40148__auto__ = e507658;
var statearr_507659_507661 = state_507652;
(statearr_507659_507661[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507662 = state_507652;
state_507652 = G__507662;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_historical_events_hash_$_state_machine__40145__auto__ = function(state_507652){
switch(arguments.length){
case 0:
return ui$core$get_historical_events_hash_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_historical_events_hash_$_state_machine__40145__auto____1.call(this,state_507652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_historical_events_hash_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_historical_events_hash_$_state_machine__40145__auto____0;
ui$core$get_historical_events_hash_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_historical_events_hash_$_state_machine__40145__auto____1;
return ui$core$get_historical_events_hash_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_507660 = f__40168__auto__.call(null);
(statearr_507660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507660;
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
return (function (state_507692){
var state_val_507693 = (state_507692[(1)]);
if((state_val_507693 === (1))){
var inst_507688 = ui.core.wei__GT_eth.call(null,result);
var state_507692__$1 = state_507692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507692__$1,(2),c,inst_507688);
} else {
if((state_val_507693 === (2))){
var inst_507690 = (state_507692[(2)]);
var state_507692__$1 = state_507692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507692__$1,inst_507690);
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
var statearr_507697 = [null,null,null,null,null,null,null];
(statearr_507697[(0)] = ui$core$get_balance_$_state_machine__40145__auto__);

(statearr_507697[(1)] = (1));

return statearr_507697;
});
var ui$core$get_balance_$_state_machine__40145__auto____1 = (function (state_507692){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507698){if((e507698 instanceof Object)){
var ex__40148__auto__ = e507698;
var statearr_507699_507713 = state_507692;
(statearr_507699_507713[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507714 = state_507692;
state_507692 = G__507714;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__40145__auto__ = function(state_507692){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__40145__auto____1.call(this,state_507692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__40145__auto____0;
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__40145__auto____1;
return ui$core$get_balance_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_507700 = f__40168__auto__.call(null);
(statearr_507700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,c))
);

return c__40167__auto__;
});})(c))
);
} else {
var c__40167__auto___507715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto___507715,c){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto___507715,c){
return (function (state_507704){
var state_val_507705 = (state_507704[(1)]);
if((state_val_507705 === (1))){
var state_507704__$1 = state_507704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507704__$1,(2),c,(0));
} else {
if((state_val_507705 === (2))){
var inst_507702 = (state_507704[(2)]);
var state_507704__$1 = state_507704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507704__$1,inst_507702);
} else {
return null;
}
}
});})(c__40167__auto___507715,c))
;
return ((function (switch__40144__auto__,c__40167__auto___507715,c){
return (function() {
var ui$core$get_balance_$_state_machine__40145__auto__ = null;
var ui$core$get_balance_$_state_machine__40145__auto____0 = (function (){
var statearr_507709 = [null,null,null,null,null,null,null];
(statearr_507709[(0)] = ui$core$get_balance_$_state_machine__40145__auto__);

(statearr_507709[(1)] = (1));

return statearr_507709;
});
var ui$core$get_balance_$_state_machine__40145__auto____1 = (function (state_507704){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507710){if((e507710 instanceof Object)){
var ex__40148__auto__ = e507710;
var statearr_507711_507716 = state_507704;
(statearr_507711_507716[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507717 = state_507704;
state_507704 = G__507717;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_balance_$_state_machine__40145__auto__ = function(state_507704){
switch(arguments.length){
case 0:
return ui$core$get_balance_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_balance_$_state_machine__40145__auto____1.call(this,state_507704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_balance_$_state_machine__40145__auto____0;
ui$core$get_balance_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_balance_$_state_machine__40145__auto____1;
return ui$core$get_balance_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto___507715,c))
})();
var state__40169__auto__ = (function (){var statearr_507712 = f__40168__auto__.call(null);
(statearr_507712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto___507715);

return statearr_507712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto___507715,c))
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
return (function (state_507735){
var state_val_507736 = (state_507735[(1)]);
if((state_val_507736 === (1))){
var inst_507731 = cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var state_507735__$1 = state_507735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507735__$1,(2),c,inst_507731);
} else {
if((state_val_507736 === (2))){
var inst_507733 = (state_507735[(2)]);
var state_507735__$1 = state_507735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507735__$1,inst_507733);
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
var statearr_507740 = [null,null,null,null,null,null,null];
(statearr_507740[(0)] = ui$core$get_block_$_state_machine__40145__auto__);

(statearr_507740[(1)] = (1));

return statearr_507740;
});
var ui$core$get_block_$_state_machine__40145__auto____1 = (function (state_507735){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507741){if((e507741 instanceof Object)){
var ex__40148__auto__ = e507741;
var statearr_507742_507744 = state_507735;
(statearr_507742_507744[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507745 = state_507735;
state_507735 = G__507745;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_block_$_state_machine__40145__auto__ = function(state_507735){
switch(arguments.length){
case 0:
return ui$core$get_block_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_block_$_state_machine__40145__auto____1.call(this,state_507735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_block_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_block_$_state_machine__40145__auto____0;
ui$core$get_block_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_block_$_state_machine__40145__auto____1;
return ui$core$get_block_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_507743 = f__40168__auto__.call(null);
(statearr_507743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507743;
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
return (function (state_507761){
var state_val_507762 = (state_507761[(1)]);
if((state_val_507762 === (1))){
var state_507761__$1 = state_507761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507761__$1,(2),c,result);
} else {
if((state_val_507762 === (2))){
var inst_507759 = (state_507761[(2)]);
var state_507761__$1 = state_507761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507761__$1,inst_507759);
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
var statearr_507766 = [null,null,null,null,null,null,null];
(statearr_507766[(0)] = ui$core$block_number_$_state_machine__40145__auto__);

(statearr_507766[(1)] = (1));

return statearr_507766;
});
var ui$core$block_number_$_state_machine__40145__auto____1 = (function (state_507761){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507767){if((e507767 instanceof Object)){
var ex__40148__auto__ = e507767;
var statearr_507768_507770 = state_507761;
(statearr_507768_507770[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507771 = state_507761;
state_507761 = G__507771;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$block_number_$_state_machine__40145__auto__ = function(state_507761){
switch(arguments.length){
case 0:
return ui$core$block_number_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$block_number_$_state_machine__40145__auto____1.call(this,state_507761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$block_number_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$block_number_$_state_machine__40145__auto____0;
ui$core$block_number_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$block_number_$_state_machine__40145__auto____1;
return ui$core$block_number_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,c))
})();
var state__40169__auto__ = (function (){var statearr_507769 = f__40168__auto__.call(null);
(statearr_507769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507769;
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
return (function (state_507800){
var state_val_507801 = (state_507800[(1)]);
if((state_val_507801 === (1))){
var inst_507791 = (function (){return ((function (state_val_507801,c__40167__auto__){
return (function (x){
return web3.toAscii(x);
});
;})(state_val_507801,c__40167__auto__))
})();
var inst_507792 = ui.core.query_events.call(null,ui.core.etherean,proposal_block,proposal_block,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({"proposalIndex": proposal_index}));
var state_507800__$1 = (function (){var statearr_507802 = state_507800;
(statearr_507802[(7)] = inst_507791);

return statearr_507802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_507800__$1,(2),inst_507792);
} else {
if((state_val_507801 === (2))){
var inst_507791 = (state_507800[(7)]);
var inst_507794 = (state_507800[(2)]);
var inst_507795 = inst_507794.args;
var inst_507796 = inst_507795.message;
var inst_507797 = cljs.core.map.call(null,inst_507791,inst_507796);
var inst_507798 = cljs.core.first.call(null,inst_507797);
var state_507800__$1 = state_507800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507800__$1,inst_507798);
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
var statearr_507806 = [null,null,null,null,null,null,null,null];
(statearr_507806[(0)] = ui$core$get_proposal_description_$_state_machine__40145__auto__);

(statearr_507806[(1)] = (1));

return statearr_507806;
});
var ui$core$get_proposal_description_$_state_machine__40145__auto____1 = (function (state_507800){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507807){if((e507807 instanceof Object)){
var ex__40148__auto__ = e507807;
var statearr_507808_507810 = state_507800;
(statearr_507808_507810[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507811 = state_507800;
state_507800 = G__507811;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$get_proposal_description_$_state_machine__40145__auto__ = function(state_507800){
switch(arguments.length){
case 0:
return ui$core$get_proposal_description_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$get_proposal_description_$_state_machine__40145__auto____1.call(this,state_507800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$get_proposal_description_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$get_proposal_description_$_state_machine__40145__auto____0;
ui$core$get_proposal_description_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$get_proposal_description_$_state_machine__40145__auto____1;
return ui$core$get_proposal_description_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_507809 = f__40168__auto__.call(null);
(statearr_507809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507809;
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
return (function (state_507816){
var state_val_507817 = (state_507816[(1)]);
if((state_val_507817 === (1))){
var inst_507812 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"useUpProposalVote","useUpProposalVote",352109759));
var state_507816__$1 = state_507816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_507816__$1,(2),inst_507812);
} else {
if((state_val_507817 === (2))){
var inst_507814 = (state_507816[(2)]);
var state_507816__$1 = state_507816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507816__$1,inst_507814);
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
var statearr_507821 = [null,null,null,null,null,null,null];
(statearr_507821[(0)] = ui$core$state_machine__40145__auto__);

(statearr_507821[(1)] = (1));

return statearr_507821;
});
var ui$core$state_machine__40145__auto____1 = (function (state_507816){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507822){if((e507822 instanceof Object)){
var ex__40148__auto__ = e507822;
var statearr_507823_507825 = state_507816;
(statearr_507823_507825[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507826 = state_507816;
state_507816 = G__507826;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_507816){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_507816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_507824 = f__40168__auto__.call(null);
(statearr_507824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})()], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","description","proposal/description",1644720226),(function (env,dispatch_key,params){
var map__507827 = env;
var map__507827__$1 = ((((!((map__507827 == null)))?((((map__507827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__507827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__507827):map__507827);
var proposal = cljs.core.get.call(null,map__507827__$1,new cljs.core.Keyword(null,"proposal","proposal",142522715));
var proposal_id = cljs.core.get.call(null,map__507827__$1,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ui.core.get_proposal_description.call(null,((proposal[(3)]) | (0)),new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env))], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_507833){
var state_val_507834 = (state_507833[(1)]);
if((state_val_507834 === (1))){
var inst_507829 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_507830 = cljs.core.nth.call(null,inst_507829,(0));
var inst_507831 = ui.core.wei__GT_eth.call(null,inst_507830);
var state_507833__$1 = state_507833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507833__$1,inst_507831);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_507838 = [null,null,null,null,null,null,null];
(statearr_507838[(0)] = ui$core$state_machine__40145__auto__);

(statearr_507838[(1)] = (1));

return statearr_507838;
});
var ui$core$state_machine__40145__auto____1 = (function (state_507833){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507839){if((e507839 instanceof Object)){
var ex__40148__auto__ = e507839;
var statearr_507840_507842 = state_507833;
(statearr_507840_507842[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507843 = state_507833;
state_507833 = G__507843;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_507833){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_507833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_507841 = f__40168__auto__.call(null);
(statearr_507841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507841;
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
return (function (state_507848){
var state_val_507849 = (state_507848[(1)]);
if((state_val_507849 === (1))){
var inst_507844 = new cljs.core.Keyword(null,"proposal","proposal",142522715).cljs$core$IFn$_invoke$arity$1(env);
var inst_507845 = cljs.core.nth.call(null,inst_507844,(1));
var inst_507846 = ui.core.wei__GT_eth.call(null,inst_507845);
var state_507848__$1 = state_507848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507848__$1,inst_507846);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_507853 = [null,null,null,null,null,null,null];
(statearr_507853[(0)] = ui$core$state_machine__40145__auto__);

(statearr_507853[(1)] = (1));

return statearr_507853;
});
var ui$core$state_machine__40145__auto____1 = (function (state_507848){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507854){if((e507854 instanceof Object)){
var ex__40148__auto__ = e507854;
var statearr_507855_507857 = state_507848;
(statearr_507855_507857[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507858 = state_507848;
state_507848 = G__507858;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_507848){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_507848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_507856 = f__40168__auto__.call(null);
(statearr_507856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507856;
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
return (function (state_507866){
var state_val_507867 = (state_507866[(1)]);
if((state_val_507867 === (1))){
var inst_507859 = (state_507866[(7)]);
var inst_507859__$1 = new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155).cljs$core$IFn$_invoke$arity$1(env);
var state_507866__$1 = (function (){var statearr_507868 = state_507866;
(statearr_507868[(7)] = inst_507859__$1);

return statearr_507868;
})();
if(cljs.core.truth_(inst_507859__$1)){
var statearr_507869_507880 = state_507866__$1;
(statearr_507869_507880[(1)] = (2));

} else {
var statearr_507870_507881 = state_507866__$1;
(statearr_507870_507881[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507867 === (2))){
var inst_507859 = (state_507866[(7)]);
var state_507866__$1 = state_507866;
var statearr_507871_507882 = state_507866__$1;
(statearr_507871_507882[(2)] = inst_507859);

(statearr_507871_507882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507867 === (3))){
var inst_507862 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var state_507866__$1 = state_507866;
var statearr_507872_507883 = state_507866__$1;
(statearr_507872_507883[(2)] = inst_507862);

(statearr_507872_507883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507867 === (4))){
var inst_507864 = (state_507866[(2)]);
var state_507866__$1 = state_507866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507866__$1,inst_507864);
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
var statearr_507876 = [null,null,null,null,null,null,null,null];
(statearr_507876[(0)] = ui$core$state_machine__40145__auto__);

(statearr_507876[(1)] = (1));

return statearr_507876;
});
var ui$core$state_machine__40145__auto____1 = (function (state_507866){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507877){if((e507877 instanceof Object)){
var ex__40148__auto__ = e507877;
var statearr_507878_507884 = state_507866;
(statearr_507878_507884[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__507885 = state_507866;
state_507866 = G__507885;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_507866){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_507866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_507879 = f__40168__auto__.call(null);
(statearr_507879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507879;
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
return (function (state_507893){
var state_val_507894 = (state_507893[(1)]);
if((state_val_507894 === (1))){
var inst_507886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_507887 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("proposal","description","proposal/description",1644720226),new cljs.core.Keyword("proposal","upvotes","proposal/upvotes",-280516560),new cljs.core.Keyword("proposal","downvotes","proposal/downvotes",780412132)];
var inst_507888 = [(0),"bar",(10),(5)];
var inst_507889 = cljs.core.PersistentHashMap.fromArrays(inst_507887,inst_507888);
var inst_507890 = [inst_507889];
var inst_507891 = (new cljs.core.PersistentVector(null,1,(5),inst_507886,inst_507890,null));
var state_507893__$1 = state_507893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507893__$1,inst_507891);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_507898 = [null,null,null,null,null,null,null];
(statearr_507898[(0)] = ui$core$state_machine__40145__auto__);

(statearr_507898[(1)] = (1));

return statearr_507898;
});
var ui$core$state_machine__40145__auto____1 = (function (state_507893){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e507899){if((e507899 instanceof Object)){
var ex__40148__auto__ = e507899;
var statearr_507900_508026 = state_507893;
(statearr_507900_508026[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e507899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508027 = state_507893;
state_507893 = G__508027;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_507893){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_507893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_507901 = f__40168__auto__.call(null);
(statearr_507901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_507901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})():(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_507979){
var state_val_507980 = (state_507979[(1)]);
if((state_val_507980 === (7))){
var inst_507914 = (state_507979[(2)]);
var state_507979__$1 = state_507979;
var statearr_507981_508028 = state_507979__$1;
(statearr_507981_508028[(2)] = inst_507914);

(statearr_507981_508028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507980 === (1))){
var inst_507904 = (env == null);
var inst_507905 = cljs.core.not.call(null,inst_507904);
var state_507979__$1 = state_507979;
if(inst_507905){
var statearr_507982_508029 = state_507979__$1;
(statearr_507982_508029[(1)] = (2));

} else {
var statearr_507983_508030 = state_507979__$1;
(statearr_507983_508030[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507980 === (4))){
var inst_507917 = (state_507979[(2)]);
var state_507979__$1 = state_507979;
if(cljs.core.truth_(inst_507917)){
var statearr_507984_508031 = state_507979__$1;
(statearr_507984_508031[(1)] = (8));

} else {
var statearr_507985_508032 = state_507979__$1;
(statearr_507985_508032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507980 === (13))){
var inst_507974 = (state_507979[(2)]);
var inst_507975 = cljs.core.sort_by.call(null,cljs.core.first,inst_507974);
var inst_507976 = cljs.core.map.call(null,cljs.core.second,inst_507975);
var inst_507977 = cljs.core.vec.call(null,inst_507976);
var state_507979__$1 = state_507979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507979__$1,inst_507977);
} else {
if((state_val_507980 === (6))){
var state_507979__$1 = state_507979;
var statearr_507986_508033 = state_507979__$1;
(statearr_507986_508033[(2)] = false);

(statearr_507986_508033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507980 === (3))){
var state_507979__$1 = state_507979;
var statearr_507987_508034 = state_507979__$1;
(statearr_507987_508034[(2)] = false);

(statearr_507987_508034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507980 === (12))){
var inst_507928 = (state_507979[(7)]);
var inst_507923 = (state_507979[(8)]);
var inst_507922 = (state_507979[(9)]);
var inst_507924 = (state_507979[(10)]);
var inst_507931 = (state_507979[(2)]);
var inst_507932 = (inst_507931 | (0));
var inst_507933 = cljs.core.async.chan.call(null);
var inst_507966 = cljs.core.async.chan.call(null,(1));
var inst_507967 = (function (){var map__507902 = inst_507922;
var parser = inst_507923;
var query = inst_507924;
var len = inst_507928;
var time = inst_507932;
var proposals = inst_507933;
var c__40167__auto____$1 = inst_507966;
return ((function (map__507902,parser,query,len,time,proposals,c__40167__auto____$1,inst_507928,inst_507923,inst_507922,inst_507924,inst_507931,inst_507932,inst_507933,inst_507966,state_val_507980,c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (map__507902,parser,query,len,time,proposals,c__40167__auto____$1,inst_507928,inst_507923,inst_507922,inst_507924,inst_507931,inst_507932,inst_507933,inst_507966,state_val_507980,c__40167__auto__){
return (function (state_507964){
var state_val_507965 = (state_507964[(1)]);
if((state_val_507965 === (7))){
var inst_507941 = (state_507964[(7)]);
var inst_507941__$1 = (state_507964[(2)]);
var inst_507942 = (inst_507941__$1[(2)]);
var inst_507943 = (inst_507942 | (0));
var inst_507944 = cljs.core._EQ_.call(null,time,inst_507943);
var state_507964__$1 = (function (){var statearr_507988 = state_507964;
(statearr_507988[(7)] = inst_507941__$1);

return statearr_507988;
})();
if(inst_507944){
var statearr_507989_508035 = state_507964__$1;
(statearr_507989_508035[(1)] = (8));

} else {
var statearr_507990_508036 = state_507964__$1;
(statearr_507990_508036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507965 === (1))){
var inst_507934 = (len - (1));
var inst_507935 = inst_507934;
var state_507964__$1 = (function (){var statearr_507991 = state_507964;
(statearr_507991[(8)] = inst_507935);

return statearr_507991;
})();
var statearr_507992_508037 = state_507964__$1;
(statearr_507992_508037[(2)] = null);

(statearr_507992_508037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507965 === (4))){
var inst_507935 = (state_507964[(8)]);
var inst_507939 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),inst_507935);
var state_507964__$1 = state_507964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_507964__$1,(7),inst_507939);
} else {
if((state_val_507965 === (6))){
var inst_507959 = (state_507964[(2)]);
var state_507964__$1 = state_507964;
var statearr_507993_508038 = state_507964__$1;
(statearr_507993_508038[(2)] = inst_507959);

(statearr_507993_508038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507965 === (3))){
var inst_507961 = (state_507964[(2)]);
var inst_507962 = cljs.core.async.close_BANG_.call(null,proposals);
var state_507964__$1 = (function (){var statearr_507994 = state_507964;
(statearr_507994[(9)] = inst_507961);

return statearr_507994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_507964__$1,inst_507962);
} else {
if((state_val_507965 === (12))){
var inst_507949 = (state_507964[(2)]);
var state_507964__$1 = state_507964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_507964__$1,(11),proposals,inst_507949);
} else {
if((state_val_507965 === (2))){
var inst_507935 = (state_507964[(8)]);
var inst_507937 = (inst_507935 >= (0));
var state_507964__$1 = state_507964;
if(cljs.core.truth_(inst_507937)){
var statearr_507995_508039 = state_507964__$1;
(statearr_507995_508039[(1)] = (4));

} else {
var statearr_507996_508040 = state_507964__$1;
(statearr_507996_508040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507965 === (11))){
var inst_507935 = (state_507964[(8)]);
var inst_507951 = (state_507964[(2)]);
var inst_507952 = (inst_507935 - (1));
var inst_507935__$1 = inst_507952;
var state_507964__$1 = (function (){var statearr_507997 = state_507964;
(statearr_507997[(8)] = inst_507935__$1);

(statearr_507997[(10)] = inst_507951);

return statearr_507997;
})();
var statearr_507998_508041 = state_507964__$1;
(statearr_507998_508041[(2)] = null);

(statearr_507998_508041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507965 === (9))){
var state_507964__$1 = state_507964;
var statearr_507999_508042 = state_507964__$1;
(statearr_507999_508042[(2)] = null);

(statearr_507999_508042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507965 === (5))){
var state_507964__$1 = state_507964;
var statearr_508000_508043 = state_507964__$1;
(statearr_508000_508043[(2)] = null);

(statearr_508000_508043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507965 === (10))){
var inst_507956 = (state_507964[(2)]);
var state_507964__$1 = state_507964;
var statearr_508001_508044 = state_507964__$1;
(statearr_508001_508044[(2)] = inst_507956);

(statearr_508001_508044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507965 === (8))){
var inst_507935 = (state_507964[(8)]);
var inst_507941 = (state_507964[(7)]);
var inst_507946 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"proposal","proposal",142522715),inst_507941,new cljs.core.Keyword(null,"proposal-id","proposal-id",2019625155),inst_507935);
var inst_507947 = parser.call(null,inst_507946,query);
var state_507964__$1 = state_507964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_507964__$1,(12),inst_507947);
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
});})(map__507902,parser,query,len,time,proposals,c__40167__auto____$1,inst_507928,inst_507923,inst_507922,inst_507924,inst_507931,inst_507932,inst_507933,inst_507966,state_val_507980,c__40167__auto__))
;
return ((function (switch__40144__auto__,map__507902,parser,query,len,time,proposals,c__40167__auto____$1,inst_507928,inst_507923,inst_507922,inst_507924,inst_507931,inst_507932,inst_507933,inst_507966,state_val_507980,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_508005 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_508005[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508005[(1)] = (1));

return statearr_508005;
});
var ui$core$state_machine__40145__auto____1 = (function (state_507964){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508006){if((e508006 instanceof Object)){
var ex__40148__auto__ = e508006;
var statearr_508007_508045 = state_507964;
(statearr_508007_508045[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508046 = state_507964;
state_507964 = G__508046;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_507964){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_507964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,map__507902,parser,query,len,time,proposals,c__40167__auto____$1,inst_507928,inst_507923,inst_507922,inst_507924,inst_507931,inst_507932,inst_507933,inst_507966,state_val_507980,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_508008 = f__40168__auto__.call(null);
(statearr_508008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto____$1);

return statearr_508008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});
;})(map__507902,parser,query,len,time,proposals,c__40167__auto____$1,inst_507928,inst_507923,inst_507922,inst_507924,inst_507931,inst_507932,inst_507933,inst_507966,state_val_507980,c__40167__auto__))
})();
var inst_507968 = cljs.core.async.impl.dispatch.run.call(null,inst_507967);
var inst_507970 = (function (){var map__507902 = inst_507922;
var parser = inst_507923;
var query = inst_507924;
var len = inst_507928;
var time = inst_507932;
var proposals = inst_507933;
return ((function (map__507902,parser,query,len,time,proposals,inst_507928,inst_507923,inst_507922,inst_507924,inst_507931,inst_507932,inst_507933,inst_507966,inst_507967,inst_507968,state_val_507980,c__40167__auto__){
return (function (acc,p__507969){
var map__508009 = p__507969;
var map__508009__$1 = ((((!((map__508009 == null)))?((((map__508009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__508009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__508009):map__508009);
var item = map__508009__$1;
var id = cljs.core.get.call(null,map__508009__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.assoc.call(null,acc,id,item);
});
;})(map__507902,parser,query,len,time,proposals,inst_507928,inst_507923,inst_507922,inst_507924,inst_507931,inst_507932,inst_507933,inst_507966,inst_507967,inst_507968,state_val_507980,c__40167__auto__))
})();
var inst_507971 = cljs.core.PersistentHashMap.EMPTY;
var inst_507972 = cljs.core.async.reduce.call(null,inst_507970,inst_507971,inst_507933);
var state_507979__$1 = (function (){var statearr_508011 = state_507979;
(statearr_508011[(11)] = inst_507968);

return statearr_508011;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_507979__$1,(13),inst_507972);
} else {
if((state_val_507980 === (2))){
var inst_507907 = env.cljs$lang$protocol_mask$partition0$;
var inst_507908 = (inst_507907 & (64));
var inst_507909 = env.cljs$core$ISeq$;
var inst_507910 = (inst_507908) || (inst_507909);
var state_507979__$1 = state_507979;
if(cljs.core.truth_(inst_507910)){
var statearr_508012_508047 = state_507979__$1;
(statearr_508012_508047[(1)] = (5));

} else {
var statearr_508013_508048 = state_507979__$1;
(statearr_508013_508048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507980 === (11))){
var inst_507927 = (state_507979[(2)]);
var inst_507928 = (inst_507927 | (0));
var inst_507929 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"startOfDay","startOfDay",-1097735630));
var state_507979__$1 = (function (){var statearr_508014 = state_507979;
(statearr_508014[(7)] = inst_507928);

return statearr_508014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_507979__$1,(12),inst_507929);
} else {
if((state_val_507980 === (9))){
var state_507979__$1 = state_507979;
var statearr_508015_508049 = state_507979__$1;
(statearr_508015_508049[(2)] = env);

(statearr_508015_508049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507980 === (5))){
var state_507979__$1 = state_507979;
var statearr_508016_508050 = state_507979__$1;
(statearr_508016_508050[(2)] = true);

(statearr_508016_508050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_507980 === (10))){
var inst_507922 = (state_507979[(9)]);
var inst_507922__$1 = (state_507979[(2)]);
var inst_507923 = cljs.core.get.call(null,inst_507922__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_507924 = cljs.core.get.call(null,inst_507922__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_507925 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposalsLength","proposalsLength",1061236851));
var state_507979__$1 = (function (){var statearr_508017 = state_507979;
(statearr_508017[(8)] = inst_507923);

(statearr_508017[(9)] = inst_507922__$1);

(statearr_508017[(10)] = inst_507924);

return statearr_508017;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_507979__$1,(11),inst_507925);
} else {
if((state_val_507980 === (8))){
var inst_507919 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_507979__$1 = state_507979;
var statearr_508018_508051 = state_507979__$1;
(statearr_508018_508051[(2)] = inst_507919);

(statearr_508018_508051[(1)] = (10));


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
var statearr_508022 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_508022[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508022[(1)] = (1));

return statearr_508022;
});
var ui$core$state_machine__40145__auto____1 = (function (state_507979){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_507979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508023){if((e508023 instanceof Object)){
var ex__40148__auto__ = e508023;
var statearr_508024_508052 = state_507979;
(statearr_508024_508052[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_507979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508053 = state_507979;
state_507979 = G__508053;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_507979){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_507979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_508025 = f__40168__auto__.call(null);
(statearr_508025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-proposals","etherean/main-proposals",-1970749231),(function() { 
var G__508054__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__508054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__508055__i = 0, G__508055__a = new Array(arguments.length -  0);
while (G__508055__i < G__508055__a.length) {G__508055__a[G__508055__i] = arguments[G__508055__i + 0]; ++G__508055__i;}
  args = new cljs.core.IndexedSeq(G__508055__a,0);
} 
return G__508054__delegate.call(this,args);};
G__508054.cljs$lang$maxFixedArity = 0;
G__508054.cljs$lang$applyTo = (function (arglist__508056){
var args = cljs.core.seq(arglist__508056);
return G__508054__delegate(args);
});
G__508054.cljs$core$IFn$_invoke$arity$variadic = G__508054__delegate;
return G__508054;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","user","etherean/user",-2014749072),(function() { 
var G__508057__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__508057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__508058__i = 0, G__508058__a = new Array(arguments.length -  0);
while (G__508058__i < G__508058__a.length) {G__508058__a[G__508058__i] = arguments[G__508058__i + 0]; ++G__508058__i;}
  args = new cljs.core.IndexedSeq(G__508058__a,0);
} 
return G__508057__delegate.call(this,args);};
G__508057.cljs$lang$maxFixedArity = 0;
G__508057.cljs$lang$applyTo = (function (arglist__508059){
var args = cljs.core.seq(arglist__508059);
return G__508057__delegate(args);
});
G__508057.cljs$core$IFn$_invoke$arity$variadic = G__508057__delegate;
return G__508057;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","stakes","etherean/stakes",1370987547),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(ui.core.offline)?(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_508067){
var state_val_508068 = (state_508067[(1)]);
if((state_val_508068 === (1))){
var inst_508060 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_508061 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031),new cljs.core.Keyword("stake","address","stake/address",680266700)];
var inst_508062 = [(0),(1000),"12345"];
var inst_508063 = cljs.core.PersistentHashMap.fromArrays(inst_508061,inst_508062);
var inst_508064 = [inst_508063];
var inst_508065 = (new cljs.core.PersistentVector(null,1,(5),inst_508060,inst_508064,null));
var state_508067__$1 = state_508067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508067__$1,inst_508065);
} else {
return null;
}
});})(c__40167__auto__))
;
return ((function (switch__40144__auto__,c__40167__auto__){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_508072 = [null,null,null,null,null,null,null];
(statearr_508072[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508072[(1)] = (1));

return statearr_508072;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508067){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508073){if((e508073 instanceof Object)){
var ex__40148__auto__ = e508073;
var statearr_508074_508203 = state_508067;
(statearr_508074_508203[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508204 = state_508067;
state_508067 = G__508204;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508067){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_508075 = f__40168__auto__.call(null);
(statearr_508075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})():(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__){
return (function (state_508161){
var state_val_508162 = (state_508161[(1)]);
if((state_val_508162 === (7))){
var inst_508099 = (state_508161[(2)]);
var inst_508100 = cljs.core.range.call(null,inst_508099);
var inst_508101 = cljs.core.seq.call(null,inst_508100);
var inst_508102 = inst_508101;
var inst_508103 = null;
var inst_508104 = (0);
var inst_508105 = (0);
var state_508161__$1 = (function (){var statearr_508163 = state_508161;
(statearr_508163[(7)] = inst_508103);

(statearr_508163[(8)] = inst_508104);

(statearr_508163[(9)] = inst_508105);

(statearr_508163[(10)] = inst_508102);

return statearr_508163;
})();
var statearr_508164_508205 = state_508161__$1;
(statearr_508164_508205[(2)] = null);

(statearr_508164_508205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (20))){
var inst_508151 = (state_508161[(2)]);
var state_508161__$1 = state_508161;
var statearr_508165_508206 = state_508161__$1;
(statearr_508165_508206[(2)] = inst_508151);

(statearr_508165_508206[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (1))){
var inst_508076 = cljs.core.PersistentVector.EMPTY;
var inst_508077 = cljs.core.atom.call(null,inst_508076);
var inst_508078 = ui.core.get_network.call(null);
var state_508161__$1 = (function (){var statearr_508166 = state_508161;
(statearr_508166[(11)] = inst_508077);

return statearr_508166;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508161__$1,(2),inst_508078);
} else {
if((state_val_508162 === (4))){
var inst_508088 = alert("Fatal Error: EthereanMind is missing data on the blockchain. Please make sure you have MetaMask set to the \"Ethereum Ropsten Test Network\".\n\n(Other possible reasons for this error may include an ongoing blockchain attack or an outage of the Infuria system.)");
var state_508161__$1 = state_508161;
var statearr_508167_508207 = state_508161__$1;
(statearr_508167_508207[(2)] = inst_508088);

(statearr_508167_508207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (15))){
var inst_508126 = (state_508161[(12)]);
var inst_508128 = cljs.core.chunked_seq_QMARK_.call(null,inst_508126);
var state_508161__$1 = state_508161;
if(inst_508128){
var statearr_508168_508208 = state_508161__$1;
(statearr_508168_508208[(1)] = (18));

} else {
var statearr_508169_508209 = state_508161__$1;
(statearr_508169_508209[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (21))){
var inst_508138 = (state_508161[(13)]);
var inst_508092 = (state_508161[(14)]);
var inst_508138__$1 = (state_508161[(2)]);
var inst_508139 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_508140 = ui.core.chan_call.call(null,inst_508092,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_508138__$1);
var state_508161__$1 = (function (){var statearr_508170 = state_508161;
(statearr_508170[(15)] = inst_508139);

(statearr_508170[(13)] = inst_508138__$1);

return statearr_508170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508161__$1,(22),inst_508140);
} else {
if((state_val_508162 === (13))){
var inst_508113 = (state_508161[(16)]);
var inst_508092 = (state_508161[(14)]);
var inst_508113__$1 = (state_508161[(2)]);
var inst_508114 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("stake","value","stake/value",466231031)];
var inst_508115 = ui.core.chan_call.call(null,inst_508092,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),inst_508113__$1);
var state_508161__$1 = (function (){var statearr_508171 = state_508161;
(statearr_508171[(16)] = inst_508113__$1);

(statearr_508171[(17)] = inst_508114);

return statearr_508171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508161__$1,(14),inst_508115);
} else {
if((state_val_508162 === (22))){
var inst_508139 = (state_508161[(15)]);
var inst_508077 = (state_508161[(11)]);
var inst_508126 = (state_508161[(12)]);
var inst_508138 = (state_508161[(13)]);
var inst_508142 = (state_508161[(2)]);
var inst_508143 = (inst_508142[(0)]);
var inst_508144 = ui.core.wei__GT_eth.call(null,inst_508143);
var inst_508145 = [inst_508138,inst_508144];
var inst_508146 = cljs.core.PersistentHashMap.fromArrays(inst_508139,inst_508145);
var inst_508147 = cljs.core.swap_BANG_.call(null,inst_508077,cljs.core.conj,inst_508146);
var inst_508148 = cljs.core.next.call(null,inst_508126);
var inst_508102 = inst_508148;
var inst_508103 = null;
var inst_508104 = (0);
var inst_508105 = (0);
var state_508161__$1 = (function (){var statearr_508172 = state_508161;
(statearr_508172[(18)] = inst_508147);

(statearr_508172[(7)] = inst_508103);

(statearr_508172[(8)] = inst_508104);

(statearr_508172[(9)] = inst_508105);

(statearr_508172[(10)] = inst_508102);

return statearr_508172;
})();
var statearr_508173_508210 = state_508161__$1;
(statearr_508173_508210[(2)] = null);

(statearr_508173_508210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (6))){
var inst_508083 = (state_508161[(19)]);
var inst_508092 = (state_508161[(14)]);
var inst_508091 = (state_508161[(2)]);
var inst_508092__$1 = ui.core.contract.call(null,ui.contract.staking_abi,inst_508083);
var inst_508097 = ui.core.chan_call.call(null,inst_508092__$1,new cljs.core.Keyword(null,"depositLength","depositLength",788194150));
var state_508161__$1 = (function (){var statearr_508174 = state_508161;
(statearr_508174[(20)] = inst_508091);

(statearr_508174[(14)] = inst_508092__$1);

return statearr_508174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508161__$1,(7),inst_508097);
} else {
if((state_val_508162 === (17))){
var inst_508154 = (state_508161[(2)]);
var state_508161__$1 = state_508161;
var statearr_508175_508211 = state_508161__$1;
(statearr_508175_508211[(2)] = inst_508154);

(statearr_508175_508211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (3))){
var inst_508080 = (state_508161[(21)]);
var inst_508083 = (state_508161[(19)]);
var inst_508083__$1 = (state_508161[(2)]);
var inst_508084 = cljs.core._EQ_.call(null,inst_508080,(3));
var inst_508085 = cljs.core._EQ_.call(null,inst_508083__$1,"0x");
var inst_508086 = (inst_508084) && (inst_508085);
var state_508161__$1 = (function (){var statearr_508176 = state_508161;
(statearr_508176[(19)] = inst_508083__$1);

return statearr_508176;
})();
if(cljs.core.truth_(inst_508086)){
var statearr_508177_508212 = state_508161__$1;
(statearr_508177_508212[(1)] = (4));

} else {
var statearr_508178_508213 = state_508161__$1;
(statearr_508178_508213[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (12))){
var inst_508156 = (state_508161[(2)]);
var state_508161__$1 = state_508161;
var statearr_508179_508214 = state_508161__$1;
(statearr_508179_508214[(2)] = inst_508156);

(statearr_508179_508214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (2))){
var inst_508080 = (state_508161[(2)]);
var inst_508081 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_508161__$1 = (function (){var statearr_508180 = state_508161;
(statearr_508180[(21)] = inst_508080);

return statearr_508180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508161__$1,(3),inst_508081);
} else {
if((state_val_508162 === (19))){
var inst_508126 = (state_508161[(12)]);
var inst_508092 = (state_508161[(14)]);
var inst_508135 = cljs.core.first.call(null,inst_508126);
var inst_508136 = ui.core.chan_call.call(null,inst_508092,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_508135);
var state_508161__$1 = state_508161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508161__$1,(21),inst_508136);
} else {
if((state_val_508162 === (11))){
var inst_508126 = (state_508161[(12)]);
var inst_508102 = (state_508161[(10)]);
var inst_508126__$1 = cljs.core.seq.call(null,inst_508102);
var state_508161__$1 = (function (){var statearr_508181 = state_508161;
(statearr_508181[(12)] = inst_508126__$1);

return statearr_508181;
})();
if(inst_508126__$1){
var statearr_508182_508215 = state_508161__$1;
(statearr_508182_508215[(1)] = (15));

} else {
var statearr_508183_508216 = state_508161__$1;
(statearr_508183_508216[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (9))){
var inst_508077 = (state_508161[(11)]);
var inst_508158 = (state_508161[(2)]);
var inst_508159 = cljs.core.deref.call(null,inst_508077);
var state_508161__$1 = (function (){var statearr_508187 = state_508161;
(statearr_508187[(22)] = inst_508158);

return statearr_508187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508161__$1,inst_508159);
} else {
if((state_val_508162 === (5))){
var state_508161__$1 = state_508161;
var statearr_508188_508217 = state_508161__$1;
(statearr_508188_508217[(2)] = null);

(statearr_508188_508217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (14))){
var inst_508113 = (state_508161[(16)]);
var inst_508114 = (state_508161[(17)]);
var inst_508077 = (state_508161[(11)]);
var inst_508103 = (state_508161[(7)]);
var inst_508104 = (state_508161[(8)]);
var inst_508105 = (state_508161[(9)]);
var inst_508102 = (state_508161[(10)]);
var inst_508117 = (state_508161[(2)]);
var inst_508118 = (inst_508117[(0)]);
var inst_508119 = ui.core.wei__GT_eth.call(null,inst_508118);
var inst_508120 = [inst_508113,inst_508119];
var inst_508121 = cljs.core.PersistentHashMap.fromArrays(inst_508114,inst_508120);
var inst_508122 = cljs.core.swap_BANG_.call(null,inst_508077,cljs.core.conj,inst_508121);
var inst_508123 = (inst_508105 + (1));
var tmp508184 = inst_508103;
var tmp508185 = inst_508104;
var tmp508186 = inst_508102;
var inst_508102__$1 = tmp508186;
var inst_508103__$1 = tmp508184;
var inst_508104__$1 = tmp508185;
var inst_508105__$1 = inst_508123;
var state_508161__$1 = (function (){var statearr_508189 = state_508161;
(statearr_508189[(23)] = inst_508122);

(statearr_508189[(7)] = inst_508103__$1);

(statearr_508189[(8)] = inst_508104__$1);

(statearr_508189[(9)] = inst_508105__$1);

(statearr_508189[(10)] = inst_508102__$1);

return statearr_508189;
})();
var statearr_508190_508218 = state_508161__$1;
(statearr_508190_508218[(2)] = null);

(statearr_508190_508218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (16))){
var state_508161__$1 = state_508161;
var statearr_508191_508219 = state_508161__$1;
(statearr_508191_508219[(2)] = null);

(statearr_508191_508219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (10))){
var inst_508103 = (state_508161[(7)]);
var inst_508105 = (state_508161[(9)]);
var inst_508092 = (state_508161[(14)]);
var inst_508110 = cljs.core._nth.call(null,inst_508103,inst_508105);
var inst_508111 = ui.core.chan_call.call(null,inst_508092,new cljs.core.Keyword(null,"depositList","depositList",-993565339),inst_508110);
var state_508161__$1 = state_508161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508161__$1,(13),inst_508111);
} else {
if((state_val_508162 === (18))){
var inst_508126 = (state_508161[(12)]);
var inst_508130 = cljs.core.chunk_first.call(null,inst_508126);
var inst_508131 = cljs.core.chunk_rest.call(null,inst_508126);
var inst_508132 = cljs.core.count.call(null,inst_508130);
var inst_508102 = inst_508131;
var inst_508103 = inst_508130;
var inst_508104 = inst_508132;
var inst_508105 = (0);
var state_508161__$1 = (function (){var statearr_508192 = state_508161;
(statearr_508192[(7)] = inst_508103);

(statearr_508192[(8)] = inst_508104);

(statearr_508192[(9)] = inst_508105);

(statearr_508192[(10)] = inst_508102);

return statearr_508192;
})();
var statearr_508193_508220 = state_508161__$1;
(statearr_508193_508220[(2)] = null);

(statearr_508193_508220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508162 === (8))){
var inst_508104 = (state_508161[(8)]);
var inst_508105 = (state_508161[(9)]);
var inst_508107 = (inst_508105 < inst_508104);
var inst_508108 = inst_508107;
var state_508161__$1 = state_508161;
if(cljs.core.truth_(inst_508108)){
var statearr_508194_508221 = state_508161__$1;
(statearr_508194_508221[(1)] = (10));

} else {
var statearr_508195_508222 = state_508161__$1;
(statearr_508195_508222[(1)] = (11));

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
var statearr_508199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_508199[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508199[(1)] = (1));

return statearr_508199;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508161){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508200){if((e508200 instanceof Object)){
var ex__40148__auto__ = e508200;
var statearr_508201_508223 = state_508161;
(statearr_508201_508223[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508224 = state_508161;
state_508161 = G__508224;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508161){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_508202 = f__40168__auto__.call(null);
(statearr_508202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("item","votes","item/votes",-1158219213),(function (env,dispatch_key,params){
var map__508225 = env;
var map__508225__$1 = ((((!((map__508225 == null)))?((((map__508225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__508225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__508225):map__508225);
var item_id = cljs.core.get.call(null,map__508225__$1,new cljs.core.Keyword(null,"item-id","item-id",-1804511607));
var item = cljs.core.get.call(null,map__508225__$1,new cljs.core.Keyword(null,"item","item",249373802));
var update_time = ((item[(1)]) | (0));
var fun = ((function (map__508225,map__508225__$1,item_id,item,update_time){
return (function (index){
if((update_time === (0))){
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time){
return (function (state_508241){
var state_val_508242 = (state_508241[(1)]);
if((state_val_508242 === (1))){
var inst_508227 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_508228 = (index === (0));
var state_508241__$1 = (function (){var statearr_508243 = state_508241;
(statearr_508243[(7)] = inst_508227);

return statearr_508243;
})();
if(cljs.core.truth_(inst_508228)){
var statearr_508244_508301 = state_508241__$1;
(statearr_508244_508301[(1)] = (2));

} else {
var statearr_508245_508302 = state_508241__$1;
(statearr_508245_508302[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508242 === (2))){
var state_508241__$1 = state_508241;
var statearr_508246_508303 = state_508241__$1;
(statearr_508246_508303[(2)] = (0));

(statearr_508246_508303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508242 === (3))){
var state_508241__$1 = state_508241;
var statearr_508247_508304 = state_508241__$1;
(statearr_508247_508304[(2)] = 1.0E-4);

(statearr_508247_508304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508242 === (4))){
var inst_508232 = (state_508241[(2)]);
var inst_508233 = (index === (0));
var state_508241__$1 = (function (){var statearr_508248 = state_508241;
(statearr_508248[(8)] = inst_508232);

return statearr_508248;
})();
if(cljs.core.truth_(inst_508233)){
var statearr_508249_508305 = state_508241__$1;
(statearr_508249_508305[(1)] = (5));

} else {
var statearr_508250_508306 = state_508241__$1;
(statearr_508250_508306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508242 === (5))){
var state_508241__$1 = state_508241;
var statearr_508251_508307 = state_508241__$1;
(statearr_508251_508307[(2)] = (0));

(statearr_508251_508307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508242 === (6))){
var state_508241__$1 = state_508241;
var statearr_508252_508308 = state_508241__$1;
(statearr_508252_508308[(2)] = 1.0E-4);

(statearr_508252_508308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508242 === (7))){
var inst_508227 = (state_508241[(7)]);
var inst_508232 = (state_508241[(8)]);
var inst_508237 = (state_508241[(2)]);
var inst_508238 = [inst_508232,inst_508237];
var inst_508239 = cljs.core.PersistentHashMap.fromArrays(inst_508227,inst_508238);
var state_508241__$1 = state_508241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508241__$1,inst_508239);
} else {
return null;
}
}
}
}
}
}
}
});})(c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_508256 = [null,null,null,null,null,null,null,null,null];
(statearr_508256[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508256[(1)] = (1));

return statearr_508256;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508241){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508257){if((e508257 instanceof Object)){
var ex__40148__auto__ = e508257;
var statearr_508258_508309 = state_508241;
(statearr_508258_508309[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508310 = state_508241;
state_508241 = G__508310;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508241){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time))
})();
var state__40169__auto__ = (function (){var statearr_508259 = f__40168__auto__.call(null);
(statearr_508259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time))
);

return c__40167__auto__;
} else {
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time){
return (function (state_508271){
var state_val_508272 = (state_508271[(1)]);
if((state_val_508272 === (1))){
var inst_508260 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"itemVoteInfo","itemVoteInfo",-383659653),item_id,index);
var state_508271__$1 = state_508271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508271__$1,(2),inst_508260);
} else {
if((state_val_508272 === (2))){
var inst_508262 = (state_508271[(2)]);
var inst_508263 = [new cljs.core.Keyword("item-votes","total","item-votes/total",-1949993919),new cljs.core.Keyword("item-votes","today","item-votes/today",-270765220)];
var inst_508264 = (inst_508262[(0)]);
var inst_508265 = ui.core.wei__GT_eth.call(null,inst_508264);
var inst_508266 = (inst_508262[(1)]);
var inst_508267 = ui.core.wei__GT_eth.call(null,inst_508266);
var inst_508268 = [inst_508265,inst_508267];
var inst_508269 = cljs.core.PersistentHashMap.fromArrays(inst_508263,inst_508268);
var state_508271__$1 = state_508271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508271__$1,inst_508269);
} else {
return null;
}
}
});})(c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_508276 = [null,null,null,null,null,null,null];
(statearr_508276[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508276[(1)] = (1));

return statearr_508276;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508271){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508277){if((e508277 instanceof Object)){
var ex__40148__auto__ = e508277;
var statearr_508278_508311 = state_508271;
(statearr_508278_508311[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508312 = state_508271;
state_508271 = G__508312;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508271){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time))
})();
var state__40169__auto__ = (function (){var statearr_508279 = f__40168__auto__.call(null);
(statearr_508279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time))
);

return c__40167__auto__;
}
});})(map__508225,map__508225__$1,item_id,item,update_time))
;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time,fun){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time,fun){
return (function (state_508290){
var state_val_508291 = (state_508290[(1)]);
if((state_val_508291 === (1))){
var inst_508280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_508281 = fun.call(null,(0));
var state_508290__$1 = (function (){var statearr_508292 = state_508290;
(statearr_508292[(7)] = inst_508280);

return statearr_508292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508290__$1,(2),inst_508281);
} else {
if((state_val_508291 === (2))){
var inst_508283 = (state_508290[(2)]);
var inst_508284 = fun.call(null,(1));
var state_508290__$1 = (function (){var statearr_508293 = state_508290;
(statearr_508293[(8)] = inst_508283);

return statearr_508293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508290__$1,(3),inst_508284);
} else {
if((state_val_508291 === (3))){
var inst_508283 = (state_508290[(8)]);
var inst_508280 = (state_508290[(7)]);
var inst_508286 = (state_508290[(2)]);
var inst_508287 = [inst_508283,inst_508286];
var inst_508288 = (new cljs.core.PersistentVector(null,2,(5),inst_508280,inst_508287,null));
var state_508290__$1 = state_508290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508290__$1,inst_508288);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time,fun))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time,fun){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_508297 = [null,null,null,null,null,null,null,null,null];
(statearr_508297[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508297[(1)] = (1));

return statearr_508297;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508290){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508298){if((e508298 instanceof Object)){
var ex__40148__auto__ = e508298;
var statearr_508299_508313 = state_508290;
(statearr_508299_508313[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508314 = state_508290;
state_508290 = G__508314;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508290){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time,fun))
})();
var state__40169__auto__ = (function (){var statearr_508300 = f__40168__auto__.call(null);
(statearr_508300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__508225,map__508225__$1,item_id,item,update_time,fun))
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
return (function (state_508331){
var state_val_508332 = (state_508331[(1)]);
if((state_val_508332 === (1))){
var inst_508315 = (proposal_index === (0));
var state_508331__$1 = state_508331;
if(cljs.core.truth_(inst_508315)){
var statearr_508333_508344 = state_508331__$1;
(statearr_508333_508344[(1)] = (2));

} else {
var statearr_508334_508345 = state_508331__$1;
(statearr_508334_508345[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508332 === (2))){
var inst_508317 = new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(env);
var inst_508318 = ui.core.starting_items.call(null,inst_508317);
var state_508331__$1 = state_508331;
var statearr_508335_508346 = state_508331__$1;
(statearr_508335_508346[(2)] = inst_508318);

(statearr_508335_508346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508332 === (3))){
var inst_508320 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"proposals","proposals",-1859752048),proposal_index);
var state_508331__$1 = state_508331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508331__$1,(5),inst_508320);
} else {
if((state_val_508332 === (4))){
var inst_508329 = (state_508331[(2)]);
var state_508331__$1 = state_508331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508331__$1,inst_508329);
} else {
if((state_val_508332 === (5))){
var inst_508322 = (state_508331[(2)]);
var inst_508323 = (inst_508322[(3)]);
var inst_508324 = (inst_508323 | (0));
var inst_508325 = ui.core.get_proposal_description.call(null,inst_508324,proposal_index);
var state_508331__$1 = state_508331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508331__$1,(6),inst_508325);
} else {
if((state_val_508332 === (6))){
var inst_508327 = (state_508331[(2)]);
var state_508331__$1 = state_508331;
var statearr_508336_508347 = state_508331__$1;
(statearr_508336_508347[(2)] = inst_508327);

(statearr_508336_508347[(1)] = (4));


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
var statearr_508340 = [null,null,null,null,null,null,null];
(statearr_508340[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508340[(1)] = (1));

return statearr_508340;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508331){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508341){if((e508341 instanceof Object)){
var ex__40148__auto__ = e508341;
var statearr_508342_508348 = state_508331;
(statearr_508342_508348[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508349 = state_508331;
state_508331 = G__508349;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508331){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,proposal_index,update_time))
})();
var state__40169__auto__ = (function (){var statearr_508343 = f__40168__auto__.call(null);
(statearr_508343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508343;
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
return (function (state_508432){
var state_val_508433 = (state_508432[(1)]);
if((state_val_508433 === (7))){
var inst_508362 = (state_508432[(2)]);
var state_508432__$1 = state_508432;
var statearr_508434_508478 = state_508432__$1;
(statearr_508434_508478[(2)] = inst_508362);

(statearr_508434_508478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (20))){
var inst_508425 = (state_508432[(2)]);
var state_508432__$1 = state_508432;
var statearr_508435_508479 = state_508432__$1;
(statearr_508435_508479[(2)] = inst_508425);

(statearr_508435_508479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (1))){
var inst_508352 = (env == null);
var inst_508353 = cljs.core.not.call(null,inst_508352);
var state_508432__$1 = state_508432;
if(inst_508353){
var statearr_508436_508480 = state_508432__$1;
(statearr_508436_508480[(1)] = (2));

} else {
var statearr_508437_508481 = state_508432__$1;
(statearr_508437_508481[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (24))){
var inst_508410 = (state_508432[(7)]);
var inst_508372 = (state_508432[(8)]);
var inst_508371 = (state_508432[(9)]);
var inst_508413 = (state_508432[(2)]);
var inst_508414 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_508413,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_508410);
var inst_508415 = inst_508371.call(null,inst_508414,inst_508372);
var state_508432__$1 = state_508432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508432__$1,(25),inst_508415);
} else {
if((state_val_508433 === (4))){
var inst_508365 = (state_508432[(2)]);
var state_508432__$1 = state_508432;
if(cljs.core.truth_(inst_508365)){
var statearr_508438_508482 = state_508432__$1;
(statearr_508438_508482[(1)] = (8));

} else {
var statearr_508439_508483 = state_508432__$1;
(statearr_508439_508483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (15))){
var inst_508427 = (state_508432[(2)]);
var state_508432__$1 = state_508432;
var statearr_508440_508484 = state_508432__$1;
(statearr_508440_508484[(2)] = inst_508427);

(statearr_508440_508484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (21))){
var inst_508401 = (state_508432[(10)]);
var inst_508405 = cljs.core.chunk_first.call(null,inst_508401);
var inst_508406 = cljs.core.chunk_rest.call(null,inst_508401);
var inst_508407 = cljs.core.count.call(null,inst_508405);
var inst_508381 = inst_508406;
var inst_508382 = inst_508405;
var inst_508383 = inst_508407;
var inst_508384 = (0);
var state_508432__$1 = (function (){var statearr_508441 = state_508432;
(statearr_508441[(11)] = inst_508382);

(statearr_508441[(12)] = inst_508384);

(statearr_508441[(13)] = inst_508383);

(statearr_508441[(14)] = inst_508381);

return statearr_508441;
})();
var statearr_508442_508485 = state_508432__$1;
(statearr_508442_508485[(2)] = null);

(statearr_508442_508485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (13))){
var inst_508382 = (state_508432[(11)]);
var inst_508384 = (state_508432[(12)]);
var inst_508389 = (state_508432[(15)]);
var inst_508389__$1 = cljs.core._nth.call(null,inst_508382,inst_508384);
var inst_508390 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_508389__$1);
var state_508432__$1 = (function (){var statearr_508443 = state_508432;
(statearr_508443[(15)] = inst_508389__$1);

return statearr_508443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508432__$1,(16),inst_508390);
} else {
if((state_val_508433 === (22))){
var inst_508401 = (state_508432[(10)]);
var inst_508410 = (state_508432[(7)]);
var inst_508410__$1 = cljs.core.first.call(null,inst_508401);
var inst_508411 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"items","items",1031954938),inst_508410__$1);
var state_508432__$1 = (function (){var statearr_508444 = state_508432;
(statearr_508444[(7)] = inst_508410__$1);

return statearr_508444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508432__$1,(24),inst_508411);
} else {
if((state_val_508433 === (6))){
var state_508432__$1 = state_508432;
var statearr_508448_508486 = state_508432__$1;
(statearr_508448_508486[(2)] = false);

(statearr_508448_508486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (25))){
var inst_508401 = (state_508432[(10)]);
var inst_508410 = (state_508432[(7)]);
var inst_508374 = (state_508432[(16)]);
var inst_508417 = (state_508432[(2)]);
var inst_508418 = cljs.core.swap_BANG_.call(null,inst_508374,cljs.core.assoc,inst_508410,inst_508417);
var inst_508419 = cljs.core.next.call(null,inst_508401);
var inst_508381 = inst_508419;
var inst_508382 = null;
var inst_508383 = (0);
var inst_508384 = (0);
var state_508432__$1 = (function (){var statearr_508449 = state_508432;
(statearr_508449[(11)] = inst_508382);

(statearr_508449[(12)] = inst_508384);

(statearr_508449[(17)] = inst_508418);

(statearr_508449[(13)] = inst_508383);

(statearr_508449[(14)] = inst_508381);

return statearr_508449;
})();
var statearr_508450_508487 = state_508432__$1;
(statearr_508450_508487[(2)] = null);

(statearr_508450_508487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (17))){
var inst_508382 = (state_508432[(11)]);
var inst_508384 = (state_508432[(12)]);
var inst_508389 = (state_508432[(15)]);
var inst_508383 = (state_508432[(13)]);
var inst_508381 = (state_508432[(14)]);
var inst_508374 = (state_508432[(16)]);
var inst_508396 = (state_508432[(2)]);
var inst_508397 = cljs.core.swap_BANG_.call(null,inst_508374,cljs.core.assoc,inst_508389,inst_508396);
var inst_508398 = (inst_508384 + (1));
var tmp508445 = inst_508382;
var tmp508446 = inst_508383;
var tmp508447 = inst_508381;
var inst_508381__$1 = tmp508447;
var inst_508382__$1 = tmp508445;
var inst_508383__$1 = tmp508446;
var inst_508384__$1 = inst_508398;
var state_508432__$1 = (function (){var statearr_508451 = state_508432;
(statearr_508451[(11)] = inst_508382__$1);

(statearr_508451[(18)] = inst_508397);

(statearr_508451[(12)] = inst_508384__$1);

(statearr_508451[(13)] = inst_508383__$1);

(statearr_508451[(14)] = inst_508381__$1);

return statearr_508451;
})();
var statearr_508452_508488 = state_508432__$1;
(statearr_508452_508488[(2)] = null);

(statearr_508452_508488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (3))){
var state_508432__$1 = state_508432;
var statearr_508453_508489 = state_508432__$1;
(statearr_508453_508489[(2)] = false);

(statearr_508453_508489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (12))){
var inst_508374 = (state_508432[(16)]);
var inst_508429 = (state_508432[(2)]);
var inst_508430 = cljs.core.deref.call(null,inst_508374);
var state_508432__$1 = (function (){var statearr_508454 = state_508432;
(statearr_508454[(19)] = inst_508429);

return statearr_508454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508432__$1,inst_508430);
} else {
if((state_val_508433 === (2))){
var inst_508355 = env.cljs$lang$protocol_mask$partition0$;
var inst_508356 = (inst_508355 & (64));
var inst_508357 = env.cljs$core$ISeq$;
var inst_508358 = (inst_508356) || (inst_508357);
var state_508432__$1 = state_508432;
if(cljs.core.truth_(inst_508358)){
var statearr_508455_508490 = state_508432__$1;
(statearr_508455_508490[(1)] = (5));

} else {
var statearr_508456_508491 = state_508432__$1;
(statearr_508456_508491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (23))){
var inst_508422 = (state_508432[(2)]);
var state_508432__$1 = state_508432;
var statearr_508457_508492 = state_508432__$1;
(statearr_508457_508492[(2)] = inst_508422);

(statearr_508457_508492[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (19))){
var state_508432__$1 = state_508432;
var statearr_508458_508493 = state_508432__$1;
(statearr_508458_508493[(2)] = null);

(statearr_508458_508493[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (11))){
var inst_508384 = (state_508432[(12)]);
var inst_508383 = (state_508432[(13)]);
var inst_508386 = (inst_508384 < inst_508383);
var inst_508387 = inst_508386;
var state_508432__$1 = state_508432;
if(cljs.core.truth_(inst_508387)){
var statearr_508459_508494 = state_508432__$1;
(statearr_508459_508494[(1)] = (13));

} else {
var statearr_508460_508495 = state_508432__$1;
(statearr_508460_508495[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (9))){
var state_508432__$1 = state_508432;
var statearr_508461_508496 = state_508432__$1;
(statearr_508461_508496[(2)] = env);

(statearr_508461_508496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (5))){
var state_508432__$1 = state_508432;
var statearr_508462_508497 = state_508432__$1;
(statearr_508462_508497[(2)] = true);

(statearr_508462_508497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (14))){
var inst_508401 = (state_508432[(10)]);
var inst_508381 = (state_508432[(14)]);
var inst_508401__$1 = cljs.core.seq.call(null,inst_508381);
var state_508432__$1 = (function (){var statearr_508463 = state_508432;
(statearr_508463[(10)] = inst_508401__$1);

return statearr_508463;
})();
if(inst_508401__$1){
var statearr_508464_508498 = state_508432__$1;
(statearr_508464_508498[(1)] = (18));

} else {
var statearr_508465_508499 = state_508432__$1;
(statearr_508465_508499[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (16))){
var inst_508389 = (state_508432[(15)]);
var inst_508372 = (state_508432[(8)]);
var inst_508371 = (state_508432[(9)]);
var inst_508392 = (state_508432[(2)]);
var inst_508393 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"item","item",249373802),inst_508392,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),inst_508389);
var inst_508394 = inst_508371.call(null,inst_508393,inst_508372);
var state_508432__$1 = state_508432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508432__$1,(17),inst_508394);
} else {
if((state_val_508433 === (10))){
var inst_508370 = (state_508432[(2)]);
var inst_508371 = cljs.core.get.call(null,inst_508370,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var inst_508372 = cljs.core.get.call(null,inst_508370,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_508373 = cljs.core.PersistentVector.EMPTY;
var inst_508374 = cljs.core.atom.call(null,inst_508373);
var inst_508379 = cljs.core.range.call(null,ui.core.max_items);
var inst_508380 = cljs.core.seq.call(null,inst_508379);
var inst_508381 = inst_508380;
var inst_508382 = null;
var inst_508383 = (0);
var inst_508384 = (0);
var state_508432__$1 = (function (){var statearr_508466 = state_508432;
(statearr_508466[(11)] = inst_508382);

(statearr_508466[(12)] = inst_508384);

(statearr_508466[(13)] = inst_508383);

(statearr_508466[(14)] = inst_508381);

(statearr_508466[(8)] = inst_508372);

(statearr_508466[(16)] = inst_508374);

(statearr_508466[(9)] = inst_508371);

return statearr_508466;
})();
var statearr_508467_508500 = state_508432__$1;
(statearr_508467_508500[(2)] = null);

(statearr_508467_508500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (18))){
var inst_508401 = (state_508432[(10)]);
var inst_508403 = cljs.core.chunked_seq_QMARK_.call(null,inst_508401);
var state_508432__$1 = state_508432;
if(inst_508403){
var statearr_508468_508501 = state_508432__$1;
(statearr_508468_508501[(1)] = (21));

} else {
var statearr_508469_508502 = state_508432__$1;
(statearr_508469_508502[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_508433 === (8))){
var inst_508367 = cljs.core.apply.call(null,cljs.core.hash_map,env);
var state_508432__$1 = state_508432;
var statearr_508470_508503 = state_508432__$1;
(statearr_508470_508503[(2)] = inst_508367);

(statearr_508470_508503[(1)] = (10));


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
var statearr_508474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_508474[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508474[(1)] = (1));

return statearr_508474;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508432){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508475){if((e508475 instanceof Object)){
var ex__40148__auto__ = e508475;
var statearr_508476_508504 = state_508432;
(statearr_508476_508504[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508505 = state_508432;
state_508432 = G__508505;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508432){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_508477 = f__40168__auto__.call(null);
(statearr_508477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__))
);

return c__40167__auto__;
})())], null);
}));
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-stakes","etherean/main-stakes",-576332339),(function() { 
var G__508506__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__508506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__508507__i = 0, G__508507__a = new Array(arguments.length -  0);
while (G__508507__i < G__508507__a.length) {G__508507__a[G__508507__i] = arguments[G__508507__i + 0]; ++G__508507__i;}
  args = new cljs.core.IndexedSeq(G__508507__a,0);
} 
return G__508506__delegate.call(this,args);};
G__508506.cljs$lang$maxFixedArity = 0;
G__508506.cljs$lang$applyTo = (function (arglist__508508){
var args = cljs.core.seq(arglist__508508);
return G__508506__delegate(args);
});
G__508506.cljs$core$IFn$_invoke$arity$variadic = G__508506__delegate;
return G__508506;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-brain","etherean/main-brain",643924934),(function() { 
var G__508509__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__508509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__508510__i = 0, G__508510__a = new Array(arguments.length -  0);
while (G__508510__i < G__508510__a.length) {G__508510__a[G__508510__i] = arguments[G__508510__i + 0]; ++G__508510__i;}
  args = new cljs.core.IndexedSeq(G__508510__a,0);
} 
return G__508509__delegate.call(this,args);};
G__508509.cljs$lang$maxFixedArity = 0;
G__508509.cljs$lang$applyTo = (function (arglist__508511){
var args = cljs.core.seq(arglist__508511);
return G__508509__delegate(args);
});
G__508509.cljs$core$IFn$_invoke$arity$variadic = G__508509__delegate;
return G__508509;
})()
);
cljs.core._add_method.call(null,ui.core.read_server,new cljs.core.Keyword("etherean","main-items","etherean/main-items",1211314104),(function() { 
var G__508512__delegate = function (args){
return cljs.core.apply.call(null,ui.core.recursive_channel_read,args);
};
var G__508512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__508513__i = 0, G__508513__a = new Array(arguments.length -  0);
while (G__508513__i < G__508513__a.length) {G__508513__a[G__508513__i] = arguments[G__508513__i + 0]; ++G__508513__i;}
  args = new cljs.core.IndexedSeq(G__508513__a,0);
} 
return G__508512__delegate.call(this,args);};
G__508512.cljs$lang$maxFixedArity = 0;
G__508512.cljs$lang$applyTo = (function (arglist__508514){
var args = cljs.core.seq(arglist__508514);
return G__508512__delegate(args);
});
G__508512.cljs$core$IFn$_invoke$arity$variadic = G__508512__delegate;
return G__508512;
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
var map__508515 = params;
var map__508515__$1 = ((((!((map__508515 == null)))?((((map__508515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__508515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__508515):map__508515);
var id = cljs.core.get.call(null,map__508515__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.call(null,map__508515__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__508515,map__508515__$1,id,description){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__508515,map__508515__$1,id,description){
return (function (state_508544){
var state_val_508545 = (state_508544[(1)]);
if((state_val_508545 === (1))){
var inst_508517 = ui.core.block_number.call(null);
var state_508544__$1 = state_508544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508544__$1,(2),inst_508517);
} else {
if((state_val_508545 === (2))){
var inst_508519 = (state_508544[(2)]);
var inst_508520 = ui.core.format_message.call(null,description);
var inst_508521 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"addProposal","addProposal",-2108750592),inst_508520);
var state_508544__$1 = (function (){var statearr_508546 = state_508544;
(statearr_508546[(7)] = inst_508519);

return statearr_508546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508544__$1,(3),inst_508521);
} else {
if((state_val_508545 === (3))){
var inst_508519 = (state_508544[(7)]);
var inst_508523 = (state_508544[(2)]);
var inst_508524 = ui.core.get_historical_events.call(null,ui.core.etherean,inst_508519,new cljs.core.Keyword(null,"ProposalMessage","ProposalMessage",-2109623754),({}));
var state_508544__$1 = (function (){var statearr_508547 = state_508544;
(statearr_508547[(8)] = inst_508523);

return statearr_508547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508544__$1,(4),inst_508524);
} else {
if((state_val_508545 === (4))){
var inst_508526 = (state_508544[(2)]);
var inst_508527 = cljs.core.first.call(null,inst_508526);
var inst_508528 = [new cljs.core.Keyword(null,"tempids","tempids",1767509089)];
var inst_508529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_508530 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),id];
var inst_508531 = (new cljs.core.PersistentVector(null,2,(5),inst_508529,inst_508530,null));
var inst_508532 = [inst_508531];
var inst_508533 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_508534 = inst_508527.args;
var inst_508535 = inst_508534.proposalIndex;
var inst_508536 = (inst_508535 | (0));
var inst_508537 = [new cljs.core.Keyword("proposal","by-id","proposal/by-id",1137079153),inst_508536];
var inst_508538 = (new cljs.core.PersistentVector(null,2,(5),inst_508533,inst_508537,null));
var inst_508539 = [inst_508538];
var inst_508540 = cljs.core.PersistentHashMap.fromArrays(inst_508532,inst_508539);
var inst_508541 = [inst_508540];
var inst_508542 = cljs.core.PersistentHashMap.fromArrays(inst_508528,inst_508541);
var state_508544__$1 = state_508544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508544__$1,inst_508542);
} else {
return null;
}
}
}
}
});})(c__40167__auto__,map__508515,map__508515__$1,id,description))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__508515,map__508515__$1,id,description){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_508551 = [null,null,null,null,null,null,null,null,null];
(statearr_508551[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508551[(1)] = (1));

return statearr_508551;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508544){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508552){if((e508552 instanceof Object)){
var ex__40148__auto__ = e508552;
var statearr_508553_508555 = state_508544;
(statearr_508553_508555[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508556 = state_508544;
state_508544 = G__508556;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508544){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__508515,map__508515__$1,id,description))
})();
var state__40169__auto__ = (function (){var statearr_508554 = f__40168__auto__.call(null);
(statearr_508554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__508515,map__508515__$1,id,description))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("proposal","vote","proposal/vote",917246552,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__508557 = params;
var map__508557__$1 = ((((!((map__508557 == null)))?((((map__508557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__508557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__508557):map__508557);
var id = cljs.core.get.call(null,map__508557__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__508557__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__508557,map__508557__$1,id,direction){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__508557,map__508557__$1,id,direction){
return (function (state_508564){
var state_val_508565 = (state_508564[(1)]);
if((state_val_508565 === (1))){
var inst_508559 = cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113));
var inst_508560 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnProposal","voteOnProposal",-1101682438),id,inst_508559);
var state_508564__$1 = state_508564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508564__$1,(2),inst_508560);
} else {
if((state_val_508565 === (2))){
var inst_508562 = (state_508564[(2)]);
var state_508564__$1 = state_508564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508564__$1,inst_508562);
} else {
return null;
}
}
});})(c__40167__auto__,map__508557,map__508557__$1,id,direction))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__508557,map__508557__$1,id,direction){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_508569 = [null,null,null,null,null,null,null];
(statearr_508569[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508569[(1)] = (1));

return statearr_508569;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508564){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508570){if((e508570 instanceof Object)){
var ex__40148__auto__ = e508570;
var statearr_508571_508573 = state_508564;
(statearr_508571_508573[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508574 = state_508564;
state_508564 = G__508574;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508564){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__508557,map__508557__$1,id,direction))
})();
var state__40169__auto__ = (function (){var statearr_508572 = f__40168__auto__.call(null);
(statearr_508572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__508557,map__508557__$1,id,direction))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("item","vote","item/vote",-842849665,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__508575 = params;
var map__508575__$1 = ((((!((map__508575 == null)))?((((map__508575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__508575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__508575):map__508575);
var id = cljs.core.get.call(null,map__508575__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var direction = cljs.core.get.call(null,map__508575__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__508575,map__508575__$1,id,direction){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__508575,map__508575__$1,id,direction){
return (function (state_508581){
var state_val_508582 = (state_508581[(1)]);
if((state_val_508582 === (1))){
var inst_508577 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"voteOnItem","voteOnItem",903210165),id,direction);
var state_508581__$1 = state_508581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508581__$1,(2),inst_508577);
} else {
if((state_val_508582 === (2))){
var inst_508579 = (state_508581[(2)]);
var state_508581__$1 = state_508581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508581__$1,inst_508579);
} else {
return null;
}
}
});})(c__40167__auto__,map__508575,map__508575__$1,id,direction))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__508575,map__508575__$1,id,direction){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_508586 = [null,null,null,null,null,null,null];
(statearr_508586[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508586[(1)] = (1));

return statearr_508586;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508581){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508587){if((e508587 instanceof Object)){
var ex__40148__auto__ = e508587;
var statearr_508588_508590 = state_508581;
(statearr_508588_508590[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508591 = state_508581;
state_508581 = G__508591;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508581){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__508575,map__508575__$1,id,direction))
})();
var state__40169__auto__ = (function (){var statearr_508589 = f__40168__auto__.call(null);
(statearr_508589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__508575,map__508575__$1,id,direction))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","deposit","user/deposit",-40312317,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__508592 = params;
var map__508592__$1 = ((((!((map__508592 == null)))?((((map__508592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__508592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__508592):map__508592);
var value = cljs.core.get.call(null,map__508592__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__508592,map__508592__$1,value){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__508592,map__508592__$1,value){
return (function (state_508606){
var state_val_508607 = (state_508606[(1)]);
if((state_val_508607 === (1))){
var inst_508594 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_508606__$1 = state_508606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508606__$1,(2),inst_508594);
} else {
if((state_val_508607 === (2))){
var inst_508596 = (state_508606[(2)]);
var inst_508597 = ui.core.contract.call(null,ui.contract.staking_abi,inst_508596);
var inst_508598 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_508599 = web3.toWei(value,"ether");
var inst_508600 = [inst_508599];
var inst_508601 = cljs.core.PersistentHashMap.fromArrays(inst_508598,inst_508600);
var inst_508602 = ui.core.chan_transact.call(null,inst_508597,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),inst_508601);
var state_508606__$1 = state_508606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508606__$1,(3),inst_508602);
} else {
if((state_val_508607 === (3))){
var inst_508604 = (state_508606[(2)]);
var state_508606__$1 = state_508606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508606__$1,inst_508604);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__508592,map__508592__$1,value))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__508592,map__508592__$1,value){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_508611 = [null,null,null,null,null,null,null];
(statearr_508611[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508611[(1)] = (1));

return statearr_508611;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508606){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508612){if((e508612 instanceof Object)){
var ex__40148__auto__ = e508612;
var statearr_508613_508615 = state_508606;
(statearr_508613_508615[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508616 = state_508606;
state_508606 = G__508616;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508606){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__508592,map__508592__$1,value))
})();
var state__40169__auto__ = (function (){var statearr_508614 = f__40168__auto__.call(null);
(statearr_508614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__508592,map__508592__$1,value))
);

return c__40167__auto__;
})], null);
}));
cljs.core._add_method.call(null,ui.core.mutate_server,new cljs.core.Symbol("user","withdraw","user/withdraw",-1187344809,null),(function (env,dispatch_key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var map__508617 = params;
var map__508617__$1 = ((((!((map__508617 == null)))?((((map__508617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__508617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__508617):map__508617);
var value = cljs.core.get.call(null,map__508617__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__508617,map__508617__$1,value){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__508617,map__508617__$1,value){
return (function (state_508627){
var state_val_508628 = (state_508627[(1)]);
if((state_val_508628 === (1))){
var inst_508619 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"stakingContract","stakingContract",206074687));
var state_508627__$1 = state_508627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508627__$1,(2),inst_508619);
} else {
if((state_val_508628 === (2))){
var inst_508621 = (state_508627[(2)]);
var inst_508622 = ui.core.contract.call(null,ui.contract.staking_abi,inst_508621);
var inst_508623 = ui.core.chan_transact.call(null,inst_508622,new cljs.core.Keyword(null,"withdraw","withdraw",1469652053));
var state_508627__$1 = state_508627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508627__$1,(3),inst_508623);
} else {
if((state_val_508628 === (3))){
var inst_508625 = (state_508627[(2)]);
var state_508627__$1 = state_508627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508627__$1,inst_508625);
} else {
return null;
}
}
}
});})(c__40167__auto__,map__508617,map__508617__$1,value))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__508617,map__508617__$1,value){
return (function() {
var ui$core$state_machine__40145__auto__ = null;
var ui$core$state_machine__40145__auto____0 = (function (){
var statearr_508632 = [null,null,null,null,null,null,null];
(statearr_508632[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508632[(1)] = (1));

return statearr_508632;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508627){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508633){if((e508633 instanceof Object)){
var ex__40148__auto__ = e508633;
var statearr_508634_508636 = state_508627;
(statearr_508634_508636[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508637 = state_508627;
state_508627 = G__508637;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508627){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__508617,map__508617__$1,value))
})();
var state__40169__auto__ = (function (){var statearr_508635 = f__40168__auto__.call(null);
(statearr_508635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__508617,map__508617__$1,value))
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
return (function (state_508647){
var state_val_508648 = (state_508647[(1)]);
if((state_val_508648 === (1))){
var inst_508638 = ui.core.chan_call.call(null,ui.core.etherean,new cljs.core.Keyword(null,"debugTime","debugTime",-1487871746));
var state_508647__$1 = state_508647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508647__$1,(2),inst_508638);
} else {
if((state_val_508648 === (2))){
var inst_508640 = (state_508647[(2)]);
var inst_508641 = (inst_508640 | (0));
var inst_508642 = (inst_508641 + (86400));
var inst_508643 = ui.core.chan_transact.call(null,ui.core.etherean,new cljs.core.Keyword(null,"setDebugTime","setDebugTime",1278197802),inst_508642);
var state_508647__$1 = state_508647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508647__$1,(3),inst_508643);
} else {
if((state_val_508648 === (3))){
var inst_508645 = (state_508647[(2)]);
var state_508647__$1 = state_508647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508647__$1,inst_508645);
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
var statearr_508652 = [null,null,null,null,null,null,null];
(statearr_508652[(0)] = ui$core$state_machine__40145__auto__);

(statearr_508652[(1)] = (1));

return statearr_508652;
});
var ui$core$state_machine__40145__auto____1 = (function (state_508647){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508653){if((e508653 instanceof Object)){
var ex__40148__auto__ = e508653;
var statearr_508654_508656 = state_508647;
(statearr_508654_508656[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508657 = state_508647;
state_508647 = G__508657;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$state_machine__40145__auto__ = function(state_508647){
switch(arguments.length){
case 0:
return ui$core$state_machine__40145__auto____0.call(this);
case 1:
return ui$core$state_machine__40145__auto____1.call(this,state_508647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__40145__auto____0;
ui$core$state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__40145__auto____1;
return ui$core$state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__))
})();
var state__40169__auto__ = (function (){var statearr_508655 = f__40168__auto__.call(null);
(statearr_508655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508655;
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
ui.core.blockchain_send = (function ui$core$blockchain_send(p__508658,cb){
var map__508677 = p__508658;
var map__508677__$1 = ((((!((map__508677 == null)))?((((map__508677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__508677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__508677):map__508677);
var remote = cljs.core.get.call(null,map__508677__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var c__40167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40167__auto__,map__508677,map__508677__$1,remote){
return (function (){
var f__40168__auto__ = (function (){var switch__40144__auto__ = ((function (c__40167__auto__,map__508677,map__508677__$1,remote){
return (function (state_508686){
var state_val_508687 = (state_508686[(1)]);
if((state_val_508687 === (1))){
var inst_508679 = cljs.core.PersistentHashMap.EMPTY;
var inst_508680 = ui.core.process_remote_query.call(null,remote);
var inst_508681 = ui.core.server_parser.call(null,inst_508679,inst_508680);
var state_508686__$1 = state_508686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_508686__$1,(2),inst_508681);
} else {
if((state_val_508687 === (2))){
var inst_508683 = (state_508686[(2)]);
var inst_508684 = cb.call(null,inst_508683);
var state_508686__$1 = state_508686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_508686__$1,inst_508684);
} else {
return null;
}
}
});})(c__40167__auto__,map__508677,map__508677__$1,remote))
;
return ((function (switch__40144__auto__,c__40167__auto__,map__508677,map__508677__$1,remote){
return (function() {
var ui$core$blockchain_send_$_state_machine__40145__auto__ = null;
var ui$core$blockchain_send_$_state_machine__40145__auto____0 = (function (){
var statearr_508691 = [null,null,null,null,null,null,null];
(statearr_508691[(0)] = ui$core$blockchain_send_$_state_machine__40145__auto__);

(statearr_508691[(1)] = (1));

return statearr_508691;
});
var ui$core$blockchain_send_$_state_machine__40145__auto____1 = (function (state_508686){
while(true){
var ret_value__40146__auto__ = (function (){try{while(true){
var result__40147__auto__ = switch__40144__auto__.call(null,state_508686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40147__auto__;
}
break;
}
}catch (e508692){if((e508692 instanceof Object)){
var ex__40148__auto__ = e508692;
var statearr_508693_508695 = state_508686;
(statearr_508693_508695[(5)] = ex__40148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_508686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e508692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__508696 = state_508686;
state_508686 = G__508696;
continue;
} else {
return ret_value__40146__auto__;
}
break;
}
});
ui$core$blockchain_send_$_state_machine__40145__auto__ = function(state_508686){
switch(arguments.length){
case 0:
return ui$core$blockchain_send_$_state_machine__40145__auto____0.call(this);
case 1:
return ui$core$blockchain_send_$_state_machine__40145__auto____1.call(this,state_508686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$blockchain_send_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$blockchain_send_$_state_machine__40145__auto____0;
ui$core$blockchain_send_$_state_machine__40145__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$blockchain_send_$_state_machine__40145__auto____1;
return ui$core$blockchain_send_$_state_machine__40145__auto__;
})()
;})(switch__40144__auto__,c__40167__auto__,map__508677,map__508677__$1,remote))
})();
var state__40169__auto__ = (function (){var statearr_508694 = f__40168__auto__.call(null);
(statearr_508694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40167__auto__);

return statearr_508694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40169__auto__);
});})(c__40167__auto__,map__508677,map__508677__$1,remote))
);

return c__40167__auto__;
});
ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),ui.core.blockchain_send,new cljs.core.Keyword(null,"merge","merge",-1804319409),ui.core.my_merge,new cljs.core.Keyword(null,"migrate","migrate",-207110743),ui.core.migrate,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),ui.core.my_merge_tree,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
om.next.add_root_BANG_.call(null,ui.core.reconciler,ui.core.Root,goog.dom.getElement("app"));
ui.core.my_toaster = blueprint_cljs.core.toaster.call(null);

//# sourceMappingURL=core.js.map?rel=1488428190511