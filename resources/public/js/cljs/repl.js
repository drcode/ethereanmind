// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__83990){
var map__84015 = p__83990;
var map__84015__$1 = ((((!((map__84015 == null)))?((((map__84015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84015):map__84015);
var m = map__84015__$1;
var n = cljs.core.get.call(null,map__84015__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__84015__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__84017_84039 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__84018_84040 = null;
var count__84019_84041 = (0);
var i__84020_84042 = (0);
while(true){
if((i__84020_84042 < count__84019_84041)){
var f_84043 = cljs.core._nth.call(null,chunk__84018_84040,i__84020_84042);
cljs.core.println.call(null,"  ",f_84043);

var G__84044 = seq__84017_84039;
var G__84045 = chunk__84018_84040;
var G__84046 = count__84019_84041;
var G__84047 = (i__84020_84042 + (1));
seq__84017_84039 = G__84044;
chunk__84018_84040 = G__84045;
count__84019_84041 = G__84046;
i__84020_84042 = G__84047;
continue;
} else {
var temp__6728__auto___84048 = cljs.core.seq.call(null,seq__84017_84039);
if(temp__6728__auto___84048){
var seq__84017_84049__$1 = temp__6728__auto___84048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84017_84049__$1)){
var c__35293__auto___84050 = cljs.core.chunk_first.call(null,seq__84017_84049__$1);
var G__84051 = cljs.core.chunk_rest.call(null,seq__84017_84049__$1);
var G__84052 = c__35293__auto___84050;
var G__84053 = cljs.core.count.call(null,c__35293__auto___84050);
var G__84054 = (0);
seq__84017_84039 = G__84051;
chunk__84018_84040 = G__84052;
count__84019_84041 = G__84053;
i__84020_84042 = G__84054;
continue;
} else {
var f_84055 = cljs.core.first.call(null,seq__84017_84049__$1);
cljs.core.println.call(null,"  ",f_84055);

var G__84056 = cljs.core.next.call(null,seq__84017_84049__$1);
var G__84057 = null;
var G__84058 = (0);
var G__84059 = (0);
seq__84017_84039 = G__84056;
chunk__84018_84040 = G__84057;
count__84019_84041 = G__84058;
i__84020_84042 = G__84059;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_84060 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34390__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_84060);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_84060)))?cljs.core.second.call(null,arglists_84060):arglists_84060));
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
var seq__84021_84061 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__84022_84062 = null;
var count__84023_84063 = (0);
var i__84024_84064 = (0);
while(true){
if((i__84024_84064 < count__84023_84063)){
var vec__84025_84065 = cljs.core._nth.call(null,chunk__84022_84062,i__84024_84064);
var name_84066 = cljs.core.nth.call(null,vec__84025_84065,(0),null);
var map__84028_84067 = cljs.core.nth.call(null,vec__84025_84065,(1),null);
var map__84028_84068__$1 = ((((!((map__84028_84067 == null)))?((((map__84028_84067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84028_84067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84028_84067):map__84028_84067);
var doc_84069 = cljs.core.get.call(null,map__84028_84068__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_84070 = cljs.core.get.call(null,map__84028_84068__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_84066);

cljs.core.println.call(null," ",arglists_84070);

if(cljs.core.truth_(doc_84069)){
cljs.core.println.call(null," ",doc_84069);
} else {
}

var G__84071 = seq__84021_84061;
var G__84072 = chunk__84022_84062;
var G__84073 = count__84023_84063;
var G__84074 = (i__84024_84064 + (1));
seq__84021_84061 = G__84071;
chunk__84022_84062 = G__84072;
count__84023_84063 = G__84073;
i__84024_84064 = G__84074;
continue;
} else {
var temp__6728__auto___84075 = cljs.core.seq.call(null,seq__84021_84061);
if(temp__6728__auto___84075){
var seq__84021_84076__$1 = temp__6728__auto___84075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84021_84076__$1)){
var c__35293__auto___84077 = cljs.core.chunk_first.call(null,seq__84021_84076__$1);
var G__84078 = cljs.core.chunk_rest.call(null,seq__84021_84076__$1);
var G__84079 = c__35293__auto___84077;
var G__84080 = cljs.core.count.call(null,c__35293__auto___84077);
var G__84081 = (0);
seq__84021_84061 = G__84078;
chunk__84022_84062 = G__84079;
count__84023_84063 = G__84080;
i__84024_84064 = G__84081;
continue;
} else {
var vec__84030_84082 = cljs.core.first.call(null,seq__84021_84076__$1);
var name_84083 = cljs.core.nth.call(null,vec__84030_84082,(0),null);
var map__84033_84084 = cljs.core.nth.call(null,vec__84030_84082,(1),null);
var map__84033_84085__$1 = ((((!((map__84033_84084 == null)))?((((map__84033_84084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84033_84084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84033_84084):map__84033_84084);
var doc_84086 = cljs.core.get.call(null,map__84033_84085__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_84087 = cljs.core.get.call(null,map__84033_84085__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_84083);

cljs.core.println.call(null," ",arglists_84087);

if(cljs.core.truth_(doc_84086)){
cljs.core.println.call(null," ",doc_84086);
} else {
}

var G__84088 = cljs.core.next.call(null,seq__84021_84076__$1);
var G__84089 = null;
var G__84090 = (0);
var G__84091 = (0);
seq__84021_84061 = G__84088;
chunk__84022_84062 = G__84089;
count__84023_84063 = G__84090;
i__84024_84064 = G__84091;
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

var seq__84035 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__84036 = null;
var count__84037 = (0);
var i__84038 = (0);
while(true){
if((i__84038 < count__84037)){
var role = cljs.core._nth.call(null,chunk__84036,i__84038);
var temp__6728__auto___84092__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___84092__$1)){
var spec_84093 = temp__6728__auto___84092__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_84093));
} else {
}

var G__84094 = seq__84035;
var G__84095 = chunk__84036;
var G__84096 = count__84037;
var G__84097 = (i__84038 + (1));
seq__84035 = G__84094;
chunk__84036 = G__84095;
count__84037 = G__84096;
i__84038 = G__84097;
continue;
} else {
var temp__6728__auto____$1 = cljs.core.seq.call(null,seq__84035);
if(temp__6728__auto____$1){
var seq__84035__$1 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84035__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__84035__$1);
var G__84098 = cljs.core.chunk_rest.call(null,seq__84035__$1);
var G__84099 = c__35293__auto__;
var G__84100 = cljs.core.count.call(null,c__35293__auto__);
var G__84101 = (0);
seq__84035 = G__84098;
chunk__84036 = G__84099;
count__84037 = G__84100;
i__84038 = G__84101;
continue;
} else {
var role = cljs.core.first.call(null,seq__84035__$1);
var temp__6728__auto___84102__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___84102__$2)){
var spec_84103 = temp__6728__auto___84102__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_84103));
} else {
}

var G__84104 = cljs.core.next.call(null,seq__84035__$1);
var G__84105 = null;
var G__84106 = (0);
var G__84107 = (0);
seq__84035 = G__84104;
chunk__84036 = G__84105;
count__84037 = G__84106;
i__84038 = G__84107;
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

//# sourceMappingURL=repl.js.map?rel=1488154334456