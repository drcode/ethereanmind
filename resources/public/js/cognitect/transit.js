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
var seq__47662_47666 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__47663_47667 = null;
var count__47664_47668 = (0);
var i__47665_47669 = (0);
while(true){
if((i__47665_47669 < count__47664_47668)){
var k_47670 = cljs.core._nth.call(null,chunk__47663_47667,i__47665_47669);
var v_47671 = (b[k_47670]);
(a[k_47670] = v_47671);

var G__47672 = seq__47662_47666;
var G__47673 = chunk__47663_47667;
var G__47674 = count__47664_47668;
var G__47675 = (i__47665_47669 + (1));
seq__47662_47666 = G__47672;
chunk__47663_47667 = G__47673;
count__47664_47668 = G__47674;
i__47665_47669 = G__47675;
continue;
} else {
var temp__6728__auto___47676 = cljs.core.seq.call(null,seq__47662_47666);
if(temp__6728__auto___47676){
var seq__47662_47677__$1 = temp__6728__auto___47676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47662_47677__$1)){
var c__35130__auto___47678 = cljs.core.chunk_first.call(null,seq__47662_47677__$1);
var G__47679 = cljs.core.chunk_rest.call(null,seq__47662_47677__$1);
var G__47680 = c__35130__auto___47678;
var G__47681 = cljs.core.count.call(null,c__35130__auto___47678);
var G__47682 = (0);
seq__47662_47666 = G__47679;
chunk__47663_47667 = G__47680;
count__47664_47668 = G__47681;
i__47665_47669 = G__47682;
continue;
} else {
var k_47683 = cljs.core.first.call(null,seq__47662_47677__$1);
var v_47684 = (b[k_47683]);
(a[k_47683] = v_47684);

var G__47685 = cljs.core.next.call(null,seq__47662_47677__$1);
var G__47686 = null;
var G__47687 = (0);
var G__47688 = (0);
seq__47662_47666 = G__47685;
chunk__47663_47667 = G__47686;
count__47664_47668 = G__47687;
i__47665_47669 = G__47688;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cognitect.transit/VectorBuilder");
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
var args47689 = [];
var len__35410__auto___47692 = arguments.length;
var i__35411__auto___47693 = (0);
while(true){
if((i__35411__auto___47693 < len__35410__auto___47692)){
args47689.push((arguments[i__35411__auto___47693]));

var G__47694 = (i__35411__auto___47693 + (1));
i__35411__auto___47693 = G__47694;
continue;
} else {
}
break;
}

var G__47691 = args47689.length;
switch (G__47691) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47689.length)].join('')));

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
var G__47696 = (i + (2));
var G__47697 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__47696;
ret = G__47697;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cognitect.transit/SymbolHandler");
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
var seq__47698_47702 = cljs.core.seq.call(null,v);
var chunk__47699_47703 = null;
var count__47700_47704 = (0);
var i__47701_47705 = (0);
while(true){
if((i__47701_47705 < count__47700_47704)){
var x_47706 = cljs.core._nth.call(null,chunk__47699_47703,i__47701_47705);
ret.push(x_47706);

var G__47707 = seq__47698_47702;
var G__47708 = chunk__47699_47703;
var G__47709 = count__47700_47704;
var G__47710 = (i__47701_47705 + (1));
seq__47698_47702 = G__47707;
chunk__47699_47703 = G__47708;
count__47700_47704 = G__47709;
i__47701_47705 = G__47710;
continue;
} else {
var temp__6728__auto___47711 = cljs.core.seq.call(null,seq__47698_47702);
if(temp__6728__auto___47711){
var seq__47698_47712__$1 = temp__6728__auto___47711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47698_47712__$1)){
var c__35130__auto___47713 = cljs.core.chunk_first.call(null,seq__47698_47712__$1);
var G__47714 = cljs.core.chunk_rest.call(null,seq__47698_47712__$1);
var G__47715 = c__35130__auto___47713;
var G__47716 = cljs.core.count.call(null,c__35130__auto___47713);
var G__47717 = (0);
seq__47698_47702 = G__47714;
chunk__47699_47703 = G__47715;
count__47700_47704 = G__47716;
i__47701_47705 = G__47717;
continue;
} else {
var x_47718 = cljs.core.first.call(null,seq__47698_47712__$1);
ret.push(x_47718);

var G__47719 = cljs.core.next.call(null,seq__47698_47712__$1);
var G__47720 = null;
var G__47721 = (0);
var G__47722 = (0);
seq__47698_47702 = G__47719;
chunk__47699_47703 = G__47720;
count__47700_47704 = G__47721;
i__47701_47705 = G__47722;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cognitect.transit/MapHandler");
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
var seq__47723_47727 = cljs.core.seq.call(null,v);
var chunk__47724_47728 = null;
var count__47725_47729 = (0);
var i__47726_47730 = (0);
while(true){
if((i__47726_47730 < count__47725_47729)){
var x_47731 = cljs.core._nth.call(null,chunk__47724_47728,i__47726_47730);
ret.push(x_47731);

var G__47732 = seq__47723_47727;
var G__47733 = chunk__47724_47728;
var G__47734 = count__47725_47729;
var G__47735 = (i__47726_47730 + (1));
seq__47723_47727 = G__47732;
chunk__47724_47728 = G__47733;
count__47725_47729 = G__47734;
i__47726_47730 = G__47735;
continue;
} else {
var temp__6728__auto___47736 = cljs.core.seq.call(null,seq__47723_47727);
if(temp__6728__auto___47736){
var seq__47723_47737__$1 = temp__6728__auto___47736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47723_47737__$1)){
var c__35130__auto___47738 = cljs.core.chunk_first.call(null,seq__47723_47737__$1);
var G__47739 = cljs.core.chunk_rest.call(null,seq__47723_47737__$1);
var G__47740 = c__35130__auto___47738;
var G__47741 = cljs.core.count.call(null,c__35130__auto___47738);
var G__47742 = (0);
seq__47723_47727 = G__47739;
chunk__47724_47728 = G__47740;
count__47725_47729 = G__47741;
i__47726_47730 = G__47742;
continue;
} else {
var x_47743 = cljs.core.first.call(null,seq__47723_47737__$1);
ret.push(x_47743);

var G__47744 = cljs.core.next.call(null,seq__47723_47737__$1);
var G__47745 = null;
var G__47746 = (0);
var G__47747 = (0);
seq__47723_47727 = G__47744;
chunk__47724_47728 = G__47745;
count__47725_47729 = G__47746;
i__47726_47730 = G__47747;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cognitect.transit/SetHandler");
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
var seq__47748_47752 = cljs.core.seq.call(null,v);
var chunk__47749_47753 = null;
var count__47750_47754 = (0);
var i__47751_47755 = (0);
while(true){
if((i__47751_47755 < count__47750_47754)){
var x_47756 = cljs.core._nth.call(null,chunk__47749_47753,i__47751_47755);
ret.push(x_47756);

var G__47757 = seq__47748_47752;
var G__47758 = chunk__47749_47753;
var G__47759 = count__47750_47754;
var G__47760 = (i__47751_47755 + (1));
seq__47748_47752 = G__47757;
chunk__47749_47753 = G__47758;
count__47750_47754 = G__47759;
i__47751_47755 = G__47760;
continue;
} else {
var temp__6728__auto___47761 = cljs.core.seq.call(null,seq__47748_47752);
if(temp__6728__auto___47761){
var seq__47748_47762__$1 = temp__6728__auto___47761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47748_47762__$1)){
var c__35130__auto___47763 = cljs.core.chunk_first.call(null,seq__47748_47762__$1);
var G__47764 = cljs.core.chunk_rest.call(null,seq__47748_47762__$1);
var G__47765 = c__35130__auto___47763;
var G__47766 = cljs.core.count.call(null,c__35130__auto___47763);
var G__47767 = (0);
seq__47748_47752 = G__47764;
chunk__47749_47753 = G__47765;
count__47750_47754 = G__47766;
i__47751_47755 = G__47767;
continue;
} else {
var x_47768 = cljs.core.first.call(null,seq__47748_47762__$1);
ret.push(x_47768);

var G__47769 = cljs.core.next.call(null,seq__47748_47762__$1);
var G__47770 = null;
var G__47771 = (0);
var G__47772 = (0);
seq__47748_47752 = G__47769;
chunk__47749_47753 = G__47770;
count__47750_47754 = G__47771;
i__47751_47755 = G__47772;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cognitect.transit/UUIDHandler");
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
var args47773 = [];
var len__35410__auto___47788 = arguments.length;
var i__35411__auto___47789 = (0);
while(true){
if((i__35411__auto___47789 < len__35410__auto___47788)){
args47773.push((arguments[i__35411__auto___47789]));

var G__47790 = (i__35411__auto___47789 + (1));
i__35411__auto___47789 = G__47790;
continue;
} else {
}
break;
}

var G__47775 = args47773.length;
switch (G__47775) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47773.length)].join('')));

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
var G__47776 = obj;
G__47776.push(kfn.call(null,k),vfn.call(null,v));

return G__47776;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x47777 = cljs.core.clone.call(null,handlers);
x47777.forEach = ((function (x47777,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__47778 = cljs.core.seq.call(null,coll);
var chunk__47779 = null;
var count__47780 = (0);
var i__47781 = (0);
while(true){
if((i__47781 < count__47780)){
var vec__47782 = cljs.core._nth.call(null,chunk__47779,i__47781);
var k = cljs.core.nth.call(null,vec__47782,(0),null);
var v = cljs.core.nth.call(null,vec__47782,(1),null);
f.call(null,v,k);

var G__47792 = seq__47778;
var G__47793 = chunk__47779;
var G__47794 = count__47780;
var G__47795 = (i__47781 + (1));
seq__47778 = G__47792;
chunk__47779 = G__47793;
count__47780 = G__47794;
i__47781 = G__47795;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__47778);
if(temp__6728__auto__){
var seq__47778__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47778__$1)){
var c__35130__auto__ = cljs.core.chunk_first.call(null,seq__47778__$1);
var G__47796 = cljs.core.chunk_rest.call(null,seq__47778__$1);
var G__47797 = c__35130__auto__;
var G__47798 = cljs.core.count.call(null,c__35130__auto__);
var G__47799 = (0);
seq__47778 = G__47796;
chunk__47779 = G__47797;
count__47780 = G__47798;
i__47781 = G__47799;
continue;
} else {
var vec__47785 = cljs.core.first.call(null,seq__47778__$1);
var k = cljs.core.nth.call(null,vec__47785,(0),null);
var v = cljs.core.nth.call(null,vec__47785,(1),null);
f.call(null,v,k);

var G__47800 = cljs.core.next.call(null,seq__47778__$1);
var G__47801 = null;
var G__47802 = (0);
var G__47803 = (0);
seq__47778 = G__47800;
chunk__47779 = G__47801;
count__47780 = G__47802;
i__47781 = G__47803;
continue;
}
} else {
return null;
}
}
break;
}
});})(x47777,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x47777;
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
var args47804 = [];
var len__35410__auto___47810 = arguments.length;
var i__35411__auto___47811 = (0);
while(true){
if((i__35411__auto___47811 < len__35410__auto___47810)){
args47804.push((arguments[i__35411__auto___47811]));

var G__47812 = (i__35411__auto___47811 + (1));
i__35411__auto___47811 = G__47812;
continue;
} else {
}
break;
}

var G__47806 = args47804.length;
switch (G__47806) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47804.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit47807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit47807 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta47808){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta47808 = meta47808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cognitect.transit.t_cognitect$transit47807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47809,meta47808__$1){
var self__ = this;
var _47809__$1 = this;
return (new cognitect.transit.t_cognitect$transit47807(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta47808__$1));
});


cognitect.transit.t_cognitect$transit47807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47809){
var self__ = this;
var _47809__$1 = this;
return self__.meta47808;
});

cognitect.transit.t_cognitect$transit47807.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit47807.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit47807.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit47807.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit47807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta47808","meta47808",248833087,null)], null);
});

cognitect.transit.t_cognitect$transit47807.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit47807.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit47807";

cognitect.transit.t_cognitect$transit47807.cljs$lang$ctorPrWriter = (function (this__34879__auto__,writer__34880__auto__,opt__34881__auto__){
return cljs.core._write.call(null,writer__34880__auto__,"cognitect.transit/t_cognitect$transit47807");
});

cognitect.transit.__GT_t_cognitect$transit47807 = (function cognitect$transit$__GT_t_cognitect$transit47807(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta47808){
return (new cognitect.transit.t_cognitect$transit47807(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta47808));
});

}

return (new cognitect.transit.t_cognitect$transit47807(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__34227__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__34227__auto__)){
return or__34227__auto__;
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

//# sourceMappingURL=transit.js.map?rel=1489120067831