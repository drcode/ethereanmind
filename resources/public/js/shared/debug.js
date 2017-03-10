// Compiled by ClojureScript 1.9.229 {}
goog.provide('shared.debug');
goog.require('cljs.core');
shared.debug.loop_dbg = (function shared$debug$loop_dbg(var_args){
var args__35417__auto__ = [];
var len__35410__auto___53562 = arguments.length;
var i__35411__auto___53563 = (0);
while(true){
if((i__35411__auto___53563 < len__35410__auto___53562)){
args__35417__auto__.push((arguments[i__35411__auto___53563]));

var G__53564 = (i__35411__auto___53563 + (1));
i__35411__auto___53563 = G__53564;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((3) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((3)),(0),null)):null);
return shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35418__auto__);
});

shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),(function (){var x__35153__auto__ = vars;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),(function (){var iter__35081__auto__ = (function shared$debug$iter__53546(s__53547){
return (new cljs.core.LazySeq(null,(function (){
var s__53547__$1 = s__53547;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__53547__$1);
if(temp__6728__auto__){
var s__53547__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53547__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__53547__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__53549 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__53548 = (0);
while(true){
if((i__53548 < size__35080__auto__)){
var vec__53556 = cljs.core._nth.call(null,c__35079__auto__,i__53548);
var var$ = cljs.core.nth.call(null,vec__53556,(0),null);
cljs.core.chunk_append.call(null,b__53549,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))));

var G__53565 = (i__53548 + (1));
i__53548 = G__53565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53549),shared$debug$iter__53546.call(null,cljs.core.chunk_rest.call(null,s__53547__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53549),null);
}
} else {
var vec__53559 = cljs.core.first.call(null,s__53547__$2);
var var$ = cljs.core.nth.call(null,vec__53559,(0),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))),shared$debug$iter__53546.call(null,cljs.core.rest.call(null,s__53547__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35081__auto__.call(null,cljs.core.partition.call(null,(2),vars));
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),body)));
});

shared.debug.loop_dbg.cljs$lang$maxFixedArity = (3);

shared.debug.loop_dbg.cljs$lang$applyTo = (function (seq53526){
var G__53527 = cljs.core.first.call(null,seq53526);
var seq53526__$1 = cljs.core.next.call(null,seq53526);
var G__53528 = cljs.core.first.call(null,seq53526__$1);
var seq53526__$2 = cljs.core.next.call(null,seq53526__$1);
var G__53529 = cljs.core.first.call(null,seq53526__$2);
var seq53526__$3 = cljs.core.next.call(null,seq53526__$2);
return shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic(G__53527,G__53528,G__53529,seq53526__$3);
});


shared.debug.loop_dbg.cljs$lang$macro = true;
shared.debug.let_dbg = (function shared$debug$let_dbg(var_args){
var args__35417__auto__ = [];
var len__35410__auto___53602 = arguments.length;
var i__35411__auto___53603 = (0);
while(true){
if((i__35411__auto___53603 < len__35410__auto___53602)){
args__35417__auto__.push((arguments[i__35411__auto___53603]));

var G__53604 = (i__35411__auto___53603 + (1));
i__35411__auto___53603 = G__53604;
continue;
} else {
}
break;
}

var argseq__35418__auto__ = ((((3) < args__35417__auto__.length))?(new cljs.core.IndexedSeq(args__35417__auto__.slice((3)),(0),null)):null);
return shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35418__auto__);
});

shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__35153__auto__ = vars;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),(function (){var iter__35081__auto__ = (function shared$debug$iter__53586(s__53587){
return (new cljs.core.LazySeq(null,(function (){
var s__53587__$1 = s__53587;
while(true){
var temp__6728__auto__ = cljs.core.seq.call(null,s__53587__$1);
if(temp__6728__auto__){
var s__53587__$2 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53587__$2)){
var c__35079__auto__ = cljs.core.chunk_first.call(null,s__53587__$2);
var size__35080__auto__ = cljs.core.count.call(null,c__35079__auto__);
var b__53589 = cljs.core.chunk_buffer.call(null,size__35080__auto__);
if((function (){var i__53588 = (0);
while(true){
if((i__53588 < size__35080__auto__)){
var vec__53596 = cljs.core._nth.call(null,c__35079__auto__,i__53588);
var var$ = cljs.core.nth.call(null,vec__53596,(0),null);
cljs.core.chunk_append.call(null,b__53589,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))));

var G__53605 = (i__53588 + (1));
i__53588 = G__53605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53589),shared$debug$iter__53586.call(null,cljs.core.chunk_rest.call(null,s__53587__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53589),null);
}
} else {
var vec__53599 = cljs.core.first.call(null,s__53587__$2);
var var$ = cljs.core.nth.call(null,vec__53599,(0),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))),shared$debug$iter__53586.call(null,cljs.core.rest.call(null,s__53587__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35081__auto__.call(null,cljs.core.partition.call(null,(2),vars));
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),body)));
});

shared.debug.let_dbg.cljs$lang$maxFixedArity = (3);

shared.debug.let_dbg.cljs$lang$applyTo = (function (seq53566){
var G__53567 = cljs.core.first.call(null,seq53566);
var seq53566__$1 = cljs.core.next.call(null,seq53566);
var G__53568 = cljs.core.first.call(null,seq53566__$1);
var seq53566__$2 = cljs.core.next.call(null,seq53566__$1);
var G__53569 = cljs.core.first.call(null,seq53566__$2);
var seq53566__$3 = cljs.core.next.call(null,seq53566__$2);
return shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic(G__53567,G__53568,G__53569,seq53566__$3);
});


shared.debug.let_dbg.cljs$lang$macro = true;
shared.debug.mdbg = (function shared$debug$mdbg(_AMPERSAND_form,_AMPERSAND_env,var$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("shared.debug","dbg","shared.debug/dbg",-271174777,null)),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
});

shared.debug.mdbg.cljs$lang$macro = true;
shared.debug.max_label_length = (60);
/**
 * Simple debug function useful for getting intermediates in -> piping.
 */
shared.debug.dbg = (function shared$debug$dbg(var_args){
var args53606 = [];
var len__35410__auto___53609 = arguments.length;
var i__35411__auto___53610 = (0);
while(true){
if((i__35411__auto___53610 < len__35410__auto___53609)){
args53606.push((arguments[i__35411__auto___53610]));

var G__53611 = (i__35411__auto___53610 + (1));
i__35411__auto___53610 = G__53611;
continue;
} else {
}
break;
}

var G__53608 = args53606.length;
switch (G__53608) {
case 2:
return shared.debug.dbg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shared.debug.dbg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53606.length)].join('')));

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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null)),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rand-int","cljs.core/rand-int",901720936,null)),(function (){var x__35153__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),(function (){var x__35153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("shared.debug","mdbg","shared.debug/mdbg",630932318,null)),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})(),(function (){var x__35153__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35153__auto__);
})())));
});

shared.debug.mdbg_sample.cljs$lang$macro = true;

//# sourceMappingURL=debug.js.map?rel=1489120074210