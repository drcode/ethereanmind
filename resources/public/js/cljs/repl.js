// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__74916){
var map__74941 = p__74916;
var map__74941__$1 = ((((!((map__74941 == null)))?((((map__74941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74941):map__74941);
var m = map__74941__$1;
var n = cljs.core.get.call(null,map__74941__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__74941__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__74943_74965 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__74944_74966 = null;
var count__74945_74967 = (0);
var i__74946_74968 = (0);
while(true){
if((i__74946_74968 < count__74945_74967)){
var f_74969 = cljs.core._nth.call(null,chunk__74944_74966,i__74946_74968);
cljs.core.println.call(null,"  ",f_74969);

var G__74970 = seq__74943_74965;
var G__74971 = chunk__74944_74966;
var G__74972 = count__74945_74967;
var G__74973 = (i__74946_74968 + (1));
seq__74943_74965 = G__74970;
chunk__74944_74966 = G__74971;
count__74945_74967 = G__74972;
i__74946_74968 = G__74973;
continue;
} else {
var temp__4657__auto___74974 = cljs.core.seq.call(null,seq__74943_74965);
if(temp__4657__auto___74974){
var seq__74943_74975__$1 = temp__4657__auto___74974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74943_74975__$1)){
var c__32690__auto___74976 = cljs.core.chunk_first.call(null,seq__74943_74975__$1);
var G__74977 = cljs.core.chunk_rest.call(null,seq__74943_74975__$1);
var G__74978 = c__32690__auto___74976;
var G__74979 = cljs.core.count.call(null,c__32690__auto___74976);
var G__74980 = (0);
seq__74943_74965 = G__74977;
chunk__74944_74966 = G__74978;
count__74945_74967 = G__74979;
i__74946_74968 = G__74980;
continue;
} else {
var f_74981 = cljs.core.first.call(null,seq__74943_74975__$1);
cljs.core.println.call(null,"  ",f_74981);

var G__74982 = cljs.core.next.call(null,seq__74943_74975__$1);
var G__74983 = null;
var G__74984 = (0);
var G__74985 = (0);
seq__74943_74965 = G__74982;
chunk__74944_74966 = G__74983;
count__74945_74967 = G__74984;
i__74946_74968 = G__74985;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_74986 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__31879__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_74986);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_74986)))?cljs.core.second.call(null,arglists_74986):arglists_74986));
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
var seq__74947_74987 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__74948_74988 = null;
var count__74949_74989 = (0);
var i__74950_74990 = (0);
while(true){
if((i__74950_74990 < count__74949_74989)){
var vec__74951_74991 = cljs.core._nth.call(null,chunk__74948_74988,i__74950_74990);
var name_74992 = cljs.core.nth.call(null,vec__74951_74991,(0),null);
var map__74954_74993 = cljs.core.nth.call(null,vec__74951_74991,(1),null);
var map__74954_74994__$1 = ((((!((map__74954_74993 == null)))?((((map__74954_74993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74954_74993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74954_74993):map__74954_74993);
var doc_74995 = cljs.core.get.call(null,map__74954_74994__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_74996 = cljs.core.get.call(null,map__74954_74994__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_74992);

cljs.core.println.call(null," ",arglists_74996);

if(cljs.core.truth_(doc_74995)){
cljs.core.println.call(null," ",doc_74995);
} else {
}

var G__74997 = seq__74947_74987;
var G__74998 = chunk__74948_74988;
var G__74999 = count__74949_74989;
var G__75000 = (i__74950_74990 + (1));
seq__74947_74987 = G__74997;
chunk__74948_74988 = G__74998;
count__74949_74989 = G__74999;
i__74950_74990 = G__75000;
continue;
} else {
var temp__4657__auto___75001 = cljs.core.seq.call(null,seq__74947_74987);
if(temp__4657__auto___75001){
var seq__74947_75002__$1 = temp__4657__auto___75001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74947_75002__$1)){
var c__32690__auto___75003 = cljs.core.chunk_first.call(null,seq__74947_75002__$1);
var G__75004 = cljs.core.chunk_rest.call(null,seq__74947_75002__$1);
var G__75005 = c__32690__auto___75003;
var G__75006 = cljs.core.count.call(null,c__32690__auto___75003);
var G__75007 = (0);
seq__74947_74987 = G__75004;
chunk__74948_74988 = G__75005;
count__74949_74989 = G__75006;
i__74950_74990 = G__75007;
continue;
} else {
var vec__74956_75008 = cljs.core.first.call(null,seq__74947_75002__$1);
var name_75009 = cljs.core.nth.call(null,vec__74956_75008,(0),null);
var map__74959_75010 = cljs.core.nth.call(null,vec__74956_75008,(1),null);
var map__74959_75011__$1 = ((((!((map__74959_75010 == null)))?((((map__74959_75010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74959_75010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74959_75010):map__74959_75010);
var doc_75012 = cljs.core.get.call(null,map__74959_75011__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_75013 = cljs.core.get.call(null,map__74959_75011__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_75009);

cljs.core.println.call(null," ",arglists_75013);

if(cljs.core.truth_(doc_75012)){
cljs.core.println.call(null," ",doc_75012);
} else {
}

var G__75014 = cljs.core.next.call(null,seq__74947_75002__$1);
var G__75015 = null;
var G__75016 = (0);
var G__75017 = (0);
seq__74947_74987 = G__75014;
chunk__74948_74988 = G__75015;
count__74949_74989 = G__75016;
i__74950_74990 = G__75017;
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

var seq__74961 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__74962 = null;
var count__74963 = (0);
var i__74964 = (0);
while(true){
if((i__74964 < count__74963)){
var role = cljs.core._nth.call(null,chunk__74962,i__74964);
var temp__4657__auto___75018__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___75018__$1)){
var spec_75019 = temp__4657__auto___75018__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_75019));
} else {
}

var G__75020 = seq__74961;
var G__75021 = chunk__74962;
var G__75022 = count__74963;
var G__75023 = (i__74964 + (1));
seq__74961 = G__75020;
chunk__74962 = G__75021;
count__74963 = G__75022;
i__74964 = G__75023;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__74961);
if(temp__4657__auto____$1){
var seq__74961__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74961__$1)){
var c__32690__auto__ = cljs.core.chunk_first.call(null,seq__74961__$1);
var G__75024 = cljs.core.chunk_rest.call(null,seq__74961__$1);
var G__75025 = c__32690__auto__;
var G__75026 = cljs.core.count.call(null,c__32690__auto__);
var G__75027 = (0);
seq__74961 = G__75024;
chunk__74962 = G__75025;
count__74963 = G__75026;
i__74964 = G__75027;
continue;
} else {
var role = cljs.core.first.call(null,seq__74961__$1);
var temp__4657__auto___75028__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___75028__$2)){
var spec_75029 = temp__4657__auto___75028__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_75029));
} else {
}

var G__75030 = cljs.core.next.call(null,seq__74961__$1);
var G__75031 = null;
var G__75032 = (0);
var G__75033 = (0);
seq__74961 = G__75030;
chunk__74962 = G__75031;
count__74963 = G__75032;
i__74964 = G__75033;
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

//# sourceMappingURL=repl.js.map?rel=1489123432922