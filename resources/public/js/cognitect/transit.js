// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');

cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;


cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});

cljs.core.UUID.prototype.cljs$core$IComparable$ = true;


cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});


com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;


com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;


goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});


com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;


com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});


com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;


com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;


goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});


com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;


com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});


com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;


com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;


com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__65395_65399 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__65396_65400 = null;
var count__65397_65401 = (0);
var i__65398_65402 = (0);
while(true){
if((i__65398_65402 < count__65397_65401)){
var k_65403 = cljs.core._nth.call(null,chunk__65396_65400,i__65398_65402);
var v_65404 = (b[k_65403]);
(a[k_65403] = v_65404);

var G__65405 = seq__65395_65399;
var G__65406 = chunk__65396_65400;
var G__65407 = count__65397_65401;
var G__65408 = (i__65398_65402 + (1));
seq__65395_65399 = G__65405;
chunk__65396_65400 = G__65406;
count__65397_65401 = G__65407;
i__65398_65402 = G__65408;
continue;
} else {
var temp__6728__auto___65409 = cljs.core.seq.call(null,seq__65395_65399);
if(temp__6728__auto___65409){
var seq__65395_65410__$1 = temp__6728__auto___65409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65395_65410__$1)){
var c__35293__auto___65411 = cljs.core.chunk_first.call(null,seq__65395_65410__$1);
var G__65412 = cljs.core.chunk_rest.call(null,seq__65395_65410__$1);
var G__65413 = c__35293__auto___65411;
var G__65414 = cljs.core.count.call(null,c__35293__auto___65411);
var G__65415 = (0);
seq__65395_65399 = G__65412;
chunk__65396_65400 = G__65413;
count__65397_65401 = G__65414;
i__65398_65402 = G__65415;
continue;
} else {
var k_65416 = cljs.core.first.call(null,seq__65395_65410__$1);
var v_65417 = (b[k_65416]);
(a[k_65416] = v_65417);

var G__65418 = cljs.core.next.call(null,seq__65395_65410__$1);
var G__65419 = null;
var G__65420 = (0);
var G__65421 = (0);
seq__65395_65399 = G__65418;
chunk__65396_65400 = G__65419;
count__65397_65401 = G__65420;
i__65398_65402 = G__65421;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args65422 = [];
var len__35573__auto___65425 = arguments.length;
var i__35574__auto___65426 = (0);
while(true){
if((i__35574__auto___65426 < len__35573__auto___65425)){
args65422.push((arguments[i__35574__auto___65426]));

var G__65427 = (i__35574__auto___65426 + (1));
i__35574__auto___65426 = G__65427;
continue;
} else {
}
break;
}

var G__65424 = args65422.length;
switch (G__65424) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65422.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__65429 = (i + (2));
var G__65430 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__65429;
ret = G__65430;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__65431_65435 = cljs.core.seq.call(null,v);
var chunk__65432_65436 = null;
var count__65433_65437 = (0);
var i__65434_65438 = (0);
while(true){
if((i__65434_65438 < count__65433_65437)){
var x_65439 = cljs.core._nth.call(null,chunk__65432_65436,i__65434_65438);
ret.push(x_65439);

var G__65440 = seq__65431_65435;
var G__65441 = chunk__65432_65436;
var G__65442 = count__65433_65437;
var G__65443 = (i__65434_65438 + (1));
seq__65431_65435 = G__65440;
chunk__65432_65436 = G__65441;
count__65433_65437 = G__65442;
i__65434_65438 = G__65443;
continue;
} else {
var temp__6728__auto___65444 = cljs.core.seq.call(null,seq__65431_65435);
if(temp__6728__auto___65444){
var seq__65431_65445__$1 = temp__6728__auto___65444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65431_65445__$1)){
var c__35293__auto___65446 = cljs.core.chunk_first.call(null,seq__65431_65445__$1);
var G__65447 = cljs.core.chunk_rest.call(null,seq__65431_65445__$1);
var G__65448 = c__35293__auto___65446;
var G__65449 = cljs.core.count.call(null,c__35293__auto___65446);
var G__65450 = (0);
seq__65431_65435 = G__65447;
chunk__65432_65436 = G__65448;
count__65433_65437 = G__65449;
i__65434_65438 = G__65450;
continue;
} else {
var x_65451 = cljs.core.first.call(null,seq__65431_65445__$1);
ret.push(x_65451);

var G__65452 = cljs.core.next.call(null,seq__65431_65445__$1);
var G__65453 = null;
var G__65454 = (0);
var G__65455 = (0);
seq__65431_65435 = G__65452;
chunk__65432_65436 = G__65453;
count__65433_65437 = G__65454;
i__65434_65438 = G__65455;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__65456_65460 = cljs.core.seq.call(null,v);
var chunk__65457_65461 = null;
var count__65458_65462 = (0);
var i__65459_65463 = (0);
while(true){
if((i__65459_65463 < count__65458_65462)){
var x_65464 = cljs.core._nth.call(null,chunk__65457_65461,i__65459_65463);
ret.push(x_65464);

var G__65465 = seq__65456_65460;
var G__65466 = chunk__65457_65461;
var G__65467 = count__65458_65462;
var G__65468 = (i__65459_65463 + (1));
seq__65456_65460 = G__65465;
chunk__65457_65461 = G__65466;
count__65458_65462 = G__65467;
i__65459_65463 = G__65468;
continue;
} else {
var temp__6728__auto___65469 = cljs.core.seq.call(null,seq__65456_65460);
if(temp__6728__auto___65469){
var seq__65456_65470__$1 = temp__6728__auto___65469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65456_65470__$1)){
var c__35293__auto___65471 = cljs.core.chunk_first.call(null,seq__65456_65470__$1);
var G__65472 = cljs.core.chunk_rest.call(null,seq__65456_65470__$1);
var G__65473 = c__35293__auto___65471;
var G__65474 = cljs.core.count.call(null,c__35293__auto___65471);
var G__65475 = (0);
seq__65456_65460 = G__65472;
chunk__65457_65461 = G__65473;
count__65458_65462 = G__65474;
i__65459_65463 = G__65475;
continue;
} else {
var x_65476 = cljs.core.first.call(null,seq__65456_65470__$1);
ret.push(x_65476);

var G__65477 = cljs.core.next.call(null,seq__65456_65470__$1);
var G__65478 = null;
var G__65479 = (0);
var G__65480 = (0);
seq__65456_65460 = G__65477;
chunk__65457_65461 = G__65478;
count__65458_65462 = G__65479;
i__65459_65463 = G__65480;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__65481_65485 = cljs.core.seq.call(null,v);
var chunk__65482_65486 = null;
var count__65483_65487 = (0);
var i__65484_65488 = (0);
while(true){
if((i__65484_65488 < count__65483_65487)){
var x_65489 = cljs.core._nth.call(null,chunk__65482_65486,i__65484_65488);
ret.push(x_65489);

var G__65490 = seq__65481_65485;
var G__65491 = chunk__65482_65486;
var G__65492 = count__65483_65487;
var G__65493 = (i__65484_65488 + (1));
seq__65481_65485 = G__65490;
chunk__65482_65486 = G__65491;
count__65483_65487 = G__65492;
i__65484_65488 = G__65493;
continue;
} else {
var temp__6728__auto___65494 = cljs.core.seq.call(null,seq__65481_65485);
if(temp__6728__auto___65494){
var seq__65481_65495__$1 = temp__6728__auto___65494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65481_65495__$1)){
var c__35293__auto___65496 = cljs.core.chunk_first.call(null,seq__65481_65495__$1);
var G__65497 = cljs.core.chunk_rest.call(null,seq__65481_65495__$1);
var G__65498 = c__35293__auto___65496;
var G__65499 = cljs.core.count.call(null,c__35293__auto___65496);
var G__65500 = (0);
seq__65481_65485 = G__65497;
chunk__65482_65486 = G__65498;
count__65483_65487 = G__65499;
i__65484_65488 = G__65500;
continue;
} else {
var x_65501 = cljs.core.first.call(null,seq__65481_65495__$1);
ret.push(x_65501);

var G__65502 = cljs.core.next.call(null,seq__65481_65495__$1);
var G__65503 = null;
var G__65504 = (0);
var G__65505 = (0);
seq__65481_65485 = G__65502;
chunk__65482_65486 = G__65503;
count__65483_65487 = G__65504;
i__65484_65488 = G__65505;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args65506 = [];
var len__35573__auto___65521 = arguments.length;
var i__35574__auto___65522 = (0);
while(true){
if((i__35574__auto___65522 < len__35573__auto___65521)){
args65506.push((arguments[i__35574__auto___65522]));

var G__65523 = (i__35574__auto___65522 + (1));
i__35574__auto___65522 = G__65523;
continue;
} else {
}
break;
}

var G__65508 = args65506.length;
switch (G__65508) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65506.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__65509 = obj;
G__65509.push(kfn.call(null,k),vfn.call(null,v));

return G__65509;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x65510 = cljs.core.clone.call(null,handlers);
x65510.forEach = ((function (x65510,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__65511 = cljs.core.seq.call(null,coll);
var chunk__65512 = null;
var count__65513 = (0);
var i__65514 = (0);
while(true){
if((i__65514 < count__65513)){
var vec__65515 = cljs.core._nth.call(null,chunk__65512,i__65514);
var k = cljs.core.nth.call(null,vec__65515,(0),null);
var v = cljs.core.nth.call(null,vec__65515,(1),null);
f.call(null,v,k);

var G__65525 = seq__65511;
var G__65526 = chunk__65512;
var G__65527 = count__65513;
var G__65528 = (i__65514 + (1));
seq__65511 = G__65525;
chunk__65512 = G__65526;
count__65513 = G__65527;
i__65514 = G__65528;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__65511);
if(temp__6728__auto__){
var seq__65511__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65511__$1)){
var c__35293__auto__ = cljs.core.chunk_first.call(null,seq__65511__$1);
var G__65529 = cljs.core.chunk_rest.call(null,seq__65511__$1);
var G__65530 = c__35293__auto__;
var G__65531 = cljs.core.count.call(null,c__35293__auto__);
var G__65532 = (0);
seq__65511 = G__65529;
chunk__65512 = G__65530;
count__65513 = G__65531;
i__65514 = G__65532;
continue;
} else {
var vec__65518 = cljs.core.first.call(null,seq__65511__$1);
var k = cljs.core.nth.call(null,vec__65518,(0),null);
var v = cljs.core.nth.call(null,vec__65518,(1),null);
f.call(null,v,k);

var G__65533 = cljs.core.next.call(null,seq__65511__$1);
var G__65534 = null;
var G__65535 = (0);
var G__65536 = (0);
seq__65511 = G__65533;
chunk__65512 = G__65534;
count__65513 = G__65535;
i__65514 = G__65536;
continue;
}
} else {
return null;
}
}
break;
}
});})(x65510,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x65510;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args65537 = [];
var len__35573__auto___65543 = arguments.length;
var i__35574__auto___65544 = (0);
while(true){
if((i__35574__auto___65544 < len__35573__auto___65543)){
args65537.push((arguments[i__35574__auto___65544]));

var G__65545 = (i__35574__auto___65544 + (1));
i__35574__auto___65544 = G__65545;
continue;
} else {
}
break;
}

var G__65539 = args65537.length;
switch (G__65539) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65537.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit65540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit65540 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta65541){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta65541 = meta65541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cognitect.transit.t_cognitect$transit65540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65542,meta65541__$1){
var self__ = this;
var _65542__$1 = this;
return (new cognitect.transit.t_cognitect$transit65540(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta65541__$1));
});


cognitect.transit.t_cognitect$transit65540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65542){
var self__ = this;
var _65542__$1 = this;
return self__.meta65541;
});

cognitect.transit.t_cognitect$transit65540.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit65540.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit65540.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit65540.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit65540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta65541","meta65541",203954198,null)], null);
});

cognitect.transit.t_cognitect$transit65540.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit65540.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit65540";

cognitect.transit.t_cognitect$transit65540.cljs$lang$ctorPrWriter = (function (this__35042__auto__,writer__35043__auto__,opt__35044__auto__){
return cljs.core._write.call(null,writer__35043__auto__,"cognitect.transit/t_cognitect$transit65540");
});

cognitect.transit.__GT_t_cognitect$transit65540 = (function cognitect$transit$__GT_t_cognitect$transit65540(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta65541){
return (new cognitect.transit.t_cognitect$transit65540(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta65541));
});

}

return (new cognitect.transit.t_cognitect$transit65540(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__34390__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__34390__auto__)){
return or__34390__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1488154308380