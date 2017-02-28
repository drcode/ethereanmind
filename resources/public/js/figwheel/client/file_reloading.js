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
var or__34390__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__34390__auto__){
return or__34390__auto__;
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
var or__34390__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__81908_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__81908_SHARP_));
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
var seq__81913 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__81914 = null;
var count__81915 = (0);
var i__81916 = (0);
while(true){
if((i__81916 < count__81915)){
var n = cljs.core._nth.call(null,chunk__81914,i__81916);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__81917 = seq__81913;
var G__81918 = chunk__81914;
var G__81919 = count__81915;
var G__81920 = (i__81916 + (1));
seq__81913 = G__81917;
chunk__81914 = G__81918;
count__81915 = G__81919;
i__81916 = G__81920;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__81913);
if(temp__6728__auto__){
var seq__81913__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81913__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__81913__$1);
var G__81921 = cljs.core.chunk_rest.call(null,seq__81913__$1);
var G__81922 = c__35293__auto__;
var G__81923 = cljs.core.count.call(null,c__35293__auto__);
var G__81924 = (0);
seq__81913 = G__81921;
chunk__81914 = G__81922;
count__81915 = G__81923;
i__81916 = G__81924;
continue;
} else {
var n = cljs.core.first.call(null,seq__81913__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__81925 = cljs.core.next.call(null,seq__81913__$1);
var G__81926 = null;
var G__81927 = (0);
var G__81928 = (0);
seq__81913 = G__81925;
chunk__81914 = G__81926;
count__81915 = G__81927;
i__81916 = G__81928;
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

var seq__81979_81990 = cljs.core.seq.call(null,deps);
var chunk__81980_81991 = null;
var count__81981_81992 = (0);
var i__81982_81993 = (0);
while(true){
if((i__81982_81993 < count__81981_81992)){
var dep_81994 = cljs.core._nth.call(null,chunk__81980_81991,i__81982_81993);
topo_sort_helper_STAR_.call(null,dep_81994,(depth + (1)),state);

var G__81995 = seq__81979_81990;
var G__81996 = chunk__81980_81991;
var G__81997 = count__81981_81992;
var G__81998 = (i__81982_81993 + (1));
seq__81979_81990 = G__81995;
chunk__81980_81991 = G__81996;
count__81981_81992 = G__81997;
i__81982_81993 = G__81998;
continue;
} else {
var temp__6728__auto___81999 = cljs.core.seq.call(null,seq__81979_81990);
if(temp__6728__auto___81999){
var seq__81979_82000__$1 = temp__6728__auto___81999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81979_82000__$1)){
var c__35293__auto___82001 = cljs.core.chunk_first.call(null,seq__81979_82000__$1);
var G__82002 = cljs.core.chunk_rest.call(null,seq__81979_82000__$1);
var G__82003 = c__35293__auto___82001;
var G__82004 = cljs.core.count.call(null,c__35293__auto___82001);
var G__82005 = (0);
seq__81979_81990 = G__82002;
chunk__81980_81991 = G__82003;
count__81981_81992 = G__82004;
i__81982_81993 = G__82005;
continue;
} else {
var dep_82006 = cljs.core.first.call(null,seq__81979_82000__$1);
topo_sort_helper_STAR_.call(null,dep_82006,(depth + (1)),state);

var G__82007 = cljs.core.next.call(null,seq__81979_82000__$1);
var G__82008 = null;
var G__82009 = (0);
var G__82010 = (0);
seq__81979_81990 = G__82007;
chunk__81980_81991 = G__82008;
count__81981_81992 = G__82009;
i__81982_81993 = G__82010;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__81983){
var vec__81987 = p__81983;
var seq__81988 = cljs.core.seq.call(null,vec__81987);
var first__81989 = cljs.core.first.call(null,seq__81988);
var seq__81988__$1 = cljs.core.next.call(null,seq__81988);
var x = first__81989;
var xs = seq__81988__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__81987,seq__81988,first__81989,seq__81988__$1,x,xs,get_deps__$1){
return (function (p1__81929_SHARP_){
return clojure.set.difference.call(null,p1__81929_SHARP_,x);
});})(vec__81987,seq__81988,first__81989,seq__81988__$1,x,xs,get_deps__$1))
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
var seq__82023 = cljs.core.seq.call(null,provides);
var chunk__82024 = null;
var count__82025 = (0);
var i__82026 = (0);
while(true){
if((i__82026 < count__82025)){
var prov = cljs.core._nth.call(null,chunk__82024,i__82026);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__82027_82035 = cljs.core.seq.call(null,requires);
var chunk__82028_82036 = null;
var count__82029_82037 = (0);
var i__82030_82038 = (0);
while(true){
if((i__82030_82038 < count__82029_82037)){
var req_82039 = cljs.core._nth.call(null,chunk__82028_82036,i__82030_82038);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_82039,prov);

var G__82040 = seq__82027_82035;
var G__82041 = chunk__82028_82036;
var G__82042 = count__82029_82037;
var G__82043 = (i__82030_82038 + (1));
seq__82027_82035 = G__82040;
chunk__82028_82036 = G__82041;
count__82029_82037 = G__82042;
i__82030_82038 = G__82043;
continue;
} else {
var temp__6728__auto___82044 = cljs.core.seq.call(null,seq__82027_82035);
if(temp__6728__auto___82044){
var seq__82027_82045__$1 = temp__6728__auto___82044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82027_82045__$1)){
var c__35293__auto___82046 = cljs.core.chunk_first.call(null,seq__82027_82045__$1);
var G__82047 = cljs.core.chunk_rest.call(null,seq__82027_82045__$1);
var G__82048 = c__35293__auto___82046;
var G__82049 = cljs.core.count.call(null,c__35293__auto___82046);
var G__82050 = (0);
seq__82027_82035 = G__82047;
chunk__82028_82036 = G__82048;
count__82029_82037 = G__82049;
i__82030_82038 = G__82050;
continue;
} else {
var req_82051 = cljs.core.first.call(null,seq__82027_82045__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_82051,prov);

var G__82052 = cljs.core.next.call(null,seq__82027_82045__$1);
var G__82053 = null;
var G__82054 = (0);
var G__82055 = (0);
seq__82027_82035 = G__82052;
chunk__82028_82036 = G__82053;
count__82029_82037 = G__82054;
i__82030_82038 = G__82055;
continue;
}
} else {
}
}
break;
}

var G__82056 = seq__82023;
var G__82057 = chunk__82024;
var G__82058 = count__82025;
var G__82059 = (i__82026 + (1));
seq__82023 = G__82056;
chunk__82024 = G__82057;
count__82025 = G__82058;
i__82026 = G__82059;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__82023);
if(temp__6728__auto__){
var seq__82023__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82023__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__82023__$1);
var G__82060 = cljs.core.chunk_rest.call(null,seq__82023__$1);
var G__82061 = c__35293__auto__;
var G__82062 = cljs.core.count.call(null,c__35293__auto__);
var G__82063 = (0);
seq__82023 = G__82060;
chunk__82024 = G__82061;
count__82025 = G__82062;
i__82026 = G__82063;
continue;
} else {
var prov = cljs.core.first.call(null,seq__82023__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__82031_82064 = cljs.core.seq.call(null,requires);
var chunk__82032_82065 = null;
var count__82033_82066 = (0);
var i__82034_82067 = (0);
while(true){
if((i__82034_82067 < count__82033_82066)){
var req_82068 = cljs.core._nth.call(null,chunk__82032_82065,i__82034_82067);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_82068,prov);

var G__82069 = seq__82031_82064;
var G__82070 = chunk__82032_82065;
var G__82071 = count__82033_82066;
var G__82072 = (i__82034_82067 + (1));
seq__82031_82064 = G__82069;
chunk__82032_82065 = G__82070;
count__82033_82066 = G__82071;
i__82034_82067 = G__82072;
continue;
} else {
var temp__6728__auto___82073__$1 = cljs.core.seq.call(null,seq__82031_82064);
if(temp__6728__auto___82073__$1){
var seq__82031_82074__$1 = temp__6728__auto___82073__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82031_82074__$1)){
var c__35293__auto___82075 = cljs.core.chunk_first.call(null,seq__82031_82074__$1);
var G__82076 = cljs.core.chunk_rest.call(null,seq__82031_82074__$1);
var G__82077 = c__35293__auto___82075;
var G__82078 = cljs.core.count.call(null,c__35293__auto___82075);
var G__82079 = (0);
seq__82031_82064 = G__82076;
chunk__82032_82065 = G__82077;
count__82033_82066 = G__82078;
i__82034_82067 = G__82079;
continue;
} else {
var req_82080 = cljs.core.first.call(null,seq__82031_82074__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_82080,prov);

var G__82081 = cljs.core.next.call(null,seq__82031_82074__$1);
var G__82082 = null;
var G__82083 = (0);
var G__82084 = (0);
seq__82031_82064 = G__82081;
chunk__82032_82065 = G__82082;
count__82033_82066 = G__82083;
i__82034_82067 = G__82084;
continue;
}
} else {
}
}
break;
}

var G__82085 = cljs.core.next.call(null,seq__82023__$1);
var G__82086 = null;
var G__82087 = (0);
var G__82088 = (0);
seq__82023 = G__82085;
chunk__82024 = G__82086;
count__82025 = G__82087;
i__82026 = G__82088;
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
var seq__82093_82097 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__82094_82098 = null;
var count__82095_82099 = (0);
var i__82096_82100 = (0);
while(true){
if((i__82096_82100 < count__82095_82099)){
var ns_82101 = cljs.core._nth.call(null,chunk__82094_82098,i__82096_82100);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_82101);

var G__82102 = seq__82093_82097;
var G__82103 = chunk__82094_82098;
var G__82104 = count__82095_82099;
var G__82105 = (i__82096_82100 + (1));
seq__82093_82097 = G__82102;
chunk__82094_82098 = G__82103;
count__82095_82099 = G__82104;
i__82096_82100 = G__82105;
continue;
} else {
var temp__6728__auto___82106 = cljs.core.seq.call(null,seq__82093_82097);
if(temp__6728__auto___82106){
var seq__82093_82107__$1 = temp__6728__auto___82106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82093_82107__$1)){
var c__35293__auto___82108 = cljs.core.chunk_first.call(null,seq__82093_82107__$1);
var G__82109 = cljs.core.chunk_rest.call(null,seq__82093_82107__$1);
var G__82110 = c__35293__auto___82108;
var G__82111 = cljs.core.count.call(null,c__35293__auto___82108);
var G__82112 = (0);
seq__82093_82097 = G__82109;
chunk__82094_82098 = G__82110;
count__82095_82099 = G__82111;
i__82096_82100 = G__82112;
continue;
} else {
var ns_82113 = cljs.core.first.call(null,seq__82093_82107__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_82113);

var G__82114 = cljs.core.next.call(null,seq__82093_82107__$1);
var G__82115 = null;
var G__82116 = (0);
var G__82117 = (0);
seq__82093_82097 = G__82114;
chunk__82094_82098 = G__82115;
count__82095_82099 = G__82116;
i__82096_82100 = G__82117;
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
goog.require_figwheel_backup_ = (function (){var or__34390__auto__ = goog.require__;
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
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
var G__82118__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__82118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82119__i = 0, G__82119__a = new Array(arguments.length -  0);
while (G__82119__i < G__82119__a.length) {G__82119__a[G__82119__i] = arguments[G__82119__i + 0]; ++G__82119__i;}
  args = new cljs.core.IndexedSeq(G__82119__a,0);
} 
return G__82118__delegate.call(this,args);};
G__82118.cljs$lang$maxFixedArity = 0;
G__82118.cljs$lang$applyTo = (function (arglist__82120){
var args = cljs.core.seq(arglist__82120);
return G__82118__delegate(args);
});
G__82118.cljs$core$IFn$_invoke$arity$variadic = G__82118__delegate;
return G__82118;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__82122 = cljs.core._EQ_;
var expr__82123 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__82122.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__82123))){
var path_parts = ((function (pred__82122,expr__82123){
return (function (p1__82121_SHARP_){
return clojure.string.split.call(null,p1__82121_SHARP_,/[\/\\]/);
});})(pred__82122,expr__82123))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__82122,expr__82123){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e82125){if((e82125 instanceof Error)){
var e = e82125;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e82125;

}
}})());
});
;})(path_parts,sep,root,pred__82122,expr__82123))
} else {
if(cljs.core.truth_(pred__82122.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__82123))){
return ((function (pred__82122,expr__82123){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__82122,expr__82123){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__82122,expr__82123))
);

return deferred.addErrback(((function (deferred,pred__82122,expr__82123){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__82122,expr__82123))
);
});
;})(pred__82122,expr__82123))
} else {
return ((function (pred__82122,expr__82123){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__82122,expr__82123))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__82126,callback){
var map__82129 = p__82126;
var map__82129__$1 = ((((!((map__82129 == null)))?((((map__82129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82129):map__82129);
var file_msg = map__82129__$1;
var request_url = cljs.core.get.call(null,map__82129__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__82129,map__82129__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__82129,map__82129__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__){
return (function (state_82153){
var state_val_82154 = (state_82153[(1)]);
if((state_val_82154 === (7))){
var inst_82149 = (state_82153[(2)]);
var state_82153__$1 = state_82153;
var statearr_82155_82175 = state_82153__$1;
(statearr_82155_82175[(2)] = inst_82149);

(statearr_82155_82175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82154 === (1))){
var state_82153__$1 = state_82153;
var statearr_82156_82176 = state_82153__$1;
(statearr_82156_82176[(2)] = null);

(statearr_82156_82176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82154 === (4))){
var inst_82133 = (state_82153[(7)]);
var inst_82133__$1 = (state_82153[(2)]);
var state_82153__$1 = (function (){var statearr_82157 = state_82153;
(statearr_82157[(7)] = inst_82133__$1);

return statearr_82157;
})();
if(cljs.core.truth_(inst_82133__$1)){
var statearr_82158_82177 = state_82153__$1;
(statearr_82158_82177[(1)] = (5));

} else {
var statearr_82159_82178 = state_82153__$1;
(statearr_82159_82178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82154 === (6))){
var state_82153__$1 = state_82153;
var statearr_82160_82179 = state_82153__$1;
(statearr_82160_82179[(2)] = null);

(statearr_82160_82179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82154 === (3))){
var inst_82151 = (state_82153[(2)]);
var state_82153__$1 = state_82153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82153__$1,inst_82151);
} else {
if((state_val_82154 === (2))){
var state_82153__$1 = state_82153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82153__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_82154 === (11))){
var inst_82145 = (state_82153[(2)]);
var state_82153__$1 = (function (){var statearr_82161 = state_82153;
(statearr_82161[(8)] = inst_82145);

return statearr_82161;
})();
var statearr_82162_82180 = state_82153__$1;
(statearr_82162_82180[(2)] = null);

(statearr_82162_82180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82154 === (9))){
var inst_82137 = (state_82153[(9)]);
var inst_82139 = (state_82153[(10)]);
var inst_82141 = inst_82139.call(null,inst_82137);
var state_82153__$1 = state_82153;
var statearr_82163_82181 = state_82153__$1;
(statearr_82163_82181[(2)] = inst_82141);

(statearr_82163_82181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82154 === (5))){
var inst_82133 = (state_82153[(7)]);
var inst_82135 = figwheel.client.file_reloading.blocking_load.call(null,inst_82133);
var state_82153__$1 = state_82153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82153__$1,(8),inst_82135);
} else {
if((state_val_82154 === (10))){
var inst_82137 = (state_82153[(9)]);
var inst_82143 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_82137);
var state_82153__$1 = state_82153;
var statearr_82164_82182 = state_82153__$1;
(statearr_82164_82182[(2)] = inst_82143);

(statearr_82164_82182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82154 === (8))){
var inst_82133 = (state_82153[(7)]);
var inst_82139 = (state_82153[(10)]);
var inst_82137 = (state_82153[(2)]);
var inst_82138 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_82139__$1 = cljs.core.get.call(null,inst_82138,inst_82133);
var state_82153__$1 = (function (){var statearr_82165 = state_82153;
(statearr_82165[(9)] = inst_82137);

(statearr_82165[(10)] = inst_82139__$1);

return statearr_82165;
})();
if(cljs.core.truth_(inst_82139__$1)){
var statearr_82166_82183 = state_82153__$1;
(statearr_82166_82183[(1)] = (9));

} else {
var statearr_82167_82184 = state_82153__$1;
(statearr_82167_82184[(1)] = (10));

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
});})(c__43337__auto__))
;
return ((function (switch__43223__auto__,c__43337__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__43224__auto__ = null;
var figwheel$client$file_reloading$state_machine__43224__auto____0 = (function (){
var statearr_82171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_82171[(0)] = figwheel$client$file_reloading$state_machine__43224__auto__);

(statearr_82171[(1)] = (1));

return statearr_82171;
});
var figwheel$client$file_reloading$state_machine__43224__auto____1 = (function (state_82153){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_82153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e82172){if((e82172 instanceof Object)){
var ex__43227__auto__ = e82172;
var statearr_82173_82185 = state_82153;
(statearr_82173_82185[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82186 = state_82153;
state_82153 = G__82186;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__43224__auto__ = function(state_82153){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__43224__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__43224__auto____1.call(this,state_82153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__43224__auto____0;
figwheel$client$file_reloading$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__43224__auto____1;
return figwheel$client$file_reloading$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__))
})();
var state__43339__auto__ = (function (){var statearr_82174 = f__43338__auto__.call(null);
(statearr_82174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_82174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__))
);

return c__43337__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__82187,callback){
var map__82190 = p__82187;
var map__82190__$1 = ((((!((map__82190 == null)))?((((map__82190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82190):map__82190);
var file_msg = map__82190__$1;
var namespace = cljs.core.get.call(null,map__82190__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__82190,map__82190__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__82190,map__82190__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__82192){
var map__82195 = p__82192;
var map__82195__$1 = ((((!((map__82195 == null)))?((((map__82195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82195):map__82195);
var file_msg = map__82195__$1;
var namespace = cljs.core.get.call(null,map__82195__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__34378__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__34378__auto__){
var or__34390__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
var or__34390__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34390__auto____$1)){
return or__34390__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__34378__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__82197,callback){
var map__82200 = p__82197;
var map__82200__$1 = ((((!((map__82200 == null)))?((((map__82200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82200):map__82200);
var file_msg = map__82200__$1;
var request_url = cljs.core.get.call(null,map__82200__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__82200__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__43337__auto___82304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto___82304,out){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto___82304,out){
return (function (state_82286){
var state_val_82287 = (state_82286[(1)]);
if((state_val_82287 === (1))){
var inst_82260 = cljs.core.seq.call(null,files);
var inst_82261 = cljs.core.first.call(null,inst_82260);
var inst_82262 = cljs.core.next.call(null,inst_82260);
var inst_82263 = files;
var state_82286__$1 = (function (){var statearr_82288 = state_82286;
(statearr_82288[(7)] = inst_82262);

(statearr_82288[(8)] = inst_82263);

(statearr_82288[(9)] = inst_82261);

return statearr_82288;
})();
var statearr_82289_82305 = state_82286__$1;
(statearr_82289_82305[(2)] = null);

(statearr_82289_82305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82287 === (2))){
var inst_82263 = (state_82286[(8)]);
var inst_82269 = (state_82286[(10)]);
var inst_82268 = cljs.core.seq.call(null,inst_82263);
var inst_82269__$1 = cljs.core.first.call(null,inst_82268);
var inst_82270 = cljs.core.next.call(null,inst_82268);
var inst_82271 = (inst_82269__$1 == null);
var inst_82272 = cljs.core.not.call(null,inst_82271);
var state_82286__$1 = (function (){var statearr_82290 = state_82286;
(statearr_82290[(10)] = inst_82269__$1);

(statearr_82290[(11)] = inst_82270);

return statearr_82290;
})();
if(inst_82272){
var statearr_82291_82306 = state_82286__$1;
(statearr_82291_82306[(1)] = (4));

} else {
var statearr_82292_82307 = state_82286__$1;
(statearr_82292_82307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82287 === (3))){
var inst_82284 = (state_82286[(2)]);
var state_82286__$1 = state_82286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82286__$1,inst_82284);
} else {
if((state_val_82287 === (4))){
var inst_82269 = (state_82286[(10)]);
var inst_82274 = figwheel.client.file_reloading.reload_js_file.call(null,inst_82269);
var state_82286__$1 = state_82286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82286__$1,(7),inst_82274);
} else {
if((state_val_82287 === (5))){
var inst_82280 = cljs.core.async.close_BANG_.call(null,out);
var state_82286__$1 = state_82286;
var statearr_82293_82308 = state_82286__$1;
(statearr_82293_82308[(2)] = inst_82280);

(statearr_82293_82308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82287 === (6))){
var inst_82282 = (state_82286[(2)]);
var state_82286__$1 = state_82286;
var statearr_82294_82309 = state_82286__$1;
(statearr_82294_82309[(2)] = inst_82282);

(statearr_82294_82309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82287 === (7))){
var inst_82270 = (state_82286[(11)]);
var inst_82276 = (state_82286[(2)]);
var inst_82277 = cljs.core.async.put_BANG_.call(null,out,inst_82276);
var inst_82263 = inst_82270;
var state_82286__$1 = (function (){var statearr_82295 = state_82286;
(statearr_82295[(8)] = inst_82263);

(statearr_82295[(12)] = inst_82277);

return statearr_82295;
})();
var statearr_82296_82310 = state_82286__$1;
(statearr_82296_82310[(2)] = null);

(statearr_82296_82310[(1)] = (2));


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
});})(c__43337__auto___82304,out))
;
return ((function (switch__43223__auto__,c__43337__auto___82304,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto____0 = (function (){
var statearr_82300 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82300[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto__);

(statearr_82300[(1)] = (1));

return statearr_82300;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto____1 = (function (state_82286){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_82286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e82301){if((e82301 instanceof Object)){
var ex__43227__auto__ = e82301;
var statearr_82302_82311 = state_82286;
(statearr_82302_82311[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82312 = state_82286;
state_82286 = G__82312;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto__ = function(state_82286){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto____1.call(this,state_82286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto___82304,out))
})();
var state__43339__auto__ = (function (){var statearr_82303 = f__43338__auto__.call(null);
(statearr_82303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto___82304);

return statearr_82303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto___82304,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__82313,opts){
var map__82317 = p__82313;
var map__82317__$1 = ((((!((map__82317 == null)))?((((map__82317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82317):map__82317);
var eval_body__$1 = cljs.core.get.call(null,map__82317__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__82317__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__34378__auto__ = eval_body__$1;
if(cljs.core.truth_(and__34378__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__34378__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e82319){var e = e82319;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6726__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__82320_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__82320_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6726__auto__)){
var file_msg = temp__6726__auto__;
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
return cljs.core.map.call(null,(function (p__82329){
var vec__82330 = p__82329;
var k = cljs.core.nth.call(null,vec__82330,(0),null);
var v = cljs.core.nth.call(null,vec__82330,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__82333){
var vec__82334 = p__82333;
var k = cljs.core.nth.call(null,vec__82334,(0),null);
var v = cljs.core.nth.call(null,vec__82334,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__82340,p__82341){
var map__82588 = p__82340;
var map__82588__$1 = ((((!((map__82588 == null)))?((((map__82588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82588):map__82588);
var opts = map__82588__$1;
var before_jsload = cljs.core.get.call(null,map__82588__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__82588__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__82588__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__82589 = p__82341;
var map__82589__$1 = ((((!((map__82589 == null)))?((((map__82589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82589):map__82589);
var msg = map__82589__$1;
var files = cljs.core.get.call(null,map__82589__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__82589__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__82589__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__43337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__43338__auto__ = (function (){var switch__43223__auto__ = ((function (c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_82742){
var state_val_82743 = (state_82742[(1)]);
if((state_val_82743 === (7))){
var inst_82606 = (state_82742[(7)]);
var inst_82603 = (state_82742[(8)]);
var inst_82605 = (state_82742[(9)]);
var inst_82604 = (state_82742[(10)]);
var inst_82611 = cljs.core._nth.call(null,inst_82604,inst_82606);
var inst_82612 = figwheel.client.file_reloading.eval_body.call(null,inst_82611,opts);
var inst_82613 = (inst_82606 + (1));
var tmp82744 = inst_82603;
var tmp82745 = inst_82605;
var tmp82746 = inst_82604;
var inst_82603__$1 = tmp82744;
var inst_82604__$1 = tmp82746;
var inst_82605__$1 = tmp82745;
var inst_82606__$1 = inst_82613;
var state_82742__$1 = (function (){var statearr_82747 = state_82742;
(statearr_82747[(7)] = inst_82606__$1);

(statearr_82747[(11)] = inst_82612);

(statearr_82747[(8)] = inst_82603__$1);

(statearr_82747[(9)] = inst_82605__$1);

(statearr_82747[(10)] = inst_82604__$1);

return statearr_82747;
})();
var statearr_82748_82834 = state_82742__$1;
(statearr_82748_82834[(2)] = null);

(statearr_82748_82834[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (20))){
var inst_82646 = (state_82742[(12)]);
var inst_82654 = figwheel.client.file_reloading.sort_files.call(null,inst_82646);
var state_82742__$1 = state_82742;
var statearr_82749_82835 = state_82742__$1;
(statearr_82749_82835[(2)] = inst_82654);

(statearr_82749_82835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (27))){
var state_82742__$1 = state_82742;
var statearr_82750_82836 = state_82742__$1;
(statearr_82750_82836[(2)] = null);

(statearr_82750_82836[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (1))){
var inst_82595 = (state_82742[(13)]);
var inst_82592 = before_jsload.call(null,files);
var inst_82593 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_82594 = (function (){return ((function (inst_82595,inst_82592,inst_82593,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__82337_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__82337_SHARP_);
});
;})(inst_82595,inst_82592,inst_82593,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82595__$1 = cljs.core.filter.call(null,inst_82594,files);
var inst_82596 = cljs.core.not_empty.call(null,inst_82595__$1);
var state_82742__$1 = (function (){var statearr_82751 = state_82742;
(statearr_82751[(14)] = inst_82593);

(statearr_82751[(15)] = inst_82592);

(statearr_82751[(13)] = inst_82595__$1);

return statearr_82751;
})();
if(cljs.core.truth_(inst_82596)){
var statearr_82752_82837 = state_82742__$1;
(statearr_82752_82837[(1)] = (2));

} else {
var statearr_82753_82838 = state_82742__$1;
(statearr_82753_82838[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (24))){
var state_82742__$1 = state_82742;
var statearr_82754_82839 = state_82742__$1;
(statearr_82754_82839[(2)] = null);

(statearr_82754_82839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (39))){
var inst_82696 = (state_82742[(16)]);
var state_82742__$1 = state_82742;
var statearr_82755_82840 = state_82742__$1;
(statearr_82755_82840[(2)] = inst_82696);

(statearr_82755_82840[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (46))){
var inst_82737 = (state_82742[(2)]);
var state_82742__$1 = state_82742;
var statearr_82756_82841 = state_82742__$1;
(statearr_82756_82841[(2)] = inst_82737);

(statearr_82756_82841[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (4))){
var inst_82640 = (state_82742[(2)]);
var inst_82641 = cljs.core.List.EMPTY;
var inst_82642 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_82641);
var inst_82643 = (function (){return ((function (inst_82640,inst_82641,inst_82642,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__82338_SHARP_){
var and__34378__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__82338_SHARP_);
if(cljs.core.truth_(and__34378__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__82338_SHARP_));
} else {
return and__34378__auto__;
}
});
;})(inst_82640,inst_82641,inst_82642,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82644 = cljs.core.filter.call(null,inst_82643,files);
var inst_82645 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_82646 = cljs.core.concat.call(null,inst_82644,inst_82645);
var state_82742__$1 = (function (){var statearr_82757 = state_82742;
(statearr_82757[(17)] = inst_82640);

(statearr_82757[(12)] = inst_82646);

(statearr_82757[(18)] = inst_82642);

return statearr_82757;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_82758_82842 = state_82742__$1;
(statearr_82758_82842[(1)] = (16));

} else {
var statearr_82759_82843 = state_82742__$1;
(statearr_82759_82843[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (15))){
var inst_82630 = (state_82742[(2)]);
var state_82742__$1 = state_82742;
var statearr_82760_82844 = state_82742__$1;
(statearr_82760_82844[(2)] = inst_82630);

(statearr_82760_82844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (21))){
var inst_82656 = (state_82742[(19)]);
var inst_82656__$1 = (state_82742[(2)]);
var inst_82657 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_82656__$1);
var state_82742__$1 = (function (){var statearr_82761 = state_82742;
(statearr_82761[(19)] = inst_82656__$1);

return statearr_82761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82742__$1,(22),inst_82657);
} else {
if((state_val_82743 === (31))){
var inst_82740 = (state_82742[(2)]);
var state_82742__$1 = state_82742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82742__$1,inst_82740);
} else {
if((state_val_82743 === (32))){
var inst_82696 = (state_82742[(16)]);
var inst_82701 = inst_82696.cljs$lang$protocol_mask$partition0$;
var inst_82702 = (inst_82701 & (64));
var inst_82703 = inst_82696.cljs$core$ISeq$;
var inst_82704 = (inst_82702) || (inst_82703);
var state_82742__$1 = state_82742;
if(cljs.core.truth_(inst_82704)){
var statearr_82762_82845 = state_82742__$1;
(statearr_82762_82845[(1)] = (35));

} else {
var statearr_82763_82846 = state_82742__$1;
(statearr_82763_82846[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (40))){
var inst_82717 = (state_82742[(20)]);
var inst_82716 = (state_82742[(2)]);
var inst_82717__$1 = cljs.core.get.call(null,inst_82716,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_82718 = cljs.core.get.call(null,inst_82716,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_82719 = cljs.core.not_empty.call(null,inst_82717__$1);
var state_82742__$1 = (function (){var statearr_82764 = state_82742;
(statearr_82764[(21)] = inst_82718);

(statearr_82764[(20)] = inst_82717__$1);

return statearr_82764;
})();
if(cljs.core.truth_(inst_82719)){
var statearr_82765_82847 = state_82742__$1;
(statearr_82765_82847[(1)] = (41));

} else {
var statearr_82766_82848 = state_82742__$1;
(statearr_82766_82848[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (33))){
var state_82742__$1 = state_82742;
var statearr_82767_82849 = state_82742__$1;
(statearr_82767_82849[(2)] = false);

(statearr_82767_82849[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (13))){
var inst_82616 = (state_82742[(22)]);
var inst_82620 = cljs.core.chunk_first.call(null,inst_82616);
var inst_82621 = cljs.core.chunk_rest.call(null,inst_82616);
var inst_82622 = cljs.core.count.call(null,inst_82620);
var inst_82603 = inst_82621;
var inst_82604 = inst_82620;
var inst_82605 = inst_82622;
var inst_82606 = (0);
var state_82742__$1 = (function (){var statearr_82768 = state_82742;
(statearr_82768[(7)] = inst_82606);

(statearr_82768[(8)] = inst_82603);

(statearr_82768[(9)] = inst_82605);

(statearr_82768[(10)] = inst_82604);

return statearr_82768;
})();
var statearr_82769_82850 = state_82742__$1;
(statearr_82769_82850[(2)] = null);

(statearr_82769_82850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (22))){
var inst_82659 = (state_82742[(23)]);
var inst_82660 = (state_82742[(24)]);
var inst_82664 = (state_82742[(25)]);
var inst_82656 = (state_82742[(19)]);
var inst_82659__$1 = (state_82742[(2)]);
var inst_82660__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_82659__$1);
var inst_82661 = (function (){var all_files = inst_82656;
var res_SINGLEQUOTE_ = inst_82659__$1;
var res = inst_82660__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_82659,inst_82660,inst_82664,inst_82656,inst_82659__$1,inst_82660__$1,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__82339_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__82339_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_82659,inst_82660,inst_82664,inst_82656,inst_82659__$1,inst_82660__$1,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82662 = cljs.core.filter.call(null,inst_82661,inst_82659__$1);
var inst_82663 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_82664__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_82663);
var inst_82665 = cljs.core.not_empty.call(null,inst_82664__$1);
var state_82742__$1 = (function (){var statearr_82770 = state_82742;
(statearr_82770[(23)] = inst_82659__$1);

(statearr_82770[(24)] = inst_82660__$1);

(statearr_82770[(26)] = inst_82662);

(statearr_82770[(25)] = inst_82664__$1);

return statearr_82770;
})();
if(cljs.core.truth_(inst_82665)){
var statearr_82771_82851 = state_82742__$1;
(statearr_82771_82851[(1)] = (23));

} else {
var statearr_82772_82852 = state_82742__$1;
(statearr_82772_82852[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (36))){
var state_82742__$1 = state_82742;
var statearr_82773_82853 = state_82742__$1;
(statearr_82773_82853[(2)] = false);

(statearr_82773_82853[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (41))){
var inst_82717 = (state_82742[(20)]);
var inst_82721 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_82722 = cljs.core.map.call(null,inst_82721,inst_82717);
var inst_82723 = cljs.core.pr_str.call(null,inst_82722);
var inst_82724 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_82723)].join('');
var inst_82725 = figwheel.client.utils.log.call(null,inst_82724);
var state_82742__$1 = state_82742;
var statearr_82774_82854 = state_82742__$1;
(statearr_82774_82854[(2)] = inst_82725);

(statearr_82774_82854[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (43))){
var inst_82718 = (state_82742[(21)]);
var inst_82728 = (state_82742[(2)]);
var inst_82729 = cljs.core.not_empty.call(null,inst_82718);
var state_82742__$1 = (function (){var statearr_82775 = state_82742;
(statearr_82775[(27)] = inst_82728);

return statearr_82775;
})();
if(cljs.core.truth_(inst_82729)){
var statearr_82776_82855 = state_82742__$1;
(statearr_82776_82855[(1)] = (44));

} else {
var statearr_82777_82856 = state_82742__$1;
(statearr_82777_82856[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (29))){
var inst_82696 = (state_82742[(16)]);
var inst_82659 = (state_82742[(23)]);
var inst_82660 = (state_82742[(24)]);
var inst_82662 = (state_82742[(26)]);
var inst_82664 = (state_82742[(25)]);
var inst_82656 = (state_82742[(19)]);
var inst_82692 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_82695 = (function (){var all_files = inst_82656;
var res_SINGLEQUOTE_ = inst_82659;
var res = inst_82660;
var files_not_loaded = inst_82662;
var dependencies_that_loaded = inst_82664;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82696,inst_82659,inst_82660,inst_82662,inst_82664,inst_82656,inst_82692,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__82694){
var map__82778 = p__82694;
var map__82778__$1 = ((((!((map__82778 == null)))?((((map__82778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82778):map__82778);
var namespace = cljs.core.get.call(null,map__82778__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82696,inst_82659,inst_82660,inst_82662,inst_82664,inst_82656,inst_82692,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82696__$1 = cljs.core.group_by.call(null,inst_82695,inst_82662);
var inst_82698 = (inst_82696__$1 == null);
var inst_82699 = cljs.core.not.call(null,inst_82698);
var state_82742__$1 = (function (){var statearr_82780 = state_82742;
(statearr_82780[(16)] = inst_82696__$1);

(statearr_82780[(28)] = inst_82692);

return statearr_82780;
})();
if(inst_82699){
var statearr_82781_82857 = state_82742__$1;
(statearr_82781_82857[(1)] = (32));

} else {
var statearr_82782_82858 = state_82742__$1;
(statearr_82782_82858[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (44))){
var inst_82718 = (state_82742[(21)]);
var inst_82731 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_82718);
var inst_82732 = cljs.core.pr_str.call(null,inst_82731);
var inst_82733 = [cljs.core.str("not required: "),cljs.core.str(inst_82732)].join('');
var inst_82734 = figwheel.client.utils.log.call(null,inst_82733);
var state_82742__$1 = state_82742;
var statearr_82783_82859 = state_82742__$1;
(statearr_82783_82859[(2)] = inst_82734);

(statearr_82783_82859[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (6))){
var inst_82637 = (state_82742[(2)]);
var state_82742__$1 = state_82742;
var statearr_82784_82860 = state_82742__$1;
(statearr_82784_82860[(2)] = inst_82637);

(statearr_82784_82860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (28))){
var inst_82662 = (state_82742[(26)]);
var inst_82689 = (state_82742[(2)]);
var inst_82690 = cljs.core.not_empty.call(null,inst_82662);
var state_82742__$1 = (function (){var statearr_82785 = state_82742;
(statearr_82785[(29)] = inst_82689);

return statearr_82785;
})();
if(cljs.core.truth_(inst_82690)){
var statearr_82786_82861 = state_82742__$1;
(statearr_82786_82861[(1)] = (29));

} else {
var statearr_82787_82862 = state_82742__$1;
(statearr_82787_82862[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (25))){
var inst_82660 = (state_82742[(24)]);
var inst_82676 = (state_82742[(2)]);
var inst_82677 = cljs.core.not_empty.call(null,inst_82660);
var state_82742__$1 = (function (){var statearr_82788 = state_82742;
(statearr_82788[(30)] = inst_82676);

return statearr_82788;
})();
if(cljs.core.truth_(inst_82677)){
var statearr_82789_82863 = state_82742__$1;
(statearr_82789_82863[(1)] = (26));

} else {
var statearr_82790_82864 = state_82742__$1;
(statearr_82790_82864[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (34))){
var inst_82711 = (state_82742[(2)]);
var state_82742__$1 = state_82742;
if(cljs.core.truth_(inst_82711)){
var statearr_82791_82865 = state_82742__$1;
(statearr_82791_82865[(1)] = (38));

} else {
var statearr_82792_82866 = state_82742__$1;
(statearr_82792_82866[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (17))){
var state_82742__$1 = state_82742;
var statearr_82793_82867 = state_82742__$1;
(statearr_82793_82867[(2)] = recompile_dependents);

(statearr_82793_82867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (3))){
var state_82742__$1 = state_82742;
var statearr_82794_82868 = state_82742__$1;
(statearr_82794_82868[(2)] = null);

(statearr_82794_82868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (12))){
var inst_82633 = (state_82742[(2)]);
var state_82742__$1 = state_82742;
var statearr_82795_82869 = state_82742__$1;
(statearr_82795_82869[(2)] = inst_82633);

(statearr_82795_82869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (2))){
var inst_82595 = (state_82742[(13)]);
var inst_82602 = cljs.core.seq.call(null,inst_82595);
var inst_82603 = inst_82602;
var inst_82604 = null;
var inst_82605 = (0);
var inst_82606 = (0);
var state_82742__$1 = (function (){var statearr_82796 = state_82742;
(statearr_82796[(7)] = inst_82606);

(statearr_82796[(8)] = inst_82603);

(statearr_82796[(9)] = inst_82605);

(statearr_82796[(10)] = inst_82604);

return statearr_82796;
})();
var statearr_82797_82870 = state_82742__$1;
(statearr_82797_82870[(2)] = null);

(statearr_82797_82870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (23))){
var inst_82659 = (state_82742[(23)]);
var inst_82660 = (state_82742[(24)]);
var inst_82662 = (state_82742[(26)]);
var inst_82664 = (state_82742[(25)]);
var inst_82656 = (state_82742[(19)]);
var inst_82667 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_82669 = (function (){var all_files = inst_82656;
var res_SINGLEQUOTE_ = inst_82659;
var res = inst_82660;
var files_not_loaded = inst_82662;
var dependencies_that_loaded = inst_82664;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82659,inst_82660,inst_82662,inst_82664,inst_82656,inst_82667,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__82668){
var map__82798 = p__82668;
var map__82798__$1 = ((((!((map__82798 == null)))?((((map__82798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82798):map__82798);
var request_url = cljs.core.get.call(null,map__82798__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82659,inst_82660,inst_82662,inst_82664,inst_82656,inst_82667,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82670 = cljs.core.reverse.call(null,inst_82664);
var inst_82671 = cljs.core.map.call(null,inst_82669,inst_82670);
var inst_82672 = cljs.core.pr_str.call(null,inst_82671);
var inst_82673 = figwheel.client.utils.log.call(null,inst_82672);
var state_82742__$1 = (function (){var statearr_82800 = state_82742;
(statearr_82800[(31)] = inst_82667);

return statearr_82800;
})();
var statearr_82801_82871 = state_82742__$1;
(statearr_82801_82871[(2)] = inst_82673);

(statearr_82801_82871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (35))){
var state_82742__$1 = state_82742;
var statearr_82802_82872 = state_82742__$1;
(statearr_82802_82872[(2)] = true);

(statearr_82802_82872[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (19))){
var inst_82646 = (state_82742[(12)]);
var inst_82652 = figwheel.client.file_reloading.expand_files.call(null,inst_82646);
var state_82742__$1 = state_82742;
var statearr_82803_82873 = state_82742__$1;
(statearr_82803_82873[(2)] = inst_82652);

(statearr_82803_82873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (11))){
var state_82742__$1 = state_82742;
var statearr_82804_82874 = state_82742__$1;
(statearr_82804_82874[(2)] = null);

(statearr_82804_82874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (9))){
var inst_82635 = (state_82742[(2)]);
var state_82742__$1 = state_82742;
var statearr_82805_82875 = state_82742__$1;
(statearr_82805_82875[(2)] = inst_82635);

(statearr_82805_82875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (5))){
var inst_82606 = (state_82742[(7)]);
var inst_82605 = (state_82742[(9)]);
var inst_82608 = (inst_82606 < inst_82605);
var inst_82609 = inst_82608;
var state_82742__$1 = state_82742;
if(cljs.core.truth_(inst_82609)){
var statearr_82806_82876 = state_82742__$1;
(statearr_82806_82876[(1)] = (7));

} else {
var statearr_82807_82877 = state_82742__$1;
(statearr_82807_82877[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (14))){
var inst_82616 = (state_82742[(22)]);
var inst_82625 = cljs.core.first.call(null,inst_82616);
var inst_82626 = figwheel.client.file_reloading.eval_body.call(null,inst_82625,opts);
var inst_82627 = cljs.core.next.call(null,inst_82616);
var inst_82603 = inst_82627;
var inst_82604 = null;
var inst_82605 = (0);
var inst_82606 = (0);
var state_82742__$1 = (function (){var statearr_82808 = state_82742;
(statearr_82808[(7)] = inst_82606);

(statearr_82808[(8)] = inst_82603);

(statearr_82808[(32)] = inst_82626);

(statearr_82808[(9)] = inst_82605);

(statearr_82808[(10)] = inst_82604);

return statearr_82808;
})();
var statearr_82809_82878 = state_82742__$1;
(statearr_82809_82878[(2)] = null);

(statearr_82809_82878[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (45))){
var state_82742__$1 = state_82742;
var statearr_82810_82879 = state_82742__$1;
(statearr_82810_82879[(2)] = null);

(statearr_82810_82879[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (26))){
var inst_82659 = (state_82742[(23)]);
var inst_82660 = (state_82742[(24)]);
var inst_82662 = (state_82742[(26)]);
var inst_82664 = (state_82742[(25)]);
var inst_82656 = (state_82742[(19)]);
var inst_82679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_82681 = (function (){var all_files = inst_82656;
var res_SINGLEQUOTE_ = inst_82659;
var res = inst_82660;
var files_not_loaded = inst_82662;
var dependencies_that_loaded = inst_82664;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82659,inst_82660,inst_82662,inst_82664,inst_82656,inst_82679,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__82680){
var map__82811 = p__82680;
var map__82811__$1 = ((((!((map__82811 == null)))?((((map__82811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82811):map__82811);
var namespace = cljs.core.get.call(null,map__82811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__82811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82659,inst_82660,inst_82662,inst_82664,inst_82656,inst_82679,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82682 = cljs.core.map.call(null,inst_82681,inst_82660);
var inst_82683 = cljs.core.pr_str.call(null,inst_82682);
var inst_82684 = figwheel.client.utils.log.call(null,inst_82683);
var inst_82685 = (function (){var all_files = inst_82656;
var res_SINGLEQUOTE_ = inst_82659;
var res = inst_82660;
var files_not_loaded = inst_82662;
var dependencies_that_loaded = inst_82664;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82659,inst_82660,inst_82662,inst_82664,inst_82656,inst_82679,inst_82681,inst_82682,inst_82683,inst_82684,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82659,inst_82660,inst_82662,inst_82664,inst_82656,inst_82679,inst_82681,inst_82682,inst_82683,inst_82684,state_val_82743,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82686 = setTimeout(inst_82685,(10));
var state_82742__$1 = (function (){var statearr_82813 = state_82742;
(statearr_82813[(33)] = inst_82679);

(statearr_82813[(34)] = inst_82684);

return statearr_82813;
})();
var statearr_82814_82880 = state_82742__$1;
(statearr_82814_82880[(2)] = inst_82686);

(statearr_82814_82880[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (16))){
var state_82742__$1 = state_82742;
var statearr_82815_82881 = state_82742__$1;
(statearr_82815_82881[(2)] = reload_dependents);

(statearr_82815_82881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (38))){
var inst_82696 = (state_82742[(16)]);
var inst_82713 = cljs.core.apply.call(null,cljs.core.hash_map,inst_82696);
var state_82742__$1 = state_82742;
var statearr_82816_82882 = state_82742__$1;
(statearr_82816_82882[(2)] = inst_82713);

(statearr_82816_82882[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (30))){
var state_82742__$1 = state_82742;
var statearr_82817_82883 = state_82742__$1;
(statearr_82817_82883[(2)] = null);

(statearr_82817_82883[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (10))){
var inst_82616 = (state_82742[(22)]);
var inst_82618 = cljs.core.chunked_seq_QMARK_.call(null,inst_82616);
var state_82742__$1 = state_82742;
if(inst_82618){
var statearr_82818_82884 = state_82742__$1;
(statearr_82818_82884[(1)] = (13));

} else {
var statearr_82819_82885 = state_82742__$1;
(statearr_82819_82885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (18))){
var inst_82650 = (state_82742[(2)]);
var state_82742__$1 = state_82742;
if(cljs.core.truth_(inst_82650)){
var statearr_82820_82886 = state_82742__$1;
(statearr_82820_82886[(1)] = (19));

} else {
var statearr_82821_82887 = state_82742__$1;
(statearr_82821_82887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (42))){
var state_82742__$1 = state_82742;
var statearr_82822_82888 = state_82742__$1;
(statearr_82822_82888[(2)] = null);

(statearr_82822_82888[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (37))){
var inst_82708 = (state_82742[(2)]);
var state_82742__$1 = state_82742;
var statearr_82823_82889 = state_82742__$1;
(statearr_82823_82889[(2)] = inst_82708);

(statearr_82823_82889[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82743 === (8))){
var inst_82616 = (state_82742[(22)]);
var inst_82603 = (state_82742[(8)]);
var inst_82616__$1 = cljs.core.seq.call(null,inst_82603);
var state_82742__$1 = (function (){var statearr_82824 = state_82742;
(statearr_82824[(22)] = inst_82616__$1);

return statearr_82824;
})();
if(inst_82616__$1){
var statearr_82825_82890 = state_82742__$1;
(statearr_82825_82890[(1)] = (10));

} else {
var statearr_82826_82891 = state_82742__$1;
(statearr_82826_82891[(1)] = (11));

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
});})(c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__43223__auto__,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto____0 = (function (){
var statearr_82830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82830[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto__);

(statearr_82830[(1)] = (1));

return statearr_82830;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto____1 = (function (state_82742){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__.call(null,state_82742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e82831){if((e82831 instanceof Object)){
var ex__43227__auto__ = e82831;
var statearr_82832_82892 = state_82742;
(statearr_82832_82892[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82893 = state_82742;
state_82742 = G__82893;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto__ = function(state_82742){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto____1.call(this,state_82742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__43339__auto__ = (function (){var statearr_82833 = f__43338__auto__.call(null);
(statearr_82833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43337__auto__);

return statearr_82833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43339__auto__);
});})(c__43337__auto__,map__82588,map__82588__$1,opts,before_jsload,on_jsload,reload_dependents,map__82589,map__82589__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__43337__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__82896,link){
var map__82899 = p__82896;
var map__82899__$1 = ((((!((map__82899 == null)))?((((map__82899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82899):map__82899);
var file = cljs.core.get.call(null,map__82899__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6728__auto__ = link.href;
if(cljs.core.truth_(temp__6728__auto__)){
var link_href = temp__6728__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6728__auto__,map__82899,map__82899__$1,file){
return (function (p1__82894_SHARP_,p2__82895_SHARP_){
if(cljs.core._EQ_.call(null,p1__82894_SHARP_,p2__82895_SHARP_)){
return p1__82894_SHARP_;
} else {
return false;
}
});})(link_href,temp__6728__auto__,map__82899,map__82899__$1,file))
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
var temp__6728__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__82905){
var map__82906 = p__82905;
var map__82906__$1 = ((((!((map__82906 == null)))?((((map__82906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82906):map__82906);
var match_length = cljs.core.get.call(null,map__82906__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__82906__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__82901_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__82901_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6728__auto__)){
var res = temp__6728__auto__;
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
var args82908 = [];
var len__35573__auto___82911 = arguments.length;
var i__35574__auto___82912 = (0);
while(true){
if((i__35574__auto___82912 < len__35573__auto___82911)){
args82908.push((arguments[i__35574__auto___82912]));

var G__82913 = (i__35574__auto___82912 + (1));
i__35574__auto___82912 = G__82913;
continue;
} else {
}
break;
}

var G__82910 = args82908.length;
switch (G__82910) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82908.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__82915_SHARP_,p2__82916_SHARP_){
return cljs.core.assoc.call(null,p1__82915_SHARP_,cljs.core.get.call(null,p2__82916_SHARP_,key),p2__82916_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__82917){
var map__82920 = p__82917;
var map__82920__$1 = ((((!((map__82920 == null)))?((((map__82920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82920):map__82920);
var f_data = map__82920__$1;
var file = cljs.core.get.call(null,map__82920__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6728__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6728__auto__)){
var link = temp__6728__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__82922,files_msg){
var map__82929 = p__82922;
var map__82929__$1 = ((((!((map__82929 == null)))?((((map__82929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82929):map__82929);
var opts = map__82929__$1;
var on_cssload = cljs.core.get.call(null,map__82929__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__82931_82935 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__82932_82936 = null;
var count__82933_82937 = (0);
var i__82934_82938 = (0);
while(true){
if((i__82934_82938 < count__82933_82937)){
var f_82939 = cljs.core._nth.call(null,chunk__82932_82936,i__82934_82938);
figwheel.client.file_reloading.reload_css_file.call(null,f_82939);

var G__82940 = seq__82931_82935;
var G__82941 = chunk__82932_82936;
var G__82942 = count__82933_82937;
var G__82943 = (i__82934_82938 + (1));
seq__82931_82935 = G__82940;
chunk__82932_82936 = G__82941;
count__82933_82937 = G__82942;
i__82934_82938 = G__82943;
continue;
} else {
var temp__6728__auto___82944 = cljs.core.seq.call(null,seq__82931_82935);
if(temp__6728__auto___82944){
var seq__82931_82945__$1 = temp__6728__auto___82944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82931_82945__$1)){
var c__35293__auto___82946 = cljs.core.chunk_first.call(null,seq__82931_82945__$1);
var G__82947 = cljs.core.chunk_rest.call(null,seq__82931_82945__$1);
var G__82948 = c__35293__auto___82946;
var G__82949 = cljs.core.count.call(null,c__35293__auto___82946);
var G__82950 = (0);
seq__82931_82935 = G__82947;
chunk__82932_82936 = G__82948;
count__82933_82937 = G__82949;
i__82934_82938 = G__82950;
continue;
} else {
var f_82951 = cljs.core.first.call(null,seq__82931_82945__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_82951);

var G__82952 = cljs.core.next.call(null,seq__82931_82945__$1);
var G__82953 = null;
var G__82954 = (0);
var G__82955 = (0);
seq__82931_82935 = G__82952;
chunk__82932_82936 = G__82953;
count__82933_82937 = G__82954;
i__82934_82938 = G__82955;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__82929,map__82929__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__82929,map__82929__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1488154332498