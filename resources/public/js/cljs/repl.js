// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__494555){
var map__494580 = p__494555;
var map__494580__$1 = ((((!((map__494580 == null)))?((((map__494580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__494580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__494580):map__494580);
var m = map__494580__$1;
var n = cljs.core.get.call(null,map__494580__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__494580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__494582_494604 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__494583_494605 = null;
var count__494584_494606 = (0);
var i__494585_494607 = (0);
while(true){
if((i__494585_494607 < count__494584_494606)){
var f_494608 = cljs.core._nth.call(null,chunk__494583_494605,i__494585_494607);
cljs.core.println.call(null,"  ",f_494608);

var G__494609 = seq__494582_494604;
var G__494610 = chunk__494583_494605;
var G__494611 = count__494584_494606;
var G__494612 = (i__494585_494607 + (1));
seq__494582_494604 = G__494609;
chunk__494583_494605 = G__494610;
count__494584_494606 = G__494611;
i__494585_494607 = G__494612;
continue;
} else {
var temp__4657__auto___494613 = cljs.core.seq.call(null,seq__494582_494604);
if(temp__4657__auto___494613){
var seq__494582_494614__$1 = temp__4657__auto___494613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__494582_494614__$1)){
var c__32690__auto___494615 = cljs.core.chunk_first.call(null,seq__494582_494614__$1);
var G__494616 = cljs.core.chunk_rest.call(null,seq__494582_494614__$1);
var G__494617 = c__32690__auto___494615;
var G__494618 = cljs.core.count.call(null,c__32690__auto___494615);
var G__494619 = (0);
seq__494582_494604 = G__494616;
chunk__494583_494605 = G__494617;
count__494584_494606 = G__494618;
i__494585_494607 = G__494619;
continue;
} else {
var f_494620 = cljs.core.first.call(null,seq__494582_494614__$1);
cljs.core.println.call(null,"  ",f_494620);

var G__494621 = cljs.core.next.call(null,seq__494582_494614__$1);
var G__494622 = null;
var G__494623 = (0);
var G__494624 = (0);
seq__494582_494604 = G__494621;
chunk__494583_494605 = G__494622;
count__494584_494606 = G__494623;
i__494585_494607 = G__494624;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_494625 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__31879__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_494625);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_494625)))?cljs.core.second.call(null,arglists_494625):arglists_494625));
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
var seq__494586_494626 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__494587_494627 = null;
var count__494588_494628 = (0);
var i__494589_494629 = (0);
while(true){
if((i__494589_494629 < count__494588_494628)){
var vec__494590_494630 = cljs.core._nth.call(null,chunk__494587_494627,i__494589_494629);
var name_494631 = cljs.core.nth.call(null,vec__494590_494630,(0),null);
var map__494593_494632 = cljs.core.nth.call(null,vec__494590_494630,(1),null);
var map__494593_494633__$1 = ((((!((map__494593_494632 == null)))?((((map__494593_494632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__494593_494632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__494593_494632):map__494593_494632);
var doc_494634 = cljs.core.get.call(null,map__494593_494633__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_494635 = cljs.core.get.call(null,map__494593_494633__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_494631);

cljs.core.println.call(null," ",arglists_494635);

if(cljs.core.truth_(doc_494634)){
cljs.core.println.call(null," ",doc_494634);
} else {
}

var G__494636 = seq__494586_494626;
var G__494637 = chunk__494587_494627;
var G__494638 = count__494588_494628;
var G__494639 = (i__494589_494629 + (1));
seq__494586_494626 = G__494636;
chunk__494587_494627 = G__494637;
count__494588_494628 = G__494638;
i__494589_494629 = G__494639;
continue;
} else {
var temp__4657__auto___494640 = cljs.core.seq.call(null,seq__494586_494626);
if(temp__4657__auto___494640){
var seq__494586_494641__$1 = temp__4657__auto___494640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__494586_494641__$1)){
var c__32690__auto___494642 = cljs.core.chunk_first.call(null,seq__494586_494641__$1);
var G__494643 = cljs.core.chunk_rest.call(null,seq__494586_494641__$1);
var G__494644 = c__32690__auto___494642;
var G__494645 = cljs.core.count.call(null,c__32690__auto___494642);
var G__494646 = (0);
seq__494586_494626 = G__494643;
chunk__494587_494627 = G__494644;
count__494588_494628 = G__494645;
i__494589_494629 = G__494646;
continue;
} else {
var vec__494595_494647 = cljs.core.first.call(null,seq__494586_494641__$1);
var name_494648 = cljs.core.nth.call(null,vec__494595_494647,(0),null);
var map__494598_494649 = cljs.core.nth.call(null,vec__494595_494647,(1),null);
var map__494598_494650__$1 = ((((!((map__494598_494649 == null)))?((((map__494598_494649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__494598_494649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__494598_494649):map__494598_494649);
var doc_494651 = cljs.core.get.call(null,map__494598_494650__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_494652 = cljs.core.get.call(null,map__494598_494650__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_494648);

cljs.core.println.call(null," ",arglists_494652);

if(cljs.core.truth_(doc_494651)){
cljs.core.println.call(null," ",doc_494651);
} else {
}

var G__494653 = cljs.core.next.call(null,seq__494586_494641__$1);
var G__494654 = null;
var G__494655 = (0);
var G__494656 = (0);
seq__494586_494626 = G__494653;
chunk__494587_494627 = G__494654;
count__494588_494628 = G__494655;
i__494589_494629 = G__494656;
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

var seq__494600 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__494601 = null;
var count__494602 = (0);
var i__494603 = (0);
while(true){
if((i__494603 < count__494602)){
var role = cljs.core._nth.call(null,chunk__494601,i__494603);
var temp__4657__auto___494657__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___494657__$1)){
var spec_494658 = temp__4657__auto___494657__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_494658));
} else {
}

var G__494659 = seq__494600;
var G__494660 = chunk__494601;
var G__494661 = count__494602;
var G__494662 = (i__494603 + (1));
seq__494600 = G__494659;
chunk__494601 = G__494660;
count__494602 = G__494661;
i__494603 = G__494662;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__494600);
if(temp__4657__auto____$1){
var seq__494600__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__494600__$1)){
var c__32690__auto__ = cljs.core.chunk_first.call(null,seq__494600__$1);
var G__494663 = cljs.core.chunk_rest.call(null,seq__494600__$1);
var G__494664 = c__32690__auto__;
var G__494665 = cljs.core.count.call(null,c__32690__auto__);
var G__494666 = (0);
seq__494600 = G__494663;
chunk__494601 = G__494664;
count__494602 = G__494665;
i__494603 = G__494666;
continue;
} else {
var role = cljs.core.first.call(null,seq__494600__$1);
var temp__4657__auto___494667__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___494667__$2)){
var spec_494668 = temp__4657__auto___494667__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_494668));
} else {
}

var G__494669 = cljs.core.next.call(null,seq__494600__$1);
var G__494670 = null;
var G__494671 = (0);
var G__494672 = (0);
seq__494600 = G__494669;
chunk__494601 = G__494670;
count__494602 = G__494671;
i__494603 = G__494672;
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

//# sourceMappingURL=repl.js.map?rel=1489290126379