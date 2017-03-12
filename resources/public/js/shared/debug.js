// Compiled by ClojureScript 1.9.229 {}
goog.provide('shared.debug');
goog.require('cljs.core');
shared.debug.loop_dbg = (function shared$debug$loop_dbg(var_args){
var args__32961__auto__ = [];
var len__32954__auto___484562 = arguments.length;
var i__32955__auto___484563 = (0);
while(true){
if((i__32955__auto___484563 < len__32954__auto___484562)){
args__32961__auto__.push((arguments[i__32955__auto___484563]));

var G__484564 = (i__32955__auto___484563 + (1));
i__32955__auto___484563 = G__484564;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((3) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((3)),(0),null)):null);
return shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32962__auto__);
});

shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),(function (){var x__32713__auto__ = vars;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),(function (){var iter__32659__auto__ = (function shared$debug$iter__484546(s__484547){
return (new cljs.core.LazySeq(null,(function (){
var s__484547__$1 = s__484547;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__484547__$1);
if(temp__4657__auto__){
var s__484547__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__484547__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__484547__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__484549 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__484548 = (0);
while(true){
if((i__484548 < size__32658__auto__)){
var vec__484556 = cljs.core._nth.call(null,c__32657__auto__,i__484548);
var var$ = cljs.core.nth.call(null,vec__484556,(0),null);
cljs.core.chunk_append.call(null,b__484549,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))));

var G__484565 = (i__484548 + (1));
i__484548 = G__484565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__484549),shared$debug$iter__484546.call(null,cljs.core.chunk_rest.call(null,s__484547__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__484549),null);
}
} else {
var vec__484559 = cljs.core.first.call(null,s__484547__$2);
var var$ = cljs.core.nth.call(null,vec__484559,(0),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))),shared$debug$iter__484546.call(null,cljs.core.rest.call(null,s__484547__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__32659__auto__.call(null,cljs.core.partition.call(null,(2),vars));
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),body)));
});

shared.debug.loop_dbg.cljs$lang$maxFixedArity = (3);

shared.debug.loop_dbg.cljs$lang$applyTo = (function (seq484526){
var G__484527 = cljs.core.first.call(null,seq484526);
var seq484526__$1 = cljs.core.next.call(null,seq484526);
var G__484528 = cljs.core.first.call(null,seq484526__$1);
var seq484526__$2 = cljs.core.next.call(null,seq484526__$1);
var G__484529 = cljs.core.first.call(null,seq484526__$2);
var seq484526__$3 = cljs.core.next.call(null,seq484526__$2);
return shared.debug.loop_dbg.cljs$core$IFn$_invoke$arity$variadic(G__484527,G__484528,G__484529,seq484526__$3);
});


shared.debug.loop_dbg.cljs$lang$macro = true;
shared.debug.let_dbg = (function shared$debug$let_dbg(var_args){
var args__32961__auto__ = [];
var len__32954__auto___484602 = arguments.length;
var i__32955__auto___484603 = (0);
while(true){
if((i__32955__auto___484603 < len__32954__auto___484602)){
args__32961__auto__.push((arguments[i__32955__auto___484603]));

var G__484604 = (i__32955__auto___484603 + (1));
i__32955__auto___484603 = G__484604;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((3) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((3)),(0),null)):null);
return shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32962__auto__);
});

shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__32713__auto__ = vars;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),(function (){var iter__32659__auto__ = (function shared$debug$iter__484586(s__484587){
return (new cljs.core.LazySeq(null,(function (){
var s__484587__$1 = s__484587;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__484587__$1);
if(temp__4657__auto__){
var s__484587__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__484587__$2)){
var c__32657__auto__ = cljs.core.chunk_first.call(null,s__484587__$2);
var size__32658__auto__ = cljs.core.count.call(null,c__32657__auto__);
var b__484589 = cljs.core.chunk_buffer.call(null,size__32658__auto__);
if((function (){var i__484588 = (0);
while(true){
if((i__484588 < size__32658__auto__)){
var vec__484596 = cljs.core._nth.call(null,c__32657__auto__,i__484588);
var var$ = cljs.core.nth.call(null,vec__484596,(0),null);
cljs.core.chunk_append.call(null,b__484589,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))));

var G__484605 = (i__484588 + (1));
i__484588 = G__484605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__484589),shared$debug$iter__484586.call(null,cljs.core.chunk_rest.call(null,s__484587__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__484589),null);
}
} else {
var vec__484599 = cljs.core.first.call(null,s__484587__$2);
var var$ = cljs.core.nth.call(null,vec__484599,(0),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"="),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," ")))),shared$debug$iter__484586.call(null,cljs.core.rest.call(null,s__484587__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__32659__auto__.call(null,cljs.core.partition.call(null,(2),vars));
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),body)));
});

shared.debug.let_dbg.cljs$lang$maxFixedArity = (3);

shared.debug.let_dbg.cljs$lang$applyTo = (function (seq484566){
var G__484567 = cljs.core.first.call(null,seq484566);
var seq484566__$1 = cljs.core.next.call(null,seq484566);
var G__484568 = cljs.core.first.call(null,seq484566__$1);
var seq484566__$2 = cljs.core.next.call(null,seq484566__$1);
var G__484569 = cljs.core.first.call(null,seq484566__$2);
var seq484566__$3 = cljs.core.next.call(null,seq484566__$2);
return shared.debug.let_dbg.cljs$core$IFn$_invoke$arity$variadic(G__484567,G__484568,G__484569,seq484566__$3);
});


shared.debug.let_dbg.cljs$lang$macro = true;
shared.debug.mdbg = (function shared$debug$mdbg(_AMPERSAND_form,_AMPERSAND_env,var$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("shared.debug","dbg","shared.debug/dbg",-271174777,null)),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
});

shared.debug.mdbg.cljs$lang$macro = true;
shared.debug.max_label_length = (60);
/**
 * Simple debug function useful for getting intermediates in -> piping.
 */
shared.debug.dbg = (function shared$debug$dbg(var_args){
var args484606 = [];
var len__32954__auto___484609 = arguments.length;
var i__32955__auto___484610 = (0);
while(true){
if((i__32955__auto___484610 < len__32954__auto___484609)){
args484606.push((arguments[i__32955__auto___484610]));

var G__484611 = (i__32955__auto___484610 + (1));
i__32955__auto___484610 = G__484611;
continue;
} else {
}
break;
}

var G__484608 = args484606.length;
switch (G__484608) {
case 2:
return shared.debug.dbg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shared.debug.dbg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args484606.length)].join('')));

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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null)),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rand-int","cljs.core/rand-int",901720936,null)),(function (){var x__32713__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),(function (){var x__32713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("shared.debug","mdbg","shared.debug/mdbg",630932318,null)),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})(),(function (){var x__32713__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__32713__auto__);
})())));
});

shared.debug.mdbg_sample.cljs$lang$macro = true;

//# sourceMappingURL=debug.js.map?rel=1489290118877