// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__31951__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__31951__auto__){
return or__31951__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__31951__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__57400_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__57400_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__57405 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__57406 = null;
var count__57407 = (0);
var i__57408 = (0);
while(true){
if((i__57408 < count__57407)){
var n = cljs.core._nth.call(null,chunk__57406,i__57408);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__57409 = seq__57405;
var G__57410 = chunk__57406;
var G__57411 = count__57407;
var G__57412 = (i__57408 + (1));
seq__57405 = G__57409;
chunk__57406 = G__57410;
count__57407 = G__57411;
i__57408 = G__57412;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57405);
if(temp__4657__auto__){
var seq__57405__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57405__$1)){
var c__32762__auto__ = cljs.core.chunk_first.call(null,seq__57405__$1);
var G__57413 = cljs.core.chunk_rest.call(null,seq__57405__$1);
var G__57414 = c__32762__auto__;
var G__57415 = cljs.core.count.call(null,c__32762__auto__);
var G__57416 = (0);
seq__57405 = G__57413;
chunk__57406 = G__57414;
count__57407 = G__57415;
i__57408 = G__57416;
continue;
} else {
var n = cljs.core.first.call(null,seq__57405__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__57417 = cljs.core.next.call(null,seq__57405__$1);
var G__57418 = null;
var G__57419 = (0);
var G__57420 = (0);
seq__57405 = G__57417;
chunk__57406 = G__57418;
count__57407 = G__57419;
i__57408 = G__57420;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__57471_57482 = cljs.core.seq.call(null,deps);
var chunk__57472_57483 = null;
var count__57473_57484 = (0);
var i__57474_57485 = (0);
while(true){
if((i__57474_57485 < count__57473_57484)){
var dep_57486 = cljs.core._nth.call(null,chunk__57472_57483,i__57474_57485);
topo_sort_helper_STAR_.call(null,dep_57486,(depth + (1)),state);

var G__57487 = seq__57471_57482;
var G__57488 = chunk__57472_57483;
var G__57489 = count__57473_57484;
var G__57490 = (i__57474_57485 + (1));
seq__57471_57482 = G__57487;
chunk__57472_57483 = G__57488;
count__57473_57484 = G__57489;
i__57474_57485 = G__57490;
continue;
} else {
var temp__4657__auto___57491 = cljs.core.seq.call(null,seq__57471_57482);
if(temp__4657__auto___57491){
var seq__57471_57492__$1 = temp__4657__auto___57491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57471_57492__$1)){
var c__32762__auto___57493 = cljs.core.chunk_first.call(null,seq__57471_57492__$1);
var G__57494 = cljs.core.chunk_rest.call(null,seq__57471_57492__$1);
var G__57495 = c__32762__auto___57493;
var G__57496 = cljs.core.count.call(null,c__32762__auto___57493);
var G__57497 = (0);
seq__57471_57482 = G__57494;
chunk__57472_57483 = G__57495;
count__57473_57484 = G__57496;
i__57474_57485 = G__57497;
continue;
} else {
var dep_57498 = cljs.core.first.call(null,seq__57471_57492__$1);
topo_sort_helper_STAR_.call(null,dep_57498,(depth + (1)),state);

var G__57499 = cljs.core.next.call(null,seq__57471_57492__$1);
var G__57500 = null;
var G__57501 = (0);
var G__57502 = (0);
seq__57471_57482 = G__57499;
chunk__57472_57483 = G__57500;
count__57473_57484 = G__57501;
i__57474_57485 = G__57502;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__57475){
var vec__57479 = p__57475;
var seq__57480 = cljs.core.seq.call(null,vec__57479);
var first__57481 = cljs.core.first.call(null,seq__57480);
var seq__57480__$1 = cljs.core.next.call(null,seq__57480);
var x = first__57481;
var xs = seq__57480__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__57479,seq__57480,first__57481,seq__57480__$1,x,xs,get_deps__$1){
return (function (p1__57421_SHARP_){
return clojure.set.difference.call(null,p1__57421_SHARP_,x);
});})(vec__57479,seq__57480,first__57481,seq__57480__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__57515 = cljs.core.seq.call(null,provides);
var chunk__57516 = null;
var count__57517 = (0);
var i__57518 = (0);
while(true){
if((i__57518 < count__57517)){
var prov = cljs.core._nth.call(null,chunk__57516,i__57518);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57519_57527 = cljs.core.seq.call(null,requires);
var chunk__57520_57528 = null;
var count__57521_57529 = (0);
var i__57522_57530 = (0);
while(true){
if((i__57522_57530 < count__57521_57529)){
var req_57531 = cljs.core._nth.call(null,chunk__57520_57528,i__57522_57530);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57531,prov);

var G__57532 = seq__57519_57527;
var G__57533 = chunk__57520_57528;
var G__57534 = count__57521_57529;
var G__57535 = (i__57522_57530 + (1));
seq__57519_57527 = G__57532;
chunk__57520_57528 = G__57533;
count__57521_57529 = G__57534;
i__57522_57530 = G__57535;
continue;
} else {
var temp__4657__auto___57536 = cljs.core.seq.call(null,seq__57519_57527);
if(temp__4657__auto___57536){
var seq__57519_57537__$1 = temp__4657__auto___57536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57519_57537__$1)){
var c__32762__auto___57538 = cljs.core.chunk_first.call(null,seq__57519_57537__$1);
var G__57539 = cljs.core.chunk_rest.call(null,seq__57519_57537__$1);
var G__57540 = c__32762__auto___57538;
var G__57541 = cljs.core.count.call(null,c__32762__auto___57538);
var G__57542 = (0);
seq__57519_57527 = G__57539;
chunk__57520_57528 = G__57540;
count__57521_57529 = G__57541;
i__57522_57530 = G__57542;
continue;
} else {
var req_57543 = cljs.core.first.call(null,seq__57519_57537__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57543,prov);

var G__57544 = cljs.core.next.call(null,seq__57519_57537__$1);
var G__57545 = null;
var G__57546 = (0);
var G__57547 = (0);
seq__57519_57527 = G__57544;
chunk__57520_57528 = G__57545;
count__57521_57529 = G__57546;
i__57522_57530 = G__57547;
continue;
}
} else {
}
}
break;
}

var G__57548 = seq__57515;
var G__57549 = chunk__57516;
var G__57550 = count__57517;
var G__57551 = (i__57518 + (1));
seq__57515 = G__57548;
chunk__57516 = G__57549;
count__57517 = G__57550;
i__57518 = G__57551;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57515);
if(temp__4657__auto__){
var seq__57515__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57515__$1)){
var c__32762__auto__ = cljs.core.chunk_first.call(null,seq__57515__$1);
var G__57552 = cljs.core.chunk_rest.call(null,seq__57515__$1);
var G__57553 = c__32762__auto__;
var G__57554 = cljs.core.count.call(null,c__32762__auto__);
var G__57555 = (0);
seq__57515 = G__57552;
chunk__57516 = G__57553;
count__57517 = G__57554;
i__57518 = G__57555;
continue;
} else {
var prov = cljs.core.first.call(null,seq__57515__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57523_57556 = cljs.core.seq.call(null,requires);
var chunk__57524_57557 = null;
var count__57525_57558 = (0);
var i__57526_57559 = (0);
while(true){
if((i__57526_57559 < count__57525_57558)){
var req_57560 = cljs.core._nth.call(null,chunk__57524_57557,i__57526_57559);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57560,prov);

var G__57561 = seq__57523_57556;
var G__57562 = chunk__57524_57557;
var G__57563 = count__57525_57558;
var G__57564 = (i__57526_57559 + (1));
seq__57523_57556 = G__57561;
chunk__57524_57557 = G__57562;
count__57525_57558 = G__57563;
i__57526_57559 = G__57564;
continue;
} else {
var temp__4657__auto___57565__$1 = cljs.core.seq.call(null,seq__57523_57556);
if(temp__4657__auto___57565__$1){
var seq__57523_57566__$1 = temp__4657__auto___57565__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57523_57566__$1)){
var c__32762__auto___57567 = cljs.core.chunk_first.call(null,seq__57523_57566__$1);
var G__57568 = cljs.core.chunk_rest.call(null,seq__57523_57566__$1);
var G__57569 = c__32762__auto___57567;
var G__57570 = cljs.core.count.call(null,c__32762__auto___57567);
var G__57571 = (0);
seq__57523_57556 = G__57568;
chunk__57524_57557 = G__57569;
count__57525_57558 = G__57570;
i__57526_57559 = G__57571;
continue;
} else {
var req_57572 = cljs.core.first.call(null,seq__57523_57566__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57572,prov);

var G__57573 = cljs.core.next.call(null,seq__57523_57566__$1);
var G__57574 = null;
var G__57575 = (0);
var G__57576 = (0);
seq__57523_57556 = G__57573;
chunk__57524_57557 = G__57574;
count__57525_57558 = G__57575;
i__57526_57559 = G__57576;
continue;
}
} else {
}
}
break;
}

var G__57577 = cljs.core.next.call(null,seq__57515__$1);
var G__57578 = null;
var G__57579 = (0);
var G__57580 = (0);
seq__57515 = G__57577;
chunk__57516 = G__57578;
count__57517 = G__57579;
i__57518 = G__57580;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__57585_57589 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__57586_57590 = null;
var count__57587_57591 = (0);
var i__57588_57592 = (0);
while(true){
if((i__57588_57592 < count__57587_57591)){
var ns_57593 = cljs.core._nth.call(null,chunk__57586_57590,i__57588_57592);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57593);

var G__57594 = seq__57585_57589;
var G__57595 = chunk__57586_57590;
var G__57596 = count__57587_57591;
var G__57597 = (i__57588_57592 + (1));
seq__57585_57589 = G__57594;
chunk__57586_57590 = G__57595;
count__57587_57591 = G__57596;
i__57588_57592 = G__57597;
continue;
} else {
var temp__4657__auto___57598 = cljs.core.seq.call(null,seq__57585_57589);
if(temp__4657__auto___57598){
var seq__57585_57599__$1 = temp__4657__auto___57598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57585_57599__$1)){
var c__32762__auto___57600 = cljs.core.chunk_first.call(null,seq__57585_57599__$1);
var G__57601 = cljs.core.chunk_rest.call(null,seq__57585_57599__$1);
var G__57602 = c__32762__auto___57600;
var G__57603 = cljs.core.count.call(null,c__32762__auto___57600);
var G__57604 = (0);
seq__57585_57589 = G__57601;
chunk__57586_57590 = G__57602;
count__57587_57591 = G__57603;
i__57588_57592 = G__57604;
continue;
} else {
var ns_57605 = cljs.core.first.call(null,seq__57585_57599__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57605);

var G__57606 = cljs.core.next.call(null,seq__57585_57599__$1);
var G__57607 = null;
var G__57608 = (0);
var G__57609 = (0);
seq__57585_57589 = G__57606;
chunk__57586_57590 = G__57607;
count__57587_57591 = G__57608;
i__57588_57592 = G__57609;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__31951__auto__ = goog.require__;
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__57610__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__57610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57611__i = 0, G__57611__a = new Array(arguments.length -  0);
while (G__57611__i < G__57611__a.length) {G__57611__a[G__57611__i] = arguments[G__57611__i + 0]; ++G__57611__i;}
  args = new cljs.core.IndexedSeq(G__57611__a,0);
} 
return G__57610__delegate.call(this,args);};
G__57610.cljs$lang$maxFixedArity = 0;
G__57610.cljs$lang$applyTo = (function (arglist__57612){
var args = cljs.core.seq(arglist__57612);
return G__57610__delegate(args);
});
G__57610.cljs$core$IFn$_invoke$arity$variadic = G__57610__delegate;
return G__57610;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__57614 = cljs.core._EQ_;
var expr__57615 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__57614.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__57615))){
var path_parts = ((function (pred__57614,expr__57615){
return (function (p1__57613_SHARP_){
return clojure.string.split.call(null,p1__57613_SHARP_,/[\/\\]/);
});})(pred__57614,expr__57615))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__57614,expr__57615){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e57617){if((e57617 instanceof Error)){
var e = e57617;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e57617;

}
}})());
});
;})(path_parts,sep,root,pred__57614,expr__57615))
} else {
if(cljs.core.truth_(pred__57614.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__57615))){
return ((function (pred__57614,expr__57615){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__57614,expr__57615){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__57614,expr__57615))
);

return deferred.addErrback(((function (deferred,pred__57614,expr__57615){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__57614,expr__57615))
);
});
;})(pred__57614,expr__57615))
} else {
return ((function (pred__57614,expr__57615){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__57614,expr__57615))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__57618,callback){
var map__57621 = p__57618;
var map__57621__$1 = ((((!((map__57621 == null)))?((((map__57621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57621):map__57621);
var file_msg = map__57621__$1;
var request_url = cljs.core.get.call(null,map__57621__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__57621,map__57621__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__57621,map__57621__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__){
return (function (state_57645){
var state_val_57646 = (state_57645[(1)]);
if((state_val_57646 === (7))){
var inst_57641 = (state_57645[(2)]);
var state_57645__$1 = state_57645;
var statearr_57647_57667 = state_57645__$1;
(statearr_57647_57667[(2)] = inst_57641);

(statearr_57647_57667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57646 === (1))){
var state_57645__$1 = state_57645;
var statearr_57648_57668 = state_57645__$1;
(statearr_57648_57668[(2)] = null);

(statearr_57648_57668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57646 === (4))){
var inst_57625 = (state_57645[(7)]);
var inst_57625__$1 = (state_57645[(2)]);
var state_57645__$1 = (function (){var statearr_57649 = state_57645;
(statearr_57649[(7)] = inst_57625__$1);

return statearr_57649;
})();
if(cljs.core.truth_(inst_57625__$1)){
var statearr_57650_57669 = state_57645__$1;
(statearr_57650_57669[(1)] = (5));

} else {
var statearr_57651_57670 = state_57645__$1;
(statearr_57651_57670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57646 === (6))){
var state_57645__$1 = state_57645;
var statearr_57652_57671 = state_57645__$1;
(statearr_57652_57671[(2)] = null);

(statearr_57652_57671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57646 === (3))){
var inst_57643 = (state_57645[(2)]);
var state_57645__$1 = state_57645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57645__$1,inst_57643);
} else {
if((state_val_57646 === (2))){
var state_57645__$1 = state_57645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57645__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_57646 === (11))){
var inst_57637 = (state_57645[(2)]);
var state_57645__$1 = (function (){var statearr_57653 = state_57645;
(statearr_57653[(8)] = inst_57637);

return statearr_57653;
})();
var statearr_57654_57672 = state_57645__$1;
(statearr_57654_57672[(2)] = null);

(statearr_57654_57672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57646 === (9))){
var inst_57629 = (state_57645[(9)]);
var inst_57631 = (state_57645[(10)]);
var inst_57633 = inst_57631.call(null,inst_57629);
var state_57645__$1 = state_57645;
var statearr_57655_57673 = state_57645__$1;
(statearr_57655_57673[(2)] = inst_57633);

(statearr_57655_57673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57646 === (5))){
var inst_57625 = (state_57645[(7)]);
var inst_57627 = figwheel.client.file_reloading.blocking_load.call(null,inst_57625);
var state_57645__$1 = state_57645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57645__$1,(8),inst_57627);
} else {
if((state_val_57646 === (10))){
var inst_57629 = (state_57645[(9)]);
var inst_57635 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_57629);
var state_57645__$1 = state_57645;
var statearr_57656_57674 = state_57645__$1;
(statearr_57656_57674[(2)] = inst_57635);

(statearr_57656_57674[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57646 === (8))){
var inst_57625 = (state_57645[(7)]);
var inst_57631 = (state_57645[(10)]);
var inst_57629 = (state_57645[(2)]);
var inst_57630 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_57631__$1 = cljs.core.get.call(null,inst_57630,inst_57625);
var state_57645__$1 = (function (){var statearr_57657 = state_57645;
(statearr_57657[(9)] = inst_57629);

(statearr_57657[(10)] = inst_57631__$1);

return statearr_57657;
})();
if(cljs.core.truth_(inst_57631__$1)){
var statearr_57658_57675 = state_57645__$1;
(statearr_57658_57675[(1)] = (9));

} else {
var statearr_57659_57676 = state_57645__$1;
(statearr_57659_57676[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__36744__auto__))
;
return ((function (switch__36723__auto__,c__36744__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__36724__auto__ = null;
var figwheel$client$file_reloading$state_machine__36724__auto____0 = (function (){
var statearr_57663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57663[(0)] = figwheel$client$file_reloading$state_machine__36724__auto__);

(statearr_57663[(1)] = (1));

return statearr_57663;
});
var figwheel$client$file_reloading$state_machine__36724__auto____1 = (function (state_57645){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_57645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e57664){if((e57664 instanceof Object)){
var ex__36727__auto__ = e57664;
var statearr_57665_57677 = state_57645;
(statearr_57665_57677[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57678 = state_57645;
state_57645 = G__57678;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__36724__auto__ = function(state_57645){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__36724__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__36724__auto____1.call(this,state_57645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__36724__auto____0;
figwheel$client$file_reloading$state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__36724__auto____1;
return figwheel$client$file_reloading$state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__))
})();
var state__36746__auto__ = (function (){var statearr_57666 = f__36745__auto__.call(null);
(statearr_57666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_57666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__))
);

return c__36744__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__57679,callback){
var map__57682 = p__57679;
var map__57682__$1 = ((((!((map__57682 == null)))?((((map__57682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57682):map__57682);
var file_msg = map__57682__$1;
var namespace = cljs.core.get.call(null,map__57682__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__57682,map__57682__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__57682,map__57682__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__57684){
var map__57687 = p__57684;
var map__57687__$1 = ((((!((map__57687 == null)))?((((map__57687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57687):map__57687);
var file_msg = map__57687__$1;
var namespace = cljs.core.get.call(null,map__57687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__31939__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__31939__auto__){
var or__31951__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__31951__auto__)){
return or__31951__auto__;
} else {
var or__31951__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__31951__auto____$1)){
return or__31951__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__31939__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__57689,callback){
var map__57692 = p__57689;
var map__57692__$1 = ((((!((map__57692 == null)))?((((map__57692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57692):map__57692);
var file_msg = map__57692__$1;
var request_url = cljs.core.get.call(null,map__57692__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__57692__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__36744__auto___57796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto___57796,out){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto___57796,out){
return (function (state_57778){
var state_val_57779 = (state_57778[(1)]);
if((state_val_57779 === (1))){
var inst_57752 = cljs.core.seq.call(null,files);
var inst_57753 = cljs.core.first.call(null,inst_57752);
var inst_57754 = cljs.core.next.call(null,inst_57752);
var inst_57755 = files;
var state_57778__$1 = (function (){var statearr_57780 = state_57778;
(statearr_57780[(7)] = inst_57755);

(statearr_57780[(8)] = inst_57754);

(statearr_57780[(9)] = inst_57753);

return statearr_57780;
})();
var statearr_57781_57797 = state_57778__$1;
(statearr_57781_57797[(2)] = null);

(statearr_57781_57797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57779 === (2))){
var inst_57755 = (state_57778[(7)]);
var inst_57761 = (state_57778[(10)]);
var inst_57760 = cljs.core.seq.call(null,inst_57755);
var inst_57761__$1 = cljs.core.first.call(null,inst_57760);
var inst_57762 = cljs.core.next.call(null,inst_57760);
var inst_57763 = (inst_57761__$1 == null);
var inst_57764 = cljs.core.not.call(null,inst_57763);
var state_57778__$1 = (function (){var statearr_57782 = state_57778;
(statearr_57782[(10)] = inst_57761__$1);

(statearr_57782[(11)] = inst_57762);

return statearr_57782;
})();
if(inst_57764){
var statearr_57783_57798 = state_57778__$1;
(statearr_57783_57798[(1)] = (4));

} else {
var statearr_57784_57799 = state_57778__$1;
(statearr_57784_57799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57779 === (3))){
var inst_57776 = (state_57778[(2)]);
var state_57778__$1 = state_57778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57778__$1,inst_57776);
} else {
if((state_val_57779 === (4))){
var inst_57761 = (state_57778[(10)]);
var inst_57766 = figwheel.client.file_reloading.reload_js_file.call(null,inst_57761);
var state_57778__$1 = state_57778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57778__$1,(7),inst_57766);
} else {
if((state_val_57779 === (5))){
var inst_57772 = cljs.core.async.close_BANG_.call(null,out);
var state_57778__$1 = state_57778;
var statearr_57785_57800 = state_57778__$1;
(statearr_57785_57800[(2)] = inst_57772);

(statearr_57785_57800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57779 === (6))){
var inst_57774 = (state_57778[(2)]);
var state_57778__$1 = state_57778;
var statearr_57786_57801 = state_57778__$1;
(statearr_57786_57801[(2)] = inst_57774);

(statearr_57786_57801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57779 === (7))){
var inst_57762 = (state_57778[(11)]);
var inst_57768 = (state_57778[(2)]);
var inst_57769 = cljs.core.async.put_BANG_.call(null,out,inst_57768);
var inst_57755 = inst_57762;
var state_57778__$1 = (function (){var statearr_57787 = state_57778;
(statearr_57787[(7)] = inst_57755);

(statearr_57787[(12)] = inst_57769);

return statearr_57787;
})();
var statearr_57788_57802 = state_57778__$1;
(statearr_57788_57802[(2)] = null);

(statearr_57788_57802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__36744__auto___57796,out))
;
return ((function (switch__36723__auto__,c__36744__auto___57796,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto____0 = (function (){
var statearr_57792 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57792[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto__);

(statearr_57792[(1)] = (1));

return statearr_57792;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto____1 = (function (state_57778){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_57778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e57793){if((e57793 instanceof Object)){
var ex__36727__auto__ = e57793;
var statearr_57794_57803 = state_57778;
(statearr_57794_57803[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57804 = state_57778;
state_57778 = G__57804;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto__ = function(state_57778){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto____1.call(this,state_57778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto___57796,out))
})();
var state__36746__auto__ = (function (){var statearr_57795 = f__36745__auto__.call(null);
(statearr_57795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto___57796);

return statearr_57795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto___57796,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__57805,opts){
var map__57809 = p__57805;
var map__57809__$1 = ((((!((map__57809 == null)))?((((map__57809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57809):map__57809);
var eval_body__$1 = cljs.core.get.call(null,map__57809__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__57809__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__31939__auto__ = eval_body__$1;
if(cljs.core.truth_(and__31939__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__31939__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e57811){var e = e57811;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__57812_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__57812_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__57821){
var vec__57822 = p__57821;
var k = cljs.core.nth.call(null,vec__57822,(0),null);
var v = cljs.core.nth.call(null,vec__57822,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__57825){
var vec__57826 = p__57825;
var k = cljs.core.nth.call(null,vec__57826,(0),null);
var v = cljs.core.nth.call(null,vec__57826,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__57832,p__57833){
var map__58080 = p__57832;
var map__58080__$1 = ((((!((map__58080 == null)))?((((map__58080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58080):map__58080);
var opts = map__58080__$1;
var before_jsload = cljs.core.get.call(null,map__58080__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__58080__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__58080__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__58081 = p__57833;
var map__58081__$1 = ((((!((map__58081 == null)))?((((map__58081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58081):map__58081);
var msg = map__58081__$1;
var files = cljs.core.get.call(null,map__58081__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__58081__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__58081__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__36744__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__36745__auto__ = (function (){var switch__36723__auto__ = ((function (c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_58234){
var state_val_58235 = (state_58234[(1)]);
if((state_val_58235 === (7))){
var inst_58098 = (state_58234[(7)]);
var inst_58095 = (state_58234[(8)]);
var inst_58096 = (state_58234[(9)]);
var inst_58097 = (state_58234[(10)]);
var inst_58103 = cljs.core._nth.call(null,inst_58096,inst_58098);
var inst_58104 = figwheel.client.file_reloading.eval_body.call(null,inst_58103,opts);
var inst_58105 = (inst_58098 + (1));
var tmp58236 = inst_58095;
var tmp58237 = inst_58096;
var tmp58238 = inst_58097;
var inst_58095__$1 = tmp58236;
var inst_58096__$1 = tmp58237;
var inst_58097__$1 = tmp58238;
var inst_58098__$1 = inst_58105;
var state_58234__$1 = (function (){var statearr_58239 = state_58234;
(statearr_58239[(7)] = inst_58098__$1);

(statearr_58239[(8)] = inst_58095__$1);

(statearr_58239[(9)] = inst_58096__$1);

(statearr_58239[(10)] = inst_58097__$1);

(statearr_58239[(11)] = inst_58104);

return statearr_58239;
})();
var statearr_58240_58326 = state_58234__$1;
(statearr_58240_58326[(2)] = null);

(statearr_58240_58326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (20))){
var inst_58138 = (state_58234[(12)]);
var inst_58146 = figwheel.client.file_reloading.sort_files.call(null,inst_58138);
var state_58234__$1 = state_58234;
var statearr_58241_58327 = state_58234__$1;
(statearr_58241_58327[(2)] = inst_58146);

(statearr_58241_58327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (27))){
var state_58234__$1 = state_58234;
var statearr_58242_58328 = state_58234__$1;
(statearr_58242_58328[(2)] = null);

(statearr_58242_58328[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (1))){
var inst_58087 = (state_58234[(13)]);
var inst_58084 = before_jsload.call(null,files);
var inst_58085 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_58086 = (function (){return ((function (inst_58087,inst_58084,inst_58085,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__57829_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__57829_SHARP_);
});
;})(inst_58087,inst_58084,inst_58085,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58087__$1 = cljs.core.filter.call(null,inst_58086,files);
var inst_58088 = cljs.core.not_empty.call(null,inst_58087__$1);
var state_58234__$1 = (function (){var statearr_58243 = state_58234;
(statearr_58243[(14)] = inst_58084);

(statearr_58243[(15)] = inst_58085);

(statearr_58243[(13)] = inst_58087__$1);

return statearr_58243;
})();
if(cljs.core.truth_(inst_58088)){
var statearr_58244_58329 = state_58234__$1;
(statearr_58244_58329[(1)] = (2));

} else {
var statearr_58245_58330 = state_58234__$1;
(statearr_58245_58330[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (24))){
var state_58234__$1 = state_58234;
var statearr_58246_58331 = state_58234__$1;
(statearr_58246_58331[(2)] = null);

(statearr_58246_58331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (39))){
var inst_58188 = (state_58234[(16)]);
var state_58234__$1 = state_58234;
var statearr_58247_58332 = state_58234__$1;
(statearr_58247_58332[(2)] = inst_58188);

(statearr_58247_58332[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (46))){
var inst_58229 = (state_58234[(2)]);
var state_58234__$1 = state_58234;
var statearr_58248_58333 = state_58234__$1;
(statearr_58248_58333[(2)] = inst_58229);

(statearr_58248_58333[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (4))){
var inst_58132 = (state_58234[(2)]);
var inst_58133 = cljs.core.List.EMPTY;
var inst_58134 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_58133);
var inst_58135 = (function (){return ((function (inst_58132,inst_58133,inst_58134,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__57830_SHARP_){
var and__31939__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__57830_SHARP_);
if(cljs.core.truth_(and__31939__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__57830_SHARP_));
} else {
return and__31939__auto__;
}
});
;})(inst_58132,inst_58133,inst_58134,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58136 = cljs.core.filter.call(null,inst_58135,files);
var inst_58137 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_58138 = cljs.core.concat.call(null,inst_58136,inst_58137);
var state_58234__$1 = (function (){var statearr_58249 = state_58234;
(statearr_58249[(17)] = inst_58134);

(statearr_58249[(18)] = inst_58132);

(statearr_58249[(12)] = inst_58138);

return statearr_58249;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_58250_58334 = state_58234__$1;
(statearr_58250_58334[(1)] = (16));

} else {
var statearr_58251_58335 = state_58234__$1;
(statearr_58251_58335[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (15))){
var inst_58122 = (state_58234[(2)]);
var state_58234__$1 = state_58234;
var statearr_58252_58336 = state_58234__$1;
(statearr_58252_58336[(2)] = inst_58122);

(statearr_58252_58336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (21))){
var inst_58148 = (state_58234[(19)]);
var inst_58148__$1 = (state_58234[(2)]);
var inst_58149 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_58148__$1);
var state_58234__$1 = (function (){var statearr_58253 = state_58234;
(statearr_58253[(19)] = inst_58148__$1);

return statearr_58253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58234__$1,(22),inst_58149);
} else {
if((state_val_58235 === (31))){
var inst_58232 = (state_58234[(2)]);
var state_58234__$1 = state_58234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58234__$1,inst_58232);
} else {
if((state_val_58235 === (32))){
var inst_58188 = (state_58234[(16)]);
var inst_58193 = inst_58188.cljs$lang$protocol_mask$partition0$;
var inst_58194 = (inst_58193 & (64));
var inst_58195 = inst_58188.cljs$core$ISeq$;
var inst_58196 = (inst_58194) || (inst_58195);
var state_58234__$1 = state_58234;
if(cljs.core.truth_(inst_58196)){
var statearr_58254_58337 = state_58234__$1;
(statearr_58254_58337[(1)] = (35));

} else {
var statearr_58255_58338 = state_58234__$1;
(statearr_58255_58338[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (40))){
var inst_58209 = (state_58234[(20)]);
var inst_58208 = (state_58234[(2)]);
var inst_58209__$1 = cljs.core.get.call(null,inst_58208,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_58210 = cljs.core.get.call(null,inst_58208,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_58211 = cljs.core.not_empty.call(null,inst_58209__$1);
var state_58234__$1 = (function (){var statearr_58256 = state_58234;
(statearr_58256[(20)] = inst_58209__$1);

(statearr_58256[(21)] = inst_58210);

return statearr_58256;
})();
if(cljs.core.truth_(inst_58211)){
var statearr_58257_58339 = state_58234__$1;
(statearr_58257_58339[(1)] = (41));

} else {
var statearr_58258_58340 = state_58234__$1;
(statearr_58258_58340[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (33))){
var state_58234__$1 = state_58234;
var statearr_58259_58341 = state_58234__$1;
(statearr_58259_58341[(2)] = false);

(statearr_58259_58341[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (13))){
var inst_58108 = (state_58234[(22)]);
var inst_58112 = cljs.core.chunk_first.call(null,inst_58108);
var inst_58113 = cljs.core.chunk_rest.call(null,inst_58108);
var inst_58114 = cljs.core.count.call(null,inst_58112);
var inst_58095 = inst_58113;
var inst_58096 = inst_58112;
var inst_58097 = inst_58114;
var inst_58098 = (0);
var state_58234__$1 = (function (){var statearr_58260 = state_58234;
(statearr_58260[(7)] = inst_58098);

(statearr_58260[(8)] = inst_58095);

(statearr_58260[(9)] = inst_58096);

(statearr_58260[(10)] = inst_58097);

return statearr_58260;
})();
var statearr_58261_58342 = state_58234__$1;
(statearr_58261_58342[(2)] = null);

(statearr_58261_58342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (22))){
var inst_58152 = (state_58234[(23)]);
var inst_58151 = (state_58234[(24)]);
var inst_58148 = (state_58234[(19)]);
var inst_58156 = (state_58234[(25)]);
var inst_58151__$1 = (state_58234[(2)]);
var inst_58152__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58151__$1);
var inst_58153 = (function (){var all_files = inst_58148;
var res_SINGLEQUOTE_ = inst_58151__$1;
var res = inst_58152__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_58152,inst_58151,inst_58148,inst_58156,inst_58151__$1,inst_58152__$1,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__57831_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__57831_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_58152,inst_58151,inst_58148,inst_58156,inst_58151__$1,inst_58152__$1,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58154 = cljs.core.filter.call(null,inst_58153,inst_58151__$1);
var inst_58155 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_58156__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58155);
var inst_58157 = cljs.core.not_empty.call(null,inst_58156__$1);
var state_58234__$1 = (function (){var statearr_58262 = state_58234;
(statearr_58262[(23)] = inst_58152__$1);

(statearr_58262[(24)] = inst_58151__$1);

(statearr_58262[(26)] = inst_58154);

(statearr_58262[(25)] = inst_58156__$1);

return statearr_58262;
})();
if(cljs.core.truth_(inst_58157)){
var statearr_58263_58343 = state_58234__$1;
(statearr_58263_58343[(1)] = (23));

} else {
var statearr_58264_58344 = state_58234__$1;
(statearr_58264_58344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (36))){
var state_58234__$1 = state_58234;
var statearr_58265_58345 = state_58234__$1;
(statearr_58265_58345[(2)] = false);

(statearr_58265_58345[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (41))){
var inst_58209 = (state_58234[(20)]);
var inst_58213 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_58214 = cljs.core.map.call(null,inst_58213,inst_58209);
var inst_58215 = cljs.core.pr_str.call(null,inst_58214);
var inst_58216 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_58215)].join('');
var inst_58217 = figwheel.client.utils.log.call(null,inst_58216);
var state_58234__$1 = state_58234;
var statearr_58266_58346 = state_58234__$1;
(statearr_58266_58346[(2)] = inst_58217);

(statearr_58266_58346[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (43))){
var inst_58210 = (state_58234[(21)]);
var inst_58220 = (state_58234[(2)]);
var inst_58221 = cljs.core.not_empty.call(null,inst_58210);
var state_58234__$1 = (function (){var statearr_58267 = state_58234;
(statearr_58267[(27)] = inst_58220);

return statearr_58267;
})();
if(cljs.core.truth_(inst_58221)){
var statearr_58268_58347 = state_58234__$1;
(statearr_58268_58347[(1)] = (44));

} else {
var statearr_58269_58348 = state_58234__$1;
(statearr_58269_58348[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (29))){
var inst_58152 = (state_58234[(23)]);
var inst_58151 = (state_58234[(24)]);
var inst_58148 = (state_58234[(19)]);
var inst_58154 = (state_58234[(26)]);
var inst_58156 = (state_58234[(25)]);
var inst_58188 = (state_58234[(16)]);
var inst_58184 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_58187 = (function (){var all_files = inst_58148;
var res_SINGLEQUOTE_ = inst_58151;
var res = inst_58152;
var files_not_loaded = inst_58154;
var dependencies_that_loaded = inst_58156;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58152,inst_58151,inst_58148,inst_58154,inst_58156,inst_58188,inst_58184,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58186){
var map__58270 = p__58186;
var map__58270__$1 = ((((!((map__58270 == null)))?((((map__58270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58270):map__58270);
var namespace = cljs.core.get.call(null,map__58270__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58152,inst_58151,inst_58148,inst_58154,inst_58156,inst_58188,inst_58184,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58188__$1 = cljs.core.group_by.call(null,inst_58187,inst_58154);
var inst_58190 = (inst_58188__$1 == null);
var inst_58191 = cljs.core.not.call(null,inst_58190);
var state_58234__$1 = (function (){var statearr_58272 = state_58234;
(statearr_58272[(16)] = inst_58188__$1);

(statearr_58272[(28)] = inst_58184);

return statearr_58272;
})();
if(inst_58191){
var statearr_58273_58349 = state_58234__$1;
(statearr_58273_58349[(1)] = (32));

} else {
var statearr_58274_58350 = state_58234__$1;
(statearr_58274_58350[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (44))){
var inst_58210 = (state_58234[(21)]);
var inst_58223 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_58210);
var inst_58224 = cljs.core.pr_str.call(null,inst_58223);
var inst_58225 = [cljs.core.str("not required: "),cljs.core.str(inst_58224)].join('');
var inst_58226 = figwheel.client.utils.log.call(null,inst_58225);
var state_58234__$1 = state_58234;
var statearr_58275_58351 = state_58234__$1;
(statearr_58275_58351[(2)] = inst_58226);

(statearr_58275_58351[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (6))){
var inst_58129 = (state_58234[(2)]);
var state_58234__$1 = state_58234;
var statearr_58276_58352 = state_58234__$1;
(statearr_58276_58352[(2)] = inst_58129);

(statearr_58276_58352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (28))){
var inst_58154 = (state_58234[(26)]);
var inst_58181 = (state_58234[(2)]);
var inst_58182 = cljs.core.not_empty.call(null,inst_58154);
var state_58234__$1 = (function (){var statearr_58277 = state_58234;
(statearr_58277[(29)] = inst_58181);

return statearr_58277;
})();
if(cljs.core.truth_(inst_58182)){
var statearr_58278_58353 = state_58234__$1;
(statearr_58278_58353[(1)] = (29));

} else {
var statearr_58279_58354 = state_58234__$1;
(statearr_58279_58354[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (25))){
var inst_58152 = (state_58234[(23)]);
var inst_58168 = (state_58234[(2)]);
var inst_58169 = cljs.core.not_empty.call(null,inst_58152);
var state_58234__$1 = (function (){var statearr_58280 = state_58234;
(statearr_58280[(30)] = inst_58168);

return statearr_58280;
})();
if(cljs.core.truth_(inst_58169)){
var statearr_58281_58355 = state_58234__$1;
(statearr_58281_58355[(1)] = (26));

} else {
var statearr_58282_58356 = state_58234__$1;
(statearr_58282_58356[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (34))){
var inst_58203 = (state_58234[(2)]);
var state_58234__$1 = state_58234;
if(cljs.core.truth_(inst_58203)){
var statearr_58283_58357 = state_58234__$1;
(statearr_58283_58357[(1)] = (38));

} else {
var statearr_58284_58358 = state_58234__$1;
(statearr_58284_58358[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (17))){
var state_58234__$1 = state_58234;
var statearr_58285_58359 = state_58234__$1;
(statearr_58285_58359[(2)] = recompile_dependents);

(statearr_58285_58359[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (3))){
var state_58234__$1 = state_58234;
var statearr_58286_58360 = state_58234__$1;
(statearr_58286_58360[(2)] = null);

(statearr_58286_58360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (12))){
var inst_58125 = (state_58234[(2)]);
var state_58234__$1 = state_58234;
var statearr_58287_58361 = state_58234__$1;
(statearr_58287_58361[(2)] = inst_58125);

(statearr_58287_58361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (2))){
var inst_58087 = (state_58234[(13)]);
var inst_58094 = cljs.core.seq.call(null,inst_58087);
var inst_58095 = inst_58094;
var inst_58096 = null;
var inst_58097 = (0);
var inst_58098 = (0);
var state_58234__$1 = (function (){var statearr_58288 = state_58234;
(statearr_58288[(7)] = inst_58098);

(statearr_58288[(8)] = inst_58095);

(statearr_58288[(9)] = inst_58096);

(statearr_58288[(10)] = inst_58097);

return statearr_58288;
})();
var statearr_58289_58362 = state_58234__$1;
(statearr_58289_58362[(2)] = null);

(statearr_58289_58362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (23))){
var inst_58152 = (state_58234[(23)]);
var inst_58151 = (state_58234[(24)]);
var inst_58148 = (state_58234[(19)]);
var inst_58154 = (state_58234[(26)]);
var inst_58156 = (state_58234[(25)]);
var inst_58159 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_58161 = (function (){var all_files = inst_58148;
var res_SINGLEQUOTE_ = inst_58151;
var res = inst_58152;
var files_not_loaded = inst_58154;
var dependencies_that_loaded = inst_58156;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58152,inst_58151,inst_58148,inst_58154,inst_58156,inst_58159,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58160){
var map__58290 = p__58160;
var map__58290__$1 = ((((!((map__58290 == null)))?((((map__58290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58290):map__58290);
var request_url = cljs.core.get.call(null,map__58290__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58152,inst_58151,inst_58148,inst_58154,inst_58156,inst_58159,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58162 = cljs.core.reverse.call(null,inst_58156);
var inst_58163 = cljs.core.map.call(null,inst_58161,inst_58162);
var inst_58164 = cljs.core.pr_str.call(null,inst_58163);
var inst_58165 = figwheel.client.utils.log.call(null,inst_58164);
var state_58234__$1 = (function (){var statearr_58292 = state_58234;
(statearr_58292[(31)] = inst_58159);

return statearr_58292;
})();
var statearr_58293_58363 = state_58234__$1;
(statearr_58293_58363[(2)] = inst_58165);

(statearr_58293_58363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (35))){
var state_58234__$1 = state_58234;
var statearr_58294_58364 = state_58234__$1;
(statearr_58294_58364[(2)] = true);

(statearr_58294_58364[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (19))){
var inst_58138 = (state_58234[(12)]);
var inst_58144 = figwheel.client.file_reloading.expand_files.call(null,inst_58138);
var state_58234__$1 = state_58234;
var statearr_58295_58365 = state_58234__$1;
(statearr_58295_58365[(2)] = inst_58144);

(statearr_58295_58365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (11))){
var state_58234__$1 = state_58234;
var statearr_58296_58366 = state_58234__$1;
(statearr_58296_58366[(2)] = null);

(statearr_58296_58366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (9))){
var inst_58127 = (state_58234[(2)]);
var state_58234__$1 = state_58234;
var statearr_58297_58367 = state_58234__$1;
(statearr_58297_58367[(2)] = inst_58127);

(statearr_58297_58367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (5))){
var inst_58098 = (state_58234[(7)]);
var inst_58097 = (state_58234[(10)]);
var inst_58100 = (inst_58098 < inst_58097);
var inst_58101 = inst_58100;
var state_58234__$1 = state_58234;
if(cljs.core.truth_(inst_58101)){
var statearr_58298_58368 = state_58234__$1;
(statearr_58298_58368[(1)] = (7));

} else {
var statearr_58299_58369 = state_58234__$1;
(statearr_58299_58369[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (14))){
var inst_58108 = (state_58234[(22)]);
var inst_58117 = cljs.core.first.call(null,inst_58108);
var inst_58118 = figwheel.client.file_reloading.eval_body.call(null,inst_58117,opts);
var inst_58119 = cljs.core.next.call(null,inst_58108);
var inst_58095 = inst_58119;
var inst_58096 = null;
var inst_58097 = (0);
var inst_58098 = (0);
var state_58234__$1 = (function (){var statearr_58300 = state_58234;
(statearr_58300[(32)] = inst_58118);

(statearr_58300[(7)] = inst_58098);

(statearr_58300[(8)] = inst_58095);

(statearr_58300[(9)] = inst_58096);

(statearr_58300[(10)] = inst_58097);

return statearr_58300;
})();
var statearr_58301_58370 = state_58234__$1;
(statearr_58301_58370[(2)] = null);

(statearr_58301_58370[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (45))){
var state_58234__$1 = state_58234;
var statearr_58302_58371 = state_58234__$1;
(statearr_58302_58371[(2)] = null);

(statearr_58302_58371[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (26))){
var inst_58152 = (state_58234[(23)]);
var inst_58151 = (state_58234[(24)]);
var inst_58148 = (state_58234[(19)]);
var inst_58154 = (state_58234[(26)]);
var inst_58156 = (state_58234[(25)]);
var inst_58171 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_58173 = (function (){var all_files = inst_58148;
var res_SINGLEQUOTE_ = inst_58151;
var res = inst_58152;
var files_not_loaded = inst_58154;
var dependencies_that_loaded = inst_58156;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58152,inst_58151,inst_58148,inst_58154,inst_58156,inst_58171,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58172){
var map__58303 = p__58172;
var map__58303__$1 = ((((!((map__58303 == null)))?((((map__58303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58303):map__58303);
var namespace = cljs.core.get.call(null,map__58303__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__58303__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58152,inst_58151,inst_58148,inst_58154,inst_58156,inst_58171,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58174 = cljs.core.map.call(null,inst_58173,inst_58152);
var inst_58175 = cljs.core.pr_str.call(null,inst_58174);
var inst_58176 = figwheel.client.utils.log.call(null,inst_58175);
var inst_58177 = (function (){var all_files = inst_58148;
var res_SINGLEQUOTE_ = inst_58151;
var res = inst_58152;
var files_not_loaded = inst_58154;
var dependencies_that_loaded = inst_58156;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58152,inst_58151,inst_58148,inst_58154,inst_58156,inst_58171,inst_58173,inst_58174,inst_58175,inst_58176,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58152,inst_58151,inst_58148,inst_58154,inst_58156,inst_58171,inst_58173,inst_58174,inst_58175,inst_58176,state_val_58235,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58178 = setTimeout(inst_58177,(10));
var state_58234__$1 = (function (){var statearr_58305 = state_58234;
(statearr_58305[(33)] = inst_58176);

(statearr_58305[(34)] = inst_58171);

return statearr_58305;
})();
var statearr_58306_58372 = state_58234__$1;
(statearr_58306_58372[(2)] = inst_58178);

(statearr_58306_58372[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (16))){
var state_58234__$1 = state_58234;
var statearr_58307_58373 = state_58234__$1;
(statearr_58307_58373[(2)] = reload_dependents);

(statearr_58307_58373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (38))){
var inst_58188 = (state_58234[(16)]);
var inst_58205 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58188);
var state_58234__$1 = state_58234;
var statearr_58308_58374 = state_58234__$1;
(statearr_58308_58374[(2)] = inst_58205);

(statearr_58308_58374[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (30))){
var state_58234__$1 = state_58234;
var statearr_58309_58375 = state_58234__$1;
(statearr_58309_58375[(2)] = null);

(statearr_58309_58375[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (10))){
var inst_58108 = (state_58234[(22)]);
var inst_58110 = cljs.core.chunked_seq_QMARK_.call(null,inst_58108);
var state_58234__$1 = state_58234;
if(inst_58110){
var statearr_58310_58376 = state_58234__$1;
(statearr_58310_58376[(1)] = (13));

} else {
var statearr_58311_58377 = state_58234__$1;
(statearr_58311_58377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (18))){
var inst_58142 = (state_58234[(2)]);
var state_58234__$1 = state_58234;
if(cljs.core.truth_(inst_58142)){
var statearr_58312_58378 = state_58234__$1;
(statearr_58312_58378[(1)] = (19));

} else {
var statearr_58313_58379 = state_58234__$1;
(statearr_58313_58379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (42))){
var state_58234__$1 = state_58234;
var statearr_58314_58380 = state_58234__$1;
(statearr_58314_58380[(2)] = null);

(statearr_58314_58380[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (37))){
var inst_58200 = (state_58234[(2)]);
var state_58234__$1 = state_58234;
var statearr_58315_58381 = state_58234__$1;
(statearr_58315_58381[(2)] = inst_58200);

(statearr_58315_58381[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58235 === (8))){
var inst_58095 = (state_58234[(8)]);
var inst_58108 = (state_58234[(22)]);
var inst_58108__$1 = cljs.core.seq.call(null,inst_58095);
var state_58234__$1 = (function (){var statearr_58316 = state_58234;
(statearr_58316[(22)] = inst_58108__$1);

return statearr_58316;
})();
if(inst_58108__$1){
var statearr_58317_58382 = state_58234__$1;
(statearr_58317_58382[(1)] = (10));

} else {
var statearr_58318_58383 = state_58234__$1;
(statearr_58318_58383[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__36723__auto__,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto____0 = (function (){
var statearr_58322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58322[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto__);

(statearr_58322[(1)] = (1));

return statearr_58322;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto____1 = (function (state_58234){
while(true){
var ret_value__36725__auto__ = (function (){try{while(true){
var result__36726__auto__ = switch__36723__auto__.call(null,state_58234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36726__auto__;
}
break;
}
}catch (e58323){if((e58323 instanceof Object)){
var ex__36727__auto__ = e58323;
var statearr_58324_58384 = state_58234;
(statearr_58324_58384[(5)] = ex__36727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58385 = state_58234;
state_58234 = G__58385;
continue;
} else {
return ret_value__36725__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto__ = function(state_58234){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto____1.call(this,state_58234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36724__auto__;
})()
;})(switch__36723__auto__,c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__36746__auto__ = (function (){var statearr_58325 = f__36745__auto__.call(null);
(statearr_58325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36744__auto__);

return statearr_58325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36746__auto__);
});})(c__36744__auto__,map__58080,map__58080__$1,opts,before_jsload,on_jsload,reload_dependents,map__58081,map__58081__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__36744__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__58388,link){
var map__58391 = p__58388;
var map__58391__$1 = ((((!((map__58391 == null)))?((((map__58391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58391):map__58391);
var file = cljs.core.get.call(null,map__58391__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__58391,map__58391__$1,file){
return (function (p1__58386_SHARP_,p2__58387_SHARP_){
if(cljs.core._EQ_.call(null,p1__58386_SHARP_,p2__58387_SHARP_)){
return p1__58386_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__58391,map__58391__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__58397){
var map__58398 = p__58397;
var map__58398__$1 = ((((!((map__58398 == null)))?((((map__58398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58398):map__58398);
var match_length = cljs.core.get.call(null,map__58398__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__58398__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__58393_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__58393_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args58400 = [];
var len__33026__auto___58403 = arguments.length;
var i__33027__auto___58404 = (0);
while(true){
if((i__33027__auto___58404 < len__33026__auto___58403)){
args58400.push((arguments[i__33027__auto___58404]));

var G__58405 = (i__33027__auto___58404 + (1));
i__33027__auto___58404 = G__58405;
continue;
} else {
}
break;
}

var G__58402 = args58400.length;
switch (G__58402) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58400.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__58407_SHARP_,p2__58408_SHARP_){
return cljs.core.assoc.call(null,p1__58407_SHARP_,cljs.core.get.call(null,p2__58408_SHARP_,key),p2__58408_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__58409){
var map__58412 = p__58409;
var map__58412__$1 = ((((!((map__58412 == null)))?((((map__58412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58412):map__58412);
var f_data = map__58412__$1;
var file = cljs.core.get.call(null,map__58412__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__58414,files_msg){
var map__58421 = p__58414;
var map__58421__$1 = ((((!((map__58421 == null)))?((((map__58421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58421):map__58421);
var opts = map__58421__$1;
var on_cssload = cljs.core.get.call(null,map__58421__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__58423_58427 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__58424_58428 = null;
var count__58425_58429 = (0);
var i__58426_58430 = (0);
while(true){
if((i__58426_58430 < count__58425_58429)){
var f_58431 = cljs.core._nth.call(null,chunk__58424_58428,i__58426_58430);
figwheel.client.file_reloading.reload_css_file.call(null,f_58431);

var G__58432 = seq__58423_58427;
var G__58433 = chunk__58424_58428;
var G__58434 = count__58425_58429;
var G__58435 = (i__58426_58430 + (1));
seq__58423_58427 = G__58432;
chunk__58424_58428 = G__58433;
count__58425_58429 = G__58434;
i__58426_58430 = G__58435;
continue;
} else {
var temp__4657__auto___58436 = cljs.core.seq.call(null,seq__58423_58427);
if(temp__4657__auto___58436){
var seq__58423_58437__$1 = temp__4657__auto___58436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58423_58437__$1)){
var c__32762__auto___58438 = cljs.core.chunk_first.call(null,seq__58423_58437__$1);
var G__58439 = cljs.core.chunk_rest.call(null,seq__58423_58437__$1);
var G__58440 = c__32762__auto___58438;
var G__58441 = cljs.core.count.call(null,c__32762__auto___58438);
var G__58442 = (0);
seq__58423_58427 = G__58439;
chunk__58424_58428 = G__58440;
count__58425_58429 = G__58441;
i__58426_58430 = G__58442;
continue;
} else {
var f_58443 = cljs.core.first.call(null,seq__58423_58437__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_58443);

var G__58444 = cljs.core.next.call(null,seq__58423_58437__$1);
var G__58445 = null;
var G__58446 = (0);
var G__58447 = (0);
seq__58423_58427 = G__58444;
chunk__58424_58428 = G__58445;
count__58425_58429 = G__58446;
i__58426_58430 = G__58447;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__58421,map__58421__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__58421,map__58421__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1491001410119