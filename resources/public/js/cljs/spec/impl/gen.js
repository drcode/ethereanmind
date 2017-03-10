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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__32961__auto__ = [];
var len__32954__auto___73885 = arguments.length;
var i__32955__auto___73886 = (0);
while(true){
if((i__32955__auto___73886 < len__32954__auto___73885)){
args__32961__auto__.push((arguments[i__32955__auto___73886]));

var G__73887 = (i__32955__auto___73886 + (1));
i__32955__auto___73886 = G__73887;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq73884){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73884));
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
var args__32961__auto__ = [];
var len__32954__auto___73889 = arguments.length;
var i__32955__auto___73890 = (0);
while(true){
if((i__32955__auto___73890 < len__32954__auto___73889)){
args__32961__auto__.push((arguments[i__32955__auto___73890]));

var G__73891 = (i__32955__auto___73890 + (1));
i__32955__auto___73890 = G__73891;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq73888){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73888));
});

var g_QMARK__73892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_73893 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__73892){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__73892))
,null));
var mkg_73894 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__73892,g_73893){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__73892,g_73893))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__73892,g_73893,mkg_73894){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__73892).call(null,x);
});})(g_QMARK__73892,g_73893,mkg_73894))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__73892,g_73893,mkg_73894){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_73894).call(null,gfn);
});})(g_QMARK__73892,g_73893,mkg_73894))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__73892,g_73893,mkg_73894){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_73893).call(null,generator);
});})(g_QMARK__73892,g_73893,mkg_73894))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__55148__auto___73913 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__55148__auto___73913){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73914 = arguments.length;
var i__32955__auto___73915 = (0);
while(true){
if((i__32955__auto___73915 < len__32954__auto___73914)){
args__32961__auto__.push((arguments[i__32955__auto___73915]));

var G__73916 = (i__32955__auto___73915 + (1));
i__32955__auto___73915 = G__73916;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73913))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73913){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73913),args);
});})(g__55148__auto___73913))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__55148__auto___73913){
return (function (seq73895){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73895));
});})(g__55148__auto___73913))
;


var g__55148__auto___73917 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__55148__auto___73917){
return (function cljs$spec$impl$gen$list(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73918 = arguments.length;
var i__32955__auto___73919 = (0);
while(true){
if((i__32955__auto___73919 < len__32954__auto___73918)){
args__32961__auto__.push((arguments[i__32955__auto___73919]));

var G__73920 = (i__32955__auto___73919 + (1));
i__32955__auto___73919 = G__73920;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73917))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73917){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73917),args);
});})(g__55148__auto___73917))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__55148__auto___73917){
return (function (seq73896){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73896));
});})(g__55148__auto___73917))
;


var g__55148__auto___73921 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__55148__auto___73921){
return (function cljs$spec$impl$gen$map(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73922 = arguments.length;
var i__32955__auto___73923 = (0);
while(true){
if((i__32955__auto___73923 < len__32954__auto___73922)){
args__32961__auto__.push((arguments[i__32955__auto___73923]));

var G__73924 = (i__32955__auto___73923 + (1));
i__32955__auto___73923 = G__73924;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73921))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73921){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73921),args);
});})(g__55148__auto___73921))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__55148__auto___73921){
return (function (seq73897){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73897));
});})(g__55148__auto___73921))
;


var g__55148__auto___73925 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__55148__auto___73925){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73926 = arguments.length;
var i__32955__auto___73927 = (0);
while(true){
if((i__32955__auto___73927 < len__32954__auto___73926)){
args__32961__auto__.push((arguments[i__32955__auto___73927]));

var G__73928 = (i__32955__auto___73927 + (1));
i__32955__auto___73927 = G__73928;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73925))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73925){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73925),args);
});})(g__55148__auto___73925))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__55148__auto___73925){
return (function (seq73898){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73898));
});})(g__55148__auto___73925))
;


var g__55148__auto___73929 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__55148__auto___73929){
return (function cljs$spec$impl$gen$set(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73930 = arguments.length;
var i__32955__auto___73931 = (0);
while(true){
if((i__32955__auto___73931 < len__32954__auto___73930)){
args__32961__auto__.push((arguments[i__32955__auto___73931]));

var G__73932 = (i__32955__auto___73931 + (1));
i__32955__auto___73931 = G__73932;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73929))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73929){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73929),args);
});})(g__55148__auto___73929))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__55148__auto___73929){
return (function (seq73899){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73899));
});})(g__55148__auto___73929))
;


var g__55148__auto___73933 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__55148__auto___73933){
return (function cljs$spec$impl$gen$vector(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73934 = arguments.length;
var i__32955__auto___73935 = (0);
while(true){
if((i__32955__auto___73935 < len__32954__auto___73934)){
args__32961__auto__.push((arguments[i__32955__auto___73935]));

var G__73936 = (i__32955__auto___73935 + (1));
i__32955__auto___73935 = G__73936;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73933))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73933){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73933),args);
});})(g__55148__auto___73933))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__55148__auto___73933){
return (function (seq73900){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73900));
});})(g__55148__auto___73933))
;


var g__55148__auto___73937 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__55148__auto___73937){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73938 = arguments.length;
var i__32955__auto___73939 = (0);
while(true){
if((i__32955__auto___73939 < len__32954__auto___73938)){
args__32961__auto__.push((arguments[i__32955__auto___73939]));

var G__73940 = (i__32955__auto___73939 + (1));
i__32955__auto___73939 = G__73940;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73937))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73937){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73937),args);
});})(g__55148__auto___73937))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__55148__auto___73937){
return (function (seq73901){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73901));
});})(g__55148__auto___73937))
;


var g__55148__auto___73941 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__55148__auto___73941){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73942 = arguments.length;
var i__32955__auto___73943 = (0);
while(true){
if((i__32955__auto___73943 < len__32954__auto___73942)){
args__32961__auto__.push((arguments[i__32955__auto___73943]));

var G__73944 = (i__32955__auto___73943 + (1));
i__32955__auto___73943 = G__73944;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73941))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73941){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73941),args);
});})(g__55148__auto___73941))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__55148__auto___73941){
return (function (seq73902){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73902));
});})(g__55148__auto___73941))
;


var g__55148__auto___73945 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__55148__auto___73945){
return (function cljs$spec$impl$gen$elements(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73946 = arguments.length;
var i__32955__auto___73947 = (0);
while(true){
if((i__32955__auto___73947 < len__32954__auto___73946)){
args__32961__auto__.push((arguments[i__32955__auto___73947]));

var G__73948 = (i__32955__auto___73947 + (1));
i__32955__auto___73947 = G__73948;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73945))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73945){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73945),args);
});})(g__55148__auto___73945))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__55148__auto___73945){
return (function (seq73903){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73903));
});})(g__55148__auto___73945))
;


var g__55148__auto___73949 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__55148__auto___73949){
return (function cljs$spec$impl$gen$bind(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73950 = arguments.length;
var i__32955__auto___73951 = (0);
while(true){
if((i__32955__auto___73951 < len__32954__auto___73950)){
args__32961__auto__.push((arguments[i__32955__auto___73951]));

var G__73952 = (i__32955__auto___73951 + (1));
i__32955__auto___73951 = G__73952;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73949))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73949){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73949),args);
});})(g__55148__auto___73949))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__55148__auto___73949){
return (function (seq73904){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73904));
});})(g__55148__auto___73949))
;


var g__55148__auto___73953 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__55148__auto___73953){
return (function cljs$spec$impl$gen$choose(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73954 = arguments.length;
var i__32955__auto___73955 = (0);
while(true){
if((i__32955__auto___73955 < len__32954__auto___73954)){
args__32961__auto__.push((arguments[i__32955__auto___73955]));

var G__73956 = (i__32955__auto___73955 + (1));
i__32955__auto___73955 = G__73956;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73953))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73953){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73953),args);
});})(g__55148__auto___73953))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__55148__auto___73953){
return (function (seq73905){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73905));
});})(g__55148__auto___73953))
;


var g__55148__auto___73957 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__55148__auto___73957){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73958 = arguments.length;
var i__32955__auto___73959 = (0);
while(true){
if((i__32955__auto___73959 < len__32954__auto___73958)){
args__32961__auto__.push((arguments[i__32955__auto___73959]));

var G__73960 = (i__32955__auto___73959 + (1));
i__32955__auto___73959 = G__73960;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73957))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73957){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73957),args);
});})(g__55148__auto___73957))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__55148__auto___73957){
return (function (seq73906){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73906));
});})(g__55148__auto___73957))
;


var g__55148__auto___73961 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__55148__auto___73961){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73962 = arguments.length;
var i__32955__auto___73963 = (0);
while(true){
if((i__32955__auto___73963 < len__32954__auto___73962)){
args__32961__auto__.push((arguments[i__32955__auto___73963]));

var G__73964 = (i__32955__auto___73963 + (1));
i__32955__auto___73963 = G__73964;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73961))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73961){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73961),args);
});})(g__55148__auto___73961))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__55148__auto___73961){
return (function (seq73907){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73907));
});})(g__55148__auto___73961))
;


var g__55148__auto___73965 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__55148__auto___73965){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73966 = arguments.length;
var i__32955__auto___73967 = (0);
while(true){
if((i__32955__auto___73967 < len__32954__auto___73966)){
args__32961__auto__.push((arguments[i__32955__auto___73967]));

var G__73968 = (i__32955__auto___73967 + (1));
i__32955__auto___73967 = G__73968;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73965))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73965){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73965),args);
});})(g__55148__auto___73965))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__55148__auto___73965){
return (function (seq73908){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73908));
});})(g__55148__auto___73965))
;


var g__55148__auto___73969 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__55148__auto___73969){
return (function cljs$spec$impl$gen$sample(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73970 = arguments.length;
var i__32955__auto___73971 = (0);
while(true){
if((i__32955__auto___73971 < len__32954__auto___73970)){
args__32961__auto__.push((arguments[i__32955__auto___73971]));

var G__73972 = (i__32955__auto___73971 + (1));
i__32955__auto___73971 = G__73972;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73969))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73969){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73969),args);
});})(g__55148__auto___73969))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__55148__auto___73969){
return (function (seq73909){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73909));
});})(g__55148__auto___73969))
;


var g__55148__auto___73973 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__55148__auto___73973){
return (function cljs$spec$impl$gen$return(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73974 = arguments.length;
var i__32955__auto___73975 = (0);
while(true){
if((i__32955__auto___73975 < len__32954__auto___73974)){
args__32961__auto__.push((arguments[i__32955__auto___73975]));

var G__73976 = (i__32955__auto___73975 + (1));
i__32955__auto___73975 = G__73976;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73973))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73973){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73973),args);
});})(g__55148__auto___73973))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__55148__auto___73973){
return (function (seq73910){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73910));
});})(g__55148__auto___73973))
;


var g__55148__auto___73977 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__55148__auto___73977){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73978 = arguments.length;
var i__32955__auto___73979 = (0);
while(true){
if((i__32955__auto___73979 < len__32954__auto___73978)){
args__32961__auto__.push((arguments[i__32955__auto___73979]));

var G__73980 = (i__32955__auto___73979 + (1));
i__32955__auto___73979 = G__73980;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73977))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73977){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73977),args);
});})(g__55148__auto___73977))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__55148__auto___73977){
return (function (seq73911){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73911));
});})(g__55148__auto___73977))
;


var g__55148__auto___73981 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__55148__auto___73981){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__32961__auto__ = [];
var len__32954__auto___73982 = arguments.length;
var i__32955__auto___73983 = (0);
while(true){
if((i__32955__auto___73983 < len__32954__auto___73982)){
args__32961__auto__.push((arguments[i__32955__auto___73983]));

var G__73984 = (i__32955__auto___73983 + (1));
i__32955__auto___73983 = G__73984;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___73981))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___73981){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___73981),args);
});})(g__55148__auto___73981))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__55148__auto___73981){
return (function (seq73912){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73912));
});})(g__55148__auto___73981))
;

var g__55161__auto___74006 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__55161__auto___74006){
return (function cljs$spec$impl$gen$any(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74007 = arguments.length;
var i__32955__auto___74008 = (0);
while(true){
if((i__32955__auto___74008 < len__32954__auto___74007)){
args__32961__auto__.push((arguments[i__32955__auto___74008]));

var G__74009 = (i__32955__auto___74008 + (1));
i__32955__auto___74008 = G__74009;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74006))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74006){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74006);
});})(g__55161__auto___74006))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__55161__auto___74006){
return (function (seq73985){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73985));
});})(g__55161__auto___74006))
;


var g__55161__auto___74010 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__55161__auto___74010){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74011 = arguments.length;
var i__32955__auto___74012 = (0);
while(true){
if((i__32955__auto___74012 < len__32954__auto___74011)){
args__32961__auto__.push((arguments[i__32955__auto___74012]));

var G__74013 = (i__32955__auto___74012 + (1));
i__32955__auto___74012 = G__74013;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74010))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74010){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74010);
});})(g__55161__auto___74010))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__55161__auto___74010){
return (function (seq73986){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73986));
});})(g__55161__auto___74010))
;


var g__55161__auto___74014 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__55161__auto___74014){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74015 = arguments.length;
var i__32955__auto___74016 = (0);
while(true){
if((i__32955__auto___74016 < len__32954__auto___74015)){
args__32961__auto__.push((arguments[i__32955__auto___74016]));

var G__74017 = (i__32955__auto___74016 + (1));
i__32955__auto___74016 = G__74017;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74014))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74014){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74014);
});})(g__55161__auto___74014))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__55161__auto___74014){
return (function (seq73987){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73987));
});})(g__55161__auto___74014))
;


var g__55161__auto___74018 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__55161__auto___74018){
return (function cljs$spec$impl$gen$char(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74019 = arguments.length;
var i__32955__auto___74020 = (0);
while(true){
if((i__32955__auto___74020 < len__32954__auto___74019)){
args__32961__auto__.push((arguments[i__32955__auto___74020]));

var G__74021 = (i__32955__auto___74020 + (1));
i__32955__auto___74020 = G__74021;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74018))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74018){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74018);
});})(g__55161__auto___74018))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__55161__auto___74018){
return (function (seq73988){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73988));
});})(g__55161__auto___74018))
;


var g__55161__auto___74022 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__55161__auto___74022){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74023 = arguments.length;
var i__32955__auto___74024 = (0);
while(true){
if((i__32955__auto___74024 < len__32954__auto___74023)){
args__32961__auto__.push((arguments[i__32955__auto___74024]));

var G__74025 = (i__32955__auto___74024 + (1));
i__32955__auto___74024 = G__74025;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74022))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74022){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74022);
});})(g__55161__auto___74022))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__55161__auto___74022){
return (function (seq73989){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73989));
});})(g__55161__auto___74022))
;


var g__55161__auto___74026 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__55161__auto___74026){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74027 = arguments.length;
var i__32955__auto___74028 = (0);
while(true){
if((i__32955__auto___74028 < len__32954__auto___74027)){
args__32961__auto__.push((arguments[i__32955__auto___74028]));

var G__74029 = (i__32955__auto___74028 + (1));
i__32955__auto___74028 = G__74029;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74026))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74026){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74026);
});})(g__55161__auto___74026))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__55161__auto___74026){
return (function (seq73990){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73990));
});})(g__55161__auto___74026))
;


var g__55161__auto___74030 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__55161__auto___74030){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74031 = arguments.length;
var i__32955__auto___74032 = (0);
while(true){
if((i__32955__auto___74032 < len__32954__auto___74031)){
args__32961__auto__.push((arguments[i__32955__auto___74032]));

var G__74033 = (i__32955__auto___74032 + (1));
i__32955__auto___74032 = G__74033;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74030))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74030){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74030);
});})(g__55161__auto___74030))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__55161__auto___74030){
return (function (seq73991){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73991));
});})(g__55161__auto___74030))
;


var g__55161__auto___74034 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__55161__auto___74034){
return (function cljs$spec$impl$gen$double(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74035 = arguments.length;
var i__32955__auto___74036 = (0);
while(true){
if((i__32955__auto___74036 < len__32954__auto___74035)){
args__32961__auto__.push((arguments[i__32955__auto___74036]));

var G__74037 = (i__32955__auto___74036 + (1));
i__32955__auto___74036 = G__74037;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74034))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74034){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74034);
});})(g__55161__auto___74034))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__55161__auto___74034){
return (function (seq73992){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73992));
});})(g__55161__auto___74034))
;


var g__55161__auto___74038 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__55161__auto___74038){
return (function cljs$spec$impl$gen$int(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74039 = arguments.length;
var i__32955__auto___74040 = (0);
while(true){
if((i__32955__auto___74040 < len__32954__auto___74039)){
args__32961__auto__.push((arguments[i__32955__auto___74040]));

var G__74041 = (i__32955__auto___74040 + (1));
i__32955__auto___74040 = G__74041;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74038))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74038){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74038);
});})(g__55161__auto___74038))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__55161__auto___74038){
return (function (seq73993){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73993));
});})(g__55161__auto___74038))
;


var g__55161__auto___74042 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__55161__auto___74042){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74043 = arguments.length;
var i__32955__auto___74044 = (0);
while(true){
if((i__32955__auto___74044 < len__32954__auto___74043)){
args__32961__auto__.push((arguments[i__32955__auto___74044]));

var G__74045 = (i__32955__auto___74044 + (1));
i__32955__auto___74044 = G__74045;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74042))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74042){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74042);
});})(g__55161__auto___74042))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__55161__auto___74042){
return (function (seq73994){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73994));
});})(g__55161__auto___74042))
;


var g__55161__auto___74046 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__55161__auto___74046){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74047 = arguments.length;
var i__32955__auto___74048 = (0);
while(true){
if((i__32955__auto___74048 < len__32954__auto___74047)){
args__32961__auto__.push((arguments[i__32955__auto___74048]));

var G__74049 = (i__32955__auto___74048 + (1));
i__32955__auto___74048 = G__74049;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74046))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74046){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74046);
});})(g__55161__auto___74046))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__55161__auto___74046){
return (function (seq73995){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73995));
});})(g__55161__auto___74046))
;


var g__55161__auto___74050 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__55161__auto___74050){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74051 = arguments.length;
var i__32955__auto___74052 = (0);
while(true){
if((i__32955__auto___74052 < len__32954__auto___74051)){
args__32961__auto__.push((arguments[i__32955__auto___74052]));

var G__74053 = (i__32955__auto___74052 + (1));
i__32955__auto___74052 = G__74053;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74050))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74050){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74050);
});})(g__55161__auto___74050))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__55161__auto___74050){
return (function (seq73996){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73996));
});})(g__55161__auto___74050))
;


var g__55161__auto___74054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__55161__auto___74054){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74055 = arguments.length;
var i__32955__auto___74056 = (0);
while(true){
if((i__32955__auto___74056 < len__32954__auto___74055)){
args__32961__auto__.push((arguments[i__32955__auto___74056]));

var G__74057 = (i__32955__auto___74056 + (1));
i__32955__auto___74056 = G__74057;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74054))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74054){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74054);
});})(g__55161__auto___74054))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__55161__auto___74054){
return (function (seq73997){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73997));
});})(g__55161__auto___74054))
;


var g__55161__auto___74058 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__55161__auto___74058){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74059 = arguments.length;
var i__32955__auto___74060 = (0);
while(true){
if((i__32955__auto___74060 < len__32954__auto___74059)){
args__32961__auto__.push((arguments[i__32955__auto___74060]));

var G__74061 = (i__32955__auto___74060 + (1));
i__32955__auto___74060 = G__74061;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74058))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74058){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74058);
});})(g__55161__auto___74058))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__55161__auto___74058){
return (function (seq73998){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73998));
});})(g__55161__auto___74058))
;


var g__55161__auto___74062 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__55161__auto___74062){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74063 = arguments.length;
var i__32955__auto___74064 = (0);
while(true){
if((i__32955__auto___74064 < len__32954__auto___74063)){
args__32961__auto__.push((arguments[i__32955__auto___74064]));

var G__74065 = (i__32955__auto___74064 + (1));
i__32955__auto___74064 = G__74065;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74062))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74062){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74062);
});})(g__55161__auto___74062))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__55161__auto___74062){
return (function (seq73999){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73999));
});})(g__55161__auto___74062))
;


var g__55161__auto___74066 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__55161__auto___74066){
return (function cljs$spec$impl$gen$string(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74067 = arguments.length;
var i__32955__auto___74068 = (0);
while(true){
if((i__32955__auto___74068 < len__32954__auto___74067)){
args__32961__auto__.push((arguments[i__32955__auto___74068]));

var G__74069 = (i__32955__auto___74068 + (1));
i__32955__auto___74068 = G__74069;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74066))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74066){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74066);
});})(g__55161__auto___74066))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__55161__auto___74066){
return (function (seq74000){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74000));
});})(g__55161__auto___74066))
;


var g__55161__auto___74070 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__55161__auto___74070){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74071 = arguments.length;
var i__32955__auto___74072 = (0);
while(true){
if((i__32955__auto___74072 < len__32954__auto___74071)){
args__32961__auto__.push((arguments[i__32955__auto___74072]));

var G__74073 = (i__32955__auto___74072 + (1));
i__32955__auto___74072 = G__74073;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74070))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74070){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74070);
});})(g__55161__auto___74070))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__55161__auto___74070){
return (function (seq74001){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74001));
});})(g__55161__auto___74070))
;


var g__55161__auto___74074 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__55161__auto___74074){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74075 = arguments.length;
var i__32955__auto___74076 = (0);
while(true){
if((i__32955__auto___74076 < len__32954__auto___74075)){
args__32961__auto__.push((arguments[i__32955__auto___74076]));

var G__74077 = (i__32955__auto___74076 + (1));
i__32955__auto___74076 = G__74077;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74074))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74074){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74074);
});})(g__55161__auto___74074))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__55161__auto___74074){
return (function (seq74002){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74002));
});})(g__55161__auto___74074))
;


var g__55161__auto___74078 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__55161__auto___74078){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74079 = arguments.length;
var i__32955__auto___74080 = (0);
while(true){
if((i__32955__auto___74080 < len__32954__auto___74079)){
args__32961__auto__.push((arguments[i__32955__auto___74080]));

var G__74081 = (i__32955__auto___74080 + (1));
i__32955__auto___74080 = G__74081;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74078))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74078){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74078);
});})(g__55161__auto___74078))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__55161__auto___74078){
return (function (seq74003){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74003));
});})(g__55161__auto___74078))
;


var g__55161__auto___74082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__55161__auto___74082){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74083 = arguments.length;
var i__32955__auto___74084 = (0);
while(true){
if((i__32955__auto___74084 < len__32954__auto___74083)){
args__32961__auto__.push((arguments[i__32955__auto___74084]));

var G__74085 = (i__32955__auto___74084 + (1));
i__32955__auto___74084 = G__74085;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74082))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74082){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74082);
});})(g__55161__auto___74082))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__55161__auto___74082){
return (function (seq74004){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74004));
});})(g__55161__auto___74082))
;


var g__55161__auto___74086 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__55161__auto___74086){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74087 = arguments.length;
var i__32955__auto___74088 = (0);
while(true){
if((i__32955__auto___74088 < len__32954__auto___74087)){
args__32961__auto__.push((arguments[i__32955__auto___74088]));

var G__74089 = (i__32955__auto___74088 + (1));
i__32955__auto___74088 = G__74089;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___74086))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___74086){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___74086);
});})(g__55161__auto___74086))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__55161__auto___74086){
return (function (seq74005){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74005));
});})(g__55161__auto___74086))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__32961__auto__ = [];
var len__32954__auto___74092 = arguments.length;
var i__32955__auto___74093 = (0);
while(true){
if((i__32955__auto___74093 < len__32954__auto___74092)){
args__32961__auto__.push((arguments[i__32955__auto___74093]));

var G__74094 = (i__32955__auto___74093 + (1));
i__32955__auto___74093 = G__74094;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__74090_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__74090_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq74091){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74091));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__74095_SHARP_){
return (new Date(p1__74095_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1489123431188