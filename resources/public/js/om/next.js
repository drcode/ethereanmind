// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('cljs.analyzer.api');
goog.require('cljs.analyzer');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('clojure.string');
goog.require('goog.debug.Console');
om.next.collect_statics = (function om$next$collect_statics(dt){
var split_on_static = (function om$next$collect_statics_$_split_on_static(forms){
return cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$static,null], null), null)),forms);
});
var split_on_symbol = (function om$next$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with(cljs.core.complement(cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq(dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fields,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$protocols,cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__25498 = split_on_static(dt__$1);
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25498,(0),null);
var vec__25501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25498,(1),null);
var seq__25502 = cljs.core.seq(vec__25501);
var first__25503 = cljs.core.first(seq__25502);
var seq__25502__$1 = cljs.core.next(seq__25502);
var _ = first__25503;
var first__25503__$1 = cljs.core.first(seq__25502__$1);
var seq__25502__$2 = cljs.core.next(seq__25502__$1);
var sym = first__25503__$1;
var remaining = seq__25502__$2;
var post = vec__25501;
var dt_SINGLEQUOTE___$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(dt_SINGLEQUOTE_,pre);
if(cljs.core.seq(post)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,cljs.core.cst$sym$field)){
var vec__25504 = cljs.core.split_at((2),remaining);
var field_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25504,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25504,(1),null);
var G__25510 = cljs.core.seq(dt__$2);
var G__25511 = dt_SINGLEQUOTE___$1;
var G__25512 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields], null),cljs.core.conj,cljs.core.vec(field_info));
dt__$1 = G__25510;
dt_SINGLEQUOTE_ = G__25511;
statics = G__25512;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__25507 = split_on_symbol(remaining);
var protocol_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25507,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25507,(1),null);
var G__25513 = cljs.core.seq(dt__$2);
var G__25514 = dt_SINGLEQUOTE___$1;
var G__25515 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocols], null),cljs.core.into,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__25513;
dt_SINGLEQUOTE_ = G__25514;
statics = G__25515;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__25516 = null;
var G__25517 = dt_SINGLEQUOTE___$1;
var G__25518 = statics;
dt__$1 = G__25516;
dt_SINGLEQUOTE_ = G__25517;
statics = G__25518;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dt,dt_SINGLEQUOTE_,cljs.core.cst$kw$statics,statics], null);
}
break;
}
});
om.next.validate_statics = (function om$next$validate_statics(dt){
var temp__4657__auto__ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IQueryParams",null,"IQuery",null,"Ident",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25519_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(p1__25519_SHARP_)].join(''),/\//));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__4657__auto__)){
var invalid = temp__4657__auto__;
throw (new Error([cljs.core.str(invalid),cljs.core.str(" protocol declaration must appear with `static`.")].join('')));
} else {
return null;
}
});
om.next.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$initLocalState,cljs.core.cst$sym$componentWillMount,cljs.core.cst$sym$componentDidUpdate,cljs.core.cst$sym$componentWillUnmount,cljs.core.cst$sym$componentWillReceiveProps,cljs.core.cst$sym$shouldComponentUpdate,cljs.core.cst$sym$render,cljs.core.cst$sym$componentWillUpdate,cljs.core.cst$sym$componentDidMount],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$prev_DASH_props,cljs.core.cst$sym$prev_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props,cljs.core.cst$sym$next_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props,cljs.core.cst$sym$next_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null)]);
om.next.validate_sig = (function om$next$validate_sig(p__25520){
var vec__25524 = p__25520;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25524,(0),null);
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25524,(1),null);
var method = vec__25524;
var sig_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.next.lifecycle_sigs,name);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sig_SINGLEQUOTE_),cljs.core.count(sig))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid signature for "),cljs.core.str(name),cljs.core.str(" got "),cljs.core.str(sig),cljs.core.str(", need "),cljs.core.str(sig_SINGLEQUOTE_)].join('')),cljs.core.str("\n"),cljs.core.str("(= (count sig') (count sig))")].join('')));
}
});
om.next.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reshape,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$sym$initLocalState,(function (p__25570){
var vec__25571 = p__25570;
var seq__25572 = cljs.core.seq(vec__25571);
var first__25573 = cljs.core.first(seq__25572);
var seq__25572__$1 = cljs.core.next(seq__25572);
var name = first__25573;
var first__25573__$1 = cljs.core.first(seq__25572__$1);
var seq__25572__$2 = cljs.core.next(seq__25572__$1);
var vec__25574 = first__25573__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25574,(0),null);
var args = vec__25574;
var body = seq__25572__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25534__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj),cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25534__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillReceiveProps,(function (p__25577){
var vec__25578 = p__25577;
var seq__25579 = cljs.core.seq(vec__25578);
var first__25580 = cljs.core.first(seq__25579);
var seq__25579__$1 = cljs.core.next(seq__25579);
var name = first__25580;
var first__25580__$1 = cljs.core.first(seq__25579__$1);
var seq__25579__$2 = cljs.core.next(seq__25579__$1);
var vec__25581 = first__25580__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25581,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25581,(1),null);
var args = vec__25581;
var body = seq__25579__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25535__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25536__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25535__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25536__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25535__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillUpdate,(function (p__25584){
var vec__25585 = p__25584;
var seq__25586 = cljs.core.seq(vec__25585);
var first__25587 = cljs.core.first(seq__25586);
var seq__25586__$1 = cljs.core.next(seq__25586);
var name = first__25587;
var first__25587__$1 = cljs.core.first(seq__25586__$1);
var seq__25586__$2 = cljs.core.next(seq__25586__$1);
var vec__25588 = first__25587__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25588,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25588,(1),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25588,(2),null);
var args = vec__25588;
var body = seq__25586__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25538__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__25539__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25538__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = next_state;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__25539__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$pendingState")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__25539__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25540__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_Ident),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__25541__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__25542__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__25541__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__25542__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__25543__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__25543__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexes),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__25543__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__25544__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__25544__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__25541__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_disj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__25542__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fnil),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_conj),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_state_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25537__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25540__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentDidUpdate,(function (p__25591){
var vec__25592 = p__25591;
var seq__25593 = cljs.core.seq(vec__25592);
var first__25594 = cljs.core.first(seq__25593);
var seq__25593__$1 = cljs.core.next(seq__25593);
var name = first__25594;
var first__25594__$1 = cljs.core.first(seq__25593__$1);
var seq__25593__$2 = cljs.core.next(seq__25593__$1);
var vec__25595 = first__25594__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25595,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25595,(1),null);
var prev_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25595,(2),null);
var args = vec__25595;
var body = seq__25593__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25545__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__25546__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__25547__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25545__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = prev_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prev_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__25546__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25545__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = prev_state;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__25547__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$previousState")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([body,(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_clear_DASH_prev_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25545__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillMount,(function (p__25598){
var vec__25599 = p__25598;
var seq__25600 = cljs.core.seq(vec__25599);
var first__25601 = cljs.core.first(seq__25600);
var seq__25600__$1 = cljs.core.next(seq__25600);
var name = first__25601;
var first__25601__$1 = cljs.core.first(seq__25600__$1);
var seq__25600__$2 = cljs.core.next(seq__25600__$1);
var vec__25602 = first__25601__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25602,(0),null);
var args = vec__25602;
var body = seq__25600__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25548__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25548__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25549__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25548__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25549__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_index_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25549__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25548__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillUnmount,(function (p__25605){
var vec__25606 = p__25605;
var seq__25607 = cljs.core.seq(vec__25606);
var first__25608 = cljs.core.first(seq__25607);
var seq__25607__$1 = cljs.core.next(seq__25607);
var name = first__25608;
var first__25608__$1 = cljs.core.first(seq__25607__$1);
var seq__25607__$2 = cljs.core.next(seq__25607__$1);
var vec__25609 = first__25608__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25609,(0),null);
var args = vec__25609;
var body = seq__25607__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25550__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25550__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__25551__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25550__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__25552__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__25551__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__25553__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__25552__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25554__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__25552__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__25553__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__25553__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25550__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__25553__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25550__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25554__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_drop_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25554__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25550__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
}),cljs.core.cst$sym$render,(function (p__25612){
var vec__25613 = p__25612;
var seq__25614 = cljs.core.seq(vec__25613);
var first__25615 = cljs.core.first(seq__25614);
var seq__25614__$1 = cljs.core.next(seq__25614);
var name = first__25615;
var first__25615__$1 = cljs.core.first(seq__25614__$1);
var seq__25614__$2 = cljs.core.next(seq__25614__$1);
var vec__25616 = first__25615__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25616,(0),null);
var args = vec__25616;
var body = seq__25614__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25555__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7251__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25555__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_reconciler_STAR_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25555__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_depth_STAR_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_inc),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_depth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25555__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_shared_STAR_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_shared),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25555__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_instrument_STAR_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_instrument),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25555__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_parent_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25555__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
})], null),cljs.core.cst$kw$defaults,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$isMounted),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_boolean),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_getValueByKeys),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj(cljs.core.List.EMPTY,"_renderedComponent")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$shouldComponentUpdate),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25557__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__25558__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_children__25559__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25557__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_children)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25557__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25557__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$value")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25557__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cond_DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25557__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_OmProps),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25557__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_unwrap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25557__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_state)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_state)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__25558__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_children)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_children__25559__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillUpdate),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25557__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__25558__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_Ident),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__25560__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__25561__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__25557__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__25560__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__25561__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__25562__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__25562__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexes),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__25562__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__25563__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__25563__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__25560__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_disj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__25561__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fnil),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_conj),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_state_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentDidUpdate),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__25564__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__25565__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_clear_DASH_prev_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillMount),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25566__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25566__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_index_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25566__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillUnmount),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__25567__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__25568__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__25567__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__25569__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__25568__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25566__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__25568__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__25569__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__25569__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__25569__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25566__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_drop_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__25566__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25556__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))))], null);
om.next.reshape = (function om$next$reshape(dt,p__25619){
var map__25660 = p__25619;
var map__25660__$1 = ((((!((map__25660 == null)))?((((map__25660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25660):map__25660);
var reshape__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25660__$1,cljs.core.cst$kw$reshape);
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25660__$1,cljs.core.cst$kw$defaults);
var reshape_STAR_ = ((function (map__25660,map__25660__$1,reshape__$1,defaults){
return (function om$next$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_(x)) && (cljs.core.contains_QMARK_(reshape__$1,cljs.core.first(x)))){
var reshapef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reshape__$1,cljs.core.first(x));
om.next.validate_sig(x);

return (reshapef.cljs$core$IFn$_invoke$arity$1 ? reshapef.cljs$core$IFn$_invoke$arity$1(x) : reshapef.call(null,x));
} else {
return x;
}
});})(map__25660,map__25660__$1,reshape__$1,defaults))
;
var add_defaults_step = ((function (map__25660,map__25660__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_defaults_step(ret,p__25681){
var vec__25691 = p__25681;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25691,(0),null);
var impl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25691,(1),null);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([name], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,ret))))){
var vec__25694 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$Object,null], null), null)),ret);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25694,(0),null);
var vec__25697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25694,(1),null);
var seq__25698 = cljs.core.seq(vec__25697);
var first__25699 = cljs.core.first(seq__25698);
var seq__25698__$1 = cljs.core.next(seq__25698);
var p = first__25699;
var after = seq__25698__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(before),p,cljs.core.array_seq([cljs.core.cons(name,impl)], 0)),after);
} else {
return ret;
}
});})(map__25660,map__25660__$1,reshape__$1,defaults))
;
var add_defaults = ((function (map__25660,map__25660__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_defaults_step,dt__$1,defaults);
});})(map__25660,map__25660__$1,reshape__$1,defaults))
;
var add_object_protocol = ((function (map__25660,map__25660__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$Object,null], null), null),dt__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dt__$1,cljs.core.cst$sym$Object);
} else {
return dt__$1;
}
});})(map__25660,map__25660__$1,reshape__$1,defaults))
;
return add_defaults(add_object_protocol(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reshape_STAR_,dt))));
});
om.next.defui_STAR_ = (function om$next$defui_STAR_(var_args){
var args25714 = [];
var len__7492__auto___25736 = arguments.length;
var i__7493__auto___25737 = (0);
while(true){
if((i__7493__auto___25737 < len__7492__auto___25736)){
args25714.push((arguments[i__7493__auto___25737]));

var G__25738 = (i__7493__auto___25737 + (1));
i__7493__auto___25737 = G__25738;
continue;
} else {
}
break;
}

var G__25716 = args25714.length;
switch (G__25716) {
case 2:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25714.length)].join('')));

}
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3(name,form,null);
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$field_set_BANG_(obj,p__25724){
var vec__25728 = p__25724;
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25728,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25728,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7251__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(field)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = value;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
});
var docstring = ((typeof cljs.core.first(forms) === 'string')?cljs.core.first(forms):null);
var forms__$1 = (function (){var G__25732 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest(G__25732);
} else {
return G__25732;
}
})();
var map__25731 = om.next.collect_statics(forms__$1);
var map__25731__$1 = ((((!((map__25731 == null)))?((((map__25731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25731):map__25731);
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25731__$1,cljs.core.cst$kw$dt);
var statics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25731__$1,cljs.core.cst$kw$statics);
var _ = om.next.validate_statics(dt);
var rname = (cljs.core.truth_(env)?cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),name)):name);
var ctor = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defn),(function (){var x__7251__auto__ = cljs.core.with_meta(name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$jsdoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta(name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,docstring], null):null)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25708__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_React$Component),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25708__auto__),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_not),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_initLocalState),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25708__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25708__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$initLocalState),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25708__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25708__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25708__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
var set_react_proto_BANG_ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_clone),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_React$Component$prototype))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
var ctor__$1 = (cljs.core.truth_(cljs.core.cst$kw$once.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_exists_QMARK_),(function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = ctor;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = set_react_proto_BANG_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7251__auto__ = ctor;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = set_react_proto_BANG_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0)))));
var display_name = (cljs.core.truth_(env)?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env))),cljs.core.str("/"),cljs.core.str(name)].join(''):cljs.core.cst$sym$js_SLASH_undefined);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7251__auto__ = ctor__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([om.next.reshape(dt,om.next.reshape_map)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_constructor)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_constructor),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_displayName)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = display_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_om$isComponent)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__25731,map__25731__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__25709_SHARP_){
return field_set_BANG_(name,p1__25709_SHARP_);
});})(docstring,forms__$1,map__25731,map__25731__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__25731,map__25731__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__25710_SHARP_){
var G__25735 = p1__25710_SHARP_;
if((p1__25710_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__25735,cljs.core.assoc,cljs.core.cst$kw$static,true);
} else {
return G__25735;
}
});})(docstring,forms__$1,map__25731,map__25731__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(statics))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7251__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_prototype)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(statics)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__7251__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorStr),(function (){var x__7251__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__7251__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25711__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__25712__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opt__25713__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__25712__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
});

om.next.defui_STAR_.cljs$lang$maxFixedArity = 3;

om.next.defui = (function om$next$defui(var_args){
var args__7499__auto__ = [];
var len__7492__auto___25744 = arguments.length;
var i__7493__auto___25745 = (0);
while(true){
if((i__7493__auto___25745 < len__7492__auto___25744)){
args__7499__auto__.push((arguments[i__7493__auto___25745]));

var G__25746 = (i__7493__auto___25745 + (1));
i__7493__auto___25745 = G__25746;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((3) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((3)),(0),null)):null);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7500__auto__);
});

om.next.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3(name,forms,_AMPERSAND_env);
} else {
return null;
}
});

om.next.defui.cljs$lang$maxFixedArity = (3);

om.next.defui.cljs$lang$applyTo = (function (seq25740){
var G__25741 = cljs.core.first(seq25740);
var seq25740__$1 = cljs.core.next(seq25740);
var G__25742 = cljs.core.first(seq25740__$1);
var seq25740__$2 = cljs.core.next(seq25740__$1);
var G__25743 = cljs.core.first(seq25740__$2);
var seq25740__$3 = cljs.core.next(seq25740__$2);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic(G__25741,G__25742,G__25743,seq25740__$3);
});


om.next.defui.cljs$lang$macro = true;
om.next.ui = (function om$next$ui(var_args){
var args__7499__auto__ = [];
var len__7492__auto___25750 = arguments.length;
var i__7493__auto___25751 = (0);
while(true){
if((i__7493__auto___25751 < len__7492__auto___25750)){
args__7499__auto__.push((arguments[i__7493__auto___25751]));

var G__25752 = (i__7493__auto___25751 + (1));
i__7493__auto___25751 = G__25752;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((2) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((2)),(0),null)):null);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7500__auto__);
});

om.next.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("ui_"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anonymous,true], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_defui),(function (){var x__7251__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([forms], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
});

om.next.ui.cljs$lang$maxFixedArity = (2);

om.next.ui.cljs$lang$applyTo = (function (seq25747){
var G__25748 = cljs.core.first(seq25747);
var seq25747__$1 = cljs.core.next(seq25747);
var G__25749 = cljs.core.first(seq25747__$1);
var seq25747__$2 = cljs.core.next(seq25747__$1);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic(G__25748,G__25749,seq25747__$2);
});


om.next.ui.cljs$lang$macro = true;
om.next.invariant_STAR_ = (function om$next$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();
var fn_scope = cljs.core.cst$kw$fn_DASH_scope.cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__25755 = fn_scope;
var G__25755__$1 = (((G__25755 == null))?null:cljs.core.first(G__25755));
var G__25755__$2 = (((G__25755__$1 == null))?null:cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__25755__$1));
if((G__25755__$2 == null)){
return null;
} else {
return [cljs.core.str(G__25755__$2)].join('');
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$elide_DASH_asserts.cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7251__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__25753__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_logger_STAR_)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7251__auto__ = condition;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$log_SLASH_error),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__25753__auto__),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invariant Violation"),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),(function (){var x__7251__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.array_seq([(function (){var x__7251__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY," (in function: `"),cljs.core.array_seq([(function (){var x__7251__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"`)")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,": "),(function (){var x__7251__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})()], 0))));
}
});
om.next.invariant = (function om$next$invariant(_AMPERSAND_form,_AMPERSAND_env,condition,message){
if(cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.invariant_STAR_(condition,message,_AMPERSAND_env);
} else {
return null;
}
});

om.next.invariant.cljs$lang$macro = true;
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = (function (){var G__25756 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25756) : cljs.core.atom.call(null,G__25756));
})();
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
if(cljs.core.seq_QMARK_(expr)){
var expr_SINGLEQUOTE_ = cljs.core.first(expr);
if(cljs.core.map_QMARK_(expr_SINGLEQUOTE_)){
return cljs.core.ffirst(expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_(expr)){
var G__25758 = expr;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(expr))){
return cljs.core.first(G__25758);
} else {
return G__25758;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper((function (p1__25759_SHARP_){
return (cljs.core.vector_QMARK_(p1__25759_SHARP_)) || (cljs.core.map_QMARK_(p1__25759_SHARP_)) || (cljs.core.seq_QMARK_(p1__25759_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_(node))?cljs.core.vec(children):((cljs.core.map_QMARK_(node))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_(node))?children:null)));
return cljs.core.with_meta(ret,cljs.core.meta(node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down(loc);
while(true){
var node = clojure.zip.node(loc__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(node))){
return clojure.zip.right(clojure.zip.down(loc__$1));
} else {
var G__25760 = clojure.zip.right(loc__$1);
loc__$1 = G__25760;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_(path__$1)){
return loc;
} else {
var node = clojure.zip.node(loc);
if(cljs.core.vector_QMARK_(node)){
var G__25793 = clojure.zip.down(loc);
var G__25794 = path__$1;
loc = G__25793;
path__$1 = G__25794;
continue;
} else {
var vec__25789 = path__$1;
var seq__25790 = cljs.core.seq(vec__25789);
var first__25791 = cljs.core.first(seq__25790);
var seq__25790__$1 = cljs.core.next(seq__25790);
var k = first__25791;
var ks = seq__25790__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_(node)) || ((cljs.core.seq_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.first(node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key((function (){var G__25792 = loc;
if(cljs.core.seq_QMARK_(node)){
return clojure.zip.down(G__25792);
} else {
return G__25792;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node(loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
if(cljs.core.seq(ks)){
var G__25795 = clojure.zip.replace(loc_SINGLEQUOTE_,clojure.zip.node(om.next.move_to_key(loc_SINGLEQUOTE_,cljs.core.first(ks))));
var G__25796 = cljs.core.next(ks);
loc = G__25795;
path__$1 = G__25796;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__25797 = loc_SINGLEQUOTE_;
var G__25798 = ks;
loc = G__25797;
path__$1 = G__25798;
continue;
}
} else {
var G__25799 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__25800 = ks;
loc = G__25799;
path__$1 = G__25800;
continue;
}
} else {
var G__25801 = clojure.zip.right(loc);
var G__25802 = path__$1;
loc = G__25801;
path__$1 = G__25802;
continue;
}
}
}
break;
}
});
return query_template_STAR_(om.next.query_zip(query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root(clojure.zip.replace(template,new_query));
});
om.next.focused_join = (function om$next$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta(expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(expr))?(function (){var join_value = cljs.core.second(cljs.core.first(expr));
var join_value__$1 = (((om.util.recursion_QMARK_(join_value)) && (cljs.core.seq(ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst(expr),(om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(join_value__$1,ks,null) : om.next.focus_query_STAR_.call(null,join_value__$1,ks,null))], true, false);
})():((cljs.core.seq_QMARK_(expr))?(function (){var x__7251__auto__ = om$next$focused_join(cljs.core.first(expr),ks,null,null);
return cljs.core._conj((function (){var x__7251__auto____$1 = cljs.core.second(expr);
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto____$1);
})(),x__7251__auto__);
})():expr
));
var G__25812 = expr_SINGLEQUOTE_;
if(cljs.core.some_QMARK_(expr_meta)){
return cljs.core.with_meta(G__25812,expr_meta);
} else {
return G__25812;
}
});
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__25819 = path;
var seq__25820 = cljs.core.seq(vec__25819);
var first__25821 = cljs.core.first(seq__25820);
var seq__25820__$1 = cljs.core.next(seq__25820);
var k = first__25821;
var ks = seq__25820__$1;
var match = ((function (vec__25819,seq__25820,first__25821,seq__25820__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,om.util.join_key(x));
});})(vec__25819,seq__25820,first__25821,seq__25820__$1,k,ks))
;
var value = ((function (vec__25819,seq__25820,first__25821,seq__25820__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join(x,ks,query,union_expr);
});})(vec__25819,seq__25820,first__25821,seq__25820__$1,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k),ks,query)], true, false);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match),cljs.core.map.cljs$core$IFn$_invoke$arity$1(value),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),query);
}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
return om.next.focus_query_STAR_(query,path,null);
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args25822 = [];
var len__7492__auto___25828 = arguments.length;
var i__7493__auto___25829 = (0);
while(true){
if((i__7493__auto___25829 < len__7492__auto___25828)){
args25822.push((arguments[i__7493__auto___25829]));

var G__25830 = (i__7493__auto___25829 + (1));
i__7493__auto___25829 = G__25830;
continue;
} else {
}
break;
}

var G__25824 = args25822.length;
switch (G__25824) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25822.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,cljs.core.cst$sym$_STAR_,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__6405__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bound,cljs.core.cst$sym$_STAR_)) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,bound)) && ((cljs.core.count(path) < cljs.core.count(bound))));
if(and__6405__auto__){
var and__6405__auto____$1 = cljs.core.some(om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__6405__auto____$1)){
return ((1) === cljs.core.count(focus));
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})())){
var vec__25825 = om.util.join_entry(cljs.core.first(focus));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25825,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25825,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_(focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__25832 = focus_SINGLEQUOTE___$1;
var G__25833 = bound;
var G__25834 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
focus = G__25832;
bound = G__25833;
path = G__25834;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (om.next.ident[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__7081__auto__.call(null,this$,props));
} else {
var m__7081__auto____$1 = (om.next.ident["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,props) : m__7081__auto____$1.call(null,this$,props));
} else {
throw cljs.core.missing_protocol("Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (om.next.params[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7081__auto__.call(null,this$));
} else {
var m__7081__auto____$1 = (om.next.params["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7081__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (om.next.query[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7081__auto__.call(null,this$));
} else {
var m__7081__auto____$1 = (om.next.query["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7081__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__7081__auto__.call(null,this$,new_state));
} else {
var m__7081__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__7081__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (om.next._get_state[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7081__auto__.call(null,this$));
} else {
var m__7081__auto____$1 = (om.next._get_state["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7081__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (om.next._get_rendered_state[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7081__auto__.call(null,this$));
} else {
var m__7081__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7081__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__7080__auto__ = (((this$ == null))?null:this$);
var m__7081__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7081__auto__.call(null,this$));
} else {
var m__7081__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7081__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__6405__auto__ = (x instanceof cljs.core.Symbol);
if(and__6405__auto__){
var G__25841 = [cljs.core.str(x)].join('');
var G__25842 = "?";
return goog.string.startsWith(G__25841,G__25842);
} else {
return and__6405__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_(expr))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,om.next.var__GT_keyword(expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta(query);
var tr = cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (qm){
return (function (p1__25843_SHARP_){
return om$next$bind_query(p1__25843_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_(query))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_(query))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(query),tr,query):om.next.replace_var(query,params)
));
var G__25846 = ret;
if(cljs.core.truth_((function (){var and__6405__auto__ = qm;
if(cljs.core.truth_(and__6405__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || (ret.cljs$core$IMeta$)){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,ret);
}
} else {
return and__6405__auto__;
}
})())){
return cljs.core.with_meta(G__25846,qm);
} else {
return G__25846;
}
});






om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__25849 = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(component) : om.next.get_reconciler.call(null,component));
var G__25849__$1 = (((G__25849 == null))?null:cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__25849));
var G__25849__$2 = (((G__25849__$1 == null))?null:cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__25849__$1));
var G__25849__$3 = (((G__25849__$2 == null))?null:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25849__$2) : cljs.core.deref.call(null,G__25849__$2)));
var G__25849__$4 = (((G__25849__$3 == null))?null:cljs.core.cst$kw$om$next_SLASH_queries.cljs$core$IFn$_invoke$arity$1(G__25849__$3));
if((G__25849__$4 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__25849__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data(component),om.next.query(component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data(component),om.next.params(component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var args25850 = [];
var len__7492__auto___25853 = arguments.length;
var i__7493__auto___25854 = (0);
while(true){
if((i__7493__auto___25854 < len__7492__auto___25853)){
args25850.push((arguments[i__7493__auto___25854]));

var G__25855 = (i__7493__auto___25854 + (1));
i__7493__auto___25854 = G__25855;
continue;
} else {
}
break;
}

var G__25852 = args25850.length;
switch (G__25852) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25850.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2(component,om.next.component__GT_query_data(component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(query_data,om.next.query(component));
var c_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(component),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c')")].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(query_data,om.next.params(component))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,(om.next.react_type.cljs$core$IFn$_invoke$arity$1 ? om.next.react_type.cljs$core$IFn$_invoke$arity$1(component) : om.next.react_type.call(null,component))], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;

om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1(x);
} else {
var q = om.next.query(x);
var c = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c)")].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(x)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,x], null));
}
});
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
om.next.get_indexed_query = (function om$next$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (component,class_path_query_data,data_path){
return (function (p1__25859_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data_path,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__25859_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_(qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_(qs__$1))){
var q = cljs.core.first(qs__$1);
var node = clojure.zip.node(q);
if(!(om.util.recursion_QMARK_(node))){
return node;
} else {
var G__25860 = component;
var G__25861 = class_path_query_data;
var G__25862 = cljs.core.pop(data_path);
component = G__25860;
class_path_query_data = G__25861;
data_path = G__25862;
continue;
}
} else {
return om.next.get_class_or_instance_query(component);
}
break;
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
var temp__4655__auto__ = om.next.component__GT_query_data(x);
if(cljs.core.truth_(temp__4655__auto__)){
var query_data = temp__4655__auto__;
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2(x,query_data);
} else {
var cp = (om.next.class_path.cljs$core$IFn$_invoke$arity$1 ? om.next.class_path.cljs$core$IFn$_invoke$arity$1(x) : om.next.class_path.call(null,x));
var r = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(x) : om.next.get_reconciler.call(null,x));
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),(om.next.path.cljs$core$IFn$_invoke$arity$1 ? om.next.path.cljs$core$IFn$_invoke$arity$1(x) : om.next.path.call(null,x)));
var class_path_query_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class_DASH_path_DASH__GT_query.cljs$core$IFn$_invoke$arity$1((function (){var G__25866 = (om.next.get_indexer.cljs$core$IFn$_invoke$arity$1 ? om.next.get_indexer.cljs$core$IFn$_invoke$arity$1(r) : om.next.get_indexer.call(null,r));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25866) : cljs.core.deref.call(null,G__25866));
})()),cp);
return om.next.get_indexed_query(x,class_path_query_data,data_path);
}
} else {
return om.next.get_class_or_instance_query(x);
}
} else {
return null;
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$component,class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$basis_DASH_t], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write(writer__7024__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props(null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4655__auto__ = cljs.core.cst$kw$react_DASH_key.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4655__auto__)){
var rk = temp__4655__auto__;
return rk;
} else {
var temp__4655__auto____$1 = cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 *    om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args25867 = [];
var len__7492__auto___25883 = arguments.length;
var i__7493__auto___25884 = (0);
while(true){
if((i__7493__auto___25884 < len__7492__auto___25883)){
args25867.push((arguments[i__7493__auto___25884]));

var G__25885 = (i__7493__auto___25884 + (1));
i__7493__auto___25884 = G__25885;
continue;
} else {
}
break;
}

var G__25869 = args25867.length;
switch (G__25869) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25867.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__25870){
var map__25871 = p__25870;
var map__25871__$1 = ((((!((map__25871 == null)))?((((map__25871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25871):map__25871);
var opts = map__25871__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25871__$1,cljs.core.cst$kw$validator);
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25871__$1,cljs.core.cst$kw$keyfn);
var instrument_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25871__$1,cljs.core.cst$kw$instrument_QMARK_,true);
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__25871,map__25871__$1,opts,validator,keyfn,instrument_QMARK_){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__6405__auto__ = om.next._STAR_instrument_STAR_;
if(cljs.core.truth_(and__6405__auto__)){
return instrument_QMARK_;
} else {
return and__6405__auto__;
}
})())){
var G__25878 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$props,props,cljs.core.cst$kw$children,children,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$factory,om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$instrument_QMARK_,false))], null);
return (om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1(G__25878) : om.next._STAR_instrument_STAR_.call(null,G__25878));
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):om.next.compute_react_key(class$,props));
var ref = cljs.core.cst$kw$ref.cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__25879 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__25879)].join('');
} else {
return G__25879;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t(om.next._STAR_reconciler_STAR_):(0));
var G__25880 = class$;
var G__25881 = ({"omcljs$value": om.next.om_props(props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_});
var G__25882 = om.util.force_children(children);
return React.createElement(G__25880,G__25881,G__25882);
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__25887__i = 0, G__25887__a = new Array(arguments.length -  1);
while (G__25887__i < G__25887__a.length) {G__25887__a[G__25887__i] = arguments[G__25887__i + 1]; ++G__25887__i;}
  children = new cljs.core.IndexedSeq(G__25887__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__25888){
var props = cljs.core.first(arglist__25888);
var children = cljs.core.rest(arglist__25888);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__25871,map__25871__$1,opts,validator,keyfn,instrument_QMARK_))
});

om.next.factory.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
var G__25891 = c.props;
var G__25892 = k;
return goog.object.get(G__25891,G__25892);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_(x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_(x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_(x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
var G__25896 = c.props;
var G__25897 = k;
var G__25898 = v;
return goog.object.set(G__25896,G__25897,G__25898);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop(c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args25899 = [];
var len__7492__auto___25902 = arguments.length;
var i__7493__auto___25903 = (0);
while(true){
if((i__7493__auto___25903 < len__7492__auto___25902)){
args25899.push((arguments[i__7493__auto___25903]));

var G__25904 = (i__7493__auto___25903 + (1));
i__7493__auto___25903 = G__25904;
continue;
} else {
}
break;
}

var G__25901 = args25899.length;
switch (G__25901) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25899.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;

om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args25906 = [];
var len__7492__auto___25909 = arguments.length;
var i__7493__auto___25910 = (0);
while(true){
if((i__7493__auto___25910 < len__7492__auto___25909)){
args25906.push((arguments[i__7493__auto___25910]));

var G__25911 = (i__7493__auto___25910 + (1));
i__7493__auto___25910 = G__25911;
continue;
} else {
}
break;
}

var G__25908 = args25906.length;
switch (G__25908) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25906.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;

om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap(om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(prev_props),om.next.get_prev_props(cst)),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3(om.next.get_props(component.props),om.next.get_props(next_props),om.next.get_next_props(component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
var G__25915 = c.state;
var G__25916 = "omcljs$prev$value";
return goog.object.remove(G__25915,G__25916);
});
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(c.props),om.next.get_props(c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop(component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *  the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_(component)){
return om.next.get_prop(component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop(component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__6417__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop(c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args25917 = [];
var len__7492__auto___25924 = arguments.length;
var i__7493__auto___25925 = (0);
while(true){
if((i__7493__auto___25925 < len__7492__auto___25924)){
args25917.push((arguments[i__7493__auto___25925]));

var G__25926 = (i__7493__auto___25925 + (1));
i__7493__auto___25925 = G__25926;
continue;
} else {
}
break;
}

var G__25919 = args25917.length;
switch (G__25919) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25917.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared__$1 = (function (){var G__25920 = component.props;
var G__25921 = "omcljs$shared";
return goog.object.get(G__25920,G__25921);
})();
var ks = (function (){var G__25922 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__25922],null));
} else {
return G__25922;
}
})();
var G__25923 = shared__$1;
if(!(cljs.core.empty_QMARK_(ks))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__25923,ks);
} else {
return G__25923;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;

om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.get_prop(component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__25932 = c.state;
var G__25933_25936 = G__25932;
var G__25934_25937 = "omcljs$next$value";
var G__25935_25938 = om.next.om_props(next_props,om.next.protocols.basis_t(om.next.get_reconciler(c)));
goog.object.set(G__25933_25936,G__25934_25937,G__25935_25938);

return G__25932;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(component.props),om.next.get_props(component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__25941 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__25941,cljs.core.assoc,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__25941;
}
} else {
var G__25942 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25942,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__25942;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args25943 = [];
var len__7492__auto___25948 = arguments.length;
var i__7493__auto___25949 = (0);
while(true){
if((i__7493__auto___25949 < len__7492__auto___25948)){
args25943.push((arguments[i__7493__auto___25949]));

var G__25950 = (i__7493__auto___25949 + (1));
i__7493__auto___25949 = G__25950;
continue;
} else {
}
break;
}

var G__25945 = args25943.length;
switch (G__25945) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25943.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__25946 = x;
if(om.next.component_QMARK_(x)){
return om.next.props(G__25946);
} else {
return G__25946;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_computed], null),(function (){var G__25947 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__25947],null));
} else {
return G__25947;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
om.next._set_state_BANG_(component,new_state);
} else {
var G__25957_25960 = component.state;
var G__25958_25961 = "omcljs$pendingState";
var G__25959_25962 = new_state;
goog.object.set(G__25957_25960,G__25958_25961,G__25959_25962);
}

var temp__4655__auto__ = om.next.get_reconciler(component);
if(cljs.core.truth_(temp__4655__auto__)){
var r = temp__4655__auto__;
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return (om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_render_BANG_.call(null,r));
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args25963 = [];
var len__7492__auto___25967 = arguments.length;
var i__7493__auto___25968 = (0);
while(true){
if((i__7493__auto___25968 < len__7492__auto___25967)){
args25963.push((arguments[i__7493__auto___25968]));

var G__25969 = (i__7493__auto___25968 + (1));
i__7493__auto___25968 = G__25969;
continue;
} else {
}
break;
}

var G__25965 = args25963.length;
switch (G__25965) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25963.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_state(component):(function (){var temp__4657__auto__ = component.state;
if(cljs.core.truth_(temp__4657__auto__)){
var state = temp__4657__auto__;
var or__6417__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args25971 = [];
var len__7492__auto___25996 = arguments.length;
var i__7493__auto___25997 = (0);
while(true){
if((i__7493__auto___25997 < len__7492__auto___25996)){
args25971.push((arguments[i__7493__auto___25997]));

var G__25998 = (i__7493__auto___25997 + (1));
i__7493__auto___25997 = G__25998;
continue;
} else {
}
break;
}

var G__25980 = args25971.length;
switch (G__25980) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args25971.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__7511__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_(component,(function (){var G__25981 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25981) : f.call(null,G__25981));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_(component,(function (){var G__25982 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__25983 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25982,G__25983) : f.call(null,G__25982,G__25983));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_(component,(function (){var G__25984 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__25985 = arg0;
var G__25986 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25984,G__25985,G__25986) : f.call(null,G__25984,G__25985,G__25986));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_(component,(function (){var G__25987 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__25988 = arg0;
var G__25989 = arg1;
var G__25990 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__25987,G__25988,G__25989,G__25990) : f.call(null,G__25987,G__25988,G__25989,G__25990));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_(component,(function (){var G__25991 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__25992 = arg0;
var G__25993 = arg1;
var G__25994 = arg2;
var G__25995 = arg3;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__25991,G__25992,G__25993,G__25994,G__25995) : f.call(null,G__25991,G__25992,G__25993,G__25994,G__25995));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,om.next.get_state.cljs$core$IFn$_invoke$arity$1(component),arg0,arg1,arg2,cljs.core.array_seq([arg3,arg_rest], 0)));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq25972){
var G__25973 = cljs.core.first(seq25972);
var seq25972__$1 = cljs.core.next(seq25972);
var G__25974 = cljs.core.first(seq25972__$1);
var seq25972__$2 = cljs.core.next(seq25972__$1);
var G__25975 = cljs.core.first(seq25972__$2);
var seq25972__$3 = cljs.core.next(seq25972__$2);
var G__25976 = cljs.core.first(seq25972__$3);
var seq25972__$4 = cljs.core.next(seq25972__$3);
var G__25977 = cljs.core.first(seq25972__$4);
var seq25972__$5 = cljs.core.next(seq25972__$4);
var G__25978 = cljs.core.first(seq25972__$5);
var seq25972__$6 = cljs.core.next(seq25972__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25973,G__25974,G__25975,G__25976,G__25977,G__25978,seq25972__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var args26000 = [];
var len__7492__auto___26005 = arguments.length;
var i__7493__auto___26006 = (0);
while(true){
if((i__7493__auto___26006 < len__7492__auto___26005)){
args26000.push((arguments[i__7493__auto___26006]));

var G__26007 = (i__7493__auto___26006 + (1));
i__7493__auto___26006 = G__26007;
continue;
} else {
}
break;
}

var G__26002 = args26000.length;
switch (G__26002) {
case 1:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26000.length)].join('')));

}
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_rendered_state(component):(function (){var G__26004 = component;
var G__26004__$1 = (((G__26004 == null))?null:G__26004.state);
if((G__26004__$1 == null)){
return null;
} else {
return goog.object.get(G__26004__$1,"omcljs$state");
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = 2;

om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:false):false)){
return om.next._merge_pending_state_BANG_(c);
} else {
var temp__4657__auto__ = (function (){var G__26012 = c;
var G__26012__$1 = (((G__26012 == null))?null:G__26012.state);
if((G__26012__$1 == null)){
return null;
} else {
return goog.object.get(G__26012__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var pending = temp__4657__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args26013 = [];
var len__7492__auto___26016 = arguments.length;
var i__7493__auto___26017 = (0);
while(true){
if((i__7493__auto___26017 < len__7492__auto___26016)){
args26013.push((arguments[i__7493__auto___26017]));

var G__26018 = (i__7493__auto___26017 + (1));
i__7493__auto___26017 = G__26018;
continue;
} else {
}
break;
}

var G__26015 = args26013.length;
switch (G__26015) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26013.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState(({"omcljs$state": new_state}),cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;






/**
 * Given an environment, a query and a set of remotes return a hash map of remotes
 * mapped to the query specific to that remote.
 */
om.next.gather_sends = (function om$next$gather_sends(p__26021,q,remotes){
var map__26028 = p__26021;
var map__26028__$1 = ((((!((map__26028 == null)))?((((map__26028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26028):map__26028);
var env = map__26028__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26028__$1,cljs.core.cst$kw$parser);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__26028,map__26028__$1,env,parser){
return (function (p1__26020_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__26020_SHARP_,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__26020_SHARP_) : parser.call(null,env,q,p1__26020_SHARP_))],null));
});})(map__26028,map__26028__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__26028,map__26028__$1,env,parser){
return (function (p__26030){
var vec__26031 = p__26030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26031,(1),null);
return (cljs.core.count(v) > (0));
});})(map__26028,map__26028__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
if(cljs.core.truth_(cljs.core.cst$kw$easy_DASH_reads.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r)))){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26063 = cljs.core.first(q);
var G__26064 = target;
return (om.next.force.cljs$core$IFn$_invoke$arity$2 ? om.next.force.cljs$core$IFn$_invoke$arity$2(G__26063,G__26064) : om.next.force.call(null,G__26063,G__26064));
})()], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
var transformed = (function (){var G__26067 = c;
var G__26068 = with_target(target,om.next.focus_query(om.next.get_query(c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
return (om.next.full_query.cljs$core$IFn$_invoke$arity$2 ? om.next.full_query.cljs$core$IFn$_invoke$arity$2(G__26067,G__26068) : om.next.full_query.call(null,G__26067,G__26068));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(tx__$1,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.set(tx__$1)),transformed);
});
var exprs = cljs.core.seq(tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var ast = om.next.impl.parser.expr__GT_ast(expr);
var key = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var tgt = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var cs = (om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2 ? om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2(r,key) : om.next.ref__GT_components.call(null,r,key));
var G__26070 = cljs.core.next(exprs);
var G__26071 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__26034_SHARP_,p2__26035_SHARP_){
return add_focused_query(key,tgt,p1__26034_SHARP_,p2__26035_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__26069 = tx_SINGLEQUOTE_;
if(cljs.core.empty_QMARK_(cs)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26069,expr);
} else {
return G__26069;
}
})(),cs);
exprs = G__26070;
tx_SINGLEQUOTE_ = G__26071;
continue;
} else {
var G__26072 = cljs.core.next(exprs);
var G__26073 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx_SINGLEQUOTE_,expr);
exprs = G__26072;
tx_SINGLEQUOTE_ = G__26073;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
} else {
return tx;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args26074 = [];
var len__7492__auto___26094 = arguments.length;
var i__7493__auto___26095 = (0);
while(true){
if((i__7493__auto___26095 < len__7492__auto___26094)){
args26074.push((arguments[i__7493__auto___26095]));

var G__26096 = (i__7493__auto___26095 + (1));
i__7493__auto___26095 = G__26096;
continue;
} else {
}
break;
}

var G__26076 = args26074.length;
switch (G__26076) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26074.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3(x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__26077,reads){
var map__26078 = p__26077;
var map__26078__$1 = ((((!((map__26078 == null)))?((((map__26078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26078):map__26078);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26078__$1,cljs.core.cst$kw$params);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26078__$1,cljs.core.cst$kw$query);
if(cljs.core.truth_((function (){var or__6417__auto__ = (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return om.next.component_QMARK_(x);
}
})())){
} else {
throw (new Error("Assert failed: (or (reconciler? x) (component? x))"));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error("Assert failed: (or (not (nil? params)) (not (nil? query)))"));
}

if(((reads == null)) || (cljs.core.vector_QMARK_(reads))){
} else {
throw (new Error("Assert failed: (or (nil? reads) (vector? reads))"));
}

var r = ((om.next.component_QMARK_(x))?om.next.get_reconciler(x):x);
var c = ((om.next.component_QMARK_(x))?x:null);
var xs = ((!((c == null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null):cljs.core.PersistentVector.EMPTY);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__26080 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(r);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26080) : cljs.core.deref.call(null,G__26080));
})());
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var st = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid();
cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st) : cljs.core.deref.call(null,st)));

var temp__4657__auto___26098 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto___26098)){
var l_26099 = temp__4657__auto___26098;
var G__26081_26100 = l_26099;
var G__26082_26101 = [cljs.core.str((function (){var temp__4657__auto____$1 = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ident = temp__4657__auto____$1;
return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ident], 0))),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
goog.log.info(G__26081_26100,G__26082_26101);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,(function (){var or__6417__auto__ = c;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query,query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null):null)], 0))], 0));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(r,reads);
}

om.next.protocols.reindex_BANG_(r);

var rootq_26102 = ((!((c == null)))?(om.next.full_query.cljs$core$IFn$_invoke$arity$1 ? om.next.full_query.cljs$core$IFn$_invoke$arity$1(c) : om.next.full_query.call(null,c)):(((reads == null))?om.next.get_query(root):null));
var sends_26103 = om.next.gather_sends((om.next.to_env.cljs$core$IFn$_invoke$arity$1 ? om.next.to_env.cljs$core$IFn$_invoke$arity$1(cfg) : om.next.to_env.call(null,cfg)),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__6417__auto__ = rootq_26102;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads(r,reads)),cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_(sends_26103)){
} else {
var seq__26084_26104 = cljs.core.seq(sends_26103);
var chunk__26085_26105 = null;
var count__26086_26106 = (0);
var i__26087_26107 = (0);
while(true){
if((i__26087_26107 < count__26086_26106)){
var vec__26088_26108 = chunk__26085_26105.cljs$core$IIndexed$_nth$arity$2(null,i__26087_26107);
var remote_26109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26088_26108,(0),null);
var __26110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26088_26108,(1),null);
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(r,xs,remote_26109);

var G__26111 = seq__26084_26104;
var G__26112 = chunk__26085_26105;
var G__26113 = count__26086_26106;
var G__26114 = (i__26087_26107 + (1));
seq__26084_26104 = G__26111;
chunk__26085_26105 = G__26112;
count__26086_26106 = G__26113;
i__26087_26107 = G__26114;
continue;
} else {
var temp__4657__auto___26115 = cljs.core.seq(seq__26084_26104);
if(temp__4657__auto___26115){
var seq__26084_26116__$1 = temp__4657__auto___26115;
if(cljs.core.chunked_seq_QMARK_(seq__26084_26116__$1)){
var c__7228__auto___26117 = cljs.core.chunk_first(seq__26084_26116__$1);
var G__26118 = cljs.core.chunk_rest(seq__26084_26116__$1);
var G__26119 = c__7228__auto___26117;
var G__26120 = cljs.core.count(c__7228__auto___26117);
var G__26121 = (0);
seq__26084_26104 = G__26118;
chunk__26085_26105 = G__26119;
count__26086_26106 = G__26120;
i__26087_26107 = G__26121;
continue;
} else {
var vec__26091_26122 = cljs.core.first(seq__26084_26116__$1);
var remote_26123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26091_26122,(0),null);
var __26124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26091_26122,(1),null);
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(r,xs,remote_26123);

var G__26125 = cljs.core.next(seq__26084_26116__$1);
var G__26126 = null;
var G__26127 = (0);
var G__26128 = (0);
seq__26084_26104 = G__26125;
chunk__26085_26105 = G__26126;
count__26086_26106 = G__26127;
i__26087_26107 = G__26128;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_(r,sends_26103);

(om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_sends_BANG_.call(null,r));
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args26129 = [];
var len__7492__auto___26149 = arguments.length;
var i__7493__auto___26150 = (0);
while(true){
if((i__7493__auto___26150 < len__7492__auto___26149)){
args26129.push((arguments[i__7493__auto___26150]));

var G__26151 = (i__7493__auto___26150 + (1));
i__7493__auto___26150 = G__26151;
continue;
} else {
}
break;
}

var G__26138 = args26129.length;
switch (G__26138) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args26129.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__7511__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__26139 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26139) : f.call(null,G__26139));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__26140 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__26141 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26140,G__26141) : f.call(null,G__26140,G__26141));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__26142 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__26143 = arg0;
var G__26144 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26142,G__26143,G__26144) : f.call(null,G__26142,G__26143,G__26144));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__26145 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__26146 = arg0;
var G__26147 = arg1;
var G__26148 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__26145,G__26146,G__26147,G__26148) : f.call(null,G__26145,G__26146,G__26147,G__26148));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null),arg0,arg1,arg2,cljs.core.array_seq([arg3,arg_rest], 0)));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq26130){
var G__26131 = cljs.core.first(seq26130);
var seq26130__$1 = cljs.core.next(seq26130);
var G__26132 = cljs.core.first(seq26130__$1);
var seq26130__$2 = cljs.core.next(seq26130__$1);
var G__26133 = cljs.core.first(seq26130__$2);
var seq26130__$3 = cljs.core.next(seq26130__$2);
var G__26134 = cljs.core.first(seq26130__$3);
var seq26130__$4 = cljs.core.next(seq26130__$3);
var G__26135 = cljs.core.first(seq26130__$4);
var seq26130__$5 = cljs.core.next(seq26130__$4);
var G__26136 = cljs.core.first(seq26130__$5);
var seq26130__$6 = cljs.core.next(seq26130__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26131,G__26132,G__26133,G__26134,G__26135,G__26136,seq26130__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_(x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__26154 = component.refs;
if((G__26154 == null)){
return null;
} else {
return goog.object.get(G__26154,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next.update_props_BANG_(c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args26155 = [];
var len__7492__auto___26158 = arguments.length;
var i__7493__auto___26159 = (0);
while(true){
if((i__7493__auto___26159 < len__7492__auto___26158)){
args26155.push((arguments[i__7493__auto___26159]));

var G__26160 = (i__7493__auto___26159 + (1));
i__7493__auto___26159 = G__26160;
continue;
} else {
}
break;
}

var G__26157 = args26155.length;
switch (G__26157) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26155.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate(({"omcljs$value": next_props}),({"omcljs$state": next_state}));
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return the raw component class path associated with a component. Contains
 * duplicates for recursive component trees.
 */
om.next.raw_class_path = (function om$next$raw_class_path(c){
var c__$1 = c;
var ret = (function (){var x__7251__auto__ = om.next.react_type(c__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})();
while(true){
var temp__4655__auto__ = om.next.parent(c__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
if(om.next.iquery_QMARK_(p)){
var G__26162 = p;
var G__26163 = cljs.core.cons(om.next.react_type(p),ret);
c__$1 = G__26162;
ret = G__26163;
continue;
} else {
var G__26164 = p;
var G__26165 = ret;
c__$1 = G__26164;
ret = G__26165;
continue;
}
} else {
return ret;
}
break;
}
});
/**
 * Return the component class path associated with a component.
 */
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var raw_cp = om.next.raw_class_path(c);
var cp = cljs.core.seq(raw_cp);
var ret = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cp){
var c__$1 = cljs.core.first(cp);
if(cljs.core.contains_QMARK_(seen,c__$1)){
var G__26166 = cljs.core.next(cp);
var G__26167 = ret;
var G__26168 = seen;
cp = G__26166;
ret = G__26167;
seen = G__26168;
continue;
} else {
var G__26169 = cljs.core.next(cp);
var G__26170 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c__$1);
var G__26171 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c__$1);
cp = G__26169;
ret = G__26170;
seen = G__26171;
continue;
}
} else {
return cljs.core.seq(ret);
}
break;
}
});
/**
 * Returns true if a component's classpath is recursive
 */
om.next.recursive_class_path_QMARK_ = (function om$next$recursive_class_path_QMARK_(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,om.next.raw_class_path(c)));
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_(subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__26173 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__26173)].join('');
} else {
return G__26173;
}
})();
if((om.next.component_QMARK_(x)) && (om.next.mounted_QMARK_(x))){
return om.next.get_query(om.next.react_ref(x,ref));
} else {
return om.next.get_query(subquery_class);
}
});
/**
 * Given a mounted component with assigned props, return the ident for the
 * component.
 */
om.next.get_ident = (function om$next$get_ident(x){
if(om.next.component_QMARK_(x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = om.next.props(x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("get-ident invoked on component with nil props"),cljs.core.str("\n"),cljs.core.str("(not (nil? m))")].join('')));
}

return om.next.ident(x,m);
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t(reconciler);
});
om.next.queue_render_BANG_ = (function om$next$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_(om.next._STAR_raf_STAR_)){
return (om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1(f) : om.next._STAR_raf_STAR_.call(null,f));
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_(reconciler))){
return om.next.queue_render_BANG_((function (){
return om.next.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$1(reconciler);
}));
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_(reconciler))){
var G__26176 = (function (){
return om.next.protocols.send_BANG_(reconciler);
});
var G__26177 = (0);
return setTimeout(G__26176,G__26177);
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args26178 = [];
var len__7492__auto___26181 = arguments.length;
var i__7493__auto___26182 = (0);
while(true){
if((i__7493__auto___26182 < len__7492__auto___26181)){
args26178.push((arguments[i__7493__auto___26182]));

var G__26183 = (i__7493__auto___26182 + (1));
i__7493__auto___26182 = G__26183;
continue;
} else {
}
break;
}

var G__26180 = args26178.length;
switch (G__26180) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26178.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__4657__auto___26185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.next.roots) : cljs.core.deref.call(null,om.next.roots)),target);
if(cljs.core.truth_(temp__4657__auto___26185)){
var old_reconciler_26186 = temp__4657__auto___26185;
(om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_26186,target) : om.next.remove_root_BANG_.call(null,old_reconciler_26186,target));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_(reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_(reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__7080__auto__ = (((c == null))?null:c);
var m__7081__auto__ = (om.next.tx_intercept[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return (m__7081__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto__.cljs$core$IFn$_invoke$arity$2(c,tx) : m__7081__auto__.call(null,c,tx));
} else {
var m__7081__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__7081__auto____$1 == null))){
return (m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7081__auto____$1.cljs$core$IFn$_invoke$arity$2(c,tx) : m__7081__auto____$1.call(null,c,tx));
} else {
throw cljs.core.missing_protocol("ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,cljs.core.cst$kw$shared,cljs.core.cst$kw$parser,cljs.core.cst$kw$logger,cljs.core.cst$kw$pathopt], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__6405__auto__ = c;
if(cljs.core.truth_(and__6405__auto__)){
var and__6405__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__6405__auto____$1){
return cljs.core.not(ref);
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})())?om.next.ident(c,om.next.props(c)):ref);
var env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om.next.to_env(cfg),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reconciler,r,cljs.core.cst$kw$component,c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref__$1], null):null)], 0));
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(function (){var G__26209 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26209) : cljs.core.deref.call(null,G__26209));
})());
var ___$1 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto__)){
var l = temp__4657__auto__;
var G__26210 = l;
var G__26211 = [cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref__$1], 0))),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
return goog.log.info(G__26210,G__26211);
} else {
return null;
}
})();
var old_state = (function (){var G__26212 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26212) : cljs.core.deref.call(null,G__26212));
})();
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends(env,tx,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
var xs = (function (){var G__26213 = cljs.core.PersistentVector.EMPTY;
var G__26213__$1 = ((!((c == null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26213,c):G__26213);
if(!((ref__$1 == null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26213__$1,ref__$1);
} else {
return G__26213__$1;
}
})();
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.into.cljs$core$IFn$_invoke$arity$3(xs,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(v)));

if(cljs.core.empty_QMARK_(snds)){
} else {
var seq__26214_26227 = cljs.core.seq(snds);
var chunk__26215_26228 = null;
var count__26216_26229 = (0);
var i__26217_26230 = (0);
while(true){
if((i__26217_26230 < count__26216_26229)){
var vec__26218_26231 = chunk__26215_26228.cljs$core$IIndexed$_nth$arity$2(null,i__26217_26230);
var remote_26232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26218_26231,(0),null);
var __26233__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26218_26231,(1),null);
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(r,xs,remote_26232);

var G__26234 = seq__26214_26227;
var G__26235 = chunk__26215_26228;
var G__26236 = count__26216_26229;
var G__26237 = (i__26217_26230 + (1));
seq__26214_26227 = G__26234;
chunk__26215_26228 = G__26235;
count__26216_26229 = G__26236;
i__26217_26230 = G__26237;
continue;
} else {
var temp__4657__auto___26238 = cljs.core.seq(seq__26214_26227);
if(temp__4657__auto___26238){
var seq__26214_26239__$1 = temp__4657__auto___26238;
if(cljs.core.chunked_seq_QMARK_(seq__26214_26239__$1)){
var c__7228__auto___26240 = cljs.core.chunk_first(seq__26214_26239__$1);
var G__26241 = cljs.core.chunk_rest(seq__26214_26239__$1);
var G__26242 = c__7228__auto___26240;
var G__26243 = cljs.core.count(c__7228__auto___26240);
var G__26244 = (0);
seq__26214_26227 = G__26241;
chunk__26215_26228 = G__26242;
count__26216_26229 = G__26243;
i__26217_26230 = G__26244;
continue;
} else {
var vec__26221_26245 = cljs.core.first(seq__26214_26239__$1);
var remote_26246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26221_26245,(0),null);
var __26247__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26221_26245,(1),null);
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(r,xs,remote_26246);

var G__26248 = cljs.core.next(seq__26214_26239__$1);
var G__26249 = null;
var G__26250 = (0);
var G__26251 = (0);
seq__26214_26227 = G__26248;
chunk__26215_26228 = G__26249;
count__26216_26229 = G__26250;
i__26217_26230 = G__26251;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_(r,snds);

om.next.schedule_sends_BANG_(r);
}

var temp__4657__auto___26252 = cljs.core.cst$kw$tx_DASH_listen.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto___26252)){
var f_26253 = temp__4657__auto___26252;
var tx_data_26254 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$old_DASH_state,old_state,cljs.core.cst$kw$new_DASH_state,(function (){var G__26224 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26224) : cljs.core.deref.call(null,G__26224));
})()], null)], 0));
var G__26225_26255 = tx_data_26254;
var G__26226_26256 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tx,tx,cljs.core.cst$kw$ret,v,cljs.core.cst$kw$sends,snds], null);
(f_26253.cljs$core$IFn$_invoke$arity$2 ? f_26253.cljs$core$IFn$_invoke$arity$2(G__26225_26255,G__26226_26256) : f_26253.call(null,G__26225_26255,G__26226_26256));
} else {
}

return v;
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__26265 = expr;
if(om.util.mutation_QMARK_(expr)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__26265,cljs.core.assoc,cljs.core.cst$kw$mutator,ident__$1);
} else {
return G__26265;
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__26257_SHARP_){
return annotate(p1__26257_SHARP_,ident);
})),tx);
});
om.next.some_iquery_QMARK_ = (function om$next$some_iquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(om.next.iquery_QMARK_(c__$1)){
return true;
} else {
var G__26266 = om.next.parent(c__$1);
c__$1 = G__26266;
continue;

}
}
break;
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args26267 = [];
var len__7492__auto___26279 = arguments.length;
var i__7493__auto___26280 = (0);
while(true){
if((i__7493__auto___26280 < len__7492__auto___26279)){
args26267.push((arguments[i__7493__auto___26280]));

var G__26281 = (i__7493__auto___26280 + (1));
i__7493__auto___26280 = G__26281;
continue;
} else {
}
break;
}

var G__26269 = args26267.length;
switch (G__26269) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26267.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__6417__auto__ = om.next.component_QMARK_(x);
if(or__6417__auto__){
return or__6417__auto__;
} else {
return (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
}
})())){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_(tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__26270 = tx;
if((function (){var and__6405__auto__ = om.next.component_QMARK_(x);
if(and__6405__auto__){
if(!((x == null))){
if((false) || (x.om$next$Ident$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.next.Ident,x);
}
} else {
return and__6405__auto__;
}
})()){
return om.next.annotate_mutations(G__26270,om.next.get_ident(x));
} else {
return G__26270;
}
})();
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))){
return om.next.transact_STAR_(x,null,null,tx__$1);
} else {
if(!(om.next.iquery_QMARK_(x))){
var l__24714__auto___26283 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.some_iquery_QMARK_(x))){
} else {
var G__26273_26284 = l__24714__auto___26283;
var G__26274_26285 = [cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("transact! should be called on a component"),cljs.core.str("that implements IQuery or has a parent that"),cljs.core.str("implements IQuery")].join(''))].join('');
goog.log.error(G__26273_26284,G__26274_26285);
}

return om.next.transact_STAR_(om.next.get_reconciler(x),null,null,tx__$1);
} else {
var p = om.next.parent(x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler(x__$1);
return om.next.transact_STAR_(r,x__$1,null,om.next.transform_reads(r,tx__$2));
} else {
var vec__26275 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept(p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26275,(0),null);
var tx__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26275,(1),null);
var G__26286 = om.next.parent(p);
var G__26287 = x_SINGLEQUOTE_;
var G__26288 = tx__$3;
p = G__26286;
x__$1 = G__26287;
tx__$2 = G__26288;
continue;
}
break;
}

}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_(r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__26289){
var map__26292 = p__26289;
var map__26292__$1 = ((((!((map__26292 == null)))?((((map__26292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26292):map__26292);
var opts = map__26292__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26292__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26292__$1,cljs.core.cst$kw$mutate);
if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser(opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast(query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});
om.next.get_dispatch_key = (function om$next$get_dispatch_key(prop){
var G__26295 = prop;
if((!(om.util.ident_QMARK_(prop))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(prop),cljs.core.cst$sym$_))){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,om.next.impl.parser.expr__GT_ast).call(null,G__26295);
} else {
return G__26295;
}
});
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_(cp))){
var rendered_data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.set(union_keys)),data_path__$1);
var filter_data_path = (function (){var G__26298 = rendered_data_path;
if(!(cljs.core.empty_QMARK_(rendered_data_path))){
return cljs.core.pop(G__26298);
} else {
return G__26298;
}
})();
var qs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__26296_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_data_path,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__26296_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__6417__auto__ = cljs.core.map_QMARK_(clojure.zip.node(q));
if(or__6417__auto__){
return or__6417__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([cljs.core.peek(data_path__$1)], true),union_keys);
}
})())?(function (){var union_key = cljs.core.peek(data_path__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.zip.node(om.next.query_template(clojure.zip.root(q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template(om.next.focus_query(om.next.replace(om.next.query_template(clojure.zip.root(q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__26299 = cljs.core.pop(cp);
var G__26300 = cljs.core.pop(data_path__$1);
var G__26301 = clojure.zip.node(cljs.core.first(qs_SINGLEQUOTE_));
var G__26302 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cp,qs_SINGLEQUOTE_);
cp = G__26299;
data_path__$1 = G__26300;
new_query__$1 = G__26301;
ret = G__26302;
continue;
} else {
return ret;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = (function (){var G__26310 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26310) : cljs.core.atom.call(null,G__26310));
})();
var class_path__GT_query = (function (){var G__26311 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26311) : cljs.core.atom.call(null,G__26311));
})();
var rootq = om.next.get_query(x);
var root_class = (function (){var G__26312 = x;
if(om.next.component_QMARK_(x)){
return om.next.react_type(G__26312);
} else {
return G__26312;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function om$next$build_index_STAR_(class$,query,path,classpath,union_expr,union_keys){
var l__24714__auto___26493 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_(class$))) || ((om.next.iquery_QMARK_(class$)) && (!(cljs.core.empty_QMARK_(query))))){
} else {
var G__26448_26494 = l__24714__auto___26493;
var G__26449_26495 = [cljs.core.str("Invariant Violation"),cljs.core.str(((("build-index*" == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str("build-index*"),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("`IQuery` implementation must return a non-empty query."),cljs.core.str(" Check the `IQuery` implementation of component `"),cljs.core.str(((om.next.component_QMARK_(class$))?class$.constructor.displayName:class$.prototype.constructor.displayName)),cljs.core.str("`.")].join(''))].join('');
goog.log.error(G__26448_26494,G__26449_26495);
}

var recursive_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([class$], true),classpath);
var classpath__$1 = (function (){var G__26450 = classpath;
if((!((class$ == null))) && (cljs.core.not(recursive_QMARK_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26450,class$);
} else {
return G__26450;
}
})();
var dp__GT_cs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components], null));
if(cljs.core.truth_(class$)){
var root_query_26496 = ((cljs.core.empty_QMARK_(path))?rootq:clojure.zip.root(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_class], null)))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([om.next.query_template(om.next.focus_query(root_query_26496,path),path)], 0));
} else {
}

var recursive_join_QMARK_ = (function (){var and__6405__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__6405__auto__)){
var and__6405__auto____$1 = cljs.core.some(((function (and__6405__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (e){
var and__6405__auto____$1 = om.util.join_QMARK_(e);
if(cljs.core.truth_(and__6405__auto____$1)){
return !(om.util.recursion_QMARK_(om.util.join_value(e)));
} else {
return and__6405__auto____$1;
}
});})(and__6405__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,query);
if(cljs.core.truth_(and__6405__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path),path);
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})();
var recursive_union_QMARK_ = (function (){var and__6405__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__6405__auto__)){
var and__6405__auto____$1 = union_expr;
if(cljs.core.truth_(and__6405__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path),path);
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_((function (){var or__6417__auto__ = cljs.core.not(recursive_QMARK_);
if(or__6417__auto__){
return or__6417__auto__;
} else {
var or__6417__auto____$1 = recursive_join_QMARK_;
if(cljs.core.truth_(or__6417__auto____$1)){
return or__6417__auto____$1;
} else {
return recursive_union_QMARK_;
}
}
})())){
if(cljs.core.vector_QMARK_(query)){
var map__26451 = cljs.core.group_by(om.util.join_QMARK_,query);
var map__26451__$1 = ((((!((map__26451 == null)))?((((map__26451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26451):map__26451);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26451__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26451__$1,true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (map__26451,map__26451__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__26303_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__26303_SHARP_,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.next.get_dispatch_key,props),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([class$], true)))], 0));
});})(map__26451,map__26451__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

var seq__26453 = cljs.core.seq(joins);
var chunk__26454 = null;
var count__26455 = (0);
var i__26456 = (0);
while(true){
if((i__26456 < count__26455)){
var join = chunk__26454.cljs$core$IIndexed$_nth$arity$2(null,i__26456);
var vec__26457_26497 = om.util.join_entry(join);
var prop_26498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26457_26497,(0),null);
var query_SINGLEQUOTE__26499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26457_26497,(1),null);
var prop_dispatch_key_26500 = om.next.get_dispatch_key(prop_26498);
var recursion_QMARK__26501 = om.util.recursion_QMARK_(query_SINGLEQUOTE__26499);
var union_recursion_QMARK__26502 = (function (){var and__6405__auto__ = recursion_QMARK__26501;
if(and__6405__auto__){
return union_expr;
} else {
return and__6405__auto__;
}
})();
var query_SINGLEQUOTE__26503__$1 = ((recursion_QMARK__26501)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__26499);
var path_SINGLEQUOTE__26504 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_26498);
var rendered_path_SINGLEQUOTE__26505 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(union_keys),path_SINGLEQUOTE__26504));
var cs_26506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,rendered_path_SINGLEQUOTE__26505);
var cascade_query_QMARK__26507 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_26506),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__26503__$1)),om.next.react_type(cljs.core.first(cs_26506)))) && (!(cljs.core.map_QMARK_(query_SINGLEQUOTE__26503__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__26508 = ((cascade_query_QMARK__26507)?om.next.get_query(cljs.core.first(cs_26506)):query_SINGLEQUOTE__26503__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__26453,chunk__26454,count__26455,i__26456,vec__26457_26497,prop_26498,query_SINGLEQUOTE__26499,prop_dispatch_key_26500,recursion_QMARK__26501,union_recursion_QMARK__26502,query_SINGLEQUOTE__26503__$1,path_SINGLEQUOTE__26504,rendered_path_SINGLEQUOTE__26505,cs_26506,cascade_query_QMARK__26507,query_SINGLEQUOTE__SINGLEQUOTE__26508,join,map__26451,map__26451__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__26304_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__26304_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_26500,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false)], 0));
});})(seq__26453,chunk__26454,count__26455,i__26456,vec__26457_26497,prop_26498,query_SINGLEQUOTE__26499,prop_dispatch_key_26500,recursion_QMARK__26501,union_recursion_QMARK__26502,query_SINGLEQUOTE__26503__$1,path_SINGLEQUOTE__26504,rendered_path_SINGLEQUOTE__26505,cs_26506,cascade_query_QMARK__26507,query_SINGLEQUOTE__SINGLEQUOTE__26508,join,map__26451,map__26451__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__26507) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE__26503__$1,query_SINGLEQUOTE__SINGLEQUOTE__26508))){
var cp__GT_q_SINGLEQUOTE__26509 = om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1,path_SINGLEQUOTE__26504,query_SINGLEQUOTE__SINGLEQUOTE__26508,union_keys);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__26509);
} else {
}

var class_SINGLEQUOTE__26510 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__SINGLEQUOTE__26508));
if((recursion_QMARK__26501) && ((class_SINGLEQUOTE__26510 == null))){
} else {
om$next$build_index_STAR_(class_SINGLEQUOTE__26510,query_SINGLEQUOTE__SINGLEQUOTE__26508,path_SINGLEQUOTE__26504,classpath__$1,((recursion_QMARK__26501)?union_expr:null),union_keys);
}

var G__26511 = seq__26453;
var G__26512 = chunk__26454;
var G__26513 = count__26455;
var G__26514 = (i__26456 + (1));
seq__26453 = G__26511;
chunk__26454 = G__26512;
count__26455 = G__26513;
i__26456 = G__26514;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__26453);
if(temp__4657__auto__){
var seq__26453__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26453__$1)){
var c__7228__auto__ = cljs.core.chunk_first(seq__26453__$1);
var G__26515 = cljs.core.chunk_rest(seq__26453__$1);
var G__26516 = c__7228__auto__;
var G__26517 = cljs.core.count(c__7228__auto__);
var G__26518 = (0);
seq__26453 = G__26515;
chunk__26454 = G__26516;
count__26455 = G__26517;
i__26456 = G__26518;
continue;
} else {
var join = cljs.core.first(seq__26453__$1);
var vec__26460_26519 = om.util.join_entry(join);
var prop_26520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26460_26519,(0),null);
var query_SINGLEQUOTE__26521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26460_26519,(1),null);
var prop_dispatch_key_26522 = om.next.get_dispatch_key(prop_26520);
var recursion_QMARK__26523 = om.util.recursion_QMARK_(query_SINGLEQUOTE__26521);
var union_recursion_QMARK__26524 = (function (){var and__6405__auto__ = recursion_QMARK__26523;
if(and__6405__auto__){
return union_expr;
} else {
return and__6405__auto__;
}
})();
var query_SINGLEQUOTE__26525__$1 = ((recursion_QMARK__26523)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__26521);
var path_SINGLEQUOTE__26526 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_26520);
var rendered_path_SINGLEQUOTE__26527 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(union_keys),path_SINGLEQUOTE__26526));
var cs_26528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,rendered_path_SINGLEQUOTE__26527);
var cascade_query_QMARK__26529 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_26528),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__26525__$1)),om.next.react_type(cljs.core.first(cs_26528)))) && (!(cljs.core.map_QMARK_(query_SINGLEQUOTE__26525__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__26530 = ((cascade_query_QMARK__26529)?om.next.get_query(cljs.core.first(cs_26528)):query_SINGLEQUOTE__26525__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__26453,chunk__26454,count__26455,i__26456,vec__26460_26519,prop_26520,query_SINGLEQUOTE__26521,prop_dispatch_key_26522,recursion_QMARK__26523,union_recursion_QMARK__26524,query_SINGLEQUOTE__26525__$1,path_SINGLEQUOTE__26526,rendered_path_SINGLEQUOTE__26527,cs_26528,cascade_query_QMARK__26529,query_SINGLEQUOTE__SINGLEQUOTE__26530,join,seq__26453__$1,temp__4657__auto__,map__26451,map__26451__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__26304_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__26304_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_26522,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false)], 0));
});})(seq__26453,chunk__26454,count__26455,i__26456,vec__26460_26519,prop_26520,query_SINGLEQUOTE__26521,prop_dispatch_key_26522,recursion_QMARK__26523,union_recursion_QMARK__26524,query_SINGLEQUOTE__26525__$1,path_SINGLEQUOTE__26526,rendered_path_SINGLEQUOTE__26527,cs_26528,cascade_query_QMARK__26529,query_SINGLEQUOTE__SINGLEQUOTE__26530,join,seq__26453__$1,temp__4657__auto__,map__26451,map__26451__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__26529) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE__26525__$1,query_SINGLEQUOTE__SINGLEQUOTE__26530))){
var cp__GT_q_SINGLEQUOTE__26531 = om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1,path_SINGLEQUOTE__26526,query_SINGLEQUOTE__SINGLEQUOTE__26530,union_keys);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__26531);
} else {
}

var class_SINGLEQUOTE__26532 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__SINGLEQUOTE__26530));
if((recursion_QMARK__26523) && ((class_SINGLEQUOTE__26532 == null))){
} else {
om$next$build_index_STAR_(class_SINGLEQUOTE__26532,query_SINGLEQUOTE__SINGLEQUOTE__26530,path_SINGLEQUOTE__26526,classpath__$1,((recursion_QMARK__26523)?union_expr:null),union_keys);
}

var G__26533 = cljs.core.next(seq__26453__$1);
var G__26534 = null;
var G__26535 = (0);
var G__26536 = (0);
seq__26453 = G__26533;
chunk__26454 = G__26534;
count__26455 = G__26535;
i__26456 = G__26536;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(query)){
var seq__26463 = cljs.core.seq(query);
var chunk__26464 = null;
var count__26465 = (0);
var i__26466 = (0);
while(true){
if((i__26466 < count__26465)){
var vec__26467 = chunk__26464.cljs$core$IIndexed$_nth$arity$2(null,i__26466);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26467,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26467,(1),null);
var path_SINGLEQUOTE__26537 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop);
var class_SINGLEQUOTE__26538 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
var cs_26539 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__26463,chunk__26464,count__26465,i__26466,path_SINGLEQUOTE__26537,class_SINGLEQUOTE__26538,vec__26467,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__26305_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE__26538,om.next.react_type(p1__26305_SHARP_));
});})(seq__26463,chunk__26464,count__26465,i__26466,path_SINGLEQUOTE__26537,class_SINGLEQUOTE__26538,vec__26467,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,path));
var cascade_query_QMARK__26540 = (function (){var and__6405__auto__ = class_SINGLEQUOTE__26538;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_26539),(1));
} else {
return and__6405__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__26541 = (cljs.core.truth_(cascade_query_QMARK__26540)?om.next.get_query(cljs.core.first(cs_26539)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__6405__auto__ = cascade_query_QMARK__26540;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__26541);
} else {
return and__6405__auto__;
}
})())){
var qs_26542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1);
var q_26543 = cljs.core.first(qs_26542);
var qnode_26544 = clojure.zip.node((function (){var G__26470 = q_26543;
if((class$ == null)){
return om.next.query_template(G__26470,path);
} else {
return G__26470;
}
})());
var new_query_26545 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qnode_26544,prop,query_SINGLEQUOTE__SINGLEQUOTE__26541);
var q_SINGLEQUOTE__26546 = (function (){var G__26471 = clojure.zip.replace(om.next.query_template(clojure.zip.root(q_26543),path),new_query_26545);
if((class$ == null)){
return om.next.query_template(om.next.focus_query(clojure.zip.root(G__26471),cljs.core.pop(path)),cljs.core.pop(path));
} else {
return G__26471;
}
})();
var qs_SINGLEQUOTE__26547 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__26546], true),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([q_26543], true)),qs_26542);
var cp__GT_q_SINGLEQUOTE__26548 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__26547], true, false),om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),cljs.core.pop(classpath__$1),path,clojure.zip.node(q_SINGLEQUOTE__26546),union_keys)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__26548);
} else {
}

om$next$build_index_STAR_(class_SINGLEQUOTE__26538,query_SINGLEQUOTE__SINGLEQUOTE__26541,path_SINGLEQUOTE__26537,classpath__$1,query,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(union_keys,prop));

var G__26549 = seq__26463;
var G__26550 = chunk__26464;
var G__26551 = count__26465;
var G__26552 = (i__26466 + (1));
seq__26463 = G__26549;
chunk__26464 = G__26550;
count__26465 = G__26551;
i__26466 = G__26552;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__26463);
if(temp__4657__auto__){
var seq__26463__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26463__$1)){
var c__7228__auto__ = cljs.core.chunk_first(seq__26463__$1);
var G__26553 = cljs.core.chunk_rest(seq__26463__$1);
var G__26554 = c__7228__auto__;
var G__26555 = cljs.core.count(c__7228__auto__);
var G__26556 = (0);
seq__26463 = G__26553;
chunk__26464 = G__26554;
count__26465 = G__26555;
i__26466 = G__26556;
continue;
} else {
var vec__26472 = cljs.core.first(seq__26463__$1);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26472,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26472,(1),null);
var path_SINGLEQUOTE__26557 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop);
var class_SINGLEQUOTE__26558 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
var cs_26559 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__26463,chunk__26464,count__26465,i__26466,path_SINGLEQUOTE__26557,class_SINGLEQUOTE__26558,vec__26472,prop,query_SINGLEQUOTE_,seq__26463__$1,temp__4657__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__26305_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE__26558,om.next.react_type(p1__26305_SHARP_));
});})(seq__26463,chunk__26464,count__26465,i__26466,path_SINGLEQUOTE__26557,class_SINGLEQUOTE__26558,vec__26472,prop,query_SINGLEQUOTE_,seq__26463__$1,temp__4657__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,path));
var cascade_query_QMARK__26560 = (function (){var and__6405__auto__ = class_SINGLEQUOTE__26558;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_26559),(1));
} else {
return and__6405__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__26561 = (cljs.core.truth_(cascade_query_QMARK__26560)?om.next.get_query(cljs.core.first(cs_26559)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__6405__auto__ = cascade_query_QMARK__26560;
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__26561);
} else {
return and__6405__auto__;
}
})())){
var qs_26562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1);
var q_26563 = cljs.core.first(qs_26562);
var qnode_26564 = clojure.zip.node((function (){var G__26475 = q_26563;
if((class$ == null)){
return om.next.query_template(G__26475,path);
} else {
return G__26475;
}
})());
var new_query_26565 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qnode_26564,prop,query_SINGLEQUOTE__SINGLEQUOTE__26561);
var q_SINGLEQUOTE__26566 = (function (){var G__26476 = clojure.zip.replace(om.next.query_template(clojure.zip.root(q_26563),path),new_query_26565);
if((class$ == null)){
return om.next.query_template(om.next.focus_query(clojure.zip.root(G__26476),cljs.core.pop(path)),cljs.core.pop(path));
} else {
return G__26476;
}
})();
var qs_SINGLEQUOTE__26567 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__26566], true),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([q_26563], true)),qs_26562);
var cp__GT_q_SINGLEQUOTE__26568 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__26567], true, false),om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),cljs.core.pop(classpath__$1),path,clojure.zip.node(q_SINGLEQUOTE__26566),union_keys)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__26568);
} else {
}

om$next$build_index_STAR_(class_SINGLEQUOTE__26558,query_SINGLEQUOTE__SINGLEQUOTE__26561,path_SINGLEQUOTE__26557,classpath__$1,query,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(union_keys,prop));

var G__26569 = cljs.core.next(seq__26463__$1);
var G__26570 = null;
var G__26571 = (0);
var G__26572 = (0);
seq__26463 = G__26569;
chunk__26464 = G__26570;
count__26465 = G__26571;
i__26466 = G__26572;
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
}
} else {
return null;
}
});})(prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
;
build_index_STAR_(root_class,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prop_DASH__GT_classes,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prop__GT_classes) : cljs.core.deref.call(null,prop__GT_classes)),cljs.core.cst$kw$class_DASH_path_DASH__GT_query,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query))], null));
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$index_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,om.next.react_type(c)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(c));
var indexes__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$index_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components,data_path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?(function (){var ident = om.next.ident(c,om.next.props(c));
var l__24714__auto___26573 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_(ident)){
} else {
var G__26478_26574 = l__24714__auto___26573;
var G__26479_26575 = [cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join('');
goog.log.error(G__26478_26574,G__26479_26575);
}

var l__24714__auto___26576 = om.next._STAR_logger_STAR_;
if(cljs.core.some_QMARK_(cljs.core.second(ident))){
} else {
var G__26480_26577 = l__24714__auto___26576;
var G__26481_26578 = [cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("component "),cljs.core.str(c.constructor.displayName),cljs.core.str("'s ident ("),cljs.core.str(ident),cljs.core.str(") has a `nil` second element."),cljs.core.str(" This warning can be safely ignored if that is intended.")].join(''))].join('');
goog.log.error(G__26480_26577,G__26481_26578);
}

return ident;
})():null);
if(!((ident == null))){
var G__26482 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__26482,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__26482;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$drop_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,om.next.react_type(c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(c));
var indexes__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$drop_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components,data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(!((ident == null))){
var G__26484 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__26484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.disj,c);
} else {
return G__26484;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
if(om.next.component_QMARK_(k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__4655__auto__ = cljs.core.cst$kw$ref_DASH__GT_components.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cs = temp__4655__auto__;
return cs;
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (temp__4655__auto__,indexes__$1,___$1){
return (function (p1__26306_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,p1__26306_SHARP_], null));
});})(temp__4655__auto__,indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prop_DASH__GT_classes,k], null)));
}
}
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7039__auto__,k__7040__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7039__auto____$1,k__7040__auto__,null);
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7041__auto__,k26308,else__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
var G__26485 = (((k26308 instanceof cljs.core.Keyword))?k26308.fqn:null);
switch (G__26485) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26308,else__7042__auto__);

}
});


om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7053__auto__,writer__7054__auto__,opts__7055__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
var pr_pair__7056__auto__ = ((function (this__7053__auto____$1){
return (function (keyval__7057__auto__){
return cljs.core.pr_sequential_writer(writer__7054__auto__,cljs.core.pr_writer,""," ","",opts__7055__auto__,keyval__7057__auto__);
});})(this__7053__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7054__auto__,pr_pair__7056__auto__,"#om.next.Indexer{",", ","}",opts__7055__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$extfs,self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IIterable$ = true;


om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26307){
var self__ = this;
var G__26307__$1 = this;
return (new cljs.core.RecordIter((0),G__26307__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indexes,cljs.core.cst$kw$extfs], null),cljs.core._iterator(self__.__extmap)));
});


om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7037__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
return self__.__meta;
});


om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7033__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
var h__6852__auto__ = self__.__hash;
if(!((h__6852__auto__ == null))){
return h__6852__auto__;
} else {
var h__6852__auto____$1 = cljs.core.hash_imap(this__7034__auto____$1);
self__.__hash = h__6852__auto____$1;

return h__6852__auto____$1;
}
});


om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7035__auto__,other__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6405__auto__ = other__7036__auto__;
if(cljs.core.truth_(and__6405__auto__)){
var and__6405__auto____$1 = (this__7035__auto____$1.constructor === other__7036__auto__.constructor);
if(and__6405__auto____$1){
return cljs.core.equiv_map(this__7035__auto____$1,other__7036__auto__);
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7048__auto__,k__7049__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$extfs,null,cljs.core.cst$kw$indexes,null], null), null),k__7049__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7048__auto____$1),self__.__meta),k__7049__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7049__auto__)),null));
}
});


om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7046__auto__,k__7047__auto__,G__26307){
var self__ = this;
var this__7046__auto____$1 = this;
var pred__26486 = cljs.core.keyword_identical_QMARK_;
var expr__26487 = k__7047__auto__;
if(cljs.core.truth_((function (){var G__26489 = cljs.core.cst$kw$indexes;
var G__26490 = expr__26487;
return (pred__26486.cljs$core$IFn$_invoke$arity$2 ? pred__26486.cljs$core$IFn$_invoke$arity$2(G__26489,G__26490) : pred__26486.call(null,G__26489,G__26490));
})())){
return (new om.next.Indexer(G__26307,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26491 = cljs.core.cst$kw$extfs;
var G__26492 = expr__26487;
return (pred__26486.cljs$core$IFn$_invoke$arity$2 ? pred__26486.cljs$core$IFn$_invoke$arity$2(G__26491,G__26492) : pred__26486.call(null,G__26491,G__26492));
})())){
return (new om.next.Indexer(self__.indexes,G__26307,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7047__auto__,G__26307),null));
}
}
});


om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7051__auto__){
var self__ = this;
var this__7051__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$extfs,self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7038__auto__,G__26307){
var self__ = this;
var this__7038__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__26307,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7044__auto__,entry__7045__auto__){
var self__ = this;
var this__7044__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7045__auto__)){
return cljs.core._assoc(this__7044__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7045__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7045__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7044__auto____$1,entry__7045__auto__);
}
});


om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$indexes,cljs.core.cst$sym$extfs], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__7073__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__7073__auto__,writer__7074__auto__){
return cljs.core._write(writer__7074__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__26309){
return (new om.next.Indexer(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(G__26309),cljs.core.cst$kw$extfs.cljs$core$IFn$_invoke$arity$1(G__26309),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26309,cljs.core.cst$kw$indexes,cljs.core.array_seq([cljs.core.cst$kw$extfs], 0)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args26580 = [];
var len__7492__auto___26584 = arguments.length;
var i__7493__auto___26585 = (0);
while(true){
if((i__7493__auto___26585 < len__7492__auto___26584)){
args26580.push((arguments[i__7493__auto___26585]));

var G__26586 = (i__7493__auto___26585 + (1));
i__7493__auto___26585 = G__26586;
continue;
} else {
}
break;
}

var G__26582 = args26580.length;
switch (G__26582) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26580.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index_DASH_component,(function (indexes,component){
return indexes;
}),cljs.core.cst$kw$drop_DASH_component,(function (indexes,component){
return indexes;
}),cljs.core.cst$kw$ref_DASH__GT_components,(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer((function (){var G__26583 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$data_DASH_path_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26583) : cljs.core.atom.call(null,G__26583));
})(),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;

/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return om.next.protocols.key__GT_components(indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(om.next.protocols.key__GT_components(indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
var cp = ((om.next.component_QMARK_(y))?om.next.class_path(y):y);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.zip.root),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args26589 = [];
var len__7492__auto___26595 = arguments.length;
var i__7493__auto___26596 = (0);
while(true){
if((i__7493__auto___26596 < len__7492__auto___26595)){
args26589.push((arguments[i__7493__auto___26596]));

var G__26597 = (i__7493__auto___26596 + (1));
i__7493__auto___26596 = G__26597;
continue;
} else {
}
break;
}

var G__26591 = args26589.length;
switch (G__26591) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26589.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_(component)){
if((om.next.path(component) == null)){
return om.next.replace(cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26592 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26592) : cljs.core.deref.call(null,G__26592));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,om.next.class_path(component)], null))),om.next.get_query(component));
} else {
return om.next.full_query.cljs$core$IFn$_invoke$arity$2(component,om.next.get_query(component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_(component)){
var xf = (function (){var G__26593 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_);
if(om.next.recursive_class_path_QMARK_(component)){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),G__26593);
} else {
return G__26593;
}
})();
var path_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf,om.next.path(component));
var cp = om.next.class_path(component);
var qs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26594 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26594) : cljs.core.deref.call(null,G__26594));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null));
if(!(cljs.core.empty_QMARK_(qs))){
var q = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__26588_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path_SINGLEQUOTE_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(om.next.get_dispatch_key,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__26588_SHARP_),path_SINGLEQUOTE_)));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace(q,query);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist at the intersection of component path "),cljs.core.str(cp),cljs.core.str(" and data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;

om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
var ident = ((((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))?om.next.ident(class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(om$next$normalize_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident)),data,refs,union_seen),cljs.core.assoc,cljs.core.cst$kw$om_SLASH_tag,cljs.core.first(ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_(data)){
return data;
} else {
var q = cljs.core.seq(query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first(q);
if(cljs.core.truth_(om.util.join_QMARK_(expr))){
var vec__26623 = om.util.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26623,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26623,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_(sel);
var union_entry = ((om.util.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_(v))){
var G__26638 = cljs.core.next(q);
var G__26639 = ret;
q = G__26638;
ret = G__26639;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = om$next$normalize_STAR_(sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var i = om.next.ident(class$,v);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.array_seq([x], 0));

var G__26640 = cljs.core.next(q);
var G__26641 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__26640;
ret = G__26641;
continue;
} else {
var G__26642 = cljs.core.next(q);
var G__26643 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__26642;
ret = G__26643;
continue;
}
} else {
if(cljs.core.vector_QMARK_(v)){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__26599_SHARP_){
return om$next$normalize_STAR_(sel__$1,p1__26599_SHARP_,refs,union_entry);
});})(q,ret,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__26601_SHARP_){
return om.next.ident(class$,p1__26601_SHARP_);
});})(q,ret,xs,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__26630){
var vec__26631 = p__26630;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26631,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26631,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__26634){
var vec__26635 = p__26634;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26635,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26635,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__26623,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__26644 = cljs.core.next(q);
var G__26645 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__26644;
ret = G__26645;
continue;
} else {
var G__26646 = cljs.core.next(q);
var G__26647 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__26646;
ret = G__26647;
continue;
}
} else {
if((v == null)){
var G__26648 = cljs.core.next(q);
var G__26649 = ret;
q = G__26648;
ret = G__26649;
continue;
} else {
var G__26650 = cljs.core.next(q);
var G__26651 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__26650;
ret = G__26651;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((v == null)){
var G__26652 = cljs.core.next(q);
var G__26653 = ret;
q = G__26652;
ret = G__26653;
continue;
} else {
var G__26654 = cljs.core.next(q);
var G__26655 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__26654;
ret = G__26655;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args26656 = [];
var len__7492__auto___26660 = arguments.length;
var i__7493__auto___26661 = (0);
while(true){
if((i__7493__auto___26661 < len__7492__auto___26660)){
args26656.push((arguments[i__7493__auto___26661]));

var G__26662 = (i__7493__auto___26661 + (1));
i__7493__auto___26661 = G__26662;
continue;
} else {
}
break;
}

var G__26658 = args26656.length;
switch (G__26658) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26656.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = (function (){var G__26659 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26659) : cljs.core.atom.call(null,G__26659));
})();
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:om.next.get_query(x));
var ret = om.next.normalize_STAR_(x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ret,refs_SINGLEQUOTE_], 0)),cljs.core.cst$kw$om$next_SLASH_tables,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta(ret,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs)));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;

om.next.sift_idents = (function om$next$sift_idents(res){
var map__26667 = cljs.core.group_by((function (p1__26664_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__26664_SHARP_));
}),res);
var map__26667__$1 = ((((!((map__26667 == null)))?((((map__26667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26667):map__26667);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26667__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26667__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_(om.next.focus_query(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node(pos);
var node_SINGLEQUOTE_ = (function (){var G__26670 = node;
if(typeof node === 'number'){
return (G__26670 - (1));
} else {
return G__26670;
}
})();
return om.next.replace(pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26675){
var vec__26676 = p__26675;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26676,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26676,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth(q,recursion_key)], null);
}),union_expr));
});
om.next.mappable_ident_QMARK_ = (function om$next$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_(ident)) && (cljs.core.contains_QMARK_(refs,cljs.core.first(ident)));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__6405__auto__ = union_expr;
if(cljs.core.truth_(and__6405__auto__)){
return recurse_key;
} else {
return and__6405__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(om.next.mappable_ident_QMARK_(refs,data__$1))){
var G__26733 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(data__$1) : map_ident.call(null,data__$1)));
data__$1 = G__26733;
continue;
} else {
return data__$1;
}
break;
}
})();
if(cljs.core.vector_QMARK_(data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if(cljs.core.not(om.next.mappable_ident_QMARK_(refs,ident))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null))){
return ident;
} else {
var map__26711 = cljs.core.group_by(om.util.join_QMARK_,query);
var map__26711__$1 = ((((!((map__26711 == null)))?((((map__26711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26711):map__26711);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26711__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26711__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__26711,map__26711__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__26679_SHARP_){
var G__26713 = p1__26679_SHARP_;
if(cljs.core.seq_QMARK_(p1__26679_SHARP_)){
return cljs.core.first(G__26713);
} else {
return G__26713;
}
});})(map__26711,map__26711__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var vec__26714 = om.util.join_entry(join);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26714,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26714,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident,key);
var G__26734 = cljs.core.next(joins__$1);
var G__26735 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,om$next$denormalize_STAR_(sel,v,refs,map_ident,idents_seen,union_expr,recurse_key));
joins__$1 = G__26734;
ret = G__26735;
continue;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(ident,props__$1),ret], 0));
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(ident) : map_ident.call(null,ident)));
var query__$1 = (function (){var G__26717 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth(G__26717,recurse_key);
} else {
return G__26717;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__26718 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth(G__26718,recurse_key);
} else {
return G__26718;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__26719 = query__$1;
if(cljs.core.map_QMARK_(query__$1)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__26719,cljs.core.first(ident));
} else {
return G__26719;
}
})();
return om$next$denormalize_STAR_(query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__6405__auto__ = cljs.core.map_QMARK_(query);
if(and__6405__auto__){
return union_recur_QMARK_;
} else {
return and__6405__auto__;
}
})())){
return om$next$denormalize_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(recur_ident)),data__$1,refs,map_ident,idents_seen,union_expr,recurse_key);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data__$1;
} else {
var map__26720 = cljs.core.group_by(((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__26680_SHARP_){
var or__6417__auto__ = om.util.join_QMARK_(p1__26680_SHARP_);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return (om.util.ident_QMARK_(p1__26680_SHARP_)) || ((cljs.core.seq_QMARK_(p1__26680_SHARP_)) && (om.util.ident_QMARK_(cljs.core.first(p1__26680_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__26720__$1 = ((((!((map__26720 == null)))?((((map__26720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26720):map__26720);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26720__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26720__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__26720,map__26720__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__26681_SHARP_){
var G__26722 = p1__26681_SHARP_;
if(cljs.core.seq_QMARK_(p1__26681_SHARP_)){
return cljs.core.first(G__26722);
} else {
return G__26722;
}
});})(map__26720,map__26720__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__26726 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__26726);
} else {
return G__26726;
}
})();
var join__$2 = (function (){var G__26727 = join__$1;
if(om.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__26727],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)]);
} else {
return G__26727;
}
})();
var vec__26723 = om.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26723,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26723,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_(sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_(key))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(key)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(key)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(key) : map_ident.call(null,key)))):cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key));
var key__$1 = (function (){var G__26728 = key;
if(om.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__26728);
} else {
return G__26728;
}
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_(refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1)));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_(refs,next))){
var G__26736 = next;
v__$1 = G__26736;
continue;
} else {
return (map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1));
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:cljs.core.cst$kw$none);
var union_entry = ((om.util.union_QMARK_(join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth(query,key__$1)):(cljs.core.truth_((function (){var and__6405__auto__ = om.next.mappable_ident_QMARK_(refs,v__$1);
if(cljs.core.truth_(and__6405__auto__)){
return om.util.union_QMARK_(join__$2);
} else {
return and__6405__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(v__$1)):(((om.util.ident_QMARK_(key__$1)) && (om.util.union_QMARK_(join__$2)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$none,limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__6405__auto__ = om.next.mappable_ident_QMARK_(refs,v__$1);
if(cljs.core.truth_(and__6405__auto__)){
return recurse_QMARK_;
} else {
return and__6405__auto__;
}
})())?cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit)){
var G__26737 = cljs.core.next(joins__$1);
var G__26738 = ret;
joins__$1 = G__26737;
ret = G__26738;
continue;
} else {
if(graph_loop_QMARK_){
var G__26739 = cljs.core.next(joins__$1);
var G__26740 = ret;
joins__$1 = G__26739;
ret = G__26740;
continue;
} else {
if((v__$1 == null)){
var G__26741 = cljs.core.next(joins__$1);
var G__26742 = ret;
joins__$1 = G__26741;
ret = G__26742;
continue;
} else {
var G__26743 = cljs.core.next(joins__$1);
var G__26744 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key__$1,om$next$denormalize_STAR_(sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__26743;
ret = G__26744;
continue;

}
}
}
} else {
var temp__4655__auto__ = cljs.core.some(((function (joins__$1,ret,map__26720,map__26720__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__26729){
var vec__26730 = p__26729;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26730,(0),null);
var identset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26730,(1),null);
if(cljs.core.contains_QMARK_(identset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,k], null));
} else {
return null;
}
});})(joins__$1,ret,map__26720,map__26720__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(idents_seen,cljs.core.cst$kw$last_DASH_ident));
if(cljs.core.truth_(temp__4655__auto__)){
var looped_key = temp__4655__auto__;
return looped_key;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(data__$1,props__$1),ret], 0));
}
}
break;
}
}

}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args26745 = [];
var len__7492__auto___26748 = arguments.length;
var i__7493__auto___26749 = (0);
while(true){
if((i__7493__auto___26749 < len__7492__auto___26748)){
args26745.push((arguments[i__7493__auto___26749]));

var G__26750 = (i__7493__auto___26749 + (1));
i__7493__auto___26749 = G__26750;
continue;
} else {
}
break;
}

var G__26747 = args26745.length;
switch (G__26747) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26745.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_(query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_(query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;

om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__26775){
var vec__26779 = p__26775;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26779,(0),null);
var orig_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26779,(1),null);
var to_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (to_move,vec__26779,k,orig_paths){
return (function (p1__26752_SHARP_,p2__26753_SHARP_){
return cljs.core.assoc_in(p1__26752_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p2__26753_SHARP_,k),to_move);
});})(to_move,vec__26779,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_(join))){
if(cljs.core.truth_(query_root_QMARK_(join))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
var joinvalue = om.util.join_value(join);
if(cljs.core.vector_QMARK_(joinvalue)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (joinvalue){
return (function (p1__26782_SHARP_){
return om$next$move_roots(p1__26782_SHARP_,result_roots,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,om.util.join_key(join)));
});})(joinvalue))
,cljs.core.array_seq([joinvalue], 0));
} else {
return result_roots;
}
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$elements_DASH_seen.cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((cljs.core.truth_((function (){var and__6405__auto__ = om.util.join_QMARK_(expr);
if(cljs.core.truth_(and__6405__auto__)){
return (!(om.util.union_QMARK_(expr))) && (!(cljs.core.list_QMARK_(expr)));
} else {
return and__6405__auto__;
}
})())?(function (){var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var q = (function (){var or__6417__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query_DASH_by_DASH_join.cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_(q))?q:((om.util.recursion_QMARK_(jv))?jv:om$next$merge_joins(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(q,jv)))
));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_by_DASH_join], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_mergeable], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements_DASH_seen], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_by_DASH_join,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$elements_DASH_seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$not_DASH_mergeable,cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,init,query);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$not_DASH_mergeable.cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (init,res){
return (function (p__26794){
var vec__26795 = p__26794;
var jkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26795,(0),null);
var jsel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26795,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,cljs.core.cst$kw$query_DASH_by_DASH_join.cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots(expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_(roots)){
return retain(expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__26819){
var vec__26823 = p__26819;
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26823,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26823,(1),null);
if(cljs.core.empty_QMARK_(path)){
return rewrites;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key(expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(reroot,cljs.core.array_seq([query], 0));
var query__$1 = om.next.merge_joins(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,query__$1,cljs.core.cst$kw$rewrite,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__26843 = config;
var map__26843__$1 = ((((!((map__26843 == null)))?((((map__26843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26843):map__26843);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26843__$1,cljs.core.cst$kw$merge_DASH_ident);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26843__$1,cljs.core.cst$kw$indexer);
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__26843,map__26843__$1,merge_ident,indexer){
return (function (p1__26826_SHARP_){
var and__6405__auto__ = om.util.join_QMARK_(p1__26826_SHARP_);
if(cljs.core.truth_(and__6405__auto__)){
return om.util.ident_QMARK_(om.util.join_key(p1__26826_SHARP_));
} else {
return and__6405__auto__;
}
});})(map__26843,map__26843__$1,merge_ident,indexer))
,query));
var step = ((function (map__26843,map__26843__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__26852){
var vec__26856 = p__26852;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26856,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26856,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__6417__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident_joins,ident);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return om.next.ref__GT_any(indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(c_or_q,props);
var refs__$1 = cljs.core.meta(props_SINGLEQUOTE_);
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,(merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_)),refs__$1);
} else {
return (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props));
}
});})(map__26843,map__26843__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__26863 = om.next.sift_idents(res);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26863,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26863,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){var or__6417__auto__ = query;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__26866 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26866) : cljs.core.deref.call(null,G__26866));
})());
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents(state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res)),cljs.core.cst$kw$next,om.next.merge_novelty_BANG_(reconciler,state,res,query),cljs.core.cst$kw$tempids,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids,cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args26867 = [];
var len__7492__auto___26883 = arguments.length;
var i__7493__auto___26884 = (0);
while(true){
if((i__7493__auto___26884 < len__7492__auto___26883)){
args26867.push((arguments[i__7493__auto___26884]));

var G__26885 = (i__7493__auto___26884 + (1));
i__7493__auto___26884 = G__26885;
continue;
} else {
}
break;
}

var G__26869 = args26867.length;
switch (G__26869) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26867.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,delta,query,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,delta,query,remote){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = cljs.core.cst$kw$merge.cljs$core$IFn$_invoke$arity$1(config);
var map__26870 = (function (){var G__26871 = reconciler;
var G__26872 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var G__26873 = delta;
var G__26874 = query;
return (merge_STAR_.cljs$core$IFn$_invoke$arity$4 ? merge_STAR_.cljs$core$IFn$_invoke$arity$4(G__26871,G__26872,G__26873,G__26874) : merge_STAR_.call(null,G__26871,G__26872,G__26873,G__26874));
})();
var map__26870__$1 = ((((!((map__26870 == null)))?((((map__26870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26870):map__26870);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26870__$1,cljs.core.cst$kw$keys);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26870__$1,cljs.core.cst$kw$next);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26870__$1,cljs.core.cst$kw$tempids);
if((remote == null)){
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,keys);
} else {
}

var G__26876 = state;
var G__26877 = (function (){var temp__4655__auto__ = cljs.core.cst$kw$migrate.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__4655__auto__)){
var migrate = temp__4655__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null)),(function (){var G__26878 = next;
var G__26879 = (function (){var or__6417__auto__ = query;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return om.next.get_query(cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__26882 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26882) : cljs.core.deref.call(null,G__26882));
})()));
}
})();
var G__26880 = tempids;
var G__26881 = cljs.core.cst$kw$id_DASH_key.cljs$core$IFn$_invoke$arity$1(config);
return (migrate.cljs$core$IFn$_invoke$arity$4 ? migrate.cljs$core$IFn$_invoke$arity$4(G__26878,G__26879,G__26880,G__26881) : migrate.call(null,G__26878,G__26879,G__26880,G__26881));
})()], 0));
} else {
return next;
}
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26876,G__26877) : cljs.core.reset_BANG_.call(null,G__26876,G__26877));
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7039__auto__,k__7040__auto__){
var self__ = this;
var this__7039__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7039__auto____$1,k__7040__auto__,null);
});


om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7041__auto__,k26892,else__7042__auto__){
var self__ = this;
var this__7041__auto____$1 = this;
var G__26894 = (((k26892 instanceof cljs.core.Keyword))?k26892.fqn:null);
switch (G__26894) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26892,else__7042__auto__);

}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
var this$__$1 = this;
return om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,ks,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$3 = (function (_,ks,remote){
var self__ = this;
var ___$1 = this;
if(!((remote == null))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote_DASH_queue,remote], null),cljs.core.into,cljs.core.array_seq([ks], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queue], null),cljs.core.into,cljs.core.array_seq([ks], 0));
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued_DASH_sends], null),cljs.core.cst$kw$merge_DASH_sends.cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.array_seq([sends], 0));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = cljs.core.cst$kw$queued_DASH_sends.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.empty_QMARK_(sends)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$queued_DASH_sends,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$sends_DASH_queued,false);
});})(sends,this$__$1))
);

return cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,null);
});
var om$next$send_cb__2 = (function (resp,query){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,query);
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.keys(resp),remote);
}

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,resp,query,remote);

return om.next.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(sends,this$__$1))
);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.next.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$2 = (function (this$,remote){
var self__ = this;
var this$__$1 = this;
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state));
var q = ((!((remote == null)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote_DASH_queue,remote], null)):cljs.core.cst$kw$queue.cljs$core$IFn$_invoke$arity$1(st));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);

if(!((remote == null))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote_DASH_queue,remote], null),cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queue,cljs.core.PersistentVector.EMPTY);
}

if(cljs.core.empty_QMARK_(q)){
return cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
var cs = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (st,q,this$__$1){
return (function (p1__26888_SHARP_){
return om.next.protocols.key__GT_components(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),p1__26888_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__26889_SHARP_,p2__26890_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__26889_SHARP_,p2__26890_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__26895 = self__.config;
var map__26895__$1 = ((((!((map__26895 == null)))?((((map__26895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26895):map__26895);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26895__$1,cljs.core.cst$kw$ui_DASH__GT_props);
var env = om.next.to_env(self__.config);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
var seq__26897 = cljs.core.seq(cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__26898 = null;
var count__26899 = (0);
var i__26900 = (0);
while(true){
if((i__26900 < count__26899)){
var c = chunk__26898.cljs$core$IIndexed$_nth$arity$2(null,i__26900);
var props_change_QMARK__26919 = (om.next.protocols.basis_t(this$__$1) > om.next.t(c));
if(om.next.mounted_QMARK_(c)){
var computed_26920 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_raw_props_26921 = (ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c));
var next_props_26922 = om.next.computed(next_raw_props_26921,computed_26920);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_(root)) && (props_change_QMARK__26919)){
var next_props_26923__$1 = (((next_props_26922 == null))?(function (){var temp__4657__auto__ = om.next.props(c);
if(cljs.core.truth_(temp__4657__auto__)){
var props = temp__4657__auto__;
return props;
} else {
return null;
}
})():next_props_26922);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props(next_props_26923__$1,om.next.protocols.basis_t(this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_26922,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_26922 == null))){
om.next.update_component_BANG_(c,next_props_26922);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_(root)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)) && (props_change_QMARK__26919)){
var temp__4657__auto___26924 = om.next.path(c);
if(cljs.core.truth_(temp__4657__auto___26924)){
var update_path_26925 = temp__4657__auto___26924;
var p_26926 = om.next.parent(c);
while(true){
if(cljs.core.some_QMARK_(p_26926)){
var update_path_SINGLEQUOTE__26927 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(update_path_26925,cljs.core.count(om.next.path(p_26926)));
om.next.update_props_BANG_(p_26926,cljs.core.assoc_in(om.next.props(p_26926),update_path_SINGLEQUOTE__26927,next_raw_props_26921));

om.next.merge_pending_props_BANG_(p_26926);

var G__26928 = om.next.parent(p_26926);
p_26926 = G__26928;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__26929 = seq__26897;
var G__26930 = chunk__26898;
var G__26931 = count__26899;
var G__26932 = (i__26900 + (1));
seq__26897 = G__26929;
chunk__26898 = G__26930;
count__26899 = G__26931;
i__26900 = G__26932;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__26897);
if(temp__4657__auto__){
var seq__26897__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26897__$1)){
var c__7228__auto__ = cljs.core.chunk_first(seq__26897__$1);
var G__26933 = cljs.core.chunk_rest(seq__26897__$1);
var G__26934 = c__7228__auto__;
var G__26935 = cljs.core.count(c__7228__auto__);
var G__26936 = (0);
seq__26897 = G__26933;
chunk__26898 = G__26934;
count__26899 = G__26935;
i__26900 = G__26936;
continue;
} else {
var c = cljs.core.first(seq__26897__$1);
var props_change_QMARK__26937 = (om.next.protocols.basis_t(this$__$1) > om.next.t(c));
if(om.next.mounted_QMARK_(c)){
var computed_26938 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_raw_props_26939 = (ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c));
var next_props_26940 = om.next.computed(next_raw_props_26939,computed_26938);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_(root)) && (props_change_QMARK__26937)){
var next_props_26941__$1 = (((next_props_26940 == null))?(function (){var temp__4657__auto____$1 = om.next.props(c);
if(cljs.core.truth_(temp__4657__auto____$1)){
var props = temp__4657__auto____$1;
return props;
} else {
return null;
}
})():next_props_26940);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props(next_props_26941__$1,om.next.protocols.basis_t(this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_26940,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_26940 == null))){
om.next.update_component_BANG_(c,next_props_26940);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_(root)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)) && (props_change_QMARK__26937)){
var temp__4657__auto___26942__$1 = om.next.path(c);
if(cljs.core.truth_(temp__4657__auto___26942__$1)){
var update_path_26943 = temp__4657__auto___26942__$1;
var p_26944 = om.next.parent(c);
while(true){
if(cljs.core.some_QMARK_(p_26944)){
var update_path_SINGLEQUOTE__26945 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(update_path_26943,cljs.core.count(om.next.path(p_26944)));
om.next.update_props_BANG_(p_26944,cljs.core.assoc_in(om.next.props(p_26944),update_path_SINGLEQUOTE__26945,next_raw_props_26939));

om.next.merge_pending_props_BANG_(p_26944);

var G__26946 = om.next.parent(p_26944);
p_26944 = G__26946;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__26947 = cljs.core.next(seq__26897__$1);
var G__26948 = null;
var G__26949 = (0);
var G__26950 = (0);
seq__26897 = G__26947;
chunk__26898 = G__26948;
count__26899 = G__26949;
i__26900 = G__26950;
continue;
}
} else {
return null;
}
}
break;
}
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queued,true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$sends_DASH_queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$sends_DASH_queued,true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rctor = om.next.factory.cljs$core$IFn$_invoke$arity$1(root_class);
var guid = cljs.core.random_uuid();
if(om.next.iquery_QMARK_(root_class)){
om.next.protocols.index_root(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__6405__auto__ = cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.not(cljs.core.cst$kw$normalized.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))));
} else {
return and__6405__auto__;
}
})())){
var new_state_26951 = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(root_class,(function (){var G__26901 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26901) : cljs.core.deref.call(null,G__26901));
})());
var refs_26952 = cljs.core.meta(new_state_26951);
var G__26902_26953 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
var G__26903_26954 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_state_26951,refs_26952], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26902_26953,G__26903_26954) : cljs.core.reset_BANG_.call(null,G__26902_26953,G__26903_26954));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$normalized,true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_26904 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_26905 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26906 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config))?cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null)], 0));

om.next._STAR_instrument_STAR_ = cljs.core.cst$kw$instrument.cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?cljs.core.cst$kw$root_DASH_render.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)),target):((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null))?(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)):(function (){var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(temp__4657__auto__)){
var c_SINGLEQUOTE_ = temp__4657__auto__;
if(om.next.mounted_QMARK_(c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$root,c);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c) : cljs.core.reset_BANG_.call(null,ret,c));
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26906;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26905;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26904;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query((function (){var or__6417__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_(sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str("(or (nil? sel) (vector? sel))")].join('')));
}

if(!((sel == null))){
var env = om.next.to_env(self__.config);
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_(v)){
return null;
} else {
return renderf(v);
}
} else {
return renderf((function (){var G__26907 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26907) : cljs.core.deref.call(null,G__26907));
})());
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$render,parsef,cljs.core.cst$kw$root,root_class,cljs.core.cst$kw$remove,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__6417__auto__ = target;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__26887_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26887_SHARP_,cljs.core.cst$kw$target),cljs.core.cst$kw$render),cljs.core.cst$kw$root),cljs.core.cst$kw$remove);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return cljs.core.cst$kw$root_DASH_unmount.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__6417__auto__ = target;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$t], null),cljs.core.inc);

if(!(om.next.iquery_QMARK_(root_class))){
return om.next.queue_render_BANG_(parsef);
} else {
return om.next.schedule_render_BANG_(this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef();

var temp__4657__auto___26955 = om.next.get_query((function (){var or__6417__auto__ = (function (){var and__6405__auto__ = target;
if(cljs.core.truth_(and__6405__auto__)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__4657__auto___26955)){
var sel_26956 = temp__4657__auto___26955;
var env_26957 = om.next.to_env(self__.config);
var snds_26958 = om.next.gather_sends(env_26957,sel_26956,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_(snds_26958)){
} else {
var temp__4657__auto___26959__$1 = cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4657__auto___26959__$1)){
var send_26960 = temp__4657__auto___26959__$1;
var G__26908_26961 = snds_26958;
var G__26909_26962 = ((function (G__26908_26961,send_26960,temp__4657__auto___26959__$1,env_26957,snds_26958,sel_26956,temp__4657__auto___26955,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,null);

return renderf(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_26957,sel_26956));
});
var om$next$send_cb__2 = (function (resp,query){
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,query);

return renderf(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_26957,sel_26956));
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.keys(resp),remote);
}

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,resp,query,remote);

return om.next.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(G__26908_26961,send_26960,temp__4657__auto___26959__$1,env_26957,snds_26958,sel_26956,temp__4657__auto___26955,renderf,parsef,ret,rctor,guid,this$__$1))
;
(send_26960.cljs$core$IFn$_invoke$arity$2 ? send_26960.cljs$core$IFn$_invoke$arity$2(G__26908_26961,G__26909_26962) : send_26960.call(null,G__26908_26961,G__26909_26962));
} else {
}
}
} else {
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),cljs.core.cst$kw$root);
if(om.next.iquery_QMARK_(root)){
var indexer = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,root], null)));
return om.next.protocols.index_root(indexer,(function (){var or__6417__auto__ = c;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = cljs.core.cst$kw$remove.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.truth_(temp__4657__auto__)){
var remove = temp__4657__auto__;
return (remove.cljs$core$IFn$_invoke$arity$0 ? remove.cljs$core$IFn$_invoke$arity$0() : remove.call(null));
} else {
return null;
}
});


om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7053__auto__,writer__7054__auto__,opts__7055__auto__){
var self__ = this;
var this__7053__auto____$1 = this;
var pr_pair__7056__auto__ = ((function (this__7053__auto____$1){
return (function (keyval__7057__auto__){
return cljs.core.pr_sequential_writer(writer__7054__auto__,cljs.core.pr_writer,""," ","",opts__7055__auto__,keyval__7057__auto__);
});})(this__7053__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7054__auto__,pr_pair__7056__auto__,"#om.next.Reconciler{",", ","}",opts__7055__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IIterable$ = true;


om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26891){
var self__ = this;
var G__26891__$1 = this;
return (new cljs.core.RecordIter((0),G__26891__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$state], null),cljs.core._iterator(self__.__extmap)));
});


om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7037__auto__){
var self__ = this;
var this__7037__auto____$1 = this;
return self__.__meta;
});


om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7033__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7034__auto__){
var self__ = this;
var this__7034__auto____$1 = this;
var h__6852__auto__ = self__.__hash;
if(!((h__6852__auto__ == null))){
return h__6852__auto__;
} else {
var h__6852__auto____$1 = cljs.core.hash_imap(this__7034__auto____$1);
self__.__hash = h__6852__auto____$1;

return h__6852__auto____$1;
}
});


om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7035__auto__,other__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6405__auto__ = other__7036__auto__;
if(cljs.core.truth_(and__6405__auto__)){
var and__6405__auto____$1 = (this__7035__auto____$1.constructor === other__7036__auto__.constructor);
if(and__6405__auto____$1){
return cljs.core.equiv_map(this__7035__auto____$1,other__7036__auto__);
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7048__auto__,k__7049__auto__){
var self__ = this;
var this__7048__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$config,null,cljs.core.cst$kw$state,null], null), null),k__7049__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7048__auto____$1),self__.__meta),k__7049__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7049__auto__)),null));
}
});


om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7046__auto__,k__7047__auto__,G__26891){
var self__ = this;
var this__7046__auto____$1 = this;
var pred__26910 = cljs.core.keyword_identical_QMARK_;
var expr__26911 = k__7047__auto__;
if(cljs.core.truth_((function (){var G__26913 = cljs.core.cst$kw$config;
var G__26914 = expr__26911;
return (pred__26910.cljs$core$IFn$_invoke$arity$2 ? pred__26910.cljs$core$IFn$_invoke$arity$2(G__26913,G__26914) : pred__26910.call(null,G__26913,G__26914));
})())){
return (new om.next.Reconciler(G__26891,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26915 = cljs.core.cst$kw$state;
var G__26916 = expr__26911;
return (pred__26910.cljs$core$IFn$_invoke$arity$2 ? pred__26910.cljs$core$IFn$_invoke$arity$2(G__26915,G__26916) : pred__26910.call(null,G__26915,G__26916));
})())){
return (new om.next.Reconciler(self__.config,G__26891,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7047__auto__,G__26891),null));
}
}
});


om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7051__auto__){
var self__ = this;
var this__7051__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7038__auto__,G__26891){
var self__ = this;
var this__7038__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__26891,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7044__auto__,entry__7045__auto__){
var self__ = this;
var this__7044__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7045__auto__)){
return cljs.core._assoc(this__7044__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7045__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7045__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7044__auto____$1,entry__7045__auto__);
}
});


om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__26917 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26917) : cljs.core.deref.call(null,G__26917));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$state], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__7073__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__7073__auto__,writer__7074__auto__){
return cljs.core._write(writer__7074__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__26893){
return (new om.next.Reconciler(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__26893),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__26893),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26893,cljs.core.cst$kw$config,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__26963,c){
var map__26973 = p__26963;
var map__26973__$1 = ((((!((map__26973 == null)))?((((map__26973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26973):map__26973);
var env = map__26973__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26973__$1,cljs.core.cst$kw$parser);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26973__$1,cljs.core.cst$kw$pathopt);
var ui__$1 = (((function (){var and__6405__auto__ = pathopt;
if(and__6405__auto__){
var and__6405__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__6405__auto____$1){
return om.next.iquery_QMARK_(c);
} else {
return and__6405__auto____$1;
}
} else {
return and__6405__auto__;
}
})())?(function (){var id = om.next.ident(c,om.next.props(c));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26978 = env;
var G__26979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query(c)], true, false)], null);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__26978,G__26979) : parser.call(null,G__26978,G__26979));
})(),id);
})():null);
if(!((ui__$1 == null))){
return ui__$1;
} else {
var fq = om.next.full_query.cljs$core$IFn$_invoke$arity$1(c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time();
var ui__$2 = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,fq) : parser.call(null,env,fq));
var e = cljs.core.system_time();
var temp__4657__auto___26982 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4657__auto___26982)){
var l_26983 = temp__4657__auto___26982;
var dt_26984 = (e - s);
var component_name_26985 = c.constructor.displayName;
if(((16) < dt_26984)){
var G__26980_26986 = l_26983;
var G__26981_26987 = [cljs.core.str(component_name_26985),cljs.core.str(" query took "),cljs.core.str(dt_26984),cljs.core.str(" msecs")].join('');
goog.log.warning(G__26980_26986,G__26981_26987);
} else {
}
} else {
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui__$2,om.next.path(c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b], 0));
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args26988 = [];
var len__7492__auto___27035 = arguments.length;
var i__7493__auto___27036 = (0);
while(true){
if((i__7493__auto___27036 < len__7492__auto___27035)){
args26988.push((arguments[i__7493__auto___27036]));

var G__27037 = (i__7493__auto___27036 + (1));
i__7493__auto___27036 = G__27037;
continue;
} else {
}
break;
}

var G__26990 = args26988.length;
switch (G__26990) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26988.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4(app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__27013){
var vec__27017 = p__27013;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27017,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27017,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pure,table,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pure,table),id));
});
var step = (function om$next$step(pure,p__27020){
var vec__27028 = p__27020;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27028,(0),null);
var vec__27031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27028,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27031,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27031,(1),null);
var new$ = vec__27031;
return cljs.core.assoc_in(dissoc_in(pure,old),new$,(function (){var G__27034 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,old),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,new$)], 0));
if(!((id_key == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27034,id_key,id);
} else {
return G__27034;
}
})());
});
if(!(cljs.core.empty_QMARK_(tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,app_state_pure,tempids);
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(query,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4(query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;

om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,cljs.core.cst$kw$om$next_SLASH_error));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_(res__$1)))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (class$){
return (function (p1__27039_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__27039_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident(class$,res__$1)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_(query__$1)){
if(cljs.core.vector_QMARK_(res__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (class$,top_error_QMARK_,ret){
return (function (p1__27040_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(query__$1,p1__27040_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq(query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var k = (function (){var k = om.next.expr__GT_key(expr);
var G__27076 = k;
if(om.util.unique_ident_QMARK_(k)){
return cljs.core.first(G__27076);
} else {
return G__27076;
}
})();
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,k);
if(om.util.mutation_QMARK_(expr)){
var mk = om.util.mutation_key(expr);
var ret_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,mk);
if(om.next.has_error_QMARK_(ret_SINGLEQUOTE_)){
var x = cljs.core.cst$kw$mutator.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__27041_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__27041_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__27078 = cljs.core.next(exprs);
var G__27079 = ret__$1;
exprs = G__27078;
ret__$1 = G__27079;
continue;
} else {
var G__27080 = cljs.core.next(exprs);
var G__27081 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__27080;
ret__$1 = G__27081;
continue;
}
} else {
if(om.util.union_QMARK_(expr)){
var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var class_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(jv));
if(!(cljs.core.vector_QMARK_(data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,data))),data,errs);
var G__27082 = cljs.core.next(exprs);
var G__27083 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__27082;
ret__$1 = G__27083;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__27042_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,p1__27042_SHARP_))),p1__27042_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__27084 = cljs.core.next(exprs);
var G__27085 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__27084;
ret__$1 = G__27085;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_(expr))){
var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(jv,data,errs);
var G__27086 = cljs.core.next(exprs);
var G__27087 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__27086;
ret__$1 = G__27087;
continue;
} else {
if((cljs.core.map_QMARK_(data)) && (om.next.has_error_QMARK_(data))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__27043_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__27043_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6417__auto__ = (((class$ == null))?null:om.next.ident(class$,res__$1));
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__27088 = cljs.core.next(exprs);
var G__27089 = null;
exprs = G__27088;
ret__$1 = G__27089;
continue;
} else {
var G__27090 = cljs.core.next(exprs);
var G__27091 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,k,data));
exprs = G__27090;
ret__$1 = G__27091;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = (function (){var G__27077 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27077) : cljs.core.atom.call(null,G__27077));
})();
var ret = extract_STAR_(query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tree,ret,cljs.core.cst$kw$errors,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(errs) : cljs.core.deref.call(null,errs))], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 *   :tx-listen    - a function of 2 arguments that will listen to transactions.
 *                   The first argument is the parser's env map also containing
 *                   the old and new state. The second argument is a map containing
 *                   the transaction, its result and the remote sends that the
 *                   transaction originated.
 */
om.next.reconciler = (function om$next$reconciler(p__27097){
var map__27102 = p__27097;
var map__27102__$1 = ((((!((map__27102 == null)))?((((map__27102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27102):map__27102);
var config = map__27102__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$root_DASH_render,((function (map__27102,map__27102__$1,config){
return (function (p1__27094_SHARP_,p2__27095_SHARP_){
return ReactDOM.render(p1__27094_SHARP_,p2__27095_SHARP_);
});})(map__27102,map__27102__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$normalize);
var prune_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$prune_DASH_tree,om.next.default_extract_errors);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$tx_DASH_listen);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$pathopt,false);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$instrument);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$id_DASH_key);
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$merge_DASH_sends,((function (map__27102,map__27102__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key){
return (function (p1__27092_SHARP_,p2__27093_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__27092_SHARP_,p2__27093_SHARP_], 0));
});})(map__27102,map__27102__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$merge_DASH_ident,om.next.default_merge_ident);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote], null));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$migrate,om.next.default_migrate);
var easy_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$easy_DASH_reads,true);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$history,(100));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$state);
var merge = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$merge,om.next.default_merge);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$shared_DASH_fn);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$ui_DASH__GT_props,om.next.default_ui__GT_props);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$parser);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$indexer,om.next.indexer);
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$root_DASH_unmount,((function (map__27102,map__27102__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__27096_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__27096_SHARP_);
});})(map__27102,map__27102__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$send);
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$merge_DASH_tree,om.next.default_merge_tree);
var shared__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$shared);
var optimize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27102__$1,cljs.core.cst$kw$optimize,((function (map__27102,map__27102__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared__$1){
return (function (cs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(om.next.depth,cs);
});})(map__27102,map__27102__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared__$1))
);
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = (indexer.cljs$core$IFn$_invoke$arity$0 ? indexer.cljs$core$IFn$_invoke$arity$0() : indexer.call(null));
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.atom.call(null,state)));
var logger = ((cljs.core.contains_QMARK_(config,cljs.core.cst$kw$logger))?cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$pathopt,cljs.core.cst$kw$id_DASH_key,cljs.core.cst$kw$instrument,cljs.core.cst$kw$merge_DASH_ident,cljs.core.cst$kw$merge_DASH_sends,cljs.core.cst$kw$remotes,cljs.core.cst$kw$migrate,cljs.core.cst$kw$easy_DASH_reads,cljs.core.cst$kw$history,cljs.core.cst$kw$state,cljs.core.cst$kw$merge,cljs.core.cst$kw$shared_DASH_fn,cljs.core.cst$kw$parser,cljs.core.cst$kw$ui_DASH__GT_props,cljs.core.cst$kw$logger,cljs.core.cst$kw$indexer,cljs.core.cst$kw$root_DASH_unmount,cljs.core.cst$kw$send,cljs.core.cst$kw$shared,cljs.core.cst$kw$merge_DASH_tree,cljs.core.cst$kw$optimize,cljs.core.cst$kw$root_DASH_render,cljs.core.cst$kw$normalize,cljs.core.cst$kw$prune_DASH_tree,cljs.core.cst$kw$tx_DASH_listen],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,easy_reads,om.next.cache.cache(history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared__$1,merge_tree,optimize,root_render,(function (){var or__6417__auto__ = !(norm_QMARK_);
if(or__6417__auto__){
return or__6417__auto__;
} else {
return normalize;
}
})(),prune_tree,tx_listen]),(function (){var G__27105 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$normalized,cljs.core.cst$kw$remote_DASH_queue,cljs.core.cst$kw$remove,cljs.core.cst$kw$queue,cljs.core.cst$kw$sends_DASH_queued,cljs.core.cst$kw$queued_DASH_sends,cljs.core.cst$kw$queued,cljs.core.cst$kw$render,cljs.core.cst$kw$root,cljs.core.cst$kw$t,cljs.core.cst$kw$target],[norm_QMARK_,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27105) : cljs.core.atom.call(null,G__27105));
})(),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$protocols$IReconciler$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27109 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27109) : cljs.core.deref.call(null,G__27109));
})(),cljs.core.cst$kw$root);
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27111 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27111) : cljs.core.deref.call(null,G__27111));
})(),cljs.core.cst$kw$render).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args27112 = [];
var len__7492__auto___27115 = arguments.length;
var i__7493__auto___27116 = (0);
while(true){
if((i__7493__auto___27116 < len__7492__auto___27115)){
args27112.push((arguments[i__7493__auto___27116]));

var G__27117 = (i__7493__auto___27116 + (1));
i__7493__auto___27116 = G__27117;
continue;
} else {
}
break;
}

var G__27114 = args27112.length;
switch (G__27114) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27112.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_(x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args27119 = [];
var len__7492__auto___27122 = arguments.length;
var i__7493__auto___27123 = (0);
while(true){
if((i__7493__auto___27123 < len__7492__auto___27122)){
args27119.push((arguments[i__7493__auto___27123]));

var G__27124 = (i__7493__auto___27123 + (1));
i__7493__auto___27123 = G__27124;
continue;
} else {
}
break;
}

var G__27121 = args27119.length;
switch (G__27121) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27119.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args27126 = [];
var len__7492__auto___27129 = arguments.length;
var i__7493__auto___27130 = (0);
while(true){
if((i__7493__auto___27130 < len__7492__auto___27129)){
args27126.push((arguments[i__7493__auto___27130]));

var G__27131 = (i__7493__auto___27130 + (1));
i__7493__auto___27130 = G__27131;
continue;
} else {
}
break;
}

var G__27128 = args27126.length;
switch (G__27128) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27126.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;

/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args27133 = [];
var len__7492__auto___27136 = arguments.length;
var i__7493__auto___27137 = (0);
while(true){
if((i__7493__auto___27137 < len__7492__auto___27136)){
args27133.push((arguments[i__7493__auto___27137]));

var G__27138 = (i__7493__auto___27137 + (1));
i__7493__auto___27137 = G__27138;
continue;
} else {
}
break;
}

var G__27135 = args27133.length;
switch (G__27135) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27133.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.cst$kw$remote);
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta(cljs.core._conj((function (){var x__7251__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7251__auto__);
})(),cljs.core.cst$sym$quote),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;

