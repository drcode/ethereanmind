// Compiled by ClojureScript 1.9.229 {}
goog.provide('shared.debug');
goog.require('cljs.core');
shared.debug.loop_dbg = (function shared$debug$loop_dbg(var_args){
var args__35580__auto__ = [];
var len__35573__auto___71295 = arguments.length;
var i__35574__auto___71296 = (0);
while(true){
if((i__35574__auto___71296 < len__35573__auto___71295)){
args__35580__auto__.push((arguments[i__35574__auto___71296]));

var G__71297 = (i__35574__auto___71296 + (1));
i__35574__auto___71296 = G__71297;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((3) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((3)),(0),null)):null);
return shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35581__auto__);
});

shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),(function (){var x__35316__auto__ = vars;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),(function (){var iter__35244__auto__ = (function shared$debug$iter__71279(s__71280){
return (new cljs.core.LazySeq(null,(function (){
var s__71280__$1 = s__71280;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__71280__$1);
if(temp__6728__auto__){
var s__71280__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71280__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__71280__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__71282 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__71281 = (0);
while(true){
if((i__71281 < size__35243__auto__)){
var vec__71289 = cljs.core._nth.call(null,c__35242__auto__,i__71281);
var var$ = cljs.core.nth.call(null,vec__71289,(0),null);
cljs.core.chunk_append.call(null,b__71282,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))));

var G__71298 = (i__71281 + (1));
i__71281 = G__71298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71282),shared$debug$iter__71279.call(null,cljs.core.chunk_rest.call(null,s__71280__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71282),null);
}
} else {
var vec__71292 = cljs.core.first.call(null,s__71280__$2);
var var$ = cljs.core.nth.call(null,vec__71292,(0),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))),shared$debug$iter__71279.call(null,cljs.core.rest.call(null,s__71280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35244__auto__.call(null,cljs.core.partition.call(null,(2),vars));
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),body)));
});

shared.debug.loop_dbg.cljs$lang$maxFixedArity = (3);

shared.debug.loop_dbg.cljs$lang$applyTo = (function (seq71259){
var G__71260 = cljs.core.first.call(null,seq71259);
var seq71259__$1 = cljs.core.next.call(null,seq71259);
var G__71261 = cljs.core.first.call(null,seq71259__$1);
var seq71259__$2 = cljs.core.next.call(null,seq71259__$1);
var G__71262 = cljs.core.first.call(null,seq71259__$2);
var seq71259__$3 = cljs.core.next.call(null,seq71259__$2);
return shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic(G__71260,G__71261,G__71262,seq71259__$3);
});


shared.debug.loop_dbg.cljs$lang$macro = true;
shared.debug.let_dbg = (function shared$debug$let_dbg(var_args){
var args__35580__auto__ = [];
var len__35573__auto___71335 = arguments.length;
var i__35574__auto___71336 = (0);
while(true){
if((i__35574__auto___71336 < len__35573__auto___71335)){
args__35580__auto__.push((arguments[i__35574__auto___71336]));

var G__71337 = (i__35574__auto___71336 + (1));
i__35574__auto___71336 = G__71337;
continue;
} else {
}
break;
}

var argseq__35581__auto__ = ((((3) < args__35580__auto__.length))?(new cljs.core.IndexedSeq(args__35580__auto__.slice((3)),(0),null)):null);
return shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35581__auto__);
});

shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__35316__auto__ = vars;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),(function (){var iter__35244__auto__ = (function shared$debug$iter__71319(s__71320){
return (new cljs.core.LazySeq(null,(function (){
var s__71320__$1 = s__71320;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__71320__$1);
if(temp__6728__auto__){
var s__71320__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71320__$2)){
var c__35242__auto__ = cljs.core.chunk_first.call(null,s__71320__$2);
var size__35243__auto__ = cljs.core.count.call(null,c__35242__auto__);
var b__71322 = cljs.core.chunk_buffer.call(null,size__35243__auto__);
if((function (){var i__71321 = (0);
while(true){
if((i__71321 < size__35243__auto__)){
var vec__71329 = cljs.core._nth.call(null,c__35242__auto__,i__71321);
var var$ = cljs.core.nth.call(null,vec__71329,(0),null);
cljs.core.chunk_append.call(null,b__71322,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))));

var G__71338 = (i__71321 + (1));
i__71321 = G__71338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71322),shared$debug$iter__71319.call(null,cljs.core.chunk_rest.call(null,s__71320__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71322),null);
}
} else {
var vec__71332 = cljs.core.first.call(null,s__71320__$2);
var var$ = cljs.core.nth.call(null,vec__71332,(0),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))),shared$debug$iter__71319.call(null,cljs.core.rest.call(null,s__71320__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35244__auto__.call(null,cljs.core.partition.call(null,(2),vars));
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),body)));
});

shared.debug.let_dbg.cljs$lang$maxFixedArity = (3);

shared.debug.let_dbg.cljs$lang$applyTo = (function (seq71299){
var G__71300 = cljs.core.first.call(null,seq71299);
var seq71299__$1 = cljs.core.next.call(null,seq71299);
var G__71301 = cljs.core.first.call(null,seq71299__$1);
var seq71299__$2 = cljs.core.next.call(null,seq71299__$1);
var G__71302 = cljs.core.first.call(null,seq71299__$2);
var seq71299__$3 = cljs.core.next.call(null,seq71299__$2);
return shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic(G__71300,G__71301,G__71302,seq71299__$3);
});


shared.debug.let_dbg.cljs$lang$macro = true;
shared.debug.mdbg = (function shared$debug$mdbg(_AMPERSAND_form,_AMPERSAND_env,var$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("shared.debug","dbg","shared.debug/dbg",-271174777,null)),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
});

shared.debug.mdbg.cljs$lang$macro = true;
shared.debug.max_label_length = (60);
/**
 * Simple debug function useful for getting intermediates in -> piping.
 */
shared.debug.dbg = (function shared$debug$dbg(var_args){
var args71339 = [];
var len__35573__auto___71342 = arguments.length;
var i__35574__auto___71343 = (0);
while(true){
if((i__35574__auto___71343 < len__35573__auto___71342)){
args71339.push((arguments[i__35574__auto___71343]));

var G__71344 = (i__35574__auto___71343 + (1));
i__35574__auto___71343 = G__71344;
continue;
} else {
}
break;
}

var G__71341 = args71339.length;
switch (G__71341) {
case 2:
return shared.debug.dbg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shared.debug.dbg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71339.length)].join('')));

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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null)),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rand-int","cljs.core/rand-int",901720936,null)),(function (){var x__35316__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),(function (){var x__35316__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("shared.debug","mdbg","shared.debug/mdbg",630932318,null)),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})(),(function (){var x__35316__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35316__auto__);
})())));
});

shared.debug.mdbg_sample.cljs$lang$macro = true;

//# sourceMappingURL=debug.js.map?rel=1488154314780