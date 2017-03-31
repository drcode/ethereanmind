// Compiled by ClojureScript 1.9.229 {}
goog.provide('shared.debug');
goog.require('cljs.core');
shared.debug.loop_dbg = (function shared$debug$loop_dbg(var_args){
var args__33033__auto__ = [];
var len__33026__auto___49255 = arguments.length;
var i__33027__auto___49256 = (0);
while(true){
if((i__33027__auto___49256 < len__33026__auto___49255)){
args__33033__auto__.push((arguments[i__33027__auto___49256]));

var G__49257 = (i__33027__auto___49256 + (1));
i__33027__auto___49256 = G__49257;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((3) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((3)),(0),null)):null);
return shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__33034__auto__);
});

shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),(function (){var x__32785__auto__ = vars;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),(function (){var iter__32731__auto__ = (function shared$debug$iter__49239(s__49240){
return (new cljs.core.LazySeq(null,(function (){
var s__49240__$1 = s__49240;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__49240__$1);
if(temp__4657__auto__){
var s__49240__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49240__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__49240__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__49242 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__49241 = (0);
while(true){
if((i__49241 < size__32730__auto__)){
var vec__49249 = cljs.core._nth.call(null,c__32729__auto__,i__49241);
var var$ = cljs.core.nth.call(null,vec__49249,(0),null);
cljs.core.chunk_append.call(null,b__49242,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))));

var G__49258 = (i__49241 + (1));
i__49241 = G__49258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49242),shared$debug$iter__49239.call(null,cljs.core.chunk_rest.call(null,s__49240__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49242),null);
}
} else {
var vec__49252 = cljs.core.first.call(null,s__49240__$2);
var var$ = cljs.core.nth.call(null,vec__49252,(0),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))),shared$debug$iter__49239.call(null,cljs.core.rest.call(null,s__49240__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__32731__auto__.call(null,cljs.core.partition.call(null,(2),vars));
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),body)));
});

shared.debug.loop_dbg.cljs$lang$maxFixedArity = (3);

shared.debug.loop_dbg.cljs$lang$applyTo = (function (seq49219){
var G__49220 = cljs.core.first.call(null,seq49219);
var seq49219__$1 = cljs.core.next.call(null,seq49219);
var G__49221 = cljs.core.first.call(null,seq49219__$1);
var seq49219__$2 = cljs.core.next.call(null,seq49219__$1);
var G__49222 = cljs.core.first.call(null,seq49219__$2);
var seq49219__$3 = cljs.core.next.call(null,seq49219__$2);
return shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic(G__49220,G__49221,G__49222,seq49219__$3);
});


shared.debug.loop_dbg.cljs$lang$macro = true;
shared.debug.let_dbg = (function shared$debug$let_dbg(var_args){
var args__33033__auto__ = [];
var len__33026__auto___49295 = arguments.length;
var i__33027__auto___49296 = (0);
while(true){
if((i__33027__auto___49296 < len__33026__auto___49295)){
args__33033__auto__.push((arguments[i__33027__auto___49296]));

var G__49297 = (i__33027__auto___49296 + (1));
i__33027__auto___49296 = G__49297;
continue;
} else {
}
break;
}

var argseq__33034__auto__ = ((((3) < args__33033__auto__.length))?(new cljs.core.IndexedSeq(args__33033__auto__.slice((3)),(0),null)):null);
return shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__33034__auto__);
});

shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__32785__auto__ = vars;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),(function (){var iter__32731__auto__ = (function shared$debug$iter__49279(s__49280){
return (new cljs.core.LazySeq(null,(function (){
var s__49280__$1 = s__49280;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__49280__$1);
if(temp__4657__auto__){
var s__49280__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49280__$2)){
var c__32729__auto__ = cljs.core.chunk_first.call(null,s__49280__$2);
var size__32730__auto__ = cljs.core.count.call(null,c__32729__auto__);
var b__49282 = cljs.core.chunk_buffer.call(null,size__32730__auto__);
if((function (){var i__49281 = (0);
while(true){
if((i__49281 < size__32730__auto__)){
var vec__49289 = cljs.core._nth.call(null,c__32729__auto__,i__49281);
var var$ = cljs.core.nth.call(null,vec__49289,(0),null);
cljs.core.chunk_append.call(null,b__49282,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))));

var G__49298 = (i__49281 + (1));
i__49281 = G__49298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49282),shared$debug$iter__49279.call(null,cljs.core.chunk_rest.call(null,s__49280__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49282),null);
}
} else {
var vec__49292 = cljs.core.first.call(null,s__49280__$2);
var var$ = cljs.core.nth.call(null,vec__49292,(0),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))),shared$debug$iter__49279.call(null,cljs.core.rest.call(null,s__49280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__32731__auto__.call(null,cljs.core.partition.call(null,(2),vars));
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),body)));
});

shared.debug.let_dbg.cljs$lang$maxFixedArity = (3);

shared.debug.let_dbg.cljs$lang$applyTo = (function (seq49259){
var G__49260 = cljs.core.first.call(null,seq49259);
var seq49259__$1 = cljs.core.next.call(null,seq49259);
var G__49261 = cljs.core.first.call(null,seq49259__$1);
var seq49259__$2 = cljs.core.next.call(null,seq49259__$1);
var G__49262 = cljs.core.first.call(null,seq49259__$2);
var seq49259__$3 = cljs.core.next.call(null,seq49259__$2);
return shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic(G__49260,G__49261,G__49262,seq49259__$3);
});


shared.debug.let_dbg.cljs$lang$macro = true;
shared.debug.mdbg = (function shared$debug$mdbg(_AMPERSAND_form,_AMPERSAND_env,var$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("shared.debug","dbg","shared.debug/dbg",-271174777,null)),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
});

shared.debug.mdbg.cljs$lang$macro = true;
shared.debug.max_label_length = (60);
/**
 * Simple debug function useful for getting intermediates in -> piping.
 */
shared.debug.dbg = (function shared$debug$dbg(var_args){
var args49299 = [];
var len__33026__auto___49302 = arguments.length;
var i__33027__auto___49303 = (0);
while(true){
if((i__33027__auto___49303 < len__33026__auto___49302)){
args49299.push((arguments[i__33027__auto___49303]));

var G__49304 = (i__33027__auto___49303 + (1));
i__33027__auto___49303 = G__49304;
continue;
} else {
}
break;
}

var G__49301 = args49299.length;
switch (G__49301) {
case 2:
return shared.debug.dbg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shared.debug.dbg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49299.length)].join('')));

}
});

shared.debug.dbg.cljs$core$IFn$_invoke$arity$2 = (function (val,s){
cljs.core.println.call(null,(function (){var s__$1 = cljs.core.pr_str.call(null,s);
if((cljs.core.count.call(null,s__$1) > shared.debug.max_label_length)){
return [cljs.core.str(cljs.core.subs.call(null,s__$1,(0),(shared.debug.max_label_length - (3)))),cljs.core.str("...")].join('');
} else {
return s__$1;
}
})(),"=",cljs.core.pr_str.call(null,val));

return val;
});

shared.debug.dbg.cljs$core$IFn$_invoke$arity$1 = (function (val){
return shared.debug.dbg.call(null,val,"dbg");
});

shared.debug.dbg.cljs$lang$maxFixedArity = 2;

shared.debug.mdbg_sample = (function shared$debug$mdbg_sample(_AMPERSAND_form,_AMPERSAND_env,n,var$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null)),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rand-int","cljs.core/rand-int",901720936,null)),(function (){var x__32785__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),(function (){var x__32785__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("shared.debug","mdbg","shared.debug/mdbg",630932318,null)),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})(),(function (){var x__32785__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32785__auto__);
})())));
});

shared.debug.mdbg_sample.cljs$lang$macro = true;

//# sourceMappingURL=debug.js.map?rel=1491001403801