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
var or__31879__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__31879__auto__){
return or__31879__auto__;
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
var or__31879__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__72834_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__72834_SHARP_));
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
var seq__72839 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__72840 = null;
var count__72841 = (0);
var i__72842 = (0);
while(true){
if((i__72842 < count__72841)){
var n = cljs.core._nth.call(null,chunk__72840,i__72842);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__72843 = seq__72839;
var G__72844 = chunk__72840;
var G__72845 = count__72841;
var G__72846 = (i__72842 + (1));
seq__72839 = G__72843;
chunk__72840 = G__72844;
count__72841 = G__72845;
i__72842 = G__72846;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__72839);
if(temp__4657__auto__){
var seq__72839__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72839__$1)){
var c__32690__auto__ = cljs.core.chunk_first.call(null,seq__72839__$1);
var G__72847 = cljs.core.chunk_rest.call(null,seq__72839__$1);
var G__72848 = c__32690__auto__;
var G__72849 = cljs.core.count.call(null,c__32690__auto__);
var G__72850 = (0);
seq__72839 = G__72847;
chunk__72840 = G__72848;
count__72841 = G__72849;
i__72842 = G__72850;
continue;
} else {
var n = cljs.core.first.call(null,seq__72839__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__72851 = cljs.core.next.call(null,seq__72839__$1);
var G__72852 = null;
var G__72853 = (0);
var G__72854 = (0);
seq__72839 = G__72851;
chunk__72840 = G__72852;
count__72841 = G__72853;
i__72842 = G__72854;
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

var seq__72905_72916 = cljs.core.seq.call(null,deps);
var chunk__72906_72917 = null;
var count__72907_72918 = (0);
var i__72908_72919 = (0);
while(true){
if((i__72908_72919 < count__72907_72918)){
var dep_72920 = cljs.core._nth.call(null,chunk__72906_72917,i__72908_72919);
topo_sort_helper_STAR_.call(null,dep_72920,(depth + (1)),state);

var G__72921 = seq__72905_72916;
var G__72922 = chunk__72906_72917;
var G__72923 = count__72907_72918;
var G__72924 = (i__72908_72919 + (1));
seq__72905_72916 = G__72921;
chunk__72906_72917 = G__72922;
count__72907_72918 = G__72923;
i__72908_72919 = G__72924;
continue;
} else {
var temp__4657__auto___72925 = cljs.core.seq.call(null,seq__72905_72916);
if(temp__4657__auto___72925){
var seq__72905_72926__$1 = temp__4657__auto___72925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72905_72926__$1)){
var c__32690__auto___72927 = cljs.core.chunk_first.call(null,seq__72905_72926__$1);
var G__72928 = cljs.core.chunk_rest.call(null,seq__72905_72926__$1);
var G__72929 = c__32690__auto___72927;
var G__72930 = cljs.core.count.call(null,c__32690__auto___72927);
var G__72931 = (0);
seq__72905_72916 = G__72928;
chunk__72906_72917 = G__72929;
count__72907_72918 = G__72930;
i__72908_72919 = G__72931;
continue;
} else {
var dep_72932 = cljs.core.first.call(null,seq__72905_72926__$1);
topo_sort_helper_STAR_.call(null,dep_72932,(depth + (1)),state);

var G__72933 = cljs.core.next.call(null,seq__72905_72926__$1);
var G__72934 = null;
var G__72935 = (0);
var G__72936 = (0);
seq__72905_72916 = G__72933;
chunk__72906_72917 = G__72934;
count__72907_72918 = G__72935;
i__72908_72919 = G__72936;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__72909){
var vec__72913 = p__72909;
var seq__72914 = cljs.core.seq.call(null,vec__72913);
var first__72915 = cljs.core.first.call(null,seq__72914);
var seq__72914__$1 = cljs.core.next.call(null,seq__72914);
var x = first__72915;
var xs = seq__72914__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__72913,seq__72914,first__72915,seq__72914__$1,x,xs,get_deps__$1){
return (function (p1__72855_SHARP_){
return clojure.set.difference.call(null,p1__72855_SHARP_,x);
});})(vec__72913,seq__72914,first__72915,seq__72914__$1,x,xs,get_deps__$1))
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
var seq__72949 = cljs.core.seq.call(null,provides);
var chunk__72950 = null;
var count__72951 = (0);
var i__72952 = (0);
while(true){
if((i__72952 < count__72951)){
var prov = cljs.core._nth.call(null,chunk__72950,i__72952);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__72953_72961 = cljs.core.seq.call(null,requires);
var chunk__72954_72962 = null;
var count__72955_72963 = (0);
var i__72956_72964 = (0);
while(true){
if((i__72956_72964 < count__72955_72963)){
var req_72965 = cljs.core._nth.call(null,chunk__72954_72962,i__72956_72964);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_72965,prov);

var G__72966 = seq__72953_72961;
var G__72967 = chunk__72954_72962;
var G__72968 = count__72955_72963;
var G__72969 = (i__72956_72964 + (1));
seq__72953_72961 = G__72966;
chunk__72954_72962 = G__72967;
count__72955_72963 = G__72968;
i__72956_72964 = G__72969;
continue;
} else {
var temp__4657__auto___72970 = cljs.core.seq.call(null,seq__72953_72961);
if(temp__4657__auto___72970){
var seq__72953_72971__$1 = temp__4657__auto___72970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72953_72971__$1)){
var c__32690__auto___72972 = cljs.core.chunk_first.call(null,seq__72953_72971__$1);
var G__72973 = cljs.core.chunk_rest.call(null,seq__72953_72971__$1);
var G__72974 = c__32690__auto___72972;
var G__72975 = cljs.core.count.call(null,c__32690__auto___72972);
var G__72976 = (0);
seq__72953_72961 = G__72973;
chunk__72954_72962 = G__72974;
count__72955_72963 = G__72975;
i__72956_72964 = G__72976;
continue;
} else {
var req_72977 = cljs.core.first.call(null,seq__72953_72971__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_72977,prov);

var G__72978 = cljs.core.next.call(null,seq__72953_72971__$1);
var G__72979 = null;
var G__72980 = (0);
var G__72981 = (0);
seq__72953_72961 = G__72978;
chunk__72954_72962 = G__72979;
count__72955_72963 = G__72980;
i__72956_72964 = G__72981;
continue;
}
} else {
}
}
break;
}

var G__72982 = seq__72949;
var G__72983 = chunk__72950;
var G__72984 = count__72951;
var G__72985 = (i__72952 + (1));
seq__72949 = G__72982;
chunk__72950 = G__72983;
count__72951 = G__72984;
i__72952 = G__72985;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__72949);
if(temp__4657__auto__){
var seq__72949__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72949__$1)){
var c__32690__auto__ = cljs.core.chunk_first.call(null,seq__72949__$1);
var G__72986 = cljs.core.chunk_rest.call(null,seq__72949__$1);
var G__72987 = c__32690__auto__;
var G__72988 = cljs.core.count.call(null,c__32690__auto__);
var G__72989 = (0);
seq__72949 = G__72986;
chunk__72950 = G__72987;
count__72951 = G__72988;
i__72952 = G__72989;
continue;
} else {
var prov = cljs.core.first.call(null,seq__72949__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__72957_72990 = cljs.core.seq.call(null,requires);
var chunk__72958_72991 = null;
var count__72959_72992 = (0);
var i__72960_72993 = (0);
while(true){
if((i__72960_72993 < count__72959_72992)){
var req_72994 = cljs.core._nth.call(null,chunk__72958_72991,i__72960_72993);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_72994,prov);

var G__72995 = seq__72957_72990;
var G__72996 = chunk__72958_72991;
var G__72997 = count__72959_72992;
var G__72998 = (i__72960_72993 + (1));
seq__72957_72990 = G__72995;
chunk__72958_72991 = G__72996;
count__72959_72992 = G__72997;
i__72960_72993 = G__72998;
continue;
} else {
var temp__4657__auto___72999__$1 = cljs.core.seq.call(null,seq__72957_72990);
if(temp__4657__auto___72999__$1){
var seq__72957_73000__$1 = temp__4657__auto___72999__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72957_73000__$1)){
var c__32690__auto___73001 = cljs.core.chunk_first.call(null,seq__72957_73000__$1);
var G__73002 = cljs.core.chunk_rest.call(null,seq__72957_73000__$1);
var G__73003 = c__32690__auto___73001;
var G__73004 = cljs.core.count.call(null,c__32690__auto___73001);
var G__73005 = (0);
seq__72957_72990 = G__73002;
chunk__72958_72991 = G__73003;
count__72959_72992 = G__73004;
i__72960_72993 = G__73005;
continue;
} else {
var req_73006 = cljs.core.first.call(null,seq__72957_73000__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_73006,prov);

var G__73007 = cljs.core.next.call(null,seq__72957_73000__$1);
var G__73008 = null;
var G__73009 = (0);
var G__73010 = (0);
seq__72957_72990 = G__73007;
chunk__72958_72991 = G__73008;
count__72959_72992 = G__73009;
i__72960_72993 = G__73010;
continue;
}
} else {
}
}
break;
}

var G__73011 = cljs.core.next.call(null,seq__72949__$1);
var G__73012 = null;
var G__73013 = (0);
var G__73014 = (0);
seq__72949 = G__73011;
chunk__72950 = G__73012;
count__72951 = G__73013;
i__72952 = G__73014;
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
var seq__73019_73023 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__73020_73024 = null;
var count__73021_73025 = (0);
var i__73022_73026 = (0);
while(true){
if((i__73022_73026 < count__73021_73025)){
var ns_73027 = cljs.core._nth.call(null,chunk__73020_73024,i__73022_73026);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_73027);

var G__73028 = seq__73019_73023;
var G__73029 = chunk__73020_73024;
var G__73030 = count__73021_73025;
var G__73031 = (i__73022_73026 + (1));
seq__73019_73023 = G__73028;
chunk__73020_73024 = G__73029;
count__73021_73025 = G__73030;
i__73022_73026 = G__73031;
continue;
} else {
var temp__4657__auto___73032 = cljs.core.seq.call(null,seq__73019_73023);
if(temp__4657__auto___73032){
var seq__73019_73033__$1 = temp__4657__auto___73032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73019_73033__$1)){
var c__32690__auto___73034 = cljs.core.chunk_first.call(null,seq__73019_73033__$1);
var G__73035 = cljs.core.chunk_rest.call(null,seq__73019_73033__$1);
var G__73036 = c__32690__auto___73034;
var G__73037 = cljs.core.count.call(null,c__32690__auto___73034);
var G__73038 = (0);
seq__73019_73023 = G__73035;
chunk__73020_73024 = G__73036;
count__73021_73025 = G__73037;
i__73022_73026 = G__73038;
continue;
} else {
var ns_73039 = cljs.core.first.call(null,seq__73019_73033__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_73039);

var G__73040 = cljs.core.next.call(null,seq__73019_73033__$1);
var G__73041 = null;
var G__73042 = (0);
var G__73043 = (0);
seq__73019_73023 = G__73040;
chunk__73020_73024 = G__73041;
count__73021_73025 = G__73042;
i__73022_73026 = G__73043;
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
goog.require_figwheel_backup_ = (function (){var or__31879__auto__ = goog.require__;
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
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
var G__73044__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__73044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73045__i = 0, G__73045__a = new Array(arguments.length -  0);
while (G__73045__i < G__73045__a.length) {G__73045__a[G__73045__i] = arguments[G__73045__i + 0]; ++G__73045__i;}
  args = new cljs.core.IndexedSeq(G__73045__a,0);
} 
return G__73044__delegate.call(this,args);};
G__73044.cljs$lang$maxFixedArity = 0;
G__73044.cljs$lang$applyTo = (function (arglist__73046){
var args = cljs.core.seq(arglist__73046);
return G__73044__delegate(args);
});
G__73044.cljs$core$IFn$_invoke$arity$variadic = G__73044__delegate;
return G__73044;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__73048 = cljs.core._EQ_;
var expr__73049 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__73048.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__73049))){
var path_parts = ((function (pred__73048,expr__73049){
return (function (p1__73047_SHARP_){
return clojure.string.split.call(null,p1__73047_SHARP_,/[\/\\]/);
});})(pred__73048,expr__73049))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__73048,expr__73049){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e73051){if((e73051 instanceof Error)){
var e = e73051;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e73051;

}
}})());
});
;})(path_parts,sep,root,pred__73048,expr__73049))
} else {
if(cljs.core.truth_(pred__73048.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__73049))){
return ((function (pred__73048,expr__73049){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__73048,expr__73049){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__73048,expr__73049))
);

return deferred.addErrback(((function (deferred,pred__73048,expr__73049){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__73048,expr__73049))
);
});
;})(pred__73048,expr__73049))
} else {
return ((function (pred__73048,expr__73049){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__73048,expr__73049))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__73052,callback){
var map__73055 = p__73052;
var map__73055__$1 = ((((!((map__73055 == null)))?((((map__73055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73055):map__73055);
var file_msg = map__73055__$1;
var request_url = cljs.core.get.call(null,map__73055__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__73055,map__73055__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__73055,map__73055__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_73079){
var state_val_73080 = (state_73079[(1)]);
if((state_val_73080 === (7))){
var inst_73075 = (state_73079[(2)]);
var state_73079__$1 = state_73079;
var statearr_73081_73101 = state_73079__$1;
(statearr_73081_73101[(2)] = inst_73075);

(statearr_73081_73101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73080 === (1))){
var state_73079__$1 = state_73079;
var statearr_73082_73102 = state_73079__$1;
(statearr_73082_73102[(2)] = null);

(statearr_73082_73102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73080 === (4))){
var inst_73059 = (state_73079[(7)]);
var inst_73059__$1 = (state_73079[(2)]);
var state_73079__$1 = (function (){var statearr_73083 = state_73079;
(statearr_73083[(7)] = inst_73059__$1);

return statearr_73083;
})();
if(cljs.core.truth_(inst_73059__$1)){
var statearr_73084_73103 = state_73079__$1;
(statearr_73084_73103[(1)] = (5));

} else {
var statearr_73085_73104 = state_73079__$1;
(statearr_73085_73104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73080 === (6))){
var state_73079__$1 = state_73079;
var statearr_73086_73105 = state_73079__$1;
(statearr_73086_73105[(2)] = null);

(statearr_73086_73105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73080 === (3))){
var inst_73077 = (state_73079[(2)]);
var state_73079__$1 = state_73079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73079__$1,inst_73077);
} else {
if((state_val_73080 === (2))){
var state_73079__$1 = state_73079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73079__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_73080 === (11))){
var inst_73071 = (state_73079[(2)]);
var state_73079__$1 = (function (){var statearr_73087 = state_73079;
(statearr_73087[(8)] = inst_73071);

return statearr_73087;
})();
var statearr_73088_73106 = state_73079__$1;
(statearr_73088_73106[(2)] = null);

(statearr_73088_73106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73080 === (9))){
var inst_73063 = (state_73079[(9)]);
var inst_73065 = (state_73079[(10)]);
var inst_73067 = inst_73065.call(null,inst_73063);
var state_73079__$1 = state_73079;
var statearr_73089_73107 = state_73079__$1;
(statearr_73089_73107[(2)] = inst_73067);

(statearr_73089_73107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73080 === (5))){
var inst_73059 = (state_73079[(7)]);
var inst_73061 = figwheel.client.file_reloading.blocking_load.call(null,inst_73059);
var state_73079__$1 = state_73079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73079__$1,(8),inst_73061);
} else {
if((state_val_73080 === (10))){
var inst_73063 = (state_73079[(9)]);
var inst_73069 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_73063);
var state_73079__$1 = state_73079;
var statearr_73090_73108 = state_73079__$1;
(statearr_73090_73108[(2)] = inst_73069);

(statearr_73090_73108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73080 === (8))){
var inst_73059 = (state_73079[(7)]);
var inst_73065 = (state_73079[(10)]);
var inst_73063 = (state_73079[(2)]);
var inst_73064 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_73065__$1 = cljs.core.get.call(null,inst_73064,inst_73059);
var state_73079__$1 = (function (){var statearr_73091 = state_73079;
(statearr_73091[(9)] = inst_73063);

(statearr_73091[(10)] = inst_73065__$1);

return statearr_73091;
})();
if(cljs.core.truth_(inst_73065__$1)){
var statearr_73092_73109 = state_73079__$1;
(statearr_73092_73109[(1)] = (9));

} else {
var statearr_73093_73110 = state_73079__$1;
(statearr_73093_73110[(1)] = (10));

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
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__38701__auto__ = null;
var figwheel$client$file_reloading$state_machine__38701__auto____0 = (function (){
var statearr_73097 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73097[(0)] = figwheel$client$file_reloading$state_machine__38701__auto__);

(statearr_73097[(1)] = (1));

return statearr_73097;
});
var figwheel$client$file_reloading$state_machine__38701__auto____1 = (function (state_73079){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_73079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e73098){if((e73098 instanceof Object)){
var ex__38704__auto__ = e73098;
var statearr_73099_73111 = state_73079;
(statearr_73099_73111[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73112 = state_73079;
state_73079 = G__73112;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38701__auto__ = function(state_73079){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38701__auto____1.call(this,state_73079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38701__auto____0;
figwheel$client$file_reloading$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38701__auto____1;
return figwheel$client$file_reloading$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_73100 = f__38813__auto__.call(null);
(statearr_73100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_73100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__73113,callback){
var map__73116 = p__73113;
var map__73116__$1 = ((((!((map__73116 == null)))?((((map__73116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73116):map__73116);
var file_msg = map__73116__$1;
var namespace = cljs.core.get.call(null,map__73116__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__73116,map__73116__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__73116,map__73116__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__73118){
var map__73121 = p__73118;
var map__73121__$1 = ((((!((map__73121 == null)))?((((map__73121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73121):map__73121);
var file_msg = map__73121__$1;
var namespace = cljs.core.get.call(null,map__73121__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__31867__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__31867__auto__){
var or__31879__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
var or__31879__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__31879__auto____$1)){
return or__31879__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__31867__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__73123,callback){
var map__73126 = p__73123;
var map__73126__$1 = ((((!((map__73126 == null)))?((((map__73126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73126):map__73126);
var file_msg = map__73126__$1;
var request_url = cljs.core.get.call(null,map__73126__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__73126__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__38812__auto___73230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___73230,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___73230,out){
return (function (state_73212){
var state_val_73213 = (state_73212[(1)]);
if((state_val_73213 === (1))){
var inst_73186 = cljs.core.seq.call(null,files);
var inst_73187 = cljs.core.first.call(null,inst_73186);
var inst_73188 = cljs.core.next.call(null,inst_73186);
var inst_73189 = files;
var state_73212__$1 = (function (){var statearr_73214 = state_73212;
(statearr_73214[(7)] = inst_73188);

(statearr_73214[(8)] = inst_73187);

(statearr_73214[(9)] = inst_73189);

return statearr_73214;
})();
var statearr_73215_73231 = state_73212__$1;
(statearr_73215_73231[(2)] = null);

(statearr_73215_73231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73213 === (2))){
var inst_73189 = (state_73212[(9)]);
var inst_73195 = (state_73212[(10)]);
var inst_73194 = cljs.core.seq.call(null,inst_73189);
var inst_73195__$1 = cljs.core.first.call(null,inst_73194);
var inst_73196 = cljs.core.next.call(null,inst_73194);
var inst_73197 = (inst_73195__$1 == null);
var inst_73198 = cljs.core.not.call(null,inst_73197);
var state_73212__$1 = (function (){var statearr_73216 = state_73212;
(statearr_73216[(10)] = inst_73195__$1);

(statearr_73216[(11)] = inst_73196);

return statearr_73216;
})();
if(inst_73198){
var statearr_73217_73232 = state_73212__$1;
(statearr_73217_73232[(1)] = (4));

} else {
var statearr_73218_73233 = state_73212__$1;
(statearr_73218_73233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73213 === (3))){
var inst_73210 = (state_73212[(2)]);
var state_73212__$1 = state_73212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73212__$1,inst_73210);
} else {
if((state_val_73213 === (4))){
var inst_73195 = (state_73212[(10)]);
var inst_73200 = figwheel.client.file_reloading.reload_js_file.call(null,inst_73195);
var state_73212__$1 = state_73212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73212__$1,(7),inst_73200);
} else {
if((state_val_73213 === (5))){
var inst_73206 = cljs.core.async.close_BANG_.call(null,out);
var state_73212__$1 = state_73212;
var statearr_73219_73234 = state_73212__$1;
(statearr_73219_73234[(2)] = inst_73206);

(statearr_73219_73234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73213 === (6))){
var inst_73208 = (state_73212[(2)]);
var state_73212__$1 = state_73212;
var statearr_73220_73235 = state_73212__$1;
(statearr_73220_73235[(2)] = inst_73208);

(statearr_73220_73235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73213 === (7))){
var inst_73196 = (state_73212[(11)]);
var inst_73202 = (state_73212[(2)]);
var inst_73203 = cljs.core.async.put_BANG_.call(null,out,inst_73202);
var inst_73189 = inst_73196;
var state_73212__$1 = (function (){var statearr_73221 = state_73212;
(statearr_73221[(12)] = inst_73203);

(statearr_73221[(9)] = inst_73189);

return statearr_73221;
})();
var statearr_73222_73236 = state_73212__$1;
(statearr_73222_73236[(2)] = null);

(statearr_73222_73236[(1)] = (2));


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
});})(c__38812__auto___73230,out))
;
return ((function (switch__38700__auto__,c__38812__auto___73230,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____0 = (function (){
var statearr_73226 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73226[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__);

(statearr_73226[(1)] = (1));

return statearr_73226;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____1 = (function (state_73212){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_73212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e73227){if((e73227 instanceof Object)){
var ex__38704__auto__ = e73227;
var statearr_73228_73237 = state_73212;
(statearr_73228_73237[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73238 = state_73212;
state_73212 = G__73238;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__ = function(state_73212){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____1.call(this,state_73212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___73230,out))
})();
var state__38814__auto__ = (function (){var statearr_73229 = f__38813__auto__.call(null);
(statearr_73229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___73230);

return statearr_73229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___73230,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__73239,opts){
var map__73243 = p__73239;
var map__73243__$1 = ((((!((map__73243 == null)))?((((map__73243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73243):map__73243);
var eval_body__$1 = cljs.core.get.call(null,map__73243__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__73243__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__31867__auto__ = eval_body__$1;
if(cljs.core.truth_(and__31867__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__31867__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e73245){var e = e73245;
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
return (function (p1__73246_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__73246_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__73255){
var vec__73256 = p__73255;
var k = cljs.core.nth.call(null,vec__73256,(0),null);
var v = cljs.core.nth.call(null,vec__73256,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__73259){
var vec__73260 = p__73259;
var k = cljs.core.nth.call(null,vec__73260,(0),null);
var v = cljs.core.nth.call(null,vec__73260,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__73266,p__73267){
var map__73514 = p__73266;
var map__73514__$1 = ((((!((map__73514 == null)))?((((map__73514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73514):map__73514);
var opts = map__73514__$1;
var before_jsload = cljs.core.get.call(null,map__73514__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__73514__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__73514__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__73515 = p__73267;
var map__73515__$1 = ((((!((map__73515 == null)))?((((map__73515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73515):map__73515);
var msg = map__73515__$1;
var files = cljs.core.get.call(null,map__73515__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__73515__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__73515__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_73668){
var state_val_73669 = (state_73668[(1)]);
if((state_val_73669 === (7))){
var inst_73530 = (state_73668[(7)]);
var inst_73529 = (state_73668[(8)]);
var inst_73531 = (state_73668[(9)]);
var inst_73532 = (state_73668[(10)]);
var inst_73537 = cljs.core._nth.call(null,inst_73530,inst_73532);
var inst_73538 = figwheel.client.file_reloading.eval_body.call(null,inst_73537,opts);
var inst_73539 = (inst_73532 + (1));
var tmp73670 = inst_73530;
var tmp73671 = inst_73529;
var tmp73672 = inst_73531;
var inst_73529__$1 = tmp73671;
var inst_73530__$1 = tmp73670;
var inst_73531__$1 = tmp73672;
var inst_73532__$1 = inst_73539;
var state_73668__$1 = (function (){var statearr_73673 = state_73668;
(statearr_73673[(7)] = inst_73530__$1);

(statearr_73673[(8)] = inst_73529__$1);

(statearr_73673[(9)] = inst_73531__$1);

(statearr_73673[(10)] = inst_73532__$1);

(statearr_73673[(11)] = inst_73538);

return statearr_73673;
})();
var statearr_73674_73760 = state_73668__$1;
(statearr_73674_73760[(2)] = null);

(statearr_73674_73760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (20))){
var inst_73572 = (state_73668[(12)]);
var inst_73580 = figwheel.client.file_reloading.sort_files.call(null,inst_73572);
var state_73668__$1 = state_73668;
var statearr_73675_73761 = state_73668__$1;
(statearr_73675_73761[(2)] = inst_73580);

(statearr_73675_73761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (27))){
var state_73668__$1 = state_73668;
var statearr_73676_73762 = state_73668__$1;
(statearr_73676_73762[(2)] = null);

(statearr_73676_73762[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (1))){
var inst_73521 = (state_73668[(13)]);
var inst_73518 = before_jsload.call(null,files);
var inst_73519 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_73520 = (function (){return ((function (inst_73521,inst_73518,inst_73519,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__73263_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__73263_SHARP_);
});
;})(inst_73521,inst_73518,inst_73519,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73521__$1 = cljs.core.filter.call(null,inst_73520,files);
var inst_73522 = cljs.core.not_empty.call(null,inst_73521__$1);
var state_73668__$1 = (function (){var statearr_73677 = state_73668;
(statearr_73677[(14)] = inst_73519);

(statearr_73677[(13)] = inst_73521__$1);

(statearr_73677[(15)] = inst_73518);

return statearr_73677;
})();
if(cljs.core.truth_(inst_73522)){
var statearr_73678_73763 = state_73668__$1;
(statearr_73678_73763[(1)] = (2));

} else {
var statearr_73679_73764 = state_73668__$1;
(statearr_73679_73764[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (24))){
var state_73668__$1 = state_73668;
var statearr_73680_73765 = state_73668__$1;
(statearr_73680_73765[(2)] = null);

(statearr_73680_73765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (39))){
var inst_73622 = (state_73668[(16)]);
var state_73668__$1 = state_73668;
var statearr_73681_73766 = state_73668__$1;
(statearr_73681_73766[(2)] = inst_73622);

(statearr_73681_73766[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (46))){
var inst_73663 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
var statearr_73682_73767 = state_73668__$1;
(statearr_73682_73767[(2)] = inst_73663);

(statearr_73682_73767[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (4))){
var inst_73566 = (state_73668[(2)]);
var inst_73567 = cljs.core.List.EMPTY;
var inst_73568 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_73567);
var inst_73569 = (function (){return ((function (inst_73566,inst_73567,inst_73568,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__73264_SHARP_){
var and__31867__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__73264_SHARP_);
if(cljs.core.truth_(and__31867__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__73264_SHARP_));
} else {
return and__31867__auto__;
}
});
;})(inst_73566,inst_73567,inst_73568,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73570 = cljs.core.filter.call(null,inst_73569,files);
var inst_73571 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_73572 = cljs.core.concat.call(null,inst_73570,inst_73571);
var state_73668__$1 = (function (){var statearr_73683 = state_73668;
(statearr_73683[(17)] = inst_73566);

(statearr_73683[(18)] = inst_73568);

(statearr_73683[(12)] = inst_73572);

return statearr_73683;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_73684_73768 = state_73668__$1;
(statearr_73684_73768[(1)] = (16));

} else {
var statearr_73685_73769 = state_73668__$1;
(statearr_73685_73769[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (15))){
var inst_73556 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
var statearr_73686_73770 = state_73668__$1;
(statearr_73686_73770[(2)] = inst_73556);

(statearr_73686_73770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (21))){
var inst_73582 = (state_73668[(19)]);
var inst_73582__$1 = (state_73668[(2)]);
var inst_73583 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_73582__$1);
var state_73668__$1 = (function (){var statearr_73687 = state_73668;
(statearr_73687[(19)] = inst_73582__$1);

return statearr_73687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73668__$1,(22),inst_73583);
} else {
if((state_val_73669 === (31))){
var inst_73666 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73668__$1,inst_73666);
} else {
if((state_val_73669 === (32))){
var inst_73622 = (state_73668[(16)]);
var inst_73627 = inst_73622.cljs$lang$protocol_mask$partition0$;
var inst_73628 = (inst_73627 & (64));
var inst_73629 = inst_73622.cljs$core$ISeq$;
var inst_73630 = (inst_73628) || (inst_73629);
var state_73668__$1 = state_73668;
if(cljs.core.truth_(inst_73630)){
var statearr_73688_73771 = state_73668__$1;
(statearr_73688_73771[(1)] = (35));

} else {
var statearr_73689_73772 = state_73668__$1;
(statearr_73689_73772[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (40))){
var inst_73643 = (state_73668[(20)]);
var inst_73642 = (state_73668[(2)]);
var inst_73643__$1 = cljs.core.get.call(null,inst_73642,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_73644 = cljs.core.get.call(null,inst_73642,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_73645 = cljs.core.not_empty.call(null,inst_73643__$1);
var state_73668__$1 = (function (){var statearr_73690 = state_73668;
(statearr_73690[(20)] = inst_73643__$1);

(statearr_73690[(21)] = inst_73644);

return statearr_73690;
})();
if(cljs.core.truth_(inst_73645)){
var statearr_73691_73773 = state_73668__$1;
(statearr_73691_73773[(1)] = (41));

} else {
var statearr_73692_73774 = state_73668__$1;
(statearr_73692_73774[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (33))){
var state_73668__$1 = state_73668;
var statearr_73693_73775 = state_73668__$1;
(statearr_73693_73775[(2)] = false);

(statearr_73693_73775[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (13))){
var inst_73542 = (state_73668[(22)]);
var inst_73546 = cljs.core.chunk_first.call(null,inst_73542);
var inst_73547 = cljs.core.chunk_rest.call(null,inst_73542);
var inst_73548 = cljs.core.count.call(null,inst_73546);
var inst_73529 = inst_73547;
var inst_73530 = inst_73546;
var inst_73531 = inst_73548;
var inst_73532 = (0);
var state_73668__$1 = (function (){var statearr_73694 = state_73668;
(statearr_73694[(7)] = inst_73530);

(statearr_73694[(8)] = inst_73529);

(statearr_73694[(9)] = inst_73531);

(statearr_73694[(10)] = inst_73532);

return statearr_73694;
})();
var statearr_73695_73776 = state_73668__$1;
(statearr_73695_73776[(2)] = null);

(statearr_73695_73776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (22))){
var inst_73590 = (state_73668[(23)]);
var inst_73582 = (state_73668[(19)]);
var inst_73586 = (state_73668[(24)]);
var inst_73585 = (state_73668[(25)]);
var inst_73585__$1 = (state_73668[(2)]);
var inst_73586__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_73585__$1);
var inst_73587 = (function (){var all_files = inst_73582;
var res_SINGLEQUOTE_ = inst_73585__$1;
var res = inst_73586__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_73590,inst_73582,inst_73586,inst_73585,inst_73585__$1,inst_73586__$1,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__73265_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__73265_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_73590,inst_73582,inst_73586,inst_73585,inst_73585__$1,inst_73586__$1,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73588 = cljs.core.filter.call(null,inst_73587,inst_73585__$1);
var inst_73589 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_73590__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_73589);
var inst_73591 = cljs.core.not_empty.call(null,inst_73590__$1);
var state_73668__$1 = (function (){var statearr_73696 = state_73668;
(statearr_73696[(26)] = inst_73588);

(statearr_73696[(23)] = inst_73590__$1);

(statearr_73696[(24)] = inst_73586__$1);

(statearr_73696[(25)] = inst_73585__$1);

return statearr_73696;
})();
if(cljs.core.truth_(inst_73591)){
var statearr_73697_73777 = state_73668__$1;
(statearr_73697_73777[(1)] = (23));

} else {
var statearr_73698_73778 = state_73668__$1;
(statearr_73698_73778[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (36))){
var state_73668__$1 = state_73668;
var statearr_73699_73779 = state_73668__$1;
(statearr_73699_73779[(2)] = false);

(statearr_73699_73779[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (41))){
var inst_73643 = (state_73668[(20)]);
var inst_73647 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_73648 = cljs.core.map.call(null,inst_73647,inst_73643);
var inst_73649 = cljs.core.pr_str.call(null,inst_73648);
var inst_73650 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_73649)].join('');
var inst_73651 = figwheel.client.utils.log.call(null,inst_73650);
var state_73668__$1 = state_73668;
var statearr_73700_73780 = state_73668__$1;
(statearr_73700_73780[(2)] = inst_73651);

(statearr_73700_73780[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (43))){
var inst_73644 = (state_73668[(21)]);
var inst_73654 = (state_73668[(2)]);
var inst_73655 = cljs.core.not_empty.call(null,inst_73644);
var state_73668__$1 = (function (){var statearr_73701 = state_73668;
(statearr_73701[(27)] = inst_73654);

return statearr_73701;
})();
if(cljs.core.truth_(inst_73655)){
var statearr_73702_73781 = state_73668__$1;
(statearr_73702_73781[(1)] = (44));

} else {
var statearr_73703_73782 = state_73668__$1;
(statearr_73703_73782[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (29))){
var inst_73588 = (state_73668[(26)]);
var inst_73590 = (state_73668[(23)]);
var inst_73582 = (state_73668[(19)]);
var inst_73622 = (state_73668[(16)]);
var inst_73586 = (state_73668[(24)]);
var inst_73585 = (state_73668[(25)]);
var inst_73618 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_73621 = (function (){var all_files = inst_73582;
var res_SINGLEQUOTE_ = inst_73585;
var res = inst_73586;
var files_not_loaded = inst_73588;
var dependencies_that_loaded = inst_73590;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73588,inst_73590,inst_73582,inst_73622,inst_73586,inst_73585,inst_73618,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__73620){
var map__73704 = p__73620;
var map__73704__$1 = ((((!((map__73704 == null)))?((((map__73704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73704):map__73704);
var namespace = cljs.core.get.call(null,map__73704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73588,inst_73590,inst_73582,inst_73622,inst_73586,inst_73585,inst_73618,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73622__$1 = cljs.core.group_by.call(null,inst_73621,inst_73588);
var inst_73624 = (inst_73622__$1 == null);
var inst_73625 = cljs.core.not.call(null,inst_73624);
var state_73668__$1 = (function (){var statearr_73706 = state_73668;
(statearr_73706[(28)] = inst_73618);

(statearr_73706[(16)] = inst_73622__$1);

return statearr_73706;
})();
if(inst_73625){
var statearr_73707_73783 = state_73668__$1;
(statearr_73707_73783[(1)] = (32));

} else {
var statearr_73708_73784 = state_73668__$1;
(statearr_73708_73784[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (44))){
var inst_73644 = (state_73668[(21)]);
var inst_73657 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_73644);
var inst_73658 = cljs.core.pr_str.call(null,inst_73657);
var inst_73659 = [cljs.core.str("not required: "),cljs.core.str(inst_73658)].join('');
var inst_73660 = figwheel.client.utils.log.call(null,inst_73659);
var state_73668__$1 = state_73668;
var statearr_73709_73785 = state_73668__$1;
(statearr_73709_73785[(2)] = inst_73660);

(statearr_73709_73785[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (6))){
var inst_73563 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
var statearr_73710_73786 = state_73668__$1;
(statearr_73710_73786[(2)] = inst_73563);

(statearr_73710_73786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (28))){
var inst_73588 = (state_73668[(26)]);
var inst_73615 = (state_73668[(2)]);
var inst_73616 = cljs.core.not_empty.call(null,inst_73588);
var state_73668__$1 = (function (){var statearr_73711 = state_73668;
(statearr_73711[(29)] = inst_73615);

return statearr_73711;
})();
if(cljs.core.truth_(inst_73616)){
var statearr_73712_73787 = state_73668__$1;
(statearr_73712_73787[(1)] = (29));

} else {
var statearr_73713_73788 = state_73668__$1;
(statearr_73713_73788[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (25))){
var inst_73586 = (state_73668[(24)]);
var inst_73602 = (state_73668[(2)]);
var inst_73603 = cljs.core.not_empty.call(null,inst_73586);
var state_73668__$1 = (function (){var statearr_73714 = state_73668;
(statearr_73714[(30)] = inst_73602);

return statearr_73714;
})();
if(cljs.core.truth_(inst_73603)){
var statearr_73715_73789 = state_73668__$1;
(statearr_73715_73789[(1)] = (26));

} else {
var statearr_73716_73790 = state_73668__$1;
(statearr_73716_73790[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (34))){
var inst_73637 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
if(cljs.core.truth_(inst_73637)){
var statearr_73717_73791 = state_73668__$1;
(statearr_73717_73791[(1)] = (38));

} else {
var statearr_73718_73792 = state_73668__$1;
(statearr_73718_73792[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (17))){
var state_73668__$1 = state_73668;
var statearr_73719_73793 = state_73668__$1;
(statearr_73719_73793[(2)] = recompile_dependents);

(statearr_73719_73793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (3))){
var state_73668__$1 = state_73668;
var statearr_73720_73794 = state_73668__$1;
(statearr_73720_73794[(2)] = null);

(statearr_73720_73794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (12))){
var inst_73559 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
var statearr_73721_73795 = state_73668__$1;
(statearr_73721_73795[(2)] = inst_73559);

(statearr_73721_73795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (2))){
var inst_73521 = (state_73668[(13)]);
var inst_73528 = cljs.core.seq.call(null,inst_73521);
var inst_73529 = inst_73528;
var inst_73530 = null;
var inst_73531 = (0);
var inst_73532 = (0);
var state_73668__$1 = (function (){var statearr_73722 = state_73668;
(statearr_73722[(7)] = inst_73530);

(statearr_73722[(8)] = inst_73529);

(statearr_73722[(9)] = inst_73531);

(statearr_73722[(10)] = inst_73532);

return statearr_73722;
})();
var statearr_73723_73796 = state_73668__$1;
(statearr_73723_73796[(2)] = null);

(statearr_73723_73796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (23))){
var inst_73588 = (state_73668[(26)]);
var inst_73590 = (state_73668[(23)]);
var inst_73582 = (state_73668[(19)]);
var inst_73586 = (state_73668[(24)]);
var inst_73585 = (state_73668[(25)]);
var inst_73593 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_73595 = (function (){var all_files = inst_73582;
var res_SINGLEQUOTE_ = inst_73585;
var res = inst_73586;
var files_not_loaded = inst_73588;
var dependencies_that_loaded = inst_73590;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73588,inst_73590,inst_73582,inst_73586,inst_73585,inst_73593,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__73594){
var map__73724 = p__73594;
var map__73724__$1 = ((((!((map__73724 == null)))?((((map__73724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73724):map__73724);
var request_url = cljs.core.get.call(null,map__73724__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73588,inst_73590,inst_73582,inst_73586,inst_73585,inst_73593,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73596 = cljs.core.reverse.call(null,inst_73590);
var inst_73597 = cljs.core.map.call(null,inst_73595,inst_73596);
var inst_73598 = cljs.core.pr_str.call(null,inst_73597);
var inst_73599 = figwheel.client.utils.log.call(null,inst_73598);
var state_73668__$1 = (function (){var statearr_73726 = state_73668;
(statearr_73726[(31)] = inst_73593);

return statearr_73726;
})();
var statearr_73727_73797 = state_73668__$1;
(statearr_73727_73797[(2)] = inst_73599);

(statearr_73727_73797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (35))){
var state_73668__$1 = state_73668;
var statearr_73728_73798 = state_73668__$1;
(statearr_73728_73798[(2)] = true);

(statearr_73728_73798[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (19))){
var inst_73572 = (state_73668[(12)]);
var inst_73578 = figwheel.client.file_reloading.expand_files.call(null,inst_73572);
var state_73668__$1 = state_73668;
var statearr_73729_73799 = state_73668__$1;
(statearr_73729_73799[(2)] = inst_73578);

(statearr_73729_73799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (11))){
var state_73668__$1 = state_73668;
var statearr_73730_73800 = state_73668__$1;
(statearr_73730_73800[(2)] = null);

(statearr_73730_73800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (9))){
var inst_73561 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
var statearr_73731_73801 = state_73668__$1;
(statearr_73731_73801[(2)] = inst_73561);

(statearr_73731_73801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (5))){
var inst_73531 = (state_73668[(9)]);
var inst_73532 = (state_73668[(10)]);
var inst_73534 = (inst_73532 < inst_73531);
var inst_73535 = inst_73534;
var state_73668__$1 = state_73668;
if(cljs.core.truth_(inst_73535)){
var statearr_73732_73802 = state_73668__$1;
(statearr_73732_73802[(1)] = (7));

} else {
var statearr_73733_73803 = state_73668__$1;
(statearr_73733_73803[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (14))){
var inst_73542 = (state_73668[(22)]);
var inst_73551 = cljs.core.first.call(null,inst_73542);
var inst_73552 = figwheel.client.file_reloading.eval_body.call(null,inst_73551,opts);
var inst_73553 = cljs.core.next.call(null,inst_73542);
var inst_73529 = inst_73553;
var inst_73530 = null;
var inst_73531 = (0);
var inst_73532 = (0);
var state_73668__$1 = (function (){var statearr_73734 = state_73668;
(statearr_73734[(7)] = inst_73530);

(statearr_73734[(8)] = inst_73529);

(statearr_73734[(9)] = inst_73531);

(statearr_73734[(32)] = inst_73552);

(statearr_73734[(10)] = inst_73532);

return statearr_73734;
})();
var statearr_73735_73804 = state_73668__$1;
(statearr_73735_73804[(2)] = null);

(statearr_73735_73804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (45))){
var state_73668__$1 = state_73668;
var statearr_73736_73805 = state_73668__$1;
(statearr_73736_73805[(2)] = null);

(statearr_73736_73805[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (26))){
var inst_73588 = (state_73668[(26)]);
var inst_73590 = (state_73668[(23)]);
var inst_73582 = (state_73668[(19)]);
var inst_73586 = (state_73668[(24)]);
var inst_73585 = (state_73668[(25)]);
var inst_73605 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_73607 = (function (){var all_files = inst_73582;
var res_SINGLEQUOTE_ = inst_73585;
var res = inst_73586;
var files_not_loaded = inst_73588;
var dependencies_that_loaded = inst_73590;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73588,inst_73590,inst_73582,inst_73586,inst_73585,inst_73605,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__73606){
var map__73737 = p__73606;
var map__73737__$1 = ((((!((map__73737 == null)))?((((map__73737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73737):map__73737);
var namespace = cljs.core.get.call(null,map__73737__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__73737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73588,inst_73590,inst_73582,inst_73586,inst_73585,inst_73605,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73608 = cljs.core.map.call(null,inst_73607,inst_73586);
var inst_73609 = cljs.core.pr_str.call(null,inst_73608);
var inst_73610 = figwheel.client.utils.log.call(null,inst_73609);
var inst_73611 = (function (){var all_files = inst_73582;
var res_SINGLEQUOTE_ = inst_73585;
var res = inst_73586;
var files_not_loaded = inst_73588;
var dependencies_that_loaded = inst_73590;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73588,inst_73590,inst_73582,inst_73586,inst_73585,inst_73605,inst_73607,inst_73608,inst_73609,inst_73610,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73588,inst_73590,inst_73582,inst_73586,inst_73585,inst_73605,inst_73607,inst_73608,inst_73609,inst_73610,state_val_73669,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73612 = setTimeout(inst_73611,(10));
var state_73668__$1 = (function (){var statearr_73739 = state_73668;
(statearr_73739[(33)] = inst_73605);

(statearr_73739[(34)] = inst_73610);

return statearr_73739;
})();
var statearr_73740_73806 = state_73668__$1;
(statearr_73740_73806[(2)] = inst_73612);

(statearr_73740_73806[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (16))){
var state_73668__$1 = state_73668;
var statearr_73741_73807 = state_73668__$1;
(statearr_73741_73807[(2)] = reload_dependents);

(statearr_73741_73807[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (38))){
var inst_73622 = (state_73668[(16)]);
var inst_73639 = cljs.core.apply.call(null,cljs.core.hash_map,inst_73622);
var state_73668__$1 = state_73668;
var statearr_73742_73808 = state_73668__$1;
(statearr_73742_73808[(2)] = inst_73639);

(statearr_73742_73808[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (30))){
var state_73668__$1 = state_73668;
var statearr_73743_73809 = state_73668__$1;
(statearr_73743_73809[(2)] = null);

(statearr_73743_73809[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (10))){
var inst_73542 = (state_73668[(22)]);
var inst_73544 = cljs.core.chunked_seq_QMARK_.call(null,inst_73542);
var state_73668__$1 = state_73668;
if(inst_73544){
var statearr_73744_73810 = state_73668__$1;
(statearr_73744_73810[(1)] = (13));

} else {
var statearr_73745_73811 = state_73668__$1;
(statearr_73745_73811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (18))){
var inst_73576 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
if(cljs.core.truth_(inst_73576)){
var statearr_73746_73812 = state_73668__$1;
(statearr_73746_73812[(1)] = (19));

} else {
var statearr_73747_73813 = state_73668__$1;
(statearr_73747_73813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (42))){
var state_73668__$1 = state_73668;
var statearr_73748_73814 = state_73668__$1;
(statearr_73748_73814[(2)] = null);

(statearr_73748_73814[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (37))){
var inst_73634 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
var statearr_73749_73815 = state_73668__$1;
(statearr_73749_73815[(2)] = inst_73634);

(statearr_73749_73815[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (8))){
var inst_73542 = (state_73668[(22)]);
var inst_73529 = (state_73668[(8)]);
var inst_73542__$1 = cljs.core.seq.call(null,inst_73529);
var state_73668__$1 = (function (){var statearr_73750 = state_73668;
(statearr_73750[(22)] = inst_73542__$1);

return statearr_73750;
})();
if(inst_73542__$1){
var statearr_73751_73816 = state_73668__$1;
(statearr_73751_73816[(1)] = (10));

} else {
var statearr_73752_73817 = state_73668__$1;
(statearr_73752_73817[(1)] = (11));

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
});})(c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38700__auto__,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____0 = (function (){
var statearr_73756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73756[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__);

(statearr_73756[(1)] = (1));

return statearr_73756;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____1 = (function (state_73668){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_73668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e73757){if((e73757 instanceof Object)){
var ex__38704__auto__ = e73757;
var statearr_73758_73818 = state_73668;
(statearr_73758_73818[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73819 = state_73668;
state_73668 = G__73819;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__ = function(state_73668){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____1.call(this,state_73668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38814__auto__ = (function (){var statearr_73759 = f__38813__auto__.call(null);
(statearr_73759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_73759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,map__73514,map__73514__$1,opts,before_jsload,on_jsload,reload_dependents,map__73515,map__73515__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38812__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__73822,link){
var map__73825 = p__73822;
var map__73825__$1 = ((((!((map__73825 == null)))?((((map__73825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73825):map__73825);
var file = cljs.core.get.call(null,map__73825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__73825,map__73825__$1,file){
return (function (p1__73820_SHARP_,p2__73821_SHARP_){
if(cljs.core._EQ_.call(null,p1__73820_SHARP_,p2__73821_SHARP_)){
return p1__73820_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__73825,map__73825__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__73831){
var map__73832 = p__73831;
var map__73832__$1 = ((((!((map__73832 == null)))?((((map__73832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73832):map__73832);
var match_length = cljs.core.get.call(null,map__73832__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__73832__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__73827_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__73827_SHARP_);
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
var args73834 = [];
var len__32954__auto___73837 = arguments.length;
var i__32955__auto___73838 = (0);
while(true){
if((i__32955__auto___73838 < len__32954__auto___73837)){
args73834.push((arguments[i__32955__auto___73838]));

var G__73839 = (i__32955__auto___73838 + (1));
i__32955__auto___73838 = G__73839;
continue;
} else {
}
break;
}

var G__73836 = args73834.length;
switch (G__73836) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73834.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__73841_SHARP_,p2__73842_SHARP_){
return cljs.core.assoc.call(null,p1__73841_SHARP_,cljs.core.get.call(null,p2__73842_SHARP_,key),p2__73842_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__73843){
var map__73846 = p__73843;
var map__73846__$1 = ((((!((map__73846 == null)))?((((map__73846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73846):map__73846);
var f_data = map__73846__$1;
var file = cljs.core.get.call(null,map__73846__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__73848,files_msg){
var map__73855 = p__73848;
var map__73855__$1 = ((((!((map__73855 == null)))?((((map__73855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73855):map__73855);
var opts = map__73855__$1;
var on_cssload = cljs.core.get.call(null,map__73855__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__73857_73861 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__73858_73862 = null;
var count__73859_73863 = (0);
var i__73860_73864 = (0);
while(true){
if((i__73860_73864 < count__73859_73863)){
var f_73865 = cljs.core._nth.call(null,chunk__73858_73862,i__73860_73864);
figwheel.client.file_reloading.reload_css_file.call(null,f_73865);

var G__73866 = seq__73857_73861;
var G__73867 = chunk__73858_73862;
var G__73868 = count__73859_73863;
var G__73869 = (i__73860_73864 + (1));
seq__73857_73861 = G__73866;
chunk__73858_73862 = G__73867;
count__73859_73863 = G__73868;
i__73860_73864 = G__73869;
continue;
} else {
var temp__4657__auto___73870 = cljs.core.seq.call(null,seq__73857_73861);
if(temp__4657__auto___73870){
var seq__73857_73871__$1 = temp__4657__auto___73870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73857_73871__$1)){
var c__32690__auto___73872 = cljs.core.chunk_first.call(null,seq__73857_73871__$1);
var G__73873 = cljs.core.chunk_rest.call(null,seq__73857_73871__$1);
var G__73874 = c__32690__auto___73872;
var G__73875 = cljs.core.count.call(null,c__32690__auto___73872);
var G__73876 = (0);
seq__73857_73861 = G__73873;
chunk__73858_73862 = G__73874;
count__73859_73863 = G__73875;
i__73860_73864 = G__73876;
continue;
} else {
var f_73877 = cljs.core.first.call(null,seq__73857_73871__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_73877);

var G__73878 = cljs.core.next.call(null,seq__73857_73871__$1);
var G__73879 = null;
var G__73880 = (0);
var G__73881 = (0);
seq__73857_73861 = G__73878;
chunk__73858_73862 = G__73879;
count__73859_73863 = G__73880;
i__73860_73864 = G__73881;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__73855,map__73855__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__73855,map__73855__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1489123430722