// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,k,coll);
return cljs.core.cons(max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (max){
return (function (p1__17746_SHARP_){
return (max === p1__17746_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
var args17747 = [];
var len__7492__auto___17753 = arguments.length;
var i__7493__auto___17754 = (0);
while(true){
if((i__7493__auto___17754 < len__7492__auto___17753)){
args17747.push((arguments[i__7493__auto___17754]));

var G__17755 = (i__7493__auto___17754 + (1));
i__7493__auto___17754 = G__17755;
continue;
} else {
}
break;
}

var G__17752 = args17747.length;
switch (G__17752) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17747.slice((2)),(0),null));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7511__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key(cljs.core.count,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq17748){
var G__17749 = cljs.core.first(seq17748);
var seq17748__$1 = cljs.core.next(seq17748);
var G__17750 = cljs.core.first(seq17748__$1);
var seq17748__$2 = cljs.core.next(seq17748__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__17749,G__17750,seq17748__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
var args17758 = [];
var len__7492__auto___17764 = arguments.length;
var i__7493__auto___17765 = (0);
while(true){
if((i__7493__auto___17765 < len__7492__auto___17764)){
args17758.push((arguments[i__7493__auto___17765]));

var G__17766 = (i__7493__auto___17765 + (1));
i__7493__auto___17765 = G__17766;
continue;
} else {
}
break;
}

var G__17763 = args17758.length;
switch (G__17763) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17758.slice((2)),(0),null));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7511__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count(s2) < cljs.core.count(s1))){
var G__17768 = s2;
var G__17769 = s1;
s1 = G__17768;
s2 = G__17769;
continue;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return result;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key((function (p1__17757_SHARP_){
return (- cljs.core.count(p1__17757_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.intersection,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq17759){
var G__17760 = cljs.core.first(seq17759);
var seq17759__$1 = cljs.core.next(seq17759);
var G__17761 = cljs.core.first(seq17759__$1);
var seq17759__$2 = cljs.core.next(seq17759__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__17760,G__17761,seq17759__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
var args17770 = [];
var len__7492__auto___17776 = arguments.length;
var i__7493__auto___17777 = (0);
while(true){
if((i__7493__auto___17777 < len__7492__auto___17776)){
args17770.push((arguments[i__7493__auto___17777]));

var G__17778 = (i__7493__auto___17777 + (1));
i__7493__auto___17777 = G__17778;
continue;
} else {
}
break;
}

var G__17775 = args17770.length;
switch (G__17775) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7511__auto__ = (new cljs.core.IndexedSeq(args17770.slice((2)),(0),null));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7511__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq17771){
var G__17772 = cljs.core.first(seq17771);
var seq17771__$1 = cljs.core.next(seq17771);
var G__17773 = cljs.core.first(seq17771__$1);
var seq17771__$2 = cljs.core.next(seq17771__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__17772,G__17773,seq17771__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);

/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return s;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17780_SHARP_){
return cljs.core.select_keys(p1__17780_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__17785){
var vec__17786 = p__17785;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17786,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17786,(1),null);
if(cljs.core.contains_QMARK_(map,old)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new$,cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,old));
} else {
return m;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,map,cljs.core.keys(kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17789_SHARP_){
return clojure.set.rename_keys(p1__17789_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){
var ik = cljs.core.select_keys(x,ks);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__17794){
var vec__17795 = p__17794;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17795,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17795,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
var args17802 = [];
var len__7492__auto___17813 = arguments.length;
var i__7493__auto___17814 = (0);
while(true){
if((i__7493__auto___17814 < len__7492__auto___17813)){
args17802.push((arguments[i__7493__auto___17814]));

var G__17815 = (i__7493__auto___17814 + (1));
i__7493__auto___17814 = G__17815;
continue;
} else {
}
break;
}

var G__17804 = args17802.length;
switch (G__17804) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17802.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq(xrel)) && (cljs.core.seq(yrel))){
var ks = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(xrel))),cljs.core.set(cljs.core.keys(cljs.core.first(yrel))));
var vec__17805 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17805,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17805,(1),null);
var idx = clojure.set.index(r,ks);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks,vec__17805,r,s,idx){
return (function (ret,x){
var found = (function (){var G__17808 = cljs.core.select_keys(x,ks);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__17808) : idx.call(null,G__17808));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,ks,vec__17805,r,s,idx){
return (function (p1__17798_SHARP_,p2__17799_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17798_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__17799_SHARP_,x], 0)));
});})(found,ks,vec__17805,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__17805,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__17809 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert(km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(2),null);
var idx = clojure.set.index(r,cljs.core.vals(k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__17809,r,s,k,idx){
return (function (ret,x){
var found = (function (){var G__17812 = clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k)),k);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__17812) : idx.call(null,G__17812));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,vec__17809,r,s,k,idx){
return (function (p1__17800_SHARP_,p2__17801_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17800_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__17801_SHARP_,x], 0)));
});})(found,vec__17809,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__17809,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;

/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count(set1) <= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__17817_SHARP_){
return cljs.core.contains_QMARK_(set2,p1__17817_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count(set1) >= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__17818_SHARP_){
return cljs.core.contains_QMARK_(set1,p1__17818_SHARP_);
}),set2));
});
