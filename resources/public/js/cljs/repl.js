// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__66329){
var map__66354 = p__66329;
var map__66354__$1 = ((((!((map__66354 == null)))?((((map__66354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66354):map__66354);
var m = map__66354__$1;
var n = cljs.core.get.call(null,map__66354__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__66354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6728__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6728__auto__)){
var ns = temp__6728__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__66356_66378 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66357_66379 = null;
var count__66358_66380 = (0);
var i__66359_66381 = (0);
while(true){
if((i__66359_66381 < count__66358_66380)){
var f_66382 = cljs.core._nth.call(null,chunk__66357_66379,i__66359_66381);
cljs.core.println.call(null,"  ",f_66382);

var G__66383 = seq__66356_66378;
var G__66384 = chunk__66357_66379;
var G__66385 = count__66358_66380;
var G__66386 = (i__66359_66381 + (1));
seq__66356_66378 = G__66383;
chunk__66357_66379 = G__66384;
count__66358_66380 = G__66385;
i__66359_66381 = G__66386;
continue;
} else {
var temp__6728__auto___66387 = cljs.core.seq.call(null,seq__66356_66378);
if(temp__6728__auto___66387){
var seq__66356_66388__$1 = temp__6728__auto___66387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66356_66388__$1)){
var c__35130__auto___66389 = cljs.core.chunk_first.call(null,seq__66356_66388__$1);
var G__66390 = cljs.core.chunk_rest.call(null,seq__66356_66388__$1);
var G__66391 = c__35130__auto___66389;
var G__66392 = cljs.core.count.call(null,c__35130__auto___66389);
var G__66393 = (0);
seq__66356_66378 = G__66390;
chunk__66357_66379 = G__66391;
count__66358_66380 = G__66392;
i__66359_66381 = G__66393;
continue;
} else {
var f_66394 = cljs.core.first.call(null,seq__66356_66388__$1);
cljs.core.println.call(null,"  ",f_66394);

var G__66395 = cljs.core.next.call(null,seq__66356_66388__$1);
var G__66396 = null;
var G__66397 = (0);
var G__66398 = (0);
seq__66356_66378 = G__66395;
chunk__66357_66379 = G__66396;
count__66358_66380 = G__66397;
i__66359_66381 = G__66398;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66399 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34227__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_66399);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_66399)))?cljs.core.second.call(null,arglists_66399):arglists_66399));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__66360_66400 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66361_66401 = null;
var count__66362_66402 = (0);
var i__66363_66403 = (0);
while(true){
if((i__66363_66403 < count__66362_66402)){
var vec__66364_66404 = cljs.core._nth.call(null,chunk__66361_66401,i__66363_66403);
var name_66405 = cljs.core.nth.call(null,vec__66364_66404,(0),null);
var map__66367_66406 = cljs.core.nth.call(null,vec__66364_66404,(1),null);
var map__66367_66407__$1 = ((((!((map__66367_66406 == null)))?((((map__66367_66406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66367_66406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66367_66406):map__66367_66406);
var doc_66408 = cljs.core.get.call(null,map__66367_66407__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66409 = cljs.core.get.call(null,map__66367_66407__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66405);

cljs.core.println.call(null," ",arglists_66409);

if(cljs.core.truth_(doc_66408)){
cljs.core.println.call(null," ",doc_66408);
} else {
}

var G__66410 = seq__66360_66400;
var G__66411 = chunk__66361_66401;
var G__66412 = count__66362_66402;
var G__66413 = (i__66363_66403 + (1));
seq__66360_66400 = G__66410;
chunk__66361_66401 = G__66411;
count__66362_66402 = G__66412;
i__66363_66403 = G__66413;
continue;
} else {
var temp__6728__auto___66414 = cljs.core.seq.call(null,seq__66360_66400);
if(temp__6728__auto___66414){
var seq__66360_66415__$1 = temp__6728__auto___66414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66360_66415__$1)){
var c__35130__auto___66416 = cljs.core.chunk_first.call(null,seq__66360_66415__$1);
var G__66417 = cljs.core.chunk_rest.call(null,seq__66360_66415__$1);
var G__66418 = c__35130__auto___66416;
var G__66419 = cljs.core.count.call(null,c__35130__auto___66416);
var G__66420 = (0);
seq__66360_66400 = G__66417;
chunk__66361_66401 = G__66418;
count__66362_66402 = G__66419;
i__66363_66403 = G__66420;
continue;
} else {
var vec__66369_66421 = cljs.core.first.call(null,seq__66360_66415__$1);
var name_66422 = cljs.core.nth.call(null,vec__66369_66421,(0),null);
var map__66372_66423 = cljs.core.nth.call(null,vec__66369_66421,(1),null);
var map__66372_66424__$1 = ((((!((map__66372_66423 == null)))?((((map__66372_66423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66372_66423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66372_66423):map__66372_66423);
var doc_66425 = cljs.core.get.call(null,map__66372_66424__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66426 = cljs.core.get.call(null,map__66372_66424__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66422);

cljs.core.println.call(null," ",arglists_66426);

if(cljs.core.truth_(doc_66425)){
cljs.core.println.call(null," ",doc_66425);
} else {
}

var G__66427 = cljs.core.next.call(null,seq__66360_66415__$1);
var G__66428 = null;
var G__66429 = (0);
var G__66430 = (0);
seq__66360_66400 = G__66427;
chunk__66361_66401 = G__66428;
count__66362_66402 = G__66429;
i__66363_66403 = G__66430;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6728__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6728__auto__)){
var fnspec = temp__6728__auto__;
cljs.core.print.call(null,"Spec");

var seq__66374 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__66375 = null;
var count__66376 = (0);
var i__66377 = (0);
while(true){
if((i__66377 < count__66376)){
var role = cljs.core._nth.call(null,chunk__66375,i__66377);
var temp__6728__auto___66431__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___66431__$1)){
var spec_66432 = temp__6728__auto___66431__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_66432));
} else {
}

var G__66433 = seq__66374;
var G__66434 = chunk__66375;
var G__66435 = count__66376;
var G__66436 = (i__66377 + (1));
seq__66374 = G__66433;
chunk__66375 = G__66434;
count__66376 = G__66435;
i__66377 = G__66436;
continue;
} else {
var temp__6728__auto____$1 = cljs.core.seq.call(null,seq__66374);
if(temp__6728__auto____$1){
var seq__66374__$1 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66374__$1)){
var c__35130__auto__ = cljs.core.chunk_first.call(null,seq__66374__$1);
var G__66437 = cljs.core.chunk_rest.call(null,seq__66374__$1);
var G__66438 = c__35130__auto__;
var G__66439 = cljs.core.count.call(null,c__35130__auto__);
var G__66440 = (0);
seq__66374 = G__66437;
chunk__66375 = G__66438;
count__66376 = G__66439;
i__66377 = G__66440;
continue;
} else {
var role = cljs.core.first.call(null,seq__66374__$1);
var temp__6728__auto___66441__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___66441__$2)){
var spec_66442 = temp__6728__auto___66441__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_66442));
} else {
}

var G__66443 = cljs.core.next.call(null,seq__66374__$1);
var G__66444 = null;
var G__66445 = (0);
var G__66446 = (0);
seq__66374 = G__66443;
chunk__66375 = G__66444;
count__66376 = G__66445;
i__66377 = G__66446;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1489120095377