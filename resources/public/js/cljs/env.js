// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.env');
goog.require('cljs.core');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(var_args){
var args71348 = [];
var len__35573__auto___71351 = arguments.length;
var i__35574__auto___71352 = (0);
while(true){
if((i__35574__auto___71352 < len__35573__auto___71351)){
args71348.push((arguments[i__35574__auto___71352]));

var G__71353 = (i__35574__auto___71352 + (1));
i__35574__auto___71352 = G__71353;
continue;
} else {
}
break;
}

var G__71350 = args71348.length;
switch (G__71350) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71348.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
return cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null),new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),options], null)));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=env.js.map?rel=1488154314803