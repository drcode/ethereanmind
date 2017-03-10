// Compiled by ClojureScript 1.9.229 {}
goog.provide('om.tempid');
goog.require('cljs.core');

/**
* @constructor
 * @implements {om.tempid.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IPrintWithWriter}
*/
om.tempid.TempId = (function (id,__hash){
this.id = id;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om.tempid.TempId.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});


om.tempid.TempId.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((other instanceof om.tempid.TempId)) && (cljs.core._EQ_.call(null,this$__$1.id,other.id));
});


om.tempid.TempId.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.__hash == null)){
self__.__hash = cljs.core.hash.call(null,self__.id);
} else {
}

return self__.__hash;
});


om.tempid.TempId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.write_all.call(null,writer,"#om/id[\"",self__.id,"\"]");
});

om.tempid.TempId.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

om.tempid.TempId.cljs$lang$type = true;

om.tempid.TempId.cljs$lang$ctorStr = "om.tempid/TempId";

om.tempid.TempId.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"om.tempid/TempId");
});

om.tempid.__GT_TempId = (function om$tempid$__GT_TempId(id,__hash){
return (new om.tempid.TempId(id,__hash));
});

om.tempid.tempid = (function om$tempid$tempid(var_args){
var args56403 = [];
var len__32954__auto___56406 = arguments.length;
var i__32955__auto___56407 = (0);
while(true){
if((i__32955__auto___56407 < len__32954__auto___56406)){
args56403.push((arguments[i__32955__auto___56407]));

var G__56408 = (i__32955__auto___56407 + (1));
i__32955__auto___56407 = G__56408;
continue;
} else {
}
break;
}

var G__56405 = args56403.length;
switch (G__56405) {
case 0:
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56403.length)].join('')));

}
});

om.tempid.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null,cljs.core.random_uuid.call(null));
});

om.tempid.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return (new om.tempid.TempId(id,null));
});

om.tempid.tempid.cljs$lang$maxFixedArity = 1;

om.tempid.tempid_QMARK_ = (function om$tempid$tempid_QMARK_(x){
return (x instanceof om.tempid.TempId);
});

//# sourceMappingURL=tempid.js.map?rel=1489123391150