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
var seq__56249_56253 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__56250_56254 = null;
var count__56251_56255 = (0);
var i__56252_56256 = (0);
while(true){
if((i__56252_56256 < count__56251_56255)){
var k_56257 = cljs.core._nth.call(null,chunk__56250_56254,i__56252_56256);
var v_56258 = (b[k_56257]);
(a[k_56257] = v_56258);

var G__56259 = seq__56249_56253;
var G__56260 = chunk__56250_56254;
var G__56261 = count__56251_56255;
var G__56262 = (i__56252_56256 + (1));
seq__56249_56253 = G__56259;
chunk__56250_56254 = G__56260;
count__56251_56255 = G__56261;
i__56252_56256 = G__56262;
continue;
} else {
var temp__4657__auto___56263 = cljs.core.seq.call(null,seq__56249_56253);
if(temp__4657__auto___56263){
var seq__56249_56264__$1 = temp__4657__auto___56263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56249_56264__$1)){
var c__32690__auto___56265 = cljs.core.chunk_first.call(null,seq__56249_56264__$1);
var G__56266 = cljs.core.chunk_rest.call(null,seq__56249_56264__$1);
var G__56267 = c__32690__auto___56265;
var G__56268 = cljs.core.count.call(null,c__32690__auto___56265);
var G__56269 = (0);
seq__56249_56253 = G__56266;
chunk__56250_56254 = G__56267;
count__56251_56255 = G__56268;
i__56252_56256 = G__56269;
continue;
} else {
var k_56270 = cljs.core.first.call(null,seq__56249_56264__$1);
var v_56271 = (b[k_56270]);
(a[k_56270] = v_56271);

var G__56272 = cljs.core.next.call(null,seq__56249_56264__$1);
var G__56273 = null;
var G__56274 = (0);
var G__56275 = (0);
seq__56249_56253 = G__56272;
chunk__56250_56254 = G__56273;
count__56251_56255 = G__56274;
i__56252_56256 = G__56275;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cognitect.transit/VectorBuilder");
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
var args56276 = [];
var len__32954__auto___56279 = arguments.length;
var i__32955__auto___56280 = (0);
while(true){
if((i__32955__auto___56280 < len__32954__auto___56279)){
args56276.push((arguments[i__32955__auto___56280]));

var G__56281 = (i__32955__auto___56280 + (1));
i__32955__auto___56280 = G__56281;
continue;
} else {
}
break;
}

var G__56278 = args56276.length;
switch (G__56278) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56276.length)].join('')));

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
var G__56283 = (i + (2));
var G__56284 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__56283;
ret = G__56284;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cognitect.transit/SymbolHandler");
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
var seq__56285_56289 = cljs.core.seq.call(null,v);
var chunk__56286_56290 = null;
var count__56287_56291 = (0);
var i__56288_56292 = (0);
while(true){
if((i__56288_56292 < count__56287_56291)){
var x_56293 = cljs.core._nth.call(null,chunk__56286_56290,i__56288_56292);
ret.push(x_56293);

var G__56294 = seq__56285_56289;
var G__56295 = chunk__56286_56290;
var G__56296 = count__56287_56291;
var G__56297 = (i__56288_56292 + (1));
seq__56285_56289 = G__56294;
chunk__56286_56290 = G__56295;
count__56287_56291 = G__56296;
i__56288_56292 = G__56297;
continue;
} else {
var temp__4657__auto___56298 = cljs.core.seq.call(null,seq__56285_56289);
if(temp__4657__auto___56298){
var seq__56285_56299__$1 = temp__4657__auto___56298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56285_56299__$1)){
var c__32690__auto___56300 = cljs.core.chunk_first.call(null,seq__56285_56299__$1);
var G__56301 = cljs.core.chunk_rest.call(null,seq__56285_56299__$1);
var G__56302 = c__32690__auto___56300;
var G__56303 = cljs.core.count.call(null,c__32690__auto___56300);
var G__56304 = (0);
seq__56285_56289 = G__56301;
chunk__56286_56290 = G__56302;
count__56287_56291 = G__56303;
i__56288_56292 = G__56304;
continue;
} else {
var x_56305 = cljs.core.first.call(null,seq__56285_56299__$1);
ret.push(x_56305);

var G__56306 = cljs.core.next.call(null,seq__56285_56299__$1);
var G__56307 = null;
var G__56308 = (0);
var G__56309 = (0);
seq__56285_56289 = G__56306;
chunk__56286_56290 = G__56307;
count__56287_56291 = G__56308;
i__56288_56292 = G__56309;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cognitect.transit/MapHandler");
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
var seq__56310_56314 = cljs.core.seq.call(null,v);
var chunk__56311_56315 = null;
var count__56312_56316 = (0);
var i__56313_56317 = (0);
while(true){
if((i__56313_56317 < count__56312_56316)){
var x_56318 = cljs.core._nth.call(null,chunk__56311_56315,i__56313_56317);
ret.push(x_56318);

var G__56319 = seq__56310_56314;
var G__56320 = chunk__56311_56315;
var G__56321 = count__56312_56316;
var G__56322 = (i__56313_56317 + (1));
seq__56310_56314 = G__56319;
chunk__56311_56315 = G__56320;
count__56312_56316 = G__56321;
i__56313_56317 = G__56322;
continue;
} else {
var temp__4657__auto___56323 = cljs.core.seq.call(null,seq__56310_56314);
if(temp__4657__auto___56323){
var seq__56310_56324__$1 = temp__4657__auto___56323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56310_56324__$1)){
var c__32690__auto___56325 = cljs.core.chunk_first.call(null,seq__56310_56324__$1);
var G__56326 = cljs.core.chunk_rest.call(null,seq__56310_56324__$1);
var G__56327 = c__32690__auto___56325;
var G__56328 = cljs.core.count.call(null,c__32690__auto___56325);
var G__56329 = (0);
seq__56310_56314 = G__56326;
chunk__56311_56315 = G__56327;
count__56312_56316 = G__56328;
i__56313_56317 = G__56329;
continue;
} else {
var x_56330 = cljs.core.first.call(null,seq__56310_56324__$1);
ret.push(x_56330);

var G__56331 = cljs.core.next.call(null,seq__56310_56324__$1);
var G__56332 = null;
var G__56333 = (0);
var G__56334 = (0);
seq__56310_56314 = G__56331;
chunk__56311_56315 = G__56332;
count__56312_56316 = G__56333;
i__56313_56317 = G__56334;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cognitect.transit/SetHandler");
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
var seq__56335_56339 = cljs.core.seq.call(null,v);
var chunk__56336_56340 = null;
var count__56337_56341 = (0);
var i__56338_56342 = (0);
while(true){
if((i__56338_56342 < count__56337_56341)){
var x_56343 = cljs.core._nth.call(null,chunk__56336_56340,i__56338_56342);
ret.push(x_56343);

var G__56344 = seq__56335_56339;
var G__56345 = chunk__56336_56340;
var G__56346 = count__56337_56341;
var G__56347 = (i__56338_56342 + (1));
seq__56335_56339 = G__56344;
chunk__56336_56340 = G__56345;
count__56337_56341 = G__56346;
i__56338_56342 = G__56347;
continue;
} else {
var temp__4657__auto___56348 = cljs.core.seq.call(null,seq__56335_56339);
if(temp__4657__auto___56348){
var seq__56335_56349__$1 = temp__4657__auto___56348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56335_56349__$1)){
var c__32690__auto___56350 = cljs.core.chunk_first.call(null,seq__56335_56349__$1);
var G__56351 = cljs.core.chunk_rest.call(null,seq__56335_56349__$1);
var G__56352 = c__32690__auto___56350;
var G__56353 = cljs.core.count.call(null,c__32690__auto___56350);
var G__56354 = (0);
seq__56335_56339 = G__56351;
chunk__56336_56340 = G__56352;
count__56337_56341 = G__56353;
i__56338_56342 = G__56354;
continue;
} else {
var x_56355 = cljs.core.first.call(null,seq__56335_56349__$1);
ret.push(x_56355);

var G__56356 = cljs.core.next.call(null,seq__56335_56349__$1);
var G__56357 = null;
var G__56358 = (0);
var G__56359 = (0);
seq__56335_56339 = G__56356;
chunk__56336_56340 = G__56357;
count__56337_56341 = G__56358;
i__56338_56342 = G__56359;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cognitect.transit/UUIDHandler");
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
var args56360 = [];
var len__32954__auto___56375 = arguments.length;
var i__32955__auto___56376 = (0);
while(true){
if((i__32955__auto___56376 < len__32954__auto___56375)){
args56360.push((arguments[i__32955__auto___56376]));

var G__56377 = (i__32955__auto___56376 + (1));
i__32955__auto___56376 = G__56377;
continue;
} else {
}
break;
}

var G__56362 = args56360.length;
switch (G__56362) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56360.length)].join('')));

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
var G__56363 = obj;
G__56363.push(kfn.call(null,k),vfn.call(null,v));

return G__56363;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x56364 = cljs.core.clone.call(null,handlers);
x56364.forEach = ((function (x56364,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__56365 = cljs.core.seq.call(null,coll);
var chunk__56366 = null;
var count__56367 = (0);
var i__56368 = (0);
while(true){
if((i__56368 < count__56367)){
var vec__56369 = cljs.core._nth.call(null,chunk__56366,i__56368);
var k = cljs.core.nth.call(null,vec__56369,(0),null);
var v = cljs.core.nth.call(null,vec__56369,(1),null);
f.call(null,v,k);

var G__56379 = seq__56365;
var G__56380 = chunk__56366;
var G__56381 = count__56367;
var G__56382 = (i__56368 + (1));
seq__56365 = G__56379;
chunk__56366 = G__56380;
count__56367 = G__56381;
i__56368 = G__56382;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56365);
if(temp__4657__auto__){
var seq__56365__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56365__$1)){
var c__32690__auto__ = cljs.core.chunk_first.call(null,seq__56365__$1);
var G__56383 = cljs.core.chunk_rest.call(null,seq__56365__$1);
var G__56384 = c__32690__auto__;
var G__56385 = cljs.core.count.call(null,c__32690__auto__);
var G__56386 = (0);
seq__56365 = G__56383;
chunk__56366 = G__56384;
count__56367 = G__56385;
i__56368 = G__56386;
continue;
} else {
var vec__56372 = cljs.core.first.call(null,seq__56365__$1);
var k = cljs.core.nth.call(null,vec__56372,(0),null);
var v = cljs.core.nth.call(null,vec__56372,(1),null);
f.call(null,v,k);

var G__56387 = cljs.core.next.call(null,seq__56365__$1);
var G__56388 = null;
var G__56389 = (0);
var G__56390 = (0);
seq__56365 = G__56387;
chunk__56366 = G__56388;
count__56367 = G__56389;
i__56368 = G__56390;
continue;
}
} else {
return null;
}
}
break;
}
});})(x56364,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x56364;
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
var args56391 = [];
var len__32954__auto___56397 = arguments.length;
var i__32955__auto___56398 = (0);
while(true){
if((i__32955__auto___56398 < len__32954__auto___56397)){
args56391.push((arguments[i__32955__auto___56398]));

var G__56399 = (i__32955__auto___56398 + (1));
i__32955__auto___56398 = G__56399;
continue;
} else {
}
break;
}

var G__56393 = args56391.length;
switch (G__56393) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56391.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit56394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit56394 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta56395){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta56395 = meta56395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cognitect.transit.t_cognitect$transit56394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56396,meta56395__$1){
var self__ = this;
var _56396__$1 = this;
return (new cognitect.transit.t_cognitect$transit56394(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta56395__$1));
});


cognitect.transit.t_cognitect$transit56394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56396){
var self__ = this;
var _56396__$1 = this;
return self__.meta56395;
});

cognitect.transit.t_cognitect$transit56394.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit56394.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit56394.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit56394.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit56394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta56395","meta56395",-1492817754,null)], null);
});

cognitect.transit.t_cognitect$transit56394.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit56394.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit56394";

cognitect.transit.t_cognitect$transit56394.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cognitect.transit/t_cognitect$transit56394");
});

cognitect.transit.__GT_t_cognitect$transit56394 = (function cognitect$transit$__GT_t_cognitect$transit56394(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta56395){
return (new cognitect.transit.t_cognitect$transit56394(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta56395));
});

}

return (new cognitect.transit.t_cognitect$transit56394(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__31879__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
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

//# sourceMappingURL=transit.js.map?rel=1489123391104