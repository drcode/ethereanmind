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
var or__34227__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__34227__auto__){
return or__34227__auto__;
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
var or__34227__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__64247_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__64247_SHARP_));
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
var seq__64252 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__64253 = null;
var count__64254 = (0);
var i__64255 = (0);
while(true){
if((i__64255 < count__64254)){
var n = cljs.core._nth.call(null,chunk__64253,i__64255);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__64256 = seq__64252;
var G__64257 = chunk__64253;
var G__64258 = count__64254;
var G__64259 = (i__64255 + (1));
seq__64252 = G__64256;
chunk__64253 = G__64257;
count__64254 = G__64258;
i__64255 = G__64259;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__64252);
if(temp__6728__auto__){
var seq__64252__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64252__$1)){
var c__35130__auto__ = cljs.core.chunk_first.call(null,seq__64252__$1);
var G__64260 = cljs.core.chunk_rest.call(null,seq__64252__$1);
var G__64261 = c__35130__auto__;
var G__64262 = cljs.core.count.call(null,c__35130__auto__);
var G__64263 = (0);
seq__64252 = G__64260;
chunk__64253 = G__64261;
count__64254 = G__64262;
i__64255 = G__64263;
continue;
} else {
var n = cljs.core.first.call(null,seq__64252__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__64264 = cljs.core.next.call(null,seq__64252__$1);
var G__64265 = null;
var G__64266 = (0);
var G__64267 = (0);
seq__64252 = G__64264;
chunk__64253 = G__64265;
count__64254 = G__64266;
i__64255 = G__64267;
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

var seq__64318_64329 = cljs.core.seq.call(null,deps);
var chunk__64319_64330 = null;
var count__64320_64331 = (0);
var i__64321_64332 = (0);
while(true){
if((i__64321_64332 < count__64320_64331)){
var dep_64333 = cljs.core._nth.call(null,chunk__64319_64330,i__64321_64332);
topo_sort_helper_STAR_.call(null,dep_64333,(depth + (1)),state);

var G__64334 = seq__64318_64329;
var G__64335 = chunk__64319_64330;
var G__64336 = count__64320_64331;
var G__64337 = (i__64321_64332 + (1));
seq__64318_64329 = G__64334;
chunk__64319_64330 = G__64335;
count__64320_64331 = G__64336;
i__64321_64332 = G__64337;
continue;
} else {
var temp__6728__auto___64338 = cljs.core.seq.call(null,seq__64318_64329);
if(temp__6728__auto___64338){
var seq__64318_64339__$1 = temp__6728__auto___64338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64318_64339__$1)){
var c__35130__auto___64340 = cljs.core.chunk_first.call(null,seq__64318_64339__$1);
var G__64341 = cljs.core.chunk_rest.call(null,seq__64318_64339__$1);
var G__64342 = c__35130__auto___64340;
var G__64343 = cljs.core.count.call(null,c__35130__auto___64340);
var G__64344 = (0);
seq__64318_64329 = G__64341;
chunk__64319_64330 = G__64342;
count__64320_64331 = G__64343;
i__64321_64332 = G__64344;
continue;
} else {
var dep_64345 = cljs.core.first.call(null,seq__64318_64339__$1);
topo_sort_helper_STAR_.call(null,dep_64345,(depth + (1)),state);

var G__64346 = cljs.core.next.call(null,seq__64318_64339__$1);
var G__64347 = null;
var G__64348 = (0);
var G__64349 = (0);
seq__64318_64329 = G__64346;
chunk__64319_64330 = G__64347;
count__64320_64331 = G__64348;
i__64321_64332 = G__64349;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__64322){
var vec__64326 = p__64322;
var seq__64327 = cljs.core.seq.call(null,vec__64326);
var first__64328 = cljs.core.first.call(null,seq__64327);
var seq__64327__$1 = cljs.core.next.call(null,seq__64327);
var x = first__64328;
var xs = seq__64327__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__64326,seq__64327,first__64328,seq__64327__$1,x,xs,get_deps__$1){
return (function (p1__64268_SHARP_){
return clojure.set.difference.call(null,p1__64268_SHARP_,x);
});})(vec__64326,seq__64327,first__64328,seq__64327__$1,x,xs,get_deps__$1))
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
var seq__64362 = cljs.core.seq.call(null,provides);
var chunk__64363 = null;
var count__64364 = (0);
var i__64365 = (0);
while(true){
if((i__64365 < count__64364)){
var prov = cljs.core._nth.call(null,chunk__64363,i__64365);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__64366_64374 = cljs.core.seq.call(null,requires);
var chunk__64367_64375 = null;
var count__64368_64376 = (0);
var i__64369_64377 = (0);
while(true){
if((i__64369_64377 < count__64368_64376)){
var req_64378 = cljs.core._nth.call(null,chunk__64367_64375,i__64369_64377);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64378,prov);

var G__64379 = seq__64366_64374;
var G__64380 = chunk__64367_64375;
var G__64381 = count__64368_64376;
var G__64382 = (i__64369_64377 + (1));
seq__64366_64374 = G__64379;
chunk__64367_64375 = G__64380;
count__64368_64376 = G__64381;
i__64369_64377 = G__64382;
continue;
} else {
var temp__6728__auto___64383 = cljs.core.seq.call(null,seq__64366_64374);
if(temp__6728__auto___64383){
var seq__64366_64384__$1 = temp__6728__auto___64383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64366_64384__$1)){
var c__35130__auto___64385 = cljs.core.chunk_first.call(null,seq__64366_64384__$1);
var G__64386 = cljs.core.chunk_rest.call(null,seq__64366_64384__$1);
var G__64387 = c__35130__auto___64385;
var G__64388 = cljs.core.count.call(null,c__35130__auto___64385);
var G__64389 = (0);
seq__64366_64374 = G__64386;
chunk__64367_64375 = G__64387;
count__64368_64376 = G__64388;
i__64369_64377 = G__64389;
continue;
} else {
var req_64390 = cljs.core.first.call(null,seq__64366_64384__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64390,prov);

var G__64391 = cljs.core.next.call(null,seq__64366_64384__$1);
var G__64392 = null;
var G__64393 = (0);
var G__64394 = (0);
seq__64366_64374 = G__64391;
chunk__64367_64375 = G__64392;
count__64368_64376 = G__64393;
i__64369_64377 = G__64394;
continue;
}
} else {
}
}
break;
}

var G__64395 = seq__64362;
var G__64396 = chunk__64363;
var G__64397 = count__64364;
var G__64398 = (i__64365 + (1));
seq__64362 = G__64395;
chunk__64363 = G__64396;
count__64364 = G__64397;
i__64365 = G__64398;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__64362);
if(temp__6728__auto__){
var seq__64362__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64362__$1)){
var c__35130__auto__ = cljs.core.chunk_first.call(null,seq__64362__$1);
var G__64399 = cljs.core.chunk_rest.call(null,seq__64362__$1);
var G__64400 = c__35130__auto__;
var G__64401 = cljs.core.count.call(null,c__35130__auto__);
var G__64402 = (0);
seq__64362 = G__64399;
chunk__64363 = G__64400;
count__64364 = G__64401;
i__64365 = G__64402;
continue;
} else {
var prov = cljs.core.first.call(null,seq__64362__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__64370_64403 = cljs.core.seq.call(null,requires);
var chunk__64371_64404 = null;
var count__64372_64405 = (0);
var i__64373_64406 = (0);
while(true){
if((i__64373_64406 < count__64372_64405)){
var req_64407 = cljs.core._nth.call(null,chunk__64371_64404,i__64373_64406);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64407,prov);

var G__64408 = seq__64370_64403;
var G__64409 = chunk__64371_64404;
var G__64410 = count__64372_64405;
var G__64411 = (i__64373_64406 + (1));
seq__64370_64403 = G__64408;
chunk__64371_64404 = G__64409;
count__64372_64405 = G__64410;
i__64373_64406 = G__64411;
continue;
} else {
var temp__6728__auto___64412__$1 = cljs.core.seq.call(null,seq__64370_64403);
if(temp__6728__auto___64412__$1){
var seq__64370_64413__$1 = temp__6728__auto___64412__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64370_64413__$1)){
var c__35130__auto___64414 = cljs.core.chunk_first.call(null,seq__64370_64413__$1);
var G__64415 = cljs.core.chunk_rest.call(null,seq__64370_64413__$1);
var G__64416 = c__35130__auto___64414;
var G__64417 = cljs.core.count.call(null,c__35130__auto___64414);
var G__64418 = (0);
seq__64370_64403 = G__64415;
chunk__64371_64404 = G__64416;
count__64372_64405 = G__64417;
i__64373_64406 = G__64418;
continue;
} else {
var req_64419 = cljs.core.first.call(null,seq__64370_64413__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64419,prov);

var G__64420 = cljs.core.next.call(null,seq__64370_64413__$1);
var G__64421 = null;
var G__64422 = (0);
var G__64423 = (0);
seq__64370_64403 = G__64420;
chunk__64371_64404 = G__64421;
count__64372_64405 = G__64422;
i__64373_64406 = G__64423;
continue;
}
} else {
}
}
break;
}

var G__64424 = cljs.core.next.call(null,seq__64362__$1);
var G__64425 = null;
var G__64426 = (0);
var G__64427 = (0);
seq__64362 = G__64424;
chunk__64363 = G__64425;
count__64364 = G__64426;
i__64365 = G__64427;
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
var seq__64432_64436 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__64433_64437 = null;
var count__64434_64438 = (0);
var i__64435_64439 = (0);
while(true){
if((i__64435_64439 < count__64434_64438)){
var ns_64440 = cljs.core._nth.call(null,chunk__64433_64437,i__64435_64439);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_64440);

var G__64441 = seq__64432_64436;
var G__64442 = chunk__64433_64437;
var G__64443 = count__64434_64438;
var G__64444 = (i__64435_64439 + (1));
seq__64432_64436 = G__64441;
chunk__64433_64437 = G__64442;
count__64434_64438 = G__64443;
i__64435_64439 = G__64444;
continue;
} else {
var temp__6728__auto___64445 = cljs.core.seq.call(null,seq__64432_64436);
if(temp__6728__auto___64445){
var seq__64432_64446__$1 = temp__6728__auto___64445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64432_64446__$1)){
var c__35130__auto___64447 = cljs.core.chunk_first.call(null,seq__64432_64446__$1);
var G__64448 = cljs.core.chunk_rest.call(null,seq__64432_64446__$1);
var G__64449 = c__35130__auto___64447;
var G__64450 = cljs.core.count.call(null,c__35130__auto___64447);
var G__64451 = (0);
seq__64432_64436 = G__64448;
chunk__64433_64437 = G__64449;
count__64434_64438 = G__64450;
i__64435_64439 = G__64451;
continue;
} else {
var ns_64452 = cljs.core.first.call(null,seq__64432_64446__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_64452);

var G__64453 = cljs.core.next.call(null,seq__64432_64446__$1);
var G__64454 = null;
var G__64455 = (0);
var G__64456 = (0);
seq__64432_64436 = G__64453;
chunk__64433_64437 = G__64454;
count__64434_64438 = G__64455;
i__64435_64439 = G__64456;
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
goog.require_figwheel_backup_ = (function (){var or__34227__auto__ = goog.require__;
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
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
var G__64457__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__64457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64458__i = 0, G__64458__a = new Array(arguments.length -  0);
while (G__64458__i < G__64458__a.length) {G__64458__a[G__64458__i] = arguments[G__64458__i + 0]; ++G__64458__i;}
  args = new cljs.core.IndexedSeq(G__64458__a,0);
} 
return G__64457__delegate.call(this,args);};
G__64457.cljs$lang$maxFixedArity = 0;
G__64457.cljs$lang$applyTo = (function (arglist__64459){
var args = cljs.core.seq(arglist__64459);
return G__64457__delegate(args);
});
G__64457.cljs$core$IFn$_invoke$arity$variadic = G__64457__delegate;
return G__64457;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__64461 = cljs.core._EQ_;
var expr__64462 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__64461.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__64462))){
var path_parts = ((function (pred__64461,expr__64462){
return (function (p1__64460_SHARP_){
return clojure.string.split.call(null,p1__64460_SHARP_,/[\/\\]/);
});})(pred__64461,expr__64462))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__64461,expr__64462){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e64464){if((e64464 instanceof Error)){
var e = e64464;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e64464;

}
}})());
});
;})(path_parts,sep,root,pred__64461,expr__64462))
} else {
if(cljs.core.truth_(pred__64461.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__64462))){
return ((function (pred__64461,expr__64462){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__64461,expr__64462){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__64461,expr__64462))
);

return deferred.addErrback(((function (deferred,pred__64461,expr__64462){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__64461,expr__64462))
);
});
;})(pred__64461,expr__64462))
} else {
return ((function (pred__64461,expr__64462){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__64461,expr__64462))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__64465,callback){
var map__64468 = p__64465;
var map__64468__$1 = ((((!((map__64468 == null)))?((((map__64468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64468):map__64468);
var file_msg = map__64468__$1;
var request_url = cljs.core.get.call(null,map__64468__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__64468,map__64468__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__64468,map__64468__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__){
return (function (state_64492){
var state_val_64493 = (state_64492[(1)]);
if((state_val_64493 === (7))){
var inst_64488 = (state_64492[(2)]);
var state_64492__$1 = state_64492;
var statearr_64494_64514 = state_64492__$1;
(statearr_64494_64514[(2)] = inst_64488);

(statearr_64494_64514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64493 === (1))){
var state_64492__$1 = state_64492;
var statearr_64495_64515 = state_64492__$1;
(statearr_64495_64515[(2)] = null);

(statearr_64495_64515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64493 === (4))){
var inst_64472 = (state_64492[(7)]);
var inst_64472__$1 = (state_64492[(2)]);
var state_64492__$1 = (function (){var statearr_64496 = state_64492;
(statearr_64496[(7)] = inst_64472__$1);

return statearr_64496;
})();
if(cljs.core.truth_(inst_64472__$1)){
var statearr_64497_64516 = state_64492__$1;
(statearr_64497_64516[(1)] = (5));

} else {
var statearr_64498_64517 = state_64492__$1;
(statearr_64498_64517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64493 === (6))){
var state_64492__$1 = state_64492;
var statearr_64499_64518 = state_64492__$1;
(statearr_64499_64518[(2)] = null);

(statearr_64499_64518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64493 === (3))){
var inst_64490 = (state_64492[(2)]);
var state_64492__$1 = state_64492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64492__$1,inst_64490);
} else {
if((state_val_64493 === (2))){
var state_64492__$1 = state_64492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64492__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_64493 === (11))){
var inst_64484 = (state_64492[(2)]);
var state_64492__$1 = (function (){var statearr_64500 = state_64492;
(statearr_64500[(8)] = inst_64484);

return statearr_64500;
})();
var statearr_64501_64519 = state_64492__$1;
(statearr_64501_64519[(2)] = null);

(statearr_64501_64519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64493 === (9))){
var inst_64478 = (state_64492[(9)]);
var inst_64476 = (state_64492[(10)]);
var inst_64480 = inst_64478.call(null,inst_64476);
var state_64492__$1 = state_64492;
var statearr_64502_64520 = state_64492__$1;
(statearr_64502_64520[(2)] = inst_64480);

(statearr_64502_64520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64493 === (5))){
var inst_64472 = (state_64492[(7)]);
var inst_64474 = figwheel.client.file_reloading.blocking_load.call(null,inst_64472);
var state_64492__$1 = state_64492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64492__$1,(8),inst_64474);
} else {
if((state_val_64493 === (10))){
var inst_64476 = (state_64492[(10)]);
var inst_64482 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_64476);
var state_64492__$1 = state_64492;
var statearr_64503_64521 = state_64492__$1;
(statearr_64503_64521[(2)] = inst_64482);

(statearr_64503_64521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64493 === (8))){
var inst_64478 = (state_64492[(9)]);
var inst_64472 = (state_64492[(7)]);
var inst_64476 = (state_64492[(2)]);
var inst_64477 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_64478__$1 = cljs.core.get.call(null,inst_64477,inst_64472);
var state_64492__$1 = (function (){var statearr_64504 = state_64492;
(statearr_64504[(9)] = inst_64478__$1);

(statearr_64504[(10)] = inst_64476);

return statearr_64504;
})();
if(cljs.core.truth_(inst_64478__$1)){
var statearr_64505_64522 = state_64492__$1;
(statearr_64505_64522[(1)] = (9));

} else {
var statearr_64506_64523 = state_64492__$1;
(statearr_64506_64523[(1)] = (10));

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
});})(c__42763__auto__))
;
return ((function (switch__42740__auto__,c__42763__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__42741__auto__ = null;
var figwheel$client$file_reloading$state_machine__42741__auto____0 = (function (){
var statearr_64510 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64510[(0)] = figwheel$client$file_reloading$state_machine__42741__auto__);

(statearr_64510[(1)] = (1));

return statearr_64510;
});
var figwheel$client$file_reloading$state_machine__42741__auto____1 = (function (state_64492){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_64492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e64511){if((e64511 instanceof Object)){
var ex__42744__auto__ = e64511;
var statearr_64512_64524 = state_64492;
(statearr_64512_64524[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64525 = state_64492;
state_64492 = G__64525;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__42741__auto__ = function(state_64492){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__42741__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__42741__auto____1.call(this,state_64492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__42741__auto____0;
figwheel$client$file_reloading$state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__42741__auto____1;
return figwheel$client$file_reloading$state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__))
})();
var state__42765__auto__ = (function (){var statearr_64513 = f__42764__auto__.call(null);
(statearr_64513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_64513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__))
);

return c__42763__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__64526,callback){
var map__64529 = p__64526;
var map__64529__$1 = ((((!((map__64529 == null)))?((((map__64529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64529):map__64529);
var file_msg = map__64529__$1;
var namespace = cljs.core.get.call(null,map__64529__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__64529,map__64529__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__64529,map__64529__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__64531){
var map__64534 = p__64531;
var map__64534__$1 = ((((!((map__64534 == null)))?((((map__64534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64534):map__64534);
var file_msg = map__64534__$1;
var namespace = cljs.core.get.call(null,map__64534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__34215__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__34215__auto__){
var or__34227__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
} else {
var or__34227__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34227__auto____$1)){
return or__34227__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__34215__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__64536,callback){
var map__64539 = p__64536;
var map__64539__$1 = ((((!((map__64539 == null)))?((((map__64539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64539):map__64539);
var file_msg = map__64539__$1;
var request_url = cljs.core.get.call(null,map__64539__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__64539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__42763__auto___64643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto___64643,out){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto___64643,out){
return (function (state_64625){
var state_val_64626 = (state_64625[(1)]);
if((state_val_64626 === (1))){
var inst_64599 = cljs.core.seq.call(null,files);
var inst_64600 = cljs.core.first.call(null,inst_64599);
var inst_64601 = cljs.core.next.call(null,inst_64599);
var inst_64602 = files;
var state_64625__$1 = (function (){var statearr_64627 = state_64625;
(statearr_64627[(7)] = inst_64601);

(statearr_64627[(8)] = inst_64600);

(statearr_64627[(9)] = inst_64602);

return statearr_64627;
})();
var statearr_64628_64644 = state_64625__$1;
(statearr_64628_64644[(2)] = null);

(statearr_64628_64644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64626 === (2))){
var inst_64608 = (state_64625[(10)]);
var inst_64602 = (state_64625[(9)]);
var inst_64607 = cljs.core.seq.call(null,inst_64602);
var inst_64608__$1 = cljs.core.first.call(null,inst_64607);
var inst_64609 = cljs.core.next.call(null,inst_64607);
var inst_64610 = (inst_64608__$1 == null);
var inst_64611 = cljs.core.not.call(null,inst_64610);
var state_64625__$1 = (function (){var statearr_64629 = state_64625;
(statearr_64629[(10)] = inst_64608__$1);

(statearr_64629[(11)] = inst_64609);

return statearr_64629;
})();
if(inst_64611){
var statearr_64630_64645 = state_64625__$1;
(statearr_64630_64645[(1)] = (4));

} else {
var statearr_64631_64646 = state_64625__$1;
(statearr_64631_64646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64626 === (3))){
var inst_64623 = (state_64625[(2)]);
var state_64625__$1 = state_64625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64625__$1,inst_64623);
} else {
if((state_val_64626 === (4))){
var inst_64608 = (state_64625[(10)]);
var inst_64613 = figwheel.client.file_reloading.reload_js_file.call(null,inst_64608);
var state_64625__$1 = state_64625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64625__$1,(7),inst_64613);
} else {
if((state_val_64626 === (5))){
var inst_64619 = cljs.core.async.close_BANG_.call(null,out);
var state_64625__$1 = state_64625;
var statearr_64632_64647 = state_64625__$1;
(statearr_64632_64647[(2)] = inst_64619);

(statearr_64632_64647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64626 === (6))){
var inst_64621 = (state_64625[(2)]);
var state_64625__$1 = state_64625;
var statearr_64633_64648 = state_64625__$1;
(statearr_64633_64648[(2)] = inst_64621);

(statearr_64633_64648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64626 === (7))){
var inst_64609 = (state_64625[(11)]);
var inst_64615 = (state_64625[(2)]);
var inst_64616 = cljs.core.async.put_BANG_.call(null,out,inst_64615);
var inst_64602 = inst_64609;
var state_64625__$1 = (function (){var statearr_64634 = state_64625;
(statearr_64634[(9)] = inst_64602);

(statearr_64634[(12)] = inst_64616);

return statearr_64634;
})();
var statearr_64635_64649 = state_64625__$1;
(statearr_64635_64649[(2)] = null);

(statearr_64635_64649[(1)] = (2));


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
});})(c__42763__auto___64643,out))
;
return ((function (switch__42740__auto__,c__42763__auto___64643,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto____0 = (function (){
var statearr_64639 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64639[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto__);

(statearr_64639[(1)] = (1));

return statearr_64639;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto____1 = (function (state_64625){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_64625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e64640){if((e64640 instanceof Object)){
var ex__42744__auto__ = e64640;
var statearr_64641_64650 = state_64625;
(statearr_64641_64650[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64651 = state_64625;
state_64625 = G__64651;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto__ = function(state_64625){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto____1.call(this,state_64625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto___64643,out))
})();
var state__42765__auto__ = (function (){var statearr_64642 = f__42764__auto__.call(null);
(statearr_64642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto___64643);

return statearr_64642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto___64643,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__64652,opts){
var map__64656 = p__64652;
var map__64656__$1 = ((((!((map__64656 == null)))?((((map__64656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64656):map__64656);
var eval_body__$1 = cljs.core.get.call(null,map__64656__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__64656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__34215__auto__ = eval_body__$1;
if(cljs.core.truth_(and__34215__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__34215__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e64658){var e = e64658;
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
return (function (p1__64659_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__64659_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__64668){
var vec__64669 = p__64668;
var k = cljs.core.nth.call(null,vec__64669,(0),null);
var v = cljs.core.nth.call(null,vec__64669,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__64672){
var vec__64673 = p__64672;
var k = cljs.core.nth.call(null,vec__64673,(0),null);
var v = cljs.core.nth.call(null,vec__64673,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__64679,p__64680){
var map__64927 = p__64679;
var map__64927__$1 = ((((!((map__64927 == null)))?((((map__64927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64927):map__64927);
var opts = map__64927__$1;
var before_jsload = cljs.core.get.call(null,map__64927__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__64927__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__64927__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__64928 = p__64680;
var map__64928__$1 = ((((!((map__64928 == null)))?((((map__64928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64928):map__64928);
var msg = map__64928__$1;
var files = cljs.core.get.call(null,map__64928__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__64928__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__64928__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__42763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__42764__auto__ = (function (){var switch__42740__auto__ = ((function (c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_65081){
var state_val_65082 = (state_65081[(1)]);
if((state_val_65082 === (7))){
var inst_64943 = (state_65081[(7)]);
var inst_64944 = (state_65081[(8)]);
var inst_64945 = (state_65081[(9)]);
var inst_64942 = (state_65081[(10)]);
var inst_64950 = cljs.core._nth.call(null,inst_64943,inst_64945);
var inst_64951 = figwheel.client.file_reloading.eval_body.call(null,inst_64950,opts);
var inst_64952 = (inst_64945 + (1));
var tmp65083 = inst_64943;
var tmp65084 = inst_64944;
var tmp65085 = inst_64942;
var inst_64942__$1 = tmp65085;
var inst_64943__$1 = tmp65083;
var inst_64944__$1 = tmp65084;
var inst_64945__$1 = inst_64952;
var state_65081__$1 = (function (){var statearr_65086 = state_65081;
(statearr_65086[(7)] = inst_64943__$1);

(statearr_65086[(8)] = inst_64944__$1);

(statearr_65086[(11)] = inst_64951);

(statearr_65086[(9)] = inst_64945__$1);

(statearr_65086[(10)] = inst_64942__$1);

return statearr_65086;
})();
var statearr_65087_65173 = state_65081__$1;
(statearr_65087_65173[(2)] = null);

(statearr_65087_65173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (20))){
var inst_64985 = (state_65081[(12)]);
var inst_64993 = figwheel.client.file_reloading.sort_files.call(null,inst_64985);
var state_65081__$1 = state_65081;
var statearr_65088_65174 = state_65081__$1;
(statearr_65088_65174[(2)] = inst_64993);

(statearr_65088_65174[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (27))){
var state_65081__$1 = state_65081;
var statearr_65089_65175 = state_65081__$1;
(statearr_65089_65175[(2)] = null);

(statearr_65089_65175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (1))){
var inst_64934 = (state_65081[(13)]);
var inst_64931 = before_jsload.call(null,files);
var inst_64932 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_64933 = (function (){return ((function (inst_64934,inst_64931,inst_64932,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__64676_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__64676_SHARP_);
});
;})(inst_64934,inst_64931,inst_64932,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64934__$1 = cljs.core.filter.call(null,inst_64933,files);
var inst_64935 = cljs.core.not_empty.call(null,inst_64934__$1);
var state_65081__$1 = (function (){var statearr_65090 = state_65081;
(statearr_65090[(14)] = inst_64931);

(statearr_65090[(15)] = inst_64932);

(statearr_65090[(13)] = inst_64934__$1);

return statearr_65090;
})();
if(cljs.core.truth_(inst_64935)){
var statearr_65091_65176 = state_65081__$1;
(statearr_65091_65176[(1)] = (2));

} else {
var statearr_65092_65177 = state_65081__$1;
(statearr_65092_65177[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (24))){
var state_65081__$1 = state_65081;
var statearr_65093_65178 = state_65081__$1;
(statearr_65093_65178[(2)] = null);

(statearr_65093_65178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (39))){
var inst_65035 = (state_65081[(16)]);
var state_65081__$1 = state_65081;
var statearr_65094_65179 = state_65081__$1;
(statearr_65094_65179[(2)] = inst_65035);

(statearr_65094_65179[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (46))){
var inst_65076 = (state_65081[(2)]);
var state_65081__$1 = state_65081;
var statearr_65095_65180 = state_65081__$1;
(statearr_65095_65180[(2)] = inst_65076);

(statearr_65095_65180[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (4))){
var inst_64979 = (state_65081[(2)]);
var inst_64980 = cljs.core.List.EMPTY;
var inst_64981 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_64980);
var inst_64982 = (function (){return ((function (inst_64979,inst_64980,inst_64981,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__64677_SHARP_){
var and__34215__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__64677_SHARP_);
if(cljs.core.truth_(and__34215__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__64677_SHARP_));
} else {
return and__34215__auto__;
}
});
;})(inst_64979,inst_64980,inst_64981,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64983 = cljs.core.filter.call(null,inst_64982,files);
var inst_64984 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_64985 = cljs.core.concat.call(null,inst_64983,inst_64984);
var state_65081__$1 = (function (){var statearr_65096 = state_65081;
(statearr_65096[(12)] = inst_64985);

(statearr_65096[(17)] = inst_64981);

(statearr_65096[(18)] = inst_64979);

return statearr_65096;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_65097_65181 = state_65081__$1;
(statearr_65097_65181[(1)] = (16));

} else {
var statearr_65098_65182 = state_65081__$1;
(statearr_65098_65182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (15))){
var inst_64969 = (state_65081[(2)]);
var state_65081__$1 = state_65081;
var statearr_65099_65183 = state_65081__$1;
(statearr_65099_65183[(2)] = inst_64969);

(statearr_65099_65183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (21))){
var inst_64995 = (state_65081[(19)]);
var inst_64995__$1 = (state_65081[(2)]);
var inst_64996 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_64995__$1);
var state_65081__$1 = (function (){var statearr_65100 = state_65081;
(statearr_65100[(19)] = inst_64995__$1);

return statearr_65100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65081__$1,(22),inst_64996);
} else {
if((state_val_65082 === (31))){
var inst_65079 = (state_65081[(2)]);
var state_65081__$1 = state_65081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65081__$1,inst_65079);
} else {
if((state_val_65082 === (32))){
var inst_65035 = (state_65081[(16)]);
var inst_65040 = inst_65035.cljs$lang$protocol_mask$partition0$;
var inst_65041 = (inst_65040 & (64));
var inst_65042 = inst_65035.cljs$core$ISeq$;
var inst_65043 = (inst_65041) || (inst_65042);
var state_65081__$1 = state_65081;
if(cljs.core.truth_(inst_65043)){
var statearr_65101_65184 = state_65081__$1;
(statearr_65101_65184[(1)] = (35));

} else {
var statearr_65102_65185 = state_65081__$1;
(statearr_65102_65185[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (40))){
var inst_65056 = (state_65081[(20)]);
var inst_65055 = (state_65081[(2)]);
var inst_65056__$1 = cljs.core.get.call(null,inst_65055,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_65057 = cljs.core.get.call(null,inst_65055,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_65058 = cljs.core.not_empty.call(null,inst_65056__$1);
var state_65081__$1 = (function (){var statearr_65103 = state_65081;
(statearr_65103[(20)] = inst_65056__$1);

(statearr_65103[(21)] = inst_65057);

return statearr_65103;
})();
if(cljs.core.truth_(inst_65058)){
var statearr_65104_65186 = state_65081__$1;
(statearr_65104_65186[(1)] = (41));

} else {
var statearr_65105_65187 = state_65081__$1;
(statearr_65105_65187[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (33))){
var state_65081__$1 = state_65081;
var statearr_65106_65188 = state_65081__$1;
(statearr_65106_65188[(2)] = false);

(statearr_65106_65188[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (13))){
var inst_64955 = (state_65081[(22)]);
var inst_64959 = cljs.core.chunk_first.call(null,inst_64955);
var inst_64960 = cljs.core.chunk_rest.call(null,inst_64955);
var inst_64961 = cljs.core.count.call(null,inst_64959);
var inst_64942 = inst_64960;
var inst_64943 = inst_64959;
var inst_64944 = inst_64961;
var inst_64945 = (0);
var state_65081__$1 = (function (){var statearr_65107 = state_65081;
(statearr_65107[(7)] = inst_64943);

(statearr_65107[(8)] = inst_64944);

(statearr_65107[(9)] = inst_64945);

(statearr_65107[(10)] = inst_64942);

return statearr_65107;
})();
var statearr_65108_65189 = state_65081__$1;
(statearr_65108_65189[(2)] = null);

(statearr_65108_65189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (22))){
var inst_64995 = (state_65081[(19)]);
var inst_64999 = (state_65081[(23)]);
var inst_65003 = (state_65081[(24)]);
var inst_64998 = (state_65081[(25)]);
var inst_64998__$1 = (state_65081[(2)]);
var inst_64999__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_64998__$1);
var inst_65000 = (function (){var all_files = inst_64995;
var res_SINGLEQUOTE_ = inst_64998__$1;
var res = inst_64999__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_64995,inst_64999,inst_65003,inst_64998,inst_64998__$1,inst_64999__$1,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__64678_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__64678_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_64995,inst_64999,inst_65003,inst_64998,inst_64998__$1,inst_64999__$1,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65001 = cljs.core.filter.call(null,inst_65000,inst_64998__$1);
var inst_65002 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_65003__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_65002);
var inst_65004 = cljs.core.not_empty.call(null,inst_65003__$1);
var state_65081__$1 = (function (){var statearr_65109 = state_65081;
(statearr_65109[(23)] = inst_64999__$1);

(statearr_65109[(24)] = inst_65003__$1);

(statearr_65109[(26)] = inst_65001);

(statearr_65109[(25)] = inst_64998__$1);

return statearr_65109;
})();
if(cljs.core.truth_(inst_65004)){
var statearr_65110_65190 = state_65081__$1;
(statearr_65110_65190[(1)] = (23));

} else {
var statearr_65111_65191 = state_65081__$1;
(statearr_65111_65191[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (36))){
var state_65081__$1 = state_65081;
var statearr_65112_65192 = state_65081__$1;
(statearr_65112_65192[(2)] = false);

(statearr_65112_65192[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (41))){
var inst_65056 = (state_65081[(20)]);
var inst_65060 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_65061 = cljs.core.map.call(null,inst_65060,inst_65056);
var inst_65062 = cljs.core.pr_str.call(null,inst_65061);
var inst_65063 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_65062)].join('');
var inst_65064 = figwheel.client.utils.log.call(null,inst_65063);
var state_65081__$1 = state_65081;
var statearr_65113_65193 = state_65081__$1;
(statearr_65113_65193[(2)] = inst_65064);

(statearr_65113_65193[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (43))){
var inst_65057 = (state_65081[(21)]);
var inst_65067 = (state_65081[(2)]);
var inst_65068 = cljs.core.not_empty.call(null,inst_65057);
var state_65081__$1 = (function (){var statearr_65114 = state_65081;
(statearr_65114[(27)] = inst_65067);

return statearr_65114;
})();
if(cljs.core.truth_(inst_65068)){
var statearr_65115_65194 = state_65081__$1;
(statearr_65115_65194[(1)] = (44));

} else {
var statearr_65116_65195 = state_65081__$1;
(statearr_65116_65195[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (29))){
var inst_64995 = (state_65081[(19)]);
var inst_64999 = (state_65081[(23)]);
var inst_65035 = (state_65081[(16)]);
var inst_65003 = (state_65081[(24)]);
var inst_65001 = (state_65081[(26)]);
var inst_64998 = (state_65081[(25)]);
var inst_65031 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_65034 = (function (){var all_files = inst_64995;
var res_SINGLEQUOTE_ = inst_64998;
var res = inst_64999;
var files_not_loaded = inst_65001;
var dependencies_that_loaded = inst_65003;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64995,inst_64999,inst_65035,inst_65003,inst_65001,inst_64998,inst_65031,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65033){
var map__65117 = p__65033;
var map__65117__$1 = ((((!((map__65117 == null)))?((((map__65117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65117):map__65117);
var namespace = cljs.core.get.call(null,map__65117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64995,inst_64999,inst_65035,inst_65003,inst_65001,inst_64998,inst_65031,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65035__$1 = cljs.core.group_by.call(null,inst_65034,inst_65001);
var inst_65037 = (inst_65035__$1 == null);
var inst_65038 = cljs.core.not.call(null,inst_65037);
var state_65081__$1 = (function (){var statearr_65119 = state_65081;
(statearr_65119[(28)] = inst_65031);

(statearr_65119[(16)] = inst_65035__$1);

return statearr_65119;
})();
if(inst_65038){
var statearr_65120_65196 = state_65081__$1;
(statearr_65120_65196[(1)] = (32));

} else {
var statearr_65121_65197 = state_65081__$1;
(statearr_65121_65197[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (44))){
var inst_65057 = (state_65081[(21)]);
var inst_65070 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_65057);
var inst_65071 = cljs.core.pr_str.call(null,inst_65070);
var inst_65072 = [cljs.core.str("not required: "),cljs.core.str(inst_65071)].join('');
var inst_65073 = figwheel.client.utils.log.call(null,inst_65072);
var state_65081__$1 = state_65081;
var statearr_65122_65198 = state_65081__$1;
(statearr_65122_65198[(2)] = inst_65073);

(statearr_65122_65198[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (6))){
var inst_64976 = (state_65081[(2)]);
var state_65081__$1 = state_65081;
var statearr_65123_65199 = state_65081__$1;
(statearr_65123_65199[(2)] = inst_64976);

(statearr_65123_65199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (28))){
var inst_65001 = (state_65081[(26)]);
var inst_65028 = (state_65081[(2)]);
var inst_65029 = cljs.core.not_empty.call(null,inst_65001);
var state_65081__$1 = (function (){var statearr_65124 = state_65081;
(statearr_65124[(29)] = inst_65028);

return statearr_65124;
})();
if(cljs.core.truth_(inst_65029)){
var statearr_65125_65200 = state_65081__$1;
(statearr_65125_65200[(1)] = (29));

} else {
var statearr_65126_65201 = state_65081__$1;
(statearr_65126_65201[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (25))){
var inst_64999 = (state_65081[(23)]);
var inst_65015 = (state_65081[(2)]);
var inst_65016 = cljs.core.not_empty.call(null,inst_64999);
var state_65081__$1 = (function (){var statearr_65127 = state_65081;
(statearr_65127[(30)] = inst_65015);

return statearr_65127;
})();
if(cljs.core.truth_(inst_65016)){
var statearr_65128_65202 = state_65081__$1;
(statearr_65128_65202[(1)] = (26));

} else {
var statearr_65129_65203 = state_65081__$1;
(statearr_65129_65203[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (34))){
var inst_65050 = (state_65081[(2)]);
var state_65081__$1 = state_65081;
if(cljs.core.truth_(inst_65050)){
var statearr_65130_65204 = state_65081__$1;
(statearr_65130_65204[(1)] = (38));

} else {
var statearr_65131_65205 = state_65081__$1;
(statearr_65131_65205[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (17))){
var state_65081__$1 = state_65081;
var statearr_65132_65206 = state_65081__$1;
(statearr_65132_65206[(2)] = recompile_dependents);

(statearr_65132_65206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (3))){
var state_65081__$1 = state_65081;
var statearr_65133_65207 = state_65081__$1;
(statearr_65133_65207[(2)] = null);

(statearr_65133_65207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (12))){
var inst_64972 = (state_65081[(2)]);
var state_65081__$1 = state_65081;
var statearr_65134_65208 = state_65081__$1;
(statearr_65134_65208[(2)] = inst_64972);

(statearr_65134_65208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (2))){
var inst_64934 = (state_65081[(13)]);
var inst_64941 = cljs.core.seq.call(null,inst_64934);
var inst_64942 = inst_64941;
var inst_64943 = null;
var inst_64944 = (0);
var inst_64945 = (0);
var state_65081__$1 = (function (){var statearr_65135 = state_65081;
(statearr_65135[(7)] = inst_64943);

(statearr_65135[(8)] = inst_64944);

(statearr_65135[(9)] = inst_64945);

(statearr_65135[(10)] = inst_64942);

return statearr_65135;
})();
var statearr_65136_65209 = state_65081__$1;
(statearr_65136_65209[(2)] = null);

(statearr_65136_65209[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (23))){
var inst_64995 = (state_65081[(19)]);
var inst_64999 = (state_65081[(23)]);
var inst_65003 = (state_65081[(24)]);
var inst_65001 = (state_65081[(26)]);
var inst_64998 = (state_65081[(25)]);
var inst_65006 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_65008 = (function (){var all_files = inst_64995;
var res_SINGLEQUOTE_ = inst_64998;
var res = inst_64999;
var files_not_loaded = inst_65001;
var dependencies_that_loaded = inst_65003;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64995,inst_64999,inst_65003,inst_65001,inst_64998,inst_65006,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65007){
var map__65137 = p__65007;
var map__65137__$1 = ((((!((map__65137 == null)))?((((map__65137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65137):map__65137);
var request_url = cljs.core.get.call(null,map__65137__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64995,inst_64999,inst_65003,inst_65001,inst_64998,inst_65006,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65009 = cljs.core.reverse.call(null,inst_65003);
var inst_65010 = cljs.core.map.call(null,inst_65008,inst_65009);
var inst_65011 = cljs.core.pr_str.call(null,inst_65010);
var inst_65012 = figwheel.client.utils.log.call(null,inst_65011);
var state_65081__$1 = (function (){var statearr_65139 = state_65081;
(statearr_65139[(31)] = inst_65006);

return statearr_65139;
})();
var statearr_65140_65210 = state_65081__$1;
(statearr_65140_65210[(2)] = inst_65012);

(statearr_65140_65210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (35))){
var state_65081__$1 = state_65081;
var statearr_65141_65211 = state_65081__$1;
(statearr_65141_65211[(2)] = true);

(statearr_65141_65211[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (19))){
var inst_64985 = (state_65081[(12)]);
var inst_64991 = figwheel.client.file_reloading.expand_files.call(null,inst_64985);
var state_65081__$1 = state_65081;
var statearr_65142_65212 = state_65081__$1;
(statearr_65142_65212[(2)] = inst_64991);

(statearr_65142_65212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (11))){
var state_65081__$1 = state_65081;
var statearr_65143_65213 = state_65081__$1;
(statearr_65143_65213[(2)] = null);

(statearr_65143_65213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (9))){
var inst_64974 = (state_65081[(2)]);
var state_65081__$1 = state_65081;
var statearr_65144_65214 = state_65081__$1;
(statearr_65144_65214[(2)] = inst_64974);

(statearr_65144_65214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (5))){
var inst_64944 = (state_65081[(8)]);
var inst_64945 = (state_65081[(9)]);
var inst_64947 = (inst_64945 < inst_64944);
var inst_64948 = inst_64947;
var state_65081__$1 = state_65081;
if(cljs.core.truth_(inst_64948)){
var statearr_65145_65215 = state_65081__$1;
(statearr_65145_65215[(1)] = (7));

} else {
var statearr_65146_65216 = state_65081__$1;
(statearr_65146_65216[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (14))){
var inst_64955 = (state_65081[(22)]);
var inst_64964 = cljs.core.first.call(null,inst_64955);
var inst_64965 = figwheel.client.file_reloading.eval_body.call(null,inst_64964,opts);
var inst_64966 = cljs.core.next.call(null,inst_64955);
var inst_64942 = inst_64966;
var inst_64943 = null;
var inst_64944 = (0);
var inst_64945 = (0);
var state_65081__$1 = (function (){var statearr_65147 = state_65081;
(statearr_65147[(32)] = inst_64965);

(statearr_65147[(7)] = inst_64943);

(statearr_65147[(8)] = inst_64944);

(statearr_65147[(9)] = inst_64945);

(statearr_65147[(10)] = inst_64942);

return statearr_65147;
})();
var statearr_65148_65217 = state_65081__$1;
(statearr_65148_65217[(2)] = null);

(statearr_65148_65217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (45))){
var state_65081__$1 = state_65081;
var statearr_65149_65218 = state_65081__$1;
(statearr_65149_65218[(2)] = null);

(statearr_65149_65218[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (26))){
var inst_64995 = (state_65081[(19)]);
var inst_64999 = (state_65081[(23)]);
var inst_65003 = (state_65081[(24)]);
var inst_65001 = (state_65081[(26)]);
var inst_64998 = (state_65081[(25)]);
var inst_65018 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_65020 = (function (){var all_files = inst_64995;
var res_SINGLEQUOTE_ = inst_64998;
var res = inst_64999;
var files_not_loaded = inst_65001;
var dependencies_that_loaded = inst_65003;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64995,inst_64999,inst_65003,inst_65001,inst_64998,inst_65018,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65019){
var map__65150 = p__65019;
var map__65150__$1 = ((((!((map__65150 == null)))?((((map__65150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65150):map__65150);
var namespace = cljs.core.get.call(null,map__65150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__65150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64995,inst_64999,inst_65003,inst_65001,inst_64998,inst_65018,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65021 = cljs.core.map.call(null,inst_65020,inst_64999);
var inst_65022 = cljs.core.pr_str.call(null,inst_65021);
var inst_65023 = figwheel.client.utils.log.call(null,inst_65022);
var inst_65024 = (function (){var all_files = inst_64995;
var res_SINGLEQUOTE_ = inst_64998;
var res = inst_64999;
var files_not_loaded = inst_65001;
var dependencies_that_loaded = inst_65003;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64995,inst_64999,inst_65003,inst_65001,inst_64998,inst_65018,inst_65020,inst_65021,inst_65022,inst_65023,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64995,inst_64999,inst_65003,inst_65001,inst_64998,inst_65018,inst_65020,inst_65021,inst_65022,inst_65023,state_val_65082,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65025 = setTimeout(inst_65024,(10));
var state_65081__$1 = (function (){var statearr_65152 = state_65081;
(statearr_65152[(33)] = inst_65018);

(statearr_65152[(34)] = inst_65023);

return statearr_65152;
})();
var statearr_65153_65219 = state_65081__$1;
(statearr_65153_65219[(2)] = inst_65025);

(statearr_65153_65219[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (16))){
var state_65081__$1 = state_65081;
var statearr_65154_65220 = state_65081__$1;
(statearr_65154_65220[(2)] = reload_dependents);

(statearr_65154_65220[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (38))){
var inst_65035 = (state_65081[(16)]);
var inst_65052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65035);
var state_65081__$1 = state_65081;
var statearr_65155_65221 = state_65081__$1;
(statearr_65155_65221[(2)] = inst_65052);

(statearr_65155_65221[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (30))){
var state_65081__$1 = state_65081;
var statearr_65156_65222 = state_65081__$1;
(statearr_65156_65222[(2)] = null);

(statearr_65156_65222[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (10))){
var inst_64955 = (state_65081[(22)]);
var inst_64957 = cljs.core.chunked_seq_QMARK_.call(null,inst_64955);
var state_65081__$1 = state_65081;
if(inst_64957){
var statearr_65157_65223 = state_65081__$1;
(statearr_65157_65223[(1)] = (13));

} else {
var statearr_65158_65224 = state_65081__$1;
(statearr_65158_65224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (18))){
var inst_64989 = (state_65081[(2)]);
var state_65081__$1 = state_65081;
if(cljs.core.truth_(inst_64989)){
var statearr_65159_65225 = state_65081__$1;
(statearr_65159_65225[(1)] = (19));

} else {
var statearr_65160_65226 = state_65081__$1;
(statearr_65160_65226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (42))){
var state_65081__$1 = state_65081;
var statearr_65161_65227 = state_65081__$1;
(statearr_65161_65227[(2)] = null);

(statearr_65161_65227[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (37))){
var inst_65047 = (state_65081[(2)]);
var state_65081__$1 = state_65081;
var statearr_65162_65228 = state_65081__$1;
(statearr_65162_65228[(2)] = inst_65047);

(statearr_65162_65228[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65082 === (8))){
var inst_64955 = (state_65081[(22)]);
var inst_64942 = (state_65081[(10)]);
var inst_64955__$1 = cljs.core.seq.call(null,inst_64942);
var state_65081__$1 = (function (){var statearr_65163 = state_65081;
(statearr_65163[(22)] = inst_64955__$1);

return statearr_65163;
})();
if(inst_64955__$1){
var statearr_65164_65229 = state_65081__$1;
(statearr_65164_65229[(1)] = (10));

} else {
var statearr_65165_65230 = state_65081__$1;
(statearr_65165_65230[(1)] = (11));

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
});})(c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__42740__auto__,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto____0 = (function (){
var statearr_65169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65169[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto__);

(statearr_65169[(1)] = (1));

return statearr_65169;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto____1 = (function (state_65081){
while(true){
var ret_value__42742__auto__ = (function (){try{while(true){
var result__42743__auto__ = switch__42740__auto__.call(null,state_65081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42743__auto__;
}
break;
}
}catch (e65170){if((e65170 instanceof Object)){
var ex__42744__auto__ = e65170;
var statearr_65171_65231 = state_65081;
(statearr_65171_65231[(5)] = ex__42744__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65232 = state_65081;
state_65081 = G__65232;
continue;
} else {
return ret_value__42742__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto__ = function(state_65081){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto____1.call(this,state_65081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42741__auto__;
})()
;})(switch__42740__auto__,c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__42765__auto__ = (function (){var statearr_65172 = f__42764__auto__.call(null);
(statearr_65172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__42763__auto__);

return statearr_65172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42765__auto__);
});})(c__42763__auto__,map__64927,map__64927__$1,opts,before_jsload,on_jsload,reload_dependents,map__64928,map__64928__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__42763__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__65235,link){
var map__65238 = p__65235;
var map__65238__$1 = ((((!((map__65238 == null)))?((((map__65238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65238):map__65238);
var file = cljs.core.get.call(null,map__65238__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6728__auto__ = link.href;
if(cljs.core.truth_(temp__6728__auto__)){
var link_href = temp__6728__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6728__auto__,map__65238,map__65238__$1,file){
return (function (p1__65233_SHARP_,p2__65234_SHARP_){
if(cljs.core._EQ_.call(null,p1__65233_SHARP_,p2__65234_SHARP_)){
return p1__65233_SHARP_;
} else {
return false;
}
});})(link_href,temp__6728__auto__,map__65238,map__65238__$1,file))
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
var temp__6728__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__65244){
var map__65245 = p__65244;
var map__65245__$1 = ((((!((map__65245 == null)))?((((map__65245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65245):map__65245);
var match_length = cljs.core.get.call(null,map__65245__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__65245__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__65240_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__65240_SHARP_);
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
var args65247 = [];
var len__35410__auto___65250 = arguments.length;
var i__35411__auto___65251 = (0);
while(true){
if((i__35411__auto___65251 < len__35410__auto___65250)){
args65247.push((arguments[i__35411__auto___65251]));

var G__65252 = (i__35411__auto___65251 + (1));
i__35411__auto___65251 = G__65252;
continue;
} else {
}
break;
}

var G__65249 = args65247.length;
switch (G__65249) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65247.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__65254_SHARP_,p2__65255_SHARP_){
return cljs.core.assoc.call(null,p1__65254_SHARP_,cljs.core.get.call(null,p2__65255_SHARP_,key),p2__65255_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__65256){
var map__65259 = p__65256;
var map__65259__$1 = ((((!((map__65259 == null)))?((((map__65259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65259):map__65259);
var f_data = map__65259__$1;
var file = cljs.core.get.call(null,map__65259__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6728__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6728__auto__)){
var link = temp__6728__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__65261,files_msg){
var map__65268 = p__65261;
var map__65268__$1 = ((((!((map__65268 == null)))?((((map__65268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65268):map__65268);
var opts = map__65268__$1;
var on_cssload = cljs.core.get.call(null,map__65268__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__65270_65274 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__65271_65275 = null;
var count__65272_65276 = (0);
var i__65273_65277 = (0);
while(true){
if((i__65273_65277 < count__65272_65276)){
var f_65278 = cljs.core._nth.call(null,chunk__65271_65275,i__65273_65277);
figwheel.client.file_reloading.reload_css_file.call(null,f_65278);

var G__65279 = seq__65270_65274;
var G__65280 = chunk__65271_65275;
var G__65281 = count__65272_65276;
var G__65282 = (i__65273_65277 + (1));
seq__65270_65274 = G__65279;
chunk__65271_65275 = G__65280;
count__65272_65276 = G__65281;
i__65273_65277 = G__65282;
continue;
} else {
var temp__6728__auto___65283 = cljs.core.seq.call(null,seq__65270_65274);
if(temp__6728__auto___65283){
var seq__65270_65284__$1 = temp__6728__auto___65283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65270_65284__$1)){
var c__35130__auto___65285 = cljs.core.chunk_first.call(null,seq__65270_65284__$1);
var G__65286 = cljs.core.chunk_rest.call(null,seq__65270_65284__$1);
var G__65287 = c__35130__auto___65285;
var G__65288 = cljs.core.count.call(null,c__35130__auto___65285);
var G__65289 = (0);
seq__65270_65274 = G__65286;
chunk__65271_65275 = G__65287;
count__65272_65276 = G__65288;
i__65273_65277 = G__65289;
continue;
} else {
var f_65290 = cljs.core.first.call(null,seq__65270_65284__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_65290);

var G__65291 = cljs.core.next.call(null,seq__65270_65284__$1);
var G__65292 = null;
var G__65293 = (0);
var G__65294 = (0);
seq__65270_65274 = G__65291;
chunk__65271_65275 = G__65292;
count__65272_65276 = G__65293;
i__65273_65277 = G__65294;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__65268,map__65268__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__65268,map__65268__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1489120093327