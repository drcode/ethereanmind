// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__32557__auto__,writer__32558__auto__,opt__32559__auto__){
return cljs.core._write.call(null,writer__32558__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58451 = arguments.length;
var i__33027__auto___58452 = (0);
while(true){
if((i__33027__auto___58452 < len__33026__auto___58451)){
args__33033__auto__.push((arguments[i__33027__auto___58452]));

var G__58453 = (i__33027__auto___58452 + (1));
i__33027__auto___58452 = G__58453;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq58450){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58450));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58455 = arguments.length;
var i__33027__auto___58456 = (0);
while(true){
if((i__33027__auto___58456 < len__33026__auto___58455)){
args__33033__auto__.push((arguments[i__33027__auto___58456]));

var G__58457 = (i__33027__auto___58456 + (1));
i__33027__auto___58456 = G__58457;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq58454){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58454));
});

var g_QMARK__58458 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_58459 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__58458){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__58458))
,null));
var mkg_58460 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__58458,g_58459){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__58458,g_58459))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__58458,g_58459,mkg_58460){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__58458).call(null,x);
});})(g_QMARK__58458,g_58459,mkg_58460))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__58458,g_58459,mkg_58460){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_58460).call(null,gfn);
});})(g_QMARK__58458,g_58459,mkg_58460))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__58458,g_58459,mkg_58460){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_58459).call(null,generator);
});})(g_QMARK__58458,g_58459,mkg_58460))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__40409__auto___58479 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__40409__auto___58479){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58480 = arguments.length;
var i__33027__auto___58481 = (0);
while(true){
if((i__33027__auto___58481 < len__33026__auto___58480)){
args__33033__auto__.push((arguments[i__33027__auto___58481]));

var G__58482 = (i__33027__auto___58481 + (1));
i__33027__auto___58481 = G__58482;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58479))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58479){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58479),args);
});})(g__40409__auto___58479))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__40409__auto___58479){
return (function (seq58461){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58461));
});})(g__40409__auto___58479))
;


var g__40409__auto___58483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__40409__auto___58483){
return (function cljs$spec$impl$gen$list(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58484 = arguments.length;
var i__33027__auto___58485 = (0);
while(true){
if((i__33027__auto___58485 < len__33026__auto___58484)){
args__33033__auto__.push((arguments[i__33027__auto___58485]));

var G__58486 = (i__33027__auto___58485 + (1));
i__33027__auto___58485 = G__58486;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58483))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58483){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58483),args);
});})(g__40409__auto___58483))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__40409__auto___58483){
return (function (seq58462){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58462));
});})(g__40409__auto___58483))
;


var g__40409__auto___58487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__40409__auto___58487){
return (function cljs$spec$impl$gen$map(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58488 = arguments.length;
var i__33027__auto___58489 = (0);
while(true){
if((i__33027__auto___58489 < len__33026__auto___58488)){
args__33033__auto__.push((arguments[i__33027__auto___58489]));

var G__58490 = (i__33027__auto___58489 + (1));
i__33027__auto___58489 = G__58490;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58487))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58487){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58487),args);
});})(g__40409__auto___58487))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__40409__auto___58487){
return (function (seq58463){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58463));
});})(g__40409__auto___58487))
;


var g__40409__auto___58491 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__40409__auto___58491){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58492 = arguments.length;
var i__33027__auto___58493 = (0);
while(true){
if((i__33027__auto___58493 < len__33026__auto___58492)){
args__33033__auto__.push((arguments[i__33027__auto___58493]));

var G__58494 = (i__33027__auto___58493 + (1));
i__33027__auto___58493 = G__58494;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58491))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58491){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58491),args);
});})(g__40409__auto___58491))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__40409__auto___58491){
return (function (seq58464){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58464));
});})(g__40409__auto___58491))
;


var g__40409__auto___58495 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__40409__auto___58495){
return (function cljs$spec$impl$gen$set(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58496 = arguments.length;
var i__33027__auto___58497 = (0);
while(true){
if((i__33027__auto___58497 < len__33026__auto___58496)){
args__33033__auto__.push((arguments[i__33027__auto___58497]));

var G__58498 = (i__33027__auto___58497 + (1));
i__33027__auto___58497 = G__58498;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58495))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58495){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58495),args);
});})(g__40409__auto___58495))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__40409__auto___58495){
return (function (seq58465){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58465));
});})(g__40409__auto___58495))
;


var g__40409__auto___58499 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__40409__auto___58499){
return (function cljs$spec$impl$gen$vector(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58500 = arguments.length;
var i__33027__auto___58501 = (0);
while(true){
if((i__33027__auto___58501 < len__33026__auto___58500)){
args__33033__auto__.push((arguments[i__33027__auto___58501]));

var G__58502 = (i__33027__auto___58501 + (1));
i__33027__auto___58501 = G__58502;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58499))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58499){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58499),args);
});})(g__40409__auto___58499))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__40409__auto___58499){
return (function (seq58466){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58466));
});})(g__40409__auto___58499))
;


var g__40409__auto___58503 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__40409__auto___58503){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58504 = arguments.length;
var i__33027__auto___58505 = (0);
while(true){
if((i__33027__auto___58505 < len__33026__auto___58504)){
args__33033__auto__.push((arguments[i__33027__auto___58505]));

var G__58506 = (i__33027__auto___58505 + (1));
i__33027__auto___58505 = G__58506;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58503))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58503){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58503),args);
});})(g__40409__auto___58503))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__40409__auto___58503){
return (function (seq58467){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58467));
});})(g__40409__auto___58503))
;


var g__40409__auto___58507 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__40409__auto___58507){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58508 = arguments.length;
var i__33027__auto___58509 = (0);
while(true){
if((i__33027__auto___58509 < len__33026__auto___58508)){
args__33033__auto__.push((arguments[i__33027__auto___58509]));

var G__58510 = (i__33027__auto___58509 + (1));
i__33027__auto___58509 = G__58510;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58507))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58507){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58507),args);
});})(g__40409__auto___58507))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__40409__auto___58507){
return (function (seq58468){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58468));
});})(g__40409__auto___58507))
;


var g__40409__auto___58511 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__40409__auto___58511){
return (function cljs$spec$impl$gen$elements(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58512 = arguments.length;
var i__33027__auto___58513 = (0);
while(true){
if((i__33027__auto___58513 < len__33026__auto___58512)){
args__33033__auto__.push((arguments[i__33027__auto___58513]));

var G__58514 = (i__33027__auto___58513 + (1));
i__33027__auto___58513 = G__58514;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58511))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58511){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58511),args);
});})(g__40409__auto___58511))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__40409__auto___58511){
return (function (seq58469){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58469));
});})(g__40409__auto___58511))
;


var g__40409__auto___58515 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__40409__auto___58515){
return (function cljs$spec$impl$gen$bind(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58516 = arguments.length;
var i__33027__auto___58517 = (0);
while(true){
if((i__33027__auto___58517 < len__33026__auto___58516)){
args__33033__auto__.push((arguments[i__33027__auto___58517]));

var G__58518 = (i__33027__auto___58517 + (1));
i__33027__auto___58517 = G__58518;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58515))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58515){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58515),args);
});})(g__40409__auto___58515))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__40409__auto___58515){
return (function (seq58470){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58470));
});})(g__40409__auto___58515))
;


var g__40409__auto___58519 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__40409__auto___58519){
return (function cljs$spec$impl$gen$choose(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58520 = arguments.length;
var i__33027__auto___58521 = (0);
while(true){
if((i__33027__auto___58521 < len__33026__auto___58520)){
args__33033__auto__.push((arguments[i__33027__auto___58521]));

var G__58522 = (i__33027__auto___58521 + (1));
i__33027__auto___58521 = G__58522;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58519))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58519){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58519),args);
});})(g__40409__auto___58519))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__40409__auto___58519){
return (function (seq58471){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58471));
});})(g__40409__auto___58519))
;


var g__40409__auto___58523 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__40409__auto___58523){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58524 = arguments.length;
var i__33027__auto___58525 = (0);
while(true){
if((i__33027__auto___58525 < len__33026__auto___58524)){
args__33033__auto__.push((arguments[i__33027__auto___58525]));

var G__58526 = (i__33027__auto___58525 + (1));
i__33027__auto___58525 = G__58526;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58523))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58523){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58523),args);
});})(g__40409__auto___58523))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__40409__auto___58523){
return (function (seq58472){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58472));
});})(g__40409__auto___58523))
;


var g__40409__auto___58527 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__40409__auto___58527){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58528 = arguments.length;
var i__33027__auto___58529 = (0);
while(true){
if((i__33027__auto___58529 < len__33026__auto___58528)){
args__33033__auto__.push((arguments[i__33027__auto___58529]));

var G__58530 = (i__33027__auto___58529 + (1));
i__33027__auto___58529 = G__58530;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58527))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58527){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58527),args);
});})(g__40409__auto___58527))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__40409__auto___58527){
return (function (seq58473){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58473));
});})(g__40409__auto___58527))
;


var g__40409__auto___58531 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__40409__auto___58531){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58532 = arguments.length;
var i__33027__auto___58533 = (0);
while(true){
if((i__33027__auto___58533 < len__33026__auto___58532)){
args__33033__auto__.push((arguments[i__33027__auto___58533]));

var G__58534 = (i__33027__auto___58533 + (1));
i__33027__auto___58533 = G__58534;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58531))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58531){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58531),args);
});})(g__40409__auto___58531))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__40409__auto___58531){
return (function (seq58474){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58474));
});})(g__40409__auto___58531))
;


var g__40409__auto___58535 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__40409__auto___58535){
return (function cljs$spec$impl$gen$sample(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58536 = arguments.length;
var i__33027__auto___58537 = (0);
while(true){
if((i__33027__auto___58537 < len__33026__auto___58536)){
args__33033__auto__.push((arguments[i__33027__auto___58537]));

var G__58538 = (i__33027__auto___58537 + (1));
i__33027__auto___58537 = G__58538;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58535))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58535){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58535),args);
});})(g__40409__auto___58535))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__40409__auto___58535){
return (function (seq58475){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58475));
});})(g__40409__auto___58535))
;


var g__40409__auto___58539 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__40409__auto___58539){
return (function cljs$spec$impl$gen$return(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58540 = arguments.length;
var i__33027__auto___58541 = (0);
while(true){
if((i__33027__auto___58541 < len__33026__auto___58540)){
args__33033__auto__.push((arguments[i__33027__auto___58541]));

var G__58542 = (i__33027__auto___58541 + (1));
i__33027__auto___58541 = G__58542;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58539))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58539){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58539),args);
});})(g__40409__auto___58539))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__40409__auto___58539){
return (function (seq58476){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58476));
});})(g__40409__auto___58539))
;


var g__40409__auto___58543 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__40409__auto___58543){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58544 = arguments.length;
var i__33027__auto___58545 = (0);
while(true){
if((i__33027__auto___58545 < len__33026__auto___58544)){
args__33033__auto__.push((arguments[i__33027__auto___58545]));

var G__58546 = (i__33027__auto___58545 + (1));
i__33027__auto___58545 = G__58546;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58543))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58543){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58543),args);
});})(g__40409__auto___58543))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__40409__auto___58543){
return (function (seq58477){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58477));
});})(g__40409__auto___58543))
;


var g__40409__auto___58547 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__40409__auto___58547){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58548 = arguments.length;
var i__33027__auto___58549 = (0);
while(true){
if((i__33027__auto___58549 < len__33026__auto___58548)){
args__33033__auto__.push((arguments[i__33027__auto___58549]));

var G__58550 = (i__33027__auto___58549 + (1));
i__33027__auto___58549 = G__58550;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40409__auto___58547))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40409__auto___58547){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40409__auto___58547),args);
});})(g__40409__auto___58547))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__40409__auto___58547){
return (function (seq58478){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58478));
});})(g__40409__auto___58547))
;

var g__40422__auto___58572 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__40422__auto___58572){
return (function cljs$spec$impl$gen$any(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58573 = arguments.length;
var i__33027__auto___58574 = (0);
while(true){
if((i__33027__auto___58574 < len__33026__auto___58573)){
args__33033__auto__.push((arguments[i__33027__auto___58574]));

var G__58575 = (i__33027__auto___58574 + (1));
i__33027__auto___58574 = G__58575;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58572))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58572){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58572);
});})(g__40422__auto___58572))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__40422__auto___58572){
return (function (seq58551){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58551));
});})(g__40422__auto___58572))
;


var g__40422__auto___58576 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__40422__auto___58576){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58577 = arguments.length;
var i__33027__auto___58578 = (0);
while(true){
if((i__33027__auto___58578 < len__33026__auto___58577)){
args__33033__auto__.push((arguments[i__33027__auto___58578]));

var G__58579 = (i__33027__auto___58578 + (1));
i__33027__auto___58578 = G__58579;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58576))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58576){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58576);
});})(g__40422__auto___58576))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__40422__auto___58576){
return (function (seq58552){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58552));
});})(g__40422__auto___58576))
;


var g__40422__auto___58580 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__40422__auto___58580){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58581 = arguments.length;
var i__33027__auto___58582 = (0);
while(true){
if((i__33027__auto___58582 < len__33026__auto___58581)){
args__33033__auto__.push((arguments[i__33027__auto___58582]));

var G__58583 = (i__33027__auto___58582 + (1));
i__33027__auto___58582 = G__58583;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58580))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58580){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58580);
});})(g__40422__auto___58580))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__40422__auto___58580){
return (function (seq58553){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58553));
});})(g__40422__auto___58580))
;


var g__40422__auto___58584 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__40422__auto___58584){
return (function cljs$spec$impl$gen$char(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58585 = arguments.length;
var i__33027__auto___58586 = (0);
while(true){
if((i__33027__auto___58586 < len__33026__auto___58585)){
args__33033__auto__.push((arguments[i__33027__auto___58586]));

var G__58587 = (i__33027__auto___58586 + (1));
i__33027__auto___58586 = G__58587;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58584))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58584){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58584);
});})(g__40422__auto___58584))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__40422__auto___58584){
return (function (seq58554){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58554));
});})(g__40422__auto___58584))
;


var g__40422__auto___58588 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__40422__auto___58588){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58589 = arguments.length;
var i__33027__auto___58590 = (0);
while(true){
if((i__33027__auto___58590 < len__33026__auto___58589)){
args__33033__auto__.push((arguments[i__33027__auto___58590]));

var G__58591 = (i__33027__auto___58590 + (1));
i__33027__auto___58590 = G__58591;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58588))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58588){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58588);
});})(g__40422__auto___58588))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__40422__auto___58588){
return (function (seq58555){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58555));
});})(g__40422__auto___58588))
;


var g__40422__auto___58592 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__40422__auto___58592){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58593 = arguments.length;
var i__33027__auto___58594 = (0);
while(true){
if((i__33027__auto___58594 < len__33026__auto___58593)){
args__33033__auto__.push((arguments[i__33027__auto___58594]));

var G__58595 = (i__33027__auto___58594 + (1));
i__33027__auto___58594 = G__58595;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58592))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58592){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58592);
});})(g__40422__auto___58592))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__40422__auto___58592){
return (function (seq58556){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58556));
});})(g__40422__auto___58592))
;


var g__40422__auto___58596 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__40422__auto___58596){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58597 = arguments.length;
var i__33027__auto___58598 = (0);
while(true){
if((i__33027__auto___58598 < len__33026__auto___58597)){
args__33033__auto__.push((arguments[i__33027__auto___58598]));

var G__58599 = (i__33027__auto___58598 + (1));
i__33027__auto___58598 = G__58599;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58596))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58596){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58596);
});})(g__40422__auto___58596))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__40422__auto___58596){
return (function (seq58557){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58557));
});})(g__40422__auto___58596))
;


var g__40422__auto___58600 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__40422__auto___58600){
return (function cljs$spec$impl$gen$double(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58601 = arguments.length;
var i__33027__auto___58602 = (0);
while(true){
if((i__33027__auto___58602 < len__33026__auto___58601)){
args__33033__auto__.push((arguments[i__33027__auto___58602]));

var G__58603 = (i__33027__auto___58602 + (1));
i__33027__auto___58602 = G__58603;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58600))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58600){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58600);
});})(g__40422__auto___58600))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__40422__auto___58600){
return (function (seq58558){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58558));
});})(g__40422__auto___58600))
;


var g__40422__auto___58604 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__40422__auto___58604){
return (function cljs$spec$impl$gen$int(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58605 = arguments.length;
var i__33027__auto___58606 = (0);
while(true){
if((i__33027__auto___58606 < len__33026__auto___58605)){
args__33033__auto__.push((arguments[i__33027__auto___58606]));

var G__58607 = (i__33027__auto___58606 + (1));
i__33027__auto___58606 = G__58607;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58604))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58604){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58604);
});})(g__40422__auto___58604))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__40422__auto___58604){
return (function (seq58559){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58559));
});})(g__40422__auto___58604))
;


var g__40422__auto___58608 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__40422__auto___58608){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58609 = arguments.length;
var i__33027__auto___58610 = (0);
while(true){
if((i__33027__auto___58610 < len__33026__auto___58609)){
args__33033__auto__.push((arguments[i__33027__auto___58610]));

var G__58611 = (i__33027__auto___58610 + (1));
i__33027__auto___58610 = G__58611;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58608))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58608){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58608);
});})(g__40422__auto___58608))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__40422__auto___58608){
return (function (seq58560){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58560));
});})(g__40422__auto___58608))
;


var g__40422__auto___58612 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__40422__auto___58612){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58613 = arguments.length;
var i__33027__auto___58614 = (0);
while(true){
if((i__33027__auto___58614 < len__33026__auto___58613)){
args__33033__auto__.push((arguments[i__33027__auto___58614]));

var G__58615 = (i__33027__auto___58614 + (1));
i__33027__auto___58614 = G__58615;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58612))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58612){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58612);
});})(g__40422__auto___58612))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__40422__auto___58612){
return (function (seq58561){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58561));
});})(g__40422__auto___58612))
;


var g__40422__auto___58616 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__40422__auto___58616){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58617 = arguments.length;
var i__33027__auto___58618 = (0);
while(true){
if((i__33027__auto___58618 < len__33026__auto___58617)){
args__33033__auto__.push((arguments[i__33027__auto___58618]));

var G__58619 = (i__33027__auto___58618 + (1));
i__33027__auto___58618 = G__58619;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58616))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58616){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58616);
});})(g__40422__auto___58616))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__40422__auto___58616){
return (function (seq58562){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58562));
});})(g__40422__auto___58616))
;


var g__40422__auto___58620 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__40422__auto___58620){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58621 = arguments.length;
var i__33027__auto___58622 = (0);
while(true){
if((i__33027__auto___58622 < len__33026__auto___58621)){
args__33033__auto__.push((arguments[i__33027__auto___58622]));

var G__58623 = (i__33027__auto___58622 + (1));
i__33027__auto___58622 = G__58623;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58620))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58620){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58620);
});})(g__40422__auto___58620))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__40422__auto___58620){
return (function (seq58563){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58563));
});})(g__40422__auto___58620))
;


var g__40422__auto___58624 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__40422__auto___58624){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58625 = arguments.length;
var i__33027__auto___58626 = (0);
while(true){
if((i__33027__auto___58626 < len__33026__auto___58625)){
args__33033__auto__.push((arguments[i__33027__auto___58626]));

var G__58627 = (i__33027__auto___58626 + (1));
i__33027__auto___58626 = G__58627;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58624))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58624){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58624);
});})(g__40422__auto___58624))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__40422__auto___58624){
return (function (seq58564){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58564));
});})(g__40422__auto___58624))
;


var g__40422__auto___58628 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__40422__auto___58628){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58629 = arguments.length;
var i__33027__auto___58630 = (0);
while(true){
if((i__33027__auto___58630 < len__33026__auto___58629)){
args__33033__auto__.push((arguments[i__33027__auto___58630]));

var G__58631 = (i__33027__auto___58630 + (1));
i__33027__auto___58630 = G__58631;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58628))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58628){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58628);
});})(g__40422__auto___58628))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__40422__auto___58628){
return (function (seq58565){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58565));
});})(g__40422__auto___58628))
;


var g__40422__auto___58632 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__40422__auto___58632){
return (function cljs$spec$impl$gen$string(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58633 = arguments.length;
var i__33027__auto___58634 = (0);
while(true){
if((i__33027__auto___58634 < len__33026__auto___58633)){
args__33033__auto__.push((arguments[i__33027__auto___58634]));

var G__58635 = (i__33027__auto___58634 + (1));
i__33027__auto___58634 = G__58635;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58632))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58632){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58632);
});})(g__40422__auto___58632))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__40422__auto___58632){
return (function (seq58566){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58566));
});})(g__40422__auto___58632))
;


var g__40422__auto___58636 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__40422__auto___58636){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58637 = arguments.length;
var i__33027__auto___58638 = (0);
while(true){
if((i__33027__auto___58638 < len__33026__auto___58637)){
args__33033__auto__.push((arguments[i__33027__auto___58638]));

var G__58639 = (i__33027__auto___58638 + (1));
i__33027__auto___58638 = G__58639;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58636))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58636){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58636);
});})(g__40422__auto___58636))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__40422__auto___58636){
return (function (seq58567){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58567));
});})(g__40422__auto___58636))
;


var g__40422__auto___58640 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__40422__auto___58640){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58641 = arguments.length;
var i__33027__auto___58642 = (0);
while(true){
if((i__33027__auto___58642 < len__33026__auto___58641)){
args__33033__auto__.push((arguments[i__33027__auto___58642]));

var G__58643 = (i__33027__auto___58642 + (1));
i__33027__auto___58642 = G__58643;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58640))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58640){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58640);
});})(g__40422__auto___58640))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__40422__auto___58640){
return (function (seq58568){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58568));
});})(g__40422__auto___58640))
;


var g__40422__auto___58644 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__40422__auto___58644){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58645 = arguments.length;
var i__33027__auto___58646 = (0);
while(true){
if((i__33027__auto___58646 < len__33026__auto___58645)){
args__33033__auto__.push((arguments[i__33027__auto___58646]));

var G__58647 = (i__33027__auto___58646 + (1));
i__33027__auto___58646 = G__58647;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58644))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58644){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58644);
});})(g__40422__auto___58644))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__40422__auto___58644){
return (function (seq58569){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58569));
});})(g__40422__auto___58644))
;


var g__40422__auto___58648 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__40422__auto___58648){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58649 = arguments.length;
var i__33027__auto___58650 = (0);
while(true){
if((i__33027__auto___58650 < len__33026__auto___58649)){
args__33033__auto__.push((arguments[i__33027__auto___58650]));

var G__58651 = (i__33027__auto___58650 + (1));
i__33027__auto___58650 = G__58651;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58648))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58648){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58648);
});})(g__40422__auto___58648))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__40422__auto___58648){
return (function (seq58570){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58570));
});})(g__40422__auto___58648))
;


var g__40422__auto___58652 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__40422__auto___58652){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58653 = arguments.length;
var i__33027__auto___58654 = (0);
while(true){
if((i__33027__auto___58654 < len__33026__auto___58653)){
args__33033__auto__.push((arguments[i__33027__auto___58654]));

var G__58655 = (i__33027__auto___58654 + (1));
i__33027__auto___58654 = G__58655;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});})(g__40422__auto___58652))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40422__auto___58652){
return (function (args){
return cljs.core.deref.call(null,g__40422__auto___58652);
});})(g__40422__auto___58652))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__40422__auto___58652){
return (function (seq58571){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58571));
});})(g__40422__auto___58652))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__33033__auto__ = [];
var len__33026__auto___58658 = arguments.length;
var i__33027__auto___58659 = (0);
while(true){
if((i__33027__auto___58659 < len__33026__auto___58658)){
args__33033__auto__.push((arguments[i__33027__auto___58659]));

var G__58660 = (i__33027__auto___58659 + (1));
i__33027__auto___58659 = G__58660;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((0) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__33034__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__58656_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__58656_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq58657){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58657));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__58661_SHARP_){
return (new Date(p1__58661_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1491001410657