// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59482){
var map__59507 = p__59482;
var map__59507__$1 = ((((!((map__59507 == null)))?((((map__59507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59507):map__59507);
var m = map__59507__$1;
var n = cljs.core.get.call(null,map__59507__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__59507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__59509_59531 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59510_59532 = null;
var count__59511_59533 = (0);
var i__59512_59534 = (0);
while(true){
if((i__59512_59534 < count__59511_59533)){
var f_59535 = cljs.core._nth.call(null,chunk__59510_59532,i__59512_59534);
cljs.core.println.call(null,"  ",f_59535);

var G__59536 = seq__59509_59531;
var G__59537 = chunk__59510_59532;
var G__59538 = count__59511_59533;
var G__59539 = (i__59512_59534 + (1));
seq__59509_59531 = G__59536;
chunk__59510_59532 = G__59537;
count__59511_59533 = G__59538;
i__59512_59534 = G__59539;
continue;
} else {
var temp__4657__auto___59540 = cljs.core.seq.call(null,seq__59509_59531);
if(temp__4657__auto___59540){
var seq__59509_59541__$1 = temp__4657__auto___59540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59509_59541__$1)){
var c__32762__auto___59542 = cljs.core.chunk_first.call(null,seq__59509_59541__$1);
var G__59543 = cljs.core.chunk_rest.call(null,seq__59509_59541__$1);
var G__59544 = c__32762__auto___59542;
var G__59545 = cljs.core.count.call(null,c__32762__auto___59542);
var G__59546 = (0);
seq__59509_59531 = G__59543;
chunk__59510_59532 = G__59544;
count__59511_59533 = G__59545;
i__59512_59534 = G__59546;
continue;
} else {
var f_59547 = cljs.core.first.call(null,seq__59509_59541__$1);
cljs.core.println.call(null,"  ",f_59547);

var G__59548 = cljs.core.next.call(null,seq__59509_59541__$1);
var G__59549 = null;
var G__59550 = (0);
var G__59551 = (0);
seq__59509_59531 = G__59548;
chunk__59510_59532 = G__59549;
count__59511_59533 = G__59550;
i__59512_59534 = G__59551;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59552 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__31951__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_59552);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_59552)))?cljs.core.second.call(null,arglists_59552):arglists_59552));
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
var seq__59513_59553 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59514_59554 = null;
var count__59515_59555 = (0);
var i__59516_59556 = (0);
while(true){
if((i__59516_59556 < count__59515_59555)){
var vec__59517_59557 = cljs.core._nth.call(null,chunk__59514_59554,i__59516_59556);
var name_59558 = cljs.core.nth.call(null,vec__59517_59557,(0),null);
var map__59520_59559 = cljs.core.nth.call(null,vec__59517_59557,(1),null);
var map__59520_59560__$1 = ((((!((map__59520_59559 == null)))?((((map__59520_59559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59520_59559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59520_59559):map__59520_59559);
var doc_59561 = cljs.core.get.call(null,map__59520_59560__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59562 = cljs.core.get.call(null,map__59520_59560__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59558);

cljs.core.println.call(null," ",arglists_59562);

if(cljs.core.truth_(doc_59561)){
cljs.core.println.call(null," ",doc_59561);
} else {
}

var G__59563 = seq__59513_59553;
var G__59564 = chunk__59514_59554;
var G__59565 = count__59515_59555;
var G__59566 = (i__59516_59556 + (1));
seq__59513_59553 = G__59563;
chunk__59514_59554 = G__59564;
count__59515_59555 = G__59565;
i__59516_59556 = G__59566;
continue;
} else {
var temp__4657__auto___59567 = cljs.core.seq.call(null,seq__59513_59553);
if(temp__4657__auto___59567){
var seq__59513_59568__$1 = temp__4657__auto___59567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59513_59568__$1)){
var c__32762__auto___59569 = cljs.core.chunk_first.call(null,seq__59513_59568__$1);
var G__59570 = cljs.core.chunk_rest.call(null,seq__59513_59568__$1);
var G__59571 = c__32762__auto___59569;
var G__59572 = cljs.core.count.call(null,c__32762__auto___59569);
var G__59573 = (0);
seq__59513_59553 = G__59570;
chunk__59514_59554 = G__59571;
count__59515_59555 = G__59572;
i__59516_59556 = G__59573;
continue;
} else {
var vec__59522_59574 = cljs.core.first.call(null,seq__59513_59568__$1);
var name_59575 = cljs.core.nth.call(null,vec__59522_59574,(0),null);
var map__59525_59576 = cljs.core.nth.call(null,vec__59522_59574,(1),null);
var map__59525_59577__$1 = ((((!((map__59525_59576 == null)))?((((map__59525_59576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59525_59576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59525_59576):map__59525_59576);
var doc_59578 = cljs.core.get.call(null,map__59525_59577__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59579 = cljs.core.get.call(null,map__59525_59577__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59575);

cljs.core.println.call(null," ",arglists_59579);

if(cljs.core.truth_(doc_59578)){
cljs.core.println.call(null," ",doc_59578);
} else {
}

var G__59580 = cljs.core.next.call(null,seq__59513_59568__$1);
var G__59581 = null;
var G__59582 = (0);
var G__59583 = (0);
seq__59513_59553 = G__59580;
chunk__59514_59554 = G__59581;
count__59515_59555 = G__59582;
i__59516_59556 = G__59583;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__59527 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59528 = null;
var count__59529 = (0);
var i__59530 = (0);
while(true){
if((i__59530 < count__59529)){
var role = cljs.core._nth.call(null,chunk__59528,i__59530);
var temp__4657__auto___59584__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___59584__$1)){
var spec_59585 = temp__4657__auto___59584__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_59585));
} else {
}

var G__59586 = seq__59527;
var G__59587 = chunk__59528;
var G__59588 = count__59529;
var G__59589 = (i__59530 + (1));
seq__59527 = G__59586;
chunk__59528 = G__59587;
count__59529 = G__59588;
i__59530 = G__59589;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__59527);
if(temp__4657__auto____$1){
var seq__59527__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59527__$1)){
var c__32762__auto__ = cljs.core.chunk_first.call(null,seq__59527__$1);
var G__59590 = cljs.core.chunk_rest.call(null,seq__59527__$1);
var G__59591 = c__32762__auto__;
var G__59592 = cljs.core.count.call(null,c__32762__auto__);
var G__59593 = (0);
seq__59527 = G__59590;
chunk__59528 = G__59591;
count__59529 = G__59592;
i__59530 = G__59593;
continue;
} else {
var role = cljs.core.first.call(null,seq__59527__$1);
var temp__4657__auto___59594__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___59594__$2)){
var spec_59595 = temp__4657__auto___59594__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_59595));
} else {
}

var G__59596 = cljs.core.next.call(null,seq__59527__$1);
var G__59597 = null;
var G__59598 = (0);
var G__59599 = (0);
seq__59527 = G__59596;
chunk__59528 = G__59597;
count__59529 = G__59598;
i__59530 = G__59599;
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

//# sourceMappingURL=repl.js.map?rel=1491001412430