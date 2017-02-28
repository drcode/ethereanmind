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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__35580__auto__ = [];
var len__35573__auto___82959 = arguments.length;
var i__35574__auto___82960 = (0);
while(true){
if((i__35574__auto___82960 < len__35573__auto___82959)){
args__35580__auto__.push((arguments[i__35574__auto___82960]));

var G__82961 = (i__35574__auto___82960 + (1));
i__35574__auto___82960 = G__82961;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq82958){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82958));
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
var args__35580__auto__ = [];
var len__35573__auto___82963 = arguments.length;
var i__35574__auto___82964 = (0);
while(true){
if((i__35574__auto___82964 < len__35573__auto___82963)){
args__35580__auto__.push((arguments[i__35574__auto___82964]));

var G__82965 = (i__35574__auto___82964 + (1));
i__35574__auto___82964 = G__82965;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq82962){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82962));
});

var g_QMARK__82966 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_82967 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__82966){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__82966))
,null));
var mkg_82968 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__82966,g_82967){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__82966,g_82967))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__82966,g_82967,mkg_82968){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__82966).call(null,x);
});})(g_QMARK__82966,g_82967,mkg_82968))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__82966,g_82967,mkg_82968){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_82968).call(null,gfn);
});})(g_QMARK__82966,g_82967,mkg_82968))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__82966,g_82967,mkg_82968){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_82967).call(null,generator);
});})(g_QMARK__82966,g_82967,mkg_82968))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__59101__auto___82987 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__59101__auto___82987){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__35580__auto__ = [];
var len__35573__auto___82988 = arguments.length;
var i__35574__auto___82989 = (0);
while(true){
if((i__35574__auto___82989 < len__35573__auto___82988)){
args__35580__auto__.push((arguments[i__35574__auto___82989]));

var G__82990 = (i__35574__auto___82989 + (1));
i__35574__auto___82989 = G__82990;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___82987))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___82987){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___82987),args);
});})(g__59101__auto___82987))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__59101__auto___82987){
return (function (seq82969){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82969));
});})(g__59101__auto___82987))
;


var g__59101__auto___82991 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__59101__auto___82991){
return (function cljs$spec$impl$gen$list(var_args){
var args__35580__auto__ = [];
var len__35573__auto___82992 = arguments.length;
var i__35574__auto___82993 = (0);
while(true){
if((i__35574__auto___82993 < len__35573__auto___82992)){
args__35580__auto__.push((arguments[i__35574__auto___82993]));

var G__82994 = (i__35574__auto___82993 + (1));
i__35574__auto___82993 = G__82994;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___82991))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___82991){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___82991),args);
});})(g__59101__auto___82991))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__59101__auto___82991){
return (function (seq82970){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82970));
});})(g__59101__auto___82991))
;


var g__59101__auto___82995 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__59101__auto___82995){
return (function cljs$spec$impl$gen$map(var_args){
var args__35580__auto__ = [];
var len__35573__auto___82996 = arguments.length;
var i__35574__auto___82997 = (0);
while(true){
if((i__35574__auto___82997 < len__35573__auto___82996)){
args__35580__auto__.push((arguments[i__35574__auto___82997]));

var G__82998 = (i__35574__auto___82997 + (1));
i__35574__auto___82997 = G__82998;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___82995))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___82995){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___82995),args);
});})(g__59101__auto___82995))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__59101__auto___82995){
return (function (seq82971){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82971));
});})(g__59101__auto___82995))
;


var g__59101__auto___82999 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__59101__auto___82999){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83000 = arguments.length;
var i__35574__auto___83001 = (0);
while(true){
if((i__35574__auto___83001 < len__35573__auto___83000)){
args__35580__auto__.push((arguments[i__35574__auto___83001]));

var G__83002 = (i__35574__auto___83001 + (1));
i__35574__auto___83001 = G__83002;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___82999))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___82999){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___82999),args);
});})(g__59101__auto___82999))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__59101__auto___82999){
return (function (seq82972){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82972));
});})(g__59101__auto___82999))
;


var g__59101__auto___83003 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__59101__auto___83003){
return (function cljs$spec$impl$gen$set(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83004 = arguments.length;
var i__35574__auto___83005 = (0);
while(true){
if((i__35574__auto___83005 < len__35573__auto___83004)){
args__35580__auto__.push((arguments[i__35574__auto___83005]));

var G__83006 = (i__35574__auto___83005 + (1));
i__35574__auto___83005 = G__83006;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83003))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83003){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83003),args);
});})(g__59101__auto___83003))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__59101__auto___83003){
return (function (seq82973){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82973));
});})(g__59101__auto___83003))
;


var g__59101__auto___83007 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__59101__auto___83007){
return (function cljs$spec$impl$gen$vector(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83008 = arguments.length;
var i__35574__auto___83009 = (0);
while(true){
if((i__35574__auto___83009 < len__35573__auto___83008)){
args__35580__auto__.push((arguments[i__35574__auto___83009]));

var G__83010 = (i__35574__auto___83009 + (1));
i__35574__auto___83009 = G__83010;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83007))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83007){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83007),args);
});})(g__59101__auto___83007))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__59101__auto___83007){
return (function (seq82974){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82974));
});})(g__59101__auto___83007))
;


var g__59101__auto___83011 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__59101__auto___83011){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83012 = arguments.length;
var i__35574__auto___83013 = (0);
while(true){
if((i__35574__auto___83013 < len__35573__auto___83012)){
args__35580__auto__.push((arguments[i__35574__auto___83013]));

var G__83014 = (i__35574__auto___83013 + (1));
i__35574__auto___83013 = G__83014;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83011))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83011){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83011),args);
});})(g__59101__auto___83011))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__59101__auto___83011){
return (function (seq82975){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82975));
});})(g__59101__auto___83011))
;


var g__59101__auto___83015 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__59101__auto___83015){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83016 = arguments.length;
var i__35574__auto___83017 = (0);
while(true){
if((i__35574__auto___83017 < len__35573__auto___83016)){
args__35580__auto__.push((arguments[i__35574__auto___83017]));

var G__83018 = (i__35574__auto___83017 + (1));
i__35574__auto___83017 = G__83018;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83015))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83015){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83015),args);
});})(g__59101__auto___83015))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__59101__auto___83015){
return (function (seq82976){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82976));
});})(g__59101__auto___83015))
;


var g__59101__auto___83019 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__59101__auto___83019){
return (function cljs$spec$impl$gen$elements(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83020 = arguments.length;
var i__35574__auto___83021 = (0);
while(true){
if((i__35574__auto___83021 < len__35573__auto___83020)){
args__35580__auto__.push((arguments[i__35574__auto___83021]));

var G__83022 = (i__35574__auto___83021 + (1));
i__35574__auto___83021 = G__83022;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83019))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83019){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83019),args);
});})(g__59101__auto___83019))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__59101__auto___83019){
return (function (seq82977){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82977));
});})(g__59101__auto___83019))
;


var g__59101__auto___83023 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__59101__auto___83023){
return (function cljs$spec$impl$gen$bind(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83024 = arguments.length;
var i__35574__auto___83025 = (0);
while(true){
if((i__35574__auto___83025 < len__35573__auto___83024)){
args__35580__auto__.push((arguments[i__35574__auto___83025]));

var G__83026 = (i__35574__auto___83025 + (1));
i__35574__auto___83025 = G__83026;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83023))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83023){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83023),args);
});})(g__59101__auto___83023))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__59101__auto___83023){
return (function (seq82978){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82978));
});})(g__59101__auto___83023))
;


var g__59101__auto___83027 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__59101__auto___83027){
return (function cljs$spec$impl$gen$choose(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83028 = arguments.length;
var i__35574__auto___83029 = (0);
while(true){
if((i__35574__auto___83029 < len__35573__auto___83028)){
args__35580__auto__.push((arguments[i__35574__auto___83029]));

var G__83030 = (i__35574__auto___83029 + (1));
i__35574__auto___83029 = G__83030;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83027))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83027){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83027),args);
});})(g__59101__auto___83027))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__59101__auto___83027){
return (function (seq82979){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82979));
});})(g__59101__auto___83027))
;


var g__59101__auto___83031 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__59101__auto___83031){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83032 = arguments.length;
var i__35574__auto___83033 = (0);
while(true){
if((i__35574__auto___83033 < len__35573__auto___83032)){
args__35580__auto__.push((arguments[i__35574__auto___83033]));

var G__83034 = (i__35574__auto___83033 + (1));
i__35574__auto___83033 = G__83034;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83031))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83031){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83031),args);
});})(g__59101__auto___83031))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__59101__auto___83031){
return (function (seq82980){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82980));
});})(g__59101__auto___83031))
;


var g__59101__auto___83035 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__59101__auto___83035){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83036 = arguments.length;
var i__35574__auto___83037 = (0);
while(true){
if((i__35574__auto___83037 < len__35573__auto___83036)){
args__35580__auto__.push((arguments[i__35574__auto___83037]));

var G__83038 = (i__35574__auto___83037 + (1));
i__35574__auto___83037 = G__83038;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83035))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83035){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83035),args);
});})(g__59101__auto___83035))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__59101__auto___83035){
return (function (seq82981){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82981));
});})(g__59101__auto___83035))
;


var g__59101__auto___83039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__59101__auto___83039){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83040 = arguments.length;
var i__35574__auto___83041 = (0);
while(true){
if((i__35574__auto___83041 < len__35573__auto___83040)){
args__35580__auto__.push((arguments[i__35574__auto___83041]));

var G__83042 = (i__35574__auto___83041 + (1));
i__35574__auto___83041 = G__83042;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83039))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83039){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83039),args);
});})(g__59101__auto___83039))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__59101__auto___83039){
return (function (seq82982){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82982));
});})(g__59101__auto___83039))
;


var g__59101__auto___83043 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__59101__auto___83043){
return (function cljs$spec$impl$gen$sample(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83044 = arguments.length;
var i__35574__auto___83045 = (0);
while(true){
if((i__35574__auto___83045 < len__35573__auto___83044)){
args__35580__auto__.push((arguments[i__35574__auto___83045]));

var G__83046 = (i__35574__auto___83045 + (1));
i__35574__auto___83045 = G__83046;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83043))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83043){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83043),args);
});})(g__59101__auto___83043))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__59101__auto___83043){
return (function (seq82983){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82983));
});})(g__59101__auto___83043))
;


var g__59101__auto___83047 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__59101__auto___83047){
return (function cljs$spec$impl$gen$return(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83048 = arguments.length;
var i__35574__auto___83049 = (0);
while(true){
if((i__35574__auto___83049 < len__35573__auto___83048)){
args__35580__auto__.push((arguments[i__35574__auto___83049]));

var G__83050 = (i__35574__auto___83049 + (1));
i__35574__auto___83049 = G__83050;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83047))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83047){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83047),args);
});})(g__59101__auto___83047))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__59101__auto___83047){
return (function (seq82984){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82984));
});})(g__59101__auto___83047))
;


var g__59101__auto___83051 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__59101__auto___83051){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83052 = arguments.length;
var i__35574__auto___83053 = (0);
while(true){
if((i__35574__auto___83053 < len__35573__auto___83052)){
args__35580__auto__.push((arguments[i__35574__auto___83053]));

var G__83054 = (i__35574__auto___83053 + (1));
i__35574__auto___83053 = G__83054;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83051))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83051){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83051),args);
});})(g__59101__auto___83051))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__59101__auto___83051){
return (function (seq82985){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82985));
});})(g__59101__auto___83051))
;


var g__59101__auto___83055 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__59101__auto___83055){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83056 = arguments.length;
var i__35574__auto___83057 = (0);
while(true){
if((i__35574__auto___83057 < len__35573__auto___83056)){
args__35580__auto__.push((arguments[i__35574__auto___83057]));

var G__83058 = (i__35574__auto___83057 + (1));
i__35574__auto___83057 = G__83058;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59101__auto___83055))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59101__auto___83055){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__59101__auto___83055),args);
});})(g__59101__auto___83055))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__59101__auto___83055){
return (function (seq82986){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82986));
});})(g__59101__auto___83055))
;

var g__59114__auto___83080 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__59114__auto___83080){
return (function cljs$spec$impl$gen$any(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83081 = arguments.length;
var i__35574__auto___83082 = (0);
while(true){
if((i__35574__auto___83082 < len__35573__auto___83081)){
args__35580__auto__.push((arguments[i__35574__auto___83082]));

var G__83083 = (i__35574__auto___83082 + (1));
i__35574__auto___83082 = G__83083;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83080))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83080){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83080);
});})(g__59114__auto___83080))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__59114__auto___83080){
return (function (seq83059){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83059));
});})(g__59114__auto___83080))
;


var g__59114__auto___83084 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__59114__auto___83084){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83085 = arguments.length;
var i__35574__auto___83086 = (0);
while(true){
if((i__35574__auto___83086 < len__35573__auto___83085)){
args__35580__auto__.push((arguments[i__35574__auto___83086]));

var G__83087 = (i__35574__auto___83086 + (1));
i__35574__auto___83086 = G__83087;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83084))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83084){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83084);
});})(g__59114__auto___83084))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__59114__auto___83084){
return (function (seq83060){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83060));
});})(g__59114__auto___83084))
;


var g__59114__auto___83088 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__59114__auto___83088){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83089 = arguments.length;
var i__35574__auto___83090 = (0);
while(true){
if((i__35574__auto___83090 < len__35573__auto___83089)){
args__35580__auto__.push((arguments[i__35574__auto___83090]));

var G__83091 = (i__35574__auto___83090 + (1));
i__35574__auto___83090 = G__83091;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83088))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83088){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83088);
});})(g__59114__auto___83088))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__59114__auto___83088){
return (function (seq83061){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83061));
});})(g__59114__auto___83088))
;


var g__59114__auto___83092 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__59114__auto___83092){
return (function cljs$spec$impl$gen$char(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83093 = arguments.length;
var i__35574__auto___83094 = (0);
while(true){
if((i__35574__auto___83094 < len__35573__auto___83093)){
args__35580__auto__.push((arguments[i__35574__auto___83094]));

var G__83095 = (i__35574__auto___83094 + (1));
i__35574__auto___83094 = G__83095;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83092))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83092){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83092);
});})(g__59114__auto___83092))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__59114__auto___83092){
return (function (seq83062){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83062));
});})(g__59114__auto___83092))
;


var g__59114__auto___83096 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__59114__auto___83096){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83097 = arguments.length;
var i__35574__auto___83098 = (0);
while(true){
if((i__35574__auto___83098 < len__35573__auto___83097)){
args__35580__auto__.push((arguments[i__35574__auto___83098]));

var G__83099 = (i__35574__auto___83098 + (1));
i__35574__auto___83098 = G__83099;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83096))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83096){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83096);
});})(g__59114__auto___83096))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__59114__auto___83096){
return (function (seq83063){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83063));
});})(g__59114__auto___83096))
;


var g__59114__auto___83100 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__59114__auto___83100){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83101 = arguments.length;
var i__35574__auto___83102 = (0);
while(true){
if((i__35574__auto___83102 < len__35573__auto___83101)){
args__35580__auto__.push((arguments[i__35574__auto___83102]));

var G__83103 = (i__35574__auto___83102 + (1));
i__35574__auto___83102 = G__83103;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83100))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83100){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83100);
});})(g__59114__auto___83100))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__59114__auto___83100){
return (function (seq83064){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83064));
});})(g__59114__auto___83100))
;


var g__59114__auto___83104 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__59114__auto___83104){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83105 = arguments.length;
var i__35574__auto___83106 = (0);
while(true){
if((i__35574__auto___83106 < len__35573__auto___83105)){
args__35580__auto__.push((arguments[i__35574__auto___83106]));

var G__83107 = (i__35574__auto___83106 + (1));
i__35574__auto___83106 = G__83107;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83104))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83104){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83104);
});})(g__59114__auto___83104))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__59114__auto___83104){
return (function (seq83065){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83065));
});})(g__59114__auto___83104))
;


var g__59114__auto___83108 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__59114__auto___83108){
return (function cljs$spec$impl$gen$double(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83109 = arguments.length;
var i__35574__auto___83110 = (0);
while(true){
if((i__35574__auto___83110 < len__35573__auto___83109)){
args__35580__auto__.push((arguments[i__35574__auto___83110]));

var G__83111 = (i__35574__auto___83110 + (1));
i__35574__auto___83110 = G__83111;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83108))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83108){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83108);
});})(g__59114__auto___83108))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__59114__auto___83108){
return (function (seq83066){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83066));
});})(g__59114__auto___83108))
;


var g__59114__auto___83112 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__59114__auto___83112){
return (function cljs$spec$impl$gen$int(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83113 = arguments.length;
var i__35574__auto___83114 = (0);
while(true){
if((i__35574__auto___83114 < len__35573__auto___83113)){
args__35580__auto__.push((arguments[i__35574__auto___83114]));

var G__83115 = (i__35574__auto___83114 + (1));
i__35574__auto___83114 = G__83115;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83112))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83112){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83112);
});})(g__59114__auto___83112))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__59114__auto___83112){
return (function (seq83067){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83067));
});})(g__59114__auto___83112))
;


var g__59114__auto___83116 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__59114__auto___83116){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83117 = arguments.length;
var i__35574__auto___83118 = (0);
while(true){
if((i__35574__auto___83118 < len__35573__auto___83117)){
args__35580__auto__.push((arguments[i__35574__auto___83118]));

var G__83119 = (i__35574__auto___83118 + (1));
i__35574__auto___83118 = G__83119;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83116))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83116){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83116);
});})(g__59114__auto___83116))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__59114__auto___83116){
return (function (seq83068){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83068));
});})(g__59114__auto___83116))
;


var g__59114__auto___83120 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__59114__auto___83120){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83121 = arguments.length;
var i__35574__auto___83122 = (0);
while(true){
if((i__35574__auto___83122 < len__35573__auto___83121)){
args__35580__auto__.push((arguments[i__35574__auto___83122]));

var G__83123 = (i__35574__auto___83122 + (1));
i__35574__auto___83122 = G__83123;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83120))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83120){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83120);
});})(g__59114__auto___83120))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__59114__auto___83120){
return (function (seq83069){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83069));
});})(g__59114__auto___83120))
;


var g__59114__auto___83124 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__59114__auto___83124){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83125 = arguments.length;
var i__35574__auto___83126 = (0);
while(true){
if((i__35574__auto___83126 < len__35573__auto___83125)){
args__35580__auto__.push((arguments[i__35574__auto___83126]));

var G__83127 = (i__35574__auto___83126 + (1));
i__35574__auto___83126 = G__83127;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83124))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83124){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83124);
});})(g__59114__auto___83124))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__59114__auto___83124){
return (function (seq83070){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83070));
});})(g__59114__auto___83124))
;


var g__59114__auto___83128 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__59114__auto___83128){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83129 = arguments.length;
var i__35574__auto___83130 = (0);
while(true){
if((i__35574__auto___83130 < len__35573__auto___83129)){
args__35580__auto__.push((arguments[i__35574__auto___83130]));

var G__83131 = (i__35574__auto___83130 + (1));
i__35574__auto___83130 = G__83131;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83128))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83128){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83128);
});})(g__59114__auto___83128))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__59114__auto___83128){
return (function (seq83071){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83071));
});})(g__59114__auto___83128))
;


var g__59114__auto___83132 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__59114__auto___83132){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83133 = arguments.length;
var i__35574__auto___83134 = (0);
while(true){
if((i__35574__auto___83134 < len__35573__auto___83133)){
args__35580__auto__.push((arguments[i__35574__auto___83134]));

var G__83135 = (i__35574__auto___83134 + (1));
i__35574__auto___83134 = G__83135;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83132))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83132){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83132);
});})(g__59114__auto___83132))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__59114__auto___83132){
return (function (seq83072){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83072));
});})(g__59114__auto___83132))
;


var g__59114__auto___83136 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__59114__auto___83136){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83137 = arguments.length;
var i__35574__auto___83138 = (0);
while(true){
if((i__35574__auto___83138 < len__35573__auto___83137)){
args__35580__auto__.push((arguments[i__35574__auto___83138]));

var G__83139 = (i__35574__auto___83138 + (1));
i__35574__auto___83138 = G__83139;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83136))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83136){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83136);
});})(g__59114__auto___83136))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__59114__auto___83136){
return (function (seq83073){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83073));
});})(g__59114__auto___83136))
;


var g__59114__auto___83140 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__59114__auto___83140){
return (function cljs$spec$impl$gen$string(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83141 = arguments.length;
var i__35574__auto___83142 = (0);
while(true){
if((i__35574__auto___83142 < len__35573__auto___83141)){
args__35580__auto__.push((arguments[i__35574__auto___83142]));

var G__83143 = (i__35574__auto___83142 + (1));
i__35574__auto___83142 = G__83143;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83140))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83140){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83140);
});})(g__59114__auto___83140))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__59114__auto___83140){
return (function (seq83074){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83074));
});})(g__59114__auto___83140))
;


var g__59114__auto___83144 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__59114__auto___83144){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83145 = arguments.length;
var i__35574__auto___83146 = (0);
while(true){
if((i__35574__auto___83146 < len__35573__auto___83145)){
args__35580__auto__.push((arguments[i__35574__auto___83146]));

var G__83147 = (i__35574__auto___83146 + (1));
i__35574__auto___83146 = G__83147;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83144))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83144){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83144);
});})(g__59114__auto___83144))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__59114__auto___83144){
return (function (seq83075){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83075));
});})(g__59114__auto___83144))
;


var g__59114__auto___83148 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__59114__auto___83148){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83149 = arguments.length;
var i__35574__auto___83150 = (0);
while(true){
if((i__35574__auto___83150 < len__35573__auto___83149)){
args__35580__auto__.push((arguments[i__35574__auto___83150]));

var G__83151 = (i__35574__auto___83150 + (1));
i__35574__auto___83150 = G__83151;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83148))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83148){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83148);
});})(g__59114__auto___83148))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__59114__auto___83148){
return (function (seq83076){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83076));
});})(g__59114__auto___83148))
;


var g__59114__auto___83152 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__59114__auto___83152){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83153 = arguments.length;
var i__35574__auto___83154 = (0);
while(true){
if((i__35574__auto___83154 < len__35573__auto___83153)){
args__35580__auto__.push((arguments[i__35574__auto___83154]));

var G__83155 = (i__35574__auto___83154 + (1));
i__35574__auto___83154 = G__83155;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83152))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83152){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83152);
});})(g__59114__auto___83152))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__59114__auto___83152){
return (function (seq83077){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83077));
});})(g__59114__auto___83152))
;


var g__59114__auto___83156 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__59114__auto___83156){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83157 = arguments.length;
var i__35574__auto___83158 = (0);
while(true){
if((i__35574__auto___83158 < len__35573__auto___83157)){
args__35580__auto__.push((arguments[i__35574__auto___83158]));

var G__83159 = (i__35574__auto___83158 + (1));
i__35574__auto___83158 = G__83159;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83156))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83156){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83156);
});})(g__59114__auto___83156))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__59114__auto___83156){
return (function (seq83078){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83078));
});})(g__59114__auto___83156))
;


var g__59114__auto___83160 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__59114__auto___83160){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83161 = arguments.length;
var i__35574__auto___83162 = (0);
while(true){
if((i__35574__auto___83162 < len__35573__auto___83161)){
args__35580__auto__.push((arguments[i__35574__auto___83162]));

var G__83163 = (i__35574__auto___83162 + (1));
i__35574__auto___83162 = G__83163;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});})(g__59114__auto___83160))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__59114__auto___83160){
return (function (args){
return cljs.core.deref.call(null,g__59114__auto___83160);
});})(g__59114__auto___83160))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__59114__auto___83160){
return (function (seq83079){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83079));
});})(g__59114__auto___83160))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__35580__auto__ = [];
var len__35573__auto___83166 = arguments.length;
var i__35574__auto___83167 = (0);
while(true){
if((i__35574__auto___83167 < len__35573__auto___83166)){
args__35580__auto__.push((arguments[i__35574__auto___83167]));

var G__83168 = (i__35574__auto___83167 + (1));
i__35574__auto___83167 = G__83168;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((0) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__35581__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__83164_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__83164_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq83165){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83165));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__83169_SHARP_){
return (new Date(p1__83169_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1488154332914