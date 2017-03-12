// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ui.motion');
goog.require('cljs.core');
ui.motion.motion = (function ui$motion$motion(atts,thunk){
var G__33026 = ReactMotion.Motion;
var G__33027 = cljs.core.clj__GT_js(atts);
var G__33028 = ((function (G__33026,G__33027){
return (function (value){
var G__33029 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
return (thunk.cljs$core$IFn$_invoke$arity$1 ? thunk.cljs$core$IFn$_invoke$arity$1(G__33029) : thunk.call(null,G__33029));
});})(G__33026,G__33027))
;
return React.createElement(G__33026,G__33027,G__33028);
});
ui.motion.spring = ReactMotion.spring;
ui.motion.wobbly = ReactMotion.presets.wobbly;
ui.motion.gentle = ReactMotion.presets.gentle;
ui.motion.stiff = ReactMotion.presets.stiff;
