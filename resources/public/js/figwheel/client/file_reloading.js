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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__492707_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__492707_SHARP_));
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
var seq__492712 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__492713 = null;
var count__492714 = (0);
var i__492715 = (0);
while(true){
if((i__492715 < count__492714)){
var n = cljs.core._nth.call(null,chunk__492713,i__492715);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__492716 = seq__492712;
var G__492717 = chunk__492713;
var G__492718 = count__492714;
var G__492719 = (i__492715 + (1));
seq__492712 = G__492716;
chunk__492713 = G__492717;
count__492714 = G__492718;
i__492715 = G__492719;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__492712);
if(temp__4657__auto__){
var seq__492712__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__492712__$1)){
var c__32690__auto__ = cljs.core.chunk_first.call(null,seq__492712__$1);
var G__492720 = cljs.core.chunk_rest.call(null,seq__492712__$1);
var G__492721 = c__32690__auto__;
var G__492722 = cljs.core.count.call(null,c__32690__auto__);
var G__492723 = (0);
seq__492712 = G__492720;
chunk__492713 = G__492721;
count__492714 = G__492722;
i__492715 = G__492723;
continue;
} else {
var n = cljs.core.first.call(null,seq__492712__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__492724 = cljs.core.next.call(null,seq__492712__$1);
var G__492725 = null;
var G__492726 = (0);
var G__492727 = (0);
seq__492712 = G__492724;
chunk__492713 = G__492725;
count__492714 = G__492726;
i__492715 = G__492727;
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

var seq__492778_492789 = cljs.core.seq.call(null,deps);
var chunk__492779_492790 = null;
var count__492780_492791 = (0);
var i__492781_492792 = (0);
while(true){
if((i__492781_492792 < count__492780_492791)){
var dep_492793 = cljs.core._nth.call(null,chunk__492779_492790,i__492781_492792);
topo_sort_helper_STAR_.call(null,dep_492793,(depth + (1)),state);

var G__492794 = seq__492778_492789;
var G__492795 = chunk__492779_492790;
var G__492796 = count__492780_492791;
var G__492797 = (i__492781_492792 + (1));
seq__492778_492789 = G__492794;
chunk__492779_492790 = G__492795;
count__492780_492791 = G__492796;
i__492781_492792 = G__492797;
continue;
} else {
var temp__4657__auto___492798 = cljs.core.seq.call(null,seq__492778_492789);
if(temp__4657__auto___492798){
var seq__492778_492799__$1 = temp__4657__auto___492798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__492778_492799__$1)){
var c__32690__auto___492800 = cljs.core.chunk_first.call(null,seq__492778_492799__$1);
var G__492801 = cljs.core.chunk_rest.call(null,seq__492778_492799__$1);
var G__492802 = c__32690__auto___492800;
var G__492803 = cljs.core.count.call(null,c__32690__auto___492800);
var G__492804 = (0);
seq__492778_492789 = G__492801;
chunk__492779_492790 = G__492802;
count__492780_492791 = G__492803;
i__492781_492792 = G__492804;
continue;
} else {
var dep_492805 = cljs.core.first.call(null,seq__492778_492799__$1);
topo_sort_helper_STAR_.call(null,dep_492805,(depth + (1)),state);

var G__492806 = cljs.core.next.call(null,seq__492778_492799__$1);
var G__492807 = null;
var G__492808 = (0);
var G__492809 = (0);
seq__492778_492789 = G__492806;
chunk__492779_492790 = G__492807;
count__492780_492791 = G__492808;
i__492781_492792 = G__492809;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__492782){
var vec__492786 = p__492782;
var seq__492787 = cljs.core.seq.call(null,vec__492786);
var first__492788 = cljs.core.first.call(null,seq__492787);
var seq__492787__$1 = cljs.core.next.call(null,seq__492787);
var x = first__492788;
var xs = seq__492787__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__492786,seq__492787,first__492788,seq__492787__$1,x,xs,get_deps__$1){
return (function (p1__492728_SHARP_){
return clojure.set.difference.call(null,p1__492728_SHARP_,x);
});})(vec__492786,seq__492787,first__492788,seq__492787__$1,x,xs,get_deps__$1))
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
var seq__492822 = cljs.core.seq.call(null,provides);
var chunk__492823 = null;
var count__492824 = (0);
var i__492825 = (0);
while(true){
if((i__492825 < count__492824)){
var prov = cljs.core._nth.call(null,chunk__492823,i__492825);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__492826_492834 = cljs.core.seq.call(null,requires);
var chunk__492827_492835 = null;
var count__492828_492836 = (0);
var i__492829_492837 = (0);
while(true){
if((i__492829_492837 < count__492828_492836)){
var req_492838 = cljs.core._nth.call(null,chunk__492827_492835,i__492829_492837);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_492838,prov);

var G__492839 = seq__492826_492834;
var G__492840 = chunk__492827_492835;
var G__492841 = count__492828_492836;
var G__492842 = (i__492829_492837 + (1));
seq__492826_492834 = G__492839;
chunk__492827_492835 = G__492840;
count__492828_492836 = G__492841;
i__492829_492837 = G__492842;
continue;
} else {
var temp__4657__auto___492843 = cljs.core.seq.call(null,seq__492826_492834);
if(temp__4657__auto___492843){
var seq__492826_492844__$1 = temp__4657__auto___492843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__492826_492844__$1)){
var c__32690__auto___492845 = cljs.core.chunk_first.call(null,seq__492826_492844__$1);
var G__492846 = cljs.core.chunk_rest.call(null,seq__492826_492844__$1);
var G__492847 = c__32690__auto___492845;
var G__492848 = cljs.core.count.call(null,c__32690__auto___492845);
var G__492849 = (0);
seq__492826_492834 = G__492846;
chunk__492827_492835 = G__492847;
count__492828_492836 = G__492848;
i__492829_492837 = G__492849;
continue;
} else {
var req_492850 = cljs.core.first.call(null,seq__492826_492844__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_492850,prov);

var G__492851 = cljs.core.next.call(null,seq__492826_492844__$1);
var G__492852 = null;
var G__492853 = (0);
var G__492854 = (0);
seq__492826_492834 = G__492851;
chunk__492827_492835 = G__492852;
count__492828_492836 = G__492853;
i__492829_492837 = G__492854;
continue;
}
} else {
}
}
break;
}

var G__492855 = seq__492822;
var G__492856 = chunk__492823;
var G__492857 = count__492824;
var G__492858 = (i__492825 + (1));
seq__492822 = G__492855;
chunk__492823 = G__492856;
count__492824 = G__492857;
i__492825 = G__492858;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__492822);
if(temp__4657__auto__){
var seq__492822__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__492822__$1)){
var c__32690__auto__ = cljs.core.chunk_first.call(null,seq__492822__$1);
var G__492859 = cljs.core.chunk_rest.call(null,seq__492822__$1);
var G__492860 = c__32690__auto__;
var G__492861 = cljs.core.count.call(null,c__32690__auto__);
var G__492862 = (0);
seq__492822 = G__492859;
chunk__492823 = G__492860;
count__492824 = G__492861;
i__492825 = G__492862;
continue;
} else {
var prov = cljs.core.first.call(null,seq__492822__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__492830_492863 = cljs.core.seq.call(null,requires);
var chunk__492831_492864 = null;
var count__492832_492865 = (0);
var i__492833_492866 = (0);
while(true){
if((i__492833_492866 < count__492832_492865)){
var req_492867 = cljs.core._nth.call(null,chunk__492831_492864,i__492833_492866);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_492867,prov);

var G__492868 = seq__492830_492863;
var G__492869 = chunk__492831_492864;
var G__492870 = count__492832_492865;
var G__492871 = (i__492833_492866 + (1));
seq__492830_492863 = G__492868;
chunk__492831_492864 = G__492869;
count__492832_492865 = G__492870;
i__492833_492866 = G__492871;
continue;
} else {
var temp__4657__auto___492872__$1 = cljs.core.seq.call(null,seq__492830_492863);
if(temp__4657__auto___492872__$1){
var seq__492830_492873__$1 = temp__4657__auto___492872__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__492830_492873__$1)){
var c__32690__auto___492874 = cljs.core.chunk_first.call(null,seq__492830_492873__$1);
var G__492875 = cljs.core.chunk_rest.call(null,seq__492830_492873__$1);
var G__492876 = c__32690__auto___492874;
var G__492877 = cljs.core.count.call(null,c__32690__auto___492874);
var G__492878 = (0);
seq__492830_492863 = G__492875;
chunk__492831_492864 = G__492876;
count__492832_492865 = G__492877;
i__492833_492866 = G__492878;
continue;
} else {
var req_492879 = cljs.core.first.call(null,seq__492830_492873__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_492879,prov);

var G__492880 = cljs.core.next.call(null,seq__492830_492873__$1);
var G__492881 = null;
var G__492882 = (0);
var G__492883 = (0);
seq__492830_492863 = G__492880;
chunk__492831_492864 = G__492881;
count__492832_492865 = G__492882;
i__492833_492866 = G__492883;
continue;
}
} else {
}
}
break;
}

var G__492884 = cljs.core.next.call(null,seq__492822__$1);
var G__492885 = null;
var G__492886 = (0);
var G__492887 = (0);
seq__492822 = G__492884;
chunk__492823 = G__492885;
count__492824 = G__492886;
i__492825 = G__492887;
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
var seq__492892_492896 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__492893_492897 = null;
var count__492894_492898 = (0);
var i__492895_492899 = (0);
while(true){
if((i__492895_492899 < count__492894_492898)){
var ns_492900 = cljs.core._nth.call(null,chunk__492893_492897,i__492895_492899);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_492900);

var G__492901 = seq__492892_492896;
var G__492902 = chunk__492893_492897;
var G__492903 = count__492894_492898;
var G__492904 = (i__492895_492899 + (1));
seq__492892_492896 = G__492901;
chunk__492893_492897 = G__492902;
count__492894_492898 = G__492903;
i__492895_492899 = G__492904;
continue;
} else {
var temp__4657__auto___492905 = cljs.core.seq.call(null,seq__492892_492896);
if(temp__4657__auto___492905){
var seq__492892_492906__$1 = temp__4657__auto___492905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__492892_492906__$1)){
var c__32690__auto___492907 = cljs.core.chunk_first.call(null,seq__492892_492906__$1);
var G__492908 = cljs.core.chunk_rest.call(null,seq__492892_492906__$1);
var G__492909 = c__32690__auto___492907;
var G__492910 = cljs.core.count.call(null,c__32690__auto___492907);
var G__492911 = (0);
seq__492892_492896 = G__492908;
chunk__492893_492897 = G__492909;
count__492894_492898 = G__492910;
i__492895_492899 = G__492911;
continue;
} else {
var ns_492912 = cljs.core.first.call(null,seq__492892_492906__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_492912);

var G__492913 = cljs.core.next.call(null,seq__492892_492906__$1);
var G__492914 = null;
var G__492915 = (0);
var G__492916 = (0);
seq__492892_492896 = G__492913;
chunk__492893_492897 = G__492914;
count__492894_492898 = G__492915;
i__492895_492899 = G__492916;
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
var G__492917__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__492917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__492918__i = 0, G__492918__a = new Array(arguments.length -  0);
while (G__492918__i < G__492918__a.length) {G__492918__a[G__492918__i] = arguments[G__492918__i + 0]; ++G__492918__i;}
  args = new cljs.core.IndexedSeq(G__492918__a,0);
} 
return G__492917__delegate.call(this,args);};
G__492917.cljs$lang$maxFixedArity = 0;
G__492917.cljs$lang$applyTo = (function (arglist__492919){
var args = cljs.core.seq(arglist__492919);
return G__492917__delegate(args);
});
G__492917.cljs$core$IFn$_invoke$arity$variadic = G__492917__delegate;
return G__492917;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__492921 = cljs.core._EQ_;
var expr__492922 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__492921.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__492922))){
var path_parts = ((function (pred__492921,expr__492922){
return (function (p1__492920_SHARP_){
return clojure.string.split.call(null,p1__492920_SHARP_,/[\/\\]/);
});})(pred__492921,expr__492922))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__492921,expr__492922){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e492924){if((e492924 instanceof Error)){
var e = e492924;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e492924;

}
}})());
});
;})(path_parts,sep,root,pred__492921,expr__492922))
} else {
if(cljs.core.truth_(pred__492921.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__492922))){
return ((function (pred__492921,expr__492922){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__492921,expr__492922){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__492921,expr__492922))
);

return deferred.addErrback(((function (deferred,pred__492921,expr__492922){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__492921,expr__492922))
);
});
;})(pred__492921,expr__492922))
} else {
return ((function (pred__492921,expr__492922){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__492921,expr__492922))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__492925,callback){
var map__492928 = p__492925;
var map__492928__$1 = ((((!((map__492928 == null)))?((((map__492928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__492928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__492928):map__492928);
var file_msg = map__492928__$1;
var request_url = cljs.core.get.call(null,map__492928__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__492928,map__492928__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__492928,map__492928__$1,file_msg,request_url))
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
return (function (state_492952){
var state_val_492953 = (state_492952[(1)]);
if((state_val_492953 === (7))){
var inst_492948 = (state_492952[(2)]);
var state_492952__$1 = state_492952;
var statearr_492954_492974 = state_492952__$1;
(statearr_492954_492974[(2)] = inst_492948);

(statearr_492954_492974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_492953 === (1))){
var state_492952__$1 = state_492952;
var statearr_492955_492975 = state_492952__$1;
(statearr_492955_492975[(2)] = null);

(statearr_492955_492975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_492953 === (4))){
var inst_492932 = (state_492952[(7)]);
var inst_492932__$1 = (state_492952[(2)]);
var state_492952__$1 = (function (){var statearr_492956 = state_492952;
(statearr_492956[(7)] = inst_492932__$1);

return statearr_492956;
})();
if(cljs.core.truth_(inst_492932__$1)){
var statearr_492957_492976 = state_492952__$1;
(statearr_492957_492976[(1)] = (5));

} else {
var statearr_492958_492977 = state_492952__$1;
(statearr_492958_492977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_492953 === (6))){
var state_492952__$1 = state_492952;
var statearr_492959_492978 = state_492952__$1;
(statearr_492959_492978[(2)] = null);

(statearr_492959_492978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_492953 === (3))){
var inst_492950 = (state_492952[(2)]);
var state_492952__$1 = state_492952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_492952__$1,inst_492950);
} else {
if((state_val_492953 === (2))){
var state_492952__$1 = state_492952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_492952__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_492953 === (11))){
var inst_492944 = (state_492952[(2)]);
var state_492952__$1 = (function (){var statearr_492960 = state_492952;
(statearr_492960[(8)] = inst_492944);

return statearr_492960;
})();
var statearr_492961_492979 = state_492952__$1;
(statearr_492961_492979[(2)] = null);

(statearr_492961_492979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_492953 === (9))){
var inst_492938 = (state_492952[(9)]);
var inst_492936 = (state_492952[(10)]);
var inst_492940 = inst_492938.call(null,inst_492936);
var state_492952__$1 = state_492952;
var statearr_492962_492980 = state_492952__$1;
(statearr_492962_492980[(2)] = inst_492940);

(statearr_492962_492980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_492953 === (5))){
var inst_492932 = (state_492952[(7)]);
var inst_492934 = figwheel.client.file_reloading.blocking_load.call(null,inst_492932);
var state_492952__$1 = state_492952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_492952__$1,(8),inst_492934);
} else {
if((state_val_492953 === (10))){
var inst_492936 = (state_492952[(10)]);
var inst_492942 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_492936);
var state_492952__$1 = state_492952;
var statearr_492963_492981 = state_492952__$1;
(statearr_492963_492981[(2)] = inst_492942);

(statearr_492963_492981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_492953 === (8))){
var inst_492938 = (state_492952[(9)]);
var inst_492932 = (state_492952[(7)]);
var inst_492936 = (state_492952[(2)]);
var inst_492937 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_492938__$1 = cljs.core.get.call(null,inst_492937,inst_492932);
var state_492952__$1 = (function (){var statearr_492964 = state_492952;
(statearr_492964[(9)] = inst_492938__$1);

(statearr_492964[(10)] = inst_492936);

return statearr_492964;
})();
if(cljs.core.truth_(inst_492938__$1)){
var statearr_492965_492982 = state_492952__$1;
(statearr_492965_492982[(1)] = (9));

} else {
var statearr_492966_492983 = state_492952__$1;
(statearr_492966_492983[(1)] = (10));

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
var statearr_492970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_492970[(0)] = figwheel$client$file_reloading$state_machine__38701__auto__);

(statearr_492970[(1)] = (1));

return statearr_492970;
});
var figwheel$client$file_reloading$state_machine__38701__auto____1 = (function (state_492952){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_492952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e492971){if((e492971 instanceof Object)){
var ex__38704__auto__ = e492971;
var statearr_492972_492984 = state_492952;
(statearr_492972_492984[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_492952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e492971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__492985 = state_492952;
state_492952 = G__492985;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38701__auto__ = function(state_492952){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38701__auto____1.call(this,state_492952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38701__auto____0;
figwheel$client$file_reloading$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38701__auto____1;
return figwheel$client$file_reloading$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_492973 = f__38813__auto__.call(null);
(statearr_492973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_492973;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__492986,callback){
var map__492989 = p__492986;
var map__492989__$1 = ((((!((map__492989 == null)))?((((map__492989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__492989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__492989):map__492989);
var file_msg = map__492989__$1;
var namespace = cljs.core.get.call(null,map__492989__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__492989,map__492989__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__492989,map__492989__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__492991){
var map__492994 = p__492991;
var map__492994__$1 = ((((!((map__492994 == null)))?((((map__492994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__492994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__492994):map__492994);
var file_msg = map__492994__$1;
var namespace = cljs.core.get.call(null,map__492994__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__492996,callback){
var map__492999 = p__492996;
var map__492999__$1 = ((((!((map__492999 == null)))?((((map__492999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__492999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__492999):map__492999);
var file_msg = map__492999__$1;
var request_url = cljs.core.get.call(null,map__492999__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__492999__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__38812__auto___493103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___493103,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___493103,out){
return (function (state_493085){
var state_val_493086 = (state_493085[(1)]);
if((state_val_493086 === (1))){
var inst_493059 = cljs.core.seq.call(null,files);
var inst_493060 = cljs.core.first.call(null,inst_493059);
var inst_493061 = cljs.core.next.call(null,inst_493059);
var inst_493062 = files;
var state_493085__$1 = (function (){var statearr_493087 = state_493085;
(statearr_493087[(7)] = inst_493062);

(statearr_493087[(8)] = inst_493060);

(statearr_493087[(9)] = inst_493061);

return statearr_493087;
})();
var statearr_493088_493104 = state_493085__$1;
(statearr_493088_493104[(2)] = null);

(statearr_493088_493104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493086 === (2))){
var inst_493062 = (state_493085[(7)]);
var inst_493068 = (state_493085[(10)]);
var inst_493067 = cljs.core.seq.call(null,inst_493062);
var inst_493068__$1 = cljs.core.first.call(null,inst_493067);
var inst_493069 = cljs.core.next.call(null,inst_493067);
var inst_493070 = (inst_493068__$1 == null);
var inst_493071 = cljs.core.not.call(null,inst_493070);
var state_493085__$1 = (function (){var statearr_493089 = state_493085;
(statearr_493089[(11)] = inst_493069);

(statearr_493089[(10)] = inst_493068__$1);

return statearr_493089;
})();
if(inst_493071){
var statearr_493090_493105 = state_493085__$1;
(statearr_493090_493105[(1)] = (4));

} else {
var statearr_493091_493106 = state_493085__$1;
(statearr_493091_493106[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493086 === (3))){
var inst_493083 = (state_493085[(2)]);
var state_493085__$1 = state_493085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_493085__$1,inst_493083);
} else {
if((state_val_493086 === (4))){
var inst_493068 = (state_493085[(10)]);
var inst_493073 = figwheel.client.file_reloading.reload_js_file.call(null,inst_493068);
var state_493085__$1 = state_493085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_493085__$1,(7),inst_493073);
} else {
if((state_val_493086 === (5))){
var inst_493079 = cljs.core.async.close_BANG_.call(null,out);
var state_493085__$1 = state_493085;
var statearr_493092_493107 = state_493085__$1;
(statearr_493092_493107[(2)] = inst_493079);

(statearr_493092_493107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493086 === (6))){
var inst_493081 = (state_493085[(2)]);
var state_493085__$1 = state_493085;
var statearr_493093_493108 = state_493085__$1;
(statearr_493093_493108[(2)] = inst_493081);

(statearr_493093_493108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493086 === (7))){
var inst_493069 = (state_493085[(11)]);
var inst_493075 = (state_493085[(2)]);
var inst_493076 = cljs.core.async.put_BANG_.call(null,out,inst_493075);
var inst_493062 = inst_493069;
var state_493085__$1 = (function (){var statearr_493094 = state_493085;
(statearr_493094[(7)] = inst_493062);

(statearr_493094[(12)] = inst_493076);

return statearr_493094;
})();
var statearr_493095_493109 = state_493085__$1;
(statearr_493095_493109[(2)] = null);

(statearr_493095_493109[(1)] = (2));


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
});})(c__38812__auto___493103,out))
;
return ((function (switch__38700__auto__,c__38812__auto___493103,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____0 = (function (){
var statearr_493099 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_493099[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__);

(statearr_493099[(1)] = (1));

return statearr_493099;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____1 = (function (state_493085){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_493085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e493100){if((e493100 instanceof Object)){
var ex__38704__auto__ = e493100;
var statearr_493101_493110 = state_493085;
(statearr_493101_493110[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_493085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e493100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__493111 = state_493085;
state_493085 = G__493111;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__ = function(state_493085){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____1.call(this,state_493085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___493103,out))
})();
var state__38814__auto__ = (function (){var statearr_493102 = f__38813__auto__.call(null);
(statearr_493102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___493103);

return statearr_493102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___493103,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__493112,opts){
var map__493116 = p__493112;
var map__493116__$1 = ((((!((map__493116 == null)))?((((map__493116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__493116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__493116):map__493116);
var eval_body__$1 = cljs.core.get.call(null,map__493116__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__493116__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e493118){var e = e493118;
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
return (function (p1__493119_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__493119_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__493128){
var vec__493129 = p__493128;
var k = cljs.core.nth.call(null,vec__493129,(0),null);
var v = cljs.core.nth.call(null,vec__493129,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__493132){
var vec__493133 = p__493132;
var k = cljs.core.nth.call(null,vec__493133,(0),null);
var v = cljs.core.nth.call(null,vec__493133,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__493139,p__493140){
var map__493387 = p__493139;
var map__493387__$1 = ((((!((map__493387 == null)))?((((map__493387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__493387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__493387):map__493387);
var opts = map__493387__$1;
var before_jsload = cljs.core.get.call(null,map__493387__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__493387__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__493387__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__493388 = p__493140;
var map__493388__$1 = ((((!((map__493388 == null)))?((((map__493388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__493388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__493388):map__493388);
var msg = map__493388__$1;
var files = cljs.core.get.call(null,map__493388__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__493388__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__493388__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_493541){
var state_val_493542 = (state_493541[(1)]);
if((state_val_493542 === (7))){
var inst_493405 = (state_493541[(7)]);
var inst_493403 = (state_493541[(8)]);
var inst_493402 = (state_493541[(9)]);
var inst_493404 = (state_493541[(10)]);
var inst_493410 = cljs.core._nth.call(null,inst_493403,inst_493405);
var inst_493411 = figwheel.client.file_reloading.eval_body.call(null,inst_493410,opts);
var inst_493412 = (inst_493405 + (1));
var tmp493543 = inst_493403;
var tmp493544 = inst_493402;
var tmp493545 = inst_493404;
var inst_493402__$1 = tmp493544;
var inst_493403__$1 = tmp493543;
var inst_493404__$1 = tmp493545;
var inst_493405__$1 = inst_493412;
var state_493541__$1 = (function (){var statearr_493546 = state_493541;
(statearr_493546[(7)] = inst_493405__$1);

(statearr_493546[(11)] = inst_493411);

(statearr_493546[(8)] = inst_493403__$1);

(statearr_493546[(9)] = inst_493402__$1);

(statearr_493546[(10)] = inst_493404__$1);

return statearr_493546;
})();
var statearr_493547_493633 = state_493541__$1;
(statearr_493547_493633[(2)] = null);

(statearr_493547_493633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (20))){
var inst_493445 = (state_493541[(12)]);
var inst_493453 = figwheel.client.file_reloading.sort_files.call(null,inst_493445);
var state_493541__$1 = state_493541;
var statearr_493548_493634 = state_493541__$1;
(statearr_493548_493634[(2)] = inst_493453);

(statearr_493548_493634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (27))){
var state_493541__$1 = state_493541;
var statearr_493549_493635 = state_493541__$1;
(statearr_493549_493635[(2)] = null);

(statearr_493549_493635[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (1))){
var inst_493394 = (state_493541[(13)]);
var inst_493391 = before_jsload.call(null,files);
var inst_493392 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_493393 = (function (){return ((function (inst_493394,inst_493391,inst_493392,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__493136_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__493136_SHARP_);
});
;})(inst_493394,inst_493391,inst_493392,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_493394__$1 = cljs.core.filter.call(null,inst_493393,files);
var inst_493395 = cljs.core.not_empty.call(null,inst_493394__$1);
var state_493541__$1 = (function (){var statearr_493550 = state_493541;
(statearr_493550[(14)] = inst_493392);

(statearr_493550[(15)] = inst_493391);

(statearr_493550[(13)] = inst_493394__$1);

return statearr_493550;
})();
if(cljs.core.truth_(inst_493395)){
var statearr_493551_493636 = state_493541__$1;
(statearr_493551_493636[(1)] = (2));

} else {
var statearr_493552_493637 = state_493541__$1;
(statearr_493552_493637[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (24))){
var state_493541__$1 = state_493541;
var statearr_493553_493638 = state_493541__$1;
(statearr_493553_493638[(2)] = null);

(statearr_493553_493638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (39))){
var inst_493495 = (state_493541[(16)]);
var state_493541__$1 = state_493541;
var statearr_493554_493639 = state_493541__$1;
(statearr_493554_493639[(2)] = inst_493495);

(statearr_493554_493639[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (46))){
var inst_493536 = (state_493541[(2)]);
var state_493541__$1 = state_493541;
var statearr_493555_493640 = state_493541__$1;
(statearr_493555_493640[(2)] = inst_493536);

(statearr_493555_493640[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (4))){
var inst_493439 = (state_493541[(2)]);
var inst_493440 = cljs.core.List.EMPTY;
var inst_493441 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_493440);
var inst_493442 = (function (){return ((function (inst_493439,inst_493440,inst_493441,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__493137_SHARP_){
var and__31867__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__493137_SHARP_);
if(cljs.core.truth_(and__31867__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__493137_SHARP_));
} else {
return and__31867__auto__;
}
});
;})(inst_493439,inst_493440,inst_493441,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_493443 = cljs.core.filter.call(null,inst_493442,files);
var inst_493444 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_493445 = cljs.core.concat.call(null,inst_493443,inst_493444);
var state_493541__$1 = (function (){var statearr_493556 = state_493541;
(statearr_493556[(17)] = inst_493441);

(statearr_493556[(18)] = inst_493439);

(statearr_493556[(12)] = inst_493445);

return statearr_493556;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_493557_493641 = state_493541__$1;
(statearr_493557_493641[(1)] = (16));

} else {
var statearr_493558_493642 = state_493541__$1;
(statearr_493558_493642[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (15))){
var inst_493429 = (state_493541[(2)]);
var state_493541__$1 = state_493541;
var statearr_493559_493643 = state_493541__$1;
(statearr_493559_493643[(2)] = inst_493429);

(statearr_493559_493643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (21))){
var inst_493455 = (state_493541[(19)]);
var inst_493455__$1 = (state_493541[(2)]);
var inst_493456 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_493455__$1);
var state_493541__$1 = (function (){var statearr_493560 = state_493541;
(statearr_493560[(19)] = inst_493455__$1);

return statearr_493560;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_493541__$1,(22),inst_493456);
} else {
if((state_val_493542 === (31))){
var inst_493539 = (state_493541[(2)]);
var state_493541__$1 = state_493541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_493541__$1,inst_493539);
} else {
if((state_val_493542 === (32))){
var inst_493495 = (state_493541[(16)]);
var inst_493500 = inst_493495.cljs$lang$protocol_mask$partition0$;
var inst_493501 = (inst_493500 & (64));
var inst_493502 = inst_493495.cljs$core$ISeq$;
var inst_493503 = (inst_493501) || (inst_493502);
var state_493541__$1 = state_493541;
if(cljs.core.truth_(inst_493503)){
var statearr_493561_493644 = state_493541__$1;
(statearr_493561_493644[(1)] = (35));

} else {
var statearr_493562_493645 = state_493541__$1;
(statearr_493562_493645[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (40))){
var inst_493516 = (state_493541[(20)]);
var inst_493515 = (state_493541[(2)]);
var inst_493516__$1 = cljs.core.get.call(null,inst_493515,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_493517 = cljs.core.get.call(null,inst_493515,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_493518 = cljs.core.not_empty.call(null,inst_493516__$1);
var state_493541__$1 = (function (){var statearr_493563 = state_493541;
(statearr_493563[(21)] = inst_493517);

(statearr_493563[(20)] = inst_493516__$1);

return statearr_493563;
})();
if(cljs.core.truth_(inst_493518)){
var statearr_493564_493646 = state_493541__$1;
(statearr_493564_493646[(1)] = (41));

} else {
var statearr_493565_493647 = state_493541__$1;
(statearr_493565_493647[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (33))){
var state_493541__$1 = state_493541;
var statearr_493566_493648 = state_493541__$1;
(statearr_493566_493648[(2)] = false);

(statearr_493566_493648[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (13))){
var inst_493415 = (state_493541[(22)]);
var inst_493419 = cljs.core.chunk_first.call(null,inst_493415);
var inst_493420 = cljs.core.chunk_rest.call(null,inst_493415);
var inst_493421 = cljs.core.count.call(null,inst_493419);
var inst_493402 = inst_493420;
var inst_493403 = inst_493419;
var inst_493404 = inst_493421;
var inst_493405 = (0);
var state_493541__$1 = (function (){var statearr_493567 = state_493541;
(statearr_493567[(7)] = inst_493405);

(statearr_493567[(8)] = inst_493403);

(statearr_493567[(9)] = inst_493402);

(statearr_493567[(10)] = inst_493404);

return statearr_493567;
})();
var statearr_493568_493649 = state_493541__$1;
(statearr_493568_493649[(2)] = null);

(statearr_493568_493649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (22))){
var inst_493455 = (state_493541[(19)]);
var inst_493458 = (state_493541[(23)]);
var inst_493463 = (state_493541[(24)]);
var inst_493459 = (state_493541[(25)]);
var inst_493458__$1 = (state_493541[(2)]);
var inst_493459__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_493458__$1);
var inst_493460 = (function (){var all_files = inst_493455;
var res_SINGLEQUOTE_ = inst_493458__$1;
var res = inst_493459__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_493455,inst_493458,inst_493463,inst_493459,inst_493458__$1,inst_493459__$1,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__493138_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__493138_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_493455,inst_493458,inst_493463,inst_493459,inst_493458__$1,inst_493459__$1,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_493461 = cljs.core.filter.call(null,inst_493460,inst_493458__$1);
var inst_493462 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_493463__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_493462);
var inst_493464 = cljs.core.not_empty.call(null,inst_493463__$1);
var state_493541__$1 = (function (){var statearr_493569 = state_493541;
(statearr_493569[(26)] = inst_493461);

(statearr_493569[(23)] = inst_493458__$1);

(statearr_493569[(24)] = inst_493463__$1);

(statearr_493569[(25)] = inst_493459__$1);

return statearr_493569;
})();
if(cljs.core.truth_(inst_493464)){
var statearr_493570_493650 = state_493541__$1;
(statearr_493570_493650[(1)] = (23));

} else {
var statearr_493571_493651 = state_493541__$1;
(statearr_493571_493651[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (36))){
var state_493541__$1 = state_493541;
var statearr_493572_493652 = state_493541__$1;
(statearr_493572_493652[(2)] = false);

(statearr_493572_493652[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (41))){
var inst_493516 = (state_493541[(20)]);
var inst_493520 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_493521 = cljs.core.map.call(null,inst_493520,inst_493516);
var inst_493522 = cljs.core.pr_str.call(null,inst_493521);
var inst_493523 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_493522)].join('');
var inst_493524 = figwheel.client.utils.log.call(null,inst_493523);
var state_493541__$1 = state_493541;
var statearr_493573_493653 = state_493541__$1;
(statearr_493573_493653[(2)] = inst_493524);

(statearr_493573_493653[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (43))){
var inst_493517 = (state_493541[(21)]);
var inst_493527 = (state_493541[(2)]);
var inst_493528 = cljs.core.not_empty.call(null,inst_493517);
var state_493541__$1 = (function (){var statearr_493574 = state_493541;
(statearr_493574[(27)] = inst_493527);

return statearr_493574;
})();
if(cljs.core.truth_(inst_493528)){
var statearr_493575_493654 = state_493541__$1;
(statearr_493575_493654[(1)] = (44));

} else {
var statearr_493576_493655 = state_493541__$1;
(statearr_493576_493655[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (29))){
var inst_493461 = (state_493541[(26)]);
var inst_493455 = (state_493541[(19)]);
var inst_493495 = (state_493541[(16)]);
var inst_493458 = (state_493541[(23)]);
var inst_493463 = (state_493541[(24)]);
var inst_493459 = (state_493541[(25)]);
var inst_493491 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_493494 = (function (){var all_files = inst_493455;
var res_SINGLEQUOTE_ = inst_493458;
var res = inst_493459;
var files_not_loaded = inst_493461;
var dependencies_that_loaded = inst_493463;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_493461,inst_493455,inst_493495,inst_493458,inst_493463,inst_493459,inst_493491,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__493493){
var map__493577 = p__493493;
var map__493577__$1 = ((((!((map__493577 == null)))?((((map__493577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__493577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__493577):map__493577);
var namespace = cljs.core.get.call(null,map__493577__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_493461,inst_493455,inst_493495,inst_493458,inst_493463,inst_493459,inst_493491,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_493495__$1 = cljs.core.group_by.call(null,inst_493494,inst_493461);
var inst_493497 = (inst_493495__$1 == null);
var inst_493498 = cljs.core.not.call(null,inst_493497);
var state_493541__$1 = (function (){var statearr_493579 = state_493541;
(statearr_493579[(16)] = inst_493495__$1);

(statearr_493579[(28)] = inst_493491);

return statearr_493579;
})();
if(inst_493498){
var statearr_493580_493656 = state_493541__$1;
(statearr_493580_493656[(1)] = (32));

} else {
var statearr_493581_493657 = state_493541__$1;
(statearr_493581_493657[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (44))){
var inst_493517 = (state_493541[(21)]);
var inst_493530 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_493517);
var inst_493531 = cljs.core.pr_str.call(null,inst_493530);
var inst_493532 = [cljs.core.str("not required: "),cljs.core.str(inst_493531)].join('');
var inst_493533 = figwheel.client.utils.log.call(null,inst_493532);
var state_493541__$1 = state_493541;
var statearr_493582_493658 = state_493541__$1;
(statearr_493582_493658[(2)] = inst_493533);

(statearr_493582_493658[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (6))){
var inst_493436 = (state_493541[(2)]);
var state_493541__$1 = state_493541;
var statearr_493583_493659 = state_493541__$1;
(statearr_493583_493659[(2)] = inst_493436);

(statearr_493583_493659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (28))){
var inst_493461 = (state_493541[(26)]);
var inst_493488 = (state_493541[(2)]);
var inst_493489 = cljs.core.not_empty.call(null,inst_493461);
var state_493541__$1 = (function (){var statearr_493584 = state_493541;
(statearr_493584[(29)] = inst_493488);

return statearr_493584;
})();
if(cljs.core.truth_(inst_493489)){
var statearr_493585_493660 = state_493541__$1;
(statearr_493585_493660[(1)] = (29));

} else {
var statearr_493586_493661 = state_493541__$1;
(statearr_493586_493661[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (25))){
var inst_493459 = (state_493541[(25)]);
var inst_493475 = (state_493541[(2)]);
var inst_493476 = cljs.core.not_empty.call(null,inst_493459);
var state_493541__$1 = (function (){var statearr_493587 = state_493541;
(statearr_493587[(30)] = inst_493475);

return statearr_493587;
})();
if(cljs.core.truth_(inst_493476)){
var statearr_493588_493662 = state_493541__$1;
(statearr_493588_493662[(1)] = (26));

} else {
var statearr_493589_493663 = state_493541__$1;
(statearr_493589_493663[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (34))){
var inst_493510 = (state_493541[(2)]);
var state_493541__$1 = state_493541;
if(cljs.core.truth_(inst_493510)){
var statearr_493590_493664 = state_493541__$1;
(statearr_493590_493664[(1)] = (38));

} else {
var statearr_493591_493665 = state_493541__$1;
(statearr_493591_493665[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (17))){
var state_493541__$1 = state_493541;
var statearr_493592_493666 = state_493541__$1;
(statearr_493592_493666[(2)] = recompile_dependents);

(statearr_493592_493666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (3))){
var state_493541__$1 = state_493541;
var statearr_493593_493667 = state_493541__$1;
(statearr_493593_493667[(2)] = null);

(statearr_493593_493667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (12))){
var inst_493432 = (state_493541[(2)]);
var state_493541__$1 = state_493541;
var statearr_493594_493668 = state_493541__$1;
(statearr_493594_493668[(2)] = inst_493432);

(statearr_493594_493668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (2))){
var inst_493394 = (state_493541[(13)]);
var inst_493401 = cljs.core.seq.call(null,inst_493394);
var inst_493402 = inst_493401;
var inst_493403 = null;
var inst_493404 = (0);
var inst_493405 = (0);
var state_493541__$1 = (function (){var statearr_493595 = state_493541;
(statearr_493595[(7)] = inst_493405);

(statearr_493595[(8)] = inst_493403);

(statearr_493595[(9)] = inst_493402);

(statearr_493595[(10)] = inst_493404);

return statearr_493595;
})();
var statearr_493596_493669 = state_493541__$1;
(statearr_493596_493669[(2)] = null);

(statearr_493596_493669[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (23))){
var inst_493461 = (state_493541[(26)]);
var inst_493455 = (state_493541[(19)]);
var inst_493458 = (state_493541[(23)]);
var inst_493463 = (state_493541[(24)]);
var inst_493459 = (state_493541[(25)]);
var inst_493466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_493468 = (function (){var all_files = inst_493455;
var res_SINGLEQUOTE_ = inst_493458;
var res = inst_493459;
var files_not_loaded = inst_493461;
var dependencies_that_loaded = inst_493463;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_493461,inst_493455,inst_493458,inst_493463,inst_493459,inst_493466,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__493467){
var map__493597 = p__493467;
var map__493597__$1 = ((((!((map__493597 == null)))?((((map__493597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__493597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__493597):map__493597);
var request_url = cljs.core.get.call(null,map__493597__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_493461,inst_493455,inst_493458,inst_493463,inst_493459,inst_493466,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_493469 = cljs.core.reverse.call(null,inst_493463);
var inst_493470 = cljs.core.map.call(null,inst_493468,inst_493469);
var inst_493471 = cljs.core.pr_str.call(null,inst_493470);
var inst_493472 = figwheel.client.utils.log.call(null,inst_493471);
var state_493541__$1 = (function (){var statearr_493599 = state_493541;
(statearr_493599[(31)] = inst_493466);

return statearr_493599;
})();
var statearr_493600_493670 = state_493541__$1;
(statearr_493600_493670[(2)] = inst_493472);

(statearr_493600_493670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (35))){
var state_493541__$1 = state_493541;
var statearr_493601_493671 = state_493541__$1;
(statearr_493601_493671[(2)] = true);

(statearr_493601_493671[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (19))){
var inst_493445 = (state_493541[(12)]);
var inst_493451 = figwheel.client.file_reloading.expand_files.call(null,inst_493445);
var state_493541__$1 = state_493541;
var statearr_493602_493672 = state_493541__$1;
(statearr_493602_493672[(2)] = inst_493451);

(statearr_493602_493672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (11))){
var state_493541__$1 = state_493541;
var statearr_493603_493673 = state_493541__$1;
(statearr_493603_493673[(2)] = null);

(statearr_493603_493673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (9))){
var inst_493434 = (state_493541[(2)]);
var state_493541__$1 = state_493541;
var statearr_493604_493674 = state_493541__$1;
(statearr_493604_493674[(2)] = inst_493434);

(statearr_493604_493674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (5))){
var inst_493405 = (state_493541[(7)]);
var inst_493404 = (state_493541[(10)]);
var inst_493407 = (inst_493405 < inst_493404);
var inst_493408 = inst_493407;
var state_493541__$1 = state_493541;
if(cljs.core.truth_(inst_493408)){
var statearr_493605_493675 = state_493541__$1;
(statearr_493605_493675[(1)] = (7));

} else {
var statearr_493606_493676 = state_493541__$1;
(statearr_493606_493676[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (14))){
var inst_493415 = (state_493541[(22)]);
var inst_493424 = cljs.core.first.call(null,inst_493415);
var inst_493425 = figwheel.client.file_reloading.eval_body.call(null,inst_493424,opts);
var inst_493426 = cljs.core.next.call(null,inst_493415);
var inst_493402 = inst_493426;
var inst_493403 = null;
var inst_493404 = (0);
var inst_493405 = (0);
var state_493541__$1 = (function (){var statearr_493607 = state_493541;
(statearr_493607[(32)] = inst_493425);

(statearr_493607[(7)] = inst_493405);

(statearr_493607[(8)] = inst_493403);

(statearr_493607[(9)] = inst_493402);

(statearr_493607[(10)] = inst_493404);

return statearr_493607;
})();
var statearr_493608_493677 = state_493541__$1;
(statearr_493608_493677[(2)] = null);

(statearr_493608_493677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (45))){
var state_493541__$1 = state_493541;
var statearr_493609_493678 = state_493541__$1;
(statearr_493609_493678[(2)] = null);

(statearr_493609_493678[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (26))){
var inst_493461 = (state_493541[(26)]);
var inst_493455 = (state_493541[(19)]);
var inst_493458 = (state_493541[(23)]);
var inst_493463 = (state_493541[(24)]);
var inst_493459 = (state_493541[(25)]);
var inst_493478 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_493480 = (function (){var all_files = inst_493455;
var res_SINGLEQUOTE_ = inst_493458;
var res = inst_493459;
var files_not_loaded = inst_493461;
var dependencies_that_loaded = inst_493463;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_493461,inst_493455,inst_493458,inst_493463,inst_493459,inst_493478,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__493479){
var map__493610 = p__493479;
var map__493610__$1 = ((((!((map__493610 == null)))?((((map__493610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__493610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__493610):map__493610);
var namespace = cljs.core.get.call(null,map__493610__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__493610__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_493461,inst_493455,inst_493458,inst_493463,inst_493459,inst_493478,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_493481 = cljs.core.map.call(null,inst_493480,inst_493459);
var inst_493482 = cljs.core.pr_str.call(null,inst_493481);
var inst_493483 = figwheel.client.utils.log.call(null,inst_493482);
var inst_493484 = (function (){var all_files = inst_493455;
var res_SINGLEQUOTE_ = inst_493458;
var res = inst_493459;
var files_not_loaded = inst_493461;
var dependencies_that_loaded = inst_493463;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_493461,inst_493455,inst_493458,inst_493463,inst_493459,inst_493478,inst_493480,inst_493481,inst_493482,inst_493483,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_493461,inst_493455,inst_493458,inst_493463,inst_493459,inst_493478,inst_493480,inst_493481,inst_493482,inst_493483,state_val_493542,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_493485 = setTimeout(inst_493484,(10));
var state_493541__$1 = (function (){var statearr_493612 = state_493541;
(statearr_493612[(33)] = inst_493478);

(statearr_493612[(34)] = inst_493483);

return statearr_493612;
})();
var statearr_493613_493679 = state_493541__$1;
(statearr_493613_493679[(2)] = inst_493485);

(statearr_493613_493679[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (16))){
var state_493541__$1 = state_493541;
var statearr_493614_493680 = state_493541__$1;
(statearr_493614_493680[(2)] = reload_dependents);

(statearr_493614_493680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (38))){
var inst_493495 = (state_493541[(16)]);
var inst_493512 = cljs.core.apply.call(null,cljs.core.hash_map,inst_493495);
var state_493541__$1 = state_493541;
var statearr_493615_493681 = state_493541__$1;
(statearr_493615_493681[(2)] = inst_493512);

(statearr_493615_493681[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (30))){
var state_493541__$1 = state_493541;
var statearr_493616_493682 = state_493541__$1;
(statearr_493616_493682[(2)] = null);

(statearr_493616_493682[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (10))){
var inst_493415 = (state_493541[(22)]);
var inst_493417 = cljs.core.chunked_seq_QMARK_.call(null,inst_493415);
var state_493541__$1 = state_493541;
if(inst_493417){
var statearr_493617_493683 = state_493541__$1;
(statearr_493617_493683[(1)] = (13));

} else {
var statearr_493618_493684 = state_493541__$1;
(statearr_493618_493684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (18))){
var inst_493449 = (state_493541[(2)]);
var state_493541__$1 = state_493541;
if(cljs.core.truth_(inst_493449)){
var statearr_493619_493685 = state_493541__$1;
(statearr_493619_493685[(1)] = (19));

} else {
var statearr_493620_493686 = state_493541__$1;
(statearr_493620_493686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (42))){
var state_493541__$1 = state_493541;
var statearr_493621_493687 = state_493541__$1;
(statearr_493621_493687[(2)] = null);

(statearr_493621_493687[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (37))){
var inst_493507 = (state_493541[(2)]);
var state_493541__$1 = state_493541;
var statearr_493622_493688 = state_493541__$1;
(statearr_493622_493688[(2)] = inst_493507);

(statearr_493622_493688[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_493542 === (8))){
var inst_493415 = (state_493541[(22)]);
var inst_493402 = (state_493541[(9)]);
var inst_493415__$1 = cljs.core.seq.call(null,inst_493402);
var state_493541__$1 = (function (){var statearr_493623 = state_493541;
(statearr_493623[(22)] = inst_493415__$1);

return statearr_493623;
})();
if(inst_493415__$1){
var statearr_493624_493689 = state_493541__$1;
(statearr_493624_493689[(1)] = (10));

} else {
var statearr_493625_493690 = state_493541__$1;
(statearr_493625_493690[(1)] = (11));

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
});})(c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38700__auto__,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____0 = (function (){
var statearr_493629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_493629[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__);

(statearr_493629[(1)] = (1));

return statearr_493629;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____1 = (function (state_493541){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_493541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e493630){if((e493630 instanceof Object)){
var ex__38704__auto__ = e493630;
var statearr_493631_493691 = state_493541;
(statearr_493631_493691[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_493541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e493630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__493692 = state_493541;
state_493541 = G__493692;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__ = function(state_493541){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____1.call(this,state_493541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38814__auto__ = (function (){var statearr_493632 = f__38813__auto__.call(null);
(statearr_493632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_493632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,map__493387,map__493387__$1,opts,before_jsload,on_jsload,reload_dependents,map__493388,map__493388__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38812__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__493695,link){
var map__493698 = p__493695;
var map__493698__$1 = ((((!((map__493698 == null)))?((((map__493698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__493698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__493698):map__493698);
var file = cljs.core.get.call(null,map__493698__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__493698,map__493698__$1,file){
return (function (p1__493693_SHARP_,p2__493694_SHARP_){
if(cljs.core._EQ_.call(null,p1__493693_SHARP_,p2__493694_SHARP_)){
return p1__493693_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__493698,map__493698__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__493704){
var map__493705 = p__493704;
var map__493705__$1 = ((((!((map__493705 == null)))?((((map__493705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__493705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__493705):map__493705);
var match_length = cljs.core.get.call(null,map__493705__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__493705__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__493700_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__493700_SHARP_);
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
var args493707 = [];
var len__32954__auto___493710 = arguments.length;
var i__32955__auto___493711 = (0);
while(true){
if((i__32955__auto___493711 < len__32954__auto___493710)){
args493707.push((arguments[i__32955__auto___493711]));

var G__493712 = (i__32955__auto___493711 + (1));
i__32955__auto___493711 = G__493712;
continue;
} else {
}
break;
}

var G__493709 = args493707.length;
switch (G__493709) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args493707.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__493714_SHARP_,p2__493715_SHARP_){
return cljs.core.assoc.call(null,p1__493714_SHARP_,cljs.core.get.call(null,p2__493715_SHARP_,key),p2__493715_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__493716){
var map__493719 = p__493716;
var map__493719__$1 = ((((!((map__493719 == null)))?((((map__493719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__493719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__493719):map__493719);
var f_data = map__493719__$1;
var file = cljs.core.get.call(null,map__493719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__493721,files_msg){
var map__493728 = p__493721;
var map__493728__$1 = ((((!((map__493728 == null)))?((((map__493728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__493728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__493728):map__493728);
var opts = map__493728__$1;
var on_cssload = cljs.core.get.call(null,map__493728__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__493730_493734 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__493731_493735 = null;
var count__493732_493736 = (0);
var i__493733_493737 = (0);
while(true){
if((i__493733_493737 < count__493732_493736)){
var f_493738 = cljs.core._nth.call(null,chunk__493731_493735,i__493733_493737);
figwheel.client.file_reloading.reload_css_file.call(null,f_493738);

var G__493739 = seq__493730_493734;
var G__493740 = chunk__493731_493735;
var G__493741 = count__493732_493736;
var G__493742 = (i__493733_493737 + (1));
seq__493730_493734 = G__493739;
chunk__493731_493735 = G__493740;
count__493732_493736 = G__493741;
i__493733_493737 = G__493742;
continue;
} else {
var temp__4657__auto___493743 = cljs.core.seq.call(null,seq__493730_493734);
if(temp__4657__auto___493743){
var seq__493730_493744__$1 = temp__4657__auto___493743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__493730_493744__$1)){
var c__32690__auto___493745 = cljs.core.chunk_first.call(null,seq__493730_493744__$1);
var G__493746 = cljs.core.chunk_rest.call(null,seq__493730_493744__$1);
var G__493747 = c__32690__auto___493745;
var G__493748 = cljs.core.count.call(null,c__32690__auto___493745);
var G__493749 = (0);
seq__493730_493734 = G__493746;
chunk__493731_493735 = G__493747;
count__493732_493736 = G__493748;
i__493733_493737 = G__493749;
continue;
} else {
var f_493750 = cljs.core.first.call(null,seq__493730_493744__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_493750);

var G__493751 = cljs.core.next.call(null,seq__493730_493744__$1);
var G__493752 = null;
var G__493753 = (0);
var G__493754 = (0);
seq__493730_493734 = G__493751;
chunk__493731_493735 = G__493752;
count__493732_493736 = G__493753;
i__493733_493737 = G__493754;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__493728,map__493728__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__493728,map__493728__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1489290124379