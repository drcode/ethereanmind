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
var len__32954__auto___439847 = arguments.length;
var i__32955__auto___439848 = (0);
while(true){
if((i__32955__auto___439848 < len__32954__auto___439847)){
args__32961__auto__.push((arguments[i__32955__auto___439848]));

var G__439849 = (i__32955__auto___439848 + (1));
i__32955__auto___439848 = G__439849;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq439846){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439846));
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
var len__32954__auto___439851 = arguments.length;
var i__32955__auto___439852 = (0);
while(true){
if((i__32955__auto___439852 < len__32954__auto___439851)){
args__32961__auto__.push((arguments[i__32955__auto___439852]));

var G__439853 = (i__32955__auto___439852 + (1));
i__32955__auto___439852 = G__439853;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq439850){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439850));
});

var g_QMARK__439854 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_439855 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__439854){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__439854))
,null));
var mkg_439856 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__439854,g_439855){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__439854,g_439855))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__439854,g_439855,mkg_439856){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__439854).call(null,x);
});})(g_QMARK__439854,g_439855,mkg_439856))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__439854,g_439855,mkg_439856){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_439856).call(null,gfn);
});})(g_QMARK__439854,g_439855,mkg_439856))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__439854,g_439855,mkg_439856){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_439855).call(null,generator);
});})(g_QMARK__439854,g_439855,mkg_439856))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__55148__auto___439875 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__55148__auto___439875){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439876 = arguments.length;
var i__32955__auto___439877 = (0);
while(true){
if((i__32955__auto___439877 < len__32954__auto___439876)){
args__32961__auto__.push((arguments[i__32955__auto___439877]));

var G__439878 = (i__32955__auto___439877 + (1));
i__32955__auto___439877 = G__439878;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439875))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439875),args);
});})(g__55148__auto___439875))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__55148__auto___439875){
return (function (seq439857){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439857));
});})(g__55148__auto___439875))
;


var g__55148__auto___439879 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__55148__auto___439879){
return (function cljs$spec$impl$gen$list(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439880 = arguments.length;
var i__32955__auto___439881 = (0);
while(true){
if((i__32955__auto___439881 < len__32954__auto___439880)){
args__32961__auto__.push((arguments[i__32955__auto___439881]));

var G__439882 = (i__32955__auto___439881 + (1));
i__32955__auto___439881 = G__439882;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439879))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439879),args);
});})(g__55148__auto___439879))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__55148__auto___439879){
return (function (seq439858){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439858));
});})(g__55148__auto___439879))
;


var g__55148__auto___439883 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__55148__auto___439883){
return (function cljs$spec$impl$gen$map(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439884 = arguments.length;
var i__32955__auto___439885 = (0);
while(true){
if((i__32955__auto___439885 < len__32954__auto___439884)){
args__32961__auto__.push((arguments[i__32955__auto___439885]));

var G__439886 = (i__32955__auto___439885 + (1));
i__32955__auto___439885 = G__439886;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439883))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439883),args);
});})(g__55148__auto___439883))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__55148__auto___439883){
return (function (seq439859){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439859));
});})(g__55148__auto___439883))
;


var g__55148__auto___439887 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__55148__auto___439887){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439888 = arguments.length;
var i__32955__auto___439889 = (0);
while(true){
if((i__32955__auto___439889 < len__32954__auto___439888)){
args__32961__auto__.push((arguments[i__32955__auto___439889]));

var G__439890 = (i__32955__auto___439889 + (1));
i__32955__auto___439889 = G__439890;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439887))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439887),args);
});})(g__55148__auto___439887))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__55148__auto___439887){
return (function (seq439860){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439860));
});})(g__55148__auto___439887))
;


var g__55148__auto___439891 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__55148__auto___439891){
return (function cljs$spec$impl$gen$set(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439892 = arguments.length;
var i__32955__auto___439893 = (0);
while(true){
if((i__32955__auto___439893 < len__32954__auto___439892)){
args__32961__auto__.push((arguments[i__32955__auto___439893]));

var G__439894 = (i__32955__auto___439893 + (1));
i__32955__auto___439893 = G__439894;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439891))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439891),args);
});})(g__55148__auto___439891))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__55148__auto___439891){
return (function (seq439861){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439861));
});})(g__55148__auto___439891))
;


var g__55148__auto___439895 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__55148__auto___439895){
return (function cljs$spec$impl$gen$vector(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439896 = arguments.length;
var i__32955__auto___439897 = (0);
while(true){
if((i__32955__auto___439897 < len__32954__auto___439896)){
args__32961__auto__.push((arguments[i__32955__auto___439897]));

var G__439898 = (i__32955__auto___439897 + (1));
i__32955__auto___439897 = G__439898;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439895))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439895),args);
});})(g__55148__auto___439895))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__55148__auto___439895){
return (function (seq439862){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439862));
});})(g__55148__auto___439895))
;


var g__55148__auto___439899 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__55148__auto___439899){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439900 = arguments.length;
var i__32955__auto___439901 = (0);
while(true){
if((i__32955__auto___439901 < len__32954__auto___439900)){
args__32961__auto__.push((arguments[i__32955__auto___439901]));

var G__439902 = (i__32955__auto___439901 + (1));
i__32955__auto___439901 = G__439902;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439899))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439899){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439899),args);
});})(g__55148__auto___439899))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__55148__auto___439899){
return (function (seq439863){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439863));
});})(g__55148__auto___439899))
;


var g__55148__auto___439903 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__55148__auto___439903){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439904 = arguments.length;
var i__32955__auto___439905 = (0);
while(true){
if((i__32955__auto___439905 < len__32954__auto___439904)){
args__32961__auto__.push((arguments[i__32955__auto___439905]));

var G__439906 = (i__32955__auto___439905 + (1));
i__32955__auto___439905 = G__439906;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439903))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439903){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439903),args);
});})(g__55148__auto___439903))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__55148__auto___439903){
return (function (seq439864){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439864));
});})(g__55148__auto___439903))
;


var g__55148__auto___439907 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__55148__auto___439907){
return (function cljs$spec$impl$gen$elements(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439908 = arguments.length;
var i__32955__auto___439909 = (0);
while(true){
if((i__32955__auto___439909 < len__32954__auto___439908)){
args__32961__auto__.push((arguments[i__32955__auto___439909]));

var G__439910 = (i__32955__auto___439909 + (1));
i__32955__auto___439909 = G__439910;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439907))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439907){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439907),args);
});})(g__55148__auto___439907))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__55148__auto___439907){
return (function (seq439865){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439865));
});})(g__55148__auto___439907))
;


var g__55148__auto___439911 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__55148__auto___439911){
return (function cljs$spec$impl$gen$bind(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439912 = arguments.length;
var i__32955__auto___439913 = (0);
while(true){
if((i__32955__auto___439913 < len__32954__auto___439912)){
args__32961__auto__.push((arguments[i__32955__auto___439913]));

var G__439914 = (i__32955__auto___439913 + (1));
i__32955__auto___439913 = G__439914;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439911))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439911){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439911),args);
});})(g__55148__auto___439911))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__55148__auto___439911){
return (function (seq439866){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439866));
});})(g__55148__auto___439911))
;


var g__55148__auto___439915 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__55148__auto___439915){
return (function cljs$spec$impl$gen$choose(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439916 = arguments.length;
var i__32955__auto___439917 = (0);
while(true){
if((i__32955__auto___439917 < len__32954__auto___439916)){
args__32961__auto__.push((arguments[i__32955__auto___439917]));

var G__439918 = (i__32955__auto___439917 + (1));
i__32955__auto___439917 = G__439918;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439915))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439915){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439915),args);
});})(g__55148__auto___439915))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__55148__auto___439915){
return (function (seq439867){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439867));
});})(g__55148__auto___439915))
;


var g__55148__auto___439919 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__55148__auto___439919){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439920 = arguments.length;
var i__32955__auto___439921 = (0);
while(true){
if((i__32955__auto___439921 < len__32954__auto___439920)){
args__32961__auto__.push((arguments[i__32955__auto___439921]));

var G__439922 = (i__32955__auto___439921 + (1));
i__32955__auto___439921 = G__439922;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439919))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439919){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439919),args);
});})(g__55148__auto___439919))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__55148__auto___439919){
return (function (seq439868){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439868));
});})(g__55148__auto___439919))
;


var g__55148__auto___439923 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__55148__auto___439923){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439924 = arguments.length;
var i__32955__auto___439925 = (0);
while(true){
if((i__32955__auto___439925 < len__32954__auto___439924)){
args__32961__auto__.push((arguments[i__32955__auto___439925]));

var G__439926 = (i__32955__auto___439925 + (1));
i__32955__auto___439925 = G__439926;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439923))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439923){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439923),args);
});})(g__55148__auto___439923))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__55148__auto___439923){
return (function (seq439869){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439869));
});})(g__55148__auto___439923))
;


var g__55148__auto___439927 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__55148__auto___439927){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439928 = arguments.length;
var i__32955__auto___439929 = (0);
while(true){
if((i__32955__auto___439929 < len__32954__auto___439928)){
args__32961__auto__.push((arguments[i__32955__auto___439929]));

var G__439930 = (i__32955__auto___439929 + (1));
i__32955__auto___439929 = G__439930;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439927))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439927){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439927),args);
});})(g__55148__auto___439927))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__55148__auto___439927){
return (function (seq439870){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439870));
});})(g__55148__auto___439927))
;


var g__55148__auto___439931 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__55148__auto___439931){
return (function cljs$spec$impl$gen$sample(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439932 = arguments.length;
var i__32955__auto___439933 = (0);
while(true){
if((i__32955__auto___439933 < len__32954__auto___439932)){
args__32961__auto__.push((arguments[i__32955__auto___439933]));

var G__439934 = (i__32955__auto___439933 + (1));
i__32955__auto___439933 = G__439934;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439931))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439931){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439931),args);
});})(g__55148__auto___439931))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__55148__auto___439931){
return (function (seq439871){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439871));
});})(g__55148__auto___439931))
;


var g__55148__auto___439935 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__55148__auto___439935){
return (function cljs$spec$impl$gen$return(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439936 = arguments.length;
var i__32955__auto___439937 = (0);
while(true){
if((i__32955__auto___439937 < len__32954__auto___439936)){
args__32961__auto__.push((arguments[i__32955__auto___439937]));

var G__439938 = (i__32955__auto___439937 + (1));
i__32955__auto___439937 = G__439938;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439935))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439935){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439935),args);
});})(g__55148__auto___439935))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__55148__auto___439935){
return (function (seq439872){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439872));
});})(g__55148__auto___439935))
;


var g__55148__auto___439939 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__55148__auto___439939){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439940 = arguments.length;
var i__32955__auto___439941 = (0);
while(true){
if((i__32955__auto___439941 < len__32954__auto___439940)){
args__32961__auto__.push((arguments[i__32955__auto___439941]));

var G__439942 = (i__32955__auto___439941 + (1));
i__32955__auto___439941 = G__439942;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439939))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439939){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439939),args);
});})(g__55148__auto___439939))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__55148__auto___439939){
return (function (seq439873){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439873));
});})(g__55148__auto___439939))
;


var g__55148__auto___439943 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__55148__auto___439943){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439944 = arguments.length;
var i__32955__auto___439945 = (0);
while(true){
if((i__32955__auto___439945 < len__32954__auto___439944)){
args__32961__auto__.push((arguments[i__32955__auto___439945]));

var G__439946 = (i__32955__auto___439945 + (1));
i__32955__auto___439945 = G__439946;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55148__auto___439943))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55148__auto___439943){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__55148__auto___439943),args);
});})(g__55148__auto___439943))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__55148__auto___439943){
return (function (seq439874){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439874));
});})(g__55148__auto___439943))
;

var g__55161__auto___439968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__55161__auto___439968){
return (function cljs$spec$impl$gen$any(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439969 = arguments.length;
var i__32955__auto___439970 = (0);
while(true){
if((i__32955__auto___439970 < len__32954__auto___439969)){
args__32961__auto__.push((arguments[i__32955__auto___439970]));

var G__439971 = (i__32955__auto___439970 + (1));
i__32955__auto___439970 = G__439971;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___439968))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___439968){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___439968);
});})(g__55161__auto___439968))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__55161__auto___439968){
return (function (seq439947){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439947));
});})(g__55161__auto___439968))
;


var g__55161__auto___439972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__55161__auto___439972){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439973 = arguments.length;
var i__32955__auto___439974 = (0);
while(true){
if((i__32955__auto___439974 < len__32954__auto___439973)){
args__32961__auto__.push((arguments[i__32955__auto___439974]));

var G__439975 = (i__32955__auto___439974 + (1));
i__32955__auto___439974 = G__439975;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___439972))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___439972){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___439972);
});})(g__55161__auto___439972))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__55161__auto___439972){
return (function (seq439948){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439948));
});})(g__55161__auto___439972))
;


var g__55161__auto___439976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__55161__auto___439976){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439977 = arguments.length;
var i__32955__auto___439978 = (0);
while(true){
if((i__32955__auto___439978 < len__32954__auto___439977)){
args__32961__auto__.push((arguments[i__32955__auto___439978]));

var G__439979 = (i__32955__auto___439978 + (1));
i__32955__auto___439978 = G__439979;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___439976))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___439976){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___439976);
});})(g__55161__auto___439976))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__55161__auto___439976){
return (function (seq439949){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439949));
});})(g__55161__auto___439976))
;


var g__55161__auto___439980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__55161__auto___439980){
return (function cljs$spec$impl$gen$char(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439981 = arguments.length;
var i__32955__auto___439982 = (0);
while(true){
if((i__32955__auto___439982 < len__32954__auto___439981)){
args__32961__auto__.push((arguments[i__32955__auto___439982]));

var G__439983 = (i__32955__auto___439982 + (1));
i__32955__auto___439982 = G__439983;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___439980))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___439980){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___439980);
});})(g__55161__auto___439980))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__55161__auto___439980){
return (function (seq439950){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439950));
});})(g__55161__auto___439980))
;


var g__55161__auto___439984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__55161__auto___439984){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439985 = arguments.length;
var i__32955__auto___439986 = (0);
while(true){
if((i__32955__auto___439986 < len__32954__auto___439985)){
args__32961__auto__.push((arguments[i__32955__auto___439986]));

var G__439987 = (i__32955__auto___439986 + (1));
i__32955__auto___439986 = G__439987;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___439984))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___439984){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___439984);
});})(g__55161__auto___439984))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__55161__auto___439984){
return (function (seq439951){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439951));
});})(g__55161__auto___439984))
;


var g__55161__auto___439988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__55161__auto___439988){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439989 = arguments.length;
var i__32955__auto___439990 = (0);
while(true){
if((i__32955__auto___439990 < len__32954__auto___439989)){
args__32961__auto__.push((arguments[i__32955__auto___439990]));

var G__439991 = (i__32955__auto___439990 + (1));
i__32955__auto___439990 = G__439991;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___439988))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___439988){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___439988);
});})(g__55161__auto___439988))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__55161__auto___439988){
return (function (seq439952){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439952));
});})(g__55161__auto___439988))
;


var g__55161__auto___439992 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__55161__auto___439992){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439993 = arguments.length;
var i__32955__auto___439994 = (0);
while(true){
if((i__32955__auto___439994 < len__32954__auto___439993)){
args__32961__auto__.push((arguments[i__32955__auto___439994]));

var G__439995 = (i__32955__auto___439994 + (1));
i__32955__auto___439994 = G__439995;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___439992))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___439992){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___439992);
});})(g__55161__auto___439992))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__55161__auto___439992){
return (function (seq439953){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439953));
});})(g__55161__auto___439992))
;


var g__55161__auto___439996 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__55161__auto___439996){
return (function cljs$spec$impl$gen$double(var_args){
var args__32961__auto__ = [];
var len__32954__auto___439997 = arguments.length;
var i__32955__auto___439998 = (0);
while(true){
if((i__32955__auto___439998 < len__32954__auto___439997)){
args__32961__auto__.push((arguments[i__32955__auto___439998]));

var G__439999 = (i__32955__auto___439998 + (1));
i__32955__auto___439998 = G__439999;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___439996))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___439996){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___439996);
});})(g__55161__auto___439996))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__55161__auto___439996){
return (function (seq439954){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439954));
});})(g__55161__auto___439996))
;


var g__55161__auto___440000 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__55161__auto___440000){
return (function cljs$spec$impl$gen$int(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440001 = arguments.length;
var i__32955__auto___440002 = (0);
while(true){
if((i__32955__auto___440002 < len__32954__auto___440001)){
args__32961__auto__.push((arguments[i__32955__auto___440002]));

var G__440003 = (i__32955__auto___440002 + (1));
i__32955__auto___440002 = G__440003;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440000))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440000){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440000);
});})(g__55161__auto___440000))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__55161__auto___440000){
return (function (seq439955){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439955));
});})(g__55161__auto___440000))
;


var g__55161__auto___440004 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__55161__auto___440004){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440005 = arguments.length;
var i__32955__auto___440006 = (0);
while(true){
if((i__32955__auto___440006 < len__32954__auto___440005)){
args__32961__auto__.push((arguments[i__32955__auto___440006]));

var G__440007 = (i__32955__auto___440006 + (1));
i__32955__auto___440006 = G__440007;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440004))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440004){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440004);
});})(g__55161__auto___440004))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__55161__auto___440004){
return (function (seq439956){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439956));
});})(g__55161__auto___440004))
;


var g__55161__auto___440008 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__55161__auto___440008){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440009 = arguments.length;
var i__32955__auto___440010 = (0);
while(true){
if((i__32955__auto___440010 < len__32954__auto___440009)){
args__32961__auto__.push((arguments[i__32955__auto___440010]));

var G__440011 = (i__32955__auto___440010 + (1));
i__32955__auto___440010 = G__440011;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440008))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440008){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440008);
});})(g__55161__auto___440008))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__55161__auto___440008){
return (function (seq439957){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439957));
});})(g__55161__auto___440008))
;


var g__55161__auto___440012 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__55161__auto___440012){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440013 = arguments.length;
var i__32955__auto___440014 = (0);
while(true){
if((i__32955__auto___440014 < len__32954__auto___440013)){
args__32961__auto__.push((arguments[i__32955__auto___440014]));

var G__440015 = (i__32955__auto___440014 + (1));
i__32955__auto___440014 = G__440015;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440012))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440012){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440012);
});})(g__55161__auto___440012))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__55161__auto___440012){
return (function (seq439958){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439958));
});})(g__55161__auto___440012))
;


var g__55161__auto___440016 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__55161__auto___440016){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440017 = arguments.length;
var i__32955__auto___440018 = (0);
while(true){
if((i__32955__auto___440018 < len__32954__auto___440017)){
args__32961__auto__.push((arguments[i__32955__auto___440018]));

var G__440019 = (i__32955__auto___440018 + (1));
i__32955__auto___440018 = G__440019;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440016))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440016){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440016);
});})(g__55161__auto___440016))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__55161__auto___440016){
return (function (seq439959){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439959));
});})(g__55161__auto___440016))
;


var g__55161__auto___440020 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__55161__auto___440020){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440021 = arguments.length;
var i__32955__auto___440022 = (0);
while(true){
if((i__32955__auto___440022 < len__32954__auto___440021)){
args__32961__auto__.push((arguments[i__32955__auto___440022]));

var G__440023 = (i__32955__auto___440022 + (1));
i__32955__auto___440022 = G__440023;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440020))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440020){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440020);
});})(g__55161__auto___440020))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__55161__auto___440020){
return (function (seq439960){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439960));
});})(g__55161__auto___440020))
;


var g__55161__auto___440024 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__55161__auto___440024){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440025 = arguments.length;
var i__32955__auto___440026 = (0);
while(true){
if((i__32955__auto___440026 < len__32954__auto___440025)){
args__32961__auto__.push((arguments[i__32955__auto___440026]));

var G__440027 = (i__32955__auto___440026 + (1));
i__32955__auto___440026 = G__440027;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440024))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440024){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440024);
});})(g__55161__auto___440024))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__55161__auto___440024){
return (function (seq439961){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439961));
});})(g__55161__auto___440024))
;


var g__55161__auto___440028 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__55161__auto___440028){
return (function cljs$spec$impl$gen$string(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440029 = arguments.length;
var i__32955__auto___440030 = (0);
while(true){
if((i__32955__auto___440030 < len__32954__auto___440029)){
args__32961__auto__.push((arguments[i__32955__auto___440030]));

var G__440031 = (i__32955__auto___440030 + (1));
i__32955__auto___440030 = G__440031;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440028))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440028){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440028);
});})(g__55161__auto___440028))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__55161__auto___440028){
return (function (seq439962){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439962));
});})(g__55161__auto___440028))
;


var g__55161__auto___440032 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__55161__auto___440032){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440033 = arguments.length;
var i__32955__auto___440034 = (0);
while(true){
if((i__32955__auto___440034 < len__32954__auto___440033)){
args__32961__auto__.push((arguments[i__32955__auto___440034]));

var G__440035 = (i__32955__auto___440034 + (1));
i__32955__auto___440034 = G__440035;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440032))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440032){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440032);
});})(g__55161__auto___440032))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__55161__auto___440032){
return (function (seq439963){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439963));
});})(g__55161__auto___440032))
;


var g__55161__auto___440036 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__55161__auto___440036){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440037 = arguments.length;
var i__32955__auto___440038 = (0);
while(true){
if((i__32955__auto___440038 < len__32954__auto___440037)){
args__32961__auto__.push((arguments[i__32955__auto___440038]));

var G__440039 = (i__32955__auto___440038 + (1));
i__32955__auto___440038 = G__440039;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440036))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440036){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440036);
});})(g__55161__auto___440036))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__55161__auto___440036){
return (function (seq439964){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439964));
});})(g__55161__auto___440036))
;


var g__55161__auto___440040 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__55161__auto___440040){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440041 = arguments.length;
var i__32955__auto___440042 = (0);
while(true){
if((i__32955__auto___440042 < len__32954__auto___440041)){
args__32961__auto__.push((arguments[i__32955__auto___440042]));

var G__440043 = (i__32955__auto___440042 + (1));
i__32955__auto___440042 = G__440043;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440040))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440040){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440040);
});})(g__55161__auto___440040))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__55161__auto___440040){
return (function (seq439965){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439965));
});})(g__55161__auto___440040))
;


var g__55161__auto___440044 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__55161__auto___440044){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440045 = arguments.length;
var i__32955__auto___440046 = (0);
while(true){
if((i__32955__auto___440046 < len__32954__auto___440045)){
args__32961__auto__.push((arguments[i__32955__auto___440046]));

var G__440047 = (i__32955__auto___440046 + (1));
i__32955__auto___440046 = G__440047;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440044))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440044){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440044);
});})(g__55161__auto___440044))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__55161__auto___440044){
return (function (seq439966){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439966));
});})(g__55161__auto___440044))
;


var g__55161__auto___440048 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__55161__auto___440048){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440049 = arguments.length;
var i__32955__auto___440050 = (0);
while(true){
if((i__32955__auto___440050 < len__32954__auto___440049)){
args__32961__auto__.push((arguments[i__32955__auto___440050]));

var G__440051 = (i__32955__auto___440050 + (1));
i__32955__auto___440050 = G__440051;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});})(g__55161__auto___440048))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__55161__auto___440048){
return (function (args){
return cljs.core.deref.call(null,g__55161__auto___440048);
});})(g__55161__auto___440048))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__55161__auto___440048){
return (function (seq439967){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq439967));
});})(g__55161__auto___440048))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__32961__auto__ = [];
var len__32954__auto___440054 = arguments.length;
var i__32955__auto___440055 = (0);
while(true){
if((i__32955__auto___440055 < len__32954__auto___440054)){
args__32961__auto__.push((arguments[i__32955__auto___440055]));

var G__440056 = (i__32955__auto___440055 + (1));
i__32955__auto___440055 = G__440056;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((0) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__32962__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__440052_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__440052_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq440053){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq440053));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__440057_SHARP_){
return (new Date(p1__440057_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1489289273180