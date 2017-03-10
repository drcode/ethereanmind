// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args59328 = [];
var len__32954__auto___59334 = arguments.length;
var i__32955__auto___59335 = (0);
while(true){
if((i__32955__auto___59335 < len__32954__auto___59334)){
args59328.push((arguments[i__32955__auto___59335]));

var G__59336 = (i__32955__auto___59335 + (1));
i__32955__auto___59335 = G__59336;
continue;
} else {
}
break;
}

var G__59330 = args59328.length;
switch (G__59330) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59328.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async59331 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59331 = (function (f,blockable,meta59332){
this.f = f;
this.blockable = blockable;
this.meta59332 = meta59332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async59331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59333,meta59332__$1){
var self__ = this;
var _59333__$1 = this;
return (new cljs.core.async.t_cljs$core$async59331(self__.f,self__.blockable,meta59332__$1));
});


cljs.core.async.t_cljs$core$async59331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59333){
var self__ = this;
var _59333__$1 = this;
return self__.meta59332;
});


cljs.core.async.t_cljs$core$async59331.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async59331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async59331.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async59331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async59331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta59332","meta59332",1706397319,null)], null);
});

cljs.core.async.t_cljs$core$async59331.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59331";

cljs.core.async.t_cljs$core$async59331.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async59331");
});

cljs.core.async.__GT_t_cljs$core$async59331 = (function cljs$core$async$__GT_t_cljs$core$async59331(f__$1,blockable__$1,meta59332){
return (new cljs.core.async.t_cljs$core$async59331(f__$1,blockable__$1,meta59332));
});

}

return (new cljs.core.async.t_cljs$core$async59331(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args59340 = [];
var len__32954__auto___59343 = arguments.length;
var i__32955__auto___59344 = (0);
while(true){
if((i__32955__auto___59344 < len__32954__auto___59343)){
args59340.push((arguments[i__32955__auto___59344]));

var G__59345 = (i__32955__auto___59344 + (1));
i__32955__auto___59344 = G__59345;
continue;
} else {
}
break;
}

var G__59342 = args59340.length;
switch (G__59342) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59340.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args59347 = [];
var len__32954__auto___59350 = arguments.length;
var i__32955__auto___59351 = (0);
while(true){
if((i__32955__auto___59351 < len__32954__auto___59350)){
args59347.push((arguments[i__32955__auto___59351]));

var G__59352 = (i__32955__auto___59351 + (1));
i__32955__auto___59351 = G__59352;
continue;
} else {
}
break;
}

var G__59349 = args59347.length;
switch (G__59349) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59347.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args59354 = [];
var len__32954__auto___59357 = arguments.length;
var i__32955__auto___59358 = (0);
while(true){
if((i__32955__auto___59358 < len__32954__auto___59357)){
args59354.push((arguments[i__32955__auto___59358]));

var G__59359 = (i__32955__auto___59358 + (1));
i__32955__auto___59358 = G__59359;
continue;
} else {
}
break;
}

var G__59356 = args59354.length;
switch (G__59356) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59354.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_59361 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_59361);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_59361,ret){
return (function (){
return fn1.call(null,val_59361);
});})(val_59361,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args59362 = [];
var len__32954__auto___59365 = arguments.length;
var i__32955__auto___59366 = (0);
while(true){
if((i__32955__auto___59366 < len__32954__auto___59365)){
args59362.push((arguments[i__32955__auto___59366]));

var G__59367 = (i__32955__auto___59366 + (1));
i__32955__auto___59366 = G__59367;
continue;
} else {
}
break;
}

var G__59364 = args59362.length;
switch (G__59364) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59362.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__32794__auto___59369 = n;
var x_59370 = (0);
while(true){
if((x_59370 < n__32794__auto___59369)){
(a[x_59370] = (0));

var G__59371 = (x_59370 + (1));
x_59370 = G__59371;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__59372 = (i + (1));
i = G__59372;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async59376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59376 = (function (alt_flag,flag,meta59377){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta59377 = meta59377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async59376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_59378,meta59377__$1){
var self__ = this;
var _59378__$1 = this;
return (new cljs.core.async.t_cljs$core$async59376(self__.alt_flag,self__.flag,meta59377__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async59376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_59378){
var self__ = this;
var _59378__$1 = this;
return self__.meta59377;
});})(flag))
;


cljs.core.async.t_cljs$core$async59376.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async59376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async59376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async59376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async59376.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta59377","meta59377",-455727774,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async59376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59376";

cljs.core.async.t_cljs$core$async59376.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async59376");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async59376 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async59376(alt_flag__$1,flag__$1,meta59377){
return (new cljs.core.async.t_cljs$core$async59376(alt_flag__$1,flag__$1,meta59377));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async59376(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async59382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59382 = (function (alt_handler,flag,cb,meta59383){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta59383 = meta59383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async59382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59384,meta59383__$1){
var self__ = this;
var _59384__$1 = this;
return (new cljs.core.async.t_cljs$core$async59382(self__.alt_handler,self__.flag,self__.cb,meta59383__$1));
});


cljs.core.async.t_cljs$core$async59382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59384){
var self__ = this;
var _59384__$1 = this;
return self__.meta59383;
});


cljs.core.async.t_cljs$core$async59382.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async59382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async59382.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async59382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async59382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta59383","meta59383",-1530328162,null)], null);
});

cljs.core.async.t_cljs$core$async59382.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59382";

cljs.core.async.t_cljs$core$async59382.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async59382");
});

cljs.core.async.__GT_t_cljs$core$async59382 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async59382(alt_handler__$1,flag__$1,cb__$1,meta59383){
return (new cljs.core.async.t_cljs$core$async59382(alt_handler__$1,flag__$1,cb__$1,meta59383));
});

}

return (new cljs.core.async.t_cljs$core$async59382(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59385_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59385_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59386_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59386_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__31879__auto__ = wport;
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return port;
}
})()], null));
} else {
var G__59387 = (i + (1));
i = G__59387;
continue;
}
} else {
return null;
}
break;
}
})();
var or__31879__auto__ = ret;
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__31867__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__31867__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__31867__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__32961__auto__ = [];
var len__32954__auto___59393 = arguments.length;
var i__32955__auto___59394 = (0);
while(true){
if((i__32955__auto___59394 < len__32954__auto___59393)){
args__32961__auto__.push((arguments[i__32955__auto___59394]));

var G__59395 = (i__32955__auto___59394 + (1));
i__32955__auto___59394 = G__59395;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((1) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32962__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__59390){
var map__59391 = p__59390;
var map__59391__$1 = ((((!((map__59391 == null)))?((((map__59391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59391):map__59391);
var opts = map__59391__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq59388){
var G__59389 = cljs.core.first.call(null,seq59388);
var seq59388__$1 = cljs.core.next.call(null,seq59388);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59389,seq59388__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args59396 = [];
var len__32954__auto___59446 = arguments.length;
var i__32955__auto___59447 = (0);
while(true){
if((i__32955__auto___59447 < len__32954__auto___59446)){
args59396.push((arguments[i__32955__auto___59447]));

var G__59448 = (i__32955__auto___59447 + (1));
i__32955__auto___59447 = G__59448;
continue;
} else {
}
break;
}

var G__59398 = args59396.length;
switch (G__59398) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59396.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38812__auto___59450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___59450){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___59450){
return (function (state_59422){
var state_val_59423 = (state_59422[(1)]);
if((state_val_59423 === (7))){
var inst_59418 = (state_59422[(2)]);
var state_59422__$1 = state_59422;
var statearr_59424_59451 = state_59422__$1;
(statearr_59424_59451[(2)] = inst_59418);

(statearr_59424_59451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59423 === (1))){
var state_59422__$1 = state_59422;
var statearr_59425_59452 = state_59422__$1;
(statearr_59425_59452[(2)] = null);

(statearr_59425_59452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59423 === (4))){
var inst_59401 = (state_59422[(7)]);
var inst_59401__$1 = (state_59422[(2)]);
var inst_59402 = (inst_59401__$1 == null);
var state_59422__$1 = (function (){var statearr_59426 = state_59422;
(statearr_59426[(7)] = inst_59401__$1);

return statearr_59426;
})();
if(cljs.core.truth_(inst_59402)){
var statearr_59427_59453 = state_59422__$1;
(statearr_59427_59453[(1)] = (5));

} else {
var statearr_59428_59454 = state_59422__$1;
(statearr_59428_59454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59423 === (13))){
var state_59422__$1 = state_59422;
var statearr_59429_59455 = state_59422__$1;
(statearr_59429_59455[(2)] = null);

(statearr_59429_59455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59423 === (6))){
var inst_59401 = (state_59422[(7)]);
var state_59422__$1 = state_59422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59422__$1,(11),to,inst_59401);
} else {
if((state_val_59423 === (3))){
var inst_59420 = (state_59422[(2)]);
var state_59422__$1 = state_59422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59422__$1,inst_59420);
} else {
if((state_val_59423 === (12))){
var state_59422__$1 = state_59422;
var statearr_59430_59456 = state_59422__$1;
(statearr_59430_59456[(2)] = null);

(statearr_59430_59456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59423 === (2))){
var state_59422__$1 = state_59422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59422__$1,(4),from);
} else {
if((state_val_59423 === (11))){
var inst_59411 = (state_59422[(2)]);
var state_59422__$1 = state_59422;
if(cljs.core.truth_(inst_59411)){
var statearr_59431_59457 = state_59422__$1;
(statearr_59431_59457[(1)] = (12));

} else {
var statearr_59432_59458 = state_59422__$1;
(statearr_59432_59458[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59423 === (9))){
var state_59422__$1 = state_59422;
var statearr_59433_59459 = state_59422__$1;
(statearr_59433_59459[(2)] = null);

(statearr_59433_59459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59423 === (5))){
var state_59422__$1 = state_59422;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59434_59460 = state_59422__$1;
(statearr_59434_59460[(1)] = (8));

} else {
var statearr_59435_59461 = state_59422__$1;
(statearr_59435_59461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59423 === (14))){
var inst_59416 = (state_59422[(2)]);
var state_59422__$1 = state_59422;
var statearr_59436_59462 = state_59422__$1;
(statearr_59436_59462[(2)] = inst_59416);

(statearr_59436_59462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59423 === (10))){
var inst_59408 = (state_59422[(2)]);
var state_59422__$1 = state_59422;
var statearr_59437_59463 = state_59422__$1;
(statearr_59437_59463[(2)] = inst_59408);

(statearr_59437_59463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59423 === (8))){
var inst_59405 = cljs.core.async.close_BANG_.call(null,to);
var state_59422__$1 = state_59422;
var statearr_59438_59464 = state_59422__$1;
(statearr_59438_59464[(2)] = inst_59405);

(statearr_59438_59464[(1)] = (10));


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
});})(c__38812__auto___59450))
;
return ((function (switch__38700__auto__,c__38812__auto___59450){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_59442 = [null,null,null,null,null,null,null,null];
(statearr_59442[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_59442[(1)] = (1));

return statearr_59442;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_59422){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_59422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e59443){if((e59443 instanceof Object)){
var ex__38704__auto__ = e59443;
var statearr_59444_59465 = state_59422;
(statearr_59444_59465[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59466 = state_59422;
state_59422 = G__59466;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_59422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_59422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___59450))
})();
var state__38814__auto__ = (function (){var statearr_59445 = f__38813__auto__.call(null);
(statearr_59445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___59450);

return statearr_59445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___59450))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__59654){
var vec__59655 = p__59654;
var v = cljs.core.nth.call(null,vec__59655,(0),null);
var p = cljs.core.nth.call(null,vec__59655,(1),null);
var job = vec__59655;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38812__auto___59841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___59841,res,vec__59655,v,p,job,jobs,results){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___59841,res,vec__59655,v,p,job,jobs,results){
return (function (state_59662){
var state_val_59663 = (state_59662[(1)]);
if((state_val_59663 === (1))){
var state_59662__$1 = state_59662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59662__$1,(2),res,v);
} else {
if((state_val_59663 === (2))){
var inst_59659 = (state_59662[(2)]);
var inst_59660 = cljs.core.async.close_BANG_.call(null,res);
var state_59662__$1 = (function (){var statearr_59664 = state_59662;
(statearr_59664[(7)] = inst_59659);

return statearr_59664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59662__$1,inst_59660);
} else {
return null;
}
}
});})(c__38812__auto___59841,res,vec__59655,v,p,job,jobs,results))
;
return ((function (switch__38700__auto__,c__38812__auto___59841,res,vec__59655,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0 = (function (){
var statearr_59668 = [null,null,null,null,null,null,null,null];
(statearr_59668[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__);

(statearr_59668[(1)] = (1));

return statearr_59668;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1 = (function (state_59662){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_59662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e59669){if((e59669 instanceof Object)){
var ex__38704__auto__ = e59669;
var statearr_59670_59842 = state_59662;
(statearr_59670_59842[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59843 = state_59662;
state_59662 = G__59843;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = function(state_59662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1.call(this,state_59662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___59841,res,vec__59655,v,p,job,jobs,results))
})();
var state__38814__auto__ = (function (){var statearr_59671 = f__38813__auto__.call(null);
(statearr_59671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___59841);

return statearr_59671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___59841,res,vec__59655,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__59672){
var vec__59673 = p__59672;
var v = cljs.core.nth.call(null,vec__59673,(0),null);
var p = cljs.core.nth.call(null,vec__59673,(1),null);
var job = vec__59673;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__32794__auto___59844 = n;
var __59845 = (0);
while(true){
if((__59845 < n__32794__auto___59844)){
var G__59676_59846 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__59676_59846) {
case "compute":
var c__38812__auto___59848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__59845,c__38812__auto___59848,G__59676_59846,n__32794__auto___59844,jobs,results,process,async){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (__59845,c__38812__auto___59848,G__59676_59846,n__32794__auto___59844,jobs,results,process,async){
return (function (state_59689){
var state_val_59690 = (state_59689[(1)]);
if((state_val_59690 === (1))){
var state_59689__$1 = state_59689;
var statearr_59691_59849 = state_59689__$1;
(statearr_59691_59849[(2)] = null);

(statearr_59691_59849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59690 === (2))){
var state_59689__$1 = state_59689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59689__$1,(4),jobs);
} else {
if((state_val_59690 === (3))){
var inst_59687 = (state_59689[(2)]);
var state_59689__$1 = state_59689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59689__$1,inst_59687);
} else {
if((state_val_59690 === (4))){
var inst_59679 = (state_59689[(2)]);
var inst_59680 = process.call(null,inst_59679);
var state_59689__$1 = state_59689;
if(cljs.core.truth_(inst_59680)){
var statearr_59692_59850 = state_59689__$1;
(statearr_59692_59850[(1)] = (5));

} else {
var statearr_59693_59851 = state_59689__$1;
(statearr_59693_59851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59690 === (5))){
var state_59689__$1 = state_59689;
var statearr_59694_59852 = state_59689__$1;
(statearr_59694_59852[(2)] = null);

(statearr_59694_59852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59690 === (6))){
var state_59689__$1 = state_59689;
var statearr_59695_59853 = state_59689__$1;
(statearr_59695_59853[(2)] = null);

(statearr_59695_59853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59690 === (7))){
var inst_59685 = (state_59689[(2)]);
var state_59689__$1 = state_59689;
var statearr_59696_59854 = state_59689__$1;
(statearr_59696_59854[(2)] = inst_59685);

(statearr_59696_59854[(1)] = (3));


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
});})(__59845,c__38812__auto___59848,G__59676_59846,n__32794__auto___59844,jobs,results,process,async))
;
return ((function (__59845,switch__38700__auto__,c__38812__auto___59848,G__59676_59846,n__32794__auto___59844,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0 = (function (){
var statearr_59700 = [null,null,null,null,null,null,null];
(statearr_59700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__);

(statearr_59700[(1)] = (1));

return statearr_59700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1 = (function (state_59689){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_59689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e59701){if((e59701 instanceof Object)){
var ex__38704__auto__ = e59701;
var statearr_59702_59855 = state_59689;
(statearr_59702_59855[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59856 = state_59689;
state_59689 = G__59856;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = function(state_59689){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1.call(this,state_59689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__;
})()
;})(__59845,switch__38700__auto__,c__38812__auto___59848,G__59676_59846,n__32794__auto___59844,jobs,results,process,async))
})();
var state__38814__auto__ = (function (){var statearr_59703 = f__38813__auto__.call(null);
(statearr_59703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___59848);

return statearr_59703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(__59845,c__38812__auto___59848,G__59676_59846,n__32794__auto___59844,jobs,results,process,async))
);


break;
case "async":
var c__38812__auto___59857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__59845,c__38812__auto___59857,G__59676_59846,n__32794__auto___59844,jobs,results,process,async){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (__59845,c__38812__auto___59857,G__59676_59846,n__32794__auto___59844,jobs,results,process,async){
return (function (state_59716){
var state_val_59717 = (state_59716[(1)]);
if((state_val_59717 === (1))){
var state_59716__$1 = state_59716;
var statearr_59718_59858 = state_59716__$1;
(statearr_59718_59858[(2)] = null);

(statearr_59718_59858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59717 === (2))){
var state_59716__$1 = state_59716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59716__$1,(4),jobs);
} else {
if((state_val_59717 === (3))){
var inst_59714 = (state_59716[(2)]);
var state_59716__$1 = state_59716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59716__$1,inst_59714);
} else {
if((state_val_59717 === (4))){
var inst_59706 = (state_59716[(2)]);
var inst_59707 = async.call(null,inst_59706);
var state_59716__$1 = state_59716;
if(cljs.core.truth_(inst_59707)){
var statearr_59719_59859 = state_59716__$1;
(statearr_59719_59859[(1)] = (5));

} else {
var statearr_59720_59860 = state_59716__$1;
(statearr_59720_59860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59717 === (5))){
var state_59716__$1 = state_59716;
var statearr_59721_59861 = state_59716__$1;
(statearr_59721_59861[(2)] = null);

(statearr_59721_59861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59717 === (6))){
var state_59716__$1 = state_59716;
var statearr_59722_59862 = state_59716__$1;
(statearr_59722_59862[(2)] = null);

(statearr_59722_59862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59717 === (7))){
var inst_59712 = (state_59716[(2)]);
var state_59716__$1 = state_59716;
var statearr_59723_59863 = state_59716__$1;
(statearr_59723_59863[(2)] = inst_59712);

(statearr_59723_59863[(1)] = (3));


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
});})(__59845,c__38812__auto___59857,G__59676_59846,n__32794__auto___59844,jobs,results,process,async))
;
return ((function (__59845,switch__38700__auto__,c__38812__auto___59857,G__59676_59846,n__32794__auto___59844,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0 = (function (){
var statearr_59727 = [null,null,null,null,null,null,null];
(statearr_59727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__);

(statearr_59727[(1)] = (1));

return statearr_59727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1 = (function (state_59716){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_59716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e59728){if((e59728 instanceof Object)){
var ex__38704__auto__ = e59728;
var statearr_59729_59864 = state_59716;
(statearr_59729_59864[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59865 = state_59716;
state_59716 = G__59865;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = function(state_59716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1.call(this,state_59716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__;
})()
;})(__59845,switch__38700__auto__,c__38812__auto___59857,G__59676_59846,n__32794__auto___59844,jobs,results,process,async))
})();
var state__38814__auto__ = (function (){var statearr_59730 = f__38813__auto__.call(null);
(statearr_59730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___59857);

return statearr_59730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(__59845,c__38812__auto___59857,G__59676_59846,n__32794__auto___59844,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__59866 = (__59845 + (1));
__59845 = G__59866;
continue;
} else {
}
break;
}

var c__38812__auto___59867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___59867,jobs,results,process,async){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___59867,jobs,results,process,async){
return (function (state_59752){
var state_val_59753 = (state_59752[(1)]);
if((state_val_59753 === (1))){
var state_59752__$1 = state_59752;
var statearr_59754_59868 = state_59752__$1;
(statearr_59754_59868[(2)] = null);

(statearr_59754_59868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59753 === (2))){
var state_59752__$1 = state_59752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59752__$1,(4),from);
} else {
if((state_val_59753 === (3))){
var inst_59750 = (state_59752[(2)]);
var state_59752__$1 = state_59752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59752__$1,inst_59750);
} else {
if((state_val_59753 === (4))){
var inst_59733 = (state_59752[(7)]);
var inst_59733__$1 = (state_59752[(2)]);
var inst_59734 = (inst_59733__$1 == null);
var state_59752__$1 = (function (){var statearr_59755 = state_59752;
(statearr_59755[(7)] = inst_59733__$1);

return statearr_59755;
})();
if(cljs.core.truth_(inst_59734)){
var statearr_59756_59869 = state_59752__$1;
(statearr_59756_59869[(1)] = (5));

} else {
var statearr_59757_59870 = state_59752__$1;
(statearr_59757_59870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59753 === (5))){
var inst_59736 = cljs.core.async.close_BANG_.call(null,jobs);
var state_59752__$1 = state_59752;
var statearr_59758_59871 = state_59752__$1;
(statearr_59758_59871[(2)] = inst_59736);

(statearr_59758_59871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59753 === (6))){
var inst_59738 = (state_59752[(8)]);
var inst_59733 = (state_59752[(7)]);
var inst_59738__$1 = cljs.core.async.chan.call(null,(1));
var inst_59739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59740 = [inst_59733,inst_59738__$1];
var inst_59741 = (new cljs.core.PersistentVector(null,2,(5),inst_59739,inst_59740,null));
var state_59752__$1 = (function (){var statearr_59759 = state_59752;
(statearr_59759[(8)] = inst_59738__$1);

return statearr_59759;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59752__$1,(8),jobs,inst_59741);
} else {
if((state_val_59753 === (7))){
var inst_59748 = (state_59752[(2)]);
var state_59752__$1 = state_59752;
var statearr_59760_59872 = state_59752__$1;
(statearr_59760_59872[(2)] = inst_59748);

(statearr_59760_59872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59753 === (8))){
var inst_59738 = (state_59752[(8)]);
var inst_59743 = (state_59752[(2)]);
var state_59752__$1 = (function (){var statearr_59761 = state_59752;
(statearr_59761[(9)] = inst_59743);

return statearr_59761;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59752__$1,(9),results,inst_59738);
} else {
if((state_val_59753 === (9))){
var inst_59745 = (state_59752[(2)]);
var state_59752__$1 = (function (){var statearr_59762 = state_59752;
(statearr_59762[(10)] = inst_59745);

return statearr_59762;
})();
var statearr_59763_59873 = state_59752__$1;
(statearr_59763_59873[(2)] = null);

(statearr_59763_59873[(1)] = (2));


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
});})(c__38812__auto___59867,jobs,results,process,async))
;
return ((function (switch__38700__auto__,c__38812__auto___59867,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0 = (function (){
var statearr_59767 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__);

(statearr_59767[(1)] = (1));

return statearr_59767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1 = (function (state_59752){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_59752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e59768){if((e59768 instanceof Object)){
var ex__38704__auto__ = e59768;
var statearr_59769_59874 = state_59752;
(statearr_59769_59874[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59875 = state_59752;
state_59752 = G__59875;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = function(state_59752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1.call(this,state_59752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___59867,jobs,results,process,async))
})();
var state__38814__auto__ = (function (){var statearr_59770 = f__38813__auto__.call(null);
(statearr_59770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___59867);

return statearr_59770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___59867,jobs,results,process,async))
);


var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,jobs,results,process,async){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,jobs,results,process,async){
return (function (state_59808){
var state_val_59809 = (state_59808[(1)]);
if((state_val_59809 === (7))){
var inst_59804 = (state_59808[(2)]);
var state_59808__$1 = state_59808;
var statearr_59810_59876 = state_59808__$1;
(statearr_59810_59876[(2)] = inst_59804);

(statearr_59810_59876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (20))){
var state_59808__$1 = state_59808;
var statearr_59811_59877 = state_59808__$1;
(statearr_59811_59877[(2)] = null);

(statearr_59811_59877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (1))){
var state_59808__$1 = state_59808;
var statearr_59812_59878 = state_59808__$1;
(statearr_59812_59878[(2)] = null);

(statearr_59812_59878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (4))){
var inst_59773 = (state_59808[(7)]);
var inst_59773__$1 = (state_59808[(2)]);
var inst_59774 = (inst_59773__$1 == null);
var state_59808__$1 = (function (){var statearr_59813 = state_59808;
(statearr_59813[(7)] = inst_59773__$1);

return statearr_59813;
})();
if(cljs.core.truth_(inst_59774)){
var statearr_59814_59879 = state_59808__$1;
(statearr_59814_59879[(1)] = (5));

} else {
var statearr_59815_59880 = state_59808__$1;
(statearr_59815_59880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (15))){
var inst_59786 = (state_59808[(8)]);
var state_59808__$1 = state_59808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59808__$1,(18),to,inst_59786);
} else {
if((state_val_59809 === (21))){
var inst_59799 = (state_59808[(2)]);
var state_59808__$1 = state_59808;
var statearr_59816_59881 = state_59808__$1;
(statearr_59816_59881[(2)] = inst_59799);

(statearr_59816_59881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (13))){
var inst_59801 = (state_59808[(2)]);
var state_59808__$1 = (function (){var statearr_59817 = state_59808;
(statearr_59817[(9)] = inst_59801);

return statearr_59817;
})();
var statearr_59818_59882 = state_59808__$1;
(statearr_59818_59882[(2)] = null);

(statearr_59818_59882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (6))){
var inst_59773 = (state_59808[(7)]);
var state_59808__$1 = state_59808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59808__$1,(11),inst_59773);
} else {
if((state_val_59809 === (17))){
var inst_59794 = (state_59808[(2)]);
var state_59808__$1 = state_59808;
if(cljs.core.truth_(inst_59794)){
var statearr_59819_59883 = state_59808__$1;
(statearr_59819_59883[(1)] = (19));

} else {
var statearr_59820_59884 = state_59808__$1;
(statearr_59820_59884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (3))){
var inst_59806 = (state_59808[(2)]);
var state_59808__$1 = state_59808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59808__$1,inst_59806);
} else {
if((state_val_59809 === (12))){
var inst_59783 = (state_59808[(10)]);
var state_59808__$1 = state_59808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59808__$1,(14),inst_59783);
} else {
if((state_val_59809 === (2))){
var state_59808__$1 = state_59808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59808__$1,(4),results);
} else {
if((state_val_59809 === (19))){
var state_59808__$1 = state_59808;
var statearr_59821_59885 = state_59808__$1;
(statearr_59821_59885[(2)] = null);

(statearr_59821_59885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (11))){
var inst_59783 = (state_59808[(2)]);
var state_59808__$1 = (function (){var statearr_59822 = state_59808;
(statearr_59822[(10)] = inst_59783);

return statearr_59822;
})();
var statearr_59823_59886 = state_59808__$1;
(statearr_59823_59886[(2)] = null);

(statearr_59823_59886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (9))){
var state_59808__$1 = state_59808;
var statearr_59824_59887 = state_59808__$1;
(statearr_59824_59887[(2)] = null);

(statearr_59824_59887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (5))){
var state_59808__$1 = state_59808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59825_59888 = state_59808__$1;
(statearr_59825_59888[(1)] = (8));

} else {
var statearr_59826_59889 = state_59808__$1;
(statearr_59826_59889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (14))){
var inst_59788 = (state_59808[(11)]);
var inst_59786 = (state_59808[(8)]);
var inst_59786__$1 = (state_59808[(2)]);
var inst_59787 = (inst_59786__$1 == null);
var inst_59788__$1 = cljs.core.not.call(null,inst_59787);
var state_59808__$1 = (function (){var statearr_59827 = state_59808;
(statearr_59827[(11)] = inst_59788__$1);

(statearr_59827[(8)] = inst_59786__$1);

return statearr_59827;
})();
if(inst_59788__$1){
var statearr_59828_59890 = state_59808__$1;
(statearr_59828_59890[(1)] = (15));

} else {
var statearr_59829_59891 = state_59808__$1;
(statearr_59829_59891[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (16))){
var inst_59788 = (state_59808[(11)]);
var state_59808__$1 = state_59808;
var statearr_59830_59892 = state_59808__$1;
(statearr_59830_59892[(2)] = inst_59788);

(statearr_59830_59892[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (10))){
var inst_59780 = (state_59808[(2)]);
var state_59808__$1 = state_59808;
var statearr_59831_59893 = state_59808__$1;
(statearr_59831_59893[(2)] = inst_59780);

(statearr_59831_59893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (18))){
var inst_59791 = (state_59808[(2)]);
var state_59808__$1 = state_59808;
var statearr_59832_59894 = state_59808__$1;
(statearr_59832_59894[(2)] = inst_59791);

(statearr_59832_59894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59809 === (8))){
var inst_59777 = cljs.core.async.close_BANG_.call(null,to);
var state_59808__$1 = state_59808;
var statearr_59833_59895 = state_59808__$1;
(statearr_59833_59895[(2)] = inst_59777);

(statearr_59833_59895[(1)] = (10));


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
});})(c__38812__auto__,jobs,results,process,async))
;
return ((function (switch__38700__auto__,c__38812__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0 = (function (){
var statearr_59837 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59837[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__);

(statearr_59837[(1)] = (1));

return statearr_59837;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1 = (function (state_59808){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_59808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e59838){if((e59838 instanceof Object)){
var ex__38704__auto__ = e59838;
var statearr_59839_59896 = state_59808;
(statearr_59839_59896[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59897 = state_59808;
state_59808 = G__59897;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__ = function(state_59808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1.call(this,state_59808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,jobs,results,process,async))
})();
var state__38814__auto__ = (function (){var statearr_59840 = f__38813__auto__.call(null);
(statearr_59840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_59840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,jobs,results,process,async))
);

return c__38812__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args59898 = [];
var len__32954__auto___59901 = arguments.length;
var i__32955__auto___59902 = (0);
while(true){
if((i__32955__auto___59902 < len__32954__auto___59901)){
args59898.push((arguments[i__32955__auto___59902]));

var G__59903 = (i__32955__auto___59902 + (1));
i__32955__auto___59902 = G__59903;
continue;
} else {
}
break;
}

var G__59900 = args59898.length;
switch (G__59900) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59898.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args59905 = [];
var len__32954__auto___59908 = arguments.length;
var i__32955__auto___59909 = (0);
while(true){
if((i__32955__auto___59909 < len__32954__auto___59908)){
args59905.push((arguments[i__32955__auto___59909]));

var G__59910 = (i__32955__auto___59909 + (1));
i__32955__auto___59909 = G__59910;
continue;
} else {
}
break;
}

var G__59907 = args59905.length;
switch (G__59907) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59905.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args59912 = [];
var len__32954__auto___59965 = arguments.length;
var i__32955__auto___59966 = (0);
while(true){
if((i__32955__auto___59966 < len__32954__auto___59965)){
args59912.push((arguments[i__32955__auto___59966]));

var G__59967 = (i__32955__auto___59966 + (1));
i__32955__auto___59966 = G__59967;
continue;
} else {
}
break;
}

var G__59914 = args59912.length;
switch (G__59914) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59912.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38812__auto___59969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___59969,tc,fc){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___59969,tc,fc){
return (function (state_59940){
var state_val_59941 = (state_59940[(1)]);
if((state_val_59941 === (7))){
var inst_59936 = (state_59940[(2)]);
var state_59940__$1 = state_59940;
var statearr_59942_59970 = state_59940__$1;
(statearr_59942_59970[(2)] = inst_59936);

(statearr_59942_59970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59941 === (1))){
var state_59940__$1 = state_59940;
var statearr_59943_59971 = state_59940__$1;
(statearr_59943_59971[(2)] = null);

(statearr_59943_59971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59941 === (4))){
var inst_59917 = (state_59940[(7)]);
var inst_59917__$1 = (state_59940[(2)]);
var inst_59918 = (inst_59917__$1 == null);
var state_59940__$1 = (function (){var statearr_59944 = state_59940;
(statearr_59944[(7)] = inst_59917__$1);

return statearr_59944;
})();
if(cljs.core.truth_(inst_59918)){
var statearr_59945_59972 = state_59940__$1;
(statearr_59945_59972[(1)] = (5));

} else {
var statearr_59946_59973 = state_59940__$1;
(statearr_59946_59973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59941 === (13))){
var state_59940__$1 = state_59940;
var statearr_59947_59974 = state_59940__$1;
(statearr_59947_59974[(2)] = null);

(statearr_59947_59974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59941 === (6))){
var inst_59917 = (state_59940[(7)]);
var inst_59923 = p.call(null,inst_59917);
var state_59940__$1 = state_59940;
if(cljs.core.truth_(inst_59923)){
var statearr_59948_59975 = state_59940__$1;
(statearr_59948_59975[(1)] = (9));

} else {
var statearr_59949_59976 = state_59940__$1;
(statearr_59949_59976[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59941 === (3))){
var inst_59938 = (state_59940[(2)]);
var state_59940__$1 = state_59940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59940__$1,inst_59938);
} else {
if((state_val_59941 === (12))){
var state_59940__$1 = state_59940;
var statearr_59950_59977 = state_59940__$1;
(statearr_59950_59977[(2)] = null);

(statearr_59950_59977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59941 === (2))){
var state_59940__$1 = state_59940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59940__$1,(4),ch);
} else {
if((state_val_59941 === (11))){
var inst_59917 = (state_59940[(7)]);
var inst_59927 = (state_59940[(2)]);
var state_59940__$1 = state_59940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59940__$1,(8),inst_59927,inst_59917);
} else {
if((state_val_59941 === (9))){
var state_59940__$1 = state_59940;
var statearr_59951_59978 = state_59940__$1;
(statearr_59951_59978[(2)] = tc);

(statearr_59951_59978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59941 === (5))){
var inst_59920 = cljs.core.async.close_BANG_.call(null,tc);
var inst_59921 = cljs.core.async.close_BANG_.call(null,fc);
var state_59940__$1 = (function (){var statearr_59952 = state_59940;
(statearr_59952[(8)] = inst_59920);

return statearr_59952;
})();
var statearr_59953_59979 = state_59940__$1;
(statearr_59953_59979[(2)] = inst_59921);

(statearr_59953_59979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59941 === (14))){
var inst_59934 = (state_59940[(2)]);
var state_59940__$1 = state_59940;
var statearr_59954_59980 = state_59940__$1;
(statearr_59954_59980[(2)] = inst_59934);

(statearr_59954_59980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59941 === (10))){
var state_59940__$1 = state_59940;
var statearr_59955_59981 = state_59940__$1;
(statearr_59955_59981[(2)] = fc);

(statearr_59955_59981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59941 === (8))){
var inst_59929 = (state_59940[(2)]);
var state_59940__$1 = state_59940;
if(cljs.core.truth_(inst_59929)){
var statearr_59956_59982 = state_59940__$1;
(statearr_59956_59982[(1)] = (12));

} else {
var statearr_59957_59983 = state_59940__$1;
(statearr_59957_59983[(1)] = (13));

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
});})(c__38812__auto___59969,tc,fc))
;
return ((function (switch__38700__auto__,c__38812__auto___59969,tc,fc){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_59961 = [null,null,null,null,null,null,null,null,null];
(statearr_59961[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_59961[(1)] = (1));

return statearr_59961;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_59940){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_59940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e59962){if((e59962 instanceof Object)){
var ex__38704__auto__ = e59962;
var statearr_59963_59984 = state_59940;
(statearr_59963_59984[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59985 = state_59940;
state_59940 = G__59985;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_59940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_59940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___59969,tc,fc))
})();
var state__38814__auto__ = (function (){var statearr_59964 = f__38813__auto__.call(null);
(statearr_59964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___59969);

return statearr_59964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___59969,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_60049){
var state_val_60050 = (state_60049[(1)]);
if((state_val_60050 === (7))){
var inst_60045 = (state_60049[(2)]);
var state_60049__$1 = state_60049;
var statearr_60051_60072 = state_60049__$1;
(statearr_60051_60072[(2)] = inst_60045);

(statearr_60051_60072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60050 === (1))){
var inst_60029 = init;
var state_60049__$1 = (function (){var statearr_60052 = state_60049;
(statearr_60052[(7)] = inst_60029);

return statearr_60052;
})();
var statearr_60053_60073 = state_60049__$1;
(statearr_60053_60073[(2)] = null);

(statearr_60053_60073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60050 === (4))){
var inst_60032 = (state_60049[(8)]);
var inst_60032__$1 = (state_60049[(2)]);
var inst_60033 = (inst_60032__$1 == null);
var state_60049__$1 = (function (){var statearr_60054 = state_60049;
(statearr_60054[(8)] = inst_60032__$1);

return statearr_60054;
})();
if(cljs.core.truth_(inst_60033)){
var statearr_60055_60074 = state_60049__$1;
(statearr_60055_60074[(1)] = (5));

} else {
var statearr_60056_60075 = state_60049__$1;
(statearr_60056_60075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60050 === (6))){
var inst_60036 = (state_60049[(9)]);
var inst_60032 = (state_60049[(8)]);
var inst_60029 = (state_60049[(7)]);
var inst_60036__$1 = f.call(null,inst_60029,inst_60032);
var inst_60037 = cljs.core.reduced_QMARK_.call(null,inst_60036__$1);
var state_60049__$1 = (function (){var statearr_60057 = state_60049;
(statearr_60057[(9)] = inst_60036__$1);

return statearr_60057;
})();
if(inst_60037){
var statearr_60058_60076 = state_60049__$1;
(statearr_60058_60076[(1)] = (8));

} else {
var statearr_60059_60077 = state_60049__$1;
(statearr_60059_60077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60050 === (3))){
var inst_60047 = (state_60049[(2)]);
var state_60049__$1 = state_60049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60049__$1,inst_60047);
} else {
if((state_val_60050 === (2))){
var state_60049__$1 = state_60049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60049__$1,(4),ch);
} else {
if((state_val_60050 === (9))){
var inst_60036 = (state_60049[(9)]);
var inst_60029 = inst_60036;
var state_60049__$1 = (function (){var statearr_60060 = state_60049;
(statearr_60060[(7)] = inst_60029);

return statearr_60060;
})();
var statearr_60061_60078 = state_60049__$1;
(statearr_60061_60078[(2)] = null);

(statearr_60061_60078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60050 === (5))){
var inst_60029 = (state_60049[(7)]);
var state_60049__$1 = state_60049;
var statearr_60062_60079 = state_60049__$1;
(statearr_60062_60079[(2)] = inst_60029);

(statearr_60062_60079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60050 === (10))){
var inst_60043 = (state_60049[(2)]);
var state_60049__$1 = state_60049;
var statearr_60063_60080 = state_60049__$1;
(statearr_60063_60080[(2)] = inst_60043);

(statearr_60063_60080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60050 === (8))){
var inst_60036 = (state_60049[(9)]);
var inst_60039 = cljs.core.deref.call(null,inst_60036);
var state_60049__$1 = state_60049;
var statearr_60064_60081 = state_60049__$1;
(statearr_60064_60081[(2)] = inst_60039);

(statearr_60064_60081[(1)] = (10));


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
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38701__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38701__auto____0 = (function (){
var statearr_60068 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60068[(0)] = cljs$core$async$reduce_$_state_machine__38701__auto__);

(statearr_60068[(1)] = (1));

return statearr_60068;
});
var cljs$core$async$reduce_$_state_machine__38701__auto____1 = (function (state_60049){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_60049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e60069){if((e60069 instanceof Object)){
var ex__38704__auto__ = e60069;
var statearr_60070_60082 = state_60049;
(statearr_60070_60082[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60083 = state_60049;
state_60049 = G__60083;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38701__auto__ = function(state_60049){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38701__auto____1.call(this,state_60049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38701__auto____0;
cljs$core$async$reduce_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38701__auto____1;
return cljs$core$async$reduce_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_60071 = f__38813__auto__.call(null);
(statearr_60071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_60071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__,f__$1){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__,f__$1){
return (function (state_60103){
var state_val_60104 = (state_60103[(1)]);
if((state_val_60104 === (1))){
var inst_60098 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_60103__$1 = state_60103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60103__$1,(2),inst_60098);
} else {
if((state_val_60104 === (2))){
var inst_60100 = (state_60103[(2)]);
var inst_60101 = f__$1.call(null,inst_60100);
var state_60103__$1 = state_60103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60103__$1,inst_60101);
} else {
return null;
}
}
});})(c__38812__auto__,f__$1))
;
return ((function (switch__38700__auto__,c__38812__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38701__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38701__auto____0 = (function (){
var statearr_60108 = [null,null,null,null,null,null,null];
(statearr_60108[(0)] = cljs$core$async$transduce_$_state_machine__38701__auto__);

(statearr_60108[(1)] = (1));

return statearr_60108;
});
var cljs$core$async$transduce_$_state_machine__38701__auto____1 = (function (state_60103){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_60103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e60109){if((e60109 instanceof Object)){
var ex__38704__auto__ = e60109;
var statearr_60110_60112 = state_60103;
(statearr_60110_60112[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60113 = state_60103;
state_60103 = G__60113;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38701__auto__ = function(state_60103){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38701__auto____1.call(this,state_60103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38701__auto____0;
cljs$core$async$transduce_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38701__auto____1;
return cljs$core$async$transduce_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__,f__$1))
})();
var state__38814__auto__ = (function (){var statearr_60111 = f__38813__auto__.call(null);
(statearr_60111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_60111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__,f__$1))
);

return c__38812__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args60114 = [];
var len__32954__auto___60166 = arguments.length;
var i__32955__auto___60167 = (0);
while(true){
if((i__32955__auto___60167 < len__32954__auto___60166)){
args60114.push((arguments[i__32955__auto___60167]));

var G__60168 = (i__32955__auto___60167 + (1));
i__32955__auto___60167 = G__60168;
continue;
} else {
}
break;
}

var G__60116 = args60114.length;
switch (G__60116) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60114.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_60141){
var state_val_60142 = (state_60141[(1)]);
if((state_val_60142 === (7))){
var inst_60123 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
var statearr_60143_60170 = state_60141__$1;
(statearr_60143_60170[(2)] = inst_60123);

(statearr_60143_60170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (1))){
var inst_60117 = cljs.core.seq.call(null,coll);
var inst_60118 = inst_60117;
var state_60141__$1 = (function (){var statearr_60144 = state_60141;
(statearr_60144[(7)] = inst_60118);

return statearr_60144;
})();
var statearr_60145_60171 = state_60141__$1;
(statearr_60145_60171[(2)] = null);

(statearr_60145_60171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (4))){
var inst_60118 = (state_60141[(7)]);
var inst_60121 = cljs.core.first.call(null,inst_60118);
var state_60141__$1 = state_60141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60141__$1,(7),ch,inst_60121);
} else {
if((state_val_60142 === (13))){
var inst_60135 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
var statearr_60146_60172 = state_60141__$1;
(statearr_60146_60172[(2)] = inst_60135);

(statearr_60146_60172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (6))){
var inst_60126 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
if(cljs.core.truth_(inst_60126)){
var statearr_60147_60173 = state_60141__$1;
(statearr_60147_60173[(1)] = (8));

} else {
var statearr_60148_60174 = state_60141__$1;
(statearr_60148_60174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (3))){
var inst_60139 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60141__$1,inst_60139);
} else {
if((state_val_60142 === (12))){
var state_60141__$1 = state_60141;
var statearr_60149_60175 = state_60141__$1;
(statearr_60149_60175[(2)] = null);

(statearr_60149_60175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (2))){
var inst_60118 = (state_60141[(7)]);
var state_60141__$1 = state_60141;
if(cljs.core.truth_(inst_60118)){
var statearr_60150_60176 = state_60141__$1;
(statearr_60150_60176[(1)] = (4));

} else {
var statearr_60151_60177 = state_60141__$1;
(statearr_60151_60177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (11))){
var inst_60132 = cljs.core.async.close_BANG_.call(null,ch);
var state_60141__$1 = state_60141;
var statearr_60152_60178 = state_60141__$1;
(statearr_60152_60178[(2)] = inst_60132);

(statearr_60152_60178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (9))){
var state_60141__$1 = state_60141;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60153_60179 = state_60141__$1;
(statearr_60153_60179[(1)] = (11));

} else {
var statearr_60154_60180 = state_60141__$1;
(statearr_60154_60180[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (5))){
var inst_60118 = (state_60141[(7)]);
var state_60141__$1 = state_60141;
var statearr_60155_60181 = state_60141__$1;
(statearr_60155_60181[(2)] = inst_60118);

(statearr_60155_60181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (10))){
var inst_60137 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
var statearr_60156_60182 = state_60141__$1;
(statearr_60156_60182[(2)] = inst_60137);

(statearr_60156_60182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (8))){
var inst_60118 = (state_60141[(7)]);
var inst_60128 = cljs.core.next.call(null,inst_60118);
var inst_60118__$1 = inst_60128;
var state_60141__$1 = (function (){var statearr_60157 = state_60141;
(statearr_60157[(7)] = inst_60118__$1);

return statearr_60157;
})();
var statearr_60158_60183 = state_60141__$1;
(statearr_60158_60183[(2)] = null);

(statearr_60158_60183[(1)] = (2));


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
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_60162 = [null,null,null,null,null,null,null,null];
(statearr_60162[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_60162[(1)] = (1));

return statearr_60162;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_60141){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_60141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e60163){if((e60163 instanceof Object)){
var ex__38704__auto__ = e60163;
var statearr_60164_60184 = state_60141;
(statearr_60164_60184[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60185 = state_60141;
state_60141 = G__60185;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_60141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_60141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_60165 = f__38813__auto__.call(null);
(statearr_60165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_60165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__32542__auto__ = (((_ == null))?null:_);
var m__32543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,_);
} else {
var m__32543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__32542__auto__ = (((m == null))?null:m);
var m__32543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__32543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__32542__auto__ = (((m == null))?null:m);
var m__32543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,m,ch);
} else {
var m__32543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__32542__auto__ = (((m == null))?null:m);
var m__32543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,m);
} else {
var m__32543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async60411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60411 = (function (mult,ch,cs,meta60412){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta60412 = meta60412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async60411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_60413,meta60412__$1){
var self__ = this;
var _60413__$1 = this;
return (new cljs.core.async.t_cljs$core$async60411(self__.mult,self__.ch,self__.cs,meta60412__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async60411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_60413){
var self__ = this;
var _60413__$1 = this;
return self__.meta60412;
});})(cs))
;


cljs.core.async.t_cljs$core$async60411.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async60411.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async60411.prototype.cljs$core$async$Mult$ = true;


cljs.core.async.t_cljs$core$async60411.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async60411.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async60411.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60411.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta60412","meta60412",1237510951,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async60411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60411";

cljs.core.async.t_cljs$core$async60411.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async60411");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async60411 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async60411(mult__$1,ch__$1,cs__$1,meta60412){
return (new cljs.core.async.t_cljs$core$async60411(mult__$1,ch__$1,cs__$1,meta60412));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async60411(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38812__auto___60636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___60636,cs,m,dchan,dctr,done){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___60636,cs,m,dchan,dctr,done){
return (function (state_60548){
var state_val_60549 = (state_60548[(1)]);
if((state_val_60549 === (7))){
var inst_60544 = (state_60548[(2)]);
var state_60548__$1 = state_60548;
var statearr_60550_60637 = state_60548__$1;
(statearr_60550_60637[(2)] = inst_60544);

(statearr_60550_60637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (20))){
var inst_60447 = (state_60548[(7)]);
var inst_60459 = cljs.core.first.call(null,inst_60447);
var inst_60460 = cljs.core.nth.call(null,inst_60459,(0),null);
var inst_60461 = cljs.core.nth.call(null,inst_60459,(1),null);
var state_60548__$1 = (function (){var statearr_60551 = state_60548;
(statearr_60551[(8)] = inst_60460);

return statearr_60551;
})();
if(cljs.core.truth_(inst_60461)){
var statearr_60552_60638 = state_60548__$1;
(statearr_60552_60638[(1)] = (22));

} else {
var statearr_60553_60639 = state_60548__$1;
(statearr_60553_60639[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (27))){
var inst_60491 = (state_60548[(9)]);
var inst_60496 = (state_60548[(10)]);
var inst_60416 = (state_60548[(11)]);
var inst_60489 = (state_60548[(12)]);
var inst_60496__$1 = cljs.core._nth.call(null,inst_60489,inst_60491);
var inst_60497 = cljs.core.async.put_BANG_.call(null,inst_60496__$1,inst_60416,done);
var state_60548__$1 = (function (){var statearr_60554 = state_60548;
(statearr_60554[(10)] = inst_60496__$1);

return statearr_60554;
})();
if(cljs.core.truth_(inst_60497)){
var statearr_60555_60640 = state_60548__$1;
(statearr_60555_60640[(1)] = (30));

} else {
var statearr_60556_60641 = state_60548__$1;
(statearr_60556_60641[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (1))){
var state_60548__$1 = state_60548;
var statearr_60557_60642 = state_60548__$1;
(statearr_60557_60642[(2)] = null);

(statearr_60557_60642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (24))){
var inst_60447 = (state_60548[(7)]);
var inst_60466 = (state_60548[(2)]);
var inst_60467 = cljs.core.next.call(null,inst_60447);
var inst_60425 = inst_60467;
var inst_60426 = null;
var inst_60427 = (0);
var inst_60428 = (0);
var state_60548__$1 = (function (){var statearr_60558 = state_60548;
(statearr_60558[(13)] = inst_60428);

(statearr_60558[(14)] = inst_60426);

(statearr_60558[(15)] = inst_60427);

(statearr_60558[(16)] = inst_60466);

(statearr_60558[(17)] = inst_60425);

return statearr_60558;
})();
var statearr_60559_60643 = state_60548__$1;
(statearr_60559_60643[(2)] = null);

(statearr_60559_60643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (39))){
var state_60548__$1 = state_60548;
var statearr_60563_60644 = state_60548__$1;
(statearr_60563_60644[(2)] = null);

(statearr_60563_60644[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (4))){
var inst_60416 = (state_60548[(11)]);
var inst_60416__$1 = (state_60548[(2)]);
var inst_60417 = (inst_60416__$1 == null);
var state_60548__$1 = (function (){var statearr_60564 = state_60548;
(statearr_60564[(11)] = inst_60416__$1);

return statearr_60564;
})();
if(cljs.core.truth_(inst_60417)){
var statearr_60565_60645 = state_60548__$1;
(statearr_60565_60645[(1)] = (5));

} else {
var statearr_60566_60646 = state_60548__$1;
(statearr_60566_60646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (15))){
var inst_60428 = (state_60548[(13)]);
var inst_60426 = (state_60548[(14)]);
var inst_60427 = (state_60548[(15)]);
var inst_60425 = (state_60548[(17)]);
var inst_60443 = (state_60548[(2)]);
var inst_60444 = (inst_60428 + (1));
var tmp60560 = inst_60426;
var tmp60561 = inst_60427;
var tmp60562 = inst_60425;
var inst_60425__$1 = tmp60562;
var inst_60426__$1 = tmp60560;
var inst_60427__$1 = tmp60561;
var inst_60428__$1 = inst_60444;
var state_60548__$1 = (function (){var statearr_60567 = state_60548;
(statearr_60567[(13)] = inst_60428__$1);

(statearr_60567[(18)] = inst_60443);

(statearr_60567[(14)] = inst_60426__$1);

(statearr_60567[(15)] = inst_60427__$1);

(statearr_60567[(17)] = inst_60425__$1);

return statearr_60567;
})();
var statearr_60568_60647 = state_60548__$1;
(statearr_60568_60647[(2)] = null);

(statearr_60568_60647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (21))){
var inst_60470 = (state_60548[(2)]);
var state_60548__$1 = state_60548;
var statearr_60572_60648 = state_60548__$1;
(statearr_60572_60648[(2)] = inst_60470);

(statearr_60572_60648[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (31))){
var inst_60496 = (state_60548[(10)]);
var inst_60500 = done.call(null,null);
var inst_60501 = cljs.core.async.untap_STAR_.call(null,m,inst_60496);
var state_60548__$1 = (function (){var statearr_60573 = state_60548;
(statearr_60573[(19)] = inst_60500);

return statearr_60573;
})();
var statearr_60574_60649 = state_60548__$1;
(statearr_60574_60649[(2)] = inst_60501);

(statearr_60574_60649[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (32))){
var inst_60488 = (state_60548[(20)]);
var inst_60491 = (state_60548[(9)]);
var inst_60490 = (state_60548[(21)]);
var inst_60489 = (state_60548[(12)]);
var inst_60503 = (state_60548[(2)]);
var inst_60504 = (inst_60491 + (1));
var tmp60569 = inst_60488;
var tmp60570 = inst_60490;
var tmp60571 = inst_60489;
var inst_60488__$1 = tmp60569;
var inst_60489__$1 = tmp60571;
var inst_60490__$1 = tmp60570;
var inst_60491__$1 = inst_60504;
var state_60548__$1 = (function (){var statearr_60575 = state_60548;
(statearr_60575[(20)] = inst_60488__$1);

(statearr_60575[(9)] = inst_60491__$1);

(statearr_60575[(21)] = inst_60490__$1);

(statearr_60575[(22)] = inst_60503);

(statearr_60575[(12)] = inst_60489__$1);

return statearr_60575;
})();
var statearr_60576_60650 = state_60548__$1;
(statearr_60576_60650[(2)] = null);

(statearr_60576_60650[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (40))){
var inst_60516 = (state_60548[(23)]);
var inst_60520 = done.call(null,null);
var inst_60521 = cljs.core.async.untap_STAR_.call(null,m,inst_60516);
var state_60548__$1 = (function (){var statearr_60577 = state_60548;
(statearr_60577[(24)] = inst_60520);

return statearr_60577;
})();
var statearr_60578_60651 = state_60548__$1;
(statearr_60578_60651[(2)] = inst_60521);

(statearr_60578_60651[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (33))){
var inst_60507 = (state_60548[(25)]);
var inst_60509 = cljs.core.chunked_seq_QMARK_.call(null,inst_60507);
var state_60548__$1 = state_60548;
if(inst_60509){
var statearr_60579_60652 = state_60548__$1;
(statearr_60579_60652[(1)] = (36));

} else {
var statearr_60580_60653 = state_60548__$1;
(statearr_60580_60653[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (13))){
var inst_60437 = (state_60548[(26)]);
var inst_60440 = cljs.core.async.close_BANG_.call(null,inst_60437);
var state_60548__$1 = state_60548;
var statearr_60581_60654 = state_60548__$1;
(statearr_60581_60654[(2)] = inst_60440);

(statearr_60581_60654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (22))){
var inst_60460 = (state_60548[(8)]);
var inst_60463 = cljs.core.async.close_BANG_.call(null,inst_60460);
var state_60548__$1 = state_60548;
var statearr_60582_60655 = state_60548__$1;
(statearr_60582_60655[(2)] = inst_60463);

(statearr_60582_60655[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (36))){
var inst_60507 = (state_60548[(25)]);
var inst_60511 = cljs.core.chunk_first.call(null,inst_60507);
var inst_60512 = cljs.core.chunk_rest.call(null,inst_60507);
var inst_60513 = cljs.core.count.call(null,inst_60511);
var inst_60488 = inst_60512;
var inst_60489 = inst_60511;
var inst_60490 = inst_60513;
var inst_60491 = (0);
var state_60548__$1 = (function (){var statearr_60583 = state_60548;
(statearr_60583[(20)] = inst_60488);

(statearr_60583[(9)] = inst_60491);

(statearr_60583[(21)] = inst_60490);

(statearr_60583[(12)] = inst_60489);

return statearr_60583;
})();
var statearr_60584_60656 = state_60548__$1;
(statearr_60584_60656[(2)] = null);

(statearr_60584_60656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (41))){
var inst_60507 = (state_60548[(25)]);
var inst_60523 = (state_60548[(2)]);
var inst_60524 = cljs.core.next.call(null,inst_60507);
var inst_60488 = inst_60524;
var inst_60489 = null;
var inst_60490 = (0);
var inst_60491 = (0);
var state_60548__$1 = (function (){var statearr_60585 = state_60548;
(statearr_60585[(20)] = inst_60488);

(statearr_60585[(9)] = inst_60491);

(statearr_60585[(27)] = inst_60523);

(statearr_60585[(21)] = inst_60490);

(statearr_60585[(12)] = inst_60489);

return statearr_60585;
})();
var statearr_60586_60657 = state_60548__$1;
(statearr_60586_60657[(2)] = null);

(statearr_60586_60657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (43))){
var state_60548__$1 = state_60548;
var statearr_60587_60658 = state_60548__$1;
(statearr_60587_60658[(2)] = null);

(statearr_60587_60658[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (29))){
var inst_60532 = (state_60548[(2)]);
var state_60548__$1 = state_60548;
var statearr_60588_60659 = state_60548__$1;
(statearr_60588_60659[(2)] = inst_60532);

(statearr_60588_60659[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (44))){
var inst_60541 = (state_60548[(2)]);
var state_60548__$1 = (function (){var statearr_60589 = state_60548;
(statearr_60589[(28)] = inst_60541);

return statearr_60589;
})();
var statearr_60590_60660 = state_60548__$1;
(statearr_60590_60660[(2)] = null);

(statearr_60590_60660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (6))){
var inst_60480 = (state_60548[(29)]);
var inst_60479 = cljs.core.deref.call(null,cs);
var inst_60480__$1 = cljs.core.keys.call(null,inst_60479);
var inst_60481 = cljs.core.count.call(null,inst_60480__$1);
var inst_60482 = cljs.core.reset_BANG_.call(null,dctr,inst_60481);
var inst_60487 = cljs.core.seq.call(null,inst_60480__$1);
var inst_60488 = inst_60487;
var inst_60489 = null;
var inst_60490 = (0);
var inst_60491 = (0);
var state_60548__$1 = (function (){var statearr_60591 = state_60548;
(statearr_60591[(20)] = inst_60488);

(statearr_60591[(9)] = inst_60491);

(statearr_60591[(21)] = inst_60490);

(statearr_60591[(29)] = inst_60480__$1);

(statearr_60591[(12)] = inst_60489);

(statearr_60591[(30)] = inst_60482);

return statearr_60591;
})();
var statearr_60592_60661 = state_60548__$1;
(statearr_60592_60661[(2)] = null);

(statearr_60592_60661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (28))){
var inst_60488 = (state_60548[(20)]);
var inst_60507 = (state_60548[(25)]);
var inst_60507__$1 = cljs.core.seq.call(null,inst_60488);
var state_60548__$1 = (function (){var statearr_60593 = state_60548;
(statearr_60593[(25)] = inst_60507__$1);

return statearr_60593;
})();
if(inst_60507__$1){
var statearr_60594_60662 = state_60548__$1;
(statearr_60594_60662[(1)] = (33));

} else {
var statearr_60595_60663 = state_60548__$1;
(statearr_60595_60663[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (25))){
var inst_60491 = (state_60548[(9)]);
var inst_60490 = (state_60548[(21)]);
var inst_60493 = (inst_60491 < inst_60490);
var inst_60494 = inst_60493;
var state_60548__$1 = state_60548;
if(cljs.core.truth_(inst_60494)){
var statearr_60596_60664 = state_60548__$1;
(statearr_60596_60664[(1)] = (27));

} else {
var statearr_60597_60665 = state_60548__$1;
(statearr_60597_60665[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (34))){
var state_60548__$1 = state_60548;
var statearr_60598_60666 = state_60548__$1;
(statearr_60598_60666[(2)] = null);

(statearr_60598_60666[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (17))){
var state_60548__$1 = state_60548;
var statearr_60599_60667 = state_60548__$1;
(statearr_60599_60667[(2)] = null);

(statearr_60599_60667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (3))){
var inst_60546 = (state_60548[(2)]);
var state_60548__$1 = state_60548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60548__$1,inst_60546);
} else {
if((state_val_60549 === (12))){
var inst_60475 = (state_60548[(2)]);
var state_60548__$1 = state_60548;
var statearr_60600_60668 = state_60548__$1;
(statearr_60600_60668[(2)] = inst_60475);

(statearr_60600_60668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (2))){
var state_60548__$1 = state_60548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60548__$1,(4),ch);
} else {
if((state_val_60549 === (23))){
var state_60548__$1 = state_60548;
var statearr_60601_60669 = state_60548__$1;
(statearr_60601_60669[(2)] = null);

(statearr_60601_60669[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (35))){
var inst_60530 = (state_60548[(2)]);
var state_60548__$1 = state_60548;
var statearr_60602_60670 = state_60548__$1;
(statearr_60602_60670[(2)] = inst_60530);

(statearr_60602_60670[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (19))){
var inst_60447 = (state_60548[(7)]);
var inst_60451 = cljs.core.chunk_first.call(null,inst_60447);
var inst_60452 = cljs.core.chunk_rest.call(null,inst_60447);
var inst_60453 = cljs.core.count.call(null,inst_60451);
var inst_60425 = inst_60452;
var inst_60426 = inst_60451;
var inst_60427 = inst_60453;
var inst_60428 = (0);
var state_60548__$1 = (function (){var statearr_60603 = state_60548;
(statearr_60603[(13)] = inst_60428);

(statearr_60603[(14)] = inst_60426);

(statearr_60603[(15)] = inst_60427);

(statearr_60603[(17)] = inst_60425);

return statearr_60603;
})();
var statearr_60604_60671 = state_60548__$1;
(statearr_60604_60671[(2)] = null);

(statearr_60604_60671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (11))){
var inst_60447 = (state_60548[(7)]);
var inst_60425 = (state_60548[(17)]);
var inst_60447__$1 = cljs.core.seq.call(null,inst_60425);
var state_60548__$1 = (function (){var statearr_60605 = state_60548;
(statearr_60605[(7)] = inst_60447__$1);

return statearr_60605;
})();
if(inst_60447__$1){
var statearr_60606_60672 = state_60548__$1;
(statearr_60606_60672[(1)] = (16));

} else {
var statearr_60607_60673 = state_60548__$1;
(statearr_60607_60673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (9))){
var inst_60477 = (state_60548[(2)]);
var state_60548__$1 = state_60548;
var statearr_60608_60674 = state_60548__$1;
(statearr_60608_60674[(2)] = inst_60477);

(statearr_60608_60674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (5))){
var inst_60423 = cljs.core.deref.call(null,cs);
var inst_60424 = cljs.core.seq.call(null,inst_60423);
var inst_60425 = inst_60424;
var inst_60426 = null;
var inst_60427 = (0);
var inst_60428 = (0);
var state_60548__$1 = (function (){var statearr_60609 = state_60548;
(statearr_60609[(13)] = inst_60428);

(statearr_60609[(14)] = inst_60426);

(statearr_60609[(15)] = inst_60427);

(statearr_60609[(17)] = inst_60425);

return statearr_60609;
})();
var statearr_60610_60675 = state_60548__$1;
(statearr_60610_60675[(2)] = null);

(statearr_60610_60675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (14))){
var state_60548__$1 = state_60548;
var statearr_60611_60676 = state_60548__$1;
(statearr_60611_60676[(2)] = null);

(statearr_60611_60676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (45))){
var inst_60538 = (state_60548[(2)]);
var state_60548__$1 = state_60548;
var statearr_60612_60677 = state_60548__$1;
(statearr_60612_60677[(2)] = inst_60538);

(statearr_60612_60677[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (26))){
var inst_60480 = (state_60548[(29)]);
var inst_60534 = (state_60548[(2)]);
var inst_60535 = cljs.core.seq.call(null,inst_60480);
var state_60548__$1 = (function (){var statearr_60613 = state_60548;
(statearr_60613[(31)] = inst_60534);

return statearr_60613;
})();
if(inst_60535){
var statearr_60614_60678 = state_60548__$1;
(statearr_60614_60678[(1)] = (42));

} else {
var statearr_60615_60679 = state_60548__$1;
(statearr_60615_60679[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (16))){
var inst_60447 = (state_60548[(7)]);
var inst_60449 = cljs.core.chunked_seq_QMARK_.call(null,inst_60447);
var state_60548__$1 = state_60548;
if(inst_60449){
var statearr_60616_60680 = state_60548__$1;
(statearr_60616_60680[(1)] = (19));

} else {
var statearr_60617_60681 = state_60548__$1;
(statearr_60617_60681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (38))){
var inst_60527 = (state_60548[(2)]);
var state_60548__$1 = state_60548;
var statearr_60618_60682 = state_60548__$1;
(statearr_60618_60682[(2)] = inst_60527);

(statearr_60618_60682[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (30))){
var state_60548__$1 = state_60548;
var statearr_60619_60683 = state_60548__$1;
(statearr_60619_60683[(2)] = null);

(statearr_60619_60683[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (10))){
var inst_60428 = (state_60548[(13)]);
var inst_60426 = (state_60548[(14)]);
var inst_60436 = cljs.core._nth.call(null,inst_60426,inst_60428);
var inst_60437 = cljs.core.nth.call(null,inst_60436,(0),null);
var inst_60438 = cljs.core.nth.call(null,inst_60436,(1),null);
var state_60548__$1 = (function (){var statearr_60620 = state_60548;
(statearr_60620[(26)] = inst_60437);

return statearr_60620;
})();
if(cljs.core.truth_(inst_60438)){
var statearr_60621_60684 = state_60548__$1;
(statearr_60621_60684[(1)] = (13));

} else {
var statearr_60622_60685 = state_60548__$1;
(statearr_60622_60685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (18))){
var inst_60473 = (state_60548[(2)]);
var state_60548__$1 = state_60548;
var statearr_60623_60686 = state_60548__$1;
(statearr_60623_60686[(2)] = inst_60473);

(statearr_60623_60686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (42))){
var state_60548__$1 = state_60548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60548__$1,(45),dchan);
} else {
if((state_val_60549 === (37))){
var inst_60416 = (state_60548[(11)]);
var inst_60507 = (state_60548[(25)]);
var inst_60516 = (state_60548[(23)]);
var inst_60516__$1 = cljs.core.first.call(null,inst_60507);
var inst_60517 = cljs.core.async.put_BANG_.call(null,inst_60516__$1,inst_60416,done);
var state_60548__$1 = (function (){var statearr_60624 = state_60548;
(statearr_60624[(23)] = inst_60516__$1);

return statearr_60624;
})();
if(cljs.core.truth_(inst_60517)){
var statearr_60625_60687 = state_60548__$1;
(statearr_60625_60687[(1)] = (39));

} else {
var statearr_60626_60688 = state_60548__$1;
(statearr_60626_60688[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60549 === (8))){
var inst_60428 = (state_60548[(13)]);
var inst_60427 = (state_60548[(15)]);
var inst_60430 = (inst_60428 < inst_60427);
var inst_60431 = inst_60430;
var state_60548__$1 = state_60548;
if(cljs.core.truth_(inst_60431)){
var statearr_60627_60689 = state_60548__$1;
(statearr_60627_60689[(1)] = (10));

} else {
var statearr_60628_60690 = state_60548__$1;
(statearr_60628_60690[(1)] = (11));

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
});})(c__38812__auto___60636,cs,m,dchan,dctr,done))
;
return ((function (switch__38700__auto__,c__38812__auto___60636,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38701__auto__ = null;
var cljs$core$async$mult_$_state_machine__38701__auto____0 = (function (){
var statearr_60632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60632[(0)] = cljs$core$async$mult_$_state_machine__38701__auto__);

(statearr_60632[(1)] = (1));

return statearr_60632;
});
var cljs$core$async$mult_$_state_machine__38701__auto____1 = (function (state_60548){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_60548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e60633){if((e60633 instanceof Object)){
var ex__38704__auto__ = e60633;
var statearr_60634_60691 = state_60548;
(statearr_60634_60691[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60692 = state_60548;
state_60548 = G__60692;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38701__auto__ = function(state_60548){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38701__auto____1.call(this,state_60548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38701__auto____0;
cljs$core$async$mult_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38701__auto____1;
return cljs$core$async$mult_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___60636,cs,m,dchan,dctr,done))
})();
var state__38814__auto__ = (function (){var statearr_60635 = f__38813__auto__.call(null);
(statearr_60635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___60636);

return statearr_60635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___60636,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args60693 = [];
var len__32954__auto___60696 = arguments.length;
var i__32955__auto___60697 = (0);
while(true){
if((i__32955__auto___60697 < len__32954__auto___60696)){
args60693.push((arguments[i__32955__auto___60697]));

var G__60698 = (i__32955__auto___60697 + (1));
i__32955__auto___60697 = G__60698;
continue;
} else {
}
break;
}

var G__60695 = args60693.length;
switch (G__60695) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60693.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__32542__auto__ = (((m == null))?null:m);
var m__32543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,m,ch);
} else {
var m__32543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__32542__auto__ = (((m == null))?null:m);
var m__32543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,m,ch);
} else {
var m__32543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__32542__auto__ = (((m == null))?null:m);
var m__32543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,m);
} else {
var m__32543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__32542__auto__ = (((m == null))?null:m);
var m__32543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,m,state_map);
} else {
var m__32543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__32542__auto__ = (((m == null))?null:m);
var m__32543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,m,mode);
} else {
var m__32543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__32961__auto__ = [];
var len__32954__auto___60710 = arguments.length;
var i__32955__auto___60711 = (0);
while(true){
if((i__32955__auto___60711 < len__32954__auto___60710)){
args__32961__auto__.push((arguments[i__32955__auto___60711]));

var G__60712 = (i__32955__auto___60711 + (1));
i__32955__auto___60711 = G__60712;
continue;
} else {
}
break;
}

var argseq__32962__auto__ = ((((3) < args__32961__auto__.length))?(new cljs.core.IndexedSeq(args__32961__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32962__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__60704){
var map__60705 = p__60704;
var map__60705__$1 = ((((!((map__60705 == null)))?((((map__60705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60705):map__60705);
var opts = map__60705__$1;
var statearr_60707_60713 = state;
(statearr_60707_60713[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__60705,map__60705__$1,opts){
return (function (val){
var statearr_60708_60714 = state;
(statearr_60708_60714[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__60705,map__60705__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_60709_60715 = state;
(statearr_60709_60715[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq60700){
var G__60701 = cljs.core.first.call(null,seq60700);
var seq60700__$1 = cljs.core.next.call(null,seq60700);
var G__60702 = cljs.core.first.call(null,seq60700__$1);
var seq60700__$2 = cljs.core.next.call(null,seq60700__$1);
var G__60703 = cljs.core.first.call(null,seq60700__$2);
var seq60700__$3 = cljs.core.next.call(null,seq60700__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60701,G__60702,G__60703,seq60700__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async60881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60881 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta60882){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta60882 = meta60882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async60881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_60883,meta60882__$1){
var self__ = this;
var _60883__$1 = this;
return (new cljs.core.async.t_cljs$core$async60881(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta60882__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async60881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_60883){
var self__ = this;
var _60883__$1 = this;
return self__.meta60882;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async60881.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async60881.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async60881.prototype.cljs$core$async$Mix$ = true;


cljs.core.async.t_cljs$core$async60881.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async60881.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async60881.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async60881.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async60881.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60881.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta60882","meta60882",1567879185,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60881";

cljs.core.async.t_cljs$core$async60881.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async60881");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async60881 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async60881(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60882){
return (new cljs.core.async.t_cljs$core$async60881(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60882));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async60881(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38812__auto___61046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___61046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___61046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_60983){
var state_val_60984 = (state_60983[(1)]);
if((state_val_60984 === (7))){
var inst_60899 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
var statearr_60985_61047 = state_60983__$1;
(statearr_60985_61047[(2)] = inst_60899);

(statearr_60985_61047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (20))){
var inst_60911 = (state_60983[(7)]);
var state_60983__$1 = state_60983;
var statearr_60986_61048 = state_60983__$1;
(statearr_60986_61048[(2)] = inst_60911);

(statearr_60986_61048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (27))){
var state_60983__$1 = state_60983;
var statearr_60987_61049 = state_60983__$1;
(statearr_60987_61049[(2)] = null);

(statearr_60987_61049[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (1))){
var inst_60887 = (state_60983[(8)]);
var inst_60887__$1 = calc_state.call(null);
var inst_60889 = (inst_60887__$1 == null);
var inst_60890 = cljs.core.not.call(null,inst_60889);
var state_60983__$1 = (function (){var statearr_60988 = state_60983;
(statearr_60988[(8)] = inst_60887__$1);

return statearr_60988;
})();
if(inst_60890){
var statearr_60989_61050 = state_60983__$1;
(statearr_60989_61050[(1)] = (2));

} else {
var statearr_60990_61051 = state_60983__$1;
(statearr_60990_61051[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (24))){
var inst_60943 = (state_60983[(9)]);
var inst_60934 = (state_60983[(10)]);
var inst_60957 = (state_60983[(11)]);
var inst_60957__$1 = inst_60934.call(null,inst_60943);
var state_60983__$1 = (function (){var statearr_60991 = state_60983;
(statearr_60991[(11)] = inst_60957__$1);

return statearr_60991;
})();
if(cljs.core.truth_(inst_60957__$1)){
var statearr_60992_61052 = state_60983__$1;
(statearr_60992_61052[(1)] = (29));

} else {
var statearr_60993_61053 = state_60983__$1;
(statearr_60993_61053[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (4))){
var inst_60902 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
if(cljs.core.truth_(inst_60902)){
var statearr_60994_61054 = state_60983__$1;
(statearr_60994_61054[(1)] = (8));

} else {
var statearr_60995_61055 = state_60983__$1;
(statearr_60995_61055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (15))){
var inst_60928 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
if(cljs.core.truth_(inst_60928)){
var statearr_60996_61056 = state_60983__$1;
(statearr_60996_61056[(1)] = (19));

} else {
var statearr_60997_61057 = state_60983__$1;
(statearr_60997_61057[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (21))){
var inst_60933 = (state_60983[(12)]);
var inst_60933__$1 = (state_60983[(2)]);
var inst_60934 = cljs.core.get.call(null,inst_60933__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60935 = cljs.core.get.call(null,inst_60933__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60936 = cljs.core.get.call(null,inst_60933__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_60983__$1 = (function (){var statearr_60998 = state_60983;
(statearr_60998[(13)] = inst_60935);

(statearr_60998[(10)] = inst_60934);

(statearr_60998[(12)] = inst_60933__$1);

return statearr_60998;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_60983__$1,(22),inst_60936);
} else {
if((state_val_60984 === (31))){
var inst_60965 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
if(cljs.core.truth_(inst_60965)){
var statearr_60999_61058 = state_60983__$1;
(statearr_60999_61058[(1)] = (32));

} else {
var statearr_61000_61059 = state_60983__$1;
(statearr_61000_61059[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (32))){
var inst_60942 = (state_60983[(14)]);
var state_60983__$1 = state_60983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60983__$1,(35),out,inst_60942);
} else {
if((state_val_60984 === (33))){
var inst_60933 = (state_60983[(12)]);
var inst_60911 = inst_60933;
var state_60983__$1 = (function (){var statearr_61001 = state_60983;
(statearr_61001[(7)] = inst_60911);

return statearr_61001;
})();
var statearr_61002_61060 = state_60983__$1;
(statearr_61002_61060[(2)] = null);

(statearr_61002_61060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (13))){
var inst_60911 = (state_60983[(7)]);
var inst_60918 = inst_60911.cljs$lang$protocol_mask$partition0$;
var inst_60919 = (inst_60918 & (64));
var inst_60920 = inst_60911.cljs$core$ISeq$;
var inst_60921 = (inst_60919) || (inst_60920);
var state_60983__$1 = state_60983;
if(cljs.core.truth_(inst_60921)){
var statearr_61003_61061 = state_60983__$1;
(statearr_61003_61061[(1)] = (16));

} else {
var statearr_61004_61062 = state_60983__$1;
(statearr_61004_61062[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (22))){
var inst_60942 = (state_60983[(14)]);
var inst_60943 = (state_60983[(9)]);
var inst_60941 = (state_60983[(2)]);
var inst_60942__$1 = cljs.core.nth.call(null,inst_60941,(0),null);
var inst_60943__$1 = cljs.core.nth.call(null,inst_60941,(1),null);
var inst_60944 = (inst_60942__$1 == null);
var inst_60945 = cljs.core._EQ_.call(null,inst_60943__$1,change);
var inst_60946 = (inst_60944) || (inst_60945);
var state_60983__$1 = (function (){var statearr_61005 = state_60983;
(statearr_61005[(14)] = inst_60942__$1);

(statearr_61005[(9)] = inst_60943__$1);

return statearr_61005;
})();
if(cljs.core.truth_(inst_60946)){
var statearr_61006_61063 = state_60983__$1;
(statearr_61006_61063[(1)] = (23));

} else {
var statearr_61007_61064 = state_60983__$1;
(statearr_61007_61064[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (36))){
var inst_60933 = (state_60983[(12)]);
var inst_60911 = inst_60933;
var state_60983__$1 = (function (){var statearr_61008 = state_60983;
(statearr_61008[(7)] = inst_60911);

return statearr_61008;
})();
var statearr_61009_61065 = state_60983__$1;
(statearr_61009_61065[(2)] = null);

(statearr_61009_61065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (29))){
var inst_60957 = (state_60983[(11)]);
var state_60983__$1 = state_60983;
var statearr_61010_61066 = state_60983__$1;
(statearr_61010_61066[(2)] = inst_60957);

(statearr_61010_61066[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (6))){
var state_60983__$1 = state_60983;
var statearr_61011_61067 = state_60983__$1;
(statearr_61011_61067[(2)] = false);

(statearr_61011_61067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (28))){
var inst_60953 = (state_60983[(2)]);
var inst_60954 = calc_state.call(null);
var inst_60911 = inst_60954;
var state_60983__$1 = (function (){var statearr_61012 = state_60983;
(statearr_61012[(15)] = inst_60953);

(statearr_61012[(7)] = inst_60911);

return statearr_61012;
})();
var statearr_61013_61068 = state_60983__$1;
(statearr_61013_61068[(2)] = null);

(statearr_61013_61068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (25))){
var inst_60979 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
var statearr_61014_61069 = state_60983__$1;
(statearr_61014_61069[(2)] = inst_60979);

(statearr_61014_61069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (34))){
var inst_60977 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
var statearr_61015_61070 = state_60983__$1;
(statearr_61015_61070[(2)] = inst_60977);

(statearr_61015_61070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (17))){
var state_60983__$1 = state_60983;
var statearr_61016_61071 = state_60983__$1;
(statearr_61016_61071[(2)] = false);

(statearr_61016_61071[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (3))){
var state_60983__$1 = state_60983;
var statearr_61017_61072 = state_60983__$1;
(statearr_61017_61072[(2)] = false);

(statearr_61017_61072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (12))){
var inst_60981 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60983__$1,inst_60981);
} else {
if((state_val_60984 === (2))){
var inst_60887 = (state_60983[(8)]);
var inst_60892 = inst_60887.cljs$lang$protocol_mask$partition0$;
var inst_60893 = (inst_60892 & (64));
var inst_60894 = inst_60887.cljs$core$ISeq$;
var inst_60895 = (inst_60893) || (inst_60894);
var state_60983__$1 = state_60983;
if(cljs.core.truth_(inst_60895)){
var statearr_61018_61073 = state_60983__$1;
(statearr_61018_61073[(1)] = (5));

} else {
var statearr_61019_61074 = state_60983__$1;
(statearr_61019_61074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (23))){
var inst_60942 = (state_60983[(14)]);
var inst_60948 = (inst_60942 == null);
var state_60983__$1 = state_60983;
if(cljs.core.truth_(inst_60948)){
var statearr_61020_61075 = state_60983__$1;
(statearr_61020_61075[(1)] = (26));

} else {
var statearr_61021_61076 = state_60983__$1;
(statearr_61021_61076[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (35))){
var inst_60968 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
if(cljs.core.truth_(inst_60968)){
var statearr_61022_61077 = state_60983__$1;
(statearr_61022_61077[(1)] = (36));

} else {
var statearr_61023_61078 = state_60983__$1;
(statearr_61023_61078[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (19))){
var inst_60911 = (state_60983[(7)]);
var inst_60930 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60911);
var state_60983__$1 = state_60983;
var statearr_61024_61079 = state_60983__$1;
(statearr_61024_61079[(2)] = inst_60930);

(statearr_61024_61079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (11))){
var inst_60911 = (state_60983[(7)]);
var inst_60915 = (inst_60911 == null);
var inst_60916 = cljs.core.not.call(null,inst_60915);
var state_60983__$1 = state_60983;
if(inst_60916){
var statearr_61025_61080 = state_60983__$1;
(statearr_61025_61080[(1)] = (13));

} else {
var statearr_61026_61081 = state_60983__$1;
(statearr_61026_61081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (9))){
var inst_60887 = (state_60983[(8)]);
var state_60983__$1 = state_60983;
var statearr_61027_61082 = state_60983__$1;
(statearr_61027_61082[(2)] = inst_60887);

(statearr_61027_61082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (5))){
var state_60983__$1 = state_60983;
var statearr_61028_61083 = state_60983__$1;
(statearr_61028_61083[(2)] = true);

(statearr_61028_61083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (14))){
var state_60983__$1 = state_60983;
var statearr_61029_61084 = state_60983__$1;
(statearr_61029_61084[(2)] = false);

(statearr_61029_61084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (26))){
var inst_60943 = (state_60983[(9)]);
var inst_60950 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_60943);
var state_60983__$1 = state_60983;
var statearr_61030_61085 = state_60983__$1;
(statearr_61030_61085[(2)] = inst_60950);

(statearr_61030_61085[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (16))){
var state_60983__$1 = state_60983;
var statearr_61031_61086 = state_60983__$1;
(statearr_61031_61086[(2)] = true);

(statearr_61031_61086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (38))){
var inst_60973 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
var statearr_61032_61087 = state_60983__$1;
(statearr_61032_61087[(2)] = inst_60973);

(statearr_61032_61087[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (30))){
var inst_60935 = (state_60983[(13)]);
var inst_60943 = (state_60983[(9)]);
var inst_60934 = (state_60983[(10)]);
var inst_60960 = cljs.core.empty_QMARK_.call(null,inst_60934);
var inst_60961 = inst_60935.call(null,inst_60943);
var inst_60962 = cljs.core.not.call(null,inst_60961);
var inst_60963 = (inst_60960) && (inst_60962);
var state_60983__$1 = state_60983;
var statearr_61033_61088 = state_60983__$1;
(statearr_61033_61088[(2)] = inst_60963);

(statearr_61033_61088[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (10))){
var inst_60887 = (state_60983[(8)]);
var inst_60907 = (state_60983[(2)]);
var inst_60908 = cljs.core.get.call(null,inst_60907,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60909 = cljs.core.get.call(null,inst_60907,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60910 = cljs.core.get.call(null,inst_60907,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_60911 = inst_60887;
var state_60983__$1 = (function (){var statearr_61034 = state_60983;
(statearr_61034[(7)] = inst_60911);

(statearr_61034[(16)] = inst_60910);

(statearr_61034[(17)] = inst_60909);

(statearr_61034[(18)] = inst_60908);

return statearr_61034;
})();
var statearr_61035_61089 = state_60983__$1;
(statearr_61035_61089[(2)] = null);

(statearr_61035_61089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (18))){
var inst_60925 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
var statearr_61036_61090 = state_60983__$1;
(statearr_61036_61090[(2)] = inst_60925);

(statearr_61036_61090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (37))){
var state_60983__$1 = state_60983;
var statearr_61037_61091 = state_60983__$1;
(statearr_61037_61091[(2)] = null);

(statearr_61037_61091[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (8))){
var inst_60887 = (state_60983[(8)]);
var inst_60904 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60887);
var state_60983__$1 = state_60983;
var statearr_61038_61092 = state_60983__$1;
(statearr_61038_61092[(2)] = inst_60904);

(statearr_61038_61092[(1)] = (10));


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
});})(c__38812__auto___61046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38700__auto__,c__38812__auto___61046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38701__auto__ = null;
var cljs$core$async$mix_$_state_machine__38701__auto____0 = (function (){
var statearr_61042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61042[(0)] = cljs$core$async$mix_$_state_machine__38701__auto__);

(statearr_61042[(1)] = (1));

return statearr_61042;
});
var cljs$core$async$mix_$_state_machine__38701__auto____1 = (function (state_60983){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_60983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e61043){if((e61043 instanceof Object)){
var ex__38704__auto__ = e61043;
var statearr_61044_61093 = state_60983;
(statearr_61044_61093[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61094 = state_60983;
state_60983 = G__61094;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38701__auto__ = function(state_60983){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38701__auto____1.call(this,state_60983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38701__auto____0;
cljs$core$async$mix_$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38701__auto____1;
return cljs$core$async$mix_$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___61046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38814__auto__ = (function (){var statearr_61045 = f__38813__auto__.call(null);
(statearr_61045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___61046);

return statearr_61045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___61046,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__32542__auto__ = (((p == null))?null:p);
var m__32543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__32543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__32542__auto__ = (((p == null))?null:p);
var m__32543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,p,v,ch);
} else {
var m__32543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args61095 = [];
var len__32954__auto___61098 = arguments.length;
var i__32955__auto___61099 = (0);
while(true){
if((i__32955__auto___61099 < len__32954__auto___61098)){
args61095.push((arguments[i__32955__auto___61099]));

var G__61100 = (i__32955__auto___61099 + (1));
i__32955__auto___61099 = G__61100;
continue;
} else {
}
break;
}

var G__61097 = args61095.length;
switch (G__61097) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61095.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__32542__auto__ = (((p == null))?null:p);
var m__32543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,p);
} else {
var m__32543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__32542__auto__ = (((p == null))?null:p);
var m__32543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32542__auto__)]);
if(!((m__32543__auto__ == null))){
return m__32543__auto__.call(null,p,v);
} else {
var m__32543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__32543__auto____$1 == null))){
return m__32543__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args61103 = [];
var len__32954__auto___61228 = arguments.length;
var i__32955__auto___61229 = (0);
while(true){
if((i__32955__auto___61229 < len__32954__auto___61228)){
args61103.push((arguments[i__32955__auto___61229]));

var G__61230 = (i__32955__auto___61229 + (1));
i__32955__auto___61229 = G__61230;
continue;
} else {
}
break;
}

var G__61105 = args61103.length;
switch (G__61105) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61103.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__31879__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__31879__auto__)){
return or__31879__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__31879__auto__,mults){
return (function (p1__61102_SHARP_){
if(cljs.core.truth_(p1__61102_SHARP_.call(null,topic))){
return p1__61102_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__61102_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__31879__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async61106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61106 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta61107){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta61107 = meta61107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async61106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_61108,meta61107__$1){
var self__ = this;
var _61108__$1 = this;
return (new cljs.core.async.t_cljs$core$async61106(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta61107__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async61106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_61108){
var self__ = this;
var _61108__$1 = this;
return self__.meta61107;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async61106.prototype.cljs$core$async$Mux$ = true;


cljs.core.async.t_cljs$core$async61106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async61106.prototype.cljs$core$async$Pub$ = true;


cljs.core.async.t_cljs$core$async61106.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async61106.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async61106.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async61106.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61106.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta61107","meta61107",-238478373,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61106";

cljs.core.async.t_cljs$core$async61106.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async61106");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async61106 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async61106(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61107){
return (new cljs.core.async.t_cljs$core$async61106(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61107));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async61106(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38812__auto___61232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___61232,mults,ensure_mult,p){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___61232,mults,ensure_mult,p){
return (function (state_61180){
var state_val_61181 = (state_61180[(1)]);
if((state_val_61181 === (7))){
var inst_61176 = (state_61180[(2)]);
var state_61180__$1 = state_61180;
var statearr_61182_61233 = state_61180__$1;
(statearr_61182_61233[(2)] = inst_61176);

(statearr_61182_61233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (20))){
var state_61180__$1 = state_61180;
var statearr_61183_61234 = state_61180__$1;
(statearr_61183_61234[(2)] = null);

(statearr_61183_61234[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (1))){
var state_61180__$1 = state_61180;
var statearr_61184_61235 = state_61180__$1;
(statearr_61184_61235[(2)] = null);

(statearr_61184_61235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (24))){
var inst_61159 = (state_61180[(7)]);
var inst_61168 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_61159);
var state_61180__$1 = state_61180;
var statearr_61185_61236 = state_61180__$1;
(statearr_61185_61236[(2)] = inst_61168);

(statearr_61185_61236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (4))){
var inst_61111 = (state_61180[(8)]);
var inst_61111__$1 = (state_61180[(2)]);
var inst_61112 = (inst_61111__$1 == null);
var state_61180__$1 = (function (){var statearr_61186 = state_61180;
(statearr_61186[(8)] = inst_61111__$1);

return statearr_61186;
})();
if(cljs.core.truth_(inst_61112)){
var statearr_61187_61237 = state_61180__$1;
(statearr_61187_61237[(1)] = (5));

} else {
var statearr_61188_61238 = state_61180__$1;
(statearr_61188_61238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (15))){
var inst_61153 = (state_61180[(2)]);
var state_61180__$1 = state_61180;
var statearr_61189_61239 = state_61180__$1;
(statearr_61189_61239[(2)] = inst_61153);

(statearr_61189_61239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (21))){
var inst_61173 = (state_61180[(2)]);
var state_61180__$1 = (function (){var statearr_61190 = state_61180;
(statearr_61190[(9)] = inst_61173);

return statearr_61190;
})();
var statearr_61191_61240 = state_61180__$1;
(statearr_61191_61240[(2)] = null);

(statearr_61191_61240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (13))){
var inst_61135 = (state_61180[(10)]);
var inst_61137 = cljs.core.chunked_seq_QMARK_.call(null,inst_61135);
var state_61180__$1 = state_61180;
if(inst_61137){
var statearr_61192_61241 = state_61180__$1;
(statearr_61192_61241[(1)] = (16));

} else {
var statearr_61193_61242 = state_61180__$1;
(statearr_61193_61242[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (22))){
var inst_61165 = (state_61180[(2)]);
var state_61180__$1 = state_61180;
if(cljs.core.truth_(inst_61165)){
var statearr_61194_61243 = state_61180__$1;
(statearr_61194_61243[(1)] = (23));

} else {
var statearr_61195_61244 = state_61180__$1;
(statearr_61195_61244[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (6))){
var inst_61159 = (state_61180[(7)]);
var inst_61161 = (state_61180[(11)]);
var inst_61111 = (state_61180[(8)]);
var inst_61159__$1 = topic_fn.call(null,inst_61111);
var inst_61160 = cljs.core.deref.call(null,mults);
var inst_61161__$1 = cljs.core.get.call(null,inst_61160,inst_61159__$1);
var state_61180__$1 = (function (){var statearr_61196 = state_61180;
(statearr_61196[(7)] = inst_61159__$1);

(statearr_61196[(11)] = inst_61161__$1);

return statearr_61196;
})();
if(cljs.core.truth_(inst_61161__$1)){
var statearr_61197_61245 = state_61180__$1;
(statearr_61197_61245[(1)] = (19));

} else {
var statearr_61198_61246 = state_61180__$1;
(statearr_61198_61246[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (25))){
var inst_61170 = (state_61180[(2)]);
var state_61180__$1 = state_61180;
var statearr_61199_61247 = state_61180__$1;
(statearr_61199_61247[(2)] = inst_61170);

(statearr_61199_61247[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (17))){
var inst_61135 = (state_61180[(10)]);
var inst_61144 = cljs.core.first.call(null,inst_61135);
var inst_61145 = cljs.core.async.muxch_STAR_.call(null,inst_61144);
var inst_61146 = cljs.core.async.close_BANG_.call(null,inst_61145);
var inst_61147 = cljs.core.next.call(null,inst_61135);
var inst_61121 = inst_61147;
var inst_61122 = null;
var inst_61123 = (0);
var inst_61124 = (0);
var state_61180__$1 = (function (){var statearr_61200 = state_61180;
(statearr_61200[(12)] = inst_61121);

(statearr_61200[(13)] = inst_61146);

(statearr_61200[(14)] = inst_61123);

(statearr_61200[(15)] = inst_61124);

(statearr_61200[(16)] = inst_61122);

return statearr_61200;
})();
var statearr_61201_61248 = state_61180__$1;
(statearr_61201_61248[(2)] = null);

(statearr_61201_61248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (3))){
var inst_61178 = (state_61180[(2)]);
var state_61180__$1 = state_61180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61180__$1,inst_61178);
} else {
if((state_val_61181 === (12))){
var inst_61155 = (state_61180[(2)]);
var state_61180__$1 = state_61180;
var statearr_61202_61249 = state_61180__$1;
(statearr_61202_61249[(2)] = inst_61155);

(statearr_61202_61249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (2))){
var state_61180__$1 = state_61180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61180__$1,(4),ch);
} else {
if((state_val_61181 === (23))){
var state_61180__$1 = state_61180;
var statearr_61203_61250 = state_61180__$1;
(statearr_61203_61250[(2)] = null);

(statearr_61203_61250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (19))){
var inst_61161 = (state_61180[(11)]);
var inst_61111 = (state_61180[(8)]);
var inst_61163 = cljs.core.async.muxch_STAR_.call(null,inst_61161);
var state_61180__$1 = state_61180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61180__$1,(22),inst_61163,inst_61111);
} else {
if((state_val_61181 === (11))){
var inst_61121 = (state_61180[(12)]);
var inst_61135 = (state_61180[(10)]);
var inst_61135__$1 = cljs.core.seq.call(null,inst_61121);
var state_61180__$1 = (function (){var statearr_61204 = state_61180;
(statearr_61204[(10)] = inst_61135__$1);

return statearr_61204;
})();
if(inst_61135__$1){
var statearr_61205_61251 = state_61180__$1;
(statearr_61205_61251[(1)] = (13));

} else {
var statearr_61206_61252 = state_61180__$1;
(statearr_61206_61252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (9))){
var inst_61157 = (state_61180[(2)]);
var state_61180__$1 = state_61180;
var statearr_61207_61253 = state_61180__$1;
(statearr_61207_61253[(2)] = inst_61157);

(statearr_61207_61253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (5))){
var inst_61118 = cljs.core.deref.call(null,mults);
var inst_61119 = cljs.core.vals.call(null,inst_61118);
var inst_61120 = cljs.core.seq.call(null,inst_61119);
var inst_61121 = inst_61120;
var inst_61122 = null;
var inst_61123 = (0);
var inst_61124 = (0);
var state_61180__$1 = (function (){var statearr_61208 = state_61180;
(statearr_61208[(12)] = inst_61121);

(statearr_61208[(14)] = inst_61123);

(statearr_61208[(15)] = inst_61124);

(statearr_61208[(16)] = inst_61122);

return statearr_61208;
})();
var statearr_61209_61254 = state_61180__$1;
(statearr_61209_61254[(2)] = null);

(statearr_61209_61254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (14))){
var state_61180__$1 = state_61180;
var statearr_61213_61255 = state_61180__$1;
(statearr_61213_61255[(2)] = null);

(statearr_61213_61255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (16))){
var inst_61135 = (state_61180[(10)]);
var inst_61139 = cljs.core.chunk_first.call(null,inst_61135);
var inst_61140 = cljs.core.chunk_rest.call(null,inst_61135);
var inst_61141 = cljs.core.count.call(null,inst_61139);
var inst_61121 = inst_61140;
var inst_61122 = inst_61139;
var inst_61123 = inst_61141;
var inst_61124 = (0);
var state_61180__$1 = (function (){var statearr_61214 = state_61180;
(statearr_61214[(12)] = inst_61121);

(statearr_61214[(14)] = inst_61123);

(statearr_61214[(15)] = inst_61124);

(statearr_61214[(16)] = inst_61122);

return statearr_61214;
})();
var statearr_61215_61256 = state_61180__$1;
(statearr_61215_61256[(2)] = null);

(statearr_61215_61256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (10))){
var inst_61121 = (state_61180[(12)]);
var inst_61123 = (state_61180[(14)]);
var inst_61124 = (state_61180[(15)]);
var inst_61122 = (state_61180[(16)]);
var inst_61129 = cljs.core._nth.call(null,inst_61122,inst_61124);
var inst_61130 = cljs.core.async.muxch_STAR_.call(null,inst_61129);
var inst_61131 = cljs.core.async.close_BANG_.call(null,inst_61130);
var inst_61132 = (inst_61124 + (1));
var tmp61210 = inst_61121;
var tmp61211 = inst_61123;
var tmp61212 = inst_61122;
var inst_61121__$1 = tmp61210;
var inst_61122__$1 = tmp61212;
var inst_61123__$1 = tmp61211;
var inst_61124__$1 = inst_61132;
var state_61180__$1 = (function (){var statearr_61216 = state_61180;
(statearr_61216[(12)] = inst_61121__$1);

(statearr_61216[(17)] = inst_61131);

(statearr_61216[(14)] = inst_61123__$1);

(statearr_61216[(15)] = inst_61124__$1);

(statearr_61216[(16)] = inst_61122__$1);

return statearr_61216;
})();
var statearr_61217_61257 = state_61180__$1;
(statearr_61217_61257[(2)] = null);

(statearr_61217_61257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (18))){
var inst_61150 = (state_61180[(2)]);
var state_61180__$1 = state_61180;
var statearr_61218_61258 = state_61180__$1;
(statearr_61218_61258[(2)] = inst_61150);

(statearr_61218_61258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61181 === (8))){
var inst_61123 = (state_61180[(14)]);
var inst_61124 = (state_61180[(15)]);
var inst_61126 = (inst_61124 < inst_61123);
var inst_61127 = inst_61126;
var state_61180__$1 = state_61180;
if(cljs.core.truth_(inst_61127)){
var statearr_61219_61259 = state_61180__$1;
(statearr_61219_61259[(1)] = (10));

} else {
var statearr_61220_61260 = state_61180__$1;
(statearr_61220_61260[(1)] = (11));

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
});})(c__38812__auto___61232,mults,ensure_mult,p))
;
return ((function (switch__38700__auto__,c__38812__auto___61232,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_61224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61224[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_61224[(1)] = (1));

return statearr_61224;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_61180){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_61180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e61225){if((e61225 instanceof Object)){
var ex__38704__auto__ = e61225;
var statearr_61226_61261 = state_61180;
(statearr_61226_61261[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61262 = state_61180;
state_61180 = G__61262;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_61180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_61180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___61232,mults,ensure_mult,p))
})();
var state__38814__auto__ = (function (){var statearr_61227 = f__38813__auto__.call(null);
(statearr_61227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___61232);

return statearr_61227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___61232,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args61263 = [];
var len__32954__auto___61266 = arguments.length;
var i__32955__auto___61267 = (0);
while(true){
if((i__32955__auto___61267 < len__32954__auto___61266)){
args61263.push((arguments[i__32955__auto___61267]));

var G__61268 = (i__32955__auto___61267 + (1));
i__32955__auto___61267 = G__61268;
continue;
} else {
}
break;
}

var G__61265 = args61263.length;
switch (G__61265) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61263.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args61270 = [];
var len__32954__auto___61273 = arguments.length;
var i__32955__auto___61274 = (0);
while(true){
if((i__32955__auto___61274 < len__32954__auto___61273)){
args61270.push((arguments[i__32955__auto___61274]));

var G__61275 = (i__32955__auto___61274 + (1));
i__32955__auto___61274 = G__61275;
continue;
} else {
}
break;
}

var G__61272 = args61270.length;
switch (G__61272) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61270.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args61277 = [];
var len__32954__auto___61348 = arguments.length;
var i__32955__auto___61349 = (0);
while(true){
if((i__32955__auto___61349 < len__32954__auto___61348)){
args61277.push((arguments[i__32955__auto___61349]));

var G__61350 = (i__32955__auto___61349 + (1));
i__32955__auto___61349 = G__61350;
continue;
} else {
}
break;
}

var G__61279 = args61277.length;
switch (G__61279) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61277.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38812__auto___61352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___61352,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___61352,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_61318){
var state_val_61319 = (state_61318[(1)]);
if((state_val_61319 === (7))){
var state_61318__$1 = state_61318;
var statearr_61320_61353 = state_61318__$1;
(statearr_61320_61353[(2)] = null);

(statearr_61320_61353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (1))){
var state_61318__$1 = state_61318;
var statearr_61321_61354 = state_61318__$1;
(statearr_61321_61354[(2)] = null);

(statearr_61321_61354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (4))){
var inst_61282 = (state_61318[(7)]);
var inst_61284 = (inst_61282 < cnt);
var state_61318__$1 = state_61318;
if(cljs.core.truth_(inst_61284)){
var statearr_61322_61355 = state_61318__$1;
(statearr_61322_61355[(1)] = (6));

} else {
var statearr_61323_61356 = state_61318__$1;
(statearr_61323_61356[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (15))){
var inst_61314 = (state_61318[(2)]);
var state_61318__$1 = state_61318;
var statearr_61324_61357 = state_61318__$1;
(statearr_61324_61357[(2)] = inst_61314);

(statearr_61324_61357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (13))){
var inst_61307 = cljs.core.async.close_BANG_.call(null,out);
var state_61318__$1 = state_61318;
var statearr_61325_61358 = state_61318__$1;
(statearr_61325_61358[(2)] = inst_61307);

(statearr_61325_61358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (6))){
var state_61318__$1 = state_61318;
var statearr_61326_61359 = state_61318__$1;
(statearr_61326_61359[(2)] = null);

(statearr_61326_61359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (3))){
var inst_61316 = (state_61318[(2)]);
var state_61318__$1 = state_61318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61318__$1,inst_61316);
} else {
if((state_val_61319 === (12))){
var inst_61304 = (state_61318[(8)]);
var inst_61304__$1 = (state_61318[(2)]);
var inst_61305 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_61304__$1);
var state_61318__$1 = (function (){var statearr_61327 = state_61318;
(statearr_61327[(8)] = inst_61304__$1);

return statearr_61327;
})();
if(cljs.core.truth_(inst_61305)){
var statearr_61328_61360 = state_61318__$1;
(statearr_61328_61360[(1)] = (13));

} else {
var statearr_61329_61361 = state_61318__$1;
(statearr_61329_61361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (2))){
var inst_61281 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_61282 = (0);
var state_61318__$1 = (function (){var statearr_61330 = state_61318;
(statearr_61330[(7)] = inst_61282);

(statearr_61330[(9)] = inst_61281);

return statearr_61330;
})();
var statearr_61331_61362 = state_61318__$1;
(statearr_61331_61362[(2)] = null);

(statearr_61331_61362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (11))){
var inst_61282 = (state_61318[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61318,(10),Object,null,(9));
var inst_61291 = chs__$1.call(null,inst_61282);
var inst_61292 = done.call(null,inst_61282);
var inst_61293 = cljs.core.async.take_BANG_.call(null,inst_61291,inst_61292);
var state_61318__$1 = state_61318;
var statearr_61332_61363 = state_61318__$1;
(statearr_61332_61363[(2)] = inst_61293);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61318__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (9))){
var inst_61282 = (state_61318[(7)]);
var inst_61295 = (state_61318[(2)]);
var inst_61296 = (inst_61282 + (1));
var inst_61282__$1 = inst_61296;
var state_61318__$1 = (function (){var statearr_61333 = state_61318;
(statearr_61333[(10)] = inst_61295);

(statearr_61333[(7)] = inst_61282__$1);

return statearr_61333;
})();
var statearr_61334_61364 = state_61318__$1;
(statearr_61334_61364[(2)] = null);

(statearr_61334_61364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (5))){
var inst_61302 = (state_61318[(2)]);
var state_61318__$1 = (function (){var statearr_61335 = state_61318;
(statearr_61335[(11)] = inst_61302);

return statearr_61335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61318__$1,(12),dchan);
} else {
if((state_val_61319 === (14))){
var inst_61304 = (state_61318[(8)]);
var inst_61309 = cljs.core.apply.call(null,f,inst_61304);
var state_61318__$1 = state_61318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61318__$1,(16),out,inst_61309);
} else {
if((state_val_61319 === (16))){
var inst_61311 = (state_61318[(2)]);
var state_61318__$1 = (function (){var statearr_61336 = state_61318;
(statearr_61336[(12)] = inst_61311);

return statearr_61336;
})();
var statearr_61337_61365 = state_61318__$1;
(statearr_61337_61365[(2)] = null);

(statearr_61337_61365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (10))){
var inst_61286 = (state_61318[(2)]);
var inst_61287 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_61318__$1 = (function (){var statearr_61338 = state_61318;
(statearr_61338[(13)] = inst_61286);

return statearr_61338;
})();
var statearr_61339_61366 = state_61318__$1;
(statearr_61339_61366[(2)] = inst_61287);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61318__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61319 === (8))){
var inst_61300 = (state_61318[(2)]);
var state_61318__$1 = state_61318;
var statearr_61340_61367 = state_61318__$1;
(statearr_61340_61367[(2)] = inst_61300);

(statearr_61340_61367[(1)] = (5));


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
});})(c__38812__auto___61352,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38700__auto__,c__38812__auto___61352,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_61344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61344[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_61344[(1)] = (1));

return statearr_61344;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_61318){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_61318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e61345){if((e61345 instanceof Object)){
var ex__38704__auto__ = e61345;
var statearr_61346_61368 = state_61318;
(statearr_61346_61368[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61369 = state_61318;
state_61318 = G__61369;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_61318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_61318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___61352,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38814__auto__ = (function (){var statearr_61347 = f__38813__auto__.call(null);
(statearr_61347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___61352);

return statearr_61347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___61352,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args61371 = [];
var len__32954__auto___61429 = arguments.length;
var i__32955__auto___61430 = (0);
while(true){
if((i__32955__auto___61430 < len__32954__auto___61429)){
args61371.push((arguments[i__32955__auto___61430]));

var G__61431 = (i__32955__auto___61430 + (1));
i__32955__auto___61430 = G__61431;
continue;
} else {
}
break;
}

var G__61373 = args61371.length;
switch (G__61373) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61371.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___61433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___61433,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___61433,out){
return (function (state_61405){
var state_val_61406 = (state_61405[(1)]);
if((state_val_61406 === (7))){
var inst_61384 = (state_61405[(7)]);
var inst_61385 = (state_61405[(8)]);
var inst_61384__$1 = (state_61405[(2)]);
var inst_61385__$1 = cljs.core.nth.call(null,inst_61384__$1,(0),null);
var inst_61386 = cljs.core.nth.call(null,inst_61384__$1,(1),null);
var inst_61387 = (inst_61385__$1 == null);
var state_61405__$1 = (function (){var statearr_61407 = state_61405;
(statearr_61407[(7)] = inst_61384__$1);

(statearr_61407[(8)] = inst_61385__$1);

(statearr_61407[(9)] = inst_61386);

return statearr_61407;
})();
if(cljs.core.truth_(inst_61387)){
var statearr_61408_61434 = state_61405__$1;
(statearr_61408_61434[(1)] = (8));

} else {
var statearr_61409_61435 = state_61405__$1;
(statearr_61409_61435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61406 === (1))){
var inst_61374 = cljs.core.vec.call(null,chs);
var inst_61375 = inst_61374;
var state_61405__$1 = (function (){var statearr_61410 = state_61405;
(statearr_61410[(10)] = inst_61375);

return statearr_61410;
})();
var statearr_61411_61436 = state_61405__$1;
(statearr_61411_61436[(2)] = null);

(statearr_61411_61436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61406 === (4))){
var inst_61375 = (state_61405[(10)]);
var state_61405__$1 = state_61405;
return cljs.core.async.ioc_alts_BANG_.call(null,state_61405__$1,(7),inst_61375);
} else {
if((state_val_61406 === (6))){
var inst_61401 = (state_61405[(2)]);
var state_61405__$1 = state_61405;
var statearr_61412_61437 = state_61405__$1;
(statearr_61412_61437[(2)] = inst_61401);

(statearr_61412_61437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61406 === (3))){
var inst_61403 = (state_61405[(2)]);
var state_61405__$1 = state_61405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61405__$1,inst_61403);
} else {
if((state_val_61406 === (2))){
var inst_61375 = (state_61405[(10)]);
var inst_61377 = cljs.core.count.call(null,inst_61375);
var inst_61378 = (inst_61377 > (0));
var state_61405__$1 = state_61405;
if(cljs.core.truth_(inst_61378)){
var statearr_61414_61438 = state_61405__$1;
(statearr_61414_61438[(1)] = (4));

} else {
var statearr_61415_61439 = state_61405__$1;
(statearr_61415_61439[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61406 === (11))){
var inst_61375 = (state_61405[(10)]);
var inst_61394 = (state_61405[(2)]);
var tmp61413 = inst_61375;
var inst_61375__$1 = tmp61413;
var state_61405__$1 = (function (){var statearr_61416 = state_61405;
(statearr_61416[(10)] = inst_61375__$1);

(statearr_61416[(11)] = inst_61394);

return statearr_61416;
})();
var statearr_61417_61440 = state_61405__$1;
(statearr_61417_61440[(2)] = null);

(statearr_61417_61440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61406 === (9))){
var inst_61385 = (state_61405[(8)]);
var state_61405__$1 = state_61405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61405__$1,(11),out,inst_61385);
} else {
if((state_val_61406 === (5))){
var inst_61399 = cljs.core.async.close_BANG_.call(null,out);
var state_61405__$1 = state_61405;
var statearr_61418_61441 = state_61405__$1;
(statearr_61418_61441[(2)] = inst_61399);

(statearr_61418_61441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61406 === (10))){
var inst_61397 = (state_61405[(2)]);
var state_61405__$1 = state_61405;
var statearr_61419_61442 = state_61405__$1;
(statearr_61419_61442[(2)] = inst_61397);

(statearr_61419_61442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61406 === (8))){
var inst_61384 = (state_61405[(7)]);
var inst_61385 = (state_61405[(8)]);
var inst_61386 = (state_61405[(9)]);
var inst_61375 = (state_61405[(10)]);
var inst_61389 = (function (){var cs = inst_61375;
var vec__61380 = inst_61384;
var v = inst_61385;
var c = inst_61386;
return ((function (cs,vec__61380,v,c,inst_61384,inst_61385,inst_61386,inst_61375,state_val_61406,c__38812__auto___61433,out){
return (function (p1__61370_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__61370_SHARP_);
});
;})(cs,vec__61380,v,c,inst_61384,inst_61385,inst_61386,inst_61375,state_val_61406,c__38812__auto___61433,out))
})();
var inst_61390 = cljs.core.filterv.call(null,inst_61389,inst_61375);
var inst_61375__$1 = inst_61390;
var state_61405__$1 = (function (){var statearr_61420 = state_61405;
(statearr_61420[(10)] = inst_61375__$1);

return statearr_61420;
})();
var statearr_61421_61443 = state_61405__$1;
(statearr_61421_61443[(2)] = null);

(statearr_61421_61443[(1)] = (2));


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
});})(c__38812__auto___61433,out))
;
return ((function (switch__38700__auto__,c__38812__auto___61433,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_61425 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61425[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_61425[(1)] = (1));

return statearr_61425;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_61405){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_61405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e61426){if((e61426 instanceof Object)){
var ex__38704__auto__ = e61426;
var statearr_61427_61444 = state_61405;
(statearr_61427_61444[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61445 = state_61405;
state_61405 = G__61445;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_61405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_61405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___61433,out))
})();
var state__38814__auto__ = (function (){var statearr_61428 = f__38813__auto__.call(null);
(statearr_61428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___61433);

return statearr_61428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___61433,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args61446 = [];
var len__32954__auto___61495 = arguments.length;
var i__32955__auto___61496 = (0);
while(true){
if((i__32955__auto___61496 < len__32954__auto___61495)){
args61446.push((arguments[i__32955__auto___61496]));

var G__61497 = (i__32955__auto___61496 + (1));
i__32955__auto___61496 = G__61497;
continue;
} else {
}
break;
}

var G__61448 = args61446.length;
switch (G__61448) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61446.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___61499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___61499,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___61499,out){
return (function (state_61472){
var state_val_61473 = (state_61472[(1)]);
if((state_val_61473 === (7))){
var inst_61454 = (state_61472[(7)]);
var inst_61454__$1 = (state_61472[(2)]);
var inst_61455 = (inst_61454__$1 == null);
var inst_61456 = cljs.core.not.call(null,inst_61455);
var state_61472__$1 = (function (){var statearr_61474 = state_61472;
(statearr_61474[(7)] = inst_61454__$1);

return statearr_61474;
})();
if(inst_61456){
var statearr_61475_61500 = state_61472__$1;
(statearr_61475_61500[(1)] = (8));

} else {
var statearr_61476_61501 = state_61472__$1;
(statearr_61476_61501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61473 === (1))){
var inst_61449 = (0);
var state_61472__$1 = (function (){var statearr_61477 = state_61472;
(statearr_61477[(8)] = inst_61449);

return statearr_61477;
})();
var statearr_61478_61502 = state_61472__$1;
(statearr_61478_61502[(2)] = null);

(statearr_61478_61502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61473 === (4))){
var state_61472__$1 = state_61472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61472__$1,(7),ch);
} else {
if((state_val_61473 === (6))){
var inst_61467 = (state_61472[(2)]);
var state_61472__$1 = state_61472;
var statearr_61479_61503 = state_61472__$1;
(statearr_61479_61503[(2)] = inst_61467);

(statearr_61479_61503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61473 === (3))){
var inst_61469 = (state_61472[(2)]);
var inst_61470 = cljs.core.async.close_BANG_.call(null,out);
var state_61472__$1 = (function (){var statearr_61480 = state_61472;
(statearr_61480[(9)] = inst_61469);

return statearr_61480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61472__$1,inst_61470);
} else {
if((state_val_61473 === (2))){
var inst_61449 = (state_61472[(8)]);
var inst_61451 = (inst_61449 < n);
var state_61472__$1 = state_61472;
if(cljs.core.truth_(inst_61451)){
var statearr_61481_61504 = state_61472__$1;
(statearr_61481_61504[(1)] = (4));

} else {
var statearr_61482_61505 = state_61472__$1;
(statearr_61482_61505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61473 === (11))){
var inst_61449 = (state_61472[(8)]);
var inst_61459 = (state_61472[(2)]);
var inst_61460 = (inst_61449 + (1));
var inst_61449__$1 = inst_61460;
var state_61472__$1 = (function (){var statearr_61483 = state_61472;
(statearr_61483[(10)] = inst_61459);

(statearr_61483[(8)] = inst_61449__$1);

return statearr_61483;
})();
var statearr_61484_61506 = state_61472__$1;
(statearr_61484_61506[(2)] = null);

(statearr_61484_61506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61473 === (9))){
var state_61472__$1 = state_61472;
var statearr_61485_61507 = state_61472__$1;
(statearr_61485_61507[(2)] = null);

(statearr_61485_61507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61473 === (5))){
var state_61472__$1 = state_61472;
var statearr_61486_61508 = state_61472__$1;
(statearr_61486_61508[(2)] = null);

(statearr_61486_61508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61473 === (10))){
var inst_61464 = (state_61472[(2)]);
var state_61472__$1 = state_61472;
var statearr_61487_61509 = state_61472__$1;
(statearr_61487_61509[(2)] = inst_61464);

(statearr_61487_61509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61473 === (8))){
var inst_61454 = (state_61472[(7)]);
var state_61472__$1 = state_61472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61472__$1,(11),out,inst_61454);
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
});})(c__38812__auto___61499,out))
;
return ((function (switch__38700__auto__,c__38812__auto___61499,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_61491 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61491[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_61491[(1)] = (1));

return statearr_61491;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_61472){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_61472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e61492){if((e61492 instanceof Object)){
var ex__38704__auto__ = e61492;
var statearr_61493_61510 = state_61472;
(statearr_61493_61510[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61511 = state_61472;
state_61472 = G__61511;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_61472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_61472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___61499,out))
})();
var state__38814__auto__ = (function (){var statearr_61494 = f__38813__auto__.call(null);
(statearr_61494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___61499);

return statearr_61494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___61499,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async61519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61519 = (function (map_LT_,f,ch,meta61520){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta61520 = meta61520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async61519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61521,meta61520__$1){
var self__ = this;
var _61521__$1 = this;
return (new cljs.core.async.t_cljs$core$async61519(self__.map_LT_,self__.f,self__.ch,meta61520__$1));
});


cljs.core.async.t_cljs$core$async61519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61521){
var self__ = this;
var _61521__$1 = this;
return self__.meta61520;
});


cljs.core.async.t_cljs$core$async61519.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async61519.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async61519.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async61519.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async61519.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async61522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61522 = (function (map_LT_,f,ch,meta61520,_,fn1,meta61523){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta61520 = meta61520;
this._ = _;
this.fn1 = fn1;
this.meta61523 = meta61523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async61522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_61524,meta61523__$1){
var self__ = this;
var _61524__$1 = this;
return (new cljs.core.async.t_cljs$core$async61522(self__.map_LT_,self__.f,self__.ch,self__.meta61520,self__._,self__.fn1,meta61523__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async61522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_61524){
var self__ = this;
var _61524__$1 = this;
return self__.meta61523;
});})(___$1))
;


cljs.core.async.t_cljs$core$async61522.prototype.cljs$core$async$impl$protocols$Handler$ = true;


cljs.core.async.t_cljs$core$async61522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async61522.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async61522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__61512_SHARP_){
return f1.call(null,(((p1__61512_SHARP_ == null))?null:self__.f.call(null,p1__61512_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async61522.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61520","meta61520",649481310,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async61519","cljs.core.async/t_cljs$core$async61519",-2127793019,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta61523","meta61523",-55331251,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61522";

cljs.core.async.t_cljs$core$async61522.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async61522");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async61522 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61522(map_LT___$1,f__$1,ch__$1,meta61520__$1,___$2,fn1__$1,meta61523){
return (new cljs.core.async.t_cljs$core$async61522(map_LT___$1,f__$1,ch__$1,meta61520__$1,___$2,fn1__$1,meta61523));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async61522(self__.map_LT_,self__.f,self__.ch,self__.meta61520,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__31867__auto__ = ret;
if(cljs.core.truth_(and__31867__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__31867__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async61519.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async61519.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async61519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61520","meta61520",649481310,null)], null);
});

cljs.core.async.t_cljs$core$async61519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61519";

cljs.core.async.t_cljs$core$async61519.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async61519");
});

cljs.core.async.__GT_t_cljs$core$async61519 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61519(map_LT___$1,f__$1,ch__$1,meta61520){
return (new cljs.core.async.t_cljs$core$async61519(map_LT___$1,f__$1,ch__$1,meta61520));
});

}

return (new cljs.core.async.t_cljs$core$async61519(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async61528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61528 = (function (map_GT_,f,ch,meta61529){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta61529 = meta61529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async61528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61530,meta61529__$1){
var self__ = this;
var _61530__$1 = this;
return (new cljs.core.async.t_cljs$core$async61528(self__.map_GT_,self__.f,self__.ch,meta61529__$1));
});


cljs.core.async.t_cljs$core$async61528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61530){
var self__ = this;
var _61530__$1 = this;
return self__.meta61529;
});


cljs.core.async.t_cljs$core$async61528.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async61528.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async61528.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async61528.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async61528.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async61528.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async61528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61529","meta61529",641093122,null)], null);
});

cljs.core.async.t_cljs$core$async61528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61528";

cljs.core.async.t_cljs$core$async61528.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async61528");
});

cljs.core.async.__GT_t_cljs$core$async61528 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async61528(map_GT___$1,f__$1,ch__$1,meta61529){
return (new cljs.core.async.t_cljs$core$async61528(map_GT___$1,f__$1,ch__$1,meta61529));
});

}

return (new cljs.core.async.t_cljs$core$async61528(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async61534 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61534 = (function (filter_GT_,p,ch,meta61535){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta61535 = meta61535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async61534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61536,meta61535__$1){
var self__ = this;
var _61536__$1 = this;
return (new cljs.core.async.t_cljs$core$async61534(self__.filter_GT_,self__.p,self__.ch,meta61535__$1));
});


cljs.core.async.t_cljs$core$async61534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61536){
var self__ = this;
var _61536__$1 = this;
return self__.meta61535;
});


cljs.core.async.t_cljs$core$async61534.prototype.cljs$core$async$impl$protocols$Channel$ = true;


cljs.core.async.t_cljs$core$async61534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async61534.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async61534.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;


cljs.core.async.t_cljs$core$async61534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async61534.prototype.cljs$core$async$impl$protocols$WritePort$ = true;


cljs.core.async.t_cljs$core$async61534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async61534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61535","meta61535",-2061247435,null)], null);
});

cljs.core.async.t_cljs$core$async61534.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61534";

cljs.core.async.t_cljs$core$async61534.cljs$lang$ctorPrWriter = (function (this__32485__auto__,writer__32486__auto__,opt__32487__auto__){
return cljs.core._write.call(null,writer__32486__auto__,"cljs.core.async/t_cljs$core$async61534");
});

cljs.core.async.__GT_t_cljs$core$async61534 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async61534(filter_GT___$1,p__$1,ch__$1,meta61535){
return (new cljs.core.async.t_cljs$core$async61534(filter_GT___$1,p__$1,ch__$1,meta61535));
});

}

return (new cljs.core.async.t_cljs$core$async61534(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args61537 = [];
var len__32954__auto___61581 = arguments.length;
var i__32955__auto___61582 = (0);
while(true){
if((i__32955__auto___61582 < len__32954__auto___61581)){
args61537.push((arguments[i__32955__auto___61582]));

var G__61583 = (i__32955__auto___61582 + (1));
i__32955__auto___61582 = G__61583;
continue;
} else {
}
break;
}

var G__61539 = args61537.length;
switch (G__61539) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61537.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___61585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___61585,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___61585,out){
return (function (state_61560){
var state_val_61561 = (state_61560[(1)]);
if((state_val_61561 === (7))){
var inst_61556 = (state_61560[(2)]);
var state_61560__$1 = state_61560;
var statearr_61562_61586 = state_61560__$1;
(statearr_61562_61586[(2)] = inst_61556);

(statearr_61562_61586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61561 === (1))){
var state_61560__$1 = state_61560;
var statearr_61563_61587 = state_61560__$1;
(statearr_61563_61587[(2)] = null);

(statearr_61563_61587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61561 === (4))){
var inst_61542 = (state_61560[(7)]);
var inst_61542__$1 = (state_61560[(2)]);
var inst_61543 = (inst_61542__$1 == null);
var state_61560__$1 = (function (){var statearr_61564 = state_61560;
(statearr_61564[(7)] = inst_61542__$1);

return statearr_61564;
})();
if(cljs.core.truth_(inst_61543)){
var statearr_61565_61588 = state_61560__$1;
(statearr_61565_61588[(1)] = (5));

} else {
var statearr_61566_61589 = state_61560__$1;
(statearr_61566_61589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61561 === (6))){
var inst_61542 = (state_61560[(7)]);
var inst_61547 = p.call(null,inst_61542);
var state_61560__$1 = state_61560;
if(cljs.core.truth_(inst_61547)){
var statearr_61567_61590 = state_61560__$1;
(statearr_61567_61590[(1)] = (8));

} else {
var statearr_61568_61591 = state_61560__$1;
(statearr_61568_61591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61561 === (3))){
var inst_61558 = (state_61560[(2)]);
var state_61560__$1 = state_61560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61560__$1,inst_61558);
} else {
if((state_val_61561 === (2))){
var state_61560__$1 = state_61560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61560__$1,(4),ch);
} else {
if((state_val_61561 === (11))){
var inst_61550 = (state_61560[(2)]);
var state_61560__$1 = state_61560;
var statearr_61569_61592 = state_61560__$1;
(statearr_61569_61592[(2)] = inst_61550);

(statearr_61569_61592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61561 === (9))){
var state_61560__$1 = state_61560;
var statearr_61570_61593 = state_61560__$1;
(statearr_61570_61593[(2)] = null);

(statearr_61570_61593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61561 === (5))){
var inst_61545 = cljs.core.async.close_BANG_.call(null,out);
var state_61560__$1 = state_61560;
var statearr_61571_61594 = state_61560__$1;
(statearr_61571_61594[(2)] = inst_61545);

(statearr_61571_61594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61561 === (10))){
var inst_61553 = (state_61560[(2)]);
var state_61560__$1 = (function (){var statearr_61572 = state_61560;
(statearr_61572[(8)] = inst_61553);

return statearr_61572;
})();
var statearr_61573_61595 = state_61560__$1;
(statearr_61573_61595[(2)] = null);

(statearr_61573_61595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61561 === (8))){
var inst_61542 = (state_61560[(7)]);
var state_61560__$1 = state_61560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61560__$1,(11),out,inst_61542);
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
});})(c__38812__auto___61585,out))
;
return ((function (switch__38700__auto__,c__38812__auto___61585,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_61577 = [null,null,null,null,null,null,null,null,null];
(statearr_61577[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_61577[(1)] = (1));

return statearr_61577;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_61560){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_61560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e61578){if((e61578 instanceof Object)){
var ex__38704__auto__ = e61578;
var statearr_61579_61596 = state_61560;
(statearr_61579_61596[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61597 = state_61560;
state_61560 = G__61597;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_61560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_61560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___61585,out))
})();
var state__38814__auto__ = (function (){var statearr_61580 = f__38813__auto__.call(null);
(statearr_61580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___61585);

return statearr_61580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___61585,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args61598 = [];
var len__32954__auto___61601 = arguments.length;
var i__32955__auto___61602 = (0);
while(true){
if((i__32955__auto___61602 < len__32954__auto___61601)){
args61598.push((arguments[i__32955__auto___61602]));

var G__61603 = (i__32955__auto___61602 + (1));
i__32955__auto___61602 = G__61603;
continue;
} else {
}
break;
}

var G__61600 = args61598.length;
switch (G__61600) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61598.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38812__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto__){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto__){
return (function (state_61770){
var state_val_61771 = (state_61770[(1)]);
if((state_val_61771 === (7))){
var inst_61766 = (state_61770[(2)]);
var state_61770__$1 = state_61770;
var statearr_61772_61813 = state_61770__$1;
(statearr_61772_61813[(2)] = inst_61766);

(statearr_61772_61813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (20))){
var inst_61736 = (state_61770[(7)]);
var inst_61747 = (state_61770[(2)]);
var inst_61748 = cljs.core.next.call(null,inst_61736);
var inst_61722 = inst_61748;
var inst_61723 = null;
var inst_61724 = (0);
var inst_61725 = (0);
var state_61770__$1 = (function (){var statearr_61773 = state_61770;
(statearr_61773[(8)] = inst_61747);

(statearr_61773[(9)] = inst_61724);

(statearr_61773[(10)] = inst_61723);

(statearr_61773[(11)] = inst_61725);

(statearr_61773[(12)] = inst_61722);

return statearr_61773;
})();
var statearr_61774_61814 = state_61770__$1;
(statearr_61774_61814[(2)] = null);

(statearr_61774_61814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (1))){
var state_61770__$1 = state_61770;
var statearr_61775_61815 = state_61770__$1;
(statearr_61775_61815[(2)] = null);

(statearr_61775_61815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (4))){
var inst_61711 = (state_61770[(13)]);
var inst_61711__$1 = (state_61770[(2)]);
var inst_61712 = (inst_61711__$1 == null);
var state_61770__$1 = (function (){var statearr_61776 = state_61770;
(statearr_61776[(13)] = inst_61711__$1);

return statearr_61776;
})();
if(cljs.core.truth_(inst_61712)){
var statearr_61777_61816 = state_61770__$1;
(statearr_61777_61816[(1)] = (5));

} else {
var statearr_61778_61817 = state_61770__$1;
(statearr_61778_61817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (15))){
var state_61770__$1 = state_61770;
var statearr_61782_61818 = state_61770__$1;
(statearr_61782_61818[(2)] = null);

(statearr_61782_61818[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (21))){
var state_61770__$1 = state_61770;
var statearr_61783_61819 = state_61770__$1;
(statearr_61783_61819[(2)] = null);

(statearr_61783_61819[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (13))){
var inst_61724 = (state_61770[(9)]);
var inst_61723 = (state_61770[(10)]);
var inst_61725 = (state_61770[(11)]);
var inst_61722 = (state_61770[(12)]);
var inst_61732 = (state_61770[(2)]);
var inst_61733 = (inst_61725 + (1));
var tmp61779 = inst_61724;
var tmp61780 = inst_61723;
var tmp61781 = inst_61722;
var inst_61722__$1 = tmp61781;
var inst_61723__$1 = tmp61780;
var inst_61724__$1 = tmp61779;
var inst_61725__$1 = inst_61733;
var state_61770__$1 = (function (){var statearr_61784 = state_61770;
(statearr_61784[(9)] = inst_61724__$1);

(statearr_61784[(10)] = inst_61723__$1);

(statearr_61784[(11)] = inst_61725__$1);

(statearr_61784[(12)] = inst_61722__$1);

(statearr_61784[(14)] = inst_61732);

return statearr_61784;
})();
var statearr_61785_61820 = state_61770__$1;
(statearr_61785_61820[(2)] = null);

(statearr_61785_61820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (22))){
var state_61770__$1 = state_61770;
var statearr_61786_61821 = state_61770__$1;
(statearr_61786_61821[(2)] = null);

(statearr_61786_61821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (6))){
var inst_61711 = (state_61770[(13)]);
var inst_61720 = f.call(null,inst_61711);
var inst_61721 = cljs.core.seq.call(null,inst_61720);
var inst_61722 = inst_61721;
var inst_61723 = null;
var inst_61724 = (0);
var inst_61725 = (0);
var state_61770__$1 = (function (){var statearr_61787 = state_61770;
(statearr_61787[(9)] = inst_61724);

(statearr_61787[(10)] = inst_61723);

(statearr_61787[(11)] = inst_61725);

(statearr_61787[(12)] = inst_61722);

return statearr_61787;
})();
var statearr_61788_61822 = state_61770__$1;
(statearr_61788_61822[(2)] = null);

(statearr_61788_61822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (17))){
var inst_61736 = (state_61770[(7)]);
var inst_61740 = cljs.core.chunk_first.call(null,inst_61736);
var inst_61741 = cljs.core.chunk_rest.call(null,inst_61736);
var inst_61742 = cljs.core.count.call(null,inst_61740);
var inst_61722 = inst_61741;
var inst_61723 = inst_61740;
var inst_61724 = inst_61742;
var inst_61725 = (0);
var state_61770__$1 = (function (){var statearr_61789 = state_61770;
(statearr_61789[(9)] = inst_61724);

(statearr_61789[(10)] = inst_61723);

(statearr_61789[(11)] = inst_61725);

(statearr_61789[(12)] = inst_61722);

return statearr_61789;
})();
var statearr_61790_61823 = state_61770__$1;
(statearr_61790_61823[(2)] = null);

(statearr_61790_61823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (3))){
var inst_61768 = (state_61770[(2)]);
var state_61770__$1 = state_61770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61770__$1,inst_61768);
} else {
if((state_val_61771 === (12))){
var inst_61756 = (state_61770[(2)]);
var state_61770__$1 = state_61770;
var statearr_61791_61824 = state_61770__$1;
(statearr_61791_61824[(2)] = inst_61756);

(statearr_61791_61824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (2))){
var state_61770__$1 = state_61770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61770__$1,(4),in$);
} else {
if((state_val_61771 === (23))){
var inst_61764 = (state_61770[(2)]);
var state_61770__$1 = state_61770;
var statearr_61792_61825 = state_61770__$1;
(statearr_61792_61825[(2)] = inst_61764);

(statearr_61792_61825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (19))){
var inst_61751 = (state_61770[(2)]);
var state_61770__$1 = state_61770;
var statearr_61793_61826 = state_61770__$1;
(statearr_61793_61826[(2)] = inst_61751);

(statearr_61793_61826[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (11))){
var inst_61722 = (state_61770[(12)]);
var inst_61736 = (state_61770[(7)]);
var inst_61736__$1 = cljs.core.seq.call(null,inst_61722);
var state_61770__$1 = (function (){var statearr_61794 = state_61770;
(statearr_61794[(7)] = inst_61736__$1);

return statearr_61794;
})();
if(inst_61736__$1){
var statearr_61795_61827 = state_61770__$1;
(statearr_61795_61827[(1)] = (14));

} else {
var statearr_61796_61828 = state_61770__$1;
(statearr_61796_61828[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (9))){
var inst_61758 = (state_61770[(2)]);
var inst_61759 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_61770__$1 = (function (){var statearr_61797 = state_61770;
(statearr_61797[(15)] = inst_61758);

return statearr_61797;
})();
if(cljs.core.truth_(inst_61759)){
var statearr_61798_61829 = state_61770__$1;
(statearr_61798_61829[(1)] = (21));

} else {
var statearr_61799_61830 = state_61770__$1;
(statearr_61799_61830[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (5))){
var inst_61714 = cljs.core.async.close_BANG_.call(null,out);
var state_61770__$1 = state_61770;
var statearr_61800_61831 = state_61770__$1;
(statearr_61800_61831[(2)] = inst_61714);

(statearr_61800_61831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (14))){
var inst_61736 = (state_61770[(7)]);
var inst_61738 = cljs.core.chunked_seq_QMARK_.call(null,inst_61736);
var state_61770__$1 = state_61770;
if(inst_61738){
var statearr_61801_61832 = state_61770__$1;
(statearr_61801_61832[(1)] = (17));

} else {
var statearr_61802_61833 = state_61770__$1;
(statearr_61802_61833[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (16))){
var inst_61754 = (state_61770[(2)]);
var state_61770__$1 = state_61770;
var statearr_61803_61834 = state_61770__$1;
(statearr_61803_61834[(2)] = inst_61754);

(statearr_61803_61834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61771 === (10))){
var inst_61723 = (state_61770[(10)]);
var inst_61725 = (state_61770[(11)]);
var inst_61730 = cljs.core._nth.call(null,inst_61723,inst_61725);
var state_61770__$1 = state_61770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61770__$1,(13),out,inst_61730);
} else {
if((state_val_61771 === (18))){
var inst_61736 = (state_61770[(7)]);
var inst_61745 = cljs.core.first.call(null,inst_61736);
var state_61770__$1 = state_61770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61770__$1,(20),out,inst_61745);
} else {
if((state_val_61771 === (8))){
var inst_61724 = (state_61770[(9)]);
var inst_61725 = (state_61770[(11)]);
var inst_61727 = (inst_61725 < inst_61724);
var inst_61728 = inst_61727;
var state_61770__$1 = state_61770;
if(cljs.core.truth_(inst_61728)){
var statearr_61804_61835 = state_61770__$1;
(statearr_61804_61835[(1)] = (10));

} else {
var statearr_61805_61836 = state_61770__$1;
(statearr_61805_61836[(1)] = (11));

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
});})(c__38812__auto__))
;
return ((function (switch__38700__auto__,c__38812__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38701__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38701__auto____0 = (function (){
var statearr_61809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61809[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38701__auto__);

(statearr_61809[(1)] = (1));

return statearr_61809;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38701__auto____1 = (function (state_61770){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_61770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e61810){if((e61810 instanceof Object)){
var ex__38704__auto__ = e61810;
var statearr_61811_61837 = state_61770;
(statearr_61811_61837[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61838 = state_61770;
state_61770 = G__61838;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38701__auto__ = function(state_61770){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38701__auto____1.call(this,state_61770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38701__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38701__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto__))
})();
var state__38814__auto__ = (function (){var statearr_61812 = f__38813__auto__.call(null);
(statearr_61812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto__);

return statearr_61812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto__))
);

return c__38812__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args61839 = [];
var len__32954__auto___61842 = arguments.length;
var i__32955__auto___61843 = (0);
while(true){
if((i__32955__auto___61843 < len__32954__auto___61842)){
args61839.push((arguments[i__32955__auto___61843]));

var G__61844 = (i__32955__auto___61843 + (1));
i__32955__auto___61843 = G__61844;
continue;
} else {
}
break;
}

var G__61841 = args61839.length;
switch (G__61841) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61839.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args61846 = [];
var len__32954__auto___61849 = arguments.length;
var i__32955__auto___61850 = (0);
while(true){
if((i__32955__auto___61850 < len__32954__auto___61849)){
args61846.push((arguments[i__32955__auto___61850]));

var G__61851 = (i__32955__auto___61850 + (1));
i__32955__auto___61850 = G__61851;
continue;
} else {
}
break;
}

var G__61848 = args61846.length;
switch (G__61848) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61846.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args61853 = [];
var len__32954__auto___61904 = arguments.length;
var i__32955__auto___61905 = (0);
while(true){
if((i__32955__auto___61905 < len__32954__auto___61904)){
args61853.push((arguments[i__32955__auto___61905]));

var G__61906 = (i__32955__auto___61905 + (1));
i__32955__auto___61905 = G__61906;
continue;
} else {
}
break;
}

var G__61855 = args61853.length;
switch (G__61855) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61853.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___61908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___61908,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___61908,out){
return (function (state_61879){
var state_val_61880 = (state_61879[(1)]);
if((state_val_61880 === (7))){
var inst_61874 = (state_61879[(2)]);
var state_61879__$1 = state_61879;
var statearr_61881_61909 = state_61879__$1;
(statearr_61881_61909[(2)] = inst_61874);

(statearr_61881_61909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61880 === (1))){
var inst_61856 = null;
var state_61879__$1 = (function (){var statearr_61882 = state_61879;
(statearr_61882[(7)] = inst_61856);

return statearr_61882;
})();
var statearr_61883_61910 = state_61879__$1;
(statearr_61883_61910[(2)] = null);

(statearr_61883_61910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61880 === (4))){
var inst_61859 = (state_61879[(8)]);
var inst_61859__$1 = (state_61879[(2)]);
var inst_61860 = (inst_61859__$1 == null);
var inst_61861 = cljs.core.not.call(null,inst_61860);
var state_61879__$1 = (function (){var statearr_61884 = state_61879;
(statearr_61884[(8)] = inst_61859__$1);

return statearr_61884;
})();
if(inst_61861){
var statearr_61885_61911 = state_61879__$1;
(statearr_61885_61911[(1)] = (5));

} else {
var statearr_61886_61912 = state_61879__$1;
(statearr_61886_61912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61880 === (6))){
var state_61879__$1 = state_61879;
var statearr_61887_61913 = state_61879__$1;
(statearr_61887_61913[(2)] = null);

(statearr_61887_61913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61880 === (3))){
var inst_61876 = (state_61879[(2)]);
var inst_61877 = cljs.core.async.close_BANG_.call(null,out);
var state_61879__$1 = (function (){var statearr_61888 = state_61879;
(statearr_61888[(9)] = inst_61876);

return statearr_61888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61879__$1,inst_61877);
} else {
if((state_val_61880 === (2))){
var state_61879__$1 = state_61879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61879__$1,(4),ch);
} else {
if((state_val_61880 === (11))){
var inst_61859 = (state_61879[(8)]);
var inst_61868 = (state_61879[(2)]);
var inst_61856 = inst_61859;
var state_61879__$1 = (function (){var statearr_61889 = state_61879;
(statearr_61889[(10)] = inst_61868);

(statearr_61889[(7)] = inst_61856);

return statearr_61889;
})();
var statearr_61890_61914 = state_61879__$1;
(statearr_61890_61914[(2)] = null);

(statearr_61890_61914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61880 === (9))){
var inst_61859 = (state_61879[(8)]);
var state_61879__$1 = state_61879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61879__$1,(11),out,inst_61859);
} else {
if((state_val_61880 === (5))){
var inst_61859 = (state_61879[(8)]);
var inst_61856 = (state_61879[(7)]);
var inst_61863 = cljs.core._EQ_.call(null,inst_61859,inst_61856);
var state_61879__$1 = state_61879;
if(inst_61863){
var statearr_61892_61915 = state_61879__$1;
(statearr_61892_61915[(1)] = (8));

} else {
var statearr_61893_61916 = state_61879__$1;
(statearr_61893_61916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61880 === (10))){
var inst_61871 = (state_61879[(2)]);
var state_61879__$1 = state_61879;
var statearr_61894_61917 = state_61879__$1;
(statearr_61894_61917[(2)] = inst_61871);

(statearr_61894_61917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61880 === (8))){
var inst_61856 = (state_61879[(7)]);
var tmp61891 = inst_61856;
var inst_61856__$1 = tmp61891;
var state_61879__$1 = (function (){var statearr_61895 = state_61879;
(statearr_61895[(7)] = inst_61856__$1);

return statearr_61895;
})();
var statearr_61896_61918 = state_61879__$1;
(statearr_61896_61918[(2)] = null);

(statearr_61896_61918[(1)] = (2));


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
});})(c__38812__auto___61908,out))
;
return ((function (switch__38700__auto__,c__38812__auto___61908,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_61900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61900[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_61900[(1)] = (1));

return statearr_61900;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_61879){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_61879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e61901){if((e61901 instanceof Object)){
var ex__38704__auto__ = e61901;
var statearr_61902_61919 = state_61879;
(statearr_61902_61919[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61920 = state_61879;
state_61879 = G__61920;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_61879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_61879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___61908,out))
})();
var state__38814__auto__ = (function (){var statearr_61903 = f__38813__auto__.call(null);
(statearr_61903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___61908);

return statearr_61903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___61908,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args61921 = [];
var len__32954__auto___61991 = arguments.length;
var i__32955__auto___61992 = (0);
while(true){
if((i__32955__auto___61992 < len__32954__auto___61991)){
args61921.push((arguments[i__32955__auto___61992]));

var G__61993 = (i__32955__auto___61992 + (1));
i__32955__auto___61992 = G__61993;
continue;
} else {
}
break;
}

var G__61923 = args61921.length;
switch (G__61923) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61921.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___61995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___61995,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___61995,out){
return (function (state_61961){
var state_val_61962 = (state_61961[(1)]);
if((state_val_61962 === (7))){
var inst_61957 = (state_61961[(2)]);
var state_61961__$1 = state_61961;
var statearr_61963_61996 = state_61961__$1;
(statearr_61963_61996[(2)] = inst_61957);

(statearr_61963_61996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61962 === (1))){
var inst_61924 = (new Array(n));
var inst_61925 = inst_61924;
var inst_61926 = (0);
var state_61961__$1 = (function (){var statearr_61964 = state_61961;
(statearr_61964[(7)] = inst_61926);

(statearr_61964[(8)] = inst_61925);

return statearr_61964;
})();
var statearr_61965_61997 = state_61961__$1;
(statearr_61965_61997[(2)] = null);

(statearr_61965_61997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61962 === (4))){
var inst_61929 = (state_61961[(9)]);
var inst_61929__$1 = (state_61961[(2)]);
var inst_61930 = (inst_61929__$1 == null);
var inst_61931 = cljs.core.not.call(null,inst_61930);
var state_61961__$1 = (function (){var statearr_61966 = state_61961;
(statearr_61966[(9)] = inst_61929__$1);

return statearr_61966;
})();
if(inst_61931){
var statearr_61967_61998 = state_61961__$1;
(statearr_61967_61998[(1)] = (5));

} else {
var statearr_61968_61999 = state_61961__$1;
(statearr_61968_61999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61962 === (15))){
var inst_61951 = (state_61961[(2)]);
var state_61961__$1 = state_61961;
var statearr_61969_62000 = state_61961__$1;
(statearr_61969_62000[(2)] = inst_61951);

(statearr_61969_62000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61962 === (13))){
var state_61961__$1 = state_61961;
var statearr_61970_62001 = state_61961__$1;
(statearr_61970_62001[(2)] = null);

(statearr_61970_62001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61962 === (6))){
var inst_61926 = (state_61961[(7)]);
var inst_61947 = (inst_61926 > (0));
var state_61961__$1 = state_61961;
if(cljs.core.truth_(inst_61947)){
var statearr_61971_62002 = state_61961__$1;
(statearr_61971_62002[(1)] = (12));

} else {
var statearr_61972_62003 = state_61961__$1;
(statearr_61972_62003[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61962 === (3))){
var inst_61959 = (state_61961[(2)]);
var state_61961__$1 = state_61961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61961__$1,inst_61959);
} else {
if((state_val_61962 === (12))){
var inst_61925 = (state_61961[(8)]);
var inst_61949 = cljs.core.vec.call(null,inst_61925);
var state_61961__$1 = state_61961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61961__$1,(15),out,inst_61949);
} else {
if((state_val_61962 === (2))){
var state_61961__$1 = state_61961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61961__$1,(4),ch);
} else {
if((state_val_61962 === (11))){
var inst_61941 = (state_61961[(2)]);
var inst_61942 = (new Array(n));
var inst_61925 = inst_61942;
var inst_61926 = (0);
var state_61961__$1 = (function (){var statearr_61973 = state_61961;
(statearr_61973[(10)] = inst_61941);

(statearr_61973[(7)] = inst_61926);

(statearr_61973[(8)] = inst_61925);

return statearr_61973;
})();
var statearr_61974_62004 = state_61961__$1;
(statearr_61974_62004[(2)] = null);

(statearr_61974_62004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61962 === (9))){
var inst_61925 = (state_61961[(8)]);
var inst_61939 = cljs.core.vec.call(null,inst_61925);
var state_61961__$1 = state_61961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61961__$1,(11),out,inst_61939);
} else {
if((state_val_61962 === (5))){
var inst_61929 = (state_61961[(9)]);
var inst_61934 = (state_61961[(11)]);
var inst_61926 = (state_61961[(7)]);
var inst_61925 = (state_61961[(8)]);
var inst_61933 = (inst_61925[inst_61926] = inst_61929);
var inst_61934__$1 = (inst_61926 + (1));
var inst_61935 = (inst_61934__$1 < n);
var state_61961__$1 = (function (){var statearr_61975 = state_61961;
(statearr_61975[(11)] = inst_61934__$1);

(statearr_61975[(12)] = inst_61933);

return statearr_61975;
})();
if(cljs.core.truth_(inst_61935)){
var statearr_61976_62005 = state_61961__$1;
(statearr_61976_62005[(1)] = (8));

} else {
var statearr_61977_62006 = state_61961__$1;
(statearr_61977_62006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61962 === (14))){
var inst_61954 = (state_61961[(2)]);
var inst_61955 = cljs.core.async.close_BANG_.call(null,out);
var state_61961__$1 = (function (){var statearr_61979 = state_61961;
(statearr_61979[(13)] = inst_61954);

return statearr_61979;
})();
var statearr_61980_62007 = state_61961__$1;
(statearr_61980_62007[(2)] = inst_61955);

(statearr_61980_62007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61962 === (10))){
var inst_61945 = (state_61961[(2)]);
var state_61961__$1 = state_61961;
var statearr_61981_62008 = state_61961__$1;
(statearr_61981_62008[(2)] = inst_61945);

(statearr_61981_62008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61962 === (8))){
var inst_61934 = (state_61961[(11)]);
var inst_61925 = (state_61961[(8)]);
var tmp61978 = inst_61925;
var inst_61925__$1 = tmp61978;
var inst_61926 = inst_61934;
var state_61961__$1 = (function (){var statearr_61982 = state_61961;
(statearr_61982[(7)] = inst_61926);

(statearr_61982[(8)] = inst_61925__$1);

return statearr_61982;
})();
var statearr_61983_62009 = state_61961__$1;
(statearr_61983_62009[(2)] = null);

(statearr_61983_62009[(1)] = (2));


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
});})(c__38812__auto___61995,out))
;
return ((function (switch__38700__auto__,c__38812__auto___61995,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_61987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61987[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_61987[(1)] = (1));

return statearr_61987;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_61961){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_61961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e61988){if((e61988 instanceof Object)){
var ex__38704__auto__ = e61988;
var statearr_61989_62010 = state_61961;
(statearr_61989_62010[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62011 = state_61961;
state_61961 = G__62011;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_61961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_61961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___61995,out))
})();
var state__38814__auto__ = (function (){var statearr_61990 = f__38813__auto__.call(null);
(statearr_61990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___61995);

return statearr_61990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___61995,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args62012 = [];
var len__32954__auto___62086 = arguments.length;
var i__32955__auto___62087 = (0);
while(true){
if((i__32955__auto___62087 < len__32954__auto___62086)){
args62012.push((arguments[i__32955__auto___62087]));

var G__62088 = (i__32955__auto___62087 + (1));
i__32955__auto___62087 = G__62088;
continue;
} else {
}
break;
}

var G__62014 = args62012.length;
switch (G__62014) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62012.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38812__auto___62090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38812__auto___62090,out){
return (function (){
var f__38813__auto__ = (function (){var switch__38700__auto__ = ((function (c__38812__auto___62090,out){
return (function (state_62056){
var state_val_62057 = (state_62056[(1)]);
if((state_val_62057 === (7))){
var inst_62052 = (state_62056[(2)]);
var state_62056__$1 = state_62056;
var statearr_62058_62091 = state_62056__$1;
(statearr_62058_62091[(2)] = inst_62052);

(statearr_62058_62091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62057 === (1))){
var inst_62015 = [];
var inst_62016 = inst_62015;
var inst_62017 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_62056__$1 = (function (){var statearr_62059 = state_62056;
(statearr_62059[(7)] = inst_62017);

(statearr_62059[(8)] = inst_62016);

return statearr_62059;
})();
var statearr_62060_62092 = state_62056__$1;
(statearr_62060_62092[(2)] = null);

(statearr_62060_62092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62057 === (4))){
var inst_62020 = (state_62056[(9)]);
var inst_62020__$1 = (state_62056[(2)]);
var inst_62021 = (inst_62020__$1 == null);
var inst_62022 = cljs.core.not.call(null,inst_62021);
var state_62056__$1 = (function (){var statearr_62061 = state_62056;
(statearr_62061[(9)] = inst_62020__$1);

return statearr_62061;
})();
if(inst_62022){
var statearr_62062_62093 = state_62056__$1;
(statearr_62062_62093[(1)] = (5));

} else {
var statearr_62063_62094 = state_62056__$1;
(statearr_62063_62094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62057 === (15))){
var inst_62046 = (state_62056[(2)]);
var state_62056__$1 = state_62056;
var statearr_62064_62095 = state_62056__$1;
(statearr_62064_62095[(2)] = inst_62046);

(statearr_62064_62095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62057 === (13))){
var state_62056__$1 = state_62056;
var statearr_62065_62096 = state_62056__$1;
(statearr_62065_62096[(2)] = null);

(statearr_62065_62096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62057 === (6))){
var inst_62016 = (state_62056[(8)]);
var inst_62041 = inst_62016.length;
var inst_62042 = (inst_62041 > (0));
var state_62056__$1 = state_62056;
if(cljs.core.truth_(inst_62042)){
var statearr_62066_62097 = state_62056__$1;
(statearr_62066_62097[(1)] = (12));

} else {
var statearr_62067_62098 = state_62056__$1;
(statearr_62067_62098[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62057 === (3))){
var inst_62054 = (state_62056[(2)]);
var state_62056__$1 = state_62056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62056__$1,inst_62054);
} else {
if((state_val_62057 === (12))){
var inst_62016 = (state_62056[(8)]);
var inst_62044 = cljs.core.vec.call(null,inst_62016);
var state_62056__$1 = state_62056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62056__$1,(15),out,inst_62044);
} else {
if((state_val_62057 === (2))){
var state_62056__$1 = state_62056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62056__$1,(4),ch);
} else {
if((state_val_62057 === (11))){
var inst_62020 = (state_62056[(9)]);
var inst_62024 = (state_62056[(10)]);
var inst_62034 = (state_62056[(2)]);
var inst_62035 = [];
var inst_62036 = inst_62035.push(inst_62020);
var inst_62016 = inst_62035;
var inst_62017 = inst_62024;
var state_62056__$1 = (function (){var statearr_62068 = state_62056;
(statearr_62068[(7)] = inst_62017);

(statearr_62068[(11)] = inst_62036);

(statearr_62068[(12)] = inst_62034);

(statearr_62068[(8)] = inst_62016);

return statearr_62068;
})();
var statearr_62069_62099 = state_62056__$1;
(statearr_62069_62099[(2)] = null);

(statearr_62069_62099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62057 === (9))){
var inst_62016 = (state_62056[(8)]);
var inst_62032 = cljs.core.vec.call(null,inst_62016);
var state_62056__$1 = state_62056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62056__$1,(11),out,inst_62032);
} else {
if((state_val_62057 === (5))){
var inst_62020 = (state_62056[(9)]);
var inst_62017 = (state_62056[(7)]);
var inst_62024 = (state_62056[(10)]);
var inst_62024__$1 = f.call(null,inst_62020);
var inst_62025 = cljs.core._EQ_.call(null,inst_62024__$1,inst_62017);
var inst_62026 = cljs.core.keyword_identical_QMARK_.call(null,inst_62017,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_62027 = (inst_62025) || (inst_62026);
var state_62056__$1 = (function (){var statearr_62070 = state_62056;
(statearr_62070[(10)] = inst_62024__$1);

return statearr_62070;
})();
if(cljs.core.truth_(inst_62027)){
var statearr_62071_62100 = state_62056__$1;
(statearr_62071_62100[(1)] = (8));

} else {
var statearr_62072_62101 = state_62056__$1;
(statearr_62072_62101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62057 === (14))){
var inst_62049 = (state_62056[(2)]);
var inst_62050 = cljs.core.async.close_BANG_.call(null,out);
var state_62056__$1 = (function (){var statearr_62074 = state_62056;
(statearr_62074[(13)] = inst_62049);

return statearr_62074;
})();
var statearr_62075_62102 = state_62056__$1;
(statearr_62075_62102[(2)] = inst_62050);

(statearr_62075_62102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62057 === (10))){
var inst_62039 = (state_62056[(2)]);
var state_62056__$1 = state_62056;
var statearr_62076_62103 = state_62056__$1;
(statearr_62076_62103[(2)] = inst_62039);

(statearr_62076_62103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62057 === (8))){
var inst_62020 = (state_62056[(9)]);
var inst_62024 = (state_62056[(10)]);
var inst_62016 = (state_62056[(8)]);
var inst_62029 = inst_62016.push(inst_62020);
var tmp62073 = inst_62016;
var inst_62016__$1 = tmp62073;
var inst_62017 = inst_62024;
var state_62056__$1 = (function (){var statearr_62077 = state_62056;
(statearr_62077[(7)] = inst_62017);

(statearr_62077[(14)] = inst_62029);

(statearr_62077[(8)] = inst_62016__$1);

return statearr_62077;
})();
var statearr_62078_62104 = state_62056__$1;
(statearr_62078_62104[(2)] = null);

(statearr_62078_62104[(1)] = (2));


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
});})(c__38812__auto___62090,out))
;
return ((function (switch__38700__auto__,c__38812__auto___62090,out){
return (function() {
var cljs$core$async$state_machine__38701__auto__ = null;
var cljs$core$async$state_machine__38701__auto____0 = (function (){
var statearr_62082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62082[(0)] = cljs$core$async$state_machine__38701__auto__);

(statearr_62082[(1)] = (1));

return statearr_62082;
});
var cljs$core$async$state_machine__38701__auto____1 = (function (state_62056){
while(true){
var ret_value__38702__auto__ = (function (){try{while(true){
var result__38703__auto__ = switch__38700__auto__.call(null,state_62056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38703__auto__;
}
break;
}
}catch (e62083){if((e62083 instanceof Object)){
var ex__38704__auto__ = e62083;
var statearr_62084_62105 = state_62056;
(statearr_62084_62105[(5)] = ex__38704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62106 = state_62056;
state_62056 = G__62106;
continue;
} else {
return ret_value__38702__auto__;
}
break;
}
});
cljs$core$async$state_machine__38701__auto__ = function(state_62056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38701__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38701__auto____1.call(this,state_62056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38701__auto____0;
cljs$core$async$state_machine__38701__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38701__auto____1;
return cljs$core$async$state_machine__38701__auto__;
})()
;})(switch__38700__auto__,c__38812__auto___62090,out))
})();
var state__38814__auto__ = (function (){var statearr_62085 = f__38813__auto__.call(null);
(statearr_62085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38812__auto___62090);

return statearr_62085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38814__auto__);
});})(c__38812__auto___62090,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489123398065