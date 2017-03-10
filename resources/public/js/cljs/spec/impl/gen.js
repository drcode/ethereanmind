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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__35417__auto__ = [];
var len__35410__auto___65298 = arguments.length;
var i__35411__auto___65299 = (0);
while(true){
if((i__35411__auto___65299 < len__35410__auto___65298)){
args__35417__auto__.push((arguments[i__35411__auto___65299]));

var G__65300 = (i__35411__auto___65299 + (1));
i__35411__auto___65299 = G__65300;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq65297){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65297));
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
var args__35417__auto__ = [];
var len__35410__auto___65302 = arguments.length;
var i__35411__auto___65303 = (0);
while(true){
if((i__35411__auto___65303 < len__35410__auto___65302)){
args__35417__auto__.push((arguments[i__35411__auto___65303]));

var G__65304 = (i__35411__auto___65303 + (1));
i__35411__auto___65303 = G__65304;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq65301){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65301));
});

var g_QMARK__65305 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_65306 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__65305){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__65305))
,null));
var mkg_65307 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__65305,g_65306){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__65305,g_65306))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__65305,g_65306,mkg_65307){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__65305).call(null,x);
});})(g_QMARK__65305,g_65306,mkg_65307))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__65305,g_65306,mkg_65307){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_65307).call(null,gfn);
});})(g_QMARK__65305,g_65306,mkg_65307))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__65305,g_65306,mkg_65307){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_65306).call(null,generator);
});})(g_QMARK__65305,g_65306,mkg_65307))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__45080__auto___65326 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__45080__auto___65326){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65327 = arguments.length;
var i__35411__auto___65328 = (0);
while(true){
if((i__35411__auto___65328 < len__35410__auto___65327)){
args__35417__auto__.push((arguments[i__35411__auto___65328]));

var G__65329 = (i__35411__auto___65328 + (1));
i__35411__auto___65328 = G__65329;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65326))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65326){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65326),args);
});})(g__45080__auto___65326))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__45080__auto___65326){
return (function (seq65308){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65308));
});})(g__45080__auto___65326))
;


var g__45080__auto___65330 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__45080__auto___65330){
return (function cljs$spec$impl$gen$list(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65331 = arguments.length;
var i__35411__auto___65332 = (0);
while(true){
if((i__35411__auto___65332 < len__35410__auto___65331)){
args__35417__auto__.push((arguments[i__35411__auto___65332]));

var G__65333 = (i__35411__auto___65332 + (1));
i__35411__auto___65332 = G__65333;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65330))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65330){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65330),args);
});})(g__45080__auto___65330))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__45080__auto___65330){
return (function (seq65309){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65309));
});})(g__45080__auto___65330))
;


var g__45080__auto___65334 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__45080__auto___65334){
return (function cljs$spec$impl$gen$map(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65335 = arguments.length;
var i__35411__auto___65336 = (0);
while(true){
if((i__35411__auto___65336 < len__35410__auto___65335)){
args__35417__auto__.push((arguments[i__35411__auto___65336]));

var G__65337 = (i__35411__auto___65336 + (1));
i__35411__auto___65336 = G__65337;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65334))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65334){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65334),args);
});})(g__45080__auto___65334))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__45080__auto___65334){
return (function (seq65310){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65310));
});})(g__45080__auto___65334))
;


var g__45080__auto___65338 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__45080__auto___65338){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65339 = arguments.length;
var i__35411__auto___65340 = (0);
while(true){
if((i__35411__auto___65340 < len__35410__auto___65339)){
args__35417__auto__.push((arguments[i__35411__auto___65340]));

var G__65341 = (i__35411__auto___65340 + (1));
i__35411__auto___65340 = G__65341;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65338))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65338){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65338),args);
});})(g__45080__auto___65338))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__45080__auto___65338){
return (function (seq65311){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65311));
});})(g__45080__auto___65338))
;


var g__45080__auto___65342 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__45080__auto___65342){
return (function cljs$spec$impl$gen$set(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65343 = arguments.length;
var i__35411__auto___65344 = (0);
while(true){
if((i__35411__auto___65344 < len__35410__auto___65343)){
args__35417__auto__.push((arguments[i__35411__auto___65344]));

var G__65345 = (i__35411__auto___65344 + (1));
i__35411__auto___65344 = G__65345;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65342))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65342){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65342),args);
});})(g__45080__auto___65342))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__45080__auto___65342){
return (function (seq65312){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65312));
});})(g__45080__auto___65342))
;


var g__45080__auto___65346 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__45080__auto___65346){
return (function cljs$spec$impl$gen$vector(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65347 = arguments.length;
var i__35411__auto___65348 = (0);
while(true){
if((i__35411__auto___65348 < len__35410__auto___65347)){
args__35417__auto__.push((arguments[i__35411__auto___65348]));

var G__65349 = (i__35411__auto___65348 + (1));
i__35411__auto___65348 = G__65349;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65346))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65346){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65346),args);
});})(g__45080__auto___65346))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__45080__auto___65346){
return (function (seq65313){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65313));
});})(g__45080__auto___65346))
;


var g__45080__auto___65350 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__45080__auto___65350){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65351 = arguments.length;
var i__35411__auto___65352 = (0);
while(true){
if((i__35411__auto___65352 < len__35410__auto___65351)){
args__35417__auto__.push((arguments[i__35411__auto___65352]));

var G__65353 = (i__35411__auto___65352 + (1));
i__35411__auto___65352 = G__65353;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65350))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65350){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65350),args);
});})(g__45080__auto___65350))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__45080__auto___65350){
return (function (seq65314){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65314));
});})(g__45080__auto___65350))
;


var g__45080__auto___65354 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__45080__auto___65354){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65355 = arguments.length;
var i__35411__auto___65356 = (0);
while(true){
if((i__35411__auto___65356 < len__35410__auto___65355)){
args__35417__auto__.push((arguments[i__35411__auto___65356]));

var G__65357 = (i__35411__auto___65356 + (1));
i__35411__auto___65356 = G__65357;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65354))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65354){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65354),args);
});})(g__45080__auto___65354))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__45080__auto___65354){
return (function (seq65315){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65315));
});})(g__45080__auto___65354))
;


var g__45080__auto___65358 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__45080__auto___65358){
return (function cljs$spec$impl$gen$elements(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65359 = arguments.length;
var i__35411__auto___65360 = (0);
while(true){
if((i__35411__auto___65360 < len__35410__auto___65359)){
args__35417__auto__.push((arguments[i__35411__auto___65360]));

var G__65361 = (i__35411__auto___65360 + (1));
i__35411__auto___65360 = G__65361;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65358))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65358){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65358),args);
});})(g__45080__auto___65358))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__45080__auto___65358){
return (function (seq65316){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65316));
});})(g__45080__auto___65358))
;


var g__45080__auto___65362 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__45080__auto___65362){
return (function cljs$spec$impl$gen$bind(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65363 = arguments.length;
var i__35411__auto___65364 = (0);
while(true){
if((i__35411__auto___65364 < len__35410__auto___65363)){
args__35417__auto__.push((arguments[i__35411__auto___65364]));

var G__65365 = (i__35411__auto___65364 + (1));
i__35411__auto___65364 = G__65365;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65362))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65362){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65362),args);
});})(g__45080__auto___65362))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__45080__auto___65362){
return (function (seq65317){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65317));
});})(g__45080__auto___65362))
;


var g__45080__auto___65366 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__45080__auto___65366){
return (function cljs$spec$impl$gen$choose(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65367 = arguments.length;
var i__35411__auto___65368 = (0);
while(true){
if((i__35411__auto___65368 < len__35410__auto___65367)){
args__35417__auto__.push((arguments[i__35411__auto___65368]));

var G__65369 = (i__35411__auto___65368 + (1));
i__35411__auto___65368 = G__65369;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65366))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65366){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65366),args);
});})(g__45080__auto___65366))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__45080__auto___65366){
return (function (seq65318){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65318));
});})(g__45080__auto___65366))
;


var g__45080__auto___65370 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__45080__auto___65370){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65371 = arguments.length;
var i__35411__auto___65372 = (0);
while(true){
if((i__35411__auto___65372 < len__35410__auto___65371)){
args__35417__auto__.push((arguments[i__35411__auto___65372]));

var G__65373 = (i__35411__auto___65372 + (1));
i__35411__auto___65372 = G__65373;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65370))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65370){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65370),args);
});})(g__45080__auto___65370))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__45080__auto___65370){
return (function (seq65319){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65319));
});})(g__45080__auto___65370))
;


var g__45080__auto___65374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__45080__auto___65374){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65375 = arguments.length;
var i__35411__auto___65376 = (0);
while(true){
if((i__35411__auto___65376 < len__35410__auto___65375)){
args__35417__auto__.push((arguments[i__35411__auto___65376]));

var G__65377 = (i__35411__auto___65376 + (1));
i__35411__auto___65376 = G__65377;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65374))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65374){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65374),args);
});})(g__45080__auto___65374))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__45080__auto___65374){
return (function (seq65320){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65320));
});})(g__45080__auto___65374))
;


var g__45080__auto___65378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__45080__auto___65378){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65379 = arguments.length;
var i__35411__auto___65380 = (0);
while(true){
if((i__35411__auto___65380 < len__35410__auto___65379)){
args__35417__auto__.push((arguments[i__35411__auto___65380]));

var G__65381 = (i__35411__auto___65380 + (1));
i__35411__auto___65380 = G__65381;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65378))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65378){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65378),args);
});})(g__45080__auto___65378))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__45080__auto___65378){
return (function (seq65321){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65321));
});})(g__45080__auto___65378))
;


var g__45080__auto___65382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__45080__auto___65382){
return (function cljs$spec$impl$gen$sample(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65383 = arguments.length;
var i__35411__auto___65384 = (0);
while(true){
if((i__35411__auto___65384 < len__35410__auto___65383)){
args__35417__auto__.push((arguments[i__35411__auto___65384]));

var G__65385 = (i__35411__auto___65384 + (1));
i__35411__auto___65384 = G__65385;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65382))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65382){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65382),args);
});})(g__45080__auto___65382))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__45080__auto___65382){
return (function (seq65322){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65322));
});})(g__45080__auto___65382))
;


var g__45080__auto___65386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__45080__auto___65386){
return (function cljs$spec$impl$gen$return(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65387 = arguments.length;
var i__35411__auto___65388 = (0);
while(true){
if((i__35411__auto___65388 < len__35410__auto___65387)){
args__35417__auto__.push((arguments[i__35411__auto___65388]));

var G__65389 = (i__35411__auto___65388 + (1));
i__35411__auto___65388 = G__65389;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65386))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65386){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65386),args);
});})(g__45080__auto___65386))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__45080__auto___65386){
return (function (seq65323){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65323));
});})(g__45080__auto___65386))
;


var g__45080__auto___65390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__45080__auto___65390){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65391 = arguments.length;
var i__35411__auto___65392 = (0);
while(true){
if((i__35411__auto___65392 < len__35410__auto___65391)){
args__35417__auto__.push((arguments[i__35411__auto___65392]));

var G__65393 = (i__35411__auto___65392 + (1));
i__35411__auto___65392 = G__65393;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65390))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65390){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65390),args);
});})(g__45080__auto___65390))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__45080__auto___65390){
return (function (seq65324){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65324));
});})(g__45080__auto___65390))
;


var g__45080__auto___65394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__45080__auto___65394){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65395 = arguments.length;
var i__35411__auto___65396 = (0);
while(true){
if((i__35411__auto___65396 < len__35410__auto___65395)){
args__35417__auto__.push((arguments[i__35411__auto___65396]));

var G__65397 = (i__35411__auto___65396 + (1));
i__35411__auto___65396 = G__65397;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45080__auto___65394))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45080__auto___65394){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45080__auto___65394),args);
});})(g__45080__auto___65394))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__45080__auto___65394){
return (function (seq65325){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65325));
});})(g__45080__auto___65394))
;

var g__45093__auto___65419 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__45093__auto___65419){
return (function cljs$spec$impl$gen$any(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65420 = arguments.length;
var i__35411__auto___65421 = (0);
while(true){
if((i__35411__auto___65421 < len__35410__auto___65420)){
args__35417__auto__.push((arguments[i__35411__auto___65421]));

var G__65422 = (i__35411__auto___65421 + (1));
i__35411__auto___65421 = G__65422;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65419))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65419){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65419);
});})(g__45093__auto___65419))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__45093__auto___65419){
return (function (seq65398){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65398));
});})(g__45093__auto___65419))
;


var g__45093__auto___65423 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__45093__auto___65423){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65424 = arguments.length;
var i__35411__auto___65425 = (0);
while(true){
if((i__35411__auto___65425 < len__35410__auto___65424)){
args__35417__auto__.push((arguments[i__35411__auto___65425]));

var G__65426 = (i__35411__auto___65425 + (1));
i__35411__auto___65425 = G__65426;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65423))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65423){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65423);
});})(g__45093__auto___65423))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__45093__auto___65423){
return (function (seq65399){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65399));
});})(g__45093__auto___65423))
;


var g__45093__auto___65427 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__45093__auto___65427){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65428 = arguments.length;
var i__35411__auto___65429 = (0);
while(true){
if((i__35411__auto___65429 < len__35410__auto___65428)){
args__35417__auto__.push((arguments[i__35411__auto___65429]));

var G__65430 = (i__35411__auto___65429 + (1));
i__35411__auto___65429 = G__65430;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65427))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65427){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65427);
});})(g__45093__auto___65427))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__45093__auto___65427){
return (function (seq65400){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65400));
});})(g__45093__auto___65427))
;


var g__45093__auto___65431 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__45093__auto___65431){
return (function cljs$spec$impl$gen$char(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65432 = arguments.length;
var i__35411__auto___65433 = (0);
while(true){
if((i__35411__auto___65433 < len__35410__auto___65432)){
args__35417__auto__.push((arguments[i__35411__auto___65433]));

var G__65434 = (i__35411__auto___65433 + (1));
i__35411__auto___65433 = G__65434;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65431))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65431){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65431);
});})(g__45093__auto___65431))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__45093__auto___65431){
return (function (seq65401){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65401));
});})(g__45093__auto___65431))
;


var g__45093__auto___65435 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__45093__auto___65435){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65436 = arguments.length;
var i__35411__auto___65437 = (0);
while(true){
if((i__35411__auto___65437 < len__35410__auto___65436)){
args__35417__auto__.push((arguments[i__35411__auto___65437]));

var G__65438 = (i__35411__auto___65437 + (1));
i__35411__auto___65437 = G__65438;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65435))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65435){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65435);
});})(g__45093__auto___65435))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__45093__auto___65435){
return (function (seq65402){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65402));
});})(g__45093__auto___65435))
;


var g__45093__auto___65439 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__45093__auto___65439){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65440 = arguments.length;
var i__35411__auto___65441 = (0);
while(true){
if((i__35411__auto___65441 < len__35410__auto___65440)){
args__35417__auto__.push((arguments[i__35411__auto___65441]));

var G__65442 = (i__35411__auto___65441 + (1));
i__35411__auto___65441 = G__65442;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65439))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65439){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65439);
});})(g__45093__auto___65439))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__45093__auto___65439){
return (function (seq65403){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65403));
});})(g__45093__auto___65439))
;


var g__45093__auto___65443 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__45093__auto___65443){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65444 = arguments.length;
var i__35411__auto___65445 = (0);
while(true){
if((i__35411__auto___65445 < len__35410__auto___65444)){
args__35417__auto__.push((arguments[i__35411__auto___65445]));

var G__65446 = (i__35411__auto___65445 + (1));
i__35411__auto___65445 = G__65446;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65443))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65443){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65443);
});})(g__45093__auto___65443))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__45093__auto___65443){
return (function (seq65404){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65404));
});})(g__45093__auto___65443))
;


var g__45093__auto___65447 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__45093__auto___65447){
return (function cljs$spec$impl$gen$double(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65448 = arguments.length;
var i__35411__auto___65449 = (0);
while(true){
if((i__35411__auto___65449 < len__35410__auto___65448)){
args__35417__auto__.push((arguments[i__35411__auto___65449]));

var G__65450 = (i__35411__auto___65449 + (1));
i__35411__auto___65449 = G__65450;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65447))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65447){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65447);
});})(g__45093__auto___65447))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__45093__auto___65447){
return (function (seq65405){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65405));
});})(g__45093__auto___65447))
;


var g__45093__auto___65451 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__45093__auto___65451){
return (function cljs$spec$impl$gen$int(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65452 = arguments.length;
var i__35411__auto___65453 = (0);
while(true){
if((i__35411__auto___65453 < len__35410__auto___65452)){
args__35417__auto__.push((arguments[i__35411__auto___65453]));

var G__65454 = (i__35411__auto___65453 + (1));
i__35411__auto___65453 = G__65454;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65451))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65451){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65451);
});})(g__45093__auto___65451))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__45093__auto___65451){
return (function (seq65406){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65406));
});})(g__45093__auto___65451))
;


var g__45093__auto___65455 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__45093__auto___65455){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65456 = arguments.length;
var i__35411__auto___65457 = (0);
while(true){
if((i__35411__auto___65457 < len__35410__auto___65456)){
args__35417__auto__.push((arguments[i__35411__auto___65457]));

var G__65458 = (i__35411__auto___65457 + (1));
i__35411__auto___65457 = G__65458;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65455))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65455){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65455);
});})(g__45093__auto___65455))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__45093__auto___65455){
return (function (seq65407){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65407));
});})(g__45093__auto___65455))
;


var g__45093__auto___65459 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__45093__auto___65459){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65460 = arguments.length;
var i__35411__auto___65461 = (0);
while(true){
if((i__35411__auto___65461 < len__35410__auto___65460)){
args__35417__auto__.push((arguments[i__35411__auto___65461]));

var G__65462 = (i__35411__auto___65461 + (1));
i__35411__auto___65461 = G__65462;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65459))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65459){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65459);
});})(g__45093__auto___65459))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__45093__auto___65459){
return (function (seq65408){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65408));
});})(g__45093__auto___65459))
;


var g__45093__auto___65463 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__45093__auto___65463){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65464 = arguments.length;
var i__35411__auto___65465 = (0);
while(true){
if((i__35411__auto___65465 < len__35410__auto___65464)){
args__35417__auto__.push((arguments[i__35411__auto___65465]));

var G__65466 = (i__35411__auto___65465 + (1));
i__35411__auto___65465 = G__65466;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65463))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65463){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65463);
});})(g__45093__auto___65463))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__45093__auto___65463){
return (function (seq65409){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65409));
});})(g__45093__auto___65463))
;


var g__45093__auto___65467 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__45093__auto___65467){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65468 = arguments.length;
var i__35411__auto___65469 = (0);
while(true){
if((i__35411__auto___65469 < len__35410__auto___65468)){
args__35417__auto__.push((arguments[i__35411__auto___65469]));

var G__65470 = (i__35411__auto___65469 + (1));
i__35411__auto___65469 = G__65470;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65467))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65467){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65467);
});})(g__45093__auto___65467))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__45093__auto___65467){
return (function (seq65410){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65410));
});})(g__45093__auto___65467))
;


var g__45093__auto___65471 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__45093__auto___65471){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65472 = arguments.length;
var i__35411__auto___65473 = (0);
while(true){
if((i__35411__auto___65473 < len__35410__auto___65472)){
args__35417__auto__.push((arguments[i__35411__auto___65473]));

var G__65474 = (i__35411__auto___65473 + (1));
i__35411__auto___65473 = G__65474;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65471))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65471){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65471);
});})(g__45093__auto___65471))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__45093__auto___65471){
return (function (seq65411){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65411));
});})(g__45093__auto___65471))
;


var g__45093__auto___65475 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__45093__auto___65475){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65476 = arguments.length;
var i__35411__auto___65477 = (0);
while(true){
if((i__35411__auto___65477 < len__35410__auto___65476)){
args__35417__auto__.push((arguments[i__35411__auto___65477]));

var G__65478 = (i__35411__auto___65477 + (1));
i__35411__auto___65477 = G__65478;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65475))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65475){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65475);
});})(g__45093__auto___65475))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__45093__auto___65475){
return (function (seq65412){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65412));
});})(g__45093__auto___65475))
;


var g__45093__auto___65479 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__45093__auto___65479){
return (function cljs$spec$impl$gen$string(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65480 = arguments.length;
var i__35411__auto___65481 = (0);
while(true){
if((i__35411__auto___65481 < len__35410__auto___65480)){
args__35417__auto__.push((arguments[i__35411__auto___65481]));

var G__65482 = (i__35411__auto___65481 + (1));
i__35411__auto___65481 = G__65482;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65479))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65479){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65479);
});})(g__45093__auto___65479))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__45093__auto___65479){
return (function (seq65413){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65413));
});})(g__45093__auto___65479))
;


var g__45093__auto___65483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__45093__auto___65483){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65484 = arguments.length;
var i__35411__auto___65485 = (0);
while(true){
if((i__35411__auto___65485 < len__35410__auto___65484)){
args__35417__auto__.push((arguments[i__35411__auto___65485]));

var G__65486 = (i__35411__auto___65485 + (1));
i__35411__auto___65485 = G__65486;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65483))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65483){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65483);
});})(g__45093__auto___65483))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__45093__auto___65483){
return (function (seq65414){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65414));
});})(g__45093__auto___65483))
;


var g__45093__auto___65487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__45093__auto___65487){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65488 = arguments.length;
var i__35411__auto___65489 = (0);
while(true){
if((i__35411__auto___65489 < len__35410__auto___65488)){
args__35417__auto__.push((arguments[i__35411__auto___65489]));

var G__65490 = (i__35411__auto___65489 + (1));
i__35411__auto___65489 = G__65490;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65487))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65487){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65487);
});})(g__45093__auto___65487))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__45093__auto___65487){
return (function (seq65415){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65415));
});})(g__45093__auto___65487))
;


var g__45093__auto___65491 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__45093__auto___65491){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65492 = arguments.length;
var i__35411__auto___65493 = (0);
while(true){
if((i__35411__auto___65493 < len__35410__auto___65492)){
args__35417__auto__.push((arguments[i__35411__auto___65493]));

var G__65494 = (i__35411__auto___65493 + (1));
i__35411__auto___65493 = G__65494;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65491))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65491){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65491);
});})(g__45093__auto___65491))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__45093__auto___65491){
return (function (seq65416){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65416));
});})(g__45093__auto___65491))
;


var g__45093__auto___65495 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__45093__auto___65495){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65496 = arguments.length;
var i__35411__auto___65497 = (0);
while(true){
if((i__35411__auto___65497 < len__35410__auto___65496)){
args__35417__auto__.push((arguments[i__35411__auto___65497]));

var G__65498 = (i__35411__auto___65497 + (1));
i__35411__auto___65497 = G__65498;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65495))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65495){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65495);
});})(g__45093__auto___65495))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__45093__auto___65495){
return (function (seq65417){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65417));
});})(g__45093__auto___65495))
;


var g__45093__auto___65499 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__45093__auto___65499){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65500 = arguments.length;
var i__35411__auto___65501 = (0);
while(true){
if((i__35411__auto___65501 < len__35410__auto___65500)){
args__35417__auto__.push((arguments[i__35411__auto___65501]));

var G__65502 = (i__35411__auto___65501 + (1));
i__35411__auto___65501 = G__65502;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});})(g__45093__auto___65499))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45093__auto___65499){
return (function (args){
return cljs.core.deref.call(null,g__45093__auto___65499);
});})(g__45093__auto___65499))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__45093__auto___65499){
return (function (seq65418){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65418));
});})(g__45093__auto___65499))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__35417__auto__ = [];
var len__35410__auto___65505 = arguments.length;
var i__35411__auto___65506 = (0);
while(true){
if((i__35411__auto___65506 < len__35410__auto___65505)){
args__35417__auto__.push((arguments[i__35411__auto___65506]));

var G__65507 = (i__35411__auto___65506 + (1));
i__35411__auto___65506 = G__65507;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((0) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__35418__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__65503_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__65503_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq65504){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65504));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__65508_SHARP_){
return (new Date(p1__65508_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1489120093800